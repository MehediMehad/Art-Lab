import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/bundle';
import { Autoplay, Pagination} from 'swiper/modules';

const Benner = () => {
    return (
        <>
        <div className="grid grid-cols-2 lg:mx-24 mt-4 mx-3 md:mt-24">
            <div className=" md:w-[667px] col-span-2 lg:col-span-1 items-center content-center">
                <div className="lg:pl-4">
                    <p className="text-secondary font-bold text-3xl">Art <span className="text-primary">Lab</span></p>
                    <p className='md:text-7xl text-3xl mt-2 font-light font-serif'>Innovation, Perfection And Creativity At It's Best Design</p>
                </div>
            </div>
            <div className="lg:col-span-1 col-span-2">
                <Swiper 
                    pagination={
                        {clickable:true}                    }
                    modules={[ Autoplay, Pagination]}
                    loop={true}
                    autoplay={
                        {delay:2000}
                    }

                >
                    <SwiperSlide><img className='w-[834px] h-[574px]' src="https://cdn.shopify.com/s/files/1/0625/3818/6989/files/1_07e7770a-7a1a-4dfe-83be-b502b2d47d57.jpg?v=1677310581" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-[834px] h-[574px]' src="https://cdn.shopify.com/s/files/1/0625/3818/6989/files/1_07e7770a-7a1a-4dfe-83be-b502b2d47d57.jpg?v=1677310581" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-[834px] h-[574px]' src="https://cdn.shopify.com/s/files/1/0625/3818/6989/files/1_07e7770a-7a1a-4dfe-83be-b502b2d47d57.jpg?v=1677310581" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-[834px] h-[574px]' src="https://cdn.shopify.com/s/files/1/0625/3818/6989/files/1_07e7770a-7a1a-4dfe-83be-b502b2d47d57.jpg?v=1677310581" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-[834px] h-[574px]' src="https://cdn.shopify.com/s/files/1/0625/3818/6989/files/1_07e7770a-7a1a-4dfe-83be-b502b2d47d57.jpg?v=1677310581"alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-[834px] h-[574px]' src="https://cdn.shopify.com/s/files/1/0625/3818/6989/files/1_07e7770a-7a1a-4dfe-83be-b502b2d47d57.jpg?v=1677310581" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-[834px] h-[574px]' src="https://cdn.shopify.com/s/files/1/0625/3818/6989/files/1_07e7770a-7a1a-4dfe-83be-b502b2d47d57.jpg?v=1677310581" alt="" /></SwiperSlide>
                </Swiper> 
            </div>
        </div>
        </>
    );
};

export default Benner;