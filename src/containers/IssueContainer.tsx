import * as S from '../styles/Issue.styled';
import * as API from '../apis/IssueAPI';

const IssueContainer = () => {
    API.getIssueAPI()
        .then(data => {
            console.info(data);
        })
        .catch(error => {
            console.error('An error occurred:', error);
        });
    return <S.IssueContainer>s</S.IssueContainer>;
};

export default IssueContainer;
