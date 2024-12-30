export const config ={
    stripe:{
        publicKey:process.env.NEXT_PUBLIC_STRIPE_SECRET_PUBLISHABLE_KEY,
        secretKey:process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY
    }
}