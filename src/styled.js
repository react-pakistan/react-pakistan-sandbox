import styled from "styled-components";
import { Button } from "@react-pakistan/react-commons-collection";

export const Section = styled.section`
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: ${({ theme }) => `${theme.spacing.default} ${theme.spacing.xlarge}`};
  width: 100vw;
`;

export const HeadingWrapper = styled.div``;

export const App1Button = styled(Button)`
  background-color: ${({ theme }) => theme.colors.paleGreen};
  border: ${({ theme }) => `4px solid ${theme.colors.skyBlue}`};
  padding: ${({ theme }) => theme.spacing.default};
`;

export const App2Button = styled(Button)`
  border-radius: ${({ theme }) => theme.radius.double};
  padding: ${({ theme }) => theme.spacing.default};
`;

export const IconContainer = styled.div``;

export const IconWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const EmojiContainer = styled.div``;

export const EmojiWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;
