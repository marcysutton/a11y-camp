import * as React from "react";
import styled from "styled-components";

const FilledSVG = styled.svg`
  fill: ${props => props.theme.primary};
  display: inline-block;
`;

interface IIconProps {}

export const VoteIcon: React.SFC<IIconProps> = props => {
  return (
    <FilledSVG xmlns="http://www.w3.org/2000/svg" width="24" height="24" {...props}>
      <path d="M18 13h-.68l-2 2h1.91L19 17H5l1.78-2h2.05l-2-2H6l-3 3v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4l-3-3m-1-5.05l-4.95 4.95L8.5 9.36l4.96-4.95L17 7.95m-4.24-5.66L6.39 8.66a.996.996 0 0 0 0 1.41L11.34 15c.39.41 1.02.41 1.41 0l6.36-6.34a.996.996 0 0 0 0-1.41L14.16 2.3a.975.975 0 0 0-1.4-.01z" />
    </FilledSVG>
  );
};
