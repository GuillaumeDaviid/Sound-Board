import React from 'react'
// @ts-ignore
import Header from '../Header.tsx'
import {  render, screen, fireEvent } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';

describe('Header', () => {
    test('Should render without crashing', async () => {
        render(
            <Router>
            <Header/>
            </Router>
        );
    })

    test('Should title is SOUND BOARD', async () => {
        render(
            <Router>
            <Header/>
            </Router>
        );

        const titleValue = screen.getByText('SOUND BOARD');
        expect(titleValue).toBeInTheDocument();
    })

    test('Should have "home"', async () => {
        render(
            <Router>
            <Header/>
            </Router>
        );

        const home = screen.getByText('Home');
        expect(home).toBeInTheDocument();
    })

    test('Should url = Home when we click on "home"', async () => {
        render(
            <Router>
            <Header/>
            </Router>
        );

        const home = screen.getByText('Home');
        fireEvent.click(home);
        expect(global.window.location.pathname).toEqual('/');
    })

    test('Should have "Ajouter"', async () => {
        render(
            <Router>
            <Header/>
            </Router>
        );

        const add = screen.getByText('Ajouter');
        expect(add).toBeInTheDocument();
    })

    test('Should url = add when we click on "add"', async () => {
        render(
            <Router>
            <Header/>
            </Router>
        );

        const add = screen.getByText('Ajouter');
        fireEvent.click(add);
        expect(global.window.location.pathname).toEqual('/add');
    })
})