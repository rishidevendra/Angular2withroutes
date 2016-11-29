"use strict";
var app_component_1 = require('./app.component');
var app_component_2 = require('./app.component');
exports.routes = [
    { path: '', component: app_component_2.HomeComponent },
    {
        path: 'about', component: app_component_1.AboutComponent,
        children: [{
                path: '', component: app_component_1.AboutHomeComponent
            }, { path: 'item', component: app_component_1.AboutItemComponent }]
    }
];
//# sourceMappingURL=app.route.js.map