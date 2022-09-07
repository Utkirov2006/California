import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./main.css";

// import required modules
import { Pagination, Navigation } from "swiper";

import iphone from '../../img/Iphone.png';
import wacht from '../../img/wacht.png';
import apple from '../../img/apple.png';


export default function App() {
      return (
            <>
<div className="main">

                  <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        <SwiperSlide>
                              <div className="iphone_title">
                                    <h1 className="h1_title">The new phones are <br /> here take a look.</h1>
                                    <li className="d-none d-xl-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est <br /> dui, aliquam, tempor. Faucibus morbi turpis.
                                    </li>
                              </div>

                              <img  src={iphone} />

                        </SwiperSlide>
                  
                        <SwiperSlide>
                              <div className="iphone_title">
                                    <h1 className="h1_title">The new apple are <br /> here take a look.</h1>
                                    <li className="d-none d-xl-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est <br /> dui, aliquam, tempor. Faucibus morbi turpis.
                                    </li>
                              </div>

                              <img  src={apple} />
                        </SwiperSlide>

                        <SwiperSlide>
                              <div className="iphone_title">
                                    <h1 className="h1_title">The new wacht are <br /> here take a look.</h1>
                                    <li className="d-none d-xl-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est <br /> dui, aliquam, tempor. Faucibus morbi turpis.
                                    </li>
                              </div>

                              <img id="watch_swiper" src={wacht} />
                        </SwiperSlide>
                  </Swiper>
                  </div>

            </>
      );
}
