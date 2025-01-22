import { Request, Response, NextFunction } from 'express';
import Category from '../models/songCategory.js';

export default class CategoryService {
  // Get all categories
  async getAllCategories(req: Request, res: Response, next: NextFunction) {
    try {
      const categories = await Category.find();
      res.status(200).json({ success: true, data: categories });
    } catch (error) {
      next(error);
    }
  }

  // Get a single category by ID
  async getCategoryById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const category = await Category.findById(id);

      if (!category) {
        return res.status(404).json({ success: false, message: 'Category not found' });
      }

      res.status(200).json({ success: true, data: category });
    } catch (error) {
      next(error);
    }
  }

  // Add a new category
  async addCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, description } = req.body;

      if (!name || !description) {
        return res.status(400).json({ success: false, message: 'Name and description are required.' });
      }

      const newCategory = new Category({ name, description });
      const savedCategory = await newCategory.save();

      res.status(201).json({ success: true, data: savedCategory });
    } catch (error) {
      next(error);
    }
  }

  // Update an existing category by ID
  async updateCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { name, description } = req.body;

      const updatedCategory = await Category.findByIdAndUpdate(
        id,
        { name, description },
        { new: true, runValidators: true }
      );

      if (!updatedCategory) {
        return res.status(404).json({ success: false, message: 'Category not found' });
      }

      res.status(200).json({ success: true, data: updatedCategory });
    } catch (error) {
      next(error);
    }
  }

  // Delete a category by ID
  async deleteCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const deletedCategory = await Category.findByIdAndDelete(id);

      if (!deletedCategory) {
        return res.status(404).json({ success: false, message: 'Category not found' });
      }

      res.status(200).json({ success: true, message: 'Category deleted successfully' });
    } catch (error) {
      next(error);
    }
  }
}
