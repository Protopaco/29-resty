import React from 'react';
import { render, cleanup } from '@testing-library/react';
import RestyForm from './RestyForm';

describe('RestyForm component', () => {
    afterEach(() => cleanup());
    it('renders RestyForm', () => {
        const { asFragment } = render(<RestyForm />);
        expect(asFragment()).toMatchSnapshot();
    });
});
