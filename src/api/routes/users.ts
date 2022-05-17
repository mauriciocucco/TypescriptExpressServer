import { Router } from 'express';
import {
    index,
    show,
    store,
    update,
    destroy,
    paginated,
} from '../controllers/users';

const router = Router();

router.get('/', index);
router.get('/paginated', paginated);
router.get('/:id', show);
router.post('/', store);
router.put('/:id', update);
router.delete('/:id', destroy);

export default router;
