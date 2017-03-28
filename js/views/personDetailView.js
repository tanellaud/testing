define(["jquery", "underscore",  "backbone", "collections/activities", "collections/persons", "views/personDealsView"], function($, _, Backbone, personActivity, allPersons, personDealsView) {

     var personDetailView = Backbone.View.extend({
        el: ".personData",
        template: _.template( $('#personTemplate').html() ),

        initialize: function (id) {
            this.personActivities = new personActivity(id);
            var self = this;
            this.personActivities.fetch({
                success: function(collection, response, options) {
                    var onePerson = PersonList.get(id);
                    var nextActivity = collection.get(onePerson.get("next_activity_id"));
                    var lastActivity = collection.get(onePerson.get("last_activity_id"));
                    self.render(id, onePerson, nextActivity, lastActivity);
                },
            });
        },

        render: function(id, onePerson, nextActivity, lastActivity) {

            this.$el.html(this.template({
                person: onePerson,
                nextActivity: nextActivity,
                lastActivity: lastActivity
            }));

            var personsDeals = new personDealsView(id);

        }
    });

    return personDetailView;
});
