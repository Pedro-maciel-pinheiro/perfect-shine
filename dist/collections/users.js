"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
exports.Users = {
    slug: "users",
    auth: {
    // verify:{
    //   generateEmailHTML: ({token}) => {
    //     return `<a href='${process.env.NEXT_PUBLIC_SERVER_URL}/verify-email?token=${token}'>verify account</a>`
    //   }
    // }
    },
    access: {
        read: function () { return true; },
        create: function () { return true; },
    },
    fields: [
        {
            name: "role",
            defaultValue: "user",
            required: true,
            // admin: {
            //   condition: () => false,
            // },
            type: "select",
            options: [
                { label: "Admin", value: "admin" },
                { label: "User", value: "user" },
            ],
        },
    ],
};
