import { format, distanceInWords, differenceInDays } from "date-fns";
import React from "react";
// import Carousel from 'react-images'
//import L from 'leaflet'
// import { Map, Marker, Popup, TileLayer } from "react-leaflet";

import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import PortableText from "./portableText";
import Container from "./container";
import AuthorList from "./author-list";

import Img from "gatsby-image"


import { Marker, GoogleMap, LoadScript } from "@react-google-maps/api";

import styles from "./place-post.module.css";

// import Gallery from '@browniebroke/gatsby-image-gallery'
// import '@browniebroke/gatsby-image-gallery/dist/style.css'



function PlacePost(props) {
  const {
    _rawBody,
    authors,
    categories,
    name,
    mainImage,
    images,
    location,
    geolocation,
    publishedAt
  } = props;

  const position = [geolocation.lat, geolocation.lng];
  const containerStyle = {
    width: "100%",
    height: "300px"
  };

  const center = {
    lat: geolocation.lat,
    lng: geolocation.lng
  };

  // let imgArr = images.map(a => a.asset.fluid.src)

  return (
    <article className={styles.root}>
      {mainImage && mainImage.asset && (
        <div className={styles.mainImage}>
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit("crop")
              .auto("format")
              .url()}
            alt={mainImage.alt}
          />
        </div>
      )}

      <Container>
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            <h1 className={styles.title}>{name}</h1>
            <div className={styles.gmap}>
              <LoadScript googleMapsApiKey="AIzaSyBOCOkC1JUl9lbAdyOfqRpFp5vvS5QrNpQ">
                <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
                  {/* Child components, such as markers, info windows, etc. */}
                  <Marker position={center} />
                </GoogleMap>
              </LoadScript>
            </div>
            {_rawBody && <PortableText blocks={_rawBody} />}
            {/* <Carousel views={imgArr} /> */}
            {/* {/* <Gallery images={images} thumbs={imgArr} /> */}
            <div className="container mx-auto p-8">
              <div className="flex flex-row flex-wrap -mx-2">
              {images && images.map((image, index) => (
                <div className="w-full md:w-1/2 h-64 md:h-auto mb-4 px-2">
<Img key={index} fluid={image.asset.fluid} />
                </div>))}
              </div>
            </div>
            {/* {images && images.map(
              image => (
                <Img fluid={image.asset.fluid} />
              )
            )} */}
          </div>
          <aside className={styles.metaContent}>
            {publishedAt && (
              <div className={styles.publishedAt}>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), "MMMM Do, YYYY")}
              </div>
            )}
            {authors && <AuthorList items={authors} title="Authors" />}
            {categories && (
              <div className={styles.categories}>
                <h3 className={styles.categoriesHeadline}>Categories</h3>
                <ul>
                  {categories.map(category => (
                    <li key={category._id}><span className="inline-block bg-teal-200 text-teal-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">{category.title}</span></li>
                  ))}
                </ul>
              </div>
            )}
            {location && (
              <div className={styles.location}>
                <h3 className={styles.locationHeadline}>Location</h3>

                <span className="inline-block bg-teal-200 text-teal-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">{location.name}</span>
              </div>
            )}
          </aside>
        </div>
      </Container>
    </article>
  );
}

export default PlacePost;
