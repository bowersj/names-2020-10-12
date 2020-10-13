const { LoremIpsum }  = require( "lorem-ipsum" );


module.exports = {
    getText,
};


const lorem = new LoremIpsum ({
    format: "plain",
    sentencesPerParagraph: {
        max: 2,
        min: 1
    },
    wordsPerSentence: {
        max: 8,
        min: 2
    }
});

function getText(){
    let text = lorem.generateParagraphs(2);

    if( text.length < 400 )
        return text;
    else
        return getText();
}

// console.log( getText() );