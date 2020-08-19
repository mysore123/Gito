import React from 'react';
import './Checkoutproducts.css';
import { useStateValue } from './StateProvider';
import { Divider, Button } from 'semantic-ui-react';



const CheckoutProducts = ({id,title,Price,image}) => {
    const [{basket},dispatch]=useStateValue();

    const removefrombasket=()=>{
        dispatch({
            type:'Remove_Basket',
            id:id,
        });
    };

    return ( 
        <div>
            <div className="check_prod">
                <img src={image} alt="" className="image_prop"/>
                <div className="title_and_price">
                    <h2>{title}</h2>
                    <p>
                        <small>RS</small>   <strong>{Price}</strong>
                    </p>
                    <Button basic color="red" onClick={removefrombasket}>Remove</Button>
                </div>
                
            </div>
            <Divider/>
        </div>
        
     );
}
 
export default CheckoutProducts;