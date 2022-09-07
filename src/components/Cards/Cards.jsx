import React from 'react';
import CardsLeft from '../../pages/CardsLeft';

import "./cards.css"

import cardsImg1 from "../../img/CardsLeft1.png";
import cardsImg2 from "../../img/CardsLeft2.png";
import cardsImg3 from "../../img/CardsLeft3.png";
import cardsImg4 from "../../img/CardsLeft4.png";
const Cards = () => {
      return (
            <div className="cards">
                  <h2 className="text-center pt-5">Save on our most selled items.</h2>

                  <li className='list-unstyled text-center py-2'>Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</li>

                  <div className="cards_main d-block d-xl-flex justify-content-between">
                        <CardsLeft img={cardsImg1} name="MacBook Pro 13" price="$ 1,200.00 USD"/>
                        <CardsLeft img={cardsImg2} name="Smart Galaxy Watch 3" price="$ 199.00 USD"/>
                        <CardsLeft img={cardsImg3} name="MacBook Air M1" price="$ 1,009.00 USD"/>
                        <CardsLeft img={cardsImg4} name="iPad" price="$ 610.00 USD"/>
                  </div>

            </div>
      );
};

export default Cards;