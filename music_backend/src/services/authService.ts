import {Request, Response, NextFunction } from "express-serve-static-core";
import bcrypt from 'bcrypt'
import UserSchema from '../models/user.js'

export default class AuthService {

    async localLogin(req: Request, res: Response, next: NextFunction) {
      console.log(req.body)
        const { username, password } = req.body;
    
        try {
          const user = await UserSchema.findOne({ username });
          if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
          }
    
          const isMatch = await bcrypt.compare(password, user.password);
          if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
          }
    
          // Generate JWT or session token here
    
          res.status(200).json({ message: 'Login successful' }); 
        } catch (error) {
          next(error);
        }
      }
}