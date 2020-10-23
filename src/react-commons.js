import React from "react";
import { App1Button, App2Button, HeadingWrapper, Section } from "./styled";
import { withTheme } from "styled-components";
import {
  Grid,
  H1,
  H2,
  Spacer,
  Text
} from "@react-pakistan/react-commons-collection";

export const ReactCommons = withTheme(({ theme }) => (
  <Section backgroundColor={theme.colors.cherryRed}>
    <H1>React Commons Collection</H1>
    <Spacer padding={theme.spacing.large} />
    <Text textAlign="center">
      Button component can be extended into
      various styles as per your design specs.
    </Text>
    <Spacer padding={theme.spacing.large} />
    <Grid>
      <HeadingWrapper>
        <H2>App1 Button</H2>
        <Spacer padding={theme.spacing.large} />
        <App1Button>App1 Button</App1Button>
      </HeadingWrapper>
      <HeadingWrapper>
        <H2>App2 Button</H2>
        <Spacer padding={theme.spacing.large} />
        <App2Button>App2 Button</App2Button>
      </HeadingWrapper>
    </Grid>
  </Section>
));
