(this.webpackJsonpvizitka=this.webpackJsonpvizitka||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.91095094.png"},function(e,t,a){e.exports=a.p+"static/media/myPhoto.1aa460bf.JPG"},function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),i=a.n(c),s=a(1),o=a(2),l=a(4),m=a(3),u=a(5),h=(a(15),a(16),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).fireSwitcher=function(){var e="fire-on "===a.state.switcher?"fire-off ":"fire-on ";a.setState({switcher:e})},a.state={switcher:"fire-on "},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"bonfire "+this.state.switcher+this.props.className,onClick:this.fireSwitcher},r.a.createElement("div",{class:"wood"}),r.a.createElement("div",{className:"fire"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null)),r.a.createElement("div",{className:"smoke"},r.a.createElement("span",{className:"s-0"}),r.a.createElement("span",{className:"s-1"}),r.a.createElement("span",{className:"s-2"}),r.a.createElement("span",{className:"s-3"}),r.a.createElement("span",{className:"s-4"}),r.a.createElement("span",{className:"s-5"}),r.a.createElement("span",{className:"s-6"}),r.a.createElement("span",{className:"s-7"}),r.a.createElement("span",{className:"s-8"}),r.a.createElement("span",{className:"s-9"})))}}]),t}(n.Component)),f=(a(17),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("span",{className:"blick "+this.props.className})}}]),t}(n.Component)),p=(a(18),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).createFireflies=function(){a.firefliesArr=a.firefliesArr.map((function(e,t){var n,c,i,s;return n=Math.trunc(Math.random()*(a.state.width+1)),c=Math.trunc(Math.random()*(a.state.height+1)),s=Math.trunc(10*Math.random()+1),i=Math.trunc(10*Math.random()+1),r.a.createElement("span",{className:"fireflies__firefly",style:{position:"absolute",left:"".concat(n,"px"),top:"".concat(c,"px"),width:"".concat(i,"px"),height:"".concat(i,"px"),animationDelay:"".concat(s,"s")},id:"firefly"+t},r.a.createElement("span",{className:"fireflies__fireflyInsert"}))}))},a.firefliesMove=function(){a.firefliesArr.forEach((function(e,t){var n,r;n=Math.trunc(Math.random()*(a.state.width+1)),r=Math.trunc(Math.random()*(a.state.height+1));var c=document.querySelector("#firefly".concat(t));c.style.left="".concat(n,"px"),c.style.top="".concat(r,"px")}))},a.state={width:window.innerWidth,height:window.innerHeight},a.firefliesArr=[],a.firefliesArr.length=Math.trunc(window.innerWidth/60),a.firefliesArr.fill("el"),a.wrapper=r.a.createRef(),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.setState({wasStarted:!0}),this.createFireflies(),setTimeout(this.firefliesMove,20),setInterval(this.firefliesMove,2e4)}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{className:"fireflies firefliesWrapper",ref:this.wrapper},this.firefliesArr)}}]),t}(n.Component)),d=a(8),b=a.n(d),w=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("aside",{className:"welcome "+this.props.className},r.a.createElement("a",{href:"#",className:"welcome__mainLink"},r.a.createElement("img",{src:b.a,className:"welcome__logo",alt:"logo"})),r.a.createElement("div",{className:"welcome__logoTextContainer"},r.a.createElement("span",{className:"welcome__logoText"},"KungFurher@animevost.com ",r.a.createElement("br",null),' "See you later with glass of vodka"')))}}]),t}(n.Component),v=(n.Component,function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={width:window.innerWidth,height:window.innerHeight},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",(function(){e.setState({width:window.innerWidth,height:window.innerHeight})}))}},{key:"render",value:function(){return r.a.createElement("header",{className:"header"},r.a.createElement(p,{amount:60}),r.a.createElement("span",{className:"header__person"},r.a.createElement(f,{className:"header__blick"})),r.a.createElement(h,{className:"header__bonfire"}))}}]),t}(n.Component)),E=a(9),j=a.n(E),O=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"aboutMe main__aboutMe"},r.a.createElement("article",{className:"aboutMe__content"},r.a.createElement("img",{src:j.a,alt:"I'm scary and I know it",className:"aboutMe__photo"})))}}]),t}(n.Component),N=(n.Component,function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.38bc7ab7.chunk.js.map