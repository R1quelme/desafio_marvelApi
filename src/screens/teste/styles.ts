import styled from "styled-components/native"

export const Container = styled.View`
    flex: 1;
    background-color: white;
`;

export const Header = styled.View`
    width: 100%;
    height: 113px;

    background-color: gray;

    justify-content: flex-end;
    padding: 32px 24px; 
`;

export const HeaderContent = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const TotalCars = styled.Text`
    font-size: 15px;
    color: black
`;