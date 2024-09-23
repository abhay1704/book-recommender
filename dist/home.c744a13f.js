const e={BGREMOVER:"/remove_bg",RECOMMEND_URL:"/suggestions",TOP_50:"/top50",RESULT_PER_PAGE:9,GOOGLE_URL:"/search",MOCKUP_URL:"/mockup"},t={mockupLoaded:!1,bgImageLoaded:!1},o=e=>document.querySelector(e),r=e=>document.querySelectorAll(e),n=(e,t)=>{r(e).forEach(e=>e.textContent=t)},a=()=>{let e=o("header"),t=0,r=0,n=()=>e.classList.remove("collapse"),a=()=>e.classList.add("collapse");window.addEventListener("scroll",()=>{let e=window.pageYOffset||document.documentElement.scrollTop;r<15?a():n(),r=r*(t-e)<0?0:r+(t-e)*.1,t=e})},s=()=>{let e=o("#home-section"),t=o("header");new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?t.classList.remove("collapse","dark"):t.classList.add("collapse","dark")})},{threshold:.3}).observe(e)},i=()=>{let e=document.getElementById("whole-content"),t=0,o=!1,r=!1;document.addEventListener("touchstart",e=>{(window.innerHeight+window.scrollY>=document.body.offsetHeight||0===window.scrollY)&&(t=e.touches[0].pageY,o=!0,r=0===window.scrollY)},{passive:!0}),document.addEventListener("touchmove",n=>{if(o){let o=n.touches[0].pageY-t;r?e.style.transform=`translateY(${-(.1*o)}px)`:e.style.transform=`translateY(${o<0?.01*o:0}px)`}},{passive:!0}),document.addEventListener("touchend",()=>{o&&(e.style.transform=""),o=!1})},l=e=>{let t=o(e.getAttribute("href")).offsetTop,r=o("header").offsetHeight,n=window.innerHeight;(t<window.scrollY||t>window.scrollY+n)&&window.scrollTo({top:t-r,behavior:"smooth"})},c=()=>{o("nav");let e=r(".nav-links"),t=r(".btns--nav");e.forEach(e=>{e.addEventListener("click",e=>{let t=e.target.closest(".nav-link");t&&(e.preventDefault(),l(t))})}),t.forEach(e=>{e.addEventListener("click",e=>{let t=e.target.closest(".btn--nav");t&&(e.preventDefault(),l(t))})})},h=new class{constructor(e){this.name=e,this.cache=localStorage.getItem(e)?JSON.parse(localStorage.getItem(e)):{},this.limit=25}set(e,t){if(this.cache[e]=t,Object.keys(this.cache).length>this.limit){let e=Object.keys(this.cache);delete this.cache[e[0]]}localStorage.setItem(this.name,JSON.stringify(this.cache))}get(e){return this.cache[e]}delete(e){delete this.cache[e],localStorage.setItem(this.name,JSON.stringify(this.cache))}}("cachedForYourConvenienceOnly"),d=e=>new Promise((t,o)=>setTimeout(()=>o("Response Timeout!! Internet Connection too slow"),e)),u=async(e,t=null,o=!0)=>{try{let r=h.get(e);if(r)return r;let n=await Promise.race([fetch(e,t),d(2e4)]);if(!n.ok)throw Error(`HTTP error! status: ${n.status}`);if(!o)return n;let a=await n.json();return h.set(e,a),a}catch(e){throw console.error(e),e}},m=async(e,t)=>{try{let o=t.file_name,r=h.get(o);if(r)return r;let n=await fetch(e,{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});if(!n.ok)throw Error(`HTTP error! status: ${n.status}`);if(200!==n.status)return[];let a=await n.json();return h.set(o,a),a}catch(e){throw e}},p=async(t,o)=>{let r=h.get(o);if(r)return r;let n=`${e.BGREMOVER}?file_path=${t}&file_name=${o}`;try{let e=await u(n);return h.set(o,e),e}catch(e){throw console.error(e),e}},f=e=>`https://covers.openlibrary.org/b/id/${e}-L.jpg`,g=async e=>{let t=`https://openlibrary.org/search/authors.json?q=${e}`,o=(await u(t)).docs[0].key,r=`https://openlibrary.org/authors/${o}.json`,n=await u(r);return{name:n.name,image:n.photos?f(n.photos[0]):null,bio:n.bio?.value||n.bio||"",url:n.links?n.links[0].url:"#"}},{RECOMMEND_URL:y}=e,w=async e=>{try{return await m(y,{name:e})}catch(e){throw e}},b=e=>{document.querySelectorAll(".book-img img").forEach(o=>{o.src=e,o.addEventListener("load",()=>{t.mockupLoaded=!0,t.coverLoaded&&j()})})},v=async(o,r)=>{o=o.replace("http://","https://");let n=e.MOCKUP_URL,a={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({nr:1404,layer_inputs:[{id:"jujmugkht9uyhlb6sjd",data:o,checked:!0},{id:"jujmugkhplsvkwqyyxg",checked:!0,color:{red:0,green:0,blue:0}}]})};try{let e=await m(n,{options:a,file_name:"mockup_"+r});if(!e)throw t.coverLoaded&&j(),Error(e.message);let o=e.file_path;b(o)}catch(e){throw console.error(e),e}},k=()=>{document.querySelectorAll("[data-url]").forEach(e=>{let t=e.getAttribute("data-url");e.addEventListener("click",e=>{e.preventDefault(),window.location.href=t})})},{GOOGLE_URL:L}=e,E=e=>{let t=r(".book-list .book");Object.entries(e).forEach(([e,o],r)=>{let{author:n,image:a}=o;t[r].querySelector("img").src=a,t[r].querySelector(".name").textContent=e,t[r].querySelector(".author-name").textContent=n;let s=`/book?book=${encodeURIComponent(e)}`;t[r].dataset.url=s}),k()},I=e=>{g(e[0]).then(e=>{if(""===e.bio){o("#about-author").style.display="none";return}if(n(".author-name",e.name),e.image){let t="author_image_"+e.name;p(e.image,t).then(t=>{o("#author-img img").src=t.file_path??e.image})}o("#about-author .content p").textContent=e.bio,o(".author-url").href=e.url}).catch(e=>{console.error(e),o("#about-author").style.display="none"})},O=async e=>{try{let t;let o=`${L}?q=${e}`,r=await u(o),n=r.items[0].searchInfo?.textSnippet||"",a=r.items[0].selfLink,s=await u(a);try{t=await w(e)}catch(e){console.error(e),t=null}return{title:s.volumeInfo.title,subtitle:s.volumeInfo.subtitle,authors:s.volumeInfo.authors,description:s.volumeInfo.description,thumbnail:s.volumeInfo.imageLinks?.thumbnail??"https://via.placeholder.com/150",infoLink:s.volumeInfo.infoLink,largeImage:s.volumeInfo.imageLinks?.large||null,rating:s.volumeInfo.averageRating,buyLink:s.saleInfo.buyLink,previewLink:s.accessInfo?.webReaderLink||"https://books.google.com/",categories:s.volumeInfo.categories.map(e=>e.split("/").slice(-1)[0]),shortInfo:n,reccomends:t}}catch(e){throw console.error(e),e}},S=e=>{let{title:a,subtitle:s,previewLink:i,authors:l,description:c,thumbnail:h,largeImage:d,buyLink:u,categories:m,shortInfo:p,reccomends:f}=e,g=m[1],y=m[0],w=`${a} | ${s||""} | A book by ${l.join(", ")}`;document.title=w,n(".b-name",a),n(".author-name",l.join(", ")),n(".short-info",p.slice(0,200)+"..."),o(".user-categories").innerHTML=Array.from(new Set(m)).map(e=>`<li>${e}</li>`).join(""),r(".order-link").forEach(e=>e.href=u),r(".preview-link").forEach(e=>e.href=i),r(".genre").forEach(e=>e.textContent=g),r(".sub-genre").forEach(e=>e.textContent=y),o("#description").innerHTML=c,function(e){e=e.replace("http://","https://"),o("#home-section").style.backgroundImage=`url(${e})`;let r=new Image;r.src=e,r.onload=()=>{t.coverLoaded=!0,t.mockupLoaded&&j()}}(h),v(h,a),I(l),f?E(f):o("#recommended-books").style.display="none"},j=()=>{o(".loader").style.display="none",o("#whole-content").style.display="block",o(".error")&&(o(".error").style.display="none")};document.addEventListener("DOMContentLoaded",()=>{a(),s(),i(),c(),function(){let e=r("section:not(#home-section)"),t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.style.transform="translateY(0)",e.target.style.opacity=1)})});e.forEach(e=>{t.observe(e)})}(),O(new URLSearchParams(window.location.search).get("book")).then(e=>{S(e)}).catch(e=>{(function(e,t="#whole-content"){let r=`<div class="error">${e}</div>`;o(t).insertAdjacentHTML("beforeend",r)})(e,"body"),o(".loader").style.display="none",o("#whole-content").style.display="none"})});
//# sourceMappingURL=home.c744a13f.js.map
