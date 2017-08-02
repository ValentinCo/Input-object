console.log("Bonjour");





var object = {
	Prenom: "Valentin",
	Nom: "",
	Age: ""
}




$(".send").click(function() {
var first;
var last;
var age;

	object.Prenom =  $("#first").val();
	object.Nom = $("#last").val();
	object.Age = $("#age").val();

	console.log(object);

	$(".ici").html("Vous vous appelez " + (object.Prenom) +" "+ (object.Nom) +" "+"et vous avez " + (object.Age)+" ans");

});





