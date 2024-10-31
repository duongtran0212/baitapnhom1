// JavaScript for skills bar animation
window.addEventListener('load', function() {
    const progressBars = document.querySelectorAll('.progress div');
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
});

// JavaScript for profile image hover effect
const profileImg = document.getElementById('profile-img');
profileImg.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.1)';
});
profileImg.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
});
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert(`Cảm ơn, ${name}! Chúng tôi sẽ liên hệ với bạn qua email: ${email}.`);
        document.getElementById("contact-form").reset();
    } else {
        alert("Vui lòng điền đầy đủ thông tin.");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("a"); // Lấy tất cả các liên kết

    links.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Ngăn chặn hành động mặc định
            document.body.classList.add("fade-out"); // Thêm lớp hiệu ứng

            const href = this.getAttribute("href");
            setTimeout(() => {
                window.location.href = href; // Chuyển trang sau khi hiệu ứng kết thúc
            }, 500); // Thời gian delay giống với thời gian hiệu ứng
        });
    });

    document.body.classList.add("fade-in"); // Khi tải trang, thêm lớp "fade-in" để hiện trang dần
});

    document.addEventListener("DOMContentLoaded", function () {
        // Hiện trang dần khi tải xong
        document.body.classList.add("fade-in");

        // Hiệu ứng mờ dần khi bấm vào link
        const links = document.querySelectorAll("a[href]");
        links.forEach((link) => {
            link.addEventListener("click", function (e) {
                e.preventDefault();
                const href = link.getAttribute("href");

                document.body.classList.add("fade-out");
                setTimeout(() => {
                    window.location.href = href;
                }, 500);
            });
        });
    });

    // Reset khi quay lại trang
    window.addEventListener("pageshow", function (event) {
        if (event.persisted) {
            document.body.classList.remove("fade-out");
            document.body.classList.add("fade-in");
        }
    });



