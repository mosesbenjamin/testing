import React from 'react';
import { render, cleanup, fireEvent, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

import Clickers from './Clickers';

afterEach(cleanup);

describe('Clickers', ()=>{
    test('it displays count', ()=>{
        const { getByTestId } = render(<Clickers />);
        expect(getByTestId('count')).toHaveTextContent("0");
    })

    test('it increments count', ()=>{
        const { getByTestId, getByText } = render(<Clickers />);
        fireEvent.click(getByText("Increment"))
        expect(getByTestId("count")).toHaveTextContent("1");
    })

    test('it decrements count delayed', async()=>{
        const { getByText } = render(<Clickers />);
        fireEvent.click(getByText("Decrement"))

        const countSpan = await waitForElement(()=>getByText("-1"));

        expect(countSpan).toHaveTextContent("-1");
    })
})