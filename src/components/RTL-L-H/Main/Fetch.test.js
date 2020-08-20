import React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axiosMock from 'axios';

import Fetch from './Fetch';


afterEach(cleanup);

describe('Fetch', ()=>{
    it('Fetches and displays data', async ()=>{

        axiosMock.get.mockResolvedValueOnce({ data: { greeting: "Hello there" } });

        const url = "/greeting";
        const { getByTestId } = render(<Fetch url={url} />);
        expect(getByTestId('loading')).toHaveTextContent('Loading data...');

        const resolvedSpan = await waitForElement(()=>getByTestId('resolved'));

        expect(resolvedSpan).toHaveTextContent("Hello there");
        expect(axiosMock.get).toHaveBeenCalledTimes(1);
        expect(axiosMock.get).toHaveBeenCalledWith(url)
    })
})