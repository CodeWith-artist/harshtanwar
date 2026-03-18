"use client";

import Image from "next/image";

type Props = {
  item: {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
  };
  cart: any[];
  addToCart: (item: any) => void;
  removeFromCart: (id: number) => void;
};

export default function MenuItemCard({
  item,
  cart,
  addToCart,
  removeFromCart,
}: Props) {
  const cartItem = cart.find((i) => i.id === item.id);

  return (
    <div className="flex items-center justify-between bg-white p-3 rounded-xl shadow-sm">
      
      {/* LEFT: Image */}
      <div className="w-20 h-20 relative shrink-0">
        <Image
          src={item.image}
          alt={item.name}      
          fill
          className="rounded-lg object-cover"
        />
      </div>

      {/* CENTER: Info */}
      <div className="flex-1 px-3">
        <h3 className="font-semibold text-sm">{item.name}</h3>
        <p className="text-xs text-gray-500 line-clamp-2">
          {item.description}
        </p>
        
      </div>

      {/* RIGHT: Quantity Controls */}
      <div className="flex items-center">
          <span className="text-sm font-medium text-gray-900 p-4">₹{item.price}/-</span>
        {cartItem ? (
          <div className="flex items-center gap-2 bg-gray-100 px-2 py-1 rounded-lg">
            <button
              onClick={() => removeFromCart(item.id)}
              className="px-2 text-lg"
            >
              -
            </button>
            <span className="text-sm">{cartItem.qty}</span>
            <button
              onClick={() => addToCart(item)}
              className="px-2 text-green-600 font-bold"
            >
              +
            </button>
          </div>
        ) : (
          <button
            onClick={() => addToCart(item)}
            className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm"
          >
            Add
          </button>
        )}
      </div>
    </div>
  );
}