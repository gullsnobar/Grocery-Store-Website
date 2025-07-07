import React from 'react';
import { ShoppingCart, Plus, Minus } from 'lucide-react';

const CartItem = ({ product, quantity, onAddToCart }) => {
  return (
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        transition: 'transform 0.2s, box-shadow 0.2s',
        cursor: 'pointer',
        width: '280px',
        margin: '0 auto',
      }}
    >
      {/* Product Image */}
      <div
        style={{
          width: '100%',
          height: '200px',
          backgroundColor: '#F9FAFB',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        {product.discount && (
          <div
            style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              backgroundColor: '#FEF3C7',
              color: '#D97706',
              padding: '4px 8px',
              borderRadius: '6px',
              fontSize: '0.75rem',
              fontWeight: '600',
            }}
          >
            {product.discount}% OFF
          </div>
        )}
      </div>

      {/* Product Info */}
      <div style={{ padding: '1.5rem' }}>
        <h3
          style={{
            fontSize: '1.125rem',
            fontWeight: '600',
            color: '#1F2937',
            margin: '0 0 0.5rem 0',
            lineHeight: '1.4',
          }}
        >
          {product.name}
        </h3>

        <p
          style={{
            fontSize: '0.875rem',
            color: '#6B7280',
            margin: '0 0 1rem 0',
          }}
        >
          {product.weight}
        </p>

        {/* Price Section */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '1rem',
          }}
        >
          <span
            style={{
              fontSize: '1.25rem',
              fontWeight: '700',
              color: '#059669',
            }}
          >
            ${product.price}
          </span>
          {product.originalPrice && (
            <span
              style={{
                fontSize: '0.875rem',
                color: '#9CA3AF',
                textDecoration: 'line-through',
              }}
            >
              ${product.originalPrice}
            </span>
          )}
        </div>

        {/* Add to Cart or Quantity Controls */}
        {quantity === 0 ? (
          <button
            onClick={() => onAddToCart(product)}
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              backgroundColor: '#059669',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '0.875rem',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              transition: 'background-color 0.2s',
            }}
          >
            <ShoppingCart size={16} />
            Cart
          </button>
        ) : (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#F0FDF4',
              padding: '0.5rem',
              borderRadius: '8px',
              border: '1px solid #059669',
            }}
          >
            <button
              onClick={() => onAddToCart(product, -1)}
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '4px',
                border: '1px solid #059669',
                backgroundColor: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#059669',
              }}
            >
              <Minus size={16} />
            </button>

            <span
              style={{
                fontSize: '1rem',
                fontWeight: '600',
                color: '#059669',
              }}
            >
              {quantity}
            </span>

            <button
              onClick={() => onAddToCart(product, 1)}
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '4px',
                border: '1px solid #059669',
                backgroundColor: '#059669',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'white',
              }}
            >
              <Plus size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartItem;
