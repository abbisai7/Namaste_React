# Namaste React Course

## Episode -3 Laying the foundation

### Homework Questions

#### 1. What is JSX

- JSX stands for JavaScriptXML.
- JSX is HTML Like or XML Like syntax used in react to create react elements in a easy way.
- JSX is not HTML inside JS.
- JSX is different react is different.

##### Example 1 using JSX
    const myElement = <h1>I Love JSX!</h1>;
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(myElement); 

##### Example2 without JSX
    const myElement = React.createElement('h1', {}, 'I do not use JSX!');
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(myElement);

#### 2. Superpowers of JSX.

- Readability - JSX is easy to maintain and debug.
- With JSX we can markup with JS in a single .js File.
    
#### 3. Role of type attribute in script tag? What options can I use there?

- The type attribute specifies the type of the script. 
- The type attribute identifies the content between the `<script>` and `</script>` tags. It has a Default value which is “text/javascript”.
### `type` attribute can be of the following types:
- `text/javascript` : It is the basic standard of writing javascript code inside the `<script>` tag.
    ### Syntax
    ```
    <script type="text/javascript"></script>
    ```
- `text/ecmascript` : this value indicates that the script is following the `EcmaScript` standards.
- `module`: This value tells the browser that the script is a module that can import or export other files or modules inside it.
- `text/babel` : This value indicates that the script is a babel type and required bable to transpile it.
- `text/typescript`: As the name suggest the script is written in `TypeScript`.

#### 4. `{TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>}` in JSX.

- {TitleComponent} - Here TitleComponent refers to a JS Expression or variable.
- `<TitleComponent/>` - Here TitleComponent represents a react component which basically returns JSX. Simply, to represent TitleComponent is a function returning JSX value.
- `<TitleComponent></TitleComponent>` - `<TitleComponent />` and `<TitleComponent></TitleComponent>` are similiar in functionality, but `<TitleComponent/>` when there are child components inside the components.

### Example
```
<TitleComponent>
    <FirstChildComponent />
    <SecondChildComponent />
    <ThirdChildComponent />
</TitleComponent>
```
