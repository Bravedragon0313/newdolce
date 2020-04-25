"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var apollo_angular_1 = require("apollo-angular");
var apollo_angular_link_http_1 = require("apollo-angular-link-http");
var apollo_cache_inmemory_1 = require("apollo-cache-inmemory");
var apollo_link_context_1 = require("apollo-link-context");
var store_service_1 = require("../services/store.service");
var environment_1 = require("../environments/environment");
var GraphQLModule = (function () {
    function GraphQLModule(apollo, httpLink, store) {
        this.apollo = apollo;
        this.httpLink = httpLink;
        this.store = store;
        var uri = environment_1.environment.GQL_ENDPOINT;
        var http = httpLink.create({ uri: uri });
        var authLink = apollo_link_context_1.setContext(function (_, _a) {
            var headers = _a.headers;
            var token = store.token;
            return {
                headers: tslib_1.__assign(tslib_1.__assign({}, headers), { authorization: token ? "Bearer " + token : '' }),
            };
        });
        apollo.create({
            link: authLink.concat(http),
            defaultOptions: {
                watchQuery: {
                    fetchPolicy: 'network-only',
                    errorPolicy: 'ignore',
                },
                query: {
                    fetchPolicy: 'network-only',
                    errorPolicy: 'all',
                },
                mutate: {
                    errorPolicy: 'all',
                },
            },
            cache: new apollo_cache_inmemory_1.InMemoryCache(),
        });
    }
    GraphQLModule = tslib_1.__decorate([
        core_1.NgModule({
            exports: [http_1.HttpClientModule, apollo_angular_1.ApolloModule, apollo_angular_link_http_1.HttpLinkModule],
        }),
        tslib_1.__metadata("design:paramtypes", [apollo_angular_1.Apollo,
            apollo_angular_link_http_1.HttpLink,
            store_service_1.Store])
    ], GraphQLModule);
    return GraphQLModule;
}());
exports.GraphQLModule = GraphQLModule;
//# sourceMappingURL=apollo.config.js.map