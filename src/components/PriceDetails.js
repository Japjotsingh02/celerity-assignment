import React from 'react';
import { BookingCard } from './Summary/Summary.style';
import shipper from '../assets/Frame 47.svg'

function PriceDetails(props) {
    return (
        <BookingCard className='py-10 px-8'>
            <div className='flex'>
                <span className="font-[700] text-[23px]">Price details</span>
                <img src={shipper} alt='shipper' className='ml-5'/>
            </div>

        </BookingCard>
    );
}

export default PriceDetails;