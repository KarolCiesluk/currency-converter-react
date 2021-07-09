(this["webpackJsonpcurrency-converter-react"]=this["webpackJsonpcurrency-converter-react"]||[]).push([[0],{17:function(n,e,t){},21:function(n,e,t){"use strict";t.r(e);var r,c,a,o,u,i,s,l,d,b,j,m,h,f,p,g,x=t(1),O=t.n(x),y=t(9),v=t.n(y),k=(t(17),t(3)),C=t(2),w=C.c.h1(r||(r=Object(k.a)(["\n    background-color: ",";\n    color: ",";\n    font-size: 40px;\n    margin-top: 0;\n    padding: 50px;\n    text-align: center;\n    line-height: 1;\n"])),(function(n){return n.theme.pickledBluewood.dark}),(function(n){return n.theme.alabaster})),R=t(0),A=function(n){var e=n.children;return Object(R.jsx)("header",{children:Object(R.jsx)(w,{children:e})})},z=C.c.main(c||(c=Object(k.a)(["\n    max-width: 560px;\n    margin: 70px auto;\n    padding: 0 10px;\n"]))),S=function(n){var e=n.children;return Object(R.jsx)(z,{children:e})},D=t(4),F=[{name:"EUR",fullName:"Euro",rate:4.5654},{name:"NOK",fullName:"Korona norweska",rate:.4588},{name:"USD",fullName:"Dolar ameryka\u0144ski",rate:3.7746},{name:"PLN",fullName:"Polski z\u0142oty",rate:1}],N=C.c.p(a||(a=Object(k.a)(["\n    font-family: 'Roboto Mono', monospace;\n    font-size: 12px;\n    text-align: right;\n"]))),P=function(n){return n.toLocaleDateString(void 0,{weekday:"long",day:"numeric",month:"long",hour:"2-digit",minute:"2-digit",second:"2-digit"})},K=function(){var n=function(){var n=Object(x.useState)(new Date),e=Object(D.a)(n,2),t=e[0],r=e[1];return Object(x.useEffect)((function(){var n=setInterval((function(){r(new Date)}),1e3);return function(){return clearInterval(n)}}),[]),t}();return Object(R.jsxs)(N,{children:["Dzisiaj jest"," ",Object(R.jsx)("time",{dateTime:n.toJSON(),children:P(n)})]})},M=C.c.label(o||(o=Object(k.a)(["\n    margin: 18px 0;\n    display: grid;\n    grid-template-columns: 160px 1fr;\n    grid-gap: 4px;\n    grid-auto-rows: 30px;\n\n    @media (max-width: 520px) {\n        grid-template-columns: 1fr;\n    }\n"]))),B=C.c.label(u||(u=Object(k.a)(["\n    align-self: center;\n\n    ","\n"])),(function(n){return n.myAmount&&Object(C.b)(i||(i=Object(k.a)(["\n        font-weight: 600;\n    "])))})),E=C.c.input(s||(s=Object(k.a)(["\n    border-radius: 5px;\n    color: ",";\n    background-color: ",";\n\n    &:focus {\n        outline-color: ",";\n    }\n\n    ","\n\n    ","\n"])),(function(n){return n.theme.pickledBluewood.light}),(function(n){return n.theme.alabaster}),(function(n){return n.theme.endeavour.dark}),(function(n){return n.myAmount&&Object(C.b)(l||(l=Object(k.a)(["\n        font-weight: 600;\n    "])))}),(function(n){return n.customRate&&Object(C.b)(d||(d=Object(k.a)(["\n        &:disabled {\n            cursor: not-allowed;\n            background-color: transparent;\n        }\n    "])))})),L=C.c.label(b||(b=Object(k.a)(["\n    opacity: 0;\n    pointer-events: none;\n    position: absolute;\n"]))),T=function(n){var e=n.description,t=n.myAmount,r=n.setMyAmount;return Object(R.jsxs)(M,{children:[Object(R.jsx)(B,{myAmount:!0,children:e}),Object(R.jsx)(E,{value:t,onChange:function(n){var e=n.target;return r(e.value)},myAmount:!0,type:"number",min:"1",step:"0.01",autoFocus:!0,required:!0})]})},I=function(n){var e=n.description,t=n.currency,r=n.onCurrencyChange;return Object(R.jsxs)(M,{children:[Object(R.jsx)(B,{children:e}),Object(R.jsx)(E,{as:"select",value:t,onChange:r,children:F.map((function(n){var e=n.name,t=n.fullName;return Object(R.jsxs)("option",{value:e,children:[e," - ",t]},e)}))})]})},U=function(n){var e=n.isCustomRate,t=n.onRateOptionChange,r=n.customRate,c=n.setCustomRate;return Object(R.jsxs)(M,{as:"p",children:[Object(R.jsx)(L,{htmlFor:"selectRate",children:"Ustawienia kursu"}),Object(R.jsxs)(E,{as:"select",value:e,onChange:t,id:"selectRate",children:[Object(R.jsx)("option",{value:!1,children:"Kurs domy\u015blny"}),Object(R.jsx)("option",{value:!0,children:"Kurs w\u0142asny"})]}),Object(R.jsx)(L,{htmlFor:"customRate",children:"Wysoko\u015b\u0107 kursu"}),Object(R.jsx)(E,{value:r,onChange:function(n){var e=n.target;return c(e.value)},id:"customRate",customRate:!0,type:"number",min:"0.01",step:"0.0001",disabled:!e,required:!0})]})},J=function(n){var e=n.myAmount,t=n.setMyAmount,r=n.myCurrency,c=n.onMyCurrencyChange,a=n.wantedCurrency,o=n.onWantedCurrencyChange,u=n.isCustomRate,i=n.onRateOptionChange,s=n.customRate,l=n.setCustomRate;return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(T,{description:"Kwota:",myAmount:e,setMyAmount:t}),Object(R.jsx)(I,{description:"Przelicz z:",currency:r,onCurrencyChange:c}),Object(R.jsx)(I,{description:"Przelicz na:",currency:a,onCurrencyChange:o}),Object(R.jsx)(U,{isCustomRate:u,onRateOptionChange:i,customRate:s,setCustomRate:l})]})},W=C.c.p(j||(j=Object(k.a)(["\n    font-size: 14px;\n"]))),q=C.c.a(m||(m=Object(k.a)(["\n    color: ",";\n    transition: font-weight 0.3s;\n\n    &:hover {\n        font-weight: bold;\n    }\n\n    &:focus {\n        font-weight: bold;\n        outline: none;\n    }\n\n    &:active {\n        color: ",";\n    }\n"])),(function(n){return n.theme.endeavour.dark}),(function(n){return n.theme.endeavour.light})),Z=function(){return Object(R.jsxs)(W,{children:[Object(R.jsx)(q,{href:"https://www.money.pl/pieniadze/nbp/srednie/",target:"_blank",title:"Kursy walut money.pl",rel:"noreferrer noopener",children:"Zobacz tabel\u0119 kurs\xf3w NBP"})," (otwiera si\u0119 w nowej karcie)"]})},_=C.c.button(h||(h=Object(k.a)(["\n    padding: 12px 50px;\n    background-color: ",";\n    color: #fcfcfc;\n    border: none;\n    box-shadow: 0px 0px 8px 0px ",";\n    border-radius: 30px;\n    outline: none;\n    transition: background-color 0.3s;\n\n    &:hover {\n        background-color: ",";\n    }\n\n    &:focus {\n        background-color: ",";\n    }\n\n    &:active {\n        background-color: ",";\n    }\n"])),(function(n){return n.theme.persianRed.dark}),(function(n){return n.theme.grey.dark}),(function(n){return n.theme.persianRed.medium}),(function(n){return n.theme.persianRed.medium}),(function(n){return n.theme.persianRed.light})),G=function(n){var e=n.buttonText;return Object(R.jsx)("p",{children:Object(R.jsx)(_,{children:e})})},H=C.c.p(f||(f=Object(k.a)(["\n    color: ",";\n    font-size: 25px;\n    font-weight: bold;\n    min-height: 40px;\n    margin: 0;\n    word-break: break-word;\n"])),(function(n){return n.theme.persianRed.dark})),Q=function(n){var e=n.resultData;return Object(R.jsx)(H,{children:e&&"\n        ".concat(e.myAmount).concat(e.myCurrency," =\n        "," ").concat(e.finalAmount).concat(e.wantedCurrency,"\n      ")})},V=C.c.form(p||(p=Object(k.a)(["\n    padding: 18px 10%;\n    border-radius: 30px;\n    text-align: center;\n    line-height: 1.6;\n    box-shadow: 0px 0px 34px 0px ",";\n    background-color: ",";\n"])),(function(n){return n.theme.grey.dark}),(function(n){return n.theme.grey.light})),X=function(){var n=Object(x.useState)(""),e=Object(D.a)(n,2),t=e[0],r=e[1],c=Object(x.useState)("PLN"),a=Object(D.a)(c,2),o=a[0],u=a[1],i=Object(x.useState)("EUR"),s=Object(D.a)(i,2),l=s[0],d=s[1],b=Object(x.useState)(!1),j=Object(D.a)(b,2),m=j[0],h=j[1],f=Object(x.useState)(""),p=Object(D.a)(f,2),g=p[0],O=p[1],y=Object(x.useState)(),v=Object(D.a)(y,2),k=v[0],C=v[1],w=function(){return(t/(m?g:F.find((function(n){return n.name===l})).rate/F.find((function(n){return n.name===o})).rate)).toFixed(2)};return Object(R.jsxs)(V,{onSubmit:function(n){n.preventDefault();var e=w();C({myAmount:t,myCurrency:o,finalAmount:e,wantedCurrency:l})},children:[Object(R.jsx)(K,{}),Object(R.jsx)(J,{myAmount:t,setMyAmount:r,myCurrency:o,onMyCurrencyChange:function(n){var e=n.target,t=o;u(e.value),e.value===l&&d(t)},wantedCurrency:l,onWantedCurrencyChange:function(n){var e=n.target,t=l;d(e.value),e.value===o&&u(t)},isCustomRate:m,onRateOptionChange:function(n){var e="true"===n.target.value;h(e),e||O("")},customRate:g,setCustomRate:O}),Object(R.jsx)(Z,{}),Object(R.jsx)(G,{buttonText:"Przelicz!"}),Object(R.jsx)(Q,{resultData:k})]})},Y=C.c.footer(g||(g=Object(k.a)(["\n    margin: 0 40px;\n    padding: 16px;\n    border-top: 1px solid ",";\n    text-align: center;\n    color: ",";\n"])),(function(n){return n.theme.persianRed.dark}),(function(n){return n.theme.persianRed.dark})),$=function(){return Object(R.jsx)(Y,{children:Object(R.jsx)("p",{children:"\xa9 2021 Karol Cie\u015bluk"})})},nn={alabaster:"#fcfcfc",pickledBluewood:{dark:"#2f4858f7",light:"#2F4858"},grey:{dark:"#7a7a7a",light:"#f2f3f4d9"},endeavour:{dark:"#005299",light:"#007ae6"},persianRed:{dark:"#c8352d",medium:"#ff0d00",light:"#d75750"}};var en=function(){return Object(R.jsxs)(C.a,{theme:nn,children:[Object(R.jsx)(A,{children:"Kalkulator walutowy"}),Object(R.jsx)(S,{children:Object(R.jsx)(X,{})}),Object(R.jsx)($,{})]})},tn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,22)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,o=e.getTTFB;t(n),r(n),c(n),a(n),o(n)}))};v.a.render(Object(R.jsx)(O.a.StrictMode,{children:Object(R.jsx)(en,{})}),document.getElementById("root")),tn()}},[[21,1,2]]]);
//# sourceMappingURL=main.d461a06e.chunk.js.map