import * as S from "../StyledSignup"
import {BeforeButton, MiddleButton} from "../../../components"
import {useNavigate} from "react-router-dom"
import StatusBar from "../../../components/StatusBar/StatusBar"
import ProfileForm from "./components/ProfileForm"
import {useForm} from "react-hook-form"

const Profile = () => {
	const navigate = useNavigate()
	const methods = useForm({
		mode: "onChange",
		defaultValues: {
			userName: "",
			birthDate: "",
			email: "",
			password: "",
			passwordCheck: "",
		},
	})

	const handleNextPage = (e) => {
		e.preventDefault()
		if (methods.formState.isValid) {
			navigate(`/signup/bodyinfo`)
		}
	}

	const handleBackPage = (e) => {
		e.preventDefault()
		navigate(-1)
	}

	return (
		<S.SignupContainer>
			<S.SignupTitle>
				<StatusBar status={"1"} />
				회원 정보를 입력해주세요
			</S.SignupTitle>
			<ProfileForm methods={methods} />
			<S.ButtonContainer>
				<BeforeButton onClick={handleBackPage} />
				<MiddleButton
					$isValid={methods.formState.isValid}
					onClick={handleNextPage}>
					다음
				</MiddleButton>
			</S.ButtonContainer>
		</S.SignupContainer>
	)
}

export default Profile