# Popup-Component  
# 弹窗组件

## Introduction (English)
**[Online demonstration(click to access)](https://www.rockaz.top/GitHub-Project-Demo/Popup-Component)**  
*But the website server is located in China*  

A customizable notification popup system that dynamically loads content from a JSON file via PHP backend. This component features animated popups with optional icons, adaptive dark mode, mobile-specific popups, and responsive design. Popups support staggered animations, automatic fade-in/out, and conditional display based on device type (mobile/desktop). The `z.html` file serves as the integrated demo, requiring server deployment (with PHP support) to function properly.  

## Features  
- **Dynamic Content Loading**: Fetches popup data from `popups.json` using a PHP backend (`get_popups.php`).  
- **Multi-theme Support**: Automatically adapts to dark mode by detecting the `dark-mode` class on the `<html>` element.  
- **Animated Transitions**: Smooth fade-in (with upward translation) and fade-out animations, with staggered delays for sequential popups.  
- **Optional Icon Support**: Display icons in popups (remove the `icon` field from JSON to disable).  
- **Mobile-Specific Popups**: Configure popups to show only on mobile devices via the `phone: "1"` field in JSON.  
- **Adaptive Duration**: Mobile popups stay visible for 3 seconds, while desktop popups last 2 seconds.  
- **Error Handling**: Shows styled error popups (with a warning icon and red error message) when data loading fails (e.g., missing JSON file or network issues).  
- **Responsive Design**: Popups adapt to screen size (max-width: 480px or 90vw), with mobile-optimized styles (smaller icons and font size on screens <600px).  

## Usage  
### 1. Download Files  
You can go to 'Releases' to download the source code.  

### 2. Server Deployment  
- **Required Environment**: A web server with PHP support (e.g., Apache 2.4+, Nginx 1.14+; PHP 7.4+ recommended).  
- **File Permissions**: Ensure `popups.json` is readable by the server (check file/folder permissions).  

### 3. Access the Demo  
Deploy all files to your server’s root directory (or a subdirectory), then access `z.html` via the server’s URL (e.g., `http://localhost/z.html`).  

## JSON Configuration Guide  
The `popups.json` file controls all displayed popups. It should be formatted as an array of objects, each representing a popup:  
```json
[
    {
        "text": "雷池WAF防御本站中",
        "icon": "tp/safeline.svg"
    },
    {
        "text": "检测到你使用手机访问本站，若你在本站其他页面出现界面不适配的问题，可使用电脑端访问或者打开手机浏览器的 “电脑模式 / 访问电脑端页面”",
        "icon": "tp/phone.svg",
        "phone": "1"  // Only show on mobile devices
    }
]
```  

**Required Fields**:  
- `text`: The message text to display (string).  

**Optional Fields**:  
- `icon`: Path to the icon (supports local paths or external URLs). Omit this field to disable the icon for that popup.  
- `phone`: Set to `"1"` to display the popup **only on mobile devices**. Omit or set to other values to show on all devices.  

## Dark Mode Toggle Note  
The popup component automatically detects the `dark-mode` class on the `<html>` element to switch themes. To enable this feature in your project:  
1. Add a `dark-mode` class to the `<html>` tag when dark mode is active.  
2. Implement your own dark mode toggle logic (e.g., a button that adds/removes the class).  
The component’s CSS already includes styling for both light and dark themes; only the toggle logic needs implementation.  

## Customization  
### Modify Popup Content  
Edit `popups.json` to:  
- Add/remove popups.  
- Adjust `text`, `icon`, or `phone` fields.  
- Control mobile-specific display via the `phone` field.  

### Adjust Styling  
Customize `popup.css` to modify:  
- Colors (light/dark mode), borders, and shadows.  
- Animation duration (update `transition` property in `.popup-item`).  
- Layout (e.g., `padding`, `border-radius`, `max-width`).  
- Mobile-specific styles (adjust media query `@media (max-width: 600px)` for small screens).  

### Tune Animation Timing  
Adjust `popup.js` to change:  
- **Fade-in delay**: Modify `700 + index * 200` in `setTimeout` (controls staggered appearance of popups).  
- **Display duration**: Change `3000` (mobile) or `2000` (desktop) in `setTimeout` (how long popups stay visible).  
- **Fade-out speed**: Update the `transition` property in `.popup-item` (currently 0.3s).  

## Technical Details  
### Frontend  
- **HTML**: `z.html` provides the popup container (`#popupContainer`).  
- **CSS**: Uses flexbox for content alignment, CSS transitions for animations, and media queries for mobile responsiveness.  
- **JavaScript**:  
  - `popup.js` handles data fetching, device detection (`isMobile()`), and conditional rendering of mobile/desktop popups.  
  - Dynamically updates dark mode styles by listening to the `<html>` element’s `change` event.  

### Backend  
- **PHP**: `get_popups.php` reads `popups.json`, validates its format, and returns JSON data. Includes error handling for missing files or invalid JSON.  


## 项目简介（中文）  
[在线演示(点击访问)](https://www.rockaz.top/GitHub-Project-Demo/Popup-Component)  

一个可定制的通知弹窗系统，通过PHP后端从JSON文件动态加载内容。组件支持带可选图标的动画弹窗、暗黑模式适配、移动端专属弹窗及响应式设计。弹窗支持交错动画、自动淡入/淡出，并可根据设备类型（移动/桌面）条件显示。`z.html`为整合示例，需部署至服务器（需PHP环境）以正常运行。  


## 功能特性  
- **动态内容加载**：通过PHP脚本（`get_popups.php`）从`popups.json`读取弹窗数据。  
- **多主题支持**：自动检测页面`<html>`元素的`dark-mode`类，切换暗黑模式样式。  
- **动画过渡**：顶部淡入（带位移）和淡出动画，弹窗按顺序交错显示。  
- **可选图标支持**：弹窗可显示图标（JSON中删除`icon`字段可禁用）。  
- **移动端专属弹窗**：通过JSON中的`phone: "1"`字段配置仅在移动端显示的弹窗。  
- **自适应时长**：移动端弹窗停留3秒，桌面端停留2秒。  
- **错误处理**：数据加载失败时（如网络问题、JSON缺失）显示带警告标识和红色错误信息的提示弹窗。  
- **响应式设计**：弹窗适配屏幕尺寸（最大宽度480px或90vw），小屏幕（<600px）优化图标和字体大小。  


## 使用方法  
### 1. 下载文件  
你可以前往“Releases”下载源代码。  

### 2. 服务器部署  
- **环境要求**：需支持PHP的Web服务器（如Apache 2.4+、Nginx 1.14+；推荐PHP 7.4+）。  
- **文件权限**：确保`popups.json`可被服务器读取（检查文件/目录权限）。  

### 3. 访问示例  
将所有文件部署至服务器根目录（或子目录），通过服务器URL访问`z.html`（如`http://localhost/z.html`）。  


## JSON配置指南  
`popups.json`文件控制所有显示的弹窗，格式为对象数组，每个对象代表一个弹窗：  
```json
[
    {
        "text": "雷池WAF防御本站中",
        "icon": "tp/safeline.svg"
    },
    {
        "text": "检测到你使用手机访问本站，若你在本站其他页面出现界面不适配的问题，可使用电脑端访问或者打开手机浏览器的 “电脑模式 / 访问电脑端页面”",
        "icon": "tp/phone.svg",
        "phone": "1"  // 仅在移动端显示
    }
]
```  

**必填字段**：  
- `text`：要显示的消息文本（字符串）。  

**可选字段**：  
- `icon`：图标路径（支持本地路径或外部URL），省略此字段可禁用该弹窗的图标。  
- `phone`：设置为`"1"`时，弹窗**仅在移动端显示**；省略或设置其他值则全设备显示。  


## 黑白模式切换说明  
弹窗组件会自动检测`<html>`元素上的`dark-mode`类以切换主题。若要在项目中启用此功能：  
1. 启用暗黑模式时，为`<html>`标签添加`dark-mode`类。  
2. 实现自定义黑白模式切换逻辑（如添加按钮控制类的添加/移除）。  
组件CSS已内置浅色和暗黑主题样式，仅需实现切换逻辑即可。  


## 自定义配置  
### 修改弹窗内容  
编辑`popups.json`可：  
- 添加/删除弹窗。  
- 调整`text`（文本）、`icon`（图标）、`phone`（移动端控制）字段。  

### 调整样式  
通过修改`popup.css`自定义：  
- 弹窗颜色（浅色/暗黑模式）、边框、阴影。  
- 动画时长（修改`.popup-item`的`transition`属性）。  
- 布局（如内边距`padding`、圆角`border-radius`、最大宽度`max-width`）。  
- 移动端样式（调整`@media (max-width: 600px)`媒体查询内的小屏适配规则）。  

### 调整动画时间  
修改`popup.js`中的参数：  
- **淡入延迟**：调整`setTimeout`中的`700 + index * 200`（控制弹窗交错出现的间隔）。  
- **显示时长**：修改`setTimeout`中的`3000`（移动端）或`2000`（桌面端）（弹窗显示后多久开始淡出）。  
- **淡出速度**：调整`.popup-item`的`transition`属性（当前为0.3秒）。  


## 技术细节  
### 前端部分  
- **HTML**：`z.html`提供弹窗容器（`#popupContainer`）。  
- **CSS**：使用弹性布局（flexbox）排列内容，CSS过渡（transitions）实现动画，媒体查询（media queries）优化移动端显示。  
- **JavaScript**：  
  - `popup.js`负责数据请求、设备检测（`isMobile()`方法）及移动端/桌面端弹窗的条件渲染。  
  - 监听`<html>`元素的`change`事件，动态更新弹窗的暗黑模式类。  

### 后端部分  
- **PHP**：`get_popups.php`读取`popups.json`，验证格式后返回JSON数据（包含文件缺失或JSON格式错误的错误处理）。
