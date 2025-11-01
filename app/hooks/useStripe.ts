import { loadStripe, Stripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";

export function useStripe() {
  const [stripe, setStripe] = useState<Stripe | null>(null)

  useEffect(() => {
    async function loadStripeAsync() {
      const stripeInstance = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUB_KEY!)
      setStripe(stripeInstance)
    }

    loadStripeAsync()
  }, [])

  async function createStripeCheckout({ isSubscription, metadata } : {
    metadata: any,
    isSubscription: boolean
  }) {
    try {
      const response = await fetch(`/api/stripe/create-checkout`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ metadata, isSubscription })
      })

      const { url } = await response.json()

      if(url) {
        window.location.href = url
      }
      
      console.log(url)
    } catch(error) {
      console.error(error)
    }
  }

  return {
    createStripeCheckout
  }
}