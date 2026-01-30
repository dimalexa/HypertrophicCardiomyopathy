import HamburgerMenu from '../components/Menu';
import TextSwitcher from '../components/TextSwitcher';
import '../../styles/DiseaseInfo.css';
import {drugs} from '../../data/texts/treatment';

export default function Drugs(){
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
                    Препараты, которые могут назначить:
                </div>
            </div>

            <TextSwitcher data={drugs} />
        </div>

    )
}