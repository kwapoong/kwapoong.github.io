;(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    '4Eig': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'pageQuery', function () {
          return h
        })
      n('zGcK'), n('pJf4')
      var i = n('Wbzz'),
        a = n('FdF9'),
        r = n('Bl7J'),
        u = n('jNNy'),
        o = n('KYHh'),
        l = n.n(o),
        c = n('5LqB'),
        s = n.n(c),
        d = n('zvvp'),
        f = l.a.image,
        h = '542101781'
      t.default = function (e) {
        var t,
          n = e.data,
          o = n.allAuthorYaml.nodes,
          c = n.allMarkdownRemark.group,
          h = o.reduce(function (e, t) {
            return (e[t.id] = t.name), e
          }, {})
        return (
          console.log(h),
          a.default.createElement(
            r.a,
            null,
            a.default.createElement(u.a, {
              title: 'All Authors | ' + l.a.titleAlt,
              path: '/author/',
              description: 'An archive of posts organized by author.',
              metaImage: f,
            }),
            a.default.createElement(
              'main',
              { id: 'main', className: s.a.main },
              a.default.createElement(
                'div',
                { className: s.a.title },
                a.default.createElement(
                  'h1',
                  { className: s.a.heading },
                  a.default.createElement('span', null, 'All authors')
                )
              ),
              a.default.createElement(
                'div',
                { className: s.a.content },
                a.default.createElement(
                  'h2',
                  { className: s.a.subHeading },
                  a.default.createElement('span', null, 'Browse by author')
                ),
                a.default.createElement(
                  'div',
                  { className: s.a.columnList },
                  a.default.createElement(
                    'ul',
                    null,
                    c
                      .sort(
                        ((t = 'fieldValue'),
                        function (e, n) {
                          return e[t].toLowerCase() == n[t].toLowerCase()
                            ? 0
                            : e[t].toLowerCase() < n[t].toLowerCase()
                            ? -1
                            : 1
                        })
                      )
                      .map(function (e) {
                        var t = h[e.fieldValue],
                          n = t || e.fieldValue
                        return a.default.createElement(
                          'li',
                          { key: e.fieldValue },
                          a.default.createElement(
                            i.Link,
                            { to: '/author/' + d.slugify(e.fieldValue) + '/' },
                            a.default.createElement('strong', null, n),
                            ' ',
                            a.default.createElement(
                              'span',
                              { className: s.a.count },
                              e.totalCount
                            )
                          )
                        )
                      })
                  )
                )
              )
            )
          )
        )
      }
    },
    '5LqB': function (e, t, n) {
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
    SGlo: function (e, t, n) {
      'use strict'
      var i = n('rj/q'),
        a = n('N+BI').getWeak,
        r = n('1a8y'),
        u = n('BjK0'),
        o = n('xa9o'),
        l = n('yde8'),
        c = n('Wadk'),
        s = n('qDzq'),
        d = n('O1i0'),
        f = c(5),
        h = c(6),
        m = 0,
        v = function (e) {
          return e._l || (e._l = new p())
        },
        p = function () {
          this.a = []
        },
        g = function (e, t) {
          return f(e.a, function (e) {
            return e[0] === t
          })
        }
      ;(p.prototype = {
        get: function (e) {
          var t = g(this, e)
          if (t) return t[1]
        },
        has: function (e) {
          return !!g(this, e)
        },
        set: function (e, t) {
          var n = g(this, e)
          n ? (n[1] = t) : this.a.push([e, t])
        },
        delete: function (e) {
          var t = h(this.a, function (t) {
            return t[0] === e
          })
          return ~t && this.a.splice(t, 1), !!~t
        },
      }),
        (e.exports = {
          getConstructor: function (e, t, n, r) {
            var c = e(function (e, i) {
              o(e, c, t, '_i'),
                (e._t = t),
                (e._i = m++),
                (e._l = void 0),
                null != i && l(i, n, e[r], e)
            })
            return (
              i(c.prototype, {
                delete: function (e) {
                  if (!u(e)) return !1
                  var n = a(e)
                  return !0 === n
                    ? v(d(this, t)).delete(e)
                    : n && s(n, this._i) && delete n[this._i]
                },
                has: function (e) {
                  if (!u(e)) return !1
                  var n = a(e)
                  return !0 === n ? v(d(this, t)).has(e) : n && s(n, this._i)
                },
              }),
              c
            )
          },
          def: function (e, t, n) {
            var i = a(r(t), !0)
            return !0 === i ? v(e).set(t, n) : (i[e._i] = n), e
          },
          ufstore: v,
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
    eMsz: function (e, t, n) {
      'use strict'
      var i,
        a = n('emib'),
        r = n('Wadk')(0),
        u = n('IYdN'),
        o = n('N+BI'),
        l = n('k5Iv'),
        c = n('SGlo'),
        s = n('BjK0'),
        d = n('O1i0'),
        f = n('O1i0'),
        h = !a.ActiveXObject && 'ActiveXObject' in a,
        m = o.getWeak,
        v = Object.isExtensible,
        p = c.ufstore,
        g = function (e) {
          return function () {
            return e(this, arguments.length > 0 ? arguments[0] : void 0)
          }
        },
        E = {
          get: function (e) {
            if (s(e)) {
              var t = m(e)
              return !0 === t
                ? p(d(this, 'WeakMap')).get(e)
                : t
                ? t[this._i]
                : void 0
            }
          },
          set: function (e, t) {
            return c.def(d(this, 'WeakMap'), e, t)
          },
        },
        b = (e.exports = n('94Pd')('WeakMap', g, E, c, !0, !0))
      f &&
        h &&
        (l((i = c.getConstructor(g, 'WeakMap')).prototype, E),
        (o.NEED = !0),
        r(['delete', 'has', 'get', 'set'], function (e) {
          var t = b.prototype,
            n = t[e]
          u(t, e, function (t, a) {
            if (s(t) && !v(t)) {
              this._f || (this._f = new i())
              var r = this._f[e](t, a)
              return 'set' == e ? this : r
            }
            return n.call(this, t, a)
          })
        }))
    },
    zTTH: function (e, t, n) {
      'use strict'
      var i = n('P8UN'),
        a = n('Wadk')(6),
        r = 'findIndex',
        u = !0
      r in [] &&
        Array(1)[r](function () {
          u = !1
        }),
        i(i.P + i.F * u, 'Array', {
          findIndex: function (e) {
            return a(this, e, arguments.length > 1 ? arguments[1] : void 0)
          },
        }),
        n('Dq1/')(r)
    },
  },
])
//# sourceMappingURL=component---src-pages-author-js-3a523168b314f35754a4.js.map
