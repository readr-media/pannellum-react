import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
.pnlm-container {
    margin: 0;
    padding: 0;
    overflow: hidden;
    position: relative;
    cursor: default;
    width: 100%;
    height: 100%;
    font-family: Helvetica, "Nimbus Sans L", "Liberation Sans", Arial, sans-serif;
    background: #f4f4f4 url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='67' height='100' viewBox='0 0 67 100'><path stroke='%23ccc' fill='none' d='M33.5,50,0,63,33.5,75,67,63,33.5,50m-33.5-50,67,25m-0.5,0,0,75m-66.5-75,67-25m-33.5,75,0,25m0-100,0,50'/></svg>") repeat;

    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    -ms-user-select: none;
    user-select: none;
    outline: 0;
    line-height: 1.4;
    contain: content;
    touch-action: none;
}

.pnlm-container * {
    box-sizing: content-box;
}

.pnlm-ui {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
}

.pnlm-grab {
    cursor: grab;
}

.pnlm-grabbing {
    cursor: grabbing;
}

.pnlm-sprite {
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='26' height='208'><circle fill-opacity='.78' cy='117' cx='13' r='11' fill='%23fff'/><circle fill-opacity='.78' cy='143' cx='13' r='11' fill='%23fff'/><circle cy='169' cx='13' r='7' fill='none' stroke='%23000' stroke-width='2'/><circle cy='195' cx='13' r='7' fill='none' stroke='%23000' stroke-width='2'/><circle cx='13' cy='195' r='2.5'/><path d='m5 83v6h2v-4h4v-2zm10 0v2h4v4h2v-6zm-5 5v6h6v-6zm-5 5v6h6v-2h-4v-4zm14 0v4h-4v2h6v-6z'/><path d='m13 110a7 7 0 0 0 -7 7 7 7 0 0 0 7 7 7 7 0 0 0 7 -7 7 7 0 0 0 -7 -7zm-1 3h2v2h-2zm0 3h2v5h-2z'/><path d='m5 57v6h2v-4h4v-2zm10 0v2h4v4h2v-6zm-10 10v6h6v-2h-4v-4zm14 0v4h-4v2h6v-6z'/><path d='m17 38v2h-8v-2z'/><path d='m12 9v3h-3v2h3v3h2v-3h3v-2h-3v-3z'/><path d='m13 136-6.125 6.125h4.375v7.875h3.5v-7.875h4.375z'/><path d='m10.428 173.33v-5.77l5-2.89v5.77zm1-1.73 3-1.73-3.001-1.74z'/></svg>");

}

.pnlm-container:-moz-full-screen {
    height: 100% !important;
    width: 100% !important;
    position: static !important;
}
.pnlm-container:-webkit-full-screen {
    height: 100% !important;
    width: 100% !important;
    position: static !important;
}
.pnlm-container:-ms-fullscreen {
    height: 100% !important;
    width: 100% !important;
    position: static !important;
}
.pnlm-container:fullscreen {
    height: 100% !important;
    width: 100% !important;
    position: static !important;
}

.pnlm-render-container {
    cursor: inherit;
    
    /* Fix display bug in Safari 7 */
    position: absolute;
    height: 100%;
    width: 100%;
}

.pnlm-controls {
    margin-top: 4px;
    background-color: #fff;
    border: 1px solid #999;
    border-color: rgba(0,0,0,0.4);
    border-radius: 3px;
    cursor: pointer;
    z-index: 2;
    /* Fix Safari fullscreen bug */
    -webkit-transform: translateZ(9999px);
    transform: translateZ(9999px);
}

.pnlm-control:hover {
    background-color: #f8f8f8;
}

.pnlm-controls-container {
    position: absolute;
    top: 0;
    left: 4px;
    z-index: 1;
}

.pnlm-zoom-controls {
    width: 26px;
    height: 52px;
}

.pnlm-zoom-in {
    width: 100%;
    height: 50%;
    position: absolute;
    top: 0;
    border-radius: 3px 3px 0 0;
}

.pnlm-zoom-out {
    width: 100%;
    height: 50%;
    position: absolute;
    bottom: 0;
    background-position: 0 -26px;
    border-top: 1px solid #ddd;
    border-top-color: rgba(0,0,0,0.10);
    border-radius: 0 0 3px 3px;
}

.pnlm-fullscreen-toggle-button, .pnlm-orientation-button, .pnlm-hot-spot-debug-indicator {
    width: 26px;
    height: 26px;
}

.pnlm-hot-spot-debug-indicator {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 26px;
    height: 26px;
    margin: -13px 0 0 -13px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 13px;
    display: none;
}

.pnlm-orientation-button-inactive {
    background-position: 0 -156px;
}

.pnlm-orientation-button-active {
    background-position: 0 -182px;
}

.pnlm-fullscreen-toggle-button-inactive {
    background-position: 0 -52px;
}

.pnlm-fullscreen-toggle-button-active {
    background-position: 0 -78px;
}

.pnlm-panorama-info {
    position: absolute;
    bottom: 4px;
    background-color: rgba(0,0,0,0.7);
    border-radius: 0 3px 3px 0;
    padding-right: 10px;
    color: #fff;
    text-align: left;
    display: none;
    z-index: 2;
    /* Fix Safari fullscreen bug */
    -webkit-transform: translateZ(9999px);
    transform: translateZ(9999px);
}

.pnlm-title-box {
    position: relative;
    font-size: 20px;
    display: table;
    padding-left: 5px;
    margin-bottom: 3px;
}

.pnlm-author-box {
    position: relative;
    font-size: 12px;
    display: table;
    padding-left: 5px;
}

