( function () {

    const Hello = function () {

        this.goodMorning = function () {

            console.log( 'Sample #5: Hello, good morning!' );
            console.log( this ); // Object { goodMorning: ... }

        };

    };

    const hello = new Hello();

    _.bindAll( hello, 'goodMorning' );


    setTimeout( hello.goodMorning );

} )();
