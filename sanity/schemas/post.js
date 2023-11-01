export default {
  name: 'post',
  type: 'document',
  title: 'Post',
  groups: [
    {
      name: 'content',
      title: 'Content',
    },
    {
      name: 'meta',
      title: 'Meta',
    },
  ],
  fields: [
    {
      name: 'meta_title',
      type: 'string',
      title: 'Meta title',
      validation: Rule => Rule.required(),
      group: 'meta',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required(),
      group: 'content',
    },
    {
      name: 'publishedDate',
      type: 'date',
      title: 'Published Date',
      validation: Rule => Rule.required(),
      group: 'content',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: Rule => Rule.required(),
      group: 'content',
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          isHighlighted: true,
        },
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        }
      ]
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      validation: Rule => Rule.required(),
      group: 'content',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: input => input
                             .toLowerCase()
                             .replace(/\s+/g, '-')
                             .slice(0, 200)
      }
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      validation: Rule => Rule.required(),
      group: 'content',
    },
    {
      name: 'body',
      title: 'Body content',
      type: 'array',
      group: 'content',
      validation: Rule => Rule.required(),
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
        }
      ]
    }
  ]
}