import { getRecipesRequest, updateRecipes } from "./actions";
import {actionTypes} from './action-types';
import { Recipe } from "../recipes.view-model";
import { pizza } from "../recipes.mock";


describe('actions specs', () => {
    it('should return an action with type GET_RECIPES_REQUEST', () => {
        //Arrange
        //Act
        const result = getRecipesRequest();
        //Assert
        expect(result.type).toEqual(actionTypes.GET_RECIPES_REQUEST);
    });

    it('should return an action with type UPDATE_RECIPES and a list of recipes', () => {
        //Arrange
        const recipes: Recipe[] = [pizza];
        //Act
        const result = updateRecipes(recipes);
        //Assert
        expect(result.type).toEqual(actionTypes.UPDATE_RECIPES);
        expect(result.payload).toEqual(recipes);
    });
})