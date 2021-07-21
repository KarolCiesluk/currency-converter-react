(this["webpackJsonpcurrency-converter-react"]=this["webpackJsonpcurrency-converter-react"]||[]).push([[0],{23:function(e,n,t){"use strict";t.r(n);var r,a,c,o,i,u,s,d,l,b,j,h,m,x,g,p,f,O,y,v,k,C=t(1),w=t.n(C),R=t(10),z=t.n(R),A=t(3),S=t(2),P=t.p+"static/media/backgroundCash.33bdc00f.jpg",F=Object(S.b)(r||(r=Object(A.a)(["\n    html {\n        box-sizing: border-box;\n    }\n\n    *, ::before, ::after {\n        box-sizing: inherit;\n    }\n\n    body {\n        font-family: 'Open Sans', sans-serif;\n        font-size: 18px;\n        color: ",";\n        background-image: url(",");\n        background-repeat: no-repeat;\n        background-size: cover;\n        background-position: center;\n        background-attachment: local; \n        min-height: 100vh;\n    }\n"])),(function(e){return e.theme.pickledBluewood.light}),P),I=S.d.h1(a||(a=Object(A.a)(["\n    background-color: ",";\n    color: ",";\n    font-size: 40px;\n    margin-top: 0;\n    padding: 50px;\n    text-align: center;\n    line-height: 1;\n"])),(function(e){return e.theme.pickledBluewood.dark}),(function(e){return e.theme.alabaster})),D=t(0),B=function(e){var n=e.children;return Object(D.jsx)("header",{children:Object(D.jsx)(I,{children:n})})},M=S.d.main(c||(c=Object(A.a)(["\n    max-width: 560px;\n    margin: 40px auto;\n    padding: 0 10px;\n"]))),E=function(e){var n=e.children;return Object(D.jsx)(M,{children:n})},K=t(4),T=S.d.p(o||(o=Object(A.a)(["\n    font-family: 'Roboto Mono', monospace;\n    font-size: 12px;\n    text-align: right;\n"]))),_=function(e){return e.toLocaleDateString(void 0,{weekday:"long",day:"numeric",month:"long",hour:"2-digit",minute:"2-digit",second:"2-digit"})},J=function(){var e=function(){var e=Object(C.useState)(new Date),n=Object(K.a)(e,2),t=n[0],r=n[1];return Object(C.useEffect)((function(){var e=setInterval((function(){r(new Date)}),1e3);return function(){return clearInterval(e)}}),[]),t}();return Object(D.jsxs)(T,{children:["Dzisiaj jest"," ",Object(D.jsx)("time",{dateTime:e.toJSON(),children:_(e)})]})},L=S.d.label(i||(i=Object(A.a)(["\n    margin: 18px 0;\n    display: grid;\n    grid-template-columns: 160px 1fr;\n    grid-gap: 4px;\n    grid-auto-rows: 30px;\n\n    @media (max-width: 520px) {\n        grid-template-columns: 1fr;\n    }\n"]))),W=S.d.label(u||(u=Object(A.a)(["\n    align-self: center;\n\n    ","\n"])),(function(e){return e.myAmount&&Object(S.c)(s||(s=Object(A.a)(["\n        font-weight: 600;\n    "])))})),q=S.d.input(d||(d=Object(A.a)(["\n    border-radius: 5px;\n    color: ",";\n    background-color: ",";\n\n    &:focus {\n        outline-color: ",";\n    }\n\n    ","\n\n    ","\n"])),(function(e){return e.theme.pickledBluewood.light}),(function(e){return e.theme.alabaster}),(function(e){return e.theme.endeavour.dark}),(function(e){return e.myAmount&&Object(S.c)(l||(l=Object(A.a)(["\n        font-weight: 600;\n    "])))}),(function(e){return e.customRate&&Object(S.c)(b||(b=Object(A.a)(["\n        &:disabled {\n            cursor: not-allowed;\n            background-color: transparent;\n        }\n    "])))})),N=S.d.label(j||(j=Object(A.a)(["\n    opacity: 0;\n    pointer-events: none;\n    position: absolute;\n"]))),U=function(e){var n=e.description,t=e.myAmount,r=e.setMyAmount;return Object(D.jsxs)(L,{children:[Object(D.jsx)(W,{myAmount:!0,children:n}),Object(D.jsx)(q,{value:t,onChange:function(e){var n=e.target;return r(n.value)},myAmount:!0,type:"number",min:"1",step:"0.01",autoFocus:!0,required:!0})]})},H=function(e){var n=e.description,t=e.currency,r=e.onCurrencyChange,a=e.exchangeRateAPI,c=Object.keys(a.rates);return Object(D.jsxs)(L,{children:[Object(D.jsx)(W,{children:n}),Object(D.jsx)(q,{as:"select",value:t,onChange:r,children:c.map((function(e){return Object(D.jsx)("option",{value:e,children:e},e)}))})]})},G=function(e){var n=e.isCustomRate,t=e.onRateOptionChange,r=e.customRate,a=e.setCustomRate;return Object(D.jsxs)(L,{as:"p",children:[Object(D.jsx)(N,{htmlFor:"selectRate",children:"Ustawienia kursu"}),Object(D.jsxs)(q,{as:"select",value:n,onChange:t,id:"selectRate",children:[Object(D.jsx)("option",{value:!1,children:"Kurs domy\u015blny"}),Object(D.jsx)("option",{value:!0,children:"Kurs w\u0142asny"})]}),Object(D.jsx)(N,{htmlFor:"customRate",children:"Wysoko\u015b\u0107 kursu"}),Object(D.jsx)(q,{value:r,onChange:function(e){var n=e.target;return a(n.value)},id:"customRate",customRate:!0,type:"number",min:"0.01",step:"0.0001",disabled:!n,required:!0})]})},Q=S.d.p(h||(h=Object(A.a)(["\n    font-size: 14px;\n"]))),V=S.d.a(m||(m=Object(A.a)(["\n    color: ",";\n    transition: font-weight 0.3s;\n\n    &:hover {\n        font-weight: bold;\n    }\n\n    &:focus {\n        font-weight: bold;\n        outline: none;\n    }\n\n    &:active {\n        color: ",";\n    }\n"])),(function(e){return e.theme.endeavour.dark}),(function(e){return e.theme.endeavour.light})),X=S.d.time(x||(x=Object(A.a)(["\n    font-weight: bold;\n"]))),Y=function(e){var n=e.exchangeRateAPI;return Object(D.jsxs)(Q,{children:["Kursy walut pobierane s\u0105 z"," ",Object(D.jsx)(V,{href:"https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html",title:"Kursy walut EBC",children:"Europejskiego Banku Centralnego"}),"."," ","Aktualne na dzie\u0144: ",Object(D.jsx)(X,{children:n.date})]})},Z=S.d.button(g||(g=Object(A.a)(["\n    padding: 12px 50px;\n    background-color: ",";\n    color: #fcfcfc;\n    border: none;\n    box-shadow: 0px 0px 8px 0px ",";\n    border-radius: 30px;\n    outline: none;\n    transition: background-color 0.3s;\n\n    &:hover {\n        background-color: ",";\n    }\n\n    &:focus {\n        background-color: ",";\n    }\n\n    &:active {\n        background-color: ",";\n    }\n"])),(function(e){return e.theme.persianRed.dark}),(function(e){return e.theme.grey.dark}),(function(e){return e.theme.persianRed.medium}),(function(e){return e.theme.persianRed.medium}),(function(e){return e.theme.persianRed.light})),$=function(e){var n=e.buttonText;return Object(D.jsx)("p",{children:Object(D.jsx)(Z,{children:n})})},ee=S.d.p(p||(p=Object(A.a)(["\n    color: ",";\n    font-size: 25px;\n    font-weight: bold;\n    min-height: 40px;\n    margin: 0;\n    word-break: break-word;\n"])),(function(e){return e.theme.persianRed.dark})),ne=function(e){var n=e.resultData;return Object(D.jsx)(ee,{children:n&&"\n          ".concat(n.myAmount.toFixed(2)).concat(n.myCurrency," =\n          "," ").concat(n.finalAmount.toFixed(2)).concat(n.wantedCurrency,"\n        ")})},te=function(e){var n=e.myAmount,t=e.setMyAmount,r=e.myCurrency,a=e.onMyCurrencyChange,c=e.wantedCurrency,o=e.onWantedCurrencyChange,i=e.isCustomRate,u=e.onRateOptionChange,s=e.customRate,d=e.setCustomRate,l=e.resultData,b=e.exchangeRateAPI;return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(U,{description:"Kwota:",myAmount:n,setMyAmount:t}),Object(D.jsx)(H,{description:"Przelicz z:",currency:r,onCurrencyChange:a,exchangeRateAPI:b}),Object(D.jsx)(H,{description:"Przelicz na:",currency:c,onCurrencyChange:o,exchangeRateAPI:b}),Object(D.jsx)(G,{isCustomRate:i,onRateOptionChange:u,customRate:s,setCustomRate:d}),Object(D.jsx)(Y,{exchangeRateAPI:b}),Object(D.jsx)($,{buttonText:"Przelicz!"}),Object(D.jsx)(ne,{resultData:l})]})},re=S.d.p(f||(f=Object(A.a)(["\n    color: ",";\n"])),(function(e){return e.theme.endeavour.dark})),ae=S.d.p(O||(O=Object(A.a)(["\n    color: ","\n"])),(function(e){return e.theme.persianRed.dark})),ce=function(e){var n=e.exchangeRateAPI;return Object(D.jsx)(D.Fragment,{children:n.error?Object(D.jsxs)(ae,{children:["Hmm... Co\u015b posz\u0142o nie tak.\ud83e\udd14 Sprawd\u017a, czy masz po\u0142\u0105czenie z internetem."," ","Je\u015bli masz... to wygl\u0105da na to, \u017ce to nasza wina. Mo\u017ce spr\xf3buj p\xf3\u017aniej!\ud83d\ude1b"]}):Object(D.jsxs)(re,{children:["Sekundka...",Object(D.jsx)("br",{}),"\u0141aduj\u0119 dane z Europejskiego Banku Centralnego.\ud83d\ude0e"]})})},oe=S.d.form(y||(y=Object(A.a)(["\n    padding: 18px 10%;\n    border-radius: 30px;\n    text-align: center;\n    line-height: 1.6;\n    box-shadow: 0px 0px 34px 0px ",";\n    background-color: ",";\n"])),(function(e){return e.theme.grey.dark}),(function(e){return e.theme.grey.light})),ie=t(8),ue=t.n(ie),se=t(14),de=function(){var e=Object(C.useState)(""),n=Object(K.a)(e,2),t=n[0],r=n[1],a=Object(C.useState)("PLN"),c=Object(K.a)(a,2),o=c[0],i=c[1],u=Object(C.useState)("EUR"),s=Object(K.a)(u,2),d=s[0],l=s[1],b=Object(C.useState)(!1),j=Object(K.a)(b,2),h=j[0],m=j[1],x=Object(C.useState)(""),g=Object(K.a)(x,2),p=g[0],f=g[1],O=Object(C.useState)(),y=Object(K.a)(O,2),v=y[0],k=y[1],w=function(){var e=Object(C.useState)({}),n=Object(K.a)(e,2),t=n[0],r=n[1];return Object(C.useEffect)((function(){setTimeout((function(){Object(se.a)(ue.a.mark((function e(){var n,t;return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.exchangerate.host/latest");case 3:if((n=e.sent).ok){e.next=6;break}throw new Error(n.statusText);case 6:return e.next=8,n.json();case 8:t=e.sent,r(t),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),r({error:!0});case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))()}),1e3)}),[]),t}(),R=function(){return t/function(){if(h)return p;var e,n,t=w.rates;for(var r in t)r===d&&(e=t[r]),r===o&&(n=t[r]);return n/e}()};return Object(D.jsxs)(oe,{onSubmit:function(e){e.preventDefault();var n=R();k({myAmount:+t,myCurrency:o,finalAmount:+n,wantedCurrency:d})},children:[Object(D.jsx)(J,{}),w.rates?Object(D.jsx)(te,{myAmount:t,setMyAmount:r,myCurrency:o,onMyCurrencyChange:function(e){var n=e.target,t=o;i(n.value),n.value===d&&l(t)},wantedCurrency:d,onWantedCurrencyChange:function(e){var n=e.target,t=d;l(n.value),n.value===o&&i(t)},isCustomRate:h,onRateOptionChange:function(e){var n="true"===e.target.value;m(n),n||f("")},customRate:p,setCustomRate:f,resultData:v,exchangeRateAPI:w}):Object(D.jsx)(ce,{exchangeRateAPI:w})]})},le=S.d.footer(v||(v=Object(A.a)(["\n    margin: 0 40px;\n    padding: 16px;\n    border-top: 1px solid ",";\n    text-align: center;\n    color: ",";\n"])),(function(e){return e.theme.persianRed.dark}),(function(e){return e.theme.persianRed.dark})),be=S.d.p(k||(k=Object(A.a)(["\n    margin: 9px;\n"]))),je=function(){return Object(D.jsx)(le,{children:Object(D.jsx)(be,{children:"\xa9 2021 Karol Cie\u015bluk"})})};var he=function(){return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(B,{children:"Kalkulator walutowy"}),Object(D.jsx)(E,{children:Object(D.jsx)(de,{})}),Object(D.jsx)(je,{})]})},me=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,24)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,c=n.getLCP,o=n.getTTFB;t(e),r(e),a(e),c(e),o(e)}))};z.a.render(Object(D.jsx)(w.a.StrictMode,{children:Object(D.jsxs)(S.a,{theme:{alabaster:"#fcfcfc",pickledBluewood:{dark:"#2f4858f7",light:"#2F4858"},grey:{dark:"#7a7a7a",light:"#f2f3f4d9"},endeavour:{dark:"#005299",light:"#007ae6"},persianRed:{dark:"#c8352d",medium:"#ff0d00",light:"#d75750"}},children:[Object(D.jsx)(F,{}),Object(D.jsx)(he,{})]})}),document.getElementById("root")),me()}},[[23,1,2]]]);
//# sourceMappingURL=main.8fb8b941.chunk.js.map