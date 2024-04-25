"use strict";(self["webpackChunkkepco_tbm_front"]=self["webpackChunkkepco_tbm_front"]||[]).push([[210],{3619:function(t,a,i){i.d(a,{A:function(){return r}});var s=function(){var t=this,a=t._self._c;return a("v-btn",{staticClass:"my-0 btn",class:t.btnStyle,attrs:{depressed:"",rounded:"",height:t.heightSize,width:t.widthSize},on:{click:t.onClick}},["finish"===t.state||"next"===t.state?[a("div",[a("span",{staticClass:"color_white font_semi_bold"},[t._v("다음")])])]:"recognizing"===t.state?[a("div",[a("img",{staticClass:"btn-img-soundinteraction",attrs:{src:i(4879)}})])]:"replay"===t.state?[a("div",[a("img",{staticClass:"btn-img-sound",attrs:{src:i(4759)}})])]:"start"===t.state?[a("div",[a("span",{staticClass:"color_primary_4 font_semi_bold"},[t._v("말씀해 주세요")])])]:[a("div",[a("span",{staticClass:"color_primary_4 font_semi_bold"})])]],2)},A=[],e={name:"BasicBtn",props:{title:{type:String,default:""},widthSize:{type:String,default:"106px"},heightSize:{type:String,default:"44px"},dimBtn:{type:Boolean,default:!1},state:{type:String,default:""}},computed:{btnStyle(){let t="";return t="start"===this.state||"recognizing"===this.state?"back-white":"back-blue",this.dimBtn&&(t="cover"),t}},methods:{onClick(){this.$emit("onClick")}}},n=e,o=i(845),l=(0,o.A)(n,s,A,!1,null,"702b9a7e",null),r=l.exports},2210:function(t,a,i){i.r(a),i.d(a,{default:function(){return c}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"g-area"},[t._m(0),a("div",{staticClass:"ci-table"},[a("p",{staticClass:"ci-title"},[t._v("공사 정보")]),t.constructioninfo.length>0?a("table",t._l(t.constructioninfo,(function(i,s){return a("tr",{key:s},[a("td",{staticClass:"ci-table-label"},[t._v(t._s(i.label))]),a("td",{staticClass:"ci-table-data"},[t._v(t._s(i.data))])])})),0):t._e()]),a("div",{staticClass:"g-fixed-btn"},[a("basic-btn",{attrs:{state:"next",title:"시작하기"},on:{onClick:t.onClickStart}})],1)])},A=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"text-cetner"},[a("img",{staticClass:"ci-logo-img",attrs:{src:i(5657)}})])}],e=(i(8743),i(3619)),n={components:{BasicBtn:e.A},name:"ConstructionInformation",data(){return{constructioninfo:[]}},methods:{onClickStart(){this.$router.push("/TBM/StartGuide")},loadConstructionInfo(){this.constructioninfo=[{label:"공사 정보",data:"주촌 내삼 김해시장 이전 공사"},{label:"사업소명",data:"서대전지사"},{label:"사업소 담당자",data:"이상훈"},{label:"회사명",data:"(주)영진전기"},{label:"일시",data:"2023.03.05 (14:00)"},{label:"안전작업 책임자",data:"홍길동"},{label:"작업 인원",data:"5명"},{label:"공종코드",data:"D01 D53"}]}},created(){this.loadConstructionInfo()}},o=n,l=i(845),r=(0,l.A)(o,s,A,!1,null,"8a979060",null),c=r.exports},4759:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgBAMAAAAQtmoLAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURUdwTP///////////////////////////////////////////////w2imYoAAAAMdFJOUwBAfsSc3yDvWxAwsLjzz6AAAAHSSURBVFjD7Ze/T8JQEMeLQlUmojhoGIwxsjCgMZhohzKwORAHjAmDiXGSwVENAyMmHXQwLg5sLg4Ojg7yS0y4P8q7WuwD5HqNYTB536Ul3Kfvrrx338MwtLSmqIXkEezfhIhPA6q7KQaWwVW3JoyfAU8tIZAZALAmip//iYemCDjzgd6tBDjwAVFOphIPV+FKkL2nWRVoC4A5FegJgIoKwEkwkBoCGmGBhAY0oAEpcL43DsRfmWNqYasbBR4gOxmggFEgBe+TgSrUxgCHA8oIVEa6hgMXTA3YfR+HAHKLLNe47bFWacEL5z1F37C8Zlzlen4KPoyICrgfE1wjblEOvmwjSnVMVJTa9fNQL45BnwFw/ZpaBK7nwCe3mSw4Vk3Opp+myAEOdCgxTx3X5Nl5IOZ+n/EXqECX3d9YxDUaadmN33LvmkEm3UPTiRRwNMl/m7zNA/cAl3S9W6UhIF4OyAhzqKr2j3NTKehIP2Eyg72whPeBNkoFt903adJcVgruGqfk59v1+ga9qrbAp420MgiIJizT3xo52QhnFrzn58VjZXIXw3dWwoy6b9zR/32LaOC/AYvrKAsO6SL5y/G3UbovAKIq0JGcBrXd5wwtranpC1Kma6Pv1MPDAAAAAElFTkSuQmCC"},4879:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAABgBAMAAACNl6HGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAbUExURUdwTFBg2E5i2U5j2k5j2k1i2lBh201g305j2vJQEkAAAAAIdFJOUwAgf6DHXT0QCqh4OQAAAWFJREFUaN7t2b1PwzAQBXC7SRPGDKjqaCGQMjIhRrIAYyU+5ixIjF5AjLQN4v5sRD3govrSJs6plPc2x5F+QyTn8qIUgiAIsmvuKnb7uCniWTk17H5JJh6miYBJYOfAgLVir9a7trbogOWPLDYm71DL6KYfNqUZhyW0+Lk0oo9+WPDRuI3Ux5IOWH5WyGEpXclhU3rfHyyrBbHLRhAjKoDtDVYuBDEiG8CeeOyl9jC32AIrNmPJ6lAJY7dLD3OL7tgbzTksd/c6rO1F2Iod8Zj+89hpJYdp960hg2XAgO2AGWDAuOPKDHwQXwti66+YA8E+5bB008Bj+g48oVHuwbLY2B/lstkAQ6rpOX5bSUwBE8PKpZLDdC2I+bWtWOkSBdMnVg7btiiLjz2HK0DzuwLsjelwuWlW5ebcLzerwWrbb0xN/KZ2YofFpAppYMAOEhP9waruL9jtUcxfxwiCIP8yX2AZ6r9k9qHaAAAAAElFTkSuQmCC"},5657:function(t,a,i){t.exports=i.p+"web/assets/img/i_logo.98bac393.png"}}]);
//# sourceMappingURL=210.655d0b17.js.map