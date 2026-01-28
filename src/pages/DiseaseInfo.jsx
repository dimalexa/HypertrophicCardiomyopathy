import HamburgerMenu from './components/Menu';
import '../styles/DiseaseInfo.css';
import {infotext} from '../data/texts/diseaseinfo';
import hcmpvariants from '../data/images/hcmpvariants.jpg';

export default function DiseaseInfo(){
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
                    {infotext.WhatIs[0]}
                </div>
            </div>
            <div className="blockWithImage">
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
            <div className="blockWhite">
                <div className="textHeaderGrey">
                    {infotext.Symptoms[0]}
                </div>
            </div>
            <div className="blockWhite">
                 <div className="textGrey">
                    <p>{infotext.Symptoms[1]}</p>
                    <p>{infotext.Symptoms[2]}</p>
                    <p>{infotext.Symptoms[3]}</p>
                    <p>{infotext.Symptoms[4]}</p>
                    <p>{infotext.Symptoms[5]}</p>
                </div>
            </div>
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
            <div className="blockWhite">
                <div className="textHeaderGrey">
                    {infotext.HowDiagnosed[0]}
                </div>
            </div>
            <div className="blockWhite">
                 <div className="textGrey">
                    <p>{infotext.HowDiagnosed[1]}</p>
                </div>
                <div className="textSubheaderGrey">
                    {infotext.ObjExam[0]}
                </div>
                <div className="textGrey">
                    <p>{infotext.ObjExam[1]}</p>
                </div>
                <div className="textSubheaderGrey">
                    {infotext.LabExam[0]}
                </div>
                <div className="textGrey">
                    <p>{infotext.LabExam[1]}</p>
                    <p>{infotext.LabExam[2]}</p>
                </div>
                <div className="textSubheaderGrey">
                    {infotext.InstrExam[0]}
                </div>
                <div className="textMiniheaderGrey">
                    {infotext.ECG[0]}
                </div>
                <div className="textGrey">
                    <p>{infotext.ECG[1]}</p>
                    <p>{infotext.ECG[2]}</p>
                </div>
                <div className="textMiniheaderGrey">
                    {infotext.EchoKG[0]}
                </div>
                <div className="textGrey">
                    <p>{infotext.EchoKG[1]}</p>
                    <ul>
                        <li>{infotext.EchoKG[2]}</li>
                        <li>{infotext.EchoKG[3]}</li>
                        <li>{infotext.EchoKG[4]}</li>
                        <li>{infotext.EchoKG[5]}</li>
                    </ul>
                    <p>{infotext.EchoKG[6]}</p>
                </div>
                <div className="textMiniheaderGrey">
                    {infotext.MRI[0]}
                </div>
                <div className="textGrey">
                    <p>{infotext.MRI[1]}</p>
                    <p>{infotext.MRI[2]}</p>
                </div>
                <div className="textMiniheaderGrey">
                    {infotext.Holter[0]}
                </div>
                <div className="textGrey">
                    <p>{infotext.Holter[1]}</p>
                    <p>{infotext.Holter[2]}</p>
                    <p>{infotext.Holter[3]}</p>
                </div>
                <div className="textMiniheaderGrey">
                    {infotext.GeneticTest[0]}
                </div>
                <div className="textGrey">
                    <p>{infotext.GeneticTest[1]}</p>
                    <p>{infotext.GeneticTest[2]}</p>
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
    );
}