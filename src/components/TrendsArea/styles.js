import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    flex: 1;
    transition: 1s;

    @media (max-width: 768px) {
        width: 0;
        display: none;
    }
`;
