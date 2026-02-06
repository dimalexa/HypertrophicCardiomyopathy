import HamburgerMenu from '../components/Menu';
import TextSwitcher from '../components/TextSwitcher';
import '../../styles/DiseaseInfo.css';
import {history} from '../../data/texts/history';
import Contacts from '../components/Contacts';

export default function History(){
    return (
        <div>
            <HamburgerMenu />

            <div className='generalStyle'>
            <div className="blockWhite">
                <div className="textHeaderGrey">
                    Истории
                </div>
                <div className="HistoryText"> 
                    {history.map((item, index) => (
                        <div style={{'border-bottom' : '1px solid rgb(216, 216, 221)'}}>
                            <h2>{item.creator}</h2>
                            <p>{item.content}</p>
                        </div>
                    ))}
                </div>
            </div>
            </div>
            <Contacts />
        </div>

    )
}