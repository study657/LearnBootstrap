var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));

var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
});

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar-example'
});

var toastElList = [].slice.call(document.querySelectorAll('.toast'));

var toastList = toastElList.map(function (toastEl) {
  return new bootstrap.Toast(toastEl, option)
});