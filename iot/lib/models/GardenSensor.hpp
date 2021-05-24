#pragma once

class GardenSensor
{
public:
    virtual void sample() = 0;
    virtual void print() = 0;
    /// @return id value
    String getId() { return id_; };
    /// @return GPIO pin value
    int getPin() { return pin_; };

protected:
    String id_;
    int pin_;
};
