import React from 'react';
import { render, fireEvent, within, screen } from '@testing-library/react';
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

    test('Marks a to-do as done', ()=>{
        //Arrange
        const todos = [
            { name: "Read Master React Testing", done: false },
            { name: "Buy groceries", done: true }
        ]
        const { getByTestId } = render(<Todos todos={todos} />);

        const firstTodoItem =  within(getByTestId("todo-0")).getByTestId("checkbox");
        //Assert
        expect(firstTodoItem.checked).toBe(false);
        //Act
        fireEvent.click(firstTodoItem);
        //Assert
        expect(firstTodoItem.checked).toBe(true);
    })

    test('filters to-dos', ()=>{
        //Arrange
        const todos = [
            { name: "Read Master React Testing", done: false },
            { name: "Buy groceries", done: true },
            { name: "Walk the dog", done: false }
        ];
        const activeTodos = [ todos[0], todos[2] ];
        const doneTodo = todos[1];

        const {getByText, queryByText} = render(<Todos todos={todos} />);
        const activeFilter = getByText(/active/i);
        const doneFilter = getByText(/done/i)

        //displays all todos by default

        todos.forEach(todo=>{
            expect(queryByText(todo.name)).toBeInTheDocument();
        })


        fireEvent.click(activeFilter);
        activeTodos.forEach(activeTodo =>{
            expect(queryByText(activeTodo.name)).toBeInTheDocument();
        })
        
        expect(queryByText(doneTodo.name)).not.toBeInTheDocument()

        fireEvent.click(doneFilter);
        activeTodos.forEach(activeTodo =>{
            expect(queryByText(activeTodo.name)).not.toBeInTheDocument();
        })

        expect(queryByText(doneTodo.name)).toBeInTheDocument();

    })
})