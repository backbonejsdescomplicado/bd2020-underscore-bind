( function () {

    const Hello = function () {

        const self = this;

        self.goodMorning = function () {

            console.log( 'Sample #3: Hello, good morning!' );
            console.log( self ); // Object { goodMorning: ... }

        };

    };

    const hello = new Hello();

    setTimeout( hello.goodMorning );

} )();
