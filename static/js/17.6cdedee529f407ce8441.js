webpackJsonp([17],{YlDC:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a("ZCOt"),e=a("Muz9"),n=a.n(e),r=a("gwdZ"),o={components:{Header:i.a,Footer:r.a},data:function(){return{info:[],arr:[],arr2:[],list:[],value5:0,count:0,isLoading:!1,loading:!1,finished:!1,offset:0}},created:function(){var t=this;n.a.get("http://elm.cangdu.org/shopping/restaurants?latitude=45.74764&longitude=126.63249&offset=0&limit=10&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=&delivery_mode[]=").then(function(s){t.info=s.data}),n.a.get("http://elm.cangdu.org/v2/index_entry?geohash=39.78493,116.49476&group_type=1&flags[]=F").then(function(s){t.arr=s.data;var a=s.data.splice(8,15);t.list=a})},mounted:function(){new Swiper(".swiper-container",{autoplay:2e3,pagination:".swiper-pagination"})},methods:{onRefresh:function(){var t=this;setTimeout(function(){t.$toast("刷新成功"),t.isLoading=!1,t.count++},300)},onLoad:function(){var t=this;setTimeout(function(){t.offset+=10,n.a.get("http://elm.cangdu.org/shopping/restaurants?latitude=45.74764&longitude=126.63249&offset="+t.offset+"&limit=10&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=&delivery_mode[]=").then(function(s){t.info=t.info.concat(s.data)}),t.loading=!1},1e3)},producelist:function(t){this.$router.push({path:"/home/product",query:{v:t}})}}},l={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"TakeOut"},[a("Header"),t._v(" "),a("content",[a("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(s){t.isLoading=s},expression:"isLoading"}},[a("van-list",{attrs:{"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(s){t.loading=s},expression:"loading"}},[a("div",{staticClass:"block"},[a("div",{staticClass:"swiper-container"},[a("div",{staticClass:"swiper-wrapper"},[a("div",{staticClass:"swiper-slide"},[a("ul",t._l(t.arr,function(s,i){return a("li",{key:i},[a("img",{attrs:{src:"https://fuss10.elemecdn.com"+s.image_url}}),t._v(" "),a("p",[t._v(t._s(s.title))])])}),0)]),t._v(" "),a("div",{staticClass:"swiper-slide"},[a("ul",t._l(t.list,function(s,i){return a("li",{key:i},[a("img",{attrs:{src:"https://fuss10.elemecdn.com"+s.image_url}}),t._v(" "),a("p",[t._v(t._s(s.title))])])}),0)])]),t._v(" "),a("div",{staticClass:"swiper-pagination"})])]),t._v(" "),a("div",{staticClass:"fu"},[a("i",{staticClass:"el-icon-sold-out"}),t._v(" "),a("span",{staticClass:"sp"},[t._v("附近商家")]),t._v(" "),a("div",{staticClass:"fu_yi"},t._l(t.info,function(s,i){return a("ul",{key:i,on:{click:function(a){return t.producelist(s)}}},[a("li",[a("img",{attrs:{src:"http://elm.cangdu.org/img/"+s.image_path,alt:""}})]),t._v(" "),a("li",[a("div",[a("p",{staticClass:"Brand_line"},[a("span",{staticClass:"brand"},[t._v("品牌")]),t._v(" "),a("span",{staticClass:"result"},[t._v(t._s(s.name))])]),t._v(" "),a("p",{staticClass:"you"},[a("span",{staticClass:"ticket"},[t._v("保准票")])])]),t._v(" "),a("div",[a("p",{staticClass:"sales_line"},[a("span",{staticClass:"star"},[t._v("★★★★"+t._s(s.rating))]),t._v(" "),a("span",{staticClass:"work"},[t._v("月售"+t._s(s.recent_order_num)+"单")])]),t._v(" "),a("p",{staticClass:"present"},[a("span",{staticClass:"hummingbird"},[t._v("蜂鸟专送")]),t._v(" "),a("span",{staticClass:"Jusda"},[t._v("准时达")])])]),t._v(" "),a("div",[a("p",{staticClass:"match"},[a("span",{staticClass:"dispatching"},[t._v("￥"+t._s(s.float_minimum_order_amount)+"起送/配送费约￥"+t._s(s.float_delivery_fee))]),t._v(" "),a("span",{staticClass:"duration"},[a("span",{staticClass:"kilometre"},[t._v(t._s(s.distance)+"/")]),t._v(" "),a("span",{staticClass:"minute"},[t._v(t._s(s.order_lead_time))])])])])])])}),0)])])],1)],1),t._v(" "),a("Footer")],1)},staticRenderFns:[]};var c=a("C7Lr")(o,l,!1,function(t){a("oAZl")},null,null);s.default=c.exports},oAZl:function(t,s){}});
//# sourceMappingURL=17.6cdedee529f407ce8441.js.map