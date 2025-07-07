import React, { useState } from "react";
import groceryBg from '../assets/Grocery.png';
import CartItem from '../components/CartItem';


import { Search, ShoppingCart, Plus, Minus } from "lucide-react";


const ProductCard = ({ product, onAddToCart, cartItems }) => {
  const cartItem = cartItems.find(item => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      transition: 'transform 0.2s, box-shadow 0.2s',
      cursor: 'pointer',
      width: '280px',
      margin: '0 auto'
    }}>
      {/* Product Image */}
      <div style={{
        width: '100%',
        height: '200px',
        backgroundColor: '#F9FAFB',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}>
        <img 
          src={product.image} 
          alt={product.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
        {product.discount && (
          <div style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            backgroundColor: '#FEF3C7',
            color: '#D97706',
            padding: '4px 8px',
            borderRadius: '6px',
            fontSize: '0.75rem',
            fontWeight: '600'
          }}>
            {product.discount}% OFF
          </div>
        )}
      </div>

      {/* Product Info */}
      <div style={{ padding: '1.5rem' }}>
        <h3 style={{
          fontSize: '1.125rem',
          fontWeight: '600',
          color: '#1F2937',
          margin: '0 0 0.5rem 0',
          lineHeight: '1.4'
        }}>
          {product.name}
        </h3>
        
        <p style={{
          fontSize: '0.875rem',
          color: '#6B7280',
          margin: '0 0 1rem 0'
        }}>
          {product.weight}
        </p>

        {/* Price Section */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          marginBottom: '1rem'
        }}>
          <span style={{
            fontSize: '1.25rem',
            fontWeight: '700',
            color: '#059669'
          }}>
            ${product.price}
          </span>
          {product.originalPrice && (
            <span style={{
              fontSize: '0.875rem',
              color: '#9CA3AF',
              textDecoration: 'line-through'
            }}>
              ${product.originalPrice}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
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
              transition: 'background-color 0.2s'
            }}
          >
            <ShoppingCart size={16} />
            Cart
          </button>
        ) : (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#F0FDF4',
            padding: '0.5rem',
            borderRadius: '8px',
            border: '1px solid #059669'
          }}>
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
                color: '#059669'
              }}
            >
              <Minus size={16} />
            </button>
            
            <span style={{
              fontSize: '1rem',
              fontWeight: '600',
              color: '#059669'
            }}>
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
                color: 'white'
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

