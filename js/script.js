const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

btn.addEventListener('click', toggleMenu);

function openMenu() {
  menu.classList.remove('hidden');
  requestAnimationFrame(() => {
    menu.classList.remove('translate-x-full');
  });
  btn.classList.add('open');
}

function closeMenu() {
  menu.classList.add('translate-x-full');
  btn.classList.remove('open');
  menu.addEventListener(
    'transitionend',
    function handleEnd(e) {
      if (e.propertyName === 'transform') {
        menu.classList.add('hidden');
        menu.removeEventListener('transitionend', handleEnd);
      }
    }
  );
}

function toggleMenu() {
  const isHidden = menu.classList.contains('hidden');
  if (isHidden) {
    openMenu();
  } else {
    closeMenu();
  }
}

// Lightbox
document.addEventListener('DOMContentLoaded', function () {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');
  if (!lightbox || !lightboxImg) return;

  function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || 'Büyük Görsel';
    lightbox.classList.remove('hidden');
    lightbox.classList.add('flex');
  }

  function closeLightbox() {
    lightbox.classList.add('hidden');
    lightbox.classList.remove('flex');
    lightboxImg.src = '';
  }

  // Open on any gallery image click (within main grid)
  const gallery = document.querySelector('main .grid');
  if (gallery) {
    gallery.addEventListener('click', function (e) {
      const img = e.target.closest('img');
      if (img && gallery.contains(img)) {
        openLightbox(img.src, img.alt);
      }
    });
  } else {
    // Fallback: bind directly if container selector changes
    const images = document.querySelectorAll('main img');
    images.forEach(function (img) {
      img.addEventListener('click', function () {
        openLightbox(img.src, img.alt);
      });
    });
  }

  // Close on overlay click
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Close on button click
  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  // Close on ESC
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !lightbox.classList.contains('hidden')) {
      closeLightbox();
    }
  });
});
