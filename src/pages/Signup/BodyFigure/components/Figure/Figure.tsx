import Tabs from "@components/Tabs/Tabs"

import DirectFigureOption from "@pages/Signup/BodyFigure/components/Figure/DirectFigureOption"
import FigureOption from "@pages/Signup/BodyFigure/components/Figure/FigureOption"

import * as S from "./StyledFigure"

const Figure = () => {
  return (
    <S.FigureWrapper>
      <S.FigureTitle>어떤 체형이신가요?</S.FigureTitle>
      <S.FigureOptionList>
        <Tabs>
          <Tabs.TabList>
            <Tabs.Tab
              variant="line"
              index={0}>
              유형으로 선택하기
            </Tabs.Tab>
            <Tabs.Tab
              variant="line"
              index={1}>
              직접 입력하기
            </Tabs.Tab>
          </Tabs.TabList>
          <Tabs.TabPanels>
            <Tabs.TabPanel index={0}>
              <FigureOption />
            </Tabs.TabPanel>
            <Tabs.TabPanel index={1}>
              <DirectFigureOption />
            </Tabs.TabPanel>
          </Tabs.TabPanels>
        </Tabs>
      </S.FigureOptionList>
    </S.FigureWrapper>
  )
}

export default Figure
