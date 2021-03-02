let googleLink = document.querySelector('a');

    googleLink.addEventListener('click', function( event ){
        event.preventDefault();
        console.log( event );
        alert('this is disable');

    });