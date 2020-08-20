import React from 'react';
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Header from './Header'

afterEach(cleanup);

describe('Header', ()=>{
    test('it renders', ()=>{
        const { asFragment } = render(<Header text="Hello" />);

        expect(asFragment()).toMatchSnapshot();
    });

    test('it inserts text to h1', ()=>{
        const { getByTestId, getByText } = render(<Header text="Hello!" />)

        expect(getByTestId("h1tag")).toHaveTextContent("Hello!")
        
        expect(getByText("Hello!")).toHaveClass("fancy-h1")
    })
});