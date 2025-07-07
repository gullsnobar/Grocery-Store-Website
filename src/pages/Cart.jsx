import React from 'react';
import { ShoppingCart, Plus, Minus, Trash2 } from 'lucide-react';

const Cart = ({ cart, onUpdateQuantity, onRemoveItem, cartTotal, cartCount }) => {
  if (cart.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
        <ShoppingCart size={48} className="mx-auto mb-4 text-gray-400" />
        <p className="text-gray-500 text-lg">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
        <ShoppingCart size={24} />
        Shopping Cart ({cartCount} items)
      </h2>
      
      <div className="space-y-4">
        {cart.map(item => (
          <div key={item.id} className="flex items-center justify-between py-4 border-b border-gray-100">
            <div className="flex items-center gap-4">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div>
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                <p className="text-gray-500 text-sm">{item.weight}</p>
                <p className="font-medium" style={{ color: '#019376' }}>
                  ${item.price} each
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                  className="p-1 rounded-full hover:bg-gray-100"
                  disabled={item.quantity <= 1}
                >
                  <Minus size={16} className={item.quantity <= 1 ? 'text-gray-300' : 'text-gray-600'} />
                </button>
                <span className="w-8 text-center font-medium">{item.quantity}</span>
                <button
                  onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  <Plus size={16} className="text-gray-600" />
                </button>
              </div>
              
              <div className="text-right">
                <p className="font-bold text-lg" style={{ color: '#019376' }}>
                  ${(parseFloat(item.price) * item.quantity).toFixed(2)}
                </p>
              </div>
              
              <button
                onClick={() => onRemoveItem(item.id)}
                className="p-2 text-red-500 hover:bg-red-50 rounded-full"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex justify-between items-center text-xl font-bold">
          <span>Total:</span>
          <span style={{ color: '#019376' }}>${cartTotal.toFixed(2)}</span>
        </div>
        <button
          className="w-full mt-4 text-white font-medium py-3 px-4 rounded-lg transition-colors"
          style={{ backgroundColor: '#019376' }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#017a65'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#019376'}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;