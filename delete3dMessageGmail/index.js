let i = 0;
document.querySelectorAll('.zA').forEach((e) => {  
  i++;
  if(i % 3 == 0){
    e.remove();
  }
})