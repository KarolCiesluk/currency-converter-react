(this["webpackJsonpcurrency-converter-react"]=this["webpackJsonpcurrency-converter-react"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(4),s=n.n(a),i=(n(9),n(10),n(0)),l=function(){return Object(i.jsx)("header",{children:Object(i.jsx)("h1",{className:"header",children:"Kalkulator walutowy"})})},o=(n(12),function(e){var t=e.children;return Object(i.jsx)("main",{className:"main",children:t})}),u=n(2),j=(n(13),function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)("PLN"),s=Object(u.a)(a,2),l=s[0],o=s[1],j=Object(c.useState)("EUR"),b=Object(u.a)(j,2),d=b[0],m=b[1],O=Object(c.useState)("defaultRate"),h=Object(u.a)(O,2),p=h[0],f=h[1],x=Object(c.useState)(""),_=Object(u.a)(x,2),v=_[0],N=_[1],g=Object(c.useState)(""),y=Object(u.a)(g,2),k=y[0],R=y[1],w=[{name:"EUR",rate:4.5654},{name:"NOK",rate:.4588},{name:"USD",rate:3.7746},{name:"PLN",rate:1}],F=function(){var e=n/(v||w.find((function(e){return e.name===d})).rate/w.find((function(e){return e.name===l})).rate);return Number.isInteger(e)?e:e.toFixed(2)};return Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=F();R("".concat(n," ").concat(l," = ").concat(t," ").concat(d))},className:"form",children:[Object(i.jsx)("p",{children:Object(i.jsxs)("label",{children:[Object(i.jsx)("strong",{className:"form__inputDescription form__inputDescription--myAmount",children:"Kwota:"}),Object(i.jsx)("input",{value:n,onChange:function(e){var t=e.target;return r(t.value)},className:"form__inputField form__inputField--myAmount",type:"number",min:"1",step:"0.01",autoFocus:!0,required:!0})]})}),Object(i.jsx)("p",{children:Object(i.jsxs)("label",{children:[Object(i.jsx)("span",{className:"form__inputDescription",children:"Przelicz z:"}),Object(i.jsxs)("select",{value:l,onChange:function(e){var t=e.target,n=l;o(t.value),t.value===d&&m(n)},className:"form__inputField",children:[Object(i.jsx)("option",{value:"EUR",children:"EUR - Euro"}),Object(i.jsx)("option",{value:"NOK",children:"NOK - Korona norweska"}),Object(i.jsx)("option",{value:"USD",children:"USD - Ameryka\u0144ski dolar"}),Object(i.jsx)("option",{value:"PLN",children:"PLN - Polski z\u0142oty"})]})]})}),Object(i.jsx)("p",{children:Object(i.jsxs)("label",{children:[Object(i.jsx)("span",{className:"form__inputDescription",children:"Przelicz na:"}),Object(i.jsxs)("select",{value:d,onChange:function(e){var t=e.target,n=d;m(t.value),t.value===l&&o(n)},className:"form__inputField",children:[Object(i.jsx)("option",{value:"EUR",children:"EUR - Euro"}),Object(i.jsx)("option",{value:"NOK",children:"NOK - Korona norweska"}),Object(i.jsx)("option",{value:"USD",children:"USD - Ameryka\u0144ski dolar"}),Object(i.jsx)("option",{value:"PLN",children:"PLN - Polski z\u0142oty"})]})]})}),Object(i.jsxs)("p",{children:[Object(i.jsx)("label",{htmlFor:"selectRate",className:"form__screenReaderOnly",children:"Ustawienia kursu"}),Object(i.jsxs)("select",{value:p,onChange:function(e){var t=e.target.value;f(t),"defaultRate"===t&&N("")},id:"selectRate",className:"form__inputField form__inputField--select",children:[Object(i.jsx)("option",{value:"defaultRate",children:"Kurs domy\u015blny"}),Object(i.jsx)("option",{value:"customRate",children:"Kurs w\u0142asny"})]}),Object(i.jsx)("label",{htmlFor:"customRate",className:"form__screenReaderOnly",children:"Wysoko\u015b\u0107 kursu"}),Object(i.jsx)("input",{value:v,onChange:function(e){var t=e.target;return N(t.value)},id:"customRate",className:"form__inputField form__inputField--customRate",type:"number",min:"0.01",step:"0.0001",disabled:"defaultRate"===p,required:!0})]}),Object(i.jsxs)("p",{className:"form__linkParagraph",children:[Object(i.jsx)("a",{className:"form__link",href:"https://www.money.pl/pieniadze/nbp/srednie/",target:"_blank",title:"Kursy walut money.pl",rel:"noreferrer noopener",children:"Zobacz tabel\u0119 kurs\xf3w NBP"})," (otwiera si\u0119 w nowej karcie)"]}),Object(i.jsx)("p",{children:Object(i.jsx)("button",{className:"form__button",children:"Przelicz!"})}),Object(i.jsx)("p",{className:"form__result",children:k})]})}),b=(n(14),function(){return Object(i.jsx)("footer",{className:"footer",children:Object(i.jsx)("p",{className:"footer__copyright",children:"\xa9 2021 Karol Cie\u015bluk"})})});var d=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(l,{}),Object(i.jsx)(o,{children:Object(i.jsx)(j,{})}),Object(i.jsx)(b,{})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(d,{})}),document.getElementById("root")),m()}],[[15,1,2]]]);
//# sourceMappingURL=main.3770a7c3.chunk.js.map