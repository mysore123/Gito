import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import './Home.css';
import Product from './Product';

const Home = () => {
    return ( 
        <div className="main">
            <div className="carousel">
           <    AliceCarousel autoPlay autoPlayInterval="2500"  className="slider" buttonsDisabled={true} dotsDisabled={true}>
                    <img src="https://ae01.alicdn.com/kf/H27acc0e2438143efb3bff2b6a28f50adk.png" className="sliderimg" alt=""/>
                    <img src="https://ae01.alicdn.com/kf/Hf3454dd75a5c4be9b66dd5c6acd1de69w.png" className="sliderimg" alt=""/>
                    <img src="https://ae01.alicdn.com/kf/H220b7e754ed84d6c91dd6a99917bc1afe.gif" className="sliderimg" alt=""/>
                    <img src="https://ae01.alicdn.com/kf/Hfd5f826ebd2b4436ab630bf8ac5ed859r.png" className="sliderimg" alt=""/>
                    <img src="https://ae01.alicdn.com/kf/He3c7d83f6cd84f4790ede82b112b18adY.gif" className="sliderimg" alt=""/>
                </AliceCarousel>
            </div>

            <div className="card1">
                <h1>Flash Deals</h1>
                <div className="product">
                    <div className="ind">
                    <Product 
                        id="1"
                        title="One Plus 8"
                        Price={42000}
                        image="https://images-na.ssl-images-amazon.com/images/I/61n6Ovq6EdL._SL1500_.jpg"
                        Description=""
                    />
                    </div>
                    <div className="ind">
                    <Product 
                        id="2"
                        title="Lumberg USB Cable"
                        Price={750}
                        image="https://images-na.ssl-images-amazon.com/images/I/71t0CHXO4-L._SL1500_.jpg"
                        Description=""
                    />
                    </div>
                    <div className="ind">
                    <Product 
                        id="3"
                        title="JoyAlukas Diamond Ring"
                        Price={54000}
                        image="https://images-na.ssl-images-amazon.com/images/I/71%2BitCiOb6L._UL1500_.jpg"
                        Description=""
                    />
                    </div>
                    <div className="ind">
                    <Product 
                        id="4"
                        title="Ivonne Unisex Sunglasses"
                        Price={5399}
                        image="https://images-na.ssl-images-amazon.com/images/I/61lXFJKVfXL._UL1500_.jpg"
                        Description=""
                    />
                    </div>
                </div>   
            </div>
            <div className="card2and3">
                <div className="card2">
                    <h1>Latest</h1>
                    <div>
                    <img src="https://i.pinimg.com/170x/dd/4e/6a/dd4e6a7bb6316964f9536f8f1558d3e2.jpg" className="card2ind" alt=""/>
                    <img src="https://i.pinimg.com/170x/cd/91/06/cd9106c99e2e87a82aa2e95a9bef173d--cooking-utensils-kitchen-products.jpg" className="card2ind" alt=""/>
                    <img src="https://2sm9sj4cxvj2ernk3i1nn9hb-wpengine.netdna-ssl.com/wp-content/uploads/sites/15/2020/06/TLatHome_Tracey-Coverlet-Stack-2020-400x400-150x150.jpg" className="card2ind" alt=""/>
                    </div>   
                </div>

                <div className="card3">
                    <h2>Best in Clothing</h2>
                    <div>
                    <img src="https://www.powerandcables.com/wp-content/uploads/2017/09/Arc-Flash-Polo-Shirt-Class-1-150x150.jpg" className="card2ind" alt=""/>
                    <img src="https://www.clootietree.com/blog/wp-content/uploads/2018/08/WR1800-350-x-500-150x150.jpg" className="card2ind" alt=""/>
                    <img src="https://images.yaoota.com/MHIhW_OJagHEbZEPg3-aWvxLWMo=/trim/fit-in/150x150/filters:quality(80)/yaootaweb-production-ng/media/crawledproductimages/e6c7ca6bafffc252c3087d10fc48d8ef88e8e1ab.jpg" className="card2ind" alt=""/>
                    </div>   
                </div>
            </div>


            <div className="card4">
                    <h2>Featured Brands</h2>
                    <div>
                    <img src="https://ae01.alicdn.com/kf/Hfcbfb173deab4586be1d030f63db5301h.png" className="card2ind" alt=""/>
                    <img src="https://ae01.alicdn.com/kf/H87dd214dc53c4bd8adf07f12c421b325t.png" className="card2ind" alt=""/>
                    </div>   
                </div>

        </div>
     );
}
 
export default Home;