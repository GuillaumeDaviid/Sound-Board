import React from 'react'
// @ts-ignore
import Add from '../Add.tsx'
import {  render, screen } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';

describe('Add', () => {
    test('Should render without crashing', async () => {
        render(
            <Router>
            <Add/>
            </Router>
        );
    })

    test('Should title is "Ajouter un son"', async () => {
        render(
            <Router>
            <Add/>
            </Router>
        );

        const titleValue = screen.getByText('Ajouter un son :');
        expect(titleValue).toBeInTheDocument();
    })

    test('Should have an add button', async () => {
        render(
            <Router>
            <Add/>
            </Router>
        );

        const addButton = screen.getByText("Ajouter");
        expect(addButton).toBeInTheDocument();
    })

    test('Should have a name element', async () => {
        render(
            <Router>
            <Add/>
            </Router>
        );

        const name = screen.getByText("Nom :");
        expect(name).toBeInTheDocument();
        const nameId = screen.getByTestId('name');
        expect(nameId).toBeInTheDocument();
    })

    test('Should have a file element', async () => {
        render(
            <Router>
            <Add/>
            </Router>
        );

        const file = screen.getByText("Télécharger :");
        expect(file).toBeInTheDocument();
        const fileId = screen.getByTestId('file');
        expect(fileId).toBeInTheDocument();
    })
})