import express, {Request, NextFunction, Response} from 'express'
import MusicService from './services/musicService.js'
import AuthService from './services/authService.js'
import passport from 'passport'
import CategoryService from './services/categoryService.js'

const router = express.Router()
  
 // Local login route
router.post('/login', async(req:Request, res:Response, next:NextFunction)=> {
  await new AuthService().localLogin(req, res, next)
});

  
//Google strategy
  router.get('/auth/google', 
    passport.authenticate('google', { scope: ['profile', 'email'] })
  );
  
  router.get('/auth/google/callback', 
    passport.authenticate('google', { failureRedirect: '/' }),
    (req: Request, res: Response) => {
      res.redirect('/');
    }
  );
  
  //Facebook strategy
  router.get('/auth/facebook', passport.authenticate('facebook'));
  
  router.get('/auth/facebook/callback', 
    passport.authenticate('facebook', { failureRedirect: '/' }),
    (req: Request, res: Response) => {
      res.redirect('/');
    }
  );
  

    
  router.get('/logout', (req: any, res: Response) => {
    req.logout();
    req.session.destroy(); 
    res.redirect('/');
  });

  //Category 
  const categoryService = new CategoryService();
  router.get('/categories', async (req:Request, res:Response, next:NextFunction) => await categoryService.getAllCategories(req, res, next));
  router.get('/categories/:id', async (req:Request, res:Response, next:NextFunction) => await categoryService.getCategoryById(req, res, next));
  router.post('/categories', async(req:Request, res:Response, next:NextFunction)=> await categoryService.addCategory(req, res, next));
  router.put('/categories/:id', async(req:Request, res:Response, next:NextFunction)=> await categoryService.updateCategory(req, res, next));
  router.delete('/categories/:id', async(req:Request, res:Response, next:NextFunction)=> await categoryService.deleteCategory(req, res, next));
  

  //Songs
  const musicService = new MusicService();
router.get('/songs', async(req:Request, res:Response, next:NextFunction)=> await musicService.getAllSongs(req, res, next));
router.get('/songs/:id', async(req:Request, res:Response, next:NextFunction)=> await musicService.getSongById(req, res, next));
router.post('/songs', async(req:Request, res:Response, next:NextFunction)=> await musicService.addSong(req, res, next));
router.put('/songs/:id', async(req:Request, res:Response, next:NextFunction)=> await musicService.updateSong(req, res, next));
router.delete('/songs/:id', async(req:Request, res:Response, next:NextFunction)=> await musicService.deleteSong(req, res, next));

export default router