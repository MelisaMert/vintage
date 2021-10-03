import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontSize: '17px',
    fontFamily: "Lucida Console, Courier, monospace"

}))


export default function PopularRestaurants() {
    return (
        <>
            <div style={{marginLeft: '30px'}}>
            <Typography 
               style={{fontFamily: "Lucida Console, Courier, monospace",paddingBottom: '30px',paddingLeft: '10px'}}
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
            Vintage Restaurants in and around Istanbul    
            </Typography>
            <Box sx={{ flexGrow: 3}}>
                <Grid container spacing={3}>
                    <Grid item xs={5} md={4}>
                         <Item>Moda</Item>
                         {/* <ArrowForwardIosIcon/> */}
                         
                        
                    </Grid>
                    <Grid item xs={5} md={4}>
                          <Item>Beyoğlu</Item>
                          {/* <ArrowForwardIosIcon/> */}
                    </Grid>
                    <Grid item xs={5} md={4}>
                          <Item>Taksim</Item>
                          {/* <ArrowForwardIosIcon/> */}
                         
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={4} md={4}>
                         <Item>Karaköy</Item>
                         {/* <ArrowForwardIosIcon/> */}
                   
                    </Grid>
                    <Grid item xs={4} md={4}>
                          <Item>Galata</Item>
                          {/* <ArrowForwardIosIcon/> */}
                         
                    </Grid>
                    <Grid item xs={4} md={4}>
                          <Item>Kuru Çeşme</Item>
                            {/* <ArrowForwardIosIcon/> */}
                          
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={4} md={4}>
                         <Item>Cihangir</Item>
                         {/* <ArrowForwardIosIcon/> */}
                   
                    </Grid>
                    <Grid item xs={4} md={4}>
                          <Item>Asmalı Mescit</Item>
                          {/* <ArrowForwardIosIcon/> */}
                    </Grid>
                    <Grid item xs={4} md={4}>
                          <Item>BakırKöy</Item>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={4} md={4}>
                         <Item>Cihangir</Item>
                         {/* <ArrowForwardIosIcon/> */}
                   
                    </Grid>
                    <Grid item xs={4} md={4}>
                          <Item>Asmalı Mescit</Item>
                          {/* <ArrowForwardIosIcon/> */}
                    </Grid>
                    <Grid item xs={4} md={4}>
                          <Item>BakırKöy</Item>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={4} md={4}>
                         <Item>Caddebostan</Item>
                         {/* <ArrowForwardIosIcon/> */}
                   
                    </Grid>
                    <Grid item xs={4} md={4}>
                          <Item>Çengelköy</Item>
                          {/* <ArrowForwardIosIcon/> */}
                    </Grid>
                    <Grid item xs={4} md={4}>
                          <Item>Koşuyolu</Item>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={4} md={4}>
                         <Item>Kalamış</Item>
                         {/* <ArrowForwardIosIcon/> */}
                   
                    </Grid>
                    <Grid item xs={4} md={4}>
                          <Item>Şişli</Item>
                          {/* <ArrowForwardIosIcon/> */}
                    </Grid>
                    <Grid item xs={4} md={4}>
                          <Item>Acıbadem</Item>
                    </Grid>
                </Grid>
            </Box>
          </div>
        </>
    )
}