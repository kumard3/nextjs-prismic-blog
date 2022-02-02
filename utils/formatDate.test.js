import formatDate from './formatDate'

test('if it works', () => {
  expect(formatDate(new Date(2013, 0, 11)))
    .toBe('January 11, 2013')

  expect(formatDate(new Date(2013, 1, 10)))
    .toBe('February 10, 2013')

  expect(formatDate(new Date(2013, 11, 10)))
    .toBe('December 10, 2013')

  expect(formatDate('2013-12-10'))
    .toBe('December 10, 2013')
})
