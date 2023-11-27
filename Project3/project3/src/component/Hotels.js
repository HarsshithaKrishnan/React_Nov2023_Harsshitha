import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack} from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';

export default function MediaCard() {
  return (
    <div >
      <h1 style={{textAlign:"left"}}>Popular Hotels in United States</h1>
      <p style={{textAlign:"left"}}><h2>Las Vegas</h2></p>
      <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:1,sm:2,md:4}} mt={5}>
      <Card sx={{ maxWidth: 300}}>
         <CardMedia sx={{ height: 250,width:400}} image="https://ak-d.tripcdn.com/images/22050g000000838n1715D_R_300_225_R5.jpg" />
         <CardContent>
            <b>The Orleans Hotel & Casino</b>
           <p>4500 W Tropicana Ave | 9.33KM from city center</p>
         </CardContent>
      </Card>
      <Card sx={{ maxWidth: 300 }}>
         <CardMedia sx={{ height: 250,width: 400 }} image="https://ak-d.tripcdn.com/images/1mc0n12000cgsobyf871F_R_300_225_R5.jpg" />
         <CardContent>
            <b>The STRAT Hotel, Casino & Tower</b>
           <p>2000 Las Vegas Blvd S | 2.91KM from city center</p>
         </CardContent>
      </Card>
      <Card sx={{ maxWidth: 300 }}>
         <CardMedia sx={{ height: 250,width: 400 }} image="https://ak-d.tripcdn.com/images/hotel/401000/400342/a1c7d945b0d640cebe119018055c3277_R_300_225_R5.jpg" />
         <CardContent>
            <b>Circus Circus Hotel, Casino & Theme Park</b>
           <p>2880 S Las Vegas Blvd | 4.24KM from city center</p>
         </CardContent>
      </Card>
      <Card sx={{ maxWidth: 300 }}>
         <CardMedia sx={{ height: 250,width: 400 }} image="https://ak-d.tripcdn.com/images/22040g00000082bgv5401_R_300_225_R5.jpg" />
         <CardContent>
            <b>The Grand Hotel</b>
           <p>No.1 Section 4 of Zhongshan North Road | 4.49KM from city center</p>
         </CardContent>
      </Card>
      
    </Stack>
    <h1 style={{textAlign:"left"}}>Popular Hotels Worldwide</h1>
      <p style={{textAlign:"left"}}><h2>Shanghai</h2></p>
      <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:1,sm:2,md:4}} mt={5}>
      <Card sx={{ maxWidth: 300 }}>
         <CardMedia sx={{ height: 250,width: 400 }} image="https://ak-d.tripcdn.com/images/200d050000000do2eBD0E_R_300_225_R5.jpg" />
         <CardContent>
            <b>Gold Coast Hotel and Casino</b>
           <p>4000 W Flamingo Rd | 7.6KM from city center</p>
         </CardContent>
      </Card>
      <Card sx={{ maxWidth: 300 }}>
         <CardMedia sx={{ height: 250,width: 400 }} image="https://ak-d.tripcdn.com/images/0204u120008ycpmg69D2B_R_300_225_R5.jpg" />
         <CardContent>
            <b>Keio Plaza Hotel Tokyo</b>
           <p>2 Chome-2-1 Nishi | 6.73KM from city center</p>
         </CardContent>
      </Card>
      <Card sx={{ maxWidth: 300 }}>
         <CardMedia sx={{ height: 250,width: 400 }} image="https://ak-d.tripcdn.com/images/200d1e000001fmwhp482D_R_300_225_R5.jpg" />
         <CardContent>
            <b>Da Zhong Airport Hotel</b>
           <p>No.6001 Yingbin Avenue | 32.84KM from city center</p>
         </CardContent>
      </Card>
      <Card sx={{ maxWidth: 300 }}>
         <CardMedia sx={{ height: 250,width: 400 }} image="https://ak-d.tripcdn.com/images/200a0j000000ali3z17EE_R_300_225_R5.jpg" />
         <CardContent>
            <b>Radisson Collection Hyland Shanghai</b>
           <p>No.505 East Nanjing Road (2 / F check in) | 0.9KM from city center

</p>
         </CardContent>
      </Card>
    </Stack>
    <h1 style={{textAlign:"left"}}>Top Picks of Luxurious 5-star Hotels</h1>
      <p style={{textAlign:"left"}}><h2>New York</h2></p>
      <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:1,sm:2,md:4}} mt={5}>
      <Card sx={{ maxWidth: 300 }}>
         <CardMedia sx={{ height: 250,width: 400 }} image="https://ak-d.tripcdn.com/images/1mc0l12000begskerB407_R_300_225_R5.jpg" />
         <CardContent>
            <b>Boyue Hotel Shanghai Air China Hongqiao Airport</b>
           <p>Gate 2, Departure Level, Terminal 2, Hongqiao International Airport | 14.5K</p>
         </CardContent>
      </Card>
      <Card sx={{ maxWidth: 300 }}>
         <CardMedia sx={{ height: 250,width: 400 }} image="https://ak-d.tripcdn.com/images/220v1f000001get5vF2F6_R_300_225_R5.jpg" />
         <CardContent>
            <b>Hotel Equatorial Shanghai</b>
           <p>No. 65 West Yan'an Road | 2.99KM from city center</p>
         </CardContent>
      </Card>
      <Card sx={{ maxWidth: 300 }}>
         <CardMedia sx={{ height: 250,width: 400 }} image="https://ak-d.tripcdn.com/images/0225t12000849sd7h7DF1_R_300_225_R5.jpg" />
         <CardContent>
            <b>Regal Airport Hotel</b>
           <p>No.9 Cheong Tat Road, HK International Airport, Chek Lap Kok | 24.17KM from city center</p>
         </CardContent>
      </Card>
      <Card sx={{ maxWidth: 300 }}>
         <CardMedia sx={{ height: 250,width: 400 }} image="https://ak-d.tripcdn.com/images/1mc5u12000b9vteorEA23_R_300_225_R5.jpg" />
         <CardContent>
            <b>Wynn Las Vegas</b>
           <p>3131 Las Vegas Blvd S | 5.26KM from city center</p>
         </CardContent>
      </Card>
      
    </Stack>
    </div>
  );
}