const Cart = ({ cart,  cartTotal, cartCount }) => {
  if (cart.length === 0) {
    return (
      <div style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
        textAlign: 'center'
      }}>
        <p style={{ color: '#6B7280', fontSize: '1.125rem' }}>Your cart is empty</p>
      </div>
    );
  }

  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden'
    }}>
      {/* Cart Header */}
      <div style={{
        padding: '1.5rem',
        borderBottom: '1px solid #E5E7EB',
        backgroundColor: '#F9FAFB'
      }}>
        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: '600',
          color: '#1F2937',
          margin: 0
        }}>
          Your Cart ({cartCount} items)
        </h3>
      </div>

      {/* Cart Items */}
      <div style={{ padding: '1rem' }}>
        {cart.map(item => (
          <div key={item.id} style={{
            display: 'flex',
            alignItems: 'center',
            padding: '1rem',
            borderBottom: '1px solid #F3F4F6',
            gap: '1rem'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '8px',
              overflow: 'hidden',
              flexShrink: 0,
              backgroundColor: '#F9FAFB'
            }}>
              <img 
                src={item.image} 
                alt={item.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>

            <div style={{ flex: 1 }}>
              <h4 style={{
                fontSize: '1rem',
                fontWeight: '500',
                color: '#1F2937',
                margin: '0 0 0.25rem 0'
              }}>
                {item.name}
              </h4>
              <p style={{
                fontSize: '0.875rem',
                color: '#6B7280',
                margin: 0
              }}>
                ${item.price} x {item.quantity}
              </p>
            </div>

            <div style={{
              fontSize: '1rem',
              fontWeight: '600',
              color: '#1F2937'
            }}>
              ${(parseFloat(item.price) * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}
      </div>

      {/* Cart Footer */}
      <div style={{
        padding: '1.5rem',
        borderTop: '1px solid #E5E7EB',
        backgroundColor: '#F9FAFB'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1rem'
        }}>
          <span style={{
            fontSize: '1.125rem',
            fontWeight: '600',
            color: '#1F2937'
          }}>
            Total:
          </span>
          <span style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: '#059669'
          }}>
            ${cartTotal.toFixed(2)}
          </span>
        </div>
        
        <button style={{
          width: '100%',
          padding: '0.75rem 1.5rem',
          backgroundColor: '#059669',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '1rem',
          fontWeight: '600',
          cursor: 'pointer'
        }}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default function HomePage() {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [showCart, setShowCart] = useState(false);

  // Array of 32 products
  const products = [
    {
      id: 1,
      name: "Red Apples",
      weight: "1lb",
      price: "1.60",
      originalPrice: "2.00",
      discount: 20,
      image: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1%2FApples.jpg&w=1920&q=75"
    },
    {
      id: 2,
      name: "Baby Spinach",
      weight: "2 Pfund",
      price: "0.60",
      image: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2%2FBabySpinach.jpg&w=1920&q=75"
    },
    {
      id: 3,
      name: "Blueberries",
      weight: "1lb",
      price: "3.00",
      image: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F3%2Fblueberries.jpg&w=1920&q=75"
    },
    {
      id: 4,
      name: "Brussels Sprout",
      weight: "2lbs",
      price: "1.20",
      originalPrice: "1.50",
      discount: 15,
      image: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F4%2FBrusselsSprouts.jpg&w=1920&q=75"
    },
    {
      id: 5,
      name: "Clementines",
      weight: "1lb",
      price: "2.50",
      image: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F6%2Fclementines.jpg&w=1920&q=75"
    },
    {
      id: 6,
      name: "Sweet Corn",
      weight: "2lbs",
      price: "0.90",
      image: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F7%2FCorn.jpg&w=1920&q=75"
    },
    {
      id: 7,
      name: "Cucumber",
      weight: "2.5lb",
      price: "1.80",
      originalPrice: "2.20",
      discount: 18,
      image: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F8%2FCucumber.jpg&w=1920&q=75"
    },
    {
      id: 8,
      name: "Dates",
      weight: "1.5lb",
      price: "2.40",
      image: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F10%2FDates.jpg&w=1920&q=75"
    },
    {
      id: 9,
      name: "Green Beans",
      weight: "1lb",
      price: "1.70",
      image: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F12%2FGreenBeans.jpg&w=1920&q=75"
    },
    {
      id: 10,
      name: "Lime",
      weight: "1 head",
      price: "1.30",
      originalPrice: "1.60",
      discount: 19,
      image: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F13%2FGreenLimes.jpg&w=1920&q=75"
    },
    {
      id: 11,
      name: "Mango",
      weight: "1lbs",
      price: "2.99",
      image: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F14%2FMangoes.jpg&w=1920&q=75"
    },
    {
      id: 12,
      name: "Pepper",
      weight: "1lbs",
      price: "1.50",
      image: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F15%2FMiniPeppers.jpg&w=1920&q=75"
    },
    {
      id: 13,
      name: "Pears",
      weight: "1lb",
      price: "2.20",
      originalPrice: "2.80",
      discount: 21,
      image: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F16%2Fpears.jpg&w=1920&q=75"
    },
    {
      id: 14,
      name: "Peeled Baby Carrot",
      weight: "2pcs",
      price: "1.40",
      image: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F17%2FPeeled-Carrots.jpg&w=1920&q=75"
    },
    {
      id: 15,
      name: "Cherry",
      weight: "2pcs",
      price: "3.50",
      image: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F18%2FRedCherries.jpg&w=1920&q=75"
    },
    {
      id: 16,
      name: "Strawberry",
      weight: "2lbs",
      price: "3.20",
      originalPrice: "3.80",
      discount: 16,
      image: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F19%2Fstrawberry.jpg&w=1920&q=75"
    },
    {
      id: 17,
      name: "Mix Vegetable Platter",
      weight: "2lbs",
      price: "2.80",
      image: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F20%2FVeggiePlatter.jpg&w=1920&q=75"
    },
    {
      id: 18,
      name: "Fresh Beef",
      weight: "1lb",
      price: "1.90",
      image: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F188%2Fbeef_xkxhnb.jpg&w=1920&q=75"
    },
    {
      id: 19,
      name: "Lemon",
      weight: "4pcs",
      price: "1.60",
      originalPrice: "2.00",
      discount: 20,
      image: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F21%2FYellow-Limes.jpg&w=1920&q=75"
    },
    {
      id: 20,
      name: "Signature Salmon",
      weight: "1Pfund",
      price: "1.20",
      image: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F183%2FSignatureSalmon_fstp4m.jpg&w=1920&q=75"
    },
    {
      id: 21,
      name: "Sliced Turkey Breast",
      weight: "3lbs",
      price: "2.70",
      image: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F189%2Fsliced_turkey_breast_szb8jg.jpg&w=1920&q=75"
    },
    {
      id: 22,
      name: "Cod Fillet",
      weight: "1lb",
      price: "1.80",
      originalPrice: "2.20",
      discount: 18,
      image: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F184%2Fcodfillet_u0mti1.jpg&w=1920&q=75"
    },
    {
      id: 23,
      name: "Swordfish Fillet",
      weight: "1 head",
      price: "2.40",
      image: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F185%2Fswordfish_smniuv.jpg&w=1920&q=75"
    },
    {
      id: 24,
      name: "Halibut Fillet",
      weight: "3 heads",
      price: "0.80",
      image: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F186%2Fhalibut_jaz7ju.jpg&w=1920&q=75"
    },
    {
      id: 25,
      name: "Tilapia Fillet",
      weight: "4oz",
      price: "1.50",
      originalPrice: "1.80",
      discount: 17,
      image: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F187%2FTilapiaFillet_a2urhk.jpg&w=1920&q=75"
    },
    {
      id: 26,
      name: "Chicken Thighs",
      weight: "5lb",
      price: "2.10",
      image: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F190%2Fchicken_thigh_yrdfwh.jpg&w=1920&q=75"
    },
    {
      id: 27,
      name: "Chicken Breast",
      weight: "5lb",
      price: "3.80",
      originalPrice: "4.50",
      discount: 16,
      image: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F191%2Fchicken_brest_ribcxo.jpg&w=1920&q=75"
    },
    {
      id: 28,
      name: "Beef Steak",
      weight: "1 bunch",
      price: "1.40",
      image: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F192%2Fsteak_okxpjo.jpg&w=1920&q=75"
    },
    {
      id: 29,
      name: "Belmont Custard Cream",
      weight: "1lb",
      price: "1.60",
      image: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F193%2Fbelmont_custard_cream.jpg&w=1920&q=75"
    },
    {
      id: 30,
      name: "Crawford Digestives",
      weight: "1pc",
      price: "1.90",
      originalPrice: "2.40",
      discount: 19,
      image: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F194%2Fcrawford_digestives.jpg&w=1920&q=75"
    },
    {
      id: 31,
      name: "Crawford Shortie",
      weight: "1 bunch",
      price: "1.25",
      image: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F195%2Fcrawford_shortie.jpg&w=1920&q=75"
    },
    {
      id: 32,
      name: "Juli S Cheese Crackers",
      weight: "1lb",
      price: "2.30",
      originalPrice: "2.75",
      discount: 4,
      image: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F198%2Fjulis_cheese_crackers.jpg&w=1920&q=75"
    },
      {
      id: 33,
      name: "Happy Egg Organic",
      weight: "0.5lb",
      price: "2.30",
      originalPrice: "2.75",
      discount: 7,
      image: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F315%2Fegg_happy_egg_organic.jpg&w=1920&q=75"
    },
      {
      id: 34,
      name: "Cp Omega",
      weight: "1 pc(s)",
      price: "2.30",
      originalPrice: "2.75",
      discount: 6,
      image: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F316%2Fegg_cp.jpg&w=1920&q=75"
    },
      {
      id: 35,
      name: "Lotus Biscoff",
      weight: "1lb",
      price: "2.30",
      originalPrice: "2.75",
      image: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F201%2Flotus_biscoff.jpg&w=1920&q=75"
    },
      {
      id: 36,
      name: "Dairy Milk Crispello",
      weight: "1 pc(s)",
      price: "2.30",
      originalPrice: "2.75",
      discount: 16,
      image: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F203%2Fcadbury_dairy_milk_crispello.jpg&w=1920&q=75"
    },
         {
      id: 37,
      name: "Cadbury Zip",
      weight: "1 pc(s)",
      price: "2.30",
      originalPrice: "2.75",
      discount: 12,
      image: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F204%2Fcadbury_zip.jpg&w=1920&q=75"
    },
         {
      id: 38,
      name: "Everyday Essentials Wholemeal Bread",
      weight: "1 pc(s)",
      price: "2.30",
      originalPrice: "2.75",
      discount: 5,
      image: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F350%2FEveryday_Essentials_Wholemeal_Bread.jpg&w=1920&q=75"
    },
         {
      id: 39,
      name: "Roberts Seeded Bloomer",
      weight: "1 pc(s)",
      price: "2.30",
      originalPrice: "2.75",
      image: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F352%2Froberts_Seriously_Seeded_Bloomer.jpg&w=1920&q=75"
    },
         {
      id: 40,
      name: "Snikers Snack Size",
      weight: "1 pc(s)",
      price: "2.30",
      originalPrice: "2.75",
      image: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F213%2Fsnikers_snacksize.jpg&w=1920&q=75"
      
    }
  ];

  const handleAddToCart = (product, quantityChange = 1) => {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      const newQuantity = existingItem.quantity + quantityChange;
      if (newQuantity <= 0) {
        setCart(cart.filter(item => item.id !== product.id));
        setCartCount(cartCount - existingItem.quantity);
        setCartTotal(cartTotal - (parseFloat(existingItem.price) * existingItem.quantity));
        return;
      }
      
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: newQuantity }
          : item
      ));
      setCartCount(cartCount + quantityChange);
      setCartTotal(cartTotal + (parseFloat(product.price) * quantityChange));
    } else if (quantityChange > 0) {
      setCart([...cart, { ...product, quantity: quantityChange }]);
      setCartCount(cartCount + quantityChange);
      setCartTotal(cartTotal + (parseFloat(product.price) * quantityChange));
    }
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(productId);
      return;
    }

    const item = cart.find(item => item.id === productId);
    const quantityDiff = newQuantity - item.quantity;
    
    setCart(cart.map(item => 
      item.id === productId 
        ? { ...item, quantity: newQuantity }
        : item
    ));
    
    setCartCount(cartCount + quantityDiff);
    setCartTotal(cartTotal + (parseFloat(item.price) * quantityDiff));
  };

  const handleRemoveItem = (productId) => {
    const item = cart.find(item => item.id === productId);
    
    setCart(cart.filter(item => item.id !== productId));
    setCartCount(cartCount - item.quantity);
    setCartTotal(cartTotal - (parseFloat(item.price) * item.quantity));
  };

  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `url(${groceryBg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          padding: '0 20px',
        }}
      >
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color: '#1E293B',
          textAlign: 'center',
        }}>
          Groceries Delivered in 90 Minute
        </h1>

        <p style={{
          fontSize: '1.25rem',
          color: '#1E293B',
          marginTop: '1rem',
          textAlign: 'center',
        }}>
          Get your healthy foods & snacks delivered at your doorsteps all day everyday
        </p>

        <div style={{
          marginTop: '2rem',
          width: '100%',
          maxWidth: '800px',
          display: 'flex',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
          overflow: 'hidden',
        }}>
          <input
            type="text"
            placeholder="Search your products from here"
            style={{
              flexGrow: 1,
              padding: '1rem',
              fontSize: '1rem',
              border: 'none',
              outline: 'none',
            }}
          />
          <button
            style={{
              padding: '0 2rem',
              backgroundColor: '#019376',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <Search size={20} style={{ marginRight: '0.5rem' }} />
            Search
          </button>
        </div>
      </div>

      {/* Products Section */}
      <div style={{ backgroundColor: '#f9fafb', padding: '4rem 1rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '2rem',
            color: '#1E293B'
          }}>
            Fresh Products
          </h2>
          
          {/* Cart Summary */}
          {cartCount > 0 && (
            <div 
              style={{
                backgroundColor: '#019376',
                color: 'white',
                padding: '1rem',
                borderRadius: '8px',
                marginBottom: '2rem',
                textAlign: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
              }}
              onClick={() => setShowCart(!showCart)}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '1.125rem', fontWeight: '500' }}>
                  {cartCount} Items - ${cartTotal.toFixed(2)}
                </span>
                <span style={{ fontSize: '0.875rem' }}>
                  {showCart ? '▲ Hide Cart' : '▼ View Cart'}
                </span>
              </div>
            </div>
          )}
          
          {/* Cart Component */}
          {showCart && (
            <div style={{ marginBottom: '2rem' }}>
              <Cart 
                cart={cart}
                onUpdateQuantity={handleUpdateQuantity}
                onRemoveItem={handleRemoveItem}
                cartTotal={cartTotal}
                cartCount={cartCount}
              />
            </div>
          )}
          
          {/* Product Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.5rem',
            justifyItems: 'center'
          }}>
            {products.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={handleAddToCart}
                cartItems={cart}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}