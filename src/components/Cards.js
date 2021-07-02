import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Checkout the Amazing Features </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Related article related to Bitcoins'
              label='Bitcoin'
              path='https://zeenews.india.com/tags/bitcoin.html'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Related article related to Ethereum'
              label='Ethereum'
              path='https://www.moneycontrol.com/news/tags/ethereum.html/news/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Related article related to Cardano'
              label='Cardano'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Related article related to Dogecoin'
              label='Dogecoin'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Related article related to Ripple XPR'
              label='Ripple XPR'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;