

module.exports = {
    bounded: boundedRandomNumber
};

function boundedRandomNumber( min, max ){
    min = parseInt( min, 10 );
    max = parseInt( max, 10 );

    return Math.floor( Math.random() * ( max - min ) ) + min;
}