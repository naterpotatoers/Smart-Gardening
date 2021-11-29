# Smart-Gardening

[Architecture and Design Documentation](https://docs.google.com/presentation/d/14ahWVzLe1tVP0NiCHFWXRo8L30mx8BH9YqG-gT3xm0o/edit?usp=sharing)

## Setup Instructions

Make sure to have node.js and npm installed. Also make sure to have ESP32 device and Raspberry Pi device and camera.

### ESP32 Setup

1. Follow directions listed [here](http://smart-garden-frontend.s3-website-us-west-2.amazonaws.com/how)

### Raspberry Pi Setup

1. Plug in RPi Camera to RPi device
2. Wire up relay using pin 21 to actuate relay and water solenoid valve
3. run iot-rpi/aws-iot-core.py code on RPi device

### Frontend Setup

1. Switch into frontend directory
2. Run the command `npm install`
3. Run the command `npm start`

### Backend Setup

1. Switch into backend directory
2. Run the command `npm install`
3. Run the command `npm run build`
4. Add necessary .env file for reading and writing from the databases
5. Run the command `npm start`

### Plant API Setup

1. Switch into Plant API directory
2. Run the command `npm install`
3. Run the command `npm start`

## Deployed Services

Frontend: http://smart-garden-frontend.s3-website-us-west-2.amazonaws.com/

Backend: http://54.190.195.163:5000/

Plant API: http://54.190.195.163:9000/
