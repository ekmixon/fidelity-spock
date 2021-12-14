"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[3861],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=p(t),d=r,m=f["".concat(s,".").concat(d)]||f[d]||c[d]||o;return t?a.createElement(m,i(i({ref:n},u),{},{components:t})):a.createElement(m,i({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2655:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return f}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],l={},s="Optional Parameters",p={unversionedId:"advanced_features/Optional-Parameters",id:"advanced_features/Optional-Parameters",isDocsHomePage:!1,title:"Optional Parameters",description:"spock allows for parameters to be defined as optional. This means that if the parameter value is not set from either",source:"@site/docs/advanced_features/Optional-Parameters.md",sourceDirName:"advanced_features",slug:"/advanced_features/Optional-Parameters",permalink:"/advanced_features/Optional-Parameters",editUrl:"https://github.com/fidelity/spock/edit/master/website/docs/advanced_features/Optional-Parameters.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Defaults",permalink:"/advanced_features/Defaults"},next:{title:"Parameter Groups",permalink:"/advanced_features/Parameter-Groups"}},u=[{value:"Defining Optional spock Parameters",id:"defining-optional-spock-parameters",children:[]},{value:"Code Behavior",id:"code-behavior",children:[]}],c={toc:u};function f(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"optional-parameters"},"Optional Parameters"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"spock")," allows for parameters to be defined as optional. This means that if the parameter value is not set from either\na configuration file or a default value it will be assigned the ",(0,o.kt)("inlineCode",{parentName:"p"},"None")," value. Optional ",(0,o.kt)("inlineCode",{parentName:"p"},"spock")," parameters are defined\nusing the ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," type from the ",(0,o.kt)("inlineCode",{parentName:"p"},"typing")," standard library."),(0,o.kt)("h3",{id:"defining-optional-spock-parameters"},"Defining Optional spock Parameters"),(0,o.kt)("p",null,"Optional parameters commonly occur in applications with complex behavior (like neural networks). For instance, what if\nyou want to execute a specific behavior with some parameter(s) if the parameter is defined and if the parameter is not\ndefined either skip the behavior or so something different. Normally this would require a combination of boolean logic\nand parameter definition (which might be useless...). ",(0,o.kt)("inlineCode",{parentName:"p"},"spock")," remedies this with optional parameters."),(0,o.kt)("p",null,"As an example, let's assume we want to make dropout within our basic neural network optional. Let's modify the\ndefinition in: ",(0,o.kt)("inlineCode",{parentName:"p"},"tutorial.py")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from enum import Enum\nfrom spock.args import SavePath\nfrom spock.config import spock\nfrom typing import List\nfrom typing import Optional\nfrom typing import Tuple\n\nclass Activation(Enum):\n    relu = 'relu'\n    gelu = 'gelu'\n    tanh = 'tanh'\n\n\n@spock\nclass ModelConfig:\n    save_path: SavePath\n    lr: float = 0.01\n    n_features: int\n    dropout: Optional[List[float]]\n    hidden_sizes: Tuple[int, int, int] = (32, 32, 32)\n    activation: Activation = 'relu'\n")),(0,o.kt)("p",null,"Notice that all we did was change the type from ",(0,o.kt)("inlineCode",{parentName:"p"},"List[float]")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional[List[float]]"),"."),(0,o.kt)("p",null,"Now let's edit our simple neural network code to reflect that dropout is now optional. We have to change the code a bit\nto be more modular (but still ugly for demonstration): ",(0,o.kt)("inlineCode",{parentName:"p"},"basic_nn.py")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import torch.nn as nn\n\nclass BasicNet(nn.Module):\n    def __init__(self, model_config):\n        super(BasicNet, self).__init__()\n        # Make a dictionary of activation functions to select from\n        self.act_fncs = {'relu': nn.ReLU, 'gelu': nn.GELU, 'tanh': nn.Tanh}\n        self.use_act = self.act_fncs.get(model_config.activation)()\n        # Define the layers manually (avoiding list comprehension for clarity)\n        self.layer_1 = nn.Linear(model_config.n_features, model_config.hidden_sizes[0])\n        self.layer_2 = nn.Linear(model_config.hidden_sizes[0], model_config.hidden_sizes[1])\n        self.layer_3 = nn.Linear(model_config.hidden_sizes[1], model_config.hidden_sizes[2])\n        # Define some dropout layers\n        self.dropout = []\n        if model_config.dropout is not None:\n            self.dropout = [nn.Dropout(val) for val in model_config.dropout]\n        # Define the output layer\n        self.softmax = nn.Softmax(dim=1)\n\n    def forward(self, x):\n        # x is the data input\n        # Layer 1\n        # Linear\n        x = self.layer_1(x)\n        # Activation\n        x = self.use_act(x)\n        # Dropout\n        if len(self.dropout) != 0:\n            x = self.dropout[0](x)\n        # Layer 2\n        # Linear\n        x = self.layer_2(x)\n        # Activation\n        x = self.use_act(x)\n        # Dropout\n        if len(self.dropout) != 0:\n            x = self.dropout[1](x)\n        # Layer 3\n        # Linear\n        x = self.layer_3(x)\n        # Softmax\n        output = self.softmax(x)\n        return output\n")),(0,o.kt)("h3",{id:"code-behavior"},"Code Behavior"),(0,o.kt)("p",null,"If we use the same configuration file defined in: ",(0,o.kt)("inlineCode",{parentName:"p"},"tutorial.yaml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"################\n# tutorial.yaml\n################\n# ModelConfig\nn_features: 64\ndropout: [0.2, 0.1]\nhidden_sizes: [32, 32, 16]\nactivation: relu\n")),(0,o.kt)("p",null,"With this configuration file, the parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"dropout")," is assigned the specified value. Thus our basic neural network\nwill have dropout layers between Layer 1, Layer 2, and Layer 3."),(0,o.kt)("p",null,"However, if we use the following configuration file: ",(0,o.kt)("inlineCode",{parentName:"p"},"tutorial_no_dropout.yaml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"################\n# tutorial.yaml\n################\n# ModelConfig\nn_features: 64\nhidden_sizes: [32, 32, 16]\nactivation: relu\n")),(0,o.kt)("p",null,"With this configuration file, the parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"dropout")," is assigned ",(0,o.kt)("inlineCode",{parentName:"p"},"None"),". Thus our based on the logic in our code our\nbasic neural network will not have dropout between layers."),(0,o.kt)("p",null,"This simple example demonstrates the power of ",(0,o.kt)("inlineCode",{parentName:"p"},"spock")," optional parameters. Flow through code can easily be modified by\nsimply changing the configuration file."))}f.isMDXComponent=!0}}]);