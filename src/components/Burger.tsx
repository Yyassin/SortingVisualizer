import React, { useEffect, useState } from 'react';
import { NavItems } from './NavItems';
import { BurgerSchema } from '../utils/types';
import { StyledBurger } from './styles';

export const Burger: React.FC<BurgerSchema> = ({ handleChange }: BurgerSchema) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        document.addEventListener('click', (e) => clickListener(e));

        return () => {
            document.removeEventListener('click', (e) => clickListener(e));
        };
    }, []);

    const clickListener = (e): void => {
        if (!e.target.classList.contains('menu')) {
            setOpen((open) => (open ? !open : open));
        }
    };

    return (
        <>
            <StyledBurger className="menu" open={open} onClick={() => setOpen(!open)}>
                <div className="menu" />
                <div className="menu" />
                <div className="menu" />
            </StyledBurger>
            <NavItems open={open} handleChange={handleChange} />
        </>
    );
};
