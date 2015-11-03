function conform(element, className, setter) {
				if(element.classList) {
								if(setter === undefined) {
												return element.classList.contains(className);
								}
								if(setter) {
												element.classList.add(className);
												return true;
								}
								element.classList.remove(className);
								return false;
				}
				var pattern = new RegExp("(\\s|^)" + className + "(\\s|$)");
				var contains = pattern.test(element.className);
				if(setter === undefined) {
								return contains;
				}
				if(setter) {
								if(!contains) {
												element.className += " " + className;
								}
								return true;
				}
				if(contains) {
								element.className = element.className.replace(pattern, " ");
				}
				return false;
};
if(module) {
	module.exports = conform;
}
