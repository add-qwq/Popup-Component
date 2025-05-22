async function loadPopups() {
            try {
                const response = await fetch('get_popups.php');

                if (!response.ok) {
                    throw new Error(`连接错误：${response.status} ${response.statusText}`);
                }

                const result = await response.json();
                if (result.code !== 200) {
                    throw new Error(result.error || '服务器返回异常');
                }

                renderPopups(result.data);
            } catch (error) {
                console.error('弹窗数据加载失败:', error);
                showErrorPopup(`弹窗加载失败：${error.message}`);
            }
        }

        function renderPopups(popups) {
            const container = document.getElementById('popupContainer');

            popups.forEach((popup, index) => {
                const popupElement = document.createElement('div');
                popupElement.className = 'popup-item';

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
                    setTimeout(() => {
                        popupElement.classList.add('hide');
                        setTimeout(() => popupElement.remove(), 300);
                    }, 2000);
                }, 1000 + index * 200);
            });
        }

        function showErrorPopup(message) {
            const container = document.getElementById('popupContainer');
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
