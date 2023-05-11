import { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import TopBar from '../components/TopBar';
import { Button, Container } from 'rsuite';

const HomePage = () => {
    const ref = useRef()
    const styleBackground = {width:"100%", height:"100%", flex: true};
    
  return (    
    <Container style={{ width: '100%', height: '100%', background: '#253237' }}>
        <TopBar />
        <Parallax pages={3} ref={ref}>
            <ParallaxLayer offset={0} speed={0}>
                <img src="../../public/assetsGucci/sky.png" alt='' style={styleBackground}/>
            </ParallaxLayer>

            <ParallaxLayer offset={0} speed={-0.25} factor={0.5} horizontal>
                <img src="../../public/assetsGucci/download.png" style={{marginTop: "300px"}} className='mt-300' alt='' />
            </ParallaxLayer>

            <ParallaxLayer offset={0} speed={1}>
                <img src="../../public/assetsGucci/girls.png" style={styleBackground} />
            </ParallaxLayer>

            <ParallaxLayer offset={1} speed={0} >
                <img src="../../public/assetsGucci/forest.png" alt='' style={styleBackground}/>
            </ParallaxLayer>

            <ParallaxLayer offset={1.5} speed={0.5}  onClick={() => ref.current.scrollTo(0)}>
                <img src="../../public/assetsGucci/download (3).png" alt='' style={styleBackground}/>
            </ParallaxLayer>

            <ParallaxLayer sticky={{ start: 1.25, end: 3 }} style={{...styleBackground, alignItems: 'center'}} onClick={() => ref.current.scrollTo(1)}>
                <Button>Menu</Button>
            </ParallaxLayer>
        </Parallax>
    </Container>
  );
};

export default HomePage;