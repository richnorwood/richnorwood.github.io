function askQuestions (){


	var firstName=prompt('What is your first name?');
	var lastName=prompt('What is your last name?');
	var fullName= firstName+' '+lastName

	var faveColour = prompt('What\'s your favourite colour?').toLowerCase();

	if (faveColour == 'red'||
		faveColour == 'blue'||
		faveColour == 'green' ||
		faveColour == 'yellow') {
		$('h2').css('color',faveColour);
	}


	$('h2').text('Hello ' + fullName);

	var age = prompt('How old are you?');
	age = parseInt(age); 

	if (firstName.toLowerCase()=="general" && lastName.toLowerCase()!="assembly")
	{
		console.log ('Hello General')}
	else {
		console.log('You are not the general');
	}

}




//if (age>= 18) {
//	console.log('user is an adult.');
//} else if (age>=13) {
//	console.log( 'user is a teenager');
//} else {
//	console.log('User is a child');
//}

//When the page has loaded 
$ (function() {

	$('h2').on('click' , askQuestions)

	
	//finall the content and hide it
	$('h3').next().hide();


	//when the user click on an h3
	$('h3').on('click', function() {

		//find next element and hide and show it
		$(this).next().slideToggle(1000);		

	});

})