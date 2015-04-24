/**
 * Created by derzunov on 22.04.15.
 */
define([ 'backbone' ], function( Backbone ) {
    var PostView = Backbone.View.extend({

        template: _.template($('#PostTemplate').html()),

        initialize: function() {
            this.render();
        },

        render: function() {
            this.$el.html( this.template( this.model.attributes ) );
            return this;
        }

    });
    return PostView;
});