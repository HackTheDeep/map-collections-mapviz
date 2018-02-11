//data magically comes in from wherever it does.
                            
var data = [
{name: 'Cymatiidae Cymatiidae biplex', type: 'invertebrate', year: 1852},
{name: 'Mytiloidae Perna viridis', type: 'invertebrate', year: 1758},
{name: 'Arcidae Arca crenata', type: 'invertebrate', year: null},
{name: 'Megapodiidae Megapodius eremita', type: 'bird'},
{name: 'Ursidae Ursus maritimus', type: 'mammal'},
{name: 'Hydrophus Torquatus diadema', type: 'reptile'},

var rangeStart = 1700;
var rangeEnd = rangeStart + 9;
var ocean = 70;

//updates text & location of slider year
var updateSelectedYear = function(year, percent) {
  var yearLabel = document.getElementById('selectedDecade');
  yearLabel.innerHTML = year;
  if (percent >= 75) percent -= 2;
  else if (percent >= 30) percent -= 1;
  yearLabel.style.marginLeft = percent + '%';
}

// init set up for slider
var setUpSlider = function(){
  var slider = document.getElementsByClassName('slidecontainer')[0];
  var numTicks = Math.ceil((new Date().getFullYear() - rangeStart)/10);
  var dataList = document.createElement('datalist');

  for(var i = 0; i < numTicks; i++) {
    var tick = document.createElement('option');
    var year = rangeStart + (10 * i)
    tick.value = year;
    dataList.appendChild(tick);
  }

  slider.appendChild(dataList);

  updateSelectedYear(1750, 0);
}

// init set up for data box
var setUpDataBox = function() {
  var dataBox = document.getElementById('dataBody');

  data.forEach(function(elem){
    var newElem = document.createElement('li');
    newElem.innerHTML = elem.name;
    newElem.className = elem.type;
    dataBox.appendChild(newElem);
  });

  var dataTitle = document.getElementById('dataTitle');

  var dateRange = document.createElement('p');
  dateRange.innerHTML = 'Date range: ' + 1750 + '-' + 1759;
  dataTitle.appendChild(dateRange);

  var oceanTemp = document.createElement('p');
  oceanTemp.innerHTML = 'Ave. Ocean Temperature: ' + ocean;
  dataTitle.appendChild(oceanTemp);
}

setUpSlider();
setUpDataBox();

document.getElementById('decadePicker').addEventListener('change', function(e){
  var selectedYear = rangeStart + +e.target.value;
  updateSelectedYear(selectedYear, e.target.value);
})


