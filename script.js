let count = 0;
function test() {
  if (count % 2 == 0) {
    document.getElementById("test").innerHTML = "JS";
    document.getElementById("test").id = "test2";
  }
  else {
    document.getElementById("test2").innerHTML = "Test";
    document.getElementById("test2").id = "test";
  }

  count++;

  console.log(count);
}

let tempId = '';
let selected = '';

function numberSelected(id) {
  if (selected != '' && selected != id) {
    for (let i = 1; i <= 5; i++) {
      if (i != id) {
        var button = document.getElementById(`btn-${i}`);
        button.style.backgroundColor = "hsl(213, 19%, 18%)";
        /* Clear all previous hover classes */
        button.classList.remove('HoverClass1', 'HoverClass2');
        /* Set the desired hover class */
        button.classList.add('HoverClass1');
      }
    }
  }
  else if (selected == id) {
    document.getElementById(id).style.backgroundColor = "hsl(213, 19%, 18%)";
    selected = '';
    console.log(selected);
    /* Clear all previous hover classes */
    document.getElementById(id).classList.remove('HoverClass1', 'HoverClass2');
    /* Set the desired hover class */
    document.getElementById(id).classList.add('HoverClass1');
    return;
  }

  document.getElementById(id).style.backgroundColor = "hsl(216, 12%, 54%)";
  selected = id;
  console.log(selected);

  document.getElementById(id).classList.remove('HoverClass1', 'HoverClass2');

}