class I2C
{
public:
    virtual void sample() = 0;
    virtual void print() = 0;
    virtual void begin() = 0;

    String getId() { return id_; };
    byte getAddress() { return address_; };
    int getSdaPin() { return sdaPin_; };
    int getSclPin() { return sclPin_; };

protected:
    String id_;
    byte address_;
    int sdaPin_;
    int sclPin_;
};
