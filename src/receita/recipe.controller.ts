import { Controller, Post, Get, Body } from '@nestjs/common';
import { Recipe } from './recipe';
import { RecipeService } from './recipe.service';

@Controller('receitas')
export class RecipeController {
    constructor(private recipeService: RecipeService) {}

    @Get()
    async getRecipe(): Promise<Recipe[]>{
        return this.recipeService.getAll();
    }

    @Post()
    async addRecipe(
        @Body('name') recName: string,
        @Body('ingredients') recIngr: string,
        @Body('preparation') recPrep: string,
    ){
        const generatedId = await this.recipeService.create( recName, recIngr, recPrep);
        return { id: generatedId };
    }
    
}