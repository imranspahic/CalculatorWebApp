

    //Global Variables Declaration
      var canvas = document.getElementById('graphCanvas'),
        c = canvas.getContext('2d'),
        n=1000,
        xMin = -50,
        xMax = 50,
        yMin = -50,
        yMax = 50,

        math = mathjs(),
        expr = "sin(x)*x",
        scope = {
          x:7
        },
        tree = math.parse(expr,scope);





        //math js variables

    drawCoordinates();
    drawGraph();
    initTextField();


    function drawCoordinates() {
      //canvas is width 800   heigh 670
      var canvas = document.getElementById('graphCanvas_coordinates'),
        c = canvas.getContext('2d');
      c.beginPath();
      c.moveTo(400,0);
      c.lineTo(400,675);
      c.strokeStyle = "#75706f";

      c.stroke();

      c.beginPath();
      c.moveTo(0,337);
      c.lineTo(800,337);
      c.stroke();


    }


    function drawGraph() {
      //Local variables used inside this loop
      var i,x,y,
      //varies between 0 and 1
          percentX, percentY,
      //Math coordinates
          mathX,mathY;

      c.clearRect(0,0,canvas.width,canvas.height);

      c.beginPath();
      for(i=0; i<n; i++) {

        percentX = i/(n-1);
        mathX = percentX *(xMax-xMin) + xMin;

        mathY = evaluate(mathX);

        percentY = (mathY - yMin) / (yMax-yMin);
        percentY= 1-percentY;
        x=percentX*canvas.width;
        y=percentY*canvas.height;


        c.lineTo(x,y);

      }
        c.strokeStyle = "#fc0f03";
      c.stroke();

    }

    function evaluate(mathX) {
      scope.x = mathX;
      return tree.eval();
    }

    function initTextField() {
      var input = $('#canvasInput');
      input.val(expr);

      input.keyup(function(event) {
        expr = input.val();
       tree = math.parse(expr,scope);
        drawGraph();
      })

    }







 var dekstop_menu = document.getElementById('header_icon');
 dekstop_menu.addEventListener('click', function(){
 dekstopmenu();

 })

 function dekstopmenu() {
 document.getElementById("dekstop_menu").classList.toggle("show");
 }

 window.onclick = function(event) {
   if (!event.target.matches('#header_icon')) {
     var dropdowns = document.getElementsByClassName("dekstop_menu-content");
     var i;
     for (i = 0; i < dropdowns.length; i++) {
       var openDropdown = dropdowns[i];
       if (openDropdown.classList.contains('show')) {
         openDropdown.classList.remove('show');
       }
     }
   }
 }
