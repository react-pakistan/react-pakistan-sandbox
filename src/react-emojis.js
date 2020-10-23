import { Grid, H1, Spacer, Text } from '@react-pakistan/react-commons-collection';
import React from 'react';
import { withTheme } from 'styled-components';
import { EmojiContainer, EmojiWrapper, Section } from './styled';

export const ReactEmojis = withTheme(({ emojiType, theme }) => {
  const allEmojis = require(`@react-pakistan/react-emoji-collection/${emojiType}`);

  const renderItem = () => {
    return Object.keys(allEmojis).map(item => {
      const Emoji = allEmojis[item];
      return (
        <EmojiContainer key={item}>
          <EmojiWrapper>
            <Emoji fontSize='60px' />
          </EmojiWrapper>
          <Spacer margin='1em 0' />
          <Text color={theme.colors.white} textAlign='center'>{item}</Text>
        </EmojiContainer>
      );
    });
  };

  return (
    <Section backgroundColor={theme.colors.cherryRed}>
      <H1>React Emojis Collection</H1>
      <Spacer padding={theme.spacing.large} />
      <Text textAlign='center'>'{`'All emojis under category ${emojiType}`}.</Text>
      <Spacer padding={theme.spacing.default} />
      <Grid
        gridColumn='repeat(6, 1fr)'
        rowGap={theme.spacing.default}
      >
        {renderItem()}
      </Grid>
    </Section>
  );
});
