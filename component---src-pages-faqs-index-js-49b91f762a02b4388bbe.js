;(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
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
    JEua: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'pageQuery', function () {
          return m
        })
      var n = a('Wbzz'),
        i = a('FdF9'),
        l = a('Bl7J'),
        o = a('jNNy'),
        r = a('KYHh'),
        u = a.n(r),
        d = a('5LqB'),
        c = a.n(d),
        s = u.a.image,
        m = '1833389809'
      t.default = function (e) {
        var t = e.data.allMarkdownRemark.edges
        return i.default.createElement(
          l.a,
          null,
          i.default.createElement(o.a, {
            title: 'Frequently asked questions | ' + u.a.titleAlt,
            path: '/faqs/',
            description:
              "Because no one likes to repeat things here's a compilation of answers to questions I'm often asked.",
            metaImage: s,
          }),
          i.default.createElement(
            'main',
            { className: c.a.main },
            i.default.createElement(
              'div',
              { className: c.a.title },
              i.default.createElement(
                'h1',
                { className: c.a.heading },
                i.default.createElement(
                  'span',
                  null,
                  'Frequently asked questions'
                )
              )
            ),
            i.default.createElement(
              'div',
              { className: c.a.content },
              i.default.createElement(
                'p',
                null,
                'Did I leave something out that you were looking for an answer to? Feel free to reach out and ',
                i.default.createElement(n.Link, { to: '/contact/' }, 'ask me'),
                '.'
              ),
              i.default.createElement(
                'ul',
                null,
                t.map(function (e) {
                  return i.default.createElement(
                    'li',
                    { key: e.node.id },
                    i.default.createElement(
                      n.Link,
                      { to: e.node.frontmatter.path },
                      e.node.frontmatter.title
                    )
                  )
                })
              )
            )
          )
        )
      }
    },
  },
])
//# sourceMappingURL=component---src-pages-faqs-index-js-49b91f762a02b4388bbe.js.map
