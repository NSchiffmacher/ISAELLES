import React from 'react'
import SmallBlob from '../../Components/SmallBlob/SmallBlob';

import parse from "html-react-parser";
import { Gallery } from "react-grid-gallery";

import useIsPhone from '../../util/useIsPhone';

import './Action.css';

function Action(props) {
    const right = props.right ?? false;
    const is_phone = useIsPhone();
    
    return (
    <div className="action">
        <div className={right && !is_phone ? "action_title_wraper action_title_wraper_right" : "action_title_wraper"}>
            <div className="action_title">
                <SmallBlob>-</SmallBlob>
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