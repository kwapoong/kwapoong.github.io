;(window.webpackJsonp = window.webpackJsonp || []).push([
  [19],
  {
    '+pmV': function (e, t, a) {
      e.exports = {
        comments: 'post-module--comments--1alRg',
        customMedia: {},
        customProperties: {},
        customSelectors: {},
      }
    },
    '3CW5': function (e, t, a) {
      'use strict'
      var n = a('FdF9'),
        r = a('Wbzz'),
        o = a('QS5V'),
        l = a.n(o)
      t.a = function (e) {
        var t = e.nextPath,
          a = e.previousPath,
          o = e.nextLabel,
          i = e.previousLabel
        return a || t
          ? n.default.createElement(
              'nav',
              { className: l.a.pagination },
              a
                ? n.default.createElement(
                    r.Link,
                    { to: a, rel: 'prev', className: l.a.item },
                    n.default.createElement(
                      'span',
                      { className: l.a.iconPrev },
                      '←'
                    ),
                    n.default.createElement(
                      'span',
                      { className: l.a.itemText },
                      i
                    )
                  )
                : n.default.createElement('div', { className: l.a.item }),
              t
                ? n.default.createElement(
                    r.Link,
                    {
                      to: t,
                      rel: 'next',
                      className: l.a.item + ' ' + l.a.itemRight,
                    },
                    n.default.createElement(
                      'span',
                      { className: l.a.itemText },
                      o
                    ),
                    n.default.createElement(
                      'span',
                      { className: l.a.iconNext },
                      '→'
                    )
                  )
                : n.default.createElement('div', { className: l.a.item })
            )
          : null
      }
    },
    '6qSS': function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'pageQuery', function () {
          return I
        })
      a('3nLz')
      var n = a('FdF9'),
        r = a('Wbzz'),
        o =
          (a('q8oJ'),
          a('YbXK'),
          a('xJgp'),
          a('rzGZ'),
          a('Dq+y'),
          a('8npG'),
          a('Ggvi'),
          a('E5k/'),
          !0),
        l = 'Invariant failed'
      var i = function (e, t) {
        if (!e) {
          if (o) throw new Error(l)
          throw new Error(l + ': ' + (t || ''))
        }
      }
      function m(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = a),
          e
        )
      }
      function c() {
        return (c =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t]
              for (var n in a)
                Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
            }
            return e
          }).apply(this, arguments)
      }
      function s(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          )
        return e
      }
      var d = new Map(),
        u = new Map(),
        f = new Map(),
        h = 0
      function p(e, t, a) {
        void 0 === a && (a = {}), a.threshold || (a.threshold = 0)
        var n = a,
          r = n.root,
          o = n.rootMargin,
          l = n.threshold
        if ((d.has(e) && i(!1), e)) {
          var m =
              (function (e) {
                return e
                  ? f.has(e)
                    ? f.get(e)
                    : ((h += 1), f.set(e, h.toString()), f.get(e) + '_')
                  : ''
              })(r) + (o ? l.toString() + '_' + o : l.toString()),
            c = u.get(m)
          c || ((c = new IntersectionObserver(v, a)), m && u.set(m, c))
          var s = {
            callback: t,
            element: e,
            inView: !1,
            observerId: m,
            observer: c,
            thresholds: c.thresholds || (Array.isArray(l) ? l : [l]),
          }
          return d.set(e, s), c.observe(e), s
        }
      }
      function g(e) {
        if (e) {
          var t = d.get(e)
          if (t) {
            var a = t.observerId,
              n = t.observer,
              r = n.root
            n.unobserve(e)
            var o = !1,
              l = !1
            a &&
              d.forEach(function (t, n) {
                n !== e &&
                  (t.observerId === a && ((o = !0), (l = !0)),
                  t.observer.root === r && (l = !0))
              }),
              !l && r && f.delete(r),
              n && !o && n.disconnect(),
              d.delete(e)
          }
        }
      }
      function v(e) {
        e.forEach(function (e) {
          var t = e.isIntersecting,
            a = e.intersectionRatio,
            n = e.target,
            r = d.get(n)
          if (r && a >= 0) {
            var o = r.thresholds.some(function (e) {
              return r.inView ? a > e : a >= e
            })
            void 0 !== t && (o = o && t), (r.inView = o), r.callback(o, e)
          }
        })
      }
      var E = (function (e) {
        var t, a
        function r() {
          for (var t, a = arguments.length, n = new Array(a), r = 0; r < a; r++)
            n[r] = arguments[r]
          return (
            m(s((t = e.call.apply(e, [this].concat(n)) || this)), 'state', {
              inView: !1,
              entry: void 0,
            }),
            m(s(t), 'node', null),
            m(s(t), 'handleNode', function (e) {
              t.node &&
                (g(t.node),
                e ||
                  t.props.triggerOnce ||
                  t.setState({ inView: !1, entry: void 0 })),
                (t.node = e || null),
                t.observeNode()
            }),
            m(s(t), 'handleChange', function (e, a) {
              ;(e !== t.state.inView || e) &&
                t.setState({ inView: e, entry: a }),
                t.props.onChange && t.props.onChange(e, a)
            }),
            t
          )
        }
        ;(a = e),
          ((t = r).prototype = Object.create(a.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = a)
        var o = r.prototype
        return (
          (o.componentDidMount = function () {
            this.node || i(!1)
          }),
          (o.componentDidUpdate = function (e, t) {
            ;(e.rootMargin === this.props.rootMargin &&
              e.root === this.props.root &&
              e.threshold === this.props.threshold) ||
              (g(this.node), this.observeNode()),
              t.inView !== this.state.inView &&
                this.state.inView &&
                this.props.triggerOnce &&
                (g(this.node), (this.node = null))
          }),
          (o.componentWillUnmount = function () {
            this.node && (g(this.node), (this.node = null))
          }),
          (o.observeNode = function () {
            if (this.node) {
              var e = this.props,
                t = e.threshold,
                a = e.root,
                n = e.rootMargin
              p(this.node, this.handleChange, {
                threshold: t,
                root: a,
                rootMargin: n,
              })
            }
          }),
          (o.render = function () {
            var e = this.state,
              t = e.inView,
              a = e.entry
            if (
              !(function (e) {
                return 'function' != typeof e.children
              })(this.props)
            )
              return this.props.children({
                inView: t,
                entry: a,
                ref: this.handleNode,
              })
            var r = this.props,
              o = r.children,
              l = r.as,
              i = r.tag,
              m =
                (r.triggerOnce,
                r.threshold,
                r.root,
                r.rootMargin,
                r.onChange,
                (function (e, t) {
                  if (null == e) return {}
                  var a,
                    n,
                    r = {},
                    o = Object.keys(e)
                  for (n = 0; n < o.length; n++)
                    (a = o[n]), t.indexOf(a) >= 0 || (r[a] = e[a])
                  return r
                })(r, [
                  'children',
                  'as',
                  'tag',
                  'triggerOnce',
                  'threshold',
                  'root',
                  'rootMargin',
                  'onChange',
                ]))
            return Object(n.createElement)(
              l || i || 'div',
              c({ ref: this.handleNode }, m),
              o
            )
          }),
          r
        )
      })(n.Component)
      m(E, 'displayName', 'InView'),
        m(E, 'defaultProps', { threshold: 0, triggerOnce: !1 })
      var y = { inView: !1, entry: void 0 }
      var b = a('jNNy'),
        N = a('Bl7J'),
        w = a('zSWs'),
        M = (a('pJf4'), a('XNfU')),
        O = a.n(M),
        x = function (e) {
          var t = e.name,
            a = e.email,
            r = e.friendlyDate,
            o = e.iso8601Date,
            l = e.children
          return n.default.createElement(
            'div',
            { className: O.a.comment },
            n.default.createElement(
              'div',
              { className: O.a.avatar },
              n.default.createElement('img', {
                src:
                  'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
                'data-srcset':
                  'https://www.gravatar.com/avatar/' +
                  a +
                  '?d=mm&s=60 1x, https://www.gravatar.com/avatar/' +
                  a +
                  '?d=mm&s=120 2x',
                alt: '',
                className: 'lazyload',
              })
            ),
            n.default.createElement(
              'div',
              { className: O.a.main },
              n.default.createElement(
                'header',
                { className: O.a.meta },
                n.default.createElement(
                  'strong',
                  { className: O.a.name + ' "h-card"' },
                  t
                ),
                ' on',
                ' ',
                n.default.createElement('time', { dateTime: o }, r)
              ),
              n.default.createElement('div', { className: O.a.message }, l)
            )
          )
        },
        A = a('VCHy'),
        P = a.n(A),
        _ = function (e) {
          var t,
            a = e.commentsList.edges,
            r =
              a && a.length
                ? a.map(function (e) {
                    var t = e.node,
                      a = t.id,
                      r = t.frontmatter,
                      o = r.name,
                      l = r.email,
                      i = r.friendlyDate,
                      m = r.iso8601Date,
                      c = t.html
                    return n.default.createElement(
                      x,
                      {
                        key: a,
                        name: o,
                        friendlyDate: i,
                        iso8601Date: m,
                        email: l,
                      },
                      n.default.createElement('div', {
                        dangerouslySetInnerHTML: { __html: c },
                      })
                    )
                  })
                : n.default.createElement(n.default.Fragment, null)
          return n.default.createElement(
            n.default.Fragment,
            null,
            n.default.createElement(
              'h2',
              { className: P.a.title },
              (t = a.length) < 1
                ? 'No comments'
                : 1 === t
                ? '1 comment'
                : t + ' comments'
            ),
            r
          )
        },
        k = a('3CW5'),
        S = a('KYHh'),
        T = a.n(S),
        C = a('+pmV'),
        V = a.n(C),
        L = Object(n.lazy)(function () {
          return Promise.all([a.e(0), a.e(23)]).then(a.bind(null, 'TmY/'))
        }),
        I =
          ((t.default = function (e) {
            var t = e.data,
              a = e.pageContext,
              o = t.markdownRemark,
              l = o.frontmatter,
              i = l.title,
              m = l.authors,
              c = l.date,
              s = l.date_pretty,
              d = l.date_from_now,
              u = l.last_modified_at,
              f = l.last_modified_at_from_now,
              h = l.path,
              v = l.image,
              E = l.excerpt,
              M = l.tags,
              O = l.toc,
              x = l.comments,
              A = l.comments_locked,
              P = l.hide_meta,
              S = o.excerpt,
              C = o.timeToRead,
              I = o.tableOfContents,
              j = o.id,
              F = o.html,
              z = t.comments,
              R = a.next,
              W = a.previous,
              D = v ? v.childImageSharp.fixed : T.a.image,
              J = v ? 'summary_large_image' : 'summary',
              G = W && W.frontmatter.path,
              H = W && W.frontmatter.title,
              Y = R && R.frontmatter.path,
              q = R && R.frontmatter.title,
              Q = (function (e) {
                void 0 === e && (e = {})
                var t = Object(n.useRef)(),
                  a = Object(n.useState)(y),
                  r = a[0],
                  o = a[1],
                  l = Object(n.useCallback)(
                    function (a) {
                      t.current && g(t.current),
                        a &&
                          p(
                            a,
                            function (t, n) {
                              o({ inView: t, entry: n }),
                                t && e.triggerOnce && g(a)
                            },
                            e
                          ),
                        (t.current = a)
                    },
                    [e.threshold, e.root, e.rootMargin, e.triggerOnce]
                  )
                return (
                  Object(n.useEffect)(function () {
                    t.current || r === y || e.triggerOnce || o(y)
                  }),
                  [l, r.inView, r.entry]
                )
              })({ triggerOnce: !0 }),
              B = Q[0],
              K = Q[1]
            return n.default.createElement(
              N.a,
              null,
              n.default.createElement(b.a, {
                title: i + ' - ' + T.a.titleAlt,
                path: h,
                datePublished: c,
                dateModified: u,
                description: E || S,
                metaImage: D,
                twitterCardType: J,
                article: !0,
              }),
              n.default.createElement(
                'main',
                { id: 'main' },
                n.default.createElement(w.a, {
                  key: j,
                  title: i,
                  authors: m,
                  hideMeta: P,
                  datePublished: c,
                  dateModified: u,
                  datePretty: s,
                  dateFromNow: d,
                  dateModifiedFromNow: f,
                  path: h,
                  author: T.a.author,
                  timeToRead: C,
                  toc: O,
                  tableOfContents: I,
                  image: v,
                  html: F,
                  tags: M,
                  previousPost: W,
                  nextPost: R,
                }),
                n.default.createElement(
                  'section',
                  { className: V.a.comments },
                  x &&
                    n.default.createElement(
                      n.default.Fragment,
                      null,
                      z && n.default.createElement(_, { commentsList: z }),
                      A
                        ? n.default.createElement(
                            'div',
                            { className: 'custom-block notice' },
                            n.default.createElement(
                              'div',
                              { className: 'custom-block-heading' },
                              'Comments are closed'
                            ),
                            n.default.createElement(
                              'div',
                              { className: 'custom-block-body' },
                              'If you have a question concerning the content of this page, please feel free to ',
                              n.default.createElement(
                                r.Link,
                                { to: '/contact/' },
                                'contact me'
                              ),
                              '.'
                            )
                          )
                        : n.default.createElement(
                            'div',
                            { ref: B },
                            K &&
                              n.default.createElement(
                                n.Suspense,
                                {
                                  fallback: n.default.createElement(
                                    'div',
                                    null,
                                    'Loading...'
                                  ),
                                },
                                n.default.createElement(L, { slug: h })
                              )
                          )
                    )
                )
              ),
              n.default.createElement(k.a, {
                previousPath: G,
                previousLabel: H,
                nextPath: Y,
                nextLabel: q,
              })
            )
          }),
          '4115255101')
    },
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
    VCHy: function (e, t, a) {
      e.exports = {
        title: 'comments-list-module--title--1tntP',
        customMedia: {},
        customProperties: {},
        customSelectors: {},
      }
    },
    XNfU: function (e, t, a) {
      e.exports = {
        comment: 'comment-module--comment--97_CJ',
        avatar: 'comment-module--avatar--2IepZ',
        main: 'comment-module--main--1E3c6',
        meta: 'comment-module--meta--3GQ6j',
        message: 'comment-module--message--2jsZt',
        customMedia: {},
        customProperties: {},
        customSelectors: {},
      }
    },
    zSWs: function (e, t, a) {
      'use strict'
      a('pJf4')
      var n = a('FdF9'),
        r = a('Wbzz'),
        o = a('9eSz'),
        l = a.n(o),
        i = a('Ercv'),
        m = a.n(i),
        c = a('zvvp')
      t.a = function (e) {
        var t = e.title,
          a = e.authors,
          o = e.hideMeta,
          i = e.datePublished,
          s = e.dateModified,
          d = e.dateFromNow,
          u = e.dateModifiedFromNow,
          f = e.image,
          h = e.author,
          p = e.timeToRead,
          g = e.toc,
          v = e.tableOfContents,
          E = e.tags,
          y = e.html
        return n.default.createElement(
          'article',
          { className: m.a.document + ' h-entry' },
          n.default.createElement(
            'div',
            { className: m.a.title },
            n.default.createElement(
              'h1',
              { className: m.a.heading + ' p-name' },
              t
            ),
            n.default.createElement(
              'div',
              { className: m.a.meta },
              a
                ? n.default.createElement(
                    'div',
                    { className: m.a.authors },
                    a.map(function (e) {
                      return n.default.createElement(
                        r.Link,
                        {
                          className: m.a.author,
                          to: '/author/' + c.slugify(e.id) + '/',
                          key: c.slugify(e.id),
                        },
                        n.default.createElement('span', null, e.name)
                      )
                    })
                  )
                : null,
              n.default.createElement(
                'div',
                { style: { display: o && 'none' } },
                n.default.createElement(
                  'span',
                  null,
                  h &&
                    n.default.createElement(
                      n.default.Fragment,
                      null,
                      s ? 'Updated' : 'Published',
                      ' ',
                      n.default.createElement(
                        'span',
                        { style: { display: 'none' } },
                        'by',
                        ' ',
                        n.default.createElement(
                          'a',
                          { className: 'p-author h-card', href: h.url },
                          h.name
                        )
                      )
                    ),
                  i &&
                    n.default.createElement(
                      'span',
                      { style: { display: s && 'none' } },
                      ' ',
                      n.default.createElement(
                        'time',
                        { className: 'dt-published', dateTime: i },
                        d
                      )
                    ),
                  s &&
                    n.default.createElement(
                      n.default.Fragment,
                      null,
                      ' ',
                      n.default.createElement(
                        'time',
                        { className: 'dt-updated', dateTime: s },
                        u
                      )
                    )
                ),
                p &&
                  n.default.createElement(
                    n.default.Fragment,
                    null,
                    ' ',
                    n.default.createElement(
                      'span',
                      { className: m.a.readTime },
                      p,
                      ' min read'
                    )
                  )
              ),
              E
                ? n.default.createElement(
                    'div',
                    { className: m.a.tags },
                    E.map(function (e) {
                      return n.default.createElement(
                        r.Link,
                        {
                          className: m.a.tag,
                          to: '/tag/' + c.slugify(e) + '/',
                          key: c.slugify(e),
                        },
                        n.default.createElement('span', null, '#', e)
                      )
                    })
                  )
                : null
            )
          ),
          f &&
            n.default.createElement(l.a, {
              fluid: f.childImageSharp.fluid,
              className: m.a.cover,
              backgroundColor: 'var(--input-background-color)',
            }),
          g &&
            n.default.createElement(
              'details',
              { className: m.a.tocWrap },
              n.default.createElement(
                'summary',
                { className: m.a.tocTitle },
                'Table of contents'
              ),
              n.default.createElement('div', {
                className: m.a.toc,
                dangerouslySetInnerHTML: { __html: v },
              })
            ),
          n.default.createElement('div', {
            className: m.a.content + ' e-content',
            dangerouslySetInnerHTML: { __html: y },
          })
        )
      }
    },
  },
])
//# sourceMappingURL=component---src-templates-post-js-aa3acdc30d12a82a1b7a.js.map
