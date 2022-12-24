import * as S from './Goal.styled'

const Goal = () => {
    return (
        <S.GoalContainer className='center'>
            <div className="inner">
                <h4>The Mission</h4>
                <h3>Uncovering History</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quas possimus doloribus reiciendis consequatur autem labore illum esse quisquam mollitia consectetur vitae quibusdam praesentium, nam odio, enim dolor placeat dignissimos totam pariatur tempora nisi. Placeat dolorem rerum culpa voluptas quidem officia quod itaque expedita, ea, voluptate eos corrupti, laborum necessitatibus.
                </p>
                {/* <div className="icons">
                    <img src="/nasaIcon.png" alt="" />
                    <img src="/cloverIcon.png" alt="" />
                    <img src="/reactIcon.png" alt="" />
                </div> */}
            </div>
        </S.GoalContainer>
    );
}

export default Goal;        