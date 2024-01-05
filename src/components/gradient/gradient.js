import {
    ShaderGradientCanvas,
    ShaderGradient,
    // @ts-ignore
    useThree,
    // @ts-ignore
    useFrame,
} from 'shadergradient'
import * as reactSpring from '@react-spring/three';
import * as drei from '@react-three/drei';
import * as fiber from '@react-three/fiber';
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
            className='shade'
            // importedFiber={{ ...fiber, ...drei, ...reactSpring }}
            style={{
                position: 'fixed', // Changed from 'absolute' to 'fixed'
                top: 0,
                left: 0,
                width: '100vw', // Full viewport width
                height: '100vh', // Full viewport height
                zIndex: -1 // Behind other content
            }}

        // wireframe={false}
        />
    )
}

export default Gradient;
