

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./content.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function App() {
      return (
            <>
                  <div className="content">
                        <h2 className="text-center pt-5">Shop our latest offers and categories</h2>

                        <li className='list-unstyled text-center py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam, <br /> tempor. Faucibus morbi turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <Swiper
                              effect={"coverflow"}
                              grabCursor={true}
                              centeredSlides={true}
                              slidesPerView={"auto"}
                              coverflowEffect={{
                                    rotate: 50,
                                    stretch: 0,
                                    depth: 100,
                                    modifier: 1,
                                    slideShadows: true,
                              }}
                              pagination={true}
                              modules={[EffectCoverflow, Pagination]}
                              className="mySwiper"
                        >
                              <SwiperSlide>
                                    <img src="https://cdn.macbro.uz/macbro/4a88e820-35a1-4466-b7e6-ca11a3a9aa79" />
                              </SwiperSlide>


                              <SwiperSlide>
                                    <img src="https://openshop.uz/uploads/products/photos/202203/NIdaDLdY4QDGTNzvBhjnwvDUKBuLeGAfRk8f1sVS.jpg" />
                              </SwiperSlide>


                              <SwiperSlide>
                                    <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1591634795000" />
                              </SwiperSlide>

                              <SwiperSlide>
                                    <img src="https://www.apple.com/v/macbook-air/o/images/overview/hero_mba_m1__mfge6fbp7t2m_large.jpg" />
                              </SwiperSlide>

                              <SwiperSlide>
                                    <img src="https://i.insider.com/5ca7a2a36b526503fb3ce5d5?width=600&format=jpeg&auto=webp" alt="" />
                              </SwiperSlide>

                              <SwiperSlide>
                                    <img src="https://www.apple.com/v/macbook-air/o/images/overview/hero_mba_m2__ejbs627dj7ee_large.jpg" />
                              </SwiperSlide>


                              <SwiperSlide>
                                    <img src="https://i.ytimg.com/vi/pGOgfQBhnO0/maxresdefault.jpg" />
                              </SwiperSlide>




                              <SwiperSlide>
                                    <img src="https://www.ixbt.com/img/n1/news/2022/7/3/apple_iphone-13-pro_colors_09142021_large.jpg" />
                              </SwiperSlide>

                              <SwiperSlide>
                                    <img src="https://s.yimg.com/uu/api/res/1.2/4DOVIU.NCxVvPld67RFALA--~B/aD0xMzMzO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2022-03/de844380-a47d-11ec-b6be-9dd2ff775c4e.cf.jpg" />
                              </SwiperSlide>
                              <SwiperSlide>
                                    <img src="https://cdn.shopify.com/s/files/1/2187/5961/files/Apple_iPhone_14_Pro_-_all_round_1024x1024.jpg?v=1647594669" />
                              </SwiperSlide>

                              <SwiperSlide>
                                    <img src="https://assets.asaxiy.uz/product/items/desktop/cad87ad16130789485abc63ecd369ed42021102815535175907VF2Y3djqax.jpg.webp" />
                              </SwiperSlide>



                              <SwiperSlide>
                                    <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8&w=1000&q=80" />
                              </SwiperSlide>


                              <SwiperSlide>
                                    <img src="https://cdn.vox-cdn.com/thumbor/ssZyGCHX63CJnKVb9xghUSyoKmg=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/66976956/vpavic_211006_4796_0061.15.jpg" alt="" />
                              </SwiperSlide>

                             
                        </Swiper>
                  </div>

            </>
      );
}
