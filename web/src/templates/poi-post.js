import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import PlacePost from "../components/place-post";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import { toPlainText } from "../lib/helpers";

export const query = graphql`
  query WaypointPostTemplateQuery($id: String!) {
    post: sanityWaypoint(id: { eq: $id }) {
      id
      publishedAt
      categories {
        _id
        title
      }
      mainImage {
        ...SanityImage
        alt
      }
      images
        {

            asset {
              id
              _rev
              _key
              fluid(maxWidth: 700) {
                ...GatsbySanityImageFluid
              }
            }
          }


      name
      slug {
        current
      }
      location {
        name
        slug {
          current
        }
      }
      geolocation {
        lat
        lng
      }
      _rawExcerpt(resolveReferences: { maxDepth: 5 })
      _rawBody(resolveReferences: { maxDepth: 5 })
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

const WaypointPostTemplate = (props) => {
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

      {post && <PlacePost {...post} />}
    </Layout>
  );
};

export default WaypointPostTemplate;
