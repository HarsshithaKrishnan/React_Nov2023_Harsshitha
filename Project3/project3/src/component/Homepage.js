import React, { useState } from "react";
import {
  AppBar,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  Facebook,
  Instagram,
  Menu as MenuIcon,
  Twitter,
} from "@mui/icons-material/";
import { Link as RouterLink } from 'react-router-dom';
const Homepage = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const SocialBox = styled(Box)({
    display: "flex",
    gap: 10,
  });
  const SocialBox1= styled(Box)({
    display: "flex",
    gap: 10,
    color:"white",
  });
  const MenuBox = styled(Box)({
    display: "flex",
    gap: 30,
  });
  const SearchBox = styled(Box)({
    display: "flex",
    gap: 5,
  });
  const StyledBox=styled(Box)({
    height:200,
    width:"100%",
    cursor:"pointer",
    backgroundRepeat:"no-repeat",
    backgroundPosition:"center center",
    backgroundSize:"cover"
});
const StyledTypography=styled(Typography)({
    margin:"25% 50px 25% 50px",
    background:"white",
    opacity:"0.8"
})
  const MenuItems = [
    { Name: <b>Home</b>, Link: "/" },
    { Name: <b><StyledTypography component={RouterLink} to="/De">Destination</StyledTypography></b>, Link: "#" },
    { Name: <b><StyledTypography component={RouterLink} to="/ho">Hotels</StyledTypography></b>, Link: "#" },
    { Name: <b><StyledTypography component={RouterLink} to="/Va">Vacation</StyledTypography></b>, Link: "#" },
    { Name: <b><StyledTypography component={RouterLink} to="/ca">Contact us</StyledTypography></b>, Link: "#" },
  ];
  const [open, SetOpen] = useState(false);
  return (
    <div>
        <div>
    <AppBar sx={{ background: "#673ab7" }} position={"static"}>
      <StyledToolbar>
        <SocialBox>
          <Facebook />
          <Instagram />
          <Twitter />
        </SocialBox>
        <MenuBox sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
          {MenuItems.map((item) => (
            <Typography
              sx={{
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              {item.Name}
            </Typography>
          ))}
        </MenuBox>

        <SearchBox>
          <InputBase placeholder="Search ..." sx={{ color: "white" }} />
          <MenuIcon
            sx={{
              color: "white",
              display: { xs: "block", sm: "block", md: "none" },
            }}
            onClick={() => SetOpen(!open)}
          />
        </SearchBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => SetOpen(!open)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Box sx={{ width: 350, height: "90vh" }}>
          {MenuItems.map((item) => (
            <MenuItem
              sx={{
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              {item.Name}
            </MenuItem>
          ))}
        </Box>
      </Menu>
    </AppBar>
    </div>
    <div>
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
    </div>
    <div>
    <Box>
            <h1>TRAVEL<b style={{color:"red"}}> OPTIONS</b></h1>
            <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:1,sm:2,md:4}} mt={5}>
                <StyledBox sx={{backgroundImage:"url(https://www.tamilnadutourism.tn.gov.in/img/pages/medium-desktop/take-a-ride-in-the-toy-train-1653978188_8ac904b5bdb228abad78.webp)"}}><StyledTypography align="center" variant="h4"  ></StyledTypography></StyledBox>
                <StyledBox sx={{backgroundImage:"url(https://static.toiimg.com/thumb/msid-96865237,width-1280,height-720,resizemode-4/96865237.jpg)"}}><StyledTypography align="center" variant="h4"></StyledTypography></StyledBox>
                <StyledBox sx={{backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMkpJP-UjbhXf2j6ixvT0SBPBPPBELy6kqMg&usqp=CAU)"}}><StyledTypography align="center" variant="h4"></StyledTypography></StyledBox>

            </Stack>
            <br></br>
            <h1>TRAVEL <b style={{color:"red"}}>DESTINATIONS</b></h1>
            <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:1,sm:2,md:4}} mt={5}>
                <StyledBox sx={{backgroundImage:"url(https://media.istockphoto.com/id/1208049833/photo/amazing-view-on-the-taj-mahal-in-sunset-light-with-reflection-in-water-the-taj-mahal-is-an.jpg?s=612x612&w=0&k=20&c=rNo7Q1k7SSaH6T09HShS57X9dw2QkuRBcnP2dNxAGIE=)"}}><StyledTypography align="center" variant="h5"></StyledTypography></StyledBox>
                <StyledBox sx={{backgroundImage:"url(https://whyweseek.com/wp-content/uploads/2018/03/Golden-Temple-at-Night-Amritsar.jpg)"}}><StyledTypography align="center" variant="h5"></StyledTypography></StyledBox>
                <StyledBox sx={{backgroundImage:"url(https://www.theknot.com/tk-media/images/0108e30b-f23f-4d5b-bacb-c13df8215c94~rs_768.h)"}}><StyledTypography align="center" variant="h5"></StyledTypography></StyledBox>
                <StyledBox sx={{backgroundImage:"url(https://1.bp.blogspot.com/-az09PefXMpQ/UdRMg81w8QI/AAAAAAAAATg/tEFq4Pp9LRY/s575/lotus+temple.jpg)"}}><StyledTypography align="center" variant="h5"></StyledTypography></StyledBox>
                <StyledBox sx={{backgroundImage:"url(https://i.insider.com/649b13386eb0a800194d589a?width=700)"}}><StyledTypography align="center" variant="h5"></StyledTypography></StyledBox>
                <StyledBox sx={{backgroundImage:"url(https://www.qmul.ac.uk/media/qmul/London-Bridge.jpg)"}}><StyledTypography align="center" variant="h5"></StyledTypography></StyledBox>
            </Stack>
            <br></br>
            <br></br>
            <h1> FEELGOOD <b style={{color:"red"}}>ADVENTURES</b></h1>
            <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:5,sm:6,md:8}} mt={4}>
                <StyledBox sx={{backgroundImage:"url(https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cheight=675%2Cq=85%2Cwidth=1200/wp-content/uploads/hot-air-balloon-day2.jpg)"}}><StyledTypography align="center" variant="h5"></StyledTypography></StyledBox>
                <StyledBox sx={{backgroundImage:"url(https://img.traveltriangle.com/blog/wp-content/uploads/2018/06/acj-0506-paragliding-in-kalimpong-8.jpg)"}}><StyledTypography align="center" variant="h5"></StyledTypography></StyledBox>
                <StyledBox sx={{backgroundImage:"url(https://sagunabaug.com/wp-content/uploads/2017/06/DSC2332.jpg)"}}><StyledTypography align="center" variant="h5"></StyledTypography></StyledBox>
                <StyledBox sx={{backgroundImage:"url(https://imgmedia.lbb.in/media/2023/04/642e901c3f755b46b63c82f0_1680773148311.jpg)"}}><StyledTypography align="center" variant="h5"></StyledTypography></StyledBox>
            </Stack>
            <br></br>
        </Box>
    </div>
    <div>
    <Box sx={{background:"#673ab7",height:"300px"}}>
            <Stack direction={{xs:"row",md:"row"}}p={7}>
                <Box flex={1}>
                    <h3>CATEGORIES</h3>
                    <Typography color={"white"} align={"center"}>
                        Travel Options
                    </Typography>
                    <Typography color={"white"} align={"center"}>
                        Travel Destinations
                    </Typography>
                    <Typography color={"white"} align={"center"}>
                        Adventures
                    </Typography>
                </Box>
                <Box flex={1}>
                    <h3>COMPANY</h3>
                    <Typography color={"white"} align={"center"}>
                       <StyledTypography component={RouterLink} to="/ab">About Us</StyledTypography> 
                    </Typography>
                    <Typography color={"white"} align={"center"}>
                        Support
                    </Typography>
                    <Typography color={"white"} align={"center"}>
                        Data Safety
                    </Typography>
                </Box>
                <Box flex={1}>
                    <h3>USEFUL LINKS</h3>
                    <Typography color={"white"} variant={"body2"} align={"center"}>
                        Privacy Policy
                    </Typography>
                    <Typography color={"white"} variant={"body2"} align={"center"}>
                        Return & Cancellation Policy
                    </Typography>
                    <Typography color={"white"} variant={"body2"} align={"center"}>
                        Shipping Policy
                    </Typography>
                    <Typography color={"white"} variant={"body2"} align={"center"}>
                        Terma&Conditions
                    </Typography>
                </Box>
                <Box>
                    <h3>FOLLOW US</h3>
                    <SocialBox1>
                 <Facebook/>
                 <Instagram/>
                 <Twitter/>
                 </SocialBox1>
                </Box>
            </Stack>
        </Box>
    </div>
    </div>
  );
};

export default Homepage;