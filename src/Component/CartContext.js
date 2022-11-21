import React, { useContext } from "react";
import { Scrollbars } from 'react-custom-scrollbars-2';
import Item from "./Item";
import { CartData } from "./Cart";

const CartContext = () => {
  // const [items, setitems] = useState(products);
  const { items, totalItem, clearCart, totalAmount } = useContext(CartData);
  return (
    <>
      <div className='continueshoping'>
        <header>

          <div className='logo'>
            <img src="./image/arrow.jpg" alt='arrow' className='arrow' />
            <h4>continue shopping</h4>
          </div>

          <div className='add'>
            <img src='./image/cart.svg' alt='cart' className='cart' />
            <p> {totalItem} </p>
          </div>

        </header>
        <hr />

        <div className='shopping'>
          <h3> Shopping Cart</h3>
          <p>you have <span> {totalItem} </span> items in shopping cart</p>
        </div>

        <div className='itemscontainer'>
          <Scrollbars>
            {
              items.map((value) => {
                return <Item key={value.id} {...value} />
              })
            }
          </Scrollbars>
        </div>

        <div className='last'>
          <h4 className='carttotal'>Cart Total: <span> {totalAmount}₹ </span></h4>
          <button className='butt'>CheckOut</button>
          <button className="butt4" onClick={clearCart}>clearCart</button>
        </div>

      </div>
    </>
  )
}
export default CartContext;