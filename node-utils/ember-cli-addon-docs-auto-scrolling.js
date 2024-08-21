module.exports = `
<script>
  function updateHashOnScroll() {
    const anchors = Array.from(
      document.querySelectorAll('.heading-anchor'),
    );
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight)
      );
    }

    function onScroll() {
      for (const anchor of anchors) {
        if (isElementInViewport(anchor)) {
          const hash = anchor.getAttribute('href');
          if (history.pushState) {
            history.pushState(null, null, hash);
          } else {
            location.hash = hash;
          }
          break;
        }
      }
    }

    window.onscroll = function () {
      onScroll();
    };
  }

  function setInitialScrollPosition() {
    let attempts = 0;
    function clickHash(hash) {
      if (!hash) {
        return;
      }
      attempts++;
      if (attempts > 10) {
        console.warn(
          'Element with class docs-md not found, auto scroll to hash on load failed.',
        );
        return;
      }
      if (!document.querySelector('.docs-md')) {
        setTimeout(() => {
          clickHash(hash);
        }, 500);
        return;
      }
      const anchors = Array.from(document.querySelectorAll('a'));
      anchors.forEach((anchor) => {
        if (anchor.href.split('#')[1] === hash) {
          anchor.click();
        }
      });
      updateHashOnScroll();
    }
    clickHash(window.location.hash.substring(1));
  }
  document.addEventListener('DOMContentLoaded', function () {
    setInitialScrollPosition();
  });
</script>`;
