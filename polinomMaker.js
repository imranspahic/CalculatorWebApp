const degree2_div = document.getElementById ('Pbutton2');
const degree3_div = document.getElementById ('Pbutton3');
const degree4_div = document.getElementById ('Pbutton4');

const generate_2nd_div = document.getElementById('GenerateButton');
var a_coeff_2nddegree = document.getElementById('a_coeff_2nddegree');
var b_coeff_2nddegree = document.getElementById('b_coeff_2nddegree');
var c_coeff_2nddegree = document.getElementById('c_coeff_2nddegree');


const generate_3rd_div = document.getElementById ('GenerateButton_3rd_degree');
var a_coeff_3rddegree = document.getElementById('a_coeff_3rddegree');
var b_coeff_3rddegree = document.getElementById('b_coeff_3rddegree');
var c_coeff_3rddegree = document.getElementById('c_coeff_3rddegree');
var d_coeff_3rddegree = document.getElementById('d_coeff_3rddegree');




degree2_div.onclick = () => {
  if (degree3_div.className != 'PbuttonNew' && degree4_div.className != 'PbuttonNew') {
      myMove(degree2_div);
      disable(degree3_div,degree4_div);
      loader();

  }
}
degree3_div.onclick = () => {
  if (degree2_div.className != 'PbuttonNew' && degree4_div.className != 'PbuttonNew') {
      myMove(degree3_div);
      disable(degree2_div,degree4_div);
      loader2();
  }


}
degree4_div.onclick = () => {
  if (degree2_div.className != 'PbuttonNew' && degree3_div.className != 'PbuttonNew') {
      myMove(degree4_div);
      disable(degree3_div,degree2_div);
      processPolinom(3);
      loader3();
  }
}

function myMove(element) {

  element.className = 'PbuttonNew';
}
function disable(el1,el2) {

  el1.className = 'PbuttonDis';
  el2.className = 'PbuttonDis';
}

function processPolinom(n) {

  switch (n) {
    case 1:
      var secondDegree = document.getElementById('2nddegree').className = 'DisplayFull';

      break;



    case 2:
      var thirdDegree = document.getElementById('3nddegree').className = 'DisplayFull';


      break;


    case 3:
      var fourthDegree = document.getElementById('4').className = 'DisplayFull';
        //change id when finish in getelement by id

      break;

  }
}

generate_2nd_div.addEventListener('click', function (){
  var a_coeff_2nddegree_value = a_coeff_2nddegree.value;
  var b_coeff_2nddegree_value = b_coeff_2nddegree.value;
  var c_coeff_2nddegree_value = c_coeff_2nddegree.value;
  second_degree_solve (a_coeff_2nddegree_value,b_coeff_2nddegree_value,c_coeff_2nddegree_value);


  obtainValue(a_coeff_2nddegree_value,b_coeff_2nddegree_value,c_coeff_2nddegree_value);
})

function obtainValue(a,b,c) {
  var square = "2";
  if (a==0) { var formula = "Ups! Leading coefficient can't be 0"; showFormula(formula) }
  else if ((a<0 && b<0 && c<0) || (a>0 && b<0 && c<0)) { var formula =   a + "x" + "\u00B2"  + " "  +  b + "x" + " " + c;   showFormula(formula); }
  else if ((a<0 && b<0 && c>0) || (a>0 && b<0 && c>0))  { var formula =   a + "x" + "\u00B2"  + " "  +  b + "x" + " +" + c;   showFormula(formula); }
  else if ((a<0 && b>0 && c<0) || (a>0 && b>0 && c<0)) { var formula =   a + "x" + "\u00B2"  + " + "  +  b + "x" + " " + c;   showFormula(formula); }
  else if ((a<0 && b>0 && c>0) || (a>0 && b>0 && c>0)){ var formula =   a + "x" + "\u00B2"  + " + "  +  b + "x" + " +" + c;   showFormula(formula); }

  else if ((a<0 && b==0 && c>0) || (a>0 && b==0 && c>0)){ var formula =   a + "x" + "\u00B2"   + " + " + c;   showFormula(formula); }
  else if ((a<0 && b==0 && c<0) || (a>0 && b==0 && c<0)){ var formula =   a + "x" + "\u00B2"   + " " + c;   showFormula(formula); }
  else if ((a<0 && b<0 && c==0) || (a>0 && b<0 && c==0)){ var formula =   a + "x" + "\u00B2"  + " "  +  b + "x" ;   showFormula(formula); }
  else if ((a<0 && b>0 && c==0) || (a>0 && b>0 && c==0)){ var formula =   a + "x" + "\u00B2"  + " + "  +  b + "x" ;   showFormula(formula); }

  else if ((a<0 && b==0 && c==0) || (a>0 && b==0 && c==0)){ var formula =   a + "x" + "\u00B2";   showFormula(formula); }


}
function showFormula(formula) {
  var formula_div = document.getElementById('formula_2nd_degree');
  formula_div.innerText = "Formula generated: " + " " + formula;
}

