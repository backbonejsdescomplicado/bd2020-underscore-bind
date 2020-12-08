( function () {

    const AppRootView = Backbone.View.extend( {
        className: 'container',

        render: function () {

            const title = $( '<h1>' );
            title.addClass( 'title' );
            title.append( 'Hello, World!' );

            const subtitle = $( '<p>' );
            subtitle.addClass( 'subtitle' );
            subtitle.append( 'My first website with <strong>Backbone.js</strong>!' );

            this.$el.append( title );
            this.$el.append( subtitle );

            return this;
        }

    } );

    $( "#app-root" ).html( new AppRootView().render().$el );

} )();
