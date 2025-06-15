"use client"
import React, { useState } from 'react';

type QuantitySelectorProps = {
  initialQuantity?: number;
  onChange?: (quantity: number) => void;
};

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  initialQuantity = 1,
  onChange,
}) => {
  const [quantity, setQuantity] = useState<number>(initialQuantity);

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQty = quantity - 1;
      setQuantity(newQty);
      onChange?.(newQty);
    }
  };

  const handleIncrement = () => {
    const newQty = quantity + 1;
    setQuantity(newQty);
    onChange?.(newQty);
  };

  return (
    <div className="flex items-center gap-4  h-[30px] bg-primary text-white px-4 py-2 rounded-md w-fit">
      <button onClick={handleDecrement} className="text-lg font-bold">-</button>
      <span className="text-sm-normal">{quantity}</span>
      <button onClick={handleIncrement} className="text-lg font-bold">+</button>
    </div>
  );
};

export default QuantitySelector;
