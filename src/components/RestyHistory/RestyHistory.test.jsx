import React from 'react';
import { render, cleanup } from '@testing-library/react';
import RestyHistory from './RestyHistory.jsx';

describe('RestyHistory component', () => {
    afterEach(() => cleanup());
    it('renders RestyHistory', () => {
        const { asFragment } = render(<RestyHistory tempHistory={{}} />);
        expect(asFragment()).toMatchSnapshot();
    });
});
