// middlewares/catchAsyncErrors.js

module.exports.catchAsyncErrors  = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};
