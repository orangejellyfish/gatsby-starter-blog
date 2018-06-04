/* eslint-env browser */

// This script is adapted from the Netlify CMS documentation (see
// https://www.netlifycms.org/docs/add-to-your-site/#authentication). It
// performs a client-side redirect to the Netlify CMS admin page when a Netlify
// "login" event is dispatched.

if (window.netlifyIdentity) {
  window.netlifyIdentity.on('init', (user) => {
    if (!user) {
      window.netlifyIdentity.on('login', () => {
        document.location.href = '/admin/';
      });
    }
  });
}
