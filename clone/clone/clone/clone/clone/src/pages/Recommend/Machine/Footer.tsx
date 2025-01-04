import { BeatLoader } from "react-spinners"

import { UseMutationResult } from "@tanstack/react-query"

import Bottom from "@components/Bottom/Bottom"
import RoundButton from "@components/Button/RoundButton"

import { MachineList } from "@typpes/type"
import { PostRecommendResponse } from "@typpes/type"

import { usePostRecommendId } from "@hooks/mutation/usePostRecommendId"

interface FooterProps {
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

const Footer = ({
  machinesById,
  postRecommend,
  machines,
  bodyPart,
}: FooterProps) => {
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
    <Bottom flex="space-between">
      <Bottom.Text>
        {selectedMachineLength}개<Bottom.SubText> 기구 선택됨</Bottom.SubText>
      </Bottom.Text>
      <RoundButton
        onClick={handleRecommend}
        variant={selectedMachineLength > 0 ? "blue" : "black"}
        rightIcon="RightArrowWhite"
        size="big"
        isPending={postRecommend.isPending}>
        {postRecommend.isPending ? (
          <BeatLoader
            size="7"
            color="#DDEAF4"
            margin={6}
          />
        ) : selectedMachineLength > 0 ? (
          "추천 시작하기"
        ) : (
          "기구 선택 없이 추천 받기"
        )}
      </RoundButton>
    </Bottom>
  )
}

export default Footer
