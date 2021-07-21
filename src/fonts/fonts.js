import { createGlobalStyle } from 'styled-components';
import SFProRounded from './SF-Pro-Rounded-Regular.woff2';
import SFProRoundedSemiBold from './SF-Pro-Rounded-Semibold.woff2';
import SFProRoundedBold from './SF-Pro-Rounded-Bold.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'SF Pro Rounded';
        src: url(${SFProRounded}) format('woff2');
        font-style: normal;
    }
    @font-face {
        font-family: 'SF Pro Rounded Bold';
        src: url(${SFProRoundedBold}) format('woff2');
        font-style: normal;
    }
    @font-face {
        font-family: 'SF Pro Rounded SemiBold';
        src: url(${SFProRoundedSemiBold}) format('woff2');
        font-style: normal;
    }
`;