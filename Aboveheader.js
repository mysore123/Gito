import React from 'react';
import './Abovehead.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Aboveheader = () => {
    return ( 
    <div class="w3-container">

    <div class="w3-bar w3-light-grey">
        <a href="/" class="w3-bar-item w3-button">Home</a>
        <a href="/more" class="w3-bar-item w3-button">More Products</a>
        <div class="w3-dropdown-hover">
        <button class="w3-button">Help</button>
        <div class="w3-dropdown-content w3-bar-block w3-card-4">
            <a href="#" class="w3-bar-item w3-button">Disputes & Reports</a>
            <a href="#" class="w3-bar-item w3-button">Customer Service</a>
        </div>
        </div>
        <div>
            <a href="/login" class="w3-bar-item w3-button">Account</a>
            <AccountCircleIcon className="account_logo"/>
        </div>
    </div>
    </div>
     );
}
 
export default Aboveheader;