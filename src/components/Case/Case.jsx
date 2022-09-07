import React from 'react';

import './Case.css'

import CaseImg from "../../img/CaseImg.png"
const Case = () => {
      return (
            <div className="case">

                  <h2 className="text-center pt-5">Ideas have a place here</h2>

                  <li className='list-unstyled text-center pb-5'>Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</li>

                  <div className="case_main d-block d-xl-flex">
                        <div className="case_left">
                              <img src={CaseImg} className="w-100" />

                        </div>
                        <div className="case_right">
                              <p>We Make It Easy To Find The Great Design Talent, Easier...</p>
                              <p>Road Design Handbook For The International Road...</p>
                              <p>The Best Kept Secrets About Creative People</p>
                              <p>We Make It Easy To Find The Great Design Talent, Easier...</p>
                        </div>


                  </div>
                  <h4 className="text-center py-3">See all <i class="bi bi-arrow-up-right-square"></i></h4>

            </div>
      );
};

export default Case;