const reminderIcon = document.querySelector('.mdi-account-clock');
const reminderDateTimeInput = document.querySelector('#apply_reminder_occurs_on').nextSibling

reminderIcon.click();
reminderDateTimeInput.removeAttribute('readonly')
