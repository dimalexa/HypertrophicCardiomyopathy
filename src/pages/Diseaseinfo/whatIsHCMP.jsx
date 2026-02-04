import HamburgerMenu from '../components/Menu';
import Contacts from '../components/Contacts';
import '../../styles/DiseaseInfo.css';
import {infotext} from '../../data/texts/diseaseinfo';
import hcmpvariants from '../../data/images/versions_illustration.png';

export default function WhatIsHCMP(){
    return (
        <div>
            <HamburgerMenu />   
            <div className='generalStyle'>
                <div className="blockWhite">
                    <div className="textHeaderGrey">
                        {infotext.WhatIs[0]}
                    </div>
                </div>
                <div className="blockWithImage">
                    <div className="textGrey">
                        {infotext.WhatIs[1]}
                        <p>{infotext.WhatIs[2]}</p>
                    </div>
                    <img src={hcmpvariants} className='imageStyle'></img>
                </div>
                <div className="blockWhite">
                    <div className="textGrey">
                        <p>{infotext.WhatIs[3]}</p>
                        <p>{infotext.WhatIs[4]}</p>
                        <p>{infotext.WhatIs[5]}</p>
                        <p>{infotext.WhatIs[6]}</p>
                    </div>
                </div>
            </div>
            <Contacts />
        </div>

    )
}