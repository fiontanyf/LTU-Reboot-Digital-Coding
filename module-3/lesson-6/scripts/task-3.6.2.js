document.querySelector('#dom-div');

let paragraph = document.createElement('p');

let paragraphText = document.createTextNode('text create by the Dom');

paragraph.appendChild( paragraphText);

domDiv.appendChild( paragraph);