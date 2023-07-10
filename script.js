let selected = '';

function numberSelected(id) {
  if (selected != '' && selected != id) {
    for (let i = 1; i <= 5; i++) {
      if (i != id) {
        var button = document.getElementById(`btn-${i}`);
        button.style.backgroundColor = "hsl(213, 19%, 18%)";
        button.style.color = 
        "hsl(216, 12%, 54%)";

        button.classList.remove('HoverClass1', 'HoverClass2');

        button.classList.add('HoverClass1');
      }
    }
  }
  else if (selected == id) {
    document.getElementById(id).style.backgroundColor = "hsl(213, 19%, 18%)";
    document.getElementById(id).style.color = 
        "hsl(216, 12%, 54%)";
    selected = '';
    console.log(selected);

    document.getElementById(id).classList.remove('HoverClass1', 'HoverClass2');

    document.getElementById(id).classList.add('HoverClass1');
    return;
  }

  document.getElementById(id).style.backgroundColor = "hsl(216, 12%, 54%)";
  document.getElementById(id).style.color = "white";
  selected = id;
  console.log(selected);

  document.getElementById(id).classList.remove('HoverClass1', 'HoverClass2');

}

function submit() {
  let elem = document.getElementById("card-start");
  let userScore = selected.slice(-1);

  if (selected != "") {
    elem.parentNode.removeChild(elem);
    document.getElementById("card-end").style.visibility = "visible";
    document.getElementById("score").innerHTML = `You selected ${userScore} out of 5`;
  }
  else {
    console.log("no rating");
  }
  
}