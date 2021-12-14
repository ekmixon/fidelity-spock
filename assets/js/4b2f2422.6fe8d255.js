"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[9384],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(t),m=r,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||o;return t?a.createElement(d,i(i({ref:n},p),{},{components:t})):a.createElement(d,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},747:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],c={},s="Composing Configuration Files",l={unversionedId:"advanced_features/Composition",id:"advanced_features/Composition",isDocsHomePage:!1,title:"Composing Configuration Files",description:"spock supports hierarchical composition of configuration files with a simple syntax.",source:"@site/docs/advanced_features/Composition.md",sourceDirName:"advanced_features",slug:"/advanced_features/Composition",permalink:"/advanced_features/Composition",editUrl:"https://github.com/fidelity/spock/edit/master/website/docs/advanced_features/Composition.md",tags:[],version:"current",frontMatter:{}},p=[{value:"Composing Two YAML Files",id:"composing-two-yaml-files",children:[]},{value:"Warning",id:"warning",children:[]}],u={toc:p};function f(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"composing-configuration-files"},"Composing Configuration Files"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"spock")," supports hierarchical composition of configuration files with a simple syntax."),(0,o.kt)("h3",{id:"composing-two-yaml-files"},"Composing Two YAML Files"),(0,o.kt)("p",null,"Going back to our example. Let's say we had a a portion of our configuration that does not change that often while\nanother portion changes frequently or are parameters that are being experimented with. For instance, let's say we have\nfinalized things related to our data set (although in our examples it is random... let's just imagine for now) but we are\nstill experimenting with our neural network parameters. "),(0,o.kt)("p",null,"Instead of maintaining multiple copies of configuration files where parameters related to the data set are not\nchanging, we can compose two separate configuration files together. One static file related to the data set parameters\nand a more dynamic file that is changing. This separation helps keep errors from propagating into the static set of\ndata set related parameters."),(0,o.kt)("p",null,"For instance we can break our ",(0,o.kt)("inlineCode",{parentName:"p"},"tutorial.yaml")," file into two."),(0,o.kt)("p",null,"First, let's split out the static data related parameters into: ",(0,o.kt)("inlineCode",{parentName:"p"},"data.yaml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"################\n# data.yaml\n################\n# DataConfig\nbatch_size: 2\nn_samples: 8\nDataConfig:\n  cache_path: /home/user/cache/\n")),(0,o.kt)("p",null,"And then in our second configuration file we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"config:")," key to define the other configuration files we want\nto compose into this configuration file: ",(0,o.kt)("inlineCode",{parentName:"p"},"changing.yaml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"################\n# changing.yaml\n################\n# Global\ncache_path: /tmp/cache/\nconfig: [/data.yaml]\n# Special Key\nsave_path: /tmp\n# ModelConfig\nn_features: 64\ndropout: [0.2, 0.1]\nhidden_sizes: [32, 32, 16]\nactivation: relu\noptimizer: SGD\n# OptimizerConfig\nlr: 0.01\nn_epochs: 2\ngrad_clip: 5.0\n# SGD Config\nweight_decay: 1E-5\nmomentum: 0.9\nnesterov: true\n")),(0,o.kt)("h3",{id:"warning"},"Warning"),(0,o.kt)("p",null,"You can add as many configuration files as you want to a ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," tag however be aware of circular dependencies (this\nshould get caught and raise an exception) and that the lower a configuration file is in the order (i.e. later in the\nlist) that it will take precedence over the others."))}f.isMDXComponent=!0}}]);