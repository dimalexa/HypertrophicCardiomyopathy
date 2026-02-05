import HamburgerMenu from '../components/Menu';
import TextSwitcher from '../components/TextSwitcher';
import Contacts from '../components/Contacts';
import '../../styles/DiseaseInfo.css';
import {infotext, dataSymptoms} from '../../data/texts/diseaseinfo';

export default function Symptoms(){
    return (
        <div>
            <HamburgerMenu />

            <div className='generalStyle'>
            <div className="blockWhite">
                <div className="textHeaderGrey">
                    <p>Какими симптомами может проявляться ГКМП?</p>
                </div>
                <div className='textGrey'>
                     <p>
                        Механизм возникновения всех симптомов вытекает из того, как развивается ГКМП, 
                        что было описано в предыдущем разделе. Однако большая часть людей, живущих с ГКМП, 
                        вообще не испытывает каких либо проблем. 
                    </p>
                    <p>
                        <b>Важно помнить, что эти симптомы появляются не только при гипертрофической кардиомиопатии! </b>  
                         Одышка может быть следствием болезней легких, стенокардия — той же ишемической болезни сердца, 
                        сердцебиения могут сопровождать тиреотоксикоз, а усталость, слабость и головокружения — быть 
                        следствием гиповитаминозов и анемии. 
                    </p>
                </div>
            </div>

            <TextSwitcher data={dataSymptoms} />

            <div className="blockWhite">
                <div className="textHeaderGrey">
                    {infotext.RedFlags[0]}
                </div>
            </div>
            <div className="blockWhite">
                 <div className="textGrey">
                    <p>{infotext.RedFlags[1]}</p>
                    <ul>
                    <li>{infotext.RedFlags[2]}</li>
                    <li>{infotext.RedFlags[3]}</li>
                    </ul>
                </div>
            </div>
                <div style={{'display' : 'flex', 'justify-content' : 'flex-end'}}>
                    <div style={{'font-size' : '14px', 'width' : 'fit-content'}} className='quoteStyle'>Дата последнего обновления статьи: 5.02.26</div>
                </div>
            </div>
            <Contacts />
        </div>

    )
}