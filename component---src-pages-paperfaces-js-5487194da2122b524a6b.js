;(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    YpD0: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'pageQuery', function () {
          return g
        })
      var o = a('FdF9'),
        n = a('pQUg'),
        r = a.n(n),
        s = a('9eSz'),
        i = a.n(s),
        l = a('Wbzz'),
        d = a('jNNy'),
        c = a('Bl7J'),
        u = a('KYHh'),
        p = a.n(u),
        m = a('Ercv'),
        f = a.n(m)
      var h = p.a.image
      'undefined' != typeof window && (window.postsToShow = 20)
      var w = (function (e) {
          var t, a
          function n() {
            var t
            ;(t = e.call(this) || this).handleScroll = function () {
              t.ticking ||
                ((t.ticking = !0),
                requestAnimationFrame(function () {
                  return t.update()
                }))
            }
            var a = 20
            return (
              'undefined' != typeof window && (a = window.postsToShow),
              (t.state = { showingMore: a > 20, postsToShow: a }),
              t
            )
          }
          ;(a = e),
            ((t = n).prototype = Object.create(a.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = a)
          var s = n.prototype
          return (
            (s.componentDidMount = function () {
              window.addEventListener('scroll', this.handleScroll)
            }),
            (s.componentWillUnmount = function () {
              window.removeEventListener('scroll', this.handleScroll),
                (window.postsToShow = this.state.postsToShow)
            }),
            (s.update = function () {
              var e =
                document.documentElement.offsetHeight -
                (window.pageYOffset + window.innerHeight)
              this.state.showingMore &&
                e < 100 &&
                this.setState(function (e) {
                  return { postsToShow: e.postsToShow + 20 }
                }),
                (this.ticking = !1)
            }),
            (s.render = function () {
              var e = this,
                t = this.props.data.allMarkdownRemark.edges.map(function (e) {
                  return e.node
                }),
                a = this.props.data.allMarkdownRemark.edges.length
              return o.default.createElement(
                c.a,
                null,
                o.default.createElement(d.a, {
                  title: 'PaperFaces iPad project - ' + p.a.title,
                  path: '/paperfaces/',
                  description:
                    'PaperFaces portraits painted digitally with Paper for iOS on an iPad. Find time lapse videos, in-process screenshots, and more.',
                  metaImage: h,
                }),
                o.default.createElement(
                  'main',
                  { id: 'main', className: f.a.document },
                  o.default.createElement(
                    'div',
                    { className: f.a.title },
                    o.default.createElement(
                      'h1',
                      { className: f.a.heading },
                      o.default.createElement(
                        'span',
                        null,
                        'PaperFaces iPad project'
                      )
                    )
                  ),
                  this.props.data.file.childImageSharp.fluid &&
                    o.default.createElement(i.a, {
                      fluid: this.props.data.file.childImageSharp.fluid,
                      className: f.a.cover,
                      backgroundColor: 'var(--input-background-color)',
                    }),
                  o.default.createElement(
                    'div',
                    { className: f.a.content },
                    o.default.createElement(
                      'p',
                      null,
                      'PaperFaces was an illustration project by designer Michael Rose — hey that’s me! For two years I drew the faces of strangers everyday using an iPad, a stylus, and',
                      ' ',
                      o.default.createElement('strong', null, 'Paper for iOS'),
                      '. I occasionally post new portraits here, but certainly not as frequently as I used to.'
                    ),
                    o.default.createElement(
                      'p',
                      null,
                      'If you scroll down far enough you can see how my technique evolved from faceless gestures into realistic portraits.'
                    )
                  ),
                  o.default.createElement(
                    'div',
                    { className: f.a.gallery },
                    o.default.createElement(
                      r.a,
                      { className: f.a.grid },
                      t.slice(0, this.state.postsToShow).map(function (e) {
                        var t = e.frontmatter.thumbnail
                          ? e.frontmatter.thumbnail
                          : e.frontmatter.image
                        return o.default.createElement(
                          'div',
                          { key: e.id, className: f.a.gridItem },
                          o.default.createElement(
                            l.Link,
                            { to: e.frontmatter.path },
                            o.default.createElement(i.a, {
                              fluid: t.childImageSharp.fluid,
                              backgroundColor: 'var(--input-background-color)',
                            })
                          )
                        )
                      })
                    ),
                    a <= this.postsToShow ||
                      (!this.state.showingMore &&
                        o.default.createElement(
                          'button',
                          {
                            type: 'button',
                            'data-testid': 'load-more',
                            className: f.a.loadMore,
                            onClick: function () {
                              e.setState({
                                postsToShow: e.state.postsToShow + 20,
                                showingMore: !0,
                              })
                            },
                          },
                          'Load more'
                        ))
                  )
                )
              )
            }),
            n
          )
        })(o.default.Component),
        g = '1382963152'
      t.default = w
    },
  },
])
//# sourceMappingURL=component---src-pages-paperfaces-js-5487194da2122b524a6b.js.map
