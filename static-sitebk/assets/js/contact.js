/* ============================================
   CONTACT.JS — Form validation and submission
   ============================================ */

(function () {
  'use strict';

  // ── DOM References ──
  var form = document.getElementById('contactForm');
  var submitBtn = document.getElementById('submitBtn');
  var successPanel = document.getElementById('contactSuccess');
  var resetBtn = document.getElementById('resetBtn');

  // Guard: if the form isn't on the page, do nothing
  if (!form || !submitBtn) return;

  // ── Validation helpers ──

  /**
   * Show an error message for a field.
   * @param {HTMLElement} input  - the input/textarea element
   * @param {string}      message - error text (empty string clears the error)
   */
  function setError(input, message) {
    var errorEl = form.querySelector('[data-error-for="' + input.name + '"]');
    if (errorEl) {
      errorEl.textContent = message || '';
      if (message) {
        errorEl.classList.add('visible');
      } else {
        errorEl.classList.remove('visible');
      }
    }
    if (message) {
      input.classList.add('invalid');
      input.setAttribute('aria-invalid', 'true');
    } else {
      input.classList.remove('invalid');
      input.removeAttribute('aria-invalid');
    }
  }

  /**
   * Basic email format check — matches the common pattern
   * `local-part@domain.tld` without being overly strict.
   * @param {string} value
   * @returns {boolean}
   */
  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  /**
   * Validate a single field, returning the error message (or empty string).
   * @param {HTMLElement} input
   * @returns {string}
   */
  function validateField(input) {
    var value = (input.value || '').trim();

    // Required check
    if (input.hasAttribute('required') && !value) {
      return 'This field is required.';
    }

    // Email format check
    if (input.type === 'email' && value && !isValidEmail(value)) {
      return 'Please enter a valid email address.';
    }

    return '';
  }

  /**
   * Validate the entire form.
   * @returns {boolean} true if all fields pass
   */
  function validateForm() {
    var fields = form.querySelectorAll('input[required], textarea[required]');
    var allValid = true;
    var firstInvalid = null;

    fields.forEach(function (input) {
      var error = validateField(input);
      setError(input, error);
      if (error) {
        allValid = false;
        if (!firstInvalid) firstInvalid = input;
      }
    });

    if (firstInvalid) {
      firstInvalid.focus();
    }

    return allValid;
  }

  // ── Event: live-clear errors on input ──
  form.querySelectorAll('input, textarea').forEach(function (input) {
    input.addEventListener('input', function () {
      // Only clear the error if the field is now valid (don't re-show on every keystroke)
      if (input.classList.contains('invalid')) {
        var error = validateField(input);
        if (!error) {
          setError(input, '');
        }
      }
    });

    // Also validate on blur for immediate feedback
    input.addEventListener('blur', function () {
      if (input.hasAttribute('required') || input.type === 'email') {
        var error = validateField(input);
        if (error) {
          setError(input, error);
        } else {
          setError(input, '');
        }
      }
    });
  });

  // ── Event: form submit ──
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Disable the button and show a loading state
    submitBtn.disabled = true;
    var btnLabel = submitBtn.querySelector('span:nth-child(2)');
    var originalText = btnLabel ? btnLabel.textContent : '';
    if (btnLabel) btnLabel.textContent = 'Sending...';

    // Simulate a network request (static site — no backend)
    setTimeout(function () {
      // Hide the form, show the success panel
      form.style.display = 'none';
      if (successPanel) {
        successPanel.style.display = 'flex';
      }

      // Reset button state
      submitBtn.disabled = false;
      if (btnLabel) btnLabel.textContent = originalText;
    }, 800);
  });

  // ── Event: reset / send another message ──
  if (resetBtn) {
    resetBtn.addEventListener('click', function () {
      // Clear all fields
      form.reset();
      // Clear all errors
      form.querySelectorAll('.form-error').forEach(function (el) {
        el.classList.remove('visible');
        el.textContent = '';
      });
      form.querySelectorAll('.form-input').forEach(function (el) {
        el.classList.remove('invalid');
        el.removeAttribute('aria-invalid');
      });
      // Show the form again, hide success panel
      form.style.display = '';
      if (successPanel) {
        successPanel.style.display = 'none';
      }
    });
  }
})();
