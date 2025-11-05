import styled from "styled-components";

//Estilos del Login y Register
export const Card = styled.div `
      
    font-family: 'Quicksand', sans-serif;
    background: #fff;
    width: 350px;
    margin: 100px auto;
    padding: 30px 25px;
    border-radius: 20px;
    text-align: center;
    transition: transform 0.2s ease, box-shadow 0.3s ease;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;
`;

export const FormGroup = styled.div`
    position: relative;
    padding: 20px 0 0;
    width: 100%;
    max-width: 100%;
    margin-bottom: 20px;
    margin-top: 20px
`;

export const TxtBox = styled.input`
    font-family: inherit;
    width: 100%;
    border: none;
    border-bottom: 2px solid #9b9b9b;
    outline: 0;
    font-size: 17px;
    color: #333;
    padding: 8px 0;
    background: transparent;
    transition: all 0.3s ease;
    
    &::placeholder {
      color: #000000;
      transition: all 0.3s ease;
      font-size: 17px;
    }

    &:focus::placeholder {
      transform: translateY(-20px);
      font-size: 12px;
      color: #D47A00;
      font-weight: 700;
    }

    &:focus {
      padding-bottom: 6px;
      font-weight: 700;
      border-width: 3px;
      border-image: linear-gradient(to right, #D47A00, #FF9900);
      border-image-slice: 1;
    }

    &:hover {
      color: #D47A00;
      border-bottom: 2px solid #D47A00; 
    }

    &:required, &:invalid {
      box-shadow: none;
    }
`;

export const Logo = styled.img`
    width: 80%;
    max-width: 350px;
    max-height: 120px;
    object-fit: contain;
    margin-bottom: 25px;
`;


export const CheckboxContainer = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: #333;
    font-size: 14px;
    cursor: pointer;
    margin: 15px 0;
    margin-top: 40px;
    
    input[type="checkbox"] {
      accent-color: #FF9900;
      transform: scale(1.2);
      cursor: pointer;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
    width: 100%;
`;

export const BtnConfirm = styled.button`
  appearance: button;
  background-color: #D47A00;
  border: solid transparent;
  border-radius: 16px;
  border-width: 0 0 4px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: din-round, sans-serif;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: .8px;
  line-height: 20px;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 13px 16px;
  text-align: center;
  text-transform: uppercase;
  touch-action: manipulation;
  transform: translateZ(0);
  transition: filter .2s;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  width: 100%;
  position: relative;

  &::after {
    background-clip: padding-box;
    background-color: #FF9900;
    border: solid transparent;
    border-radius: 16px;
    border-width: 0 0 4px;
    bottom: -4px;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }

  &:focus {
    user-select: auto;
  }

  &:hover:not(:disabled) {
    filter: brightness(1.1);
    -webkit-filter: brightness(1.1);
  }

  &:disabled {
    cursor: auto;
  }

  &:active {
    border-width: 4px 0 0;
    background: none;
  }
`;