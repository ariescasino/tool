# Deploy Toolkit (6688)
Đây là bộ công cụ hỗ trợ build & deploy cho dự án multi-frontend -> server-core.
Files included:
- setup.sh        : Linux/macOS helper
- setup.bat       : Windows helper
- setup.py        : Cross-platform Python tool
- init-config.py  : Generates database.js and jwt.js
- menu_deploy.sh  : Simple interactive menu (trimmed)
- full_script.sh  : Placeholder for your full interactive script
- README.md       : This file
Usage:
1. Tải zip và giải nén vào thư mục chứa repository của bạn.
2. Kiểm tra các đường dẫn, chỉnh biến môi trường, rồi chạy:
   bash setup.sh
3. Hoặc: python3 setup.py
WARNING: Chạy các script này sẽ thay đổi file hệ thống và cấu hình. Hãy chạy trên môi trường test trước.
