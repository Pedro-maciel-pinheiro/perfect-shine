"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    stripe: {
        publicKey: process.env.NEXT_PUBLIC_STRIPE_SECRET_PUBLISHABLE_KEY,
        secretKey: process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY
    }
};
