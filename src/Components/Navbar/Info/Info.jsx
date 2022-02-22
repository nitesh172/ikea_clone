import React from 'react'
import "./Info.css"
import { GoInfo} from "react-icons/go"


export const Info = () => {
  return (
    <div>
        <div id='blackB'>
            <div id='textBox'>
                <div><GoInfo className='color'></GoInfo> </div>
                <div className='bText'>
                    Get 10% cashback on transactions of Rs.10,000 or more on Citi credit & debit cards. *T&C apply.
                </div>
            </div>
        </div>
    </div>
  )
}
