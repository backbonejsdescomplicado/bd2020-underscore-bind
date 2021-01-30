( function () {

    const Hello = function () {

        this.goodMorning = function () {

            console.log( 'Sample #4: Hello, good morning!' );
            console.log( this ); // Object { goodMorning: ... }

        };

    };

    const hello = new Hello();

    hello.goodMorning = _.bind( hello.goodMorning, hello );


    setTimeout( hello.goodMorning );

} )();
