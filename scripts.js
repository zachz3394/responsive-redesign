function expandAndScrollIn(toExpand, toScroll) {
  if (!(toExpand === '')) {
    const collapsible = document.getElementById(toExpand);
    try {
      const scroll = () => {scrollIn(toScroll)};
      collapsible.addEventListener('shown.bs.collapse', scroll, { once: true });
      collapsible.addEventListener('hidden.bs.collapse', () => {
        collapsible.removeEventListener('shown.bs.collapse', scroll);
      });
      bootstrap.Collapse.getInstance(collapsible).show();
    } catch (e) {
      scrollIn(toScroll);
    }
  }
  scrollIn(toScroll);
}

function scrollIn(id) {
  document.getElementById(id).scrollIntoView({
    behavior: 'auto',
  })
}

function updateTableOfContentsHighlight() {
  const scroll = $(document).scrollTop();
  let highlight_id = null;
  $('h1, h2, h3, h4, h5, h6').each((_, header) => {
    const current_element = header;
    const toc_id = '#toc_' + $(current_element).attr('id');
    const elem_ypos = $(current_element).offset().top;
    if (elem_ypos < scroll + 108) {
      highlight_id = toc_id;
    }
    if ($(toc_id).length > 0) {
      $(toc_id).removeClass('active');
    }
  });
  // only highlight *last* element that is above the window's scroll position.
  if ($(highlight_id).length > 0) {
    $(highlight_id).addClass('active');
  }
}

window.onscroll = function() {updateTableOfContentsHighlight()};

function hideAdBanner() {
  document.getElementById('banner').hidden = true;
}

window.outlineOpen = false;

function toggleOutline() {
  window.outlineOpen = !window.outlineOpen;
  if (outlineOpen) {
    document.getElementById('outline-container').style.display = 'flex';
  } else {
    document.getElementById('outline-container').style.display = 'none';
  }
}