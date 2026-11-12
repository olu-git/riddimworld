  (function () {
    // Keep the search bar sitting just under the sticky header
    var hdr = document.querySelector('.site-header');
    function setHdr() { document.documentElement.style.setProperty('--hdr', hdr.offsetHeight + 'px'); }
    setHdr(); addEventListener('resize', setHdr);

    // Open all / Close all per section
    document.querySelectorAll('.fx-group').forEach(function (g) {
      var btn = g.querySelector('.fx-toggle'), items = g.querySelectorAll('details');
      function label() { btn.textContent = [].every.call(items, function (d) { return d.open; }) ? 'Close all' : 'Open all'; }
      btn.addEventListener('click', function () { var open = btn.textContent === 'Open all'; items.forEach(function (d) { d.open = open; }); label(); });
      items.forEach(function (d) { d.addEventListener('toggle', label); }); label();
    });

    // Live search: filters questions, opens matches, highlights the word
    var q = document.getElementById('fx-q'), empty = document.querySelector('.fx-empty');
    var items = [].slice.call(document.querySelectorAll('.fx details'));
    items.forEach(function (d) { d._html = d.querySelector('.answer').innerHTML; d._open = d.open; });
    function esc(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
    q.addEventListener('input', function () {
      var term = q.value.trim(), re = term && new RegExp('(' + esc(term) + ')(?![^<]*>)', 'gi'), any = false;
      items.forEach(function (d) {
        var a = d.querySelector('.answer'); a.innerHTML = d._html;
        var hit = !term || re.test(d.textContent); re && (re.lastIndex = 0);
        d.hidden = !hit; any = any || hit;
        if (term && hit) { d.open = true; a.innerHTML = d._html.replace(re, '<mark>$1</mark>'); }
        else if (!term) d.open = d._open;
      });
      document.querySelectorAll('.fx-group').forEach(function (g) { g.hidden = !g.querySelector('details:not([hidden])'); });
      empty.hidden = any;
    });
  })();
