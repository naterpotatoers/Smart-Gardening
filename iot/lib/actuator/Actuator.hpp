#pragma once

class Actuator
{
public:
    virtual void toggle() = 0;
    virtual void toggleOn() = 0;
    virtual void toggleOff() = 0;
    /// @return true if device is actuating, false if off
    virtual bool isActuating() { return isActuating_; };
    /// @return sensor id / name
    virtual String getId() { return id_; };
    /// @return sensor pin number
    virtual int getPin() { return pin_; };

protected:
    int pin_;
    String id_;
    bool isActuating_;
};
