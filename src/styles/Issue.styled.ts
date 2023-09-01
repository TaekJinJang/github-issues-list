import styled from 'styled-components';

export const IssueContainer = styled.div`
    border: 1px solid var(--listBorder);
    border-radius: 12px;
    margin: 10px;
    overflow: hidden;
`;
export const IssuePageTitle = styled.h3`
    padding: 10px;
    font-size: 18px;
    font-weight: bold;
    border-bottom: 1px solid var(--listBorder);
    background-color: var(--listItemBg);
`;
export const IssueListStyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    padding: 16px;
    box-sizing: border-box;

    &.hover {
        border-bottom: 1px solid var(--listBorder);
        cursor: pointer;
    }
    &.hover:hover {
        background-color: var(--listItemHoverBg);
    }
    .left {
        display: flex;
        flex-direction: column;
        gap: 10px;
        .top {
            display: inline;
            .issueNumber {
                margin-right: 6px;
            }
            .title {
                font-size: 18px;
                font-weight: 600;
            }
        }
        .bottom {
            display: flex;
            gap: 6px;
            color: var(--textSubtitle);
        }
    }
    .right {
        flex-shrink: 0;
        font-size: 14px;
        color: var(--textSubtitle);
        span {
            font-weight: 500;
        }
    }
`;

export const IssueDetailHeader = styled.div`
    max-width: 800px;
    box-sizing: border-box;
    padding: 0 10px;
    margin: 10px auto;
    display: flex;
    align-items: center;
    img {
        border-radius: 50px;
    }
`;

export const IssueDetailBody = styled.article`
    max-width: 800px;
    padding: 10px 20px;
    margin: 0 auto;
    box-sizing: border-box;
    border: 1px solid #e3e3e3;
    text-align: left;
    img {
        max-width: 700px;
        display: flex;
        justify-content: center;
        margin: 0 auto;
    }
`;
