import * as S from './Footer.styled'    

const Footer = () => {
    return (
        <S.FooterContainer className='center'>
            <div className="inner">
                <h3>AETERNUS</h3>
                <div className="footerContents">
                    <div className="column 1">
                        <a href="">Home</a>
                        <a href="">Records</a>
                        <a href="">About</a>
                        <a href="">Locate Us</a>
                        <a href="">Mission</a>
                    </div>
                    <div className="column 3">
                        <a href="">Education</a>
                        <a href="">Opportunities</a>
                        <a href="">Benefits</a>
                        <a href="">Admin</a>
                    </div>
                    <div className="column 2">
                        <a href="">Sponsors</a>
                        <a href="">Affiliates</a>
                        <a href="">Sister Companies</a>
                    </div>
                    <div className="column end">
                        {/* <p>1215 Andrew Melville Hall, St Andrews. KY16 9SU.</p>
                        <p>kktsk1@st-andrews.ac.uk</p> */}
                        <p>Thenu Kaluarahchi 2022 © </p>
                    </div>
                </div>
            </div>
        </S.FooterContainer>
    );
}

export default Footer;