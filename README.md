# Popup-Component  
# 弹窗组件

## Introduction (English)
A customizable notification popup system that dynamically loads content from a JSON file via PHP backend. This component displays animated popups with optional icons, supports dark mode, and features automatic fade-in/out animations. The `z.html` file serves as the integrated demo, requiring server deployment (with PHP support) to function properly.  

## Features  
- **Dynamic Content Loading**: Fetches popup data from `popups.json` using a PHP backend (`get_popups.php`).  
- **Multi-theme Support**: Automatically adapts to dark mode based on the page's `dark-mode` class.  
- **Animated Transitions**: Smooth fade-in (from top) and fade-out animations with configurable delays.  
- **Optional Icon Support**: Display icons in popups (remove the `icon` field from JSON to disable).  
- **Error Handling**: Shows error popups when data loading fails (e.g., missing JSON file or invalid format).  
- **Responsive Design**: Popups adapt to screen size (max-width: 480px or 90vw).  

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
        "text": "Popup message text",
        "icon": "path/to/icon.svg"  // Optional: Remove this line to disable the icon
    },
    {
        "text": "Icon-less notification"
    }
]
```  
**Required Fields**:  
- `text`: The message text to display (string).  

**Optional Fields**:  
- `icon`: Path to the icon (supports local paths or external URLs). Omit this field to disable the icon for that popup.  

## Dark Mode Toggle Note  
The popup component automatically detects the `dark-mode` class on the `html` element to switch themes. To enable this feature in your project:  
1. Add a `dark-mode` class to the `<html>` tag when dark mode is active.  
2. Implement your own dark mode toggle logic (e.g., a button that adds/removes the class).  
The component's CSS already includes styling for both light and dark themes; only the toggle logic needs implementation.  

## Customization  
### Modify Popup Content  
Edit `popups.json` to add/remove popups or adjust their properties.  

### Adjust Styling  
Customize `popup.css` to modify:  
- Popup colors (light/dark mode), borders, and shadows.  
- Animation duration (update `transition` property in `.popup-item`).  
- Layout (e.g., `padding`, `border-radius`, `max-width`).  

### Tune Animation Timing  
Adjust `popup.js` to change:  
- Fade-in delay: Modify `1000 + index * 200` in `setTimeout` (controls staggered appearance).  
- Display duration: Change `2000` in `setTimeout` (how long popups stay visible before fading out).  
- Fade-out speed: Update the `transition` property in `.popup-item` (currently 0.3s).  

## Technical Details  
- **Frontend**:  
  - HTML: `z.html` provides the popup container (`#popupContainer`).  
  - CSS: Uses flexbox for layout, transitions for animations, and media queries for responsiveness.  
  - JavaScript: `popup.js` handles data fetching, DOM rendering, and dark mode synchronization.  
- **Backend**:  
  - PHP: `get_popups.php` reads `popups.json`, validates its format, and returns JSON data (with error handling for missing files or invalid JSON).  



## 项目简介（中文）  
一个可定制的通知弹窗系统，通过PHP后端从JSON文件动态加载内容。组件支持带可选图标的动画弹窗、暗黑模式适配，并具备自动淡入/淡出效果。`z.html`为整合示例，需部署至服务器（需PHP环境）以正常运行。  

## 功能特性  
- **动态内容加载**：通过PHP脚本（`get_popups.php`）从`popups.json`读取弹窗数据。  
- **多主题支持**：自动根据页面的`dark-mode`类切换暗黑模式样式。  
- **动画过渡**：顶部淡入（带位移）和淡出动画，支持延迟配置。  
- **可选图标支持**：在弹窗中显示图标（从JSON中删除`icon`字段可禁用）。  
- **错误处理**：数据加载失败时（如JSON文件缺失或格式错误）显示错误提示弹窗。  
- **响应式设计**：弹窗适配屏幕尺寸（最大宽度480px或90vw）。  

## 使用方法  
### 1. 下载文件  
你可以前往在“Releases”下载源代码

### 2. 服务器部署  
- **环境要求**：需支持PHP的Web服务器（如Apache 2.4+、Nginx 1.14+；推荐PHP 7.4+）。  
- **文件权限**：确保`popups.json`可被服务器读取（检查文件/目录权限）。  

### 3. 访问示例  
将所有文件部署至服务器根目录（或子目录），通过服务器URL访问`z.html`（如`http://localhost/z.html`）。  

## JSON配置指南  
`popups.json`文件控制所有显示的弹窗。其格式应为对象数组，每个对象代表一个弹窗：  
```json
[
    {
        "text": "弹窗消息文本",
        "icon": "图标路径.svg"  // 可选：删除此行以禁用图标
    },
    {
        "text": "无图标通知"
    }
]
```  
**必填字段**：  
- `text`：要显示的消息文本（字符串）。  

**可选字段**：  
- `icon`：图标路径（支持本地路径或外部URL）。省略此字段可禁用该弹窗的图标。  

## 黑白模式切换说明  
弹窗组件会自动检测`<html>`元素上的`dark-mode`类来切换主题。若要在你的项目中启用此功能：  
1. 在启用暗黑模式时，为`<html>`标签添加`dark-mode`类。  
2. 实现你自己的黑白模式切换逻辑（例如，添加一个按钮来添加/移除该类）。  
组件的CSS已包含浅色和暗黑两种主题的样式；仅需实现切换逻辑即可。  

## 自定义配置  
### 修改弹窗内容  
根据需要编辑`popups.json`添加/删除弹窗或调整其属性。  

### 调整样式  
通过修改`popup.css`自定义：  
- 弹窗颜色（浅色/暗黑模式）、边框、阴影。  
- 动画时长（修改`.popup-item`的`transition`属性）。  
- 布局（如内边距`padding`、圆角`border-radius`、最大宽度`max-width`）。  

### 调整动画时间  
修改`popup.js`中的参数：  
- 淡入延迟：调整`setTimeout`中的`1000 + index * 200`（控制弹窗依次出现的间隔）。  
- 显示时长：修改`setTimeout`中的`2000`（弹窗显示后多久开始淡出）。  
- 淡出速度：调整`.popup-item`的`transition`属性（当前为0.3秒）。  

## 技术细节  
- **前端部分**：  
  - HTML：`z.html`提供弹窗容器（`#popupContainer`）。  
  - CSS：使用弹性布局（flexbox）、过渡动画（transitions）和响应式单位（vw）。  
  - JavaScript：`popup.js`负责数据请求、DOM渲染及暗黑模式同步。  
- **后端部分**：  
  - PHP：`get_popups.php`读取`popups.json`，验证格式后返回JSON数据（包含文件缺失或JSON格式错误的错误处理）。
