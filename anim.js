/* Aparición suave al bajar por la página. Se desactiva si el usuario prefiere reducir el movimiento. */
(function(){
  if(!('IntersectionObserver' in window)) return;
  if(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var sel='.area,.paso,.testimonio figure,.recurso,.recurso2,.noticia,.undia .linea li,.g-item,.pas,.profe,.faq details';
  var els=document.querySelectorAll(sel);
  var io=new IntersectionObserver(function(es){
    es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('visto'); io.unobserve(e.target); } });
  },{rootMargin:'0px 0px -8% 0px',threshold:0.08});
  els.forEach(function(el){
    var r=el.getBoundingClientRect();
    if(r.top<window.innerHeight){ return; }
    el.classList.add('rv'); io.observe(el);
  });
})();
