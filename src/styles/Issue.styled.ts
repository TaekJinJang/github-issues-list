import styled from 'styled-components';

export const IssueContainer = styled.ul`
    margin: 0;
    padding: 0;
`;
export const IssueListStyled = styled.li`
    width: 500px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    height: 60px;
    border-bottom: 1px solid #eee;
    padding: 15px 0;

    &:hover {
        background-color: #ced0ea;
    }
    .title {
        width: 390px;
        display: inline-block;
        font-size: 17px;
        font-weight: 600;
        text-align: left;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .bottom {
        margin-top: 20px;
        display: flex;
        gap: 7px;
    }
    .comment {
        width: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
