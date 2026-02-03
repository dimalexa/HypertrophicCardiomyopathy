import HamburgerMenu from '../components/Menu';
import TextSwitcher from '../components/TextSwitcher';
import '../../styles/DiseaseInfo.css';
import {surgeries} from '../../data/texts/treatment';

export default function Surgery(){
    return (
        <div className='generalStyle'>
            <HamburgerMenu />

            <div className="blockWhite">
                <div className="textHeaderGrey">
                    Возможные операции и вмешательства
                </div>
                <TextSwitcher data={surgeries} />
            </div>
        </div>

    )
}