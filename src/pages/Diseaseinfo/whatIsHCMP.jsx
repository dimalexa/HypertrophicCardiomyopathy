import HamburgerMenu from '../components/Menu';
import '../../styles/DiseaseInfo.css';
import {infotext} from '../../data/texts/diseaseinfo';
import hcmpvariants from '../../data/images/versions_illustration.png';

export default function WhatIsHCMP(){
    return (
        <div className='generalStyle'>
            <HamburgerMenu />   
            <div className="blockGrey">
                <div className="textHeaderWhite">
                    {infotext.WhatIs[0]}
                </div>
            </div>
            <div className="blockWithImage" style={{'background' : 'grey'}}>
                <div className="textWhite">
                    {infotext.WhatIs[1]}
                    <p>{infotext.WhatIs[2]}</p>
                </div>
                 <img src={hcmpvariants} className='imageStyle'></img>
            </div>
            <div className="blockGrey">
                <div className="textWhite">
                    <p>{infotext.WhatIs[3]}</p>
                    <p>{infotext.WhatIs[4]}</p>
                    <p>{infotext.WhatIs[5]}</p>
                    <p>{infotext.WhatIs[6]}</p>
                </div>
            </div>
        </div>

    )
}