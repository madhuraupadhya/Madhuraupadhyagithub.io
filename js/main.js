// packages and services array object
const packages = [{
		image: "./images/Italy.jpg",
		title: "Italy",
		subTitle: "Ancient history comes to life amidst Roman ruins, Renaissance art, and delectable cuisine; Italy boasts enchanting landscapes, from the Tuscan countryside to the Amalfi Coast, inviting travelers to indulge in its rich cultural tapestry.",
		price: 300,
		rating: 3.7
	},
	{
		image: "./images/Singapore.jpg",
		title: "Singapore",
		subTitle: "A modern metropolis known for its futuristic skyline, lush urban gardens, and a melting pot of cuisines at vibrant hawker centers, offering a glimpse into a harmonious blend of cultures in Southeast Asia.",
		price: 260,
		rating: 2.2
	},
	{
		image: "./images/South korea.jpg",
		title: "South Korea",
		subTitle: "A blend of tradition and innovation, South Korea captivates with bustling cities, historic temples, K-pop culture, and a tantalizing culinary scene that ranges from sizzling street food to exquisite royal cuisine.",
		price: 190,
		rating: 4.2
	},
	{
		image: "./images/Dubai.jpg",
		title: "Dubai",
		subTitle: " A city of superlatives, where futuristic architecture meets ancient Arabian heritage, opulent shopping malls contrast with traditional souks, and desert landscapes offer thrilling adventures amidst luxury and extravagance.",
		price: 200,
		rating: 4.9
	},
	{
		image: "./images/spain.jpg",
		title: "Spain",
		subTitle: "Vibrant and diverse, Spain entices with its passionate flamenco rhythms, architectural wonders like Sagrada Familia, sun-soaked beaches of Costa del Sol, and a culinary journey through tapas bars and seafood delights..",
		price: 360,
		rating: 4.7
	},
	{
		image: "./images/zealand.jpg",
		title: "New Zealand",
		subTitle: "Nature's playground, where stunning landscapes, from snow-capped mountains to pristine beaches, beckon adventurers for hiking, bungee jumping, and Maori cultural experiences in a land of unparalleled beauty.",
		price: 290,
		rating: 2.8
	},
	{
		image: "./images/Turkey.jpg",
		title: "Turkey",
		subTitle: "A crossroads of cultures, Turkey boasts iconic landmarks like the Blue Mosque and ancient ruins of Ephesus, while the bustling bazaars, delectable cuisine, and stunning landscapes of Cappadocia charm visitors.",
		price: 310,
		rating: 3.9
	},
	{
		image: "./images/Thailand.jpg",
		title: "Thailand",
		subTitle: "From the bustling chaos of Bangkok to serene islands with crystal-clear waters, Thailand offers ornate temples, spicy street food, bustling night markets, and a warm hospitality that makes every visitor feel at home.",
		price: 460,
		rating: 4.0
	},
	{
		image: "./images/australia.jpg",
		title: "Australia",
		subTitle: "A vast continent offering diverse experiences, from vibrant cities like Sydney and Melbourne to the rugged Outback and the Great Barrier Reef, inviting travelers to explore unique wildlife, stunning landscapes, and a laid-back lifestyle.",
		price: 270,
		rating: 3.4
	},
]

const services = [{
		name: "Affordable Hotel",
		description: "Booking and reservation services for hotels, resorts, lodges, and vacation rentals"
	},
	{
		name: "Food & Drinks",
		description: "Engage travelers in interactive and educational experiences related to food and beverages"
	},
	{
		name: "Safety Guide",
		description: "Be aware of your surroundings and trust your instincts"
	},
	{
		name: "Travel Insurance",
		description: "Offer travel insurance options to ensure travelers' safety and security during their trips"
	},
	{
		name: "Transportation Assistance",
		description: "Arrangement of airport transfers, car rentals, and transportation between destinations"
	},
	{
		name: "Wellness & Spa",
		description: "Wellness retreats and spa for relaxation and rejuvenation"
	},
]

