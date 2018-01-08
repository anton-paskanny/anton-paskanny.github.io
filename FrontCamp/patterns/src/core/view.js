import Store from './redux/store.js';

export default class View {
  constructor(options) {
    this.element = this.createElement(options.selector);
    this.element.className = options.className || 'item';
    this.element.innerHTML = options.content || this.element.innerHTML;
  }
  /**
   * Create DOM node according to the passed type
   * @function
   * @param {string} type - type of element to create (div, footer, aside, p, etc.)
   */
  createElement(type) {
    return document.createElement(type ? type : 'div');
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
