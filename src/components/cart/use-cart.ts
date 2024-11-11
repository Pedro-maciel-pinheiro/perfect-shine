import { ProductsListProps } from "@/types/type";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

// add products
// remove products
// clear the cart
// keep track of products in cart

export type CartItem = {
  product: ProductsListProps;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  addItem: (product: ProductsListProps) => void;
  removeItem: (productId: string | number) => void;
  clearCart: () => void;
};

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (product) =>
        set((state) => {
          const existingItem = state.items.find(
            (item) => String(item.product.id) === String(product.id),
          );
          if (existingItem) {
            return {
              items: state.items.map((item) =>
                String(item.product.id) === String(product.id)
                  ? { ...item, quantity: item.quantity + 1 }
                  : item,
              ),
            };
          } else {
            return { items: [...state.items, { product, quantity: 1 }] };
          }
        }),
      removeItem: (id) =>
        set((state) => ({
          items: state.items
            .map((item) =>
              String(item.product.id) === String(id)
                ? { ...item, quantity: item.quantity - 1 }
                : item,
            )
            .filter((item) => item.quantity > 0),
        })),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
