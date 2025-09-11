import ModalMobileSiteMail from "@/components/ModalMobileSiteMail";
import { StarFilled } from "@ant-design/icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tabs } from "antd";
import Image from "next/image";

const initialItems = [
  {
    label: "Hộp khuyến mãi",
    children: (
      <div>
        <div className="flex w-full">
          <p className="w-1/2 my-1 font-bold">Chủ đề chính</p>
          <p className="w-1/2 my-1 font-bold">Thời gian</p>
        </div>
        <div className="bg-gray-200 py-2 flex justify-center items-center">
          Không có dữ liệu
        </div>
      </div>
    ),
    key: "1",
    closable: false,
    icon: <StarFilled style={{ color: "#ffca00" }} />,
  },

  {
    label: "Hộp thư đến (0)",
    children: (
      <div>
        <div className="flex">
          <div className="border rounded-md w-fit p-1">
            <FontAwesomeIcon className="mr-1" icon={faTrash} color="gray" />
            Xóa bỏ
          </div>
          <div className="border rounded-md mx-1 w-fit p-1">
            Đánh dấu đã đọc
          </div>
          <div className="border rounded-md w-fit p-1">Đánh dấu chưa đọc</div>
        </div>

        <div>
          <div className="flex w-full">
            <p className="w-1/2 my-1 font-bold">Chủ đề chính</p>
            <p className="w-1/2 my-1 font-bold">Thời gian</p>
          </div>
          <div className="bg-gray-200 py-2 flex justify-center items-center">
            Không có dữ liệu
          </div>
        </div>
      </div>
    ),
    key: "2",
    closable: false,
  },
  {
    label: "Hộp thư đi",
    children: (
      <div>
        <div className="border rounded-md w-fit p-1">
          <FontAwesomeIcon className="mr-1" icon={faTrash} color="gray" />
          Xóa bỏ
        </div>
        <div>
          <div className="flex w-full">
            <p className="w-1/2 my-1 font-bold">Chủ đề chính</p>
            <p className="w-1/2 my-1 font-bold">Thời gian</p>
          </div>
          <div className="bg-gray-200 py-2 flex justify-center items-center">
            Không có dữ liệu
          </div>
        </div>
      </div>
    ),
    key: "3",
    closable: false,
  },
];

export default function SiteMail() {
  return (
    <div className="w-full bg-white border-[1px] rounded-t-sm">
      <div className="h-[50px] bg-[#2b2b2b] flex justify-center items-center text-[21px] text-white ">
        Hộp thư nội bộ
      </div>
      <div className="w-full border-[1px] border-gray-400 border-solid p-2 rounded-b-sm relative">
        <div className="flex absolute cursor-pointer bg-[#337ab7] hover:bg-[#286090] border-[#2e6da4] z-50 text-white top-[6px] right-[10px] px-4 py-1 rounded">
          <Image
            alt=""
            src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/icons/comment-regular.svg"
            width={16}
            height={16}
            style={{ marginRight: "6px" }}
          />
          Gửi thư
        </div>
        <Tabs className="hover:text-bkack" type="card" items={initialItems} />
      </div>
      <ModalMobileSiteMail />
    </div>
  );
}
