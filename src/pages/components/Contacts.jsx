import '../../styles/Main.css';

export default function Contacts() {
    return (
        <div className="block">
                    <div className="block-header">
                    Контакты
                    </div>
                    <div className="block-text">
                            <p><i class="bi bi-envelope-at-fill" style={{'font-size' : '24px', 'color': 'white'}}></i> <b>:   dimitrichenkoai@my.msu.ru</b></p>
                            <p>Ссылки на найденные сообщества:</p>
                            <a href='https://t.me/GKMPchat' className='linkStyle'><i class="bi bi-telegram" style={{'font-size' : '24px', 'color': 'white'}}></i>Сообщество в Telegram.</a>
                            <p><a href='https://vk.com/club149728136' className='linkStyle'>Сообщество в VK.</a></p>
                        </div>
                        <div>

                            
                    </div>
                </div>  
    )
}