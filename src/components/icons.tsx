import * as React from "react";
import styled from "styled-components";

const FilledSVG = styled.svg`
  fill: ${props => props.theme.primary};
  display: inline-block;
`;

interface IIconProps {}

export const VoteIcon: React.FC<IIconProps> = props => {
  return (
    <FilledSVG xmlns="http://www.w3.org/2000/svg" width="24" height="24" {...props}>
      <path d="M18 13h-.68l-2 2h1.91L19 17H5l1.78-2h2.05l-2-2H6l-3 3v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4l-3-3m-1-5.05l-4.95 4.95L8.5 9.36l4.96-4.95L17 7.95m-4.24-5.66L6.39 8.66a.996.996 0 0 0 0 1.41L11.34 15c.39.41 1.02.41 1.41 0l6.36-6.34a.996.996 0 0 0 0-1.41L14.16 2.3a.975.975 0 0 0-1.4-.01z" />
    </FilledSVG>
  );
};

export const ChildFriendlyIcon: React.FC<IIconProps> = props => {
  return (
    <FilledSVG xmlns="http://www.w3.org/2000/svg" width="24" height="24" {...props}>
      <path d="M13 2v8h8c0-4.42-3.58-8-8-8m6.32 13.89A7.948 7.948 0 0 0 21 11H6.44L5.5 9H2v2h2.22s1.89 4.07 2.12 4.42C5.24 16 4.5 17.17 4.5 18.5 4.5 20.43 6.07 22 8 22c1.76 0 3.22-1.3 3.46-3h2.08c.24 1.7 1.7 3 3.46 3 1.93 0 3.5-1.57 3.5-3.5 0-1.04-.46-1.97-1.18-2.61M8 20c-.83 0-1.5-.67-1.5-1.5S7.17 17 8 17s1.5.67 1.5 1.5S8.83 20 8 20m9 0c-.83 0-1.5-.67-1.5-1.5S16.17 17 17 17s1.5.67 1.5 1.5S17.83 20 17 20z" />
    </FilledSVG>
  );
};

export const FoodIcon: React.FC<IIconProps> = props => {
  return (
    <FilledSVG xmlns="http://www.w3.org/2000/svg" width="24" height="24" {...props}>
      <path d="M15.5 21L14 8h2.23L15.1 3.46 16.84 3l1.25 5H22l-1.5 13h-5M5 11h5c1.66 0 3 1.34 3 3H2c0-1.66 1.34-3 3-3m8 7c0 1.66-1.34 3-3 3H5c-1.66 0-3-1.34-3-3h11M3 15h5l1.5 1.5L11 15h1c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </FilledSVG>
  );
};

export const TravelIcon: React.FC<IIconProps> = props => {
  return (
    <FilledSVG xmlns="http://www.w3.org/2000/svg" width="24" height="24" {...props}>
      <path d="M14.97 5.92a.967.967 0 0 0-1.18-.68l-3.4.91-4.44-4.12-1.23.33 2.66 4.59-3.19.85-1.26-.98-.93.25 1.66 2.88 10.62-2.84c.52-.15.82-.68.69-1.19M21 10l-1 2h-5l-1-2 1-1h2V7h1v2h2l1 1m1 10v2H2v-2h13v-7h5v7h2z" />
    </FilledSVG>
  );
};
