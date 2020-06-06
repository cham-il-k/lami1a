import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import options from './../../config'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = options.stripe_key;

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
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
