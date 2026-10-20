(function(){
  var root=document.documentElement;
  document.getElementById('yr').textContent=new Date().getFullYear();
  document.getElementById('theme').addEventListener('click',function(){
    var dark=root.getAttribute('data-theme')==='dark'||(!root.getAttribute('data-theme')&&matchMedia('(prefers-color-scheme: dark)').matches);
    root.setAttribute('data-theme',dark?'light':'dark');
  });
  var btns=document.querySelectorAll('.filters button'),items=document.querySelectorAll('.proj');
  btns.forEach(function(b){b.addEventListener('click',function(){
    var f=b.dataset.f;
    btns.forEach(function(x){x.setAttribute('aria-pressed',x===b)});
    items.forEach(function(p){p.hidden=!(f==='all'||p.dataset.t.split(' ').indexOf(f)>-1)});
  })});
})();
