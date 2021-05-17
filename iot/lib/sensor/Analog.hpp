class Analog
{

public:
    /// Samples the sensor data
    /// @return the sensor reading
    double getSensorData();

    /// Nicely formatted logging statement
    void printValue()
    {
        Serial.println(id_ + " value: " + value_);
    }

protected:
    /// Converts sensor reading into acceptable format
    /// @param value a raw data integer
    /// @return a whole number
    double convertData(double value);

    int pin_;
    double value_;
    String id_;
};
