import HamburgerMenu from '../components/Menu';
import TextSwitcher from '../components/TextSwitcher';
import '../../styles/DiseaseInfo.css';
import {drugs} from '../../data/texts/treatment';
import Contacts from '../components/Contacts';
import { Link } from 'react-router-dom';

export default function Drugs(){
    return (
        <div>
            <HamburgerMenu />
            <div className='generalStyle'>
            <div className="blockWhite">
                <div className="textHeaderGrey">
                    Препараты, которые могут назначить:
                </div>
                <div className='textGrey'>
                    <p>
                        Медикаментозная терапия ГКМП зиждется на бета-блокаторах либо кальциевых блокаторах - 
                        если есть симптомы (одышка, боли в груди). Другие группы препаратов назначаются тогда, 
                        когда появляется причина для этого. 
                    </p>
                    <p>
                        Кроме списка препаратов, который нужно будет принимать, есть и список, который принимать 
                        <b> не рекомендуется (их приём нужно обсудить с кардиологом)</b>:
                    </p>
                    <ol>
                        <li>
                            Нитраты (нитроглицерин, изосорбида мононитрат и динитрат).
                        </li>
                        <li>
                            Ингибиторы фосфодиэстразы (силденафил).
                        </li>
                        <li>
                            Дигоксин.
                        </li>
                        <li>
                            Дигибропиридиновые блокаторы кальциевых каналов (нифедипин).
                        </li>
                        <li>
                            Ингибиторы АПФ и антагонисты альдостерона.
                        </li>
                    </ol>
                    <p>
                        Эти препараты либо увеличивают силу сердечных сокращений, либо уменьшают наполнение сердца - 
                        в обоих случаях симптомы могут стать хуже.
                    </p>
                    <p>
                        Для проверки безопасности взаимодействий тех лекарств, которые Вы принимаете, 
                        можно использовать онлайн ресурсы проверки вза имодействий лекарств, например <a href='https://www.drugs.com/drug_interactions.html'>такой. </a>
                        <b>Но лучше посоветоваться с врачом!</b>
                    </p>
                </div>
            </div>

            <TextSwitcher data={drugs} />

            <p>
                    Если лекарства не помогают или есть какие-то другие показания, то рассматривают возможность операции:
            </p>
            <button className="navButton">
                <Link to={'/life/surgery'} className='navButtonLink'> Почитать про операции → </Link>
            </button>
            
                <div style={{'display' : 'flex', 'justify-content' : 'flex-end'}}>
                    <div style={{'font-size' : '14px', 'width' : 'fit-content'}} className='quoteStyle'>Дата последнего обновления статьи: 5.02.26</div>
                </div>
            </div>
            <Contacts />
        </div>

    )
}