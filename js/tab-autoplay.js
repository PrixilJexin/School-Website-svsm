// tab-autoplay.js

document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll('#pills-tab button');
    const tabCount = tabs.length;
    let currentTab = 0;
    const intervalTime = 5000; // 5 seconds

    function showNextTab() {
        tabs[currentTab].classList.remove('active');
        const currentTabId = tabs[currentTab].getAttribute('data-bs-target');
        document.querySelector(currentTabId).classList.remove('show', 'active');

        currentTab = (currentTab + 1) % tabCount;

        tabs[currentTab].classList.add('active');
        const nextTabId = tabs[currentTab].getAttribute('data-bs-target');
        const nextTabPane = document.querySelector(nextTabId);
        nextTabPane.classList.add('show', 'active');
    }

    setInterval(showNextTab, intervalTime);
});
