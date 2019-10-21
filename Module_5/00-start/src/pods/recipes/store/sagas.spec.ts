import { watchRecipesPodSagas, getRecipesRequestSaga } from './sagas'
import { takeLatest, call, put } from 'redux-saga/effects';
import { actionTypes } from './action-types';
import { getRecipes } from '../api';
import { updateRecipes } from './actions';
import { pizza, pumpkinSoup } from '../recipes.mock';

describe('sagas specs', () => {
    describe('watchRecipesPodSagas', () => {
        it('should wait for action of type GET_RECIPES_REQUEST and execute the expected worker', () => {
            //Arrange
            const saga = watchRecipesPodSagas();
            const expectedResult = takeLatest(actionTypes.GET_RECIPES_REQUEST, getRecipesRequestSaga);
            //Act
            const result = saga.next();
            //Assert
            expect(result.value).toEqual(expectedResult);
        });
    });

    describe('getRecipesRequestSaga', () => {
        it('should update recipes with given ones after calling the api', () => {
            //Arrange
            const saga = getRecipesRequestSaga();
            const recipes = [pizza, pumpkinSoup];

            //Act & Assert
            expect(saga.next().value).toEqual(call(getRecipes));
            expect(saga.next(recipes).value).toEqual(put(updateRecipes(recipes)));
            
        });
    });

})