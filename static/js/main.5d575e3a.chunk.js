(window.webpackJsonpclient_time_treker=window.webpackJsonpclient_time_treker||[]).push([[0],[,,,,,,,function(e,t,a){"use strict";a.d(t,"b",function(){return o});var n=a(0),r=a.n(n),s=a(9),o={hostName:"https://timetraker.herokuapp.com",token:null},i=r.a.createContext({api:new s.a({hostName:o.hostName})});t.a=i},,function(e,t,a){"use strict";var n=a(2),r=a(3),s=function(){function e(t){Object(n.a)(this,e),this.token=t.token||null,this.hostName=t.hostName}return Object(r.a)(e,[{key:"setToken",value:function(e){this.token=e}},{key:"fetch",value:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e){return fetch(e).then(function(e){return e.json()}).then(function(e){return"ok"!==e.status?Promise.reject(e.error):Promise.resolve(e.response)})})},{key:"fetchPost",value:function(e,t){var a="body=".concat(JSON.stringify(t));return fetch(e,{method:"POST",body:a}).then(function(e){return e.json()}).then(function(e){return"ok"!==e.status?Promise.reject(e.error):Promise.resolve(e.response)})}},{key:"register",value:function(e){var t={set:e},a="".concat(this.hostName,"?cmd=register&data=").concat(t);return this.fetchPost(a,t)}},{key:"signIn",value:function(e){var t={where:e},a="".concat(this.hostName,"?cmd=signin");return this.fetchPost(a,t)}},{key:"add",value:function(e,t){var a=JSON.stringify({model:e,set:t}),n="".concat(this.hostName,"?cmd=add&data=").concat(a,"&sig=").concat(this.token);return this.fetch(n)}},{key:"update",value:function(e,t,a){var n=JSON.stringify({model:e,set:t,where:a}),r="".concat(this.hostName,"?cmd=update&data=").concat(n,"&sig=").concat(this.token);return this.fetch(r)}},{key:"list",value:function(e,t){var a={model:e};(function(e){for(var t in e)return!1;return!0})(t)||(a.where=t);var n="".concat(this.hostName,"?cmd=list&data=").concat(JSON.stringify(a),"&sig=").concat(this.token);return this.fetch(n)}},{key:"view",value:function(e,t){var a=JSON.stringify({model:e,id:t}),n="".concat(this.hostName,"?cmd=view&data=").concat(a,"&sig=").concat(this.token);return this.fetch(n)}},{key:"del",value:function(e,t){var a=JSON.stringify({model:e,id:t}),n="".concat(this.hostName,"?cmd=del&data=").concat(a,"&sig=").concat(this.token);return this.fetch(n)}},{key:"exportExcel",value:function(e,t){var a=JSON.stringify({model:e,where:t}),n="".concat(this.hostName,"?cmd=excel&data=").concat(a,"&sig=").concat(this.token);return console.log("export excel: ",a),console.log("url: ",n),window.open(n),Promise.resolve(null)}}]),e}();t.a=s},function(e,t,a){function n(e){return e>9?e:"0"+e}e.exports={getMonth:a(39),formatDate:function(e){var t=e.getFullYear(),a=e.getMonth()+1,r=e.getDate();return"".concat(t,"-").concat(n(a),"-").concat(n(r))}}},,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=(a(30),a(14));t.default=function(e){for(var t=e.tasks,a=e.error,n=e.loading,o=e.onShowTask,i=[];;){if(a){i.push(r.a.createElement("div",{key:"TasksError",className:"TasksError"},"Error loading tasks"));break}if(n){i.push(r.a.createElement("div",{key:"TakssLoading",className:"TakssLoading"},"... Loading tasks"));break}t&&t.length>0?i=t.map(function(e){return r.a.createElement(s.default,Object.assign({onClick:function(t){var a=t.target;return o(a,e.id)},key:e.id},e))}):i.push(r.a.createElement("div",{key:"NoTasks",className:"NoTasks"},"No tasks"));break}return r.a.createElement("ul",{className:"list-gruop"},r.a.createElement("li",{className:"list-group-item",style:{padding:"0px"}},r.a.createElement("div",{className:"Task"},r.a.createElement("div",{className:"Task-date Task-heade-item-first"},"Date"),r.a.createElement("div",{className:"Task-client"},"Client"),r.a.createElement("div",{className:"Task-description"},"Description"),r.a.createElement("div",{className:"Task-timer Task-heade-timer"},"Timer"))),i)}},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=(a(31),a(20));t.default=function(e){var t=e.id,a=e.task_date,n=e.task_client,o=e.task_description,i=e.onClick;return r.a.createElement("li",{onClick:i,className:"list-group-item list-group-item-action",style:{padding:"0px"}},r.a.createElement("div",{key:t,className:"Task"},r.a.createElement("div",{className:"Task-date"},new Date(a).toLocaleDateString()),r.a.createElement("div",{className:"Task-client"},n),r.a.createElement("div",{className:"Task-description"},o),r.a.createElement("div",{className:"Task-timer"},r.a.createElement(s.Timer,{task_id:t}))))}},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=(a(38),a(10));function o(e){var t=e.className,a=e.days,n=e.selectDay,o=e.date,i=e.currentMonth,c=e.currentDay,l=e.onClick;return a.map(function(e,a){if(i&&c===e)return r.a.createElement("div",{className:t,key:a},r.a.createElement("div",{className:"curretnDay",onClick:function(){return l(e)}},e));if(n&&o){var u=Object(s.formatDate)(new Date(o.getFullYear(),o.getMonth(),e));if(n.includes(u))return r.a.createElement("div",{className:t,key:a},r.a.createElement("div",{className:"selectDay",onClick:function(){return l(e)}},e))}return r.a.createElement("div",{className:t,key:a,onClick:function(){return l(e)}},e)})}t.default=function(e){var t=e.date,a=e.select,n=e.onChange;t=new Date(t.getFullYear(),t.getMonth());var i=Object(s.getMonth)(t);return r.a.createElement("div",null,r.a.createElement("div",{className:"Month-title"},r.a.createElement("div",{onClick:function(){return n("month")}},t.toLocaleString("ru",{year:"numeric",month:"long"})),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return n("previous")},className:"btn"},"<"),r.a.createElement("button",{onClick:function(){return n("next")},className:"btn"},">"))),r.a.createElement("div",{className:"gridMont"},r.a.createElement(o,{onClick:function(){},className:"otherTextStyle",days:i[0]}),r.a.createElement(o,{onClick:function(){},className:"otherTextStyle",days:i[1]}),r.a.createElement(o,{onClick:n,days:i[2],currentMonth:i[4],currentDay:i[5],selectDay:a,date:t}),r.a.createElement(o,{onClick:function(){},className:"otherTextStyle",days:i[3]})))}},function(e,t,a){e.exports={Tasks:a(13).default,Task:a(14).default,ClientTasks:a(44).default,GroupTask:a(37).default}},,function(e,t,a){},,function(e,t,a){e.exports={Timer:a(32).default}},function(e,t,a){e.exports={Modal:a(34).default}},function(e,t,a){e.exports={Month:a(15).default,FilterDate:a(41).default}},,function(e,t,a){e.exports=a(43)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(12),r=a(2),s=a(3),o=a(6),i=a(4),c=a(1),l=a(5),u=a(0),m=a.n(u),h=(a(33),a(7)),d=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).state={run:!1,timer_begin_date:null,timer_end_date:null,time:0,timerId:null,extraTime:0,timers:[]},a.onClick=a.onClick.bind(Object(c.a)(a)),a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.context.api.list("timers",{task_id:this.props.task_id}).then(function(t){return e.setState(function(){return{timers:t,extraTime:e.getExtraTime(t)}})}).catch(console.log)}},{key:"onClick",value:function(){var e=this;this.setState(function(t){var a={};return t.run?(clearInterval(e.timerId),a.run=!1,a.timer_end_date=new Date,t.time>=6e4&&(a.timers=[{timer_begin_date:t.timer_begin_date,timer_end_date:a.timer_end_date}].concat(Object(n.a)(t.timers)),a.extraTime=e.getExtraTime(a.timers),a.time=0,console.log("Timer onClick: ",a.timer_end_date),e.context.api.add("timers",{task_id:e.props.task_id,timer_begin_date:t.timer_begin_date,timer_end_date:a.timer_end_date})),a):(e.timerId=setInterval(function(){e.setState(function(){return{time:e.getTime()}})},200),{run:!0,timer_begin_date:new Date,timer_end_date:null})})}},{key:"getExtraTime",value:function(e){return e.reduce(function(e,t){return e+(("string"===typeof t.timer_end_date?new Date(t.timer_end_date):t.timer_end_date)-("string"===typeof t.timer_begin_date?new Date(t.timer_begin_date):t.timer_begin_date))},0)}},{key:"getTime",value:function(){return null===this.state.timer_begin_date?0:null===this.state.timer_end_date?new Date-this.state.timer_begin_date:this.state.timer_end_date-this.state.timer_begin_date}},{key:"time",value:function(e){return{h:Math.trunc(e/36e5%60),m:Math.trunc(e/6e4%60),s:Math.trunc(e/1e3%60)}}},{key:"TimeFormat",value:function(e){var t=e.h,a=e.m,n=e.s;return a=a>9?a:"0"+a,n=n>9?n:"0"+n,"".concat(t=t>9?t:"0"+t,":").concat(a,":").concat(n)}},{key:"TimeFormatH",value:function(e){return(e.h+e.m/60).toFixed(2)}},{key:"render",value:function(){var e=this.time(this.state.time+this.state.extraTime),t=this.state.run?"Timer-btn Timer-btn-danger":"Timer-btn Timer-btn-success";return m.a.createElement("div",{className:"Timer"},m.a.createElement("button",{className:t,onClick:this.onClick},this.TimeFormat(e)," - ",this.TimeFormatH(e)))}}]),t}(m.a.Component);d.contextType=h.a,t.default=d},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(23),r=a(2),s=a(3),o=a(6),i=a(4),c=a(1),l=a(5),u=a(0),m=a.n(u),h=(a(35),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).onClose=a.onClose.bind(Object(c.a)(a)),a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"onClose",value:function(e){if(e.target.classList.contains("modal"))return this.props.onClick()}},{key:"render",value:function(){if(this.props.show){var e=Object(n.a)(this.props.children),t=e[0],a=e[1],r=e.slice(2);return[m.a.createElement("div",{className:"modal",style:{display:"block"},role:"dialog",onClick:this.onClose},m.a.createElement("div",{className:"modal-dialog",role:"document"},m.a.createElement("div",{className:"modal-content"},m.a.createElement("div",{className:"modal-header"},t,m.a.createElement("button",{onClick:this.props.onClick,type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},m.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),m.a.createElement("div",{className:"modal-body"},a),m.a.createElement("div",{className:"modal-footer"},m.a.createElement("button",{key:"close",type:"button",className:"btn btn-secondary","data-dismiss":"modal",onClick:this.props.onClick},"Close"),r)))),m.a.createElement("div",{className:"modal-backdrop"})]}return null}}]),t}(m.a.Component));t.default=h},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(3),s=a(6),o=a(4),i=a(1),c=a(5),l=a(0),u=a.n(l),m=a(7),h=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(o.a)(t).call(this,e))).state={groups:[]},a.onChange=a.onChange.bind(Object(i.a)(a)),a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.context.api.list("tasks",{task_parent:null}).then(function(t){return e.setState(function(e){return{groups:t}})})}},{key:"onChange",value:function(e){var t=e.target,a="null"===t.value?null:t.value;this.props.onChange(a)}},{key:"render",value:function(){return console.log("GroupTask: ",this.state.groups),u.a.createElement("select",{className:"form-control",name:"filter-task_parent",onChange:this.onChange,value:String(this.props.value)},u.a.createElement("option",{value:"null"},"\u0413\u0440\u0443\u043f\u043f\u044b"),this.state.groups.map(function(e){return u.a.createElement("option",{key:e.task_client,value:e.task_client},e.task_client)}))}}]),t}(u.a.Component);h.contextType=m.a,t.default=h},function(e,t,a){},function(e,t,a){var n=a(40),r=["\u0412\u0441","\u041f\u043d","\u0412\u0442","\u0421\u0440","\u0427\u0442","\u041f\u0442","\u0421\u0431"];e.exports=function(e){var t=e.getDay(),a=n(e),s=n(new Date(e.getFullYear(),e.getMonth()-1)),o=42-(t+a),i=(new Date).getMonth()===e.getMonth(),c=i?(new Date).getDate():0;return[r,new Array(t).fill().map(function(e,t){return s-t}).reverse(),new Array(a).fill().map(function(e,t){return t+1}),new Array(o).fill().map(function(e,t){return 1+t}),i,c]}},function(e,t){e.exports=function(e){return 32-new Date(e.getFullYear(),e.getMonth(),32).getDate()}},function(e,t,a){"use strict";a.r(t);var n=a(12),r=a(8),s=a(2),o=a(3),i=a(6),c=a(4),l=a(1),u=a(5),m=a(0),h=a.n(m),d=a(15),f=a(10);function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(a,!0).forEach(function(t){Object(r.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(c.a)(t).call(this,e))).state={currentDate:new Date,select:[]},a.onChangeFilter=a.onChangeFilter.bind(Object(l.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"getFirstAndLastMonth",value:function(e){return{from:new Date(e.getFullYear(),e.getMonth(),1),to:new Date(e.getFullYear(),e.getMonth()+1,0)}}},{key:"onChangeFilter",value:function(e){var t=this.state,a={},r=t.currentDate;switch(e){case"month":a={currentDate:new Date,select:[]};break;case"next":a=g({},t,{currentDate:new Date(r.getFullYear(),r.getMonth()+1)});break;case"previous":a=g({},t,{currentDate:new Date(r.getFullYear(),r.getMonth()-1)});break;default:if(isNaN(Number(e)))a={};else{var s=r.getFullYear(),o=r.getMonth(),i=Number(e),c=Object(f.formatDate)(new Date(s,o,i));a={select:t.select.includes(c)?t.select.filter(function(e){return e!==c}):[].concat(Object(n.a)(t.select),[c])}}}if(this.props.onChange)if(0===a.select.length){var l=a.currentDate?a.currentDate:t.currentDate;this.props.onChange(this.getFirstAndLastMonth(l))}else this.props.onChange(a.select);this.setState(function(e){return a})}},{key:"render",value:function(){return h.a.createElement(d.default,{onChange:this.onChangeFilter,date:this.state.currentDate,select:this.state.select})}}]),t}(h.a.Component);t.default=b},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(19),o=a.n(s),i=(a(29),a(2)),c=a(3),l=a(6),u=a(4),m=a(1),h=a(5),d=a(8),f=a(16),p=a(22),g=(a(42),a(7));function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function k(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(a,!0).forEach(function(t){Object(d.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function v(e){return e>9?e:"0"+e}function y(e){var t=e.getFullYear(),a=e.getMonth()+1,n=e.getDate();return"".concat(t,"-").concat(v(a),"-").concat(v(n))}var E=function(e){function t(e){var a;Object(i.a)(this,t),a=Object(l.a)(this,Object(u.a)(t).call(this,e));var n=new Date,r=new Date(n.getFullYear(),n.getMonth(),1),s=new Date(n.getFullYear(),n.getMonth()+1,0);return a.state={isLoadding:!1,isError:!1,clients:[],tasks:[],timers:[],filter:{task_parent:null,task_date:{from:y(r),to:y(s)}},modal:!1,modalNew:!1,formTask:{}},a.getTasks=a.getTasks.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"getTasks",value:function(e){var t=this;return e||(e=this.state),this.context.api.list("tasks",e.filter).then(function(a){return t.state.setState(function(){return k({},e,{tasks:a,isLoading:!1,isError:!1})})}).catch(function(a){return t.state.setState(function(){return k({},e,{isError:!0,isLoading:!1})})})}},{key:"render",value:function(){var e=this;return console.log(this.state),r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"Page"},r.a.createElement("div",{className:"Header"},r.a.createElement("nav",{className:"navbar navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"Time Tracker"),r.a.createElement("div",{className:"btn-group"},r.a.createElement("button",{className:"btn btn-outline-success",type:"button",onClick:function(){return e.setState({modal:!0,modalNew:!0,formTask:{task_parent:e.state.filter.task_parent}})}},"New Task"),r.a.createElement("button",{className:"btn btn-outline-success",type:"button",onClick:function(){e.context.api.exportExcel("tasks",e.state.filter).then(console.log).catch(console.log)}},"Export excel"),r.a.createElement("button",{className:"btn btn-outline-danger",type:"button",onClick:function(){return e.context.signOff()}},"Sign out")))),r.a.createElement("div",{className:"Nav"},r.a.createElement(p.FilterDate,{onChange:function(t){return e.getTasks(k({},e.state,{filter:k({},e.state.filter,{task_date:t})}))}}),r.a.createElement(f.GroupTask,{value:this.state.filter.task_parent,onChange:function(t){return e.getTasks(k({},e.state,{filter:k({},e.state.filter,{task_parent:t})}))}})),r.a.createElement("div",{className:"Article"},r.a.createElement(f.ClientTasks,Object.assign({},this.state,{setState:function(t){return e.setState(t)},onCloseModal:function(){return e.setState({modal:!1})}})))))}}]),t}(r.a.Component);E.contextType=g.a;var O=E;a(18);var N=function(e){var t=e.signin,a=e.register,n=e.onChange,s=e.user_name,o=e.password,i=e.remember;return r.a.createElement("div",{className:"form-signin"},r.a.createElement("div",{className:"text-center mb-4"},r.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Time Tracker")),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"InputUsername"},"Username"),r.a.createElement("input",{type:"text",className:"form-control",id:"InputUsername","aria-describedby":"usernameHelp",placeholder:"Username",name:"user_name",onChange:n,value:s})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Password",name:"password",onChange:n,value:o})),r.a.createElement("div",{className:"form-group form-check"},r.a.createElement("input",{type:"checkbox",className:"form-check-input",id:"exampleCheck1",name:"remember",onChange:n,value:i}),r.a.createElement("label",{className:"form-check-label",htmlFor:"exampleCheck1"},"Remember me")),r.a.createElement("div",{className:"btn-group btn-group-lg btn-group-form",role:"group","aria-label":"Basic example"},r.a.createElement("button",{className:"btn btn-outline-primary",type:"submit",onClick:a},"Register"),r.a.createElement("button",{className:"btn btn-primary",type:"submit",onClick:t},"Sign in")),r.a.createElement("p",{className:"mt-5 mb-3 text-muted text-center"},"\xa9 2019"))};var w=function(e){var t=e.signin,a=e.register,n=e.onChange,s=e.email,o=e.user_name,i=e.password,c=e.remember;return r.a.createElement("div",{className:"form-signin"},r.a.createElement("div",{className:"text-center mb-4"},r.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Time Tracker")),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"InputEmail"},"Email"),r.a.createElement("input",{type:"email",className:"form-control",id:"InputEmail","aria-describedby":"emailHelp",placeholder:"Email",name:"email",onChange:n,value:s})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"InputUsername"},"Username"),r.a.createElement("input",{type:"text",className:"form-control",id:"InputUsername","aria-describedby":"usernameHelp",placeholder:"Username",name:"user_name",onChange:n,value:o})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Password",name:"password",onChange:n,value:i})),r.a.createElement("div",{className:"form-group form-check"},r.a.createElement("input",{type:"checkbox",className:"form-check-input",id:"exampleCheck1",name:"remember",onChange:n,value:c}),r.a.createElement("label",{className:"form-check-label",htmlFor:"exampleCheck1"},"Remember me")),r.a.createElement("div",{className:"btn-group btn-group-lg btn-group-form",role:"group","aria-label":"Basic example"},r.a.createElement("button",{className:"btn btn-primary",type:"submit",onClick:a},"Register"),r.a.createElement("button",{className:"btn btn-outline-primary",type:"submit",onClick:t},"Sign in")),r.a.createElement("p",{className:"mt-5 mb-3 text-muted text-center"},"\xa9 2019"))},C=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={user_name:"",password:"",remember:!1,status:"signin"},a.onChange=a.onChange.bind(Object(m.a)(a)),a.signin=a.signin.bind(Object(m.a)(a)),a.register=a.register.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"onChange",value:function(e){var t=e.target;this.setState(function(){return t.hasOwnProperty("checked")?Object(d.a)({},t.name,t.checked):Object(d.a)({},t.name,t.value)})}},{key:"signin",value:function(){var e=this;return this.context.api.signIn({user_name:this.state.user_name,password:this.state.password}).then(function(t){return e.context.signIn(t)}).catch(console.log)}},{key:"register",value:function(){var e=this;return this.context.api.register({user_name:this.state.user_name,password:this.state.password,email:this.state.email,type:"user"}).then(function(t){return e.context.signIn(t)}).catch(console.log)}},{key:"render",value:function(){var e=this;return this.context.authorized?this.props.children:"signin"===this.state.status?r.a.createElement(N,Object.assign({},this.state,{register:function(){return e.setState(function(){return{status:"register"}})},signin:this.signin,onChange:this.onChange})):"register"===this.state.status?r.a.createElement(w,Object.assign({},this.state,{signin:function(){return e.setState(function(){return{status:"signin"}})},register:this.register,onChange:this.onChange})):void 0}}]),t}(r.a.Component);C.contextType=g.a;var j=C,T=a(9),_=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).signIn=a.signIn.bind(Object(m.a)(a)),a.signOff=a.signOff.bind(Object(m.a)(a)),a.state={api:new T.a({hostName:g.b.hostName}),authorized:!1},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"signIn",value:function(e){var t=e.token;console.log(t),this.setState(function(){return{api:new T.a({hostName:g.b.hostName,token:t}),authorized:!!t}})}},{key:"signOff",value:function(){this.setState(function(){return{authorized:!1}})}},{key:"render",value:function(){return r.a.createElement(g.a.Provider,{value:{api:this.state.api,authorized:this.state.authorized,signIn:this.signIn,signOff:this.signOff}},r.a.createElement(j,null,r.a.createElement(O,null)))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},function(e,t,a){"use strict";a.r(t);var n=a(8),r=a(2),s=a(3),o=a(6),i=a(4),c=a(1),l=a(5),u=a(0),m=a.n(u),h=a(13),d=a(21);a(36);function f(e){return e>9?e:"0"+e}function p(e){var t=e.getFullYear(),a=e.getMonth()+1,n=e.getDate();return"".concat(t,"-").concat(f(a),"-").concat(f(n))}var g=function(e){var t=e.id,a=e.task_parent,n=(e.task_type,e.task_date),r=e.task_client,s=e.task_description,o=e.onChange,i=n?new Date(n):new Date;return m.a.createElement("form",{key:t},m.a.createElement("div",{className:"form-group"},m.a.createElement("label",{htmlFor:"exampleInputTaskParent"},"Parent"),m.a.createElement("input",{name:"formTask-task_parent",type:"text",className:"form-control",id:"exampleInputEmail1",placeholder:"Enter parent",value:a,onChange:o})),m.a.createElement("div",{className:"form-group"},m.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Date"),m.a.createElement("input",{name:"formTask-task_date",type:"date",className:"form-control",id:"exampleInputEmail1",placeholder:"Enter date",value:p(i),onChange:o})),m.a.createElement("div",{className:"form-group"},m.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Client"),m.a.createElement("input",{name:"formTask-task_client",type:"text",className:"form-control",id:"exampleInputPassword1",placeholder:"Enter name client",value:r,onChange:o})),m.a.createElement("div",{className:"form-group"},m.a.createElement("label",{htmlFor:"exampleFormControlTextarea1"},"Description"),m.a.createElement("textarea",{name:"formTask-task_description",className:"form-control",id:"exampleFormControlTextarea1",rows:"3",onChange:o,value:s})))},b=a(7);function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function v(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(a,!0).forEach(function(t){Object(n.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var y=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).getTasks=a.getTasks.bind(Object(c.a)(a)),a.onSubmit=a.onSubmit.bind(Object(c.a)(a)),a.onChange=a.onChange.bind(Object(c.a)(a)),a.onShowTask=a.onShowTask.bind(Object(c.a)(a)),a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"onUpdate",value:function(){var e=this;return this.contextapi.update("tasks",this.props.formTask,{id:this.props.formTask.id}).then(function(){return e.props.setState(function(e){return{modal:!1,madalNew:!1,tasks:e.tasks.map(function(t){return t.id===e.formTask.id?e.formTask:t})}})}).catch(console.log)}},{key:"onDel",value:function(){var e=this;return this.context.api.del("tasks",this.props.formTask.id).then(function(){return e.props.setState(function(t){return{modal:!1,madalNew:!1,tasks:t.tasks.filter(function(t){return t.id!==e.props.formTask.id})}})}).catch(console.log)}},{key:"onShowTask",value:function(e,t){if(!e.classList.contains("Timer-btn")){var a=this.props.tasks.find(function(e){return e.id===t});this.props.setState(function(){return{formTask:a,modal:!0,modalNew:!1}})}}},{key:"onChange",value:function(e){var t=this,a=e.target,r=a.name.split("-");return 1===r.length?this.props.setState(function(e){return Object(n.a)({},r[0],a.value)}):2===r.length?this.props.setState(function(){return Object(n.a)({},r[0],v({},t.props[r[0]],Object(n.a)({},r[1],a.value)))}):void 0}},{key:"getTasks",value:function(e){var t=this;return e||(e=this.props),this.context.api.list("tasks",e.filter).then(function(a){return t.props.setState(function(){return v({},e,{tasks:a,loading:!1,error:!1})})}).catch(function(a){return t.props.setState(function(){return v({},e,{error:!0,loading:!1})})})}},{key:"onSubmit",value:function(e){var t=this;for(var a in e)if(""===e[a])return null;this.context.api.add("tasks",e).then(function(){return t.getTasks(v({},t.props,{modal:!1}))}).catch(console.log)}},{key:"componentDidMount",value:function(){this.getTasks()}},{key:"render",value:function(){var e=this;return console.log(this.props),m.a.createElement("div",null,m.a.createElement(h.default,{tasks:this.props.tasks,error:this.props.isError,loading:this.props.isLoading,onShowTask:this.onShowTask}),m.a.createElement(d.Modal,{show:this.props.modal,onClick:this.props.onCloseModal},this.props.modalNew?[m.a.createElement("h5",{key:"title",className:"modal-title"},"New task"),m.a.createElement(g,Object.assign({key:"fomr"},this.props.formTask,{onChange:this.onChange})),m.a.createElement("button",{key:"add",onClick:function(){return e.onSubmit(e.props.formTask)},className:"btn btn-success"},"Add")]:[m.a.createElement("h5",{key:"title",className:"modal-title"},"Show task"),m.a.createElement(g,Object.assign({key:"form"},this.props.formTask,{onChange:this.onChange})),m.a.createElement("button",{key:"delete",onClick:function(){return e.onDel()},className:"btn btn-danger"},"delete"),m.a.createElement("button",{key:"update",onClick:function(){return e.onUpdate()},className:"btn btn-success"},"Update")]))}}]),t}(m.a.Component);y.contextType=b.a;t.default=y}],[[24,1,2]]]);
//# sourceMappingURL=main.5d575e3a.chunk.js.map