function second_degree_solve(a, b, c) {

    if (((Math.pow(b, 2) - (4 * a * c)) / (2 * a)) <0) { var result = "No real solution"; var result2 = "No real solution";
    var firstroot = document.getElementById ('formula_2nd_degree_solved_first');
    firstroot.innerText = "First root: " +  result;
    var secondroot = document.getElementById ('formula_2nd_degree_solved_second');
    secondroot.innerText = "Second root: " + result2;
  }

    else {
      var result = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
      var result2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
      var firstroot = document.getElementById ('formula_2nd_degree_solved_first');
      firstroot.innerText = "First root: " +  result;
      var secondroot = document.getElementById ('formula_2nd_degree_solved_second');
      secondroot.innerText = "Second root: " + result2;
      if(Number.isInteger(result) && Number.isInteger(result2)) {
        var a_coeff_2nddegree_value = a_coeff_2nddegree.value;
        factorize_second_degree(a_coeff_2nddegree_value,result,result2);
      }
      else {
          var second_degree_factorize = document.getElementById('formula_2nd_degree_factorize');
          second_degree_factorize.innerText ="Factorized form: Unable to factorize!";
      }
    }
}

  function  factorize_second_degree(a,x,y) {
      var second_degree_factorize = document.getElementById('formula_2nd_degree_factorize');
            if (a==1 && x>0 && y>0) {
              var result_factorized =  "(" + "x" +  -x + ")" + "(" + "x" + -y + ")";
            second_degree_factorize.innerText = "Factorized form: " + result_factorized;
            }
            else if (a==1 && x>0 && y<0) {
              var result_factorized =  "(" + "x" + -x + ")" + "(" + "x" + "+" + -y + ")";
            second_degree_factorize.innerText = "Factorized form: " + result_factorized;
            }
            else if (a==1 && x<0 && y>0) {
              var result_factorized =  "(" + "x" + "+" +  -x + ")" + "(" + "x" + -y + ")";
            second_degree_factorize.innerText = "Factorized form: " + result_factorized;
            }
            else if (a==1 && x<0 && y<0) {
              var result_factorized =  "(" + "x" + "+" + -x + ")" + "(" + "x" + "+" +  -y + ")";
            second_degree_factorize.innerText = "Factorized form: " + result_factorized;
            }
            else if ((a>0 || a<0) && x>0 && y>0) {
              var result_factorized = a +  "(" + "x" + -x + ")" + "(" + "x" +  -y + ")";
            second_degree_factorize.innerText = "Factorized form: " + result_factorized;
            }
            else if ((a>0 || a<0) && x>0 && y<0) {
              var result_factorized = a +  "(" + "x" +-x + ")" + "(" + "x" + "+" + -y + ")";
            second_degree_factorize.innerText = "Factorized form: " + result_factorized;
            }
            else if ((a>0 || a<0) && x<0 && y>0) {
              var result_factorized = a +  "(" + "x" + "+" + -x + ")" + "(" + "x" + -y + ")";
            second_degree_factorize.innerText = "Factorized form: " + result_factorized;
            }
            else if ((a>0 || a<0) && x<0 && y<0) {
              var result_factorized = a +  "(" + "x" + "+" + -x + ")" + "(" + "x" + "+" + -y + ")";
            second_degree_factorize.innerText = "Factorized form: " +  result_factorized;
            }

    }

