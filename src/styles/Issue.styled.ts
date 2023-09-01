import styled from 'styled-components';

export const IssueContainer = styled.div`
    border: 1px solid var(--listBorder);
    border-radius: 12px;
    margin: 10px;
    overflow: hidden;
`;
export const IssuePageTitle = styled.div`
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
    padding: 10px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--listItemBg);
`;
export const IssueDetailContainer = styled.div`
    border-radius: 12px;
    margin: 20px auto;
    border: 1px solid var(--listItemBg);
    img {
        border-radius: 50px;
    }
`;

export const IssueDetailBody = styled.article`
    max-width: 800px;
    padding: 10px 20px;
    margin: 0 auto;
    box-sizing: border-box;

    text-align: left;
    img {
        max-width: 700px;
        display: flex;
        justify-content: center;
        margin: 0 auto;
    }
`;
