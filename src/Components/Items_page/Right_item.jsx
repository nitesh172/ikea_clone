import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { addItemCart, getUserCart, updateItemCount } from '../../Redux/Cart/actionCart';
import { getItem } from '../../Redux/Item/actionItem';
export const Right_item = () => {
    const email = "innocentkp004@gmail.com";
    const { item } = useSelector((store) => store.item);
    const { userCart } = useSelector((store) => store.userCart);
    const dispatch = useDispatch();

    const {id} = useParams();


    useEffect(() => {
        axios.get(`https://ikeaserver.herokuapp.com/products/${id}`).then(({ data }) => {
            dispatch(getItem(data));
        });
        axios.get(`https://ikeaserver.herokuapp.com/cart/email=${email}`).then(({ data }) => dispatch(getUserCart(data.cartItem)));
    }, []);
    console.log(userCart);
    const addToCart = () => {
        let flag = false;
        for (let i = 0; i < userCart.length; i++) {
            if (userCart[i]._id === item._id) {
                flag = true;
                userCart[i].count += 1;
                console.log(userCart)
                axios.patch(`https://ikeaserver.herokuapp.com/cart/email=${email}`, { cartItem: userCart }).then(({ data }) => {
                    console.log(data);
                });
                break;
            }
        }
        if (!flag) {
            item.count = 1;
            console.log(item)
            userCart.push(item);
            console.log(userCart)
            axios.patch(`https://ikeaserver.herokuapp.com/cart/email=${email}`, { cartItem: userCart }).then(({ data }) => {
                console.log(data);
            });
        }
    }
    return (
        <div className='item-right-container'>
            <div className="item-right-top">
                <div className="item-right-name">
                    <p className='large'>{item.companyName}</p>
                    <p className='gray'><span>{item.name}, </span><span>{item.color}</span></p>
                    <p className='gray'>Price incl. of all taxes</p>
                </div>
                <div className="item-right-price large">
                    <p> <span className='small'>Rs.</span>{item.price}</p>
                </div>
            </div>
            <div className="item-right-middle">
                <p>Eligible for delivery?</p>
                <input type="number" name="pin" id="pin" placeholder="400001" />
                <button>Check</button>
            </div>
            <button className='item-add-to-cart-btn' onClick={addToCart}>Add to shopping cart</button>
            <p>Check in-store stock</p>
        </div>
    )
}