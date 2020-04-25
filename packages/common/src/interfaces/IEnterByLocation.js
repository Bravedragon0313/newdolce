"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function toEnterByLocation(location, apartment) {
    return {
        apartment: apartment,
        house: location.house,
        streetAddress: location.streetAddress,
        city: location.city,
        countryId: location.countryId,
        postcode: location.postcode,
    };
}
exports.toEnterByLocation = toEnterByLocation;
//# sourceMappingURL=IEnterByLocation.js.map