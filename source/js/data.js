//data magically comes in from wherever it does.
var data = [{name: 'thing 1', type: 'mammal'},
{name: 'thing 2', type: 'bird'},
{name: 'thing 3', type: 'mammal'},
{name: 'thing 4', type: 'reptile'},
{name: 'thing 5', type: 'invertebrate'},
{name: 'thing 6', type: 'fish'}];

var dataBox = document.getElementById('dataBody');

data.forEach(function(elem){
  var newElem = document.createElement('li');
  newElem.innerHTML = elem.name;
  newElem.className = elem.type;
  dataBox.appendChild(newElem);
});