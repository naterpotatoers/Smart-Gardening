#pragma once

class WaterSolenoidValve : Actuator
{
public:
    WaterSolenoidValve(String id, int pin)
    {
        pin_ = pin;
        id_ = id;
        isActuating_ = false;
        pinMode(pin_, OUTPUT);
    };

    void toggleOn()
    {
        isActuating_ = true;
        digitalWrite(pin_, HIGH);
    };

    void toggleOff()
    {
        isActuating_ = false;
        digitalWrite(pin_, LOW);
    };

    void toggle()
    {
        if (isActuating_)
        {
            toggleOff();
        }
        else
        {
            toggleOn();
        }
    };
};
