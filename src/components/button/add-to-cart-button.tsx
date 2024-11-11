import React, { useEffect, useState } from "react";
import { useCart } from "@/components/cart/use-cart";
import { Button } from "@/components/ui/button";
import { ProductButtonProps } from "@/types/type";




export const AddToCartButton = ({product}:ProductButtonProps) => {
  const { addItem } = useCart();
  const [isSuccess, setIsSucess] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSucess(false);
    }, 1500);
    return () => clearTimeout(timeout);
  }, [isSuccess]);

  return (
    <Button
      onClick={() => {
        addItem(product)
        setIsSucess(true);
      }}
      size={"lg"}
      className="w-full"
    >
      <p className="mt-1">{isSuccess ? "Added!" : "Add to Cart"}</p>
    </Button>
  );
};
