function cod_setIframe() {
  let selected = document.getElementById("fig_select");
  let selectionID = selected.options[selected.selectedIndex].id;
  let selection = document.getElementById("fig_select").value;
  document.getElementById("figure-display").src = selection;
  buttons = document.querySelector('#buttonBlock')
  switch(selectionID) {
    case 'figure3':
      buttons.style.display = 'flex';
      let subButtons = document.querySelectorAll("button.cod-sub-button");
      subButtons.forEach(function(button) {
        button.classList.remove('activeButton')
      });
      document.querySelector('button.cod-sub-button').classList.add('activeButton');
      break;
    default:
      buttons.style.display = 'none';
  }
}

function subButtonSetIframe(clickedButton) {
    var subButtons = document.querySelectorAll("button.cod-sub-button");
    subButtons.forEach(function(button) {
      button.classList.remove('activeButton')
    });
    clickedButton.classList.add('activeButton');
    document.getElementById("figure-display").src = clickedButton.value;
}

function openPanel() {
    var panel = document.getElementById("panel");
    var acc = document.getElementsByClassName("accordion")[0]
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    acc.classList.toggle("active");
    /* Toggle between hiding and showing the active panel */
    if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
}

