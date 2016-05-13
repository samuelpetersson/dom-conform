var conform = (function(){
	function conform(element, className, toggle) {
		var list = element.classList;
		if(list) {
			if(toggle === true) {
				list.add(className);
				return true;
			}
			if(toggle === false) {
				list.remove(className);
				return false;
			}
			return list.contains(className);
		}
		var pattern = new RegExp("(\\s|^)" + className + "(\\s|$)");
		var contains = pattern.test(element.className);
		if(toggle === true) {
			if(!contains) {
				element.className += " " + className;
			}
			return true;
		}
		if(toggle === false) {
			if(contains) {
				element.className = element.className.replace(pattern, " ");
			}
			return true;
		}
		return contains;
	};
	conform.find = function(element, className, resolver) {
		var childs, i;
		if(element.getElementsByClassName) {
			childs = element.getElementsByClassName(className);
			for(i = 0; i<childs.length; i++) {
				if(!resolver || resolver(childs[i], i) === true) {
					return childs[i];
				}
			}
			return null;
		}
		if(element.getElementsByTagName) {
			var pattern = new RegExp("(\\s|^)" + className + "(\\s|$)");
			childs = element.getElementsByTagName("*");
			for(i = 0; i<childs.length; i++) {
				if(pattern.test(childs[i].className)) {
					if(!resolver || resolver(childs[i], i) === true) {
						return childs[i];
					}
				}
			}
			return null;
		}
		return null;
	};
	conform.closest = function(target, className) {
	    while(target && !conform(target, className)) {
	        target = target.parentNode;
	    }	
	    return target;
	}
	return conform;
})();

if(typeof module !== "undefined") {
	module.exports = conform;
}
