define(["jquery", "underscore", "backbone", "collections/personsDeals"], function($, _, Backbone, personsDeals) {

    var PersonsDealsView = Backbone.View.extend({
        el: '.dealsDatabox',
        template: _.template( $('#dealsTemplate').html() ),

        initialize: function (id) {
            this.personDeals = new personsDeals(id);
            var self = this;
            this.personDeals.fetch({
                success: function(collection, response, options) {
                    self.render();
                },
            });
        },

        render: function() {
            this.$el.html(this.template({
                deals: this.personDeals.models
            }));
        }
    });

    return PersonsDealsView;
});
