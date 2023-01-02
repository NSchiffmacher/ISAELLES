import React, { useState } from 'react'
import SmallBlob from '../../Components/SmallBlob/SmallBlob';

import parse from "html-react-parser";
import { Gallery } from "react-grid-gallery";

import useIsPhone from '../../util/useIsPhone';
import useAppearTransition from '../../util/useAppearTransition';

import './Article.css';

function Article(props) {
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

    const subtitle = props.place + " | " + props.date;
    
    return (
    <div className="article">
        <div className={right && !is_phone ? "article_title_wraper article_title_wraper_right" : "article_title_wraper"}>
            <div ref={ title_trigger_ref } className="article_title" style={ title_style }>
                {!is_phone && <SmallBlob> &gt;</SmallBlob>}
                <div className="article_title_container">
                    <div className="article_title_string">{ parse(props.title) }</div>
                    <div className="article_title_substring">{ parse(subtitle) }</div>
                </div>
            </div>
        </div>
        <div className="article_content">
            { props.children }
        </div>
        { props.images && 
            <div className="article_gallery" style={ props.galleryStyle }>
                <Gallery images={ props.images } enableImageSelection={false} rowHeight={250} margin={6} />
            </div>
        }
    </div>
    );
}
export default Article;