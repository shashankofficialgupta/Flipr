(this.webpackJsonpflipr=this.webpackJsonpflipr||[]).push([[0],{43:function(e,t,c){},44:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},73:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(0),s=c.n(n),r=c(12),i=c.n(r),l=(c(43),c(44),c(8)),j=c(30),d=c(31),o=c(37),u=c(36),b=c(32),O=c.n(b),h=(c(63),c(18)),x=c(33),m=c(77),N=c(76),f=c.p+"static/media/destination.5336278d.svg",p=c.p+"static/media/warehouse.147c9c0b.svg",D=(c(64),function(e){return Object(a.jsx)(s.a.Fragment,{children:Object(a.jsxs)(m.a,{className:"sideLeftTableCard",children:[Object(a.jsx)("img",{src:f,alt:"FliprBrand",className:"FliprTableNav"}),Object(a.jsx)("div",{class:"vl",children:e.tempData&&e.tempData.scan.map((function(e,t){return Object(a.jsxs)(N.a,{className:"rowPartsOne",children:[Object(a.jsx)("hr",{className:"horizontalLineOne"}),Object(a.jsxs)("span",{className:"rowPartsspan",children:[e.status_detail,"\xa0\xa0\xa0\xa0\xa0",e.time.substring(0,10).split("-").reverse().join("-"),"\xa0\xa0\xa0",e.time.substring(11)]})]},t)}))}),Object(a.jsx)("img",{src:p,alt:"FliprBrand",className:"FliprTableNav"})]})})}),v=(c(65),function(e){var t=Object(n.useState)([]),c=Object(h.a)(t,2),r=c[0],i=c[1],l=Object(n.useState)(0),j=Object(h.a)(l,2),d=j[0],o=j[1],u=Object(n.useState)(!1),b=Object(h.a)(u,2),O=b[0],m=b[1];return Object(a.jsxs)(s.a.Fragment,{children:[Object(a.jsxs)(x.a,{responsive:!0,children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"AWB NUMBER"}),Object(a.jsx)("th",{children:"TRANSPORTER"}),Object(a.jsx)("th",{children:"SOURCE"}),Object(a.jsx)("th",{children:"DESTINATION"}),Object(a.jsx)("th",{children:"BRAND"}),Object(a.jsx)("th",{children:"START DATE"}),Object(a.jsx)("th",{children:"ETD"}),Object(a.jsx)("th",{children:"STATUS"})]})}),Object(a.jsx)("tbody",{children:e.data&&e.data.map((function(t,c){return Object(a.jsxs)("tr",{onClick:function(){!function(t){var c=e.data.filter((function(e){return e.awbno===t}));i(c),m(!0)}(t.awbno),o(c)},className:d===c?"active":"",children:[Object(a.jsx)("td",{children:t.awbno}),Object(a.jsx)("td",{children:t.carrier}),Object(a.jsx)("td",{children:t.from}),Object(a.jsx)("td",{children:t.to}),Object(a.jsx)("td",{children:t.carrier}),Object(a.jsx)("td",{children:t.pickup_date&&t.pickup_date.substring(0,10)}),Object(a.jsx)("td",{children:t.extra_fields&&t.extra_fields.expected_delivery_date.substring(0,10)}),Object(a.jsx)("td",{className:"tableCurrentStatus",children:t.current_status})]},c)}))})]}),O&&Object(a.jsx)(D,{tempData:r[0]})]})}),g=function(e){Object(o.a)(c,e);var t=Object(u.a)(c);function c(e){var a;return Object(j.a)(this,c),(a=t.call(this,e)).handleFilter=function(e){var t;t=a.state.data.filter((function(t){return t.current_status_code===e})),a.setState({filteredData:t})},a.state={OOD:0,DEX:0,DEL:0,INT:0,NFI:0,data:[],filteredData:[],className:"DEL"},a}return Object(d.a)(c,[{key:"componentDidMount",value:function(){var e=this;O.a.post("https://f0ztti2nsk.execute-api.ap-south-1.amazonaws.com/v1/consignment/fetch",{email:"shashank.guptags02@gmail.com"},{headers:{Authorization:"Bearer tTU3gFVUdP"}}).then((function(t){e.setState({data:t.data},(function(){return e.handleFilter("DEL")}));for(var c=0;c<t.data.length;c++)switch(t.data[c].current_status_code){case"OOD":e.setState((function(e){return Object(l.a)(Object(l.a)({},e),{},{OOD:e.OOD+1})}));break;case"DEL":e.setState((function(e){return Object(l.a)(Object(l.a)({},e),{},{DEL:e.DEL+1})}));break;case"INT":e.setState((function(e){return Object(l.a)(Object(l.a)({},e),{},{INT:e.INT+1})}));break;case"DEX":e.setState((function(e){return Object(l.a)(Object(l.a)({},e),{},{DEX:e.DEX+1})}));break;case"NFI":e.setState((function(e){return Object(l.a)(Object(l.a)({},e),{},{NFI:e.NFI+1})}));break;default:console.log("gh",c)}}))}},{key:"render",value:function(){var e=this,t=this.state,c=t.OOD,n=t.DEL,r=t.INT,i=t.DEX,l=t.NFI,j=t.className;return Object(a.jsxs)(s.a.Fragment,{children:[Object(a.jsxs)("div",{className:"counterBoard",children:[Object(a.jsxs)("div",{className:"DEL"===j?"counter_card click":"counter_card",onClick:function(){e.handleFilter("DEL"),e.setState({className:"DEL"})},children:[Object(a.jsx)("span",{className:"counterType",children:"DEL"}),Object(a.jsx)("span",{className:"counterCount",children:n})]}),Object(a.jsxs)("div",{className:"INT"===j?"counter_card click":"counter_card",onClick:function(){e.handleFilter("INT"),e.setState({className:"INT"})},children:[Object(a.jsx)("span",{className:"counterType",children:"INT"}),Object(a.jsx)("span",{className:"counterCount",children:r})]}),Object(a.jsxs)("div",{className:"OOD"===j?"counter_card click":"counter_card",onClick:function(){e.handleFilter("OOD"),e.setState({className:"OOD"})},children:[Object(a.jsx)("span",{className:"counterType",children:"OOD"}),Object(a.jsx)("span",{className:"counterCount",children:c||0})]}),Object(a.jsxs)("div",{className:"DEX"===j?"counter_card click":"counter_card",onClick:function(){e.handleFilter("DEX"),e.setState({className:"DEX"})},children:[Object(a.jsx)("span",{className:"counterType",children:"DEX"}),Object(a.jsx)("span",{className:"counterCount",children:i})]}),Object(a.jsxs)("div",{className:"NFI"===j?"counter_card click":"counter_card",onClick:function(){e.handleFilter("NFI"),e.setState({className:"NFI"})},children:[Object(a.jsx)("span",{className:"counterType",children:"NFI"}),Object(a.jsx)("span",{className:"counterCount",children:l})]})]}),Object(a.jsx)(v,{data:this.state.filteredData})]})}}]),c}(n.Component),F=c(21),T=c(13),k=c.p+"static/media/logo.60097ea2.svg",E=c.p+"static/media/profile.2fbd2bc9.svg";c(66);function S(){return Object(a.jsx)(s.a.Fragment,{children:Object(a.jsxs)(F.a,{className:"Nav",expand:"lg",children:[Object(a.jsxs)(F.a.Brand,{href:"/",style:{color:"white"},children:[Object(a.jsx)("img",{src:k,alt:"FliprBrand",className:"FliprLogoNav"}),Object(a.jsx)("span",{className:"spanNavbarBrand",children:"Intugine"})]}),Object(a.jsxs)(T.a,{id:"FlipNav",children:[Object(a.jsx)(T.a.Link,{href:"#",style:{textDecoration:"none"},children:"Home"}),Object(a.jsx)(T.a.Link,{href:"#",style:{textDecoration:"none"},children:"Brands"}),Object(a.jsx)(T.a.Link,{href:"#",style:{textDecoration:"none"},children:"Transporters"}),Object(a.jsxs)(T.a.Link,{href:"#",className:"lastNavLink",children:[Object(a.jsx)("img",{src:E,alt:"FliprProfile",className:"FliprProfileLogoNav"}),Object(a.jsx)("i",{class:"fa fa-angle-down","aria-hidden":"true"})]})]})]})})}var I=function(){return Object(a.jsxs)(s.a.Fragment,{children:[Object(a.jsx)(S,{}),Object(a.jsx)(g,{})]})},L=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,78)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(I,{})}),document.getElementById("root")),L()}},[[73,1,2]]]);
//# sourceMappingURL=main.c5cecd9d.chunk.js.map