import React from 'react';
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProducts from './Checkoutproducts';
import { Divider } from '@material-ui/core';
import { getbaskettotal } from './reducer';
import { Button } from 'semantic-ui-react';

const Checkout = () => {
    const [{basket}]=useStateValue();
    return ( 
        <div className="Checkout">
            {basket?.length === 0 ?(
                <div className="empty">
                    
                    <h2 className="empty_basket">Your Shopping Basket is empty. Please Add items to your basket and return !!</h2>
                    <img src="https://collabkart.com/img/empty-cart.gif" alt=""/>
                    
                </div>
            ):(//if basket not empty
                <div className="stuff">
                    <div className="notempty">
                        <h1>Your Shopping Basket</h1>
                        <Divider/>
                        {basket.map(item=>(
                            <CheckoutProducts
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            Price={item.Price}
                        />
                        ))}
                    </div>

                    {/*subtotal*/}

                    <div className="subtotal">
                        <h1>Subtotal</h1>
                        <Divider/>
                        <h3 className="basket_total">
                            <small>Basket Total:</small> Rs. {getbaskettotal(basket)}
                        </h3>
                        <p>Total Items: {basket.length}</p>
                        <Button basic color="red">Proceed</Button>
                    </div>
                </div>
             
            )}
            
        </div>
     );
}
 
export default Checkout;