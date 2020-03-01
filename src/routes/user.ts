import express, { Request, Response, Router, NextFunction} from 'express'
import { User } from '../model';
import createError from 'http-errors';
import { INTERNAL_SERVER_ERROR } from 'http-status-codes';
const router:Router = express.Router();
// 获取所有用户
router.get('/', async (_req: Request, res: Response) => {
    const user = await User.findAll();
    res.json({
        success: true,
        data: user
    })
})

// 获取单个用户
router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await User.findByPk(req.params.id);
    if(user) {
      res.json({
        success: true,
        data: user
      })
    }
  } catch (error) {
    next(createError(INTERNAL_SERVER_ERROR))
  }
})

// 添加用户
router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    let content = req.body;
    content = await User.create(content);
    if(content) {
      res.json({
        success: true,
        data: content
      })
    }
  } catch (error) {
    next(createError(INTERNAL_SERVER_ERROR))
  }
})

// 更新用户
router.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    let content = req.body;
    let user = await User.findByPk(id);
      user = await user.update(content);
    if(user) {
      res.json({
        success: true,
        data: user
      })
    }
  } catch (error) {
    next(createError(INTERNAL_SERVER_ERROR))
  }
})

// 删除用户
router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    let user = await User.findByPk(id);
      user = await user.destroy(); // destroy 一定要拼对
    if(user) {
      res.json({
        success: true,
        data: user
      })
    }
  } catch (error) {
    next(createError(INTERNAL_SERVER_ERROR))
  }
})

export default router;