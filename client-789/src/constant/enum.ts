export enum MailTypeEnum {
  COMPANY_IN = "COMPANY_IN",
  ONLINE_IN = "ONLINE_IN",
  ONLINE_OUT = "ONLINE_OUT",
  MANUAL = "MANUAL",
  PREFERENTIAL = "PREFERENTIAL",
  PREFERENTIAL_DAY = "PREFERENTIAL_DAY",
  VIP_BONUS = "VIP_BONUS",
  ORTHER = "ORTHER",
}

export const ruleAge = [
  {
    id: 1,
    content:
      "Chúc mừng bạn đã trở thành hội viên mới của 789BET - nhà cái uy tín hàng đầu thị trường game trực tuyến, nạp rút nhanh, ưu đãi lớn, là nơi lý tưởng cho người chơi tham gia giải trí, đăng ký đăng nhập nhanh, ngoài ra còn có rất nhiều sản phẩm trò chơi hấp dẫn. Hãy nhanh tay tham gia để trải nghiệm dịch vụ giải trí đỉnh cao số 1!",
  },
  {
    id: 2,
    content:
      "Sau khi quý khách đăng ký tài khoản hội viên thành công thì sẽ được sử dụng tất cả các dịch vụ của công ty chúng tôi. Khi sử dụng các dịch vụ đó, đồng nghĩa quý khách đã đồng ý và tuân thủ theo các quy định mà công ty chúng tôi đề ra như (Quy tắc trò chơi Casino, quy tắc đặt cược thể thao, thông báo, các hạng mục chú ý) và một số lưu ý có liên quan. Tất cả các dịch vụ liên quan như sản phẩm, dịch vụ khách hàng, hệ thống phần mềm, kèo cược, trò chơi, casino, kết cấu mạng của công ty chúng tôi đều được giám sát bởi ủy ban cờ bạc và giải trí của Vương quốc Anh. Vì vậy khi quý khách sử dụng những dịch vụ của chúng tôi thì phải tuân thủ theo các pháp lệnh hợp pháp của nước bản địa, nếu có vi phạm điều gì đều không thuộc phạm vi trách nhiệm dịch vụ của chúng tôi.",
  },
  {
    id: 3,
    content:
      "Đối với các hạng mục dịch vụ mà công ty chúng tôi đã cung cấp, sau khi quý khách đồng ý đăng ký thì vui lòng dựa trên trình tự các mục hướng dẫn để cung cấp thông tin cá nhân một cách chính xác và chân thực nhất; Khi thông tin cá nhân của quý khách không chính xác thì vui lòng liên hệ Chăm Sóc Khách Hàng trực tuyến 24/7 cập nhật lại để duy trì thông tin cá nhân chính xác và đầy đủ nhất. Nếu thông tin được đăng ký không chính xác hoặc mạo nhận thông tin của người khác mà gây tổn hại đến quyền lợi của người đó hoặc vi phạm pháp luật thì quý khách phải hoàn toàn chịu trách nhiệm trước pháp luật về hành vi đó. Khi quý khách đã cung cấp thông tin cá nhân không chính xác hoặc thông tin cá nhân có sự bất thường mà không chịu cập nhật lại dẫn đến việc không khớp thông tin cá nhân đăng ký lúc ban đầu thì công ty chúng tôi có quyền chấm dứt tư cách và quyền lợi hội viên của quý khách.",
  },
  {
    id: 4,
    content:
      "Quý hội viên phải tự bảo mật thông tin tài khoản và mật khẩu, chịu trách nhiệm cho mọi thao tác sau khi đăng nhập. Không tiết lộ tài khoản và mật khẩu cho người khác.",
  },
  {
    id: 5,
    content:
      "Quý hội viên phải tự bảo mật thông tin tài khoản và mật khẩu, đồng thời chịu trách nhiệm về tất cả các thao tác sau khi tài khoản và mật khẩu được đăng nhập. Để đảm bảo quyền lợi của bản thân hội viên, xin đừng tiết lộ hoặc cung cấp tài khoản và mật khẩu cho người khác biết và không nên cho mượn hoặc chuyển nhượng cho người khác sử dụng dưới mọi hình thức. Chúng tôi cam kết bảo vệ sự riêng tư của khách hàng để cung cấp các trò chơi mang tính an toàn, những thông tin được thu thập được từ trang mạng này sẽ giúp chúng tôi phục vụ quý khách với những dịch vụ tốt nhất. Chúng tôi sẽ không bán hoặc cho thuê thông tin của khách hàng cho bên thứ ba, những thông tin cá nhân mà khách hàng cung cấp sẽ được xử lý mã hóa bảo mật bằng kỹ thuật SSL128 và thông tin sẽ được lưu trữ rất an toàn, không rò rỉ khi thao tác hệ thống. Trong trường hợp có cơ hội tiếp xúc với thông tin cá nhân khách hàng mà được sự trợ giúp từ phía đối tác thì vẫn phải tuân theo các điều khoản về riêng tư mà chúng tôi đưa ra..",
  },
  {
    id: 6,
    content:
      "Nghiêm cấm các thành viên đăng ký tài khoản nhiều lần. Nếu cố tình tạo nhiều tài khoản, công ty có quyền hủy bỏ hoặc đóng băng tài khoản mà không cần thông báo trước.",
  },
  {
    id: 1,
    content:
      "Một số khu vực quốc gia có những quy định không rõ ràng về tính hợp pháp của cờ bạc trực tuyến, thậm chí có quốc gia có quy định hướng dẫn cụ thể loại hình cờ bạc này là bất hợp pháp. Chúng tôi không cố ý mời gọi bất kỳ cá nhân nào tham gia sử dụng dịch vụ của chúng tôi trên khu vực và quốc gia có quy định loại hình này là không hợp pháp. Cá nhân sử dụng dịch vụ này phải xác định rõ ràng khu vực hoặc quốc gia đang sử dụng dịch vụ là có phi pháp hay không và tự chịu hoàn toàn trách nhiệm. Cá nhân sử dụng dịch vụ này nên tuân thủ theo các pháp lệnh có liên quan tại địa phương, nếu có điều gì vi phạm thì chúng tôi sẽ không chịu trách nhiệm.",
  },
  {
    id: 7,

    content:
      "Khi thông tin đăng ký của người chơi bị tranh chấp, để đảm bảo quyền lợi của cả hai bên và ngăn chặn hành vi trộm cắp danh tính, bảo lưu quyền yêu cầu khách hàng cung cấp cho chúng tôi các tệp đầy đủ và hiệu quả, đồng thời xác định xem khách hàng có đủ điều kiện để hưởng bất kỳ Ưu đãi nào của chúng tôi hay không.",
  },
  {
    id: 8,
    content:
      "Trong bất kỳ trường hợp nào, quyết định cuối cùng đều thuộc về 789BET.",
  },
];
