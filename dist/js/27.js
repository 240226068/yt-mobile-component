webpackJsonp([27],{"Ih7/":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("z59G"),l={name:"group-example",data:function(){return{title:"列表+按时间分组",list:this.mock(Date.now())}},methods:{mock:function(t){for(var e=[],n=0;n<8;n++)e.push({createdAt:t-864e5*(Math.random()>.5?n:n-1),name:"这是一条测试数据"});return e},pullDown:function(t,e){var n=this;console.log("获得了pull的名称为:"+e),Object(o.b)(1500).then(function(){return n.list},function(){return[]}).then(t)},pullUp:function(t,e){var n=this;console.log("获得了pull的名称为:"+e),Object(o.b)(1500).then(function(){return n.mock(n.list[n.list.length-1].createdAt)},function(){return[]}).then(t)}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("yt-page",{attrs:{title:t.title,leftData:[]}},[n("yt-group",{attrs:{list:t.list,name:"pull","top-load-method":t.pullDown,"bottom-load-method":t.pullUp},scopedSlots:t._u([{key:"default",fn:function(e){return n("div",{staticClass:"row"},[t._v(t._s(e.data.name))])}}])})],1)},staticRenderFns:[]};var u=n("VU/8")(l,r,!1,function(t){n("YIwH")},"data-v-0c903112",null);e.default=u.exports},YIwH:function(t,e){}});
//# sourceMappingURL=27.js.map