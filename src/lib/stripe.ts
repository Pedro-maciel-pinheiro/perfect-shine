import { config } from "../types/config"
import Stripe from "stripe"


// export const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_PUBLISHABLE_KEY ?? "" ,{
//     apiVersion:"2024-12-18.acacia",
//     typescript:true
// })

export const stripe = new Stripe(config.stripe.secretKey || "api_key_placeholder" ,{
    apiVersion:"2024-06-20",
    typescript:true
})