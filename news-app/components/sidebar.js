class SidebarClass {
  generateTemplate(filter) {
    const Sidebar = document.createElement('aside');

    Sidebar.className = 'sidebar';
    Sidebar.append(filter);

    return Sidebar;
  }
}
