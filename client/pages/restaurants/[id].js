import axios from 'axios';
import React from 'react';
import { URL } from "../../environment/index";


const RestaurantDetails = ({ restaurant }) => {
    return (
        <div>
            <h3>{restaurant.name}</h3>
            <p>{restaurant.town}</p>
            <p>{restaurant.city}</p>
            <p>{restaurant.category}</p>
            <p>{restaurant.point}</p>
            <p>Welcome to Restaurant Detail Page</p>
        </div>
    )
};

export const getStaticPaths = async () => {
    let restaurants;
    try {
        const response = await axios.get(`${URL}/api/restaurants`);
        restaurants = response.data;
    } catch (e) {
        throw e;
    }

    const paths = restaurants.map(rest => {
        return {
            params: {id: rest.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    let restaurant;
    try {

      const res = await axios.get(`${URL}/api/restaurants/${context.params.id}`)
       restaurant = res.data;
    }catch(e){
        throw e;
    }

    return {
        props: {
            restaurant
        }
    }
}

export default RestaurantDetails;


