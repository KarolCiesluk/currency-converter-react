(this["webpackJsonpcurrency-converter-react"]=this["webpackJsonpcurrency-converter-react"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(5),s=n.n(a),u=(n(10),n(11),n(0)),o=function(e){var t=e.children;return Object(u.jsx)("header",{children:Object(u.jsx)("h1",{className:"header",children:t})})},i=(n(13),function(e){var t=e.children;return Object(u.jsx)("main",{className:"main",children:t})}),l=n(4),j=n(2),m=(n(14),[{name:"EUR",fullName:"Euro",rate:4.5654},{name:"NOK",fullName:"Korona norweska",rate:.4588},{name:"USD",fullName:"Dolar ameryka\u0144ski",rate:3.7746},{name:"PLN",fullName:"Polski z\u0142oty",rate:1}]),b=function(e){var t=e.myAmount,n=e.setMyAmount;return Object(u.jsx)("p",{children:Object(u.jsxs)("label",{className:"form__gridContainer",children:[Object(u.jsx)("span",{className:"form__inputDescription form__inputDescription--myAmount",children:"Kwota:"}),Object(u.jsx)("input",{value:t,onChange:function(e){var t=e.target;return n(t.value)},className:"form__inputField form__inputField--myAmount",type:"number",min:"1",step:"0.01",autoFocus:!0,required:!0})]})})},d=function(e){var t=e.description,n=e.currency,r=e.onCurrencyChange,c=e.currencies;return Object(u.jsx)("p",{children:Object(u.jsxs)("label",{className:"form__gridContainer",children:[Object(u.jsx)("span",{className:"form__inputDescription",children:t}),Object(u.jsx)("select",{value:n,onChange:r,className:"form__inputField",children:c.map((function(e){var t=e.name,n=e.fullName;return Object(u.jsxs)("option",{value:t,children:[t," - ",n]},t)}))})]})})},f=function(e){var t=e.isCustomRate,n=e.onRateOptionChange,r=e.customRate,c=e.setCustomRate;return Object(u.jsxs)("p",{className:"form__gridContainer",children:[Object(u.jsx)("label",{htmlFor:"selectRate",className:"form__screenReaderOnly",children:"Ustawienia kursu"}),Object(u.jsxs)("select",{value:t,onChange:n,id:"selectRate",className:"form__inputField",children:[Object(u.jsx)("option",{value:!1,children:"Kurs domy\u015blny"}),Object(u.jsx)("option",{value:!0,children:"Kurs w\u0142asny"})]}),Object(u.jsx)("label",{htmlFor:"customRate",className:"form__screenReaderOnly",children:"Wysoko\u015b\u0107 kursu"}),Object(u.jsx)("input",{value:r,onChange:function(e){var t=e.target;return c(t.value)},id:"customRate",className:"form__inputField form__inputField--customRate",type:"number",min:"0.01",step:"0.0001",disabled:!t,required:!0})]})},O=function(){return Object(u.jsxs)("p",{className:"form__linkParagraph",children:[Object(u.jsx)("a",{className:"form__link",href:"https://www.money.pl/pieniadze/nbp/srednie/",target:"_blank",title:"Kursy walut money.pl",rel:"noreferrer noopener",children:"Zobacz tabel\u0119 kurs\xf3w NBP"})," (otwiera si\u0119 w nowej karcie)"]})},h=function(e){var t=e.buttonText;return Object(u.jsx)("p",{children:Object(u.jsx)("button",{className:"form__button",children:t})})},p=function(e){var t=e.resultData;return Object(u.jsx)("p",{className:"form__result",children:t.finalAmount?"".concat(t.myAmount).concat(t.myCurrency," = ").concat(t.finalAmount).concat(t.wantedCurrency):""})},x=function(){var e=Object(r.useState)(""),t=Object(j.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)("PLN"),s=Object(j.a)(a,2),o=s[0],i=s[1],x=Object(r.useState)("EUR"),_=Object(j.a)(x,2),y=_[0],v=_[1],N=Object(r.useState)(!1),g=Object(j.a)(N,2),C=g[0],w=g[1],R=Object(r.useState)(""),k=Object(j.a)(R,2),F=k[0],A=k[1],z=Object(r.useState)({}),P=Object(j.a)(z,2),S=P[0],D=P[1],K=function(){return(n/(C?F:m.find((function(e){return e.name===y})).rate/m.find((function(e){return e.name===o})).rate)).toFixed(2)};return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=K();D(Object(l.a)(Object(l.a)({},S),{},{myAmount:n,myCurrency:o,finalAmount:t,wantedCurrency:y}))},className:"form",children:[Object(u.jsx)(b,{myAmount:n,setMyAmount:c}),Object(u.jsx)(d,{description:"Przelicz z:",currency:o,onCurrencyChange:function(e){var t=e.target,n=o;i(t.value),t.value===y&&v(n)},currencies:m}),Object(u.jsx)(d,{description:"Przelicz na:",currency:y,onCurrencyChange:function(e){var t=e.target,n=y;v(t.value),t.value===o&&i(n)},currencies:m}),Object(u.jsx)(f,{isCustomRate:C,onRateOptionChange:function(e){var t="true"===e.target.value;w(t),t||A("")},customRate:F,setCustomRate:A}),Object(u.jsx)(O,{}),Object(u.jsx)(h,{buttonText:"Przelicz!"}),Object(u.jsx)(p,{resultData:S})]})},_=(n(15),function(){return Object(u.jsx)("footer",{className:"footer",children:Object(u.jsx)("p",{className:"footer__copyright",children:"\xa9 2021 Karol Cie\u015bluk"})})});var y=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(o,{children:"Kalkulator walutowy"}),Object(u.jsx)(i,{children:Object(u.jsx)(x,{})}),Object(u.jsx)(_,{})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root")),v()}],[[16,1,2]]]);
//# sourceMappingURL=main.ffbc031f.chunk.js.map