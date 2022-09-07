import React from 'react';

import './cardsLeft.css'

const CardsLeft = (props) => {
      return (
            <div className="cards-left ">

                  <img className=" py-1" src={props.img} />
                  <h3 className=" py-2">{props.name}</h3>
                  <li className="text-start text-xl-center list-unstyled">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</li>
                  <h5 className='list-unstyled py-3'>{props.price}</h5>

            </div>
      );
};

export default CardsLeft;