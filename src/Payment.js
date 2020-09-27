import React from 'react';
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import {useStateValue} from "./StateProvider";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

function Payment() {

    const [{basket, user}, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = e => {
        //do all fancy strip
    }

    const handleChange = e=> {
        
    }
    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout (<Link to="/checkut">{basket?.length} times</Link>)
                </h1>
               
                {/* Payment section - delivery address */}
                <div className='payment__section'>
                   
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>

                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>123 fantasy ave</p>
                        <p>Pearl City, HI</p>
                    </div>

                </div>

                {/* Payment section - Review items */}
                <div className='payment__section'>
                    
                    <div className='payment__title'>
                        <h3>Review items and Delivery</h3>
                    </div>

                    {/* Where products will be dispalyed from checkout basket*/}
                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                {/* Payment section - payment method */}
                <div className='payment__section'>
                    
                    <div className='payment__title'>
                        <h3>Payment method</h3>
                    </div>

                    <div className='payment__details'>
                        {/*Stripe magic will go */}

                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
