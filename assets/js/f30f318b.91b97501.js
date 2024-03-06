"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[76288],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,S=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(S,l(l({ref:t},u),{},{components:n})):r.createElement(S,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},32204:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>k,frontMatter:()=>p,metadata:()=>s,toc:()=>c});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={id:"useStepsForm",title:"useStepsForm"},i=void 0,s={unversionedId:"api-reference/mantine/hooks/form/useStepsForm",id:"version-3.xx.xx/api-reference/mantine/hooks/form/useStepsForm",title:"useStepsForm",description:"useStepsForm allows you to manage a form with multiple steps. It provides features such as which step is currently active, the ability to go to a specific step and validation when changing steps etc.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/mantine/hooks/form/useStepsForm.md",sourceDirName:"api-reference/mantine/hooks/form",slug:"/api-reference/mantine/hooks/form/useStepsForm",permalink:"/docs/3.xx.xx/api-reference/mantine/hooks/form/useStepsForm",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/mantine/hooks/form/useStepsForm.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1709728471,formattedLastUpdatedAt:"Mar 6, 2024",frontMatter:{id:"useStepsForm",title:"useStepsForm"},sidebar:"someSidebar",previous:{title:"useModalForm",permalink:"/docs/3.xx.xx/api-reference/mantine/hooks/form/useModalForm"},next:{title:"useSelect",permalink:"/docs/3.xx.xx/api-reference/mantine/hooks/useSelect/"}},u={},c=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>refineCoreProps</code>",id:"refinecoreprops",level:3},{value:"<code>stepsProps</code>",id:"stepsprops",level:3},{value:"<code>defaultStep</code>",id:"defaultstep",level:4},{value:"<code>isBackValidate</code>",id:"isbackvalidate",level:4},{value:"Return Values",id:"return-values",level:2},{value:"<code>steps</code>",id:"steps",level:3},{value:"<code>currenStep</code>",id:"currenstep",level:4},{value:"<code>gotoStep</code>",id:"gotostep",level:4},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3},{value:"Return values",id:"return-values-1",level:3},{value:"Example",id:"example",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},m=d("Tabs"),S=d("TabItem"),f=d("PropsTable"),g=d("CodeSandboxExample"),h={toc:c};function k(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'import React from "react";\nimport {\n  useTable,\n  ColumnDef,\n  flexRender,\n  Column,\n} from "@pankod/refine-react-table";\nimport { GetManyResponse, useMany } from "@pankod/refine-core";\nimport {\n  Button as MantineButton,\n  Code as MantineCode,\n  Edit as MantineEdit,\n  Create as MantineCreate,\n  List as MantineList,\n  Group as MantineGroup,\n  Select as MantineSelect,\n  Stepper as MantineStepper,\n  TextInput as MantineTextInput,\n  useStepsForm as MantineUseStepsForm,\n  useSelect as MantineUseSelect,\n  DeleteButton as MantineDeleteButton,\n  SaveButton as MantineSaveButton,\n  Text as MantineText,\n  Textarea as MantineTextarea,\n  Space as MantineSpace,\n  Pagination as MantinePagination,\n  ScrollArea as MantineScrollArea,\n  Table as MantineTable,\n  Box as MantineBox,\n  EditButton as MantineEditButton,\n} from "@pankod/refine-mantine";\n\ninterface ICategory {\n  id: number;\n  title: string;\n}\n\ninterface IPost {\n  id: number;\n  title: string;\n  content: string;\n  status: "published" | "draft" | "rejected";\n  category: { id: number };\n}\n\ninterface ColumnButtonProps {\n  column: Column<any, any>; // eslint-disable-line\n}\n\ninterface FilterElementProps {\n  value: any; // eslint-disable-line\n  onChange: (value: any) => void; // eslint-disable-line\n}\n\nconst PostList: React.FC = () => {\n  const columns = React.useMemo<ColumnDef<IPost>[]>(\n    () => [\n      {\n        id: "id",\n        header: "ID",\n        accessorKey: "id",\n      },\n      {\n        id: "title",\n        header: "Title",\n        accessorKey: "title",\n        meta: {\n          filterOperator: "contains",\n        },\n      },\n      {\n        id: "status",\n        header: "Status",\n        accessorKey: "status",\n        meta: {\n          filterElement: function render(props: FilterElementProps) {\n            return (\n              <Select\n                defaultValue="published"\n                data={[\n                  { label: "Published", value: "published" },\n                  { label: "Draft", value: "draft" },\n                  { label: "Rejected", value: "rejected" },\n                ]}\n                {...props}\n              />\n            );\n          },\n          filterOperator: "eq",\n        },\n      },\n      {\n        id: "category.id",\n        header: "Category",\n        enableColumnFilter: false,\n        accessorKey: "category.id",\n        cell: function render({ getValue, table }) {\n          const meta = table.options.meta as {\n            categoriesData: GetManyResponse<ICategory>;\n          };\n          const category = meta.categoriesData?.data.find(\n            (item) => item.id === getValue(),\n          );\n          return category?.title ?? "Loading...";\n        },\n      },\n      {\n        id: "actions",\n        header: "Actions",\n        accessorKey: "id",\n        enableColumnFilter: false,\n        enableSorting: false,\n        cell: function render({ getValue }) {\n          return (\n            <MantineGroup spacing="xs" noWrap>\n              <MantineEditButton hideText recordItemId={getValue() as number} />\n              <MantineDeleteButton\n                hideText\n                recordItemId={getValue() as number}\n              />\n            </MantineGroup>\n          );\n        },\n      },\n    ],\n    [],\n  );\n\n  const {\n    getHeaderGroups,\n    getRowModel,\n    setOptions,\n    refineCore: {\n      setCurrent,\n      pageCount,\n      current,\n      tableQueryResult: { data: tableData },\n    },\n  } = useTable({\n    columns,\n  });\n\n  const categoryIds = tableData?.data?.map((item) => item.category.id) ?? [];\n  const { data: categoriesData } = useMany<ICategory>({\n    resource: "categories",\n    ids: categoryIds,\n    queryOptions: {\n      enabled: categoryIds.length > 0,\n    },\n  });\n\n  setOptions((prev) => ({\n    ...prev,\n    meta: {\n      ...prev.meta,\n      categoriesData,\n    },\n  }));\n\n  return (\n    <MantineScrollArea>\n      <MantineList>\n        <MantineTable highlightOnHover>\n          <thead>\n            {getHeaderGroups().map((headerGroup) => (\n              <tr key={headerGroup.id}>\n                {headerGroup.headers.map((header) => {\n                  return (\n                    <th key={header.id}>\n                      {!header.isPlaceholder && (\n                        <MantineGroup spacing="xs" noWrap>\n                          <MantineBox>\n                            {flexRender(\n                              header.column.columnDef.header,\n                              header.getContext(),\n                            )}\n                          </MantineBox>\n                        </MantineGroup>\n                      )}\n                    </th>\n                  );\n                })}\n              </tr>\n            ))}\n          </thead>\n          <tbody>\n            {getRowModel().rows.map((row) => {\n              return (\n                <tr key={row.id}>\n                  {row.getVisibleCells().map((cell) => {\n                    return (\n                      <td key={cell.id}>\n                        {flexRender(\n                          cell.column.columnDef.cell,\n                          cell.getContext(),\n                        )}\n                      </td>\n                    );\n                  })}\n                </tr>\n              );\n            })}\n          </tbody>\n        </MantineTable>\n        <br />\n        <MantinePagination\n          position="right"\n          total={pageCount}\n          page={current}\n          onChange={setCurrent}\n        />\n      </MantineList>\n    </MantineScrollArea>\n  );\n};\n\nconst PostCreate: React.FC = () => {\n  const {\n    saveButtonProps,\n    getInputProps,\n    values,\n    steps: { currentStep, gotoStep },\n  } = MantineUseStepsForm({\n    initialValues: {\n      title: "",\n      status: "",\n      slug: "",\n      content: "",\n    },\n    validate: (values) => {\n      if (currentStep === 0) {\n        return {\n          title: values.title ? null : "Title is required",\n          slug: values.slug ? null : "Slug is required",\n        };\n      }\n\n      if (currentStep === 1) {\n        return {\n          status: values.status ? null : "Status is required",\n        };\n      }\n\n      return {};\n    },\n  });\n\n  return (\n    <MantineCreate\n      footerButtons={\n        <MantineGroup position="right" mt="xl">\n          {currentStep !== 0 && (\n            <MantineButton\n              variant="default"\n              onClick={() => gotoStep(currentStep - 1)}\n            >\n              Back\n            </MantineButton>\n          )}\n          {currentStep !== 3 && (\n            <MantineButton onClick={() => gotoStep(currentStep + 1)}>\n              Next step\n            </MantineButton>\n          )}\n          {currentStep === 2 && <SaveButton {...saveButtonProps} />}\n        </MantineGroup>\n      }\n    >\n      <MantineStepper\n        active={currentStep}\n        onStepClick={gotoStep}\n        breakpoint="xs"\n      >\n        <MantineStepper.Step\n          label="First Step"\n          description="Title and Slug"\n          allowStepSelect={currentStep > 0}\n        >\n          <MantineTextInput\n            mt="md"\n            label="Title"\n            placeholder="Title"\n            {...getInputProps("title")}\n          />\n          <MantineTextInput\n            mt="md"\n            label="Slug"\n            placeholder="Slug"\n            {...getInputProps("slug")}\n          />\n        </MantineStepper.Step>\n\n        <MantineStepper.Step\n          label="Second Step"\n          description="Status"\n          allowStepSelect={currentStep > 1}\n        >\n          <MantineSelect\n            mt="md"\n            label="Status"\n            placeholder="Pick one"\n            {...getInputProps("status")}\n            data={[\n              { label: "Published", value: "published" },\n              { label: "Draft", value: "draft" },\n              { label: "Rejected", value: "rejected" },\n            ]}\n          />\n        </MantineStepper.Step>\n\n        <MantineStepper.Step\n          label="Final Step"\n          description="Content"\n          allowStepSelect={currentStep > 2}\n        >\n          <MantineTextarea\n            label="Content"\n            placeholder="Content"\n            {...getInputProps("content")}\n          />\n        </MantineStepper.Step>\n\n        <MantineStepper.Completed>\n          Completed! Form values:\n          <MantineSpace />\n          <MantineCode mt="xl">{JSON.stringify(values, null, 2)}</MantineCode>\n        </MantineStepper.Completed>\n      </MantineStepper>\n    </MantineCreate>\n  );\n};\n\nconst PostEdit: React.FC = () => {\n  const {\n    saveButtonProps,\n    getInputProps,\n    values,\n    steps: { currentStep, gotoStep },\n  } = MantineUseStepsForm({\n    initialValues: {\n      title: "",\n      status: "",\n      slug: "",\n      content: "",\n    },\n    validate: (values) => {\n      if (currentStep === 0) {\n        return {\n          title: values.title ? null : "Title is required",\n          status: values.status ? null : "Status is required",\n        };\n      }\n\n      if (currentStep === 1) {\n        return {\n          slug: values.slug ? null : "Slug is required",\n        };\n      }\n\n      return {};\n    },\n  });\n\n  return (\n    <MantineEdit\n      footerButtons={\n        <MantineGroup position="right" mt="xl">\n          {currentStep !== 0 && (\n            <MantineButton\n              variant="default"\n              onClick={() => gotoStep(currentStep - 1)}\n            >\n              Back\n            </MantineButton>\n          )}\n          {currentStep !== 3 && (\n            <MantineButton onClick={() => gotoStep(currentStep + 1)}>\n              Next step\n            </MantineButton>\n          )}\n          {currentStep === 2 && <SaveButton {...saveButtonProps} />}\n        </MantineGroup>\n      }\n    >\n      <MantineStepper\n        active={currentStep}\n        onStepClick={gotoStep}\n        breakpoint="xs"\n      >\n        <MantineStepper.Step\n          label="First Step"\n          description="Title and Slug"\n          allowStepSelect={currentStep > 0}\n        >\n          <MantineTextInput\n            mt="md"\n            label="Title"\n            placeholder="Title"\n            {...getInputProps("title")}\n          />\n          <MantineTextInput\n            mt="md"\n            label="Slug"\n            placeholder="Slug"\n            {...getInputProps("slug")}\n          />\n        </MantineStepper.Step>\n\n        <MantineStepper.Step\n          label="Second Step"\n          description="Status"\n          allowStepSelect={currentStep > 1}\n        >\n          <MantineSelect\n            mt="md"\n            label="Status"\n            placeholder="Pick one"\n            {...getInputProps("status")}\n            data={[\n              { label: "Published", value: "published" },\n              { label: "Draft", value: "draft" },\n              { label: "Rejected", value: "rejected" },\n            ]}\n          />\n        </MantineStepper.Step>\n\n        <MantineStepper.Step\n          label="Final Step"\n          description="Content"\n          allowStepSelect={currentStep > 2}\n        >\n          <MantineTextarea\n            label="Content"\n            placeholder="Content"\n            {...getInputProps("content")}\n          />\n        </MantineStepper.Step>\n        <MantineStepper.Completed>\n          Completed! Form values:\n          <MantineSpace />\n          <MantineCode mt="xl">{JSON.stringify(values, null, 2)}</MantineCode>\n        </MantineStepper.Completed>\n      </MantineStepper>\n    </MantineEdit>\n  );\n};\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useStepsForm")," allows you to manage a form with multiple steps. It provides features such as which step is currently active, the ability to go to a specific step and validation when changing steps etc."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"useStepsForm")," hook is extended from ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/mantine/hooks/form/useForm"},(0,r.kt)("inlineCode",{parentName:"a"},"useForm"))," from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/v3/packages/mantine"},(0,r.kt)("inlineCode",{parentName:"a"},"@pankod/refine-mantine"))," package. This means that you can use all the functionalities of ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/mantine/hooks/form/useForm"},(0,r.kt)("inlineCode",{parentName:"a"},"useForm"))," in your ",(0,r.kt)("inlineCode",{parentName:"p"},"useStepsForm"),".")),(0,r.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,r.kt)("p",null,"We'll show two examples, one for creating and one for editing a post. Let's see how ",(0,r.kt)("inlineCode",{parentName:"p"},"useStepsForm")," is used in both."),(0,r.kt)(m,{defaultValue:"create",values:[{label:"create",value:"create"},{label:"edit",value:"edit"}],mdxType:"Tabs"},(0,r.kt)(S,{value:"create",mdxType:"TabItem"},(0,r.kt)("p",null,"Here is the final result of the form: We will explain the code in following sections."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts/create previewHeight=420px hideCode",live:!0,url:"http://localhost:3000/posts/create",previewHeight:"420px",hideCode:!0},'setInitialRoutes(["/posts/create"]);\n\n// visible-block-start\nimport React from "react";\nimport { HttpError } from "@pankod/refine-core";\nimport {\n  Button,\n  Code,\n  Create,\n  Group,\n  Select,\n  Stepper,\n  TextInput,\n  useStepsForm,\n  SaveButton,\n  Text,\n  Space,\n  Textarea,\n} from "@pankod/refine-mantine";\n\ntype FormValues = Omit<IPost, "id">;\n\nconst PostCreatePage: React.FC = () => {\n  const {\n    saveButtonProps,\n    getInputProps,\n    values,\n    steps: { currentStep, gotoStep },\n  } = useStepsForm<IPost, HttpError, FormValues>({\n    initialValues: {\n      title: "",\n      status: "",\n      slug: "",\n      content: "",\n    },\n    validate: (values) => {\n      if (currentStep === 0) {\n        return {\n          title: values.title ? null : "Title is required",\n          slug: values.slug ? null : "Slug is required",\n        };\n      }\n\n      if (currentStep === 1) {\n        return {\n          status: values.status ? null : "Status is required",\n        };\n      }\n\n      return {};\n    },\n  });\n\n  return (\n    <Create\n      footerButtons={\n        <Group position="right" mt="xl">\n          {currentStep !== 0 && (\n            <Button variant="default" onClick={() => gotoStep(currentStep - 1)}>\n              Back\n            </Button>\n          )}\n          {currentStep !== 3 && (\n            <Button onClick={() => gotoStep(currentStep + 1)}>Next step</Button>\n          )}\n          {currentStep === 2 && <SaveButton {...saveButtonProps} />}\n        </Group>\n      }\n    >\n      <Stepper active={currentStep} onStepClick={gotoStep} breakpoint="xs">\n        <Stepper.Step\n          label="First Step"\n          description="Title and Slug"\n          allowStepSelect={currentStep > 0}\n        >\n          <TextInput\n            mt="md"\n            label="Title"\n            placeholder="Title"\n            {...getInputProps("title")}\n          />\n          <TextInput\n            mt="md"\n            label="Slug"\n            placeholder="Slug"\n            {...getInputProps("slug")}\n          />\n        </Stepper.Step>\n\n        <Stepper.Step\n          label="Second Step"\n          description="Status"\n          allowStepSelect={currentStep > 1}\n        >\n          <Select\n            mt="md"\n            label="Status"\n            placeholder="Pick one"\n            {...getInputProps("status")}\n            data={[\n              { label: "Published", value: "published" },\n              { label: "Draft", value: "draft" },\n              { label: "Rejected", value: "rejected" },\n            ]}\n          />\n        </Stepper.Step>\n\n        <Stepper.Step\n          label="Final Step"\n          description="Content"\n          allowStepSelect={currentStep > 2}\n        >\n          <Textarea\n            label="Content"\n            placeholder="Content"\n            {...getInputProps("content")}\n          />\n        </Stepper.Step>\n\n        <Stepper.Completed>\n          Completed! Form values:\n          <Space />\n          <Code mt="xl">{JSON.stringify(values, null, 2)}</Code>\n        </Stepper.Completed>\n      </Stepper>\n    </Create>\n  );\n};\n// visible-block-end\n\nsetRefineProps({\n  resources: [\n    {\n      name: "posts",\n      list: PostList,\n      create: PostCreatePage,\n      edit: PostEdit,\n    },\n  ],\n});\n\nrender(<RefineMantineDemo />);\n'))),(0,r.kt)(S,{value:"edit",mdxType:"TabItem"},(0,r.kt)("p",null,"Here is the final result of the form: We will explain the code in following sections."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts/edit/123 previewHeight=420px hideCode",live:!0,url:"http://localhost:3000/posts/edit/123",previewHeight:"420px",hideCode:!0},'setInitialRoutes(["/posts/edit/123"]);\n\n// visible-block-start\nimport React from "react";\nimport { HttpError } from "@pankod/refine-core";\nimport {\n  Edit,\n  Button,\n  Code,\n  Group,\n  Select,\n  Stepper,\n  TextInput,\n  useStepsForm,\n  SaveButton,\n  Text,\n  Space,\n  Textarea,\n} from "@pankod/refine-mantine";\n\ntype FormValues = Omit<IPost, "id">;\n\nconst PostEditPage: React.FC = () => {\n  const {\n    saveButtonProps,\n    getInputProps,\n    values,\n    steps: { currentStep, gotoStep },\n  } = useStepsForm<IPost, HttpError, FormValues>({\n    initialValues: {\n      title: "",\n      status: "",\n      slug: "",\n      content: "",\n    },\n    validate: (values) => {\n      if (currentStep === 0) {\n        return {\n          title: values.title ? null : "Title is required",\n          slug: values.slug ? null : "Slug is required",\n        };\n      }\n\n      if (currentStep === 1) {\n        return {\n          status: values.status ? null : "Status is required",\n        };\n      }\n\n      return {};\n    },\n  });\n\n  return (\n    <Edit\n      footerButtons={\n        <Group position="right" mt="xl">\n          {currentStep !== 0 && (\n            <Button variant="default" onClick={() => gotoStep(currentStep - 1)}>\n              Back\n            </Button>\n          )}\n          {currentStep !== 3 && (\n            <Button onClick={() => gotoStep(currentStep + 1)}>Next step</Button>\n          )}\n          {currentStep === 2 && <SaveButton {...saveButtonProps} />}\n        </Group>\n      }\n    >\n      <Stepper active={currentStep} onStepClick={gotoStep} breakpoint="xs">\n        <Stepper.Step\n          label="First Step"\n          description="Title and Slug"\n          allowStepSelect={currentStep > 0}\n        >\n          <TextInput\n            mt="md"\n            label="Title"\n            placeholder="Title"\n            {...getInputProps("title")}\n          />\n          <TextInput\n            mt="md"\n            label="Slug"\n            placeholder="Slug"\n            {...getInputProps("slug")}\n          />\n        </Stepper.Step>\n\n        <Stepper.Step\n          label="Second Step"\n          description="Status"\n          allowStepSelect={currentStep > 1}\n        >\n          <Select\n            mt="md"\n            label="Status"\n            placeholder="Pick one"\n            {...getInputProps("status")}\n            data={[\n              { label: "Published", value: "published" },\n              { label: "Draft", value: "draft" },\n              { label: "Rejected", value: "rejected" },\n            ]}\n          />\n        </Stepper.Step>\n\n        <Stepper.Step\n          label="Final Step"\n          description="Content"\n          allowStepSelect={currentStep > 2}\n        >\n          <Textarea\n            label="Content"\n            placeholder="Content"\n            {...getInputProps("content")}\n          />\n        </Stepper.Step>\n\n        <Stepper.Completed>\n          Completed! Form values:\n          <Space />\n          <Code mt="xl">{JSON.stringify(values, null, 2)}</Code>\n        </Stepper.Completed>\n      </Stepper>\n    </Edit>\n  );\n};\n// visible-block-end\n\nsetRefineProps({\n  resources: [\n    {\n      name: "posts",\n      list: PostList,\n      create: PostCreate,\n      edit: PostEditPage,\n    },\n  ],\n});\n\nrender(<RefineMantineDemo />);\n')))),(0,r.kt)("p",null,"In this example we're going to build a Post ",(0,r.kt)("inlineCode",{parentName:"p"},'"create"')," form. To creating a multi-step form, we will use ",(0,r.kt)("a",{parentName:"p",href:"https://mantine.dev/core/stepper/"},(0,r.kt)("inlineCode",{parentName:"a"},"<Stepper/>"))," component from Mantine. To handle the state of both the form and the steps, we will use ",(0,r.kt)("inlineCode",{parentName:"p"},"useStepsForm")," hook."),(0,r.kt)("p",null,"To show your form inputs step by step, first import and use ",(0,r.kt)("inlineCode",{parentName:"p"},"useStepsForm")," hook in your page:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { HttpError } from "@pankod/refine-core";\nimport { Create } from "@pankod/refine-mantine";\n\ntype FormValues = Omit<IPost, "id">;\n\nconst PostCreatePage: React.FC = () => {\n  const {\n    saveButtonProps,\n    getInputProps,\n    values,\n    steps: { currentStep, gotoStep },\n  } = useStepsForm<IPost, HttpError, FormValues>({\n    initialValues: {\n      title: "",\n      status: "",\n      slug: "",\n      content: "",\n    },\n    validate: (values) => {\n      if (currentStep === 0) {\n        return {\n          title: values.title ? null : "Title is required",\n          slug: values.slug ? null : "Slug is required",\n        };\n      }\n\n      if (currentStep === 1) {\n        return {\n          status: values.status ? null : "Status is required",\n        };\n      }\n\n      return {};\n    },\n  });\n\n  return <Create>create page</Create>;\n};\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useStepsForm")," is generic over the type form data to help you type check your code."),(0,r.kt)("p",null,"This hook returns a set of useful values to render ",(0,r.kt)("a",{parentName:"p",href:"https://mantine.dev/core/stepper/"},(0,r.kt)("inlineCode",{parentName:"a"},"<Stepper/>")),". Given current value, you should have a way to render your form items conditionally with this index value."),(0,r.kt)("p",null,"Here, we're going to use a ",(0,r.kt)("a",{parentName:"p",href:"https://mantine.dev/core/stepper/"},(0,r.kt)("inlineCode",{parentName:"a"},"<Stepper/>"))," component to render the form items based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"currentStep")," and we added ",(0,r.kt)("inlineCode",{parentName:"p"},"<Button>")," to footer with ",(0,r.kt)("inlineCode",{parentName:"p"},"gotoStep")," function to navigate between steps."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { HttpError } from "@pankod/refine-core";\nimport { Create } from "@pankod/refine-mantine";\n\ntype FormValues = Omit<IPost, "id">;\n\nconst PostCreatePage: React.FC = () => {\n  const {\n    saveButtonProps,\n    getInputProps,\n    values,\n    steps: { currentStep, gotoStep },\n  } = useStepsForm<IPost, HttpError, FormValues>({\n    initialValues: {\n      title: "",\n      status: "",\n      slug: "",\n      content: "",\n    },\n    validate: (values) => {\n      if (currentStep === 0) {\n        return {\n          title: values.title ? null : "Title is required",\n          slug: values.slug ? null : "Slug is required",\n        };\n      }\n\n      if (currentStep === 1) {\n        return {\n          status: values.status ? null : "Status is required",\n        };\n      }\n\n      return {};\n    },\n  });\n\n  return (\n    <Create\n      //highlight-start\n      footerButtons={\n        <Group position="right" mt="xl">\n          {currentStep !== 0 && (\n            <Button variant="default" onClick={() => gotoStep(currentStep - 1)}>\n              Back\n            </Button>\n          )}\n          {currentStep !== 3 && (\n            <Button onClick={() => gotoStep(currentStep + 1)}>Next step</Button>\n          )}\n          {currentStep === 2 && <SaveButton {...saveButtonProps} />}\n        </Group>\n      }\n      // highlight-end\n    >\n      {/* highlight-start */}\n      <Stepper active={currentStep} onStepClick={gotoStep} breakpoint="xs">\n        <Stepper.Step\n          label="First Step"\n          description="Title and Slug"\n          allowStepSelect={currentStep > 0}\n        >\n          <TextInput\n            mt="md"\n            label="Title"\n            placeholder="Title"\n            {...getInputProps("title")}\n          />\n          <TextInput\n            mt="md"\n            label="Slug"\n            placeholder="Slug"\n            {...getInputProps("slug")}\n          />\n        </Stepper.Step>\n\n        <Stepper.Step\n          label="Second Step"\n          description="Status"\n          allowStepSelect={currentStep > 1}\n        >\n          <Select\n            mt="md"\n            label="Status"\n            placeholder="Pick one"\n            {...getInputProps("status")}\n            data={[\n              { label: "Published", value: "published" },\n              { label: "Draft", value: "draft" },\n              { label: "Rejected", value: "rejected" },\n            ]}\n          />\n        </Stepper.Step>\n\n        <Stepper.Step\n          label="Final Step"\n          description="Content"\n          allowStepSelect={currentStep > 2}\n        >\n          <Textarea\n            label="Content"\n            placeholder="Content"\n            {...getInputProps("content")}\n          />\n        </Stepper.Step>\n\n        <Stepper.Completed>\n          Completed! Form values:\n          <Space />\n          <Code mt="xl">{JSON.stringify(values, null, 2)}</Code>\n        </Stepper.Completed>\n      </Stepper>\n      {/* highlight-end */}\n    </Create>\n  );\n};\n')),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"refinecoreprops"},(0,r.kt)("inlineCode",{parentName:"h3"},"refineCoreProps")),(0,r.kt)("p",null,"All ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/antd/hooks/form/useForm"},(0,r.kt)("inlineCode",{parentName:"a"},"useForm"))," properties also available in ",(0,r.kt)("inlineCode",{parentName:"p"},"useStepsForm"),". You can find descriptions on ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/antd/hooks/form/useForm/#properties"},(0,r.kt)("inlineCode",{parentName:"a"},"useForm"))," docs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const stepsForm = useStepsForm({\n  refineCoreProps: {\n    action: "edit",\n    resource: "posts",\n    id: "1",\n  },\n});\n')),(0,r.kt)("h3",{id:"stepsprops"},(0,r.kt)("inlineCode",{parentName:"h3"},"stepsProps")),(0,r.kt)("h4",{id:"defaultstep"},(0,r.kt)("inlineCode",{parentName:"h4"},"defaultStep")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"0"))),(0,r.kt)("p",null,"Sets the default starting step number. Counting starts from ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const stepsForm = useStepsForm({\n  stepsProps: {\n    defaultStep: 0,\n  },\n});\n")),(0,r.kt)("h4",{id:"isbackvalidate"},(0,r.kt)("inlineCode",{parentName:"h4"},"isBackValidate")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"false"))),(0,r.kt)("p",null,"When is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", validates a form fields when the user navigates to a previous step."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const stepsForm = useStepsForm({\n  stepsProps: {\n    isBackValidate: true,\n  },\n});\n")),(0,r.kt)("h2",{id:"return-values"},"Return Values"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"All ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/mantine/hooks/form/useForm"},(0,r.kt)("inlineCode",{parentName:"a"},"useForm"))," return values also available in ",(0,r.kt)("inlineCode",{parentName:"p"},"useStepsForm"),". You can find descriptions on ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/mantine/hooks/form/useForm#return-values"},(0,r.kt)("inlineCode",{parentName:"a"},"useForm"))," docs.")),(0,r.kt)("h3",{id:"steps"},(0,r.kt)("inlineCode",{parentName:"h3"},"steps")),(0,r.kt)("p",null,"The props needed by the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Stepper>")," component."),(0,r.kt)("h4",{id:"currenstep"},(0,r.kt)("inlineCode",{parentName:"h4"},"currenStep")),(0,r.kt)("p",null,"Current step, counting from ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,r.kt)("h4",{id:"gotostep"},(0,r.kt)("inlineCode",{parentName:"h4"},"gotoStep")),(0,r.kt)("p",null,"Is a function that allows you to programmatically change the current step of a form.\nIt takes in one argument, step, which is a number representing the index of the step you want to navigate to."),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"properties-1"},"Properties"),(0,r.kt)(f,{module:"@pankod/refine-mantine/useStepsForm","refineCoreProps-type":"[`UseFormCoreProps<TData, TError, TVariables>`](/docs/3.xx.xx/api-reference/core/hooks/useForm/#properties)","refineCoreProps-description":"Configuration object for the core of the [useForm](/docs/3.xx.xx/api-reference/core/hooks/useForm/)","stepsProps-description":"Configuration object for the steps. `defaultStep`: Allows you to set the initial step. `isBackValidate`: Whether to validation the current step when going back.","stepsProps-default":"`defaultStep = 0` `isBackValidate = false`",mdxType:"PropsTable"}),(0,r.kt)("h3",{id:"return-values-1"},"Return values"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"steps"),(0,r.kt)("td",{parentName:"tr",align:null},"Relevant state and method to control the steps"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#steps"},(0,r.kt)("inlineCode",{parentName:"a"},"StepsReturnValues")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"refineCore"),(0,r.kt)("td",{parentName:"tr",align:null},"The return values of the ",(0,r.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/hooks/useForm"},(0,r.kt)("inlineCode",{parentName:"a"},"useForm"))," in the core"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/hooks/useForm#return-values"},(0,r.kt)("inlineCode",{parentName:"a"},"UseFormReturnValues")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@mantine/form"),"'s ",(0,r.kt)("inlineCode",{parentName:"td"},"useForm")," return values"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/mantine/hooks/form/useForm"},"useForm")," documentation"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)(g,{path:"form-mantine-use-steps-form",mdxType:"CodeSandboxExample"}))}k.isMDXComponent=!0}}]);