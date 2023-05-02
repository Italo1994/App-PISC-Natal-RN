import styled from 'styled-components/native';

export const CustomText = styled.Text`
    font-size: 18px;
    color: ${ ({ color }) => color || 'white' };
    font-weight: 700;
    margin-top: 12px;
`