var temperature = Math.floor(Math.random() * 60 + 1);
var season = 'Summer';

if ( temperature < 0){
    console.log (temperature, 'stay in');

} else if(temperature < 30){
    console.log (temperature,'wear hat and coat');
} else if(temperature < 50 ){
    console.log (temperature,'wear a coat');

} else if(temperature > 50 && season === 'summer'){
        console.log (temperature,'wear a coat');
} else {
    console.log (temperature,'just pant is fine');
}
