/**
 * Valentina Precious — Corporate Enquiries Form Handler
 * contact-form.js: Form validation, spam honeypot, accessible feedback & submission handling
 */

(function () {
  'use strict';

  // Configurable production endpoint (leave empty for static corporate site until configured)
  var FORM_ACTION = '';

  var form = document.getElementById('f');
  var statusEl = document.getElementById('st');
  var submitBtn = form ? form.querySelector('button[type="submit"]') : null;

  if (!form) return;

  /**
   * Helper to set validation message and aria attributes
   */
  function setFieldValidation(fieldId, isValid, errorMessage) {
    var field = document.getElementById(fieldId);
    var errorEl = document.getElementById('e-' + fieldId);

    if (errorEl) {
      errorEl.textContent = isValid ? '' : errorMessage;
    }

    if (field) {
      if (isValid) {
        field.removeAttribute('aria-invalid');
      } else {
        field.setAttribute('aria-invalid', 'true');
        field.setAttribute('aria-describedby', 'e-' + fieldId);
      }
    }

    return isValid;
  }

  /**
   * Real-time input clear on typing
   */
  ['n', 'e', 't', 'm'].forEach(function (id) {
    var input = document.getElementById(id);
    if (!input) return;
    input.addEventListener('input', function () {
      var errorEl = document.getElementById('e-' + id);
      if (errorEl && errorEl.textContent) {
        errorEl.textContent = '';
        input.removeAttribute('aria-invalid');
      }
    });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var nameVal = form.name ? form.name.value.trim() : '';
    var emailVal = form.email ? form.email.value.trim() : '';
    var typeVal = form.type ? form.type.value : '';
    var messageVal = form.message ? form.message.value.trim() : '';
    var honeypotVal = form.website ? form.website.value : '';

    // Spam honeypot detection
    if (honeypotVal) {
      // Silently ignore spam bots
      return;
    }

    var isNameValid = setFieldValidation(
      'n',
      nameVal.length >= 2,
      'Please enter your full name.'
    );

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var isEmailValid = setFieldValidation(
      'e',
      emailPattern.test(emailVal),
      'Please enter a valid business email address.'
    );

    var isTypeValid = setFieldValidation(
      't',
      typeVal !== '',
      'Please choose an enquiry type.'
    );

    var isMessageValid = setFieldValidation(
      'm',
      messageVal.length >= 10,
      'Please provide an enquiry message of at least 10 characters.'
    );

    var isValid = isNameValid && isEmailValid && isTypeValid && isMessageValid;

    if (!isValid) {
      // Focus first invalid element
      var firstInvalid = form.querySelector('[aria-invalid="true"]');
      if (firstInvalid) {
        firstInvalid.focus();
      }
      return;
    }

    // Display truthful feedback
    if (!statusEl) return;
    statusEl.hidden = false;

    if (!FORM_ACTION) {
      statusEl.className = 'form-status';
      statusEl.textContent =
        'Enquiry form submission endpoint is pending backend configuration. Your message has not been transmitted. For immediate enquiries, please visit valentinaprecious.com or our official social profiles.';
      return;
    }

    // Live endpoint submission
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Transmitting…';
    }

    statusEl.className = 'form-status';
    statusEl.textContent = 'Sending your enquiry…';

    fetch(FORM_ACTION, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    })
      .then(function (res) {
        if (res.ok) {
          statusEl.textContent = 'Thank you. Your corporate enquiry has been received.';
          form.reset();
        } else {
          statusEl.textContent =
            'Sorry, sending failed. Please reach out via our official social channels or try again later.';
        }
      })
      .catch(function () {
        statusEl.textContent =
          'Network error: unable to send enquiry. Please check your connection or contact us directly.';
      })
      .finally(function () {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Send enquiry';
        }
      });
  });
})();
