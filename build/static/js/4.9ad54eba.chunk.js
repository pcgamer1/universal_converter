(this.webpackJsonpconverter=this.webpackJsonpconverter||[]).push([[4],{155:function(e,t){e.exports={LOCAL_BASE_URL:"http://localhost:3001",BASE_URL:"http://converterbackend.herokuapp.com"}},280:function(e,t,a){"use strict";a.r(t);var c=a(78),r=a(0),n=a(276),s=a(112),l=a(113),o=a(271),i=a(50),u=a(273),j=a(74),b=a(143),d=a.n(b),O=a(144),p=a(174),h=a(145),f=a.n(h),m=a(155);f.a.defaults.baseURL=m.BASE_URL;var x=function(){var e=Object(O.a)(d.a.mark((function e(t){var a,c,r,n,s,l,o,i,u,b,O,h,m,x,g,v=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=v.length>1&&void 0!==v[1]?v[1]:{},c=a.onSuccess,r=void 0===c?function(e){return e}:c,n=a.onFailure,s=void 0===n?function(e){return e}:n,l=a.secure,void 0!==l&&l,a.defaultData,o=a.headers,i=Object(p.a)(a,["onSuccess","onFailure","secure","defaultData","headers"]),e.prev=2,e.next=5,f()(t,Object(j.a)({headers:Object(j.a)({},o)},i));case 5:return u=e.sent,b=u.data,O=u.status,e.next=9,r(b);case 9:return e.abrupt("return",{data:b,status:O,error:void 0,loading:!1});case 12:if(e.prev=12,e.t0=e.catch(2),!e.t0.response){e.next=19;break}return h=e.t0.response,m=h.data,x=h.status,e.next=18,s(m);case 18:return e.abrupt("return",{data:void 0,status:x,error:m,loading:!1});case 19:if(!e.t0.request){e.next=22;break}return g={message:"error in request setup"},e.abrupt("return",{data:void 0,status:0,error:g,loading:!1});case 22:throw Error(e.t0);case 23:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}(),g={loading:!0,data:void 0,error:null,status:0},v=a(279),y=a(282),k=a(278),w=a(277),C=a(275),S=a(281),L=a(274),U=a(283),A=a(284),R="input",E="MULTIPLE_CHECKBOX",F="input-number",I="select",D="month-picker",T="file-drag-drop",z="radio",N="switch",q="date",B=a(6),P=v.a.Option,_=y.a.Group,K=function(e,t,a){var c="";return a[t]&&(c=c.concat(a[t])),e.forEach((function(e){a[e]&&(c=(c=c.concat(" ")).concat(a[e]))})),c},J={name:"file",action:function(e){return new Promise((function(t,a){setTimeout((function(){var a=new FileReader;a.addEventListener("load",(function(){t(a.result)}),!1),e&&a.readAsDataURL(e)}),1e3)}))}},G=function(e){var t=e.key,a=e.rules,c=e.kwargs,r=e.type,s=e.others,l=e.customLabel,o=e.noLabel,i={};switch(s&&s.formOptions&&(i=s.formOptions),r){case R:return Object(B.jsx)(n.a.Item,Object(j.a)(Object(j.a)({label:o?null:l||t.charAt(0).toUpperCase()+t.slice(1),name:t,rules:a},i),{},{children:Object(B.jsx)(k.a,Object(j.a)({size:"middle"},c))}),t);case F:return Object(B.jsx)(n.a.Item,Object(j.a)(Object(j.a)({label:o?null:l||t.charAt(0).toUpperCase()+t.slice(1),name:t,rules:a},i),{},{children:Object(B.jsx)(w.a,Object(j.a)({size:"middle"},c))}),t);case T:return Object(B.jsx)(n.a.Item,Object(j.a)(Object(j.a)({label:o?null:l||t.charAt(0).toUpperCase()+t.slice(1),name:t,rules:a},i),{},{children:Object(B.jsxs)(C.a.Dragger,Object(j.a)(Object(j.a)(Object(j.a)({},c),J),{},{style:{maxHeight:"75px",width:"150px"},children:[Object(B.jsx)("p",{className:"ant-upload-drag-icon",children:Object(B.jsx)(A.a,{})}),s?Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("p",{className:"ant-upload-text p-1",children:s.p1}),Object(B.jsx)("p",{className:"ant-upload-hint p-1",children:s.p2})]}):null]}))}),t);case I:return Object(B.jsx)(n.a.Item,Object(j.a)(Object(j.a)({shouldUpdate:!0,label:o?null:l||t.charAt(0).toUpperCase()+t.slice(1),name:t,rules:a},i),{},{children:Object(B.jsx)(v.a,Object(j.a)(Object(j.a)({},c),{},{children:s.selectOptions.map((function(e,t){return Object(B.jsxs)(P,{search:s.searchKeys?K(s.searchKeys,s.customTitle,e):e[s.customTitle],value:e.value||e[s.key]||e,children:[s.customTitle?Object(B.jsx)("text",{style:{fontSize:13,fontWeight:"bold"},children:e[s.customTitle]}):e.label||e[s.key]||e,s.dataKeys?Object(B.jsx)("div",{className:"row",style:{flexWrap:"wrap"},children:s.dataKeys.map((function(t){return Object(B.jsx)("text",{style:{fontSize:11,marginLeft:5,marginRight:5},children:e[t]})}))}):null]},t.toString())}))}))}),t);case z:return Object(B.jsx)(n.a.Item,Object(j.a)(Object(j.a)({label:o?null:l||t.charAt(0).toUpperCase()+t.slice(1),name:t,rules:a},i),{},{children:Object(B.jsx)(S.a.Group,{value:"Ggg",children:s.radioOptions.map((function(e){return Object(B.jsx)(S.a,{value:e.value,children:e.label},e.value)}))})}),t);case q:return Object(B.jsx)(n.a.Item,Object(j.a)(Object(j.a)({},i),{},{label:o?null:l||t.charAt(0).toUpperCase()+t.slice(1),name:t,rules:a,children:Object(B.jsx)(L.a,{onChange:function(e){return console.log(e)},style:s&&s.style?s.style:null})}),t);case D:return Object(B.jsx)(n.a.Item,Object(j.a)(Object(j.a)({},i),{},{label:o?null:l||t.charAt(0).toUpperCase()+t.slice(1),name:t,rules:a,children:Object(B.jsx)(L.a,{onChange:function(e){return console.log(e)},picker:"month"})}),t);case E:return Object(B.jsx)(n.a.Item,Object(j.a)(Object(j.a)({label:o?null:l||t.charAt(0).toUpperCase()+t.slice(1),name:t,rules:a},i),{},{children:Object(B.jsx)(_,{onChange:s.onChange,children:s.checkOptions.map((function(e){return Object(B.jsx)(y.a,{value:e.value,children:e.label})}))})}),t);case N:return Object(B.jsx)(n.a.Item,Object(j.a)(Object(j.a)({valuePropName:"checked"},i),{},{label:o?null:l||t.charAt(0).toUpperCase()+t.slice(1),name:t,rules:a,children:Object(B.jsx)(U.a,Object(j.a)({},c))}),t);default:return null}};t.default=function(){var e=Object(r.useState)([]),t=Object(c.a)(e,2),a=t[0],b=t[1],h=Object(r.useState)([]),v=Object(c.a)(h,2),y=v[0],k=v[1],w=Object(r.useState)(),C=Object(c.a)(w,2),S=(C[0],C[1],Object(r.useState)()),L=Object(c.a)(S,2),U=L[0],A=L[1],R=Object(r.useState)(),E=Object(c.a)(R,2),F=E[0],D=E[1],z=Object(r.useState)(),N=Object(c.a)(z,2),q=N[0],P=N[1],_=Object(r.useState)(!0),K=Object(c.a)(_,2),J=K[0],H=K[1],M=Object(r.useState)(!1),W=Object(c.a)(M,2),X=W[0],Q=W[1],V=n.a.useForm(),Y=Object(c.a)(V,1)[0],Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.defaultData,n=Object(p.a)(t,["defaultData"]),s=Object(r.useState)(g),l=Object(c.a)(s,2),o=l[0],i=l[1],u=Object(r.useState)(0),b=Object(c.a)(u,2),h=b[0],f=b[1],m=function(){return f(h+1)},v=JSON.stringify(n);return Object(r.useEffect)((function(){i(g),function(){var t=Object(O.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i({data:void 0,status:200,error:void 0,loading:!0}),a&&i({data:a,status:200,error:void 0,loading:!1}),t.t0=i,t.next=5,x(e,n);case 5:t.t1=t.sent,(0,t.t0)(t.t1);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()().then()}),[e,v,h]),Object(j.a)(Object(j.a)({},o),{},{reload:m})}("/mapping",{}).data;Object(r.useEffect)((function(){Z&&(console.log(Z),b(Object.keys(Z)))}),[Z]),Object(r.useEffect)((function(){U&&(console.log(Object.keys(Z[U])),k(Object.keys(Z[U])))}),[U]);var $={backgroundColor:"#a0d911",color:"white",opacity:J?0:1,transition:"opacity 0.3s",width:"85px",paddingLeft:"0px",paddingRight:"0px"};return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("br",{})," ",Object(B.jsx)("br",{}),Object(B.jsxs)(s.a,{children:[Object(B.jsx)(l.a,{span:9}),Object(B.jsx)(l.a,{span:5,children:Object(B.jsxs)(n.a,{requiredMark:!1,onFinish:function(e){e.file=e.file.file.originFileObj;var t=new FormData;t.append("file",e.file),f.a.defaults.baseURL=m.BASE_URL,Q(!0),f.a.post("/converter",t,{params:{type:"string",format:e.from,convertTo:e.to}}).then((function(t){console.log(t.data.data),"openapi3"==e.to?P(t.data.data):P(JSON.stringify(t.data.data)),Q(!1),H(!1)}))},form:Y,children:[Object(B.jsx)("br",{}),G({key:"from",rules:[{required:!0,message:"Please select your input format!"}],kwargs:{placeholder:"Select",onChange:function(e){A(e)},size:"middle"},type:I,others:{selectOptions:a},customLabel:"From"}),Object(B.jsx)("br",{}),G({key:"to",rules:[{required:!0,message:"Please select your input format!"}],kwargs:{placeholder:"Select",size:"middle",onChange:function(e){D(e)}},type:I,others:{selectOptions:y},customLabel:"To"}),Object(B.jsx)("br",{}),G({key:"file",rules:[{required:!0,message:"Please upload your file!"}],kwargs:{onChange:function(e){var t=e.file.status;"uploading"!==t&&console.log(e.file,e.fileList),"done"===t?(o.b.success("".concat(e.file.name," file uploaded successfully.")),Q(!1)):"error"===t?o.b.error("".concat(e.file.name," file upload failed.")):Q(!0)},size:"middle"},type:T,others:null,customLabel:"Document"}),Object(B.jsx)("br",{}),Object(B.jsxs)(s.a,{children:[Object(B.jsx)(l.a,{span:3}),Object(B.jsx)(i.a,{type:"primary",htmlType:"submit",style:{width:"85px"},children:"Convert"}),Object(B.jsx)(l.a,{span:4}),Object(B.jsx)(i.a,{type:"primary",onClick:function(){Y.resetFields()},style:{width:"85px"},children:"Reset"})]}),Object(B.jsx)("br",{}),X?Object(B.jsxs)(s.a,{children:[Object(B.jsx)(l.a,{span:12}),Object(B.jsx)(u.a,{})]}):Object(B.jsxs)(s.a,{children:[Object(B.jsx)(l.a,{span:9}),Object(B.jsx)(i.a,{style:$,onClick:function(){var e=new Blob([String(q)],{type:"text/plain;charset=utf-8"}),t=(window.URL||window.webkitURL).createObjectURL(e),a=document.createElement("a");a.download="".concat(U,"-").concat(F),a.href=t,document.body.appendChild(a),a.click(),document.body.removeChild(a),H(!0),Y.resetFields()},children:"Download"})]})]})})]})]})}}}]);
//# sourceMappingURL=4.9ad54eba.chunk.js.map