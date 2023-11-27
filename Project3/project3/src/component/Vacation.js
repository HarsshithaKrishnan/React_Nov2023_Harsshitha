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
      <p><h2>Family</h2></p>
      <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:1,sm:2,md:4}} mt={5}>
      <Card sx={{ maxWidth: 300}}>
         <CardMedia sx={{ height: 250,width:400}} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmbgeD-4CssZlnVZ63qP45N6WWF_NexEBvbg&usqp=CAU" />
    
      </Card>
      <Card sx={{ maxWidth: 300 }}>
         <CardMedia sx={{ height: 250,width: 400 }} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi9sIyA6cV3wQNz0M8tCUkddjHbYdJb6OW9A&usqp=CAU" />
         
      </Card>
      <Card sx={{ maxWidth: 300 }}>
         <CardMedia sx={{ height: 250,width: 400 }} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2eT8YHf6d1OTbfEUGTdTThbq3_02JemgPUw&usqp=CAU" />
         
      </Card>
      <Card sx={{ maxWidth: 300 }}>
         <CardMedia sx={{ height: 250,width: 400 }} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjeD8D1qXsaX9bKPrEzBkc3G8MJxAsI7cbaw&usqp=CAU" />
         
      </Card>
      
    </Stack>
    <p><h2>Beach</h2></p>
      <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:1,sm:2,md:4}} mt={5}>
      <Card sx={{ maxWidth: 300 }}>
         <CardMedia sx={{ height: 250,width: 400 }} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9-qb9PDyl7zXhc3vrv04jXIGK9W1S7E3efg&usqp=CAU" />
         
      </Card>
      <Card sx={{ maxWidth: 300 }}>
         <CardMedia sx={{ height: 250,width: 400 }} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA8XSZnkp4QaMYFhIS8qJSE5ejt_1GBNX-iQ&usqp=CAU" />
         
      </Card>
      <Card sx={{ maxWidth: 300 }}>
         <CardMedia sx={{ height: 250,width: 400 }} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuQKUAOhsdVX43QcTOA9blUfg5bPRczJCzbofuIM5kWQ13lQxVy4JEWagLetETr_GPXrk&usqp=CAU" />
         
      </Card>
      <Card sx={{ maxWidth: 300 }}>
         <CardMedia sx={{ height: 250,width: 400 }} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9N3VfbqMPA5h98ndy_LwNo4Sp25EczPy9XQ&usqp=CAU" />
         
      </Card>
    </Stack>
    <p><h2>Dream</h2></p>
      <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:1,sm:2,md:4}} mt={5}>
      <Card sx={{ maxWidth: 300 }}>
         <CardMedia sx={{ height: 250,width: 400 }} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuqDtMyF73MhangPT62Nu107iwG4zejM4e6w&usqp=CAU" />
         
      </Card>
      <Card sx={{ maxWidth: 300 }}>
         <CardMedia sx={{ height: 250,width: 400 }} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTceamE8aHUuTBTAcpEaVcF6adANkekzajCbQ&usqp=CAU" />
         
      </Card>
      <Card sx={{ maxWidth: 300 }}>
         <CardMedia sx={{ height: 250,width: 400 }} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYbrI8CA3zDHOTQ0JSfAPY2loSXY9rNFdsQg&usqp=CAU&reload=on" />
         
      </Card>
      <Card sx={{ maxWidth: 300 }}>
         <CardMedia sx={{ height: 250,width: 400 }} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ziU4CG-xc4wDfBJXEzf-V1yunYQ3xfZIIQ&usqp=CAU&reload=on" />
         
      </Card>
    </Stack>
    </div>
    );
}