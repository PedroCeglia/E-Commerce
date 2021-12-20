import React from 'react'
import './style.css'

// Import Widgets
import ItemProduto from '../../../Widgets/ItemProduto';

// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.min.css'

// import Swiper core and required modules
import SwiperCore,{ Navigation, Pagination, Autoplay} from 'swiper';
// install Swiper modules
SwiperCore.use([Pagination,Navigation,Autoplay]);



export default function Carrosel(props){
    return(
        <Swiper className='carrosel-produtos'
            // install Swiper modules
            modules={[Navigation, Pagination]}
            // Espaçamento e quantidade a ser exibido
            spaceBetween={10}
            slidesPerView={1}
            // Auto Play
            autoplay={{
                "delay": 2500,
                "disableOnInteraction": false
              }}
            // Loop
            loop={true} 
            loopFillGroupWithBlank={true}
            // Navegação e Paginação
            navigation={true}
            pagination={{ clickable: true }}
            // BreackPoints = MidiaQuerys
            breakpoints={{
                "640": {
                  "slidesPerView": 2,
                  "spaceBetween": 10
                },
                "980": {
                  "slidesPerView": 3,
                  "spaceBetween": 10
                },
                "1300": {
                  "slidesPerView": 4,
                  "spaceBetween": 10
                }
              }}
        >
            {
                props.list.map((produto, key )=> {
                    return(
                        <SwiperSlide className='slide'>
                            <ItemProduto
                                id={produto.id}
                                key={key}
                            />
                        </SwiperSlide>
                        
                    )
                })
            } 
        </Swiper>
    )
}
/*
<SwiperSlide className='slide'>
                <img src='../assets/fone-de-ouvido-jbl.jpeg' alt='Produto'/>
                <span>HeadSet JBL1</span>
            </SwiperSlide>
            <SwiperSlide className='slide'>
                <img src='../assets/fone-de-ouvido-jbl.jpeg' alt='Produto'/>
                <span>HeadSet JBL2</span>
            </SwiperSlide>
            <SwiperSlide className='slide'>
                <img src='../assets/fone-de-ouvido-jbl.jpeg' alt='Produto'/>
                <span>HeadSet JBL3</span>
            </SwiperSlide>
            <SwiperSlide className='slide'>
                <img src='../assets/fone-de-ouvido-jbl.jpeg' alt='Produto'/>
                <span>HeadSet JBL4</span>
            </SwiperSlide>
            <SwiperSlide className='slide'>
                <img src='../assets/fone-de-ouvido-jbl.jpeg' alt='Produto'/>
                <span>HeadSet JBL5</span>
            </SwiperSlide>
            <SwiperSlide className='slide'>
                <img src='../assets/fone-de-ouvido-jbl.jpeg' alt='Produto'/>
                <span>HeadSet JBL6</span>
            </SwiperSlide>            
*/