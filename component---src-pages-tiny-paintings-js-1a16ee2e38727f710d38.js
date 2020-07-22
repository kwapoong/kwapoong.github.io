;(window.webpackJsonp = window.webpackJsonp || []).push([
  [14],
  {
    iZvs: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'pageQuery', function () {
          return w
        })
      var n = a('FdF9'),
        o = a('pQUg'),
        i = a.n(o),
        r = a('9eSz'),
        l = a.n(r),
        s = a('Wbzz'),
        d = a('jNNy'),
        c = a('Bl7J'),
        u = a('KYHh'),
        p = a.n(u),
        m = a('Ercv'),
        f = a.n(m)
      var h = p.a.image
      'undefined' != typeof window && (window.postsToShow = 20)
      var g = (function (e) {
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
          var r = o.prototype
          return (
            (r.componentDidMount = function () {
              window.addEventListener('scroll', this.handleScroll)
            }),
            (r.componentWillUnmount = function () {
              window.removeEventListener('scroll', this.handleScroll),
                (window.postsToShow = this.state.postsToShow)
            }),
            (r.update = function () {
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
            (r.render = function () {
              var e = this,
                t = this.props.data.allMarkdownRemark.edges.map(function (e) {
                  return e.node
                }),
                a = this.props.data.allMarkdownRemark.edges.length
              return n.default.createElement(
                c.a,
                null,
                n.default.createElement(d.a, {
                  title: 'Tiny paintings - ' + p.a.title,
                  path: '/tiny-paintings/',
                  description:
                    'Gallery of mini watercolor portraits painted at really small sizes.',
                  metaImage: h,
                }),
                n.default.createElement(
                  'main',
                  { id: 'main', className: f.a.document },
                  n.default.createElement(
                    'div',
                    { className: f.a.title },
                    n.default.createElement(
                      'h1',
                      { className: f.a.heading },
                      n.default.createElement('span', null, 'Tiny paintings')
                    )
                  ),
                  this.props.data.file.childImageSharp.fluid &&
                    n.default.createElement(l.a, {
                      fluid: this.props.data.file.childImageSharp.fluid,
                      className: f.a.cover,
                      backgroundColor: 'var(--input-background-color)',
                    }),
                  n.default.createElement(
                    'div',
                    { className: f.a.content },
                    n.default.createElement(
                      'p',
                      null,
                      'Trying to emulate the look and feel of',
                      ' ',
                      n.default.createElement(
                        'a',
                        { href: '/paperfaces/' },
                        'watercolor on the iPad'
                      ),
                      ' has inspired me to revisit painting traditionally. I’ve gone mini in an effort to fit some painting in amongst family and work obligations.'
                    ),
                    n.default.createElement(
                      'p',
                      null,
                      'My plan was to complete a miniature 1.5″ painting a day, but the challenge of painting so small is eating up way too much time. Instead I’m going to keep things casual and let images happen as they happen.'
                    )
                  ),
                  n.default.createElement(
                    'div',
                    { className: f.a.gallery },
                    n.default.createElement(
                      i.a,
                      { className: f.a.grid },
                      t.slice(0, this.state.postsToShow).map(function (e) {
                        var t = e.frontmatter.thumbnail
                          ? e.frontmatter.thumbnail
                          : e.frontmatter.image
                        return n.default.createElement(
                          'div',
                          { key: e.id, className: f.a.gridItem },
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
            o
          )
        })(n.default.Component),
        w = '4252599589'
      t.default = g
    },
  },
])
//# sourceMappingURL=component---src-pages-tiny-paintings-js-1a16ee2e38727f710d38.js.map
