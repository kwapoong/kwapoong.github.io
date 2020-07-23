;(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
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
    RXBc: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'pageQuery', function () {
          return u
        })
      var l = a('FdF9'),
        r = a('Bl7J'),
        n = a('jNNy'),
        i = a('mTGK'),
        o = a('5LqB'),
        d = a.n(o),
        s = a('KYHh'),
        c = a.n(s),
        u = '1955643131'
      t.default = function (e) {
        var t = e.data,
          a = t.site.siteMetadata.author,
          o = t.featuredPosts.edges,
          s = t.recentPosts.edges
        return l.default.createElement(
          r.a,
          null,
          l.default.createElement(n.a, {
            title: c.a.title + ' - ' + c.a.description,
            path: '/',
            description: c.a.description,
            metaImage: c.a.image,
          }),
          l.default.createElement(
            'main',
            { id: 'main', className: d.a.main },
            l.default.createElement(
              'div',
              { className: d.a.title },
              l.default.createElement(
                'h1',
                { className: d.a.heading },
                l.default.createElement(
                  'span',
                  null,
                  "Welcome to the website where I share things I've found on the way getting into the ",
                  l.default.createElement(
                    'a',
                    { href: '/tag/' },
                    '#programming'
                  ),
                  ' ',
                  'world.'
                )
              )
            ),
            l.default.createElement(
              'div',
              { className: d.a.content },
              l.default.createElement(
                'div',
                { className: d.a.gridList },
                o.map(function (e) {
                  var t = e.node,
                    r = t.id,
                    n = t.excerpt,
                    o = t.timeToRead,
                    d = t.frontmatter,
                    s = d.title,
                    c = d.date,
                    u = d.date_pretty,
                    m = d.path,
                    p = d.tags,
                    h = d.author,
                    f = d.authors,
                    g = d.excerpt,
                    E = d.image
                  return l.default.createElement(i.a, {
                    key: r,
                    title: s,
                    date: c,
                    datePretty: u,
                    path: m,
                    authors: f,
                    author: h || a,
                    timeToRead: o,
                    image: E,
                    excerpt: g || n,
                    tags: p,
                  })
                })
              ),
              l.default.createElement(
                'h2',
                { className: d.a.subHeading },
                l.default.createElement('span', null, 'Recent posts')
              ),
              l.default.createElement(
                'div',
                { className: d.a.list },
                s.map(function (e) {
                  var t = e.node,
                    r = t.id,
                    n = t.excerpt,
                    o = t.timeToRead,
                    d = t.frontmatter,
                    s = d.title,
                    c = d.date,
                    u = d.date_pretty,
                    m = d.path,
                    p = d.author,
                    h = d.authors,
                    f = d.excerpt,
                    g = d.tags
                  return l.default.createElement(i.a, {
                    key: r,
                    title: s,
                    date: c,
                    datePretty: u,
                    path: m,
                    author: p || a,
                    authors: h,
                    timeToRead: o,
                    excerpt: f || n,
                    tags: g,
                  })
                })
              ),
              l.default.createElement(
                'h2',
                { className: d.a.subHeading },
                l.default.createElement(
                  'span',
                  null,
                  'Explore more on this site'
                )
              ),
              l.default.createElement(
                'div',
                null,
                l.default.createElement(
                  'ul',
                  { className: d.a.gridListExpanded + ' ' + d.a.navList },
                  l.default.createElement(
                    'li',
                    { key: 'articles' },
                    l.default.createElement(i.a, {
                      key: 'articles-home-link',
                      title: 'Articles',
                      path: '/articles/',
                      excerpt:
                        '<p>Long form writing mostly about design and web development.</p>',
                    })
                  ),
                  l.default.createElement(
                    'li',
                    { key: 'notes' },
                    l.default.createElement(i.a, {
                      key: 'notes-home-link',
                      title: 'Notes',
                      path: '/notes/',
                      excerpt:
                        '<p>Thoughts, inspiration, mistakes, and other minutia you’d find in a blog.</p>',
                    })
                  ),
                  l.default.createElement(
                    'li',
                    { key: 'works' },
                    l.default.createElement(i.a, {
                      key: 'works-home-link',
                      title: 'Works',
                      path: '/work/',
                      excerpt:
                        "<p>Hand-picked selection of things I've designed, illustrated, and developed.</p>",
                    })
                  ),
                  l.default.createElement(
                    'li',
                    { key: 'mastering-paper' },
                    l.default.createElement(i.a, {
                      key: 'mastering-paper-home-link',
                      title: 'Mastering Paper',
                      path: '/mastering-paper/',
                      excerpt:
                        '<p>Tutorials to help master the iOS drawing app— Paper</p>',
                    })
                  ),
                  l.default.createElement(
                    'li',
                    { key: 'contact' },
                    l.default.createElement(i.a, {
                      key: 'contact-home-link',
                      title: 'Contact',
                      path: '/contact/',
                      excerpt:
                        '<p>Preferred methods of sending questions, messages, and love letters to me.</p>',
                    })
                  ),
                  l.default.createElement(
                    'li',
                    { key: 'support' },
                    l.default.createElement(i.a, {
                      key: 'support-home-link',
                      title: 'Show your support',
                      path: '/support/',
                      excerpt:
                        '<p>Give thanks for the free open source goodies I provide.</p>',
                    })
                  ),
                  l.default.createElement(
                    'li',
                    { key: 'faqs' },
                    l.default.createElement(i.a, {
                      key: 'faqs-home-link',
                      title: 'Frequently asked questions',
                      path: '/faqs/',
                      excerpt:
                        '<p>There’s no such thing as a dumb question…</p>',
                    })
                  ),
                  l.default.createElement(
                    'li',
                    { key: 'topics' },
                    l.default.createElement(i.a, {
                      key: 'topics-home-link',
                      title: 'All topics',
                      path: '/tag/',
                      excerpt:
                        '<p>Archive of all posts organized by topic.</p>',
                    })
                  )
                )
              )
            )
          )
        )
      }
    },
    mTGK: function (e, t, a) {
      'use strict'
      var l = a('FdF9'),
        r = a('Wbzz'),
        n = a('9eSz'),
        i = a.n(n),
        o = a('0TdT'),
        d = a.n(o)
      a('zvvp')
      t.a = function (e) {
        var t = e.title,
          a = (e.authors, e.date),
          n = e.datePretty,
          o = e.path,
          s = e.image,
          c = (e.author, e.timeToRead),
          u = e.excerpt
        e.tags
        return l.default.createElement(
          l.default.Fragment,
          null,
          l.default.createElement(
            'article',
            { className: d.a.entry + ' h-entry' },
            l.default.createElement(
              'h2',
              { className: d.a.title + ' p-name' },
              l.default.createElement(r.Link, { to: o }, t)
            ),
            l.default.createElement(
              'div',
              { className: d.a.meta },
              a &&
                l.default.createElement(
                  l.default.Fragment,
                  null,
                  ' ',
                  l.default.createElement(
                    'time',
                    { className: d.a.date + ' dt-published', dateTime: a },
                    n
                  )
                ),
              c &&
                l.default.createElement(
                  l.default.Fragment,
                  null,
                  ' ',
                  l.default.createElement(
                    'span',
                    { className: d.a.readTime },
                    c,
                    ' min read'
                  )
                )
            ),
            s &&
              l.default.createElement(i.a, {
                fluid: s.childImageSharp.fluid,
                className: d.a.cover,
                backgroundColor: 'var(--input-background-color)',
              }),
            l.default.createElement('div', {
              className: d.a.excerpt + ' p-summary',
              dangerouslySetInnerHTML: { __html: u },
            })
          )
        )
      }
    },
  },
])
//# sourceMappingURL=component---src-pages-index-js-46015b5d93c9527b6705.js.map
