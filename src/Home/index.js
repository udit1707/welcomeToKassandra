
import React, { useCallback, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';
import '../Screens/mystyle1.css'
import '../Screens/styles.css'
import { FiHome, FiUsers, } from 'react-icons/fi';
// import { IoSettingsOutline } from 'react-icons/io5';
import { IoMdSettings, } from 'react-icons/io';
import track from '../images/Home/track.png';
import ecom from '../images/Home/ecom.png';
import explo from '../images/Home/explo.png';
import emp from '../images/Home/emp.png';
import dash from '../images/Home/dash.png'
import AnimusParticle from '../Screens/AnimusParticle';
const Home = () => {
    const history = useHistory();
    const Wwidth=window.innerWidth*0.95;
    const Wheight=window.innerHeight;
    const [background, setBackground] = useState('background-chess');
    const [activeType, setActiveType] = useState('videogame');
    const [activePosition, setActivePosition] = useState(0);
    const handleNavigateToStart = useCallback(() => {
        history.push('/');
    }, [history]);
    const handleNavigateToUsers = useCallback(() => {
        history.push('/users');
    }, [history]);
    const handleNavigateToShutdown = useCallback(() => {
        history.push('/shutdown');
    }, [history]);
    const games = useMemo(() => {
        return [
            {
                name: 'Dashboard',
                image: dash,
                url:'/Dashboard',
                progress: undefined,
                label: 'dash',
                bg: 'bgco1',
                gc: 'gc1'
            },
            {
                name: 'E- Business',
                image: ecom,
                progress: undefined,
                label: 'ecom',
                bg: 'bgco2',
                gc: 'gc2'
            },
            {
                name: 'Track Orders',
                image: track,
                progress: undefined,
                label: 'tracking',
                bg: 'bgco3',
                gc: 'gc3'
            },
            {
                name: 'Explore Web',
                image: explo,
                progress: undefined,
                label: 'explore',
                bg: 'bgco4',
                gc: 'gc4'
            },
            {
                name: ' Employees',
                image: emp,
                progress: undefined,
                label: 'explore',
                bg: 'bgco4',
                gc: 'gc4'
            },
        ];
    }, []);
    const options = useMemo(() => {
        return [
            {
                name: 'Home',
                icon: <FiHome />,
                navigation: undefined,
            },
            {
                name: 'Settings',
                icon: <IoMdSettings />,
                navigation: undefined,
            },
            {
                name: 'Game base',
                icon: <FiUsers />,
                navigation: undefined,
            },
        ];
    }, [handleNavigateToShutdown, handleNavigateToStart, handleNavigateToUsers]);
    const handleSetActive = useCallback((type, position) => {
        setActiveType(type);
        setActivePosition(position);
    }, [games]);
    
    return (<div >   
              
         <div style={{width:Wwidth,height:Wheight,position:'absolute',overflowY:'hidden'}}>   
        
      <div className="container-home"  style={{backgroundColor:'transparent',zIndex:1}}>
      
          <div className="content-home" style={{backgroundColor:'transparent'}}>
          
            <div className={`games-list ${background}`} style={{backgroundColor:'transparent'}}>
            <h1 className="Gatewayh1">Kassandra Gateway</h1>
            
              {games.map((game, index) => (
              <div   className={`${game.gc} ${game.bg} game-card game-inactive`} 
              onMouseUpCapture={()=>history.push(game.url)} key={`${game.name}-${activeType}-${activePosition}`}>
                  <img src={game.image} alt={game.name} className="background-game"/>

               
                  <div className="game-info" >
                    <div className="game-name" style={{width:'100%'}}>{game.name}</div>
                  </div>
                </div>))}
                
            </div>
            
            <div className="options-list" style={{width:'30%',height:'10%',borderTopRightRadius:20,borderTopLeftRadius:20,
            backgroundColor:'#242222',
            justifyContent:'space-evenly',
            alignItems:'center',display:'flex'}}>
              {options.map(option => (<div key={option.name} type="div" className="option-card" onClick={option.navigation}>
                  {option.icon}
                </div>))}
            </div>
            
          </div>
          
        </div>
        
    </div>
    <div style={{width:'100%',height:Wheight,position:'absolute'}}>
    <AnimusParticle />
    </div>
    </div>);
};
export default Home;
