"use strict";(self.webpackChunkgoit_react_hw_07_phonebook=self.webpackChunkgoit_react_hw_07_phonebook||[]).push([[543],{9677:function(n,t,r){r.d(t,{$:function(){return u}});var o,i,e=r(168),a=r(5867),c=a.ZP.div(o||(o=(0,e.Z)(["\n  width: 100%;\n  border-radius: 8px;\n  padding: 40px 20px;\n\n  background-color: var(--white-color);\n  box-shadow: var(--box-shadow);\n"]))),s=a.ZP.h2(i||(i=(0,e.Z)(["\n  margin-bottom: 28px;\n\n  text-align: center;\n  font-size: 24px;\n  line-height: 1.17;\n  letter-spacing: -0.96px;\n  text-transform: uppercase;\n"]))),l=r(184),u=function(n){var t=n.title,r=n.children;return(0,l.jsxs)(c,{children:[(0,l.jsx)(s,{children:t}),r]})}},2543:function(n,t,r){r.r(t),r.d(t,{default:function(){return q}});var o,i,e,a,c,s,l,u,d,x,p,f,h,g=r(2791),v=r(9434),b=r(8097),m=r(5218),j=r(6351),Z=r(9677),P=r(8820),w=r(6895),k=r(168),y=r(5867),C=r(9126),_=y.ZP.label(o||(o=(0,k.Z)(["\n  display: block;\n\n  margin-bottom: 28px;\n"]))),z=y.ZP.div(i||(i=(0,k.Z)(["\n  position: relative;\n"]))),I=y.ZP.input(e||(e=(0,k.Z)(["\n  display: block;\n\n  width: 100%;\n  border-radius: 8px;\n  border: 1px solid var(--text-black-color);\n  padding: 8px 32px;\n  margin-top: 8px;\n\n  outline: 2px solid transparent;\n\n  transition: border-color var(--transition-duration)\n      var(--transition-timing-function),\n    outline-color var(--transition-duration) var(--transition-timing-function);\n\n  &:focus {\n    border-color: transparent;\n    outline-color: var(--blue-color);\n  }\n"]))),F=(0,y.ZP)(C.dVI)(a||(a=(0,k.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 8px;\n  transform: translateY(-50%);\n"]))),G=y.ZP.button(c||(c=(0,k.Z)(["\n  position: absolute;\n  top: 50%;\n  right: 8px;\n  transform: translateY(-50%);\n\n  width: 16px;\n  height: 16px;\n  padding: 0;\n  border: none;\n\n  color: var(--black-color);\n  background-color: transparent;\n\n  transition: color var(--transition-duration) var(--transition-timing-function);\n\n  &:is(:hover, :focus) {\n    color: var(--blue-color);\n  }\n"]))),D=r(184),L=function(){var n=(0,v.I0)(),t=(0,v.v9)(j.Gd);return(0,D.jsx)(D.Fragment,{children:(0,D.jsxs)(_,{children:["Find contact by name or number",(0,D.jsxs)(z,{children:[(0,D.jsx)(I,{type:"text",value:t,placeholder:"Name or number",onChange:function(t){var r=t.currentTarget.value.trim();n((0,w.x)(r))}}),(0,D.jsx)(F,{}),t&&(0,D.jsx)(G,{type:"button",onClick:function(t){t.currentTarget.closest("label").control.value="",n((0,w.x)(""))},children:(0,D.jsx)(P.oHP,{})})]})]})})},N=r(5763),T=y.ZP.p(s||(s=(0,k.Z)(["\n  margin-right: 12px;\n\n  font-weight: 700;\n"]))),A=y.ZP.span(l||(l=(0,k.Z)(["\n  margin-right: auto;\n"]))),E=y.ZP.button(u||(u=(0,k.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n\n  border-radius: 18px;\n  border: 1px solid var(--text-black-color);\n  padding: 8px 12px;\n\n  color: currentColor;\n  background-color: transparent;\n\n  transition: color var(--transition-duration)\n  var(--transition-timing-function), border-color var(--transition-duration)\n  var(--transition-timing-function);\n\n&:is(:hover, :focus, :active) {\n  color: var(--red-color);\n  border-color: var(--red-color);\n"]))),U=function(n){var t=n.contact,r=void 0===t?{}:t,o=(0,v.I0)(),i=r.id,e=r.name,a=r.number;return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(T,{children:"".concat(e,": ")}),(0,D.jsx)(A,{children:a}),(0,D.jsxs)(E,{type:"button",onClick:function(){return function(n,t){o((0,b.GK)(n))}(i)},children:[(0,D.jsx)(N.MSG,{size:20}),(0,D.jsx)("p",{children:"Delete"})]})]})},Y=y.ZP.li(d||(d=(0,k.Z)(["\n  transform: scale(1, 1);\n\n  display: flex;\n  align-items: center;\n\n  border-radius: 8px;\n  border: 2px solid rgb(228 228 228);\n  padding: 16px 20px;\n\n  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),\n    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);\n\n  transition: transform var(--transition-duration)\n    var(--transition-timing-function);\n\n  &:not(:last-child) {\n    margin-bottom: 20px;\n  }\n\n  &:is(:hover) {\n    transform: scale(1.02, 1.1);\n  }\n"]))),$=y.ZP.p(x||(x=(0,k.Z)(["\n  text-align: center;\n"]))),H=function(){var n=(0,v.v9)(j.DI);return n.length?(0,D.jsx)("ul",{children:n.map((function(n){return(0,D.jsx)(Y,{children:(0,D.jsx)(U,{contact:n})},n.id)}))}):(0,D.jsx)($,{children:"No contacts found for the entered name"})},K=r(8512),M=y.ZP.p(p||(p=(0,k.Z)(["\n  text-align: center;\n"]))),O=y.ZP.div(f||(f=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 16px;\n\n  width: 100%;\n  height: calc(100vh - 134px);\n"]))),S=y.ZP.p(h||(h=(0,k.Z)(["\n  text-align: center;\n  font-size: 18px;\n  line-height: 1.33;\n  letter-spacing: -0.36px;\n"]))),V=function(){return(0,D.jsxs)(O,{children:[(0,D.jsx)(C.j4y,{size:64}),(0,D.jsx)(S,{children:"Oops, something went wrong. Try reloading the page."})]})},q=function(){var n=(0,v.v9)(j.Af),t=(0,v.v9)(j.xU),r=(0,v.v9)(j.zh),o=(0,v.I0)();return(0,g.useEffect)((function(){return function(){m.ZP.remove()}}),[]),(0,g.useEffect)((function(){o((0,b.yF)())}),[o]),(0,D.jsx)("main",{children:r?(0,D.jsx)(V,{}):(0,D.jsxs)(Z.$,{title:"Contacts",children:[n.length>0?(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(L,{}),(0,D.jsx)(H,{})]}):(0,D.jsx)(M,{children:"No contacts"}),t&&(0,D.jsx)(K.a,{})]})})}},6351:function(n,t,r){r.d(t,{Af:function(){return i},DI:function(){return s},Gd:function(){return c},xU:function(){return e},zh:function(){return a}});var o=r(6916),i=function(n){return n.contacts.items},e=function(n){return n.contacts.isLoading},a=function(n){return n.contacts.error},c=function(n){return n.filter.value},s=(0,o.P1)([i,c],(function(n,t){return n.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())||n.number.includes(t)}))}))}}]);
//# sourceMappingURL=543.74ec1800.chunk.js.map