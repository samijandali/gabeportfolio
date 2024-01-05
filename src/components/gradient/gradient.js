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
            mesh.material.userData.uNoiseStrength.value = 10
        }
    })
    return (
        <ShaderGradient
            cDistance={8}
            cPolarAngle={125}
            color1='#ff5005'
            color2='#dbba95'
            color3='#d0bce1'
        // wireframe={false}
        />
    )
}

export default Gradient;