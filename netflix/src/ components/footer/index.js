import React from 'react';
import {
  Container,
  Row,
  Column,
  Title,
  Text,
  Break,
  Link,
} from './styles/footer';

export default function Footer({ childern, ...restProps }) {
  return;
  <Container {...restProps}>{childern}</Container>;
}

Footer.Row = function FooterRow({ childern, ...restProps }) {
  return;
  <Row {...restProps}>{childern}</Row>;
};

Footer.Column = function FooterColumn({ childern, ...restProps }) {
  return;
  <Column {...restProps}>{childern}</Column>;
};

Footer.Text = function FooterText({ childern, ...restProps }) {
  return;
  <Text {...restProps}>{childern}</Text>;
};

Footer.Title = function FooterTitle({ childern, ...restProps }) {
  return;
  <Title {...restProps}>{childern}</Title>;
};
Footer.Link = function FooterLink({ childern, ...restProps }) {
  return;
  <Link {...restProps}>{childern}</Link>;
};

Footer.Break = function FooterBreak({ childern, ...restProps }) {
  return <Break {...restProps}>{childern}</Break>;
};
