import React from 'react';
import '../styles/OrderInfoCard.css';
import cupon from '../assets/cupon-icon.png';

const OrderInfoCard = () => {
  return (
    <>
      <div className='card-order'>
        <div className='upper-order'>
          <div className='order-info-header'>Order Info</div>
          <div className='order-info-detail'>
            <span className='sub'>Subtotal</span>
            <span className='sub-price'>THB 300</span>
          </div>
          <div className='order-info-actions'>
            <div className='left-order-actions'>
              <img src={cupon} alt='cupon' width={20} />
              <input
                className='input-promotion-code'
                placeholder='Promotion code'
              />
            </div>
            <button className='apply-bnt'>APPLY</button>
          </div>
        </div>
        <div className='divide-horizontal' />
        <div className='lowwer-order'>
          <div className='payment-detail'>
            <span className='payment-header'>Total payment</span>
            <span className='payment-price'>THB 300</span>
          </div>
          <div className='login-chechout-btn'>
            <button>LOG IN TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderInfoCard;
