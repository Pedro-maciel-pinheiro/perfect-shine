"use client"
import React, { useEffect, useState } from "react";
import { useCart } from "@/components/cart/use-cart";
import { Button } from "@/components/ui/button";
import { AddToCartButtonProps } from "@/types/type";




export const AddToCartButton = ({product , className}:AddToCartButtonProps , ) => {
  const { addItem , clearCart} = useCart();
  const [isSuccess, setIsSucess] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSucess(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, [isSuccess]);

  return (
    <Button
      onClick={() => {
         addItem(product)
        setIsSucess(true);
      }}
      size={"lg"}
      className={`${className}`}
    >
      <p className="mt-1">{isSuccess ? "Added!" : "Add to Cart"}</p>
    </Button>
  );
};
