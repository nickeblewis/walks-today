import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import WalkPost from "../components/walk-post";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import { toPlainText } from "../lib/helpers";

export const query = graphql`
  query WalkTemplateQuery($id: String!) {
    post: sanityWalk(id: { eq: $id }) {
      id
      publishedAt
      mainImage {
        ...SanityImage
        alt
      }
      name
      slug {
        current
      }
      _rawExcerpt(resolveReferences: { maxDepth: 5 })
      _rawBody(resolveReferences: { maxDepth: 5 })
      steps {
        step
        waypoint {
          name
          mainImage {
            ...SanityImage
            alt
          }
          slug {
            current
          }
          location {
            slug {
              current
            }
          }
        }
      }
      authors {
        _key
        author {
          image {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
          }
          name
        }
      }
    }
  }
`;

const WalkTemplate = (props) => {
  const { data, errors } = props;
  const post = data && data.post;
  return (
    <Layout textWhite={true}>
      {errors && <SEO title="GraphQL Error" />}
      {post && (
        <SEO
          title={post.name || "Untitled"}
          description={toPlainText(post._rawExcerpt)}
          image={post.mainImage}
        />
      )}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {post && <WalkPost {...post} />}
    </Layout>
  );
};

export default WalkTemplate;
