import icon from 'react-icons/lib/md/book'

export default {
  name: 'publication',
  title: 'Publication',
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
      }
  ]
}
