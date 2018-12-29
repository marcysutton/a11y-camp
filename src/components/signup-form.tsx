import * as React from "react";
import styled from "styled-components";
import { Formik, Form, Field, FormikProps, FormikActions } from "formik";
// import addToMailchimp from "gatsby-plugin-mailchimp";

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
`;

const StyledLabel = styled.label`
  font-weight: 700;
  font-size: 16px;
`

const FormButton = styled.button.attrs({ type: "submit" })`
  appearance: none;
  background: ${props => props.theme.primary};
  color: ${props => props.theme.secondary};
  border: 0;
`;

const FormContainer = styled.section`
  padding: 1rem;
  background: ${props => props.theme.secondary};
  color: ${props => props.theme.primary};
  box-shadow: 0 1px 1px 0 rgba(60,64,67,0.08), 0 1px 3px 1px rgba(60,64,67,0.16);
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
            <h3 style={{ fontWeight: 900 }}>Sign up for Updates</h3>

            <StyledForm>
              <div style={{ flex: 1 }}>
                <StyledLabel htmlFor="email">Email</StyledLabel>
                <StyledField id="email" name="email" type="email" />
              </div>
              <FormButton disabled={isSubmitting}>Notify Me!</FormButton>
            </StyledForm>
          </FormContainer>
        )}
      </Formik>
    );
  }
}
