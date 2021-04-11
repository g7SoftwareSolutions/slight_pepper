(window.webpackJsonp=window.webpackJsonp||[]).push([[2,7],{17:function(t,a){t.exports="object"==typeof self?self.FormData:window.FormData},19:function(t,a,e){"use strict";e.r(a);var i={props:{animals:{Type:Object,default:null}},data:function(){return{reveal:!1,selected_id:null,card_height:350,dialog:!1,card_width:250}},mounted:function(){console.log("Animals "+this.animals)},methods:{generate_img:function(t){return user_id=t.user_id,id=t.id,files=t.images.split("|"),console.log("files: ",files),$url="storage/animal_images/"+user_id+"/"+id+"/"+files[0],$url}}},n=e(0),s=Object(n.a)(i,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{fluid:"","justify-center":""}},[this.animals?e("v-row",{attrs:{dense:""}},t._l(this.animals,(function(a){return e("v-col",{key:a.id,staticClass:"my-3"},[e("v-card",{staticClass:"m-auto m-3",attrs:{height:t.card_height,width:t.card_width}},[e("v-img",{staticClass:"white--text mx-auto",attrs:{height:t.card_height-100,width:t.card_width,src:t.generate_img(a),"lazy-src":t.generate_img(a),gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"},on:{click:function(e){return t.update(a.id)}}},[e("v-card-subtitle",{staticClass:"mx-auto text-left"},[t._v("\n            "+t._s(null==a.breed?"breed":a.breed))])],1),t._v(" "),e("div",{staticClass:"row w-100 mx-auto"},[e("v-card-title",{staticClass:"col-8 text-center mx-auto"},[t._v("\n            "+t._s(null==a.name?"Animal Name":a.name))]),t._v(" "),e("v-card-subtitle",{staticClass:"mx-auto col-3 text-center",attrs:{height:"inherit"}},[t._v("\n            "+t._s(null==a.size?"size":a.size))])],1),t._v(" "),e("v-card-actions",[e("v-spacer"),t._v(" "),"Boy"===a.gender?e("v-btn",{attrs:{icon:""}},[e("v-icon",{attrs:{color:"blue"}},[t._v("mdi-gender-male")])],1):"Girl"===a.gender?e("v-btn",{attrs:{icon:""}},[e("v-icon",{attrs:{color:"pink"}},[t._v("mdi-gender-female")])],1):t._e(),t._v(" "),e("v-spacer"),t._v(" "),e("v-btn",{attrs:{icon:""}},[e("v-icon",{attrs:{color:"teal"}},[t._v("mdi-information-outline")])],1),t._v(" "),e("v-spacer"),t._v(" "),t.user?t._e():e("v-btn",{attrs:{icon:"",large:""}},[e("v-icon",{attrs:{color:"purple"}},[t._v("mdi-bookmark")])],1),t._v(" "),e("v-spacer"),t._v(" "),e("v-btn",{attrs:{icon:""}},[e("v-icon",{attrs:{color:"green"}},[t._v("mdi-share")])],1),t._v(" "),e("v-spacer"),t._v(" "),t.user?e("v-btn",{attrs:{icon:""},on:{click:function(e){return t.delete_animal(a.id)}}},[e("v-icon",{attrs:{color:"red"}},[t._v("mdi-delete")])],1):t._e()],1)],1)],1)})),1):e("v-alert",{attrs:{outlined:"",type:"warning",prominent:"",border:"bottom"}},[t._v("\n    Sorry I cant find any available pets right now\n  ")])],1)}),[],!1,null,null,null);a.default=s.exports},31:function(t,a,e){"use strict";e.r(a);var i=e(5),n=e(19),s={name:"Card",props:{title:{type:String,default:"Title"},image:{type:String,default:"#"},card_height:{type:Number,default:350},card_width:{type:Number,default:250}}},r=e(0),o=Object(r.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-card",{staticClass:"m-3",attrs:{height:t.card_height-150,width:t.card_width-50}},[e("v-hover",{scopedSlots:t._u([{key:"default",fn:function(a){var i=a.hover;return[e("v-img",{staticClass:"mx-auto w-100",attrs:{height:"inherit",width:"inherit",src:t.image,"lazy-src":t.image,color:"blue"}},[e("div",{staticClass:"row mt-2"},[e("v-card-title",{staticClass:"mx-auto font-weight-bold text-dark"},[t._v("\n              "+t._s(t.$t(t.title)))])],1),t._v(" "),e("v-fade-transition",[i?e("div",{staticClass:"w-100 p-5 pt-0 mx-auto transition-ease-in-ease-out blue-transparent v-card--reveal display-3 white--text rounded",attrs:{gradient:"to bottom, rgba(0,0,0,.5), rgba(0,0,0,.1)"}},[e("v-img",{staticClass:"m-auto ",attrs:{height:80,width:80,contain:"",src:"https://img.icons8.com/dusk/264/000000/search--v1.png","lazy-src":"https://img.icons8.com/dusk/264/000000/search--v1.png"}})],1):t._e()])],1)]}}])})],1)}),[],!1,null,null,null).exports,c={layout:"basic",components:{AnimalsDisplay:n.default,AnimalTypeCard:o},mounted:function(){this.getAllAnimals()},metaInfo:function(){return{title:this.$t("home")}},data:function(){return{title:window.config.appName,animals:{},reveal:!1,selected_id:null,card_height:350,dialog:!1,card_width:250}},computed:Object(i.b)({authenticated:"auth/check"}),methods:{generate_img:function(t){if(t.user_id){var a=t.user_id,e=t.id;if(t.images){var i=t.images.split("|");return console.log("files: ",i),"storage/animal_images/"+a+"/"+e+"/"+i[0]}return"https://img.icons8.com/dusk/264/000000/no-image.png"}return"#"},getAllAnimals:function(){var t=this,a=e(6);new(e(17));a({method:"get",url:"/animal"}).then((function(a){console.log(JSON.stringify(a.data)),t.animals=a.data})).catch((function(t){console.log(t)}))}}},l=(e(86),Object(r.a)(c,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-dialog",{staticClass:"col-lg-6 col-md-8 col-sm-10",attrs:{"max-width":"900",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("v-card",{staticClass:"justify-content-center p-3"},[e("v-card-actions",[e("div",{staticClass:"row justify-content-center"},[e("v-btn",{staticClass:"mx-auto",attrs:{text:""},on:{click:function(a){t.dialog=!1}}},[t._v("Close")])],1)])],1)],1),t._v(" "),e("div",{staticClass:"text-center"},[e("div",{staticClass:"title mb-4"},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),e("v-spacer",{attrs:{height:"200px"}}),t._v(" "),e("v-row",[e("v-col",[e("AnimalTypeCard",{attrs:{image:"https://img.icons8.com/bubbles/250/000000/dog.png",title:"Dog"}})],1),t._v(" "),e("v-col",[e("AnimalTypeCard",{attrs:{image:"https://img.icons8.com/bubbles/250/000000/cat.png",title:"Cat"}})],1),t._v(" "),e("v-col",[e("AnimalTypeCard",{attrs:{image:"https://img.icons8.com/bubbles/250/000000/south-dakota-state-bird.png",title:"Birds"}})],1),t._v(" "),e("v-col",[e("AnimalTypeCard",{attrs:{image:"https://img.icons8.com/clouds/300/000000/fish.png",title:"Fish"}})],1)],1),t._v(" "),e("v-container",{staticClass:"mt-5",attrs:{contain:"",fluid:"","justify-center":""}},[this.animals?e("v-row",{attrs:{dense:""}},t._l(this.animals,(function(a){return e("v-col",{key:a.id,staticClass:"my-3"},[e("v-card",{staticClass:"m-auto m-3",attrs:{height:t.card_height,width:t.card_width}},[e("v-img",{staticClass:"white--text mx-auto",attrs:{height:t.card_height-100,width:t.card_width,src:t.generate_img(a),"lazy-src":t.generate_img(a),gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"},on:{click:function(e){return t.update(a.id)}}},[e("v-card-subtitle",{staticClass:"mx-auto text-left"},[t._v("\n                "+t._s(null==a.breed?"breed":a.breed))])],1),t._v(" "),e("div",{staticClass:"row w-100 mx-auto"},[e("v-card-title",{staticClass:"col-8 text-center mx-auto"},[t._v("\n                "+t._s(null==a.name?"Animal Name":a.name))]),t._v(" "),e("v-card-subtitle",{staticClass:"mx-auto col-3 text-center",attrs:{height:"inherit"}},[t._v("\n                "+t._s(null==a.size?"size":a.size))])],1),t._v(" "),e("v-card-actions",[e("v-spacer"),t._v(" "),"Boy"===a.gender?e("v-btn",{attrs:{icon:""}},[e("v-icon",{attrs:{color:"blue"}},[t._v("mdi-gender-male")])],1):"Girl"===a.gender?e("v-btn",{attrs:{icon:""}},[e("v-icon",{attrs:{color:"pink"}},[t._v("mdi-gender-female")])],1):t._e(),t._v(" "),e("v-spacer"),t._v(" "),e("v-btn",{attrs:{icon:""}},[e("v-icon",{attrs:{color:"teal"}},[t._v("mdi-information-outline")])],1),t._v(" "),e("v-spacer"),t._v(" "),t.user?t._e():e("v-btn",{attrs:{icon:"",large:""}},[e("v-icon",{attrs:{color:"purple"}},[t._v("mdi-bookmark")])],1),t._v(" "),e("v-spacer"),t._v(" "),e("v-btn",{attrs:{icon:""}},[e("v-icon",{attrs:{color:"green"}},[t._v("mdi-share")])],1),t._v(" "),e("v-spacer")],1)],1)],1)})),1):e("v-alert",{attrs:{outlined:"",type:"warning",prominent:"",border:"bottom"}},[t._v("\n        Sorry I cant find any available pets right now\n      ")])],1)],1),t._v(" "),e("v-bottom-navigation",{staticClass:"justify-content-center",attrs:{dense:"",app:"",fixed:""}},[e("div",{staticClass:"container d-sm-block d-none"}),t._v(" "),e("v-btn",{attrs:{value:"b"},on:{click:function(a){return t.update("id","id")}}},[e("span",[t._v("Pets")]),t._v(" "),e("v-icon",{attrs:{color:"primary "}},[t._v("mdi-paw")])],1),t._v(" "),e("v-spacer"),t._v(" "),e("v-btn",{attrs:{value:"c"},on:{click:function(a){return t.update("poa","poa")}}},[e("span",[t._v("Shelters")]),t._v(" "),e("v-icon",{attrs:{color:"primary  "}},[t._v("mdi-domain ")])],1),t._v(" "),e("div",{staticClass:"container w-100 d-sm-block d-none"})],1)],1)}),[],!1,null,"c69db75c",null));a.default=l.exports},53:function(t,a,e){var i=e(87);"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e(11)(i,n);i.locals&&(t.exports=i.locals)},86:function(t,a,e){"use strict";e(53)},87:function(t,a,e){(t.exports=e(10)(!1)).push([t.i,".top-right[data-v-c69db75c]{position:absolute;right:10px;top:18px}.title[data-v-c69db75c]{font-size:85px}",""])}}]);