import HamburgerMenu from '../components/Menu';
import TextSwitcher from '../components/TextSwitcher';
import '../../styles/DiseaseInfo.css';
import {surgeries} from '../../data/texts/treatment';
import Contacts from '../components/Contacts';

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
            </div>
            </div>
            <Contacts />
        </div>

    )
}