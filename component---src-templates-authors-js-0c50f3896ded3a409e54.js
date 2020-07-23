;(window.webpackJsonp = window.webpackJsonp || []).push([
  [16],
  {
    '0TdT': function (e, t, a) {
      e.exports = {
        entry: 'entry-module--entry--22LZB',
        title: 'entry-module--title--3Yzff',
        meta: 'entry-module--meta--13AY1',
        excerpt: 'entry-module--excerpt--1Jg-M',
        cover: 'entry-module--cover--uvbo5',
        grain: 'entry-module--grain--QUP2_',
        customMedia: {},
        customProperties: {},
        customSelectors: {},
      }
    },
    '3CW5': function (e, t, a) {
      'use strict'
      var n = a('FdF9'),
        l = a('Wbzz'),
        i = a('QS5V'),
        r = a.n(i)
      t.a = function (e) {
        var t = e.nextPath,
          a = e.previousPath,
          i = e.nextLabel,
          m = e.previousLabel
        return a || t
          ? n.default.createElement(
              'nav',
              { className: r.a.pagination },
              a
                ? n.default.createElement(
                    l.Link,
                    { to: a, rel: 'prev', className: r.a.item },
                    n.default.createElement(
                      'span',
                      { className: r.a.iconPrev },
                      '←'
                    ),
                    n.default.createElement(
                      'span',
                      { className: r.a.itemText },
                      m
                    )
                  )
                : n.default.createElement('div', { className: r.a.item }),
              t
                ? n.default.createElement(
                    l.Link,
                    {
                      to: t,
                      rel: 'next',
                      className: r.a.item + ' ' + r.a.itemRight,
                    },
                    n.default.createElement(
                      'span',
                      { className: r.a.itemText },
                      i
                    ),
                    n.default.createElement(
                      'span',
                      { className: r.a.iconNext },
                      '→'
                    )
                  )
                : n.default.createElement('div', { className: r.a.item })
            )
          : null
      }
    },
    '5LqB': function (e, t, a) {
      e.exports = {
        icon: 'archive-module--icon--89JmZ',
        spin: 'archive-module--spin--14aNj',
        logo: 'archive-module--logo--3c8aR',
        title: 'archive-module--title--3ZGBp',
        cover: 'archive-module--cover--2sv0o',
        heading: 'archive-module--heading--GjChR',
        subHeading: 'archive-module--subHeading--3rgl2',
        intro: 'archive-module--intro--2EflT',
        grain: 'archive-module--grain--5gDu8',
        content: 'archive-module--content--2dCC9',
        navList: 'archive-module--navList--3yIMk',
        list: 'archive-module--list--W5ZBJ',
        gridList: 'archive-module--gridList--2iz3T',
        gridListExpanded: 'archive-module--gridListExpanded--1L2X2',
        columnList: 'archive-module--columnList--3dK8g',
        count: 'archive-module--count--RREhZ',
        customMedia: {},
        customProperties: {},
        customSelectors: {},
      }
    },
    QS5V: function (e, t, a) {
      e.exports = {
        pagination: 'pagination-module--pagination--5u0we',
        item: 'pagination-module--item--2FbSP',
        itemText: 'pagination-module--itemText--q_ljE',
        itemRight: 'pagination-module--itemRight--2XC01',
        itemLabel: 'pagination-module--itemLabel--1yC7K',
        iconNext: 'pagination-module--iconNext--2kIia',
        iconPrev: 'pagination-module--iconPrev--1xG44',
        customMedia: {},
        customProperties: {},
        customSelectors: {},
      }
    },
    mTGK: function (e, t, a) {
      'use strict'
      var n = a('FdF9'),
        l = a('Wbzz'),
        i = a('9eSz'),
        r = a.n(i),
        m = a('0TdT'),
        o = a.n(m)
      a('zvvp')
      t.a = function (e) {
        var t = e.title,
          a = (e.authors, e.date),
          i = e.datePretty,
          m = e.path,
          u = e.image,
          c = (e.author, e.timeToRead),
          d = e.excerpt
        e.tags
        return n.default.createElement(
          n.default.Fragment,
          null,
          n.default.createElement(
            'article',
            { className: o.a.entry + ' h-entry' },
            n.default.createElement(
              'h2',
              { className: o.a.title + ' p-name' },
              n.default.createElement(l.Link, { to: m }, t)
            ),
            n.default.createElement(
              'div',
              { className: o.a.meta },
              a &&
                n.default.createElement(
                  n.default.Fragment,
                  null,
                  ' ',
                  n.default.createElement(
                    'time',
                    { className: o.a.date + ' dt-published', dateTime: a },
                    i
                  )
                ),
              c &&
                n.default.createElement(
                  n.default.Fragment,
                  null,
                  ' ',
                  n.default.createElement(
                    'span',
                    { className: o.a.readTime },
                    c,
                    ' min read'
                  )
                )
            ),
            u &&
              n.default.createElement(r.a, {
                fluid: u.childImageSharp.fluid,
                className: o.a.cover,
                backgroundColor: 'var(--input-background-color)',
              }),
            n.default.createElement('div', {
              className: o.a.excerpt + ' p-summary',
              dangerouslySetInnerHTML: { __html: d },
            })
          )
        )
      }
    },
    rfbz: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'postsQuery', function () {
          return p
        })
      a('pJf4')
      var n = a('FdF9'),
        l = a('jNNy'),
        i = a('Bl7J'),
        r = a('mTGK'),
        m = a('3CW5'),
        o = a('KYHh'),
        u = a.n(o),
        c = a('5LqB'),
        d = a.n(c),
        s = a('zvvp'),
        p = '881807161'
      t.default = function (e) {
        var t = e.data,
          a = e.pageContext,
          o = a.nextPagePath,
          c = a.previousPagePath,
          p = a.humanPageNumber,
          f = a.numberOfPages,
          h = a.author,
          v = t.site.siteMetadata.author,
          g = t.authorYaml,
          E = g.name,
          N = g.bio,
          x = t.allMarkdownRemark.edges,
          y = 1 === p ? '' : ' - Page ' + p + ' of ' + f,
          L = u.a.image
        return n.default.createElement(
          i.a,
          null,
          n.default.createElement(l.a, {
            title: '' + E + y + ' - ' + u.a.title,
            path: '/author/' + s.slugify(h) + '/',
            description: 'An archive of posts written by ' + E + '.',
            metaImage: L,
          }),
          n.default.createElement(
            'main',
            { id: 'main', className: d.a.main },
            n.default.createElement(
              'div',
              { className: d.a.title },
              n.default.createElement(
                'h1',
                { className: d.a.heading },
                n.default.createElement('span', null, E, ' ', y)
              ),
              n.default.createElement('h2', null, x.length),
              N &&
                1 === p &&
                n.default.createElement('div', {
                  className: d.a.intro,
                  dangerouslySetInnerHTML: { __html: N },
                })
            ),
            n.default.createElement(
              'div',
              { className: d.a.content },
              n.default.createElement(
                'div',
                { className: d.a.list },
                x.map(function (e) {
                  var t = e.node,
                    a = t.id,
                    l = t.excerpt,
                    i = t.timeToRead,
                    m = t.frontmatter,
                    o = m.title,
                    u = m.date,
                    c = m.date_pretty,
                    d = m.path,
                    s = m.author,
                    p = m.authors,
                    f = m.image,
                    h = m.excerpt
                  return n.default.createElement(r.a, {
                    key: a,
                    title: o,
                    date: u,
                    datePretty: c,
                    path: d,
                    author: s || v,
                    authors: p,
                    timeToRead: i,
                    image: f,
                    excerpt: h || l,
                  })
                })
              )
            )
          ),
          n.default.createElement(m.a, {
            previousPath: c,
            previousLabel: 'Newer posts',
            nextPath: o,
            nextLabel: 'Older posts',
          })
        )
      }
    },
  },
])
//# sourceMappingURL=component---src-templates-authors-js-0c50f3896ded3a409e54.js.map
