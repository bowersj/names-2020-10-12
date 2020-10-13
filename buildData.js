const fs = require( 'fs' );


const { Parser } = require('json2csv');

const { getText } = require( "./getText.js" );
const { getName } = require( "./getName.js" );
const { randomDate } = require( "./dateGenerators.js" );
const { bounded: randomInt } = require( "./randomNumberGenerator.js" );


let startRanking = -24501;


function buildRecord(){
    ++startRanking;

    let name = getName();
    let ranking = startRanking;
    let birthDate = randomDate();
    let playerNumber = randomInt( 0, 99 );
    let livedPast2000 = Math.random() > 0.5;
    let earnings = ( Math.random() * randomInt( 0, 1000000000 ) ).toFixed( 2 );
    let favoriteSaying = getText();

    return {
        name,
        ranking,
        birthDate,
        playerNumber,
        livedPast2000,
        earnings,
        favoriteSaying
    }

}


let data = [];

for( let i = 0, l = 50000; i < l; ++i ){
    data.push( buildRecord() );
}

// convert to CSV

const fields = [ 'name', 'ranking', 'birthDate', 'playerNumber', 'livedPast2000', 'earnings', 'favoriteSaying' ];
const opts = { fields };

let csv = "";

try {
    const parser = new Parser(opts);
    csv = parser.parse( data );
} catch (err) {
    console.error(err);
}

fs.writeFileSync( "./data/demoData.csv", csv );
fs.writeFileSync( "./data/demoData.json", JSON.stringify( data ) );