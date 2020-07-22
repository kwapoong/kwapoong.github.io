;(window.webpackJsonp = window.webpackJsonp || []).push([
  [12],
  {
    pbld: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'pageQuery', function () {
          return g
        })
      var n = a('FdF9'),
        o = a('pQUg'),
        r = a.n(o),
        i = a('9eSz'),
        l = a.n(i),
        s = a('Wbzz'),
        d = a('jNNy'),
        c = a('Bl7J'),
        u = a('KYHh'),
        p = a.n(u),
        m = a('Ercv'),
        h = a.n(m)
      var f = p.a.image
      'undefined' != typeof window && (window.postsToShow = 20)
      var w = (function (e) {
          var t, a
          function o() {
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
            ((t = o).prototype = Object.create(a.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = a)
          var i = o.prototype
          return (
            (i.componentDidMount = function () {
              window.addEventListener('scroll', this.handleScroll)
            }),
            (i.componentWillUnmount = function () {
              window.removeEventListener('scroll', this.handleScroll),
                (window.postsToShow = this.state.postsToShow)
            }),
            (i.update = function () {
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
            (i.render = function () {
              var e = this,
                t = this.props.data.allMarkdownRemark.edges.map(function (e) {
                  return e.node
                }),
                a = this.props.data.allMarkdownRemark.edges.length
              return n.default.createElement(
                c.a,
                null,
                n.default.createElement(d.a, {
                  title: 'Procreate iPad paintings - ' + p.a.title,
                  path: '/procreate-paintings/',
                  description:
                    'Gallery of digital paintings created with Procreate on an iPad. Find time lapse videos, in-process screenshots, and more.',
                  metaImage: f,
                }),
                n.default.createElement(
                  'main',
                  { id: 'main', className: h.a.document },
                  n.default.createElement(
                    'div',
                    { className: h.a.title },
                    n.default.createElement(
                      'h1',
                      { className: h.a.heading },
                      n.default.createElement(
                        'span',
                        null,
                        n.default.createElement(
                          'span',
                          null,
                          'Procreate iPad paintings'
                        )
                      )
                    )
                  ),
                  this.props.data.file.childImageSharp.fluid &&
                    n.default.createElement(l.a, {
                      fluid: this.props.data.file.childImageSharp.fluid,
                      className: h.a.cover,
                      backgroundColor: 'var(--input-background-color)',
                    }),
                  n.default.createElement(
                    'div',
                    { className: h.a.content },
                    n.default.createElement(
                      'p',
                      null,
                      'Digital paintings created on an iPad using the iOS app',
                      ' ',
                      n.default.createElement(
                        'a',
                        { href: 'http://procreate.si/' },
                        n.default.createElement('strong', null, 'Procreate'),
                        ' by Savage Interactive'
                      ),
                      '.'
                    )
                  ),
                  n.default.createElement(
                    'div',
                    { className: h.a.gallery },
                    n.default.createElement(
                      r.a,
                      { className: h.a.grid },
                      t.slice(0, this.state.postsToShow).map(function (e) {
                        var t = e.frontmatter.thumbnail
                          ? e.frontmatter.thumbnail
                          : e.frontmatter.image
                        return n.default.createElement(
                          'div',
                          { key: e.id, className: h.a.gridItem },
                          n.default.createElement(
                            s.Link,
                            { to: e.frontmatter.path },
                            n.default.createElement(l.a, {
                              fluid: t.childImageSharp.fluid,
                              backgroundColor: 'var(--input-background-color)',
                            })
                          )
                        )
                      })
                    ),
                    a <= this.postsToShow ||
                      (!this.state.showingMore &&
                        n.default.createElement(
                          'button',
                          {
                            type: 'button',
                            'data-testid': 'load-more',
                            className: h.a.loadMore,
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
            o
          )
        })(n.default.Component),
        g = '2120815817'
      t.default = w
    },
  },
])
//# sourceMappingURL=component---src-pages-procreate-paintings-js-5dcde8fef920f1d207ae.js.map
