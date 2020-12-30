import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FooterStyled } from './styles';

export const Footer: React.FC = () => {
    return (
        <FooterStyled>
            <div>
                <p>Made by Yousef Yassin</p>
                <a href="https://github.com/Yyassin" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={['fab', 'github']} />
                </a>
                <a href="https://linkedin.com/in/yousefy" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={['fab', 'linkedin']} />
                </a>
            </div>
        </FooterStyled>
    );
};
