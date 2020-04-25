function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n\t\t\t\tquery Generate1000InvitesConnectedToInviteRequests(\n\t\t\t\t\t$defaultLng: Float!\n\t\t\t\t\t$defaultLat: Float!\n\t\t\t\t) {\n\t\t\t\t\tgenerate1000InvitesConnectedToInviteRequests(\n\t\t\t\t\t\tdefaultLng: $defaultLng\n\t\t\t\t\t\tdefaultLat: $defaultLat\n\t\t\t\t\t)\n\t\t\t\t}\n\t\t\t"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n\t\t\t\t\tquery GetCountOfInvites {\n\t\t\t\t\t\tgetCountOfInvites\n\t\t\t\t\t}\n\t\t\t\t"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n\t\t\t\t\tmutation UpdateInvite(\n\t\t\t\t\t\t$id: String!\n\t\t\t\t\t\t$updateInput: InviteUpdateInput!\n\t\t\t\t\t) {\n\t\t\t\t\t\tupdateInvite(id: $id, updateInput: $updateInput) {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n\t\t\t\t\tmutation RemoveInvitesByIds($ids: [String!]!) {\n\t\t\t\t\t\tremoveInvitesByIds(ids: $ids) {\n\t\t\t\t\t\t\tn\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n\t\t\t\t\tmutation CreateInvite($createInput: InviteCreateInput!) {\n\t\t\t\t\t\tcreateInvite(createInput: $createInput) {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n\t\t\t\t\tquery AllInvites($pagingOptions: PagingOptionsInput) {\n\t\t\t\t\t\tinvites(pagingOptions: $pagingOptions) {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tcode\n\t\t\t\t\t\t\tgeoLocation {\n\t\t\t\t\t\t\t\tcity\n\t\t\t\t\t\t\t\tstreetAddress\n\t\t\t\t\t\t\t\thouse\n\t\t\t\t\t\t\t\tcountryId\n\t\t\t\t\t\t\t\tloc {\n\t\t\t\t\t\t\t\t\tcoordinates\n\t\t\t\t\t\t\t\t\ttype\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tapartment\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n\t\t\t\tquery allInvites {\n\t\t\t\t\tinvites {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tcode\n\t\t\t\t\t\tgeoLocation {\n\t\t\t\t\t\t\tcity\n\t\t\t\t\t\t\tstreetAddress\n\t\t\t\t\t\t\thouse\n\t\t\t\t\t\t\tcountryId\n\t\t\t\t\t\t\tloc {\n\t\t\t\t\t\t\t\tcoordinates\n\t\t\t\t\t\t\t\ttype\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\tapartment\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n\t\t\t\t\tquery GetCountOfInvitesRequests($invited: Boolean) {\n\t\t\t\t\t\tgetCountOfInvitesRequests(invited: $invited)\n\t\t\t\t\t}\n\t\t\t\t"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n\t\t\t\tquery Generate1000InviteRequests(\n\t\t\t\t\t$defaultLng: Float!\n\t\t\t\t\t$defaultLat: Float!\n\t\t\t\t) {\n\t\t\t\t\tgenerate1000InviteRequests(\n\t\t\t\t\t\tdefaultLng: $defaultLng\n\t\t\t\t\t\tdefaultLat: $defaultLat\n\t\t\t\t\t)\n\t\t\t\t}\n\t\t\t"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n\t\t\t\t\tmutation UpdateInviteRequest(\n\t\t\t\t\t\t$id: String!\n\t\t\t\t\t\t$updateInput: InviteRequestUpdateInput!\n\t\t\t\t\t) {\n\t\t\t\t\t\tupdateInviteRequest(\n\t\t\t\t\t\t\tid: $id\n\t\t\t\t\t\t\tupdateInput: $updateInput\n\t\t\t\t\t\t) {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n\t\t\t\t\tmutation RemoveInvitesRequestsByIds($ids: [String!]!) {\n\t\t\t\t\t\tremoveInvitesRequestsByIds(ids: $ids) {\n\t\t\t\t\t\t\tn\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\t\t\t\t\tmutation CreateInviteRequest(\n\t\t\t\t\t\t$createInput: InviteRequestCreateInput!\n\t\t\t\t\t) {\n\t\t\t\t\t\tcreateInviteRequest(createInput: $createInput) {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\t\t\t\t\tquery AllInvitesRequests(\n\t\t\t\t\t\t$pagingOptions: PagingOptionsInput\n\t\t\t\t\t\t$invited: Boolean\n\t\t\t\t\t) {\n\t\t\t\t\t\tinvitesRequests(\n\t\t\t\t\t\t\tpagingOptions: $pagingOptions\n\t\t\t\t\t\t\tinvited: $invited\n\t\t\t\t\t\t) {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tgeoLocation {\n\t\t\t\t\t\t\t\tcity\n\t\t\t\t\t\t\t\tstreetAddress\n\t\t\t\t\t\t\t\thouse\n\t\t\t\t\t\t\t\tcountryId\n\t\t\t\t\t\t\t\tloc {\n\t\t\t\t\t\t\t\t\tcoordinates\n\t\t\t\t\t\t\t\t\ttype\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tisInvited\n\t\t\t\t\t\t\tinvitedDate\n\t\t\t\t\t\t\tapartment\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\t\t\t\tquery allInvitesRequests {\n\t\t\t\t\tinvitesRequests {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tgeoLocation {\n\t\t\t\t\t\t\tcity\n\t\t\t\t\t\t\tstreetAddress\n\t\t\t\t\t\t\thouse\n\t\t\t\t\t\t\tcountryId\n\t\t\t\t\t\t\tloc {\n\t\t\t\t\t\t\t\tcoordinates\n\t\t\t\t\t\t\t\ttype\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\tisInvited\n\t\t\t\t\t\tinvitedDate\n\t\t\t\t\t\tapartment\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-pages-fakeData-fakeData-module~invites-invites-module"], {
  /***/
  "./src/app/@core/data/invites-requests.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/@core/data/invites-requests.service.ts ***!
    \********************************************************/

  /*! exports provided: InvitesRequestsService */

  /***/
  function srcAppCoreDataInvitesRequestsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InvitesRequestsService", function () {
      return InvitesRequestsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! apollo-angular */
    "./node_modules/apollo-angular/fesm2015/ngApollo.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! graphql-tag */
    "../../node_modules/graphql-tag/src/index.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _modules_server_common_entities_GeoLocation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @modules/server.common/entities/GeoLocation */
    "../common/src/entities/GeoLocation.ts");
    /* harmony import */


    var _modules_server_common_data_abbreviation_to_country__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @modules/server.common/data/abbreviation-to-country */
    "../common/src/data/abbreviation-to-country.ts");

    var InvitesRequestsService = /*#__PURE__*/function () {
      function InvitesRequestsService(_apollo) {
        _classCallCheck(this, InvitesRequestsService);

        this._apollo = _apollo;
        this.invitesRequests$ = this._apollo.watchQuery({
          query: graphql_tag__WEBPACK_IMPORTED_MODULE_4___default.a(_templateObject()),
          pollInterval: 2000
        }).valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
          return res.data.invitesRequests;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
      }

      _createClass(InvitesRequestsService, [{
        key: "getAllInvitesRequests",
        value: function getAllInvitesRequests() {
          return this.invitesRequests$;
        }
      }, {
        key: "getInvitesRequests",
        value: function getInvitesRequests(pagingOptions, invited) {
          return this._apollo.watchQuery({
            query: graphql_tag__WEBPACK_IMPORTED_MODULE_4___default.a(_templateObject2()),
            variables: {
              pagingOptions: pagingOptions,
              invited: invited
            },
            pollInterval: 2000
          }).valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res.data.invitesRequests;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
        }
      }, {
        key: "createInviteRequest",
        value: function createInviteRequest(createInput) {
          return this._apollo.mutate({
            mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_4___default.a(_templateObject3()),
            variables: {
              createInput: createInput
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            return result.data.createInviteRequest;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
        }
      }, {
        key: "removeByIds",
        value: function removeByIds(ids) {
          return this._apollo.mutate({
            mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_4___default.a(_templateObject4()),
            variables: {
              ids: ids
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            return result.data.removeInvitesRequestsByIds;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
        }
      }, {
        key: "updateInviteRequest",
        value: function updateInviteRequest(id, updateInput) {
          return this._apollo.mutate({
            mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_4___default.a(_templateObject5()),
            variables: {
              id: id,
              updateInput: updateInput
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            return result.data.updateInviteRequest;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
        }
      }, {
        key: "getCreateInviteRequestObject",
        value: function getCreateInviteRequestObject(data) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var res, lat, lng, geoLocation, inviteRequest;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this._tryFindNewAddress(data.house, data.address, data.city, Object.values(_modules_server_common_data_abbreviation_to_country__WEBPACK_IMPORTED_MODULE_6__["countries"]).indexOf(data.country));

                  case 2:
                    res = _context.sent;
                    lat = Number(res['lat']).toFixed(7);
                    lng = Number(res['lng']).toFixed(7);
                    geoLocation = {
                      countryId: Object.values(_modules_server_common_data_abbreviation_to_country__WEBPACK_IMPORTED_MODULE_6__["countries"]).indexOf(data.country),
                      city: data.city,
                      streetAddress: data.address,
                      house: data.house,
                      loc: {
                        coordinates: [Number(lng), Number(lat)],
                        type: 'Point'
                      }
                    };
                    inviteRequest = {
                      apartment: data.apartment,
                      isManual: true,
                      geoLocation: geoLocation
                    };
                    return _context.abrupt("return", inviteRequest);

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "generate1000InviteRequests",
        value: function generate1000InviteRequests(defaultLng, defaultLat) {
          return this._apollo.query({
            query: graphql_tag__WEBPACK_IMPORTED_MODULE_4___default.a(_templateObject6()),
            variables: {
              defaultLng: defaultLng,
              defaultLat: defaultLat
            }
          });
        }
      }, {
        key: "getCountOfInvitesRequests",
        value: function getCountOfInvitesRequests(invited) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var res;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this._apollo.query({
                      query: graphql_tag__WEBPACK_IMPORTED_MODULE_4___default.a(_templateObject7()),
                      variables: {
                        invited: invited
                      }
                    }).toPromise();

                  case 2:
                    res = _context2.sent;
                    return _context2.abrupt("return", res.data['getCountOfInvitesRequests']);

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "_tryFindNewAddress",
        value: function _tryFindNewAddress(house, streetAddress, city, countryId) {
          var countryName = Object(_modules_server_common_entities_GeoLocation__WEBPACK_IMPORTED_MODULE_5__["getCountryName"])(countryId);
          var geocoder = new google.maps.Geocoder();
          return new Promise(function (resolve, reject) {
            geocoder.geocode({
              address: "".concat(streetAddress, " ").concat(house, ", ").concat(city),
              componentRestrictions: {
                country: countryName
              }
            }, function (results, status) {
              if (status === google.maps.GeocoderStatus.OK) {
                var place = results[0];
                resolve(place.geometry.location.toJSON());
              } else {
                resolve({
                  lat: 0,
                  lng: 0
                });
              }
            });
          });
        }
      }]);

      return InvitesRequestsService;
    }();

    InvitesRequestsService.ctorParameters = function () {
      return [{
        type: apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"]
      }];
    };

    InvitesRequestsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"]])], InvitesRequestsService);
    /***/
  },

  /***/
  "./src/app/@core/data/invites.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/@core/data/invites.service.ts ***!
    \***********************************************/

  /*! exports provided: InvitesService */

  /***/
  function srcAppCoreDataInvitesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InvitesService", function () {
      return InvitesService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! apollo-angular */
    "./node_modules/apollo-angular/fesm2015/ngApollo.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! graphql-tag */
    "../../node_modules/graphql-tag/src/index.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _modules_server_common_entities_GeoLocation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @modules/server.common/entities/GeoLocation */
    "../common/src/entities/GeoLocation.ts");
    /* harmony import */


    var _modules_server_common_data_abbreviation_to_country__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @modules/server.common/data/abbreviation-to-country */
    "../common/src/data/abbreviation-to-country.ts");

    var InvitesService = /*#__PURE__*/function () {
      function InvitesService(apollo) {
        _classCallCheck(this, InvitesService);

        this.apollo = apollo;
        this.invites$ = this.apollo.watchQuery({
          query: graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a(_templateObject8()),
          pollInterval: 2000
        }).valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
          return res.data.invites;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
      }

      _createClass(InvitesService, [{
        key: "getAllInvitesRequests",
        value: function getAllInvitesRequests() {
          return this.invites$;
        }
      }, {
        key: "getInvites",
        value: function getInvites(pagingOptions) {
          return this.apollo.watchQuery({
            query: graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a(_templateObject9()),
            variables: {
              pagingOptions: pagingOptions
            },
            pollInterval: 2000
          }).valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res.data.invites;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
        }
      }, {
        key: "createInvite",
        value: function createInvite(createInput) {
          return this.apollo.mutate({
            mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a(_templateObject10()),
            variables: {
              createInput: createInput
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            return result.data.createInvite;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
        }
      }, {
        key: "removeByIds",
        value: function removeByIds(ids) {
          return this.apollo.mutate({
            mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a(_templateObject11()),
            variables: {
              ids: ids
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            return result.data.removeInvitesByIds;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
        }
      }, {
        key: "updateInvite",
        value: function updateInvite(id, updateInput) {
          return this.apollo.mutate({
            mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a(_templateObject12()),
            variables: {
              id: id,
              updateInput: updateInput
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            return result.data.updateInvite;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
        }
      }, {
        key: "getCreateInviteObject",
        value: function getCreateInviteObject(data) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var res, lat, lng, geoLocation, invite;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this._tryFindNewAddress(data.house, data.address, data.city, Object.values(_modules_server_common_data_abbreviation_to_country__WEBPACK_IMPORTED_MODULE_6__["countries"]).indexOf(data.country));

                  case 2:
                    res = _context3.sent;
                    lat = Number(res['lat']).toFixed(7);
                    lng = Number(res['lng']).toFixed(7);
                    geoLocation = {
                      countryId: Object.values(_modules_server_common_data_abbreviation_to_country__WEBPACK_IMPORTED_MODULE_6__["countries"]).indexOf(data.country),
                      city: data.city,
                      streetAddress: data.address,
                      house: data.house,
                      loc: {
                        coordinates: [Number(lng), Number(lat)],
                        type: 'Point'
                      }
                    };
                    invite = {
                      code: data.invite,
                      apartment: data.apartment,
                      geoLocation: geoLocation
                    };
                    return _context3.abrupt("return", invite);

                  case 8:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "getCountOfInvites",
        value: function getCountOfInvites() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var res;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.apollo.query({
                      query: graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a(_templateObject13())
                    }).toPromise();

                  case 2:
                    res = _context4.sent;
                    return _context4.abrupt("return", res.data['getCountOfInvites']);

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "generate1000InvitesConnectedToInviteRequests",
        value: function generate1000InvitesConnectedToInviteRequests(defaultLng, defaultLat) {
          return this.apollo.query({
            query: graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a(_templateObject14()),
            variables: {
              defaultLng: defaultLng,
              defaultLat: defaultLat
            }
          });
        }
      }, {
        key: "_tryFindNewAddress",
        value: function _tryFindNewAddress(house, streetAddress, city, countryId) {
          var countryName = Object(_modules_server_common_entities_GeoLocation__WEBPACK_IMPORTED_MODULE_5__["getCountryName"])(countryId);
          var geocoder = new google.maps.Geocoder();
          return new Promise(function (resolve, reject) {
            geocoder.geocode({
              address: "".concat(streetAddress, " ").concat(house, ", ").concat(city),
              componentRestrictions: {
                country: countryName
              }
            }, function (results, status) {
              if (status === google.maps.GeocoderStatus.OK) {
                var place = results[0];
                resolve(place.geometry.location.toJSON());
              } else {
                resolve({
                  lat: 0,
                  lng: 0
                });
              }
            });
          });
        }
      }]);

      return InvitesService;
    }();

    InvitesService.ctorParameters = function () {
      return [{
        type: apollo_angular__WEBPACK_IMPORTED_MODULE_1__["Apollo"]
      }];
    };

    InvitesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [apollo_angular__WEBPACK_IMPORTED_MODULE_1__["Apollo"]])], InvitesService);
    /***/
  }
}]);
//# sourceMappingURL=default~app-pages-fakeData-fakeData-module~invites-invites-module-es5.js.map