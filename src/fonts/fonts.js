import { createGlobalStyle } from 'styled-components';
import SFProRoundedWoff2 from './SF-Pro-Rounded-Regular.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'SF Pro Rounded';
        src: local('SF Pro Rounded'), local('SF-Pro-Rounded-Regular.woff2'),
        url(${SFProRoundedWoff2}) format('woff2');
        
    }
`;