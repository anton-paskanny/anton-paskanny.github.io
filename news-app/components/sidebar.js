class Sidebar {
  getComponent(filter) {
    const sidebar = document.createElement('aside'),
          sidebarTitle = document.createElement('h3')

    sidebar.className = 'sidebar';
    sidebarTitle.className = 'sidebar__title';

    sidebarTitle.textContent = 'News Source filter';

    sidebar.append(sidebarTitle);
    sidebar.append(filter);

    return sidebar;
  }
}
