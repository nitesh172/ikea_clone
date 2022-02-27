import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { addItemCart, getUserCart } from '../../Redux/Cart/actionCart';
import { getItem } from '../../Redux/Item/actionItem';


export const Right_item = () => {
    const email = "niteshkumarbaghel172456@gmail.com";

    const {id} = useParams()

    const {item} = useSelector((store) => store.item);

    const {userCart} = useSelector((store) => store.userCart);

    const dispatch = useDispatch();

    // useEffect(() => {
    //     // 6218ea318583e28c226da42b
    //     // 62191b549628e139b440418b
    //621b005cf1defe58e55e7d54

    //     axios.get("https://ikeaserver.herokuapp.com/products/6218ea318583e28c226da42b").then(({ data }) => {
    //         dispatch(getItem(data));
    //     });
    //     // axios.get("http://localhost:4545/products/1").then(({ data }) => {
    //     //     dispatch(getItem(data));
    //     // });
    //     // 

    //     axios.get(`https://ikeaserver.herokuapp.com/cart/email=${email}`).then(({ data }) => dispatch(getUserCart(data.cartItem)));

    // }, []);
    useEffect(() => {
        axios.get(`https://ikeaserver.herokuapp.com/products/${id}`).then(({ data }) => {
            dispatch(getItem(data));
        });

        axios.get(`https://ikeaserver.herokuapp.com/cart/email=${email}`).then(({ data }) => console.log(data));

    }, []);

    // console.log(item)

 
    // console.log(item)
    // console.log("cart", userCart);

    // // console.log("item", item)

    // // userCart = !userCart ? [] : userCart;
    // if(!userCart) {
    //     dispatch(getUserCart([]))
    // }
    //     // console.log(userCart);
    // const addToCart = () => {
        
    //     // console.log(userCart[0]._id);
    //     // console.log(item.item);

    //     // // if users cart is empty simply post
    //     if (userCart.length === 0) {

    //         item.count = 1;
    //         axios.post("https://ikeaserver.herokuapp.com/cart", { userId: email, cartItem: item.item }).then(({data}) => dispatch(addItemCart(data.cartItem)));


    //     } else { 
    //         let flag = false;
    //         for(let i=0; i<userCart.length; i++) {
    //             if(userCart[i]._id === item._id ){ // if cart already has the item, increasing the count 
    //                 flag = true;
    //                 userCart[i].count += 1;
    //                 axios.patch(`https://ikeaserver.herokuapp.com/cart/email=${email}`, {cartItem: userCart}).then(({data}) => console.log(data))
    //                 break;
    //             }
    //         }
    //         // user doen't have the item in his/her cart
    //         if(!flag) {
    //             item.item.count = 1;
    //             userCart.push(item);
    //             axios.patch(`https://ikeaserver.herokuapp.com/cart/email=${email}`, {cartItem: userCart}).then(({data}) => console.log(data))
    //         }
    //     }




    // };

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

            <button className='item-add-to-cart-btn' >Add to shopping cart</button>

            <p>Check in-store stock</p>
        </div>
    )
}
