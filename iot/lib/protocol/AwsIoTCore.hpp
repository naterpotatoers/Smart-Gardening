// https : //aws.amazon.com/blogs/compute/building-an-aws-iot-core-device-using-aws-serverless-and-an-esp32/
#include "secrets.hpp"
#include <ArduinoJson.h>
#include <WiFiClientSecure.h>
#include <MQTTClient.h>

#include "WiFi.h"

class AwsIoTCore : public MQTT
{
public:
    AwsIoTCore()
    {
        network_ = WiFiClientSecure();
        client_ = MQTTClient(256);
    };

    void connect()
    {
        wifiConnect();
        mqttConnect();
    }

    void publish()
    {
        StaticJsonDocument<200> doc;
        doc["time"] = millis();
        doc["sensor_a0"] = analogRead(0);
        char jsonBuffer[512];
        serializeJson(doc, jsonBuffer); // print to client

        client_.publish(publishTopic_, jsonBuffer);
    }

    void response()
    {
        Serial.println("incoming: " + topic + " - " + payload);
    }

private:
    void wifiConnect()
    {
        Serial.println("Connecting to WiFi");
        WiFi.mode(WIFI_STA);
        WiFi.begin(kWifiSSID, kWifiPassword);
        while (WiFi.status() != WL_CONNECTED)
        {
            delay(500);
            Serial.print(".");
        }
    }
    // Configure WiFiClientSecure to use the AWS IoT device credentials
    void mqttConnect()
    {

        network_.setCACert(AWS_CERT_CA);
        network_.setCertificate(AWS_CERT_CRT);
        network_.setPrivateKey(AWS_CERT_PRIVATE);

        // Connect to MQTT broker using AWS endpoint
        client_.begin(kAwsIotCoreEndpoint, 8883, network_);
        // Create a message handler
        client_.onMessage(response);

        Serial.print("Connecting to AWS IOT");

        while (!client_.connect(THINGNAME))
        {
            Serial.print(".");
            delay(100);
        }

        if (!client_.connected())
        {
            Serial.println("AWS IoT Timeout!");
            return;
        }

        // Subscribe to a topic
        client_.subscribe(subscribeTopic_);

        Serial.println("AWS IoT Connected!");
    }
    MQTTClient client_;
    WiFiClientSecure network_;
    String publishTopic_ = "esp32/pub";
    String subscribeTopic_ = "esp32/sub";
};
