/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
'use client';

import {
  faChevronUp,
  faHandHoldingUsd,
  faVolumeLow,
  faSignOutAlt,
  faWallet,
} from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useUser } from '@/context/useUserContext';

import { SyncOutlined, CalendarFilled } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DownloadApp from '@/components/HomePage/DownloadApp';
import HomePageMobile from '@/components/HomePage/HomePageMobile';
import LiusSuarez from '@/components/HomePage/LiusSuarez';
import Marquee from 'react-fast-marquee';
import JackportComponent from '@/components/HomePage/Jackpot';
import DiverseProducts from '@/components/HomePage/DiverseProducts';
import GameHot from '@/components/HomePage/GameHot';
import MarqueeDesktop from '@/components/MarqueeDesktop';
import styles from '@/styles/homepage.module.css';
import Image from 'next/image';
import { img } from '@/constant/images';
import { useWindowSize } from 'react-use';
import { getImageQuality } from '@/utils';

const dataImgSlide = [
  'https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/banner/a.jpg',
  'https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/banner/b.jpg',
  'https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/banner/c.jpg',
  'https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/banner/d.jpg',
  'https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/banner/e.jpg',
];

export default function Home() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDangKi, setIsOpenDangKi] = useState(false);
  const [key, setKey] = useState(0);
  const [isOpenDangNhap, setIsOpenDangNhap] = useState(false);

  const [loadUser, setLoadUser] = useState(false);
  const { user, balance } = useUser();
  const { width } = useWindowSize()

  const handleDangNhap = () => {
    setIsOpenDangKi(false);
    setIsOpenDangNhap(true);
  };

  const handleDangKi = () => {
    setIsOpenDangKi(true);
    setIsOpenDangNhap(false);
  };

  // layout login
  let EmtyUser = () => {
    if (user) {
      return (
        <>
          <div
            className='flex w-full md:hidden'
            style={{
              background:
                'linear-gradient(rgb(18, 159, 113), rgb(18, 159, 113))',
            }}
          >
            <div className='w-[30%] p-2 grid place-content-center text-center font-sans'>
              <div className='w-auto text-[11px] text-white whitespace-nowrap'>
                Xin Chào : {user?.username}
              </div>
              <div className='flex gap-2 justify-center items-center text-[11px] text-yellow-400 px-4'>
                {balance}
                <SyncOutlined color='#ff0' />
              </div>
            </div>
            <div
              className='flex w-full justify-evenly'
              style={{
                background:
                  'linear-gradient(110deg,transparent 35px,#10825e 0) left',
              }}
            >
              <div
                onClick={() => router.push('/account/deposit')}
                style={{ color: 'rgb(255 227 19 / 1)' }}
                className=' grid justify-items-center  cursor-pointer justify-center items-center text-[10px] rounded-md my-[5px]'
              >
                <FontAwesomeIcon
                  icon={faWallet}
                  className='fas fa-sign-out-alt'
                  style={{ color: 'rgb(255 227 19 / 1)', fontSize: '26px' }}
                />
                Nạp tiền ngay
              </div>
              <div
                onClick={() => router.push('/account/withdraw-application')}
                style={{ color: 'rgb(255 227 19 / 1)' }}
                className='grid justify-items-center cursor-pointer justify-center items-center text-[10px] rounded-md my-[5px'
              >
                <FontAwesomeIcon
                  icon={faHandHoldingUsd}
                  className='fas fa-sign-out-alt'
                  style={{ color: 'rgb(255 227 19 / 1)', fontSize: '26px' }}
                />
                Rút tiền ngay
              </div>
              <div
                onClick={() => router.push('/account/withdraw-application')}
                style={{ color: 'rgb(255 227 19 / 1)' }}
                className='grid justify-items-center  cursor-pointer justify-center items-center text-[10px] rounded-md my-[5px'
              >
                <CalendarFilled
                  className='fas fa-sign-out-alt'
                  style={{ color: 'rgb(255 227 19 / 1)', fontSize: '26px' }}
                />
                Đăng ký
              </div>
            </div>
          </div>
        </>
      );
    }

    return (
      <div
        className='flex w-full md:hidden'
        style={{
          background: 'linear-gradient(rgb(18, 159, 113), rgb(18, 159, 113))',
        }}
      >
        <div className='w-[40%] p-2 grid place-content-center '>
          <div
            onClick={() => {
              // setIsOpenDangNhap(true)
              setIsOpenDangKi(true);
              setKey(1);
            }}
            style={{
              color: 'rgb(255 227 19 / 1)',
              border: '1px solid rgb(255, 227, 19)',
            }}
            className='px-[10px] w-[80px] cursor-pointer justify-center flex items-center text-[10px] rounded-md my-[5px]'
          >
            Đăng nhập
          </div>
          <div
            onClick={() => {
              setKey(2);
              setIsOpenDangKi(true);
            }}
            style={{
              color: 'rgb(255 227 19 / 1)',
              border: '1px solid rgb(255, 227, 19)',
            }}
            className='px-[10px] w-[80px] cursor-pointer justify-center flex items-center text-[10px] rounded-md my-[5px]'
          >
            Đăng ký
          </div>
        </div>
        <div
          className='flex w-full justify-evenly'
          style={{
            background:
              'linear-gradient(110deg,transparent 35px,#10825e 0) left',
          }}
        >
          <div
            onClick={() => router.push('/account/deposit')}
            style={{ color: 'rgb(255 227 19 / 1)' }}
            className=' grid justify-items-center px-[10px]  cursor-pointer justify-center items-center text-[10px] rounded-md my-[5px]'
          >
            <FontAwesomeIcon
              icon={faWallet}
              className='fas fa-sign-out-alt'
              style={{ color: 'rgb(255 227 19 / 1)', fontSize: '26px' }}
            />
            Nạp tiền ngay
          </div>
          <div
            onClick={() => router.push('/account/withdraw-application')}
            style={{ color: 'rgb(255 227 19 / 1)' }}
            className='grid justify-items-center px-[10px]  cursor-pointer justify-center items-center text-[10px] rounded-md my-[5px'
          >
            <FontAwesomeIcon
              icon={faHandHoldingUsd}
              className='fas fa-sign-out-alt'
              style={{ color: 'rgb(255 227 19 / 1)', fontSize: '26px' }}
            />
            Rút tiền ngay
          </div>
        </div>
      </div>
    );
  };

  const SampleNextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ${styles.nextArrow}`}
        style={{
          ...style,
        }}
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ${styles.nextArrow}`}
        style={{
          ...style,
        }}
        onClick={onClick}
      />
    );
  };

  return (
    <main className='max-sm:pb-[100px] max-sm:h-[calc(100vh-116px)] max-sm:overflow-y-auto  flex w-full sm:min-h-full flex-col items-center justify-between max-md:justify-start max-md:overflow-scroll max-sm:bg-[#111]'>
      <div className='block md:hidden w-full h-auto '>
        <div className='w-full h-[31px] flex items-center relative bg-[#222222] px-1'>
          <div className='absolute top-0 left-0 w-10 flex justify-center items-center h-full bg-[#222222] z-[3]'>
            <Image
              src={img.speaker}
              width={16}
              height={18}
              alt=''
              className='!w-[18px] !h-[16px]'
            />
          </div>

          <Marquee
            pauseOnHover
            gradientWidth={1000}
            className='w-full text-white leading-6 text-[12px] mx-2'
          >
            <span>
              HÃY CẨN THẬN CÁC ĐƯỜNG LINK GIẢ MẠO ĐÁNH CẮP THÔNG TIN DƯỚI ĐÂY :
            </span>
            <span>🆘 https://789bet.vip ⚠️ ( GIẢ MẠO ĐÁNH CẮP THÔNG TIN )</span>
            <span>
              🆘https://austinrose.com ⚠️ ( GIẢ MẠO ĐÁNH CẮP THÔNG TIN )
            </span>
            <span>
              🆘https://condorealtyinc.com ⚠️ ( GIẢ MẠO ĐÁNH CẮP THÔNG TIN )
            </span>
            <span>
              🆘https://raovat30s.com ⚠️ ( GIẢ MẠO ĐÁNH CẮP THÔNG TIN )
            </span>
            <span>
              🆘https://goodrichgoodyear.com ⚠️ ( GIẢ MẠO ĐÁNH CẮP THÔNG TIN )
            </span>
            <span>🆘https://789bet.sh ⚠️ ( GIẢ MẠO ĐÁNH CẮP THÔNG TIN )</span>
            <span>
              🆘https://torontoelectionnews.com⚠️ ( GIẢ MẠO ĐÁNH CẮP THÔNG TIN )
            </span>
            <span>
              🆘https://789betcom0.com ⚠️ ( GIẢ MẠO ĐÁNH CẮP THÔNG TIN )
            </span>
            <span>
              🆘https://789betcom1.com⚠️ ( GIẢ MẠO ĐÁNH CẮP THÔNG TIN )
            </span>
            <span>
              🆘https://ritual-magic.com ⚠️ ( GIẢ MẠO ĐÁNH CẮP THÔNG TIN )
            </span>
            <span>🆘https://789b1.xyz ⚠️ ( GIẢ MẠO ĐÁNH CẮP THÔNG TIN )</span>
            <span>🆘https://789bet.vin ⚠️ ( GIẢ MẠO ĐÁNH CẮP THÔNG TIN )</span>
            <span>
              🆘https://789b1vip.com ⚠️ ( GIẢ MẠO ĐÁNH CẮP THÔNG TIN )
            </span>
            <span>
              🆘https://789bet-run.life ⚠️ ( GIẢ MẠO ĐÁNH CẮP THÔNG TIN )
            </span>
            <span>🆘https://789bet.win ⚠️ ( GIẢ MẠO ĐÁNH CẮP THÔNG TIN )</span>
            <span>🆘https://789bet.esq ⚠️ ( GIẢ MẠO ĐÁNH CẮP THÔNG TIN )</span>
            <span>🆘https://789bet.uk ⚠️ ( GIẢ MẠO ĐÁNH CẮP THÔNG TIN )</span>
            <span>
              🆘https://789betvn.dev ⚠️ ( GIẢ MẠO ĐÁNH CẮP THÔNG TIN )
            </span>
            <span>
              🆘https://789bet789.org ⚠️ ( GIẢ MẠO ĐÁNH CẮP THÔNG TIN )
            </span>
            <span>🆘https://789bet.mn ⚠️ ( GIẢ MẠO ĐÁNH CẮP THÔNG TIN )</span>
            <span>🆘https://7899355.com ⚠️ ( GIẢ MẠO ĐÁNH CẮP THÔNG TIN )</span>
            <span>
              🆘https://789b1vip.com ⚠️ ( GIẢ MẠO ĐÁNH CẮP THÔNG TIN )
            </span>
            <span>
              🆘https://789bet1x.com ⚠️ ( GIẢ MẠO ĐÁNH CẮP THÔNG TIN )
            </span>
            <span>
              🆘https://play-789bet.site ⚠️ ( GIẢ MẠO ĐÁNH CẮP THÔNG TIN )
            </span>
          </Marquee>
        </div>

        <Swiper
          slidesPerView={1}
          // effect="fade"
          scrollbar={{ draggable: true }}
          autoplay={{ delay: 5000 }}
          modules={[Autoplay, EffectFade, Navigation]}
          navigation={true}
          loop={true}
          className='customSwiperNavigation h-[136px]'
        >
          {dataImgSlide.map((data, index) => (
            <SwiperSlide className='!flex justify-center' key={index}>
              <Image
                loading='lazy'
                src={data}
                alt=''
                layout='fill'
                objectFit='cover'
                quality={getImageQuality(width)}
                className='max-md:object-cover max-md:h-full max-md:w-full'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='hidden md:block w-full h-auto '>
        <Swiper
          slidesPerView={1}
          effect='fade'
          navigation={true}
          scrollbar={{ draggable: true }}
          autoplay={{ delay: 5000 }}
          modules={[EffectFade, Autoplay, Navigation]}
          loop={true}
          height={500}
          className='customSwiper'
        >
          {dataImgSlide.map((data, index) => (
            <SwiperSlide className='!flex justify-center' key={index}>
              <Image
                loading='lazy'
                src={data}
                alt=''
                className='max-md:object-cover max-md:h-[146] max-md:w-full'
                width={1900}
                height={500}

              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <HomePageMobile />
      <MarqueeDesktop />
      <LiusSuarez />
      <JackportComponent />
      <DiverseProducts />
      <GameHot />
      <DownloadApp />
    </main>
  );
}
