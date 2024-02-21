function controlTraffic(color){
   let red = document.getElementById('r');
   let yellow = document.getElementById('y');
   let green = document.getElementById('g');

   if(color == 'red'){
      red.style.backgroundColor = 'red';
      red.style.opacity = 1;
      green.style.opacity = 0.3;
      yellow.style.opacity = 0.3;
      red.style.boxShadow = '0px 0px 200px red, 0px 0px 200px red';
      green.style.boxShadow = 'none';
      yellow.style.boxShadow = 'none';
   }
   else if(color == 'yellow'){
      yellow.style.backgroundColor = 'yellow';
      yellow.style.opacity = 1;
      red.style.opacity = 0.3;
      green.style.opacity = 0.3;
      yellow.style.boxShadow = '0px 0px 200px yellow, 0px 0px 200px yellow';
      green.style.boxShadow = 'none';
      red.style.boxShadow = 'none';
   }

   else if(color == 'green'){
      green.style.backgroundColor = 'green';
      green.style.opacity = 1;
      red.style.opacity = 0.3;
      yellow.style.opacity = 0.3;
      green.style.boxShadow = '0px 0px 200px green, 0px 0px 200px green';
      red.style.boxShadow = 'none';
      yellow.style.boxShadow = 'none';
   }
   
}




            