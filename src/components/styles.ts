import styled from 'styled-components'
import { NavPropsSchema } from '../utils/types'

export const StyledBurger = styled.div<NavPropsSchema> `
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 15px;
    right: 20px;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 20;

    div {
        width: 2rem;
        height: 0.25rem;
        background-color: ${({ open }) => open ? '#ccc' : '#333'};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.15s linear;
        display: none;

        @media (max-width: 980px) {
            display: flex;
        }

        &:nth-child(1) {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }

        &:nth-child(2) {
            transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({ open }) => open ? 0 : 1}
        }

        &:nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`;

export const Button = styled.button`
    border: none;
    font-size: 15px;
    background-color: transparent;
    font-family: 'Poppins', sans-serif !important;

    &:hover:not(.disabled) {
        cursor: pointer;
        color: red;
    }
`;

export const NavBarStyled = styled.div`
    padding: 10px;
    height: 130px;
    background-color: #9ea9ed;
    align-items: center;
    justify-content: space-between;
    display: flex;
    flex-direction: row;

    .slider-wrapper {
        width: 300px;
    }

    .slider-wrapper div {
        display: flex;
        flex-direction: row;
    }

    .slider-wrapper div p {
        text-align: left;
        width: 300px;
        font-family: 'Poppins', sans-serif !important;
    }

    .MuiSlider-trackInverted {
        transform: rotate(0deg) scaleX(-1) !important;
    }

    h1 {
        margin: 10px;
    }

    h2 {
        font-size: 2rem;
        display: inline;
        position: absolute;
        top: 95px;
        left: 5px;
        z-index: 2;
        transition: all 1s;
    }

    ul button {
        border: none;
        font-size: 15px;
        background-color: transparent;
        font-family: 'Poppins', sans-serif !important;
    }

    ul button:hover:not(.disabled) {
        cursor: pointer;
        color: red;
    }
`;

export const Ul = styled.ul<NavPropsSchema> `
  button {
    border: none;
    font-size: 15px;
    background-color: transparent;
    font-family: "Poppins", sans-serif !important;
  }

  button:hover:not(.disabled) {
    cursor: pointer;
    color: red;
  }

  @media (max-width: 980px) {
    z-index: 10;
    list-style: none;
    display: flex;
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }: NavPropsSchema) => (open ? "translateX(0)" : "translateX(100%)")};
    top: -18px;
    right: 0;
    height: 100vh;
    width: 200px;
    padding: 3.5rem;
    transition: transform 0.3s ease-in-out;
    align-items: center;

    h1 {
      color: #fff;
    }

    button {
      z-index: 30;
      color: #fff;
      padding: 10px 10px;
    }

    button.off {
      display: none;
    }
  }

  @media (max-height: 400px) {
    padding: 1rem;

    button {
      padding: 5px 10px;
    }
  }
`;

export const FooterStyled = styled.div`
    position: absolute;
    bottom: 0;
    width: 100vw;

    div {
        flex: 1;
        padding: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    div p,
    div a {
        padding-left: 10px;
    }

    div a {
        font-size: 2rem;
        color: #333;
    }

    div a:hover {
        color: #000;
    }

    @media (max-width: 700px) {
        div {
            font-size: 10px;
            padding: 0px;
        }

        div a {
            font-size: 1.5rem;
        }
    }
`;

export const VisualizerStyled = styled.div`
    .array-container {
        transform: rotate(180deg) scaleX(-1);
        position: relative;
        top: -7px;
    }

    .array-bar {
        background-color: #b08ffc;
        display: inline-block;
        margin: 0 1px;
        transform: rotate(180deg) scaleX(-1);
    }

    .option {
        position: absolute;
        bottom: 10px;
    }
`;