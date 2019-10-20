import { recipesPodReducer, RecipesPodState, createDefaultState } from './reducers';
import { BaseAction } from 'common/types/base-action';
import { actionTypes } from './action-types';
import deepFreeze from 'deep-freeze';
import { pumpkinSoup, paella } from '../recipes.mock';

describe('reducers specs', () => {
    it('should return the initial expected state when passing state as undefined', () => {
        //Arrange
        const action: BaseAction = {
            type: 'INIT',
            payload: null,
        };

        //Act
        const result = recipesPodReducer(undefined, action);

        //Assert
        expect(result).toEqual(createDefaultState());
    });

    it('should update recipes with the given payload', () => {
        //Arrange
        const state: RecipesPodState = {
            recipes: []
        };

        deepFreeze(state);

        const action: BaseAction = {
            type: actionTypes.UPDATE_RECIPES,
            payload: [pumpkinSoup, paella],
        };

        //Act
        const result = recipesPodReducer(state, action);

        //Assert
        expect(result.recipes).toEqual([pumpkinSoup, paella]);
    });
})