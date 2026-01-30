import HamburgerMenu from '../components/Menu';
import TextSwitcher from '../components/TextSwitcher';
import '../../styles/DiseaseInfo.css';
import {infotext, dataSymptoms} from '../../data/texts/diseaseinfo';

export default function Symptoms(){
    return (
        <div className='generalStyle'>
            <HamburgerMenu />
            <div className="blockRed">
                <div className="textWhite">
                    <p>{infotext.Intro[0]}</p>
                    <p>{infotext.Intro[1]}</p>
                </div>
            </div>

            <div className="blockWhite">
                <div className="textHeaderGrey">
                    {infotext.Symptoms[0]}
                </div>
            </div>

            <TextSwitcher data={dataSymptoms} />

            <div className="blockGrey">
                <div className="textHeaderWhite">
                    {infotext.RedFlags[0]}
                </div>
            </div>
            <div className="blockGrey">
                 <div className="textWhite">
                    <p>{infotext.RedFlags[1]}</p>
                    <ul>
                    <li>{infotext.RedFlags[2]}</li>
                    <li>{infotext.RedFlags[3]}</li>
                    </ul>
                </div>
            </div>
        </div>

    )
}