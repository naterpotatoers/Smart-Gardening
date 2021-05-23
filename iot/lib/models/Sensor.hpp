class Sensor
{
public:
    virtual void sample() = 0;
    virtual void print() = 0;

    String getId() { return id_; };
    int getPin() { return pin_; };

protected:
    String id_;
    int pin_;
};
