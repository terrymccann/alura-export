function modifyElements() {
    const similarKeywordsDiv = document.getElementById('similar-keywords');
    const keywordListingsDiv = document.getElementById('keyword-listings');
  
    [similarKeywordsDiv, keywordListingsDiv].forEach(div => {
      if (div) {
        const button = div.querySelector('.pixell-button-secondary_gray-md-leading-');
        if (button) {
          button.removeAttribute('disabled');
          button.setAttribute('id', 'export-selected-data');
        }
      }
    });
  }
  
  // Function to observe DOM changes
  function observeDOM() {
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.addedNodes.length > 0) {
          modifyElements();
        }
      });
    });
  
    observer.observe(document.body, { childList: true, subtree: true });
  }
  
  // Check if the document is already loaded
  if (document.readyState === "loading") {
    document.addEventListener('DOMContentLoaded', () => {
      modifyElements();
      observeDOM();
    });
  } else {
    modifyElements();
    observeDOM();
  }
  