const galleryImages = [{
		imageUrl: "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
	},
	{
		imageUrl: "https://images.pexels.com/photos/6246724/pexels-photo-6246724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
	},
	{
		imageUrl: "https://images.pexels.com/photos/5254688/pexels-photo-5254688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
	},
	{
		imageUrl: "https://images.pexels.com/photos/19109585/pexels-photo-19109585/free-photo-of-victoria-memorial-museum-in-kolkata-seen-from-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
	},
	{
		imageUrl: "https://images.pexels.com/photos/5472258/pexels-photo-5472258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
	},
	{
		imageUrl: "https://images.pexels.com/photos/132479/pexels-photo-132479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
	},
	{
		imageUrl: "https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
	},
	{
		imageUrl: "https://images.pexels.com/photos/99551/hot-air-balloon-valley-sky-99551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
	},

]

// package and service section reference.
const packageSection = document.getElementById('package-section');
const serviceSection = document.getElementById('services-section');
const gallerySection = document.getElementById('gallery-section');

const packageBookingBtn = document.getElementById('packageBookingBtn');

// form input elements reference.
const whereTo = document.getElementById('whereTo');
const persons = document.getElementById('persons');
const startDate = document.getElementById('startDate');
const endDate = document.getElementById('endDate');
const description = document.getElementById('description');

// error elements reference for input fields.
const whereToError = document.getElementById('whereToError');
const personsError = document.getElementById('personsError');
const startDateError = document.getElementById('startDateError');
const endDateError = document.getElementById('endDateError');
const descriptionError = document.getElementById('descriptionError');

// booking form reference
const bookingForm = document.getElementById('bookingForm');

// functions to validate the form input fields.
function validateNotEmpty(value, errorElement, errorMessage) {
	if (!value) {
		errorElement.textContent = errorMessage;
		return false;
	}
	else {
		errorElement.textContent = "";
		return true;
	}
}

function validatePositiveInteger(value, errorElement, errorMessage) {
	if (value < 1) {
		errorElement.textContent = errorMessage;
		return false;
	}
	else {
		errorElement.textContent = "";
		return true;
	}
}

function validateDateNotInPast(value, currentDateValue, errorElement, errorMessage) {
	if (value < currentDateValue) {
		errorElement.textContent = errorMessage;
		return false;
	}
	else {
		errorElement.textContent = "";
		return true;
	}
}

function validateEndDateAfterStartDate(endDateValue, startDateValue, errorElement, errorMessage) {
	if (endDateValue < startDateValue) {
		errorElement.textContent = errorMessage;
		return false;
	}
	else {
		errorElement.textContent = "";
		return true;
	}
}

function validateDescriptionLength(value, errorElement, errorMessage, minLength) {
	if (value.length < minLength) {
		errorElement.textContent = errorMessage;
		return false;
	}
	else {
		errorElement.textContent = "";
		return true;
	}
}

// function to handle booking form.
function handleFormSubmit(e) {
	var currentDate = new Date().toISOString().split('T')[0];

	var isValid = true;

	if (!whereTo.value || !persons.value || !startDate.value || !endDate.value || !description.value) {
		isValid &= validateNotEmpty(whereTo.value, whereToError, "Error: Complete this field.");
		isValid &= validateNotEmpty(persons.value, personsError, "Error: Complete this field.");
		isValid &= validateNotEmpty(startDate.value, startDateError, "Error: Complete this field.");
		isValid &= validateNotEmpty(endDate.value, endDateError, "Error: Complete this field.");
		isValid &= validateNotEmpty(description.value, descriptionError, "Error: Complete this field.");
	}
	else {
		isValid &= validatePositiveInteger(persons.value, personsError, "Error: Please add at least one person.");
		isValid &= validateDateNotInPast(startDate.value, currentDate, startDateError, "Error: Start Date cannot be in the past.");
		isValid &= validateDateNotInPast(endDate.value, currentDate, endDateError, "Error: End Date cannot be in the past.");
		isValid &= validateEndDateAfterStartDate(endDate.value, startDate.value, endDateError, "Error: End Date cannot be prior to Start Date.");
		isValid &= validateDescriptionLength(description.value, descriptionError, "Error: Description must be at least 50 characters.", 50);
	}

	if (isValid) {
		alert(`Thank You!\nYour package has been booked successfully for ${whereTo.value}.`);
		bookingForm.reset();
	}
	e.preventDefault();
}

