import React from 'react'
import "./Subtotal.css"
import CurrenyFormat from "react-currency-format"
import { Button } from '@material-ui/core'

function Subtotal() {
    return (
        <div className='subtotal'>
            <CurrenyFormat

                renderText={(value) => (
                    //Focus on p tag and small
                    <>
                        <p>
                            {/*Part of the Homework*/}
                            Subtotal (0 items):
                                <strong> 0 </strong>
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
