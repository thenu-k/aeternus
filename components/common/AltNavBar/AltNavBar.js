import { useEffect, useRef, useState } from 'react';
import * as S from './AltNavBar.styled'
import DropDown from './DropDown/DropDown';

const AltNavBar = () => {

    //Drop down menu logic
    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = (e) => {
        (showMenu)
            ? setShowMenu(false)
            : setShowMenu(true)
    }
    useEffect(() => {
        const html = document.querySelector('html')
        function checkDrop(e) {
            var test = e.target.closest('#dropDownMenu')
            console.log(e.target.id)
            if (showMenu===true && test===null && e.target.id!='menuButton'){
                setShowMenu(false)
            }
        }
        html.addEventListener('click', checkDrop )
        return function cleanup(){
            html.removeEventListener('click', checkDrop)
        }
    })
    return (
        <S.AltNavBarContainer className='center'>
            <nav>
                <h1>AETERNUS</h1>
                <button className="menuIcon" onClick={(e)=> toggleMenu(e)}>
                    <img src="/menuIcon.png" alt="" id='menuButton' />
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