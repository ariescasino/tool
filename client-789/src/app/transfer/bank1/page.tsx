/* eslint-disable react-hooks/exhaustive-deps */
'use client';

/* eslint-disable @next/next/no-img-element */
import { Col, Divider, message, Row, Spin } from 'antd';
import styles from '../../../styles/bank.module.css';
import { CopyOutlined, LoadingOutlined } from '@ant-design/icons';
import { useCopyToClipboard, useDebounce, useEffectOnce } from 'react-use';
import paymentService from '@/api/services/payment.service';
import { useEffect, useState } from 'react';

import {
  fCurrency,
  fNumber,
  fNumberBank,
  fNumberVND,
} from '@/utils/format-number';
import { useSearchParams } from 'next/navigation';

interface BankValue {
  bankAccountName: string;
  bankCode: string;
  bankName: string;
  bankNumber: string;
  content: string;
  qrBase64: string;
  rate: number;
}

const DEFAULT_BANK_VALUE: BankValue = {
  bankAccountName: '',
  bankCode: '',
  bankName: '',
  bankNumber: '',
  content: '',
  qrBase64: '',
  rate: 0.001,
};

const CountdownTimer = ({ initialSeconds }: any) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;
    if (seconds > 0) {
      timer = setInterval(() => {
        setSeconds((prevSeconds: number) => {
          if (prevSeconds <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prevSeconds - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [seconds]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  function formatTimeHours(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return [
      hours.toString().padStart(2, '0'),
      minutes.toString().padStart(2, '0'),
      remainingSeconds.toString().padStart(2, '0'),
    ].join(':');
  }

  return (
    <div>
      <p className='block md:hidden'>{formatTime(seconds)}</p>
      <p className='hidden md:block'>{formatTimeHours(seconds)}</p>
    </div>
  );
};

export default function BankTransfer1() {
  const searchParams = useSearchParams();
  const [state, copyToClipboard] = useCopyToClipboard();
  const [messageApi, contextHolder] = message.useMessage();
  const [dataBank, setDataBank] = useState<BankValue>(DEFAULT_BANK_VALUE);

  const bankCode = searchParams.get('c');
  const amount = searchParams.get('a');

  const [loading, setLoading] = useState(true);

  const handleCopy = (value: string) => {
    copyToClipboard(value);
    messageApi.open({
      type: 'info',
      icon: <></>,
      content: 'Copy thành công',
      className: styles.message,
      style: {
        animation: 'none',
        marginTop: '45vh',
      },
    });
  };

  const getBankRequestF = async (bankCode: string, amount: string) => {
    try {
      setLoading(true);
      const res = await paymentService.getBankRequest(bankCode, amount);
      if (res.data) {
        setDataBank(res.data);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const [debouncedGetBankRequest] = useDebounce(() => {
    if (bankCode && amount) {
      getBankRequestF(bankCode, amount);
    }
  }, 1000);

  useEffect(() => {
    if (bankCode && amount) {
      debouncedGetBankRequest();
    }
  }, [bankCode, amount]);

  return (
    <div className='w-full h-full flex min-h-screen justify-center md:items-center max-md:justify-start bg-white'>
      <div
        className={`w-full max-w-[750px] md:max-w-[1200px] min-h-screen ${styles.layoutBank1}`}
      >
        {contextHolder}
        <div className={`${styles.headerBank1} flex md:hidden`}>
          <img src='/images/transfer/logo-h5-new-DJ_orjaj.svg' alt='' />
        </div>
        <div
          className={` h-auto md:h-full mt-1 md:mt-42 md:mt-[0px] text-black py-5 md:py-0 px-[15px] md:px-[30px] flex flex-col md:flex-row`}
        >
          <div className='flex flex-col justify-center items-center h-auto md:h-full w-full md:w-[670px] border-none md:border-solid md:border-r md:border-[#f1f1f1]'>
            <div className='block md:hidden text-2xl text-[#d8930d]'>
              <CountdownTimer initialSeconds={900} />
            </div>
            <div className='block md:hidden text-sm text-[#555]'>
              Thời giân nhận tiền còn lại
            </div>

            <div className='hidden md:flex flex-col items-center pt-0 md:pt-[37px]'>
              <img
                className='w-[178px] object-contain'
                src="data:image/svg+xml,%3csvg%20width='172'%20height='51'%20viewBox='0%200%20172%2051'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M103.994%208.83382C101.773%207.06308%2098.6232%206.17771%2094.5433%206.17771H81.2204L74.9199%2037.684H83.8321L85.4516%2029.4474H91.752C94.872%2029.4474%2097.6108%2028.9069%2099.9664%2027.8279C102.322%2026.7469%20104.137%2025.2182%20105.412%2023.2377C106.686%2021.2572%20107.324%2018.946%20107.324%2016.306C107.324%2013.0933%20106.214%2010.6046%20103.994%208.83382ZM96.7254%2021.0293C95.6606%2021.9591%2094.1379%2022.425%2092.1574%2022.425H86.8472L88.6926%2013.1981H93.3735C94.9628%2013.1981%2096.1869%2013.5208%2097.0421%2014.1662C97.8972%2014.8116%2098.3247%2015.7796%2098.3247%2017.0684C98.3227%2018.7806%2097.7903%2020.0996%2096.7254%2021.0293Z'%20fill='black'/%3e%3cpath%20d='M129.289%2013.2889L128.704%2016.2153C127.264%2013.9948%20124.773%2012.8835%20121.232%2012.8835C118.83%2012.8835%20116.617%2013.4986%20114.592%2014.7289C112.568%2015.9591%20110.962%2017.6472%20109.776%2019.793C108.59%2021.9389%20107.998%2024.3328%20107.998%2026.9708C107.998%2029.2518%20108.478%2031.2323%20109.438%2032.9123C110.398%2034.5922%20111.666%2035.8749%20113.241%2036.7603C114.816%2037.6457%20116.504%2038.0873%20118.305%2038.0873C121.066%2038.0873%20123.42%2037.1878%20125.372%2035.3868L124.878%2037.682H132.98L137.84%2013.2869H129.289V13.2889ZM125.463%2029.3123C124.382%2030.5728%20122.988%2031.202%20121.276%2031.202C119.836%2031.202%20118.703%2030.7906%20117.878%2029.9637C117.053%2029.1388%20116.639%2028.0054%20116.639%2026.5654C116.639%2024.5244%20117.18%2022.8747%20118.259%2021.6142C119.34%2020.3537%20120.734%2019.7245%20122.446%2019.7245C123.886%2019.7245%20125.017%2020.146%20125.844%2020.985C126.669%2021.826%20127.082%2022.9655%20127.082%2024.4054C127.084%2026.4162%20126.544%2028.0518%20125.463%2029.3123Z'%20fill='black'/%3e%3cpath%20d='M160.66%2013.2889L151.659%2028.2756L148.599%2013.2889H140.093L145.629%2037.8634C145.088%2038.6439%20144.548%2039.2066%20144.009%2039.5515C143.469%2039.8963%20142.809%2040.0698%20142.029%2040.0698C140.589%2040.0698%20139.328%2039.6039%20138.247%2038.6742L134.421%2044.7064C135.172%2045.3376%20136.184%2045.8459%20137.459%2046.2371C138.733%2046.6264%20140.016%2046.822%20141.307%2046.822C143.077%2046.822%20144.622%2046.5739%20145.943%2046.0798C147.262%2045.5837%20148.517%2044.7588%20149.703%2043.6052C150.888%2042.4496%20152.125%2040.8382%20153.415%2038.7669L169.034%2013.2929H160.66V13.2889Z'%20fill='black'/%3e%3cpath%20d='M11.4497%2036.6514C9.0941%2035.4817%207.28101%2033.8481%206.0064%2031.7466C4.73179%2029.6471%204.09448%2027.2472%204.09448%2024.5487C4.09448%2020.9487%204.92742%2017.7098%206.59127%2014.8318C8.25512%2011.9518%2010.5805%209.70311%2013.5653%208.08363C16.5502%206.46415%2019.9464%205.6534%2023.7561%205.6534C26.9346%205.6534%2029.7016%206.23827%2032.0572%207.408C34.4108%208.57774%2036.226%2010.2134%2037.5006%2012.3128C38.7752%2014.4123%2039.4125%2016.8123%2039.4125%2019.5108C39.4125%2023.1107%2038.5795%2026.3497%2036.9157%2029.2276C35.2518%2032.1076%2032.9265%2034.3563%2029.9416%2035.9758C26.9568%2037.5953%2023.5605%2038.406%2019.7508%2038.406C16.5703%2038.406%2013.8033%2037.8212%2011.4497%2036.6514ZM25.7346%2029.5423C27.2351%2028.552%2028.3887%2027.225%2029.1995%2025.5611C30.0102%2023.8973%2030.4136%2022.06%2030.4136%2020.0492C30.4136%2017.9195%2029.7601%2016.2173%2028.4553%2014.9427C27.1504%2013.6681%2025.3292%2013.0308%2022.9898%2013.0308C21.0093%2013.0308%2019.2708%2013.5249%2017.7703%2014.5152C16.2698%2015.5054%2015.1162%2016.8325%2014.3055%2018.4963C13.4947%2020.1602%2013.0914%2021.9974%2013.0914%2024.0082C13.0914%2026.1379%2013.7448%2027.8401%2015.0477%2029.1147C16.3525%2030.3893%2018.1737%2031.0266%2020.5132%2031.0266C22.4957%2031.0266%2024.2341%2030.5325%2025.7346%2029.5423Z'%20fill='%232AA9EF'/%3e%3cpath%20d='M61.815%2020.7691L72.3891%2037.7746H62.4463L55.202%2026.4383L51.1079%2030.127L49.5792%2037.7746H40.8062L47.1046%206.28249H55.8776L53.3123%2019.1496L67.5286%206.28249H78.0119L61.815%2020.7691Z'%20fill='%232AA9EF'/%3e%3c/svg%3e"
                alt=''
              />
              <div className='text-base text-[#2aa9ef] my-2 font-light'>
                Pay With Ease, Like Saying Ok
              </div>
            </div>

            <img
              className='w-[200px] h-[200px] md:h-[250px] md:w-[250px] my-5 mb-[10px]'
              src={`data:image/png;base64,${dataBank.qrBase64}`}
              alt=''
            />

            <div className='flex'>
              <img
                className='w-[100px] md:w-[150px] object-contain'
                src='data:image/png;base64,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'
                alt=''
              />
              <div className='w-[1px] h-[18px] bg-[#d9d9d9] mx-3'></div>
              <img
                className='w-[100px] md:w-[150px] object-contain'
                src='/images/transfer/vietcombank.png'
                alt=''
              />
            </div>
            <div className='text-lg md:text-2xl font-bold text-[#f1b031] font-ap'>
              {amount && dataBank.rate
                ? fNumberBank(parseInt(amount) / dataBank.rate)
                : 0}{' '}
              {'VND'}
            </div>

            <div
              className='bg-[#f4f4f4] md:bg-transparent text-black p-[15px] md:p-0  text-sm hidden md:block'
              style={{
                lineHeight: 2,
              }}
            >
              <div className=' text-[#666] font-bold'>Xin lưu ý :</div>
              <p className='text-[#999] font-normal '>
                1. Kiểm tra chính xác tài khoản và họ tên người nhận tiền, bất
                kì lỗi chuyển khoản hoặc hiển thị tài khoản sai đều không giải
                quyết
              </p>

              <p className='text-[#999] font-normal '>
                2. Nhập vào đúng nội dung chuyển khoản{' '}
                <span className='text-[#55aaf0] font-semibold'>
                  MUA HOA QUA {dataBank.content}
                </span>{' '}
                để nhận cập nhật giao dịch nhanh nhất
              </p>
              <p className='text-[#999] font-normal '>
                3. Chuyển khoản chính xác số tiền giao dịch
              </p>
              <p className='text-[#999] font-normal '>
                4. Vui lòng không lưu tài khoản nhận tiền ngân hàng dưới bất kì
                hình thức nào, để tránh mất mát tiền bạc
              </p>
            </div>
          </div>

          <div className='flex flex-col items-center justify-center md:justify-start mt-5 py-0 px-0 md:py-[37px] md:px-[27px]'>
            <div className='max-w-[400px] w-full grid grid-cols-1 items-center justify-center'>
              <div className='hidden md:block text-sm text-[#555]'>
                Thời giân nhận tiền còn lại
              </div>{' '}
              <div className='hidden md:block text-2xl my-2 text-[#d8930d]'>
                <CountdownTimer initialSeconds={900} />
              </div>
              <Row className='mb-2 md:mb-6'>
                <Col
                  className='text-sm font-normal text-[#555] md:text-[#666]'
                  span={24}
                >
                  Tên ngân hàng:
                </Col>

                <Col
                  span={24}
                  className='text-sm md:text-xl font-normal text-[#55aaf0] mt-1 md:mt-4'
                >
                  {dataBank?.bankName}
                </Col>
              </Row>
              <Row className='mb-2  md:mb-6'>
                <Col className='text-sm font-normal text-[#555]' span={24}>
                  Người nhận tiền:
                </Col>

                <Col
                  span={24}
                  className='text-sm md:text-xl  font-bold text-[#f1b031] mt-1 md:mt-4'
                >
                  {dataBank.bankAccountName}
                </Col>
              </Row>
              <Row className='mb-2  md:mb-6'>
                <Col className='text-sm font-normal text-[#555]' span={24}>
                  Số tài khoản ngân hàng:
                </Col>

                <Col
                  span={24}
                  className='flex  md:text-xl  justify-between items-center text-sm font-bold text-[#f1b031] mt-1 md:mt-4'
                >
                  {dataBank.bankNumber}

                  <svg
                    onClick={() => handleCopy(dataBank.bankNumber)}
                    width='18'
                    height='18'
                    className='cursor-pointer'
                    viewBox='0 0 18 18'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g id='Component 214'>
                      <path
                        id='Vector'
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M1.19995 11.4C1.19995 11.8774 1.38959 12.3352 1.72716 12.6728C2.06472 13.0104 2.52256 13.2 2.99995 13.2H4.79995V12H2.99995C2.84082 12 2.68821 11.9368 2.57569 11.8243C2.46317 11.7118 2.39995 11.5591 2.39995 11.4V3.00001C2.39995 2.84088 2.46317 2.68827 2.57569 2.57575C2.68821 2.46323 2.84082 2.40001 2.99995 2.40001H11.4C11.5591 2.40001 11.7117 2.46323 11.8242 2.57575C11.9367 2.68827 12 2.84088 12 3.00001V4.80001H6.59995C6.12256 4.80001 5.66472 4.98965 5.32716 5.32722C4.98959 5.66479 4.79995 6.12262 4.79995 6.60001V15C4.79995 15.4774 4.98959 15.9352 5.32716 16.2728C5.66472 16.6104 6.12256 16.8 6.59995 16.8H15C15.4773 16.8 15.9352 16.6104 16.2727 16.2728C16.6103 15.9352 16.8 15.4774 16.8 15V6.60001C16.8 6.12262 16.6103 5.66479 16.2727 5.32722C15.9352 4.98965 15.4773 4.80001 15 4.80001H13.2V3.00001C13.2 2.52262 13.0103 2.06479 12.6727 1.72722C12.3352 1.38965 11.8773 1.20001 11.4 1.20001H2.99995C2.52256 1.20001 2.06472 1.38965 1.72716 1.72722C1.38959 2.06479 1.19995 2.52262 1.19995 3.00001V11.4ZM5.99995 6.60001C5.99995 6.44088 6.06317 6.28827 6.17569 6.17575C6.28821 6.06323 6.44082 6.00001 6.59995 6.00001H15C15.1591 6.00001 15.3117 6.06323 15.4242 6.17575C15.5367 6.28827 15.6 6.44088 15.6 6.60001V15C15.6 15.1591 15.5367 15.3118 15.4242 15.4243C15.3117 15.5368 15.1591 15.6 15 15.6H6.59995C6.44082 15.6 6.28821 15.5368 6.17569 15.4243C6.06317 15.3118 5.99995 15.1591 5.99995 15V6.60001Z'
                        fill='#55AAF0'
                      ></path>
                    </g>
                  </svg>
                </Col>
              </Row>
              <Row className='mb-2  md:mb-6'>
                <Col className='text-sm font-normal text-[#555]' span={24}>
                  Số tiền đơn hàng:
                </Col>

                <Col
                  span={24}
                  className='flex  md:text-xl  justify-between items-center text-sm font-bold text-[#f1b031] mt-1 md:mt-4'
                >
                  {amount && dataBank.rate
                    ? fNumberVND(parseInt(amount) / dataBank.rate)
                    : 0}

                  <svg
                    onClick={() => {
                      amount && dataBank.rate
                        ? handleCopy(
                            (parseInt(amount) / dataBank.rate || 0).toString()
                          )
                        : handleCopy('0');
                    }}
                    width='18'
                    height='18'
                    className='cursor-pointer'
                    viewBox='0 0 18 18'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g id='Component 214'>
                      <path
                        id='Vector'
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M1.19995 11.4C1.19995 11.8774 1.38959 12.3352 1.72716 12.6728C2.06472 13.0104 2.52256 13.2 2.99995 13.2H4.79995V12H2.99995C2.84082 12 2.68821 11.9368 2.57569 11.8243C2.46317 11.7118 2.39995 11.5591 2.39995 11.4V3.00001C2.39995 2.84088 2.46317 2.68827 2.57569 2.57575C2.68821 2.46323 2.84082 2.40001 2.99995 2.40001H11.4C11.5591 2.40001 11.7117 2.46323 11.8242 2.57575C11.9367 2.68827 12 2.84088 12 3.00001V4.80001H6.59995C6.12256 4.80001 5.66472 4.98965 5.32716 5.32722C4.98959 5.66479 4.79995 6.12262 4.79995 6.60001V15C4.79995 15.4774 4.98959 15.9352 5.32716 16.2728C5.66472 16.6104 6.12256 16.8 6.59995 16.8H15C15.4773 16.8 15.9352 16.6104 16.2727 16.2728C16.6103 15.9352 16.8 15.4774 16.8 15V6.60001C16.8 6.12262 16.6103 5.66479 16.2727 5.32722C15.9352 4.98965 15.4773 4.80001 15 4.80001H13.2V3.00001C13.2 2.52262 13.0103 2.06479 12.6727 1.72722C12.3352 1.38965 11.8773 1.20001 11.4 1.20001H2.99995C2.52256 1.20001 2.06472 1.38965 1.72716 1.72722C1.38959 2.06479 1.19995 2.52262 1.19995 3.00001V11.4ZM5.99995 6.60001C5.99995 6.44088 6.06317 6.28827 6.17569 6.17575C6.28821 6.06323 6.44082 6.00001 6.59995 6.00001H15C15.1591 6.00001 15.3117 6.06323 15.4242 6.17575C15.5367 6.28827 15.6 6.44088 15.6 6.60001V15C15.6 15.1591 15.5367 15.3118 15.4242 15.4243C15.3117 15.5368 15.1591 15.6 15 15.6H6.59995C6.44082 15.6 6.28821 15.5368 6.17569 15.4243C6.06317 15.3118 5.99995 15.1591 5.99995 15V6.60001Z'
                        fill='#55AAF0'
                      ></path>
                    </g>
                  </svg>
                </Col>
              </Row>
              <Row className='mb-2  md:mb-6'>
                <Col className='text-sm font-normal text-[#555]' span={24}>
                  Mã nhận biết đơn hàng:
                </Col>

                <Col
                  span={24}
                  className='flex md:text-xl justify-between items-center text-sm font-normal text-[#55aaf0] mt-1 md:mt-4'
                >
                  {dataBank.content}
                  <svg
                    onClick={() => handleCopy(dataBank.content)}
                    width='18'
                    height='18'
                    className='cursor-pointer'
                    viewBox='0 0 18 18'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g id='Component 214'>
                      <path
                        id='Vector'
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M1.19995 11.4C1.19995 11.8774 1.38959 12.3352 1.72716 12.6728C2.06472 13.0104 2.52256 13.2 2.99995 13.2H4.79995V12H2.99995C2.84082 12 2.68821 11.9368 2.57569 11.8243C2.46317 11.7118 2.39995 11.5591 2.39995 11.4V3.00001C2.39995 2.84088 2.46317 2.68827 2.57569 2.57575C2.68821 2.46323 2.84082 2.40001 2.99995 2.40001H11.4C11.5591 2.40001 11.7117 2.46323 11.8242 2.57575C11.9367 2.68827 12 2.84088 12 3.00001V4.80001H6.59995C6.12256 4.80001 5.66472 4.98965 5.32716 5.32722C4.98959 5.66479 4.79995 6.12262 4.79995 6.60001V15C4.79995 15.4774 4.98959 15.9352 5.32716 16.2728C5.66472 16.6104 6.12256 16.8 6.59995 16.8H15C15.4773 16.8 15.9352 16.6104 16.2727 16.2728C16.6103 15.9352 16.8 15.4774 16.8 15V6.60001C16.8 6.12262 16.6103 5.66479 16.2727 5.32722C15.9352 4.98965 15.4773 4.80001 15 4.80001H13.2V3.00001C13.2 2.52262 13.0103 2.06479 12.6727 1.72722C12.3352 1.38965 11.8773 1.20001 11.4 1.20001H2.99995C2.52256 1.20001 2.06472 1.38965 1.72716 1.72722C1.38959 2.06479 1.19995 2.52262 1.19995 3.00001V11.4ZM5.99995 6.60001C5.99995 6.44088 6.06317 6.28827 6.17569 6.17575C6.28821 6.06323 6.44082 6.00001 6.59995 6.00001H15C15.1591 6.00001 15.3117 6.06323 15.4242 6.17575C15.5367 6.28827 15.6 6.44088 15.6 6.60001V15C15.6 15.1591 15.5367 15.3118 15.4242 15.4243C15.3117 15.5368 15.1591 15.6 15 15.6H6.59995C6.44082 15.6 6.28821 15.5368 6.17569 15.4243C6.06317 15.3118 5.99995 15.1591 5.99995 15V6.60001Z'
                        fill='#55AAF0'
                      ></path>
                    </g>
                  </svg>
                </Col>
              </Row>
            </div>
          </div>
        </div>

        <div
          className='bg-[#f4f4f4] text-black p-[15px] text-sm block md:hidden'
          style={{
            lineHeight: 2,
          }}
        >
          <div className=' text-[#666] font-bold'>Xin lưu ý :</div>
          <p className='text-[#999] font-normal '>
            1. Kiểm tra chính xác tài khoản và họ tên người nhận tiền, bất kì
            lỗi chuyển khoản hoặc hiển thị tài khoản sai đều không giải quyết
          </p>

          <p className='text-[#999] font-normal '>
            2. Nhập vào đúng nội dung chuyển khoản{' '}
            <span className='text-[#55aaf0] font-semibold'>
              MUA HOA QUA {dataBank.content}
            </span>{' '}
            để nhận cập nhật giao dịch nhanh nhất
          </p>
          <p className='text-[#999] font-normal '>
            3. Chuyển khoản chính xác số tiền giao dịch
          </p>
          <p className='text-[#999] font-normal '>
            4. Vui lòng không lưu tài khoản nhận tiền ngân hàng dưới bất kì hình
            thức nào, để tránh mất mát tiền bạc
          </p>
        </div>

        {loading && (
          <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-[999]'>
            <Spin
              indicator={
                <LoadingOutlined style={{ fontSize: 48, color: '#fff' }} spin />
              }
            />
          </div>
        )}
      </div>
    </div>
  );
}
