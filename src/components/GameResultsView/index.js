import {
  GameViewContainer,
  GameButton,
  GameImage,
  ResultImageContainer,
  ResultName,
  ResultText,
  ResultButton,
} from './styledComponents'

const GameResultsView = props => {
  const {choiceList, isShow, checkResult, newArray, text, restartGame} = props
  const showGame = () => (
    <GameViewContainer>
      {isShow && (
        <>
          <GameButton
            type="button"
            data-testid="rockButton"
            onClick={() => checkResult(choiceList[0].id)}
          >
            <GameImage
              src={choiceList[0].imageUrl}
              alt={choiceList[0].id}
              key={choiceList[0].id}
            />
          </GameButton>
          <GameButton
            type="button"
            data-testid="scissorsButton"
            onClick={() => checkResult(choiceList[1].id)}
          >
            <GameImage
              src={choiceList[1].imageUrl}
              alt={choiceList[1].id}
              key={choiceList[1].id}
            />
          </GameButton>
          <GameButton
            type="button"
            data-testid="paperButton"
            onClick={() => checkResult(choiceList[2].id)}
          >
            <GameImage
              src={choiceList[2].imageUrl}
              alt={choiceList[2].id}
              key={choiceList[2].id}
            />
          </GameButton>
        </>
      )}
      {isShow && (
        <>
          <ResultImageContainer>
            <ResultName>YOU</ResultName>
            <GameImage src={newArray[0].imageUrl} alt="your choice" />
          </ResultImageContainer>
          <ResultImageContainer>
            <ResultName>OPPONENT</ResultName>
            <GameImage src={newArray[1].imageUrl} alt="opponent choice" />
          </ResultImageContainer>
          <ResultImageContainer>
            <ResultText>{text}</ResultText>
            <ResultButton type="button" onClick={restartGame}>
              PLAY AGAIN
            </ResultButton>
          </ResultImageContainer>
        </>
      )}
    </GameViewContainer>
  )
  return showGame()
}

export default GameResultsView
