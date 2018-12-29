import styled, { css } from "styled-components";

interface IWrapperProps {
  half?: boolean;
  center?: boolean;
}

const center = css`
  margin-left: auto;
  margin-right: auto;
`

const Wrapper = styled.div<IWrapperProps>`
  max-width: ${props => (props.half ? 480 : 1088)}px;
  width: 100%;
  ${props => props.center && center}
`;

export default Wrapper;
