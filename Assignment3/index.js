/*
 * Add your JavaScript to this file to complete the assignment.
 */


var createNewTwitButton = document.getElementById('create-twit-button');
createNewTwitButto.addEventListener('click', function(event) {
	event.stopPropagation();
	var modal = document.getElementById('create-twit-modal');
	var backdrop = document.getElementById('modal-backdrop');
	modal.classList.remove('hidden');
	backdrop.classList.remove('hidden');
});


var cancelButton = document.getElementsByClassName('modal-cancel-button');
var xButton = document.getElementsByClassName('modal-close-button');

cancelButton[0].addEventListener('click', function(event) {
	event.stopPropagation();
	var textInput = document.getElementById('twit-text-input');
	textInput.value = "";
	var author = document.getElementById('twit-attribution-input');
	author.value = "";
        var modal = document.getElementById('create-twit-modal');
        var backdrop = document.getElementById('modal-backdrop');
        modal.classList.add('hidden');
        backdrop.classList.add('hidden');
});

xButton[0].addEventListener('click', function (event) {
        event.stopPropagation();
        var textInput = document.getElementById('twit-text-input');
        textInput.value = "";
        var author = document.getElementById('twit-attribution-input');
        author.value = "";
        var modal = document.getElementById('create-twit-modal');
        var backdrop = document.getElementById('modal-backdrop');
        modal.classList.add('hidden');
        backdrop.classList.add('hidden');
});

var createButton = document.getElementsByClassName('modal-accept-button')


function createNewTwit() {
	var article = document.createElement('article');
	article.classList.add('twit');
	var twitIcon = document.createElement('div');
	twitIcon.classList.add('twit-icon');
	var image = document.createElement('i');
	image.classList.add('fa', 'fa-bullhorn');
	twitIcon.appendChild(image);
	article.appendChild(twitIcon);
	var content = document.createElement('div');
	content.classList.add('twit-content');
	var text = document.createElement('p');
	text.classList.add('twit-text');
	var pText = document.createTextNode(document.getElementById('twit-text-input').value);
	text.appendChild(pText);
	content.appendChild(text);
	var author = document.createElement('p');
	var authorA = document.createElement('a');
	var authorAText = document.createTextNode(document.getElementById('twit-attribution-input').value);
	authorA.appendChild(authorAText);
	author.classList.add('twit-author');
	author.appendChild(authorA);
	content.appendChild(author);
	article.appendChild(content);
	document.getElementsByClassName('twit-container')[0].appendChild(article);
} 


createButton[0].addEventListener('click', function(event) {
	event.stopPropagation();
        var textInput = document.getElementById('twit-text-input');
        var author = document.getElementById('twit-attribution-input');
	if(textInput.value === "")
		alert("Text input is empty!");
	else if(author.value === "")
		alert("Author input is emty!");
	else{
		createNewTwit();
	        var textInput = document.getElementById('twit-text-input');
        	textInput.value = "";
        	var author = document.getElementById('twit-attribution-input');
        	author.value = "";
        	var modal = document.getElementById('create-twit-modal');
        	var backdrop = document.getElementById('modal-backdrop');
        	modal.classList.add('hidden');
        	backdrop.classList.add('hidden');
	}

});

var searchButton = document.getElementById('navbar-search-button');

searchButton.addEventListener('click', function(event) {
	event.stopPropagation();
	var searchInput = document.getElementById('navbar-search-input').value.toLowerCase();
	if(searchInput) {
		var twitArray = document.getElementsByClassName('twit');
		var i = twitArray.length-1;
		for (i; i>= 0; i--) {
			if((twitArray[i].firstChild.nextSibling.nextSibling.nextSibling.textContent.toLowerCase()).indexOf(searchInput) === -1) { 
				if((twitArray[i].firstChild.nextSibling.nextSibling.nextSibling.lastChild.previousSibling.textContent.toLowerCase()).indexOf(searchInput) === -1) {
					twitArray[i].remove();

				}
			}

		}


	}





});
