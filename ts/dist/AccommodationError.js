"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccommodationError = void 0;
class AccommodationError extends Error {
    isAccommodationError = true;
    sdk = 'Accommodation';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.AccommodationError = AccommodationError;
//# sourceMappingURL=AccommodationError.js.map