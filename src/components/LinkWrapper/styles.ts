import styled from 'styled-components';

export const Wrapper = styled.main`
  position: fixed;
  z-index: 1100;
  top: var(--medium);
  right: var(--medium);
  color: var(--white);
  cursor: pointer;

  svg {
    transition: color 0.2 ease-in-out;
  }

  &:hover,
  &:focus {
    color: var(--highlight);
  }
`;
