import { pizza } from "../recipes.mock";
import { getRecipesSelector } from "./selectors";
import { State } from "core/store/root-reducer";

describe('selectors', () => {
    describe('getRecipesSelector', () => {
        it('should return the expected recipes list', () => {
            //Arrange
            const state: State = {
                recipesPod: {
                    recipes: [pizza]
                },
                router: null
            }

            //Act
            const result = getRecipesSelector(state);

            //Assert
            expect(result).toBe(state.recipesPod.recipes);
        });
    })
});
