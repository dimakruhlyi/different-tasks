function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
  }
  readTextFile("/different-tasks/cassa_mockup/js/data/data.json", function(text){ // for local usage use path "../js/data/data.json"
    let data = JSON.parse(text);
    showGoods(data);
    displayCounters(data);
  });
  
  function showGoods(goods){
    let out = '';
    for(let key in goods){
      out+=`
      <div class=" flex-item" id = "${goods[key].name}">
      <h2>${goods[key].name}</h2>
      <img src="img/${goods[key].img}" width="140px" height="240px" alt="${goods[key].alt}">
      <div class="bottom__part">
          <p class="discount">oferta limitata${goods[key].discount}</p>
          <div class="price">
              <p class="new__price">$${goods[key].new__price}<span class="old__price">${goods[key].old__price}$</span></p>
          </div>
          
          <div class="buy__items">
          <a href = "${goods[key].count__block__id}" onclick = "openbox('${goods[key].count__block__id}'); return false">
              <div class="buy__count" id = "${goods[key].count__id}">
                  ${goods[key].initial__count} <i class="fa fa-sort-desc" aria-hidden="true"></i>  
                </div>
            </a>
              <div class="buy__basket">
                  <i class="fa fa-shopping-cart" aria-hidden="true"></i>
              </div>
          </div>
          <div class = "${goods[key].count__block__id}" id="${goods[key].count__block__id}" style = 'display:none'></div>
      </div>  
  </div>
      `;
    }
    
    let controls = `
    <div class="dots">
        <span class="dot" onclick="currentSlide(1)"></span> 
        <span class="dot" onclick="currentSlide(2)"></span> 
        <span class="dot" onclick="currentSlide(3)"></span> 
        <span class="dot" onclick="currentSlide(4)"></span>
    </div>
    <img src="img/doska.png" width="100%" alt="doska" class="doska">

    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
    <a class="next" onclick="plusSlides(1)">&#10095;</a>
    `;
    document.getElementById('data-container').innerHTML = out;
    document.getElementById('data-container').innerHTML += controls;
  }

function openbox(box){
    display = document.getElementById(`${box}`).style.display;
    if(display == 'none'){
        display = document.getElementById(`${box}`).style.display = 'block';
    }else{
        display = document.getElementById(`${box}`).style.display = 'none';
    }
}

function displayCounters(goods){
    let out = '';
    for(let i = 1; i <= 50; i++){
        out+= `
        <p class="chooseCountBlock__item">${i}</p>
        `;
    }
    for(let key in goods){
        document.getElementById(`${goods[key].count__block__id}`).innerHTML = out;
    }
    
};