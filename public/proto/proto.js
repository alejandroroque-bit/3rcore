
(function(){
  var RM = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* 0 · Titulares palabra a palabra.
     Se recorren SOLO los nodos de texto, así que los <br>, los <span class="mg">
     y los <span class="stroke"> sobreviven intactos: cada palabra se envuelve
     dentro de su propio elemento y hereda su color. */
  var SPLIT = '.hero8 h1, .hero h1, .head h2, .sec-h h2, .closing h2, .localb h2, .somos h2, [data-split]';
  function partir(el){
    if (el.dataset.ws) return;
    el.dataset.ws = '1';
    var i = 0, nodos = [], w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null);
    var n; while ((n = w.nextNode())) nodos.push(n);
    nodos.forEach(function(t){
      if (!t.nodeValue.trim()) return;
      var frag = document.createDocumentFragment();
      t.nodeValue.split(/(\s+)/).forEach(function(p){
        if (!p) return;
        if (/^\s+$/.test(p)) { frag.appendChild(document.createTextNode(p)); return; }
        var s = document.createElement('span');
        s.className = 'w'; s.style.setProperty('--i', i++); s.textContent = p;
        frag.appendChild(s);
      });
      t.parentNode.replaceChild(frag, t);
    });
    el.classList.add('ws');
  }
  if (!RM) { try { document.querySelectorAll(SPLIT).forEach(partir); } catch (e) {} }

  /* 1 · Titulares y bloques: revelado al entrar en pantalla */
  var els = document.querySelectorAll('.rv, .mask, .reveal-img, .head, .ws, .stagger, .rv-clip, .rv-l, .rv-s, .chbars, .ads');
  if (RM || !('IntersectionObserver' in window)) {
    els.forEach(function(e){ e.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function(es){
      es.forEach(function(en){
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: .06 });
    els.forEach(function(e){ io.observe(e); });
    // lo que ya está en pantalla al cargar, se anima de inmediato
    requestAnimationFrame(function(){
      document.querySelectorAll('.hero .mask, .hero .rv').forEach(function(e){ e.classList.add('in'); });
    });
  }

  /* ── FUNCIONAL (corre siempre, con o sin reduced-motion) ── */

  /* Cookies: solo si nunca se decidió; recuerda la elección entre páginas */
  var ck = document.getElementById('ck');
  if (ck) {
    var visto = false;
    try { visto = !!localStorage.ck3r; } catch (e) {}
    if (visto) { ck.remove(); } else { ck.classList.add('show'); }
  }

  /* Cotizador: precio al instante + WhatsApp precargado */
  document.querySelectorAll('.cotiza').forEach(function(cz){
    var btns = cz.querySelectorAll('.opts button');
    var val = cz.querySelector('.cz-p .v');
    var note = cz.querySelector('.cz-p small');
    var cta = cz.querySelector('.cz-out a');
    function pick(b){
      btns.forEach(function(o){ o.setAttribute('aria-pressed', 'false'); });
      b.setAttribute('aria-pressed', 'true');
      if (val) val.textContent = b.dataset.price;
      if (note) note.textContent = b.dataset.note;
      if (cta) cta.href = 'https://wa.me/51987216703?text=' + encodeURIComponent(b.dataset.msg);
    }
    btns.forEach(function(b){ b.addEventListener('click', function(){ pick(b); }); });
    if (btns[0]) pick(btns[0]);
  });

  /* Calculadora de retorno (página SEM): mueve el presupuesto y recalcula
     clics, leads y coste por lead. Es una herramienta, no un adorno: tiene
     que funcionar también con las animaciones desactivadas. */
  document.querySelectorAll('.roi').forEach(function(r){
    var rng = r.querySelector('input[type=range]');
    var lab = r.querySelector('label b');
    var outs = r.querySelectorAll('.v');
    var cta = r.querySelector('a[data-wa]');
    var segs = r.querySelectorAll('.segs button');
    var sup = r.querySelector('.sup');
    if (!rng) return;
    var fmt = function(v){ return String(Math.round(v)).replace(/\B(?=(\d{3})+(?!\d))/g, ','); };
    function activo(){
      for (var i = 0; i < segs.length; i++) if (segs[i].getAttribute('aria-pressed') === 'true') return segs[i];
      return segs[0];
    }
    function calc(){
      var pres = +rng.value, s = activo();
      var cpc = s ? +s.dataset.cpc : 2.4;         /* el coste por clic lo manda el rubro, no el presupuesto */
      var cvr = s ? +s.dataset.cvr : 0.055;
      var clics = pres / cpc, leads = clics * cvr;
      var cpl = leads > 0 ? pres / leads : 0;
      rng.style.setProperty('--fill', ((pres - rng.min) / (rng.max - rng.min) * 100) + '%');
      /* La moneda va con el MERCADO, no con el idioma: en /us y /en el
         mismo cálculo se muestra en dólares. Los clics y los leads son
         unidades, no dinero, así que no se convierten. */
      var MON = window.__MON || { sym: 'S/ ', f: 1,
        wa: 'Hola, quiero campañas de Google Ads con un presupuesto de {P} al mes.' };
      if (lab) lab.textContent = MON.sym + fmt(pres * MON.f);
      if (outs[0]) outs[0].textContent = fmt(clics);
      if (outs[1]) outs[1].textContent = fmt(leads);
      if (outs[2]) outs[2].textContent = MON.sym + fmt(cpl * MON.f);
      if (sup && s) sup.textContent = s.dataset.sup;
      if (cta) cta.href = 'https://wa.me/51987216703?text=' +
        encodeURIComponent(MON.wa.replace('{P}', MON.sym + fmt(pres * MON.f)));
    }
    rng.addEventListener('input', calc);
    segs.forEach(function(bt){
      bt.addEventListener('click', function(){
        segs.forEach(function(o){ o.setAttribute('aria-pressed', 'false'); });
        bt.setAttribute('aria-pressed', 'true');
        calc();
      });
    });
    calc();
  });

  /* Cerrar el menú con Escape y el acuse de los formularios de demostración
     son funcionales: van antes del corte por reduced-motion. */
  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape') document.body.classList.remove('menu');
  });
  document.querySelectorAll('form[data-demo]').forEach(function(f){
    f.addEventListener('submit', function(e){
      e.preventDefault();
      var h = document.createElement('h3');
      h.textContent = 'Listo, mensaje enviado';
      var p = document.createElement('p');
      p.className = 'mini';
      p.style.margin = '0';
      p.textContent = 'En el sitio real esto guarda el lead en el panel propio y dispara el evento form_submit, que hoy no se emite: hay 233 form_start y ningún envío registrado.';
      f.innerHTML = '';
      f.appendChild(h); f.appendChild(p);
    });
  });

  if (RM) {
    /* Sin animaciones: el chat y las listas se muestran completos de inmediato */
    document.querySelectorAll('.chatdemo .msg').forEach(function(m){ m.classList.add('in'); });
    document.querySelectorAll('.chatdemo .typing').forEach(function(t){ t.style.display = 'none'; });
    return;
  }

  /* 2 · Contadores: los números suben al aparecer */
  var nums = document.querySelectorAll('[data-count]');
  if (nums.length && 'IntersectionObserver' in window) {
    var ion = new IntersectionObserver(function(es){
      es.forEach(function(en){
        if (!en.isIntersecting) return;
        var el = en.target, fin = parseFloat(el.dataset.count), suf = el.dataset.suf || '', pre = el.dataset.pre || '';
        var t0 = null, dur = 1500;
        function paso(t){
          if (!t0) t0 = t;
          var k = Math.min((t - t0) / dur, 1);
          var eased = 1 - Math.pow(1 - k, 3);
          var v = fin % 1 ? (fin * eased).toFixed(1) : Math.round(fin * eased);
          /* el separador de miles va con \\ : dentro de esta plantilla, \B y \d
             perderían la barra y el regex quedaría en /B(?=(d{3})+(?!d))/ */
          if (el.dataset.sep) v = String(v).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
          el.textContent = pre + v + suf;
          if (k < 1) requestAnimationFrame(paso);
        }
        requestAnimationFrame(paso);
        ion.unobserve(el);
      });
    }, { threshold: .5 });
    nums.forEach(function(n){ ion.observe(n); });
  }

  /* 3 · Parallax del fondo del hero + barra de progreso de lectura */
  var heroImg = document.querySelector('.hero-bg img');
  var nav = document.querySelector('.nav');
  var prog = document.getElementById('navprog');
  var ticking = false;
  function onScroll(){
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function(){
      var y = window.scrollY;
      if (nav) nav.classList.toggle('solid', y > 60);
      if (heroImg && y < window.innerHeight * 1.2) {
        heroImg.style.transform = 'translate3d(0,' + (y * 0.22) + 'px,0) scale(' + (1.06 + y * 0.00012) + ')';
      }
      if (prog) {
        var total = document.documentElement.scrollHeight - window.innerHeight;
        prog.style.transform = 'scaleX(' + (total > 0 ? Math.min(y / total, 1).toFixed(4) : 0) + ')';
      }
      ticking = false;
    });
  }
  onScroll();
  addEventListener('scroll', onScroll, { passive: true });

  /* 4 · Tarjetas: inclinación 3D y brillo que sigue al cursor */
  if (matchMedia('(hover: hover)').matches) {
    document.querySelectorAll('.card').forEach(function(c){
      c.addEventListener('pointermove', function(e){
        var r = c.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
        c.style.setProperty('--mx', (px * 100) + '%');
        c.style.setProperty('--my', (py * 100) + '%');
        c.style.transform = 'translateY(-4px) perspective(900px) rotateX(' + ((.5 - py) * 4).toFixed(2) + 'deg) rotateY(' + ((px - .5) * 5).toFixed(2) + 'deg)';
      });
      c.addEventListener('pointerleave', function(){ c.style.transform = ''; });
    });

    /* 5 · Botones magnéticos */
    document.querySelectorAll('.btn').forEach(function(b){
      b.addEventListener('pointermove', function(e){
        var r = b.getBoundingClientRect();
        var dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
        var dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
        b.style.transform = 'translate(' + (dx * 5).toFixed(1) + 'px,' + (dy * 4).toFixed(1) + 'px)';
      });
      b.addEventListener('pointerleave', function(){ b.style.transform = ''; });
    });
  }

  /* 5b · Foco de luz que sigue al cursor en héroes y cierre */
  if (matchMedia('(hover: hover)').matches) {
    document.querySelectorAll('.hero8, .closing').forEach(function(z){
      z.addEventListener('pointermove', function(e){
        var r = z.getBoundingClientRect();
        z.style.setProperty('--px', (((e.clientX - r.left) / r.width) * 100).toFixed(1) + '%');
        z.style.setProperty('--py', (((e.clientY - r.top) / r.height) * 100).toFixed(1) + '%');
      });
    });
  }

  /* 5d · Subasta de anuncios (página SEM): la consulta se teclea sola */
  var subastas = document.querySelectorAll('.ads[data-q]');
  if (subastas.length && 'IntersectionObserver' in window) {
    var ioa = new IntersectionObserver(function(es){
      es.forEach(function(en){
        if (!en.isIntersecting) return;
        ioa.unobserve(en.target);
        var caja = en.target.querySelector('.q .txt');
        var texto = en.target.dataset.q, k = 0;
        if (!caja) return;
        caja.textContent = '';
        (function teclea(){
          if (k > texto.length) return;
          caja.textContent = texto.slice(0, k++);
          setTimeout(teclea, 55);
        })();
      });
    }, { threshold: .35 });
    subastas.forEach(function(a){ ioa.observe(a); });
  }

  /* 7 · Videos reales: se cargan y reproducen solo al entrar en pantalla */
  var canHover = matchMedia('(hover: hover)').matches;
  var vids = document.querySelectorAll('video[data-src]');
  if (vids.length && 'IntersectionObserver' in window) {
    var iov = new IntersectionObserver(function(es){
      es.forEach(function(en){
        var v = en.target;
        var fc = v.closest ? v.closest('.fcard') : null;
        if (en.isIntersecting) {
          if (!v.getAttribute('src')) { v.src = v.dataset.src; v.load(); }
          if (fc && canHover) return;      /* en escritorio el fundador arranca al pasar el cursor */
          if (fc) fc.classList.add('play');
          v.play().catch(function(){});
        } else {
          v.pause();
          if (fc) fc.classList.remove('play');
        }
      });
    }, { rootMargin: '160px 0px', threshold: .15 });
    vids.forEach(function(v){ iov.observe(v); });
  }

  /* 8 · Fundadores: el retrato cobra vida al pasar el cursor */
  if (canHover) {
    document.querySelectorAll('.fcard').forEach(function(f){
      var v = f.querySelector('video');
      if (!v) return;
      f.addEventListener('pointerenter', function(){
        if (!v.getAttribute('src')) { v.src = v.dataset.src; v.load(); }
        v.play().catch(function(){});
      });
      f.addEventListener('pointerleave', function(){ v.pause(); });
    });
  }

  /* 9 · Chat demo: la conversación se escribe sola al entrar en pantalla */
  var chats = document.querySelectorAll('.chatdemo');
  if (chats.length && 'IntersectionObserver' in window) {
    var ioc = new IntersectionObserver(function(es){
      es.forEach(function(en){
        if (!en.isIntersecting) return;
        ioc.unobserve(en.target);
        var body = en.target.querySelector('.cbody');
        var ms = en.target.querySelectorAll('.msg');
        var ty = en.target.querySelector('.typing');
        var i = 0;
        function nx(){
          if (i >= ms.length) { if (ty) ty.style.display = 'none'; return; }
          ms[i].classList.add('in');
          i++;
          if (ty && i < ms.length) body.appendChild(ty);
          /* el cliente escribe rápido, el agente "piensa" un poco más */
          setTimeout(nx, i < ms.length && ms[i] && ms[i].classList.contains('a') ? 620 : 420);
        }
        if (ty) ty.style.display = 'inline-flex';
        setTimeout(nx, 350);
      });
    }, { threshold: .3 });
    chats.forEach(function(c){ ioc.observe(c); });
  }

  /* 9c · FAQ: el contenido entra con un desliz suave, no de golpe */
  if (!RM && 'animate' in document.body) {
    document.querySelectorAll('.faq details').forEach(function(d){
      d.addEventListener('toggle', function(){
        if (!d.open) return;
        var a = d.querySelector('.a');
        if (a) a.animate(
          [{ opacity: 0, transform: 'translateY(-6px)' }, { opacity: 1, transform: 'none' }],
          { duration: 240, easing: 'cubic-bezier(.16,1,.3,1)' });
      });
    });
  }

})();
