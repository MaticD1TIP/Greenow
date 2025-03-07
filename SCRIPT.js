const hamMenu = document.querySelector('.HAM_MENU');

const offScreenMenu = document.querySelector('.OFF_SCREEN_MENU');

hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
})



document.getElementById('searchInput').addEventListener('keyup', function() {
  let query = this.value.toLowerCase();

  let tipsContent = document.querySelectorAll('.TIPS_LEFT p, .TIPS_RIGHT p');

  tipsContent.forEach(p => {
    p.innerHTML = p.textContent;
  });

  if (query.length > 0) {
    let found = false;
    tipsContent.forEach(p => {
      let text = p.textContent.toLowerCase();
      let highlightedText = text.replace(new RegExp('(' + query + ')', 'gi'), '<span class="highlight">$1</span>');

      p.innerHTML = highlightedText;

      if (!found && highlightedText !== text) {
        found = true;
        p.scrollIntoView({ behavior: 'instant', block: 'center' });
      }
    });
  }
});



const goUpButton = document.getElementById("goUpButton");

goUpButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'instant'
  })
})