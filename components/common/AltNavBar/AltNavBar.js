import * as S from './AltNavBar.styled'

const AltNavBar = () => {
    return (
        <S.AltNavBarContainer className='center'>
            <nav>
                <h1>AETERNUS</h1>
                <button className="menuIcon">
                    <img src="/menuIcon.png" alt="" />
                </button>
            </nav>
        </S.AltNavBarContainer>
    );
}

export default AltNavBar;