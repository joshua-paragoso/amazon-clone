import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal"

function Checkout(){
    const [{ basket }, dispatch] = useStateValue();
    return (

    <div className="checkout">
        <div className="checkout__left">
            <img className='checkout__ad' 
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492688_.jpg"
            alt=""
            /> 

            <div>
                <h2 className="checkout__title">
                    Your shopping basket
                </h2>
                
                <CheckoutProduct
                    // id={item.id}
                    // title={item.title}
                    // image={item.image}
                    // price={item.price}
                    // rating={item.rating}
                    id='12234'
                    title='test is a test'
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                    price={199.99}
                    rating={3}
                    />
                
                {basket.map(item => (
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
    
                ))}

                {/*Checkout product*/}
                {/*basket item*/}
                {/*basket item*/}

            </div>

        </div>

            <div className="checkout__right">
               
                <Subtotal/>
            </div>
    </div>
    );
}

export default Checkout;