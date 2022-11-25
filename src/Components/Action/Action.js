import React from 'react'
import SmallBlob from '../../Components/SmallBlob/SmallBlob';

import parse from "html-react-parser";

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
        { props.children }
    </div>
    );
}
export default Action;