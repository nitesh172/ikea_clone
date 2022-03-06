import React from 'react'
import { MainFooter } from '../Footer/MainFooter'
import { Navbar } from '../Navbar/Navbar'
import "./item.css"
import { Left_item } from './Left_item'
import { Right_item } from './Right_item'

export const Item = () => {
    return (
        <>
            <Navbar />
            <div className='item-container'>
                <Left_item />
                <Right_item />
            </div>
            <MainFooter />
        </>
    )
}
