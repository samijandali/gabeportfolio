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
            className='shade'
        />
    )
}

export default Gradient;