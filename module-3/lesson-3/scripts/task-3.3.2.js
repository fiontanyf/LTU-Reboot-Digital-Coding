function drinkOrder( size, drinkName ) {

    let drink = drinkName.toLowerCase();
    let messageTemplate = 'Your order a';

    switch( drink ) {
        case 'cola': 
            // console.log( 'You order a ' +size + ' ' + drink );
            console.log( `${messageTemplate} ${size} ${drink}` );
            break;
        case 'lemonande': 
            console.log( `${messageTemplate} ${size} ${drink}` );
            break;
        case 'orange': 
            console.log( `${messageTemplate} ${size} ${drink}` );
            break;
        default:
            console.log( 'error');
            break;
    }
}

drinkOrder ('small' , 'cola');