import { QuantityControlsProps } from "@/types/type";
import React from "react";
import { Button } from "../ui/button";
import { Minus, Plus } from "lucide-react";
import { perfectshine_font } from "@/constant/font";

export const QuantityControls = ({
  quantity,
  onIncrease,
  onDecrease,
}: QuantityControlsProps) => {
  return (
    <div className="flex items-center space-x-2 mx-3">
      <Button
        onClick={onDecrease}
        variant={"outline"}
        size={"sm"}
        className="h-6 w-6 rounded-full p-0"
      >
        <Minus className="h-4 w-4" />
      </Button>

      <span
        className={`w-5 text-center font-semibold mt-1 ${perfectshine_font.className}`}
      >
        {quantity}
      </span>

      <Button
        onClick={onIncrease}
        variant={"outline"}
        size={"sm"}
        className="h-6 w-6 rounded-full p-0"
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
};
