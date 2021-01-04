import { Dimensions } from "react-native";
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 3;
    flex-direction: column;
    padding: 10px;
    justify-content: flex-end;
`

export const CardContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    background: #a29bfe;
    height: auto;
    padding: 20px;
    margin: 5px;
    border-radius: 15px;
    align-self: stretch;
    width: ${Dimensions.get('window').width - 20};
    
`

export const Title = styled.Text`
    font-size: 25;
`

export const Deg = styled.View`
    flex-direction: row;
    align-items: center;
`

export const Max = styled.Text`
    font-weight: bold;
    font-size: 30px;
`

export const Min = styled.Text``