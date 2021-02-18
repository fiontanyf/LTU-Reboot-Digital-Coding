function calculator ( number1, number2, operator) {
    

    switch( operator ){
        case '+':
            console.log(`${number1} + ${number2} = ${number1 + number2}`);
            break;
        case '-':
            console.log(`${number1} - ${number2} = ${number1 - number2}`);
            break;
        case '*':
            console.log(`${number1} x ${number2} = ${number1 * number2}`);
            break;
        case '/':
            console.log(`${number1} / ${number2} = ${number1 / number2}`);
            break;
        default:
            console.log('error');
            break;
    }

    
}

calculator ( 10, 2, '+');
calculator ( 10, 2, '-');
calculator ( 6, 2, '*');
calculator ( 4, 2, '/');