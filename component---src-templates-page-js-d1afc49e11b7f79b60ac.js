;(window.webpackJsonp = window.webpackJsonp || []).push([
  [18],
  {
    Ercv: function (e, t, a) {
      e.exports = {
        document: 'document-module--document--1Lycb',
        title: 'document-module--title--1PjmY',
        heading: 'document-module--heading--Y8-yS',
        meta: 'document-module--meta--3MKTa',
        readTime: 'document-module--readTime--1MnG7',
        tags: 'document-module--tags--v5jW9',
        tag: 'document-module--tag--1yvzk',
        authors: 'document-module--authors--3mYFp',
        author: 'document-module--author--3S58z',
        tocWrap: 'document-module--tocWrap--_5cZQ',
        tocTitle: 'document-module--tocTitle--2ybLY',
        toc: 'document-module--toc--2M3e3',
        cover: 'document-module--cover--2yqPV',
        grain: 'document-module--grain--27TJO',
        content: 'document-module--content--JBd-i',
        imageGrid: 'document-module--imageGrid--1pjv7',
        gridItem: 'document-module--gridItem--2inPu',
        loadMore: 'document-module--loadMore--1m8aw',
        customMedia: {},
        customProperties: {},
        customSelectors: {},
      }
    },
    sweJ: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'pageQuery', function () {
          return r
        })
      a('3nLz')
      var l = a('FdF9'),
        d = a('jNNy'),
        m = a('Bl7J'),
        n = a('zSWs'),
        u = a('KYHh'),
        o = a.n(u)
      t.default = function (e) {
        var t = e.data.markdownRemark,
          a = t.frontmatter,
          u = a.title,
          r = a.date,
          c = a.date_pretty,
          i = a.date_from_now,
          s = a.last_modified_at,
          f = a.last_modified_at_from_now,
          p = a.path,
          h = a.image,
          g = a.excerpt,
          E = a.toc,
          y = t.excerpt,
          v = t.id,
          N = t.html,
          w = h ? h.childImageSharp.fixed : o.a.image,
          _ = h ? 'summary_large_image' : 'summary'
        return l.default.createElement(
          m.a,
          null,
          l.default.createElement(d.a, {
            title: u + ' - ' + o.a.titleAlt,
            path: p,
            datePublished: r,
            dateModified: s,
            description: g || y,
            metaImage: w,
            twitterCardType: _,
            article: !0,
          }),
          l.default.createElement(
            'main',
            { id: 'main' },
            l.default.createElement(n.a, {
              key: v,
              title: u,
              hideMeta: !0,
              datePublished: r,
              dateModified: s,
              datePretty: c,
              dateFromNow: i,
              dateModifiedFromNow: f,
              path: p,
              image: h,
              toc: E,
              html: N,
              author: o.a.author,
            })
          )
        )
      }
      var r = '1245970188'
    },
    zSWs: function (e, t, a) {
      'use strict'
      a('pJf4')
      var l = a('FdF9'),
        d = a('Wbzz'),
        m = a('9eSz'),
        n = a.n(m),
        u = a('Ercv'),
        o = a.n(u),
        r = a('zvvp')
      t.a = function (e) {
        var t = e.title,
          a = e.authors,
          m = e.hideMeta,
          u = e.datePublished,
          c = e.dateModified,
          i = e.dateFromNow,
          s = e.dateModifiedFromNow,
          f = e.image,
          p = e.author,
          h = e.timeToRead,
          g = e.toc,
          E = e.tableOfContents,
          y = e.tags,
          v = e.html
        return l.default.createElement(
          'article',
          { className: o.a.document + ' h-entry' },
          l.default.createElement(
            'div',
            { className: o.a.title },
            l.default.createElement(
              'h1',
              { className: o.a.heading + ' p-name' },
              t
            ),
            l.default.createElement(
              'div',
              { className: o.a.meta },
              a
                ? l.default.createElement(
                    'div',
                    { className: o.a.authors },
                    a.map(function (e) {
                      return l.default.createElement(
                        d.Link,
                        {
                          className: o.a.author,
                          to: '/author/' + r.slugify(e.id) + '/',
                          key: r.slugify(e.id),
                        },
                        l.default.createElement('span', null, e.name)
                      )
                    })
                  )
                : null,
              l.default.createElement(
                'div',
                { style: { display: m && 'none' } },
                l.default.createElement(
                  'span',
                  null,
                  p &&
                    l.default.createElement(
                      l.default.Fragment,
                      null,
                      c ? 'Updated' : 'Published',
                      ' ',
                      l.default.createElement(
                        'span',
                        { style: { display: 'none' } },
                        'by',
                        ' ',
                        l.default.createElement(
                          'a',
                          { className: 'p-author h-card', href: p.url },
                          p.name
                        )
                      )
                    ),
                  u &&
                    l.default.createElement(
                      'span',
                      { style: { display: c && 'none' } },
                      ' ',
                      l.default.createElement(
                        'time',
                        { className: 'dt-published', dateTime: u },
                        i
                      )
                    ),
                  c &&
                    l.default.createElement(
                      l.default.Fragment,
                      null,
                      ' ',
                      l.default.createElement(
                        'time',
                        { className: 'dt-updated', dateTime: c },
                        s
                      )
                    )
                ),
                h &&
                  l.default.createElement(
                    l.default.Fragment,
                    null,
                    ' ',
                    l.default.createElement(
                      'span',
                      { className: o.a.readTime },
                      h,
                      ' min read'
                    )
                  )
              ),
              y
                ? l.default.createElement(
                    'div',
                    { className: o.a.tags },
                    y.map(function (e) {
                      return l.default.createElement(
                        d.Link,
                        {
                          className: o.a.tag,
                          to: '/tag/' + r.slugify(e) + '/',
                          key: r.slugify(e),
                        },
                        l.default.createElement('span', null, '#', e)
                      )
                    })
                  )
                : null
            )
          ),
          f &&
            l.default.createElement(n.a, {
              fluid: f.childImageSharp.fluid,
              className: o.a.cover,
              backgroundColor: 'var(--input-background-color)',
            }),
          g &&
            l.default.createElement(
              'details',
              { className: o.a.tocWrap },
              l.default.createElement(
                'summary',
                { className: o.a.tocTitle },
                'Table of contents'
              ),
              l.default.createElement('div', {
                className: o.a.toc,
                dangerouslySetInnerHTML: { __html: E },
              })
            ),
          l.default.createElement('div', {
            className: o.a.content + ' e-content',
            dangerouslySetInnerHTML: { __html: v },
          })
        )
      }
    },
  },
])
//# sourceMappingURL=component---src-templates-page-js-d1afc49e11b7f79b60ac.js.map
