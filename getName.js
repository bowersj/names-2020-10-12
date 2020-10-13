const fs = require( "fs" );


module.exports = {
    getName,
};



const driveLetter = "E";

const maleFirstNameLoc =   driveLetter + ":" + "\\_fakeData\\names\\data\\maleFirstNames.json";
const femaleFirstNameLoc = driveLetter + ":" + "\\_fakeData\\names\\data\\femaleFirstNames.json";
const surnameLoc =         driveLetter + ":" + "\\_fakeData\\names\\data\\surnames.json";

const maleFirstNameData = JSON.parse( fs.readFileSync( maleFirstNameLoc, "utf8" ) );
const femaleFirstNameData = JSON.parse( fs.readFileSync( femaleFirstNameLoc, "utf8" ) );
const surnameNameData = JSON.parse( fs.readFileSync( surnameLoc, "utf8" ) );



function containsOnlyAscii( str ){
    return [ ...str ]
        .some(function(char) { return char.charCodeAt( 0 ) < 127 });
}


function getRandomNameFromArray( arr ){
    let val = arr[ Math.floor( Math.random() * arr.length ) ].name;

    if( containsOnlyAscii( val ) )
        return val
    else
        return getRandomNameFromArray( arr );
}


function getFirstName(){
    let isMale = Math.random() > 0.3;

    if( isMale ){
        return getRandomNameFromArray( maleFirstNameData );
    } else {
        return getRandomNameFromArray( femaleFirstNameData );
    }
}

function getLastName(){
    return getRandomNameFromArray( surnameNameData );
}


function getName(){
    let name = `${getFirstName()} ${getLastName()}`;

    if( name.length <= 30 )
        return name;
    else
        return getName();
}


// tests
// console.log( getName() );