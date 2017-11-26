class ToggleBtnClass {
  constructor() {
    this.toggleBtn = document.createElement('button');
  }
  getComponent() {
    this.toggleBtn.className = 'toggle-btn';
    this.toggleBtn.innerHTML = '<span class="toggle-btn__line"></span>'.repeat(3);

    return this.toggleBtn;
  }
  initToggleBtnHandler(sidebar) {
    this.toggleBtn.addEventListener('click', () => {
      sidebar.classList.contains('sidebar--opened') ? sidebar.classList.remove('sidebar--opened') : sidebar.classList.add('sidebar--opened')
    });
  }
}
