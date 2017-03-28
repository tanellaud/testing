define(["jquery", "backbone", "underscore", "collections/persons", "routers/router"], function($, Backbone, _, allPersons, router) {

    var PersonsView = Backbone.View.extend({
        el: 'ul',
        template: _.template( $('#itemTemplate').html() ),

        initialize: function () {
            PersonList = new allPersons();
            var self = this;
            PersonList.fetch({
                success: function(collection, response, options) {
                    self.render();
                },
            });
        },

        events: {
            "click li": "onClick"
        },

        onClick: function(ev) {
            $(ev.currentTarget).siblings('li').removeClass('active');
            $(ev.currentTarget).toggleClass('active');
            var personUrl = $(ev.currentTarget).data('url');
            Backbone.history.navigate(personUrl, { trigger: true});
        },
        
        render: function() {
            this.$el.html(this.template({
                persons: PersonList.models
            }));
        }

    });
    return PersonsView;
});
