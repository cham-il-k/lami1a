import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'

const StripeCheckoutButton = ({ price }) => {
   require('dotenv').config()
  
  const priceForStripe = price * 10;
  const publishableKey = process.env.PUBLIC_KEY;

  const onToken = token => {
    axios.post({
      url:'payment',
      method:'post',
      data:{
        amount:priceForStripe,
        token
      }
   }).then(response => {
     alert('payment successful')
   }).catch(error => {
    console.log(JSON.parse(error))
     alert('Payment error! its a probleme with credit card');
   })
  };

  return (
    <StripeCheckout
      label='Pay'
      name='lami1a com.'
      billingAddress
      shippingAddress
      //image='https://svgshare.com/i/CUz.svg'
      description={`Your total is €${price}`}
      currency="EUR"
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
