import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const How = () => {
  const useStyles = makeStyles({
    root: {
      maxWidth: 200,
      marginTop: 20,
      marginBottom: 20,
      fontSize: 40,

    },
    rootCard: {
      maxHeight: 500,
      border: "none",
      boxShadow: "none",
      marginLeft: 1,


    },
    table: {
      minWidth: 650,
      fontSize: 100,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    rootTablebody: {
      variant: "caption",
    },


  });

  function createData(name, description, price, image, link) {
    return { name, description, price, image, link };
  }
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  //DATA FOR THE TABLE
  const rows = [
    //GY-30
    createData('GY-30', //NAME
      <Card
      className={classes.rootCard} //DESCRIPTION
      >
        <Typography >
          {bull} Digital Light Intensity Sensor
          {bull}Main Chip：ROHM the original BH1750FVI<br></br>
          {bull}The sensor built 16bitAD converter <br></br>
          {bull}Direct digital output, complex calculation is omitted, omitting calibration<br></br>
          {bull}Does not distinguish between ambient light <br></br>
          {bull}1 lux high-precision measurement of a wide range of brightness <br></br>
        </Typography>
      </Card>
      ,
      '$5.49', //price
      <Card variant="outlined">
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Light"
            //height="100"
            image="./images/Light.jpg" //IMG
            title="LightSensor"
          />
        </CardActionArea>
      </Card>,
      <Link
        align="Left"
        href="https://www.amazon.com/gp/product/B01DLG4NZC/ref=ppx_yo_dt_b_asin_title_o02_s01?ie=UTF8&psc=1" //LINK
        style={{ textDecoration: 'none' }}
      >
        <Button
          variant="contained"
          color="primary"
          style={{maxWidth: '100px', maxHeight: '30px', minWidth: '200px', minHeight: '60px', fontWeight: '600'}}

        >
          GY-30
        </Button>
      </Link>),
    //TEMP/HUMIDITY SENSOR
    createData('Temperature Humidity Sensor Module Digital Temperature Humidity Sensor',
      <Card
        className={classes.rootCard} //DESCRIPTION
      >
        <Typography>
          {bull}HiLetgo 5pcs DHT11 Temperature Humidity Sensor Module Digital Temperature Humidity Sensor 3.3V-5V Humidity Measure Range 20%-95% Temperature Measure Range 0-50℃ Celsius with Dupont Wires <br></br>
          {bull}DHT11 digital temperature and humidity sensor is a digital signal output with a calibrated temperature and humidity combined sensor.<br></br>
          {bull}It uses a dedicated digital modules and acquisition of temperature and humidity sensor technology to ensure that products with high reliability and excellent long term stability.<br></br>
          {bull}Sensor consists of a resistive element and a sense of wet NTC temperature measurement devices, and with a high-performance 8-bit microcontroller connected.<br></br>
          {bull}The product has excellent quality, fast response, anti-interference ability, high cost and other advantages. <br></br>
          {bull}The single-wire wiring scheme makes it easy to be integrated to other applications.And the simple communication protocol greatly reduces the programming effort required.<br></br>
        </Typography>
      </Card>
      ,
      '$10.29', //price
      <Card variant="outlined">
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Temp"
            //height="100"
            image="./images/Temp.jpg" //IMG
            title="Temp Sensor"
          />
        </CardActionArea>
      </Card>,
      <Link
        variant="body2"
        align="Left"
        href="https://www.amazon.com/gp/product/B01DLG4NZC/ref=ppx_yo_dt_b_asin_title_o02_s01?ie=UTF8&psc=1" //LINK
        style={{ textDecoration: 'none' }}
      >
        <Button
          variant="contained"
          color="primary"
          style={{maxWidth: '100px', maxHeight: '30px', minWidth: '200px', minHeight: '60px', fontWeight: '600'}}

        >
          DHT11
        </Button>
      </Link>),
    //SOIL SENSOR
    createData('Soil Moisture Sensor Temperature & Humidity Sensor',
      <Card
        className={classes.rootCard}
      >
        <Typography>
          {bull}This analog capacitive soil moisture sensor measures soil moisture levels by capacitive sensing, rather than resistive sensing like other types of moisture sensor.<br></br>
          {bull}This sensor is 3-pin "Gravity" interface, which can be directly connected to the Gravity I/O expansion shield.<br></br>
          {bull}This module includes an on-board voltage regulator which gives it an operating voltage range of 3.3 ~ 5.5V<br></br>
          {bull}It is made of a corrosion resistant material giving it a long service life.<br></br>
          {bull}Insert it into soil and impress you with the real-time soil moisture data.<br></br>
        </Typography>
      </Card>,
      '$11.99', //PRICE
      <Card variant="outlined">
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Soil Sensor"
            // height="100"
            image="./images/SoilSR.jpg" //IMG
            title="Soil Sensor"
          />
        </CardActionArea>
      </Card>,
      <Link
        variant="body2"
        align="Left"
        href="https://www.amazon.com/diymore-Capacitive-Corrosion-Resistant-Detection/dp/B07RYCNFZ5/ref=pd_sbs_1/131-2991803-9913461?pd_rd_w=Jjk3e&pf_rd_p=180628c6-6f13-4dbf-9213-f09cdedc7815&pf_rd_r=S86K527W22Z6CPTA6J19&pd_rd_r=c0a046e3-3c36-4d6c-8ec9-3b95afd6a029&pd_rd_wg=MdgYG&pd_rd_i=B07RYCNFZ5&th=1" //LINK
        style={{ textDecoration: 'none' }}
      >
        <Button
          variant="contained"
          color="primary"
          style={{maxWidth: '100px', maxHeight: '30px', minWidth: '200px', minHeight: '60px', fontWeight: '600'}}

        >
          Soil Moisture Sensor
        </Button>
      </Link>
    ),
    //JUMPER WIRES
    createData('Jumper Wires',
      <Card
        className={classes.rootCard} //DESCRIPTION
      >
        <Typography>
          {bull}EDGELEC 120pcs Breadboard Jumper Wires 10cm 15cm 20cm 30cm 40cm 50cm 100cm Wire Length Optional Dupont Cable Assorted Kit Male to Female Male to Male Female to Female Multicolored Ribbon Cables
          {bull}Package include: 20cm (7.9inch) / 40pin Female to Female jumper wires / 40pin Male to Female jumper wires / 40pin Male to Male jumper wires (Total 120pcs)
          {bull}Connector Type: Standard 2.54mm pitch dupont housing connector / 1pin-1pin
          {bull}Cable length: 20cm (7.9 inch) / Cable material: 12-core pure copper wire
          {bull}Cable features: Separable multicolored (10 colors) softness ribbon cables
          {bull}For DIY experiment / Electronic projects / Breadboard / PC motherboard / PCB project
        </Typography>
      </Card>
      ,
      '$6.19 ', //price
      <Card variant="outlined">
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Jumper Wires"
            //height="400"
            image="./images/Wires.jpg" //IMG
            title="Jumper Wires"
          />
        </CardActionArea>
      </Card>,
      <Link
        variant="body2"
        align="Left"
        href="https://www.amazon.com/gp/product/B07GD2BWPY/ref=ppx_yo_dt_b_asin_title_o02_s01?ie=UTF8&psc=1" //LINK
        style={{ textDecoration: 'none' }}
      >
        <Button
          variant="contained"
          color="primary"
          style={{maxWidth: '100px', maxHeight: '30px', minWidth: '200px', minHeight: '60px', fontWeight: '600'}}

        >
          Jumper Cable
        </Button>
      </Link>
    ),
    //ESP32
    createData('ESP32',
      <Card
        className={classes.rootCard} //DESCRIPTION
      >
        <Typography>
          {bull}HiLetgo ESP-WROOM-32 ESP32 ESP-32S Development Board 2.4GHz Dual-Mode WiFi + Bluetooth Dual Cores Microcontroller Processor Integrated with Antenna RF AMP Filter AP STA for Arduino IDE <br></br>
          {bull}2.4GHz Dual Mode WiFi + Bluetooth Development Board <br></br>
          {bull}Ultra-Low power consumption, works perfectly with the Arduino IDE <br></br>
          {bull}Support LWIP protocol, Freertos <br></br>
          {bull}SupportThree Modes: AP, STA, and AP+STA <br></br>
          {bull}ESP32 is a safe, reliable, and scalable to a variety of applications <br></br>
        </Typography>
      </Card>
      ,
      '$10.99 ', //price
      <Card variant="outlined" >
        <CardActionArea>
          <CardMedia
            component="img"
            alt="ESP32"
            // height="100"
            image="./images/ESP32.jpg" //IMG
            title="ESP32"
          />
        </CardActionArea>
      </Card>,
      <Link
        variant="body2"
        align="Left"
        href="https://www.amazon.com/HiLetgo-ESP-WROOM-32-Development-Microcontroller-Integrated/dp/B0718T232Z/ref=pd_sbs_1/134-1858836-7621621?pd_rd_w=r2GYd&pf_rd_p=0a3ad226-8a77-4898-9a99-63ffeb1aef90&pf_rd_r=2DH2J6W6JXPCHE1SJP0R&pd_rd_r=29c279d8-69f3-4d23-ad88-a73334e9b272&pd_rd_wg=DkEGW&pd_rd_i=B0718T232Z&psc=1" //LINK
        style={{ textDecoration: 'none' }}
      >
        <Box marginBottom={2}>
          <Button
            variant="contained"
            color="primary"
            style={{maxWidth: '100px', maxHeight: '30px', minWidth: '200px', minHeight: '60px', fontWeight: '600'}}

          >
            Recomended ESP32
          </Button>
        </Box>

        <Link href="https://www.amazon.com/gp/product/B086MJGFVV/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1" style={{ textDecoration: 'none' }}>
          <Button variant="contained">
            Original Unavailable
          </Button>
        </Link> <br></br>
      </Link>
    ),
    // Micro USB CABLE/BLOCK
    createData('Micro USB Cable and Charger Block',
      <Card
        className={classes.rootCard} //DESCRIPTION
      >
        <Typography>
          {bull}【Dual USB Port Wall Charger】: Input: AC100-240V (U.S. & World Standard), Output:
          DC 5V/2.1A.Wide voltage range matching different voltage standards, suitable for travel.
          2 ports charging cube able to charge two devices simultaneously at high speed.
          Phone charger box and micro usb cord really can save your time. <br></br>
          {bull}【Certified Safe】: AbcPow's USB Plug has protection system against over charging,
          over currents, and over heating. Wall Charger will automatically stop charging when power is
          full, which can maximally protect your device. <br></br>
          {bull}【Durable Charging Cable】: Tangle-free Nylon Braided Design,
          with a tested 10000+ bend lifespan, promises you a perfect experience in
          charging your devices. 6FT android charging cord assured the length of charge
          your phone without worry about the distance. Phone charger cords data transfer
          speed up to 480Mbps, data transfer and fast charging 2 in 1 micro charger cable. <br></br>
        </Typography>
      </Card>
      ,
      '$8.99 ', //price
      <Card variant="outlined" >
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Micro USB"
            // height="100"
            image="./images/Micro.jpg" //IMG
            title="Micro USB"
          />
        </CardActionArea>
      </Card>,
      <Link
        variant="body2"
        align="Left"
        href="https://www.amazon.com/Charger-Charging-Android-Compatible-Tribute/dp/B08D74NC56/ref=sr_1_8?crid=9OP7FR75OK1N&dchild=1&keywords=micro+usb+charger+and+block&qid=1631812907&sr=8-8" //LINK
        style={{ textDecoration: 'none' }}
      >
        <Button
          variant="contained"
          color="primary"
          style={{maxWidth: '100px', maxHeight: '30px', minWidth: '200px', minHeight: '60px', fontWeight: '600'}}

        >
          USB-C CABLE/BLOCK
        </Button>
      </Link>
    ),
    //BREAD BOARD
    createData('Bread Board',
      <Card
        className={classes.rootCard} //DESCRIPTION
      >
        <Typography>
          {bull}400 Points Solderless Breadboard with 2 Positive & Negative Power Lines on both ends.<br></br>
          {bull}White ABS Plastic Body with Black Printed Legend. Color Legend on Distribution Strips.<br></br>
          {bull}With Self-Adhesive Tape on the back allows to stick on the prototype shield.<br></br>
          {bull}Fit for 21-26 AWG (0.4-0.7MM) wire. Comparing with breadboards of high AWG wire,
          MCIGICM breadboards is of higher physical strength and lower resistance.<br></br>
          {bull}Good for Breadboard Jumper Wires kit Project and other Electrical DIY kits.<br></br>
        </Typography>
      </Card>
      ,
      '$6.99 ', //price
      <Card variant="outlined" >
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Breadboard"
            // height="100"
            image="./images/Bread.jpg" //IMG
            title="Breadboard"
          />
        </CardActionArea>
      </Card>,
      <Link
        variant="body2"
        align="Left"
        href="https://www.amazon.com/Pcs-MCIGICM-Points-Solderless-Breadboard/dp/B07PCJP9DY/ref=sr_1_5?dchild=1&keywords=bread+board&qid=1631813391&sr=8-5" //LINK
        style={{ textDecoration: 'none' }}
      >
        <Button
          variant="contained"
          color="primary"
          style={{maxWidth: '100px', maxHeight: '30px', minWidth: '200px', minHeight: '60px', fontWeight: '600'}}

        >
          Breadboard
        </Button>
      </Link>
    ),
    //
    //createData(''),
    //
    //createData(''),
  ];

  return (
    //PAGE CONTENT 
    <div>
      <Box m={5}>
        <Typography variant="h3" align="center">
          <p>Road to unlocking achievement of Plant Master:</p>
        </Typography>

        <Typography variant="h5" align="justify">
          &nbsp;&nbsp;&nbsp; How to get started raising a plant from level one.
          Plants need a lot of time, water and sun. Often life can get really hectic.
          Simple task fall thought the cracks, leaving many plants with out water. Resulting in death of your plant pet.
          Solution is a simple DIY device. In these next few step we will provide the equipment required in order to help keep your plant pet alive.
          This DIY device will help you keep you in the know on what your plant pet needs.
          Read all the steps and follow the direction!
        </Typography>

        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Grid>
            <Card sx={{ maxWidth: 1000 }} >
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Sprout"       
                  image="./images/Sprout.jpg"
                  title="Sprout"
                />
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Box marginBottom={5}>
        <Card>
          <CardContent>
            <Typography variant="h4">Step 1:</Typography>
            <Typography variant="h4" align="center">
              &nbsp;&nbsp;&nbsp;Let's get started! Gathering all the parts.
              <Typography variant="h5" align="left">
                Parts List:
              </Typography>
              <TableContainer component={Paper}>
                <Table className={classes.table}  >
                  <TableHead className={classes.rootTablehead}>
                    <TableRow>
                      <TableCell style={{minWidth: 200}} >
                        <Typography variant="h6"  >
                          Name
                        </Typography>
                      </TableCell>
                      <TableCell style={{minWidth: 400}} >
                      <Typography variant="h6"  >
                        Description
                      </Typography>
                        </TableCell>
                      <TableCell style={{minWidth: 100}}>
                      <Typography variant="h6"  >
                        Price

                          </Typography>
                        </TableCell>
                      <TableCell style={{minWidth: 200}}>
                      <Typography variant="h6"  >
                        Image

                          </Typography>
                        </TableCell>
                      <TableCell style={{minWidth: 200}}>
                      <Typography variant="h6"  >
                        Link

                          </Typography>
                        </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody alignItems="Left">
                    {rows.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell  component="th" scope="row">
                          <Typography variant="h6">
                          {row.name}
                            </Typography>
                        </TableCell>
                        <TableCell variant="caption">{row.description}</TableCell>
                        <TableCell >
                          <Typography>
                                                    {row.price}

                            </Typography>
                          </TableCell>
                        <TableCell >{row.image}</TableCell>
                        <TableCell >
                        <Typography variant="h6"  >
                        {row.link}

                          </Typography>

                          </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Typography>
          </CardContent>
        </Card>
        *Disclaimer descriptions/Images/Links come from Amazon.com
      </Box>

      <Box marginBottom={5}>
        <Card>
          <CardContent>
            <Typography variant="h4" >
              Step 2:
            </Typography>


            <Grid
              container spacing={3}
              //direction="column"
              // alignItems="center"
              justify="center"
            //style={{ minHeight: '20vh' }}
            >
              <Grid item xs={12}>
                <Typography variant="h4" align="center">
                  Connection &nbsp;&nbsp;&nbsp;
                </Typography>
                <Divider />
              </Grid>

              <Grid item xs={4}  >
                <Box marginTop={20} marginLeft={2}>
                  <Typography variant="h6" align="center">
                    {bull}Connect the bread board as diagram shows.
                  </Typography>
                </Box>

              </Grid>

              <Grid item xs={8}>
                <Box margin={2} border={1} style={{maxWidth: 600}} >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Sprout"
                      //height="600"
                      image="./images/BB6.jpg"
                      title="Sprout"
                    />
                  </CardActionArea>
                </Box>


              </Grid>


              <Grid item xs={6}>
                <Divider />
                <Box marginTop={10} marginLeft={2} >
                  <Typography variant="h6">
                    {bull}Connect both pieces in the image that are marked yellow together. <br></br>
                    {bull}Connect the purple outline piece with the soil sensor cable from the previous image.
                  </Typography>
                </Box>

              </Grid>

              <Grid item xs={6}>
                <Divider />
                <Box margin={2} border={1} style={{maxWidth: 600}}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Sprout"
                      //height="200"
                      image="./images/SSConnection.jpg"
                      title="Sprout"
                    />
                  </CardActionArea>
                </Box>

              </Grid>



              <Grid item xs={4}>
                <Divider />
                <Box marginTop={15} marginLeft={2}>

                  <Typography variant="h6">
                    {bull}What connections should look like in the end.
                  </Typography>
                </Box>

              </Grid>

              <Grid item xs={8}>
                <Divider />
                <Box margin={2} border={1} style={{maxWidth: 600}}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Sprout"
                      //height="200"
                      image="./images/DeviceIRL.jpg"
                      title="Sprout"
                    />

                  </CardActionArea>
                </Box>

              </Grid>
            </Grid>
          </CardContent>
        </Card>


      </Box>

      <Box marginBottom={5}>

        <Card>
          <CardContent>
            <Typography variant="h4" m>
              Step 3:
            </Typography>
            <Grid
              container spacing={3}
              direction="column"
              alignItems="center"
              justify="center"
            >
              <Grid item xs={16}>
                <Typography variant="h4" align="center">
                  Download Platformio
                </Typography>
                <Divider />
              </Grid>

              <Grid item xs={8} style={{maxWidth: 600}}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="PlatformIO"
                    image="./images/plat.jpg"
                    title="PlatformIO" />
                </CardActionArea>
                <Divider />
              </Grid>
              <Grid item xs={4}>
                <Link
                  variant="body2"
                  align="Left"
                  href="https://platformio.org/platformio-ide" //LINK
                  style={{ textDecoration: 'none' }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    style={{maxWidth: '100px', maxHeight: '30px', minWidth: '400px', minHeight: '60px'}}
                  >
                    <Typography variant="h6">
                    Download Link

                      </Typography>
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>

      <Box marginBottom={5}>
        <Card>
          <CardContent>
            <Typography variant="h4" m>
              Step 4:
            </Typography>
            <Grid
              container spacing={3}
              direction="column"
              alignItems="center"
              justify="center"
            >
              <Grid item xs={8}>
                <Typography variant="h4" align="center">
                  Download code from git
                </Typography>
                <Divider />
              </Grid>
              <Grid item xs={8} style={{maxWidth: 600}}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Git"
                    image="./images/git.jpg"
                    title="Git" />
                </CardActionArea>
                <Divider />
              </Grid>
              <Grid item xs={5}>

                <Link
                  variant="body2"
                  align="Left"
                  href="https://github.com/naterpotatoers/Smart-Gardening"
                >
                  <Button
                    variant="contained"
                    color="primary"
                    style={{maxWidth: '100px', maxHeight: '30px', minWidth: '100px', minHeight: '60px', fontWeight: '600'}}

                  >
                    <Typography variant="h6">
                      Git
                      </Typography>
                  </Button>
                </Link>
              </Grid>
            </Grid>

          </CardContent>
        </Card>
      </Box>

      <Box marginBottom={5}>
        <Card>
          <CardContent>
            <Typography variant="h4" m>
              Step 5:
            </Typography>
            <Grid
              container spacing={2}
              direction="column"
              alignItems="center"
              justify="center"
            >
              <Grid item xs={8}>
                <Typography variant="h4" align="center">
                  Flash Device
                </Typography>
                <Divider />
              </Grid>

              <Grid item xs={8}>
                <Typography variant="h5" align="center">
                  INSTRUCTIONS:
                  <br/>
                  Step 1: Open up the iot folder within platform io
                  <br/>
                  Step 2: Click 'upload' button to upload code to the device

                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>

      <Box marginBottom={5}>
        <Card>
          <CardContent>
            <Typography variant="h4" m>
              Step 6:
            </Typography>
            <Grid
              container spacing={2}
              direction="column"
              alignItems="center"
              justify="center"
            >
              <Grid item xs={8}>
                <Typography variant="h4" align="center">
                  3D Printing Files
                </Typography>
                <Divider />
              </Grid>
              <Grid item xs={8} style={{maxWidth: 600}}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="case"
                    image="./images/case.jpg"
                    title="case" />
                </CardActionArea>
                <Divider />
              </Grid>

              <Grid item xs={8}>
                <Typography variant="h5" align = "center">
                <Link
                  variant="body2"
                  align="Left"
                  href="                https://drive.google.com/drive/folders/1RUrkEgFQBM1Q_YZalBCF5cvodM8Q2YQY?usp=sharing
                  " //LINK
                  style={{ textDecoration: 'none' }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    style={{maxWidth: '100px', maxHeight: '30px', minWidth: '200px', minHeight: '60px', fontWeight: '600'}}

                  >
                    <Typography variant="h6">
                    File Link

                      </Typography>
                  </Button>
                  <br/>
                  <br/>

                </Link>
                .STL file is for printing
                <br/>
                .SLDPRT is for editing the piece in solidworks
                </Typography>
                <br/>
              </Grid>
              <Grid item xs={4} style={{maxWidth: 400}} >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="case2"
                    image="./images/case2.jpg"
                    title="case2" 
                    align="center"
                    />
                </CardActionArea>
                <Divider />
              </Grid>
              <br/>
            <Grid item xs={8} style={{maxWidth: 400}}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="case2"
                    image="./images/case3.jpg"
                    title="case2" />
                </CardActionArea>
                <Divider />
              </Grid>
      </Grid>

           
           
          </CardContent>
        </Card>
      </Box>

    </div>
  );
};

export default How;
