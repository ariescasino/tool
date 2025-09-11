import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BoxDeposit() {
  return (
    <div className="box-deposit border-solid border-[1px] border-gray-300 w-full min-h-[50px] py-6 rounded-md my-8 px-4">
      <div className="p-4 bg-[#d9edf7] border-solid border-[1px] border-[#bce8f1]">
        <FontAwesomeIcon
          icon={faInfoCircle}
          className="fa fa-info-circle"
          style={{ color: "#31708f", fontSize: "16px" }}
        /> 
        Vui lòng chọn phương thức nạp tiền
      </div>
    </div>
  );
}
