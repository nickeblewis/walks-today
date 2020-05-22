// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './objects/blockContent'

// document schemas
import navMenu from './documents/navMenu'
import category from './documents/category'
import post from './documents/post'
import page from './documents/page'
import author from './documents/author'
import location from './documents/location'
import walk from './documents/walk'
import waypoint from './documents/waypoint'
import publication from './documents/publication'
import difficulty from './documents/difficulty'
import siteSettings from './documents/siteSettings'
import route from './documents/route'
import experiment from './objects/experiment'
import simpleBlockContent from './objects/simpleBlockContent'

import * as plugs from './plugs'
import plugDefaultFields from './plugs/_plugDefaultFields'


// Object types
import step from './objects/step'
import address from './objects/address'

import { instagram, videoEmbed } from './objects/embeds'
import cta from './objects/cta'
import bodyPortableText from './objects/bodyPortableText'
import excerptPortableText from './objects/excerptPortableText'

import mainImage from './objects/mainImage'
import authorReference from './objects/authorReference'
import link from './objects/link'
import variation from './objects/variation'
import openGraph from './objects/openGraph'
import latex from './latex'

const allPlugs = Object.values(plugs).map((plug) => {
  return { ...plug, fields: plugDefaultFields.concat(plug.fields) }
})



// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    latex,
    openGraph,
    route,
    link,
    simpleBlockContent,
    cta,
    post,
    navMenu,
    page,
    category,
    authorReference,
    instagram,
    videoEmbed,
    walk,
    location,
    waypoint,
    step,
    author,
    mainImage,
    publication,
    blockContent,
    address,
    difficulty,
    siteSettings,
    bodyPortableText,
    excerptPortableText
  ])
  .concat(allPlugs)
})
