"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[36202],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},23235:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={title:"List",swizzle:!0},p=void 0,l={unversionedId:"ui-integrations/mantine/components/basic-views/list/index",id:"ui-integrations/mantine/components/basic-views/list/index",title:"List",description:"`` provides us a layout to display the page. It does not contain any logic and just adds extra functionalities like a create button and being able to give titles to the page.",source:"@site/docs/ui-integrations/mantine/components/basic-views/list/index.md",sourceDirName:"ui-integrations/mantine/components/basic-views/list",slug:"/ui-integrations/mantine/components/basic-views/list/",permalink:"/docs/ui-integrations/mantine/components/basic-views/list/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/ui-integrations/mantine/components/basic-views/list/index.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1701686837,formattedLastUpdatedAt:"Dec 4, 2023",frontMatter:{title:"List",swizzle:!0},sidebar:"mainSidebar",previous:{title:"Edit",permalink:"/docs/ui-integrations/mantine/components/basic-views/edit/"},next:{title:"Show",permalink:"/docs/ui-integrations/mantine/components/basic-views/show/"}},d={},c=[{value:"Properties",id:"properties",level:2},{value:"<code>title</code>",id:"title",level:3},{value:"<code>resource</code>",id:"resource",level:3},{value:"<code>canCreate</code> and <code>createButtonProps</code>",id:"cancreate-and-createbuttonprops",level:3},{value:"<code>breadcrumb</code>",id:"breadcrumb",level:3},{value:"<code>wrapperProps</code>",id:"wrapperprops",level:3},{value:"<code>headerProps</code>",id:"headerprops",level:3},{value:"<code>contentProps</code>",id:"contentprops",level:3},{value:"<code>headerButtons</code>",id:"headerbuttons",level:3},{value:"<code>headerButtonProps</code>",id:"headerbuttonprops",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Props",id:"props",level:3}],u=(m="PropsTable",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var m;const f={toc:c};function h(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'setRefineProps({\n  notificationProvider: RefineMantine.notificationProvider,\n  Layout: RefineMantine.Layout,\n  Sider: () => null,\n});\n\nconst Wrapper = ({ children }) => {\n  return (\n    <MantineCore.MantineProvider theme={RefineMantine.LightTheme} withNormalizeCSS withGlobalStyles>\n      <MantineCore.Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n      <MantineNotifications.NotificationsProvider position="top-right">\n        {children}\n      </MantineNotifications.NotificationsProvider>\n    </MantineCore.MantineProvider>\n  );\n};\n\ninterface ICategory {\n  id: number;\n  title: string;\n}\n\ninterface IPost {\n  id: number;\n  title: string;\n  content: string;\n  status: "published" | "draft" | "rejected";\n  category: { id: number };\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<List>")," provides us a layout to display the page. It does not contain any logic and just adds extra functionalities like a create button and being able to give titles to the page."),(0,r.kt)("p",null,"We will show what ",(0,r.kt)("inlineCode",{parentName:"p"},"<List>")," does using properties with examples."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=420px hideCode",live:!0,url:"http://localhost:3000/posts",previewHeight:"420px",hideCode:!0},'setInitialRoutes(["/posts"]);\nimport { Refine } from "@refinedev/core";\nimport routerProvider from "@refinedev/react-router-v6/legacy";\nimport dataProvider from "@refinedev/simple-rest";\n\n// visible-block-start\nimport { List, DateField } from "@refinedev/mantine";\nimport { Table, Pagination } from "@mantine/core";\nimport { useTable } from "@refinedev/react-table";\nimport { ColumnDef, flexRender } from "@tanstack/react-table";\n\nconst PostList: React.FC = () => {\n  const columns = React.useMemo<ColumnDef<IPost>[]>(\n    () => [\n      {\n        id: "id",\n        header: "ID",\n        accessorKey: "id",\n      },\n      {\n        id: "title",\n        header: "Title",\n        accessorKey: "title",\n      },\n      {\n        id: "status",\n        header: "Status",\n        accessorKey: "status",\n      },\n      {\n        id: "createdAt",\n        header: "Created At",\n        accessorKey: "createdAt",\n        cell: function render({ getValue }) {\n          return <DateField value={getValue() as string} format="LLL" />;\n        },\n      },\n    ],\n    [],\n  );\n\n  const {\n    getHeaderGroups,\n    getRowModel,\n    refineCore: { setCurrent, pageCount, current },\n  } = useTable({\n    columns,\n  });\n\n  return (\n    <List>\n      <Table>\n        <thead>\n          {getHeaderGroups().map((headerGroup) => (\n            <tr key={headerGroup.id}>\n              {headerGroup.headers.map((header) => (\n                <th key={header.id}>\n                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}\n                </th>\n              ))}\n            </tr>\n          ))}\n        </thead>\n        <tbody>\n          {getRowModel().rows.map((row) => (\n            <tr key={row.id}>\n              {row.getVisibleCells().map((cell) => (\n                <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>\n              ))}\n            </tr>\n          ))}\n        </tbody>\n      </Table>\n      <br />\n      <Pagination position="right" total={pageCount} page={current} onChange={setCurrent} />\n    </List>\n  );\n};\n// visible-block-end\n\nconst App = () => {\n  return (\n    <Refine\n      legacyRouterProvider={routerProvider}\n      dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n      resources={[\n        {\n          name: "posts",\n          list: PostList,\n        },\n      ]}\n    />\n  );\n};\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n')),(0,r.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,r.kt)("p",{parentName:"admonition"},"You can swizzle this component with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},(0,r.kt)("strong",{parentName:"a"},"refine CLI"))," to customize it.")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"title"},(0,r.kt)("inlineCode",{parentName:"h3"},"title")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"title")," allows adding a title for the ",(0,r.kt)("inlineCode",{parentName:"p"},"<List>")," component. If you don't pass title props, it uses plural form of resource name by default."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=280px",live:!0,url:"http://localhost:3000/posts",previewHeight:"280px"},'setInitialRoutes(["/posts"]);\nimport { Refine } from "@refinedev/core";\nimport routerProvider from "@refinedev/react-router-v6/legacy";\nimport dataProvider from "@refinedev/simple-rest";\n\n// visible-block-start\nimport { List } from "@refinedev/mantine";\nimport { Title } from "@mantine/core";\n\nconst PostList: React.FC = () => {\n  return (\n    /* highlight-next-line */\n    <List title={<Title order={3}>Custom Title</Title>}>\n      <p>Rest of your page here</p>\n    </List>\n  );\n};\n// visible-block-end\n\nconst App = () => {\n  return (\n    <Refine\n      legacyRouterProvider={routerProvider}\n      dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n      resources={[\n        {\n          name: "posts",\n          list: PostList,\n        },\n      ]}\n    />\n  );\n};\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n')),(0,r.kt)("h3",{id:"resource"},(0,r.kt)("inlineCode",{parentName:"h3"},"resource")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<List>")," component reads the ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," information from the route by default. If you want to use a custom resource for the ",(0,r.kt)("inlineCode",{parentName:"p"},"<List>")," component, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," prop."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/custom previewHeight=280px",live:!0,url:"http://localhost:3000/custom",previewHeight:"280px"},'setInitialRoutes(["/custom"]);\n\nimport { Refine } from "@refinedev/core";\nimport { Layout } from "@refinedev/mantine";\nimport routerProvider from "@refinedev/react-router-v6/legacy";\nimport dataProvider from "@refinedev/simple-rest";\n// visible-block-start\nimport { List } from "@refinedev/mantine";\n\nconst CustomPage: React.FC = () => {\n  return (\n    /* highlight-next-line */\n    <List resource="categories">\n      <p>Rest of your page here</p>\n    </List>\n  );\n};\n// visible-block-end\n\nconst App = () => {\n  return (\n    <Refine\n      legacyRouterProvider={{\n        ...routerProvider,\n        // highlight-start\n        routes: [\n          {\n            element: <CustomPage />,\n            path: "/custom",\n          },\n        ],\n        // highlight-end\n      }}\n      Layout={Layout}\n      dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n      resources={[{ name: "posts" }]}\n    />\n  );\n};\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n')),(0,r.kt)("p",null,"If you have multiple resources with the same name, you can pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"identifier")," instead of the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," of the resource. It will only be used as the main matching key for the resource, data provider methods will still work with the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," of the resource defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/core/refine-component#identifier"},(0,r.kt)("inlineCode",{parentName:"a"},"identifier")," section of the ",(0,r.kt)("inlineCode",{parentName:"a"},"<Refine/>")," component documentation ","\u2192"))),(0,r.kt)("h3",{id:"cancreate-and-createbuttonprops"},(0,r.kt)("inlineCode",{parentName:"h3"},"canCreate")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"createButtonProps")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"canCreate")," allows us to add the create button inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"<List>")," component. If resource is passed a create component, ",(0,r.kt)("strong",{parentName:"p"},"refine")," adds the create button by default. If you want to customize this button you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"createButtonProps")," property like the code below."),(0,r.kt)("p",null,"Create button redirects to the create page of the resource according to the value it reads from the URL."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=280px",live:!0,url:"http://localhost:3000/posts",previewHeight:"280px"},'setInitialRoutes(["/posts"]);\nimport { Refine } from "@refinedev/core";\nimport routerProvider from "@refinedev/react-router-v6/legacy";\nimport dataProvider from "@refinedev/simple-rest";\n\n// visible-block-start\nimport { List } from "@refinedev/mantine";\nimport { usePermissions } from "@refinedev/core";\n\nconst PostList: React.FC = () => {\n  const { data: permissionsData } = usePermissions();\n  return (\n    <List\n      /* highlight-start */\n      canCreate={permissionsData?.includes("admin")}\n      createButtonProps={{ variant: "subtle" }}\n      /* highlight-end */\n    >\n      <p>Rest of your page here</p>\n    </List>\n  );\n};\n// visible-block-end\n\nconst App = () => {\n  const simpleRestDataProvider = dataProvider("https://api.fake-rest.refine.dev");\n\n  const customDataProvider = {\n    ...simpleRestDataProvider,\n    deleteOne: async ({ resource, id, variables }) => {\n      return {\n        data: {},\n      };\n    },\n  };\n\n  const authProvider = {\n    login: async () => {\n      return {\n        success: true,\n        redirectTo: "/",\n      };\n    },\n    register: async () => {\n      return {\n        success: true,\n      };\n    },\n    forgotPassword: async () => {\n      return {\n        success: true,\n      };\n    },\n    updatePassword: async () => {\n      return {\n        success: true,\n      };\n    },\n    logout: async () => {\n      return {\n        success: true,\n        redirectTo: "/",\n      };\n    },\n    check: async () => ({\n      authenticated: true,\n    }),\n    onError: async (error) => {\n      console.error(error);\n      return { error };\n    },\n    getPermissions: async () => ["admin"],\n    getIdentity: async () => null,\n  };\n\n  return (\n    <Refine\n      legacyRouterProvider={routerProvider}\n      dataProvider={customDataProvider}\n      authProvider={authProvider}\n      resources={[\n        {\n          name: "posts",\n          list: PostList,\n        },\n      ]}\n    />\n  );\n};\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n')),(0,r.kt)("h3",{id:"breadcrumb"},(0,r.kt)("inlineCode",{parentName:"h3"},"breadcrumb")),(0,r.kt)("p",null,"To customize or disable the breadcrumb, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"breadcrumb")," property. By default it uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"Breadcrumb")," component from ",(0,r.kt)("inlineCode",{parentName:"p"},"@refinedev/mantine")," package."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This feature can be managed globally via the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>")," component's ",(0,r.kt)("a",{parentName:"p",href:"/docs/core/refine-component#breadcrumb"},"options"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=280px",live:!0,url:"http://localhost:3000/posts",previewHeight:"280px"},'setInitialRoutes(["/posts"]);\nimport { Refine } from "@refinedev/core";\nimport routerProvider from "@refinedev/react-router-v6/legacy";\nimport dataProvider from "@refinedev/simple-rest";\n\n// visible-block-start\nimport { List } from "@refinedev/mantine";\n\nconst CustomBreadcrumb: React.FC = () => {\n  return (\n    <p\n      style={{\n        padding: "3px 6px",\n        border: "2px dashed cornflowerblue",\n      }}\n    >\n      My Custom Breadcrumb\n    </p>\n  );\n};\n\nconst PostList: React.FC = () => {\n  return (\n    <List\n      // highlight-start\n      breadcrumb={<CustomBreadcrumb />}\n      // highlight-end\n    >\n      <p>Rest of your page here</p>\n    </List>\n  );\n};\n// visible-block-end\n\nconst App = () => {\n  return (\n    <Refine\n      legacyRouterProvider={routerProvider}\n      dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n      resources={[\n        {\n          name: "posts",\n          list: PostList,\n        },\n      ]}\n    />\n  );\n};\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/ui-integrations/mantine/components/breadcrumb"},(0,r.kt)("inlineCode",{parentName:"a"},"Breadcrumb")," documentation ","\u2192"))),(0,r.kt)("h3",{id:"wrapperprops"},(0,r.kt)("inlineCode",{parentName:"h3"},"wrapperProps")),(0,r.kt)("p",null,"If you want to customize the wrapper of the ",(0,r.kt)("inlineCode",{parentName:"p"},"<List/>")," component, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"wrapperProps")," property. For ",(0,r.kt)("inlineCode",{parentName:"p"},"@refinedev/mantine")," wrapper element is ",(0,r.kt)("inlineCode",{parentName:"p"},"<Card>"),"s and ",(0,r.kt)("inlineCode",{parentName:"p"},"wrapperProps")," can get every attribute that ",(0,r.kt)("inlineCode",{parentName:"p"},"<Card>")," can get."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=280px",live:!0,url:"http://localhost:3000/posts",previewHeight:"280px"},'setInitialRoutes(["/posts"]);\nimport { Refine } from "@refinedev/core";\nimport routerProvider from "@refinedev/react-router-v6/legacy";\nimport dataProvider from "@refinedev/simple-rest";\n\n// visible-block-start\nimport { List } from "@refinedev/mantine";\n\nconst PostList: React.FC = () => {\n  return (\n    <List\n      // highlight-start\n      wrapperProps={{\n        style: {\n          border: "2px dashed cornflowerblue",\n          padding: "16px",\n        },\n      }}\n      // highlight-end\n    >\n      <p>Rest of your page here</p>\n    </List>\n  );\n};\n// visible-block-end\n\nconst App = () => {\n  return (\n    <Refine\n      legacyRouterProvider={routerProvider}\n      dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n      resources={[\n        {\n          name: "posts",\n          list: PostList,\n        },\n      ]}\n    />\n  );\n};\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://mantine.dev/core/card/"},(0,r.kt)("inlineCode",{parentName:"a"},"Card")," documentation from Mantine ","\u2192"))),(0,r.kt)("h3",{id:"headerprops"},(0,r.kt)("inlineCode",{parentName:"h3"},"headerProps")),(0,r.kt)("p",null,"If you want to customize the header of the ",(0,r.kt)("inlineCode",{parentName:"p"},"<List/>")," component, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"headerProps")," property."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=280px",live:!0,url:"http://localhost:3000/posts",previewHeight:"280px"},'setInitialRoutes(["/posts"]);\nimport { Refine } from "@refinedev/core";\nimport routerProvider from "@refinedev/react-router-v6/legacy";\nimport dataProvider from "@refinedev/simple-rest";\n\n// visible-block-start\nimport { List } from "@refinedev/mantine";\n\nconst PostList: React.FC = () => {\n  return (\n    <List\n      // highlight-start\n      headerProps={{\n        style: {\n          border: "2px dashed cornflowerblue",\n          padding: "16px",\n        },\n      }}\n      // highlight-end\n    >\n      <p>Rest of your page here</p>\n    </List>\n  );\n};\n// visible-block-end\n\nconst App = () => {\n  return (\n    <Refine\n      legacyRouterProvider={routerProvider}\n      dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n      resources={[\n        {\n          name: "posts",\n          list: PostList,\n        },\n      ]}\n    />\n  );\n};\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://mantine.dev/core/group/"},(0,r.kt)("inlineCode",{parentName:"a"},"Group")," documentation from Mantine ","\u2192"))),(0,r.kt)("h3",{id:"contentprops"},(0,r.kt)("inlineCode",{parentName:"h3"},"contentProps")),(0,r.kt)("p",null,"If you want to customize the content of the ",(0,r.kt)("inlineCode",{parentName:"p"},"<List/>")," component, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"contentProps")," property."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=280px",live:!0,url:"http://localhost:3000/posts",previewHeight:"280px"},'setInitialRoutes(["/posts"]);\nimport { Refine } from "@refinedev/core";\nimport routerProvider from "@refinedev/react-router-v6/legacy";\nimport dataProvider from "@refinedev/simple-rest";\n\n// visible-block-start\nimport { List } from "@refinedev/mantine";\n\nconst PostList: React.FC = () => {\n  return (\n    <List\n      // highlight-start\n      contentProps={{\n        style: {\n          border: "2px dashed cornflowerblue",\n          padding: "16px",\n        },\n      }}\n      // highlight-end\n    >\n      <p>Rest of your page here</p>\n    </List>\n  );\n};\n// visible-block-end\n\nconst App = () => {\n  return (\n    <Refine\n      legacyRouterProvider={routerProvider}\n      dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n      resources={[\n        {\n          name: "posts",\n          list: PostList,\n        },\n      ]}\n    />\n  );\n};\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://mantine.dev/core/box/"},(0,r.kt)("inlineCode",{parentName:"a"},"Box")," documentation from Mantine ","\u2192"))),(0,r.kt)("h3",{id:"headerbuttons"},(0,r.kt)("inlineCode",{parentName:"h3"},"headerButtons")),(0,r.kt)("p",null,"By default, the ",(0,r.kt)("inlineCode",{parentName:"p"},"<List/>")," component has a ",(0,r.kt)("a",{parentName:"p",href:"/docs/ui-integrations/mantine/components/buttons/create-button"},(0,r.kt)("inlineCode",{parentName:"a"},"<CreateButton>"))," at the header."),(0,r.kt)("p",null,"You can customize the buttons at the header by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"headerButtons")," property. It accepts ",(0,r.kt)("inlineCode",{parentName:"p"},"React.ReactNode")," or a render function ",(0,r.kt)("inlineCode",{parentName:"p"},"({ defaultButtons, createButtonProps }) => React.ReactNode")," which you can use to keep the existing buttons and add your own."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'If "create" resource is not defined or ',(0,r.kt)("a",{parentName:"p",href:"#cancreate-and-createbuttonprops"},(0,r.kt)("inlineCode",{parentName:"a"},"canCreate"))," is ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", the ",(0,r.kt)("a",{parentName:"p",href:"/docs/ui-integrations/mantine/components/buttons/create-button"},(0,r.kt)("inlineCode",{parentName:"a"},"<CreateButton>"))," will not render and ",(0,r.kt)("inlineCode",{parentName:"p"},"createButtonProps")," will be ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=280px",live:!0,url:"http://localhost:3000/posts",previewHeight:"280px"},'setInitialRoutes(["/posts"]);\nimport { Refine } from "@refinedev/core";\nimport routerProvider from "@refinedev/react-router-v6/legacy";\nimport dataProvider from "@refinedev/simple-rest";\n\n// visible-block-start\nimport { List } from "@refinedev/mantine";\nimport { Button } from "@mantine/core";\n\nconst PostList: React.FC = () => {\n  return (\n    <List\n      // highlight-start\n      headerButtons={({ defaultButtons }) => (\n        <>\n          {defaultButtons}\n          <Button variant="outline" type="primary">\n            Custom Button\n          </Button>\n        </>\n      )}\n      // highlight-end\n    >\n      <p>Rest of your page here</p>\n    </List>\n  );\n};\n// visible-block-end\n\nconst App = () => {\n  return (\n    <Refine\n      legacyRouterProvider={routerProvider}\n      dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n      resources={[\n        {\n          name: "posts",\n          list: PostList,\n        },\n      ]}\n    />\n  );\n};\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n')),(0,r.kt)("p",null,"Or, instead of using the ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultButtons"),", you can create your own buttons. If you want, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"createButtonProps")," to utilize the default values of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/ui-integrations/mantine/components/buttons/create-button"},(0,r.kt)("inlineCode",{parentName:"a"},"<CreateButton>"))," component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=280px",live:!0,url:"http://localhost:3000/posts",previewHeight:"280px"},'setInitialRoutes(["/posts"]);\nimport { Refine } from "@refinedev/core";\nimport routerProvider from "@refinedev/react-router-v6/legacy";\nimport dataProvider from "@refinedev/simple-rest";\n\n// visible-block-start\nimport { List, CreateButton } from "@refinedev/mantine";\nimport { Button } from "@mantine/core";\n\nconst PostList: React.FC = () => {\n  return (\n    <List\n      // highlight-start\n      headerButtons={({ createButtonProps }) => (\n        <>\n          {createButtonProps && <CreateButton {...createButtonProps} meta={{ foo: "bar" }} />}\n          <Button variant="outline" type="primary">\n            Custom Button\n          </Button>\n        </>\n      )}\n      // highlight-end\n    >\n      <p>Rest of your page here</p>\n    </List>\n  );\n};\n// visible-block-end\n\nconst App = () => {\n  return (\n    <Refine\n      legacyRouterProvider={routerProvider}\n      dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n      resources={[\n        {\n          name: "posts",\n          list: PostList,\n        },\n      ]}\n    />\n  );\n};\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n')),(0,r.kt)("h3",{id:"headerbuttonprops"},(0,r.kt)("inlineCode",{parentName:"h3"},"headerButtonProps")),(0,r.kt)("p",null,"You can customize the wrapper element of the buttons at the header by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"headerButtonProps")," property."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=280px",live:!0,url:"http://localhost:3000/posts",previewHeight:"280px"},'setInitialRoutes(["/posts"]);\nimport { Refine } from "@refinedev/core";\nimport routerProvider from "@refinedev/react-router-v6/legacy";\nimport dataProvider from "@refinedev/simple-rest";\n\n// visible-block-start\nimport { List } from "@refinedev/mantine";\nimport { Button } from "@mantine/core";\n\nconst PostList: React.FC = () => {\n  return (\n    <List\n      // highlight-start\n      headerButtonProps={{\n        style: {\n          border: "2px dashed cornflowerblue",\n          padding: "16px",\n        },\n      }}\n      // highlight-end\n      headerButtons={\n        <Button variant="outline" type="primary">\n          Custom Button\n        </Button>\n      }\n    >\n      <p>Rest of your page here</p>\n    </List>\n  );\n};\n// visible-block-end\n\nconst App = () => {\n  return (\n    <Refine\n      legacyRouterProvider={routerProvider}\n      dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n      resources={[\n        {\n          name: "posts",\n          list: PostList,\n        },\n      ]}\n    />\n  );\n};\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://mantine.dev/core/group/"},(0,r.kt)("inlineCode",{parentName:"a"},"Group")," documentation from Mantine ","\u2192"))),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"props"},"Props"),(0,r.kt)(u,{module:"@refinedev/mantine/List","title-default":"`<Title order={3}>{resource.name}</Title>`",mdxType:"PropsTable"}))}h.isMDXComponent=!0}}]);