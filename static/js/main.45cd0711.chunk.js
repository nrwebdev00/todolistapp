(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{11:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),i=n(5),r=n.n(i),s=(n(16),n(2)),o=n(1),c=n(3),m=n(6),u=n(7),d=n(9),g=n(8),p=n(10),E=(n(17),function(e){return l.a.createElement("table",{className:"counter"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Task To Do:"),l.a.createElement("td",null,e.numberUncompleted)),l.a.createElement("tr",null,l.a.createElement("td",null,"Task Completed:"),l.a.createElement("td",null,e.numberCompleted)),l.a.createElement("tr",null,l.a.createElement("td",null,"Total:"),l.a.createElement("td",null,e.numberTotal))))}),k=function(e){return e.isEditing?l.a.createElement("input",{type:"text",value:e.children,onChange:e.handleNameEdits}):l.a.createElement("span",null,e.children)},h=function(e){return l.a.createElement("li",null,l.a.createElement(k,{isEditing:e.isEditing,handleNameEdits:function(t){return e.setName(t.target.value)}},e.name),l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",checked:e.isCompleted,onChange:e.handleCompleted}),"Completed"),l.a.createElement("button",{onClick:e.handleToggleEditing},e.isEditing?"save":"edit"),l.a.createElement("button",{className:"warning",onClick:e.handleRemove},"Remove"))},f=function(e){return e.name?l.a.createElement("li",{className:"pending"},l.a.createElement("span",null,e.name)):null},b=function(e){return l.a.createElement("ul",null,l.a.createElement(f,{name:e.pendingTask}),e.tasks.filter((function(t){return!e.isFiltered||!t.isCompleted})).map((function(t,n){return l.a.createElement(h,{key:n,name:t.name,isCompleted:t.isCompleted,isEditing:t.isEditing,handleCompleted:function(){return e.toggleCompletedAt(n)},handleToggleEditing:function(){return e.toggleEditingAt(n)},setName:function(t){return e.setNameAt(t,n)},handleRemove:function(){return e.removeTaskAt(n)}})})))},T=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,l=new Array(a),i=0;i<a;i++)l[i]=arguments[i];return(n=Object(d.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(l)))).state={isFiltered:!1,pendingTask:"",task:[{name:"Clean kitchen",isCompleted:!0,isEditing:!1}]},n.toggleTaskPropertyAt=function(e,t){return n.setState({task:n.state.task.map((function(n,a){return a===t?Object(c.a)({},n,Object(o.a)({},e,!n[e])):n}))})},n.toggleCompletedAt=function(e){return n.toggleTaskPropertyAt("isCompleted",e)},n.toggleEditingAt=function(e){return n.toggleTaskPropertyAt("isEditing",e)},n.removeTaskAt=function(e){return n.setState({task:[].concat(Object(s.a)(n.state.task.slice(0,e)),Object(s.a)(n.state.task.slice(e+1)))})},n.setNameAt=function(e,t){return n.setState({task:n.state.task.map((function(n,a){return a===t?Object(c.a)({},n,{name:e}):n}))})},n.toggleFilter=function(){return n.setState({isFiltered:!n.state.isFiltered})},n.handleNameInput=function(e){return n.setState({pendingTask:e.target.value})},n.newTaskSubmitHandler=function(e){e.preventDefault(),n.setState({task:[{name:n.state.pendingTask,isCompleted:!1,isEditing:!1}].concat(Object(s.a)(n.state.task)),pendingTask:""})},n.getTotaltask=function(){return n.state.task.length},n.getCompletedTask=function(){return n.state.task.reduce((function(e,t){return t.isCompleted?e+1:e}),0)},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.getTotaltask(),t=this.getCompletedTask(),n=e-t;return l.a.createElement("div",{className:"App"},l.a.createElement("header",null,l.a.createElement("h1",null,"To Do List"),l.a.createElement("p",null,"By: Nathon Reed"),l.a.createElement("form",{onSubmit:this.newTaskSubmitHandler},l.a.createElement("input",{type:"text",onChange:this.handleNameInput,value:this.state.pendingTask,placeholder:"New Task"}),l.a.createElement("button",{type:"submit",name:"submit",value:"submit"},"Add New Task"))),l.a.createElement("div",{className:"main"},l.a.createElement("div",{className:"main-top"},l.a.createElement("div",{className:"hide-task"},l.a.createElement("h2",null,"To Do Task"),l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",onChange:this.toggleFilter,checked:this.state.isFiltered}),"Hide Completed Task")),l.a.createElement(E,{numberTotal:e,numberCompleted:t,numberUncompleted:n})),l.a.createElement("div",{className:"main-body"},l.a.createElement(b,{tasks:this.state.task,toggleCompletedAt:this.toggleCompletedAt,toggleEditingAt:this.toggleEditingAt,setNameAt:this.setNameAt,isFiltered:this.state.isFiltered,removeTaskAt:this.removeTaskAt,pendingTask:this.state.pendingTask}))))}}]),t}(a.Component);r.a.render(l.a.createElement(T,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.45cd0711.chunk.js.map