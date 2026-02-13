import HamburgerMenu from '../components/Menu';
import TextSwitcher from '../components/TextSwitcher';
import '../../styles/DiseaseInfo.css';
import {surgeries} from '../../data/texts/treatment';
import Contacts from '../components/Contacts';
import Revisor from '../components/Revisor';
import { Link } from 'react-router-dom';

export default function Surgery(){
    return (
        <div>
            <HamburgerMenu />

            <div className='generalStyle'>
            <div className="blockWhite">
                <div className="textHeaderGrey">
                    Возможные операции и вмешательства
                </div>
                <TextSwitcher data={surgeries} />

                <p>
                    Но операции, к сожалению, не устраняют возможность аритмий. Для этого имплантируют электрические устройства, 
                    которые предотвращают или купируют сбои ритма:
                </p>
                <button className="navButton">
                    <Link to={'/life/devices'} className='navButtonLink'> Почитать про имплантируемые устройства → </Link>
                </button>
            </div>
                <Revisor page='Surgery' />
            </div>
            <Contacts />
        </div>

    )
}