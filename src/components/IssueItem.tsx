/*
1. 이슈 목록 화면
    - 다섯번째 셀마다 광고 이미지 출력
        - 이미지
            
            https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100
            
            https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100
            
        - 광고 이미지 클릭 시 https://www.wanted.co.kr/ 로 이동
    - 화면을 아래로 스크롤 할 시 이슈 목록 추가 로딩(인피니티 스크롤)

*/
import * as S from '../styles/Issue.styled';

const IssueItem = () => {
    return (
        <S.IssueContainer>
            <S.IssueListStyled>
                <S.IssueContents>
                    <h2>이슈 번호 : 제목</h2>
                    <span>작성자</span>
                    <span>작성일</span>
                </S.IssueContents>

                <S.IssueComment>댓글</S.IssueComment>
            </S.IssueListStyled>
        </S.IssueContainer>
    );
};

export default IssueItem;
