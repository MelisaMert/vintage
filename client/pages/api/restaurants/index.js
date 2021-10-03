import {Restaurants} from '../../../restaurants';

export default(req,res) => {
    res.status(200).json(Restaurants);
}