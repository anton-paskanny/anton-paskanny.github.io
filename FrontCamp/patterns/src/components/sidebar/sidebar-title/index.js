import View from '../../../view.js';

export default class SidebarTitle extends View {
  constructor() {
    super();
    this.element = this.createElement('h3');
    this.className = 'sidebar__title';
    this.content = 'News Sources filter';

    this.onInit(this.element, this.className, this.content);
  }
}
