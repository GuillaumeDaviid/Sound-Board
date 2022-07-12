import React from 'react'
// @ts-ignore
import Header from '../components/Header.tsx'
import {  render, screen, fireEvent } from '@testing-library/react';

describe('Header', () => {
    test('Should render without crashing', async () => {
        render(
            <Header/>
        );
    })

    test('Should title is SOUND BOARD', async () => {
        render(
            <Header/>
        );

        const titleValue = screen.getByText('SOUND BOARD');
        expect(titleValue).toBeInTheDocument();
    })

    test('Should have "home"', async () => {
        render(
            <Header/>
        );

        const home = screen.getByText('Home');
        expect(home).toBeInTheDocument();
    })

    test('Should url = Home when we click on "home"', async () => {
        render(
            <Header/>
        );

        const home = screen.getByText('Home');
        fireEvent.click(home);
        expect(global.window.location.pathname).toEqual('/Home');
    })
})