import React, { useState } from 'react'
import SmallBlob from '../../Components/SmallBlob/SmallBlob';

import parse from "html-react-parser";
import { Gallery } from "react-grid-gallery";

import useIsPhone from '../../util/useIsPhone';
import useAppearTransition from '../../util/useAppearTransition';

import './Action.css';

function Action(props) {
    const right = props.right ?? false;
    const is_phone = useIsPhone();

    // Animation for the titles
    const [title_style, set_title_style] = useState({
        transform: 'translateX(-50px) scale(0.4)',
        opacity: 0,
        transition: 'transform 0.4s ease-out, opacity 0.5s ease-out'
    });
    const title_trigger_ref = useAppearTransition(() => {
        set_title_style({
            ...title_style,
            transform: 'translateX(0px) scale(1)',
            opacity: 1
        });
    }, {threshold: 0.1});


    
    return (
    <div className="action">
        <div className={right && !is_phone ? "action_title_wraper action_title_wraper_right" : "action_title_wraper"}>
            <div ref={ title_trigger_ref } className="action_title" style={ title_style }>
                <SmallBlob> &gt;</SmallBlob>
                <div>{ parse(props.title) }</div>
            </div>
        </div>
        <div className="action_content">
            { props.children }
        </div>
        { props.images && 
            <div className="action_gallery" style={ props.galleryStyle }>
                <Gallery images={ props.images } enableImageSelection={false} rowHeight={250} margin={6} />
            </div>
        }
    </div>
    );
}
export default Action;