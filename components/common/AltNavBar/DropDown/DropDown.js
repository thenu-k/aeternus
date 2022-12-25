import * as S from './DropDown.styled'

const DropDown = () => {
    return (
        <S.DropDownContainer id='dropDownMenu'>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Records</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Find Us</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </S.DropDownContainer>
    );
}

export default DropDown;