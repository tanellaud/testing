define(["backbone", "models/activity", "configuration"], function(Backbone, activity, config) {

     var PersonActivities = Backbone.Collection.extend({
        model: activity,

        initialize: function (id) {
            this.url = 'https://api.pipedrive.com/v1/persons/'+id+'/activities?start=0&api_token=' + config.api_token
        },
        
        parse: function (response) {
            return response.data;
        }

    });

    return PersonActivities;
});
