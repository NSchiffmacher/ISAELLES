import React from 'react'

import NavBar from '../../Components/NavBar/NavBar';
import Subtitle from '../../Components/Subtitle/Subtitle';
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';
import Action from '../../Components/Action/Action';

// import useIsPhone from '../../util/useIsPhone';

import './ActionsPage.css';

function ActionsPage() {
    // const is_phone = useIsPhone();


    return (
        <div id="who_page" className="page actions_page">
            <ScrollToTop />
            
            <NavBar />
            <Subtitle>Nos actions</Subtitle>

            <div className="page_wrap">

                <Action title="Nos interventions">
                    <p>
                        Nous organisons des interventions d'une heure dans les établissements de Toulouse et de ses alentours. L'objectif est double :
                        <ul>
                            <li>Sensibiliser et lutter contre les stéréotypes de genre</li>
                            <li>Encourager les collégiennes et lycéennes qui le souhaitent à poursuivre des études scientifiques sans aucun bridage.</li>
                        </ul>
                        Des groupes allant d'un à trois étudiant-e-s réalisent des présentations interactives s'articulant autour de ces deux points en face d'un effectif mixte (l'intervention est ouverte à toues et tous). Les échanges avec les jeunes sont au centre de la rencontre. Ces interventions sont aussi propices à des discussions sur l'orientation et le développement personnel de chacun.
                    </p>
                </Action>

                <Action right={true} title={"Le Parcours<br/>Campus au Féminin"}>
                    <p>
                        Le Parcours est un projet initié en collaboration avec OSE (programme d'ouverture sociale de l'ISAE-SUPAERO) à destination des lycéennes et collégiennes. Il s'articule en plusieurs évènements au cours de l'année. Un-e étudiant-e et une ingénieure sont affiliées à un groupe d'une dizaine de lycéennes ou collégiennes.
                    </p>
                </Action>

                <Action title="Nos actions sur le campus de l'Institut">
                    <p>Nous organisons en parallèle des évènements sur le campus :
                        <ul>
                            <li>Distributions de protections hygiéniques</li>
                            <li>Débats autour de sujets portant sur les questions du harcèlements et du sexisme</li>
                            <li>Conférences / Tables rondes avec des entreprises du secteur scientifique</li>
                            <li>Questionnaire VSS (Violence Sexiste et Sexuelle)</li>
                        </ul>
                    </p>
                </Action>                   

            </div>
        </div>
    );
}

export default ActionsPage