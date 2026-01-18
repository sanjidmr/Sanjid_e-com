import React from "react";
import { Link } from "react-router-dom";
import j from "../Images/j.jpg";

function ProductPage() {
  return (
    <div className="container mx-auto p-6 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        <div className="border rounded-lg p-4 bg-white w-[300px] ml-32">
          <img
          className="h-[300px]"
            src={j}
            alt="Product"
          />
        </div>

        <div>
          <h1 className="text-3xl font-semibold mb-3">
            Wireless Bluetooth Headphone
          </h1>

          <div className="mb-4">
            <span className="text-3xl font-bold text-green-800">৳2,999</span>
            <span className="line-through text-gray-700 ml-3">৳3,999</span>
          </div>

          <p className="mb-6 text-gray-900">
            High quality wireless headphone with noise cancellation,
            long battery life and premium sound quality.
          </p>

          <div className="flex items-center gap-4 mb-6">
            <span className="font-medium">Quantity:</span>
            <select className="border rounded px-3 py-1 bg-amber-400 text-black">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>

          <div className="flex gap-4">
            <button className="bg-green-600 hover:bg-green-500 text-black px-6 py-3 rounded font-semibold">
              Add to Cart
            </button>

            <Link
              to="/cart"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded font-semibold"
            >
              Buy Now
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t pt-6">
        <h2 className="text-xl font-semibold mb-3">Product Details</h2>
        <ul className="list-disc ml-6 text-gray-900 space-y-2">
          <li>Bluetooth Version: 5.0</li>
          <li>Battery Life: Up to 20 hours</li>
          <li>Charging Time: 2 hours</li>
          <li>Warranty: 1 Year</li>
        </ul>
      </div>
    </div>
  );
}

export default ProductPage;
