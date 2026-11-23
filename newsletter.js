const newsletterWindow = document.getElementById('newsletter-window');
const newsletterLauncher = document.querySelector('.newsletter-launcher');
const newsletterForm = newsletterWindow.querySelector('.newsletter-form');
const newsletterUsername = newsletterForm.dataset.buttondownNewsletter.trim();

// Buttondown's public newsletter username enables the standard embedded form.
if (/^[a-z0-9][a-z0-9_-]*$/i.test(newsletterUsername)) {
  newsletterForm.action = `https://buttondown.com/api/emails/embed-subscribe/${encodeURIComponent(newsletterUsername)}`;
  newsletterForm.querySelector('fieldset').disabled = false;
  newsletterWindow.querySelector('.newsletter-pending').hidden = true;
  newsletterWindow.querySelector('.newsletter-connected').hidden = false;
}

if (typeof newsletterWindow.showModal === 'function') {
  newsletterLauncher.hidden = false;
  newsletterLauncher.addEventListener('click', () => newsletterWindow.showModal());
  newsletterWindow.querySelector('.newsletter-close').addEventListener('click', () => newsletterWindow.close());
}
