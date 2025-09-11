import { TRANSACTION_TYPE_ENUM } from ".";

export default function renderTypePayment(type: TRANSACTION_TYPE_ENUM) {
  switch (type) {
    case TRANSACTION_TYPE_ENUM.DAILY_CASHBACK:
      return "Hoàn trả ngày";
    case TRANSACTION_TYPE_ENUM.FEE:
      return "Học phí";
    case TRANSACTION_TYPE_ENUM.MANUAL_CASH_IN:
      return "Nạp rút thủ công";
    case TRANSACTION_TYPE_ENUM.ONLINE_OUT:
      return "Rút tiền trực tuyến";
    case TRANSACTION_TYPE_ENUM.ONLINE_OUT_REFUND:
      return "Rút tiền trực tuyến - Đã bị hủy bỏ";
    case TRANSACTION_TYPE_ENUM.ONLINE_IN:
      return "Thanh toán trực tuyến";
    case TRANSACTION_TYPE_ENUM.RED_ENVELOP:
      return "chuyển phát phong bì đỏ";
    case TRANSACTION_TYPE_ENUM.VIP_MONTHLY_BONUS:
      return "monthly bonus";
    case TRANSACTION_TYPE_ENUM.VIP_UPGRADE_BONUS:
      return "upgrade bonus";
    case TRANSACTION_TYPE_ENUM.ONLINE_IN_PROMOTION:
      return "Ưu đãi thanh toán trực tuyến";
    default:
      return "";
  }
}
