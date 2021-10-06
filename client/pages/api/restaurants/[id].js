import {Restaurants} from '../../../restaurants';

export default (req,res) => {
    const {id} = req.query;
    const restaurant = Restaurants.find(res => res.id.toString() === id);
    if(restaurant) {
       res.status(200).json(restaurant);
    } else {
       res.status(404).json({
           message: "Error. No such Restaurant"
       })
    }
}