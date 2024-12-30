"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripe = void 0;
var config_1 = require("../types/config");
var stripe_1 = __importDefault(require("stripe"));
// export const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_PUBLISHABLE_KEY ?? "" ,{
//     apiVersion:"2024-12-18.acacia",
//     typescript:true
// })
exports.stripe = new stripe_1.default(config_1.config.stripe.secretKey || "api_key_placeholder", {
    apiVersion: "2024-06-20",
    typescript: true
});
