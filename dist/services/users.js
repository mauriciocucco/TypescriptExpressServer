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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.storeUser = exports.getUserById = exports.getUsers = void 0;
const userValidators_1 = require("../lib/userValidators");
const User_1 = __importDefault(require("../models/User"));
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield User_1.default.findAll();
    return users;
});
exports.getUsers = getUsers;
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.default.findByPk(id);
    if (!user) {
        const error = new Error("User not found");
        error.status = 404;
        throw error;
    }
    return user;
});
exports.getUserById = getUserById;
const storeUser = (body) => __awaiter(void 0, void 0, void 0, function* () {
    // eslint-disable-next-line no-useless-catch
    try {
        yield (0, userValidators_1.verifyUniqueEmail)(body.email);
        const user = User_1.default.build(body);
        yield user.save();
        return user;
    }
    catch (error) {
        throw error;
    }
});
exports.storeUser = storeUser;
const updateUser = (id, body) => __awaiter(void 0, void 0, void 0, function* () {
    // eslint-disable-next-line no-useless-catch
    try {
        const user = yield (0, exports.getUserById)(id);
        yield (0, userValidators_1.verifyUniqueEmail)(body.email);
        yield user.update(body);
        yield user.save();
        return user;
    }
    catch (error) {
        throw error;
    }
});
exports.updateUser = updateUser;
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    // eslint-disable-next-line no-useless-catch
    try {
        const user = yield (0, exports.getUserById)(id);
        yield user.update({ status: false });
        yield user.save();
        return user;
    }
    catch (error) {
        throw error;
    }
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=users.js.map