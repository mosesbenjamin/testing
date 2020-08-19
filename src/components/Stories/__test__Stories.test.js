import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';

import Stories from '../Stories/Stories';

jest.mock('axios');

describe('Stories', ()=>{
    test('fetches stories from an API and displays them', async ()=>{
        // const stories = [
        //     { objectID: '1', title: 'Hello' },
        //     { objectID: '2', title: 'React' },
        //   ];

        // const promise = Promise.resolve({data: {hits: stories}});

        // axios.get.mockImplementationOnce(()=> promise);

        // render(<Stories />);

        // await userEvent.click(screen.getByRole('button'));
        
        // await act(() => promise);

        // expect(screen.getAllByRole('listitem')).toHaveLength(2);
    })
})