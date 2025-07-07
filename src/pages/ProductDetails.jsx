import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { Heart, Star, ShoppingCart, Plus, Minus, ArrowLeft, Share2 } from 'lucide-react';

const sampleProducts = [
  {
    id: 1,
    name: "Red Apples",
    weight: "1lb",
    price: "1.60",
    originalPrice: "2.00",
    discount: 20,
    image: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1%2FApples.jpg&w=1920&q=75",
    description: "Fresh, crisp red apples...",
    category: "fruits & vegetables",
    subcategory: "fruits",
    seller: "Fresh Farm",
    rating: 4.5,
    reviews: 156,
    availability: "15 pieces available",
    images: [
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1%2FApples.jpg&w=1920&q=75"
    ]
  },
  {
    id: 2,
    name: "Baby Spinach",
    weight: "2 Pfund",
    price: "0.60",
    image: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2%2FBabySpinach.jpg&w=1920&q=75",
    description: "Spinach is a leafy green...",
    category: "fruits & vegetables",
    subcategory: "vegetables",
    seller: "Grocery Shop",
    rating: 3.33,
    reviews: 89,
    availability: "10 pieces available",
    images: [
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2%2FBabySpinach.jpg&w=1920&q=75"
    ]
  },
  {
    id: 3,
    name: "Blueberries",
    weight: "1lb",
    price: "3.00",
    image: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F3%2Fblueberries.jpg&w=1920&q=75",
    description: "Juicy blueberries...",
    category: "fruits & vegetables",
    subcategory: "fruits",
    seller: "Berry Farm",
    rating: 4.8,
    reviews: 203,
    availability: "25 pieces available",
    images: [
      "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F3%2Fblueberries.jpg&w=1920&q=75"
    ]
  }
];

const ProductDetails = ({ onBack }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const productId = parseInt(id);
  const product = sampleProducts.find(p => p.id === productId) || sampleProducts[0];

  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleQuantityChange = (change) => {
    setQuantity(prev => Math.max(1, prev + change));
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
  };

  const handleShare = () => {
    try {
      if (navigator.share) {
        navigator.share({
          title: product.name,
          text: `Check out this product: ${product.name}`,
          url: window.location.href,
        });
      } else {
        navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    } catch (err) {
      console.error("Share failed:", err);
      alert("Sharing is not supported in this browser.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <button
          onClick={onBack || (() => window.history.back())}
          className="mb-6 flex items-center gap-2 px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100"
        >
          <ArrowLeft size={16} /> Back
        </button>

        <div className="bg-white rounded-xl shadow-md overflow-hidden grid md:grid-cols-2 gap-8 p-8">
          {/* Image Section */}
          <div>
            <div className="relative mb-4">
              <img
                src={product.images?.[selectedImageIndex] || product.image}
                alt={product.name}
                className="w-full h-[400px] object-cover rounded-md"
              />
              {product.discount && (
                <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {product.discount}% OFF
                </span>
              )}
            </div>
            {product.images?.length > 1 && (
              <div className="flex gap-2 justify-center">
                {product.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt=""
                    onClick={() => setSelectedImageIndex(index)}
                    className={`w-20 h-20 object-cover rounded-md cursor-pointer border-2 ${selectedImageIndex === index ? 'border-green-500' : 'border-gray-300'}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Info Section */}
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>
                <p className="text-gray-500">{product.weight}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`w-10 h-10 flex items-center justify-center border rounded-lg ${isFavorite ? 'bg-red-100 text-red-500' : 'bg-white text-gray-400'}`}
                >
                  <Heart size={20} fill={isFavorite ? 'currentColor' : 'none'} />
                </button>
                <button
                  onClick={handleShare}
                  className="w-10 h-10 flex items-center justify-center border rounded-lg text-gray-400 hover:bg-gray-100"
                >
                  <Share2 size={20} />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-green-600 text-white text-sm font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                <Star size={14} /> {product.rating}
              </div>
              <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
            </div>

            <p className="text-gray-600">{product.description}</p>

            <div className="flex items-baseline gap-4">
              <span className="text-3xl font-bold text-green-600">${product.price}</span>
              {product.originalPrice && (
                <span className="text-lg line-through text-gray-400">${product.originalPrice}</span>
              )}
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-600">Quantity</label>
              <div className="flex items-center gap-4 mt-2">
                <button onClick={() => handleQuantityChange(-1)} className="w-10 h-10 border rounded-lg text-gray-700 hover:bg-gray-100">
                  <Minus size={16} />
                </button>
                <span className="text-lg font-medium">{quantity}</span>
                <button onClick={() => handleQuantityChange(1)} className="w-10 h-10 border rounded-lg text-gray-700 hover:bg-gray-100">
                  <Plus size={16} />
                </button>
              </div>
              <p className="text-sm text-green-500 mt-1">{product.availability}</p>
            </div>

            <button
              onClick={handleAddToCart}
              className="mt-6 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg text-lg font-semibold flex items-center justify-center gap-2"
            >
              <ShoppingCart size={20} /> Add to Cart
            </button>

            <div className="text-sm text-gray-600 pt-4 border-t">
              <p><strong>Category:</strong> {product.category} → {product.subcategory}</p>
              <p><strong>Seller:</strong> {product.seller}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
