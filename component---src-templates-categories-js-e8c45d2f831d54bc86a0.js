;(window.webpackJsonp = window.webpackJsonp || []).push([
  [17],
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
      var l = a('FdF9'),
        n = a('Wbzz'),
        r = a('QS5V'),
        i = a.n(r)
      t.a = function (e) {
        var t = e.nextPath,
          a = e.previousPath,
          r = e.nextLabel,
          m = e.previousLabel
        return a || t
          ? l.default.createElement(
              'nav',
              { className: i.a.pagination },
              a
                ? l.default.createElement(
                    n.Link,
                    { to: a, rel: 'prev', className: i.a.item },
                    l.default.createElement(
                      'span',
                      { className: i.a.iconPrev },
                      '←'
                    ),
                    l.default.createElement(
                      'span',
                      { className: i.a.itemText },
                      m
                    )
                  )
                : l.default.createElement('div', { className: i.a.item }),
              t
                ? l.default.createElement(
                    n.Link,
                    {
                      to: t,
                      rel: 'next',
                      className: i.a.item + ' ' + i.a.itemRight,
                    },
                    l.default.createElement(
                      'span',
                      { className: i.a.itemText },
                      r
                    ),
                    l.default.createElement(
                      'span',
                      { className: i.a.iconNext },
                      '→'
                    )
                  )
                : l.default.createElement('div', { className: i.a.item })
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
    m0YG: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'postsQuery', function () {
          return p
        })
      a('zGcK'), a('pJf4')
      var l = a('FdF9'),
        n = a('Wbzz'),
        r = a('jNNy'),
        i = a('Bl7J'),
        m = a('mTGK'),
        o = a('3CW5'),
        u = a('KYHh'),
        c = a.n(u),
        d = a('5LqB'),
        s = a.n(d),
        f = a('zvvp'),
        p = '2770768980'
      t.default = function (e) {
        var t,
          a = e.data,
          u = e.pageContext,
          d = u.nextPagePath,
          p = u.previousPagePath,
          g = u.humanPageNumber,
          v = u.numberOfPages,
          h = u.category,
          E = a.site.siteMetadata.author,
          N = a.taxonomyYaml,
          x = N.name,
          L = N.excerpt,
          y = N.html,
          b = a.allMarkdownRemark,
          P = b.group,
          T = b.edges,
          k = 1 === g ? '' : ' - Page ' + g + ' of ' + v,
          w = c.a.image
        return l.default.createElement(
          i.a,
          null,
          l.default.createElement(r.a, {
            title: '' + x + k + ' - ' + c.a.title,
            path: '/' + f.slugify(h) + '/',
            description: L || 'An archive of posts related to ' + x + '.',
            metaImage: w,
          }),
          l.default.createElement(
            'main',
            { id: 'main', className: s.a.main },
            l.default.createElement(
              'div',
              { className: s.a.title },
              l.default.createElement(
                'h1',
                { className: s.a.heading },
                l.default.createElement('span', null, x, ' ', k)
              ),
              y &&
                1 === g &&
                l.default.createElement('div', {
                  className: s.a.intro,
                  dangerouslySetInnerHTML: { __html: y },
                })
            ),
            l.default.createElement(
              'div',
              { className: s.a.content },
              l.default.createElement(
                'h2',
                { className: s.a.subHeading },
                l.default.createElement('span', null, 'Browse by topic')
              ),
              l.default.createElement(
                'div',
                { className: s.a.columnList, style: { marginBottom: '3rem' } },
                l.default.createElement(
                  'ul',
                  null,
                  P.sort(
                    ((t = 'fieldValue'),
                    function (e, a) {
                      return e[t].toLowerCase() == a[t].toLowerCase()
                        ? 0
                        : e[t].toLowerCase() < a[t].toLowerCase()
                        ? -1
                        : 1
                    })
                  ).map(function (e) {
                    return l.default.createElement(
                      'li',
                      { key: e.fieldValue },
                      l.default.createElement(
                        n.Link,
                        { to: '/tag/' + f.slugify(e.fieldValue) + '/' },
                        l.default.createElement('strong', null, e.fieldValue),
                        ' ',
                        l.default.createElement(
                          'span',
                          { className: s.a.count },
                          e.totalCount
                        )
                      )
                    )
                  })
                )
              ),
              l.default.createElement(
                'div',
                { className: s.a.list },
                T.map(function (e) {
                  var t = e.node,
                    a = t.id,
                    n = t.excerpt,
                    r = t.timeToRead,
                    i = t.frontmatter,
                    o = i.title,
                    u = i.date,
                    c = i.date_pretty,
                    d = i.path,
                    s = i.author,
                    f = i.image,
                    p = i.excerpt
                  return l.default.createElement(m.a, {
                    key: a,
                    title: o,
                    date: u,
                    datePretty: c,
                    path: d,
                    author: s || E,
                    timeToRead: r,
                    image: f,
                    excerpt: p || n,
                  })
                })
              )
            )
          ),
          l.default.createElement(o.a, {
            previousPath: p,
            previousLabel: 'Newer posts',
            nextPath: d,
            nextLabel: 'Older posts',
          })
        )
      }
    },
    mTGK: function (e, t, a) {
      'use strict'
      var l = a('FdF9'),
        n = a('Wbzz'),
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
          c = (e.author, e.timeToRead),
          d = e.excerpt
        e.tags
        return l.default.createElement(
          l.default.Fragment,
          null,
          l.default.createElement(
            'article',
            { className: o.a.entry + ' h-entry' },
            l.default.createElement(
              'h2',
              { className: o.a.title + ' p-name' },
              l.default.createElement(n.Link, { to: m }, t)
            ),
            l.default.createElement(
              'div',
              { className: o.a.meta },
              a &&
                l.default.createElement(
                  l.default.Fragment,
                  null,
                  ' ',
                  l.default.createElement(
                    'time',
                    { className: o.a.date + ' dt-published', dateTime: a },
                    r
                  )
                ),
              c &&
                l.default.createElement(
                  l.default.Fragment,
                  null,
                  ' ',
                  l.default.createElement(
                    'span',
                    { className: o.a.readTime },
                    c,
                    ' min read'
                  )
                )
            ),
            u &&
              l.default.createElement(i.a, {
                fluid: u.childImageSharp.fluid,
                className: o.a.cover,
                backgroundColor: 'var(--input-background-color)',
              }),
            l.default.createElement('div', {
              className: o.a.excerpt + ' p-summary',
              dangerouslySetInnerHTML: { __html: d },
            })
          )
        )
      }
    },
  },
])
//# sourceMappingURL=component---src-templates-categories-js-e8c45d2f831d54bc86a0.js.map
