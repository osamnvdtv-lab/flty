const WHATSAPP_NUMBER = "201064665780"; // رقم واتساب بصيغة دولية بدون + أو مسافات
document.querySelectorAll('#year').forEach(el=>el.textContent=new Date().getFullYear());
function inquire(property){sessionStorage.setItem('felty_interest','شراء عقار');sessionStorage.setItem('felty_message','أرغب في الاستفسار عن: '+property);location.href='contact.html';}
const form=document.getElementById('contactForm');
if(form){
 const interest=document.getElementById('interest'), message=document.getElementById('message');
 if(sessionStorage.getItem('felty_interest')){interest.value=sessionStorage.getItem('felty_interest');sessionStorage.removeItem('felty_interest');}
 if(sessionStorage.getItem('felty_message')){message.value=sessionStorage.getItem('felty_message');sessionStorage.removeItem('felty_message');}
 form.addEventListener('submit',e=>{
  e.preventDefault();
  if(WHATSAPP_NUMBER==='201000000000'){alert('يرجى تعديل رقم واتساب الشركة في ملف script.js أولاً.');return;}
  const name=document.getElementById('name').value.trim(),phone=document.getElementById('phone').value.trim(),type=interest.value,details=message.value.trim();
  const text=`طلب جديد من موقع فلتي للعقارات\nالاسم: ${name}\nالهاتف: ${phone}\nنوع الطلب: ${type}\nالتفاصيل: ${details||'لا توجد تفاصيل إضافية'}`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,'_blank','noopener');
 });
}
const searchForm=document.getElementById('searchForm');
if(searchForm){
 const params=new URLSearchParams(location.search);
 const typeSelect=document.getElementById('typeFilter');
 if(params.has('type')) typeSelect.value=params.get('type');
 function filter(){const kw=document.getElementById('keyword').value.trim().toLowerCase(),type=typeSelect.value,deal=document.getElementById('dealFilter').value;let n=0;
 document.querySelectorAll('.property').forEach(card=>{const ok=(type==='all'||card.dataset.type===type)&&(deal==='all'||card.dataset.deal===deal)&&(!kw||(card.dataset.search+' '+card.innerText).toLowerCase().includes(kw));card.style.display=ok?'':'none';if(ok)n++;});
 document.getElementById('empty').style.display=n?'none':'block';
 }
 searchForm.addEventListener('submit',e=>{e.preventDefault();filter();});
 typeSelect.addEventListener('change',filter);document.getElementById('dealFilter').addEventListener('change',filter);
}
