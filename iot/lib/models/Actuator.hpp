class Actuator
{
public:
    virtual void toggle() = 0;
    virtual void toggleOn() = 0;
    virtual void toggleOff() = 0;
    /// @return true if device is on/open, false if off/closed
    bool getIsActuating() { return isActuating_; };
    String getId() { return id_; };
    int getPin() { return pin_; };

protected:
    int pin_;
    String id_;
    bool isActuating_;
};
