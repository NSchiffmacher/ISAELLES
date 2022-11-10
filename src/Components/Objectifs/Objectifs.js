import React, { useState } from 'react';

import useAppearTransition from '../../util/useAppearTransition';
import useIsPhone from '../../util/useIsPhone';

import Objectif from '../Objectif/Objectif';

import './Objectifs.css';

function Objectifs(props) {
	const is_phone = useIsPhone();

	// Animating the image
	const [image_style, set_image_style] = useState({
		transform: 'translateX(200px) scale(0.6)',
		opacity: 0,
		transition: 'transform 0.4s ease-out, opacity 0.5s ease-out'
	});
	const image_ref = useAppearTransition(() => {
		set_image_style({
			...image_style,
			transform: 'translateX(0px)',
			opacity: 1
		})
	}, {threshold: (is_phone ? 0.15 : 0.7)});

	//Animating the objectives
	const [objectives_style, set_objectives_style] = useState({
		transform: 'translateY(150px)',
		opacity: 0,
		transition: 'transform 0.4s ease-out, opacity 0.5s ease-out',
		transitionDelay: '0.2s'
	});
	const objectives_trigger_ref = useAppearTransition(() => {
		set_objectives_style({
			...objectives_style,
			transform: 'translateY(0px)',
			opacity: 1
		})
	}, {threshold: 0});
	return (
		<div ref={ props.inp_ref } className="objectifs">
			<div className="left">
				<p>
				Créé en 2015 à l’ISAE-SUPAERO, ISAELLES regroupe les hommes et les femmes de l'ISAE (étudiant-e-s, professeur-e-s, membres du personnel, intervenant-e-s, ancien-ne-s élèves) ayant le projet commun d'encourager les collégiennes et les lycéennes à s'orienter vers des études scientifiques et plus spécifiquement vers les carrières d’ingénieurs.
				</p>
				<h3 ref={ objectives_trigger_ref }>NOS OBJECTIFS</h3>
				<div className="objectifs_liste">
					<Objectif style={ objectives_style } num={1}>Lutter contre les stéréotypes de genre</Objectif>                
					<Objectif style={{...objectives_style, transitionDelay: '0.4s'} } num={2}>Encourager les collégiennes et les lycéennes à s'orienter vers des études scientifiques</Objectif>                
				</div>
			</div>
			<div ref={ image_ref } className="right">
				<img style={ image_style } src="/images/objectif_side.jpg" alt="side" />
			</div>
		</div>
	)
}

export default Objectifs