import './Cart.css'
import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons.jsx'
import { useCart } from '../hooks/useCart'

export const Cart = () => {
  const cartCheckBoxId = useId()
  const {cart, clearCart, addToCart} = useCart()

  const CartItem = ({thumbnail, price, title, quantity, addToCart}) => {
    <il>
      <img
        src={thumbnail}
        alt={title}
      />
      <div>
        <strong>&{title}</strong> - ${price}
      </div>

      <footer>
        <small>
          qty: {quantity}
        </small>
        <button onClick={addToCart}>+</button>
      </footer>
    </il>
  }

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckBoxId}>
        <CartIcon/>
      </label>
      <input id={cartCheckBoxId} type='checkbox' hidden />
      
      <aside className='cart'>
        <ul>
          {cart.map(product => (
            <CartItem key={product.id}
            addToCart={()=> addToCart(product)}
            {...product} />
          ))}
        </ul>

        <button onClick={clearCart}>
          <ClearCartIcon/>
        </button>
      </aside>
 

    </>
  )
}