(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{142:function(e,t,l){Promise.resolve().then(l.bind(l,1836)),Promise.resolve().then(l.bind(l,1134)),Promise.resolve().then(l.bind(l,3269)),Promise.resolve().then(l.bind(l,5162)),Promise.resolve().then(l.bind(l,5542)),Promise.resolve().then(l.bind(l,8862))},1836:function(e,t,l){"use strict";var s=l(7437),r=l(2265),a=l(6164),i=l(9582),n=l(19),c=l(1204);t.default=e=>{let{style:t}=e,l=(0,r.useRef)(null);return(0,n.V)(()=>{i.ZP.registerPlugin(c.i),i.ZP.timeline({defaults:{ease:"none"},scrollTrigger:{trigger:l.current,scrub:1,pinSpacing:!1}}).to(".title-box",{xPercent:"blue"===t?50:-50})},{scope:l}),(0,s.jsxs)("div",{ref:l,className:(0,a.m6)("blue"===t?"z-50 origin-top-left rotate-6 bg-primary-dark":"origin-top-right -rotate-1 bg-brand-yellow","relative flex w-[150%] gap-[clamp(8px,1.25vw,32px)]"),children:[[,,,].fill(0).map((e,l)=>(0,s.jsxs)("div",{className:"title-box flex items-center gap-[clamp(8px,1.25vw,32px)]",children:[(0,s.jsxs)("p",{className:(0,a.m6)("blue"===t?"text-foreground":"text-black","whitespace-nowrap text-[clamp(32px,5vw,128px)]"),children:["We are not just a club we are",(0,s.jsxs)("span",{className:"blue"===t?"text-brand-yellow":"text-primary-dark",children:[" ","the"]})," ","club"]}),(0,s.jsx)("img",{src:"blue"===t?"/logos/logo-small-white.svg":"/logos/logo-small-black.svg",alt:"Aviation Logo",className:"w-[clamp(32px,4.375vw,112px)]"})]},l)),(0,s.jsx)("p",{})]})}},1134:function(e,t,l){"use strict";l.d(t,{default:function(){return u}});var s=l(7437),r=l(2265),a=l(6164),i=e=>{let{eventTitle:t,eventImgSrc:l,className:r}=e;return(0,s.jsxs)("figure",{className:(0,a.m6)("relative h-screen overflow-hidden rounded-[clamp(8px,1.25vw,32px)]",r),children:[(0,s.jsx)("figcaption",{className:"absolute-center peer z-[1000] cursor-pointer text-[min(10.3125vw,264px)]",children:t}),(0,s.jsx)("div",{className:"absolute inset-0 z-[50] bg-black opacity-50 transition duration-500 peer-hover:scale-110"}),(0,s.jsx)("img",{className:"h-full w-full object-cover object-center transition duration-300 peer-hover:scale-110",src:l,alt:t,loading:"lazy"})]})},n=l(19),c=l(9582),o=l(1204);let p=[{title:"Robolympics",imgSrc:"/images/robolympics.webp"},{title:"Juniors",imgSrc:"/images/juniors.webp"},{title:"Academy",imgSrc:"/images/academy.webp"}];var u=()=>{let e=(0,r.useRef)(null);return(0,n.V)(()=>{c.ZP.registerPlugin(o.i),c.ZP.timeline({defaults:{ease:"none"},scrollTrigger:{trigger:e.current,start:"top top",end:"+=".concat(4*window.innerHeight),anticipatePin:1,scrub:1,pin:!0}}).to(".event-0",{scale:.5,filter:"blur(3px)"}).to([".event-1",".event-2"],{yPercent:-100},"<").to(".event-1",{scale:.5,filter:"blur(3px)"}).to(".event-2",{yPercent:-200},"<").to(".event-2",{scale:.9,duration:.2})},{scope:e}),(0,s.jsx)("section",{ref:e,className:"max-h-screen overflow-hidden",children:p.map((e,t)=>(0,s.jsx)(i,{eventTitle:e.title,eventImgSrc:e.imgSrc,className:"event-".concat(t)},e.title))})}},3269:function(e,t,l){"use strict";l.d(t,{default:function(){return o}});var s=l(7437),r=l(2265),a=l(6164),i=e=>{let{children:t,className:l,...r}=e;return(0,s.jsxs)("button",{...r,className:(0,a.m6)("group relative grid place-content-center overflow-hidden rounded-full border-[1px] border-foreground px-[clamp(16px,1.25vw,32px)] py-2 text-[clamp(24px,1.875vw,48px)] text-foreground transition duration-300 hover:border-black hover:fill-black hover:text-black",l),children:[t,(0,s.jsx)("span",{className:"absolute inset-0 z-[-1] h-full w-full origin-bottom scale-y-0 bg-brand-yellow transition duration-300 group-hover:scale-y-100"})]})};let n=[{imgSrc:"/images/robolympics.webp",title:"Events",href:"/events"},{imgSrc:"/images/about.webp",title:"About",href:"/about"},{imgSrc:"/images/contact-us.webp",title:"Contact Us",href:"/contact-us"}],c=[{label:"Facebook",src:"/svgs/facebook.svg",href:"https://www.facebook.com/egaviationclub"},{label:"Linkedin",src:"/svgs/linkedin.svg",href:"https://www.linkedin.com/company/aviation-club-eg"},{label:"Instagram",src:"/svgs/instagram.svg"}];var o=()=>{let e=(0,r.useRef)(()=>{});return(0,r.useEffect)(()=>{e.current=function(){console.log("called"),window.scrollTo({top:0,left:0,behavior:"smooth"})}},[]),(0,s.jsxs)("footer",{className:"px-clamp mt-auto flex flex-col gap-2 bg-primary-dark py-2 text-[clamp(16px,1.875vw,48px)]",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsx)("p",{children:"Menu"}),(0,s.jsx)("ul",{className:"flex gap-8 sm:hidden",children:n.map(e=>(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:e.href,children:e.title})},e.title))}),(0,s.jsx)("ul",{className:"hidden gap-1 sm:flex",children:n.map(e=>(0,s.jsx)("li",{className:"w-[clamp(180px,17vw,435px)] overflow-hidden rounded-[8px]",children:(0,s.jsxs)("figure",{className:"relative",children:[(0,s.jsx)("figcaption",{className:"absolute-center peer z-[9999] whitespace-nowrap text-[clamp(32px,3.75vw,96px)]",children:(0,s.jsx)("a",{href:"",children:e.title})}),(0,s.jsx)("img",{className:"transition duration-300 peer-hover:scale-110",src:e.imgSrc,alt:e.title,loading:"lazy"}),(0,s.jsx)("div",{className:"absolute inset-0 bg-black opacity-30"})]})},e.title))})]}),(0,s.jsx)("hr",{}),(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsx)("p",{children:"Follow Us"}),(0,s.jsx)("ul",{className:"flex items-center gap-4",children:c.map(e=>(0,s.jsx)("li",{className:"aspect-square rounded-full bg-foreground fill-background p-1 sm:p-2",children:(0,s.jsx)("a",{href:e.href,"aria-label":e.label,children:(0,s.jsx)("img",{className:"h-[clamp(16px,2.5vw,32px)]",src:e.src,alt:e.label})})},e.label))})]}),(0,s.jsx)("hr",{}),(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,s.jsx)("p",{className:"leading-none",children:"Aviation Club"}),(0,s.jsx)("div",{children:(0,s.jsx)("img",{src:"/svgs/copyright.svg",className:"h-[clamp(16px,1.25vw,32px)]",alt:"copyright symbol"})}),(0,s.jsx)("p",{className:"leading-none",children:"All Rights Reserved"})]}),(0,s.jsxs)("div",{className:"flex items-center gap-2 sm:gap-4",children:[(0,s.jsx)("p",{children:"2024"}),(0,s.jsx)(i,{onClick:function(){e.current()},className:"aspect-square bg-primary-dark px-1 sm:px-2","aria-label":"Go Up",children:(0,s.jsx)("img",{className:"h-[clamp(16px,2.5vw,32px)] fill-blue-500 text-red-300",src:"/svgs/arrow-up.svg",alt:"Arrow up"})})]})]})]})}},5162:function(e,t,l){"use strict";l.d(t,{default:function(){return p}});var s=l(7437),r=l(9582),a=l(19),i=()=>(0,s.jsx)("div",{id:"intro-video",className:"px-clamp absolute top-[calc(100vh-5.8vh)] h-[82vh] w-full",children:(0,s.jsxs)("div",{className:"z-999 relative h-full w-full",children:[(0,s.jsx)("div",{className:"pointer-events-none absolute inset-0 rounded-[clamp(8px,1.25vw,32px)] bg-black opacity-20"}),(0,s.jsx)("video",{autoPlay:!0,playsInline:!0,muted:!0,loop:!0,src:"/videos/intro.mp4",className:"h-full w-full rounded-[clamp(8px,1.25vw,32px)] object-cover object-center"})]})}),n=l(2265);let c=["/images/collage/arcade-01.png","/images/collage/camera-06.png","/images/collage/computer-01.png","/images/collage/computer-09.png","/images/collage/hands-03.png","/images/collage/joystick-01.png","/images/collage/joystick-03.png","/images/collage/passport-01.png","/images/collage/stereo-01.png","/images/collage/vhs-01.png","/images/collage/videogame-08.png"],o=function(e,t,l){e.quickSetter({position:"absolute",left:t.x,top:t.y,x:"-50%",y:"-50%",zIndex:l})};var p=()=>{let e=(0,n.useRef)(null),t=(0,n.useRef)(null);return(0,a.V)(()=>{if(!t.current||!e.current)return;let l=c.map(e=>{let t=new Image(Math.max(300,.15625*window.innerWidth));t.src=e;let l={element:t,quickSetter:r.ZP.quickSetter(t,"css"),loaded:!1};return t.addEventListener("load",function(){l.loaded=!0}),l}),s=null,a=0,i=[];t.current.addEventListener("mousemove",function(t){var r,n,p,u;let d=a%c.length;if(!l[d].loaded){a++;return}let m={x:t.clientX,y:t.clientY};(!s||(p=m,Math.sqrt(((u=s).x-p.x)**2+(u.y-p.y)**2)>=60))&&(s=m,(null===(r=i[d])||void 0===r?void 0:r.src)!==l[d].element.src&&(null===(n=e.current)||void 0===n||n.appendChild(l[d].element),i.push(l[d].element)),o(l[d],m,a),a++)})},{scope:e}),(0,s.jsxs)("section",{ref:t,className:"relative flex min-h-screen flex-col items-center justify-center gap-[1.5625vw]",children:[(0,s.jsx)("div",{ref:e,className:"absolute-center z-[-10] h-full w-full"}),(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center gap-[0.9375vw]",children:[(0,s.jsxs)("h1",{className:"text-center font-sans text-[clamp(48px,7.5vw,192px)] leading-[0.8] text-foreground",children:["Aviation Club",(0,s.jsx)("br",{}),"Collage experience that flies"]}),(0,s.jsxs)("p",{className:"w-full text-center font-serif text-[clamp(12px,1.25vw,32px)]",children:["Aviation Club is a Student-to-Student Organization,",(0,s.jsx)("br",{}),"based in Faculty of Engineering Ain-shams University.",(0,s.jsx)("br",{}),"Our Scope is to cover practical, theoretical",(0,s.jsx)("br",{}),"Training and research abilities in Aviation field."]})]}),(0,s.jsx)(i,{})]})}},5542:function(e,t,l){"use strict";var s=l(7437),r=l(2265),a=l(9582),i=l(19),n=l(1204);t.default=e=>{let{sectionTitle:t}=e,l=(0,r.useRef)(null);return(0,i.V)(()=>{a.ZP.registerPlugin(n.i),a.ZP.timeline({defaults:{ease:"power3"},scrollTrigger:{trigger:l.current,start:"top bottom",end:"+=".concat(window.innerHeight),scrub:1}}).from(".left",{xPercent:-100}).from(".right",{xPercent:100},"<").from(".left",{backgroundPositionX:"100%"},"<+=0.2").from(".right",{backgroundPositionX:"-100%"},"<")},{scope:l}),(0,s.jsxs)("h2",{ref:l,className:" section-title flex w-full justify-between text-[clamp(64px,14.375vw,368px)]",children:[(0,s.jsx)("span",{className:"left",children:"Our"}),(0,s.jsx)("span",{className:"right",children:t})]})}},8862:function(e,t,l){"use strict";var s=l(7437),r=l(2265),a=l(9582),i=l(19);t.default=e=>{let{teamTitle:t,teamImgSrc:l,speed:n,reversed:c=!1}=e,o=(0,r.useRef)(null);return(0,i.V)(()=>{o.current&&function(e,t){e=a.ZP.utils.toArray(e),t=t||{};let l=a.ZP.timeline({repeat:t.repeat,paused:t.paused,defaults:{ease:"none"},onReverseComplete:()=>l.totalTime(l.rawTime()+100*l.duration())}),s=e.length,r=e[0].offsetLeft,i=[],n=[],c=[],o=0,p=100*(t.speed||1),u=!1===t.snap?e=>e:a.ZP.utils.snap(t.snap||1),d,m,x,g,f,h;for(a.ZP.set(e,{xPercent:(e,t)=>{let l=n[e]=parseFloat(a.ZP.getProperty(t,"width","px"));return c[e]=u(parseFloat(a.ZP.getProperty(t,"x","px"))/l*100+a.ZP.getProperty(t,"xPercent")),c[e]}}),a.ZP.set(e,{x:0}),d=e[s-1].offsetLeft+c[s-1]/100*n[s-1]-r+e[s-1].offsetWidth*a.ZP.getProperty(e[s-1],"scaleX")+(parseFloat(t.paddingRight)||0),h=0;h<s;h++)f=e[h],m=c[h]/100*n[h],g=(x=f.offsetLeft+m-r)+n[h]*a.ZP.getProperty(f,"scaleX"),l.to(f,{xPercent:u((m-g)/n[h]*100),duration:g/p},0).fromTo(f,{xPercent:u((m-g+d)/n[h]*100)},{xPercent:c[h],duration:(m-g+d-m)/p,immediateRender:!1},g/p).add("label"+h,x/p),i[h]=x/p;function v(e,t){t=t||{},Math.abs(e-o)>s/2&&(e+=e>o?-s:s);let r=a.ZP.utils.wrap(0,s,e),n=i[r];return n>l.time()!=e>o&&(t.modifiers={time:a.ZP.utils.wrap(0,l.duration())},n+=l.duration()*(e>o?1:-1)),o=r,t.overwrite=!0,l.tweenTo(n,t)}l.next=e=>v(o+1,e),l.previous=e=>v(o-1,e),l.current=()=>o,l.toIndex=(e,t)=>v(e,t),l.times=i,l.progress(1,!0).progress(0,!0),t.reversed&&(l.vars.onReverseComplete(),l.reverse())}(a.ZP.utils.toArray(".title-box"),{speed:n,repeat:-1,paddingRight:"1.25vw",reversed:c})},{scope:o}),(0,s.jsx)("figure",{ref:o,className:"relative w-[120%] cursor-pointer overflow-hidden",children:(0,s.jsx)("div",{className:"flex justify-center gap-[clamp(8px,1.25vw,32px)] border-b-2 border-b-white",children:Array(12).fill(0).map((e,l)=>(0,s.jsxs)("div",{className:"title-box flex gap-[clamp(8px,1.25vw,32px)]",children:[(0,s.jsx)("h3",{className:"whitespace-nowrap text-[clamp(32px,5vw,128px)]",children:t},l),(0,s.jsx)("span",{className:"whitespace-nowrap text-[clamp(32px,5vw,128px)]",children:"-"})]},l))})})}}},function(e){e.O(0,[922,41,971,23,744],function(){return e(e.s=142)}),_N_E=e.O()}]);