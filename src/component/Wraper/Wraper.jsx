import React from 'react'
import { Boton, Container, Imagen, Texto } from './WraperStyled'
import { Swiper, SwiperSlide } from 'swiper/react'
import './swiperStyle.css'

import 'swiper/css/autoplay '
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";



// import required modules
import { EffectCoverflow, Pagination,Autoplay } from "swiper";

export const Wraper = () => {



    return (
        <Container>
            <Texto>
                <div>
                    <h1>
                        EstanComerce
                    </h1>
                    <span>Tienda Onlie Comercio Electronico</span>
                    <Boton>
                        <a href="#productos">Productos</a>

                    </Boton>
                </div>
            </Texto>
            <Imagen>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
            
                    autoplay={true}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination , Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="https://res.cloudinary.com/dmrkgkvpo/image/upload/v1666482104/mmwwnewz2uxf9w2kxayj.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://res.cloudinary.com/dmrkgkvpo/image/upload/v1667449528/unnamed_f5p1md.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://res.cloudinary.com/dmrkgkvpo/image/upload/v1667449508/enviar-con-mrw-feature_uloase.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://res.cloudinary.com/dmrkgkvpo/image/upload/v1667449841/2910404_zc6ps4.jpg" alt="" />
                    </SwiperSlide>

                </Swiper>

            </Imagen>
        </Container>
    )
}
