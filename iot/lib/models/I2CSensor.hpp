#pragma once

class I2CSensor
{
public:
    virtual void sample() = 0;
    virtual void print() = 0;
    virtual void begin() = 0;
    /// @return id value
    String getId() { return id_; };
    /// @return I2C start address value
    byte getAddress() { return address_; };
    /// @return SDA pin value
    int getSdaPin() { return sdaPin_; };
    /// @return SCL pin value
    int getSclPin() { return sclPin_; };

protected:
    String id_;
    byte address_;
    int sdaPin_;
    int sclPin_;
};
