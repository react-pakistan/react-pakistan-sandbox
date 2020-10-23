import { Grid, H1, Spacer, Text } from '@react-pakistan/react-commons-collection';
import React from 'react';
import { withTheme } from 'styled-components';
import { IconContainer, IconWrapper, Section } from './styled';

export const ReactIcons = withTheme(({ iconType, theme }) => {
  const allIcons = require(`@react-pakistan/react-icon-collection/${iconType}`);

  const renderItem = () => {
    return Object.keys(allIcons).map(item => {
      const Icon = allIcons[item];
      return (
        <IconContainer key={item}>
          <IconWrapper>
            <Icon fontSize='60px' />
          </IconWrapper>
          <Spacer margin='1em 0' />
          <Text color={theme.colors.white} textAlign='center'>{item}</Text>
        </IconContainer>
      );
    });
  };

  return (
    <Section backgroundColor={theme.colors.skyBlue}>
      <H1>React Icons Collection</H1>
      <Spacer padding={theme.spacing.large} />
      <Text textAlign='center'>{`All icons under category ${iconType}`}.</Text>
      <Spacer padding={theme.spacing.default} />
      <Grid
        gridColumn={`repeat(6, 1fr)`}
        rowGap={theme.spacing.default}
      >
        {renderItem()}
      </Grid>
    </Section>
  );
});
