import * as React from "react";
import styled, { css } from "styled-components";
import hexToRgba from "hex-to-rgba";

export const BucketContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const BucketTitle = styled.h4``;
export const Bucketite = styled.div`
  width: 100%;
  flex: 1;
  max-width: calc(100% / 3);
  & + & {
    margin-left: 16px;
    margin-right: 16px;
  }

  &:first-of-type {
    margin-right: 16px;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export const BucketIconWrapper = styled.div<{
  background?: boolean;
  center?: boolean;
}>`
  background: ${props => props.background && hexToRgba(props.theme.primary, 0.125)};
  width: 48px;
  height: 48px;
  border-radius: 50%;
  text-align: center;
  padding: 12px 0;
  margin-bottom: 16px;

  ${props =>
    props.center &&
    css`
      margin-left: auto;
      margin-right: auto;
    `}
`;

export const Bucket: React.SFC<{
  title: string;
  icon?: React.ComponentType<any>;
}> = props => (
  <Bucketite>
    {props.icon && (
      <BucketIconWrapper background>
        <props.icon />
      </BucketIconWrapper>
    )}

    <BucketTitle>{props.title}</BucketTitle>
    {props.children}
  </Bucketite>
);
