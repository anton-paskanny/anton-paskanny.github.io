import View from '../../../core/view.js';

export default class SidebarTitle extends View {
  constructor() {
    super({
      selector: 'h3',
      className: 'sidebar__title',
      content: 'News Sources filter'
    });
  }
}
