import { Router } from "express";
import itemRoutes from './items.js'

const router = Router();

/* Creating API routes involves using route handlers, they specify a route
and a callback function to be called when a request is sent to that route
req is the request object, and res is the response object */
router.get('/', (req, res) => {
    console.log('Received request');
    res.send('Hello world!');
});

router.use('/items', itemRoutes)

export default router;