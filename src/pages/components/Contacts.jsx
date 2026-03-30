import '../../styles/Main.css';
import logo from '../../data/images/logo.png';
import { Link } from 'react-router-dom';
import vk from '../../data/images/vk.png';
import telega from '../../data/images/telegramm.png';

export default function Contacts() {
    return (
        <div className="block">
            <img src={logo} style={{height : '200px', alignSelf : 'center'}}></img>
            <div>
                <div className="block-header">
                    Меню
                </div>
                <div className="block-text">
                    <p><Link to={'/about'} className='linkStyle'> О сайте →</Link></p>
                    <p><Link to={'/disease-info'} className='linkStyle'> О болезни →</Link></p>
                    <p><Link to={'/life'} className='linkStyle'> Жизнь с ГКМП →</Link></p>
                    <Link to={'/projects'} className='linkStyle'> Проекты →</Link>
                </div>
            </div>
            <div>
                <div className="block-header">
                    Контакты
                    </div>
                    <div className="block-text">
                            <p><i class="bi bi-envelope-at-fill" style={{'font-size' : '24px', 'color': 'white'}}></i> <b>: gkmp-info@yandex.com</b></p>
                            <p>Ссылки на найденные сообщества:</p>
                            <div style={{display : 'flex', gap : '20px'}}>
                                <a href='https://t.me/GKMPchat' className='linkStyle' target="_blank"><img src={telega} style={{'width' : '30px'}}></img></a>
                                <a href='https://vk.com/club149728136' className='linkStyle' target="_blank"><img src={vk} style={{'width' : '30px'}}></img></a>
                            </div>
                        </div>
                        <div>

                    </div>
            </div>
            <div style={{color : '#bdc1ef', fontSize : '12px', padding : '50px 5% 20px 5%'}}>
                Данный сайт является информационным ресурсом, предоставляющим справочные материалы. 
                Информация носит ознакомительный характер, не является рекомендацией, рекламой или призывом к действиям. 
                Пользователи самостоятельно несут ответственность за принятые решения на основе размещенных данных.
            </div>
                    
        </div>  
    )
}