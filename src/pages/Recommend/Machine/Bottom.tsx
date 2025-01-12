import { BeatLoader } from "react-spinners"

import { UseMutationResult } from "@tanstack/react-query"

import RoundButton from "@components/Button/RoundButton"

import { MachineList } from "@typpes/type"
import { PostRecommendResponse } from "@typpes/type"

import { usePostRecommendId } from "@hooks/mutation/usePostRecommendId"

import * as S from "../StyledRecommend"

interface BottomProps {
  machinesById: Set<number>
  postRecommend: UseMutationResult<
    PostRecommendResponse,
    Error,
    number,
    unknown
  >
  machines: MachineList[]
  bodyPart: string[]
}

const Bottom = ({
  machinesById,
  postRecommend,
  machines,
  bodyPart,
}: BottomProps) => {
  const selectedMachineLength = machinesById.size
  const { mutate: postRecommendId } = usePostRecommendId()

  const handleRecommend = () => {
    const payload = {
      bodyPartKoreanName: bodyPart,
      machineKoreanName:
        selectedMachineLength > 0
          ? [...machinesById].map((id) => machines[id].koreanName)
          : [...machines].map(({ koreanName }) => koreanName),
    }
    postRecommendId(payload, {
      onSuccess: (workoutRecommendId) => {
        postRecommend.mutate(workoutRecommendId)
      },
    })
  }

  return (
    <S.BottomWrapper>
      <S.BottomInner>
        <S.BottomText>
          {selectedMachineLength}개
          <S.BottomSubText> 기구 선택됨</S.BottomSubText>
        </S.BottomText>
        <RoundButton
          onClick={handleRecommend}
          variant={selectedMachineLength > 0 ? "blue" : "black"}
          rightIcon="RightArrowWhite"
          size="lg"
          isPending={postRecommend.isPending}>
          {postRecommend.isPending ? (
            <BeatLoader
              size="0.7rem"
              color="#DDEAF4"
              margin={6}
            />
          ) : selectedMachineLength > 0 ? (
            "추천 시작하기"
          ) : (
            "기구 선택 없이 추천 받기"
          )}
        </RoundButton>
      </S.BottomInner>
      <S.BottomTopLine>{}</S.BottomTopLine>
    </S.BottomWrapper>
  )
}

export default Bottom
