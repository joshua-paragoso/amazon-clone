import React from 'react'
import "./Subtotal.css"
import CurrenyFormat from "react-currency-format"
// import { Button } from '@material-ui/core'
import { useStateValue } from "./StateProvider";

function Subtotal() {

    const [ {basket}] = useStateValue();
    
    //total cost of item
    const calculatedTotal = (basket) => {
       let total =  basket.reduce((price, item) => 
            price + item.price
        , 0);  
        
        return total
    }
    return (
        <div className='subtotal'>
            <CurrenyFormat

                renderText={(value) => (
                    //Focus on p tag and small
                    <>
                        <p>
                            {/*Part of the Homework*/}
                            Subtotal ({basket?.length} items):
                                <strong> {calculatedTotal(basket)} </strong>
                        </p>

                        <small className="subtotal__gift">
                            <input type="checkbox" />
                            This order contains a gift 
                        </small>
                    </>
                )}
                
               
                decimalScale={2}
                value={0} // This is where you do day 2 hmwkr 
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button> Proceed to checkout</button>
        </div>
    );
}

export default Subtotal
