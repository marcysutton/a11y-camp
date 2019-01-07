import * as React from "react";
import styled from "styled-components";
import { Formik, Form, Field, FormikProps, FormikActions } from "formik";
// import addToMailchimp from "gatsby-plugin-mailchimp";
import { updatedColors } from "./theme";

const CenteredText = styled.small`
  opacity: 0.75;
  padding: 16px 8px 8px;
  text-align: center;
  display: block;
`;

const StyledForm = styled(Form)`
  display: flex;
  align-items: flex-end;
  width: 100%;
`;

const StyledField = styled(Field)`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: 100%;
  border: 0;
  font-size: 14px;
  display: block;
  padding: 8px;
  border-radius: 8px 0 0 8px;
`;

const StyledLabel = styled.label`
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 4px;
  display: block;
`;

const FormButton = styled.button.attrs({ type: "submit" })`
  appearance: none;
  background: ${props => props.theme.primary};
  color: ${props =>
    props.theme.primary === updatedColors.yellow.primary
      ? props.theme.text
      : "white"};

  border: 0;
  border-radius: 0 8px 8px 0;
  padding: 8px;
  font-size: 14px;
`;

const FormContainer = styled.section`
  background: #f5f5f5;
  max-width: 572px;
  padding: 16px;
  margin: 8px;

  color: ${props => props.theme.text};
  box-shadow: 0 1px 1px 0 rgba(60, 64, 67, 0.08),
    0 1px 3px 1px rgba(60, 64, 67, 0.16);

  @media (min-width: 480px) {
    margin: 0 auto;
    padding: 32px 64px;
  }
`;

interface IFields {
  email: string;
}

export class SignUpForm extends React.Component<{}, {}> {
  private onSubmit(values: IFields, actions: FormikActions<IFields>): void {
    console.log(values, actions);
    // addToMailchimp(values.email, []);
  }

  public render(): JSX.Element {
    return (
      <Formik initialValues={{ email: "" }} onSubmit={this.onSubmit}>
        {({ isSubmitting }: FormikProps<IFields>) => (
          <FormContainer>
            <h3 id="signUp" style={{ fontWeight: 900 }}>
              Sign up for Updates
            </h3>

            <StyledForm>
              <div style={{ flex: 1 }}>
                <StyledLabel htmlFor="email">Email</StyledLabel>
                <StyledField
                  aria-labelledby="signUp"
                  id="email"
                  name="email"
                  type="email"
                />
              </div>
              <FormButton disabled={isSubmitting}>Notify Me!</FormButton>
            </StyledForm>
            <CenteredText>
              We won't spam you and unsubscribe at any time.
            </CenteredText>
          </FormContainer>
        )}
      </Formik>
    );
  }
}
