//getting data from API
function readData(file, callback) {
    let rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

readData("https://api.suspilne.media/api.php", function(text){
  let data = JSON.parse(text);
  console.log(data);
  showData(data);
});

// setting data into HTML blocks
function showData(data){
  let out = '', inWork = '', done = '', tmp = '';
  for(let key in data){
    tmp = ` 
  <div class="user">
    <p >${data[key].todo}</p>
    <div class="user__info">
        <div class = 'person__data'>
          <img src="${data[key].image}" alt="${data[key].name}">
          <p class="name">${data[key].name}</p> 
        </div>
        <div class = 'date__data'> 
          <i class="fa fa-clock-o" aria-hidden="true"></i>
          <span class="date">${data[key].date}</span>
        </div>
    </div>
</div>
    `;
    out += tmp;
    data[key].done ? done += tmp : inWork += tmp;
  }

  document.getElementById('first').innerHTML = out;
  document.getElementById('second').innerHTML = inWork;
  document.getElementById('third').innerHTML = done; 
}