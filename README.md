# Smart-Gardening

[Architecture and Design Documentation](https://docs.google.com/presentation/d/14ahWVzLe1tVP0NiCHFWXRo8L30mx8BH9YqG-gT3xm0o/edit?usp=sharing)

[Video Demo](https://www.youtube.com/watch?v=RLs6bitMUAE)

[Project Report](https://docs.google.com/document/d/1FnsnlgTGP__GboWl5KBrWv6UGs8V7jg8/edit?usp=sharing&ouid=101431705313288909254&rtpof=true&sd=true)

## Setup Instructions

Make sure to have node.js (v14.17+) and npm (v6.14+) installed. Also make sure to have ESP32 device and Raspberry Pi device and camera. These steps require the downloading of the repository code onto your machine.

### ESP32 Setup

1. Follow directions listed [here](http://smart-garden-frontend.s3-website-us-west-2.amazonaws.com/how)

### Raspberry Pi Setup

1. Plug in RPi Camera to RPi device
2. Wire up relay using pin 21 to actuate relay and water solenoid valve
3. Clone this repo onto RPi device `git clone https://github.com/naterpotatoers/Smart-Gardening.git`
4. Switch into iot-rpi directory
5. Run the command on RPi device `python3 aws-iot-core.py`

### Frontend Setup

1. Switch into frontend directory
2. Run the command `npm install`
3. Run the command `npm start`

### Backend Setup

1. Switch into backend directory
2. Run the command `npm install`
3. Run the command `npm run build`
4. Add necessary .env file for reading and writing from the databases (should be included with file already)
5. Run the command `npm start`

### Plant API Setup

1. Switch into Plant API directory
2. Run the command `npm install`
3. Run the command `npm start`

## Deployed Services

Frontend: http://smart-garden-frontend.s3-website-us-west-2.amazonaws.com/

Backend: http://54.190.195.163:5000/

Plant API: http://54.190.195.163:9000/
