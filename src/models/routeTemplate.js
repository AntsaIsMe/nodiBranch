export const routeTemplate = (lowerName) =>{
    return `
    import { Router } from 'express';
    import * as ${lowerName}Controller from '../controllers/${lowerName}Controller.js';

    const router = Router();

    router.get('/', ${lowerName}Controller.getAll);
    router.get('/:id', ${lowerName}Controller.getOne);
    router.post('/', ${lowerName}Controller.create);
    router.put('/:id', ${lowerName}Controller.update);
    router.delete('/:id', ${lowerName}Controller.remove);

    export default router;
    `
}