import styled from '@emotion/styled';
import React, { CSSProperties } from 'react';

interface Props extends CSSProperties {
  children: React.ReactNode;
}

export default function TextField(props: Props) {
  const { children, fontSize = '1rem', color = '#000', lineHeight } = props;
  return (
    <Span
      fontSize={fontSize}
      color={color}
      lineHeight={lineHeight}
      fontWeight={props.fontWeight}
      letterSpacing={props.letterSpacing}
      margin={props.margin}
      marginLeft={props.marginLeft}
      marginRight={props.marginRight}
      marginTop={props.marginTop}
      marginBottom={props.marginBottom}
      padding={props.padding}
      paddingLeft={props.paddingLeft}
      paddingRight={props.paddingRight}
      paddingTop={props.paddingTop}
      paddingBottom={props.paddingBottom}>
      {children}
    </Span>
  );
}

const Span = styled.span<CSSProperties>((props) => ({
  fontSize: props.fontSize,
  color: props.color,
  lineHeight: props.lineHeight,
  letterSpacing: props.letterSpacing,
  margin: props.margin,
  marginLeft: props.marginLeft,
  marginRight: props.marginRight,
  marginTop: props.marginTop,
  marginBottom: props.marginBottom,
  padding: props.padding,
  paddingLeft: props.paddingLeft,
  paddingRight: props.paddingRight,
  paddingTop: props.paddingTop,
  paddingBottom: props.paddingBottom,
}));
