import { useState } from 'react';
import * as S from './AltNavBar.styled'
import DropDown from './DropDown/DropDown';

const AltNavBar = () => {

    //Drop down menu logic
    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = (e) => {
        setShowMenu((!showMenu))
    }
    return (
        <S.AltNavBarContainer className='center'>
            <nav>
                <h1>AETERNUS</h1>
                <button className="menuIcon" onClick={(e)=> toggleMenu(e)}>
                    <img src="/menuIcon.png" alt="" />
                </button>
                {
                    (showMenu)
                        ? <DropDown/>
                        : null
                }
            </nav>
        </S.AltNavBarContainer>
    );
}

export default AltNavBar;