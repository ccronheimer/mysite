import { createGlobalStyle } from 'styled-components';
import SFProRounded from './SF-Pro-Rounded-Regular.woff2';
import SFProRoundedSemiBold from './SF-Pro-Rounded-Semibold.woff2';
import SFProRoundedBold from './SF-Pro-Rounded-Bold.woff2';

import HelveticaNeueLight from './HelveticaNeue-Light.woff2';
import HelveticaNeue from './HelveticaNeue.woff2';
import HelveticaNeueMedium from './HelveticaNeue-Medium.woff2';
import HelveticaNeueBold from './HelveticaNeue-Bold.woff2';

import SFMono from './SFNSMono.woff2';

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
    @font-face {
        font-family: 'Helvetica Neue';
        src: url(${HelveticaNeue}) format('woff2');
        font-style: normal;
    }
    @font-face {
        font-family: 'Helvetica Neue Medium';
        src: url(${HelveticaNeueMedium}) format('woff2');
        font-style: normal;
    }
    @font-face {
        font-family: 'Helvetica Neue Bold';
        src: url(${HelveticaNeueBold}) format('woff2');
        font-style: normal;
    }
    @font-face {
        font-family: 'Helvetica Neue Light';
        src: url(${HelveticaNeueLight}) format('woff2');
        font-style: normal;
    }
    @font-face {
        font-family: 'SF Mono';
        src: url(${SFMono}) format('woff2');
        font-style: normal;
    }
`;