import React from 'react'
import "./Subtotal.css"
import CurrenyFormat from "react-currency-format"
import { useStateValue } from "./StateProvider";
import { useHistory } from "react-router-dom";
import {getBasketTotal } from "./reducer";
import { HistoryTwoTone } from '@material-ui/icons';

function Subtotal() {

    const history = useHistory();
    const [ {basket},dispatch] = useStateValue();
    
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
                            {/* Subtotal ({basket.length} items):
                                <strong> ${calculatedTotal(basket)} </strong> */}
                                
                                 Subtotal ({basket.length} items):
                                <strong> ${calculatedTotal(basket)} </strong>

                        </p>

                        <small className="subtotal__gift">
                            <input type="checkbox" />
                            This order contains a gift 
                        </small>
                    </>
                )}
                
               
                decimalScale={2}
                // value={getBasketTotal(basket)} // This is where you do day 2 hmwkr 
                value={0} // This is where you do day 2 hmwkr 
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            {/*redirect tp payment */}
            <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
    </div>
    );
}

export default Subtotal