// function to create HTML package card.
function createPackage() {
	packages.map((package) => {
		let packageCard = document.createElement('div');
		let packageCardContent = document.createElement('div');
		let image = document.createElement('img');
		let title = document.createElement('h3');
		let subTitle = document.createElement('p');
		let price = document.createElement('p');
		let rating = document.createElement('div');
		let button = document.createElement('button');

		image.src = package.image;
		image.alt = package.title;
		title.textContent = package.title;
		subTitle.textContent = package.subTitle;
		price.innerHTML = `$${package.price}`;
		button.textContent = 'Book';
		rating.style.marginBlock = '5px';
		price.classList.add('price');

		packageCard.classList.add('package-card');
		packageCardContent.classList.add('card-content');
		packageCardContent.appendChild(title);
		packageCardContent.appendChild(subTitle);
		packageCardContent.appendChild(price);
		packageCardContent.appendChild(rating);

		let stars = 5;
		for (let i = 1; i <= Math.round(package.rating); i++) {
			let starIcon = document.createElement('i');
			starIcon.style.color = '#97c294';
			starIcon.style.paddingInline = '1px';
			starIcon.classList.add('fa');
			starIcon.classList.add('fa-star');
			starIcon.classList.add('checked');
			rating.appendChild(starIcon);
			stars -= 1;
		}
		for (let i = 1; i <= stars; i++) {
			let starIcon = document.createElement('i');
			starIcon.style.color = '#BFBFBF'
			starIcon.style.paddingInline = '1px';
			starIcon.classList.add('fa');
			starIcon.classList.add('fa-star');
			rating.appendChild(starIcon);
		}

		packageCardContent.appendChild(button);
		button.classList.add('btn');
		button.classList.add('btn-warning');
		packageCard.appendChild(image);
		packageCard.appendChild(packageCardContent);
		packageSection.appendChild(packageCard)
	})
};

// function to create HTML service card.
function createService() {
	services.map((service) => {
		let serviceCard = document.createElement('div');
		serviceCard.classList.add('service-item');

		let serviceName = document.createElement('h3');
		serviceName.textContent = service.name;
		let serviceDescription = document.createElement('p');
		serviceDescription.textContent = service.description;
		serviceCard.appendChild(serviceName);
		serviceCard.appendChild(serviceDescription);
		serviceSection.appendChild(serviceCard);
	})
};

// function to create HTML gallery card.
function createGallery() {
	galleryImages.map((image) => {
		let galleryCard = document.createElement('div');
		galleryCard.classList.add('box');

		let galleryImage = document.createElement('img');
		galleryImage.src = image.imageUrl;
		galleryCard.appendChild(galleryImage);
		gallerySection.appendChild(galleryCard);
	})
};

createPackage();
createService();
createGallery();

// event listener to submit the form on button click.
packageBookingBtn.addEventListener('click', (e) => {
	e.preventDefault();
	handleFormSubmit();
});

// event listener to submit the form on form submit.
bookingForm.addEventListener('submit', (e) => {
	e.preventDefault();
	handleFormSubmit();
	bookingForm.reset();
});

// Event listeners to remove the error message from input fields when value is updated.
document.getElementById('whereTo').addEventListener('input', function () {
	whereToError.textContent = "";
});

document.getElementById('persons').addEventListener('input', function () {
	personsError.textContent = "";
});

document.getElementById('startDate').addEventListener('input', function () {
	startDateError.textContent = "";
});

document.getElementById('endDate').addEventListener('input', function () {
	endDateError.textContent = "";
});

document.getElementById('description').addEventListener('input', function () {
	descriptionError.textContent = "";
});


// Back to Top 
document.addEventListener("DOMContentLoaded", function () {
	var backToTopBtn = document.getElementById("back-to-top-btn");

	window.addEventListener("scroll", function () {
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			backToTopBtn.style.display = "block";
		}
		else {
			backToTopBtn.style.display = "none";
		}
	});

	backToTopBtn.addEventListener("click", function () {
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
	});
});


