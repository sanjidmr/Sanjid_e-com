import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState("");

  const fetchImage = async () => {
    const url = "https://dummyjson.com/image/200x100";
    setImageUrl(url);
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div
      id="Product"
      className="w-60 h-80 bg-gray-300 p-3 flex flex-col gap-1 rounded-2xl my-2"
    >
      <Link to={"/Product"} >
      <div
        className="h-48 bg-gray-700 rounded-xl flex items-center justify-center overflow-hidden cursor-pointer"
        onClick={() => navigate(`/product/${product.id}`)}
      >
        {imageUrl ? (
          <img
            alt={product.name}
            src={imageUrl}
            className="w-full h-full object-cover rounded-xl"
          />
        ) : (
          <span className="text-white">Loading...</span>
        )}
      </div></Link>

      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <span
              className="text-xl font-bold text-green-700 cursor-pointer"
              onClick={() => navigate(`/product/${product.id}`)} 
            >
              {product.name}
            </span>
            <p className="text-xs text-gray-700">ID: {product.id}</p>
          </div>
          <span className="font-bold text-green-800 text-2xl">
            ${product.price}
          </span>
        </div>
        <button className="hover:bg-green-700 text-gray-50 bg-green-800 py-2 rounded-md">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
