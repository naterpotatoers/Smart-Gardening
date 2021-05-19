#pragma once

class MQTT
{
public:
    virtual void connect() = 0;
    virtual void publish() = 0;
    virtual void subscribe() = 0;
    virtual void response() = 0;
};
