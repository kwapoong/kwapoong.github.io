;(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    '3nLz': function (e, t, i) {
      'use strict'
      i('t+fG')('fixed', function (e) {
        return function () {
          return e(this, 'tt', '', '')
        }
      })
    },
    '9eSz': function (e, t, i) {
      'use strict'
      i('rzGZ'),
        i('Dq+y'),
        i('8npG'),
        i('YbXK'),
        i('eMsz'),
        i('zTTH'),
        i('3nLz')
      var a = i('TqRt')
      ;(t.__esModule = !0), (t.default = void 0)
      var r,
        n = a(i('PJYZ')),
        s = a(i('VbXa')),
        d = a(i('8OQS')),
        o = a(i('pVnL')),
        l = a(i('FdF9')),
        u = a(i('17x9')),
        f = function (e) {
          var t = (0, o.default)({}, e),
            i = t.resolutions,
            a = t.sizes,
            r = t.critical
          return (
            i && ((t.fixed = i), delete t.resolutions),
            a && ((t.fluid = a), delete t.sizes),
            r && (t.loading = 'eager'),
            t.fluid && (t.fluid = E([].concat(t.fluid))),
            t.fixed && (t.fixed = E([].concat(t.fixed))),
            t
          )
        },
        c = function (e) {
          var t = e.media
          return !!t && y && !!window.matchMedia(t).matches
        },
        p = function (e) {
          var t = e.fluid,
            i = e.fixed
          return h(t || i).src
        },
        h = function (e) {
          if (
            y &&
            (function (e) {
              return (
                !!e &&
                Array.isArray(e) &&
                e.some(function (e) {
                  return void 0 !== e.media
                })
              )
            })(e)
          ) {
            var t = e.findIndex(c)
            if (-1 !== t) return e[t]
            var i = e.findIndex(function (e) {
              return void 0 === e.media
            })
            if (-1 !== i) return e[i]
          }
          return e[0]
        },
        g = Object.create({}),
        m = function (e) {
          var t = f(e),
            i = p(t)
          return g[i] || !1
        },
        b =
          'undefined' != typeof HTMLImageElement &&
          'loading' in HTMLImageElement.prototype,
        y = 'undefined' != typeof window,
        v = y && window.IntersectionObserver,
        S = new WeakMap()
      function w(e) {
        return e.map(function (e) {
          var t = e.src,
            i = e.srcSet,
            a = e.srcSetWebp,
            r = e.media,
            n = e.sizes
          return l.default.createElement(
            l.default.Fragment,
            { key: t },
            a &&
              l.default.createElement('source', {
                type: 'image/webp',
                media: r,
                srcSet: a,
                sizes: n,
              }),
            l.default.createElement('source', { media: r, srcSet: i, sizes: n })
          )
        })
      }
      function E(e) {
        var t = [],
          i = []
        return (
          e.forEach(function (e) {
            return (e.media ? t : i).push(e)
          }),
          [].concat(t, i)
        )
      }
      function L(e) {
        return e.map(function (e) {
          var t = e.src,
            i = e.media,
            a = e.tracedSVG
          return l.default.createElement('source', {
            key: t,
            media: i,
            srcSet: a,
          })
        })
      }
      function I(e) {
        return e.map(function (e) {
          var t = e.src,
            i = e.media,
            a = e.base64
          return l.default.createElement('source', {
            key: t,
            media: i,
            srcSet: a,
          })
        })
      }
      function O(e, t) {
        var i = e.srcSet,
          a = e.srcSetWebp,
          r = e.media,
          n = e.sizes
        return (
          '<source ' +
          (t ? "type='image/webp' " : '') +
          (r ? 'media="' + r + '" ' : '') +
          'srcset="' +
          (t ? a : i) +
          '" ' +
          (n ? 'sizes="' + n + '" ' : '') +
          '/>'
        )
      }
      var R = function (e, t) {
          var i =
            (void 0 === r &&
              'undefined' != typeof window &&
              window.IntersectionObserver &&
              (r = new window.IntersectionObserver(
                function (e) {
                  e.forEach(function (e) {
                    if (S.has(e.target)) {
                      var t = S.get(e.target)
                      ;(e.isIntersecting || e.intersectionRatio > 0) &&
                        (r.unobserve(e.target), S.delete(e.target), t())
                    }
                  })
                },
                { rootMargin: '200px' }
              )),
            r)
          return (
            i && (i.observe(e), S.set(e, t)),
            function () {
              i.unobserve(e), S.delete(e)
            }
          )
        },
        x = function (e) {
          var t = e.src ? 'src="' + e.src + '" ' : 'src="" ',
            i = e.sizes ? 'sizes="' + e.sizes + '" ' : '',
            a = e.srcSet ? 'srcset="' + e.srcSet + '" ' : '',
            r = e.title ? 'title="' + e.title + '" ' : '',
            n = e.alt ? 'alt="' + e.alt + '" ' : 'alt="" ',
            s = e.width ? 'width="' + e.width + '" ' : '',
            d = e.height ? 'height="' + e.height + '" ' : '',
            o = e.crossOrigin ? 'crossorigin="' + e.crossOrigin + '" ' : '',
            l = e.loading ? 'loading="' + e.loading + '" ' : '',
            u = e.draggable ? 'draggable="' + e.draggable + '" ' : ''
          return (
            '<picture>' +
            e.imageVariants
              .map(function (e) {
                return (e.srcSetWebp ? O(e, !0) : '') + O(e)
              })
              .join('') +
            '<img ' +
            l +
            s +
            d +
            i +
            a +
            t +
            n +
            r +
            o +
            u +
            'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'
          )
        },
        z = l.default.forwardRef(function (e, t) {
          var i = e.src,
            a = e.imageVariants,
            r = e.generateSources,
            n = e.spreadProps,
            s = e.ariaHidden,
            d = l.default.createElement(
              k,
              (0, o.default)({ ref: t, src: i }, n, { ariaHidden: s })
            )
          return a.length > 1
            ? l.default.createElement('picture', null, r(a), d)
            : d
        }),
        k = l.default.forwardRef(function (e, t) {
          var i = e.sizes,
            a = e.srcSet,
            r = e.src,
            n = e.style,
            s = e.onLoad,
            u = e.onError,
            f = e.loading,
            c = e.draggable,
            p = e.ariaHidden,
            h = (0, d.default)(e, [
              'sizes',
              'srcSet',
              'src',
              'style',
              'onLoad',
              'onError',
              'loading',
              'draggable',
              'ariaHidden',
            ])
          return l.default.createElement(
            'img',
            (0, o.default)(
              { 'aria-hidden': p, sizes: i, srcSet: a, src: r },
              h,
              {
                onLoad: s,
                onError: u,
                ref: t,
                loading: f,
                draggable: c,
                style: (0, o.default)(
                  {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                  },
                  n
                ),
              }
            )
          )
        })
      k.propTypes = {
        style: u.default.object,
        onError: u.default.func,
        onLoad: u.default.func,
      }
      var V = (function (e) {
        function t(t) {
          var i
          ;((i = e.call(this, t) || this).seenBefore = y && m(t)),
            (i.isCritical = 'eager' === t.loading || t.critical),
            (i.addNoScript = !(i.isCritical && !t.fadeIn)),
            (i.useIOSupport = !b && v && !i.isCritical && !i.seenBefore)
          var a = i.isCritical || (y && (b || !i.useIOSupport))
          return (
            (i.state = {
              isVisible: a,
              imgLoaded: !1,
              imgCached: !1,
              fadeIn: !i.seenBefore && t.fadeIn,
            }),
            (i.imageRef = l.default.createRef()),
            (i.placeholderRef = t.placeholderRef || l.default.createRef()),
            (i.handleImageLoaded = i.handleImageLoaded.bind((0, n.default)(i))),
            (i.handleRef = i.handleRef.bind((0, n.default)(i))),
            i
          )
        }
        ;(0, s.default)(t, e)
        var i = t.prototype
        return (
          (i.componentDidMount = function () {
            if (
              (this.state.isVisible &&
                'function' == typeof this.props.onStartLoad &&
                this.props.onStartLoad({ wasCached: m(this.props) }),
              this.isCritical)
            ) {
              var e = this.imageRef.current
              e && e.complete && this.handleImageLoaded()
            }
          }),
          (i.componentWillUnmount = function () {
            this.cleanUpListeners && this.cleanUpListeners()
          }),
          (i.handleRef = function (e) {
            var t = this
            this.useIOSupport &&
              e &&
              (this.cleanUpListeners = R(e, function () {
                var e = m(t.props)
                t.state.isVisible ||
                  'function' != typeof t.props.onStartLoad ||
                  t.props.onStartLoad({ wasCached: e }),
                  t.setState({ isVisible: !0 }, function () {
                    t.setState({
                      imgLoaded: e,
                      imgCached: !(
                        !t.imageRef.current || !t.imageRef.current.currentSrc
                      ),
                    })
                  })
              }))
          }),
          (i.handleImageLoaded = function () {
            var e, t, i
            ;(e = this.props),
              (t = f(e)),
              (i = p(t)),
              (g[i] = !0),
              this.setState({ imgLoaded: !0 }),
              this.props.onLoad && this.props.onLoad()
          }),
          (i.render = function () {
            var e = f(this.props),
              t = e.title,
              i = e.alt,
              a = e.className,
              r = e.style,
              n = void 0 === r ? {} : r,
              s = e.imgStyle,
              d = void 0 === s ? {} : s,
              u = e.placeholderStyle,
              c = void 0 === u ? {} : u,
              p = e.placeholderClassName,
              g = e.fluid,
              m = e.fixed,
              b = e.backgroundColor,
              y = e.durationFadeIn,
              v = e.Tag,
              S = e.itemProp,
              E = e.loading,
              O = e.draggable,
              R = !1 === this.state.fadeIn || this.state.imgLoaded,
              V = !0 === this.state.fadeIn && !this.state.imgCached,
              W = (0, o.default)(
                {
                  opacity: R ? 1 : 0,
                  transition: V ? 'opacity ' + y + 'ms' : 'none',
                },
                d
              ),
              P = 'boolean' == typeof b ? 'lightgray' : b,
              T = { transitionDelay: y + 'ms' },
              _ = (0, o.default)(
                (0, o.default)(
                  (0, o.default)(
                    { opacity: this.state.imgLoaded ? 0 : 1 },
                    V && T
                  ),
                  d
                ),
                c
              ),
              j = {
                title: t,
                alt: this.state.isVisible ? '' : i,
                style: _,
                className: p,
                itemProp: S,
              }
            if (g) {
              var C = g,
                H = h(g)
              return l.default.createElement(
                v,
                {
                  className: (a || '') + ' gatsby-image-wrapper',
                  style: (0, o.default)(
                    {
                      position: 'relative',
                      overflow: 'hidden',
                      maxWidth: H.maxWidth ? H.maxWidth + 'px' : null,
                      maxHeight: H.maxHeight ? H.maxHeight + 'px' : null,
                    },
                    n
                  ),
                  ref: this.handleRef,
                  key: 'fluid-' + JSON.stringify(H.srcSet),
                },
                l.default.createElement(v, {
                  'aria-hidden': !0,
                  style: {
                    width: '100%',
                    paddingBottom: 100 / H.aspectRatio + '%',
                  },
                }),
                P &&
                  l.default.createElement(v, {
                    'aria-hidden': !0,
                    title: t,
                    style: (0, o.default)(
                      {
                        backgroundColor: P,
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        opacity: this.state.imgLoaded ? 0 : 1,
                        right: 0,
                        left: 0,
                      },
                      V && T
                    ),
                  }),
                H.base64 &&
                  l.default.createElement(z, {
                    ariaHidden: !0,
                    ref: this.placeholderRef,
                    src: H.base64,
                    spreadProps: j,
                    imageVariants: C,
                    generateSources: I,
                  }),
                H.tracedSVG &&
                  l.default.createElement(z, {
                    ariaHidden: !0,
                    ref: this.placeholderRef,
                    src: H.tracedSVG,
                    spreadProps: j,
                    imageVariants: C,
                    generateSources: L,
                  }),
                this.state.isVisible &&
                  l.default.createElement(
                    'picture',
                    null,
                    w(C),
                    l.default.createElement(k, {
                      alt: i,
                      title: t,
                      sizes: H.sizes,
                      src: H.src,
                      crossOrigin: this.props.crossOrigin,
                      srcSet: H.srcSet,
                      style: W,
                      ref: this.imageRef,
                      onLoad: this.handleImageLoaded,
                      onError: this.props.onError,
                      itemProp: S,
                      loading: E,
                      draggable: O,
                    })
                  ),
                this.addNoScript &&
                  l.default.createElement('noscript', {
                    dangerouslySetInnerHTML: {
                      __html: x(
                        (0, o.default)(
                          (0, o.default)({ alt: i, title: t, loading: E }, H),
                          {},
                          { imageVariants: C }
                        )
                      ),
                    },
                  })
              )
            }
            if (m) {
              var N = m,
                M = h(m),
                q = (0, o.default)(
                  {
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'inline-block',
                    width: M.width,
                    height: M.height,
                  },
                  n
                )
              return (
                'inherit' === n.display && delete q.display,
                l.default.createElement(
                  v,
                  {
                    className: (a || '') + ' gatsby-image-wrapper',
                    style: q,
                    ref: this.handleRef,
                    key: 'fixed-' + JSON.stringify(M.srcSet),
                  },
                  P &&
                    l.default.createElement(v, {
                      'aria-hidden': !0,
                      title: t,
                      style: (0, o.default)(
                        {
                          backgroundColor: P,
                          width: M.width,
                          opacity: this.state.imgLoaded ? 0 : 1,
                          height: M.height,
                        },
                        V && T
                      ),
                    }),
                  M.base64 &&
                    l.default.createElement(z, {
                      ariaHidden: !0,
                      ref: this.placeholderRef,
                      src: M.base64,
                      spreadProps: j,
                      imageVariants: N,
                      generateSources: I,
                    }),
                  M.tracedSVG &&
                    l.default.createElement(z, {
                      ariaHidden: !0,
                      ref: this.placeholderRef,
                      src: M.tracedSVG,
                      spreadProps: j,
                      imageVariants: N,
                      generateSources: L,
                    }),
                  this.state.isVisible &&
                    l.default.createElement(
                      'picture',
                      null,
                      w(N),
                      l.default.createElement(k, {
                        alt: i,
                        title: t,
                        width: M.width,
                        height: M.height,
                        sizes: M.sizes,
                        src: M.src,
                        crossOrigin: this.props.crossOrigin,
                        srcSet: M.srcSet,
                        style: W,
                        ref: this.imageRef,
                        onLoad: this.handleImageLoaded,
                        onError: this.props.onError,
                        itemProp: S,
                        loading: E,
                        draggable: O,
                      })
                    ),
                  this.addNoScript &&
                    l.default.createElement('noscript', {
                      dangerouslySetInnerHTML: {
                        __html: x(
                          (0, o.default)(
                            (0, o.default)({ alt: i, title: t, loading: E }, M),
                            {},
                            { imageVariants: N }
                          )
                        ),
                      },
                    })
                )
              )
            }
            return null
          }),
          t
        )
      })(l.default.Component)
      V.defaultProps = {
        fadeIn: !0,
        durationFadeIn: 500,
        alt: '',
        Tag: 'div',
        loading: 'lazy',
      }
      var W = u.default.shape({
          width: u.default.number.isRequired,
          height: u.default.number.isRequired,
          src: u.default.string.isRequired,
          srcSet: u.default.string.isRequired,
          base64: u.default.string,
          tracedSVG: u.default.string,
          srcWebp: u.default.string,
          srcSetWebp: u.default.string,
          media: u.default.string,
        }),
        P = u.default.shape({
          aspectRatio: u.default.number.isRequired,
          src: u.default.string.isRequired,
          srcSet: u.default.string.isRequired,
          sizes: u.default.string.isRequired,
          base64: u.default.string,
          tracedSVG: u.default.string,
          srcWebp: u.default.string,
          srcSetWebp: u.default.string,
          media: u.default.string,
          maxWidth: u.default.number,
          maxHeight: u.default.number,
        })
      V.propTypes = {
        resolutions: W,
        sizes: P,
        fixed: u.default.oneOfType([W, u.default.arrayOf(W)]),
        fluid: u.default.oneOfType([P, u.default.arrayOf(P)]),
        fadeIn: u.default.bool,
        durationFadeIn: u.default.number,
        title: u.default.string,
        alt: u.default.string,
        className: u.default.oneOfType([u.default.string, u.default.object]),
        critical: u.default.bool,
        crossOrigin: u.default.oneOfType([u.default.string, u.default.bool]),
        style: u.default.object,
        imgStyle: u.default.object,
        placeholderStyle: u.default.object,
        placeholderClassName: u.default.string,
        backgroundColor: u.default.oneOfType([
          u.default.string,
          u.default.bool,
        ]),
        onLoad: u.default.func,
        onError: u.default.func,
        onStartLoad: u.default.func,
        Tag: u.default.string,
        itemProp: u.default.string,
        loading: u.default.oneOf(['auto', 'lazy', 'eager']),
        draggable: u.default.bool,
      }
      var T = V
      t.default = T
    },
    SGlo: function (e, t, i) {
      'use strict'
      var a = i('rj/q'),
        r = i('N+BI').getWeak,
        n = i('1a8y'),
        s = i('BjK0'),
        d = i('xa9o'),
        o = i('yde8'),
        l = i('Wadk'),
        u = i('qDzq'),
        f = i('O1i0'),
        c = l(5),
        p = l(6),
        h = 0,
        g = function (e) {
          return e._l || (e._l = new m())
        },
        m = function () {
          this.a = []
        },
        b = function (e, t) {
          return c(e.a, function (e) {
            return e[0] === t
          })
        }
      ;(m.prototype = {
        get: function (e) {
          var t = b(this, e)
          if (t) return t[1]
        },
        has: function (e) {
          return !!b(this, e)
        },
        set: function (e, t) {
          var i = b(this, e)
          i ? (i[1] = t) : this.a.push([e, t])
        },
        delete: function (e) {
          var t = p(this.a, function (t) {
            return t[0] === e
          })
          return ~t && this.a.splice(t, 1), !!~t
        },
      }),
        (e.exports = {
          getConstructor: function (e, t, i, n) {
            var l = e(function (e, a) {
              d(e, l, t, '_i'),
                (e._t = t),
                (e._i = h++),
                (e._l = void 0),
                null != a && o(a, i, e[n], e)
            })
            return (
              a(l.prototype, {
                delete: function (e) {
                  if (!s(e)) return !1
                  var i = r(e)
                  return !0 === i
                    ? g(f(this, t)).delete(e)
                    : i && u(i, this._i) && delete i[this._i]
                },
                has: function (e) {
                  if (!s(e)) return !1
                  var i = r(e)
                  return !0 === i ? g(f(this, t)).has(e) : i && u(i, this._i)
                },
              }),
              l
            )
          },
          def: function (e, t, i) {
            var a = r(n(t), !0)
            return !0 === a ? g(e).set(t, i) : (a[e._i] = i), e
          },
          ufstore: g,
        })
    },
    YuTi: function (e, t) {
      e.exports = function (e) {
        return (
          e.webpackPolyfill ||
            ((e.deprecate = function () {}),
            (e.paths = []),
            e.children || (e.children = []),
            Object.defineProperty(e, 'loaded', {
              enumerable: !0,
              get: function () {
                return e.l
              },
            }),
            Object.defineProperty(e, 'id', {
              enumerable: !0,
              get: function () {
                return e.i
              },
            }),
            (e.webpackPolyfill = 1)),
          e
        )
      }
    },
    eMsz: function (e, t, i) {
      'use strict'
      var a,
        r = i('emib'),
        n = i('Wadk')(0),
        s = i('IYdN'),
        d = i('N+BI'),
        o = i('k5Iv'),
        l = i('SGlo'),
        u = i('BjK0'),
        f = i('O1i0'),
        c = i('O1i0'),
        p = !r.ActiveXObject && 'ActiveXObject' in r,
        h = d.getWeak,
        g = Object.isExtensible,
        m = l.ufstore,
        b = function (e) {
          return function () {
            return e(this, arguments.length > 0 ? arguments[0] : void 0)
          }
        },
        y = {
          get: function (e) {
            if (u(e)) {
              var t = h(e)
              return !0 === t
                ? m(f(this, 'WeakMap')).get(e)
                : t
                ? t[this._i]
                : void 0
            }
          },
          set: function (e, t) {
            return l.def(f(this, 'WeakMap'), e, t)
          },
        },
        v = (e.exports = i('94Pd')('WeakMap', b, y, l, !0, !0))
      c &&
        p &&
        (o((a = l.getConstructor(b, 'WeakMap')).prototype, y),
        (d.NEED = !0),
        n(['delete', 'has', 'get', 'set'], function (e) {
          var t = v.prototype,
            i = t[e]
          s(t, e, function (t, r) {
            if (u(t) && !g(t)) {
              this._f || (this._f = new a())
              var n = this._f[e](t, r)
              return 'set' == e ? this : n
            }
            return i.call(this, t, r)
          })
        }))
    },
    zTTH: function (e, t, i) {
      'use strict'
      var a = i('P8UN'),
        r = i('Wadk')(6),
        n = 'findIndex',
        s = !0
      n in [] &&
        Array(1)[n](function () {
          s = !1
        }),
        a(a.P + a.F * s, 'Array', {
          findIndex: function (e) {
            return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
          },
        }),
        i('Dq1/')(n)
    },
  },
])
//# sourceMappingURL=ca78671f27f88acf7993f64b80bec989e61cdb7c-a55d8cf9f4152aca4322.js.map
