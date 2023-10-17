# Namaste React Course

## Episode -2 Iginite the App

### Homework Questions

#### 1.What is NPM?
- npm is not in fact an acronym for "Node Package Manager".
- npm is used to manage to packages mainly focused for the javascript programming languages.
- It consists of a command line client, also called npm, and an online database of public and paid-for private packages
- `npm init` to intialize the project.

#### 2.What is Parcel/Webpack? Why do we need it?
- Bundlers - In the project, we have multiple HTML,CSS and JS Files, all the files need to be cleaned and bundled before moving into production.
- They help developers manage complex projects by combining various dependencies into a single, optimized file that can be easily deployed. 
- Parcel is one of the popular bundler tools, which works with less configuration setup.

   References :  
   1. https://medium.com/@egoossaert/what-are-javascript-bundlers-d19a64ec1130
   2. [Must Read] https://kinsta.com/blog/rollup-vs-webpack-vs-parcel/#what-is-a-javascript-bundler

#### 3.What is .parcel-cache?
- Parcel-Cache is one of the feature of parcel, which helps in making the build faster, and improves performance.
- When a build is made first, a huge amount would have been consumed, but for the second time, and minimal amount of time would enough to complte the build, this is beacuse .parcel-cache caches the build, and only modified changes would been updated.
- Few Properties:

      1.Caching Dependencies: Parcel caches the dependencies of your project to reduce build times. When you run a build or development server, Parcel stores copies of the project's dependencies (such as JavaScript, CSS, and other assets) locally in a cache directory. This cache minimizes the need to re-download or reprocess dependencies that have not changed since the previous build.
      2.Incremental Builds: Parcel uses the cached dependencies to perform incremental builds. It checks if the source files of your project have changed since the last build. If they haven't changed, Parcel reuses the cached dependencies and assembles the final bundles faster.
      3.Cache Invalidation: If you make changes to your project, such as modifying source files or dependencies, Parcel's cache will be invalidated for the affected files. When you build the project again, Parcel will reprocess and cache the updated or new dependencies.

   References:
   1. https://www.linkedin.com/posts/atharvabhatnagar_webdevelopment-parcel-caching-activity-7084569533687939073-o0a4/

#### 4.What is npx ?
- npx - node package executor 
- npx is to download and run a package temporarily or for trials.
   References:
   1. https://stackoverflow.com/questions/50605219/difference-between-npx-and-npm
#### 5.What is difference between dependencies vs devDependencies
- Dependencies are the one which are required to run the project, are also used in production.`npm install <package_name>`
- DevDependices are used in development environement. eg- unit test, transpilers etc. `npm install -d <package_name>`
#### 6.What is Tree Shaking?
- Simply putiing tree shaking removes the dead code in our project.
- It means that unused modules will not be included in the bundle during the build process.
   - When we import and export modules in JavaScript, most of the time there is unused code floating around. Excluding that unused code (also referred as dead code) is called tree shaking.
-  The Tree Shaking process reduces the download size of an application
- Tree shaking not exporting the modules that are not needed by our application in the bundle file, it is not going to remove the unused code from the bundle.
- Webpack removes the links and UglifyJs Plugin removes the code.

   References:
   1. https://stackoverflow.com/questions/45884414/what-is-tree-shaking-and-why-would-i-need-it
#### 7.What is Hot Module Replacement?
-  When we make changes to the file in the project, instead of reloading the whole application, HMR detects the modified modules, and only replaces them.
- Need?
   - Speeds up the development activity and saves time, by changing only the modified modules
   - Preserves the state of the application, which is normally lost during full reload.
- One of the most significant features of the Webpack/Parcel tools, and keeps tracks of changes to modules.       
   References:
   1. https://medium.com/js-imaginea/hot-module-replacement-8b634c2a4348

#### 8.List down your favorite 5 superpowers of Parcel and describe any 3 of them in your own words.
- HMR
- File Wathcing Algoritms-
- Faster build by cache(.parcel-cache)
- Tree Shaking
- Image Optimization
- Dev Build
- Deploy on local server
- Differential bundling-support for different browsers.
- Error handling - presents in nice ui over the browser
#### 9.What is .gitignore? What should we add and not add into it?
- Files which are not required to be pushed into github, can be added in .gitignore
- Example node modules need not to be pushed into github, we can ignore by adding the path in .gitignore file.
#### 10.What is the difference between package.json and package-lock.json
- package.json is a metadata file in a Node.js project that describes the project's dependencies, scripts, configuration, and other details.
- It typically contains information about the project such as its name, version, author, and license. It also lists the project's dependencies on other Node.js packages, along with their version numbers, so that these dependencies can be automatically installed when the project is set up or updated.
- package.json file is typically located at the root directory of a Node.js project and is automatically generated when you run npm init command to initialize a new project.
- package-lock.json is a file that is automatically generated by npm when a package is installed. It records the exact version of every installed dependency, including its sub-dependencies and their versions.
- The purpose of package-lock.json is to ensure that the same dependencies are installed consistently across different environments, such as development and production environments. It also helps to prevent issues with installing different package versions, which can lead to conflicts and errors.

   References:
   1. https://www.atatus.com/blog/package-json-vs-package-lock-json/


#### 11.Why should I not modify package-lock.json?
- Because package-lock.json stores the exact version that intialy downloaded, and it helps in consistentcy across different environments.
#### 12.What is node_modules ? Is it a good idea to push that on git?
- The node_modules folder contains libraries downloaded from npm. You shouldn't push it to github (you should even add it to your .gitignore), bacause everyone who clones your repository can download it themselves (based on your package.json).
#### 13.What is the dist folder?
- The "dist" folder typically contains the final, production-ready version of your project, including optimized and minified files.
- Its contents are the result of the build process and are intended for distribution to end-users or for deployment to a web server.
#### 14.What is browserlists
- In package.json we can add browserlist config to mention the browsers with which our application can support.
#### 15.Read about dif bundlers: vite, webpack, parcel
- https://medium.com/js-imaginea/comparing-bundlers-webpack-rollup-parcel-f8f5dc609cfd
#### 16.Read about: ^ - caret and ~ - tilde
- Tilde (~) freezes all the previous major and minor versions. In a way it allows only the latest patched version to be installed when you are installing this particular dependency package.
- For example, ~1.2.0 will update the future patch versions when and so they are released. We just need to change the 1.2.0 to 1.2.1, 1.2.2, 1.2.3 etc.
- Caret (^) notation is used to update automatically minor updates as well as patch updates. For example, ^1.2.0 will update to 1.3.1 ( if the next minor patch version is released that way) , thus giving us a 1.X.X fix
#### 17.Read about Script types in html (MDN Docs)