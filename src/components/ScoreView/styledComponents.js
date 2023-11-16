import styled from 'styled-components'

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  background-color: transparent;
  padding: 10px;
  border-style: solid;
  border-color: #ffffff;
  border-width: 2px;
  border-radius: 10px;
  margin-top: 2%;
`

export const ScoreNameContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ScoreName = styled.h1`
  color: white;
  font-size: 20px;
  font-family: 'Bree Serif';
  margin-top: 0px;
  margin-bottom: 0px;
`

export const ScoreBoard = styled(ScoreNameContainer)`
  width: 15%;
  height: 100%;
  background-color: white;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`
export const ScoreHeading = styled.p`
  color: #223a5f;
  font-size: 20px;
  margin-bottom: 0px;
`

export const ScoreResult = styled.p`
  color: #223a5f;
  font-size: 42px;
  margin-top: 0px;
  font-family: 'Roboto';
`
