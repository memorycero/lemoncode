import { renderHook, act } from '@testing-library/react-hooks';
import { useRecipes } from './useRecipes';
import { Recipe } from '../recipes.view-model';
import { pizza, pumpkinSoup, paella } from '../recipes.mock';

describe('useRecipes specs', () => {

    it('should return an empty list of filtered recipes and a function to handle the filter process', () => {
        //Arrange
        const recipes: Recipe[] = [];
        //Act
        const { result } = renderHook(() => useRecipes(recipes));

        //Assert
        expect(result.current.filteredRecipes).toEqual(recipes);
        expect(result.current.handleFilter).toEqual(expect.any(Function));
    });

    it('should return the original recipes list without any filter applied', () => {
        //Arrange
        const allRecipes: Recipe[] = [pizza, pumpkinSoup, paella];

        //Act
        const { result } = renderHook(() => useRecipes(allRecipes));

        //Assert
        expect(result.current.filteredRecipes).toEqual(allRecipes);
    });

    it('should return only the recipes which contain cheese', () => {
        //Arrange
        const allRecipes: Recipe[] = [pizza, pumpkinSoup, paella];

        //Act
        const { result } = renderHook(() => useRecipes(allRecipes));
        act(() => {
            result.current.handleFilter('cheese');
        });

        //Assert
        const cheeseRecipes: Recipe[] = [pizza];
        expect(result.current.filteredRecipes).toEqual(cheeseRecipes);
    });
});