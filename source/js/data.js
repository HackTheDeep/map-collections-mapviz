//data magically comes in from wherever it does.
var data = [{name: 'thing 1', type: 'mammal'},
{name: 'Ornithurae', type: 'bird'},
{name: 'Squamata', type: 'reptile'},
{name: 'thing', type: 'invertebrate'},
{name: 'Chordata', type: 'fish'}];

var rangeStart = 1880;
var rangeEnd = rangeStart + 9;
var ocean = 70;

var dataBox = document.getElementById('dataBody');

data.forEach(function(elem){
  var newElem = document.createElement('li');
  newElem.innerHTML = elem.name;
  newElem.className = elem.type;
  dataBox.appendChild(newElem);
});

var dataTitle = document.getElementById('dataTitle');

var dateRange = document.createElement('p');
dateRange.innerHTML = 'Date range: ' + rangeStart + '-' + rangeEnd;
dataTitle.appendChild(dateRange);

var oceanTemp = document.createElement('p');
oceanTemp.innerHTML = 'Ave. Ocean Temperature: ' + ocean;
dataTitle.appendChild(oceanTemp);