.pnlm-load-box {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200px;
    height: 150px;
    margin: -75px 0 0 -100px;
    background-color: rgba(0,0,0,0.7);
    border-radius: 3px;
    text-align: center;
    font-size: 20px;
    display: none;
    color: #fff;
}

.pnlm-load-box p {
    margin: 20px 0;
}

.pnlm-lbox {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    margin: -10px 0 0 -10px;
    display: none;
}

.pnlm-loading {
    animation-duration: 1.5s;
    -webkit-animation-duration: 1.5s;
    animation-name: pnlm-mv;
    -webkit-animation-name: pnlm-mv;
    animation-iteration-count: infinite;
    -webkit-animation-iteration-count: infinite;
    animation-timing-function: linear;
    -webkit-animation-timing-function: linear;
    height: 10px;
    width: 10px;
    background-color: #fff;
    position: relative;
}

@keyframes pnlm-mv {
    from {left:0;top:0;}
    25% {left:10px;top:0;}
    50% {left:10px;top:10px;}
    75% {left:0;top:10px;}
    to {left:0;top:0;}
}

@-webkit-keyframes pnlm-mv {
    from {left:0;top:0;}
    25% {left:10px;top:0;}
    50% {left:10px;top:10px;}
    75% {left:0;top:10px;}
    to {left:0;top:0;}
}

.pnlm-load-button {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200px;
    height: 100px;
    margin: -50px 0 0 -100px;
    background-color: rgba(0,0,0,.7);
    border-radius: 3px;
    text-align: center;
    font-size: 20px;
    display: table;
    color: #fff;
    cursor: pointer;
}

.pnlm-load-button:hover {
    background-color: rgba(0,0,0,.8);
}

.pnlm-load-button p {
    display: table-cell;
    vertical-align: middle;
}

.pnlm-info-box {
    font-size: 15px;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200px;
    height: 150px;
    margin: -75px 0 0 -100px;
    background-color: #000;
    border-radius: 3px;
    display: table;
    text-align: center;
    color: #fff;
    table-layout: fixed;
}

.pnlm-info-box a {
    color: #fff;
    word-wrap: break-word;
    overflow-wrap: break-word;
}

.pnlm-info-box p {
    display: table-cell;
    vertical-align: middle;
    padding: 0 5px 0 5px;
}

.pnlm-error-msg {
    display: none;
}

.pnlm-about-msg {
    font-size: 11px;
    line-height: 11px;
    color: #fff;
    padding: 5px 8px 5px 8px;
    background: rgba(0,0,0,0.7);
    border-radius: 3px;
    position: absolute;
    top: 50px;
    left: 50px;
    display: none;
    opacity: 0;
    -moz-transition: opacity .3s ease-in-out;
    -webkit-transition: opacity .3s ease-in-out;
    -o-transition: opacity .3s ease-in-out;
    -ms-transition: opacity .3s ease-in-out;
    transition: opacity .3s ease-in-out;
    z-index: 1;
}

.pnlm-about-msg a:link, .pnlm-about-msg a:visited {
    color: #fff;
}

.pnlm-about-msg a:hover, .pnlm-about-msg a:active {
    color: #eee;
}

.pnlm-hotspot-base {
    position: absolute;
    visibility: hidden;
    cursor: default;
    vertical-align: middle;
    top: 0;
    z-index: 1;
}
.pnlm-hotspot {
    height: 26px;
    width: 26px;
    border-radius: 13px;
}
.pnlm-hotspot:hover {
    background-color: rgba(255,255,255,0.2);
}
.pnlm-hotspot.pnlm-info {
    background-position: 0 -104px;
}
.pnlm-hotspot.pnlm-scene {
    background-position: 0 -130px;
}

div.pnlm-tooltip span {
    visibility: hidden;
    position: absolute;
    border-radius: 3px;
    background-color: rgba(0,0,0,0.7);
    color: #fff;
    text-align: center;
    max-width: 200px;
    padding: 5px 10px;
    margin-left: -220px;
    cursor: default;
}
div.pnlm-tooltip:hover span{
    visibility: visible;
}
div.pnlm-tooltip:hover span:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-width: 10px;
    border-style: solid;
    border-color: rgba(0,0,0,0.7) transparent transparent transparent;
    bottom: -20px;
    left: -10px;
    margin: 0 50%;
}

.pnlm-compass {
    position: absolute;
    width: 50px;
    height: 50px;
    right: 4px;
    bottom: 4px;
    border-radius: 25px;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' height='50' width='50'><path d='m24.5078 6-3.2578 18h7.5l-3.25781-18h-0.984376zm-3.2578 20 3.2578 18h0.9844l3.2578-18h-7.5zm1.19531 0.9941h5.10938l-2.5547 14.1075-2.5547-14.1075z'/></svg>");
    cursor: default;
    display: none;
}

.pnlm-world {
    position: absolute;
    left: 50%;
    top: 50%;
}
.pnlm-face {
    position: absolute;
    -webkit-transform-origin: 0 0 0;
    transform-origin: 0 0 0;
}

.pnlm-dragfix, .pnlm-preview-img {
    position: absolute;
    height: 100%;
    width: 100%;
}

.pnlm-preview-img {
    background-size: cover;
    background-position: center;
}

.pnlm-lbar {
    width: 150px;
    margin: 0 auto;
    border: #fff 1px solid;
    height: 6px;
}

.pnlm-lbar-fill {
    background: #fff;
    height: 100%;
    width: 0;
}

.pnlm-lmsg {
    font-size: 12px;
}

.pnlm-fade-img {
    position: absolute;
    top: 0;
    left: 0;
}

.pnlm-pointer {
    cursor: pointer;
}
`;

export default GlobalStyles;
