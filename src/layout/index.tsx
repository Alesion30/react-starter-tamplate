import React, { ReactNode } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import theme from "./theme";

type Props = {
  children: ReactNode;
};

export const Layout: React.VFC<Props> = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <div>{props.children}</div>
      </Container>
    </ThemeProvider>
  );
};
