import React from "react";
import SupermarketMap from "../components/SupermarketMap";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <h1 className="text-3xl font-bold my-6">Smart Shelf Supermarket Layout</h1>
      <SupermarketMap />
    </div>
  );
}
