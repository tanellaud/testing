define(["jquery", "backbone", "views/personDetailView"], function($, Backbone, personDetailView) {

    var Router = Backbone.Router.extend({
        initialize: function() {
            Backbone.history.start();
        },
        routes: {
            'persons/:id' : 'personDetails'
        },

         personDetails: function (id) {
            var personsDetailView = new personDetailView(id);
        }
    });

    return Router;
});
