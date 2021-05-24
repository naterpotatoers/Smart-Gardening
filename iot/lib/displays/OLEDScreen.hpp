#pragma once
#include "I2CSensor.hpp"

class OLEDScreen : public I2CSensor
{
public:
    OLEDScreen(){};

    void sample() {}

    void begin(){};

    void print(){};

private:
};
