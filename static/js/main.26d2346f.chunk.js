(this.webpackJsonpflagcountries=this.webpackJsonpflagcountries||[]).push([[0],{30:function(n,e,t){n.exports=t(43)},35:function(n,e,t){},40:function(n,e,t){},43:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(16),i=t.n(o),l=(t(35),t(10)),c=t(6),u=t(17),m=(t(40),t(2)),s=t(3),d=t(4),p=t(26),g=t.n(p);function f(){var n=Object(m.a)(["\n    /*width : 264px;*/\n    border-radius: 5px;\n    box-shadow: 0 0 7px 2px rgba(0,0,0,.03);\n    text-align: left;\n    background:var(--white);\n    cursor:pointer;\n    transition: 1s ease;\n    &:hover {\n        transform: scale(1.05)\n    }\n    img{\n        width:100%;\n        height:160px;\n        object-fit: cover;\n    }\n    .details {\n        padding: 1.5em;\n    }\n    h2{\n        margin : 0;\n        margin-bottom:1rem;\n        font-size:18px;\n        font-weight: 700;\n\n    }\n\n    p{\n        font-size: .9em;\n        margin-bottom: .5rem\n    }\n"]);return f=function(){return n},n}var b=s.a.div(f());var v=function(n){var e=n.flag,t=n.name,a=n.population,o=n.region,i=n.capital,l=n.alpha2Code,c=Object(d.f)();return r.a.createElement(b,{onClick:function(){c.push("/country/".concat(g()(l)))}},r.a.createElement("img",{loading:"lazy",src:e,alt:""}),r.a.createElement("div",{className:"details"},r.a.createElement("h2",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Population:"),a),r.a.createElement("p",null,r.a.createElement("strong",null,"Region:"),o),r.a.createElement("p",null,r.a.createElement("strong",null,"Capital:"),i)))};function E(){var n=Object(m.a)(["\n  max-width: 1312px;\n  margin: auto;\n  padding: 0 1rem;\n"]);return E=function(){return n},n}var h=s.a.div(E());var x=function(n){var e=n.children;return r.a.createElement(h,null,e)};function y(){var n=Object(m.a)(["\n    display:grid;\n    grid-row-gap:2.3em;\n    grid-column-gap:65px;\n    grid-auto-flow: columns;\n    grid-template-columns: repeat(auto-fill,262px);\n    background: var(--gris);\n    padding: 4em 2em;\n    justify-content: center;\n"]);return y=function(){return n},n}var w=s.a.div(y());var O=function(){var n=Object(c.b)(),e=Object(c.c)((function(n){return n.countryListByName})),t=Object(c.c)((function(n){return""!==n.filterByRegion&&0===e.length?n.coutryFilteredByRegion:e.length>0?e:n.countryList}));return console.log("el estado total de mi app es",t),Object(a.useEffect)((function(){fetch("https://restcountries.eu/rest/v2/all").then((function(n){return n.json()})).then((function(e){n({type:"SET_COUNTRY_LIST",payload:e}),console.log(e)})).catch((function(){console.log("Hubo un error")}))}),[n]),r.a.createElement(x,null,r.a.createElement(w,null,t.map((function(n){var e=n.alpha2Code,t=n.flag,a=n.name,o=n.population,i=n.region,l=n.capital;return r.a.createElement(v,{alpha2Code:e,key:e,flag:t,name:a,population:o,region:i,capital:l})}))))};function j(){var n=Object(m.a)(["\n  display: inline-flex;\n  background: var(--white);\n  align-items: center;\n  box-shadow: 0 2px 9px 0 rgba(0,0,0,.05);\n  padding: 0 2rem;\n  border-radius: 5px;\n  flex: 1;\n  i {\n    margin-right: 1em;\n    color: #C4C4C4;\n  }\n  input {\n    /* width: 100%; */\n    flex: 1;\n    border: none;\n    height: 48px;\n    line-height: 48px;\n    font-size: .7em;\n    outline: 0;\n    color: var(--black);\n    background: var(--white);\n    &::-webkit-input-placeholder {\n      color: #C4C4C4;\n    }\n  }\n"]);return j=function(){return n},n}var k=s.a.label(j());var C=function(n){var e=Object.assign({},n);return r.a.createElement(k,null,r.a.createElement("i",{className:"fas fa-search"}),r.a.createElement("input",Object.assign({type:"text"},e)))};function N(){var n=Object(m.a)(["\n  display: flex;\n  position: relative;\n  .close {\n    position: absolute;\n    right: 1em;\n    top: 1em;\n    border-radius: 50%;\n    border: none;\n    box-shadow: 0 2px 9px 0 rgba(0,0,0,.05);\n  }\n"]);return N=function(){return n},n}var B=s.a.div(N());var R=function(){var n=Object(a.useState)(""),e=Object(l.a)(n,2),t=e[0],o=e[1],i=Object(c.b)();return r.a.createElement(B,null,t&&r.a.createElement("i",{className:"fas fa-times close",onClick:function(){i({type:"SET_COUNTRY_BY_NAME",payload:""}),o("")}}),r.a.createElement(C,{placeholder:"Search for a country...",value:t,onChange:function(n){o(n.target.value),i({type:"SET_COUNTRY_BY_NAME",payload:n.target.value})}}))};function L(){var n=Object(m.a)(["\n@import url('https://fonts.google.com/specimen/Nunito+Sans');\n* {\n    box-sizing: border-box;\n}\n.dropdown {\n  border-radius: 5px;\n  background-color: var(--white);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12);\n  cursor: pointer;\n  text-align: center;\n  font-size: 12px;\n  padding: 20px;\n  position: relative;\n  background: var(--white);\n}\n.btn-toggle .fas {\n  display: none;\n}\n\nbody.dark .btn-toggle .fas {\n  display: inline-block;\n}\n\n\n.dropdown .fa-chevron-down {\n  margin-left: 10px;\n}\n\n.dropdown ul {\nborder-radius: 4px;\n  background-color: var(--background-el);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12);\n  display: none;\n  padding: 10px;\n  text-align: center;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  list-style-type: none;\n  background: var(--white);\n  width: 100%;\n  z-index: 99;\n}\n\n.dropdown.open ul {\n  display: block;\n}\n\n.dropdown ul li {\n  margin: 10px 0;\n}\n\n"]);return L=function(){return n},n}var S=s.a.div(L()),_=function(){var n=Object(c.b)(),e=Object(a.useState)(!1),t=Object(l.a)(e,2),o=t[0],i=t[1],u=(Object(c.c)((function(n){return n.filterByRegion})),function(e){n({type:"FILTER_BY_REGION",payload:{regionSelected:e}})});return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null,r.a.createElement("div",{className:"".concat(o?"dropdown open":"dropdown"),onClick:function(){return i(!o)},id:"filter"},"Filter by Region",r.a.createElement("i",{className:"fas fa-chevron-down"}),r.a.createElement("ul",null,r.a.createElement("li",{onClick:function(){return u("Africa")}},"Africa"),r.a.createElement("li",{onClick:function(){return u("Americas")}},"Americas"),r.a.createElement("li",{onClick:function(){return u("Asia")}},"Asia"),r.a.createElement("li",{onClick:function(){return u("Europe")}},"Europe"),r.a.createElement("li",{onClick:function(){return u("Oceania")}},"Oceania")))))};function T(){var n=Object(m.a)(["\n  .grid {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-row-gap: 20px;\n  }\n  @media screen and (min-width: 768px) {\n    .grid {\n      grid-template-columns: 480px 1fr 164px;\n    }\n  }\n"]);return T=function(){return n},n}var z=s.a.div(T());var M=function(){return r.a.createElement(z,null,r.a.createElement(x,null,r.a.createElement("div",{className:"grid"},r.a.createElement(R,null),r.a.createElement("span",null),r.a.createElement(_,null))))},Y=t(11);var A=t(15);function F(){var n=Object(m.a)(["\n  max-width: 1312px;\n  margin: auto;\n  padding: 0 1rem;\n"]);return F=function(){return n},n}var I=s.a.div(F());var D=function(n){var e=n.children;return r.a.createElement(I,null,e)};function U(){var n=Object(m.a)(["\n\n    background: var(--white);\n    margin-bottom:1em;\n    box-shadow: 0 2px 4px 0 rgba(0,0,0, .06);\n    .content{\n        height: 80px;\n        display: flex;\n        align-items:center;\n        justify-content: space-between;\n    }\n    h1 {\n        font-size: 14px;\n        font-weight:bold;\n    }\n    a{\n        text-decoration:none;\n        color:var(--dark);\n    }\n    .dark-mode{\n        cursor:pointer;\n        .moon{\n            transform: rotate(-25deg);\n            margin-right:15px;\n            display:inline-flex\n\n        }\n\n        p{\n            font-size:12px;\n            font-weight:600;\n\n        }\n    }\n"]);return U=function(){return n},n}var W=s.a.div(U());var G=function(n){var e=n.setDarkMode,t=n.darkMode;return r.a.createElement(W,null,r.a.createElement(D,null,r.a.createElement("div",{className:"content"},r.a.createElement(A.b,{to:"/"},r.a.createElement("h1",null,"Where in the world?")),r.a.createElement("div",{className:"dark-mode"},r.a.createElement("p",{onClick:function(){e(!t)}},r.a.createElement("span",{className:"moon"},t?r.a.createElement("i",{className:"fas fa-moon"}):r.a.createElement("i",{className:"far fa-moon"})),"Dark Mode")))))};function J(){var n=Object(m.a)(["\n    \n    margin-top:3em;\n    padding-bottom:3em;\n    \n    img{\n        width:100%;\n        margin-bottom:2em\n\n    }\n    .grid{\n        display:grid;\n        grid-row-gap:1em\n    }\n    .border-item{\n        padding:.5em 2em;\n        box-shadow: 0 0 5px rgba(0,0,0,.3);\n        border-radius:5px;\n        display:inline-flex;\n        margin-bottom:5px;\n        margin-right:15px;\n        background:var(--white);\n    }\n    .languages {\n    span {\n      margin-right: 5px;\n      &:after {\n        content: ',';\n      }\n      &:last-child {\n        &:after {\n          display: none;\n        }\n      }\n    }\n  }\n  @media screen and (min-width: 1024px){\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-column-gap: 120px;\n    margin-top: 5em;\n    .grid{\n        grid-template-columns: 1fr 1fr;\n        \n    }\n    .borders {\n      display: inline-flex;\n      margin-right: 1em;\n      margin-top: 3.5em;\n    }\n  }\n\n"]);return J=function(){return n},n}var H=s.a.div(J());var P=function(n){var e=n.flag,t=n.name,a=n.nativeName,o=n.region,i=n.subregion,l=n.capital,c=n.topLevelDomain,u=n.currencies,m=void 0===u?[]:u,s=n.languages,d=void 0===s?[]:s,p=n.borders,g=void 0===p?[]:p;return n.alpha2Code,r.a.createElement(H,null,r.a.createElement("img",{src:e}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("div",{className:"grid"},r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Native Name :")," ",a," "),r.a.createElement("p",null,r.a.createElement("strong",null,"Region :")," ",o," "),r.a.createElement("p",null,r.a.createElement("strong",null,"Sub Region :")," ",i," "),r.a.createElement("p",null,r.a.createElement("strong",null,"Capital :")," ",l," ")),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Top Level Domain :")," ",c," "),r.a.createElement("p",null,r.a.createElement("strong",null,"Currencies:")," ",m.map((function(n){return r.a.createElement("span",null,n.name)}))),r.a.createElement("p",{className:"languages"},r.a.createElement("strong",null,"Languages:")," ",d.map((function(n){return r.a.createElement("span",null,n.name)}))))),r.a.createElement("p",{className:"borders"},r.a.createElement("strong",null,"Border Countries:")),g.map((function(n){return r.a.createElement("span",{class:"border-item"},n)}))))};function $(){var n=Object(m.a)(["\n.back{\n    background: var(--white);\n    box-shadow: 0 0 10px rgba(0,0,0,.3);\n    padding: .7em 2.2em;\n    border-radius: 5px;\n    border:none;\n    cursor:pointer;\n    margin-top:1em;\n    color:var(--black);\n    i{\n        margin-right:5px;\n    }\n    @media screen and (min-width: 1024px) {\n    .back {\n      margin-top: 3em;\n    }\n  }\n\n}\n"]);return $=function(){return n},n}var q=s.a.div($());var K=function(n){var e=n.match,t=n.history,o=Object(c.c)((function(n){return n.countryList.find((function(n){return n.alpha2Code===e.params.id}))})),i=Object(a.useState)(o),u=Object(l.a)(i,2),m=u[0],s=u[1];return console.log(m),Object(a.useEffect)((function(){m||fetch("https://restcountries.eu/rest/v2/alpha/".concat(e.params.id.toLowerCase())).then((function(n){return n.json()})).then((function(n){s(n)}))}),[m,e.params.id]),r.a.createElement(q,null,r.a.createElement(x,null,r.a.createElement("button",{className:"back",onClick:function(){t.goBack()}},r.a.createElement("i",{className:"fas fa-long-arrow-alt-left"}),"Back"),r.a.createElement(P,m)))},Q=Object(u.b)((function(n,e){switch(console.log(e),e.type){case"SET_COUNTRY_LIST":return console.log("voy a actualizar la lista de paises"),Object(Y.a)(Object(Y.a)({},n),{},{countryList:e.payload});case"SET_COUNTRY_BY_NAME":var t=(""!==n.filterByRegion?n.coutryFilteredByRegion:n.countryList).filter((function(n){return n.name.toLowerCase().includes(e.payload.toLowerCase())}));return Object(Y.a)(Object(Y.a)({},n),{},{countryListByName:t});case"FILTER_BY_REGION":var a=e.payload.regionSelected;if(""===a)return Object(Y.a)(Object(Y.a)({},n),{},{coutryFilteredByRegion:[],filterByRegion:""});var r=n.countryList.filter((function(n){return n.region===a}));return Object(Y.a)(Object(Y.a)({},n),{},{coutryFilteredByRegion:r,filterByRegion:a});default:return n}}),{countryList:[],countryListByName:[],coutryFilteredByRegion:[],filterByRegion:""});var V=function(){var n=Object(a.useState)(!1),e=Object(l.a)(n,2),t=e[0],o=e[1],i=Object(a.useState)(!1),u=Object(l.a)(i,2),m=(u[0],u[1]),s=t?"is-dark-mode":"is-light-mode";function p(n){o(n.matches),m(n.matches)}return Object(a.useEffect)((function(){var n=window.matchMedia("(prefers-color-scheme: dark)");return n.addListener(p),o(n.matches),m(n.matches),function(){n.removeListener(p)}}),[]),r.a.createElement("main",{className:s},r.a.createElement(c.a,{store:Q},r.a.createElement(A.a,null,r.a.createElement(G,{setDarkMode:o,darkMode:t}),r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/country/:id",component:K}),r.a.createElement(d.a,{path:"/"},r.a.createElement(M,null),r.a.createElement(O,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.26d2346f.chunk.js.map