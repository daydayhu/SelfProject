webpackJsonp([1],{"5L3M":function(t,e){!function(t,e){var n=t.documentElement.currentStyle?t.documentElement.currentStyle.fontSize:getComputedStyle(t.documentElement,!1).fontSize,i=parseFloat(n)/16,a=t.documentElement,s=navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)?Math.min(e.devicePixelRatio,3):1;s=window.top===window.self?s:1;var o="orientationchange"in window?"orientationchange":"resize";a.dataset.dpr=s;var r=function(){var t=a.clientWidth;t/s>750&&(t=750*s),c(a).width=t,c(a).percent=t/750*100,a.style.fontSize=t/750*100/i+"px"};function c(t){if(t.dataset)return t.dataset;for(var e,n=t.attributes,i={},a=0;a<n.length;a++)(e=n[a].name.match(/^data-(.+)/))&&(i[e[1].replace(/-([\da-z])/gi,function(t,e){return e.toUpperCase()})]=n[a].value);return i}r(),t.addEventListener&&e.addEventListener(o,r,!1)}(document,window)},"991W":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App"},a,!1,function(t){n("fPL6")},null,null).exports,o=n("/ocq"),r={name:"mainPage",data:function(){return{protocolType:"HLS",vedioObj:{src:"http://www.marketservice.cn/live/jingdongzhibo.m3u8",srcRTMP:"rtmp://www.marketservice.cn/live/jingdongzhibo",srcHLS:"http://www.marketservice.cn/live/jingdongzhibo.m3u8"},watchNumbers:100,showList:[],shareList:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]}},mounted:function(){},methods:{change:function(){this.vedioObj.src=this.vedioObj.src===this.vedioObj.srcHLS?this.vedioObj.srcRTMP:this.vedioObj.srcHLS,this.protocolType="HLS"===this.protocolType?"RTMP":"HLS",console.log("this.data.src",this.vedioObj.src)}}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"mainPage"}},[i("div",{staticClass:"JD_header"},[i("div",{staticStyle:{background:"#ff6600",height:"100px",width:"100px","font-size":"40px"},on:{click:t.change}},[t._v(t._s(t.protocolType))])]),t._v(" "),i("div",{staticClass:"JD_live"},[i("div",{staticClass:"watch_intro"},[i("p",{staticClass:"online_text"},[t._v("目前观看人数")]),t._v(" "),i("div",{staticClass:"online_number"},[t._v(t._s(t.watchNumbers)+"人")])]),t._v(" "),i("div",{staticClass:"video_container"},[i("video",{attrs:{controls:"controls",preload:"auto"}},[i("source",{attrs:{src:t.vedioObj.src}})])])]),t._v(" "),i("div",{staticClass:"JD_share"},[i("div",{staticClass:"title"}),t._v(" "),t._m(0),t._v(" "),i("ul",{staticClass:"share_content"},t._l(t.shareList,function(t){return i("li",[i("img",{attrs:{src:n("lcFl"),alt:""}})])}),0)]),t._v(" "),i("div",{staticClass:"JD_bottom"})])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"share_segment flex"},[e("li",{staticClass:"picture_amount"},[this._v("照片数量")]),this._v(" "),e("li",{staticClass:"new_upload"},[this._v("最新上传")]),this._v(" "),e("li",{staticClass:"time_sort"},[this._v("时间排序")])])}]};var l=n("VU/8")(r,c,!1,function(t){n("PVOM")},"data-v-3018026d",null).exports;i.a.use(o.a);var d=new o.a({routes:[{path:"/",name:"MainPage",component:l}]}),u=(n("991W"),n("5L3M"),n("mvHQ")),v=n.n(u),p=n("mtWM"),h=n.n(p),m=n("mw3O"),f=n.n(m);i.a.prototype.$ajax=function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"post",a={};"get"===i?a={method:i,url:""+t+(e="{}"===v()(e)?"":"?"+f.a.stringify(e))}:"post"===i&&(a={method:i,url:""+t,data:e}),h.a.defaults.headers.post["Content-Type"]="application/json;charset=UTF-8",h()(a).then(function(t){console.log(t)}).catch(function(t){console.log(t)})},i.a.config.productionTip=!1,new i.a({el:"#app",router:d,components:{App:s},template:"<App/>"})},PVOM:function(t,e){},fPL6:function(t,e){},lcFl:function(t,e,n){t.exports=n.p+"static/img/activitOne.d9af4b4.png"}},["NHnr"]);
//# sourceMappingURL=app.367152af35dda368c23b.js.map