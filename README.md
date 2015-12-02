# dom-conform
Resolve and find element class names

### Concept

```javascript
//Add "hello" to the element class list.
conform(element, "hello", true);

//Remove "hello" from the element class list.
conform(element, "hello", false);

//Determine whether the element class list contains "hello"
conform(element, "hello");
```

```javascript
//Return the first child of element conforming to "world"
conform.find(element, "world");

//Run the callback function on each child of element conforming to "world"
conform.find(element, "world", callback);
```

```javascript
//Return the first parent of element conforming to "world"
conform.closest(element, "world");
```

### Examples

```javascript
var submit = function() {
	//Mark the form as "invalid"
	conform(form, "invalid", true);
}
```

```javascript
var layout = function() {
	//Run the specified function on conforming childs
	conform.find(element, "aspect-fill", function(child){
		//Calculate ratio and update child geometric style properties.
	});
}
```

```javascript
var menuClickHandler = function(event) {
	//Get the menu item of the clicked target
	var item = conform.closest(event.target, "menu-item");
}
```