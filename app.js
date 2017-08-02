var object = {
	Prenom: "",
	Nom: "",
	Age: ""
}

$(".send").click(function() {


	object.Prenom =  $("#first").val();
	object.Nom = $("#last").val();
	object.Age = $("#age").val();

	console.log(object);

	$(".ici").html("Vous vous appelez " + (object.Prenom) +" "+ (object.Nom) +" "+"et vous avez " + (object.Age)+" ans");

});
row = $("#tableau").html("<th class='donnee1'>Prenom </th><th class='donnee2'>Nom </th class='donnee3'><th>Age </th>");
$(".array").click(function(){
	object.Prenom =  $("#first").val();
	object.Nom = $("#last").val();
	object.Age = $("#age").val();

	$("#tableau").append("<tr><td class ='donnee1'>" + object.Prenom +"</td><td class='donnee2'>"+ object.Nom +"</td><td class='donnee3'>" + object.Age + "</td></tr>");

});




