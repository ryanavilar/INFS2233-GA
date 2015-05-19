
function printIt() {
    window.print();
}

function save(){
	var firstName = document.getElementsByName('firstname')[0].value;
	var lastName = document.getElementsByName('lastname')[0].value;
	var contact = document.getElementsByName('contact')[0].value;
	var address = document.getElementsByName('address')[0].value;

	var firstNameShow = document.getElementById('firstName');
	var lastNameShow = document.getElementById('lastName');
	var contactShow = document.getElementById('contact');
	var AddressShow = document.getElementById('Address');

	$("#form").addClass("hidden");
	$("#show").removeClass("hidden");

	firstNameShow.innerHTML = firstName;
	lastNameShow.innerHTML = lastName;
	contactShow.innerHTML = contact;
	AddressShow.innerHTML = address;
}

function edit(){
	$("#show").addClass("hidden");
	$("#form").removeClass("hidden");
}

// Can also be used with $(document).ready()
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    animationLoop: false,
    itemWidth: 210,
    itemMargin: 5,
    minItems: 2,
    maxItems: 4
  });
});


