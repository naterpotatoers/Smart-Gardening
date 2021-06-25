#ifndef SECRETS
#define SECRETS

// AWS IoT Device Unique Name
const char THINGNAME[] = "";

// WiFi Gateway Name
const char WIFI_SSID[] = "";
const char WIFI_PASSWORD[] = "";

// AWS IoT Core Endpoint URL
const char AWS_IOT_ENDPOINT[] = "";

// Amazon Root CA 1
static const char AWS_CERT_CA[] = R"EOF(
-----BEGIN CERTIFICATE-----

-----END CERTIFICATE-----
)EOF";

// Device Public Key
static const char AWS_CERT_CRT[] = R"KEY(
-----BEGIN CERTIFICATE-----

-----END CERTIFICATE-----
)KEY";

// Device Private Key
static const char AWS_CERT_PRIVATE[] = R"KEY(
-----BEGIN RSA PRIVATE KEY-----

-----END RSA PRIVATE KEY-----
)KEY";

#endif