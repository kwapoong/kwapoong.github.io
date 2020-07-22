;(window.webpackJsonp = window.webpackJsonp || []).push([
  [16],
  {
    '0TdT': function (e, t, a) {
      e.exports = {
        entry: 'entry-module--entry--22LZB',
        title: 'entry-module--title--3Yzff',
        meta: 'entry-module--meta--13AY1',
        tags: 'entry-module--tags--HhaLq',
        tag: 'entry-module--tag--2sjmD',
        authors: 'entry-module--authors--2hatv',
        author: 'entry-module--author--2GKFw',
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
        r = a('QS5V'),
        i = a.n(r)
      t.a = function (e) {
        var t = e.nextPath,
          a = e.previousPath,
          r = e.nextLabel,
          m = e.previousLabel
        return a || t
          ? n.default.createElement(
              'nav',
              { className: i.a.pagination },
              a
                ? n.default.createElement(
                    l.Link,
                    { to: a, rel: 'prev', className: i.a.item },
                    n.default.createElement(
                      'span',
                      { className: i.a.iconPrev },
                      '←'
                    ),
                    n.default.createElement(
                      'span',
                      { className: i.a.itemText },
                      m
                    )
                  )
                : n.default.createElement('div', { className: i.a.item }),
              t
                ? n.default.createElement(
                    l.Link,
                    {
                      to: t,
                      rel: 'next',
                      className: i.a.item + ' ' + i.a.itemRight,
                    },
                    n.default.createElement(
                      'span',
                      { className: i.a.itemText },
                      r
                    ),
                    n.default.createElement(
                      'span',
                      { className: i.a.iconNext },
                      '→'
                    )
                  )
                : n.default.createElement('div', { className: i.a.item })
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
        r = a('9eSz'),
        i = a.n(r),
        m = a('0TdT'),
        o = a.n(m)
      a('zvvp')
      t.a = function (e) {
        var t = e.title,
          a = (e.authors, e.date),
          r = e.datePretty,
          m = e.path,
          u = e.image,
          d = (e.author, e.timeToRead),
          c = e.excerpt
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
                    r
                  )
                ),
              d &&
                n.default.createElement(
                  n.default.Fragment,
                  null,
                  ' ',
                  n.default.createElement(
                    'span',
                    { className: o.a.readTime },
                    d,
                    ' min read'
                  )
                )
            ),
            u &&
              n.default.createElement(i.a, {
                fluid: u.childImageSharp.fluid,
                className: o.a.cover,
                backgroundColor: 'var(--input-background-color)',
              }),
            n.default.createElement('div', {
              className: o.a.excerpt + ' p-summary',
              dangerouslySetInnerHTML: { __html: c },
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
        r = a('Bl7J'),
        i = a('mTGK'),
        m = a('3CW5'),
        o = a('KYHh'),
        u = a.n(o),
        d = a('5LqB'),
        c = a.n(d),
        s = a('zvvp'),
        p = '881807161'
      t.default = function (e) {
        var t = e.data,
          a = e.pageContext,
          o = a.nextPagePath,
          d = a.previousPagePath,
          p = a.humanPageNumber,
          h = a.numberOfPages,
          f = a.author,
          g = t.site.siteMetadata.author,
          v = t.authorYaml,
          E = v.name,
          N = v.bio,
          x = t.allMarkdownRemark.edges,
          y = 1 === p ? '' : ' - Page ' + p + ' of ' + h,
          L = u.a.image
        return n.default.createElement(
          r.a,
          null,
          n.default.createElement(l.a, {
            title: '' + E + y + ' - ' + u.a.title,
            path: '/author/' + s.slugify(f) + '/',
            description: 'An archive of posts written by ' + E + '.',
            metaImage: L,
          }),
          n.default.createElement(
            'main',
            { id: 'main', className: c.a.main },
            n.default.createElement(
              'div',
              { className: c.a.title },
              n.default.createElement(
                'h1',
                { className: c.a.heading },
                n.default.createElement('span', null, E, ' ', y)
              ),
              n.default.createElement('h2', null, x.length),
              N &&
                1 === p &&
                n.default.createElement('div', {
                  className: c.a.intro,
                  dangerouslySetInnerHTML: { __html: N },
                })
            ),
            n.default.createElement(
              'div',
              { className: c.a.content },
              n.default.createElement(
                'div',
                { className: c.a.list },
                x.map(function (e) {
                  var t = e.node,
                    a = t.id,
                    l = t.excerpt,
                    r = t.timeToRead,
                    m = t.frontmatter,
                    o = m.title,
                    u = m.date,
                    d = m.date_pretty,
                    c = m.path,
                    s = m.author,
                    p = m.authors,
                    h = m.image,
                    f = m.excerpt
                  return n.default.createElement(i.a, {
                    key: a,
                    title: o,
                    date: u,
                    datePretty: d,
                    path: c,
                    author: s || g,
                    authors: p,
                    timeToRead: r,
                    image: h,
                    excerpt: f || l,
                  })
                })
              )
            )
          ),
          n.default.createElement(m.a, {
            previousPath: d,
            previousLabel: 'Newer posts',
            nextPath: o,
            nextLabel: 'Older posts',
          })
        )
      }
    },
  },
])
//# sourceMappingURL=component---src-templates-authors-js-a5099bf7edc9b7e8118d.js.map
