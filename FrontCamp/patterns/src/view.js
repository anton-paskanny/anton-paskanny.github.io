import Store from './redux/store.js';

export default class View {
  constructor() {}
  /**
   * Create DOM node according to the passed type
   * @function
   * @param {string} type - type of element to create (div, footer, aside, p, etc.)
   */
  createElement(type) {
    return document.createElement(type ? type : 'div');
  }
  /**
   * Set className and innerHTML for passed element
   * @function
   * @param {Node} element - element created by createElement method
   * @param {string} className - elemen't class name
   * @param {string} content - innerHTML for element
   */
  onInit(element, className, content) {
    if (className) element.className = className;
    if (content) element.innerHTML = content;
  }
  /**
   * Append passed elements into necessary element
   * @function
   * @param {Node} target - element created by createElement method
   * @param {Array} arr - array with components
   */
  append(target, arr) {
    arr.forEach(component => {
      target.appendChild(component.element);
    });
  }
}
