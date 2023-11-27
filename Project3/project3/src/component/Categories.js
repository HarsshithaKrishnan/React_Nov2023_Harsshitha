import {Box, Stack,Typography,styled} from "@mui/material"
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
const Categories=()=>{
    return(
        <Box>
            <h1>TRAVEL OPTIONS</h1>
            <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:1,sm:2,md:4}} mt={5}>
                <StyledBox sx={{backgroundImage:"url(https://www.tamilnadutourism.tn.gov.in/img/pages/medium-desktop/take-a-ride-in-the-toy-train-1653978188_8ac904b5bdb228abad78.webp)"}}><StyledTypography align="center" variant="h4"></StyledTypography></StyledBox>
                <StyledBox sx={{backgroundImage:"url(https://static.toiimg.com/thumb/msid-96865237,width-1280,height-720,resizemode-4/96865237.jpg)"}}><StyledTypography align="center" variant="h4"></StyledTypography></StyledBox>
                <StyledBox sx={{backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMkpJP-UjbhXf2j6ixvT0SBPBPPBELy6kqMg&usqp=CAU)"}}><StyledTypography align="center" variant="h4"></StyledTypography></StyledBox>

            </Stack>
            <br></br>
            <h1>TRAVEL DESTINATIONS</h1>
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
            <h1>ADVENTURES</h1>
            <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:5,sm:6,md:8}} mt={4}>
                <StyledBox sx={{backgroundImage:"url(https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cheight=675%2Cq=85%2Cwidth=1200/wp-content/uploads/hot-air-balloon-day2.jpg)"}}><StyledTypography align="center" variant="h5"></StyledTypography></StyledBox>
                <StyledBox sx={{backgroundImage:"url(https://img.traveltriangle.com/blog/wp-content/uploads/2018/06/acj-0506-paragliding-in-kalimpong-8.jpg)"}}><StyledTypography align="center" variant="h5"></StyledTypography></StyledBox>
                <StyledBox sx={{backgroundImage:"url(https://sagunabaug.com/wp-content/uploads/2017/06/DSC2332.jpg)"}}><StyledTypography align="center" variant="h5"></StyledTypography></StyledBox>
                <StyledBox sx={{backgroundImage:"url(https://imgmedia.lbb.in/media/2023/04/642e901c3f755b46b63c82f0_1680773148311.jpg)"}}><StyledTypography align="center" variant="h5"></StyledTypography></StyledBox>
            </Stack>
            <br></br>
        </Box>
    )
    };
export default Categories;
