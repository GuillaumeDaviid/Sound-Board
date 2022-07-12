import React from 'react'
import {  render, screen, fireEvent } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
// @ts-ignore
import Home from '../components/Home.tsx'

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

        const home = screen.getByText('Play');
        expect(home).toBeInTheDocument();
    })

    test('Should have "pause" button', async () => {
        render(
            <Router>
            <Home/>
            </Router>
        );

        const home = screen.getByText('Pause');
        expect(home).toBeInTheDocument();
    })

    test('Should have "Stop" button', async () => {
        render(
            <Router>
            <Home/>
            </Router>
        );

        const home = screen.getByText('Stop');
        expect(home).toBeInTheDocument();
    })

    test('Should url = Home when we click on "home"', async () => {
        render(
            <Router>
            <Home/>
            </Router>
        );

        const home = screen.getByText('Home');
        fireEvent.click(home);
        expect(global.window.location.pathname).toEqual('/');
    })
})