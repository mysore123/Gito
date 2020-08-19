import React from 'react';
import './Header.css';
import Divider from '@material-ui/core/Divider';
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from './StateProvider';

const Header = () => {
    const [{basket}]=useStateValue();
    //dispatch is used to send back to basket
    console.log(basket);   
    return ( 
        <div>
            <nav className="header">
                <Divider/>
                    <Link to="/">
                        
                        <img 
                            className="header_logo"
                            src="https://customer-service.xyz/wp-content/uploads/2019/10/aliexpress-logo.jpg"
                            alt="HeaderImage"
                        />
                        
                    </Link>
                    <div className="header_search">
                        <input type="text" className="header_SearchInput" placeholder="Search"/>
                        <SearchIcon className="header_SearchIcon"/>
                    </div>
                    {/*Links */}
                    <Link to="/checkout" className="basket_link">
                        <div className="header_basket">
                            <ShoppingBasketIcon className="basket_icon"/>
                            <p className="basket_count">{basket?.length}</p>
                        </div>
                    </Link>
                <Divider/>
            </nav>
        </div>
     );
}
 
export default Header;