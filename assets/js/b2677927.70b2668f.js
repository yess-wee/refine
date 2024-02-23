"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[85436],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),g=r,d=m["".concat(l,".").concat(g)]||m[g]||c[g]||i;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37808:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>c});n(67294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={title:"How to deploy Postgres on Kubernetes",description:"This article will serve as a guide for installing PostgreSQL on Kubernetes, covering pre-requisites such as setting up Kubectl, Kubernetes clusters, and Docker.",slug:"postgres-on-kubernetes",authors:"muhammad_khabbab",tags:["kubernetes","docker"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-22-k8s-postgres/social.png",hide_table_of_contents:!1},l=void 0,p={permalink:"/blog/postgres-on-kubernetes",source:"@site/blog/2024-01-22-k8s-postgres.md",title:"How to deploy Postgres on Kubernetes",description:"This article will serve as a guide for installing PostgreSQL on Kubernetes, covering pre-requisites such as setting up Kubectl, Kubernetes clusters, and Docker.",date:"2024-01-22T00:00:00.000Z",formattedDate:"January 22, 2024",tags:[{label:"kubernetes",permalink:"/blog/tags/kubernetes"},{label:"docker",permalink:"/blog/tags/docker"}],readingTime:9.045,hasTruncateMarker:!1,authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],frontMatter:{title:"How to deploy Postgres on Kubernetes",description:"This article will serve as a guide for installing PostgreSQL on Kubernetes, covering pre-requisites such as setting up Kubectl, Kubernetes clusters, and Docker.",slug:"postgres-on-kubernetes",authors:"muhammad_khabbab",tags:["kubernetes","docker"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-22-k8s-postgres/social.png",hide_table_of_contents:!1},prevItem:{title:"gRPC vs REST - A Brief Comparison",permalink:"/blog/grpc-vs-rest"},nextItem:{title:"Understanding the React useRef Hook",permalink:"/blog/react-useref-hook-and-ref"},relatedPosts:[{title:"Understanding the Basics of Kubernetes CronJob",description:"CronJobs in Kubernetes is the way of running jobs automatically based on time intervals.",permalink:"/blog/kubernetes-cron-jobs",formattedDate:"December 12, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:10.52,date:"2023-12-12T00:00:00.000Z"},{title:"kubectl port-forward - Kubernetes Port Forwarding Explained",description:"We'll see how to use kubectl port-forward to access internal Kubernetes services from outside the cluster.",permalink:"/blog/kubectl-port-forward",formattedDate:"November 5, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:11.64,date:"2023-11-05T00:00:00.000Z"},{title:"Kubernetes Terminated with exit code 1 error",description:'This article will help you troubleshoot the "Terminated with exit code 1" error in Kubernetes.',permalink:"/blog/kubernetes-terminated-with-exit-code-1",formattedDate:"January 31, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:10.295,date:"2024-01-31T00:00:00.000Z"}],authorPosts:[{title:"A Detailed Guide on kubectl describe",description:"In this article, we will discuss the kubectl describe command in detail.",permalink:"/blog/kubectl-describe-pod",formattedDate:"November 13, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:8.97,date:"2023-11-13T00:00:00.000Z"},{title:"kubectl port-forward - Kubernetes Port Forwarding Explained",description:"We'll see how to use kubectl port-forward to access internal Kubernetes services from outside the cluster.",permalink:"/blog/kubectl-port-forward",formattedDate:"November 5, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:11.64,date:"2023-11-05T00:00:00.000Z"},{title:"Docker Alternatives",description:"We'll discuss top alternatives of Docker walking your through their pros and cons and how they compare to Docker.",permalink:"/blog/docker-alternatives",formattedDate:"February 5, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:11.35,date:"2024-02-05T00:00:00.000Z"}]},u={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Dockerizing PostgreSQL",id:"dockerizing-postgresql",level:2},{value:"Creating a Docker image for PostgreSQL",id:"creating-a-docker-image-for-postgresql",level:3},{value:"Add custom configurations or scripts here",id:"add-custom-configurations-or-scripts-here",level:3},{value:"Additional commands for setting up the container",id:"additional-commands-for-setting-up-the-container",level:3},{value:"Pushing the image to a container registry",id:"pushing-the-image-to-a-container-registry",level:3},{value:"Why you might need a custom image?",id:"why-you-might-need-a-custom-image",level:3},{value:"Configuring Persistent Storage",id:"configuring-persistent-storage",level:2},{value:"Configure YAML files for PV and PVC",id:"configure-yaml-files-for-pv-and-pvc",level:3},{value:"Utilizing the YAML Files",id:"utilizing-the-yaml-files",level:3},{value:"Deploying PostgreSQL Using ConfigMaps and Secrets",id:"deploying-postgresql-using-configmaps-and-secrets",level:2},{value:"Verifying PostgreSQL Installation",id:"verifying-postgresql-installation",level:2},{value:"Conclusion",id:"conclusion",level:2}],m={toc:c};function g(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"PostgreSQL, renowned for its reliability and robustness, plays a pivotal role in database management within Kubernetes environments. This article will serve as a guide for installing PostgreSQL on Kubernetes, covering pre-requisites such as setting up Kubectl, Kubernetes clusters, and Docker. It guides through dockerizing PostgreSQL, configuring persistent storage, deploying using ConfigMaps and Secrets, and concludes with verification steps to ensure a successful setup. Let's start with the pre-requisites of this guide."),(0,a.kt)("p",null,"Steps we'll cover:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#dockerizing-postgresql"},"Dockerizing PostgreSQL"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#creating-a-docker-image-for-postgresql"},"Creating a Docker image for PostgreSQL")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#add-custom-configurations-or-scripts-here"},"Add custom configurations or scripts here")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#additional-commands-for-setting-up-the-container"},"Additional commands for setting up the container")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#pushing-the-image-to-a-container-registry"},"Pushing the image to a container registry")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#why-you-might-need-a-custom-image"},"Why you might need a custom image?")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#configuring-persistent-storage"},"Configuring Persistent Storage"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#configure-yaml-files-for-pv-and-pvc"},"Configure YAML files for PV and PVC")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#utilizing-the-yaml-files"},"Utilizing the YAML Files")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#deploying-postgresql-using-configmaps-and-secrets"},"Deploying PostgreSQL Using ConfigMaps and Secrets")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#verifying-postgresql-installation"},"Verifying PostgreSQL Installation"))),(0,a.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,a.kt)("p",null,"Following are the pre-requisites for this hands-on guide.\n1- Kubectl is successfully installed\n2- Kubernetes cluster is successfully setup (using Minikube or a cloud provider)\n3- Docker is successfully setup (if you want to build your own image of postgreSQL)"),(0,a.kt)("h2",{id:"dockerizing-postgresql"},"Dockerizing PostgreSQL"),(0,a.kt)("h3",{id:"creating-a-docker-image-for-postgresql"},"Creating a Docker image for PostgreSQL"),(0,a.kt)("p",null,"Start with a base image and specify the version of PostgreSQL. Here we would use latest. Below is an example Dockerfile that will use the latest PostgreSQL image from the official Docker Hub."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"FROM postgres:latest\n")),(0,a.kt)("h3",{id:"add-custom-configurations-or-scripts-here"},"Add custom configurations or scripts here"),(0,a.kt)("p",null,"Note that we need to add an environment variable for the master password in the Dockerfile. This will enable you to set the password when the container starts. However adding sensitive information like passwords directly inside the dockerfile is not recommended, we will use Kubernetes secret for that purpose (later in this article)."),(0,a.kt)("p",null,"You can also use a specific version of PostgreSQL if you suspect that the latest version might create any issues. In that case, just specify the exact version in your dockerfile like below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"FROM postgres:13.3\n")),(0,a.kt)("h3",{id:"additional-commands-for-setting-up-the-container"},"Additional commands for setting up the container"),(0,a.kt)("p",null,"Now you need to build the docker image. Use the below command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker build -t <name-of-my-custom-image>\n")),(0,a.kt)("p",null,"Just replace ",(0,a.kt)("inlineCode",{parentName:"p"},"<name-of-my-custom-image>")," with the name of your choice."),(0,a.kt)("h3",{id:"pushing-the-image-to-a-container-registry"},"Pushing the image to a container registry"),(0,a.kt)("p",null,"Now that the image is created, we need to store the created Docker image in a container registry for Kubernetes to access. However, first we need to tag the image using the below command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker tag my-postgres-image registry.example.com/my-postgres-image\n")),(0,a.kt)("p",null,"If we take the example of the GCP container registry then the command will be like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker tag my-postgres-image gcr.io/myproject/my-postgres-image\n")),(0,a.kt)("p",null,"Let's push the image to registry:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker push registry.example.com/my-postgres-image\n")),(0,a.kt)("p",null,"You need to replace the ",(0,a.kt)("inlineCode",{parentName:"p"},"registry.example.com")," with your registry. For the GCP example, we will use below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker push gcr.io/myproject/my-postgres-image\n")),(0,a.kt)("p",null,"Make sure your Docker client is authenticated with the container registry."),(0,a.kt)("h3",{id:"why-you-might-need-a-custom-image"},"Why you might need a custom image?"),(0,a.kt)("p",null,"For common images like PostgreSQL it is not at all mandatory to build and push your own image. Container registries like dockerhub, GCR, ECR, etc. already have ready and prepared images of PostgreSQL and much other common software, so you can directly use those images instead of building your own."),(0,a.kt)("p",null,"However, you might need to build your own image if you need some custom configuration. One of the use cases where you will need to set up the custom configuration instead of updating the database later is the CI/CD scenario."),(0,a.kt)("p",null,"In a CI/CD pipeline, especially with Kubernetes, there's a focus on immutable infrastructure. Containers are built once with a specific configuration and then deployed; they aren't modified after deployment. Customizing the PostgreSQL configuration at build time is the right choice."),(0,a.kt)("h2",{id:"configuring-persistent-storage"},"Configuring Persistent Storage"),(0,a.kt)("p",null,"Configuring Persistent Storage with PV (Persistent Volumes) and PVC (Persistent Volume Claims) is necessary when installing PostgreSQL on Kubernetes to ensure data persistence across pod restarts and failures, safeguarding against data loss in the containerized environment."),(0,a.kt)("p",null,"Persistent volume (PV) provides dedicated storage space for the database, while persistent volume claims (PVCs) allow PostgreSQL pods to claim and utilize this storage, ensuring data persistence across pod restarts and deployments."),(0,a.kt)("h3",{id:"configure-yaml-files-for-pv-and-pvc"},"Configure YAML files for PV and PVC"),(0,a.kt)("p",null,"Persistent Volume YAML Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'    apiVersion: v1\n    kind: PersistentVolume\n    metadata:\n      name: postgres-pv\n    spec:\n      capacity:\n        storage: 5Gi\n      accessModes:\n        - ReadWriteOnce\n      hostPath:\n        path: "/mnt/data"\n')),(0,a.kt)("p",null,"Persistent Volume Claim YAML Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    apiVersion: v1\n    kind: PersistentVolumeClaim\n    metadata:\n      name: postgres-pvc\n    spec:\n      accessModes:\n        - ReadWriteOnce\n      resources:\n        requests:\n          storage: 5Gi\n")),(0,a.kt)("p",null,"Do not forget to update ",(0,a.kt)("inlineCode",{parentName:"p"},"storage")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"path")," as needed."),(0,a.kt)("h3",{id:"utilizing-the-yaml-files"},"Utilizing the YAML Files"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Applying the PV Configuration:"))),(0,a.kt)("p",null,"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl apply -f [your-pv-file].yaml"),"."),(0,a.kt)("p",null,"This command creates the Persistent Volume in your Kubernetes cluster. Note that in case of deployment, we will create a separate YAML file for PVC like above and we will just reference it in the deployment YAML file. This is not the case with Statefulset."),(0,a.kt)("p",null,"In statefulset, we will define the PVC directly within the StatefulSet's YAML file using the ",(0,a.kt)("inlineCode",{parentName:"p"},"volumeClaimTemplates")," section. That allows Kubernetes to dynamically create a unique PVC for each pod in the StatefulSet."),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Applying the PVC Configuration:"),"\nExecute ",(0,a.kt)("inlineCode",{parentName:"li"},"kubectl apply -f [your-pvc-file].yaml"),".")),(0,a.kt)("p",null,"This creates the Persistent Volume Claim, which will bind to the available Persistent Volume."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Verifying the Configuration:"),"\nUse ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl get pv")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl get pvc")," to verify that your PV and PVC are correctly set up and bound.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Attaching to PostgreSQL:"),"\nIn your PostgreSQL deployment YAML, reference the PVC in the volumeMounts section. This step ensures that PostgreSQL uses the persistent storage for data. To attach the PVC to PostgreSQL, you'll need to edit its deployment\nYAML."))),(0,a.kt)("p",null,"Here\u2019s how:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Open Deployment YAML"),": Locate your PostgreSQL deployment YAML file.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Add Volume to Deployment"),": Under the ",(0,a.kt)("inlineCode",{parentName:"p"},"spec")," section of the PostgreSQL deployment, add a ",(0,a.kt)("inlineCode",{parentName:"p"},"volumes")," field. This field should reference the PVC you created.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Modify the Container Section"),": Inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"containers")," section of the PostgreSQL deployment, add a ",(0,a.kt)("inlineCode",{parentName:"p"},"volumeMounts")," field. This will mount the volume inside the PostgreSQL container. The below examples shows PVC configuration for a PostgreSQL database:"),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-22-k8s-postgres/image1.png",alt:"pvc configuration for postgresql"})))),(0,a.kt)("p",null,"Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"volumeMounts")," specifies where inside the container the volume should be mounted (",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/postgresql/data")," is the default data directory for PostgreSQL). Also, in case of cloud-managed cluster such as GKE, EKS, etc. cloud vendor automatically provisions PVs based on the PVCs in the StatefulSet so you do not need to explicitly specify the PV in your YAML file."),(0,a.kt)("p",null,"Also, the above example is in the case of statefulset. If we are using deployment instead of statefulset then we will separately define the PVC in its own YAML file. The PVC is then referenced in the Deployment under the ",(0,a.kt)("inlineCode",{parentName:"p"},"volumes")," section and used by specifying a ",(0,a.kt)("inlineCode",{parentName:"p"},"volumeMounts")," section in the container spec."),(0,a.kt)("p",null,"In the next section, we will define configmap and secrets and then apply the final statefulset YAML file."),(0,a.kt)("h2",{id:"deploying-postgresql-using-configmaps-and-secrets"},"Deploying PostgreSQL Using ConfigMaps and Secrets"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A. Utilizing ConfigMaps for PostgreSQL Configuration"),"\nConfigMaps in Kubernetes are ideal for storing non-confidential data in key-value pairs. They're instrumental in separating your PostgreSQL configuration data from your application code, enhancing maintainability and flexibility."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Creating a ConfigMap for PostgreSQL")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Identify Configuration Parameters"),": Determine the PostgreSQL settings you wish to configure. Common examples include ",(0,a.kt)("inlineCode",{parentName:"li"},"max_connections"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"shared_buffers"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"log_statement"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Create a ConfigMap YAML File"),": Draft a YAML file, say ",(0,a.kt)("inlineCode",{parentName:"li"},"postgres-config.yaml"),", encompassing the desired settings. Here's a simplistic example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    apiVersion: v1\n    kind: ConfigMap\n    metadata:\n      name: postgres-config\n    data:\n      postgresql.conf: |\n        max_connections = 100\n        shared_buffers = 256MB\n        log_statement = 'all'\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Apply the ConfigMap"),": Deploy the ConfigMap to your Kubernetes cluster using the command:")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kubectl apply -f postgres-config.yaml")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Integrating ConfigMap with PostgreSQL StatefulSet")),(0,a.kt)("p",null,"In your StatefulSet YAML, reference the ConfigMap for PostgreSQL configuration. Here\u2019s an illustrative snippet:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"spec:\n  containers:\n  - name: postgres\n    image: postgres:latest\n    volumeMounts:\n    - name: postgres-config-volume\n      mountPath: /etc/postgresql\n  volumes:\n  - name: postgres-config-volume\n    configMap:\n      name: postgres-config\n      items:\n      - key: postgresql.conf\n        path: postgresql.conf\n")),(0,a.kt)("p",null,"This mounts the ",(0,a.kt)("inlineCode",{parentName:"p"},"postgresql.conf")," from the ConfigMap into the PostgreSQL container at the specified ",(0,a.kt)("inlineCode",{parentName:"p"},"mountPath"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"B. Securing PostgreSQL Using Kubernetes Secrets")),(0,a.kt)("p",null,"Kubernetes Secrets are essential for managing sensitive data such as passwords and should be used to secure your PostgreSQL deployment."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Creating a Secret for PostgreSQL")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Prepare the Secret Data"),": For PostgreSQL, this usually involves the database user password. Encode your password using Base64. For example:\n",(0,a.kt)("inlineCode",{parentName:"li"},"echo -n 'yourpassword' | base64")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Create a Secret YAML File"),": Draft a YAML file, e.g., ",(0,a.kt)("inlineCode",{parentName:"li"},"postgres-secret.yaml,")," with the encoded password:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: postgres-secret\ntype: Opaque\ndata:\n  postgres-password: <base64-encoded-password>\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Deploy the Secret"),": Apply it to your Kubernetes cluster:")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kubectl apply -f postgres-secret.yaml")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Integrating Secret with PostgreSQL StatefulSet")),(0,a.kt)("p",null,"Modify your StatefulSet YAML to use the Secret for setting the PostgreSQL password. Here\u2019s an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"spec:\n  containers:\n  - name: postgres\n    image: postgres:latest\n    env:\n    - name: POSTGRES_PASSWORD\n      valueFrom:\n        secretKeyRef:\n          name: postgres-secret\n          key: postgres-password\n")),(0,a.kt)("p",null,"Apply the above YAML file after making the above changes."),(0,a.kt)("p",null,"This sets the ",(0,a.kt)("inlineCode",{parentName:"p"},"POSTGRES_PASSWORD")," environment variable in your PostgreSQL container to the password defined in the Secret. If you are using managed Kubernetes cluster on GKE for example, you can also set the environment variable from the web console, although the recommended practice is to use configmap and Kubernetes secret. See the below example of GKE PostgreSQL installation and adding environment variable."),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-22-k8s-postgres/image2.png",alt:"Adding env variable in GKE"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Expert Tips:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Avoid embedding sensitive data directly in application code or in files that are part of the version control system. Use Kubernetes secret like we did above."),(0,a.kt)("li",{parentName:"ul"},"Utilize Kubernetes namespaces to organize and manage your resources\neffectively."),(0,a.kt)("li",{parentName:"ul"},"Note that changes to ConfigMaps and Secrets do not automatically propagate to running pods. You may need to restart the pods for changes to take effect.")),(0,a.kt)("h2",{id:"verifying-postgresql-installation"},"Verifying PostgreSQL Installation"),(0,a.kt)("p",null,"After you applied above mentioned YAML file for a stateful set or for\ndeployment, let's verify the installation."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"First check the list of pods by executing the command ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl get pods"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you see the PostgreSQL pods, that means the installation was successful. To get into the database, execute the command ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl exec -it <pod-name> -- psql -U <username>")," I used the default username which was ",(0,a.kt)("inlineCode",{parentName:"p"},"postgres"),". This command will land you into the psql shell.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'After you are into the psql shell, type the command "\\l " to display a list of databases. The below screenshots show the result of all these commands.'),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-22-k8s-postgres/image3.png",alt:"Verifying PostgreSQL installation"})))),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"This article comprehensively covered the installation of PostgreSQL on Kubernetes, from initial setup to final verification. By detailing steps like dockerizing PostgreSQL, managing persistent storage, and securely deploying with ConfigMaps and Secrets, it provides readers with a thorough understanding and practical guidance. This knowledge is invaluable for anyone looking to implement PostgreSQL within a Kubernetes environment, ensuring a secure and efficient database setup."))}g.isMDXComponent=!0}}]);