// Register Bootstrap Modal
document.getElementById('registrationForm').addEventListener('submit', function (event) {
	var isValid = validateForm();
    if (!isValid) {
        event.preventDefault();
    } else {
       // If the form is valid, close the Bootstrap modal
       $('#registrationForm').modal('hide');

       // Show a toaster/notification
        alert("Register successful!");
    }
});

function validateForm() {
	var fullName = document.getElementById('fullName').value;
	var contact = document.getElementById('contact').value;
	var dob = document.getElementById('dob').value;
	var email = document.getElementById('email').value;
	var password = document.getElementById('password').value;
	var gender = document.getElementById('gender').value;

	var isValid = true;
	// Validation for Full Name
	if (fullName.trim() === '') {
		displayErrorMessage('fullName', 'Full Name is required.');
		isValid = false;
	}
	else {
		hideErrorMessage('fullName');
	}

	// Validation for Contact
	if (contact.trim() === '') {
		displayErrorMessage('contact', 'Contact is required.');
		isValid = false;
	}
	else {
		hideErrorMessage('contact');
	}

	// Validation for Date of Birth
	if (dob === '') {
		isValid = false;
		displayErrorMessage('dob', ' Date of birth is required.');
	}
	else {
		hideErrorMessage('dob');
	}

	// Validation for Email
	if (email.trim() === '') {
		displayErrorMessage('email', ' Email is required.');
		isValid = false;
	}
	else {
		console.log(isValidEmail(email), 'isValidEmail(email)');
		if (!isValidEmail(email)) {
			displayErrorMessage('email', ' Please enter a valid Email address.');
			isValid = false;
		}
		else {
			hideErrorMessage('email');
		}
	}

	// Validation for Password
	if (password === '') {
		isValid = false;
		displayErrorMessage('password', 'Password is required.');
	}
	else {
		hideErrorMessage('password');
	}

	// Validation for Gender
	if (gender === '') {
		isValid = false;
		displayErrorMessage('gender', 'Select the Gender.');
	}
	else {
		hideErrorMessage('gender');
	}

	return isValid;
}

function displayErrorMessage(elementId, message) {
	var errorElement = document.getElementById(elementId + '-error');
	if (!errorElement) {
		errorElement = document.createElement('div');
		errorElement.id = elementId + '-error';
		errorElement.className = 'error-message';
		var inputElement = document.getElementById(elementId);
		inputElement.parentNode.appendChild(errorElement);
	}
	errorElement.innerHTML = message;
}

function hideErrorMessage(elementId) {
	var errorElement = document.getElementById(elementId + '-error');
	if (errorElement) {
		errorElement.innerHTML = '';
	}
}

// Function to validate email format
function isValidEmail(email) {
	// Basic email validation
	var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

// Login Bootstrap Modal
document.getElementById('loginForm').addEventListener('submit', function (event) {
	var isValid = validateLoginForm();
	if (!isValid) {
        event.preventDefault();
    } else {
       // If the form is valid, close the Bootstrap modal
       $('#loginModal').modal('hide');

       // Show a toaster/notification
        alert("Login successful!");
    }
});

function validateLoginForm() {
	var email = document.getElementById('LoginEmail').value;
	var password = document.getElementById('LoginPassword').value;

	var isValid = true;
	// Validation for Email
	if (email.trim() === '') {
		displayErrorMessage('LoginEmail', ' Email is required.');
		isValid = false;
	}
	else {
		console.log(isValidEmail(email), 'isValidEmail(email)');
		if (!isValidEmail(email)) {
			displayErrorMessage('LoginEmail', ' Please enter a valid Email address.');
			isValid = false;
		}
		else {
			hideErrorMessage('LoginEmail');
		}
	}

	// Validation for Password
	if (password === '') {
		isValid = false;
		displayErrorMessage('LoginPassword', 'Password is required.');
	}
	else {
		hideErrorMessage('LoginPassword');
	}

	return isValid;
}

