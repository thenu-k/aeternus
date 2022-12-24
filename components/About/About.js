import * as S from './About.styled'

const About = () => {
    return (
        <S.AboutContainer className='center'>
            <div className="inner">
                <div className="text box">
                    <h4>About</h4>
                    <h3>We're Changing The Way We See The Universe</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus similique sit perspiciatis earum beatae libero minus. Quaerat amet culpa perspiciatis quas qui perferendis ea omnis, aut vitae, cumque magni?
                    </p>
                </div>
                <div className="box image"></div>
            </div>
        </S.AboutContainer>
    );
}

export default About;