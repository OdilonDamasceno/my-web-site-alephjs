(()=>{var b=Object.defineProperty,se=Object.defineProperties;var ie=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var q=(e,t,n)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,T=(e,t)=>{for(var n in t||(t={}))I.call(t,n)&&q(e,n,t[n]);if(g)for(var n of g(t))K.call(t,n)&&q(e,n,t[n]);return e},U=(e,t)=>se(e,ie(t)),le=e=>b(e,"__esModule",{value:!0});var W=(e,t)=>{var n={};for(var r in e)I.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&g)for(var r of g(e))t.indexOf(r)<0&&K.call(e,r)&&(n[r]=e[r]);return n};var ce=(e,t)=>{le(e);for(var n in t)b(e,n,{get:t[n],enumerable:!0})};var N={};ce(N,{default:()=>X});var{default:$}=__ALEPH__.pack["https://esm.sh/react@17.0.2"];function w(){return $.createElement("section",{id:"about"},$.createElement("div",{className:""}))}var{default:G}=__ALEPH__.pack["https://esm.sh/react@17.0.2"];function k(){return G.createElement("section",{id:"contact"},G.createElement("div",{className:""}))}var{default:pe}=__ALEPH__.pack["https://esm.sh/react@17.0.2"];function y({size:e=600}){return pe.createElement("img",{src:"/mobile_web.svg",height:e,width:e,title:"Eletronics",className:"eletronics"})}var{applyCSS:de}=__ALEPH__.pack["https://deno.land/x/aleph@v0.3.0-beta.19/framework/core/style.ts"],me="#home{background-color:#2e2c2d;display:flex;align-items:center;flex-direction:row;justify-content:space-between}.great{font-size:3.2vmin;color:#eee;font-weight:300}.name{font-size:7vmin;color:#eee}.help{font-weight:400;color:#eee;font-size:3.5vmin}@media screen and (max-width:1000px){.eletronics{display:none}}";de("/components/home_page/home_page.css",{css:me});var{default:u}=__ALEPH__.pack["https://esm.sh/react@17.0.2"];function P(){let e=new Date().getHours(),t;return e<12?t="Good Morning":e>=12&&e<=17?t="Good Afternoon":e>=17&&e<=24&&(t="Good Evening"),u.createElement("section",{id:"home"},u.createElement("div",null,u.createElement("p",{className:"great"},t),u.createElement("b",{className:"name"},"I'm Odilon Damasceno"),u.createElement("p",{className:"help"},"Need help? I can help you!")),u.createElement(y,null))}var{default:J}=__ALEPH__.pack["https://esm.sh/react@17.0.2"];function A(){return J.createElement("section",{id:"projects"},J.createElement("div",{className:""}))}var{useContext:ue,useMemo:De}=__ALEPH__.pack["https://esm.sh/react@17.0.2"],{default:Me}=__ALEPH__.pack["https://deno.land/x/aleph@v0.3.0-beta.19/shared/util.ts"],{default:Be}=__ALEPH__.pack["https://deno.land/x/aleph@v0.3.0-beta.19/framework/core/events.ts"],{RouterContext:fe,SSRContext:ze}=__ALEPH__.pack["https://deno.land/x/aleph@v0.3.0-beta.19/framework/react/context.ts"],{inDeno:Oe}=__ALEPH__.pack["https://deno.land/x/aleph@v0.3.0-beta.19/framework/react/helper.ts"];function Q(){return ue(fe)}var{AnchorHTMLAttributes:Ie,CSSProperties:Ke,createElement:he,MouseEvent:qe,PropsWithChildren:Te,useCallback:H,useEffect:_e,useMemo:l}=__ALEPH__.pack["https://esm.sh/react@17.0.2"],{default:s}=__ALEPH__.pack["https://deno.land/x/aleph@v0.3.0-beta.19/shared/util.ts"],{default:ge}=__ALEPH__.pack["https://deno.land/x/aleph@v0.3.0-beta.19/framework/core/events.ts"],{redirect:Ee}=__ALEPH__.pack["https://deno.land/x/aleph@v0.3.0-beta.19/framework/core/redirect.ts"],V=new Set;function p(e){let O=e,{rel:t,href:n,["aria-current"]:r,["data-active-className"]:C="active",["data-active-style"]:S,className:E,style:x,onClick:R,onMouseEnter:D,children:Y}=O,Z=W(O,["rel","href","aria-current","data-active-className","data-active-style","className","style","onClick","onMouseEnter","children"]),m=l(()=>t?t.split(" "):[],[t]),M=l(()=>m.includes("prefetch"),[m]),B=l(()=>m.includes("replace"),[m]),f=l(()=>m.includes("nav"),[m]),{pathname:h,params:ee,query:z}=Q(),i=l(()=>{if(!s.isFilledString(n))return"";if(s.isLikelyHttpURL(n))return n;let[a,v]=s.splitBy(n,"?");return a.startsWith("/")?a=s.cleanPath(a):a=s.cleanPath(h+"/"+a),[a,v].filter(Boolean).join("?")},[h,n]),c=l(()=>{if(!s.isFilledString(n))return!1;let[a,v]=s.splitBy(n,"?");if(s.trimSuffix(a,"/")!==h)return!1;let F=new URLSearchParams(v);return F.sort(),F.toString()===z.toString()},[h,ee,z,n]),te=l(()=>!f||!c?E:[E,C].filter(s.isFilledString).map(a=>a.trim()).filter(Boolean).join(" "),[E,C,c,f]),ne=l(()=>!f||!c?x:Object.assign({},x,S),[x,S,c,f]),ae=l(()=>{if(s.isFilledString(r))return r;if(i.startsWith("/"))return"page"},[i,r]),_=H(()=>{i&&!s.isLikelyHttpURL(i)&&!c&&!V.has(i)&&(ge.emit("fetch-page-module",{href:i}),V.add(i))},[c]),oe=H(a=>{s.isFunction(D)&&D(a),!a.defaultPrevented&&_()},[_]),re=H(a=>{s.isFunction(R)&&R(a),!(a.defaultPrevented||xe(a))&&(a.preventDefault(),c||Ee(i,B))},[c,i,B]);return _e(()=>{M&&_()},[M,_]),he("a",U(T({},Z),{className:te,style:ne,href:i,onClick:re,onMouseEnter:oe,"aria-current":ae}),Y)}function xe(e){let{target:t}=e.currentTarget,n=e.nativeEvent;return t&&t!=="_self"||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||n&&n.which===2}var{default:ve}=__ALEPH__.pack["https://esm.sh/react@17.0.2"];function j({size:e=30}){return ve.createElement("img",{src:"/logo.svg",height:e,width:e,title:"Odi",className:"logo"})}var{applyCSS:be}=__ALEPH__.pack["https://deno.land/x/aleph@v0.3.0-beta.19/framework/core/style.ts"],we="header{position:fixed;display:flex;justify-content:flex-end;z-index:auto;align-items:center;padding:20px 5%;width:100vw}.logo{margin-right:auto}li,a,button{font-size:16px;color:#f3f3f3;text-decoration:none}.nav__itens li{list-style:none;display:inline-block;margin:.5vw}.nav__itens li a:hover{color:#bf28bf;transition:all .3s ease 0s}.page-header .icon{display:none}@media screen and (max-width:1000px){.drawer{height:100%;width:0px;position:fixed;z-index:1;top:0;right:0;background-color:#111;overflow-x:hidden;padding-top:60px;transition:.5s;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px)}.nav__itens li{display:list-item;margin:10vmin 0}.nav__itens li a{font-size:20px}.page-header .icon{display:block;color:#fff;z-index:1}}";be("/components/topnav/topnav.css",{css:we});var{default:o}=__ALEPH__.pack["https://esm.sh/react@17.0.2"];function L(){function e(t){let n=t.view.document;t.view.innerWidth<=1e3&&n.getElementById("drawer").style.width!="75%"?n.getElementById("drawer").style.width="75%":n.getElementById("drawer").style.width="0px"}return o.createElement("header",{className:"page-header"},o.createElement(j,null),o.createElement("div",{className:"drawer",id:"drawer"},o.createElement("nav",{className:"nav__itens"},o.createElement("li",null,o.createElement(p,{href:"#home"},"Home")),o.createElement("li",null,o.createElement(p,{href:"#about"},"About")),o.createElement("li",null,o.createElement(p,{href:"#projects"},"Projects")),o.createElement("li",null,o.createElement(p,{href:"#contact"},"Contact")))),o.createElement(p,{className:"icon",onClick:e},o.createElement("i",{className:"fa fa-bars"})))}var{applyCSS:ke}=__ALEPH__.pack["https://deno.land/x/aleph@v0.3.0-beta.19/framework/core/style.ts"],ye='@import"https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap";@import"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";*{box-sizing:border-box;margin:0;padding:0;font-family:"Poppins",sans-serif;scroll-behavior:smooth}section{height:100vh;padding:20px 10%;display:block}.page{background-color:#262626}';ke("/style/index.css",{css:ye});var{default:d}=__ALEPH__.pack["https://esm.sh/react@17.0.2"];function X(){return d.createElement("div",{className:"page"},d.createElement("title",null,"Odilon Damasceno"),d.createElement(L,null),d.createElement(P,null),d.createElement(w,null),d.createElement(A,null),d.createElement(k,null))}__ALEPH__.pack["/pages/index.tsx"]=N;})();