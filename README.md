# DNV Construction - Website mẫu (xanh da trời - trắng)

Website mẫu theo form của https://dnvconstruction.com.vn/ , viết lại bằng
HTML + CSS + JavaScript thuần, không cần cài đặt gì thêm.
Ảnh và nội dung trong bản này là tượng trưng, bạn thay sau trong trang Admin.

## Cách chạy
1. Mở file `index.html` bằng trình duyệt (nhấp đúp là chạy).
   Hoặc chạy server tĩnh, ví dụ: `python3 -m http.server 8000` rồi mở `http://localhost:8000`
2. Không cần backend, không cần database cho bản demo này.

## Cấu trúc dự án
- `index.html` - khung trang, tất cả các trang con dạng chuyển trang bằng hash (#/home, #/about, #/capacity, #/services, #/projects, #/news, #/contact, #/admin)
- `css/style.css` - toàn bộ giao diện, tông xanh da trời (#0ea5e9, #0369a1) + trắng
- `js/app.js` - slider, chuyển trang, lọc dự án, song ngữ, Admin thêm/sửa/xóa
- Trang con theo web gốc:
  - Trang chủ: slider, Về chúng tôi, Dịch vụ, Dự án tiêu biểu có lọc, Tin tức, Đối tác
  - Giới thiệu > Về chúng tôi, Năng lực và nhân sự
  - Dịch vụ (5 nhóm), Dự án (lọc Đã hoàn thành / Đang thi công), Tin tức, Liên hệ (form gửi yêu cầu)

## Song ngữ Việt - Nhật
- Bấm cờ 🇻🇳 / 🇯🇵 ở thanh trên cùng để đổi ngôn ngữ toàn site.
- Lựa chọn được lưu lại, lần sau mở vẫn giữ ngôn ngữ đó.
- Nội dung mẫu của Dịch vụ / Dự án / Tin tức có cả bản tiếng Việt và tiếng Nhật trong `js/app.js` (mục `DEFAULT_DATA`).

## Trang Admin - thêm / sửa / xóa ngay trên web
- Nút Quản trị đã ẩn khỏi menu theo yêu cầu. Mở bằng cách thêm `#/admin` vào cuối địa chỉ web, ví dụ: `index.html#/admin` hoặc `http://localhost:8000/#/admin`.
- Đăng nhập bằng tài khoản bạn đã đặt (xem trong `js/app.js`, biến `ADMIN_USER` / `ADMIN_PASS`).
- Sau khi đăng nhập, chọn tab Trang chủ - Slide / Giới thiệu / Năng lực / Đối tác / Dịch vụ / Dự án / Tin tức / Liên hệ / Tin nhắn để thêm mới, sửa, xóa. Sau mỗi lần thêm/sửa/xóa thành công sẽ hiện thông báo ở dưới màn hình. Nút Hủy chỉ hủy sửa và hiện thông báo đã hủy, không lưu gì cả.
- Chỉ cần nhập tiếng Việt là Lưu được, tiếng Nhật để trống sẽ tự dùng tiếng Việt. Trước đây ô tiếng Nhật bắt buộc nên nhiều người chỉ nhập tiếng Việt thì bấm Lưu bị trình duyệt chặn.
- Nút nổi góc phải dưới: bình thường chỉ hiện icon tròn, rê chuột vào mới mở rộng hiện chữ. Có 2 nút xếp dọc: trên là Chat Zalo (mở zalo.me theo số điện thoại trong Admin > Liên hệ), dưới là Gọi ngay.
  - Tab Trang chủ: sửa tiêu đề, nội dung hero, thêm/xóa/sửa ảnh slide, và sửa cả phần Về chúng tôi ở trang chủ (đoạn giới thiệu + 3 thẻ).
  - Tab Giới thiệu: sửa ảnh (upload hoặc link), đoạn văn chính dưới ảnh, lời ngỏ Giám đốc, tầm nhìn - sứ mệnh, giá trị cốt lõi (cả tiếng Việt và tiếng Nhật).
  - Tab Năng lực: sửa đoạn giới thiệu, danh sách phần mềm và 3 thẻ năng lực.
  - Tab Đối tác: thêm/sửa/xóa đối tác, logo có thể upload hoặc nhập link. Nếu chỉ nhập tên không có logo thì trang chủ hiện tên đối tác dạng chữ.
  - Tab Dịch vụ: có thêm Danh mục dịch vụ (thêm/xóa danh mục, chọn danh mục cho từng dịch vụ), trang Dịch vụ có lọc theo danh mục.
  - Tab Dự án: đã bỏ trường Khối lượng (tấn), không cần điền nữa.
- Slide trang chủ đã cao hơn: 640px trên máy tính, 540px trên điện thoại.
- Hình ảnh có 2 cách: **upload file từ máy** hoặc **nhập link ảnh**. Nếu chọn cả 2 thì file upload được ưu tiên. Ảnh upload lưu dạng DataURL trong trình duyệt nên dùng ảnh nhẹ (dưới ~1MB).
- Dịch vụ / Dự án / Tin tức: mỗi mục có thể có nhiều ảnh (1, 2, 5... ảnh). Trong Admin, bấm + Thêm ảnh để thêm ô ảnh, mỗi ô nhập link hoặc upload. Ngoài trang chủ, thẻ của mục có nút mũi tên ‹ › và đếm 1 / N để chuyển ảnh, bấm vào mục để xem slide lớn trong cửa sổ chi tiết cũng có mũi tên chuyển ảnh.
- Đối tác ở trang chủ: nếu có logo thì hiện logo, dưới logo hiện tên đối tác; nếu không có logo thì hiện tên dạng chữ.
- Tin tức và Liên hệ: Tin tức dùng chung form thêm/sửa như Dịch vụ/Dự án (chỉ cần tiêu đề tiếng Việt là Lưu được, có thông báo thành công). Liên hệ sửa ở tab Liên hệ trong Admin (địa chỉ, điện thoại, email), tin nhắn khách gửi từ form Liên hệ xem ở tab Tin nhắn.
- Dữ liệu lưu bằng `localStorage` của trình duyệt (`dnv_data_v1`) nên tải lại trang vẫn còn, và trang chủ + trang con cập nhật ngay.
- Nút **Khôi phục dữ liệu mẫu** để quay về dữ liệu ban đầu.
- Form Liên hệ của khách cũng lưu vào Admin > Tin nhắn.

## Lưu ý quan trọng trước khi đưa lên thật
- **Đổi mật khẩu Admin** trong `js/app.js` và đừng dùng mật khẩu demo cho site thật.
- Bản này lưu dữ liệu ở trình duyệt người sửa, chưa đồng bộ lên máy chủ cho mọi khách cùng thấy. Muốn sửa một lần là mọi người thấy, cần thêm backend / database thật.
- Thay ảnh placeholder (link Unsplash trong `js/app.js`) bằng ảnh công trình thật, và thay nội dung mẫu bằng nội dung chính thức.
- Form liên hệ bản demo chỉ lưu local, chưa gửi email thật. Muốn gửi email thật cần gắn backend hoặc dịch vụ form.

## Thay nội dung nhanh không cần vào Admin
Mở `js/app.js`, sửa trong `DEFAULT_DATA` (services, projects, news, contact), rồi xóa `localStorage` key `dnv_data_v1` hoặc bấm Khôi phục dữ liệu mẫu trong Admin.
