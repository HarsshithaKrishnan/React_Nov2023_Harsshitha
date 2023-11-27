import React from "react";
import { Box,Typography} from "@mui/material";
const Hero = () => {
    return (
        <Box>
            <Typography align="center" variant="h3" sx={{fontWeight:900}}>
                FIRST<b style={{color:"red"}}> FLY </b>
            </Typography>
            <Box 
            sx={{
                backgroundImage:'url(https://images.pling.com/img/00/00/65/58/23/1753189/maldives-resorts-landscape-hd-wallpaper-wallpaper-1920x1080-10wallpaper.com.jpg)',
                backgroundRepeat:'no-repeat',
                backgroundColor:"black",
                backgroundPosition:"center",
                backgroundSize:"cover", 
                height:500,
                width:"100%",
            }}
        >
            <Box>
                <Typography varient="h4" align="center" >
                Remember that happiness is a way of travel – not a destination.”
                </Typography>
                <Typography varient="body1" align="center" pb={8}>
                Life is either a daring adventure or nothing at all.”
                </Typography>
            </Box>
        </Box>
        </Box>
    );
};
export default Hero