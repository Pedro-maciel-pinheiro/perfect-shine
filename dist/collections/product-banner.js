"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductBanner = void 0;
exports.ProductBanner = {
    slug: "Product-banner",
    access: {
        update: function (_a) {
            var req = _a.req;
            return req.user.role === "admin";
        },
        delete: function (_a) {
            var req = _a.req;
            return req.user.role === "admin";
        },
        create: function (_a) {
            var req = _a.req;
            return req.user.role === "admin";
        },
    },
    fields: [
        {
            name: "title",
            label: "Title",
            type: "text",
            required: true,
        },
        {
            name: "description",
            type: "textarea",
            label: "Product details",
        },
        {
            name: "images",
            type: "array",
            label: "Product Images",
            minRows: 1,
            maxRows: 1,
            required: true,
            labels: {
                singular: "Image",
                plural: "Images",
            },
            fields: [
                {
                    name: "image",
                    type: "upload",
                    relationTo: "media",
                    required: true,
                },
            ],
        },
    ]
};
