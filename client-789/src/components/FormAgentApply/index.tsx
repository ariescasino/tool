"use client";

import { Form, Input, Select, Button } from "antd";
import { SyncOutlined } from "@ant-design/icons";

export default function FormAgentApply() {
  const [form] = Form.useForm();
  const { Option } = Select;

  // data bank
  const dataBank = [
    {
      Id: 41,
      Display: "ABBANK",
      Name: "ABBANK",
      Sort: 1,
      AccountFormat: 2,
    },
    {
      Id: 15,
      Display: "ACB BANK",
      Name: "ACB BANK",
      Sort: 2,
      AccountFormat: 2,
    },
    {
      Id: 1,
      Display: "AGRIBANK",
      Name: "AGRIBANK",
      Sort: 3,
      AccountFormat: 2,
    },
    {
      Id: 47,
      Display: "ANZVL",
      Name: "ANZ BANK",
      Sort: 4,
      AccountFormat: 2,
    },
    {
      Id: 2,
      Display: "BAC A BANK",
      Name: "BAC A BANK",
      Sort: 5,
      AccountFormat: 2,
    },
    {
      Id: 3,
      Display: "BAO VIET BANK",
      Name: "BAO VIET BANK",
      Sort: 6,
      AccountFormat: 2,
    },
    {
      Id: 4,
      Display: "BIDV BANK",
      Name: "BIDV BANK",
      Sort: 7,
      AccountFormat: 2,
    },
    {
      Id: 45,
      Display: "CAKE",
      Name: "CAKE",
      Sort: 8,
      AccountFormat: 2,
    },
    {
      Id: 42,
      Display: "NH TM TNHH MTV XAY DUNG VIET NAM",
      Name: "CB BANK",
      Sort: 9,
      AccountFormat: 2,
    },
    {
      Id: 17,
      Display: "NH MTV CIMB",
      Name: "CIMB BANK",
      Sort: 10,
      AccountFormat: 2,
    },
    {
      Id: 48,
      Display: "CO OPBANK",
      Name: "CO OPBANK",
      Sort: 11,
      AccountFormat: 2,
    },
    {
      Id: 58,
      Display: "DBS",
      Name: "DBS",
      Sort: 12,
      AccountFormat: 2,
    },
    {
      Id: 21,
      Display: "DONGA BANK",
      Name: "DONGA BANK",
      Sort: 13,
      AccountFormat: 2,
    },
    {
      Id: 5,
      Display: "EXIMBANK",
      Name: "EXIMBANK",
      Sort: 14,
      AccountFormat: 2,
    },
    {
      Id: 6,
      Display: "GP BANK",
      Name: "GP BANK",
      Sort: 15,
      AccountFormat: 2,
    },
    {
      Id: 7,
      Display: "HD BANK",
      Name: "HD BANK",
      Sort: 16,
      AccountFormat: 2,
    },
    {
      Id: 8,
      Display: "HONGLEONG BANK",
      Name: "HONGLEONG BANK",
      Sort: 17,
      AccountFormat: 2,
    },
    {
      Id: 49,
      Display: "HSBC",
      Name: "HSBC",
      Sort: 18,
      AccountFormat: 2,
    },
    {
      Id: 59,
      Display: "IBK",
      Name: "IBK",
      Sort: 19,
      AccountFormat: 2,
    },
    {
      Id: 9,
      Display: "INDOVINA BANK",
      Name: "IVB",
      Sort: 20,
      AccountFormat: 2,
    },
    {
      Id: 53,
      Display: "KBANK",
      Name: "KBANK",
      Sort: 21,
      AccountFormat: 2,
    },
    {
      Id: 10,
      Display: "KIENLONGBANK",
      Name: "KIENLONGBANK",
      Sort: 22,
      AccountFormat: 2,
    },
    {
      Id: 60,
      Display: "KOOKMI",
      Name: "KOOKMI",
      Sort: 23,
      AccountFormat: 2,
    },
    {
      Id: 11,
      Display: "LIENVIET BANK",
      Name: "LIENVIET BANK",
      Sort: 24,
      AccountFormat: 2,
    },
    {
      Id: 56,
      Display: "LIOBANK",
      Name: "LIOBANK",
      Sort: 25,
      AccountFormat: 2,
    },
    {
      Id: 13,
      Display: "MBBANK",
      Name: "MBBANK",
      Sort: 26,
      AccountFormat: 2,
    },
    {
      Id: 61,
      Display: "MHB",
      Name: "MHB",
      Sort: 27,
      AccountFormat: 2,
    },
    {
      Id: 12,
      Display: "MSB BANK",
      Name: "MSB BANK",
      Sort: 28,
      AccountFormat: 2,
    },
    {
      Id: 14,
      Display: "NAMA BANK",
      Name: "NAMA BANK",
      Sort: 29,
      AccountFormat: 2,
    },
    {
      Id: 18,
      Display: "NH TMCP QUOC DAN",
      Name: "NCB",
      Sort: 30,
      AccountFormat: 2,
    },
    {
      Id: 25,
      Display: "OCB BANK",
      Name: "OCB BANK",
      Sort: 31,
      AccountFormat: 2,
    },
    {
      Id: 23,
      Display: "OCEANBANK",
      Name: "OCEANBANK",
      Sort: 32,
      AccountFormat: 2,
    },
    {
      Id: 24,
      Display: "PGBANK",
      Name: "PGBANK",
      Sort: 33,
      AccountFormat: 2,
    },
    {
      Id: 46,
      Display: "PVCOMBANK",
      Name: "PVCOMBANK",
      Sort: 34,
      AccountFormat: 2,
    },
    {
      Id: 26,
      Display: "SACOMBANK",
      Name: "SACOMBANK",
      Sort: 35,
      AccountFormat: 2,
    },
    {
      Id: 27,
      Display: "SAIGONBANK",
      Name: "SAIGONBANK",
      Sort: 36,
      AccountFormat: 2,
    },
    {
      Id: 51,
      Display: "SCB",
      Name: "SCB",
      Sort: 37,
      AccountFormat: 2,
    },
    {
      Id: 50,
      Display: "SCBVL",
      Name: "SCBVL",
      Sort: 38,
      AccountFormat: 2,
    },
    {
      Id: 28,
      Display: "SEABANK",
      Name: "SEABANK",
      Sort: 39,
      AccountFormat: 2,
    },
    {
      Id: 29,
      Display: "SHB BANK",
      Name: "SHB BANK",
      Sort: 40,
      AccountFormat: 2,
    },
    {
      Id: 30,
      Display: "SHINHAN BANK VN",
      Name: "SHINHAN BANK VN",
      Sort: 41,
      AccountFormat: 2,
    },
    {
      Id: 31,
      Display: "TECHCOMBANK",
      Name: "TECHCOMBANK",
      Sort: 42,
      AccountFormat: 2,
    },
    {
      Id: 55,
      Display: "TIMO BANK",
      Name: "TIMO BANK",
      Sort: 43,
      AccountFormat: 2,
    },
    {
      Id: 32,
      Display: "TPBANK",
      Name: "TPBANK",
      Sort: 44,
      AccountFormat: 2,
    },
    {
      Id: 52,
      Display: "UBANK",
      Name: "UBANK",
      Sort: 45,
      AccountFormat: 2,
    },
    {
      Id: 33,
      Display: "UNITED OVERSEAS BANK",
      Name: "UOB",
      Sort: 46,
      AccountFormat: 2,
    },
    {
      Id: 44,
      Display: "VIETNAM DEVELOPMENT BANK",
      Name: "VDB",
      Sort: 47,
      AccountFormat: 2,
    },
    {
      Id: 34,
      Display: "VIB BANK",
      Name: "VIB BANK",
      Sort: 48,
      AccountFormat: 2,
    },
    {
      Id: 35,
      Display: "VIDPUBLIC BANK",
      Name: "VIDPUBLIC BANK",
      Sort: 49,
      AccountFormat: 2,
    },
    {
      Id: 19,
      Display: "VIET CAPITAL BANK",
      Name: "VIET CAPITAL BANK",
      Sort: 50,
      AccountFormat: 2,
    },
    {
      Id: 20,
      Display: "VIETA BANK",
      Name: "VIETA BANK",
      Sort: 51,
      AccountFormat: 2,
    },
    {
      Id: 36,
      Display: "VIETBANK",
      Name: "VIETBANK",
      Sort: 52,
      AccountFormat: 2,
    },
    {
      Id: 37,
      Display: "VIETCOMBANK",
      Name: "VIETCOMBANK",
      Sort: 53,
      AccountFormat: 2,
    },
    {
      Id: 38,
      Display: "VIETINBANK",
      Name: "VIETINBANK",
      Sort: 54,
      AccountFormat: 2,
    },
    {
      Id: 43,
      Display: "VIETNAM BANK FOR SOCIAL POLICIES",
      Name: "VIETNAM BANK FOR SOCIAL POLICIES",
      Sort: 55,
      AccountFormat: 2,
    },
    {
      Id: 39,
      Display: "VPBANK",
      Name: "VPBANK",
      Sort: 56,
      AccountFormat: 2,
    },
    {
      Id: 16,
      Display: "NH LD VIET NGA",
      Name: "VRB(VIET NGA)",
      Sort: 57,
      AccountFormat: 2,
    },
    {
      Id: 40,
      Display: "WOORI BANK",
      Name: "WOORI BANK",
      Sort: 58,
      AccountFormat: 2,
    },
  ];

  const onFinish = (values: any) => {
  };

  return (
    <div className="formAgentApply">
      <div className="h-[70px] text-[22px] leading-[70px] text-center text-white font-medium bg-[#148763]">
        Đăng ký đại lý
      </div>

      <Form
        name="basic"
        className="w-full px-10 pt-6 ng-untouched ng-pristine ng-invalid"
        layout="vertical"
        form={form}
        onFinish={onFinish}
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col gap-1 pb-3">
            <div className="flex justify-between">
              <div className="flex flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="yellow"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>

                <label className="text-black text-[14px]">Tài khoản đại lý</label>
              </div>
            </div>
            <Form.Item
              name="nameApply"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tên!",
                },
              ]}
              className="mb-0"
            >
              <Input
                className="bg-[#dddce3]"
                placeholder="Từ 2-15 kí tự, phải bắt đầu bằng chữ cái, có thể  gồm cả chữ cái, số và gạch dưới."
              />
            </Form.Item>
          </div>
          <div className="flex flex-col gap-1 pb-3">
            <div className="flex justify-between">
              <div className="flex flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="yellow"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>

                <label className="text-black text-[14px]">Mật khẩu đại lý</label>
              </div>
            </div>
            <Form.Item
              name="applyPassword"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập mật khẩu!",
                },
              ]}
              className="mb-0"
            >
              <Input.Password className="bg-[#dddce3]" placeholder="xin vui lòng nhập mật khẩu" />
            </Form.Item>
          </div>

          <div className="flex flex-col gap-1 pb-3">
            <div className="flex justify-between">
              <div className="flex flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="yellow"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>

                <label className="text-black text-[14px]">Xác nhận mật khẩu</label>
              </div>
            </div>
            <Form.Item
              name="applyPasswordRetype"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập xác nhận mật khẩu!",
                },
              ]}
              className="mb-0"
            >
              <Input.Password
                className="bg-[#dddce3]"
                placeholder="Vui lòng xác nhận lại mật khẩu của bạnu"
              />
            </Form.Item>
          </div>
        </div>
        <div className="flex flex-col gap-1 pb-3">
          <div className="flex justify-between">
            <div className="flex flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="yellow"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>

              <label className="text-black text-[14px]">Họ và Tên thật</label>
            </div>
          </div>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập họ và tên thật",
              },
            ]}
            className="mb-0"
          >
            <Input
              className="bg-[#dddce3]"
              placeholder="Cần giống tên tài khoản ngân hàng, Nếu không thì không thể rút tiền"
            />
          </Form.Item>
        </div>
        <div className="flex flex-col gap-1 pb-3">
          <div className="flex justify-between">
            <div className="flex flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="yellow"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>

              <label className="text-black text-[14px]">Ngân Hàng</label>
            </div>
          </div>
          <Form.Item
            name="bank"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập họ ngân hàng",
              },
            ]}
            className="mb-0"
          >
            <Select placeholder="Vui lòng chọn ngân hàng">
              {dataBank.map((item) => (
                <Option key={item.Id} values={item.Name}>
                  {item.Name}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </div>
        <div className="flex flex-col gap-1 pb-3">
          <div className="flex justify-between">
            <div className="flex flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="yellow"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>

              <label className="text-black text-[14px]">Số tài khoản</label>
            </div>
          </div>
          <Form.Item
            name="bankNumber"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập số tài khoản!",
              },
            ]}
            className="mb-0"
          >
            <Input className="bg-[#dddce3]" placeholder="ví dụ：6227002020690175526" />
          </Form.Item>
        </div>
        <div className="flex flex-col gap-1 pb-3">
          <div className="flex justify-between">
            <div className="flex flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="yellow"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>

              <label className="text-black text-[14px]">Chi nhánh ngân hàng</label>
            </div>
          </div>
          <Form.Item
            name="bankLocal"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập chi nhánh ngân hàng!",
              },
            ]}
            className="mb-0"
          >
            <Input className="bg-[#dddce3]" placeholder="ví dụ : thành phố hồ chí minh" />
          </Form.Item>
        </div>
        <div className="flex flex-col gap-1 pb-3">
          <div className="flex justify-between">
            <div className="flex flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="yellow"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>

              <label className="text-black text-[14px]">Mã xác nhận</label>
            </div>
          </div>
          <Form.Item
            name="code"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập mã xác nhận!",
              },
            ]}
            className="mb-0"
          >
            <Input className="bg-[#dddce3]" placeholder="Mã xác nhận" suffix={<SyncOutlined />} />
          </Form.Item>
        </div>
        <Form.Item
          className="w-full flex gap-12 items-center justify-center pb-20"
          style={{ width: "100%" }}
        >
          <Button
            onClick={onFinish}
            type="primary"
            htmlType="submit"
            className="cursor-pointer w-full py-1 bg-[#148763] text-black rounded-md flex items-center justify-center text-[1.25rem] "
          >
            Lập tức đăng ký
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
