(this["webpackJsonpcurrency-converter-react"]=this["webpackJsonpcurrency-converter-react"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(4),s=n.n(c),o=(n(9),n(10),n(0)),u=function(e){var t=e.title;return Object(o.jsx)("header",{children:Object(o.jsx)("h1",{className:"header",children:t})})},i=(n(12),function(e){var t=e.children;return Object(o.jsx)("main",{className:"main",children:t})}),l=n(2),j=(n(13),[{name:"EUR",fullName:"Euro",rate:4.5654},{name:"NOK",fullName:"Korona norweska",rate:.4588},{name:"USD",fullName:"Dolar ameryka\u0144ski",rate:3.7746},{name:"PLN",fullName:"Polski z\u0142oty",rate:1}]),m=function(e){var t=e.myAmount,n=e.setMyAmount;return Object(o.jsx)("p",{children:Object(o.jsxs)("label",{className:"form__gridContainer",children:[Object(o.jsx)("strong",{className:"form__inputDescription form__inputDescription--myAmount",children:"Kwota:"}),Object(o.jsx)("input",{value:t,onChange:function(e){var t=e.target;return n(t.value)},className:"form__inputField form__inputField--myAmount",type:"number",min:"1",step:"0.01",autoFocus:!0,required:!0})]})})},b=function(e){var t=e.currency,n=e.description,r=e.onCurrencyChange,a=e.currencies;return Object(o.jsx)("p",{children:Object(o.jsxs)("label",{className:"form__gridContainer",children:[Object(o.jsx)("span",{className:"form__inputDescription",children:n}),Object(o.jsx)("select",{value:t,onChange:r,className:"form__inputField",children:a.map((function(e){var t=e.name,n=e.fullName;return Object(o.jsxs)("option",{value:t,children:[t," - ",n]},t)}))})]})})},f=function(e){var t=e.rateOption,n=e.onRateOptionChange,r=e.customRate,a=e.setCustomRate;return Object(o.jsxs)("p",{className:"form__gridContainer",children:[Object(o.jsx)("label",{htmlFor:"selectRate",className:"form__screenReaderOnly",children:"Ustawienia kursu"}),Object(o.jsxs)("select",{value:t,onChange:n,id:"selectRate",className:"form__inputField",children:[Object(o.jsx)("option",{value:"defaultRate",children:"Kurs domy\u015blny"}),Object(o.jsx)("option",{value:"customRate",children:"Kurs w\u0142asny"})]}),Object(o.jsx)("label",{htmlFor:"customRate",className:"form__screenReaderOnly",children:"Wysoko\u015b\u0107 kursu"}),Object(o.jsx)("input",{value:r,onChange:function(e){var t=e.target;return a(t.value)},id:"customRate",className:"form__inputField form__inputField--customRate",type:"number",min:"0.01",step:"0.0001",disabled:"defaultRate"===t,required:!0})]})},d=function(){return Object(o.jsxs)("p",{className:"form__linkParagraph",children:[Object(o.jsx)("a",{className:"form__link",href:"https://www.money.pl/pieniadze/nbp/srednie/",target:"_blank",title:"Kursy walut money.pl",rel:"noreferrer noopener",children:"Zobacz tabel\u0119 kurs\xf3w NBP"})," (otwiera si\u0119 w nowej karcie)"]})},O=function(e){var t=e.buttonText;return Object(o.jsx)("p",{children:Object(o.jsx)("button",{className:"form__button",children:t})})},h=function(e){var t=e.resultText;return Object(o.jsx)("p",{className:"form__result",children:t})},p=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)("PLN"),s=Object(l.a)(c,2),u=s[0],i=s[1],p=Object(r.useState)("EUR"),x=Object(l.a)(p,2),_=x[0],v=x[1],y=Object(r.useState)("defaultRate"),N=Object(l.a)(y,2),g=N[0],C=N[1],R=Object(r.useState)(""),k=Object(l.a)(R,2),w=k[0],F=k[1],z=Object(r.useState)(""),P=Object(l.a)(z,2),S=P[0],K=P[1],D=function(){var e=n/(w||j.find((function(e){return e.name===_})).rate/j.find((function(e){return e.name===u})).rate);return Number.isInteger(e)?e:e.toFixed(2)};return Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=D();K("".concat(n," ").concat(u," = ").concat(t," ").concat(_))},className:"form",children:[Object(o.jsx)(m,{myAmount:n,setMyAmount:a}),Object(o.jsx)(b,{currency:u,description:"Przelicz z:",onCurrencyChange:function(e){var t=e.target,n=u;i(t.value),t.value===_&&v(n)},currencies:j}),Object(o.jsx)(b,{currency:_,description:"Przelicz na:",onCurrencyChange:function(e){var t=e.target,n=_;v(t.value),t.value===u&&i(n)},currencies:j}),Object(o.jsx)(f,{rateOption:g,onRateOptionChange:function(e){var t=e.target.value;C(t),"defaultRate"===t&&F("")},customRate:w,setCustomRate:F}),Object(o.jsx)(d,{}),Object(o.jsx)(O,{buttonText:"Przelicz!"}),Object(o.jsx)(h,{resultText:S})]})},x=(n(14),function(){return Object(o.jsx)("footer",{className:"footer",children:Object(o.jsx)("p",{className:"footer__copyright",children:"\xa9 2021 Karol Cie\u015bluk"})})});var _=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(u,{title:"Kalkulator walutowy"}),Object(o.jsx)(i,{children:Object(o.jsx)(p,{})}),Object(o.jsx)(x,{})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(_,{})}),document.getElementById("root")),v()}],[[15,1,2]]]);
//# sourceMappingURL=main.5cb8af10.chunk.js.map