(function(t){function e(e){for(var r,s,u=e[0],l=e[1],i=e[2],d=0,f=[];d<u.length;d++)s=u[d],a[s]&&f.push(a[s][0]),a[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);c&&c(e);while(f.length)f.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,u=1;u<n.length;u++){var l=n[u];0!==a[l]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/vue-trello/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var i=0;i<u.length;i++)e(u[i]);var c=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},"158c":function(t,e,n){"use strict";var r=n("5410"),a=n.n(r);a.a},"17ad":function(t,e,n){},5410:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=n("ecee"),o=n("c074"),s=n("ad3d");a["c"].add(o["a"]),r["a"].component("AppIcon",s["a"]);var u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},l=[],i=(n("034f"),n("2877")),c={},d=Object(i["a"])(c,u,l,!1,null,null,null),f=d.exports,p=n("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"board"},[n("div",{staticClass:"flex flex-row items-start"},[t._l(t.board.columns,function(e,r){return n("BoardColumn",{key:r,attrs:{columnIndex:r,column:e,board:t.board}})}),n("div",{staticClass:"column flex"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newColumnName,expression:"newColumnName"}],staticClass:"p-2 mr-2 flex-grow",attrs:{type:"text",placeholder:"New Column Name"},domProps:{value:t.newColumnName},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.createColumn(e)},input:function(e){e.target.composing||(t.newColumnName=e.target.value)}}})])],2),t.isTaskOpen?n("div",{staticClass:"task-bg",on:{click:function(e){return e.target!==e.currentTarget?null:t.close(e)}}},[n("router-view")],1):t._e()])},v=[],k=(n("7f7f"),n("cebc")),b=n("2f62"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("AppDrop",{on:{drop:t.moveTaskOrColumn}},[n("AppDrag",{staticClass:"column",attrs:{transferData:{type:"column",fromColumnIndex:t.columnIndex}}},[n("div",{staticClass:"flex items-center mb-2 font-bold"},[t._v("\n      "+t._s(t.column.name)+"\n    ")]),n("div",{staticClass:"list-reset"},[t._l(t.column.tasks,function(e,r){return n("ColumnTask",{key:r,attrs:{task:e,column:t.column,taskIndex:r,columnIndex:t.columnIndex,board:t.board}})}),n("input",{staticClass:"block p-2 w-full bg-transparent",attrs:{type:"text",placeholder:"+ Enter new task"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.createTask(e,t.column.tasks)}}})],2)])],1)},g=[],y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("AppDrop",{on:{drop:t.moveTaskOrColumn}},[n("AppDrag",{staticClass:"task",attrs:{transferData:{type:"task",fromColumnIndex:t.columnIndex,fromTaskIndex:t.taskIndex}},nativeOn:{click:function(e){return t.goToTask(t.task)}}},[n("span",{staticClass:"w-full flex-no-shrink font-bold"},[t._v("\n      "+t._s(t.task.name)+"\n    ")]),t.task.description?n("p",{staticClass:"w-full flex-no-shrink mt-1 text-sm"},[t._v("\n      "+t._s(t.task.description)+"\n    ")]):t._e()])],1)},x=[],C=(n("c5f6"),{props:{column:{type:Object,required:!0},columnIndex:{type:Number,required:!0},board:{type:Object,required:!0}},methods:{moveTaskOrColumn:function(t){"task"===t.type?this.moveTask(t):this.moveColumn(t)},moveTask:function(t){var e=t.fromColumnIndex,n=t.fromTaskIndex,r=this.board.columns[e].tasks;this.$store.commit("MOVE_TASK",{fromTasks:r,toTasks:this.column.tasks,fromTaskIndex:n,toTaskIndex:this.taskIndex})},moveColumn:function(t){var e=t.fromColumnIndex;this.$store.commit("MOVE_COLUMN",{fromColumnIndex:e,toColumnIndex:this.columnIndex})}}}),T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{on:{drop:function(e){return e.stopPropagation(),t.onDrop(e)},dragover:function(t){t.preventDefault()},dragenter:function(t){t.preventDefault()}}},[t._t("default")],2)},_=[],O={methods:{onDrop:function(t){var e=JSON.parse(t.dataTransfer.getData("payload"));this.$emit("drop",e)}}},w=O,I=Object(i["a"])(w,T,_,!1,null,null,null),A=I.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{draggable:""},on:{dragstart:function(e){return e.target!==e.currentTarget?null:t.onDrag(e)},dragover:function(t){t.preventDefault()},dragenter:function(t){t.preventDefault()}}},[t._t("default")],2)},j=[],D=n("f499"),$=n.n(D),N={props:{transferData:{type:Object,required:!0}},methods:{onDrag:function(t){t.dataTransfer.effectAllowed="move",t.dataTransfer.dropEffect="move",t.dataTransfer.setData("payload",$()(this.transferData))}}},S=N,P=Object(i["a"])(S,E,j,!1,null,null,null),M=P.exports,q={components:{AppDrag:M,AppDrop:A},mixins:[C],props:{task:{type:Object,required:!0},taskIndex:{type:Number,required:!0}},methods:{goToTask:function(t){this.$router.push({name:"task",params:{id:t.id}})}}},K=q,U=(n("5804"),Object(i["a"])(K,y,x,!1,null,null,null)),J=U.exports,L={components:{ColumnTask:J,AppDrag:M,AppDrop:A},mixins:[C],methods:{createTask:function(t,e){this.$store.commit("CREATE_TASK",{tasks:e,name:t.target.value}),t.target.value=""}}},R=L,V=(n("f9e1"),Object(i["a"])(R,h,g,!1,null,null,null)),B=V.exports,z={components:{BoardColumn:B},data:function(){return{newColumnName:""}},computed:Object(k["a"])({},Object(b["c"])(["board"]),{isTaskOpen:function(){return"task"===this.$route.name}}),methods:{close:function(){this.$router.push({name:"board"})},createColumn:function(){this.$store.commit("CREATE_COLUMN",{name:this.newColumnName}),this.newColumnName=""}}},F=z,G=(n("158c"),Object(i["a"])(F,m,v,!1,null,null,null)),H=G.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"task-view"},[n("div",{staticClass:"flex flex-col flex-grow items-start justify-between px-4 font-bold"},[n("input",{staticClass:"p-2 w-full mr-2 block text-xl font-bold",attrs:{type:"text"},domProps:{value:t.task.name},on:{change:function(e){return t.updateTaskProperty(e,"name")},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.updateTaskProperty(e,"name")}}}),n("textarea",{staticClass:"relative w-full bg-transparent px-2 border mt-2 h-64 border-none leading-normal",domProps:{value:t.task.description},on:{change:function(e){return t.updateTaskProperty(e,"description")}}})])])},W=[],X={computed:Object(k["a"])({},Object(b["b"])(["getTask"]),{task:function(){return this.getTask(this.$route.params.id)}}),methods:{updateTaskProperty:function(t,e){this.$store.commit("UPDATE_TASK",{task:this.task,key:e,value:t.target.value})}}},Y=X,Z=(n("b39f"),Object(i["a"])(Y,Q,W,!1,null,null,null)),tt=Z.exports;r["a"].use(p["a"]);var et=new p["a"]({base:"/vue-trello/",routes:[{path:"/",name:"board",component:H,children:[{path:"task/:id",name:"task",component:tt}]}]}),nt=n("5d73"),rt=n.n(nt);n("6b54");function at(){return Math.random().toString(16).slice(2)}function ot(t){t.subscribe(function(t,e){localStorage.setItem("board",$()(e.board))})}var st={name:"workshop",columns:[{name:"todo",tasks:[{description:"hello world, I am a student who is learning vuejs",name:"first task",id:at(),userAssigned:null},{description:"",name:"second task",id:at(),userAssigned:null},{description:"",name:"and thrid",id:at(),userAssigned:null}]},{name:"in-progress",tasks:[{description:"",name:"first task",id:at(),userAssigned:null}]},{name:"done",tasks:[{description:"",name:"first task",id:at(),userAssigned:null}]}]};r["a"].use(b["a"]);var ut=JSON.parse(localStorage.getItem("board"))||st,lt=new b["a"].Store({plugins:[ot],state:{board:ut},getters:{getTask:function(t){return function(e){var n=!0,r=!1,a=void 0;try{for(var o,s=rt()(t.board.columns);!(n=(o=s.next()).done);n=!0){var u=o.value,l=!0,i=!1,c=void 0;try{for(var d,f=rt()(u.tasks);!(l=(d=f.next()).done);l=!0){var p=d.value;if(p.id===e)return p}}catch(m){i=!0,c=m}finally{try{l||null==f.return||f.return()}finally{if(i)throw c}}}}catch(m){r=!0,a=m}finally{try{n||null==s.return||s.return()}finally{if(r)throw a}}}}},mutations:{CREATE_TASK:function(t,e){var n=e.tasks,r=e.name;n.push({name:r,id:at(),description:""})},CREATE_COLUMN:function(t,e){var n=e.name;t.board.columns.push({name:n,tasks:[]})},UPDATE_TASK:function(t,e){var n=e.task,r=e.key,a=e.value;n[r]=a},MOVE_TASK:function(t,e){var n=e.fromTasks,r=e.toTasks,a=e.fromTaskIndex,o=e.toTaskIndex,s=n.splice(a,1)[0];r.splice(o,0,s)},MOVE_COLUMN:function(t,e){var n=e.fromColumnIndex,r=e.toColumnIndex,a=t.board.columns,o=a.splice(n,1)[0];a.splice(r,0,o)}}}),it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"button",class:t.typeClasses,attrs:{type:"button"}},[t._t("default")],2)},ct=[],dt={props:{type:{type:String}},computed:{typeClasses:function(){switch(this.type){case"danger":return"bg-red";default:return"bg-teal"}}}},ft=dt,pt=(n("b9b4"),Object(i["a"])(ft,it,ct,!1,null,"460433cb",null)),mt=pt.exports;r["a"].component("AppButton",mt),r["a"].config.productionTip=!1,new r["a"]({router:et,store:lt,render:function(t){return t(f)}}).$mount("#app")},5804:function(t,e,n){"use strict";var r=n("bc54"),a=n.n(r);a.a},"64a9":function(t,e,n){},"6eff":function(t,e,n){},aedd:function(t,e,n){},b39f:function(t,e,n){"use strict";var r=n("aedd"),a=n.n(r);a.a},b9b4:function(t,e,n){"use strict";var r=n("6eff"),a=n.n(r);a.a},bc54:function(t,e,n){},f9e1:function(t,e,n){"use strict";var r=n("17ad"),a=n.n(r);a.a}});
//# sourceMappingURL=app.ef98a607.js.map