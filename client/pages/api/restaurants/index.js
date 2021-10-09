import {Restaurants} from '../../../restaurants';

export default(req,res) => {
    if(req.method === 'GET') {
        res.status(200).json(Restaurants);
    } else if(req.method === 'POST'){
        const restaurant = req.body.restaurant;
        const newRestaurant = {
            name: restaurant.name,
            town: restaurant.town,
            city: restaurant.city,
            category: restaurant.category
        };
        res.status(201).json(newRestaurant);
        Restaurants.push(newRestaurant);
    }
}

