webpackJsonp([21],{Qnnm:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("yt-page",{attrs:{title:"评分组件",leftData:[],rightData:[]}},[t("yt-cell",{attrs:{label:"默认不区分颜色"}},[t("yt-rate",{model:{value:e.grade,callback:function(a){e.grade=a},expression:"grade"}})],1),e._v(" "),t("yt-cell",{attrs:{label:"区分颜色"}},[t("yt-rate",{attrs:{"allow-half":!0,colors:["#99A9BF","#F7BA2A","#FF9900"]},model:{value:e.grade2,callback:function(a){e.grade2=a},expression:"grade2"}})],1),e._v(" "),t("yt-cell",{attrs:{label:"辅助文字"}},[t("yt-rate",{attrs:{"show-text":""},model:{value:e.grade3,callback:function(a){e.grade3=a},expression:"grade3"}})],1),e._v(" "),t("yt-cell",{attrs:{label:"只读+半星"}},[t("yt-rate",{attrs:{disabled:"","show-score":"","text-color":"#ff9900","score-template":"{value}"},model:{value:e.grade4,callback:function(a){e.grade4=a},expression:"grade4"}})],1)],1)},staticRenderFns:[]};var r=t("VU/8")({name:"rate-example",data:function(){return{grade:null,grade2:null,grade3:2,grade4:2.7}}},l,!1,function(e){t("VSxN")},"data-v-663bbbfb",null);a.default=r.exports},VSxN:function(e,a){}});