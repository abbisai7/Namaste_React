# Namaste React Course
## Episode 1 Inception

## Homework Questions

##### 1. What is Emmet?  
- It is a plugin used to auto-generate boiler-plate code. For example, we can use '!' to generate HTMl boilerplate code
- We can use abbreviations/short expressions to generate HTML and CSS.
- It is a toolkit that makes writing HTML, CSS code really easy!

##### 2. Difference between Library and Framework?  
##### Library:   
- A library is a collection of files and functions writeen by other developers, such as react written by facebook developers.
- Library doesnt interup the flow of code, and gives developer has full control of code flow
- Libraries like react can only be applied to specified parts of the applications like only to the root or to certain div.

##### Framework:  
- A framework is a more comprehensive and structured set of tools, guidelines, and predefined functionalities that dictate the overall architecture and flow of an application.
- It INVERTS THE CONTROL since it provides the developer some places to plug in their code. It calls that code only as needed.

#### 3.What is CDN and Why Do we use it?

A content delivery network (CDN) refers to a geographically distributed group of servers that work together to provide fast delivery of Internet content. The main use of a CDN is to deliver content through a network of servers in a secure and efficient way.

#### 4.Why is React called React?

The name React was chosen because the library was designed to allow developers to "react" to changes in state and data within an application, and to update the user interface in a declarative and efficient manner.

#### 5.What is crossorigin in script tag?

- The crossorigin attribute sets the mode of the request to an HTTP CORS Request.
- It is used to handle the CORS request that checks whether it is safe to allow for sharing the resources from other domains.

Reference for CORS : 
1. [Must Visit] https://simplelocalize.io/blog/posts/what-is-cors/
2. [Alshay Saini's Video] https://www.youtube.com/watch?v=tcLW5d0KAYE


## ***Syntax***
```<script crossorigin="anonymous|use-credentials">```


#### 6.What is the difference between React and ReactDOM?

- React is the library that provides the core React code. This is the fundamental code needed to run React anywhere
- ReactDOM is that React library for performing DOM operations. It is specific to the browser. It is bridge between React and Browsers. Enables runnning React in browser.
- We know React does not just run in Browsers, but also on Mobile, Android, etc. So we have different libraries for executing React on different platforms.
- So we need 2 separate packages in our app.

#### 7. What is the difference between react.development.js and react.production.js files via CDN ?
   - The React library provides two versions of its JavaScript files: **react.development.js** and **react.production.js**. The react.development.js is used in development stage/environment while the other is for production environment.
   - The react.development.js file is **larger** in size compared to react.production.js.The development version contains additional code, comments, and debugging information that aids in development and troubleshooting.
   - The development version (react.development.js) provides more detailed error messages and warnings compared to the production version. So it helps in better diagnostics
   - The production version is **optimized for performance** and has undergone various optimizations, including **minification and removal of unnecessary code**, resulting in a smaller file size.


#### 8.What is the difference between async and defer attribute?[Aksay Saini Video]https://www.youtube.com/watch?v=IrHmpdORLu8

- Async and Defer are the attrributes passed to script tag.
- ```<script src = "">```: Without any attribute in the script tag, the HTML parsing goes on and when the **script** tag is encoutered the parsing is stopped and parsing resumes after script is fetched and executed.
- ```<script async src = "">``` : In this case, the HTML parsing goes on. When script tag is encountered, it is fetched from the network asynchronously parallel to HTML parsing. When the script is fetched fully parsing is paused and the script is executed. Once the script execution is complete, then HTML parsing resumes.
- ```<script defer src = "">```: In this case, the HTML parsing goes on. When script tag is encountered, it is fetched from the network asynchronously parallel to HTML parsing, but the script is executed only when HTML parsing is done completely. 









