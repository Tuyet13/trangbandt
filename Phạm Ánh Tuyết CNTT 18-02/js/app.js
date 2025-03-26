function searchProduct() {
    const searchQuery = document.getElementById('search-input').value.toLowerCase();
    alert('Bạn đã tìm kiếm: ' + searchQuery);
    // Đây là nơi bạn có thể thêm chức năng tìm kiếm thực tế, ví dụ như lọc danh sách sản phẩm.
}

function addToCart(event) {
    // Ngừng hành động mặc định của nút (nếu có)
    event.preventDefault();

    // Hiển thị thông báo
    alert('Bạn đã mua thành công sản phẩm!');
}
var myCarousel = document.getElementById('carouselExample')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 3000, // Thời gian chuyển tiếp giữa các ảnh (mili giây)
})
