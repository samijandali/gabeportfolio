import {
    ShaderGradientCanvas,
    ShaderGradient,
    // @ts-ignore
    useThree,
    // @ts-ignore
    useFrame,
} from 'shadergradient'
function Gradient() {
    const { scene } = useThree()

    useFrame(() => {
        const mesh = scene.getObjectByName('shadergradient-mesh')

        if (mesh.material.userData.uNoiseStrength) {
            mesh.material.userData.uNoiseStrength.value = 0
        }
    })
    return (
        <ShaderGradient
            cDistance={32}
            cPolarAngle={125}
            color1='#1f5905'
            color2='#dbbae5'
            color3='#d0bce3'
            animate="on" // Use "on" or "off"
            zoomOut={false}
        // wireframe={false}
        />
    )
}

export default Gradient;
