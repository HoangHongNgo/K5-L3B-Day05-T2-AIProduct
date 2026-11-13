# LAB5 · T2 Giáo dục · Nhóm AIProduct

**Lớp L3B · Ngày 13/11/2026.** Trợ lý học bài tối muộn trong trang khoá học: cho thấy học viên thấy gì khi tài liệu sai, AI được tự làm tới đâu và khi nào cần TA.

## Xem bài nộp

- [Báo cáo thiết kế — spec.md](spec.md): thành viên, 11 kịch bản, UX khi AI sai, mức tự chủ, bằng chứng prototype, tiêu chí Pass/Fail và demo.
- [Prototype web](https://hoc-dem-t2-aiproduct.towering-petunia.workers.dev) · [Mức tự chủ](https://hoc-dem-t2-aiproduct.towering-petunia.workers.dev/muc-tu-chu/).
- [Hướng dẫn demo và chạy local](prototype/README.md). Nếu web tạm không truy cập được, tải repo và mở `prototype/index.html` bằng trình duyệt; giữ `app.js` và `style.css` cùng thư mục. Không cần cài thư viện.
- [Ảnh học viên](prototype/01-hoc-vien.png) · [Ảnh TA](prototype/02-ta.png): vị trí [1]–[9] đối chiếu với §5.2 trong báo cáo.

## Thành viên và phần việc

| Họ và tên | Mã học viên | Việc đã làm |
|---|---|---|
| Trần Văn Tuấn | 2A202604092 | Chuẩn bị demo |
| Nguyễn Quang Thành | 2A202604085 | Phân tích lát cắt |
| Ngô Hồng Hoàng | 2A202604093 | Viết báo cáo |
| Đào Đức Sơn | 2A202604105 | Thiết kế tools |

Nhóm xác nhận đã được giảng viên cho phép có 4 thành viên. Phân công trình bày đề xuất nằm ở §7.1.

## Demo và kiểm tra

Bắt đầu **K1 → K2**: §3.3 có câu sai → chuyển TA lỗi/thử lại → TA xem trước và phản hồi → K10 duyệt FAQ đúng phiên bản → K2 chỉ gợi ý bước đầu, không xác nhận đáp số. Toàn bộ dữ liệu và hành động là mô phỏng; không có AI thật, không gửi TA thật hoặc đăng FAQ thật. Giờ demo cố định 22:30 ngày 13/11/2026; tải lại trang xoá trạng thái.

Chạy tại thư mục gốc:

```sh
node --check prototype/app.js
node prototype/check.cjs
```

Các file `01-challenge-brief.md`, `02-guide.md`, `03-spec-template.md`, `04-rubric.md`, `t2-education.md` và `index.html` ở gốc là tài liệu/mẫu tham khảo của đề. **Prototype của nhóm nằm trong `prototype/`**. Thư mục `sites/` phục vụ triển khai.

## Trạng thái trước nộp

Đã kiểm tra repo công khai, không phải fork và tên đúng quy ước qua GitHub API ngày 13/11/2026; bộ kiểm tra Node chạy qua. Danh sách việc còn cần xác nhận nằm ở `spec.md` §7.4: xác nhận phần trình bày và bước nộp qua kênh lớp. Không ghi các dữ kiện chưa có thành kết quả đã thực hiện.

Hạn lớp L3B: **23:59 ngày 13/11/2026, giờ Việt Nam**. Link repo công khai là bài nộp; cần gửi qua kênh giảng viên thông báo.

Đã chạy [demo nội bộ K1/K2 và 5 ca lạ](prototype/demo-evidence/README.md), lưu ảnh và kết quả 18/18 phép kiểm tra đạt. Mức ban đầu của thành viên ở §4.3 là giả định theo yêu cầu nhóm; demo nội bộ do Codex chạy trên mock, không phải ghi nhận demo trước lớp.
