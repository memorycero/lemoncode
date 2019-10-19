import * as apiModel from './api/recipes.api-model';
import * as vm from './recipes.view-model';
import { mapRecipeFromApiToVm } from './recipes.mappers';

describe('recipes mapper specs', () => {
    it('should return an empty recipe when it feeds undefined', () => {
      // Arrange
      const recipe: apiModel.Recipe = undefined;
  
      // Act
      const result: vm.Recipe = mapRecipeFromApiToVm(recipe);
  
      // Assert
      expect(result).toEqual(vm.createEmptyRecipe());
    });

    it('should return a mapped recipe when it feeds with a correct one', () => {
        // Arrange
        const recipe: apiModel.Recipe = {
            id: "recipe_1",
            name: "Summer salada",
            ingredients: ['Lechuce','tomatoe','onion', 'oil', 'salt']
        };
    
        // Act
        const result: vm.Recipe = mapRecipeFromApiToVm(recipe);
    
        // Assert
        expect(result).toEqual({
            id: "recipe_1", name: "Summer salada", ingredients: ['Lechuce','tomatoe','onion', 'oil', 'salt']});
      });
})