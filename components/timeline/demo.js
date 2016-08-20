webpackJsonp([30,135],{845:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(163),s(162)),e=t(p),o=s(1),l=t(o),c=s(2);t(c);n.exports={content:[["p","\u57fa\u672c\u7684\u65f6\u95f4\u8f74\u3002"]],meta:{order:0,title:"\u57fa\u672c\u7528\u6cd5",filename:"components/timeline/demo/basic.md",id:"components-timeline-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Timeline <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Timeline</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Timeline.Item</span><span class="token punctuation" >></span></span>\u521b\u5efa\u670d\u52a1\u73b0\u573a <span class="token number" >2015</span><span class="token operator" >-</span><span class="token number" >09</span><span class="token operator" >-</span><span class="token number" >01</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Timeline.Item</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Timeline.Item</span><span class="token punctuation" >></span></span>\u521d\u6b65\u6392\u9664\u7f51\u7edc\u5f02\u5e38 <span class="token number" >2015</span><span class="token operator" >-</span><span class="token number" >09</span><span class="token operator" >-</span><span class="token number" >01</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Timeline.Item</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Timeline.Item</span><span class="token punctuation" >></span></span>\u6280\u672f\u6d4b\u8bd5\u5f02\u5e38 <span class="token number" >2015</span><span class="token operator" >-</span><span class="token number" >09</span><span class="token operator" >-</span><span class="token number" >01</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Timeline.Item</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Timeline.Item</span><span class="token punctuation" >></span></span>\u7f51\u7edc\u5f02\u5e38\u6b63\u5728\u4fee\u590d <span class="token number" >2015</span><span class="token operator" >-</span><span class="token number" >09</span><span class="token operator" >-</span><span class="token number" >01</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Timeline.Item</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Timeline</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return l["default"].createElement(e["default"],null,l["default"].createElement(e["default"].Item,null,"\u521b\u5efa\u670d\u52a1\u73b0\u573a 2015-09-01"),l["default"].createElement(e["default"].Item,null,"\u521d\u6b65\u6392\u9664\u7f51\u7edc\u5f02\u5e38 2015-09-01"),l["default"].createElement(e["default"].Item,null,"\u6280\u672f\u6d4b\u8bd5\u5f02\u5e38 2015-09-01"),l["default"].createElement(e["default"].Item,null,"\u7f51\u7edc\u5f02\u5e38\u6b63\u5728\u4fee\u590d 2015-09-01"))}}},846:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(163),s(162)),e=t(p),o=s(1),l=t(o),c=s(2);t(c);n.exports={content:[["p","\u5706\u5708\u989c\u8272\uff0c\u7eff\u8272\u7528\u4e8e\u5df2\u5b8c\u6210\u3001\u6210\u529f\u72b6\u6001\uff0c\u7ea2\u8272\u8868\u793a\u544a\u8b66\u6216\u9519\u8bef\u72b6\u6001\uff0c\u84dd\u8272\u53ef\u8868\u793a\u6b63\u5728\u8fdb\u884c\u6216\u5176\u4ed6\u9ed8\u8ba4\u72b6\u6001\u3002"]],meta:{order:1,title:"\u5706\u5708\u989c\u8272",filename:"components/timeline/demo/color.md",id:"components-timeline-demo-color"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Timeline <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Timeline</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Timeline.Item</span> <span class="token attr-name" >color</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>green<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u521b\u5efa\u670d\u52a1\u73b0\u573a <span class="token number" >2015</span><span class="token operator" >-</span><span class="token number" >09</span><span class="token operator" >-</span><span class="token number" >01</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Timeline.Item</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Timeline.Item</span> <span class="token attr-name" >color</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>green<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u521b\u5efa\u670d\u52a1\u73b0\u573a <span class="token number" >2015</span><span class="token operator" >-</span><span class="token number" >09</span><span class="token operator" >-</span><span class="token number" >01</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Timeline.Item</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Timeline.Item</span> <span class="token attr-name" >color</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>red<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>\u521d\u6b65\u6392\u9664\u7f51\u7edc\u5f02\u5e38<span class="token number" >1</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>\u521d\u6b65\u6392\u9664\u7f51\u7edc\u5f02\u5e38<span class="token number" >2</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>\u521d\u6b65\u6392\u9664\u7f51\u7edc\u5f02\u5e38<span class="token number" >3</span> <span class="token number" >2015</span><span class="token operator" >-</span><span class="token number" >09</span><span class="token operator" >-</span><span class="token number" >01</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Timeline.Item</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Timeline.Item</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>\u6280\u672f\u6d4b\u8bd5\u5f02\u5e38<span class="token number" >1</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>\u6280\u672f\u6d4b\u8bd5\u5f02\u5e38<span class="token number" >2</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>\u6280\u672f\u6d4b\u8bd5\u5f02\u5e38<span class="token number" >3</span> <span class="token number" >2015</span><span class="token operator" >-</span><span class="token number" >09</span><span class="token operator" >-</span><span class="token number" >01</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Timeline.Item</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Timeline</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return l["default"].createElement(e["default"],null,l["default"].createElement(e["default"].Item,{color:"green"},"\u521b\u5efa\u670d\u52a1\u73b0\u573a 2015-09-01"),l["default"].createElement(e["default"].Item,{color:"green"},"\u521b\u5efa\u670d\u52a1\u73b0\u573a 2015-09-01"),l["default"].createElement(e["default"].Item,{color:"red"},l["default"].createElement("p",null,"\u521d\u6b65\u6392\u9664\u7f51\u7edc\u5f02\u5e381"),l["default"].createElement("p",null,"\u521d\u6b65\u6392\u9664\u7f51\u7edc\u5f02\u5e382"),l["default"].createElement("p",null,"\u521d\u6b65\u6392\u9664\u7f51\u7edc\u5f02\u5e383 2015-09-01")),l["default"].createElement(e["default"].Item,null,l["default"].createElement("p",null,"\u6280\u672f\u6d4b\u8bd5\u5f02\u5e381"),l["default"].createElement("p",null,"\u6280\u672f\u6d4b\u8bd5\u5f02\u5e382"),l["default"].createElement("p",null,"\u6280\u672f\u6d4b\u8bd5\u5f02\u5e383 2015-09-01")))}}},847:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(9),s(7)),e=t(p),o=(s(163),s(162)),l=t(o),c=s(1),u=t(c),k=s(2);t(k);n.exports={content:[["p","\u53ef\u4ee5\u8bbe\u7f6e\u4e3a\u56fe\u6807\u6216\u5176\u4ed6\u81ea\u5b9a\u4e49\u5143\u7d20\u3002"]],meta:{order:4,title:"\u81ea\u5b9a\u4e49\u65f6\u95f4\u8f74\u70b9",filename:"components/timeline/demo/custom.md",id:"components-timeline-demo-custom"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Timeline<span class="token punctuation" >,</span> Icon <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Timeline</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Timeline.Item</span><span class="token punctuation" >></span></span>\u521b\u5efa\u670d\u52a1\u73b0\u573a <span class="token number" >2015</span><span class="token operator" >-</span><span class="token number" >09</span><span class="token operator" >-</span><span class="token number" >01</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Timeline.Item</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Timeline.Item</span><span class="token punctuation" >></span></span>\u521d\u6b65\u6392\u9664\u7f51\u7edc\u5f02\u5e38 <span class="token number" >2015</span><span class="token operator" >-</span><span class="token number" >09</span><span class="token operator" >-</span><span class="token number" >01</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Timeline.Item</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Timeline.Item</span> <span class="token attr-name" >dot</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token operator" >&lt;</span>Icon type<span class="token operator" >=</span><span class="token string" >"clock-circle-o"</span> style<span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> fontSize<span class="token punctuation" >:</span> <span class="token string" >\'16px\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >}</span> color<span class="token operator" >=</span><span class="token string" >"red"</span><span class="token operator" >></span>\u6280\u672f\u6d4b\u8bd5\u5f02\u5e38 <span class="token number" >2015</span><span class="token operator" >-</span><span class="token number" >09</span><span class="token operator" >-</span><span class="token number" >01</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Timeline.Item</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Timeline.Item</span><span class="token punctuation" >></span></span>\u7f51\u7edc\u5f02\u5e38\u6b63\u5728\u4fee\u590d <span class="token number" >2015</span><span class="token operator" >-</span><span class="token number" >09</span><span class="token operator" >-</span><span class="token number" >01</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Timeline.Item</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Timeline</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return u["default"].createElement(l["default"],null,u["default"].createElement(l["default"].Item,null,"\u521b\u5efa\u670d\u52a1\u73b0\u573a 2015-09-01"),u["default"].createElement(l["default"].Item,null,"\u521d\u6b65\u6392\u9664\u7f51\u7edc\u5f02\u5e38 2015-09-01"),u["default"].createElement(l["default"].Item,{dot:u["default"].createElement(e["default"],{type:"clock-circle-o",style:{fontSize:"16px"}}),color:"red"},"\u6280\u672f\u6d4b\u8bd5\u5f02\u5e38 2015-09-01"),u["default"].createElement(l["default"].Item,null,"\u7f51\u7edc\u5f02\u5e38\u6b63\u5728\u4fee\u590d 2015-09-01"))}}},848:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(163),s(162)),e=t(p),o=s(1),l=t(o),c=s(2);t(c);n.exports={content:[["p","\u5728\u6700\u540e\u4f4d\u7f6e\u6dfb\u52a0\u4e00\u4e2a\u5e7d\u7075\u8282\u70b9\uff0c\u8868\u793a\u65f6\u95f4\u8f74\u672a\u5b8c\u6210\uff0c\u8fd8\u5728\u8bb0\u5f55\u8fc7\u7a0b\u4e2d\u3002\u53ef\u4ee5\u6307\u5b9a ",["code","pending={true}"]," \u6216\u8005 ",["code","pending={\u4e00\u4e2a React \u5143\u7d20}"],"\u3002"]],meta:{order:2,title:"\u6700\u540e\u4e00\u4e2a",filename:"components/timeline/demo/pending.md",id:"components-timeline-demo-pending"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Timeline <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Timeline</span> <span class="token attr-name" >pending={&lt;a</span> <span class="token attr-name" >href</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>#<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u67e5\u770b\u66f4\u591a<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>a</span><span class="token punctuation" >></span></span><span class="token punctuation" >}</span><span class="token operator" >></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Timeline.Item</span><span class="token punctuation" >></span></span>\u521b\u5efa\u670d\u52a1\u73b0\u573a <span class="token number" >2015</span><span class="token operator" >-</span><span class="token number" >09</span><span class="token operator" >-</span><span class="token number" >01</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Timeline.Item</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Timeline.Item</span><span class="token punctuation" >></span></span>\u521d\u6b65\u6392\u9664\u7f51\u7edc\u5f02\u5e38 <span class="token number" >2015</span><span class="token operator" >-</span><span class="token number" >09</span><span class="token operator" >-</span><span class="token number" >01</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Timeline.Item</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Timeline.Item</span><span class="token punctuation" >></span></span>\u6280\u672f\u6d4b\u8bd5\u5f02\u5e38 <span class="token number" >2015</span><span class="token operator" >-</span><span class="token number" >09</span><span class="token operator" >-</span><span class="token number" >01</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Timeline.Item</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Timeline</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return l["default"].createElement(e["default"],{pending:l["default"].createElement("a",{href:"#"},"\u67e5\u770b\u66f4\u591a")},l["default"].createElement(e["default"].Item,null,"\u521b\u5efa\u670d\u52a1\u73b0\u573a 2015-09-01"),l["default"].createElement(e["default"].Item,null,"\u521d\u6b65\u6392\u9664\u7f51\u7edc\u5f02\u5e38 2015-09-01"),l["default"].createElement(e["default"].Item,null,"\u6280\u672f\u6d4b\u8bd5\u5f02\u5e38 2015-09-01"))}}},1033:function(n,a,s){n.exports={basic:s(845),color:s(846),custom:s(847),pending:s(848)}}});