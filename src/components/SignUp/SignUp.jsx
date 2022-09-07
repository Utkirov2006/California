import React from 'react';

import './signUp.css'
import SignUpImg from "../../img/SignUpImg.png";
const SignUp = () => {
      return (
            <div className="sign-up d-block text-center col-xl-8 col-12  mx-auto m-4">
                  <h2 className="pt-5 pb-2">Never miss a thing</h2>
                  <p className="pb-2">Sign up for texts to be notified about our best offers on the perfect gifts.</p>
                  <img src={SignUpImg} />

                  <div className="input-group py-4 w-50  mx-auto">
                        <input type="text" className="form-control " aria-label="Text input with segmented dropdown button" placeholder='Your email' />
                        <button type="button" className="btn btn-outline-secondary">Sign up</button>


                  </div>
            </div>

      );
};

export default SignUp;