import { State } from "core/store/root-reducer";
import { getRecipesVMSelector } from "./selectors";
import { Recipe as RecipeApi } from "./api";
import { Recipe as RecipeVm } from "./recipes.view-model";

describe('selectors', () => {
    it('should return the expected mapped recipes list', () => {
        //Arrange
        const recipe1Api: RecipeApi = { id: '1', name: 'pizza', ingredients: ['tomato', 'cheese', 'onion', 'olives'] }
        const recipe2Api: RecipeApi = { id: '2', name: 'vegan lentils', ingredients: ['lentils', 'vegetables mix', 'potato', 'onion'] }

        const recipe1Vm: RecipeVm = { id: '1', name: 'pizza', ingredients: ['tomato', 'cheese', 'onion', 'olives'] }
        const recipe2Vm: RecipeVm = { id: '2', name: 'vegan lentils', ingredients: ['lentils', 'vegetables mix', 'potato', 'onion'] }

        const state: State = {
            recipesPod: {
                recipes: [recipe1Api, recipe2Api]
            },
            router: null
        }
        //Act
        const result = getRecipesVMSelector(state);

        //Assert
        expect(result).toEqual([recipe1Vm, recipe2Vm]);
    });
});