class I2CSensor
{
public:
    virtual void sample() = 0;
    virtual void print() = 0;
    virtual void begin() = 0;
    /// @return sensor id / name
    virtual String getId() { return id_; };
    /// @return sensor sda pin number
    virtual int getSdaPin() { return sdaPin_; };
    /// @return sensor scl pin number
    virtual int getSclPin() { return sclPin_; };
    /// @return sensor address number
    virtual int getAddress() { return address_; };

protected:
    String id_;
    int sdaPin_;
    int sclPin_;
    byte address_;
};
