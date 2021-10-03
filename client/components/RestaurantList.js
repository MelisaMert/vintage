import Grid from '@mui/material/Grid';
import Restaurant from './Restaurant';

export default function RestaurantList({ restaurants }) {
    return (
        <>
            <Grid container>
                {
                 restaurants.map(restaurant => (
                    <Grid id={restaurant.id} item xs={5} md={4}>
                        <Restaurant restaurant={restaurant} />
                    </Grid>
                 ))}
               
            </Grid>
        </>
    )
}

