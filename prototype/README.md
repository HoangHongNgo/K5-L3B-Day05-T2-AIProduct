# Prototype LAB5 · T2 Giáo dục

Bản web: https://hoc-dem-t2-aiproduct.towering-petunia.workers.dev — triển khai Cloudflare Workers Static Assets ngày 13/11/2026. Tài khoản tạm cần được chủ sở hữu nhận qua link claim riêng trong 60 phút để giữ lâu dài. Không lưu link claim hoặc thông tin xác thực vào repo. Ba file xuất bản là `index.html`, `style.css`, `app.js`; gói `cloudflare-pages.zip` chứa đúng ba file này để dùng khi Direct Upload.

Mở `index.html` trong thư mục này bằng trình duyệt. Không cần cài thư viện, đăng nhập hoặc API key. Giữ ba file `index.html`, `style.css`, `app.js` cùng thư mục. `../index.html` là mẫu T3 của giảng viên, không phải demo T2.

Toàn bộ dữ liệu và thao tác là mô phỏng. Không gửi cho TA thật, không đăng FAQ thật, không gọi AI. Giờ demo cố định: 22:30 ngày 13/11/2026, giờ Việt Nam. Tải lại trang xoá trạng thái phiên; đổi vai/ca giữ hàng chờ. Nút Đặt lại đưa toàn bộ demo về đầu.

Thứ tự đã duyệt: **K1 trước, K2 sau**. Tài liệu và trợ lý nằm cạnh nhau trên desktop, xếp dọc trên điện thoại. Bối cảnh 22:30, hạn bài 23:59 và TA hết giờ trực luôn hiện phía trên. Bộ chọn ca và giả lập lỗi nằm trong “Công cụ trình diễn” thu gọn.

## Demo khoảng 4 phút

1. Mặc định mở K1 trên trang học buổi 3. Mở “Công cụ trình diễn”, bật “Chuyển TA lỗi”, bấm “Gửi câu hỏi”. Xem nguồn §3.3, phản chứng 0,25 → 0,5 và trạng thái chưa chuyển.
2. Tắt “Chuyển TA lỗi”, bấm “Thử chuyển lại”. Chỉ sau thành công mới có yêu cầu trong hàng chờ TA. FAQ K1 vẫn chưa đăng.
3. Bấm “Xem TA nhận được gì”. Trong K1, chọn kết luận (chưa kết luận hoặc xác nhận cần sửa), nhập căn cứ nội bộ và phản hồi. Có nút điền ví dụ để thử. Bấm “Xem trước phản hồi” rồi “Gửi phản hồi cho học viên”; sửa sau xem trước phải xem lại. Thử “Gửi phản hồi TA lỗi” trong công cụ trình diễn: lỗi chưa tới học viên, tắt lỗi để thử lại. Về trang học để thấy phản hồi TA tại [9]. Mốc phản hồi 08:15 ngày 14/11 là lượt mô phỏng kế tiếp, không phải lời hẹn hoặc TA trực lúc 22:30. K1 có yêu cầu kiểm tra nhưng không có nút đăng. Mở phần thu gọn “Thử duyệt FAQ · ca K10 riêng”: sửa nháp, lưu, duyệt đúng bản rồi đăng. Có thể bật “Đăng FAQ lỗi” để thử thất bại; tắt và đăng lại. Sửa sau duyệt sẽ khoá đăng cho đến khi duyệt lại.
4. Bấm “Về trang học” rồi “Tiếp tục: K2 · Bài đang mở”. Gợi ý chỉ ở bước đầu. Nút “Xin xác nhận kết quả” và ô hỏi tiếp vẫn không cung cấp/xác nhận đáp số. Tài liệu bên trái chuyển sang đề bài §3.5; có thể chọn §3.2 để đối chiếu cách tìm trung vị. “Gợi ý chưa giúp” không mở khoá lời giải. “Hỏi TA” mở bản xem trước: sửa, huỷ không gửi; xác nhận mới chuyển.
5. Chọn “Sửa lỗi” để báo câu AI xác nhận sai §3.3; câu cũ giữ lại và có nhãn đính chính. Chọn “Ca lạ” để thử “Slide 12 nói gì?” hoặc “Bài đó còn nộp được không?”. Ca lạ dùng nhánh từ khoá / hỏi lại, không phải AI tự do.

## Ảnh nộp bài

- `01-hoc-vien.png`: K1, các vị trí [1]–[5] và [9], sau khi nhận phản hồi TA.
- `02-ta.png`: hàng chờ và duyệt FAQ, các vị trí [6]–[8], sau khi TA phản hồi K1.

Ảnh chụp từ prototype thực tế; bảng giải thích từng số và HAX/PAIR nằm ở `../spec.md` §5.

## Kiểm tra lặp lại

Tại thư mục gốc repo, chạy:

```sh
node --check prototype/app.js
node prototype/check.cjs
```

Kiểm tra luật hành động: chuyển lỗi không tạo yêu cầu; thử lại không nhân bản; học viên không được duyệt; K1 không được đăng; sửa huỷ duyệt; lỗi đăng chưa tạo bản đã đăng; nháp mới không thay bản đã đăng.

Không có xác thực hoặc phân quyền máy chủ. Vai TA là điều khiển demo. Nội dung K10 có thể sửa thủ công để thử duyệt phiên bản; bộ mock không đánh giá ngữ nghĩa nội dung sửa. Khi làm sản phẩm thật cần kiểm tra điều kiện nguồn/nội dung và quyền ở máy chủ trước khi phát hành.

Luồng TA là thao tác người phụ trách bổ sung cho prototype, không phải tool mới của AI. Học viên chỉ thấy phản hồi gửi thành công, không thấy ghi chú nội bộ. “Đã xử lý câu hỏi — chờ sửa học liệu” không có nghĩa nguồn đã sửa hoặc FAQ đã đăng; “Chưa kết luận” vẫn tiếp tục kiểm tra.
