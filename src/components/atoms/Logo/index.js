import React from 'react';

import { LogoImage } from './styles';

import logoImage from '../../../../assets/Imgs/natalRN.jpg';

export const Logo = () => {
    return (
        <LogoImage source={logoImage} />
    );
}