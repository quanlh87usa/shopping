import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {addItem, delItem} from '../redux/action/index'
import { NavLink } from 'react-router-dom'


const Cart = () => {
    const state = useSelector((state)=> state.handleCart)
    const dispatch = useDispatch()

    const handleClose = (item) => {
        dispatch(delItem(item))
    }

    const handleAddButton = (item) => {
        dispatch(addItem(item))
    }

    const handleDelButton = (item) => {
        dispatch(delItem(item))
    }

    const cartItems = (cartItem) => {
        return(
            <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
                <div className="container py-4">
                    <button onClick={()=>handleClose(cartItem)} className="btn-close float-end" aria-label="Close"></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4 bg-none">
                            <img src={cartItem.image} alt={cartItem.title} height="200px" width="180px" />
                        </div>
                        <div className="col-md-4">
                            <h3>{cartItem.title}</h3>
                            <p className="lead fw-bold">
                                ${cartItem.qty} X ${cartItem.price} = {cartItem.qty * cartItem.price} 
                            </p>
                            <button className="btn btn-outline-dark text-9xl font-bold" 
                            onClick={() => handleAddButton(cartItem)}>+</button>
                            <button className="btn btn-outline-dark text-9xl font-bold ms-2" 
                            onClick={() => handleDelButton(cartItem)}>-</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                    </div>
                </div>
        );
    }

    const button = () => {
        return(
            <div className="container">
                <div className="">
                    <button to="/checkout" className="btn btn-outline-dark ms-2 px-3 py-2">Proceed To checkout</button>
                    <NavLink className="btn btn-outline-dark ms-2 px-3 py-2" to="/products">Continue shopping</NavLink>
                </div>
            </div>
        );
    }

    return (
        <>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && button()}
        </>
    )
}

export default Cart