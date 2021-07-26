import React from 'react'
import './Orders.css'
import { useStateValue } from "./StateProvider";
import tick from './tick.png'



function Orders() {

  const [{ basket, user }, dispatch] = useStateValue();

  return (
      <div className='orders'>
        <div class = 'confirmation'>
        </div>

        <div  class = 'order_confirmation'>
          <div>
            <h1><span class = 'normal'>Hey</span> {user?.email},</h1>
          </div>

          <div class = 'confirm_para'>
            <p><span class = 'tick'><img src = {tick}/></span> Your Order is confirmed !</p>
          </div>

          <div class = 'para'>
            <p>Thanks for shopping! Your order hasn't shipped yet, but we'll send you email when it does.</p>
          </div>

        </div>

      </div>
  )

}

export default Orders
