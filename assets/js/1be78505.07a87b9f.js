"use strict";(self.webpackChunkopen_assistant=self.webpackChunkopen_assistant||[]).push([[9514],{74477:(e,n,t)=>{t.d(n,{E:()=>d,q:()=>i});var a=t(67294),r=t(902);const o=a.createContext(null);function i(e){let{children:n,version:t}=e;return a.createElement(o.Provider,{value:t},n)}function d(){const e=(0,a.useContext)(o);if(null===e)throw new r.i6("DocsVersionProvider");return e}},70577:(e,n,t)=>{t.r(n),t.d(n,{default:()=>H});var a=t(67294),r=t(86010),o=t(1944),i=t(35281),d=t(43320),c=t(52802),s=t(74477),l=t(1116),m=t(23053),u=t(1236),b=t(16550),p=t(39085),E=t(95999),h=t(28362);const C="expandButton_LNzZ",f="expandButtonIcon_QToQ";function g(e){let{toggleSidebar:n}=e;return a.createElement("div",{className:C,title:(0,E.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,E.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:n,onClick:n},a.createElement(h.Z,{className:f}))}const v="docSidebarContainer_Q8yt",I="docSidebarContainerHidden_sCVZ";function S(e){let{children:n}=e;const t=(0,l.V)();return a.createElement(a.Fragment,{key:t?.name??"noSidebar"},n)}function x(e){let{sidebar:n,hiddenSidebarContainer:t,setHiddenSidebarContainer:o}=e;const{pathname:d}=(0,b.TH)(),[c,s]=(0,a.useState)(!1),l=(0,a.useCallback)((()=>{c&&s(!1),o((e=>!e))}),[o,c]);return a.createElement("aside",{className:(0,r.Z)(i.k.docs.docSidebarContainer,v,t&&I),onTransitionEnd:e=>{e.currentTarget.classList.contains(v)&&t&&s(!0)}},a.createElement(S,null,a.createElement(p.Z,{sidebar:n,path:d,onCollapse:l,isHidden:c})),c&&a.createElement(g,{toggleSidebar:l}))}const N={docMainContainer:"docMainContainer_Zs9v",docMainContainerEnhanced:"docMainContainerEnhanced_lbAo",docItemWrapperEnhanced:"docItemWrapperEnhanced_dczp"};function Z(e){let{hiddenSidebarContainer:n,children:t}=e;const o=(0,l.V)();return a.createElement("main",{className:(0,r.Z)(N.docMainContainer,(n||!o)&&N.docMainContainerEnhanced)},a.createElement("div",{className:(0,r.Z)("container padding-top--md padding-bottom--lg",N.docItemWrapper,n&&N.docItemWrapperEnhanced)},t))}const _="docPage_CHKt",k="docsWrapper_jNaU";function M(e){let{children:n}=e;const t=(0,l.V)(),[r,o]=(0,a.useState)(!1);return a.createElement(m.Z,{wrapperClassName:k},a.createElement(u.Z,null),a.createElement("div",{className:_},t&&a.createElement(x,{sidebar:t.items,hiddenSidebarContainer:r,setHiddenSidebarContainer:o}),a.createElement(Z,{hiddenSidebarContainer:r},n)))}var w=t(86561),T=t(92348);function A(e){const{versionMetadata:n}=e;return a.createElement(a.Fragment,null,a.createElement(T.Z,{version:n.version,tag:(0,d.os)(n.pluginId,n.version)}),a.createElement(o.d,null,n.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function H(e){const{versionMetadata:n}=e,t=(0,c.hI)(e);if(!t)return a.createElement(w.default,null);const{docElement:d,sidebarName:m,sidebarItems:u}=t;return a.createElement(a.Fragment,null,a.createElement(A,e),a.createElement(o.FG,{className:(0,r.Z)(i.k.wrapper.docsPages,i.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.q,{version:n},a.createElement(l.b,{name:m,items:u},a.createElement(M,null,d)))))}}}]);