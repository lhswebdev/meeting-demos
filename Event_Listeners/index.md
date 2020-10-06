# Event Listeners
Merging JavaScript and the DOM

## Quick Review

### HTML
* The entirety of a website is contained in a `window`.
* Inside the `window` is a `document`.
    * Visitors can only see things inside the `document`.
    * The document is also called the `DOM` (**D**ocument **O**bject **M**odel).
* To control what users see on the `document`, we can use `HTML` (**H**yper **T**ext **M**arkup **L**anguage).
* Simple `HTML` example:
    ```html
    <div>
        Division block
        <h1>BIG TEXT</h1>
        <p>
            This is a simple paragraph of text.
            <br /><br />
            ^^^^^^^^^^^^ these signal the end of a line.
            <br />
            <strong>Text inside here is in bold</strong>
            <a href="https://lhswebdev.github.io">
                Link to home page
            </a>
        </p>
        <input id="inputBoxID" value="Text Input"></input>
    </div>
    ```

### JavaScript
```javascript
console.log("Hello World"); // logs to console

function myFunction(number){ // function definition
    return 420 + number; 
}
console.log(myFunction(0.69)); // 420.69

// some variable types
var stringVar = "Some string";
var numberVar = 0;
var boolVar = true;

// loops
for(var i = 0; i < 10; i++){ // loops 10 times
    console.log("Iteration", i); // Iteration [number]
}
while (numberVar < 10) { // loops while numberVar < 10
    console.log("While iteration ", numberVar);
    numberVar++;
}

// if statements
if (boolVar) {
    console.log(stringVar);
} else {
    console.log("This won't print");
}
```

## JavaScript Console
To open the JavaScript console, do the following:
1. Right click
1. Click `Inspect Element`
1. Click the `Console` tab

## Event Listeners
Detect user actions!
* Attach a function to an element on the page.

* When the event "fires", the function is called.
* Syntax:
    * Choose an element.
        ```javascript
        // get element with id="input1"
        var element = document.getElementById("input1");
        ```
        ```javascript
        // get the first <input> element
        var element = document.getElementByTagName("input")[0];
        ```
        ```javascript
        // get the first element with class="elementClass"
        var element = document.getElementByClassName("elementClass")[0];
        ```
    * Then, attach a function to the element.
        ```javascript
        element.addEventListener("eventName", function(event){
            // event holds information about the event
            console.log("Event happened:", event);
        });
        ```
* Common event names:
    * `click`
    * `contextmenu`
    * `dblclick`
    * `drag`
    * `keydown`
    * `keypress`
    * `keyup`
    * `load`
    * `mouseenter`
    * `mouseleave`
    * `mousemove`
    * `mouseover`
    * `mouseout`
    * `mouseup`
    * `select`
    * `submit`

## Event Listener Demos
Copy paste the code into your JS console to try it out!

### Button Click Event

<button id="button1">button1</button>

```javascript
document.getElementById("button1").addEventListener("click", function(event) {
    console.log("Button 1 was clicked!", event);
});
```

### Input Keypress Event

<input id="input1" value="input1"></input>

```javascript
document.getElementById("input1").addEventListener("keydown", function(event) {
    console.log("Key was pressed!", event.key);
});
```

### Div Mouseover Event

<div style="width: 100px; height: 100px; background-color:red;" id="redBox"></div>

```javascript
document.getElementById("redBox").addEventListener("mouseover", function(event) {
    console.log("Mouse over was fired!", event);
});
```

### Common Function
You can also use a common function for multiple event listeners.

<input id="input1" value="input1"></input>
<input id="input2" value="input2"></input>
<input id="input3" value="input3"></input>

```javascript
function callback(event) {
    console.log("Key " + event.key + " was pressed in " + event.target.id);
}

document.getElementById("input1").addEventListener("keypress", callback);
document.getElementById("input2").addEventListener("keypress", callback);
document.getElementById("input3").addEventListener("keypress", callback);
```

## Review
* Event listeners are functions attached to elements.
* Event listeners "fire" when the user does an action.
* You can access information about the event through the event object passed to your function.