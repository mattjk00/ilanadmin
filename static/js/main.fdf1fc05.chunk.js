(this.webpackJsonpilanadmin=this.webpackJsonpilanadmin||[]).push([[0],{70:function(e,t,n){"use strict";n.r(t);var a=n(34),r=n.n(a),s=n(48),i=n(33),c=n(22),u=n(19),o=n(43),l=n(42),h=n(1),d=n.n(h),j=n(14),b=n.n(j),p=(n(81),n(68)),f=n(53),O=n(65),g=n(67),x=n(54),v=n(96),k=n(94),m=n(97),C=n(55),y=n(91),w=n(92),A=n(93),S=n(40),R=n(9),T=(S.a.initializeApp({apiKey:"AIzaSyAZVS4VPzvlkpopkhJrie1Onk7-RNe4mZs",authDomain:"ilan-bc1b3.firebaseapp.com",projectId:"ilan-bc1b3",storageBucket:"ilan-bc1b3.appspot.com",messagingSenderId:"715467029812",appId:"1:715467029812:web:319a4b5762c6c742457961"}),S.a.firestore()),L=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={selected:1,imgUrlValue:"",selectedLink:""},a.handleChange=a.handleChange.bind(Object(u.a)(a)),a.textChanged=a.textChanged.bind(Object(u.a)(a)),a.buttonClick=a.buttonClick.bind(Object(u.a)(a)),a}return Object(c.a)(n,[{key:"handleChange",value:function(e,t){this.setState({selected:e.target.value,selectedLink:t.props.name})}},{key:"componentWillReceiveProps",value:function(e){var t=e.content?e.content.img_src:"logo192.png";this.setState({imgUrlValue:t})}},{key:"buttonClick",value:function(){this.props.updateFeatured(this.state,this.props.value)}},{key:"componentDidUpdate",value:function(){}},{key:"textChanged",value:function(e){this.setState({imgUrlValue:e.target.value})}},{key:"imgSrc",value:function(){return this.props.content?this.props.content.img_src:"logo192.png"}},{key:"titleText",value:function(){return this.props.content?this.props.content.link?this.props.content.link.displayText:"ERROR (1)":"ERROR (2)"}},{key:"render",value:function(){return Object(R.jsx)(f.a,{item:!0,children:Object(R.jsxs)(O.a,{children:[Object(R.jsx)("img",{src:this.state.imgUrlValue,width:"192px",height:"192px"},Date.now()),Object(R.jsxs)(g.a,{style:{padding:"25px"},children:[Object(R.jsx)(x.a,{children:this.titleText()}),Object(R.jsxs)("form",{children:[Object(R.jsx)(v.a,{id:"",children:"Song/Album"}),Object(R.jsx)(k.a,{value:this.state.selected,onChange:this.handleChange,children:this.props.allLinks.map((function(e,t){return Object(R.jsx)(m.a,{value:e.displayText,name:e.uid,children:e.displayText},e.uid)}))}),Object(R.jsx)("br",{}),Object(R.jsx)("br",{}),Object(R.jsx)(C.a,{onChange:this.textChanged,variant:"outlined",label:"image url",value:this.state.imgUrlValue})]},this.props.value)]}),Object(R.jsx)(p.a,{color:"primary",onClick:this.buttonClick,children:"Save"})]})})}}]),n}(d.a.Component),U=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var a;Object(i.a)(this,n),a=t.call(this,e);var r=T.collection("featured"),s=T.collection("links");return a.state={featuredRef:r,linksRef:s,featured:[],allLinks:[]},a.updateFeatured=a.updateFeatured.bind(Object(u.a)(a)),a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=Object(s.a)(r.a.mark((function e(){var t,n,a,s,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=S.a.auth().currentUser,console.log(t),e.next=4,this.state.featuredRef.get();case 4:return n=e.sent,a=[],n.forEach((function(e){a.push(e.data())})),a.sort((function(e,t){return e.order>t.order?1:-1})),e.next=10,this.state.linksRef.get();case 10:s=e.sent,i=[],s.forEach((function(e){for(var t=0;t<a.length;t++)a[t].link_id===e.data().uid&&(a[t].link=e.data());i.push(e.data())})),this.setState({featured:a,allLinks:i});case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderCard",value:function(e){return Object(R.jsx)(L,{value:e,content:this.state.featured[e],featured:this.state.featured,allLinks:this.state.allLinks,updateFeatured:this.updateFeatured})}},{key:"handleClick",value:function(){}},{key:"updateFeatured",value:function(){var e=Object(s.a)(r.a.mark((function e(t,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.state.featuredRef.where("order","==",n).get();case 2:e.sent.forEach((function(e){console.log(e.id,"=>",e.data());e.ref.update({img_src:t.imgUrlValue,link_id:t.selectedLink})}));case 4:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(R.jsx)("div",{children:Object(R.jsx)(f.a,{item:!0,children:Object(R.jsxs)(f.a,{container:!0,spacing:2,children:[this.renderCard(0),this.renderCard(1),this.renderCard(2),this.renderCard(3),this.renderCard(4),this.renderCard(5),this.renderCard(6),this.renderCard(7),this.renderCard(8),this.renderCard(9)]})})})}}]),n}(d.a.Component),I=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={username:"",password:""},a.usernameTextChanged=a.usernameTextChanged.bind(Object(u.a)(a)),a.passwordTextChanged=a.passwordTextChanged.bind(Object(u.a)(a)),a.login=a.login.bind(Object(u.a)(a)),a}return Object(c.a)(n,[{key:"usernameTextChanged",value:function(e){this.setState({username:e.target.value})}},{key:"passwordTextChanged",value:function(e){this.setState({password:e.target.value})}},{key:"login",value:function(){var e=this;console.log(this.state),S.a.auth().signInWithEmailAndPassword(this.state.username,this.state.password).then((function(t){console.log("Success"),e.props.reAuth()})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return Object(R.jsxs)("div",{children:[Object(R.jsx)(x.a,{children:"LOGIN"}),Object(R.jsx)(O.a,{children:Object(R.jsx)(g.a,{children:Object(R.jsxs)("form",{children:[Object(R.jsx)(C.a,{label:"Username",onChange:this.usernameTextChanged,value:this.state.username}),Object(R.jsx)("br",{}),Object(R.jsx)(C.a,{label:"Password",onChange:this.passwordTextChanged,value:this.state.password,type:"password"}),Object(R.jsx)("br",{}),Object(R.jsx)("br",{}),Object(R.jsx)(p.a,{color:"primary",onClick:this.login,children:"Login"})]})})})]})}}]),n}(d.a.Component);function V(e){return Object(R.jsx)(y.a,{position:"static",children:Object(R.jsx)(w.a,{children:Object(R.jsx)(x.a,{variant:"h6",children:"Ilan Admin"})})})}var E=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={auth:!1},a.checkAuth=a.checkAuth.bind(Object(u.a)(a)),a}return Object(c.a)(n,[{key:"render",value:function(){var e=Object(R.jsx)(U,{});return this.state.auth||(e=Object(R.jsx)(I,{reAuth:this.checkAuth})),Object(R.jsx)("div",{children:Object(R.jsxs)(A.a,{children:[Object(R.jsx)(V,{}),Object(R.jsx)("br",{}),e]})})}},{key:"componentDidMount",value:function(){this.checkAuth()}},{key:"checkAuth",value:function(){var e=Object(s.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=!1,e.next=3,S.a.auth().onAuthStateChanged((function(e){e&&(t=!0)}));case 3:console.log("Auth",t),this.setState({auth:t});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),n}(d.a.Component);b.a.render(Object(R.jsx)(E,{}),document.getElementById("root"))},81:function(e,t,n){}},[[70,1,2]]]);
//# sourceMappingURL=main.fdf1fc05.chunk.js.map