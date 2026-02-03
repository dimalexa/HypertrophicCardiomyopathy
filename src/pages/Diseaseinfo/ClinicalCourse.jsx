import HamburgerMenu from '../components/Menu';
import '../../styles/DiseaseInfo.css';
import {infotext} from '../../data/texts/diseaseinfo';

export default function ClinicalCourse(){
    return (
        <div className='generalStyle'>
            <HamburgerMenu />
            <div className="blockGrey">
                <div className="textHeaderWhite">
                    {infotext.Progress[0]}
                </div>
            </div>
            <div className="blockGrey">
                 <div className="textWhite">
                    <p>{infotext.Progress[1]}</p>
                    <p>{infotext.Progress[2]}</p>
                    <p>{infotext.Progress[3]}</p>
                    <p>{infotext.Progress[4]}</p>
                    <p>{infotext.Progress[5]}</p>
                    <p>{infotext.Progress[6]}</p>
                </div>
            </div>
        </div>

    )
}