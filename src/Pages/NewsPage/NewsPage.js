import React from 'react'

import NavBar from '../../Components/NavBar/NavBar';
import Subtitle from '../../Components/Subtitle/Subtitle';
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';

import Article from '../../Components/Article/Article';
import NEWS from '../../News';

// import useIsPhone from '../../util/useIsPhone';

import './NewsPage.css';

function NewsPage() {
    // const is_phone = useIsPhone();
    const articles = NEWS.map(data => 
        <Article 
            title  = { data.caps_title ? data.title.toUpperCase() : data.caps_title   }
            place  = { data.caps_sub   ? data.place.toUpperCase() : data.place        }
            date   = { data.caps_sub   ? data.date.toUpperCase()  : data.date        }
            right  = { data.lock_right }
            images = { data.images  }>

            { data.content }

        </Article>
    );


    return (
        <div id="news_page" className="page news_page">
            <ScrollToTop />
            
            <NavBar />
            <Subtitle>Actualités</Subtitle>

            <div className="page_wrap">
                {articles}
            </div>


        </div>
    );
}

export default NewsPage