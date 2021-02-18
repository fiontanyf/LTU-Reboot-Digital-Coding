function seasonWear( season ) {


    switch( season ){
        case 'spring' :
            console.log(`It is ${season}, start warm`);
            break;
        case 'summer' :
            console.log(`It is ${season}, it hot`);
            break;
        case 'autumn' :
            console.log(`It is ${season}, prepare coat`);
            break;
        case 'winter' :
            console.log(`It is ${season}, it cold`);
            break;
        default:
            console.log('error');
            break;

    }

}       

seasonWear ('summer');

let date = new Date();
let day = date.getDate();

function dayofTheWeek (day){
    switch(day){
        case 4:
            console.log('it is Monday');
            break;
        default:
            console.log('error');
            break

    }
        


}

dayofTheWeek(day);
console.log(date);
