import { Router } from 'express';
import {
    destroy,
    index,
    paginated,
    show,
    store,
    update,
} from '../controllers/companies';

const router = Router();

router.get('/', index);
router.get('/paginated', paginated);
router.get('/:id', show);
router.post('/', store);
router.put('/:id', update);
router.delete('/:id', destroy);

export default router;
