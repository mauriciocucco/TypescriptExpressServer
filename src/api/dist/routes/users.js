"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = require("../controllers/users");
const router = (0, express_1.Router)();
router.get('/', users_1.index);
router.get('/:id', users_1.show);
router.post('/', users_1.store);
router.put('/:id', users_1.update);
router.delete('/:id', users_1.destroy);
exports.default = router;
//# sourceMappingURL=users.js.map