webpackJsonp([3],{"7YgM":function(e,s){e.exports={name:"yt-mobile",version:"1.0.7",description:"yt mobile ui",author:"ltt",private:!1,main:"lib/index.js",files:["lib"],scripts:{dev:"cross-env NODE_ENV=development webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",build:"cross-env NODE_ENV=production node build/build.js","doc:dev":"cross-env NODE_ENV=development TARGET=doc webpack-dev-server --inline --progress --config build/webpack.dev.conf.js","doc:build":"cross-env NODE_ENV=production TARGET=doc node build/build.js"},dependencies:{"async-validator":"^1.8.2",autosize:"^4.0.1","better-scroll":"^1.5.5",dsbridge:"^3.1.3",moment:"^2.22.2",vue:"^2.5.17","vue-router":"^3.0.1"},devDependencies:{autoprefixer:"^7.1.2","babel-core":"^6.22.1","babel-eslint":"^8.2.1","babel-helper-vue-jsx-merge-props":"^2.0.3","babel-loader":"^7.1.1","babel-plugin-syntax-jsx":"^6.18.0","babel-plugin-transform-runtime":"^6.22.0","babel-plugin-transform-vue-jsx":"^3.5.0","babel-preset-env":"^1.3.2","babel-preset-stage-2":"^6.22.0",chalk:"^2.0.1","clean-webpack-plugin":"^0.1.19","copy-webpack-plugin":"^4.0.1","cross-env":"^5.2.0","css-loader":"^0.28.0",cssnano:"^3.10.0",echarts:"^3.8.5",eslint:"^4.15.0","eslint-config-standard":"^10.2.1","eslint-friendly-formatter":"^3.0.0","eslint-loader":"^1.7.1","eslint-plugin-import":"^2.7.0","eslint-plugin-node":"^5.2.0","eslint-plugin-promise":"^3.4.0","eslint-plugin-standard":"^3.0.1","eslint-plugin-vue":"^4.0.0","extract-text-webpack-plugin":"^3.0.0","file-loader":"^1.1.4","friendly-errors-webpack-plugin":"^1.6.1","github-markdown-css":"^2.10.0","highlight.js":"^9.12.0","html-webpack-plugin":"^2.30.1",less:"^3.0.2","less-loader":"^4.1.0","markdown-it":"^8.4.2","node-notifier":"^5.1.2","optimize-css-assets-webpack-plugin":"^3.2.0",ora:"^1.2.0",portfinder:"^1.0.13","postcss-cssnext":"^3.1.0","postcss-import":"^11.0.0","postcss-loader":"^2.0.8","postcss-mixins":"^6.2.0","postcss-nested":"^3.0.0","postcss-salad":"^2.0.1","postcss-simple-vars":"^4.1.0","postcss-url":"^7.2.1",proj4:"^2.4.4",rimraf:"^2.6.0",semver:"^5.3.0",shelljs:"^0.7.6",stylus:"^0.54.5","stylus-loader":"^3.0.2","text-loader":"^0.0.1","uglifyjs-webpack-plugin":"^1.1.1","url-loader":"^0.5.8","vue-docgen-api":"^2.3.13","vue-loader":"^13.3.0","vue-style-loader":"^3.0.1","vue-styleguide-generator":"^0.9.18","vue-template-compiler":"^2.5.17",webpack:"^3.6.0","webpack-bundle-analyzer":"^2.9.0","webpack-dev-server":"^2.9.1","webpack-merge":"^4.1.0"},engines:{node:">= 6.0.0",npm:">= 3.0.0"},browserslist:["> 1%","last 2 versions","not ie <= 8"]}},"JAe+":function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var o=t("7YgM"),r={name:"service",methods:{doTool:function(){Object(o.Toast)("这是一条提醒信息","tool")},doSuccess:function(){Object(o.Toast)("这是一条成功信息","success")},doError:function(){Object(o.Toast)("这是一条错误信息","error")},doTool2:function(){this.$Toast("这是一条提醒信息","tool")},doSuccess2:function(){this.$Toast("这是一条成功信息","success")},doError2:function(){this.$Toast("这是一条错误信息","error")}}},n={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("yt-page",{attrs:{title:"Toast组件"}},[t("yt-card",{attrs:{title:"import引入调用"}},[t("yt-btn",{on:{click:e.doTool}},[e._v("提醒")]),e._v(" "),t("yt-btn",{attrs:{theme:"green"},on:{click:e.doSuccess}},[e._v("成功")]),e._v(" "),t("yt-btn",{attrs:{theme:"red"},on:{click:e.doError}},[e._v("错误")])],1),e._v(" "),t("yt-card",{attrs:{title:"this调用"}},[t("yt-btn",{on:{click:e.doTool2}},[e._v("提醒")]),e._v(" "),t("yt-btn",{attrs:{theme:"green"},on:{click:e.doSuccess2}},[e._v("成功")]),e._v(" "),t("yt-btn",{attrs:{theme:"red"},on:{click:e.doError2}},[e._v("错误")])],1)],1)},staticRenderFns:[]};var i=t("VU/8")(r,n,!1,function(e){t("m+oe")},"data-v-dcf6cd46",null);s.default=i.exports},"m+oe":function(e,s){}});