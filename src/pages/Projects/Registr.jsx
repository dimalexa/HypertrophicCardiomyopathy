import HamburgerMenu from '../components/Menu';
import '../../styles/DiseaseInfo.css';
import Contacts from '../components/Contacts';
import { Link } from 'react-router-dom';
import Revisor from '../components/Revisor';

export default function Registr(){
    return (
        <div>
            <HamburgerMenu />
            <div className='generalStyle'>
                <div className="blockWhite">
                    <div className="textHeaderGrey">
                        <p>Найденные регистры пациентов с ГКМП</p>
                    </div>
                    <div className='textgrey'>
                        
                    </div>
                </div>
            </div>
            <Contacts />
        </div>)}