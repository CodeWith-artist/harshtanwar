"use client";

import MenuItemCard from "./MenuItemCard";

type Props = {
  items: any[];
  cart: any[];
  addToCart: (item: any) => void;
  removeFromCart: (id: number) => void;
};

export default function MenuList({
  items,
  cart,
  addToCart,
  removeFromCart,
}: Props) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((item) => (
        <MenuItemCard
          key={item.id}
          item={item}
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
    </div>
  );
}