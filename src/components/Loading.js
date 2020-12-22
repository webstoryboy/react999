import React from 'react';

function Loading({color}){
    return (
        <div id="l-wrapper" className={color}>
            <svg viewBox="0 0 120 120" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <g className="g-circles g-circles--v2">
                    <symbol id="s--circle">
                        <circle r="10" cx="20" cy="20"></circle>
                    </symbol>

                    <g className="g--circle">
                        <use xlinkHref="#s--circle" className="u--circle"/>
                    </g>  
                    <g className="g--circle">
                        <use xlinkHref="#s--circle" className="u--circle"/>
                    </g>
                    <g className="g--circle">
                        <use xlinkHref="#s--circle" className="u--circle"/>
                    </g>
                    <g className="g--circle">
                        <use xlinkHref="#s--circle" className="u--circle"/>
                    </g>
                    <g className="g--circle">
                        <use xlinkHref="#s--circle" className="u--circle"/>
                    </g>
                    <g className="g--circle">
                        <use xlinkHref="#s--circle" className="u--circle"/>
                    </g>
                    <g className="g--circle">
                        <use xlinkHref="#s--circle" className="u--circle"/>
                    </g>
                    <g className="g--circle">
                        <use xlinkHref="#s--circle" className="u--circle"/>
                    </g>
                    <g className="g--circle">
                        <use xlinkHref="#s--circle" className="u--circle"/>
                    </g>
                    <g className="g--circle">
                        <use xlinkHref="#s--circle" className="u--circle"/>
                    </g>
                    <g className="g--circle">
                        <use xlinkHref="#s--circle" className="u--circle"/>
                    </g>
                    <g className="g--circle">
                        <use xlinkHref="#s--circle" className="u--circle"/>
                    </g>
                </g>
            </svg>
        </div>
    )
}

export default Loading;