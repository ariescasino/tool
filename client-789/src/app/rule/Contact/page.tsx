import styles from "@/styles/rule.module.css";
import Image from "next/image";

export default function Contact() {
  return (
    <article className={styles.rule}>
      <Image
        width={298}
        height={67}
        sizes="100vw"
        src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/rule/lienhe1.png"
        style={{ marginBottom: "24px" }}
        alt=""
      />
      <Image
        width={717}
        height={314}
        sizes="100vw"
        src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/rule/lienhe2.png"
        style={{ marginBottom: "35px" }}
        alt=""
      />
      <h3>Liên hệ</h3>
      <p>
        Nếu bạn gặp bất cứ vấn đề gì khi đăng ký thành viên, tham gia trò chơi
        hoặc cần giải đáp bất kỳ thông tin nào trên website của 789BET. Hãy liên
        hệ trực tiếp với dịch vụ Chăm sóc khách hàng trực tuyến 24/7 của chúng
        tôi.
      </p>
      <p>Chúng tôi sẽ ngay lập tức giải quyết vấn đề giúp bạn.</p>
      <ul style={{ listStyleType: "disc" }}>
        {
          <li>
            <span>Chăm sóc khách hàng:</span>
            <span className={styles.contact}> Liên hệ bộ phận CSKH 24/7</span>
          </li>
        }
        {
          <li>
            <span>Điện thoại:</span>{" "}
            <span className={styles.contact}>+84 868888789</span>
          </li>
        }
        {
          <li>
            <span>Email:</span>{" "}
            <span className={styles.contact}>Admin@789bet.com</span>
          </li>
        }
      </ul>
    </article>
  );
}
