import * as THREE from "three";
import Globe from '../Components/vanta.globe.min';

const backgroundConfig = {
    el: '#background-div',
    mouseControls: true,
    touchControls: true,
    minHeight: 650.00,
    minWidth: 200.00,
    scaleMobile: 1.00,
    THREE: THREE
};

const initialiseBackground = () => {
    Globe(backgroundConfig);
};

export default initialiseBackground;
