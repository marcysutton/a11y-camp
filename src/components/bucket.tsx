import * as React from "react";
import styled from "styled-components";
import hexToRgba from "hex-to-rgba";

export const BucketContainer = styled.div`
  display: flex;
`;
export const BucketTitle = styled.h4``;
export const Bucketite = styled.div`
  width: calc(100% / 3);
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

const BucketIconWrapper = styled.div`
  background: ${props => hexToRgba(props.theme.primary, 0.125)};
  width: 48px;
  height: 48px;
  border-radius: 50%;
  text-align: center;
  padding: 12px 0;
  margin-bottom: 16px;
`;

export const Bucket: React.SFC<{
  title: string;
  icon?: React.ComponentType<any>;
}> = props => (
  <Bucketite>
    {props.icon && (
      <BucketIconWrapper>
        <props.icon />
      </BucketIconWrapper>
    )}

    <BucketTitle>{props.title}</BucketTitle>
    {props.children}
  </Bucketite>
);
