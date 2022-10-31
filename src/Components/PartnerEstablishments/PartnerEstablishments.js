import React, { useState } from 'react'

import './PartnerEstablishments.css'

function PartnerEstablishments(props) {
    let li_left = []
    let li_right = []
    const [is_phone] = useState(
        window.innerWidth < 768 ? true : false
      );
    console.log(window.innerWidth, is_phone);

    props.children.forEach((establishment, index) => {
        const key = `partner_establishment_li_${index}`;
        if (index % 2 === 0 || is_phone ){
            li_left.push(<li key={key}>{establishment}</li>)
        } else {
            li_right.push(<li>{establishment}</li>)
        }
    })


    return (
        <div className="partner_establishments">
            <div className="type">
                <div className="name">{ props.name }</div>
            </div>
            <div className="list">
                <div className="col">
                    <ul>
                        { li_left }
                    </ul>
                </div>
                <div className="col">
                    <ul>
                        { li_right }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PartnerEstablishments