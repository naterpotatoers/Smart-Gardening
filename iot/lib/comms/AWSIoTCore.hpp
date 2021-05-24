#pragma once

#include <WiFiClientSecure.h>
#include <MQTTClient.h>

class AwsIoTCore
{
public:
    AwsIoTCore()
    {
        net_ = WiFiClientSecure();
        client_ = MQTTClient(256);
        net_.setCACert(AWS_CERT_CA);
        net_.setCertificate(AWS_CERT_CRT);
        net_.setPrivateKey(AWS_CERT_PRIVATE);
    }
    /// Sets up MQTT logic & connects device to AWS IoT Core
    void setup()
    {
        client_.begin(AWS_IOT_ENDPOINT, AWS_MQTT_PORT, net_);
        client_.onMessage(messageReceived);
        connect();
    }

    /// Displays subscribed AWS IoT Core messages
    static void messageReceived(String &topic, String &payload)
    {
        Serial.println("Incoming: " + topic + " - " + payload);
    }

    /// Sends a message to AWS IoT Core
    void publishMessage(String jsonMessage)
    {
        Serial.println("Publishing to AWS IoT Core...");
        client_.publish(AWS_PUBLISH_TOPIC, jsonMessage);
    }

    /// Verifies device is still connected to AWS IoT Core
    bool isConnected()
    {
        return client_.loop();
    }

private:
    /// Connects device to AWS IoT Core
    void connect()
    {
        Serial.println("Connecting to AWS IoT Core");
        while (!client_.connect(THINGNAME))
        {
            Serial.print(".");
            delay(500);
        }

        if (!client_.connected())
        {
            Serial.println("Unable to connect to AWS IoT Core!");
            return;
        }

        client_.subscribe(AWS_SUBSCRIBE_TOPIC);
        Serial.println("Connected to AWS IoT Core!");
    }

    WiFiClientSecure net_;
    MQTTClient client_;
};