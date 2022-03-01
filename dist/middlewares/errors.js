"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generalErrors = exports.notFound = void 0;
const notFound = (req, res, next) => {
    const error = new Error("Route not found.");
    error.status = 404; // eslint-disable-line no-param-reassign
    next(error);
};
exports.notFound = notFound;
const generalErrors = (err, req, res, next) => {
    if (!err) { //no hay error
        return next();
    }
    console.log('ERROR DESDE EL HANDLER: ', err);
    if (err.validationErrors) {
        return res.status(err.status).json({ errors: err.validationErrors });
    }
    res.status(err.status || 500).json({ error: err.message || 'Internal server error.' });
};
exports.generalErrors = generalErrors;
//# sourceMappingURL=errors.js.map