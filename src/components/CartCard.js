import React, { useRef } from 'react';
import '../styles/CartCard.css';
import del from '../assets/delete-btn.png';
import docsBlue from '../assets/file-icon-blue.png';
import docsOrange from '../assets/file-orange.png';
import { useDetectOutsideClick } from '../services/useDetectOutsideClick';
import caretUp from '../assets/angle-up-solid.svg';
import caretDown from '../assets/angle-down-solid.svg';

const CartCard = () => {
  const dropdownRef = useRef(null);

  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);

  const handleSelectLevel = () => setIsActive(!isActive);
  return (
    <>
    {/* mock up 1 */}
    <div className='card'>
      <div className='delete'>
        <button className='delete-btn'>
          <img src={del} alt='delete' width={35} height={35} />
        </button>
      </div>
      <div className='center-card-blue'>
        <div className='doc-type'>
          <img src={docsBlue} alt='document' width={15} height={15} />
        </div>
        <div className='doc-type-name'>
          <span className='doc-name'>Google Docs</span>
          <span className='doc-detail'>Used for business</span>
        </div>
      </div>
      <div className='right-card'>
        <span className='doc-header'>Google Docs</span>
        <div className='level-rate'>
          <div className='lv-1' />
          <div className='lv-2' />
          <div className='lv-3' />
          {/* <div className='lv-4' /> */}
          <div className='menu-trigger' onClick={handleSelectLevel}>
            LV 1-3
            &nbsp;
            <img src={caretUp} alt='caret-up' width={15} height={15} />
          </div>
          <nav
            ref={dropdownRef}
            className={`menu ${isActive ? 'active' : 'inactive'}`}
          >
            <ul>
              <li className='li-1'>&nbsp;&nbsp;LV 1-3</li>
              <li className='li-2'>&nbsp;&nbsp;LV 2-3 &nbsp; &nbsp;<i class="fa-solid fa-check" style={{ color: '#38e0c2' }} /></li>
              <li className='li-3'>&nbsp;&nbsp;LV 3-3</li>
            </ul>
          </nav>
        </div>
        <div className='price'>
            THB 150 
        </div>
      </div>
    </div>

    {/* mock up 2 */}
    <div className='card'>
      <div className='delete'>
        <button className='delete-btn'>
          <img src={del} alt='delete' width={35} height={35} />
        </button>
      </div>
      <div className='center-card-orange'>
        <div className='doc-type'>
          <img src={docsOrange} alt='document' width={15} height={15} />
        </div>
        <div className='doc-type-name'>
          <span className='doc-name'>Google Slides</span>
          <span className='doc-detail'>Used for business</span>
        </div>
      </div>
      <div className='right-card'>
        <span className='doc-header'>Google Slides</span>
        <div className='level-rate'>
          <div className='lv-1' />
          <div className='lv-1' />
          <div className='lv-1' />
          <div className='lv-4' />
          <div className='menu-trigger2'>
            LV 3/4
            &nbsp;
            <img src={caretDown} alt='caret-down' width={15} height={15} />
          </div>
        </div>
        <div className='price'>
            THB 150 
        </div>
      </div>
    </div>
    
    </>
    
    );
};

export default CartCard;
