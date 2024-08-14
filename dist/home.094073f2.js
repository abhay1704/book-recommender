const e={BGREMOVER:"/remove_bg",RECOMMEND_URL:"/suggestions",TOP_50:"/top50",RESULT_PER_PAGE:9,GOOGLE_URL:"/search",MOCKUP_URL:"/mockup"},t={mockupLoaded:!1,bgImageLoaded:!1},o=e=>document.querySelector(e),n=e=>document.querySelectorAll(e),r=(e,t)=>{n(e).forEach(e=>e.textContent=t)},a=()=>{let e=o("header"),t=0,n=0,r=()=>e.classList.remove("collapse"),a=()=>e.classList.add("collapse");window.addEventListener("scroll",()=>{let e=window.pageYOffset||document.documentElement.scrollTop;n<15?a():r(),n=n*(t-e)<0?0:n+(t-e)*.1,t=e})},s=()=>{let e=o("#home-section"),t=o("header");new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?t.classList.remove("collapse","dark"):t.classList.add("collapse","dark")})},{threshold:.3}).observe(e)},i=()=>{let e=document.getElementById("whole-content"),t=0,o=!1,n=!1;document.addEventListener("touchstart",e=>{(window.innerHeight+window.scrollY>=document.body.offsetHeight||0===window.scrollY)&&(t=e.touches[0].pageY,o=!0,n=0===window.scrollY)},{passive:!0}),document.addEventListener("touchmove",r=>{if(o){let o=r.touches[0].pageY-t;n?e.style.transform=`translateY(${-(.1*o)}px)`:e.style.transform=`translateY(${o<0?.01*o:0}px)`}},{passive:!0}),document.addEventListener("touchend",()=>{o&&(e.style.transform=""),o=!1})},l=e=>{let t=o(e.getAttribute("href")).offsetTop,n=o("header").offsetHeight,r=window.innerHeight;(t<window.scrollY||t>window.scrollY+r)&&window.scrollTo({top:t-n,behavior:"smooth"})},c=()=>{o("nav");let e=n(".nav-links"),t=n(".btns--nav");e.forEach(e=>{e.addEventListener("click",e=>{let t=e.target.closest(".nav-link");t&&(e.preventDefault(),l(t))})}),t.forEach(e=>{e.addEventListener("click",e=>{let t=e.target.closest(".btn--nav");t&&(e.preventDefault(),l(t))})})},h=new class{constructor(e){this.name=e,this.cache=localStorage.getItem(e)?JSON.parse(localStorage.getItem(e)):{},this.limit=25}set(e,t){if(this.cache[e]=t,Object.keys(this.cache).length>this.limit){let e=Object.keys(this.cache);delete this.cache[e[0]]}localStorage.setItem(this.name,JSON.stringify(this.cache))}get(e){return this.cache[e]}delete(e){delete this.cache[e],localStorage.setItem(this.name,JSON.stringify(this.cache))}}("cachedForYourConvenienceOnly"),d=e=>new Promise((t,o)=>setTimeout(()=>o("Response Timeout!! Internet Connection too slow"),e)),u=async(e,t=null,o=!0)=>{try{let n=h.get(e);if(n)return n;let r=await Promise.race([fetch(e,t),d(2e4)]);if(!r.ok)throw Error(`HTTP error! status: ${r.status}`);if(!o)return r;let a=await r.json();return h.set(e,a),a}catch(e){throw console.error(e),e}},m=async(e,t)=>{try{let o=t.file_name,n=h.get(o);if(n)return n;let r=await fetch(e,{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});if(!r.ok)throw Error(`HTTP error! status: ${r.status}`);if(200!==r.status)return[];let a=await r.json();return h.set(o,a),a}catch(e){throw e}},p=async(t,o)=>{let n=h.get(o);if(n)return n;let r=`${e.BGREMOVER}?file_path=${t}&file_name=${o}`;try{let e=await u(r);return h.set(o,e),e}catch(e){throw console.error(e),e}},f=e=>`https://covers.openlibrary.org/b/id/${e}-L.jpg`,g=async e=>{let t=`https://openlibrary.org/search/authors.json?q=${e}`,o=(await u(t)).docs[0].key,n=`https://openlibrary.org/authors/${o}.json`,r=await u(n);return{name:r.name,image:r.photos?f(r.photos[0]):null,bio:r.bio?.value||r.bio||"",url:r.links?r.links[0].url:"#"}},{RECOMMEND_URL:y}=e,w=async e=>{try{return await m(y,{name:e})}catch(e){throw e}},b=e=>{document.querySelectorAll(".book-img img").forEach(o=>{o.src=e,o.addEventListener("load",()=>{t.mockupLoaded=!0,t.coverLoaded&&j()})})},v=async(o,n)=>{o=o.replace("http://","https://");let r=e.MOCKUP_URL,a={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({nr:1404,layer_inputs:[{id:"jujmugkht9uyhlb6sjd",data:o,checked:!0},{id:"jujmugkhplsvkwqyyxg",checked:!0,color:{red:0,green:0,blue:0}}]})};try{let e=await m(r,{options:a,file_name:"mockup_"+n});if(!e)throw t.coverLoaded&&j(),Error(e.message);let o=e.file_path;b(o)}catch(e){throw console.error(e),e}},k=()=>{document.querySelectorAll("[data-url]").forEach(e=>{let t=e.getAttribute("data-url");e.addEventListener("click",e=>{e.preventDefault(),window.location.href=t})})},{GOOGLE_URL:L}=e,E=e=>{let t=n(".book-list .book");Object.entries(e).forEach(([e,o],n)=>{let{author:r,image:a}=o;t[n].querySelector("img").src=a,t[n].querySelector(".name").textContent=e,t[n].querySelector(".author-name").textContent=r;let s=`/book?book=${encodeURIComponent(e)}`;t[n].dataset.url=s}),k()},I=e=>{g(e[0]).then(e=>{if(""===e.bio){o("#about-author").style.display="none";return}if(r(".author-name",e.name),e.image){let t="author_image_"+e.name;p(e.image,t).then(t=>{o("#author-img img").src=t.file_path??e.image})}o("#about-author .content p").textContent=e.bio,o(".author-url").href=e.url}).catch(e=>{console.error(e),o("#about-author").style.display="none"})},O=async e=>{try{let t;let o=`${L}?q=${e}`,n=await u(o),r=n.items[0].searchInfo?.textSnippet||"",a=n.items[0].selfLink,s=await u(a);try{t=await w(e)}catch(e){console.error(e),t=null}return{title:s.volumeInfo.title,subtitle:s.volumeInfo.subtitle,authors:s.volumeInfo.authors,description:s.volumeInfo.description,thumbnail:s.volumeInfo.imageLinks?.thumbnail??"https://via.placeholder.com/150",infoLink:s.volumeInfo.infoLink,largeImage:s.volumeInfo.imageLinks?.large||null,rating:s.volumeInfo.averageRating,buyLink:s.saleInfo.buyLink,previewLink:s.accessInfo?.webReaderLink||"https://books.google.com/",categories:s.volumeInfo.categories.map(e=>e.split("/").slice(-1)[0]),shortInfo:r,reccomends:t}}catch(e){throw console.error(e),e}},S=e=>{let{title:a,subtitle:s,previewLink:i,authors:l,description:c,thumbnail:h,largeImage:d,buyLink:u,categories:m,shortInfo:p,reccomends:f}=e,g=m[1],y=m[0],w=`${a} | ${s||""} | A book by ${l.join(", ")}`;document.title=w,r(".b-name",a),r(".author-name",l.join(", ")),r(".short-info",p.slice(0,200)+"..."),o(".user-categories").innerHTML=m.map(e=>`<li>${e}</li>`).join(""),n(".order-link").forEach(e=>e.href=u),n(".preview-link").forEach(e=>e.href=i),n(".genre").forEach(e=>e.textContent=g),n(".sub-genre").forEach(e=>e.textContent=y),o("#description").innerHTML=c,function(e){e=e.replace("http://","https://"),o("#home-section").style.backgroundImage=`url(${e})`;let n=new Image;n.src=e,n.onload=()=>{t.coverLoaded=!0,t.mockupLoaded&&j()}}(h),v(h,a),I(l),f?E(f):o("#recommended-books").style.display="none"},j=()=>{o(".loader").style.display="none",o("#whole-content").style.display="block",o(".error")&&(o(".error").style.display="none")};document.addEventListener("DOMContentLoaded",()=>{a(),s(),i(),c(),function(){let e=n("section:not(#home-section)"),t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.style.transform="translateY(0)",e.target.style.opacity=1)})});e.forEach(e=>{t.observe(e)})}(),O(new URLSearchParams(window.location.search).get("book")).then(e=>{S(e)}).catch(e=>{(function(e,t="#whole-content"){let n=`<div class="error">${e}</div>`;o(t).insertAdjacentHTML("beforeend",n)})(e,"body"),o(".loader").style.display="none",o("#whole-content").style.display="none"})});
//# sourceMappingURL=home.094073f2.js.map
