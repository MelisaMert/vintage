import Head from 'next/head';
import axios from 'axios';
import RestaurantList from '../../components/RestaurantList';
import { URL } from "../../environment/index";


export default function Restaurants({ restaurants }) {
    return (
        <>
            <Head>
                <title>Restaurants</title>
                <link rel="icon" href="/vercel.svg" />
            </Head>
            <RestaurantList restaurants={restaurants} />
        </>
    )
}

export const getStaticProps = async () => {
    let restaurants;
    try {
        const response = await axios.get(`${URL}/api/restaurants`);
        restaurants = response.data;
    } catch (e) {
        throw e;
    }

    return {
        props: {
            restaurants
        }
    }
}