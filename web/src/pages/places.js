import React from "react";
import { graphql } from "gatsby";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture,
} from "../lib/helpers";
import PlacePostPreviewList from "../components/place-post-preview-list";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";

export const query = graphql`
  query WaypointIndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
    }
    posts: allSanityWaypoint(
      limit: 600
      sort: { fields: [_updatedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            ...SanityImage
            alt
          }
          name
          _rawExcerpt
          location {
            name
            slug {
              current
            }
          }
          geolocation {
            _key
            _type
            lat
            lng
            alt
          }
          slug {
            current
          }
        }
      }
    }
  }
`;

const WaypointIndexPage = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];

  if (!site) {
    console.warn(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <Layout textWhite={false}>
      <SEO title={site.title || 'Missing title'} description={site.description || 'Missing description'} keywords={site.keywords || []} />
      <Container>
        <h1 hidden>Welcome to {site.title}</h1>
        <div className="py-6">{postNodes && <PlacePostPreviewList nodes={postNodes} />}</div>
      </Container>
    </Layout>
  );
};

export default WaypointIndexPage;
