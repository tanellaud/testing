define(["backbone", "models/person", "configuration"], function(Backbone, person, config) {

    var PersonList = Backbone.Collection.extend({
        url: 'https://api.pipedrive.com/v1/persons?start=0&limit=100&api_token=' + config.api_token,
        model: person,

        initialize: function (options) {

        },
        
        parse: function (response) {
            return response.data;
        }

    });

    return PersonList;

});
