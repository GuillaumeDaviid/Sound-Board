import React from 'react'
import {  render, screen } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import data from '../../data/data.json';
// @ts-ignore
import Home from '../Home.tsx'

describe('Home', () => {
    test('Should render without crashing', async () => {
        render(
            <Router>
            <Home/>
            </Router>
        );
    })

    test('Should title is Vos sons', async () => {
        render(
            <Router>
            <Home/>
            </Router>
        );

        const titleValue = screen.getByText('Vos sons :');
        expect(titleValue).toBeInTheDocument();
    })

    test('Should have "Play" button', async () => {
        render(
            <Router>
            <Home/>
            </Router>
        );
        const length = data.length;

        const home = screen.getAllByText('Play');
        expect(home).toHaveLength(length);
    })

    test('Should have "pause" button', async () => {
        render(
            <Router>
            <Home/>
            </Router>
        );
        const length = data.length;

        const home = screen.getAllByText('Pause');
        expect(home).toHaveLength(length);
    })

    test('Should have "Stop" button', async () => {
        render(
            <Router>
            <Home/>
            </Router>
        );

        const length = data.length;

        const home = screen.getAllByText('Stop');
        expect(home).toHaveLength(length);
    })
})