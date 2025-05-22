function loadPopups() {
    fetch('get_popups.php')
        .then(response => response.json())
        .then(data => {
            if (data.code === 200) {
                renderPopups(data.data);
            } else {
                console.error('Failed to load popups:', data.error);
                showErrorPopup(data.error || '无法加载弹窗数据');
            }
        })
        .catch(error => {
            console.error('Error fetching popups:', error);
            showErrorPopup('网络错误，无法加载弹窗');
        });
}

function renderPopups(popups) {
    const container = document.getElementById('popupContainer');
    if (!container) {
        console.error('popupContainer not found in the DOM');
        showErrorPopup('页面缺少弹窗容器');
        return;
    }

    popups.forEach((popup, index) => {
        const isMobileDevice = isMobile();
        const isMobilePopup = popup.phone === "1";

        if (!isMobileDevice && !isMobilePopup || isMobileDevice && (!isMobilePopup || isMobilePopup)) {
            const popupElement = document.createElement('div');
            popupElement.className = 'popup-item';

            // Apply dark mode if enabled
            if (document.documentElement.classList.contains('dark-mode')) {
                popupElement.classList.add('dark-mode');
            }

            const content = document.createElement('div');
            content.className = 'popup-content';

            if (popup.icon) {
                const icon = document.createElement('img');
                icon.className = 'popup-icon';
                icon.src = popup.icon;
                icon.alt = '弹窗图标';
                content.appendChild(icon);
            }

            const text = document.createElement('div');
            text.className = 'popup-text';
            text.textContent = popup.text;
            content.appendChild(text);

            popupElement.appendChild(content);
            container.appendChild(popupElement);

            setTimeout(() => {
                popupElement.classList.add('visible');
                const dwellTime = isMobilePopup ? 3000 : 2000;
                setTimeout(() => {
                    popupElement.classList.add('hide');
                    setTimeout(() => popupElement.remove(), 300);
                }, dwellTime);
            }, 700 + index * 200);
        }
    });
}

function showErrorPopup(message) {
    const container = document.getElementById('popupContainer');
    if (!container) {
        console.error('popupContainer not found for error popup');
        return;
    }

    const errorElement = document.createElement('div');
    errorElement.className = 'popup-item';

    if (document.documentElement.classList.contains('dark-mode')) {
        errorElement.classList.add('dark-mode');
    }

    const content = document.createElement('div');
    content.className = 'popup-content';

    const text = document.createElement('div');
    text.className = 'popup-text';
    text.innerHTML = `
        <div>⚠️ 弹窗加载异常</div>
        <div style="color: #ff4444; font-size: 0.9rem; margin-top: 8px">${message}</div>
    `;
    content.appendChild(text);

    errorElement.appendChild(content);
    container.appendChild(errorElement);

    setTimeout(() => errorElement.classList.add('visible'), 500);
}

document.addEventListener('DOMContentLoaded', loadPopups);

document.documentElement.addEventListener('change', () => {
    document.querySelectorAll('.popup-item').forEach(item => {
        if (document.documentElement.classList.contains('dark-mode')) {
            item.classList.add('dark-mode');
        } else {
            item.classList.remove('dark-mode');
        }
    });
});
