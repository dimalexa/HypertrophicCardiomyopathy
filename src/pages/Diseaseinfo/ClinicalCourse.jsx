import HamburgerMenu from '../components/Menu';
import '../../styles/DiseaseInfo.css';
import {infotext} from '../../data/texts/diseaseinfo';

export default function ClinicalCourse(){
    return (
        <div className='generalStyle'>
            <HamburgerMenu />
            <div className="blockRed">
                <div className="textWhite">
                    <p>{infotext.Intro[0]}</p>
                    <p>{infotext.Intro[1]}</p>
                </div>
            </div>
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
            <div className="blockRed">
                <div className="textHeaderWhite">
                    {infotext.Ending[0]}
                </div>
            </div>
             <div className="blockRed">
                <div className="textWhite">
                    <p>{infotext.Ending[1]}</p>
                    <p>{infotext.Ending[2]}</p>
                    <p>{infotext.Ending[3]}</p>
                    <p>{infotext.Ending[4]}</p>
                    <p>{infotext.Ending[5]}</p>
                    <p>{infotext.Ending[6]}</p>
                </div>
            </div>
        </div>

    )
}