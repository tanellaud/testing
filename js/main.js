

require.config({
    baseUrl: 'js',
    paths: {
        "app": "app",
        "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min",
        "underscore": "libs/underscore",
        "backbone": "libs/backbone",
        "models": "models",
        "collections": "collections",
        "routers": "routes",
        "views": "views",
        "configuration": "config"
    },
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
});

require(['views/headerView', 'views/allPersons', 'routers/router'], function (headerView, allPersons, router) {

    var headerView = new headerView();
    var personsView = new allPersons();
    var router = new router();

});
