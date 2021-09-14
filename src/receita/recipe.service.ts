import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Recipe } from './recipe';

@Injectable()
export class RecipeService {
    private recipe: Recipe[] = [];
    constructor(@InjectModel('Receitas') private readonly recipeModel: Model<Recipe>){}

    async getAll(){
        return this.recipeModel.find().exec();
    }

    async create(name: string, ingredients: string, preparation: string){
        const newRecipe = new this.recipeModel({name, ingredients, preparation});
        const result = await newRecipe.save();
        return result.id as string;
    }

/*
    async create(recipe: Recipe): Promise<Recipe>{
        const createdRecipe = new this.recipeModel(recipe);
        return createdRecipe.save();
    }
*/
}
