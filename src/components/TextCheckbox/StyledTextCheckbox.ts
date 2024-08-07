// < 글만 있는 체크박스 스타일 >
import styled from "styled-components"

// 만들어진 레이아웃 특정 란에 넣으면
// 거기에 맞게 채워지도록 가로 100%로 설정(디자인에 따라 세로는 설정 X)

export const TextCheckboxWrapper = styled.button<Props>`
  width: 100%;
  display: flex;
  padding: 10px 24px;
  transition: all 0.1s ease-out;
  background: ${({ theme }) => theme.Gray10};
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;

  border: 2px solid
    ${({ theme, isSelected }) => (isSelected ? theme.Brand : `${theme.Gray20}`)};

  .choice-article {
    // 텍스트가 새로운 줄로 넘어가지 않게됨
    white-space: nowrap;
    // 텍스트가 요소를 넘어갈 경우 숨기
    overflow: hidden;
    // 글자가 길어질 경우 ...으로 표시
    text-overflow: ellipsis;
    transition: all 0.3s ease-out;
    color: ${({ isSelected, theme }) =>
      isSelected ? theme.Brand : theme.Gray70};
    font-size: 22px;
  }
  .choice-articleinput {
    transition: all 0.3s ease-out;
    color: ${({ isSelected, theme }) =>
      isSelected ? theme.Brand : theme.Gray70};
    font-size: 22px;
  }

  .check-background {
    transition: all 0.3s ease-out;
    fill: ${({ $isSelected, theme }) =>
      $isSelected ? theme.Brand : theme.Gray10};
  }

  .check-shape {
    transition: all 0.3s ease-out;
    fill: ${({ $isSelected, theme }) =>
      $isSelected ? theme.White : theme.Gray30};
  }
  &:hover {
    border: 2px solid
      ${({ $isSelected, theme }) => ($isSelected ? theme.Brand : theme.Gray30)};

    .check-shape {
      fill: ${({ $isSelected, theme }) =>
        $isSelected ? theme.White : theme.Black};
    }

    .choice-article {
      color: ${({ $isSelected, theme }) =>
        $isSelected ? theme.Brand : theme.Black};
    }
  }
`

export const MiddleTextCheckboxWrapper = styled(TextCheckboxWrapper)`
  width: 47%;
  @media screen and (max-width: 800px) {
    width: 47%;
  }
  @media screen and (max-width: 660px) {
    width: 100%;
  }
`

export const SmallTextCheckboxWrapper = styled(TextCheckboxWrapper)`
  width: 30%;
  @media screen and (max-width: 800px) {
    width: 47%;
  }
  @media screen and (max-width: 660px) {
    width: 100%;
  }
`
