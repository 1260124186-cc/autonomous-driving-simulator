// 自动驾驶技术模拟应用 - 静态演示版本
// 仅用于展示UI界面，不实现实际功能

console.log('自动驾驶技术模拟应用已加载');

// Message提示功能
function showMessage(message, type = 'info') {
  const container = document.getElementById('message-container');
  if (!container) return;

  const messageItem = document.createElement('div');
  messageItem.className = 'message-item';

  const icon = document.createElement('span');
  icon.className = 'message-icon';
  icon.textContent = 'ℹ️';

  const content = document.createElement('span');
  content.className = 'message-content';
  content.textContent = message;

  messageItem.appendChild(icon);
  messageItem.appendChild(content);
  container.appendChild(messageItem);

  // 3秒后自动移除
  setTimeout(() => {
    messageItem.classList.add('fade-out');
    setTimeout(() => {
      if (messageItem.parentNode) {
        messageItem.parentNode.removeChild(messageItem);
      }
    }, 300);
  }, 3000);
}

// 页面加载完成后执行
window.addEventListener('DOMContentLoaded', () => {
  console.log('页面DOM结构已加载完成');

  // Element Plus风格的Select组件实现
  const customSelects = document.querySelectorAll('.custom-select');
  customSelects.forEach(select => {
    const selectInput = select.querySelector('.select-input');
    const selectDropdown = select.querySelector('.select-dropdown');
    const selectValue = select.querySelector('.select-value');
    const options = selectDropdown.querySelectorAll('.select-option');
    const selectId = selectInput.getAttribute('data-select');

    // 点击输入框显示/隐藏下拉菜单
    selectInput.addEventListener('click', (e) => {
      e.stopPropagation();
      // 关闭其他打开的下拉菜单
      document.querySelectorAll('.select-dropdown.show').forEach(dropdown => {
        if (dropdown !== selectDropdown) {
          dropdown.classList.remove('show');
          dropdown.closest('.custom-select').querySelector('.select-input').classList.remove('focused');
        }
      });

      selectDropdown.classList.toggle('show');
      selectInput.classList.toggle('focused');
    });

    // 选择选项
    options.forEach(option => {
      option.addEventListener('click', (e) => {
        e.stopPropagation();
        const value = option.getAttribute('data-value');
        selectValue.textContent = value;

        // 更新选中状态
        options.forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');

        // 关闭下拉菜单
        selectDropdown.classList.remove('show');
        selectInput.classList.remove('focused');
      });
    });

    // 点击外部关闭下拉菜单
    document.addEventListener('click', (e) => {
      if (!select.contains(e.target)) {
        selectDropdown.classList.remove('show');
        selectInput.classList.remove('focused');
      }
    });

    // 初始化选中第一个选项
    if (options.length > 0) {
      options[0].classList.add('selected');
    }
  });

  // 模式切换按钮的点击事件
  const modeButtons = document.querySelectorAll('.mode-btn');
  modeButtons.forEach(button => {
    button.addEventListener('click', () => {
      // 移除所有按钮的active类
      modeButtons.forEach(btn => btn.classList.remove('active'));
      // 为当前点击的按钮添加active类
      button.classList.add('active');
      showMessage('功能正在开发中');
    });
  });

  // 方向控制按钮的点击事件
  const directionButtons = document.querySelectorAll('.dir-btn');
  directionButtons.forEach(button => {
    button.addEventListener('click', () => {
      // 添加点击动画效果
      button.style.transform = 'scale(0.95)';
      setTimeout(() => {
        button.style.transform = '';
      }, 150);
      showMessage('功能正在开发中');
    });
  });

  // 油门/刹车按钮的点击事件
  const pedalButtons = document.querySelectorAll('.pedal');
  pedalButtons.forEach(button => {
    button.addEventListener('click', () => {
      // 添加点击动画效果
      button.style.transform = 'scale(0.95)';
      setTimeout(() => {
        button.style.transform = '';
      }, 150);
      showMessage('功能正在开发中');
    });
  });

  // 参数调节的事件监听
  const paramSliders = document.querySelectorAll('.param-slider');
  paramSliders.forEach(slider => {
    slider.addEventListener('input', (e) => {
      const valueDisplay = e.target.parentElement.querySelector('.value-display');
      if (valueDisplay) {
        const value = parseFloat(e.target.value);
        if (e.target.previousElementSibling && e.target.previousElementSibling.textContent.includes('模拟速度')) {
          valueDisplay.textContent = value.toFixed(1) + 'x';
        } else if (e.target.previousElementSibling && e.target.previousElementSibling.textContent.includes('交通流量')) {
          const labels = ['极低', '很低', '低', '较低', '中等', '较高', '高', '很高', '极高', '最高'];
          valueDisplay.textContent = labels[value - 1] || '中等';
        }
      }
    });
  });

  // 添加页面加载动画
  const sections = document.querySelectorAll('section');
  sections.forEach((section, index) => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    setTimeout(() => {
      section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }, index * 100);
  });
});
