(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[80],{355:function(n,t,e){"use strict";e.d(t,{LE:function(){return i},QV:function(){return u},Xh:function(){return f},pG:function(){return s}});var r=e(861),o=e(687),a=e.n(o),c=function(){var n=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"https://api.themoviedb.org/3","731f4a410992078035fa504a629d03c1",n.next=4,fetch("".concat("https://api.themoviedb.org/3","/trending/all/day?api_key=").concat("731f4a410992078035fa504a629d03c1","&page=1")).then((function(n){return n.ok?n.json():console.log(" Error ".concat(n.status))})).then((function(n){return n.results})).catch((function(n){return console.log("Error ".concat(n.status))}));case 4:return t=n.sent,n.abrupt("return",t);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"731f4a410992078035fa504a629d03c1","https://api.themoviedb.org/3",n.next=4,fetch("".concat("https://api.themoviedb.org/3","/search/movie?api_key=").concat("731f4a410992078035fa504a629d03c1","&language=en-US&query=").concat(t,"&page=1")).then((function(n){return n.ok?n.json():console.log(" Error ".concat(n.status))})).then((function(n){return n.results})).catch((function(n){return console.log("Error ".concat(n.status))}));case 4:return e=n.sent,n.abrupt("return",e);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"731f4a410992078035fa504a629d03c1","https://api.themoviedb.org/3",n.next=4,fetch("".concat("https://api.themoviedb.org/3","/movie/").concat(t,"?api_key=").concat("731f4a410992078035fa504a629d03c1","&language=en-US")).then((function(n){return n.ok?n.json():console.log(" Error ".concat(n.status))})).then((function(n){return n})).catch((function(n){return console.log("Error ".concat(n.status))}));case 4:return e=n.sent,n.abrupt("return",e);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"731f4a410992078035fa504a629d03c1","https://api.themoviedb.org/3",n.next=4,fetch("".concat("https://api.themoviedb.org/3","/movie/").concat(t,"/credits?api_key=").concat("731f4a410992078035fa504a629d03c1","&language=en-US")).then((function(n){return n.ok?n.json():console.log(" Error ".concat(n.status))})).then((function(n){return n.cast})).catch((function(n){return console.log("Error ".concat(n.status))}));case 4:return e=n.sent,n.abrupt("return",e);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"731f4a410992078035fa504a629d03c1","https://api.themoviedb.org/3",n.next=4,fetch("".concat("https://api.themoviedb.org/3","/movie/").concat(t,"/reviews?api_key=").concat("731f4a410992078035fa504a629d03c1","&language=en-US")).then((function(n){return n.ok?n.json():console.log(" Error ".concat(n.status))})).then((function(n){return n.results})).catch((function(n){return console.log("Error ".concat(n.status))}));case 4:return e=n.sent,n.abrupt("return",e);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();t.ZP=c},80:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return T}});var r,o,a,c,i=e(861),s=e(439),u=e(687),f=e.n(u),p=e(689),h=e(791),l=e(355),d=e(168),m=e(696),v=e(87),x=m.Z.div(r||(r=(0,d.Z)(["\n  display: flex;\n  justify-content: flex-start;\n"]))),g=m.Z.img(o||(o=(0,d.Z)(["\n  width: 300px;\n  height: 370px;\n  border-radius: 50px;\n  padding: 20px;\n"]))),y=m.Z.ul(a||(a=(0,d.Z)(["\n  list-style: none;\n"]))),j=(0,m.Z)(v.OL)(c||(c=(0,d.Z)(["\n  display: flex;\n  text-decoration: none;\n  justify-content: center;\n  align-items: center;\n  width: 150px;\n  height: 50px;\n  background-color: darkgrey;\n  color: black;\n  border-radius: 20px;\n  position: absolute;\n  top: 23px;\n  left: 24px;\n  font-weight: 700;\n  border: none;\n  cursor: pointer;\n  &:active {\n    color: red;\n  }\n  &:hover {\n    color: white;\n  }\n"]))),b=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}],k=function(n){if(n.length>0){var t=[];return n.forEach((function(n){var e=function(n){var t=b.find((function(t){return t.id===n}));return t?t.name:""}(n.id);e&&t.push(e)})),t.join(", ")}return""},w=e(7),_=e.n(w),E=e(184),Z=function(n){var t,e,r=n.info,o=r.poster_path,a=r.original_title,c=r.popularity,i=r.overview,s=r.genres,u=(0,p.TH)(),f=(0,h.useRef)(null!==(t=null===(e=u.state)||void 0===e?void 0:e.from)&&void 0!==t?t:"/movies");return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(x,{children:[(0,E.jsx)(j,{to:f.current,children:"Go back"}),(0,E.jsx)(g,{src:o?"".concat("https://image.tmdb.org/t/p/w500").concat(o):"Film Poster",alt:"film poster"}),(0,E.jsxs)(y,{children:[(0,E.jsxs)("li",{children:[(0,E.jsx)("h1",{children:a}),(0,E.jsxs)("p",{children:["User Score: ",Math.round(c)+"%"||0]})]}),(0,E.jsxs)("li",{children:[(0,E.jsx)("h2",{children:"Overview"}),(0,E.jsx)("p",{children:i})]}),(0,E.jsxs)("li",{children:[(0,E.jsx)("h2",{children:"Genres:"}),(0,E.jsx)("p",{children:s&&k(s)})]})]})]}),(0,E.jsxs)("div",{children:[(0,E.jsx)("h3",{children:"Additional information"}),(0,E.jsxs)(y,{children:[(0,E.jsx)("li",{style:{marginBottom:"5px"},children:(0,E.jsx)(v.rU,{to:"cast",children:"Cast"})}),(0,E.jsx)("li",{children:(0,E.jsx)(v.rU,{to:"reviews",children:"Reviews"})})]})]})]})};Z.prototypes={info:_().object};var T=function(){var n=(0,p.UO)().movieId,t=(0,h.useState)([]),e=(0,s.Z)(t,2),r=e[0],o=e[1];return(0,h.useEffect)((function(){var t=function(){var t=(0,i.Z)(f().mark((function t(){var e;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,l.pG)(n);case 3:e=t.sent,o(e),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[n]),(0,E.jsxs)(E.Fragment,{children:[r&&(0,E.jsx)(Z,{info:r}),(0,E.jsx)(p.j3,{})]})}},888:function(n,t,e){"use strict";var r=e(47);function o(){}function a(){}a.resetWarningCache=o,n.exports=function(){function n(n,t,e,o,a,c){if(c!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return n}n.isRequired=n;var e={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:t,element:n,elementType:n,instanceOf:t,node:n,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return e.PropTypes=e,e}},7:function(n,t,e){n.exports=e(888)()},47:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},861:function(n,t,e){"use strict";function r(n,t,e,r,o,a,c){try{var i=n[a](c),s=i.value}catch(u){return void e(u)}i.done?t(s):Promise.resolve(s).then(r,o)}function o(n){return function(){var t=this,e=arguments;return new Promise((function(o,a){var c=n.apply(t,e);function i(n){r(c,o,a,i,s,"next",n)}function s(n){r(c,o,a,i,s,"throw",n)}i(void 0)}))}}e.d(t,{Z:function(){return o}})}}]);
//# sourceMappingURL=80.c45e9816.chunk.js.map