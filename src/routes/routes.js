import { Router } from "express";
const router = Router();
router.get('/', (req, res) => {
    res.sendStatus(200).send('Hola Mundo')
});
export default router;