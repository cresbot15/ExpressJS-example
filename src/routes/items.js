import { Router } from 'express';

const router = Router();

// Sending a JSON response
router.get('/', (req, res) => {
    res.json({ items: ['item1', 'item2'] });
})

// An example of a POST route with a JSON response
router.post('/', (req, res) => {
    const item = req.body;
    res.json({ message: 'Recieved', data: item});
});

export default router;