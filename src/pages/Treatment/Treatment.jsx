import HamburgerMenu from '../components/Menu';
import '../../styles/DiseaseInfo.css';
import Contacts from '../components/Contacts';
import { Link } from 'react-router-dom';

export default function Treatment(){
    return (
        <div>
            <HamburgerMenu />
            <div className='generalStyle'>
                <div className="blockWhite">
                    <div className="textHeaderGrey">
                        Принципы лечения
                    </div>
                    <div className="textGrey">
                        <p>
                            раздел находится в разработке:{'('}.
                        </p>
                    </div>
                </div>
                <div style={{'display' : 'flex', 'justify-content' : 'flex-end'}}>
                    <div style={{'font-size' : '14px', 'width' : 'fit-content'}} className='quoteStyle'>Дата последнего обновления статьи: 5.02.26</div>
                </div>
            </div>
            <Contacts />
        </div>

    )
}