function loader() {

    var loader = document.getElementById('loader');
    loader.className = "loader_display";
    myFunction();

                  var myVar;
              function myFunction() {
              myVar = setTimeout(showPage, 1000);
              }
              function showPage() {
              loader.className="display_none";
              processPolinom(1);
              }



}

function loader2() {
    var loader = document.getElementById('loader');
    loader.className = "loader_display";
    myFunction();

                  var myVar;
              function myFunction() {
              myVar = setTimeout(showPage, 1000);
              }
              function showPage() {
              loader.className="display_none";
              processPolinom(2);
              }

}

function loader3() {
    var loader = document.getElementById('loader');
    loader.className = "loader_display";
    myFunction();
                  var myVar;
              function myFunction() {
              myVar = setTimeout(showPage, 1000);
              }
              function showPage() {
              loader.className="display_none";
              processPolinom(3);
              }
              // DOESNT work because proccess polinom (3) is not created yet
}



// THIRD DEGREE FUNCTIONALITY

generate_3rd_div.addEventListener('click', function(){
  var a = a_coeff_3rddegree.value;
  var b = b_coeff_3rddegree.value;
  var c = c_coeff_3rddegree.value;
  var d = d_coeff_3rddegree.value;



  third_obtainValue(a,b,c,d);
  solve_third_degree(a,b,c,d);

  expandpolinomwrapper();
})

function expandpolinomwrapper() {
  var pol_wrapper_div = document.getElementById('polinomwrapper');
  pol_wrapper_div.className = 'polinom-wrapper-expand';
}

