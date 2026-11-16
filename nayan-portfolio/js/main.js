(function () {
  var views = Array.prototype.slice.call(document.querySelectorAll('.view'));
  var ids = views.map(function (v) { return v.getAttribute('data-view'); });
  var menu = Array.prototype.slice.call(document.querySelectorAll('.menu a'));

  function show(id) {
    if (ids.indexOf(id) === -1) id = 'home';
    views.forEach(function (v) { v.hidden = v.getAttribute('data-view') !== id; });
    menu.forEach(function (a) {
      if (a.getAttribute('data-go') === id) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
    window.scrollTo(0, 0);
  }
  var secs = [
    ['home', 'Home', '--paper', -3],
    ['projects', 'Projects', '--teal', 4],
    ['about', 'About', '--yellow', -5],
    ['skills', 'Skills', '--pink', 3],
    ['experience', 'Experience', '--orange', -4],
    ['education', 'Education', '--green', 5],
    ['contact', 'Contact', '--lilac', -3]
  ];
  Array.prototype.forEach.call(document.querySelectorAll('[data-rail]'), function (el) {
    var cur = el.closest('.view').getAttribute('data-view');
    var html = '<span class="rl">Keep exploring</span>';
    secs.forEach(function (x) {
      if (x[0] === cur) return;
      html += '<a href="#' + x[0] + '" data-go="' + x[0] + '" style="--c: var(' + x[2] + '); --r: ' + x[3] + 'deg">' + x[1] + '</a>';
    });
    el.innerHTML = html;
  });

  function fromHash() { return (location.hash || '').replace('#', ''); }

  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a[data-go]') : null;
    if (!a) return;
    e.preventDefault();
    var id = a.getAttribute('data-go');
    try { location.hash = id; } catch (err) {}
    show(id);
  });
  window.addEventListener('hashchange', function () { show(fromHash()); });
  show(fromHash());

  var btn = document.getElementById('copy-email');
  var msg = document.getElementById('copy-msg');
  var addr = document.getElementById('email-addr');
  var timer;
  function say(t) { msg.textContent = t; clearTimeout(timer); timer = setTimeout(function () { msg.textContent = ''; }, 2500); }
  function selectAddr() {
    try {
      var r = document.createRange(); r.selectNodeContents(addr);
      var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
    } catch (e) {}
  }
  btn.addEventListener('click', function () {
    var text = addr.textContent.trim();
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(
          function () { say('Copied'); },
          function () { selectAddr(); say('Selected, press Ctrl+C'); }
        );
        return;
      }
    } catch (e) {}
    selectAddr(); say('Selected, press Ctrl+C');
  });
})();
