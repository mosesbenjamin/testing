import React from 'react';
import { render, fireEvent, within } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import Todos from './Todos';



describe('Todo', ()=>{
    test('adds a new to-do', ()=>{
        // Arrange
        const { getByPlaceholderText, getByText } = render(<Todos />);
        const input = getByPlaceholderText(/add something/i);
        const todo = "My todo item";
        getByText("No to-dos!")
    
        //Act
        fireEvent.change(input, {target: {value: todo}});
        fireEvent.keyDown(input, { key: "Enter" });
    
        //Assert
        expect(input).toHaveValue("");
        expect(getByText(todo)).toBeInTheDocument();
    })

    test('removes a to-do-item', ()=>{
        //Arrange
        const todos = [
            { name: "Read Master React Testing", done: false },
            { name: "Buy groceries", done: true },
            { name: "Walk the dog", done: false }
        ]
        const {getByTestId, queryByText} = render(<Todos todos={todos} />)

        const removeButton = within(getByTestId('todo-1')).getByText(/remove/i);
        fireEvent.click(removeButton);

        expect(queryByText(todos[1].name)).not.toBeInTheDocument();
    })
})