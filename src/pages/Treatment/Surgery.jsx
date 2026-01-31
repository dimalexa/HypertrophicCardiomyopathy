import HamburgerMenu from '../components/Menu';
import TextSwitcher from '../components/TextSwitcher';
import '../../styles/DiseaseInfo.css';
import {surgeries} from '../../data/texts/treatment';

export default function Surgery(){
    return (
        <div className='generalStyle'>
            <HamburgerMenu />
            <div className="blockRed">
                <div className="textWhite">
                    <p>Здравствуйте! Этот текст поможет вам понять, что такое гипертрофическая кардиомиопатия, 
                        как её распознать и что делать дальше. Помните, что эта информация носит ознакомительный 
                        характер и не заменяет консультацию с вашим лечащим врачом-кардиологом.</p>
                </div>
            </div>

            <div className="blockWhite">
                <div className="textHeaderGrey">
                    Возможные операции и вмешательства
                </div>
                <TextSwitcher data={surgeries} />
            </div>
        </div>

    )
}