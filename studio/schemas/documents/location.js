import icon from 'react-icons/lib/md/map'

export default {
  name: 'location',
  title: 'Location',
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
      name: 'description',
      title: 'Description',
      type: 'blockContent'
    },
    {
        name: 'geolocation',
        title: 'Walk Location',
        type: 'geopoint',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'A general photograph of the location',
      options: {
        hotspot: true
      }
    }
  ],
  preview: {
    select: {title: 'name', media: 'image'}
  }
}
