"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{355:function(t,n,r){r.d(n,{LE:function(){return u},QV:function(){return i},Xh:function(){return f},pG:function(){return s}});var e=r(861),c=r(687),a=r.n(c),o=function(){var t=(0,e.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.themoviedb.org/3","731f4a410992078035fa504a629d03c1",t.next=4,fetch("".concat("https://api.themoviedb.org/3","/trending/all/day?api_key=").concat("731f4a410992078035fa504a629d03c1","&page=1")).then((function(t){return t.ok?t.json():console.log(" Error ".concat(t.status))})).then((function(t){return t.results})).catch((function(t){return console.log("Error ".concat(t.status))}));case 4:return n=t.sent,t.abrupt("return",n);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=(0,e.Z)(a().mark((function t(n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"731f4a410992078035fa504a629d03c1","https://api.themoviedb.org/3",t.next=4,fetch("".concat("https://api.themoviedb.org/3","/search/movie?api_key=").concat("731f4a410992078035fa504a629d03c1","&language=en-US&query=").concat(n,"&page=1")).then((function(t){return t.ok?t.json():console.log(" Error ".concat(t.status))})).then((function(t){return t.results})).catch((function(t){return console.log("Error ".concat(t.status))}));case 4:return r=t.sent,t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),s=function(){var t=(0,e.Z)(a().mark((function t(n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"731f4a410992078035fa504a629d03c1","https://api.themoviedb.org/3",t.next=4,fetch("".concat("https://api.themoviedb.org/3","/movie/").concat(n,"?api_key=").concat("731f4a410992078035fa504a629d03c1","&language=en-US")).then((function(t){return t.ok?t.json():console.log(" Error ".concat(t.status))})).then((function(t){return t})).catch((function(t){return console.log("Error ".concat(t.status))}));case 4:return r=t.sent,t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),i=function(){var t=(0,e.Z)(a().mark((function t(n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"731f4a410992078035fa504a629d03c1","https://api.themoviedb.org/3",t.next=4,fetch("".concat("https://api.themoviedb.org/3","/movie/").concat(n,"/credits?api_key=").concat("731f4a410992078035fa504a629d03c1","&language=en-US")).then((function(t){return t.ok?t.json():console.log(" Error ".concat(t.status))})).then((function(t){return t.cast})).catch((function(t){return console.log("Error ".concat(t.status))}));case 4:return r=t.sent,t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(a().mark((function t(n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"731f4a410992078035fa504a629d03c1","https://api.themoviedb.org/3",t.next=4,fetch("".concat("https://api.themoviedb.org/3","/movie/").concat(n,"/reviews?api_key=").concat("731f4a410992078035fa504a629d03c1","&language=en-US")).then((function(t){return t.ok?t.json():console.log(" Error ".concat(t.status))})).then((function(t){return t.results})).catch((function(t){return console.log("Error ".concat(t.status))}));case 4:return r=t.sent,t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();n.ZP=o},736:function(t,n,r){r.r(n),r.d(n,{default:function(){return w}});var e,c,a,o=r(861),u=r(439),s=r(687),i=r.n(s),f=r(355),p=r(791),h=r(689),l=r(168),v=r(696),d=v.Z.img(e||(e=(0,l.Z)(["\n  height: 200px;\n  width: 150px;\n"]))),g=v.Z.ul(c||(c=(0,l.Z)(["\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  width: 1260px;\n"]))),m=v.Z.li(a||(a=(0,l.Z)(["\n  margin: 30px;\n"]))),x=r(184),w=function(){var t=(0,h.UO)().movieId,n=(0,p.useState)([]),r=(0,u.Z)(n,2),e=r[0],c=r[1];return(0,p.useEffect)((function(){var n=function(){var n=(0,o.Z)(i().mark((function n(){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,f.QV)(t);case 3:r=n.sent,c(r),n.next=9;break;case 7:n.prev=7,n.t0=n.catch(0);case 9:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[t]),(0,x.jsx)(g,{children:e.length>1?e.map((function(t){var n=t.name,r=t.profile_path,e=t.id;return(0,x.jsxs)(m,{children:[(0,x.jsx)(d,{src:r?"".concat("https://image.tmdb.org/t/p/w500").concat(r):"Actor",alt:"actor"}),(0,x.jsx)("p",{children:n})]},e)})):(0,x.jsx)("h3",{children:"Sorry,no info about cast"})})}},861:function(t,n,r){function e(t,n,r,e,c,a,o){try{var u=t[a](o),s=u.value}catch(i){return void r(i)}u.done?n(s):Promise.resolve(s).then(e,c)}function c(t){return function(){var n=this,r=arguments;return new Promise((function(c,a){var o=t.apply(n,r);function u(t){e(o,c,a,u,s,"next",t)}function s(t){e(o,c,a,u,s,"throw",t)}u(void 0)}))}}r.d(n,{Z:function(){return c}})}}]);
//# sourceMappingURL=736.bfcfb8af.chunk.js.map