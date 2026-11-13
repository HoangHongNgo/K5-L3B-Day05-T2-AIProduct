# Bài nộp LAB5 — T2 Giáo dục · Nhóm [tên nhóm]

**Lớp:** [L3A/L3B] · **Bàn / zone:** [điền] · **Track:** T2

| Họ và Tên | Mã Học Viên | Việc đã làm |
|---|---|---|
| [Thành viên 1] | [Mã học viên] | [Việc cụ thể] |
| [Thành viên 2] | [Mã học viên] | [Việc cụ thể] |
| [Thành viên 3] | [Mã học viên] | [Việc cụ thể] |

## §1. Lát cắt & phạm vi

**Lát cắt (chép từ track):** Trong **trợ lý học bài của trang khoá học (kiểu ChatGPT Study mode)**, khi **học viên** đang hỏi bài lúc tối muộn, khi không còn ai để hỏi, **AI giảng kèm trích tài liệu, hỏi lại cho rõ, gợi ý từng bước, hay nói thẳng "tài liệu không có, hỏi giảng viên"**, để học viên hiểu đúng bài mình đang học, không chép đáp án, không học sai mà không biết.

**AI cần quyết định gì.** Với mỗi câu hỏi, trợ lý chọn giữa giải thích có dẫn mục của tài liệu buổi đã mở, hỏi lại khi thiếu ngữ cảnh, gợi ý bước đầu cho bài đang mở, hoặc dừng ở giới hạn nguồn và hướng học viên hỏi người phụ trách. Căn cứ hiện có là tài liệu buổi 3 (§3.1–§3.5), trang khoá học và các tool trong `t2-education.md`; đề cương buổi sau chỉ có tên buổi, không có nội dung để giảng chi tiết.

**Sản phẩm thật hôm nay và quyền AI được thêm.** Theo mục “Sản phẩm thật hôm nay” của track, Study mode hỏi ngược, gợi ý từng bước và kiểm tra hiểu bài, nhưng không có TA hoặc giảng viên đứng sau để nhận câu hỏi. Khi tích hợp vào trang khoá học, trợ lý được tra cứu tài liệu bằng `tra_cuu_tai_lieu`, gửi gợi ý cá nhân bằng `goi_y_bai_tap`, chuyển câu hỏi cho TA bằng `chuyen_TA`, và có khả năng đăng FAQ bằng `dang_FAQ`. Đây là các hành động bổ sung so với việc người học tự tìm mục tài liệu, tự hỏi TA hoặc người phụ trách tự đăng FAQ; **bảng tool chưa cấp quyền tự động thực hiện mọi hành động**. Mức tự chủ của từng tool sẽ được quyết định ở §4.

**Nếu AI sai, ai chịu gì.** Học viên chịu trước: hiểu sai kiến thức mà không nhận ra, nộp bài sai, hoặc chép lời giải thay vì tự học. TA và giảng viên phải sửa hiểu lầm về sau; nếu câu sai được đăng bằng `dang_FAQ`, cả lớp có thể đọc trước khi gỡ. Sai theo hướng **khẳng định điều không có căn cứ hoặc xác nhận đáp số bài đang mở** đắt hơn việc hỏi lại hay nói “chưa có tài liệu”: lỗi thứ nhất dễ được tin và lan truyền âm thầm, còn lỗi thứ hai làm chậm câu trả lời nhưng vẫn giữ được cơ hội kiểm tra. Ví dụ, tài liệu §3.3 khẳng định độ lệch chuẩn “luôn nhỏ hơn phương sai”; vì hai đại lượng khác đơn vị, trợ lý không thể mặc nhiên lặp lại mệnh đề đó như một quy tắc đúng. Với bài tập 3 đang mở đến 13/11/2026 23:59, một gợi ý quá tay từ `goi_y_bai_tap` cũng không thu hồi được sau khi học viên đã chép.

**Ba việc tính năng không làm:**

1. **Không giải hộ, xác nhận đáp số hoặc viết nhận xét hộ cho bài tập đang mở.** Bài tập 3 còn hạn; cho lời giải hoặc xác nhận kết quả sẽ thay việc học của học viên, và `goi_y_bai_tap` không thể lấy lại thông tin đã lộ.
2. **Không giảng chi tiết nội dung chưa mở hoặc viện dẫn nguồn không tồn tại.** Trang khoá học chỉ có đề cương buổi 4–10, còn tài liệu buổi 3 không có slide đánh số; nói nội dung “slide 12” hay giảng buổi 7 như đã có tài liệu là bịa căn cứ.
3. **Không tự đăng câu trả lời vào FAQ cả lớp.** `dang_FAQ` có thể gỡ, nhưng học viên khác đã đọc có thể tiếp tục tin nội dung sai; câu trả lời phát tán rộng cần người có trách nhiệm duyệt trước. §4 sẽ xác định người duyệt và cách xử lý khi họ chưa phản hồi.

**Ranh giới tool ở chặng này.** `tra_cuu_tai_lieu` chỉ đọc; `goi_y_bai_tap` làm thay đổi điều một học viên đã thấy; `chuyen_TA` tạo một yêu cầu có thể xử lý lại; `dang_FAQ` phát câu trả lời cho cả lớp, không thể thu hồi tri thức người đã đọc. Không có tool nào sửa tài liệu gốc, đổi hạn nộp, nộp bài hộ hoặc liên hệ giảng viên trực tiếp; trợ lý không được hứa đã làm những việc đó.
