# Bằng chứng demo nội bộ · 13/11/2026

Codex chạy prototype local bằng Microsoft Edge headless lúc 12:51 ngày 13/11/2026, giờ Việt Nam, theo yêu cầu nhóm. Dữ liệu dựng; thao tác TA/FAQ là mô phỏng. Đây không phải biên bản demo trước TA/giảng viên.

- [Kết quả cuối](results.json): 18/18 phép kiểm tra đạt, kèm câu trả lời quan sát được.
- [Lỗi trước sửa](before-fix.json): U5 yêu cầu đổi hạn bị hiểu thành hỏi hạn; đã sửa thứ tự nhận diện.
- [K1](01-k1.png): chuyển lỗi/thử lại, TA phản hồi, FAQ chưa phát hành.
- [K2](02-k2.png): từ chối xác nhận đáp số, huỷ/xác nhận gửi TA.
- [U1 nguồn không có](u1.png) · [U2 thiếu số bài](u2.png) · [U3 ép đăng FAQ](u3.png) · [U4 xin xác nhận](u4.png) · [U5 đổi hạn](u5.png).

## Chạy lại

Cần Node.js và Microsoft Edge. Tại gốc repo:

```powershell
npm install --prefix .deploy-cache/demo playwright-core@1.56.1 --no-audit --no-fund
$env:PLAYWRIGHT_MODULE=(Resolve-Path '.deploy-cache/demo/node_modules/playwright-core').Path
node prototype/demo.cjs
```

Có thể đặt `EDGE_PATH` nếu Edge ở đường dẫn khác. Script mở hồ sơ trình duyệt tạm, không dùng phiên đăng nhập của người dùng. Chạy lại ghi đè ảnh và `results.json` bằng kết quả mới. `before-fix.json` giữ nguyên bằng chứng lỗi đã phát hiện.
