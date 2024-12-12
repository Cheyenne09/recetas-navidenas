import { Router } from 'express';
import {
    getAllRecipes,
    addRecipe,
    getRecipeById,
} from '../controllers/recipeController';

const router = Router();


router.get('/', getAllRecipes);
router.post('/', addRecipe);
router.get('/:id', getRecipeById);

export default router;