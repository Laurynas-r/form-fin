(this["webpackJsonpform-fin"]=this["webpackJsonpform-fin"]||[]).push([[0],{18:function(e,t,r){},19:function(e,t,r){},29:function(e,t,r){},30:function(e,t,r){},31:function(e,t,r){},33:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r(0),c=r.n(n),s=r(9),l=r.n(s),i=(r(18),r(19),r(5)),o=r(4),j=r(11),u=r(10),m=r.n(u),d=(r(29),function(e){var t=e.children;return Object(a.jsx)("button",{className:"sign-up-button",children:t})}),b=function(e){var t=e.suggestion,r=e.placeId,n=e.style;return Object(a.jsx)("div",{style:n,children:t.description},r)},O=r(12),h=(r(30),function(e){var t=e.register,r=(e.label,e.error),n=e.className,c=e.placeholder,s=Object(O.a)(e,["register","label","error","className","placeholder"]),l=function(e){return Object(a.jsx)("div",{className:"error-message",children:e})};return console.log(r),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",Object(i.a)({ref:t,className:n,placeholder:c},s)),r&&"required"===r.type&&l("This field is required"),r&&"maxLength"===r.type&&l("Your input exceed maximum length")]})});r(31);var p=function(){var e=localStorage.getItem("allUsers"),t=JSON.parse(e),r=Object(j.a)(),c=r.register,s=r.handleSubmit,l=r.errors,u=Object(n.useState)(t),O=Object(o.a)(u,2),p=(O[0],O[1]),g=Object(n.useState)(""),f=Object(o.a)(g,2),x=f[0],N=f[1],v=Object(n.useState)({name:"",lastName:"",email:"",location:""}),S=Object(o.a)(v,2),I=S[0],y=S[1];return console.log(I),Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"group",children:Object(a.jsx)("div",{className:"wrapper",children:Object(a.jsxs)("form",{className:"form",onSubmit:s((function(e,t){t.preventDefault(),function(e){var t=JSON.parse(localStorage.getItem("allUsers"))||[];t.push(e),localStorage.setItem("allUsers",JSON.stringify(t))}(e),t.target.reset()})),children:[Object(a.jsx)("h1",{children:"Sign Up"}),Object(a.jsx)(h,{placeholder:"Name",className:"form-input",name:"name",register:c({required:!0,pattern:/^[A-Za-z]+$/i}),error:l.name}),Object(a.jsx)(h,{placeholder:"Last Name",className:"form-input",name:"lastName",register:c({required:!0,pattern:/^[A-Za-z]+$/i}),error:l.name}),Object(a.jsx)(h,{placeholder:"Email",className:"form-input",name:"email",register:c({required:!0,pattern:/^\S+@\S+$/i}),type:"email",error:l.email}),Object(a.jsx)(m.a,{value:x,onChange:N,onSelect:function(e){N(e)},children:function(e){var t=e.getInputProps,r=e.suggestions,n=e.loading,s=e.getSuggestionItemProps;return Object(a.jsxs)("div",{children:[Object(a.jsx)(h,Object(i.a)(Object(i.a)({className:"form-input",name:"location"},t({placeholder:"Address"})),{},{register:c({required:!0}),error:l.location})),Object(a.jsxs)("div",{children:[n&&Object(a.jsx)("div",{children:"Fetching..."}),r.map((function(e){return Object(a.jsx)("div",Object(i.a)(Object(i.a)({},s(e)),{},{children:Object(a.jsx)(b,{suggestion:e},e.placeId)}))}))]})]})}}),Object(a.jsx)(d,{type:"Submit",children:"Sign Up"})]})})}),t?t.map((function(e,r){return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("h3",{children:[e.name," ",e.lastName]}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-sm",children:Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Name"}),Object(a.jsx)("input",{className:"form-control",onChange:function(e){return y({name:e.target.value})},placeholder:e.name})]})})}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Last Name"}),Object(a.jsx)("input",{className:"form-control",onChange:function(e){return y({lastName:e.target.value})},placeholder:e.lastName})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"E-mail"}),Object(a.jsx)("input",{className:"form-control",onChange:function(e){return y({email:e.target.value})},placeholder:e.email})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Address"}),Object(a.jsx)("input",{className:"form-control",onChange:function(e){return y({location:e.target.value})},placeholder:e.location})]}),Object(a.jsx)("button",{type:"button",className:"btn btn-dark",onClick:function(){return function(e){var r=t.indexOf(e),a=JSON.parse(localStorage.getItem("allUsers"));a[r]=I,localStorage.setItem("allUsers",JSON.stringify(a)),p(JSON.parse(localStorage.getItem("allUsers")))}(e)},children:"Update"})]},r)})):Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"No Users"})})]})};var g=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(p,{})})},f=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,34)).then((function(t){var r=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;r(e),a(e),n(e),c(e),s(e)}))};r(32);l.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root")),f()}},[[33,1,2]]]);
//# sourceMappingURL=main.d421442f.chunk.js.map