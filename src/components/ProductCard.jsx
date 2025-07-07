import React from 'react';
import { ShoppingCart } from 'lucide-react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 w-full h-full flex flex-col">
      {/* Discount Badge */}
      {product.discount && (
        <div className="relative mb-4">
          <span className="absolute -top-2 -left-2 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            {product.discount}%
          </span>
        </div>
      )}
      
      {/* Product Image */}
      <div className="flex justify-center mb-6 flex-shrink-0">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-32 h-32 object-cover rounded-lg"
        />
      </div>
      
      {/* Product Details */}
      <div className="text-center flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">{product.name}</h3>
          <p className="text-gray-500 mb-4">{product.weight}</p>
          
          {/* Pricing */}
          <div className="mb-6">
            {product.originalPrice && (
              <span className="text-gray-400 line-through text-sm mr-2">
                ${product.originalPrice}
              </span>
            )}
            <span className="text-2xl font-bold" style={{ color: '#019376' }}>
              ${product.price}
            </span>
          </div>
        </div>
        
        {/* Add to Cart Button */}
        <button
          onClick={() => onAddToCart(product)}
          className="w-full text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
          style={{ backgroundColor: '#019376' }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#017a65'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#019376'}
        >
          <ShoppingCart size={20} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
