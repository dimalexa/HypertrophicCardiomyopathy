import HamburgerMenu from '../components/Menu';
import '../../styles/DiseaseInfo.css';
import {infotext} from '../../data/texts/diseaseinfo';
import Contacts from '../components/Contacts';

export default function ClinicalCourse(){
    return (
        <div>
            <HamburgerMenu />
            <div className='generalStyle'>
            <div className="blockWhite">
                <div className="textHeaderGrey">
                    {infotext.Progress[0]}
                </div>
            </div>
            <div className="blockWhite">
                 <div className="textGrey">
                    <p>{infotext.Progress[1]}</p>
                    <p>{infotext.Progress[2]}</p>
                    <p>{infotext.Progress[3]}</p>
                    <p>{infotext.Progress[4]}</p>
                    <p>{infotext.Progress[5]}</p>
                    <p>{infotext.Progress[6]}</p>
                </div>
            </div>
            </div>
            <Contacts />
        </div>

    )
}