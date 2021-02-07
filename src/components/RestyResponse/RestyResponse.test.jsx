import React from 'react';
import { render, cleanup } from '@testing-library/react';
import RestyResponse from './RestyResponse';

describe('RestyResponse component', () => {
    afterEach(() => cleanup());
    it('renders RestyResponse', () => {
        const { asFragment } = render(<RestyResponse responseObject={{ greeting: 'Hello!' }} />);
        expect(asFragment()).toMatchSnapshot();
    });
});