function third_obtainValue(a,b,c,d) {
  var cube = "3";
  var square = "2";
  if (a==0) { var formula = "Ups! Leading coefficient can't be 0"; third_showFormula(formula) }
  else if ((a<0 && b<0 && c<0 && d<0) || (a>0 && b<0 && c<0) && d<0) { var formula =   a + "x" + "\u00B3"  + " "  +  b + "x" + "\u00B2" + c + "x" + d;   third_showFormula(formula); }
  else if ((a<0 && b<0 && c<0 && d>0) || (a>0 && b<0 && c<0) && d>0) { var formula =   a + "x" + "\u00B3"  + " "  +  b + "x" + "\u00B2" + c + "x" + "+" + d;   third_showFormula(formula); }

  else if ((a<0 && b<0 && c>0 && d<0) || (a>0 && b<0 && c>0 && d<0))  { var formula =   a + "x" + "\u00B3"  + " "  +  b + "x" + "\u00B2" +  " +" + c + "x" + d;   third_showFormula(formula); }
  else if ((a<0 && b<0 && c>0 && d>0) || (a>0 && b<0 && c>0 && d>0))  { var formula =   a + "x" + "\u00B3"  + " "  +  b + "x" + "\u00B2" +  " +" + c + "x" + "+" + d;   third_showFormula(formula); }

  else if ((a<0 && b>0 && c<0 && d<0) || (a>0 && b>0 && c<0 && d<0)) { var formula =   a + "x" + "\u00B3"  + " + "  +  b + "x" + "\u00B2" +  c + "x" + d;   third_showFormula(formula); }
  else if ((a<0 && b>0 && c<0 && d>0) || (a>0 && b>0 && c<0 && d>0)) { var formula =   a + "x" + "\u00B3"  + " + "  +  b + "x" + "\u00B2" +  c + "x" + "+" + d;   third_showFormula(formula); }

  else if ((a<0 && b>0 && c>0  && d<0) || (a>0 && b>0 && c>0 && d<0)){ var formula =   a + "x" + "\u00B3"  + " + "  +  b + "x" + "\u00B2" + " +" + c + "x" + d;   third_showFormula(formula); }
  else if ((a<0 && b>0 && c>0 && d>0) || (a>0 && b>0 && c>0 && d>0)){ var formula =   a + "x" + "\u00B3"  + " + "  +  b + "x" + "\u00B2" + "+" + c + "x" + "+" + d;   third_showFormula(formula); }

  else if ((a<0 && b==0 && c>0 && d<0) || (a>0 && b==0 && c>0 && d<0)){ var formula =   a + "x" + "\u00B3"   + " + " + c + "x" + d;   third_showFormula(formula); }
  else if ((a<0 && b==0 && c>0 && d>0) || (a>0 && b==0 && c>0 && d>0)){ var formula =   a + "x" + "\u00B3"   + " + " + c + "x" + "+" + d;   third_showFormula(formula); }

  else if ((a<0 && b==0 && c<0 && d<0) || (a>0 && b==0 && c<0 && d<0)){ var formula =   a + "x" + "\u00B3"   + " " + c + "x" + d;   third_showFormula(formula); }
  else if ((a<0 && b==0 && c<0 && d>0) || (a>0 && b==0 && c<0 && d>0)){ var formula =   a + "x" + "\u00B3"   + " " + c + "x" + "+" + d;   third_showFormula(formula); }

  else if ((a<0 && b<0 && c==0 && d<0) || (a>0 && b<0 && c==0 && d<0)){ var formula =   a + "x" + "\u00B3"  + " "  +  b + "x" + "\u00B2" + d ;   third_showFormula(formula); }
  else if ((a<0 && b<0 && c==0 && d>0) || (a>0 && b<0 && c==0 && d>0)){ var formula =   a + "x" + "\u00B3"  + " "  +  b + "x" + "\u00B2" + "+" + d ;   third_showFormula(formula); }

  else if ((a<0 && b>0 && c==0 && d<0) || (a>0 && b>0 && c==0 && d<0)){ var formula =   a + "x" + "\u00B3"  + " + "  +  b + "x" + "\u00B2" + d;   third_showFormula(formula); }
  else if ((a<0 && b>0 && c==0 && d>0) || (a>0 && b>0 && c==0 && d>0)){ var formula =   a + "x" + "\u00B3"  + " + "  +  b + "x" + "\u00B2" + "+" + d;   third_showFormula(formula); }

  else if ((a<0 && b>0 && c>0 && d==0) || (a>0 && b>0 && c>0 && d==0)){ var formula =   a + "x" + "\u00B3"  + " + "  +  b + "x" + "\u00B2" + "+" + c;   third_showFormula(formula); }
  else if ((a<0 && b>0 && c<0 && d==0) || (a>0 && b>0 && c<0 && d==0)){ var formula =   a + "x" + "\u00B3"  + " + "  +  b + "x" + "\u00B2" + c;   third_showFormula(formula); }

  else if ((a<0 && b<0 && c>0 && d==0) || (a>0 && b<0 && c>0 && d==0)){ var formula =   a + "x" + "\u00B3"  +  b + "x" + "\u00B2" + "+" + c;   third_showFormula(formula); }
  else if ((a<0 && b<0 && c<0 && d==0) || (a>0 && b<0 && c<0 && d==0)){ var formula =   a + "x" + "\u00B3"  +  b + "x" + "\u00B2" + c;   third_showFormula(formula); }

  //add cases when two coeff zeros are typed



}

function third_showFormula(formula) {
  var formula_div = document.getElementById('formula_3rd_degree');
  formula_div.innerText = "Formula generated: " + " " + formula;
}

