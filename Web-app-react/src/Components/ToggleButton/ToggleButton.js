import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ToggleButton from 'react-toggle-button'

const CheckedIcon = () => <>🌜</>;
const UncheckedIcon = () => <>🌞</>;

const ToggleButtonComponent = ( props ) => {

    const [toggle, setToggle] = useState(false);
    

    return (
        <ToggleButton
            inactiveLabel={''}
            activeLabel={''}
            colors={{
                activeThumb: {
                base: '#FFFFFF',
                },
                inactiveThumb: {
                base: '#FFFFFF',
                },
                active: {
                base: '#889FDF',
                hover: 'rgb(177, 191, 215)',
                },
                inactive: {
                base: '#BCBCBC',
                hover: '#A29D9D',
                }
            }}
            
            thumbAnimateRange={[-5, 36]}
            
            value={props.value}
            onToggle={props.onChange} />
            // Such hover, much wow!
                );
}


export default ToggleButtonComponent