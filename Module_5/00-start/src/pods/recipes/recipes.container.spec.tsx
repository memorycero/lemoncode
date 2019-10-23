import { createStore } from "redux";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import React from "react";
import { RecipesContainer } from "./recipes.container";
import { recipesPodReducer, RecipesPodState } from "./store/reducers";
import { State } from "core/store/root-reducer";
import { pizza } from "./recipes.mock";

describe('recipes container spec', () => {
    it('should render empty table when it is fed with initial state', () => {
        //Arrange
        const recipesPodState: RecipesPodState = {
            recipes: []
        };
        const initialState: State = {
            router: null,
            recipesPod: recipesPodState
        };

        //Act
        const { queryAllByTestId } = renderWithRedux(<RecipesContainer />,
            {
                initialState,
                reducer: recipesPodReducer,
            });
        const tableComponent = queryAllByTestId('material-table-row');
        
        //Assert
        expect(tableComponent).toHaveLength(0);
    });

    it('should render one item it is when it is fed with state with one item', () => {
        //Arrange
        const recipesPodState: RecipesPodState = {
            recipes: [pizza]
        };
        const initialState: State = {
            router: null,
            recipesPod: recipesPodState
        };

        //Act
        const { queryAllByTestId } = renderWithRedux(<RecipesContainer />,
            {
                initialState,
                reducer: recipesPodReducer,
            });
        const tableComponent = queryAllByTestId('material-table-row');

        //Assert
        expect(tableComponent).toHaveLength(1);
    });
});

const renderWithRedux = (component,
    { initialState = {}, reducer, store = createStore(reducer, initialState) }) => ({
        ...render(<Provider store={store}>{component}</Provider>),
        store,
    });