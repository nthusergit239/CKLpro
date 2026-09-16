document.addEventListener('DOMContentLoaded', function () {

  var menuToggle = document.getElementById('menuToggle');
  var mobileNav = document.getElementById('mobileNav');

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', function () {
      var isOpen = !mobileNav.hidden;
      mobileNav.hidden = isOpen;
      menuToggle.setAttribute('aria-expanded', String(!isOpen));
      menuToggle.querySelector('img').src = isOpen
        ? 'images/icon-menu.svg'
        : 'images/icon-close.svg';
    });

    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.hidden = true;
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.querySelector('img').src = 'images/icon-menu.svg';
      });
    });
  }

  var searchToggle = document.getElementById('searchToggle');
  var searchPanel = document.getElementById('searchPanel');

  if (searchToggle && searchPanel) {
    searchToggle.addEventListener('click', function () {
      var isOpen = !searchPanel.hidden;
      searchPanel.hidden = isOpen;
      searchToggle.setAttribute('aria-expanded', String(!isOpen));
      if (!isOpen) {
        var input = searchPanel.querySelector('input');
        if (input) input.focus();
      }
    });
  }

  var searchForm = document.getElementById('searchForm');
  if (searchForm) {
    searchForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = searchForm.querySelector('input');
      var query = input ? input.value.trim() : '';
      if (query) {
        console.log('Tìm kiếm:', query);
      }
    });
  }

  var musicToggle = document.getElementById('musicToggle');

  if (musicToggle) {
    var isPlaying = false;
    var icon = musicToggle.querySelector('img');
    var label = musicToggle.querySelector('span');

    musicToggle.addEventListener('click', function () {
      isPlaying = !isPlaying;
      musicToggle.setAttribute('aria-pressed', String(isPlaying));
      musicToggle.classList.toggle('is-playing', isPlaying);

      if (icon) icon.src = isPlaying ? 'images/icon-pause.svg' : 'images/icon-music.svg';
      if (label) label.textContent = isPlaying ? 'Đang phát' : 'Nhạc nền';

      // Gắn phát nhạc
      // var audio = document.getElementById('bgAudio');
      // isPlaying ? audio.play() : audio.pause();
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var targetId = link.getAttribute('href');
      if (targetId.length > 1) {
        var target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  var header = document.querySelector('.site-header');
  if (header) {
    var lastScroll = 0;
    window.addEventListener('scroll', function () {
      var current = window.scrollY;
      header.classList.toggle('is-scrolled', current > 12);
      lastScroll = current;
    }, { passive: true });
  }

  document.querySelectorAll('.curriculum-module .module-head').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var module = btn.closest('.curriculum-module');
      var isOpen = module.classList.contains('is-open');
      module.classList.toggle('is-open', !isOpen);
      btn.setAttribute('aria-expanded', String(!isOpen));
    });
  });

  var yearEl = document.querySelector('.footer-bottom');
  if (yearEl) {
    yearEl.innerHTML = yearEl.innerHTML.replace('2026', String(new Date().getFullYear()));
  }

});
