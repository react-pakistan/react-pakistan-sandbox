import React from 'react';
import { App1Button, App2Button, HeadingWrapper, Section } from './styled';
import { withTheme } from 'styled-components';
import {
  Grid,
  H1,
  H2,
  Spacer,
  Text
} from '@react-pakistan/react-commons-collection';
import { CheckoutFinish, SectionDetail, BLOCK_TYPE } from '@react-pakistan/react-ui-collection';

export const ReactUI = withTheme(({ theme }) => (
  <Section backgroundColor={theme.colors.skyBlue}>
    <H1>React UI Collection</H1>
    <Spacer padding={theme.spacing.large} />
    <Text textAlign='center'>
      Button component can be extended into
      various styles as per your design specs.
    </Text>
    <Spacer padding={theme.spacing.large} />
    <Grid>
      <HeadingWrapper>
        <H2>EcommerceApp</H2>
        <Spacer padding={theme.spacing.large} />
        <CheckoutFinish
          mainHeadingH4='Checkout'
          steps={[{ id: 'Delivery', stepLabel: 'Delivery', }, { id: 'Confirmation', stepLabel: 'Confirmation' }, { id: 'Finish', stepLabel: 'Finish' }]}
        />
      </HeadingWrapper>
      <HeadingWrapper>
        <H2>PortfolioApp</H2>
        <Spacer padding={theme.spacing.large} />
        <SectionDetail blockType={BLOCK_TYPE.REGULAR} detailBlocks={[  {
    id: 'block-1',
    yearStarted: '2017',
    yearEnded: 'Present',
    designation: 'Senior Software Engineer',
    companyName: 'Facebook Inc',
  },
  {
    id: 'block-2',
    yearStarted: '2014',
    yearEnded: '2017',
    designation: 'Mid Software Engineer',
    companyName: 'Google Inc',
  },
  {
    id: 'block-3',
    yearStarted: '2011',
    yearEnded: '2014',
    designation: 'Junior Software Engineer',
    companyName: 'Microsoft Corporation',
  },
  {
    id: 'block-4',
    yearStarted: '2011',
    yearEnded: '2014',
    designation: 'Junior Software Engineer',
    companyName: 'Microsoft Corporation',
  },]} />
      </HeadingWrapper>
    </Grid>
  </Section>
));
