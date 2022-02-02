import convertPrismicToData from './convertPrismicToData'

test('if it works with simple data', () => {
  expect(convertPrismicToData({
    "id": "YQQCVBAAACcAKj7I",
    "uid": "blog-post-1",
    "url": null,
    "type": "blog_post",
    "href": "https://my-blog-t.cdn.prismic.io/api/v2/documents/search?ref=YQQChRAAACMAKj-t&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YQQCVBAAACcAKj7I%22%29+%5D%5D",
    "tags": [],
    "first_publication_date": "2021-07-30T13:44:55+0000",
    "last_publication_date": "2021-07-30T13:44:55+0000",
    "slugs": [
      "2021-07-01"
    ],
    "linked_documents": [],
    "lang": "en-us",
    "alternate_languages": [],
    "data": {
      "publish_date": "2021-07-01",
      "title": "Blog Post #1",
      "content": [
        {
          "type": "paragraph",
          "text": "This is actually my first blog post.",
          "spans": []
        }
      ]
    }
  }))
    .toEqual({
      date: '2021-07-01',
      slug: 'blog-post-1',
      title: 'Blog Post #1',
      content: 'This is actually my first blog post.'
    })
})

test('if it works with complex data', () => {
  expect(convertPrismicToData({
    "id": "YQQCghAAACMAKj-a",
    "uid": "blog-post-2",
    "url": null,
    "type": "blog_post",
    "href": "https://my-blog-t.cdn.prismic.io/api/v2/documents/search?ref=YQQF3RAAACMAKk8A&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YQQCghAAACMAKj-a%22%29+%5D%5D",
    "tags": [],
    "first_publication_date": "2021-07-30T13:45:41+0000",
    "last_publication_date": "2021-07-30T13:59:47+0000",
    "slugs": [
      "2021-07-03"
    ],
    "linked_documents": [],
    "lang": "en-us",
    "alternate_languages": [],
    "data": {
      "publish_date": "2021-07-03",
      "title": "My second post",
      "content": [
        {
          "type": "paragraph",
          "text": "First paragraph.",
          "spans": []
        },
        {
          "type": "paragraph",
          "text": "Second paragraph with bold and italic.",
          "spans": [
            {
              "start": 22,
              "end": 26,
              "type": "strong"
            },
            {
              "start": 31,
              "end": 37,
              "type": "em"
            }
          ]
        },
        {
          "type": "list-item",
          "text": "First item",
          "spans": []
        },
        {
          "type": "list-item",
          "text": "Second item",
          "spans": []
        }
      ]
    }
  }))
    .toEqual({
      date: '2021-07-03',
      slug: 'blog-post-2',
      title: 'My second post',
      content: `First paragraph.

Second paragraph with **bold** and *italic*.

- First item
- Second item`
    })
})

test('if it works without a date', () => {
  expect(convertPrismicToData({
    "id": "YQQCVBAAACcAKj7I",
    "uid": "blog-post-1",
    "url": null,
    "type": "blog_post",
    "href": "https://my-blog-t.cdn.prismic.io/api/v2/documents/search?ref=YQQChRAAACMAKj-t&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YQQCVBAAACcAKj7I%22%29+%5D%5D",
    "tags": [],
    "first_publication_date": "2021-07-30T13:44:55+0000",
    "last_publication_date": "2021-07-30T13:44:55+0000",
    "slugs": [
      "2021-07-01"
    ],
    "linked_documents": [],
    "lang": "en-us",
    "alternate_languages": [],
    "data": {
      "title": "Blog Post #1",
      "content": [
        {
          "type": "paragraph",
          "text": "This is actually my first blog post.",
          "spans": []
        }
      ]
    }
  }))
    .toEqual({
      date: null,
      slug: 'blog-post-1',
      title: 'Blog Post #1',
      content: 'This is actually my first blog post.'
    })
})
