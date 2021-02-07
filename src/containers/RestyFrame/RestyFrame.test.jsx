global.fetch = require('node-fetch');
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import RestyFrame from './RestyFrame';

const testURL = 'https://test.com'

const server = setupServer(
    rest.get(testURL, (req, res, ctx) => {
        return res(
            ctx.json({
                articles: [
                    {
                        title: 'my article',
                        url: 'http://myurl.com',
                        urlToImage: 'http://image.com',
                    },
                ],
            })
        );
    })

);

describe('RestyFrame tests', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());

    it('performs a get request', () => {
        render(<RestyFrame />)

        const urlInput = screen.getByTestId('urlInput');
        const submitButton = screen.getByTestId('submitButton');

        fireEvent.change(urlInput, {
            target: {
                value: testURL
            }
        })
        fireEvent.submit(submitButton)

        return waitFor(() => {
            expect(screen.getByTestId('responseDisplay')).not.toBeEmptyDOMElement();
        });
    })

    it('performs a post request', () => {
        render(<RestyFrame />)

        const urlInput = screen.getByTestId('urlInput');
        const postButton = screen.getByTestId('postButton')
        const submitButton = screen.getByTestId('submitButton');
        const bodyInput = screen.getByTestId('bodyInput')

        fireEvent.change(urlInput, {
            target: {
                value: testURL
            }
        })

        fireEvent.change(bodyInput, {
            target: {
                value: '{ "id": 1 }'
            }
        })

        fireEvent.submit(postButton)
        fireEvent.submit(submitButton)

        return waitFor(() => {
            expect(screen.getByTestId('responseDisplay')).not.toBeEmptyDOMElement();
        });
    })


    it('performs a put request', () => {
        render(<RestyFrame />)

        const urlInput = screen.getByTestId('urlInput');
        const putButton = screen.getByTestId('putButton')
        const submitButton = screen.getByTestId('submitButton');
        const bodyInput = screen.getByTestId('bodyInput')

        fireEvent.change(urlInput, {
            target: {
                value: testURL
            }
        })

        fireEvent.change(bodyInput, {
            target: {
                value: '{ "id": 1 }'
            }
        })
        fireEvent.submit(putButton)
        fireEvent.submit(submitButton)

        return waitFor(() => {
            expect(screen.getByTestId('responseDisplay')).not.toBeEmptyDOMElement();
        });
    })

    it('performs a delete request', () => {
        render(<RestyFrame />)

        const urlInput = screen.getByTestId('urlInput');
        const deleteButton = screen.getByTestId('deleteButton')
        const submitButton = screen.getByTestId('submitButton');
        const bodyInput = screen.getByTestId('bodyInput')

        fireEvent.change(urlInput, {
            target: {
                value: testURL
            }
        })

        fireEvent.submit(deleteButton)
        fireEvent.submit(submitButton)

        return waitFor(() => {
            expect(screen.getByTestId('responseDisplay')).not.toBeEmptyDOMElement();
        });
    })

})