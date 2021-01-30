( function () {

    const Hello = Backbone.Model.extend( {

        initialize: function () {

            _.bindAll( this, 'goodMorning' );

        },

        goodMorning: function () {

            console.log( 'Backbone.Model Sample #1: Hello, good morning!' );
            console.log( this ); // Object { goodMorning: ... }

        },

    } );

    const hello = new Hello();

    setTimeout( hello.goodMorning );

} )();
