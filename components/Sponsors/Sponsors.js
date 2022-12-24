import * as S from './Sponsors.styled'

const Sponsors = () => {
    return (
        <S.SponsorsContainer className='center'>
            <div className="inner">
                <div className="box text">
                    <h4>Sponsors</h4>
                    <h3>We're Backed By The Best</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ut repellat, ipsa deleniti tenetur sed doloribus animi nostrum tempore cupiditate numquam commodi cumque molestiae? Vel nam nulla ducimus reprehenderit nihil.
                    </p>
                </div>
                <div className="box icons">
                    {/* <img src="/nasaIcon.png" alt="" />
                    <img src="/ukIcon.png" alt="" />
                    <img src="/cloverIcon.png" alt="" />
                    <img src="reactIcon.png" alt="" />
                    <img src="/googleIcon.png" alt="" />
                    <img src="/microsoftIcon.png" alt="" /> */}
                </div>
            </div>
        </S.SponsorsContainer>
    );
}

export default Sponsors;