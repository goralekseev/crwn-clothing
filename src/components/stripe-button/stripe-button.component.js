import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) =>{
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KXbBkKaaCqgTe23XpdMmZGN2HLOAPf1uH65RNjjA5op9fbAP7FZo4VrVrFxoo8mTQz3DU8BmUpzgn5cTdMmcyMO00F8yM6tGo'

    const onToken = token =>{
        console.log(token)
        alert('Payment Successful')
    }

    return(
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image='http://svgshare.com/i/CUs.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;