const newsletterWindow = document.getElementById('newsletter-window');
const newsletterLauncher = document.querySelector('.newsletter-launcher');

if (typeof newsletterWindow.showModal === 'function') {
  newsletterLauncher.hidden = false;
  newsletterLauncher.addEventListener('click', () => newsletterWindow.showModal());
  newsletterWindow.querySelector('.newsletter-close').addEventListener('click', () => newsletterWindow.close());

  // EmailOctopus redirects here after it accepts a signup.
  const url = new URL(window.location.href);
  if (url.searchParams.get('newsletter') === 'welcome') {
    const title = document.getElementById('newsletter-title');
    const graphic = document.getElementById('newsletter-welcome-graphic');
    graphic.replaceWith(graphic.content.cloneNode(true));
    document.getElementById('newsletter-signup').hidden = true;
    document.getElementById('newsletter-welcome-note').hidden = false;
    title.textContent = 'Thanks for signing up!';
    newsletterWindow.dataset.welcome = '';
    newsletterWindow.showModal();
    title.focus({ preventScroll: true });

    url.searchParams.delete('newsletter');
    window.history.replaceState(window.history.state, '', url);
  }
}
