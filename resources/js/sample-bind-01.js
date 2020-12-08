( function () {

    const hello = {

        goodMorning: function () {

            console.log( 'Sample #1: Hello, good morning!' );
            console.log( this ); // Window

        }

    };

    setTimeout( hello.goodMorning );

} )();
