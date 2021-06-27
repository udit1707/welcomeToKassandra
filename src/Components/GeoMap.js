import React, { useState } from 'react'
import LinearGradient from './AllotStocks/LinearGradient';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { scaleQuantile } from 'd3-scale';
import ReactTooltip from 'react-tooltip';
const INDIA_TOPO_JSON = require('./AllotStocks/india.topo.json');
const GeoMap = props =>{
    

    const PROJECTION_CONFIG = {
    scale: 900,
    center: [78.9629, 22.5937] // always in [East Latitude, North Longitude]
    };

    // Shades of Sea Variants--CUTOMIZABLE  light gradient to dark.
    const COLOR_RANGE = ['#D5F8E2','#ACE9DF','#47B9C6','#2A7FAA','#21497E'];

    const DEFAULT_COLOR = '#FFFFFF';

    const geographyStyle = {
    default: {
        outline: 'none'
    },
    hover: {
        fill:"#376BF0",
        transition: 'all 1500ms',
        outline: 'none'
    },
    pressed: {
        outline: 'none'
    },
    boxShadow:"2px 2px 5px #9E9E9E"
    };


    /****************CUSTOMIZE DATA ARRAY AS PER API *************/
    const getAnalysisData = () => {
    return [
        { map_id: 'AP',sold_count: 15,price:180 },
        { map_id: 'AR',sold_count: 14,price:180 },
        { map_id: 'AS',sold_count: 13,price:180 },
        { map_id: 'BR',sold_count: 21,price:180 },
        { map_id: 'CT',sold_count: 10 ,price:180}];
    };
    const [data, setData] = useState(getAnalysisData());
    const [tooltipContent, setTooltipContent] = useState('');
    const gradientData = {
        fromColor: COLOR_RANGE[0],
        toColor: COLOR_RANGE[COLOR_RANGE.length - 1],
        min: 0,
        max: data.reduce((max, item) => (item.sold_count > max ? item.sold_count : max), 0)
      };
    
      const colorScale = scaleQuantile()
        .domain(data.map(d => d.sold_count))
        .range(COLOR_RANGE);
    
      const onMouseEnter = (geo, current = { sold_count: 'NA',price:'NA' }) => {
        return () => {
          setTooltipContent(`State=${geo.properties.name}<br\>
          ${props.title1}=${current.price}<br\>
          ${props.title2}=${current.sold_count} %`);
        };
      };
      const onMouseLeave = () => {
        setTooltipContent('');
      };
      
      const Wwidth = window.innerWidth;
      const Wheight = window.innerHeight;

    return <div style={{width:'45%',flexDirection:'column',justifyContent:'flex-start',alignItems:'center',display:'flex'}}>
    <h1 style={{fontSize:30}}>{props.analysis}</h1>
    <ReactTooltip html={true}>{tooltipContent}</ReactTooltip>
      <ComposableMap
        
        projectionConfig={PROJECTION_CONFIG}
        projection="geoMercator"
        width={Wwidth*0.4}
        height={Wheight*0.7}
        data-tip=""
      >
        <Geographies geography={INDIA_TOPO_JSON}>
          {({ geographies }) =>
            geographies.map(geo => {
              const current = data.find(s => s.map_id === geo.id);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={current ? colorScale(current.sold_count) : DEFAULT_COLOR}
                  stroke="#376BF0"
                  strokeWidth="0.4"
                  style={geographyStyle}
                  onMouseEnter={onMouseEnter(geo, current)}
                  onMouseLeave={onMouseLeave}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
      <LinearGradient data={gradientData} />
      </div>
}

export default GeoMap;