import { CollectionConfig } from "payload/types";



export const ProductBanner:CollectionConfig = {
    slug: "Product-banner",
    access:{
        update: ({ req }) => req.user.role === "admin",
        delete: ({ req }) => req.user.role === "admin",
        create: ({ req }) => req.user.role === "admin",
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
}