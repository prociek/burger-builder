(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[0],[,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"u",(function(){return c})),n.d(t,"w",(function(){return a})),n.d(t,"i",(function(){return i})),n.d(t,"n",(function(){return o})),n.d(t,"p",(function(){return u})),n.d(t,"r",(function(){return s})),n.d(t,"s",(function(){return d})),n.d(t,"q",(function(){return l})),n.d(t,"t",(function(){return j})),n.d(t,"j",(function(){return b})),n.d(t,"l",(function(){return O})),n.d(t,"m",(function(){return f})),n.d(t,"k",(function(){return p})),n.d(t,"b",(function(){return x})),n.d(t,"h",(function(){return g})),n.d(t,"f",(function(){return h})),n.d(t,"g",(function(){return _})),n.d(t,"d",(function(){return v})),n.d(t,"c",(function(){return m})),n.d(t,"e",(function(){return k})),n.d(t,"o",(function(){return y})),n.d(t,"v",(function(){return T}));var r="ADD_INGREDIENT",c="REMOVE_INGREDIENT",a="SET_INGREDIENTS",i="FETCH_INGREDIENTS_FAIL",o="INIT_INGREDIENTS",u="PURCHASE_BURGER",s="PURCHASE_BURGER_START",d="PURCHASE_BURGER_SUCCESS",l="PURCHASE_BURGER_FAIL",j="PURCHASE_INIT",b="FETCH_ORDERS",O="FETCH_ORDERS_START",f="FETCH_ORDERS_SUCCESS",p="FETCH_ORDERS_FAIL",x="AUTH_CHECK_STATE",g="AUTH_USER",h="AUTH_START",_="AUTH_SUCCESS",v="AUTH_FAIL",m="AUTH_CHECK_TIMEOUT",k="AUTH_INITIATE_LOGOUT",y="LOGOUT_SUCCEED",T="SET_AUTH_REDIRECT_PATH"},,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"u",(function(){return a})),n.d(t,"m",(function(){return u})),n.d(t,"w",(function(){return o})),n.d(t,"h",(function(){return i})),n.d(t,"p",(function(){return j})),n.d(t,"t",(function(){return b})),n.d(t,"i",(function(){return x})),n.d(t,"r",(function(){return s})),n.d(t,"s",(function(){return d})),n.d(t,"q",(function(){return l})),n.d(t,"k",(function(){return O})),n.d(t,"l",(function(){return f})),n.d(t,"j",(function(){return p})),n.d(t,"e",(function(){return y})),n.d(t,"n",(function(){return v})),n.d(t,"v",(function(){return T})),n.d(t,"g",(function(){return C})),n.d(t,"o",(function(){return m})),n.d(t,"f",(function(){return k})),n.d(t,"c",(function(){return g})),n.d(t,"b",(function(){return _})),n.d(t,"d",(function(){return h}));var r=n(4),c=function(e){return{type:r.a,ingType:e}},a=function(e){return{type:r.u,ingType:e}},i=function(e){return{type:r.i}},o=function(e){return{type:r.w,ingredients:e}},u=function(){return{type:r.n}},s=function(){return{type:r.r}},d=function(e,t){return{type:r.s,id:e,orderData:t}},l=function(e){return{type:r.q,error:e}},j=function(e,t){return{type:r.p,orderData:e,token:t}},b=function(){return{type:r.t}},O=function(){return{type:r.l}},f=function(e){return{type:r.m,orders:e}},p=function(){return{type:r.k}},x=function(e,t){return{type:r.j,token:e,userId:t}},g=function(){return{type:r.f}},h=function(e,t){return{type:r.g,token:e,id:t}},_=function(e){return{type:r.d,error:e}},v=function(){return{type:r.e}},m=function(){return{type:r.o}},k=function(e){return{type:r.c,expirationTime:e}},y=function(e,t,n){return{type:r.h,email:e,password:t,isSignUp:n}},T=function(e){return{type:r.v,path:e}},C=function(){return{type:r.b}}},,,,,,function(e,t,n){"use strict";t.a=function(e){return e.children}},,,,,function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__sAL74",BreadTop:"BurgerIngredient_BreadTop__2xmOK",Seeds1:"BurgerIngredient_Seeds1__3rG6K",Seeds2:"BurgerIngredient_Seeds2__pDheq",Meat:"BurgerIngredient_Meat__10ujC",Cheese:"BurgerIngredient_Cheese__21Es0",Salad:"BurgerIngredient_Salad__1oMav",Bacon:"BurgerIngredient_Bacon__7eCfz"}},,function(e,t,n){"use strict";var r=n(35),c=n.n(r).a.create({baseURL:"https://react-burger-tp-default-rtdb.europe-west1.firebasedatabase.app/"});t.a=c},,,,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__3e1RQ",Open:"SideDrawer_Open__s2lS7",Close:"SideDrawer_Close__1tKeD",Logo:"SideDrawer_Logo__3Ph8y"}},,,,function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__2EjWJ",Label:"BuildControl_Label__xDuPL",Less:"BuildControl_Less__3j1ji",More:"BuildControl_More__2eeHg"}},,,,function(e,t,n){"use strict";n(1);var r=n(61),c=n.n(r),a=n(0);t.a=function(e){return e.show?Object(a.jsx)("div",{className:c.a.Backdrop,onClick:e.clicked}):null}},function(e,t,n){"use strict";var r=n(1),c=n.n(r),a=n(14),i=n(33),o=n(64),u=n.n(o),s=n(0),d=c.a.memo((function(e){return Object(s.jsxs)(a.a,{children:[Object(s.jsx)(i.a,{show:e.purchase,clicked:e.modalClosed}),Object(s.jsx)("div",{className:u.a.Modal,style:{transform:e.purchase?"translateY(0)":"translateY(-100vh)",opacity:e.purchase?"1":"0"},children:e.children})]})}),(function(e,t){return e.purchase===t.purchase&&e.children===t.children}));t.a=d},,,function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__1iXRN",Logo:"Toolbar_Logo__kYuLo",DesktopOnly:"Toolbar_DesktopOnly__d2aLR"}},function(e,t,n){"use strict";n(1);var r=n(45),c=n.n(r),a=n(0);t.a=function(e){return Object(a.jsx)("button",{type:e.type,disabled:e.disabled,className:[c.a.Button,c.a[e.btnType]].join(" "),onClick:e.clicked,children:e.children})}},,,function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__2PI3Z",active:"NavigationItem_active__VUzHx"}},,,function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__26vrX",OrderButton:"BuildControls_OrderButton__1KP21",enable:"BuildControls_enable__xc8ly"}},function(e,t,n){e.exports={Button:"Button_Button__1BBhc",Success:"Button_Success__1lG4U",Danger:"Button_Danger__3iwxA",Primary:"Button_Primary__Uye26"}},function(e,t,n){"use strict";n(1);var r=n(65),c=n.n(r),a=n(0);t.a=function(){return Object(a.jsx)("div",{className:c.a.Loader,children:"Loading..."})}},function(e,t,n){"use strict";var r=n(3),c=n(20),a=n(1),i=n(34),o=n(14),u=function(e){var t=Object(a.useState)(null),n=Object(c.a)(t,2),r=n[0],i=n[1],o=e.interceptors.request.use((function(e){return i(null),e}),(function(e){i(e)}),[]),u=e.interceptors.response.use((function(e){return e}),(function(e){i(e)}));Object(a.useEffect)((function(){return function(){e.interceptors.request.eject(o),e.interceptors.response.eject(u)}}));return[r,function(){i(null)}]},s=n(0);t.a=function(e,t){return function(n){var a=u(t),d=Object(c.a)(a,2),l=d[0],j=d[1];return Object(s.jsxs)(o.a,{children:[Object(s.jsx)(i.a,{purchase:l,modalClosed:j,children:l&&l.message}),Object(s.jsx)(e,Object(r.a)({},n))]})}}},,,,,,,,,function(e,t,n){"use strict";var r=n(36),c=(n(1),n(63)),a=n.n(c),i=n(19),o=n.n(i),u=n(0),s=function(e){var t=null;switch(e.type){case"bread-bottom":t=Object(u.jsx)("div",{className:o.a.BreadBottom});break;case"bread-top":t=Object(u.jsxs)("div",{className:o.a.BreadTop,children:[Object(u.jsx)("div",{className:o.a.Seeds1}),Object(u.jsx)("div",{className:o.a.Seeds2})]});break;case"meat":t=Object(u.jsx)("div",{className:o.a.Meat});break;case"cheese":t=Object(u.jsx)("div",{className:o.a.Cheese});break;case"bacon":t=Object(u.jsx)("div",{className:o.a.Bacon});break;case"salad":t=Object(u.jsx)("div",{className:o.a.Salad});break;default:t=null}return t};t.a=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(r.a)(Array(e.ingredients[t])).map((function(e,n){return Object(u.jsx)(s,{type:t},t+n)}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=Object(u.jsx)("p",{children:"Please start adding ingredients!"})),Object(u.jsxs)("div",{className:a.a.Burger,children:[Object(u.jsx)(s,{type:"bread-top"}),t,Object(u.jsx)(s,{type:"bread-bottom"})]})}},,function(e,t,n){e.exports={Logo:"Logo_Logo__3L0ii"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__jeUrd"}},function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__1Y1mX"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__30J8G"}},function(e,t,n){e.exports={Content:"Layout_Content___EdIq"}},function(e,t,n){e.exports={Burger:"Burger_Burger__321v6"}},function(e,t,n){e.exports={Modal:"Modal_Modal__3gBej"}},function(e,t,n){e.exports={Loader:"Spinner_Loader__3-hl_",load8:"Spinner_load8__Bm22y"}},,,,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(30),i=n.n(a),o=n(23),u=(n(72),n(3)),s=n(11),d=n(17),l=n(20),j=n(14),b=n.p+"static/media/burger-logo.ec69c7f6.png",O=n(58),f=n.n(O),p=n(0),x=function(){return Object(p.jsx)("div",{className:f.a.Logo,children:Object(p.jsx)("img",{src:b,alt:"Burger Logo"})})},g=n(41),h=n.n(g),_=function(e){return Object(p.jsx)("li",{className:h.a.NavigationItem,children:Object(p.jsx)(o.b,{to:e.link,exact:!0,activeClassName:h.a.active,children:e.children})})},v=n(59),m=n.n(v),k=Object(d.b)((function(e){return{isAuth:null!=e.user.token}}))((function(e){return Object(p.jsxs)("ul",{className:m.a.NavigationItems,children:[Object(p.jsx)(_,{link:"/",children:"Burger Builder"}),e.isAuth&&Object(p.jsx)(_,{link:"/orders",children:"Orders"}),e.isAuth?Object(p.jsx)(_,{link:"/logout",children:"Log out"}):Object(p.jsx)(_,{link:"/auth",children:"Log in"})]})})),y=n(60),T=n.n(y),C=function(e){return Object(p.jsxs)("div",{onClick:e.clicked,className:T.a.DrawerToggle,children:[Object(p.jsx)("div",{}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{})]})},S=n(37),I=n.n(S),B=function(e){return Object(p.jsxs)("header",{className:I.a.Toolbar,children:[Object(p.jsx)(C,{clicked:e.clickedToggle}),Object(p.jsx)("div",{className:I.a.Logo,children:Object(p.jsx)(x,{})}),Object(p.jsx)("nav",{className:I.a.DesktopOnly,children:Object(p.jsx)(k,{})})]})},w=n(33),E=n(25),N=n.n(E),D=function(e){var t=[N.a.SideDrawer,N.a.Close];return e.open&&(t=[N.a.SideDrawer,N.a.Open]),Object(p.jsxs)(j.a,{children:[Object(p.jsx)(w.a,{show:e.open,clicked:e.closed}),Object(p.jsxs)("div",{className:t.join(" "),onClick:e.closed,children:[Object(p.jsx)("div",{className:N.a.Logo,children:Object(p.jsx)(x,{})}),Object(p.jsx)(k,{})]})]})},A=n(62),L=n.n(A),R=function(e){var t=Object(r.useState)(!1),n=Object(l.a)(t,2),c=n[0],a=n[1];return Object(p.jsxs)(j.a,{children:[Object(p.jsx)(B,{clickedToggle:function(){a((function(e){return!e}))}}),Object(p.jsx)(D,{open:c,closed:function(){a(!1)}}),Object(p.jsx)("main",{className:L.a.Content,children:e.children})]})},U=n(56),P=n(44),H=n.n(P),F=n(29),G=n.n(F),M=function(e){return Object(p.jsxs)("div",{className:G.a.BuildControl,children:[Object(p.jsx)("div",{className:G.a.Label,children:e.label}),Object(p.jsx)("button",{className:G.a.Less,onClick:e.remove,disabled:e.disabled,children:"Less"}),Object(p.jsx)("button",{className:G.a.More,onClick:e.added,children:"More"})]})},q=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],z=function(e){return Object(p.jsxs)("div",{className:H.a.BuildControls,children:[Object(p.jsxs)("p",{children:["Current Price: ",Object(p.jsxs)("strong",{children:["$",e.price.toFixed(2)]})]}),q.map((function(t){return Object(p.jsx)(M,{label:t.label,added:function(){return e.ingredientAdded(t.type)},remove:function(){return e.ingredientRemove(t.type)},disabled:e.disabled[t.type]},t.label)})),Object(p.jsx)("button",{className:H.a.OrderButton,disabled:!e.purchasable,onClick:e.clicked,children:e.isAuth?"ORDER NOW":"SIGN UP TO ORDER"})]})},K=n(34),X=n(38),Y=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{style:{textTransform:"capitalize"},children:t}),":"," ",e.ingredients[t]]},t)}));return Object(p.jsxs)(j.a,{children:[Object(p.jsx)("h3",{children:"Your Order"}),Object(p.jsx)("p",{children:"A delicious burger with the following ingredients:"}),Object(p.jsx)("ul",{style:{listStyle:"none"},children:t}),Object(p.jsx)("p",{children:Object(p.jsxs)("strong",{children:["Current price: ",e.price.toFixed(2)]})}),Object(p.jsx)("p",{children:"Continue to checkout?"}),Object(p.jsx)(X.a,{clicked:e.modalClosed,btnType:"Danger",children:"CANCEL"}),Object(p.jsx)(X.a,{clicked:e.orderContinue,btnType:"Success",children:"CONTINUE"})]})},J=n(46),V=n(47),W=n(21),Q=n(8),Z=Object(V.a)((function(e){var t=Object(r.useState)(!1),n=Object(l.a)(t,2),c=n[0],a=n[1],i=Object(d.c)(),o=Object(r.useCallback)((function(){return i(Object(Q.m)())}),[i]),s=Object(d.d)((function(e){return e.burger})),b=s.ingredients,O=s.totalPrice,f=s.error,x=Object(d.d)((function(e){return null!=e.user.token}));Object(r.useEffect)((function(){o()}),[o]);var g=function(){a(!1)},h=Object(u.a)({},b);for(var _ in h)h[_]=h[_]<=0;var v=f?Object(p.jsx)("p",{style:{textAlign:"center"},children:"Ingredients can't be loaded!"}):Object(p.jsx)(J.a,{}),m=null;return b&&(v=Object(p.jsxs)(j.a,{children:[Object(p.jsx)(U.a,{ingredients:b}),Object(p.jsx)(z,{ingredientAdded:function(e){return i(Object(Q.a)(e))},ingredientRemove:function(e){return i(Object(Q.u)(e))},disabled:h,price:O,purchasable:function(e){return Object.values(e).reduce((function(e,t){return e+t}),0)>0}(b),clicked:function(){var t;x?a(!0):(t="/checkout",i(Object(Q.v)(t)),e.history.push("auth"))},isAuth:x})]}),m=Object(p.jsx)(Y,{ingredients:b,modalClosed:g,orderContinue:function(){i(Object(Q.t)()),e.history.push("/checkout")},price:O})),Object(p.jsxs)(j.a,{children:[Object(p.jsx)(K.a,{purchase:c,modalClosed:g,children:m}),v]})}),W.a),$=Object(d.b)(null,(function(e){return{onLogout:function(){return e(Object(Q.n)())}}}))((function(e){var t=e.onLogout;return Object(r.useEffect)((function(){t()}),[t]),Object(p.jsx)(s.a,{to:"/"})})),ee=c.a.lazy((function(){return n.e(3).then(n.bind(null,113))})),te=c.a.lazy((function(){return n.e(5).then(n.bind(null,114))})),ne=c.a.lazy((function(){return n.e(4).then(n.bind(null,111))})),re=Object(s.g)(Object(d.b)((function(e){return{isAuth:null!=e.user.token}}),(function(e){return{onCheckUserAuth:function(){return e(Object(Q.g)())}}}))((function(e){var t=e.onCheckUserAuth,n=e.isAuth;Object(r.useEffect)((function(){t()}),[t]);var c=Object(p.jsxs)(s.d,{children:[Object(p.jsx)(s.b,{path:"/auth",render:function(e){return Object(p.jsx)(ne,Object(u.a)({},e))}}),Object(p.jsx)(s.b,{path:"/",exact:!0,component:Z}),Object(p.jsx)(s.a,{to:"/"})]});return n&&(c=Object(p.jsxs)(s.d,{children:[Object(p.jsx)(s.b,{path:"/checkout",render:function(e){return Object(p.jsx)(ee,Object(u.a)({},e))}}),Object(p.jsx)(s.b,{path:"/orders",render:function(e){return Object(p.jsx)(te,Object(u.a)({},e))}}),Object(p.jsx)(s.b,{path:"/auth",render:function(e){return Object(p.jsx)(ne,Object(u.a)({},e))}}),Object(p.jsx)(s.b,{path:"/logout",component:$}),Object(p.jsx)(s.b,{path:"/",exact:!0,component:Z}),Object(p.jsx)(s.a,{to:"/"})]})),Object(p.jsx)("div",{children:Object(p.jsx)(R,{children:Object(p.jsx)(r.Suspense,{fallback:Object(p.jsx)("p",{children:"Loading..."}),children:c})})})}))),ce=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,112)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))},ae=n(22),ie=n(66),oe=n(67),ue=n(26),se=n(4),de={ingredients:null,totalPrice:4,error:!1,building:!1},le={salad:.5,cheese:.4,meat:1.3,bacon:.7},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case se.a:return Object(u.a)(Object(u.a)({},e),{},{ingredients:Object(u.a)(Object(u.a)({},e.ingredients),{},Object(ue.a)({},t.ingType,e.ingredients[t.ingType]+1)),totalPrice:e.totalPrice+le[t.ingType],building:!0});case se.u:var n=e.ingredients[t.ingType]-1;return n<0?e:Object(u.a)(Object(u.a)({},e),{},{ingredients:Object(u.a)(Object(u.a)({},e.ingredients),{},Object(ue.a)({},t.ingType,e.ingredients[t.ingType]-1)),totalPrice:e.totalPrice-le[t.ingType],building:!0});case se.w:return Object(u.a)(Object(u.a)({},e),{},{ingredients:{salad:t.ingredients.salad,bacon:t.ingredients.bacon,cheese:t.ingredients.cheese,meat:t.ingredients.meat},error:!1,totalPrice:4,building:!1});case se.i:return Object(u.a)(Object(u.a)({},e),{},{error:!0});default:return e}},be=n(36),Oe={orders:[],loading:!1,purchased:!1},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case se.t:return Object(u.a)(Object(u.a)({},e),{},{purchased:!1});case se.r:return Object(u.a)(Object(u.a)({},e),{},{loading:!0});case se.s:var n=Object(u.a)(Object(u.a)({},t.orderData),{},{id:t.id});return Object(u.a)(Object(u.a)({},e),{},{orders:[].concat(Object(be.a)(e.orders),[n]),loading:!1,purchased:!0});case se.q:return Object(u.a)(Object(u.a)({},e),{},{loading:!1});case se.l:return Object(u.a)(Object(u.a)({},e),{},{loading:!0});case se.m:return Object(u.a)(Object(u.a)({},e),{},{orders:t.orders,loading:!1});case se.k:return Object(u.a)(Object(u.a)({},e),{},{loading:!1});default:return e}},pe={token:null,id:null,loading:!1,error:null,redirectPath:"/"},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case se.f:return Object(u.a)(Object(u.a)({},e),{},{error:null,loading:!0});case se.g:return Object(u.a)(Object(u.a)({},e),{},{error:null,loading:!1,token:t.token,id:t.id});case se.d:return Object(u.a)(Object(u.a)({},e),{},{error:t.error,loading:!1});case se.o:return Object(u.a)(Object(u.a)({},e),{},{token:null,id:null});case se.v:return Object(u.a)(Object(u.a)({},e),{},{redirectPath:t.path});default:return e}},ge=n(10),he=n.n(ge),_e=n(9),ve=n(35),me=n.n(ve),ke=he.a.mark(Se),ye=he.a.mark(Ie),Te=he.a.mark(Be),Ce=he.a.mark(we);function Se(){return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.removeItem("expirationDate");case 2:return e.next=4,localStorage.removeItem("token");case 4:return e.next=6,localStorage.removeItem("userId");case 6:return e.next=8,Object(_e.c)(Q.o());case 8:case"end":return e.stop()}}),ke)}function Ie(e){return he.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(_e.b)(1e3*e.expirationTime);case 2:return t.next=4,Object(_e.c)(Q.n());case 4:case"end":return t.stop()}}),ye)}function Be(e){var t,n,r;return he.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(_e.c)(Q.c());case 2:return t="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD6VxfodXFpcju6ibyEnqhv4_ywF3xGjcU",e.isSignUp&&(t="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD6VxfodXFpcju6ibyEnqhv4_ywF3xGjcU"),c.prev=4,c.next=7,me.a.post(t,{email:e.email,password:e.password,returnSecureToken:!0});case 7:return n=c.sent,c.next=10,new Date((new Date).getTime()+1e3*n.data.expiresIn);case 10:return r=c.sent,c.next=13,localStorage.setItem("expirationDate",r);case 13:return c.next=15,localStorage.setItem("token",n.data.idToken);case 15:return c.next=17,localStorage.setItem("userId",n.data.localId);case 17:return c.next=19,Object(_e.c)(Q.d(n.data.idToken,n.data.localId));case 19:return c.next=21,Object(_e.c)(Q.f(n.data.expiresIn));case 21:c.next=27;break;case 23:return c.prev=23,c.t0=c.catch(4),c.next=27,Object(_e.c)(Q.b(c.t0.response.data.error));case 27:case"end":return c.stop()}}),Te,null,[[4,23]])}function we(){var e,t;return he.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,localStorage.getItem("token");case 2:if(e=n.sent){n.next=8;break}return n.next=6,Object(_e.c)(Q.n());case 6:n.next=20;break;case 8:return n.next=10,new Date(localStorage.getItem("expirationDate"));case 10:if(!((t=n.sent)<=new Date)){n.next=16;break}return n.next=14,Object(_e.c)(Q.n());case 14:n.next=20;break;case 16:return n.next=18,Object(_e.c)(Q.d(e,localStorage.getItem("userId")));case 18:return n.next=20,Object(_e.c)(Q.f((t.getTime()-(new Date).getTime())/1e3));case 20:case"end":return n.stop()}}),Ce)}var Ee=he.a.mark(Ne);function Ne(e){var t;return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W.a.get("https://react-burger-tp-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json");case 3:return t=e.sent,e.next=6,Object(_e.c)(Q.w(t.data));case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),e.next=12,Object(_e.c)(Q.h());case 12:case"end":return e.stop()}}),Ee,null,[[0,8]])}var De=he.a.mark(Le),Ae=he.a.mark(Re);function Le(e){var t;return he.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(_e.c)(Q.r());case 2:return n.prev=2,n.next=5,W.a.post("/orders.json?auth="+e.token,e.orderData);case 5:return t=n.sent,n.next=8,Object(_e.c)(Q.s(t.data.name,e.orderData));case 8:n.next=14;break;case 10:return n.prev=10,n.t0=n.catch(2),n.next=14,Object(_e.c)(Q.q(n.t0));case 14:case"end":return n.stop()}}),De,null,[[2,10]])}function Re(e){var t,n,r,c;return he.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(_e.c)(Q.k());case 2:return t="?auth=".concat(e.token,'&orderBy="userId"&equalTo="').concat(e.userId,'"'),a.prev=3,a.next=6,W.a.get("/orders.json"+t);case 6:for(c in n=a.sent,r=[],n.data)r.push(Object(u.a)(Object(u.a)({},n.data[c]),{},{id:c}));return a.next=11,Object(_e.c)(Q.l(r));case 11:a.next=17;break;case 13:return a.prev=13,a.t0=a.catch(3),a.next=17,Object(_e.c)(Q.j());case 17:case"end":return a.stop()}}),Ae,null,[[3,13]])}var Ue=he.a.mark(Fe),Pe=he.a.mark(Ge),He=he.a.mark(Me);function Fe(){return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_e.a)([Object(_e.d)(se.e,Se),Object(_e.d)(se.c,Ie),Object(_e.d)(se.h,Be),Object(_e.d)(se.b,we)]);case 2:case"end":return e.stop()}}),Ue)}function Ge(){return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_e.d)(se.n,Ne);case 2:case"end":return e.stop()}}),Pe)}function Me(){return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_e.e)(se.p,Le);case 2:return e.next=4,Object(_e.d)(se.j,Re);case 4:case"end":return e.stop()}}),He)}var qe=ae.c,ze=Object(ae.b)({burger:je,order:fe,user:xe}),Ke=Object(oe.a)(),Xe=Object(ae.d)(ze,qe(Object(ae.a)(ie.a,Ke)));Ke.run(Fe),Ke.run(Ge),Ke.run(Me);var Ye=Xe,Je=Object(p.jsx)(d.a,{store:Ye,children:Object(p.jsx)(o.a,{children:Object(p.jsx)(re,{})})});i.a.render(Je,document.getElementById("root")),ce()}],[[102,1,2]]]);
//# sourceMappingURL=main.2fede9ba.chunk.js.map