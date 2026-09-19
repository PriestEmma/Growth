// FAQ  Accordion
document.addEventListener('DOMContentLoaded', () => {
  const faqContainer = document.querySelector('.faq-content');

  faqContainer.addEventListener('click', (e) => {
    const groupHeader = e.target.closest('.faq-group-header');

    if (!groupHeader) return;

    const group = groupHeader.parentElement;
    const groupBody = group.querySelector('.faq-group-body');
    const icon = groupHeader.querySelector('i');

    //   Toggle icon
    icon.classList.toggle('fa-minus');
    icon.classList.toggle('fa-plus');

    // Toggle Visiblilty of body
    groupBody.classList.toggle('open');

    // close other open FAQ bodies
    const otherGroups = faqContainer.querySelectorAll('.faq-group');

    otherGroups.forEach((otherGroup) => {
      if (otherGroup !== group) {
        const otherGroupBody = otherGroup.querySelector('.faq-group-body');
        const otherIcon = otherGroup.querySelector('.faq-group-header i');

        otherGroupBody.classList.remove('open');
        otherIcon.classList.remove('fa-minus');
        otherIcon.classList.add('fa-plus');
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const mediaQuery = window.matchMedia('(width < 700px)');
  const mobileMenu = document.querySelector('.mobile-menu');

  mediaQuery.addEventListener('change', updateNavbar);
  updateNavbar(mediaQuery);

  function updateNavbar(e) {
    const isMobile = e.matches;

    if (isMobile === false) {
      mobileMenu.setAttribute('inert', '');
    } else {
      mobileMenu.removeAttribute('inert');
    }
  }

  // Hamburger button
  const openButton = document.getElementById('hamburger-button');
  const closeButton = document.querySelector('.close-btn');
  const overlay = document.getElementById('overlay');

  function openSideBar() {
    const menu = document.querySelector('.mobile-menu');
    menu.classList.add('active');

    // Accessibility
    mobileMenu.removeAttribute('inert');
  }

  function closeSideBar() {
    const menu = document.querySelector('.mobile-menu');
    menu.classList.remove('active');

    // Accessibility

    mobileMenu.setAttribute('inert', '');
  }

  overlay.addEventListener('click', closeSideBar);

  closeButton.addEventListener('click', closeSideBar);
  openButton.addEventListener('click', openSideBar);
});
