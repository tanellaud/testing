define(["backbone", "models/personDeal", "configuration"], function(Backbone, personDeal, config) {

    var PersonDeals = Backbone.Collection.extend({
        model: personDeal,

        initialize: function (id) {
            this.url = 'https://api.pipedrive.com/v1/persons/'+id+'/deals?start=0&status=all_not_deleted&&api_token=' + config.api_token
        },
        
        parse: function (response) {
            return response.data;
        }
    });

    return PersonDeals;
});
