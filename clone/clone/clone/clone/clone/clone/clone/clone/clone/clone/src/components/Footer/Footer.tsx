import logo from "@assets/images/logo.png"

import * as S from "./StyledFooter"

const Footer = () => {
  return (
    <S.Footer>
      <S.FooterWrapper>
        <img
          src={logo}
          alt="로고 이미지"
        />
        <S.FooterInfoList>
          <S.FooterInfoContentWrapper>
            <S.FooterInfoContentList>
              <S.FooterInfoContentTitle>개발</S.FooterInfoContentTitle>
              <S.FooterInfoContent>이찬하</S.FooterInfoContent>
              <S.FooterInfoContent>정지성</S.FooterInfoContent>
              <S.FooterInfoContent>강민정</S.FooterInfoContent>
              <S.FooterInfoContent>최훈오</S.FooterInfoContent>
            </S.FooterInfoContentList>
            <S.FooterInfoContentList>
              <S.FooterInfoContentTitle>디자인</S.FooterInfoContentTitle>
              <S.FooterInfoContent>김정욱</S.FooterInfoContent>
              <S.FooterInfoContent>최시현</S.FooterInfoContent>
            </S.FooterInfoContentList>
          </S.FooterInfoContentWrapper>
          <S.FooterInfoContentList>
            <S.FooterInfoContentTitle>서비스</S.FooterInfoContentTitle>
            <S.FooterInfoContent>검색하기</S.FooterInfoContent>
            <S.FooterInfoContent>추천받기</S.FooterInfoContent>
            <S.FooterInfoContent>내 운동</S.FooterInfoContent>
          </S.FooterInfoContentList>
          <S.FooterInfoContentList>
            <S.FooterInfoContentTitle>문의</S.FooterInfoContentTitle>
            <S.FooterInfoSubContentWrapper>
              <S.FooterInfoSubContentTitle>전화</S.FooterInfoSubContentTitle>
              <S.FooterInfoContent>010-8544-1013</S.FooterInfoContent>
            </S.FooterInfoSubContentWrapper>
            <S.FooterInfoSubContentWrapper>
              <S.FooterInfoSubContentTitle>이메일</S.FooterInfoSubContentTitle>
              <S.FooterInfoContent>jeuk1013@naver.com</S.FooterInfoContent>
            </S.FooterInfoSubContentWrapper>
          </S.FooterInfoContentList>
        </S.FooterInfoList>
      </S.FooterWrapper>
    </S.Footer>
  )
}

export default Footer
