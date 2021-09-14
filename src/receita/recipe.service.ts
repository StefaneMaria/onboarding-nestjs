import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Recipe } from './recipe';

@Injectable()
export class RecipeService {
    constructor(@InjectModel('Receitas') private readonly recipeModel: Model<Recipe>){}

    async getAll(){
        return this.recipeModel.find().exec();
    }

}
