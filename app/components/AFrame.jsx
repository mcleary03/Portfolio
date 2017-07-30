import 'aframe';
import 'aframe-animation-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React, { Component } from 'react';
// import Planet from './Planet'
import Planets from './Planets'
import Camera from './Camera'
import Cursor from './Cursor'
// import Camera from './components/Camera'

export default class AFrame extends Component {
  constructor(props) {
    super(props);
    // this.state = {color: 'red'};

  }

  changeFocus() {
    this.setState({

    });
  }

  distance(rPlanet, dSun) {
    return `0, 0, ${54.5 + rPlanet + (dSun * 4)}`
  }

          // <Entity position="5 5 60">
          //   <Entity
          //     camera="active"
          //     look-controls
          //     wasd-controls>
          //     <Entity
          //       cursor="fuse: true; fuseTimeout: 1000"
          //       position="0 0 -1"
          //       geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
          //       material="color: #57c3f9; shader: flat; transparent: true; opacity: 0.5">
          //     </Entity>
          //   </Entity>
          // </Entity>

          // <Planet
          //   id="Test"
          //   position={{x: 0, y: -10, z: 70}}
          //   radius='3'
          //   materialSrc='#milkyWayTexture'
          // />

  render () {
    return (
      <Entity>
        <Camera>
          <Cursor/>
        </Camera>

        <Entity light="type: ambient; color: #222"/>

        <Entity id="solarSystem">

          <Entity
            id="sun"
            geometry="
              primitive: sphere;
              radius: 54.5;
              segmentsWidth: 120;
              segmentsHeight: 120"
            material="src: https://cdn.glitch.com/342beffd-f89e-4737-b3a9-73216740a52d%2Ftexture_sun.jpg?1493694732340;
              shader: flat"
            position="0 0 0"
            animation="dur: 120000; loop: true; property: rotation; to: 0 360 0; easing: linear">
            <Entity light="type: point; intensity: 0.7" />
          </Entity>

          <Planets />

          <Entity
            id="mercury"
            class="planet"
            geometry="
              primitive: sphere;
              radius: 0.19;
              segmentsWidth: 70;
              segmentsHeight: 70"
            material="src: https://cdn.glitch.com/342beffd-f89e-4737-b3a9-73216740a52d%2Ftexture_mercury.jpg?1493695081322"
            position={this.distance(0.19, 0.4)}
          />

          <Entity
            id="venus"
          class="planet"
          geometry="
            primitive: sphere;
            radius: 0.19;
            segmentsWidth: 75;
            segmentsHeight: 75"
          material="src: https://cdn.glitch.com/342beffd-f89e-4737-b3a9-73216740a52d%2Ftexture_venus_atmosphere.jpg?1493695304768"
          position={this.distance(0.19, 0.7)}>
          </Entity>

          <Entity
            id="earth"
            class="planet"
            geometry="
              primitive: sphere;
              radius: 0.5;
              segmentsWidth: 80;
              segmentsHeight: 80"
            material="src: https://cdn.glitch.com/342beffd-f89e-4737-b3a9-73216740a52d%2Ftexture_earth_clouds.jpg?1493695248913"
            position={this.distance(0.5, 1)}>
          </Entity>

          <Entity
            id="mars"
            class="planet"
            geometry="
              primitive: sphere;
              radius: 0.265"
            material="src: https://cdn.glitch.com/342beffd-f89e-4737-b3a9-73216740a52d%2Ftexture_mars.jpg?1493695397580;"
            position={this.distance(0.265, 1.5)}>
          </Entity>


          <Entity
            id="jupiter"
            class="planet"
            geometry="
              primitive: sphere;
                radius: 5.595;
                segmentsWidth: 100;
                segmentsHeight: 100"
            material="src: https://cdn.glitch.com/342beffd-f89e-4737-b3a9-73216740a52d%2Ftexture_jupiter.jpg?1493695529355"
            position={this.distance(2.6, 5.2)}>
          </Entity>

          <Entity
            id="saturn"
            class="planet"
            geometry="
              primitive: sphere;
              radius: 4.7;
              segmentsWidth: 90;
              segmentsHeight: 90"
            material="src: https://cdn.glitch.com/342beffd-f89e-4737-b3a9-73216740a52d%2Ftexture_saturn.jpg?1493695550676"
            position={this.distance(4.77, 9.5)}>
            <Entity
              id="saturnRing"
              geometry="
                primitive: ring;
                radiusInner: 4.75;
                radiusOuter: 6"
              material="
                src: https://cdn.glitch.com/342beffd-f89e-4737-b3a9-73216740a52d%2Ftexture_saturn_ring.png?1493829621722;
                side: double">
            </Entity>
          </Entity>

          <Entity
            id="uranus"
            class="planet"
            geometry="
              primitive: sphere;
              radius: 2.02;
              segmentsWidth: 90;
              segmentsHeight: 90"
            material="src: https://cdn.glitch.com/342beffd-f89e-4737-b3a9-73216740a52d%2Ftexture_uranus.jpg?1493695576218"
            position={this.distance(2.02, 19.2)}>
          </Entity>

          <Entity
            id="neptune"
            class="planet"
            geometry="
              primitive: sphere;
              radius: 1.94;
              segmentsWidth: 80;
              segmentsHeight: 80"
            material="src: https://cdn.glitch.com/342beffd-f89e-4737-b3a9-73216740a52d%2Ftexture_neptune.jpg?1493695599570"
            position={this.distance(1.94, 30)}>
          </Entity>
        </Entity>

        <Entity
          id="sky"
          geometry="
          primitive: sphere;
          radius: 1000"
          material="
          src: #milkyWayTexture;
          shader: flat;
          side: back">
        </Entity>

      </Entity>
    )
  }
}
