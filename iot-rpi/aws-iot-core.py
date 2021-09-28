# Initial draft of AWS IoT Core code for Raspberry Pi
import time
import json

import RPi.GPIO as GPIO
from AWSIoTPythonSDK.MQTTLib import AWSIoTMQTTClient
import Adafruit_ADS1x15

import secrets

# Reads soil moisture from ads1115 analog inputs
def readSoilMoisture():
    adc = Adafruit_ADS1x15.ADS1115()
    GAIN = 1
    adc.start_adc(0, gain = GAIN)
    a0 = adc.read_adc(0, gain=GAIN)
    a1 = adc.read_adc(1, gain=GAIN)
    adc.stop_adc()
    analog_readings = [a0, a1]
    return analog_readings

def takePicture():
    print("taking picture")

def waterPlants():
    print("watering plants")
    
# An example subscribe topic for AWS IoT Core
def exampleSubscribeFunction(self, params, packet):
    print('Received message from AWS IoT Core')
    print('Topic: ' + packet.topic)
    print("Payload: ", (packet.payload))
    packetPayloadJSON = json.loads(packet.payload)
    print(packetPayloadJSON)
    if(packetPayloadJSON["takePicture"]):
        takePicture()
    if(packetPayloadJSON["waterPlants"]):
        waterPlants()

def activateBlinkMode(self, params, packet):
    print("Blink mode called!")

# GPIO.setwarnings(False)
# GPIO.setmode(GPIO.BCM)
# GPIO.setup(21, GPIO.OUT)

# if __name__ == '__main__':
#         while True:
#                 print("Turning pin HIGH")
#                 GPIO.output(21,GPIO.HIGH)
#                 time.sleep(2)
#                 print("Turning pin LOW")
#                 GPIO.output(21, GPIO.LOW)
#                 time.sleep(2)



myMQTTClient = AWSIoTMQTTClient("NatesId")
myMQTTClient.configureEndpoint(secrets.aws_endpoint, 8883)

myMQTTClient.configureCredentials("./root-ca.pem", "./private.pem.key", "./certificate.pem.crt")

myMQTTClient.configureOfflinePublishQueueing(-1)
myMQTTClient.configureDrainingFrequency(2)  
myMQTTClient.configureConnectDisconnectTimeout(10)  
myMQTTClient.configureMQTTOperationTimeout(5) 
print('Initiating realtime data transfer from Raspberry Pi...')
myMQTTClient.connect()

print("Subscribing to a topic")
myMQTTClient.subscribe("topic/sensors", 1, exampleSubscribeFunction)
while True:
    time.sleep(5)

sensor_data = readSoilMoisture()

payload = {
    "sensor_name": "Raspberry Pi 4",
    "user_name": "naters",
    "farm_name": "nates tomato farm",
    "a0": sensor_data[0],
    "a1": sensor_data[1]
}

payload_json = json.dumps(payload)

print("Publishing message from Raspberry Pi 4")
myMQTTClient.publish(
    topic="topic/sensors",
    QoS=1,
    payload= payload_json
)
