(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-pages-fakeData-fakeData-module~invites-invites-module"],{

/***/ "./src/app/@core/data/invites-requests.service.ts":
/*!********************************************************!*\
  !*** ./src/app/@core/data/invites-requests.service.ts ***!
  \********************************************************/
/*! exports provided: InvitesRequestsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitesRequestsService", function() { return InvitesRequestsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm2015/ngApollo.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "../../node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_server_common_entities_GeoLocation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/server.common/entities/GeoLocation */ "../common/src/entities/GeoLocation.ts");
/* harmony import */ var _modules_server_common_data_abbreviation_to_country__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/server.common/data/abbreviation-to-country */ "../common/src/data/abbreviation-to-country.ts");







let InvitesRequestsService = class InvitesRequestsService {
    constructor(_apollo) {
        this._apollo = _apollo;
        this.invitesRequests$ = this._apollo
            .watchQuery({
            query: graphql_tag__WEBPACK_IMPORTED_MODULE_4___default.a `
				query allInvitesRequests {
					invitesRequests {
						id
						geoLocation {
							city
							streetAddress
							house
							countryId
							loc {
								coordinates
								type
							}
						}
						isInvited
						invitedDate
						apartment
					}
				}
			`,
            pollInterval: 2000,
        })
            .valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res.data.invitesRequests), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
    }
    getAllInvitesRequests() {
        return this.invitesRequests$;
    }
    getInvitesRequests(pagingOptions, invited) {
        return this._apollo
            .watchQuery({
            query: graphql_tag__WEBPACK_IMPORTED_MODULE_4___default.a `
					query AllInvitesRequests(
						$pagingOptions: PagingOptionsInput
						$invited: Boolean
					) {
						invitesRequests(
							pagingOptions: $pagingOptions
							invited: $invited
						) {
							id
							geoLocation {
								city
								streetAddress
								house
								countryId
								loc {
									coordinates
									type
								}
							}
							isInvited
							invitedDate
							apartment
						}
					}
				`,
            variables: { pagingOptions, invited },
            pollInterval: 2000,
        })
            .valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res.data.invitesRequests), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
    }
    createInviteRequest(createInput) {
        return this._apollo
            .mutate({
            mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_4___default.a `
					mutation CreateInviteRequest(
						$createInput: InviteRequestCreateInput!
					) {
						createInviteRequest(createInput: $createInput) {
							id
						}
					}
				`,
            variables: {
                createInput,
            },
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((result) => result.data.createInviteRequest), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
    }
    removeByIds(ids) {
        return this._apollo
            .mutate({
            mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_4___default.a `
					mutation RemoveInvitesRequestsByIds($ids: [String!]!) {
						removeInvitesRequestsByIds(ids: $ids) {
							n
						}
					}
				`,
            variables: { ids },
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((result) => result.data.removeInvitesRequestsByIds), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
    }
    updateInviteRequest(id, updateInput) {
        return this._apollo
            .mutate({
            mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_4___default.a `
					mutation UpdateInviteRequest(
						$id: String!
						$updateInput: InviteRequestUpdateInput!
					) {
						updateInviteRequest(
							id: $id
							updateInput: $updateInput
						) {
							id
						}
					}
				`,
            variables: {
                id,
                updateInput,
            },
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((result) => result.data.updateInviteRequest), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
    }
    getCreateInviteRequestObject(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this._tryFindNewAddress(data.house, data.address, data.city, Object.values(_modules_server_common_data_abbreviation_to_country__WEBPACK_IMPORTED_MODULE_6__["countries"]).indexOf(data.country));
            const lat = Number(res['lat']).toFixed(7);
            const lng = Number(res['lng']).toFixed(7);
            const geoLocation = {
                countryId: Object.values(_modules_server_common_data_abbreviation_to_country__WEBPACK_IMPORTED_MODULE_6__["countries"]).indexOf(data.country),
                city: data.city,
                streetAddress: data.address,
                house: data.house,
                loc: {
                    coordinates: [Number(lng), Number(lat)],
                    type: 'Point',
                },
            };
            const inviteRequest = {
                apartment: data.apartment,
                isManual: true,
                geoLocation,
            };
            return inviteRequest;
        });
    }
    generate1000InviteRequests(defaultLng, defaultLat) {
        return this._apollo.query({
            query: graphql_tag__WEBPACK_IMPORTED_MODULE_4___default.a `
				query Generate1000InviteRequests(
					$defaultLng: Float!
					$defaultLat: Float!
				) {
					generate1000InviteRequests(
						defaultLng: $defaultLng
						defaultLat: $defaultLat
					)
				}
			`,
            variables: { defaultLng, defaultLat },
        });
    }
    getCountOfInvitesRequests(invited) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this._apollo
                .query({
                query: graphql_tag__WEBPACK_IMPORTED_MODULE_4___default.a `
					query GetCountOfInvitesRequests($invited: Boolean) {
						getCountOfInvitesRequests(invited: $invited)
					}
				`,
                variables: { invited },
            })
                .toPromise();
            return res.data['getCountOfInvitesRequests'];
        });
    }
    _tryFindNewAddress(house, streetAddress, city, countryId) {
        const countryName = Object(_modules_server_common_entities_GeoLocation__WEBPACK_IMPORTED_MODULE_5__["getCountryName"])(countryId);
        const geocoder = new google.maps.Geocoder();
        return new Promise((resolve, reject) => {
            geocoder.geocode({
                address: `${streetAddress} ${house}, ${city}`,
                componentRestrictions: {
                    country: countryName,
                },
            }, (results, status) => {
                if (status === google.maps.GeocoderStatus.OK) {
                    const place = results[0];
                    resolve(place.geometry.location.toJSON());
                }
                else {
                    resolve({ lat: 0, lng: 0 });
                }
            });
        });
    }
};
InvitesRequestsService.ctorParameters = () => [
    { type: apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"] }
];
InvitesRequestsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"]])
], InvitesRequestsService);



