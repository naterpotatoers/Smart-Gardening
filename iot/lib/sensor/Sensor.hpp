class Sensor
{
public:
    virtual void sample() = 0;
    virtual void print() = 0;
    /// @return sensor id / name
    virtual String getId() { return id_; };
    /// @return sensor pin number
    virtual int getPin() { return pin_; };

protected:
    int pin_;
    String id_;
};
