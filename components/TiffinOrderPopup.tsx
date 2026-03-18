"use client";
import { useState } from "react";

export default function TiffinService({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
    const [landmark, setLandmark] = useState("");
    const [error, setError] = useState("");

  // ✅ MOVE THIS INSIDE COMPONENT
  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        const address = await getAddressFromCoords(latitude, longitude);
        setAddress(address); // ✅ now works
      },
      () => {
        alert("Permission denied or failed");
      }
    );
  };

  const getAddressFromCoords = async (lat: number, lng: number) => {
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
      );

      const data = await res.json();
      return data.display_name || "Address not found";
    } catch {
      return "Failed to fetch address";
    }
  };

  const handleOrder = () => {
      if (!name.trim() || !address.trim() || !landmark.trim()) {
        setError("⚠️ Please fill all the details before ordering");
        return;
      }

      setError("");

      const phoneNumber = "919958508707";

      const message = `🍱 *Tiffin Order Request* %0A%0A
    👤 *Name:* ${name} %0A
    📍 *Address:* ${address} %0A
    🏠 *Landmark:* ${landmark} %0A%0A
    💰 *Price:* ₹150 per tiffin %0A
    🚚 *Delivery:* Free upto 1km %0A%0A
    🙏 Please confirm my order.`;

      const url = `https://wa.me/${phoneNumber}?text=${message}`;

      window.open(url, "_blank");
    };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

      <div className="bg-white p-6 rounded-xl w-full max-w-md">

        <h2 className="text-xl font-bold mb-4">Enter Details</h2>

        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-2 mb-3 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          placeholder="Your Address"
          className="w-full border p-2 mb-3 rounded"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
         <button
          onClick={getCurrentLocation}
          className="text-sm text-blue-600 mb-3 bg-blue-50 px-3 py-1 rounded"
        >
          📍 Use Current Location
        </button>

        <input
          type="text"
          placeholder="Landmark"
          className="w-full border p-2 mb-3 rounded"
          value={landmark}
          required
          onChange={(e) => setLandmark(e.target.value)}
        />


       

        <div className="flex justify-between">
          <button onClick={onClose} className="text-gray-500">
            Cancel
          </button>

          <button
            onClick={handleOrder}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Order on WhatsApp
          </button>
        </div>

        <div className="mt-4 text-sm text-gray-500">
            Order Details:
            <p>Price: ₹150 per tiffin</p>
        </div>

         
        {error && (
            <p className="text-red-500 text-sm mb-3 text-center py-4">
                {error}
            </p>
        )}

      </div>
    </div>
  );
}