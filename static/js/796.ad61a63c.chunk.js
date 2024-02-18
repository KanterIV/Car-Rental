"use strict";(self.webpackChunkcar_rental=self.webpackChunkcar_rental||[]).push([[796],{840:(n,e,t)=>{t.d(e,{c:()=>o});var r,a=t(312);const i=t(360).cp.button(r||(r=(0,a.c)(["\n  width: 274px;\n  height: 44px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  border-radius: 12px;\n  color: #fff;\n  background-color: #3470ff;\n  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    background-color: #0b44cd;\n    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);\n  }\n\n  &:active {\n    box-shadow: none;\n  }\n"])));var s=t(496);const o=n=>{let{onBtnClick:e,children:t}=n;return(0,s.jsx)(i,{onClick:()=>{e()},children:t})}},632:(n,e,t)=>{t.d(e,{c:()=>w});var r,a=t(40),i=t(312),s=t(360);const o=s.cp.li(r||(r=(0,i.c)(["\n  width: 274px;\n  height: 426px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  .content-wrapper {\n    position: relative;\n  }\n\n  .cars-img {\n    margin-bottom: 14px;\n    border-radius: 14px;\n    width: 274px;\n    height: 268px;\n    object-fit: cover;\n  }\n\n  .title-wrapper {\n    display: flex;\n    margin-bottom: 8px;\n  }\n\n  .cars-title {\n    font-size: 16px;\n    line-height: 1.5;\n    margin-right: auto;\n  }\n\n  .titile-blue {\n    color: #3470ff;\n  }\n\n  .car-price {\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 1.5;\n  }\n\n  .description {\n    display: block;\n    color: #12141780;\n    font-size: 12px;\n    line-height: 1.5;\n    margin-bottom: auto;\n  }\n\n  .details {\n    display: inline;\n    font-size: 12px;\n    line-height: 1.5;\n    color: #12141780;\n\n    &:not(:last-child) {\n      padding-right: 6px;\n      border-right: 1px solid grey;\n      border-color: #1214171a;\n    }\n    &:not(:first-child) {\n      padding-left: 6px;\n    }\n  }\n\n  .icon-heart-btn {\n    position: absolute;\n    top: 14px;\n    right: 14px;\n\n    border: none;\n    background-color: transparent;\n\n    & svg {\n      path {\n        transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n        stroke: rgba(255, 255, 255, 0.8);\n      }\n      width: 18px;\n      height: 18px;\n    }\n\n    &.isFavorite {\n      & svg {\n        path {\n          stroke: #3470ff;\n          fill: #3470ff;\n        }\n      }\n    }\n  }\n"])));var c,l=t(60);function p(){return p=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},p.apply(this,arguments)}function d(n,e){let{title:t,titleId:r,...a}=n;return l.createElement("svg",p({width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},a),t?l.createElement("title",{id:r},t):null,c||(c=l.createElement("path",{d:"M15.6301 3.45753C15.247 3.07428 14.7922 2.77026 14.2916 2.56284C13.791 2.35542 13.2545 2.24866 12.7126 2.24866C12.1707 2.24866 11.6342 2.35542 11.1336 2.56284C10.633 2.77026 10.1782 3.07428 9.79509 3.45753L9.00009 4.25253L8.20509 3.45753C7.43132 2.68376 6.38186 2.24906 5.28759 2.24906C4.19331 2.24906 3.14386 2.68376 2.37009 3.45753C1.59632 4.2313 1.16162 5.28075 1.16162 6.37503C1.16162 7.4693 1.59632 8.51876 2.37009 9.29253L3.16509 10.0875L9.00009 15.9225L14.8351 10.0875L15.6301 9.29253C16.0133 8.90946 16.3174 8.45464 16.5248 7.95404C16.7322 7.45345 16.839 6.91689 16.839 6.37503C16.839 5.83316 16.7322 5.2966 16.5248 4.79601C16.3174 4.29542 16.0133 3.84059 15.6301 3.45753Z",stroke:"white",strokeOpacity:.8,strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}const h=l.forwardRef(d);t.p;var x=t(624),m=t(192),g=t(460),f=t(640),b=t(840),u=t(496);const v=n=>{let{id:e,img:t,make:r,model:i,year:s,rentalPrice:c,address:p,rentalCompany:d,type:v}=n;const j={id:e,img:t,make:r,model:i,year:s,rentalPrice:c,address:p,rentalCompany:d,type:v},[y,w]=(0,l.useState)(!1),k=(0,x.OY)(),C=(0,x.w1)(m.M),N=(0,a.q4)(p),L=(0,a.EV)(p),z=(0,a.z4)(v);(0,l.useEffect)((()=>{C.find((n=>n.id===e))?w(!0):w(!1)}),[C,e]);return(0,u.jsxs)(o,{children:[(0,u.jsxs)("div",{className:"content-wrapper",children:[(0,u.jsx)("img",{src:t,className:"cars-img",alt:"".concat(r," ").concat(i)}),(0,u.jsxs)("div",{className:"title-wrapper",children:[(0,u.jsxs)("h3",{className:"cars-title",children:["".concat(r," ")," ",(0,u.jsxs)("span",{className:"titile-blue",children:[" ",i]})," ","".concat(s)]}),(0,u.jsx)("p",{className:"car-price",children:c})]}),(0,u.jsxs)("div",{className:"description",children:[(0,u.jsx)("span",{className:"details",children:N}),(0,u.jsx)("span",{className:"details",children:L}),(0,u.jsx)("span",{className:"details",children:d}),(0,u.jsx)("span",{className:"details",children:z}),(0,u.jsx)("span",{className:"details",children:r}),(0,u.jsx)("span",{className:"details",children:e})]}),(0,u.jsx)("button",{className:y?"icon-heart-btn isFavorite":"icon-heart-btn",type:"button",onClick:()=>{C.find((n=>n.id===e))?k((0,g.mU)(j.id)):k((0,g.WW)(j))},children:(0,u.jsx)(h,{})})]}),(0,u.jsx)(b.c,{id:e,onBtnClick:async()=>{await k((0,f.mi)(e)),k((0,f.yI)())},children:"Learn more"})]})};var j;const y=s.cp.ul(j||(j=(0,i.c)(["\n  margin-top: 30px;\n  display: flex;\n  flex-wrap: wrap;\n  column-gap: 29px;\n  row-gap: 50px;\n\n  margin-bottom: 100px;\n"]))),w=n=>{let{carsArray:e}=n;return(0,u.jsx)(y,{children:0!==e.length&&e.map((n=>{const{id:e,make:t,model:r,year:a,rentalPrice:i,address:s,rentalCompany:o,type:c}=n,l=n.img||n.photoLink;return(0,u.jsx)(v,{id:e,img:l,make:t,model:r,year:a,rentalPrice:i,address:s,rentalCompany:o,type:c},e)}))})}},732:(n,e,t)=>{t.r(e),t.d(e,{default:()=>h});var r,a=t(624),i=t(632),s=t(192),o=t(312);const c=t(360).cp.div(r||(r=(0,o.c)(["\n  margin-top: 30px;\n\n  .favorite-title {\n    margin-left: 46px;\n    margin-bottom: 15px;\n  }\n\n  .favorite-description {\n    margin-left: 46px;\n  }\n"]))),l=t.p+"static/media/favorite.f8b83ef2c1572a000e26.png";var p=t(496);const d=()=>(0,p.jsxs)(c,{children:[(0,p.jsx)("h2",{className:"favorite-title",children:"Save your favorite cars"}),(0,p.jsx)("p",{className:"favorite-description",children:"If you found something interesting in our car catalog, click on the heart in the search results."}),(0,p.jsx)("img",{className:"favorite-img",src:l,alt:"favorite-page-img"})]}),h=()=>{const n=(0,a.w1)(s.M);return n.length?(0,p.jsx)(i.c,{carsArray:n}):(0,p.jsx)(d,{})}},192:(n,e,t)=>{t.d(e,{M:()=>r});const r=n=>n.favorite.favoriteArr}}]);
//# sourceMappingURL=796.ad61a63c.chunk.js.map