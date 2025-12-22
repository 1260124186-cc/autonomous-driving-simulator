// 自动驾驶技术模拟应用 - 静态演示版本
// 仅用于展示UI界面，不实现实际功能

console.log('自动驾驶技术模拟应用已加载');

// 页面加载完成后执行
window.addEventListener('DOMContentLoaded', () => {
  console.log('页面DOM结构已加载完成');
  
  // 模式切换按钮的点击事件（仅演示，无实际功能）
  const modeButtons = document.querySelectorAll('.mode-btn');
  modeButtons.forEach(button => {
    button.addEventListener('click', () => {
      // 移除所有按钮的active类
      modeButtons.forEach(btn => btn.classList.remove('active'));
      // 为当前点击的按钮添加active类
      button.classList.add('active');
      console.log('模式切换：' + button.textContent);
    });
  });
  
  // 方向控制按钮的点击事件（仅演示，无实际功能）
  const directionButtons = document.querySelectorAll('.dir-btn');
  directionButtons.forEach(button => {
    button.addEventListener('click', () => {
      console.log('方向控制：' + button.textContent);
    });
  });
  
  // 油门/刹车按钮的点击事件（仅演示，无实际功能）
  const pedalButtons = document.querySelectorAll('.pedal');
  pedalButtons.forEach(button => {
    button.addEventListener('click', () => {
      console.log('踏板控制：' + button.textContent);
    });
  });
  
  // 参数调节的事件监听（仅演示，无实际功能）
  const params = document.querySelectorAll('.param-item input, .param-item select');
  params.forEach(param => {
    param.addEventListener('change', () => {
      console.log('参数调节：' + param.parentElement.querySelector('label').textContent);
    });
  });
});
