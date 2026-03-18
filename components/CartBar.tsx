export function CartBar({ cart, total, handleWhatsApp }: any) {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg">
      
      {/* Center Container (matches max-w-7xl) */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        
        {/* LEFT: Order Summary */}
        <div className="flex-1 overflow-hidden">
          <p className="text-sm font-medium">
            {cart.length} item{cart.length > 1 ? "s" : ""}
          </p>
         
          <p className="text-xs text-gray-500 truncate">
            {cart.map((item: any) => `${item.name} x${item.qty}`).join(", ")}
          </p>
        </div>

        {/* RIGHT: Total + Button */}
        <div className="flex items-center gap-3">
          <span className="font-semibold text-lg">₹{total}</span>

          <button
            onClick={handleWhatsApp}
            className="bg-black text-white px-4 py-2 rounded-xl text-sm"
          >
            Order
          </button>
        </div>
      </div>
    </div>
  );
}