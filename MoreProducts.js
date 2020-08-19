import React from 'react';
import { Card, Image, Button, Divider } from 'semantic-ui-react';
import Product from './Product';
import './MoreProducts.css';

class MoreProducts extends React.Component {
   

    state={
        loading:false,
        items:[],
    }


    componentDidMount() {
        const url="http://demo-api.gitodemos.com/v1/product?include=details,variants,variants.vendor,variants&client_id=8&client_secret=0Ut3EQ2jONe33HBK9B31Db2DQ9NFDXyI1ouO3iaW";
        fetch(url).then(res=>res.json())
                    .then(json=>{
                        this.setState({
                            loading:true,
                            items:json,
                        })
                    });
    }

    render() { 
        var{ loading,items}=this.state;
        console.log(items.variants);
        if(!loading){
            return <div><h1 style={{textAlign:"center"}}>Loading....</h1></div>
        }
        else{
            return(
                <div className="main">
                    <h1>More Products</h1>
                    
                    {items.data.map(item=>(
                        <div className="MoreProducts">
                            <Product
                                title={item.product_name}
                                Price={item.variants.price}
                            />
                        </div>
                        
                    ))};
                </div>
            )
        }
    }
}
 
export default MoreProducts;