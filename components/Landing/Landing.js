import * as S from './Landing.styled'

const Landing = () => {
    return (
        <S.LandingContainer className='center'>
            <div className="text">
                <h2>AETERNUS</h2>
                {/* <p>The Largest Radio Telescope in Scotland.</p> */}
                <a href=''>Search Records</a>
            </div>
        </S.LandingContainer>
    );
}

export default Landing;