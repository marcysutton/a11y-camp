import "gatsby-plugin-mailchimp";

// and extend it
declare module "gatsby-plugin-mailchimp" {
  declare function addToMailchimp(email: string, fields: string[]): Promise<any>;
  export default addToMailchimp;
}
