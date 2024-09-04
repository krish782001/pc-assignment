document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tab");
    const tabContents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", function() {
            tabs.forEach(item => item.classList.remove("active"));
            tab.classList.add("active");

            tabContents.forEach(content => content.classList.remove("active"));
            const activeContent = document.querySelector(`#${tab.dataset.tab}-form`);
            if (activeContent) {
                activeContent.classList.add("active");
            }
        });
    });

    // Optional: Toggle hamburger menu (if you have a mobile version)
});
document.querySelector('.hamburger-menu').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.add('open');
});

document.querySelector('.sidebar .close-btn').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.remove('open');
});



document.addEventListener("DOMContentLoaded", function() {
    const tabLinks = document.querySelectorAll(".tab-link");
    const tabContents = document.querySelectorAll(".tab-content");

    tabLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            const tabId = this.getAttribute("data-tab");

            tabLinks.forEach(function(link) {
                link.classList.remove("active");
            });

            tabContents.forEach(function(content) {
                content.classList.remove("active");
            });

            document.getElementById(tabId).classList.add("active");
            this.classList.add("active");
        });
    });
});


