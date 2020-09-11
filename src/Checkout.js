import React from "react";
import "./Checkout.css";

function Checkout(){
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

                {/*basket item*/}
                {/*basket item*/}
                {/*basket item*/}

            </div>

        </div>

            <div className="checkout__right">
                <Subtotal>
                    
                </Subtotal>
                <h2>The subtotal goes here</h2>
            </div>
    </div>
    );
}

export default Checkout;