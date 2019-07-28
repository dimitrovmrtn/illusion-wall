(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(t,e,n){},172:function(t,e,n){"use strict";n.r(e);var a={};n.r(a),n.d(a,"startAddingPost",function(){return P}),n.d(a,"startLoadingPost",function(){return C}),n.d(a,"startRemovingPost",function(){return L}),n.d(a,"startAddingComment",function(){return I}),n.d(a,"startLoadingComment",function(){return T}),n.d(a,"loadComments",function(){return x}),n.d(a,"removePost",function(){return M}),n.d(a,"addPost",function(){return R}),n.d(a,"addComment",function(){return U}),n.d(a,"loadPosts",function(){return V});var o=n(1),r=n.n(o),c=n(90),i=n.n(c),s=(n(102),n(12)),u=n(14),l=n(30),m=n(23),d=n(54),p=[];var f=Object(u.c)({posts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE_POST":return[].concat(Object(l.a)(t.slice(0,e.index)),Object(l.a)(t.slice(e.index+1)));case"ADD_POST":return[].concat(Object(l.a)(t),[e.post]);case"LOAD_POSTS":return e.posts;default:return t}},comments:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_COMMENT":return t[e.postId]?Object(d.a)({},t,Object(m.a)({},e.postId,[].concat(Object(l.a)(t[e.postId]),[e.comment]))):Object(d.a)({},t,Object(m.a)({},e.postId,[e.comment]));case"LOAD_COMMENTS":return e.comments;default:return t}}}),h=n(43),b=n(15),O=n(16),v=n(19),E=n(17),g=n(18);var j=function(t){var e=t.post;return r.a.createElement("figure",{className:"figure"},r.a.createElement(s.b,{to:"/single/".concat(e.id)}," ",r.a.createElement("img",{className:"photo",src:e.imageLink,alt:e.description})),r.a.createElement("figcaption",null," ",r.a.createElement("p",null," ",e.description," ")," "),r.a.createElement("div",{className:"button-container"},r.a.createElement("button",{onClick:function(){t.startRemovingPost(t.index,e.id),t.history.push("/")}}," Remove "),r.a.createElement(s.b,{className:"button",to:"/single/".concat(e.id)},r.a.createElement("div",{className:"comment-count"},r.a.createElement("div",{className:"speech-bubble"}," "),t.comments[e.id]?t.comments[e.id].length:0))))};var y=function(t){return r.a.createElement("div",null,r.a.createElement(s.b,{className:"addIcon",to:"/AddPhoto"}," "),r.a.createElement("div",{className:"photoGrid"},t.posts.sort(function(t,e){return e.id-t.id}).map(function(e,n){return r.a.createElement(j,Object.assign({key:n,post:e},t,{index:n}))})))},S=n(26),D=function(t){function e(){var t;return Object(b.a)(this,e),(t=Object(v.a)(this,Object(E.a)(e).call(this))).handleSubmit=t.handleSubmit.bind(Object(S.a)(t)),t}return Object(g.a)(e,t),Object(O.a)(e,[{key:"handleSubmit",value:function(t){t.preventDefault();var e=t.target.elements.link.value,n=t.target.elements.description.value,a={id:Number(new Date),description:n,imageLink:e};n&&e&&(this.props.startAddingPost(a),this.props.onHistory.push("/"))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"form"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",placeholder:"Link",name:"link"}),r.a.createElement("input",{type:"text",placeholder:"Desciption",name:"description"}),r.a.createElement("button",null," Post "))))}}]),e}(o.Component),N=function(t){function e(){var t;return Object(b.a)(this,e),(t=Object(v.a)(this,Object(E.a)(e).call(this))).handleSubmit=t.handleSubmit.bind(Object(S.a)(t)),t}return Object(g.a)(e,t),Object(O.a)(e,[{key:"handleSubmit",value:function(t){t.preventDefault();var e=t.target.elements.comment.value;this.props.startAddingComment(e,this.props),t.target.elements.comment.value=""}},{key:"render",value:function(){return r.a.createElement("div",{className:"comment"},this.props.comments.map(function(t,e){return r.a.createElement("p",{key:e}," ",t," ")}),r.a.createElement("form",{className:"comment-form",onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",placeholder:"comment",name:"comment"}),r.a.createElement("input",{type:"submit",hidden:!0})))}}]),e}(o.Component),_=function(t){function e(){return Object(b.a)(this,e),Object(v.a)(this,Object(E.a)(e).apply(this,arguments))}return Object(g.a)(e,t),Object(O.a)(e,[{key:"render",value:function(){var t=this.props,e=t.match,n=t.posts,a=Number(e.params.id),o=n.find(function(t){return t.id===a}),c=this.props.comments[e.params.id]||[],i=this.props.posts.findIndex(function(t){return t.id===a});return!0===this.props.loading?r.a.createElement("div",{className:"loader"},"...loading "):o?r.a.createElement("div",{className:"single-photo"},r.a.createElement(j,Object.assign({post:o},this.props,{index:i})),r.a.createElement(N,{startAddingComment:this.props.startAddingComment,comments:c,id:a})):r.a.createElement("h1",null,"...no post found")}}]),e}(o.Component),k=function(t){function e(){var t,n;Object(b.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(v.a)(this,(t=Object(E.a)(e)).call.apply(t,[this].concat(o)))).state={loading:!0},n}return Object(g.a)(e,t),Object(O.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.props.startLoadingPost().then(function(){t.setState({loading:!1})}),this.props.startLoadingComment()}},{key:"render",value:function(){var t=this;return r.a.createElement("div",null,r.a.createElement("h1",null,r.a.createElement(s.b,{to:"/"}," Illusion Wall ")),r.a.createElement(s.c,{exact:!0,path:"/",render:function(){return r.a.createElement("div",null,r.a.createElement(y,t.props))}}),r.a.createElement(s.c,{path:"/AddPhoto",render:function(e){var n=e.history;return r.a.createElement(D,Object.assign({},t.props,{onHistory:n}))}}),r.a.createElement(s.c,{path:"/single/:id",render:function(e){return r.a.createElement(_,Object.assign({loading:t.state.loading},t.props,e))}}))}}]),e}(o.Component),w=n(55);w.initializeApp({apiKey:"AIzaSyD6d0Uyx-VaTmULxJonRO5R2dajV5pYLQU",authDomain:"photowall-project.firebaseapp.com",databaseURL:"https://photowall-project.firebaseio.com",projectId:"photowall-project",storageBucket:"photowall-project.appspot.com",messagingSenderId:"243425047992",appId:"1:243425047992:web:f247b77ab57a0fcd"});var A=w.database();function P(t){return function(e){return A.ref("posts").update(Object(m.a)({},t.id,t)).then(function(){e(R(t))}).catch(function(t){console.log(t)})}}function C(){return function(t){return A.ref("posts").once("value").then(function(e){var n=[];e.forEach(function(t){n.push(t.val())}),t(V(n))}).catch(function(t){console.log(t)})}}function L(t,e){return function(n){return A.ref("posts/".concat(e)).remove().then(function(){n(M(t))}).catch(function(t){console.log(t)})}}function I(t,e){return function(n){return A.ref("comments/".concat(e)).push(t).then(function(){n(U(t,e))}).catch(function(t){console.log(t)})}}function T(){return function(t){return A.ref("comments").once("value").then(function(e){var n={};e.forEach(function(t){n[t.key]=Object.values(t.val())}),t(x(n))})}}function x(t){return{type:"LOAD_COMMENTS",comments:t}}function M(t){return{type:"REMOVE_POST",index:t}}function R(t){return{type:"ADD_POST",post:t}}function U(t,e){return{type:"ADD_COMMENT",comment:t,postId:e}}function V(t){return{type:"LOAD_POSTS",posts:t}}var X=n(93);var J=Object(X.a)(Object(h.b)(function(t){return{posts:t.posts,comments:t.comments}},function(t){return Object(u.b)(a,t)})(k)),z=n(96),B=n.n(z),H=Object(u.d)(f,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),Object(u.a)(B.a));i.a.render(r.a.createElement(h.a,{store:H},r.a.createElement(s.a,null,r.a.createElement(J,null))),document.getElementById("root"))},97:function(t,e,n){t.exports=n(172)}},[[97,1,2]]]);
//# sourceMappingURL=main.b4618478.chunk.js.map