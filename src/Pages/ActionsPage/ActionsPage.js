import React from 'react'
import YouTube from 'react-youtube';

import NavBar from '../../Components/NavBar/NavBar';
import Subtitle from '../../Components/Subtitle/Subtitle';
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';
import Action from '../../Components/Action/Action';
import LinkButton from '../../Components/LinkButton/LinkButton';

import urls from '../../urls';

// import useIsPhone from '../../util/useIsPhone';

import './ActionsPage.css';

function ActionsPage() {
    // const is_phone = useIsPhone();

    const images = [
        {
           src: "/images/actions/testing/1.jpg",
           width: 4993,
           height: 3329,
           caption: "",
        },
        {
           src: "/images/actions/testing/2.jpg",
           width: 5425,
           height: 3617,
           caption: "",
        },
        {
           src: "/images/actions/testing/3.jpg",
           width: 5352,
           height: 3568,
           caption: "",
        },
        {
           src: "/images/actions/testing/4.jpg",
           width: 4743,
           height: 2916,
           caption: "",
        },
        {
           src: "/images/actions/testing/5.jpg",
           width: 5185,
           height: 3457,
           caption: "",
        },
        {
           src: "/images/actions/testing/6.jpg",
           width: 5356,
           height: 3571,
           caption: "",
        },
        {
           src: "/images/actions/testing/7.jpg",
           width: 5014,
           height: 3343,
           caption: "",
        },
        {
           src: "/images/actions/testing/8.jpg",
           width: 4654,
           height: 3103,
           caption: "",
        },
        {
           src: "/images/actions/testing/9.jpg",
           width: 4870,
           height: 3247,
           caption: "",
        },
     ];
  


    return (
        <div id="who_page" className="page actions_page">
            <ScrollToTop />
            
            <NavBar />
            <Subtitle>Nos actions</Subtitle>

            <div className="page_wrap">
                <Action title="Nos interventions" images={images}>
                    <p>
                        Nous organisons des interventions d'une heure dans les ??tablissements de Toulouse et de ses alentours. L'objectif est double :
                    </p>
                    <ul>
                        <li>Sensibiliser et lutter contre les st??r??otypes de genre</li>
                        <li>Encourager les coll??giennes et lyc??ennes qui le souhaitent ?? poursuivre des ??tudes scientifiques sans aucun bridage.</li>
                    </ul>
                    <p>
                        Des groupes allant d'un ?? trois ??tudiant-e-s r??alisent des pr??sentations interactives s'articulant autour de ces deux points en face d'un effectif mixte (l'intervention est ouverte ?? toues et tous). Les ??changes avec les jeunes sont au centre de la rencontre. Ces interventions sont aussi propices ?? des discussions sur l'orientation et le d??veloppement personnel de chacun.
                    </p>
                </Action>

                <Action right={true} title={"Le Parcours<br/>Campus au F??minin"}>
                    <p>
                        Le Parcours est un projet initi?? en collaboration avec OSE (programme d'ouverture sociale de l'ISAE-SUPAERO) ?? destination des lyc??ennes et coll??giennes. Il s'articule en plusieurs ??v??nements au cours de l'ann??e. Un-e ??tudiant-e et une ing??nieure sont affili??es ?? un groupe d'une dizaine de lyc??ennes ou coll??giennes.
                        
                    </p>
                    <YouTube className="action_yt_video_wraper" opts={{width: "", height: "" , playerVars: {autoplay: 1, rel:0, controls:2, mute: 1, loop: 1}}} iframeClassName="action_yt_video" videoId="9G_6iRedItU"/>
                    <LinkButton href={ urls.PARCOURS_PAGE } className="action_parcours_btn" >En savoir plus</LinkButton>
                </Action>

                <Action title="Nos actions sur le campus de l'Institut">
                    <p>
                        Nous organisons en parall??le des ??v??nements sur le campus :
                    </p>
                    <ul>
                        <li>Distributions de protections hygi??niques</li>
                        <li>D??bats autour de sujets portant sur les questions du harc??lements et du sexisme</li>
                        <li>Conf??rences / Tables rondes avec des entreprises du secteur scientifique</li>
                        <li>Questionnaire VSS (Violences Sexistes et Sexuelles)</li>
                    </ul>
                </Action>                   
            </div>
        </div>
    );
}

export default ActionsPage