(this.webpackJsonpviews=this.webpackJsonpviews||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){},53:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(22),r=c.n(s),i=(c(28),c(3)),l=(c.p,c(29),c(12)),o=c.n(l),d=c(23),j=c(5),b=c.n(j),u=c(0);var m=function(e){return Object(u.jsxs)("td",{className:"col-4 border",children:[Object(u.jsxs)("div",{className:"text-center",children:[Object(u.jsx)("span",{className:e.args?"text-success":"text-muted",style:{fontWeight:"bold",fontSize:"x-large"},children:void 0!=e.args?e.args.productName:""}),Object(u.jsx)("br",{}),Object(u.jsxs)("span",{className:e.args?e.args.vendingQuantity>25?"text-primary":"text-danger":"text-muted",children:["Available Units: ",void 0!=e.args?e.args.vendingQuantity:parseInt(0)]}),Object(u.jsx)("br",{})]}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-6 text-left",children:Object(u.jsxs)("span",{className:"padding-2px bg-white",children:["$ ",void 0!=e.args?parseFloat(e.args.price).toPrecision(3):parseFloat(0).toPrecision(3)]})}),Object(u.jsx)("div",{className:"col-6 text-right",children:Object(u.jsx)("span",{className:"padding-2px bg-white",children:e.cell})})]})]},e.index)};var O=function(e){if(void 0!=e.args){var t=Object.keys(e.args);return t.map((function(c,a){if(a%3==0)return Object(u.jsxs)("tr",{className:"border",children:[Object(u.jsx)(m,{args:e.args[t[a]],index:a,cell:t[a]}),Object(u.jsx)(m,{args:e.args[t[a+1]],index:a+1,cell:t[a+1]}),Object(u.jsx)(m,{args:e.args[t[a+2]],index:a+2,cell:t[a+2]})]},a)}))}return Object(u.jsx)("tr",{})};var h=function(e){return Object(u.jsx)("div",{className:"keyboard-outer-div",children:Object(u.jsx)("table",{className:"table",children:Object(u.jsxs)("tbody",{children:[Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:"keyboard-border",onClick:e.onClick,children:"A"}),Object(u.jsx)("td",{className:"keyboard-border",onClick:e.onClick,children:"1"})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:"keyboard-border",onClick:e.onClick,children:"B"}),Object(u.jsx)("td",{className:"keyboard-border",onClick:e.onClick,children:"2"})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:"keyboard-border",onClick:e.onClick,children:"C"}),Object(u.jsx)("td",{className:"keyboard-border",onClick:e.onClick,children:"3"})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:"keyboard-border",onClick:e.onClick,children:"D"}),Object(u.jsx)("td",{className:"keyboard-border",onClick:e.onClick,children:"4"})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:"keyboard-border",onClick:e.onClick,children:"E"}),Object(u.jsx)("td",{className:"keyboard-border",onClick:e.onClick,children:"5"})]})]})})})};var x=function(e){return Object(u.jsx)("table",{className:"table-bordered",children:Object(u.jsx)("tbody",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:"padding-7px",onClick:e.onClick,children:"$ 1.00"}),Object(u.jsx)("td",{className:"padding-7px",onClick:e.onClick,children:"$ 0.25"}),Object(u.jsx)("td",{className:"padding-7px",onClick:e.onClick,children:"$ 0.10"}),Object(u.jsx)("td",{className:"padding-7px",onClick:e.onClick,children:"$ 0.01"})]})})})},g=c(6),v=c(7);var p=function(e){var t="http://localhost:5001/",c=Object(a.useState)([]),n=Object(i.a)(c,2),s=n[0],r=n[1],l=Object(a.useState)(),j=Object(i.a)(l,2),m=j[0],p=j[1],f=Object(a.useState)("Welcome"),N=Object(i.a)(f,2),k=N[0],y=N[1],C=Object(a.useState)(0),S=Object(i.a)(C,2),w=S[0],I=S[1],P=Object(a.useState)(""),q=Object(i.a)(P,2),F=q[0],D=q[1],Q=Object(a.useState)(),A=Object(i.a)(Q,2),E=A[0],$=A[1],z=Object(a.useState)(),L=Object(i.a)(z,2),M=L[0],T=L[1],U=Object(a.useState)(),B=Object(i.a)(U,2),W=B[0],J=B[1];return Object(a.useEffect)((function(){console.log(t+"vending/getStatus/"),b.a.get(t+"vending/getStatus/").then((function(e){return r(e.data.results)}))}),[,M]),Object(a.useEffect)((function(){for(var e={},t=Math.max(s.length,12),c=0,a=64,n=0;c<t;){c%3===0&&(a++,n=1),e[String.fromCharCode(a)+String(n)]=s[c],c++,n++}p(e)}),[s]),Object(a.useEffect)((function(){2==F.length&&(void 0==m[F]?y(Object(u.jsx)("marquee",{children:"Incorrect Selection"})):w<m[F].price?y(Object(u.jsx)("marquee",{children:"Insert more cash"})):1>m[F].vendingQuantity?y(Object(u.jsx)("marquee",{children:"Out of Stock"})):b.a.post(t+"vending/purchased/",{sodaName:m[F].productName,qty:1,amountPaid:Number(parseFloat(m[F].price).toPrecision(3))}).then((function(e){e.data.success?($(Number(parseFloat(w-m[F].price).toPrecision(3))),y(Object(u.jsx)("marquee",{children:"Collect Product"})),T(JSON.stringify(m[F]))):($(w),y(Object(u.jsx)("marquee",{children:"There was a problem with purchase"})))})).catch((function(e){$(w),console.log(e),y(Object(u.jsx)("marquee",{children:"There was a problem with purchase"}))})),D(""))}),[F]),Object(a.useEffect)((function(){w>0&&y("$ "+w)}),[w]),Object(a.useEffect)(Object(d.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0==M){e.next=7;break}return t=new Blob([M],{type:"application/json"}),e.next=5,URL.createObjectURL(t);case 5:c=e.sent,J(Object(u.jsx)("a",{className:"btn-primary",href:c,style:{fontWeight:"bolder",fontSize:"large"},download:!0,ref:function(e){I(0)},onClick:function(){D(""),y("Welcome"),T(),J()},children:"Download"}));case 7:case"end":return e.stop()}}),e)}))),[M]),Object(u.jsxs)("div",{className:"outer-div container p-3 my-3 bg-dark border",children:[Object(u.jsxs)("div",{className:"machine-header row justify-content-center align-content-center jumbotron",children:[Object(u.jsxs)("div",{className:"machine-header-inner h1 justify-content-center align-content-center",children:[Object(u.jsx)("div",{className:"navbar-brand",children:Object(u.jsx)("img",{src:"./logo.png"})}),"Virtual Soda"]}),Object(u.jsx)("div",{className:"machine-lock",children:Object(u.jsx)(g.a,{icon:v.a,size:"2x",onClick:function(t){e.toggleAdmin(!0)}})})]}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"container col-7 racks-table-container",children:[Object(u.jsx)("table",{className:"racks-table table",children:Object(u.jsx)("tbody",{children:Object(u.jsx)(O,{args:m})})}),Object(u.jsx)("div",{children:W})]}),Object(u.jsxs)("div",{className:"container text-primary col-3 text-center justify-content-center align-items-center font-weight-bold",children:[Object(u.jsx)("div",{className:"display-board row text-dark border justify-content-center align-items-center",children:k}),Object(u.jsx)("br",{}),Object(u.jsx)("div",{className:"row justify-content-center align-items-center",children:Object(u.jsx)(x,{onClick:function(e){e.preventDefault(),I((Number.parseFloat(w)+Number.parseFloat(e.target.textContent.slice(2))).toPrecision(3))}})}),Object(u.jsx)("br",{}),Object(u.jsx)("div",{className:"row justify-content-center align-items-center",children:Object(u.jsx)(h,{onClick:function(e){e.preventDefault(),D(F+e.target.textContent),y(F+e.target.textContent)}})}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:"row border",children:[void 0!=E&&0!=E?Object(u.jsxs)("div",{className:"col-6 change-div",children:["$ ",E]}):Object(u.jsx)("div",{className:"col-6 change-div"}),Object(u.jsx)("div",{className:"col-6 collect-change",children:Object(u.jsx)("button",{className:"padding-2px btn-sm",onClick:function(e){e.preventDefault(),$(),I(0)},children:"Collect Change"})})]})]})]})]})},f=c(9);var N=function(e){var t=Object(a.useState)(),c=Object(i.a)(t,2),n=c[0],s=c[1],r=Object(a.useState)(),l=Object(i.a)(r,2),o=l[0],d=l[1],j=Object(a.useState)(),b=Object(i.a)(j,2),m=b[0],O=b[1],h=Object(a.useState)(),x=Object(i.a)(h,2),g=x[0],v=x[1];return Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"modal fade",id:"exampleModal",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(u.jsx)("div",{className:"modal-dialog",role:"document",children:Object(u.jsx)("div",{className:"modal-content bg-dark",children:Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.addItem(n,o,m,g)},children:[Object(u.jsxs)("div",{className:"modal-header",children:[Object(u.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Add New Soda"}),Object(u.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:Object(u.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(u.jsxs)("div",{className:"modal-body p-3",children:[Object(u.jsxs)("div",{className:"form-row",children:[Object(u.jsxs)("div",{className:"form-group col",children:[Object(u.jsx)("label",{children:"Soda Name"}),Object(u.jsx)("input",{required:!0,className:"form-control",onChange:function(e){return s(e.target.value)}})]}),Object(u.jsxs)("div",{className:"form-group col",children:[Object(u.jsx)("label",{children:"Description"}),Object(u.jsx)("input",{required:!0,className:"form-control",onChange:function(e){return d(e.target.value)}})]})]}),Object(u.jsxs)("div",{className:"form-row",children:[Object(u.jsxs)("div",{className:"form-group col",children:[Object(u.jsx)("label",{children:"Price ($)"}),Object(u.jsx)("input",{required:!0,type:"number",min:"0",step:"0.01",className:"form-control",onChange:function(e){return O(parseFloat(e.target.value).toPrecision(3))}})]}),Object(u.jsxs)("div",{className:"form-group col",children:[Object(u.jsx)("label",{children:"Quantity"}),Object(u.jsx)("input",{required:!0,type:"number",className:"form-control",onChange:function(e){return v(parseInt(e.target.value))}})]})]})]}),Object(u.jsxs)("div",{className:"modal-footer",children:[Object(u.jsx)("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal",children:"Close"}),Object(u.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Save changes"})]})]})})})})})};var k=function(e){var t="http://localhost:5001/",c=Object(a.useState)([]),n=Object(i.a)(c,2),s=n[0],r=n[1],l=Object(a.useState)([]),o=Object(i.a)(l,2),d=o[0],j=o[1],m=Object(a.useState)(!1),O=Object(i.a)(m,2),h=O[0],x=O[1],p=Object(a.useState)(!1),k=Object(i.a)(p,2),y=k[0],C=k[1];return Object(a.useEffect)((function(){b.a.get(t+"admin/getStatus/").then((function(e){var t=e.data.results;r(t)}))}),[,h]),Object(a.useEffect)((function(){b.a.get(t+"admin/getStatus/").then((function(e){var t=e.data.results;j(t)}))}),[,h]),Object(u.jsxs)("div",{className:"container p-3 my-3 bg-dark border outer-div",children:[Object(u.jsxs)("div",{className:"machine-header row justify-content-center align-content-center jumbotron",children:[Object(u.jsx)("div",{className:"machine-header-inner h1 justify-content-center align-content-center",children:"Virtual Soda"}),Object(u.jsx)("div",{className:"machine-lock",children:Object(u.jsx)(g.a,{icon:v.b,size:"2x",onClick:function(t){e.toggleAdmin(!1)}})})]}),Object(u.jsx)("div",{className:"row text-light",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"row admin-panel-table-header",children:[Object(u.jsx)("div",{className:"col-3 border",children:"Soda Name"}),Object(u.jsx)("div",{className:"col-2 border",children:"Price ($)"}),Object(u.jsx)("div",{className:"col-3 border",children:"Vending Units Available"}),Object(u.jsx)("div",{className:"col-2 border",children:"Change Quantity"}),Object(u.jsx)("div",{className:"col-2 border",children:"Total Units"})]}),(void 0!=d?Object.keys(d):[]).map((function(e,c){if(void 0!=d[e]&&void 0!=s[e])return Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)(g.a,{className:"col-1 padding-2px",border:!0,style:{height:"2em"},icon:v.e,onClick:function(c){var a;a=d[e].productName,b.a.post(t+"admin/deleteSoda/",{sodaName:a}).then((function(e){console.log(e),x(!h)})).catch((function(e){return console.log(e)}))}}),Object(u.jsx)("div",{className:"col-2 border bg-dimgrey",children:d[e].productName}),Object(u.jsx)("div",{className:"col-2 border p-0",children:Object(u.jsx)("input",{className:"width-100",type:"number",min:"0",step:"0.01",value:d[e].price,onChange:function(t){if(!1===isNaN(t.target.value)&&void 0!=t.target.value){var c=Object(f.a)({},d);c[e].price=Number(parseFloat(t.target.value).toPrecision(3))||0,j(c)}}})}),Object(u.jsx)("div",{className:"col-3 border bg-dimgrey",style:{background:"dimgrey"},children:s[e].vendingQuantity}),Object(u.jsx)("div",{className:"col-2 border p-0",children:Object(u.jsx)("input",{type:"number",className:"width-100",value:d[e].addStock||0,onChange:function(t){if(!1===isNaN(t.target.value)&&void 0!=t.target.value){var c=Object(f.a)({},d);c[e].vendingQuantity=parseInt(s[e].vendingQuantity)+(parseInt(t.target.value)||0),c[e].addStock=parseInt(t.target.value),j(c)}}})}),Object(u.jsx)("div",{className:"col-2 border text-dark admin-panel-vending-total",children:parseInt(d[e].vendingQuantity)})]},c)})),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:"row justify-content-around",children:[Object(u.jsx)(g.a,{icon:v.d,size:"2x",border:!0,className:"col-2",onClick:function(e){!function(e){e.preventDefault(),b.a.post(t+"admin/updateInventory/",{sodaCollection:Object.values(d)}).then((function(e){console.log(e),x(!h)})).catch((function(e){return console.log(e)}))}(e)}}),Object(u.jsx)(g.a,{icon:v.c,size:"2x",border:!0,"data-toggle":"modal","data-target":"#exampleModal",className:"col-2",onClick:function(e){e.preventDefault(),function(e){e.preventDefault(),C(!0)}(e)}})]}),y&&Object(u.jsx)(N,{addItem:function(e,c,a,n){var s=Object(f.a)({},d),r=d.length;s[r]={productName:e,description:c,price:a,vendingQuantity:n},b.a.post(t+"admin/updateInventory/",{sodaCollection:[s[r]]}).then((function(e){console.log(e),x(!h)})).catch((function(e){return console.log(e)})),C(!1),document.querySelector("div.modal-backdrop").remove()}})]})})]})};var y=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),c=t[0],n=t[1],s=function(e){n(e),console.log(e)};return Object(u.jsxs)("div",{className:"App",children:[c&&Object(u.jsx)(k,{toggleAdmin:s}),!c&&Object(u.jsx)(p,{toggleAdmin:s})]})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,54)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root")),C()}},[[53,1,2]]]);
//# sourceMappingURL=main.180922e7.chunk.js.map