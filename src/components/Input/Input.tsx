import { HtmlHTMLAttributes, PropsWithChildren } from "react"

import styled from "styled-components"

import InputError from "@components/Input/components/InputError"
import InputInput from "@components/Input/components/InputInput"
import InputLabel from "@components/Input/components/InputLabel"
import InputText from "@components/Input/components/InputText"

const InputMain = ({
  children,
  ...props
}: PropsWithChildren<HtmlHTMLAttributes<HTMLDivElement>>) => (
  <InputWrapper {...props}>{children}</InputWrapper>
)

/**
 * <h3>Input은 회원가입, 로그인, 내 정보 수정, 검색 등에 쓰이는 컴포넌트입니다.</h3>
 *
 *  - <h4>다음과 같은 컴포넌트를 children으로 사용할 수 있습니다.</h4>
 *   - <h4><Input.Label> 무엇에 대한 입력인지를 나타냅니다.</h4>
 *     - htmlFor: 웹 접근성을 위해 form의 name값을 그대로 주입시킵니다.
 *   - <h4><Input.Input> Input 내부를 나타냅니다.</h4>
 *     - react hook form에서 제공하는 기능을 사용해 props로 바로 주입시키기 위해 사용되는 어댑터입니다.
 *     - register: react hook form에서 제공하는 속성입니다.
 *     - validator: 따로 상수한 정의한 placeholder, validation값이 객체 형태로 담겨있습니다.
 *     - $isDirty, $isError: 시각적으로 Input의 validation 상태를 보여줍니다.
 *     - 이외에도 다양한 속성들이 있으며 페이지마다 다르게 사용되고 있습니다.
 *   - <h4><Input.Error> validation 에러를 나타냅니다.</h4>
 */
const Input = Object.assign(InputMain, {
  Label: InputLabel,
  Input: InputInput,
  Text: InputText,
  Error: InputError,
})

export default Input

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`
