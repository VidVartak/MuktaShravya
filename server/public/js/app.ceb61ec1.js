(function(e){function t(t){for(var o,i,s=t[0],l=t[1],u=t[2],d=0,g=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&g.push(a[i][0]),a[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);c&&c(t);while(g.length)g.shift()();return n.push.apply(n,u||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],o=!0,s=1;s<r.length;s++){var l=r[s];0!==a[l]&&(o=!1)}o&&(n.splice(t--,1),e=i(i.s=r[0]))}return e}var o={},a={app:0},n=[];function i(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=o,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(r,o,function(t){return e[t]}.bind(null,o));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var c=l;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},1848:function(e,t,r){"use strict";r("25ed")},"18df":function(e){e.exports=JSON.parse('{"langCode":"mr","language":"मराठी","hello":"नमस्कार!","leftNav":{"BooksList":"काही नवी बोलती पुस्तके","ReadBy":"वाचक"},"bookDetail":{"Header":"पुस्तक: ","ReadBy":"वाचक","Author":"लेखन"},"createBook":{"Header":"नवे पुस्तक बनवा","SubHeader":"नव्या पुस्तकासाठी लागणारी माहिती येथे भरा"},"MuktaShravya":"मुक्त श्राव्य","headerTagLine":"कार्यकर्त्यांनी वाचलेली कॉपीराईट मुक्त पुस्तके","home":"पहिले पान","intro":"ओळख","aboutUs":"आम्ही कोण?","volunteerWithUs":{"header":"सामील व्हा!","para1":"तुमच्या मदतीने आम्ही मराठीतील अजून पुस्तके बोलती करू शकतो. हातभार लावण्याचे अनेक मार्ग आहेत. तुम्ही ऐकलेल्या पुस्तकात काही चुका जाणवल्या तर त्या नोंदवू शकता, तुमच्या पाहण्यात एखादे जुने पुस्तक आले असेल तर त्याचे नाव सुचवू शकता, किंवा स्वतः वाचूही  शकता!","para2":"तुम्हाला यातील काही शक्य असेल तर नक्की कळवा!"},"volunteer":"कार्यकर्ता","login":"प्रवेश","logout":"बाहेर पडा","loggedinVolunteer":"कार्यकर्ता क्षेत्र","history":"ऐतिहासिक","fiction":"काल्पनिक/कादंबरी","religion":"धार्मिक","social":"सामाजिक","biography":"चरित्र","Search":"शोधा","findABook":"ऐकण्यासाठी पुस्तक निवडा","chooseCriteria":"एक किंवा अधिक निकष निवडा","getInTouch":"संपर्क साधा","likeUs":"ओळख असू द्या!","aboutHeader":"बोलत्या पुस्तकांविषयी दोन शब्द","aboutText":"बोलती पुस्तके हा स्वयंसेवी कार्यकर्त्यांनी चालवलेला उपक्रम आहे. इ. इ. इ."}')},"25ed":function(e,t,r){},2664:function(e,t,r){"use strict";var o=r("7db3"),a=r("f9e8"),n=r("2877"),i=Object(n["a"])(a["default"],o["a"],o["b"],!1,null,"301f1e09",null);t["default"]=i.exports},"2e93":function(e,t){},"36d7":function(e,t){},"49f8":function(e,t,r){var o={"./en.json":"edd4","./hi.json":"7a03","./mr.json":"18df"};function a(e){var t=n(e);return r(t)}function n(e){if(!r.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}a.keys=function(){return Object.keys(o)},a.resolve=n,e.exports=a,a.id="49f8"},5307:function(e,t,r){e.exports=r.p+"img/facebook.b884cd70.png"},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{attrs:{id:"wrapper"}},[r("Header"),r("NavBar"),r("main",[r("LeftNav"),r("router-view")],1),r("Footer")],1)])},n=[],i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("header",[o("img",{attrs:{src:r("98a8"),alt:"logo"}}),o("div",{staticClass:"locale-changer"},[o("span",[e._v("Choose Language:")]),o("select",{directives:[{name:"model",rawName:"v-model",value:e.$i18n.locale,expression:"$i18n.locale"}],on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.$i18n,"locale",t.target.multiple?r:r[0])}}},e._l(e.langs,(function(t,r){return o("option",{key:"Lang"+r,domProps:{value:t.short}},[e._v(" "+e._s(t.long)+" ")])})),0)]),o("h1",[o("span",{staticClass:"highlight"},[e._v(" "+e._s(e.$t("MuktaShravya"))+" : ")]),e._v(" Indian Audio Books")]),o("h2",[e._v(e._s(e.$t("headerTagLine")))])])},s=[],l={data:function(){return{langs:[{short:"en",long:"English"},{short:"mr",long:"मराठी"},{short:"hi",long:"हिंदी"}]}}},u=l,c=r("2877"),d=Object(c["a"])(u,i,s,!1,null,"5c427521",null),g=d.exports,h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",[r("ul",[r("li",[r("router-link",{attrs:{to:{name:"Login"}}},[e.loginUser?r("span",[e._v(" "+e._s(e.$t("loggedinVolunteer"))+": "+e._s(e.loginUser))]):r("span",[e._v(e._s(e.$t("volunteer"))+" "+e._s(e.$t("login")))])])],1),r("li",[r("router-link",{attrs:{to:{name:"JoinUs"}}},[e._v(e._s(e.$t("volunteerWithUs.header"))+" ")])],1),r("li",[r("router-link",{attrs:{to:{name:"About"}}},[e._v(e._s(e.$t("aboutUs"))+" ")])],1),r("li",[r("router-link",{attrs:{to:{name:"Home"}}},[e._v(e._s(e.$t("home")))])],1)])])},p=[],v={computed:{loginUser:function(){return this.$store.getters.getUserName}}},f=v,k=(r("1848"),Object(c["a"])(f,h,p,!1,null,"6e331d88",null)),m=k.exports,b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"leftNav"}},[r("h2",[e._v(e._s(e.$t("leftNav.BooksList")))]),r("ul",e._l(e.books,(function(t,o){return r("li",{key:t._id,attrs:{item:t,index:o}},[e.language==t.book.Language?r("router-link",{attrs:{to:{name:"BookDetail",params:{id:t._id}}}},[e._v(e._s(t.book.VernacularHeader.Title)+" ("+e._s(e.$t("leftNav.ReadBy"))+": "+e._s(t.book.VernacularHeader.Reader)+")")]):r("router-link",{attrs:{to:{name:"BookDetail",params:{id:t._id}}}},[e._v(e._s(t.book.EnglishHeader.Title)+"( "+e._s(e.$t("leftNav.ReadBy"))+" "+e._s(t.book.EnglishHeader.Reader)+")")])],1)})),0)])},_=[],B=(r("96cf"),r("1da1")),y=(r("d81d"),r("5530")),$=r("d4ec"),x=r("bee2"),A=r("bc3a"),w=r.n(A),H="/api/books/",E=function(){function e(){Object($["a"])(this,e)}return Object(x["a"])(e,null,[{key:"getBooks",value:function(){var e=Object(B["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,w.a.get(H);case 2:return t=e.sent,e.prev=3,r=t.data,e.abrupt("return",r.map((function(e){return Object(y["a"])(Object(y["a"])({},e),{},{createdAt:new Date(e.createdAt)})})));case 8:return e.prev=8,e.t0=e["catch"](3),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[3,8]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"getBook",value:function(){var e=Object(B["a"])(regeneratorRuntime.mark((function e(t){var r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("in service.getBook, id:"+t+", url:"+H+t),e.next=3,w.a.get(H+t);case 3:return r=e.sent,console.log("in service, after awaiting get"),e.prev=5,o=r.data,e.abrupt("return",o.map((function(e){return Object(y["a"])(Object(y["a"])({},e),{},{createdAt:new Date(e.createdAt)})})));case 10:return e.prev=10,e.t0=e["catch"](5),console.log("in service.getbook, error"+e.t0),e.abrupt("return",e.t0);case 14:case"end":return e.stop()}}),e,null,[[5,10]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"insertBook",value:function(e){return console.log("book service insertbook called"),w.a.post(H,e)}},{key:"deleteBook",value:function(e){return w.a.delete("".concat(H).concat(e))}}]),e}(),N=E,R={name:"LeftNav",data:function(){return{books:[],title:"",vernacularTitle:"",reader:"",vernacularReader:"",archiveName:""}},created:function(){var e=this;return Object(B["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,console.log("in LeftNav, calling book service"),t.next=4,N.getBooks();case 4:e.books=t.sent,console.log("after calling book service"),console.log("got some books from service:"+e.books.length),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),e.error=t.t0.message;case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},props:{id:{type:String,default:""}},computed:{language:function(){return this.$i18n.locale}}},C=R,O=Object(c["a"])(C,b,_,!1,null,"7d55bae7",null),V=O.exports,S=r("fd2d"),j={name:"app",components:{Header:g,NavBar:m,LeftNav:V,Footer:S["default"]}},D=j,T=(r("034f"),Object(c["a"])(D,a,n,!1,null,null,null)),U=T.exports,L=r("8c4f"),P=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"contentWrapper"}},[r("h1",[e._v(e._s(e.$t("findABook"))+":")]),r("h2",[e._v("("+e._s(e.$t("chooseCriteria"))+")")]),r("form",{staticClass:"searchForm",attrs:{action:"searchResults.html",method:"post"}},[r("span",{staticClass:"searchCriteria"},[r("input",{attrs:{type:"checkbox",id:"history",name:"history",value:"history"}}),r("label",{attrs:{for:"history"}},[e._v(e._s(e.$t("history")))])]),r("span",{staticClass:"searchCriteria"},[r("input",{attrs:{type:"checkbox",id:"novel",name:"novel",value:"novel"}}),r("label",{attrs:{for:"novel"}},[e._v(e._s(e.$t("fiction")))])]),r("span",{staticClass:"searchCriteria"},[r("input",{attrs:{type:"checkbox",id:"religious",name:"religious",value:"religious"}}),r("label",{attrs:{for:"religious"}},[e._v(e._s(e.$t("religion")))])]),r("span",{staticClass:"searchCriteria"},[r("input",{attrs:{type:"checkbox",id:"social",name:"social",value:"social"}}),r("label",{attrs:{for:"social"}},[e._v(e._s(e.$t("social")))])]),r("span",{staticClass:"searchCriteria"},[r("input",{attrs:{type:"checkbox",id:"biography",name:"biography",value:"biography"}}),r("label",{attrs:{for:"thoughts"}},[e._v(e._s(e.$t("biography")))])]),r("div",[r("button",{staticClass:"button_1",attrs:{type:"submit",name:"submit"}},[e._v(e._s(e.$t("Search")))])])]),r("div",{attrs:{id:"searchResults"}})])},I=[],W={},M=W,F=Object(c["a"])(M,P,I,!1,null,"185dbf45",null),J=F.exports,z=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"contentWrapper"}},[r("h1",[e._v(e._s(e.$t("volunteer"))+" "+e._s(e.$t("login")))]),e.loginUser?r("div",{attrs:{id:"loginMenu"}},[r("button",{on:{click:e.handleClickSignOut}},[e._v(e._s(e.$t("logout")))]),r("ul",[r("li",[r("router-link",{attrs:{to:{name:"CreateBook"}}},[e._v(e._s(e.$t("createBook.Header"))+" ")])],1)])]):r("div",{attrs:{id:"nonLoginMenu"}},[r("button",{on:{click:e.handleClickSignIn}},[e._v(e._s(e.$t("login")))])])])},G=[],q={name:"test",data:function(){return{isInit:!1,isSignIn:!1,user:""}},computed:{loginUser:function(){return this.$store.getters.getUserName}},methods:{handleClickGetAuth:function(){var e=this;this.$gAuth.getAuthCode().then((function(t){return e.$http.post("http://your-backend-server.com/auth/google",{code:t,redirect_uri:"postmessage"})}))},handleClickSignIn:function(){var e=this;return Object(B["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$gAuth.signIn();case 3:if(r=t.sent,r){t.next=6;break}return t.abrupt("return",null);case 6:e.user=r.getBasicProfile().getName(),e.$store.commit("setLoggedUser",e.user),e.isSignIn=!0,t.next=15;break;case 11:return t.prev=11,t.t0=t["catch"](0),console.error(t.t0),t.abrupt("return",null);case 15:case"end":return t.stop()}}),t,null,[[0,11]])})))()},handleClickSignOut:function(){var e=this;return Object(B["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$gAuth.signOut();case 3:e.user="",e.$store.commit("setLoggedUser",e.user),console.log("committed user to state:"+e.user),e.isSignIn=!1,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},mounted:function(){var e=this,t=setInterval((function(){e.isInit=e.$gAuth.isInit,e.isSignIn=e.$gAuth.isAuthorized,e.isInit&&clearInterval(t)}),1e3);this.user=this.$store.getters.getUserName}}},Y=q,Z=Object(c["a"])(Y,z,G,!1,null,null,null),K=Z.exports,Q=r("80a8"),X=r("2664"),ee=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{key:e.$route.params.id,attrs:{id:"contentWrapper"}},[e.language==e.getBookLanguage()?r("div",[r("h1",[e._v(" "+e._s(e.getVernacularTitle()))]),r("h2",[e._v(e._s(e.$t("bookDetail.Author"))+": "+e._s(e.getVernacularAuthor())+", "+e._s(e.$t("bookDetail.ReadBy"))+": "+e._s(e.getVernacularReader()))]),r("p",[e._v(e._s(e.getVernacularDesc()))])]):r("div",[r("h1",[e._v(" "+e._s(e.getEnglishTitle()))]),r("h2",[e._v(e._s(e.$t("bookDetail.Author"))+": "+e._s(e.getEnglishAuthor())+", "+e._s(e.$t("bookDetail.ReadBy"))+": "+e._s(e.getEnglishReader()))]),r("p",[e._v(e._s(e.getEnglishDesc()))])]),r("div",{staticStyle:{visibility:"visible"}},[r("iframe",{attrs:{src:"http://archive.org/embed/"+this.books[0].book.ArchiveName+"?playlist=y",width:"300",height:"300",frameborder:"0",allowFullScreen:""}})])])},te=[],re={name:"BookDetail",data:function(){return{books:[],bookId:this.$route.params.id,title:"",vernacularTitle:"",reader:"",vernacularReader:"",archiveName:""}},created:function(){var e=this;return Object(B["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.update();case 1:case"end":return t.stop()}}),t)})))()},props:{id:{type:String,default:""}},computed:{language:function(){return this.$i18n.locale}},methods:{getArchiveName:function(){return this.books[0].book.archiveName},getEnglishTitle:function(){return this.books[0].book.EnglishHeader.Title},getVernacularTitle:function(){return this.books[0].book.VernacularHeader.Title},getEnglishReader:function(){return this.books[0].book.EnglishHeader.Reader},getVernacularReader:function(){return this.books[0].book.VernacularHeader.Reader},getEnglishAuthor:function(){return this.books[0].book.EnglishHeader.Author},getVernacularAuthor:function(){return this.books[0].book.VernacularHeader.Author},getEnglishDesc:function(){return this.books[0].book.EnglishHeader.Description},getVernacularDesc:function(){return this.books[0].book.VernacularHeader.Description},getBookLanguage:function(){return this.books[0].book.Language},update:function(){var e=this;return Object(B["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N.getBook(e.$route.params.id);case 3:e.books=t.sent,e.archiveName=e.books[0].book.archiveName,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),e.error=t.t0.message;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}},watch:{$route:function(e,t){e!==t&&this.update()}}},oe=re,ae=Object(c["a"])(oe,ee,te,!1,null,"7ee6dd20",null),ne=ae.exports,ie=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"contentWrapper"}},[e.loginUser?r("div",{staticClass:"createBook"},[r("h1",[e._v(" "+e._s(e.$t("createBook.Header"))+" ")]),r("h2",[e._v(" "+e._s(e.$t("createBook.SubHeader"))+" ")]),r("form",{staticClass:"searchForm",on:{submit:function(t){return t.preventDefault(),e.createBook(t)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.Book.ArchiveName,expression:"Book.ArchiveName"}],attrs:{type:"text",id:"BookArchiveName",placeholder:"Enter Archive Name"},domProps:{value:e.Book.ArchiveName},on:{input:function(t){t.target.composing||e.$set(e.Book,"ArchiveName",t.target.value)}}}),r("select",{directives:[{name:"model",rawName:"v-model",value:e.Book.Language,expression:"Book.Language"}],on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.Book,"Language",t.target.multiple?r:r[0])}}},e._l(e.langs,(function(t,o){return r("option",{key:"Lang"+o,domProps:{value:t.short}},[e._v(" "+e._s(t.long)+" ")])})),0),r("div",{attrs:{id:"BookEnglishHeader"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.Book.EnglishHeader.Title,expression:"Book.EnglishHeader.Title"}],attrs:{type:"text",id:"EnglishBookTitle",placeholder:"Enter book title in English"},domProps:{value:e.Book.EnglishHeader.Title},on:{input:function(t){t.target.composing||e.$set(e.Book.EnglishHeader,"Title",t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.Book.EnglishHeader.Reader,expression:"Book.EnglishHeader.Reader"}],attrs:{type:"text",id:"EnglishBookReader",placeholder:"Enter Reader Name in English"},domProps:{value:e.Book.EnglishHeader.Reader},on:{input:function(t){t.target.composing||e.$set(e.Book.EnglishHeader,"Reader",t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.Book.EnglishHeader.Author,expression:"Book.EnglishHeader.Author"}],attrs:{type:"text",id:"EnglishBookAuthor",placeholder:"Enter Author Name in English"},domProps:{value:e.Book.EnglishHeader.Author},on:{input:function(t){t.target.composing||e.$set(e.Book.EnglishHeader,"Author",t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.Book.EnglishHeader.Description,expression:"Book.EnglishHeader.Description"}],attrs:{type:"text",id:"EnglishBookDesc",placeholder:"Enter Description in English"},domProps:{value:e.Book.EnglishHeader.Description},on:{input:function(t){t.target.composing||e.$set(e.Book.EnglishHeader,"Description",t.target.value)}}})]),r("div",{attrs:{id:"BookVernacularHeader"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.Book.VernacularHeader.Title,expression:"Book.VernacularHeader.Title"}],attrs:{type:"text",id:"VernacularBookTitle",placeholder:"Enter book title in Vernacular"},domProps:{value:e.Book.VernacularHeader.Title},on:{input:function(t){t.target.composing||e.$set(e.Book.VernacularHeader,"Title",t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.Book.VernacularHeader.Reader,expression:"Book.VernacularHeader.Reader"}],attrs:{type:"text",id:"VernacularBookReader",placeholder:"Enter Reader Name in Vernacular"},domProps:{value:e.Book.VernacularHeader.Reader},on:{input:function(t){t.target.composing||e.$set(e.Book.VernacularHeader,"Reader",t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.Book.VernacularHeader.Author,expression:"Book.VernacularHeader.Author"}],attrs:{type:"text",id:"VernacularBookAuthor",placeholder:"Enter Author Name in Vernacular"},domProps:{value:e.Book.VernacularHeader.Author},on:{input:function(t){t.target.composing||e.$set(e.Book.VernacularHeader,"Author",t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.Book.VernacularHeader.Description,expression:"Book.VernacularHeader.Description"}],attrs:{type:"text",id:"VernacularBookDesc",placeholder:"Enter Description in Vernacular"},domProps:{value:e.Book.VernacularHeader.Description},on:{input:function(t){t.target.composing||e.$set(e.Book.VernacularHeader,"Description",t.target.value)}}})]),r("span",{staticClass:"searchCriteria"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.Book.tags,expression:"Book.tags"}],attrs:{type:"checkbox",id:"history",name:"history",value:"history"},domProps:{checked:Array.isArray(e.Book.tags)?e._i(e.Book.tags,"history")>-1:e.Book.tags},on:{change:function(t){var r=e.Book.tags,o=t.target,a=!!o.checked;if(Array.isArray(r)){var n="history",i=e._i(r,n);o.checked?i<0&&e.$set(e.Book,"tags",r.concat([n])):i>-1&&e.$set(e.Book,"tags",r.slice(0,i).concat(r.slice(i+1)))}else e.$set(e.Book,"tags",a)}}}),r("label",{attrs:{for:"history"}},[e._v(e._s(e.$t("history")))])]),r("span",{staticClass:"searchCriteria"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.Book.tags,expression:"Book.tags"}],attrs:{type:"checkbox",id:"novel",name:"novel",value:"novel"},domProps:{checked:Array.isArray(e.Book.tags)?e._i(e.Book.tags,"novel")>-1:e.Book.tags},on:{change:function(t){var r=e.Book.tags,o=t.target,a=!!o.checked;if(Array.isArray(r)){var n="novel",i=e._i(r,n);o.checked?i<0&&e.$set(e.Book,"tags",r.concat([n])):i>-1&&e.$set(e.Book,"tags",r.slice(0,i).concat(r.slice(i+1)))}else e.$set(e.Book,"tags",a)}}}),r("label",{attrs:{for:"novel"}},[e._v(e._s(e.$t("fiction")))])]),r("span",{staticClass:"searchCriteria"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.Book.tags,expression:"Book.tags"}],attrs:{type:"checkbox",id:"religious",name:"religious",value:"religious"},domProps:{checked:Array.isArray(e.Book.tags)?e._i(e.Book.tags,"religious")>-1:e.Book.tags},on:{change:function(t){var r=e.Book.tags,o=t.target,a=!!o.checked;if(Array.isArray(r)){var n="religious",i=e._i(r,n);o.checked?i<0&&e.$set(e.Book,"tags",r.concat([n])):i>-1&&e.$set(e.Book,"tags",r.slice(0,i).concat(r.slice(i+1)))}else e.$set(e.Book,"tags",a)}}}),r("label",{attrs:{for:"religious"}},[e._v(e._s(e.$t("religion")))])]),r("span",{staticClass:"searchCriteria"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.Book.tags,expression:"Book.tags"}],attrs:{type:"checkbox",id:"social",name:"social",value:"social"},domProps:{checked:Array.isArray(e.Book.tags)?e._i(e.Book.tags,"social")>-1:e.Book.tags},on:{change:function(t){var r=e.Book.tags,o=t.target,a=!!o.checked;if(Array.isArray(r)){var n="social",i=e._i(r,n);o.checked?i<0&&e.$set(e.Book,"tags",r.concat([n])):i>-1&&e.$set(e.Book,"tags",r.slice(0,i).concat(r.slice(i+1)))}else e.$set(e.Book,"tags",a)}}}),r("label",{attrs:{for:"social"}},[e._v(e._s(e.$t("social")))])]),r("span",{staticClass:"searchCriteria"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.Book.tags,expression:"Book.tags"}],attrs:{type:"checkbox",id:"biography",name:"biography",value:"biography"},domProps:{checked:Array.isArray(e.Book.tags)?e._i(e.Book.tags,"biography")>-1:e.Book.tags},on:{change:function(t){var r=e.Book.tags,o=t.target,a=!!o.checked;if(Array.isArray(r)){var n="biography",i=e._i(r,n);o.checked?i<0&&e.$set(e.Book,"tags",r.concat([n])):i>-1&&e.$set(e.Book,"tags",r.slice(0,i).concat(r.slice(i+1)))}else e.$set(e.Book,"tags",a)}}}),r("label",{attrs:{for:"thoughts"}},[e._v(e._s(e.$t("biography")))])]),r("button",{staticClass:"button_1"},[e._v("Submit")])])]):r("div",{staticClass:"notLoggedIn"},[r("p",[e._v("You need to be logged in to use this page")])])])},se=[],le={name:"BookComponent",data:function(){return{Book:{ArchiveName:"",Language:"",CreatedAt:new Date,EnglishHeader:{Title:"",Reader:"",Author:"",Description:""},VernacularHeader:{Title:"",Reader:"",Author:"",Description:""},tags:[]},langs:[{short:"en",long:"English"},{short:"mr",long:"मराठी"},{short:"hi",long:"हिंदी"}]}},computed:{loginUser:function(){return this.$store.getters.getUserName}},methods:{createBook:function(){var e=this;return Object(B["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("createBook called"),t.next=3,N.insertBook(e.Book);case 3:console.log("After creating book");case 4:case"end":return t.stop()}}),t)})))()}}},ue=le,ce=Object(c["a"])(ue,ie,se,!1,null,"49f259e1",null),de=ce.exports;o["a"].use(L["a"]);var ge=[{path:"/",name:"Home",component:J},{path:"/login",name:"Login",component:K},{path:"/joinUs",name:"JoinUs",component:Q["default"]},{path:"/bookDetail/:id",name:"BookDetail",component:ne,props:!0},{path:"/about",name:"About",component:X["default"]},{path:"/createBook",name:"CreateBook",component:de}],he=new L["a"]({mode:"history",base:"/",routes:ge}),pe=he,ve=r("2f62");o["a"].use(ve["a"]);var fe=new ve["a"].Store({state:{userName:""},mutations:{setLoggedUser:function(e,t){e.userName=t,console.log("inside globalState, set username to "+e.userName)}},getters:{getUserName:function(e){return e.userName}}}),ke=r("c9bf"),me=(r("4160"),r("d3b7"),r("ac1f"),r("466d"),r("159b"),r("ddb0"),r("a925"));function be(){var e=r("49f8"),t={};return e.keys().forEach((function(r){var o=r.match(/([A-Za-z0-9-_]+)\./i);if(o&&o.length>1){var a=o[1];t[a]=e(r)}})),t}o["a"].use(me["a"]);var _e=new me["a"]({locale:"en",fallbackLocale:"en",messages:be()}),Be={clientId:"784617817891-41903f34gle3945o9g6alpbfkqp239ek.apps.googleusercontent.com",scope:"profile email",prompt:"select_account",fetch_basic_profile:!0};new o["a"]({router:pe,store:fe,i18n:_e,render:function(e){return e(U)}}).$mount("#app"),o["a"].use(ke["a"],Be)},"7a03":function(e){e.exports=JSON.parse('{"langCode":"hi","language":"हिंदी","hello":"नमस्कार!","leftNav":{"BooksList":"कुछ नयी श्राव्य किताबें","ReadBy":"वाचक"},"bookDetail":{"Header":"पुस्तक: ","ReadBy":"वाचक","Author":"लेखन"},"createBook":{"Header":"नयी किताब बनाइये","SubHeader":"नयी किताब के बारेमे जानकारी यहाँ भरें"},"MuktaShravya":"मुक्त श्राव्य","headerTagLine":"स्वयंसवियोंने पढ़ी हुई कॉपीराईट मुक्त किताबें ","home":"मुखपृष्ठ","intro":"पहचान","aboutUs":"हमारे बारेमे","volunteerWithUs":{"header":"हमसे जुड़िये!","para1":"आपकी सहायता के साथ हम और भी हिंदी किताबें यहाँ शामिल कर सकेंगे। सहायता देनेके कई तरीक़े है। आपके कोई सुझाव हो, कोई पुरानी किताब अगर आपको पता हो जो आप यहाँ देखना चाहोगे तो हमें बता सकते हो, या फिर खुद कोई किताब पढ़ भी सकते हो।","para2":"इसमेसे आप कुछ करना चाहते हो तो हमें जरूर बताऐं।"},"volunteer":"कार्यकर्ता","login":"प्रवेश","logout":"निकास","loggedinVolunteer":"कार्यकर्ता क्षेत्र","history":"ऐतिहासिक","fiction":"काल्पनिक/कादंबरी","religion":"धार्मिक","social":"सामाजिक","biography":"चरित्र","Search":"खोजें","findABook":"सुननेके लिए किताब चुनिये","chooseCriteria":"एक या अधिक विकल्प चुनिये","getInTouch":"संपर्क करें","likeUs":"मिलते रहिये!","aboutHeader":"मुक्त श्राव्य के बारेमें दो शब्द","aboutText":"मुक्त श्राव्य एक स्वयंसेवी कार्यकर्ताओंने चलाया हुवा उपक्रम है।  ... "}')},"7db3":function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return a}));var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"contentWrapper"}},[r("h1",[e._v(e._s(e.$t("aboutHeader")))]),r("p",[e._v(e._s(e.$t("aboutText")))])])},a=[]},"80a8":function(e,t,r){"use strict";var o=r("f812"),a=r("a279"),n=r("2877"),i=Object(n["a"])(a["default"],o["a"],o["b"],!1,null,"39200006",null);t["default"]=i.exports},"85ec":function(e,t,r){},"94d4":function(e,t,r){"use strict";var o=r("2e93"),a=r.n(o);t["default"]=a.a},"98a8":function(e,t,r){e.exports=r.p+"img/MuktaShravyaSmall.34e1c528.jpg"},"98c4":function(e,t){},"9afb":function(e,t,r){e.exports=r.p+"img/email.b116853e.png"},a279:function(e,t,r){"use strict";var o=r("36d7"),a=r.n(o);t["default"]=a.a},dfbf:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return a}));var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",[r("ul",[r("li",[e._v(e._s(e.$t("MuktaShravya"))+" Copyright © 2020 ")]),r("li",[e._v(e._s(e.$t("getInTouch"))+":"),e._m(0)]),r("li",[e._v(e._s(e.$t("likeUs"))+":"),e._m(1)])])])},a=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("a",{attrs:{href:"mailto:boltipustake@gmail.com"}},[o("img",{attrs:{src:r("9afb"),alt:"Email us",width:"30"}})])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("a",{attrs:{href:"https://www.facebook.com/boltipustake"}},[o("img",{attrs:{src:r("5307"),alt:"Like our facebook page",width:"30"}})])}]},edd4:function(e){e.exports=JSON.parse('{"langCode":"en","language":"English","hello":"Hello!","leftNav":{"BooksList":"Some Recent Audio Books","ReadBy":"read by"},"bookDetail":{"Header":"Book: ","ReadBy":"Read by","Author":"Author"},"createBook":{"Header":"Create a new book","SubHeader":"Here you can create a new book by entering all the relevant information below"},"MuktaShravya":"Mukta Shrāvya","headerTagLine":"Out of Copyright books read by volunteers","home":"Home","intro":"Introduction","aboutUs":"About Us","volunteer":"Volunteer","login":"Login","logout":"Log out","loggedinVolunteer":"Volunteer area","history":"Historical","fiction":"Fiction","religion":"Religion","social":"Social","biography":"Biographical","Search":"Search","findABook":"Find a book to listen to","chooseCriteria":"Choose one of more criteria","getInTouch":"Get in touch","likeUs":"Like us on ","aboutHeader":"A few words about Bolti Pustake","aboutText":"Bolti Pustake is a project run by volunteers Blah Blah Blah","volunteerWithUs":{"header":"Volunteer With Us!","para1":"Would you like to help us add more audio books in your own language, even in your own voice?","para2":""}}')},f812:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return a}));var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"contentWrapper"}},[r("h1",[e._v(e._s(e.$t("volunteerWithUs.header")))]),r("p",[e._v(e._s(e.$t("volunteerWithUs.para1")))]),r("p",[e._v(e._s(e.$t("volunteerWithUs.para2")))])])},a=[]},f9e8:function(e,t,r){"use strict";var o=r("98c4"),a=r.n(o);t["default"]=a.a},fd2d:function(e,t,r){"use strict";var o=r("dfbf"),a=r("94d4"),n=r("2877"),i=Object(n["a"])(a["default"],o["a"],o["b"],!1,null,"66003b49",null);t["default"]=i.exports}});
//# sourceMappingURL=app.ceb61ec1.js.map