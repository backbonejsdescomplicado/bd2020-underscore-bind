( function () {

    const hello = {

        goodMorningWrapper: function () {

            const self = this;

            const goodMorning = function () {

                console.log( 'Sample #2: Hello, good morning!' );
                console.log( this ); // Object { goodMorningWrapper: ... }

            };

            return function () {

                goodMorning.apply( self );

            }

        },

    };

    setTimeout( hello.goodMorningWrapper() );

} )();
