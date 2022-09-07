// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import './wrapper.css'


// import required modules
import { FreeMode, Pagination } from "swiper";

import watch from "../../img/wacht.png";
import macbook from "../../img/macbook.png";
import apple from "../../img/apple.png";
export default function App() {
      return (
            <>

                  <div className="wrapper">

                        <h1 className="text-center pt-5">See the best around here</h1>

                        <li className='list-unstyled text-center pb-5'>Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</li>
                        <Swiper
                              slidesPerView={3}
                              spaceBetween={30}
                              freeMode={true}
                              pagination={{
                                    clickable: true,
                              }}
                              modules={[FreeMode, Pagination]}
                              className="mySwiper"
                        >
                              <SwiperSlide>
                                    <li class="list-unstyled py-2">Smart light bulb pack</li>
                                    <h5 className="py-2">Latest and gratest</h5>
                                    <button style={{ border: '1px solid black', borderRadius: "20px" }} className="w-50 py-2">Explore</button>
                                    <img src={watch} />
                              </SwiperSlide>


                              <SwiperSlide>
                                    <li class="list-unstyled py-2">Smart light bulb pack</li>
                                    <h5 className="py-2">Best selling</h5>
                                    <button style={{ border: '1px solid black', borderRadius: "20px" }} className="w-50 py-2">Explore</button>
                                    <img src={apple} />
                              </SwiperSlide>


                              <SwiperSlide>
                                    <li class="list-unstyled py-2">Smart light bulb pack</li>
                                    <h5 className="py-2">Every product</h5>
                                    <button style={{ border: '1px solid black', borderRadius: "20px" }} className="w-50 py-2">Explore</button>
                                    <img src={macbook} />
                              </SwiperSlide>

                              <SwiperSlide>
                                    <li class="list-unstyled py-2">Smart light bulb pack</li>
                                    <h5 className="py-2">Latest and gratest</h5>
                                    <button style={{ border: '1px solid black', borderRadius: "20px" }} className="w-50 py-2">Explore</button>
                                    <img src={watch} />
                              </SwiperSlide>


                              <SwiperSlide>
                                    <li class="list-unstyled py-2">Smart light bulb pack</li>
                                    <h5 className="py-2">Best selling</h5>
                                    <button style={{ border: '1px solid black', borderRadius: "20px" }} className="w-50 py-2">Explore</button>

                                    <img src={apple} />
                              </SwiperSlide>


                              <SwiperSlide>
                                    <li class="list-unstyled py-2">Smart light bulb pack</li>
                                    <h5 className="py-2">Every product</h5>
                                    <button style={{ border: '1px solid black', borderRadius: "20px" }} className="w-50 py-2">Explore</button>
                                    <img src={macbook} />
                              </SwiperSlide>

                        </Swiper>
                  </div>

            </>
      );
}