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
        <h1>Popular Destinations</h1>
      <p><h2>Domestic</h2></p>
      <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:1,sm:2,md:4}} mt={5}>
      <Card sx={{ maxWidth: 300}}>
         <CardMedia sx={{ height: 250,width:400}} image="https://youimg1.tripcdn.com/target/0103n120004ei8ahiC0D7_C_400_280_R5.jpg_.webp" />
    
      </Card>
      <Card sx={{ maxWidth: 300 }}>
         <CardMedia sx={{ height: 250,width: 400 }} image="https://youimg1.tripcdn.com/target/0103f12000aq7bnorD834_C_400_280_R5.jpg_.webp" />
         
      </Card>
      <Card sx={{ maxWidth: 300 }}>
         <CardMedia sx={{ height: 250,width: 400 }} image="https://youimg1.tripcdn.com/target/0100x1200082c86ie1135_C_400_280_R5.jpg_.webp" />
         
      </Card>
      <Card sx={{ maxWidth: 300 }}>
         <CardMedia sx={{ height: 250,width: 400 }} image="https://youimg1.tripcdn.com/target/10050f0000007ete6E312_C_400_280_R5.jpg_.webp" />
         
      </Card>
      
    </Stack>
      <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:1,sm:2,md:4}} mt={5}>
      <Card sx={{ maxWidth: 300 }}>
         <CardMedia sx={{ height: 250,width: 400 }} image="https://youimg1.tripcdn.com/target/100f0m000000dprhgED66_C_400_280_R5.jpg_.webp" />
         
      </Card>
      <Card sx={{ maxWidth: 300 }}>
         <CardMedia sx={{ height: 250,width: 400 }} image="https://ak-d.tripcdn.com/images/100f10000000ok3gp0477_C_400_280_R5.jpg_.webp" />
         
      </Card>
      <Card sx={{ maxWidth: 300 }}>
         <CardMedia sx={{ height: 250,width: 400 }} image="https://youimg1.tripcdn.com/target/100a0z000000ndoln9448_C_400_280_R5.jpg_.webp" />
         
      </Card>
      <Card sx={{ maxWidth: 300 }}>
         <CardMedia sx={{ height: 250,width: 400 }} image="https://youimg1.tripcdn.com/target/fd/tg/g3/M04/BB/BB/CggYGVaMcXuAHn8cACGBzc2mJR0522_C_400_280_R5.jpg_.webp" />
         
      </Card>
    </Stack>
    
    <h1>Travelogues</h1>
      <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:1,sm:2,md:4}} mt={5}>
      <Card sx={{ maxWidth: 300 }}>
         <CardMedia sx={{ height: 250,width: 400 }} image="https://ak-d.tripcdn.com/images/0105512000a9zcfz2684F_C_400_260_R5.jpg_.webp" />
         <CardContent>
           <p>United States public holidays in the Year of the Rabbit 2023</p>
         </CardContent>
      </Card>
      <Card sx={{ maxWidth: 300 }}>
         <CardMedia sx={{ height: 250,width: 400 }} image="https://ak-d.tripcdn.com/images/0105v120008wxjff2B9F1_C_400_260_R5.jpg_.webp" />
         <CardContent>
           <p>2023 Chicago Skyline: 9 Iconic Chicago Buildings and How to Explore Them
</p>
         </CardContent>
      </Card>
      <Card sx={{ maxWidth: 300 }}>
         <CardMedia sx={{ height: 250,width: 400 }} image="https://ak-d.tripcdn.com/images/0101412000a629xh5B3A0_C_400_260_R5.jpg_.webp" />
         <CardContent>
           <p>Guidance of Arrival and Departure cards for international tourists
</p>
         </CardContent>
      </Card>
      <Card sx={{ maxWidth: 300 }}>
         <CardMedia sx={{ height: 250,width: 400 }} image="https://ak-d.tripcdn.com/images/0106d120009a4ogpf550A_C_400_260_R5.jpg_.webp" />
         <CardContent>
           <p>12 Best Places to Visit in May in the USA
</p>
         </CardContent>
      </Card>
    </Stack>
    </div>
  );
}