function solve_third_degree(a,b,c,d) {

  var p;
  var q;




            var p = (3*a*c - b*b)/(3*a*a);
            var q = (2*b*b*b - 9*a*b*c + 27*a*a*d)/(27*a*a*a);
            var discrim = q*q/4 + p*p*p/27;


            if(discrim<0) {
              var angle_process = -((2 * Math.sqrt(-discrim)) / q);
  // if q is 0 need to handle that case  set for angle process = pi over 2 or -pi over 2
              var angle_radian = Math.atan(angle_process);
              var pi = Math.PI;
    					var angle_degree = angle_radian * (180/pi);




                  if (angle_degree<0) {
                    var root1 = -(2*Math.sqrt(-(p/3)) * Math.cos((angle_radian/3)) );

                    var angle_root2 = angle_radian + 6.28318531;
                    var angle_root3 = angle_radian + 12.5663706;
                    var root2 = -(2*Math.sqrt(-(p/3)) * Math.cos((angle_root2/3)) );
                    var root3 = -(2*Math.sqrt(-(p/3)) * Math.cos((angle_root3/3)) );

                    var explain = document.getElementById('formula_3rd_degree_explain').innerText = "There are 3 real roots";
                    var root1_div = document.getElementById('formula_3rd_degree_solved_first').innerText = "First root: " + root1;
                    var root2_div = document.getElementById('formula_3rd_degree_solved_second').innerText = "Second root: " +root2;
                    var root3_div = document.getElementById('formula_3rd_degree_solved_third').innerText = "Third root: " + root3;
                  }

                  else if(angle_degree>0) {
                    var root1 = (2*Math.sqrt(-(p/3)) * Math.cos((angle_radian/3)) );

                    var angle_root2 = angle_radian + 6.28318531;
                    var angle_root3 = angle_radian + 12.5663706;
                    var root2 = (2*Math.sqrt(-(p/3)) * Math.cos((angle_root2/3)) );
                    var root3 = (2*Math.sqrt(-(p/3)) * Math.cos((angle_root3/3)) );

                    var explain = document.getElementById('formula_3rd_degree_explain').innerText = "There are 3 real roots";
                    var root1_div = document.getElementById('formula_3rd_degree_solved_first').innerText = "First root: " + root1;
                    var root2_div = document.getElementById('formula_3rd_degree_solved_second').innerText = "Second root: " +root2;
                    var root3_div = document.getElementById('formula_3rd_degree_solved_third').innerText = "Third root: " + root3;
                  }

            }

            else if(discrim==0) {

                var root1 = Math.cbrt( -(q/2) + Math.sqrt((q*q/4 + p*p*p/27)) ) + Math.cbrt( -(q/2) - Math.sqrt((q*q/4 + p*p*p/27)) );



                var a = Math.cbrt( -(q/2) + Math.sqrt((q*q/4 + p*p*p/27)) );
                var b = Math.cbrt( -(q/2) - Math.sqrt((q*q/4 + p*p*p/27)) );
                var u = - 1/2;

                var root2 = a * u + b * u;
                var root3 = a * u + b * u;

                var explain = document.getElementById('formula_3rd_degree_explain').innerText = "There are 3 real roots, 2 of them are same";
                var root1_div = document.getElementById('formula_3rd_degree_solved_first').innerText = "First root: " + root1;
                var root2_div = document.getElementById('formula_3rd_degree_solved_second').innerText = "Second root: " +root2;
                var root3_div = document.getElementById('formula_3rd_degree_solved_third').innerText = "Third root: " + root3;
            }

            else if(discrim>0) {

              var root1 = Math.cbrt( -(q/2) + Math.sqrt((q*q/4 + p*p*p/27)) ) + Math.cbrt( -(q/2) - Math.sqrt((q*q/4 + p*p*p/27)) ) ;
              var a = Math.cbrt( -(q/2) + Math.sqrt((q*q/4 + p*p*p/27)) );
              var b = Math.cbrt( -(q/2) - Math.sqrt((q*q/4 + p*p*p/27)) );

             console.log(a);
             console.log(b);

              var u = -1/2;
              var i_positive = Math.sqrt(3) / 2;
              var i_negative =  -(Math.sqrt(3) / 2);

              var root2_process = (a*u) + (b*u) ;
              var root2_process_imaginary = a*i_positive + b*i_negative;
              var root2 = root2_process + " +i" + root2_process_imaginary;

              var root3_process = a*u + b*u ;
              var root3_process_imaginary = a*i_negative + b*i_positive;
              var root3 = root3_process + " -i" + -root3_process_imaginary;



              var explain = document.getElementById('formula_3rd_degree_explain').innerText = "There is 1 real root and 2 complex roots";
              var root1_div = document.getElementById('formula_3rd_degree_solved_first').innerText = "First root: " + root1;
              var root2_div = document.getElementById('formula_3rd_degree_solved_second').innerText = "Second root: " + root2;
              var root3_div = document.getElementById('formula_3rd_degree_solved_third').innerText = "Third root: " + root3;

            }

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
