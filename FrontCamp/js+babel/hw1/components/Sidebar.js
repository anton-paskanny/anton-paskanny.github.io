class Sidebar {
  constructor() {
    this.sidebar = this.createComponent();
    this.sidebarTitle = this.createTitle();
  }
  createComponent() {
    return document.createElement('aside');
  }
  createTitle() {
    return document.createElement('h3');
  }
  getComponent() {
    return this.sidebar;
  }
  build(component) {
    this.sidebar.className = 'sidebar';
    this.sidebarTitle.className = 'sidebar__title';
    this.sidebarTitle.textContent = 'News Source filter';

    this.sidebar.append(this.sidebarTitle);
    this.sidebar.append(component);

    return this;
  }
  changeSidebarView() {
    this.sidebar.classList.contains('sidebar--opened') ? this.sidebar.classList.remove('sidebar--opened') : this.sidebar.classList.add('sidebar--opened');
  }
}
