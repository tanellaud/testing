define(["jquery", "underscore", "backbone"], function($, _, Backbone) {

     var headerView = Backbone.View.extend({
        el: "header",
        template: _.template( $('#headerTemplate').html() ),

        initialize: function () {
            this.render();
        },

        render: function() {
    		this.$el.html(this.template());
        }
    });

    return headerView;
});
