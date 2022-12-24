import * as S from './Facts.styled'

const Facts = () => {
    return (
        <S.FactsContainer className='center'>
            <div className="inner">
                <h3>The Facts</h3>
                <div className="innerFacts">
                    <div className="box resolution">
                        <h5>Angular Resolution</h5>
                        <h4>0.513°</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, nostrum?
                        </p>
                    </div>
                    <div className="box">
                        <h5>Spectral Resolution</h5>
                        <h4>0.65m</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, nostrum?
                        </p>
                    </div>
                </div>
            </div>
        </S.FactsContainer>
    );
}

export default Facts;