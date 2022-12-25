import * as S from './Footer.styled'    

const Footer = () => {
    const toggleAccordion = (e) => {
        e.target.closest('.column').classList.toggle('show')
        e.target.closest('img').classList.toggle('rotate')
    }
    return (
        <S.FooterContainer className='center'>
            <div className="inner">
                <h3>AETERNUS</h3>
                <div className="footerContents">
                    <div className="column 1">
                        <div className="columnHeading">
                            <h5>Main</h5>
                            <button onClick={(e) => toggleAccordion(e)}>
                                <img src="/expand.png" alt="" />
                            </button>
                        </div>
                        <a href="">Home</a>
                        <a href="">Records</a>
                        <a href="">About</a>
                        <a href="">Find Us</a>
                        <a href="">Contact</a>
                    </div>
                    <div className="column 3">
                        <div className="columnHeading">
                            <h5>Work With Us</h5>
                            <button onClick={(e) => toggleAccordion(e)}>
                                <img src="/expand.png" alt="" />
                            </button>
                        </div>
                        <a href="">Education</a>
                        <a href="">Opportunities</a>
                        <a href="">Benefits</a>
                        <a href="">Admin</a>
                    </div>
                    <div className="column 2">
                        <div className="columnHeading">
                            <h5>Other</h5>
                            <button onClick={(e) => toggleAccordion(e)}>
                                <img src="/expand.png" alt="" />
                            </button>
                        </div>
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