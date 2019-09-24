var stripe = Stripe('pk_test_SJ2a6jFKQeWCM47U3qbGHjfP00txxh25Je');
const stripeSession = document.addEventListener('DOMContentLoaded', function() {
    const session = document.querySelector('#checkout').dataset.stripe;
    document.querySelector('#checkout').addEventListener('click', function() {
        stripe.redirectToCheckout({
            // Make the id field from the Checkout Session creation API response
            // available to this file, so you can provide it as parameter here
            // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
            sessionId: session,
          }).then(function (result) {
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer
            // using `result.error.message`.
          });
    })    
})


