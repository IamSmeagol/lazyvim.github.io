"use strict";(self.webpackChunklazyvim=self.webpackChunklazyvim||[]).push([[751],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=a.createContext({}),c=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(u.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(t),d=l,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||o;return t?a.createElement(f,r(r({ref:n},s),{},{components:t})):a.createElement(f,r({ref:n},s))}));function f(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,r=new Array(o);r[0]=d;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[p]="string"==typeof e?e:l,r[1]=i;for(var c=2;c<o;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(7294),l=t(6010);const o="tabItem_Ymn6";function r(e){let{children:n,hidden:t,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(o,r),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>x});var a=t(7462),l=t(7294),o=t(6010),r=t(2466),i=t(6550),u=t(1980),c=t(7392),s=t(12);function p(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:l}}=e;return{value:n,label:t,attributes:a,default:l}}))}function m(e){const{values:n,children:t}=e;return(0,l.useMemo)((()=>{const e=n??p(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function d(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u._X)(o),(0,l.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=m(e),[r,i]=(0,l.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[u,c]=f({queryString:t,groupId:a}),[p,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,s.Nk)(t);return[a,(0,l.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),g=(()=>{const e=u??p;return d({value:e,tabValues:o})?e:null})();(0,l.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:r,selectValue:(0,l.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),b(e)}),[c,b,o]),tabValues:o}}var g=t(2389);const h="tabList__CuJ",y="tabItem_LNqP";function k(e){let{className:n,block:t,selectedValue:i,selectValue:u,tabValues:c}=e;const s=[],{blockElementScrollPositionUntilNextRender:p}=(0,r.o5)(),m=e=>{const n=e.currentTarget,t=s.indexOf(n),a=c[t].value;a!==i&&(p(n),u(a))},d=e=>{let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}n?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n)},c.map((e=>{let{value:n,label:t,attributes:r}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:e=>s.push(e),onKeyDown:d,onClick:m},r,{className:(0,o.Z)("tabs__item",y,r?.className,{"tabs__item--active":i===n})}),t??n)})))}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},o.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function T(e){const n=b(e);return l.createElement("div",{className:(0,o.Z)("tabs-container",h)},l.createElement(k,(0,a.Z)({},e,n)),l.createElement(v,(0,a.Z)({},e,n)))}function x(e){const n=(0,g.Z)();return l.createElement(T,(0,a.Z)({key:String(n)},e))}},3155:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>u,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=t(7462),l=(t(7294),t(3905)),o=t(4866),r=t(5162);const i={},u="Copilot",c={unversionedId:"extras/ai/copilot",id:"extras/ai/copilot",title:"Copilot",description:"You can enable the extra with the :LazyExtras command.",source:"@site/docs/extras/ai/copilot.md",sourceDirName:"extras/ai",slug:"/extras/ai/copilot",permalink:"/extras/ai/copilot",draft:!1,editUrl:"https://github.com/LazyVim/lazyvim.github.io/tree/main/docs/extras/ai/copilot.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Copilot-chat",permalink:"/extras/ai/copilot-chat"},next:{title:"Tabnine",permalink:"/extras/ai/tabnine"}},s={},p=[{value:"copilot.lua",id:"copilotlua",level:2},{value:"nvim-cmp",id:"nvim-cmp",level:2},{value:"copilot-cmp",id:"copilot-cmp",level:2},{value:"copilot.lua",id:"copilotlua-1",level:2},{value:"lualine.nvim <em>(optional)</em>",id:"lualinenvim-optional",level:2},{value:"blink.cmp <em>(optional)</em>",id:"blinkcmp-optional",level:2}],m={toc:p};function d(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"copilot"},(0,l.kt)("inlineCode",{parentName:"h1"},"Copilot")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"You can enable the extra with the ",(0,l.kt)("inlineCode",{parentName:"p"},":LazyExtras")," command.\nPlugins marked as optional will only be configured if they are installed.")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Alternatively, you can add it to your ",(0,l.kt)("code",null,"lazy.nvim")," imports"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="lua/config/lazy.lua" {4}',title:'"lua/config/lazy.lua"',"{4}":!0},'require("lazy").setup({\n  spec = {\n    { "LazyVim/LazyVim", import = "lazyvim.plugins" },\n    { import = "lazyvim.plugins.extras.ai.copilot" },\n    { import = "plugins" },\n  },\n})\n'))),(0,l.kt)("p",null,"Below you can find a list of included plugins and their default settings."),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"You don't need to copy the default settings to your config.\nThey are only shown here for reference.")),(0,l.kt)("h2",{id:"copilotlua"},(0,l.kt)("a",{parentName:"h2",href:"https://github.com/zbirenbaum/copilot.lua"},"copilot.lua")),(0,l.kt)("p",null," copilot"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"opts = {\n  suggestion = { enabled = false },\n  panel = { enabled = false },\n  filetypes = {\n    markdown = true,\n    help = true,\n  },\n}\n"))),(0,l.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "zbirenbaum/copilot.lua",\n  cmd = "Copilot",\n  build = ":Copilot auth",\n  opts = {\n    suggestion = { enabled = false },\n    panel = { enabled = false },\n    filetypes = {\n      markdown = true,\n      help = true,\n    },\n  },\n}\n')))),(0,l.kt)("h2",{id:"nvim-cmp"},(0,l.kt)("a",{parentName:"h2",href:"https://github.com/hrsh7th/nvim-cmp"},"nvim-cmp")),(0,l.kt)("p",null," copilot cmp source"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function(_, opts)\n  table.insert(opts.sources, 1, {\n    name = "copilot",\n    group_index = 1,\n    priority = 100,\n  })\nend\n'))),(0,l.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "nvim-cmp",\n  dependencies = {\n    {\n      "zbirenbaum/copilot-cmp",\n      dependencies = "copilot.lua",\n      opts = {},\n      config = function(_, opts)\n        local copilot_cmp = require("copilot_cmp")\n        copilot_cmp.setup(opts)\n        -- attach cmp source whenever copilot attaches\n        -- fixes lazy-loading issues with the copilot cmp source\n        LazyVim.lsp.on_attach(function(client)\n          copilot_cmp._on_insert_enter({})\n        end, "copilot")\n      end,\n    },\n  },\n  ---@param opts cmp.ConfigSchema\n  opts = function(_, opts)\n    table.insert(opts.sources, 1, {\n      name = "copilot",\n      group_index = 1,\n      priority = 100,\n    })\n  end,\n}\n')))),(0,l.kt)("h2",{id:"copilot-cmp"},(0,l.kt)("a",{parentName:"h2",href:"https://github.com/zbirenbaum/copilot-cmp"},"copilot-cmp")),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"opts = {}\n"))),(0,l.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "zbirenbaum/copilot-cmp",\n  dependencies = "copilot.lua",\n  opts = {},\n  config = function(_, opts)\n    local copilot_cmp = require("copilot_cmp")\n    copilot_cmp.setup(opts)\n    -- attach cmp source whenever copilot attaches\n    -- fixes lazy-loading issues with the copilot cmp source\n    LazyVim.lsp.on_attach(function(client)\n      copilot_cmp._on_insert_enter({})\n    end, "copilot")\n  end,\n}\n')))),(0,l.kt)("h2",{id:"copilotlua-1"},(0,l.kt)("a",{parentName:"h2",href:"https://github.com/zbirenbaum/copilot.lua"},"copilot.lua")),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"opts = {\n  suggestion = {\n    enabled = true,\n    auto_trigger = true,\n    keymap = { accept = false },\n  },\n}\n"))),(0,l.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "zbirenbaum/copilot.lua",\n  event = "InsertEnter",\n  opts = {\n    suggestion = {\n      enabled = true,\n      auto_trigger = true,\n      keymap = { accept = false },\n    },\n  },\n}\n')))),(0,l.kt)("h2",{id:"lualinenvim-optional"},(0,l.kt)("a",{parentName:"h2",href:"https://github.com/nvim-lualine/lualine.nvim"},"lualine.nvim")," ",(0,l.kt)("em",{parentName:"h2"},"(optional)")),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function(_, opts)\n  local colors = {\n    [""] = LazyVim.ui.fg("Special"),\n    ["Normal"] = LazyVim.ui.fg("Special"),\n    ["Warning"] = LazyVim.ui.fg("DiagnosticError"),\n    ["InProgress"] = LazyVim.ui.fg("DiagnosticWarn"),\n  }\n  table.insert(opts.sections.lualine_x, 2, {\n    function()\n      local icon = LazyVim.config.icons.kinds.Copilot\n      local status = require("copilot.api").status.data\n      return icon .. (status.message or "")\n    end,\n    cond = function()\n      if not package.loaded["copilot"] then\n        return\n      end\n      local ok, clients = pcall(LazyVim.lsp.get_clients, { name = "copilot", bufnr = 0 })\n      if not ok then\n        return false\n      end\n      return ok and #clients > 0\n    end,\n    color = function()\n      if not package.loaded["copilot"] then\n        return\n      end\n      local status = require("copilot.api").status.data\n      return colors[status.status] or colors[""]\n    end,\n  })\nend\n'))),(0,l.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "nvim-lualine/lualine.nvim",\n  optional = true,\n  event = "VeryLazy",\n  opts = function(_, opts)\n    local colors = {\n      [""] = LazyVim.ui.fg("Special"),\n      ["Normal"] = LazyVim.ui.fg("Special"),\n      ["Warning"] = LazyVim.ui.fg("DiagnosticError"),\n      ["InProgress"] = LazyVim.ui.fg("DiagnosticWarn"),\n    }\n    table.insert(opts.sections.lualine_x, 2, {\n      function()\n        local icon = LazyVim.config.icons.kinds.Copilot\n        local status = require("copilot.api").status.data\n        return icon .. (status.message or "")\n      end,\n      cond = function()\n        if not package.loaded["copilot"] then\n          return\n        end\n        local ok, clients = pcall(LazyVim.lsp.get_clients, { name = "copilot", bufnr = 0 })\n        if not ok then\n          return false\n        end\n        return ok and #clients > 0\n      end,\n      color = function()\n        if not package.loaded["copilot"] then\n          return\n        end\n        local status = require("copilot.api").status.data\n        return colors[status.status] or colors[""]\n      end,\n    })\n  end,\n}\n')))),(0,l.kt)("h2",{id:"blinkcmp-optional"},(0,l.kt)("a",{parentName:"h2",href:"https://github.com/saghen/blink.cmp"},"blink.cmp")," ",(0,l.kt)("em",{parentName:"h2"},"(optional)")),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  windows = {\n    ghost_text = {\n      enabled = false,\n    },\n  },\n  keymap = {\n    ["<Tab>"] = {\n      function(cmp)\n        if cmp.is_in_snippet() then\n          return cmp.accept()\n        elseif require("copilot.suggestion").is_visible() then\n          LazyVim.create_undo()\n          require("copilot.suggestion").accept()\n          return true\n        else\n          return cmp.select_and_accept()\n        end\n      end,\n      "snippet_forward",\n      "fallback",\n    },\n  },\n}\n'))),(0,l.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "saghen/blink.cmp",\n  optional = true,\n  specs = {\n    {\n      "zbirenbaum/copilot.lua",\n      event = "InsertEnter",\n      opts = {\n        suggestion = {\n          enabled = true,\n          auto_trigger = true,\n          keymap = { accept = false },\n        },\n      },\n    },\n  },\n  opts = {\n    windows = {\n      ghost_text = {\n        enabled = false,\n      },\n    },\n    keymap = {\n      ["<Tab>"] = {\n        function(cmp)\n          if cmp.is_in_snippet() then\n            return cmp.accept()\n          elseif require("copilot.suggestion").is_visible() then\n            LazyVim.create_undo()\n            require("copilot.suggestion").accept()\n            return true\n          else\n            return cmp.select_and_accept()\n          end\n        end,\n        "snippet_forward",\n        "fallback",\n      },\n    },\n  },\n}\n')))))}d.isMDXComponent=!0}}]);