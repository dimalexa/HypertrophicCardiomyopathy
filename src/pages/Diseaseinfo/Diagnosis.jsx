import HamburgerMenu from '../components/Menu';
import TextSwitcher from '../components/TextSwitcher';
import '../../styles/DiseaseInfo.css';
import {dataExams, infotext} from '../../data/texts/diseaseinfo';

export default function Diagnosis(){
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
                    {infotext.HowDiagnosed[0]}
                </div>
            </div>

            <TextSwitcher data={dataExams}/>
        </div>

    )
}