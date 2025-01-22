import {Request, Response, NextFunction } from "express-serve-static-core";
import Song from '../models/songs.js'
import Category from '../models/songCategory.js';
export default class MusicService {

    addCategory(req:Request, res:Response, next:NextFunction){}

     // Get all songs
  async getAllSongs(req: Request, res: Response, next: NextFunction) {
    try {
      const songs = await Song.find().populate('category', 'name'); 
      res.status(200).json({ success: true, data: songs });
    } catch (error) {
      next(error);
    }
  }

  // Get a single song by ID
  async getSongById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const song = await Song.findById(id).populate('category', 'name');

      if (!song) {
        return res.status(404).json({ success: false, message: 'Song not found' });
      }

      res.status(200).json({ success: true, data: song });
    } catch (error) {
      next(error);
    }
  }

  // Add a new song
  async addSong(req: Request, res: Response, next: NextFunction) {
    try {
      const { title, artist, artwork, url, category } = req.body;

      if (!title || !artist || !artwork || !url) {
        return res.status(400).json({ success: false, message: 'All fields are required.' });
      }

      // Validate if the category exists
      const existingCategory = await Category.findById(category);
      if (!existingCategory) {
        return res.status(404).json({ success: false, message: 'Category not found' });
      }

      const newSong = new Song({ title, artist, artwork, url, category });
      const savedSong = await newSong.save();

      res.status(201).json({ success: true, data: savedSong });
    } catch (error) {
      next(error);
    }
  }

  // Update an existing song by ID
  async updateSong(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { title, artist, artwork, url, category } = req.body;

      const updatedSong = await Song.findByIdAndUpdate(
        id,
        { title, artist, artwork, url, category },
        { new: true, runValidators: true }
      ).populate('category', 'name');

      if (!updatedSong) {
        return res.status(404).json({ success: false, message: 'Song not found' });
      }

      res.status(200).json({ success: true, data: updatedSong });
    } catch (error) {
      next(error);
    }
  }

  // Delete a song by ID
  async deleteSong(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const deletedSong = await Song.findByIdAndDelete(id);

      if (!deletedSong) {
        return res.status(404).json({ success: false, message: 'Song not found' });
      }

      res.status(200).json({ success: true, message: 'Song deleted successfully' });
    } catch (error) {
      next(error);
    }
  }

}