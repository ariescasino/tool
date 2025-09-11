'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

const data = [
  {
    id: 1,
    name: 'Giới thiệu về 789BET',
    link: '/introduce/about-us',
  },
  {
    id: 2,
    name: 'Điều khoản và điều kiện',
    link: '/introduce/TermAndConditions',
  },
  {
    id: 3,
    name: 'Chơi có trách nhiệm',
    link: '/introduce/ResponsibleGambling',
  },
  {
    id: 4,
    name: 'Miễn trách nhiệm',
    link: '/introduce/Disclaimer',
  },
  {
    id: 5,
    name: 'Quyền riêng tư',
    link: '/introduce/PrivacyPolicy',
  },
  {
    id: 6,
    name: 'Hướng dẫn nạp tiền',
    link: '/introduce/Deposit',
  },
  {
    id: 7,
    name: 'Hướng dẫn rút tiền',
    link: '/introduce/Withdrawal',
  },
  {
    id: 8,
    name: 'Những câu hỏi thường gặp',
    link: '/introduce/FAQ',
  },
  {
    id: 9,
    name: 'Đại sứ thương hiệu',
    link: '/introduce/BrandAmbassador',
  },
  {
    id: 10,
    name: 'Liên hệ',
    link: '/introduce/Contact',
  },
  {
    id: 11,
    name: 'Đối tác',
    link: '/introduce/Partner',
  },
];

export default function Layout({ children }: { children?: React.ReactNode }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();
  const [active, setActive] = useState('');

  // useEffect(() => {
  //   if (pathname) {
  //     setActive(pathname);
  //   }
  // }, [pathname]);

  return (
    <div className='flex flex-col w-full h-screen'>
      <div className='flex top-[0px] h-fit justify-center w-full relative'>
        <div
          onClick={() => {
            // router.push("/account");
            setIsOpen(true);
          }}
          className='w-fit left-0 top-0 p-4 absolute'
        >
          <Image
            width={35}
            height={35}
            alt=''
            src='/images/introduct789/back.png'
          />
        </div>
        <Image width={180} height={80} alt='' src='/images/logo.png' />
      </div>
      <div className='flex flex-col items-center'>
        {isOpen ? (
          data.map((i) => {
            return (
              <div
                onClick={() => {
                  setIsOpen(false);
                  router.push(i.link);
                }}
                key={i.id}
                className="uppercase bg-[url('/images/introduct789/btn.png')] bg-no-repeat bg-cover w-[400px] h-[60px] flex justify-center items-center text-[20px] my-1"
              >
                <p className='text-white'> {i.name}</p>
              </div>
            );
          })
        ) : (
          <div className='borderIntroduceLayout overflow-y-auto absolute'>
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
