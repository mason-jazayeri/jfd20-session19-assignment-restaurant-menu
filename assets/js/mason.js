function elementor(el, pe) {
    // elementor: element creator, appending it to a parent element by parent's name
    // (Creates an element, then appends it to a parent)
    // el: The element you are going to create like "DIV"
    // pe: The name of the parent element of the element like "siteWrapper"
    var htmlElement = document.createElement(el);
    pe.appendChild(htmlElement);
    return htmlElement;
}
function elementorCl(el, cl, pe) {
    // elementorCl: element creator with a Class, appending it to a parent element by parent's name
    // (Creates an element, sets a class for it, then appends it to a parent)
    // el: The element you are going to create like "DIV"
    // cl: The class you are going to add to the element's class list like "container"
    // pe: The name of the parent element of the element like "siteWrapper"
    var htmlElement = document.createElement(el);
    htmlElement.classList.add(cl);
    pe.appendChild(htmlElement);
    return htmlElement;
}
function elementorId(el, id, pe) {
    // elementorId: element creator with an Id, appending it to a parent element by parent's name
    // (Creates an element, sets an Id for it, then appends it to a parent)
    // el: The element you are going to create like "DIV"
    // id: The Id you are going to set to the element like "div1"
    // pe: The name of the parent element of the element like "siteWrapper"
    var htmlElement = document.createElement(el);
    htmlElement.id = id;
    pe.appendChild(htmlElement);
    return htmlElement;
}
function elementorIdCl(el, id, cl, pe) {
    // elementorIdCl: element creator with an Id and a Class, appending it to a parent element by parent's name
    // (Creates an element, sets an Id and a class for it, then appends it to a parent)
    // el: The element you are going to create like "DIV"
    // id: The Id you are going to set to the element like "div1"
    // cl: The class you are going to add to the element's class list like "container"
    // pe: The name of the parent element of the element like "siteWrapper"
    var htmlElement = document.createElement(el);
    htmlElement.id = id;
    htmlElement.classList.add(cl);
    pe.appendChild(htmlElement);
    return htmlElement;
}
function elementorIH(el, ih, pe) {
    // elementorIH: element creator with an InnerHTML, appending it to a parent element by parent's name
    // (Creates an element, adds an innerHTML to it, then appends it to a parent)
    // el: The element you are going to create like "DIV"
    // ih: The innerHTML you are going to add to the element like "<h1>This is h1 heading</h1>"
    // pe: The name of the parent element of the element like "siteWrapper"
    var htmlElement = document.createElement(el);
    htmlElement.innerHTML = ih;
    pe.appendChild(htmlElement);
    return htmlElement;
}
function elementorClIH(el, cl, ih, pe) {
    // elementorClIH: element creator with a Class and an InnerHTML, appending it to a parent element by parent's name
    // (Creates an element, adds an innerHTML to it, sets a class for it, then appends it to a parent)
    // el: The element you are going to create like "DIV"
    // cl: The class you are going to add to the element's class list like "container"
    // ih: The innerHTML you are going to add to the element like "<h1>This is h1 heading</h1>"
    // pe: The name of the parent element of the element like "siteWrapper"
    var htmlElement = document.createElement(el);
    htmlElement.classList.add(cl);
    htmlElement.innerHTML = ih;
    pe.appendChild(htmlElement);
    return htmlElement;
}
function elementorIdIH(el, id, ih, pe) {
    // elementorIdIH: element creator with an Id and an InnerHTML, appending it to a parent element by parent's name
    // (Creates an element, adds an innerHTML to it, sets an Id for it, then appends it to a parent)
    // el: The element you are going to create like "DIV"
    // id: The Id you are going to set to the element like "div1"
    // ih: The innerHTML you are going to add to the element like "<h1>This is h1 heading</h1>"
    // pe: The name of the parent element of the element like "siteWrapper"
    var htmlElement = document.createElement(el);
    htmlElement.id = id;
    htmlElement.innerHTML = ih;
    pe.appendChild(htmlElement);
    return htmlElement;
}
function elementorIdClIH(el, id, cl, ih, pe) {
    // elementorIdClIH: element creator with an Id, a class and an InnerHTML, appending it to a parent element by parent's name
    // (Creates an element, adds an innerHTML to it, sets an Id and a class for it, then appends it to a parent)
    // el: The element you are going to create like "DIV"
    // id: The Id you are going to set to the element like "div1"
    // cl: The class you are going to add to the element's class list like "container"
    // ih: The innerHTML you are going to add to the element like "<h1>This is h1 heading</h1>"
    // pe: The name of the parent element of the element like "siteWrapper"
    var htmlElement = document.createElement(el);
    htmlElement.id = id;
    htmlElement.classList.add(cl);
    htmlElement.innerHTML = ih;
    pe.appendChild(htmlElement);
    return htmlElement;
}
function elementorQs(el, peqs) {
    // elementorQs: element creator, appending it by querySelector to a parent element
    // (Creates an element, then appends it to a parent)
    // el: The element you are going to create like "DIV"
    // peqs: The css selector for the parent of the element like ".site-wrapper"
    var htmlElement = document.createElement(el);
    var parentEl = document.querySelector(peqs);
    parentEl.appendChild(htmlElement);
    return htmlElement;
}
function elementorClQs(el, cl, peqs) {
    // elementorClQs: element creator with a Class, appending it by querySelector to a parent element
    // (Creates an element, sets a class for it, then appends it to a parent)
    // el: The element you are going to create like "DIV"
    // cl: The class you are going to add to the element's class list like "container"
    // peqs: The css selector for the parent of the element like ".site-wrapper"
    var htmlElement = document.createElement(el);
    htmlElement.classList.add(cl);
    var parentEl = document.querySelector(peqs);
    parentEl.appendChild(htmlElement);
    return htmlElement;
}
function elementorIdQs(el, id, peqs) {
    // elementorIdQs: element creator with an Id, appending it by querySelector to a parent element
    // (Creates an element, sets an Id for it, then appends it to a parent)
    // el: The element you are going to create like "DIV"
    // id: The Id you are going to set to the element like "div1"
    // peqs: The css selector for the parent of the element like ".site-wrapper"
    var htmlElement = document.createElement(el);
    htmlElement.id = id;
    var parentEl = document.querySelector(peqs);
    parentEl.appendChild(htmlElement);
    return htmlElement;
}
function elementorIdClQs(el, id, cl, peqs) {
    // elementorIdClQs: element creator with an Id and a Class, appending it by querySelector to a parent element
    // (Creates an element, sets an Id and a class for it, then appends it to a parent)
    // el: The element you are going to create like "DIV"
    // id: The Id you are going to set to the element like "div1"
    // cl: The class you are going to add to the element's class list like "container"
    // peqs: The css selector for the parent of the element like ".site-wrapper"
    var htmlElement = document.createElement(el);
    htmlElement.id = id;
    htmlElement.classList.add(cl);
    var parentEl = document.querySelector(peqs);
    parentEl.appendChild(htmlElement);
    return htmlElement;
}
function elementorIHQs(el, ih, peqs) {
    // elementorIHQs: element creator with an InnerHTML, appending it by querySelector to a parent element
    // (Creates an element, adds an innerHTML to it, then appends it to a parent)
    // el: The element you are going to create like "DIV"
    // ih: The innerHTML you are going to add to the element like "<h1>This is h1 heading</h1>"
    // peqs: The css selector for the parent of the element like ".site-wrapper"
    var htmlElement = document.createElement(el);
    htmlElement.innerHTML = ih;
    var parentEl = document.querySelector(peqs);
    parentEl.appendChild(htmlElement);
    return htmlElement;
}
function elementorClIHQs(el, cl, ih, peqs) {
    // elementorClIHQs: element creator with a Class and an InnerHTML, appending it by querySelector to a parent element
    // (Creates an element, adds an innerHTML to it, sets a class for it, then appends it to a parent)
    // el: The element you are going to create like "DIV"
    // cl: The class you are going to add to the element's class list like "container"
    // ih: The innerHTML you are going to add to the element like "<h1>This is h1 heading</h1>"
    // peqs: The css selector for the parent of the element like ".site-wrapper"
    var htmlElement = document.createElement(el);
    htmlElement.classList.add(cl);
    htmlElement.innerHTML = ih;
    var parentEl = document.querySelector(peqs);
    parentEl.appendChild(htmlElement);
    return htmlElement;
}
function elementorIdIHQs(el, id, ih, peqs) {
    // elementorIdIHQs: element creator with an Id and an InnerHTML, appending it by querySelector to a parent element
    // (Creates an element, adds an innerHTML to it, sets an Id for it, then appends it to a parent)
    // el: The element you are going to create like "DIV"
    // id: The Id you are going to set to the element like "div1"
    // ih: The innerHTML you are going to add to the element like "<h1>This is h1 heading</h1>"
    // peqs: The css selector for the parent of the element like ".site-wrapper"
    var htmlElement = document.createElement(el);
    htmlElement.id = id;
    htmlElement.innerHTML = ih;
    var parentEl = document.querySelector(peqs);
    parentEl.appendChild(htmlElement);
    return htmlElement;
}
function elementorIdClIHQs(el, id, cl, ih, peqs) {
    // elementorIdClIHQs: element creator with an Id, a class and an InnerHTML, appending it by querySelector to a parent element
    // (Creates an element, adds an innerHTML to it, sets an Id and a class for it, then appends it to a parent)
    // el: The element you are going to create like "DIV"
    // id: The Id you are going to set to the element like "div1"
    // cl: The class you are going to add to the element's class list like "container"
    // ih: The innerHTML you are going to add to the element like "<h1>This is h1 heading</h1>"
    // peqs: The css selector for the parent of the element like ".site-wrapper"
    var htmlElement = document.createElement(el);
    htmlElement.id = id;
    htmlElement.classList.add(cl);
    htmlElement.innerHTML = ih;
    var parentEl = document.querySelector(peqs);
    parentEl.appendChild(htmlElement);
    return htmlElement;
}
function elementorGi(el, pegi) {
    // elementorGi: element creator, appending it by getElementById to a parent element
    // (Creates an element, then appends it to a parent)
    // el: The element you are going to create like "DIV"
    // pegi: The css selector for the parent of the element like ".site-wrapper"
    var htmlElement = document.createElement(el);
    var parentEl = document.ggetElementById(pegi);
    parentEl.appendChild(htmlElement);
    return htmlElement;
}
function elementorClGi(el, cl, pegi) {
    // elementorClGi: element creator with a Class, appending it by getElementById to a parent element
    // (Creates an element, sets a class for it, then appends it to a parent)
    // el: The element you are going to create like "DIV"
    // cl: The class you are going to add to the element's class list like "container"
    // pe: The css selector for the parent of the element like ".site-wrapper"
    var htmlElement = document.createElement(el);
    htmlElement.classList.add(cl);
    var parentEl = document.getElementById(pegi);
    parentEl.appendChild(htmlElement);
    return htmlElement;
}
function elementorIdGi(el, id, pegi) {
    // elementorIdGi: element creator with an Id, appending it by getElementById to a parent element
    // (Creates an element, sets an Id for it, then appends it to a parent)
    // el: The element you are going to create like "DIV"
    // id: The Id you are going to set to the element like "div1"
    // pe: The css selector for the parent of the element like ".site-wrapper"
    var htmlElement = document.createElement(el);
    htmlElement.id = id;
    var parentEl = document.getElementById(pegi);
    parentEl.appendChild(htmlElement);
    return htmlElement;
}
function elementorIdClGi(el, id, cl, pegi) {
    // elementorIdClGi: element creator with an Id and a Class, appending it by getElementById to a parent element
    // (Creates an element, sets an Id and a class for it, then appends it to a parent)
    // el: The element you are going to create like "DIV"
    // id: The Id you are going to set to the element like "div1"
    // cl: The class you are going to add to the element's class list like "container"
    // pe: The css selector for the parent of the element like ".site-wrapper"
    var htmlElement = document.createElement(el);
    htmlElement.id = id;
    htmlElement.classList.add(cl);
    var parentEl = document.getElementById(pegi);
    parentEl.appendChild(htmlElement);
    return htmlElement;
}
function elementorIHGi(el, ih, pegi) {
    // elementorIHGi: element creator with an InnerHTML, appending it by getElementById to a parent element
    // (Creates an element, adds an innerHTML to it, then appends it to a parent)
    // el: The element you are going to create like "DIV"
    // ih: The innerHTML you are going to add to the element like "<h1>This is h1 heading</h1>"
    // pe: The css selector for the parent of the element like ".site-wrapper"
    var htmlElement = document.createElement(el);
    htmlElement.innerHTML = ih;
    var parentEl = document.getElementById(pegi);
    parentEl.appendChild(htmlElement);
    return htmlElement;
}
function elementorClIHGi(el, cl, ih, pegi) {
    // elementorClIHGi: element creator with a Class and an InnerHTML, appending it by getElementById to a parent element
    // (Creates an element, adds an innerHTML to it, sets a class for it, then appends it to a parent)
    // el: The element you are going to create like "DIV"
    // cl: The class you are going to add to the element's class list like "container"
    // ih: The innerHTML you are going to add to the element like "<h1>This is h1 heading</h1>"
    // pe: The css selector for the parent of the element like ".site-wrapper"
    var htmlElement = document.createElement(el);
    htmlElement.classList.add(cl);
    htmlElement.innerHTML = ih;
    var parentEl = document.getElementById(pegi);
    parentEl.appendChild(htmlElement);
    return htmlElement;
}
function elementorIdIHGi(el, id, ih, pegi) {
    // elementorIdIHGi: element creator with an Id and an InnerHTML, appending it by getElementById to a parent element
    // (Creates an element, adds an innerHTML to it, sets an Id for it, then appends it to a parent)
    // el: The element you are going to create like "DIV"
    // id: The Id you are going to set to the element like "div1"
    // ih: The innerHTML you are going to add to the element like "<h1>This is h1 heading</h1>"
    // pe: The css selector for the parent of the element like ".site-wrapper"
    var htmlElement = document.createElement(el);
    htmlElement.id = id;
    htmlElement.innerHTML = ih;
    var parentEl = document.getElementById(pegi);
    parentEl.appendChild(htmlElement);
    return htmlElement;
}
function elementorIdClIHGi(el, id, cl, ih, pegi) {
    // elementorIdClIHGi: element creator with an Id, a class and an InnerHTML, appending it by getElementById to a parent element
    // (Creates an element, adds an innerHTML to it, sets an Id and a class for it, then appends it to a parent)
    // el: The element you are going to create like "DIV"
    // id: The Id you are going to set to the element like "div1"
    // cl: The class you are going to add to the element's class list like "container"
    // ih: The innerHTML you are going to add to the element like "<h1>This is h1 heading</h1>"
    // pe: The css selector for the parent of the element like ".site-wrapper"
    var htmlElement = document.createElement(el);
    htmlElement.id = id;
    htmlElement.classList.add(cl);
    htmlElement.innerHTML = ih;
    var parentEl = document.getElementById(pegi);
    parentEl.appendChild(htmlElement);
    return htmlElement;
}