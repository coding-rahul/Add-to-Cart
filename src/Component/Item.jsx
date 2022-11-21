import react, { useContext } from "react"
import { CartData } from "./Cart"
// import { CartData } from "./Cart";

const Item = ({ id, title, description, img, price, quantity }) => {
    const { removeItem, increment, decrement } = useContext(CartData);
    return (
        <>
            <div className='item'>
                <div className='img'>
                    <img className='img1' src={img} alt='arrow' />
                </div>

                <div className='title'>
                    <h4 className='sam'>{title}</h4>
                    <p className='clrn'>{description}</p>
                </div>

                <div className='increment'>
                    <button className='btn1' onClick={() => decrement(id)}> - </button>
                    <input className='mp' type="text" placeholder={quantity} />
                    <button className='btn2' onClick={() => increment(id)}> + </button>
                </div>

                <div className='price'>
                    <h3>{price}</h3>
                </div>

                <div className='delete'>
                    <img className='del' alt="delete" src='./image/delete.svg' onClick={() => removeItem(id)}></img>
                </div>

            </div>
            <hr />
        </>
    )
}
export default Item;