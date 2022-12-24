import * as S from './NavBar.styled'

const NavBar = () => {
    return (
        <S.NavBarContainer>
            <h1>AETERNUS</h1>
            <nav className='center'>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Records</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Find Us</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
        </S.NavBarContainer>
    );
}

export default NavBar;