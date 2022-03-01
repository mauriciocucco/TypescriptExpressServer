"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroy = exports.update = exports.store = exports.show = exports.index = void 0;
const users_1 = require("../services/users");
const index = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, users_1.getUsers)();
        res.json({
            data: users,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.index = index;
const show = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, users_1.getUserById)(req.params.id);
        res.json({
            data: user,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.show = show;
const store = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = yield (0, users_1.storeUser)(req.body);
        res.json({
            data: newUser
        });
    }
    catch (error) {
        next(error);
    }
});
exports.store = store;
const update = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedUser = yield (0, users_1.updateUser)(req.params.id, req.body);
        res.json({
            data: updatedUser,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.update = update;
const destroy = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedUser = yield (0, users_1.deleteUser)(req.params.id);
        res.json({
            data: deletedUser,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.destroy = destroy;
//# sourceMappingURL=users.js.map