/***/ }),

/***/ "./src/app/@core/data/invites.service.ts":
/*!***********************************************!*\
  !*** ./src/app/@core/data/invites.service.ts ***!
  \***********************************************/
/*! exports provided: InvitesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitesService", function() { return InvitesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm2015/ngApollo.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "../../node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _modules_server_common_entities_GeoLocation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/server.common/entities/GeoLocation */ "../common/src/entities/GeoLocation.ts");
/* harmony import */ var _modules_server_common_data_abbreviation_to_country__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/server.common/data/abbreviation-to-country */ "../common/src/data/abbreviation-to-country.ts");







let InvitesService = class InvitesService {
    constructor(apollo) {
        this.apollo = apollo;
        this.invites$ = this.apollo
            .watchQuery({
            query: graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a `
				query allInvites {
					invites {
						id
						code
						geoLocation {
							city
							streetAddress
							house
							countryId
							loc {
								coordinates
								type
							}
						}
						apartment
					}
				}
			`,
            pollInterval: 2000,
        })
            .valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((res) => res.data.invites), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
    }
    getAllInvitesRequests() {
        return this.invites$;
    }
    getInvites(pagingOptions) {
        return this.apollo
            .watchQuery({
            query: graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a `
					query AllInvites($pagingOptions: PagingOptionsInput) {
						invites(pagingOptions: $pagingOptions) {
							id
							code
							geoLocation {
								city
								streetAddress
								house
								countryId
								loc {
									coordinates
									type
								}
							}
							apartment
						}
					}
				`,
            variables: { pagingOptions },
            pollInterval: 2000,
        })
            .valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((res) => res.data.invites), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
    }
    createInvite(createInput) {
        return this.apollo
            .mutate({
            mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a `
					mutation CreateInvite($createInput: InviteCreateInput!) {
						createInvite(createInput: $createInput) {
							id
						}
					}
				`,
            variables: {
                createInput,
            },
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((result) => result.data.createInvite), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
    }
    removeByIds(ids) {
        return this.apollo
            .mutate({
            mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a `
					mutation RemoveInvitesByIds($ids: [String!]!) {
						removeInvitesByIds(ids: $ids) {
							n
						}
					}
				`,
            variables: { ids },
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((result) => result.data.removeInvitesByIds), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
    }
    updateInvite(id, updateInput) {
        return this.apollo
            .mutate({
            mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a `
					mutation UpdateInvite(
						$id: String!
						$updateInput: InviteUpdateInput!
					) {
						updateInvite(id: $id, updateInput: $updateInput) {
							id
						}
					}
				`,
            variables: {
                id,
                updateInput,
            },
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((result) => result.data.updateInvite), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
    }
    getCreateInviteObject(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this._tryFindNewAddress(data.house, data.address, data.city, Object.values(_modules_server_common_data_abbreviation_to_country__WEBPACK_IMPORTED_MODULE_6__["countries"]).indexOf(data.country));
            const lat = Number(res['lat']).toFixed(7);
            const lng = Number(res['lng']).toFixed(7);
            const geoLocation = {
                countryId: Object.values(_modules_server_common_data_abbreviation_to_country__WEBPACK_IMPORTED_MODULE_6__["countries"]).indexOf(data.country),
                city: data.city,
                streetAddress: data.address,
                house: data.house,
                loc: {
                    coordinates: [Number(lng), Number(lat)],
                    type: 'Point',
                },
            };
            const invite = {
                code: data.invite,
                apartment: data.apartment,
                geoLocation,
            };
            return invite;
        });
    }
    getCountOfInvites() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.apollo
                .query({
                query: graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a `
					query GetCountOfInvites {
						getCountOfInvites
					}
				`,
            })
                .toPromise();
            return res.data['getCountOfInvites'];
        });
    }
    generate1000InvitesConnectedToInviteRequests(defaultLng, defaultLat) {
        return this.apollo.query({
            query: graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a `
				query Generate1000InvitesConnectedToInviteRequests(
					$defaultLng: Float!
					$defaultLat: Float!
				) {
					generate1000InvitesConnectedToInviteRequests(
						defaultLng: $defaultLng
						defaultLat: $defaultLat
					)
				}
			`,
            variables: { defaultLng, defaultLat },
        });
    }
    _tryFindNewAddress(house, streetAddress, city, countryId) {
        const countryName = Object(_modules_server_common_entities_GeoLocation__WEBPACK_IMPORTED_MODULE_5__["getCountryName"])(countryId);
        const geocoder = new google.maps.Geocoder();
        return new Promise((resolve, reject) => {
            geocoder.geocode({
                address: `${streetAddress} ${house}, ${city}`,
                componentRestrictions: {
                    country: countryName,
                },
            }, (results, status) => {
                if (status === google.maps.GeocoderStatus.OK) {
                    const place = results[0];
                    resolve(place.geometry.location.toJSON());
                }
                else {
                    resolve({ lat: 0, lng: 0 });
                }
            });
        });
    }
};
InvitesService.ctorParameters = () => [
    { type: apollo_angular__WEBPACK_IMPORTED_MODULE_1__["Apollo"] }
];
InvitesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [apollo_angular__WEBPACK_IMPORTED_MODULE_1__["Apollo"]])
], InvitesService);



/***/ })

}]);
//# sourceMappingURL=default~app-pages-fakeData-fakeData-module~invites-invites-module-es2015.js.map