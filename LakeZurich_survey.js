var myQuestions = [
	{
		question: "What was the name of the shoe store next to Record City?",
		answers: {
			a: 'Payless Shoes',
			b: 'Foot Locker',
			c: 'Lebos',
            d: 'Happy feet'
		}
		
	},
	{
		question: "What was the name of the hot dog stand in the parking lot of Amoco (12 and Quentin Rd.)?",
		answers: {
			a: 'WienerSchnitzel',
			b: 'Country Dog',
			c: 'Portillos',
            d: 'Red Hotz'
		}
	},
    	{
		question: "Where did most of the organized high school fights take place?",
		answers: {
			a: 'Jewel',
			b: 'Burger King',
			c: 'Janzens',
            d: 'Bills Boats'
		}
	},	{
		question: "What fast food place was most popular to hang out at?",
		answers: {
			a: 'Burger King',
			b: 'Boston Market',
			c: 'Mcdonalds',
            d: 'Taco Bell'
		}
	},	{
		question: "Name the old Apple Orchard?",
		answers: {
			a: 'Prince',
			b: 'Washingtons',
			c: 'Smiths',
            d: 'Bells'
		}
	},	{
		question: "Name the best breakfast place on Main Street?",
		answers: {
			a: 'Koffee Cup',
			b: 'IHOP',
			c: 'Stellas',
            d: 'Brueggers'
		}
	},	{
		question: "What is the name of the best Pizza place in Lake Zurich",
		answers: {
			a: 'Rosatis',
			b: 'JJ Twiggs',
			c: 'Jakes',
            d: 'Lukes'
		}
	},	{
		question: "Name of the old bowling alley before Brunnswick?",
		answers: {
			a: 'Gutter Ballz',
			b: 'Town and Country Lanes',
			c: '10 pins',
            d: 'Strikeout'
		}
	},	{
		question: "Name the festival that takes place every summer in July?",
		answers: {
			a: 'LZ Dayz',
			b: 'Balloon Fest',
			c: 'Summer Jams',
            d: 'Alpine Fest'
		}
	},	{
		question: "Where did the Barn Dances take place?",
		answers: {
			a: 'Paulus Park',
			b: 'LZHS',
			c: 'Lions Club',
            d: 'Jimmys'
		}
	}
];



var correctAnswers = ["Lebos", "Burger King", "Janzens", "Bells", "Country Dog", "Koffee Cup","JJ Twiggs","Town and Country Lanes", "Alpine Fest", "Paulus Park"];
var currentQuestion = 0;


$(".answer").click(function(){
    
for(var i=0; i<=correctAnswers.length; i++){
    
       if(this.innerHTML !== correctAnswers[i]){
           $(this).css('background-color',"#f7a296");
           $("#grade").fadeOut(2000);
           $("#grade").html("").show();
           document.getElementById("grade").innerHTML="<h1>X wrong!!!</h1>";
           document.getElementById("grade").style.color="red";
       }}   
    
   
for(var i=0; i<=correctAnswers.length; i++){
    
       if(this.innerHTML === correctAnswers[i]){
           $(this).css('background-color',"#98d868");
           $("#grade").fadeOut(3000);
           $("#grade").html("").show();
           document.getElementById("grade").innerHTML="<h1>CORRECT!!!</h1>";
           document.getElementById("grade").style.color="green";
       }}
    
});

    
function nextQuestion(){
    
    if(currentQuestion < myQuestions.length){
            
        currentQuestion++;
        document.getElementById("question").innerHTML= myQuestions[currentQuestion].question;
        
        document.getElementById("a").innerHTML= myQuestions[currentQuestion].answers.a;
        document.getElementById("b").innerHTML= myQuestions[currentQuestion].answers.b;
        document.getElementById("c").innerHTML= myQuestions[currentQuestion].answers.c;
        document.getElementById("d").innerHTML= myQuestions[currentQuestion].answers.d;
} 
    $(".answer").css('background-color',"white");
     document.getElementById("grade").innerHTML="";
    
};

function startOver(){
    
 document.getElementById("question").innerHTML= myQuestions[0].question;
        
        document.getElementById("a").innerHTML= myQuestions[0].answers.a;
        document.getElementById("b").innerHTML= myQuestions[0].answers.b;
        document.getElementById("c").innerHTML= myQuestions[0].answers.c;
        document.getElementById("d").innerHTML= myQuestions[0].answers.d;
    
        $(".answer").css('background-color',"white");
     document.getElementById("grade").innerHTML="";
  
};











    




