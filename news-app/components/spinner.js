class SpinnerClass {
  getComponent() {
    const spinner = document.createElement('div');

    spinner.className = 'spinner';

    spinner.innerHTML = '<img src="./img/spinner.svg">';

    return spinner;
  }
  hideSpinner() {
    document.querySelector('.spinner').style.display = none;
  }
}
