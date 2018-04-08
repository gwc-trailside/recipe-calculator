var recipes= {
  "recipe":{
    "name":"Fruit Popsicles", 
    "servings":8,
    "ingredients":[
      {
        "name":"raspberry",
        "quantity":2 
      },
      {
        "name":"vanilla yogurt",
        "quantity":2
      },
      {
        "name":"sugar",
        "quantity":1/4
      }, 
      {
        "name":"paper cups",
        "quantity":8
      },
      {
        "name":"popsicle sticks",
       "quantity":8
      }
    ]
  }
};




function changerecipe ()
{
  var input= document.getElementById("Servingsize").value; 
  var servings=recipes.recipe.servings;
  var ingredients=recipes.recipe.ingredients;//is a list
  var quantityOfRaspberries = recipes.recipe.ingredients[0].quantity;
  var quantityOfVanillaYogurt = recipes.recipe.ingredients[1].quantity;
  var quantityOfSugar = recipes.recipe.ingredients[2].quantity;
  var quantityOfPaperCups = recipes.recipe.ingredients[3].quantity;
  var quantityOfPopsicleSticks = recipes.recipe.ingredients[4].quantity;
  var newquantityofraspberries;
  var newquantityofvanillayogurt;
  var newquantityofsugar;
  var newquantityofpapercups;
  var newquantityofpopsiclesticks;
  
  if(input<servings){
   //division 
   var divisor = servings/input;
   newquantityofraspberries = quantityOfRaspberries/divisor;
   newquantityofvanillayogurt = quantityOfVanillaYogurt/divisor;
   newquantityofsugar = quantityOfSugar/divisor;
   newquantityofpapercups = quantityOfPaperCups/divisor;
   newquantityofpopsiclesticks = quantityOfPopsicleSticks/divisor;
  }
  else if(input>servings){
    //multiply
    var multiplier = input/servings;
   newquantityofraspberries = quantityOfRaspberries*multiplier;
   newquantityofvanillayogurt = quantityOfVanillaYogurt*multiplier;
   newquantityofsugar = quantityOfSugar*multiplier;
   newquantityofpapercups = quantityOfPaperCups*multiplier;
   newquantityofpopsiclesticks = quantityOfPopsicleSticks*multiplier;
  }
  else{
    //equal to 
   newquantityofraspberries = quantityOfRaspberries;
   newquantityofvanillayogurt = quantityOfVanillaYogurt;
   newquantityofsugar = quantityOfSugar;
   newquantityofpapercups = quantityOfPaperCups;
   newquantityofpopsiclesticks = quantityOfPopsicleSticks;
  }
  
  
  document.getElementById("ingredients").innerHTML=
  "<b>"+newquantityofraspberries+" cups raspberries<br> "+newquantityofvanillayogurt+" cups plain or vanilla yogurt<br> "+newquantityofsugar+" cup white sugar<br> "+newquantityofpapercups+" small paper cups <br> "+newquantityofpopsiclesticks+" popsicle sticks</b>";
}




