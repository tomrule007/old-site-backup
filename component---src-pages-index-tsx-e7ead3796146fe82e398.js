(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{273:function(t,e,n){"use strict";n.r(e);var o=n(10),r=n.n(o),a=n(0),i=n.n(a),l=(n(55),n(324)),c=n(1),d=n.n(c),u=n(54),s=n.n(u),m=(n(300),i.a.createContext({})),h=function(t){return i.a.createElement(m.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};h.propTypes={data:d.a.object,query:d.a.string.isRequired,render:d.a.func,children:d.a.func};var g,p,f,y,b=n(280),w=n.n(b),E=(n(326),n(301)),v=n.n(E),k=n(327),C=n.n(k),x=n(276),S=function(t){var e=t.author;return a.createElement(C.a,{container:!0,justify:"center",alignItems:"center",direction:"column"},a.createElement(s.a,{to:"/"},a.createElement(v.a,{style:{alignItems:"baseline",width:x.a.author.avatar.width,height:x.a.author.avatar.height},src:Object(u.withPrefix)(e.image),alt:e.name})),a.createElement("h1",{style:{color:x.a.author.title.color,fontSize:x.a.author.title.fontSize,marginTop:20,marginBottom:20}},e.name),a.createElement("p",{style:{color:x.a.author.desc.color,fontSize:x.a.author.desc.fontSize,maxWidth:x.a.author.desc.maxWidth,margin:"auto",marginBottom:20,textAlign:"center"}},e.biography))},B=n(302),T=n.n(B),M=function(){return a.createElement("div",{style:{textAlign:"right"}},a.createElement(s.a,{to:"/about/",style:{textDecoration:"none"}},a.createElement(T.a,{variant:"outlined",style:{marginRight:30,marginTop:30,color:x.a.index.aboutButton.color,borderColor:x.a.index.aboutButton.borderColor,backgroundColor:x.a.index.aboutButton.backgroundColor,textTransform:"none",width:x.a.index.aboutButton.width}},"About")))},A=n(332),z=function(t){var e=t.networks;return a.createElement("ul",{style:{textAlign:"center",listStyleType:"none",margin:"40px 0 35px 0"}},e.map(function(t){return a.createElement("li",{key:t,style:{display:"inline-block",verticalAlign:"top",paddingRight:5,paddingLeft:5}},a.createElement(A.SocialIcon,{style:{width:x.a.networkButton.width,height:x.a.networkButton.height},fgColor:x.a.networkButton.color,bgColor:x.a.networkButton.backgroundColor,target:"_blank",url:t}))}))},O=function(){return a.createElement("div",{style:{textAlign:"center",marginTop:40}},a.createElement(s.a,{to:"#children"},a.createElement("span",{style:{padding:10}},a.createElement("svg",{width:x.a.callToActionButton.width,height:x.a.callToActionButton.height,viewBox:"0 0 24 24","aria-hidden":"true",fill:"white"},a.createElement("path",{d:"M16.003 18.626l7.081-7.081L25 13.46l-8.997 8.998-9.003-9 1.917-1.916z"})))))},W=function(t){return a.createElement(w.a,Object.assign({},t,{maxWidth:767}))},I=function(t){return a.createElement(w.a,Object.assign({},t,{minWidth:768}))},P=function(t){var e=t.data,n=t.styles;return a.createElement("div",{style:{backgroundImage:x.a.index.header.backgroundImage}},a.createElement(M,null),a.createElement("div",{style:{paddingTop:n.paddingTop,paddingBottom:n.paddingBottom}},a.createElement(S,{author:e.site.siteMetadata.author}),a.createElement(z,{networks:e.site.siteMetadata.networks}),a.createElement(O,null)))},j=function(t){var e=t.children;return a.createElement("div",{id:"children",style:{flexGrow:1,margin:"0 auto",maxWidth:x.a.index.layout.cardSectionMaxWidth,padding:10,paddingTop:10}},e)},L=function(t){var e=t.data,n=t.styles,o=t.children;return a.createElement("div",{style:{backgroundColor:x.a.index.layout.backgroundColor}},a.createElement(P,{data:e,styles:n}),a.createElement(j,{children:o}))},q=function(t){var e=t.children;return a.createElement(h,{query:"1460482536",render:function(t){return a.createElement(a.Fragment,null,a.createElement(I,null,a.createElement(L,{data:t,styles:{paddingTop:75,paddingBottom:75}},e)),a.createElement(W,null,a.createElement(L,{data:t,styles:{paddingTop:50,paddingBottom:50}},e)))},data:l})},H=n(338),R=n(340),F=n.n(R),D=n(341),U=n.n(D),G=(n(342),n(303)),J={countOfInitiallyShownPosts:5,countOfPostsDynamicallyAdded:5,offsetHeightToTriggerLoading:20},Q=new(g=function(){function t(){F()(this,"postsToShow",p,this)}return t.prototype.add=function(){this.postsToShow+=J.countOfPostsDynamicallyAdded},t}(),p=U()(g.prototype,"postsToShow",[G.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return J.countOfInitiallyShownPosts}}),U()(g.prototype,"add",[G.d],Object.getOwnPropertyDescriptor(g.prototype,"add"),g.prototype),g),Y=function(t){var e=t.onClickHandler;return a.createElement("div",{style:{textAlign:"center"}},a.createElement(T.a,{onClick:e,style:{color:x.a.blogPost.showMoreButton.color,borderColor:x.a.blogPost.showMoreButton.borderColor,borderWidth:1,borderStyle:"solid",backgroundColor:x.a.blogPost.showMoreButton.backgroundColor,textTransform:"none",width:x.a.blogPost.showMoreButton.width}},"Load More"))},_=n(283),K=n.n(_),N=n(297),V=n.n(N),X=n(343),Z=n.n(X),$=n(348),tt=n.n($),et=n(304),nt=n.n(et),ot=n(345),rt=n.n(ot),at=function(t){var e=t.data;return a.createElement("div",{style:{marginTop:25,marginBottom:25}},a.createElement(V.a,null,a.createElement(Z.a,null,a.createElement(s.a,{to:e.slug,style:{textDecoration:"none",color:"inherit"}},a.createElement(rt.a,{avatar:a.createElement(v.a,{style:{backgroundColor:x.a.blogListElement.avatar.backgroundColor,color:x.a.blogListElement.avatar.color,textShadow:"none"}},e.title.charAt(0).toUpperCase()),title:e.title,subheader:e.date}),e.coverFluid?a.createElement(K.a,{fluid:e.coverFluid}):null,a.createElement(tt.a,null,a.createElement(nt.a,{component:"p"},e.description))))))},it=function(t){return a.createElement(w.a,Object.assign({},t,{maxWidth:767}))},lt=function(t){return a.createElement(w.a,Object.assign({},t,{minWidth:768}))},ct=Object(H.a)(f=function(t){function e(){for(var e,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))||this).ticking=!1,e.handleScroll=function(){e.ticking||(e.ticking=!0,requestAnimationFrame(function(){return e.update()}))},e}r()(e,t);var n=e.prototype;return n.update=function(){document.documentElement.offsetHeight-(window.scrollY+window.innerHeight)<J.offsetHeightToTriggerLoading&&Q.add(),this.ticking=!1},n.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},n.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},n.render=function(){return a.createElement("div",{style:{minHeight:"50vh"}},this.props.posts.slice(0,Q.postsToShow).map(function(t){return a.createElement("div",{key:t.id},a.createElement(at,{data:{slug:t.fields.slug,date:t.frontmatter.date,title:t.frontmatter.title,description:t.frontmatter.description,coverFluid:t.frontmatter.cover&&t.frontmatter.cover.childImageSharp?t.frontmatter.cover.childImageSharp.fluid:null}}))}))},e}(a.Component))||f,dt=Object(H.a)(y=function(t){function e(){for(var e,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))||this).handleUpdate=function(){Q.add()},e}return r()(e,t),e.prototype.render=function(){return a.createElement("div",{style:{minHeight:"50vh"}},this.props.posts.slice(0,Q.postsToShow).map(function(t){return a.createElement("div",{key:t.id},a.createElement(at,{data:{slug:t.fields.slug,date:t.frontmatter.date,title:t.frontmatter.title,description:t.frontmatter.description,coverFluid:t.frontmatter.cover&&t.frontmatter.cover.childImageSharp?t.frontmatter.cover.childImageSharp.fluid:null}}))}),this.props.totalCount>Q.postsToShow&&a.createElement(Y,{onClickHandler:this.handleUpdate}))},e}(a.Component))||y,ut=function(t){return a.createElement(a.Fragment,null,a.createElement(lt,null,a.createElement(ct,{posts:t.posts,totalCount:t.totalCount})),a.createElement(it,null,a.createElement(dt,{posts:t.posts,totalCount:t.totalCount})))};n.d(e,"query",function(){return mt});var st=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data.allMarkdownRemark.edges.map(function(t){return t.node}),e=this.props.data.allMarkdownRemark.totalCount;return a.createElement(q,null,a.createElement(ut,{posts:t,totalCount:e}))},e}(a.Component),mt=(e.default=st,"638702502")},276:function(t,e,n){"use strict";e.a={blogPost:{layout:{cardMaxWidth:1e3,backgroundColor:"#eeeeee"},showMoreButton:{color:"#059ce2",borderColor:"#059ce2",backgroundColor:"none",width:130}},blogListElement:{avatar:{color:"none",backgroundColor:"#059ce2"}},index:{layout:{cardSectionMaxWidth:800,backgroundColor:"#eeeeee"},header:{backgroundImage:"linear-gradient(20deg, #039be5, #26a69a)"},aboutButton:{color:"white",borderColor:"white",backgroundColor:"none",width:100}},author:{avatar:{width:70,height:70},title:{color:"white",fontSize:30},desc:{color:"white",fontSize:20,maxWidth:500}},callToActionButton:{width:25,height:25},fabButton:{color:"#059ce2",backgroundColor:"white"},networkButton:{color:"white",backgroundColor:"#333",width:45,height:45},aboutPage:{layout:{cardMaxWidth:800,backgroundColor:"#eeeeee"}}}},300:function(t,e,n){var o;t.exports=(o=n(325))&&o.default||o},324:function(t){t.exports={data:{site:{siteMetadata:{title:"Gatsby Starter Haezl",author:{name:"gatsby starter haezl",image:"/img/me.png",biography:"A lightweight, mobile first blog starter with infinite scroll         and Material-UI design elements for Gatsby."},networks:["https://twitter.com/iamhaezl","https://github.com/haezl/gatsby-starter-haezl","mailto:mail@haezl.at"]}}}}},325:function(t,e,n){"use strict";n.r(e);n(55);var o=n(0),r=n.n(o),a=n(1),i=n.n(a),l=n(121),c=n(4),d=function(t){var e=t.location,n=c.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(l.a,Object.assign({location:e,pageResources:n},n.json))};d.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=d}}]);
//# sourceMappingURL=component---src-pages-index-tsx-e7ead3796146fe82e398.js.map