(()=>{const t=document.querySelector("#article-toc-data"),e=document.querySelector("#toc-container"),s=()=>{const t=document.querySelector("#toc-container"),e="active"!==t.getAttribute("status"),s=t.querySelector("#toc-content"),a=t.querySelector("#toc-item-icon");e?(t.setAttribute("status","active"),s.classList.add("mt-5"),s.classList.add("max-h-[1500px]"),s.classList.remove("max-h-0"),a.innerHTML="-",a.classList.add("mt-[-5px]")):(t.setAttribute("status",""),s.classList.add("max-h-0"),s.classList.remove("max-h-[1500px]"),setTimeout((()=>{a.innerHTML="+",s.classList.remove("mt-5"),a.classList.remove("mt-[-5px]")}),300))};t&&(e.classList.remove("hidden"),(()=>{const t=document.querySelectorAll("#article-toc-data a"),e=document.querySelector("#article-toc-data #article-toc-title-data"),s=document.querySelector("#toc-container #toc-title"),a=document.querySelector("#toc-container #links-container");[...t].map((t=>{t.classList.add("!my-1"),t.classList.add("!py-2"),t.classList.add("!pl-2"),t.classList.add("relative"),t.classList.add("!no-underline"),t.classList.add("!leading-tight"),t.classList.add("!text-gray-dark"),t.classList.add("hover:bg-[#e5e7ef]"),t.classList.add("hover:border-l-[3px]"),t.classList.add("hover:border-l-blue-default"),a.insertAdjacentHTML("beforeend",t.outerHTML)})),s.innerHTML=e.innerHTML})(),t.insertAdjacentHTML("afterend",e.outerHTML),t.classList.add("hidden"),e.classList.add("hidden")),document.addEventListener("DOMContentLoaded",(()=>{document.querySelector(".toc--button").addEventListener("click",s)}))})();