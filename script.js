// FAB 鏄剧ず鎺у埗
const fabGroup = document.querySelector('.fab-group');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    fabGroup.classList.add('show');
  } else {
    fabGroup.classList.remove('show');
  }
});

// 婊氬姩鍏ュ満鍔ㄧ敾
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.feat-card, .class-card, .cm-item, .contact-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity .5s ease, transform .5s ease';
  observer.observe(el);
});

document.addEventListener('animationend', () => {}, { once: true });

// 鐢?MutationObserver 鐩戝惉 visible 绫?
const styleSheet = document.createElement('style');
styleSheet.textContent = '.visible { opacity: 1 !important; transform: translateY(0) !important; }';
document.head.appendChild(styleSheet);

// 琛ㄥ崟鎻愪氦
document.getElementById('enrollmentForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const phone = this.phone.value;
  if (!/^1[3-9]\d{9}$/.test(phone)) {
    alert('璇疯緭鍏ユ纭殑鎵嬫満鍙风爜');
    return;
  }
  alert('鉁?鎶ュ悕鎴愬姛锛佹嫑鐢熻€佸笀灏嗗湪24灏忔椂鍐呰仈绯绘偍銆?);
  this.reset();
});

// 骞虫粦閿氱偣
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
