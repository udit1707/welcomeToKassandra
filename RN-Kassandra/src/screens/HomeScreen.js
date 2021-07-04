import React from "react";
import { View,Text, StyleSheet } from "react-native";
import ParticleField from 'react-native-particles-webgl';
 
/**
 * The default configuation for the ParticleField component
 *
 * Any option passed in via props will overwrite the default config
 */
const config = {
  // Display reference cube, useful for orienting the field
  showCube: false,
  // '2D' or '3D' particle field
  dimension: '3D',
  // 'bounce' or 'passthru'
  // 'bounce' will make particles behave like balls thrown at a wall when hitting canvas boundaries
  // 'passthru' particles will disappear after hitting canvas boundaries and be added back into the scene elsewhere
  boundaryType: 'bounce',
  // Maximum velocity of particles
  velocity: 1,
  // Toggles antialiasing -- must be set during construction, cannot be changed after initial render
  // Slight performance optimization to set false, although lines will appear more jagged
  antialias: false,
  // Min/Max multipliers which constraint how particles move in each direction
  // The default values here allow for particles to move in completely random x, y, z directions
  // See the "Snowfall" preset for an example of how to use these values
  direction: {
    xMin: -1,
    xMax: 1,
    yMin: -1,
    yMax: 1,
    zMin: -1,
    zMax: 1
  },
  lines: {
    // 'rainbow' or 'solid' color of lines
    colorMode: 'rainbow',
    // Color of lines if colorMode: 'solid', must be hex color
    color: '#351CCB',
    // Transparency of lines
    transparency: 0.9,
    // true/false limit the maximum number of line connections per particle
    limitConnections: true,
    maxConnections: 3,
    // Minimum distance needed to draw line between to particles
    minDistance: 100,
    // true/false render lines
    visible: true
  },
  particles: {
    // 'rainbow' or 'solid' or 'multi' color of particles
    colorMode: 'solid',
    // Color of particles if colorMode: 'solid', must be hex color
    color: '#3FB568',
    // Colors of particles if colorMode: 'multi', must be hex color
    colors: undefined, // ['#771112']
    // Positions of particles
    positions: undefined, // 
    // Transparency of particles
    count: 100, // or positions.length above
    // The minimum particle size
    transparency: 0.9,
    // 'square' or 'circle' shape of particles
    shape: 'circle',
    // 'canvas' or 'cube' boundary of particles
    boundingBox: 'canvas',
    // The exact number of particles to render
    minSize: 10,
    // The maximum particle size
    maxSize: 10,
    // true/false render particles
    visible: true
  },
  // x, y, z position of camera
  cameraPosition: [0, 0, 750],
  /*
   * The camera rig is comprised of Three.js OrbitControls
   * Pass any valid OrbitControls properties, consult docs for more info
   *
   * https://threejs.org/docs/#examples/controls/OrbitControls
   */
  cameraControls: {
    // Enable or disable all camera interaction (click, drag, touch etc)
    enabled: true,
    // Enable or disable smooth dampening of camera movement
    enableDamping: true,
    dampingFactor: 2,
    // Enable or disable zooming in/out of camera
    enableZoom: true,
    // Enable or disable constant rotation of camera around scene
    autoRotate: true,
    // Rotation speed -- higher is faster
    autoRotateSpeed: 5,
    // If true, camera position will be reset whenever any option changes (including this one)
    // Useful when turning off autoRotate, the camera will return to FOV where scene fits to canvas
    resetCameraFlag: false
  }
};
const styles = StyleSheet.create({
  view : {
    flex:1,
    backgroundColor:"black",
    //alignItems:"center",
    //justifyContent:"center",
  },
  text:{
    color:"white",
    opacity:1,
  },
  pbg:{
    zIndex:-1,
  },
  container:{
    height:50,
    width:50,
    backgroundColor:"blue",
  },
  container2:{
    height:50,
    width:50,
    
    opacity:0.5,
  }
}); 
const HomeScreen = () => {
  return ( 
  <View style={styles.view}>
    <ParticleField config={config}/>
    <View style={styles.container2}>
      <Text style={styles.text}>
        O
      </Text>
    </View>
  </View>
    );
};

export default HomeScreen;
