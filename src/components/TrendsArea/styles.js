import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    flex: 1;
    transition: 1s;
    padding: 10px;
    float: left;
    overflow: scroll;
    height: calc(100% - 100px);

    ::-webkit-scrollbar {
        width: 0px;
    }
    @media (max-width: 968px) {
        width: 0;
        display: none;
    }
`;
