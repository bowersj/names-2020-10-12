
const { bounded } = require( "./randomNumberGenerator.js" )

module.exports = {
    randomDate
};

let startDate = new Date();

function randomDate(){

    let year =  bounded( 1800, startDate.getFullYear() );
    let month = bounded( 0,    startDate.getMonth()    );
    let day =   getRandomDay( month );

    month = month + 1;

    return `${year.toString().padStart( 2, "0" )}-${month.toString().padStart( 2, "0" )}-${day}`;
}


function getRandomDay( month ){
    switch( month ){
        case 1:
            return bounded( 1, 28 );
        case 0:
        case 2:
        case 4:
        case 6:
        case 7:
        case 9:
        case 11:
            return bounded( 1, 31 );
        case 3:
        case 5:
        case 8:
        case 10:
            return bounded( 1, 30 );
    }
}