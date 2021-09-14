import { Controller, Post, Get } from '@nestjs/common';
import { Recipe } from './recipe';
import { RecipeService } from './recipe.service';

@Controller('receitas')
export class RecipeController {
    constructor(private recipeService: RecipeService) {}

    @Get()
    async getRecipe(): Promise<Recipe[]>{
        return this.recipeService.getAll();
    }

}