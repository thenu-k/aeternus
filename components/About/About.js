import * as S from './About.styled'

const About = () => {
    return (
        <S.AboutContainer className='center'>
            <div className="inner">
                <div className="text box">
                    <h4>About</h4>
                    <h3>We're Changing The Way We See The Universe</h3>
                    <p>
                       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum et aspernatur nesciunt enim totam reprehenderit! Doloribus excepturi quasi porro sint dicta earum ipsam, officiis, vel et, pariatur ex sit cum sed totam inventore iusto maxime explicabo suscipit! Beatae exercitationem facere molestiae optio odio et perspiciatis, quaerat molestias iure dignissimos accusamus eveniet saepe, nesciunt quibusdam voluptatem eum eaque quisquam nemo. Voluptas?
                    </p>
                </div>
                <div className="box image"></div>
            </div>
        </S.AboutContainer>
    );
}

export default About;