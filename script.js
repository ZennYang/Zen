document.addEventListener("DOMContentLoaded", function() {
    let body = document.body;
    let opacity = 0; // 透明度变量
    let increasing = true; // 方向（变亮 or 变暗）
    
    function breatheEffect() {
        if (increasing) {
            opacity += 0.01; // 逐渐变亮
            if (opacity >= 1) increasing = false; // 达到最亮，开始变暗
        } else {
            opacity -= 0.01; // 逐渐变暗
            if (opacity <= 0.3) increasing = true; // 达到最暗，开始变亮
        }

        // 计算颜色（让颜色在 #4B0000 和 #220000 之间变换）
        let r = Math.round(75 * opacity + 34 * (1 - opacity)); // 75 → 34
        let g = Math.round(0 * opacity + 0 * (1 - opacity));   // 0 → 0（不变）
        let b = Math.round(0 * opacity + 0 * (1 - opacity));   // 0 → 0（不变）

        body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

        requestAnimationFrame(breatheEffect); // 继续动画
    }

    breatheEffect(); // 启动动画
});
