import express, { Request, Response, Router} from 'express'
const router:Router = express.Router();

router.get('/', (_req: Request, res: Response) => {
    res.json({
        success: true,
        data: 'home'
    })
})

export default router;
