webpackJsonp([2],{OdcM:function(t,e){},QW9q:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={manage:"知识库管理",video:"视频学习库",statics:"知识库统计"},o={data:function(){var t=this;return{TABS:n,list:[{text:"推荐"},{text:"分享",badge:{value:20}},{text:"推荐",badge:{value:20}}],input:!1,more:!1,leftData:[{avatar:a("Zfh5"),click:function(){console.log("点击了头像")}}],rightData:[{font:"iconfont icon-more",click:function(){t.more=!t.more}}]}},methods:{handler:function(t){console.log("点击了",t),this.more=!1}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("yt-page",{attrs:{more:t.more,leftData:t.leftData,rightData:t.rightData,flex:""},on:{"update:more":function(e){t.more=e}}},[a("ul",{staticClass:"ul",attrs:{slot:"more"},slot:"more"},t._l(t.TABS,function(e){return a("li",{key:e,on:{click:function(a){t.handler(e)}}},[t._v(t._s(e))])})),t._v(" "),a("yt-buttonTab",{attrs:{slot:"title",list:t.list},slot:"title"}),t._v(" "),a("div",{staticStyle:{flex:"1"}},[t._v("\n    这里是具体内容\n  ")]),t._v(" "),a("yt-btn",[t._v("提交")])],1)},staticRenderFns:[]};var l=a("VU/8")(o,i,!1,function(t){a("OdcM"),a("YlRw")},"data-v-0855a42a",null);e.default=l.exports},YlRw:function(t,e){},Zfh5:function(t,e,a){t.exports=a.p+"img/avatar.e3ae012.jpg"}});