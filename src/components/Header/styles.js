import { Dimensions } from "react-native";
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    width: ${Dimensions.get('window').width - 20};
    justify-content: space-between;
    flex-direction: row;
    padding-top: 10px;
`

export const ButtonContainer = styled.TouchableOpacity`
    background: transparent;
    border: none;
`

export const ButtonText = styled.Text`
`

export const Address = styled.Text`
    font-size: 36px;
    font-weight: bold;
    line-height: 42px;
`