#pragma once

#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 64
Adafruit_SSD1306 display_(SCREEN_WIDTH, SCREEN_HEIGHT);

class OLEDScreen : public I2CSensor
{
public:
    OLEDScreen(String id, int sdaPin, int sclPin, byte address)
    {
        id_ = id;
        sdaPin_ = sdaPin;
        sclPin_ = sclPin;
        address_ = address;
        // display_(screenWidth_, screenHeight_);
        // display_.begin(SSD1306_SWITCHCAPVCC, 0x3C);
    };

    void sample() {}

    void begin()
    {
        display_.begin();
    };

    void print()
    {
        display_.clearDisplay();
        display_.setTextColor(WHITE);
        display_.setTextSize(1);
        display_.setCursor(0, 0);
        display_.print("Current Status");
        // display_.setCursor(0, 10);
        // display_.print("Humidity:\t10");
        // display_.setCursor(0, 20);
        // display_.print("Temperature:\t20");
        // display_.setCursor(0, 30);
        // display_.print("Soil Moisture:\t30");
    };

private:
    int screenWidth_ = 128;
    int screenHeight_ = 64;
    String humidity_;
    String temperature_;
    String soilMoisture_;
};
