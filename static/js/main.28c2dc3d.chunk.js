(this.webpackJsonpmyday=this.webpackJsonpmyday||[]).push([[0],{46:function(t,e,n){},47:function(t,e,n){"use strict";n.r(e);var a=n(2),o=n.n(a),c=n(18),r=n.n(c),l=n(9),s=n(3),i=n(4),p=n(6),d=n(5),u=n(0);var h={background:"#009999",color:"black",textAlign:"center",padding:"10px",fontSize:"30px"},j=function(){return Object(u.jsx)("header",{style:h,children:Object(u.jsx)("h1",{children:"Plan your day"})})},b=function(t){Object(p.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).myStyle=function(){return{background:"Whitesmoke",padding:"10px",borderBottom:"2px #ccc dotted",textDecoration:t.props.plan.completed?"line-through":"none",fontSize:"25px",color:"black"}},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.props.plan,e=t.id,n=t.title;return Object(u.jsx)("div",{style:this.myStyle(),children:Object(u.jsxs)("p",{children:[Object(u.jsx)("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)})," "," ",n,Object(u.jsx)("button",{className:"btnDelete",onClick:this.props.delPlan.bind(this,e),children:"Delete"})]})})}}]),n}(a.Component),m=n(19),f=n.n(m),O=function(t){Object(p.a)(n,t);var e=Object(d.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return this.props.plans.map((function(e){return Object(u.jsx)(b,{plan:e,markComplete:t.props.markComplete,delPlan:t.props.delPlan},e.id)}))}}]),n}(a.Component);b.propTypes={plan:f.a.object.isRequired};var y=O,v=n(20),x=function(t){Object(p.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={title:""},t.onSubmit=function(e){e.preventDefault(),t.props.AddPlan(t.state.title),t.setState({title:""})},t.onChange=function(e){t.setState(Object(v.a)({},e.target.name,e.target.value))},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("form",{onSubmit:this.onSubmit,className:"addPlanForm",children:[Object(u.jsx)("input",{type:"text",name:"title",placeholder:"Got a new plan today?",onChange:this.onChange,className:"txtAddPlan",value:this.state.title}),Object(u.jsx)("input",{type:"submit",value:"Create Plan",className:"btnAddPlan"})]})}}]),n}(a.Component),k=n(7),g=n.n(k),C=(n(46),function(t){Object(p.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={plans:[]},t.delPlan=function(e){g.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(e)).then((function(n){return t.setState({plans:Object(l.a)(t.state.plans.filter((function(t){return t.id!==e})))})}))},t.AddPlan=function(e){g.a.post("https://jsonplaceholder.typicode.com/todos",{title:e,completed:!1}).then((function(e){return t.setState({plans:[].concat(Object(l.a)(t.state.plans),[e.data])})}))},t.markComplete=function(e){t.setState({plans:t.state.plans.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))})},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;g.a.get("https://jsonplaceholder.typicode.com/todos?_limit=5").then((function(e){return t.setState({plans:e.data})}))}},{key:"render",value:function(){return console.log(this.state.plans),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(j,{}),Object(u.jsx)(x,{AddPlan:this.AddPlan}),Object(u.jsx)(y,{plans:this.state.plans,markComplete:this.markComplete,delPlan:this.delPlan})]})}}]),n}(a.Component));r.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(C,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.28c2dc3d.chunk.js.map