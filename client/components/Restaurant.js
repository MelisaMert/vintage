import Link from "next/Link";

const Restaurant = ({ restaurant }) => {
    return (<>
       <Link id={restaurant.id} href={`/restaurants/${restaurant.id}`}>
           <a className="card">
               <h4>{restaurant.name}</h4>
               <p><span className="town">{restaurant.town} / </span><span className="city">{restaurant.city}</span></p>
               <p>{restaurant.category}</p>
               <p>Point <span className="point">{restaurant.point}</span></p>
           </a>
       </Link>
    
       <style jsx>
         {`
            .card {
                margin:1rem;
                flex-basix:45%;
                padding: 1rem;
                text-align: left;
                color:inherit;
                text-decoration: none;
                border: 1px solid #eaeaea;
                border-radius: 10px;
                transition: color 0.15s ease, border-color 0.15s ease;
           }

           .city {
              color: green;
           }

           .town {
               font-size: 14px;
           }

           .point {
               font-size: 17px;
               color:green;
               
           }
         `}
        </style>
    </>)

}

export default Restaurant;