const q=s=>document.querySelector(s), clamp=n=>Math.max(0,Math.min(1,n));
const items=[...document.querySelectorAll('.copy,.phone,.product,.checkout,.commission,.universe,.finaldash')];
function range(p,a,b){return clamp((p-a)/(b-a))}
function show(el,p,a,b,c,d){if(!el)return;const o=Math.min(range(p,a,b),1-range(p,c,d));el.style.opacity=o;el.style.transform='translateY(-50%) scale('+(0.86+o*0.14)+')'}
function animate(){
 const max=document.documentElement.scrollHeight-innerHeight,p=clamp(scrollY/max);
 q('.progress').style.width=(p*100)+'%';
 q('.counter').textContent=String(Math.min(6,Math.floor(p*6)+1)).padStart(2,'0')+' — 06';
 show(q('.c1'),p,0,.02,.10,.14);
 const lap=q('.laptop'),z=range(p,.03,.17); lap.style.opacity=1-range(p,.14,.19); lap.style.transform='translateY(-50%) perspective(1000px) scale('+(1+z*2.3)+') rotateY('+(-12+z*12)+'deg)';
 q('.portal').style.opacity=range(p,.08,.15);
 const link=q('.linkparticle'),lp=range(p,.13,.23); link.style.opacity=Math.min(range(p,.13,.15),1-range(p,.21,.24)); link.style.transform='translate('+(30-lp*85)+'vw,'+(-Math.sin(lp*Math.PI)*18)+'vh)';
 show(q('.phone'),p,.18,.22,.29,.33); show(q('.c2'),p,.20,.23,.29,.33);
 show(q('.product'),p,.30,.33,.40,.43); show(q('.c3'),p,.31,.34,.40,.43);
 show(q('.checkout'),p,.40,.43,.49,.52); show(q('.commission'),p,.49,.52,.59,.62);
 show(q('.c4'),p,.60,.63,.69,.72); show(q('.universe'),p,.60,.64,.74,.77);
 show(q('.c5'),p,.72,.75,.82,.85); show(q('.finaldash'),p,.75,.78,.86,.89);
 const end=q('.c6'),eo=range(p,.88,.94); end.style.opacity=eo; end.style.transform='translateY(-50%) scale('+(0.9+eo*.1)+')';
 requestAnimationFrame(animate)
} requestAnimationFrame(animate);