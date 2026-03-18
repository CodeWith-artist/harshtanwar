"use client";

import Banner from "@/components/Banner";
import ServiceToggle from "@/components/ServiceToggle";
import { useMemo, useState } from "react";
import MenuList from "@/components/MenuList";
import {CartBar} from "@/components/CartBar";

import { menu } from "@/lib/menu";
import TiffinService from "@/components/TiffinService";

export default function OrderPage() {
    const [serviceType, setServiceType] = useState<"tiffin" | "menu">("tiffin");
    const [cart, setCart] = useState<any[]>([]);

    const addToCart = (item: any) => {
        const exists = cart.find((i) => i.id === item.id);
        if (exists) {
        setCart(cart.map((i) => i.id === item.id ? { ...i, qty: i.qty + 1 } : i));
        } else {
        setCart([...cart, { ...item, qty: 1 }]);
        }
    };

    const removeFromCart = (id: number) => {
        setCart(cart.map((i) => i.id === id ? { ...i, qty: i.qty - 1 } : i).filter((i) => i.qty > 0));
    };

    const total = useMemo(() => cart.reduce((acc, item) => acc + item.price * item.qty, 0), [cart]);
        
    const filteredMenu = serviceType === "menu" ? menu : [];

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");

    const handleWhatsApp = () => {
        let message = "🧾 *New Order*\n\n";
        cart.forEach((item, i) => {
        message += `${i + 1}. ${item.name} x ${item.qty} = ₹${item.price * item.qty}\n`;
        });
        message += `\n💰 Total: ₹${total}`;
        message += `\n👤 Name: ${name}`;
        message += `\n📍 Address: ${address}`;

        const url = `https://wa.me/919958508707?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

  return (
    <main className="max-w-7xl mx-auto " >
        <div className="p-4 space-y-4">
            <Banner
                title="Delicious Meals Delivered to Your Doorstep"
                subtitle="Choose from our Tiffin Service or Menu Order"
                image="/food.jpg"
            />
            <ServiceToggle
                selected={serviceType}
                onChange={setServiceType}
            />

            {serviceType === "tiffin" ? (
                <div>
                    <TiffinService />
                </div>
                ) : (
                <>
                    <div className="relative">
                        <MenuList
                            items={filteredMenu}
                            cart={cart}
                            addToCart={addToCart}
                            removeFromCart={removeFromCart}
                        />

                        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center px-4 rounded-2xl">
                            <div className="bg-white/90 rounded-2xl shadow-xl p-6 text-center max-w-sm">
                                
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                    🚧 Coming Soon
                                </h2>

                                <p className="text-gray-600 text-sm leading-relaxed">
                                    We are currently offering only <span className="font-semibold text-gray-800">tiffin service</span>.  
                                    Full menu will be available very soon!
                                </p>

                            </div>
                        </div>
                    </div>
                </>
            )}

           
        </div>
         {cart.length > 0 && (
            <CartBar cart={cart} total={total} handleWhatsApp={handleWhatsApp} />
        )}
    </main>
    
  );
}

