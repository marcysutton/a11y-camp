import * as React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

interface ISEOProps {
  description?: string;
  lang?: string;
  meta?: any[];
  keywords?: string[];
  title: string;
}

const SEO: React.FC<ISEOProps> = props => {
  return (
    <StaticQuery query={detailsQuery}>
      {data => {
        const metaDescription: string =
          props.description || data.site.siteMetadata.description;
        return (
          <Helmet
            htmlAttributes={{
              lang: props.lang
            }}
            title={props.title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: `description`,
                content: metaDescription
              },
              {
                property: `og:title`,
                content: props.title
              },
              {
                property: `og:description`,
                content: metaDescription
              },
              {
                property: `og:type`,
                content: `website`
              },
              {
                name: `twitter:card`,
                content: `summary`
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author
              },
              {
                name: `twitter:title`,
                content: props.title
              },
              {
                name: `twitter:description`,
                content: metaDescription
              }
            ]
              .concat(
                props.keywords.length > 0
                  ? {
                    name: `keywords`,
                    content: props.keywords.join(`, `)
                  }
                  : []
              )
              .concat(props.meta)}
          />
        );
      }}
    </StaticQuery>
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: []
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
