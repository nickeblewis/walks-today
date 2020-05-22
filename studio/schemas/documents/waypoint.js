import icon from 'react-icons/lib/md/room'

export default {
  name: 'waypoint',
  title: 'POI',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of location'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100
      }
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      description: 'This can be used to schedule post for publishing',
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main image',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'excerpt',
      type: 'excerptPortableText',
      title: 'Excerpt',
      description:
        'This ends up on summary pages, on Google, when people share your post in social media.',
    },
    {
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [
        {
          type: 'authorReference',
        },
      ],
    },
    {
      name: 'categories',
      type: 'array',
      title: 'Categories',
      of: [
        {
          type: 'reference',
          to: {
            type: 'category',
          },
        },
      ],
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body',
    },
    {
        name: 'description',
        title: 'Description',
        type: 'blockContent'
      },
      {
        name: 'location',
        title: 'Associated Location',
        type: 'reference',
        to: [{type: 'location'}],
        description: 'The location this is is associated with'
      },
    {
        name: 'geolocation',
        title: 'POI Location',
        type: 'geopoint',
    },
    {
      name:'images',
      title: 'More Images',
      type: 'array',
      of: [{type: 'image'}]
    },
    {
      name: 'publications',
      title: 'Associated Publications',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{type: 'publication'}]
      }]
    }
  ],
  orderings: [
    {
      name: 'publishingDateAsc',
      title: 'Publishing date new–>old',
      by: [
        {
          field: 'publishedAt',
          direction: 'asc',
        },
        {
          field: 'name',
          direction: 'asc',
        },
      ],
    },
    {
      name: 'publishingDateDesc',
      title: 'Publishing date old->new',
      by: [
        {
          field: 'publishedAt',
          direction: 'desc',
        },
        {
          field: 'name',
          direction: 'asc',
        },
      ],
    },
  ],
  preview: {
    select: {title: 'name', publishedAt: 'publishedAt', slug: 'slug',media: 'mainImage'}
  },
  prepare({ name = 'No name', publishedAt, slug = {}, media }) {
    const path = `/poi/${slug.current}`
    return {
      name,
      media,
      subtitle: publishedAt ? path : 'Missing publishing date',
    }
  },
}
