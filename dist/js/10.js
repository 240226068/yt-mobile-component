webpackJsonp([10],{"2Hyi":function(t,l){},AN3l:function(t,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var s=[{label:"101分区101分区101分区101分区101分区101分区101分区101分区101分区101分区101分区",disabled:!0,id:1},{label:"101分区101分区101分区101分区101分区101分区101分区101分区101分区101分区101分区",id:2},{label:"103分区",id:3},{label:"104分区",id:4}],i={name:"radioList-example",data:function(){return{selectList:[],selectList2:[],selectList3:[],selectList4:[],list:s,list2:s,list3:s,list4:[{label:"北京",id:1},{label:"上海",id:2}]}}},a={render:function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("yt-page",{attrs:{title:"radioList",leftData:[],scroll:""}},[e("yt-cell",{attrs:{label:"隐患等级"}},[e("yt-radioList",{attrs:{list:t.list4,label:"label",val:"id"},model:{value:t.selectList4,callback:function(l){t.selectList4=l},expression:"selectList4"}})],1),t._v(" "),e("yt-split"),t._v(" "),e("yt-radioList",{staticClass:"list",attrs:{title:"选择按钮左边",list:t.list,label:"label",val:"id",inline:!1},model:{value:t.selectList,callback:function(l){t.selectList=l},expression:"selectList"}}),t._v(" "),e("yt-split"),t._v(" "),e("yt-radioList",{staticClass:"list",attrs:{title:"选择按钮右边",list:t.list2,label:"label",val:"id",pos:"right",simple:"",inline:!1},model:{value:t.selectList2,callback:function(l){t.selectList2=l},expression:"selectList2"}}),t._v(" "),e("yt-split"),t._v(" "),e("yt-radioList",{staticClass:"list",attrs:{title:"自定义",list:t.list3,label:"label",val:"id",pos:"right",inline:!1},scopedSlots:t._u([{key:"default",fn:function(l){return e("div",{},[e("p",[t._v("名称: "+t._s(l.label))]),t._v(" "),e("p",[t._v("id: "+t._s(l.id))])])}}]),model:{value:t.selectList3,callback:function(l){t.selectList3=l},expression:"selectList3"}})],1)},staticRenderFns:[]};var c=e("VU/8")(i,a,!1,function(t){e("2Hyi")},"data-v-fd46182e",null);l.default=c.exports}});