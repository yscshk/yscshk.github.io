// Mobile Menu Toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
});

// Accordion Functionality
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach((header, index) => {
    // 默认打开第一个手风琴项目（升學轉介服務）
    if (index === 0) {
        const content = header.nextElementSibling;
        const icon = header.querySelector('i');
        content.classList.add('active');
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
    }
    
    header.addEventListener('click', function() {
        const content = this.nextElementSibling;
        const icon = this.querySelector('i');
        
        // Toggle active class
        content.classList.toggle('active');
        
        // Change icon
        if (content.classList.contains('active')) {
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
        } else {
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
        }
    });
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            document.querySelector('nav').classList.remove('active');
        }
    });
});

// 立即咨詢點擊事件
document.querySelector('.floating-whatsapp-text').addEventListener('click', function() {
    window.open('https://wa.me/85269374541', '_blank');
});

// 為立即咨詢文字添加鼠標指針樣式
document.querySelector('.floating-whatsapp-text').style.cursor = 'pointer';