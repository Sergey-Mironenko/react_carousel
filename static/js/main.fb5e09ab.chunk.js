(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var i=n(7),a=n.n(i),r=n(2),o=n(3),c=n(5),s=n(4),l=n(1),u=n.n(l),m=(n(12),n(13),n(0)),h=function(t){var e=t.images,n=t.itemWidth,i=t.frameSize,a=t.scrollPosition,r=t.animationDuration,o=t.moveLeft,c=t.moveRight;return Object(m.jsxs)("div",{className:"Carousel",children:[Object(m.jsx)("div",{className:"Carousel__container",style:{width:"".concat(i*n,"px")},children:Object(m.jsx)("ul",{className:"Carousel__list",style:{transform:"translate(".concat(a,"px, 0)"),transition:"transform ".concat(r,"ms")},children:e.map((function(t,e){return Object(m.jsx)("li",{children:Object(m.jsx)("img",{src:t,alt:"Img ".concat(e),style:{width:"".concat(n,"px"),height:"".concat(n,"px")}})},t)}))})}),Object(m.jsxs)("div",{className:"Carousel__button-container",style:{width:"".concat(i*n,"px")},children:[Object(m.jsx)("button",{className:"Carousel__button",type:"button","data-cy":"prev",onClick:o,children:"Prev"}),Object(m.jsx)("button",{className:"Carousel__button",type:"button","data-cy":"next",onClick:c,children:"Next"})]})]})},g=(n(15),function(t){Object(c.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(r.a)(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={value:"",isError:!1},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this,e=this.props,n=e.changeNumber,i=e.range,a=e.placeholder,r=e.text,o=this.state,c=o.value,s=o.isError;return Object(m.jsxs)("form",{className:"Form",onSubmit:function(e){e.preventDefault(),i(+c)?(n(c),t.setState({value:""})):t.setState({isError:!0})},children:[Object(m.jsx)("input",{className:"Form__input",type:"number",placeholder:a,value:c.trim(),onChange:function(e){t.setState({value:e.target.value,isError:!1})}}),Object(m.jsx)("button",{className:"Form__button",type:"submit",disabled:!c,children:r}),s&&Object(m.jsx)("p",{className:"Form__error",children:"Out of range!"})]})}}]),n}(u.a.Component)),p=g,b=function(t){Object(c.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(r.a)(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],itemWidth:130,frameSize:3,step:3,scrollPosition:0,animationDuration:1e3},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.images,i=e.itemWidth,a=e.frameSize,r=e.step,o=e.scrollPosition,c=e.animationDuration;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)("h1",{"data-cy":"title",children:["Carousel with ",n.length," images"]}),Object(m.jsx)(h,{images:this.state.images,itemWidth:this.state.itemWidth,frameSize:this.state.frameSize,scrollPosition:this.state.scrollPosition,animationDuration:this.state.animationDuration,moveLeft:function(){o<0&&t.setState((function(){return o+i*r>0?{scrollPosition:0}:{scrollPosition:o+i*r}}))},moveRight:function(){a*i-o<i*n.length&&t.setState((function(){var t=o-i*r;return t-i*r<=-n.length*i?{scrollPosition:-n.length*i+a*i}:{scrollPosition:t}}))}}),Object(m.jsx)(p,{changeNumber:function(e){t.setState((function(t){return{itemWidth:+e,scrollPosition:t.scrollPosition/t.itemWidth*+e}}))},range:function(t){return t>=50&&t<=500},placeholder:"50 - 500 | Now ".concat(i),text:"Enter item width"}),Object(m.jsx)(p,{changeNumber:function(e){t.setState((function(t){return o-i*+e<=-n.length*i?{scrollPosition:-n.length*i+ +e*i,frameSize:+e}:{scrollPosition:t.scrollPosition,frameSize:+e}}))},range:function(t){return t>=1&&t<=n.length},placeholder:"1 - ".concat(n.length," | Now ").concat(a),text:"Enter frame size"}),Object(m.jsx)(p,{changeNumber:function(e){t.setState({step:+e})},range:function(t){return t>=1&&t<=n.length},placeholder:"1 - ".concat(n.length," | Now ").concat(r),text:"Enter step"}),Object(m.jsx)(p,{changeNumber:function(e){t.setState({animationDuration:+e})},range:function(t){return t>=1e3&&t<=3e3},placeholder:"1000 - 3000 | Now ".concat(c),text:"Enter duaration"})]})}}]),n}(u.a.Component),j=b;a.a.render(Object(m.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.fb5e09ab.chunk.js.map