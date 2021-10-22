"use strict";
(self.webpackChunkgather_browser = self.webpackChunkgather_browser || []).push([[11], {
    92: (e,t,o)=>{
        o.d(t, {
            DPR: ()=>l,
            ZOOM_FACTOR: ()=>u,
            CANVAS_SCALE: ()=>d,
            registerCanvasZoomChangeListener: ()=>h,
            calcSmartZoomFactor: ()=>f,
            pauseResizeSmartZoom: ()=>y,
            resumeResizeSmartZoom: ()=>b
        });
        var n = o(755)
          , a = o.n(n)
          , r = o(19)
          , i = o(27)
          , s = o(65)
          , c = o(58);
        const l = window.devicePixelRatio || 1;
        let u, d;
        m(!1);
        const p = [];
        function h(e) {
            p.push(e)
        }
        function f() {
            const e = Math.max(0, window.innerWidth - i.LEFT_BAR_WIDTH - i.LEFT_BAR_NAV_WIDTH)
              , t = window.innerHeight
              , o = Math.pow(Math.sqrt(e * t / (600 * r.objectSizes * r.objectSizes)), .85)
              , n = Math.max(.8, o) * l;
            return Math.round(4 * n) / 4 / l
        }
        function m(e=!0) {
            const t = (0,
            s.getUseSmartZoom)()
              , o = (0,
            s.getManualCanvasZoom)()
              , n = t || void 0 === o ? f() : o;
            n !== u && (u = n,
            d = u * l,
            e && p.forEach((e=>e())))
        }
        let v = (0,
        s.getUseSmartZoom)()
          , g = (0,
        s.getManualCanvasZoom)();
        c.default.subscribe((()=>{
            const e = (0,
            s.getUseSmartZoom)()
              , t = (0,
            s.getManualCanvasZoom)();
            (e !== v || t !== g) && (v = e,
            g = t,
            m())
        }
        ));
        const S = a()((()=>{
            !(0,
            s.getUseSmartZoom)() || m()
        }
        ), 100, {
            trailing: !0,
            maxWait: 250
        });
        function y() {
            window.removeEventListener("resize", S)
        }
        function b() {
            window.addEventListener("resize", S)
        }
        window.addEventListener("resize", S)
    }
    ,
    72: (e,t,o)=>{
        o.d(t, {
            CanvasIds: ()=>n,
            lastRenderConfig: ()=>s,
            setLastRenderConfig: ()=>c,
            canvasDirty: ()=>l,
            setCanvasDirty: ()=>u,
            getTopCanvas: ()=>d,
            coordsToCanvasXY: ()=>p,
            mouseXYToCoords: ()=>h,
            mouseXYToXY: ()=>f,
            mouseXYToCanvasXY: ()=>m,
            xyToCoordsExact: ()=>g,
            mouseXYToObjPos: ()=>S
        });
        var n, a, r = o(19), i = o(92);
        (a = n || (n = {})).BASE = "canvas",
        a.ENTITIES = "canvas-entities",
        a.PLAYERS = "canvas-players",
        a.FOREGROUND = "canvas-foreground",
        a.PRIVATE_AREA_DARKENING = "canvas-private-areas",
        a.CONFETTI = "canvas-confetti",
        a.NAMES = "canvas-names";
        let s = null;
        function c(e) {
            s = e
        }
        let l = !1;
        function u(e=!0) {
            l = e
        }
        function d() {
            return document.getElementById(n.NAMES)
        }
        function p(e, t, o) {
            const {topX: n, topY: a} = o;
            return [e * r.objectSizes - n, t * r.objectSizes - a]
        }
        function h(e) {
            return v(f(e))
        }
        function f(e) {
            const t = d();
            if (t && s) {
                const o = t.getBoundingClientRect()
                  , {topX: n, topY: a} = s;
                return {
                    x: n + (e.x - o.left) / i.ZOOM_FACTOR,
                    y: a + (e.y - o.top) / i.ZOOM_FACTOR
                }
            }
            return {
                x: 0,
                y: 0
            }
        }
        function m(e, t) {
            const o = d();
            if (o) {
                const n = o.getBoundingClientRect();
                return [(e - n.left) / i.ZOOM_FACTOR, (t - n.top) / i.ZOOM_FACTOR]
            }
            return [0, 0]
        }
        function v(e) {
            return {
                x: Math.floor(e.x / r.objectSizes),
                y: Math.floor(e.y / r.objectSizes)
            }
        }
        function g(e) {
            return {
                x: e.x / r.objectSizes,
                y: e.y / r.objectSizes
            }
        }
        function S(e, t, o) {
            const n = d();
            if (n && s) {
                const {topX: a, topY: c} = s
                  , l = n.getBoundingClientRect()
                  , u = a + (e - l.left) / i.ZOOM_FACTOR - o.width * r.objectSizes / 2 + r.objectSizes / 2
                  , d = c + (t - l.top) / i.ZOOM_FACTOR - o.height * r.objectSizes / 2 + r.objectSizes / 2
                  , {x: p, y: h} = v({
                    x: u,
                    y: d
                });
                return [p, h, u % r.objectSizes - r.objectSizes / 2, d % r.objectSizes - r.objectSizes / 2]
            }
            return [null, null, null, null]
        }
    }
    ,
    3177: (e,t,o)=>{
        o.d(t, {
            cancelClickIndicator: ()=>n,
            setCancelClickIndicator: ()=>a
        });
        let n = !1;
        function a(e=!0) {
            n = e
        }
    }
    ,
    83: (e,t,o)=>{
        o.d(t, {
            RenderCacheStatus: ()=>n,
            IMG_LOAD_STATES: ()=>l,
            createImageIfNecessary: ()=>d,
            getImage: ()=>p,
            drawImage: ()=>h,
            drawImageIntersection: ()=>f,
            drawLine: ()=>m,
            drawEllipse: ()=>v,
            drawSpeechBubble: ()=>g,
            hasIntersection: ()=>S,
            inverseLerp: ()=>y,
            drawEmote: ()=>b
        });
        var n, a, r, i, s = o(26), c = o(19);
        (a = n || (n = {}))[a.CACHEABLE = 0] = "CACHEABLE",
        a[a.NO_CACHE = 1] = "NO_CACHE",
        (i = r || (r = {}))[i.LOADING = 0] = "LOADING",
        i[i.LOADED = 1] = "LOADED",
        i[i.ERRORED = 2] = "ERRORED";
        const l = {}
          , u = {};
        function d(e, t, o) {
            if ("localhost" !== window.location.hostname || "string" == typeof e) {
                if (!(e in l))
                    if (l[e] = 0,
                    "function" == typeof fetch && "function" == typeof createImageBitmap)
                        fetch(e).then((t=>{
                            if (!t.ok)
                                throw new Error(`Fetching image failed: ${e}`);
                            return t.blob()
                        }
                        )).then((o=>createImageBitmap(o).then((o=>{
                            l[e] = 1,
                            u[e] = o,
                            null == t || t()
                        }
                        )))).catch((t=>{
                            l[e] = 2,
                            null == o || o(),
                            console.error("Failed to load image!", e, t)
                        }
                        ));
                    else {
                        const n = new Image;
                        n.decoding = "async",
                        n.onload = ()=>{
                            l[e] = 1,
                            u[e] = n,
                            null == t || t()
                        }
                        ,
                        n.onerror = t=>{
                            l[e] = 2,
                            console.error("Failed to load image!", n.src, t),
                            null == o || o()
                        }
                        ,
                        n.src = e
                    }
            } else
                console.error("Invalid src passed to createImageIfNecessary(): ", e)
        }
        function p(e) {
            return d(e),
            u[e]
        }
        function h(e, t, o, n, a, r, i, s, c, p) {
            d(t);
            const h = u[t];
            return h ? (null != p ? e.drawImage(h, o, n, a, r, i, s, c, p) : null != r ? e.drawImage(h, o, n, a, r) : e.drawImage(h, o, n),
            0) : 2 === l[t] ? 0 : 1
        }
        function f(e, t, o, n, a, r, i, s, {x: c, y: l, w: u, h: d}, p=h) {
            const f = a + i
              , m = r + s
              , v = c + u
              , g = l + d
              , S = a > c ? a : c
              , y = r > l ? r : l
              , b = f > v ? v : f
              , T = m > g ? g : m;
            if (b <= S || T <= y)
                return 0;
            const I = b - S
              , _ = T - y;
            return p(e, t, o + S - a, n + y - r, I, _, S, y, I, _)
        }
        function m(e, t, o, n, a, r, i, s) {
            r && (e.strokeStyle = r),
            i && (e.lineWidth = i),
            s && (e.lineCap = s),
            e.beginPath(),
            e.moveTo(t, o),
            e.lineTo(n, a),
            e.stroke()
        }
        function v(e, t, o, n, a) {
            e.fillStyle = t,
            e.strokeStyle = o,
            e.lineWidth = 2,
            e.beginPath(),
            e.ellipse(n + c.objectSizes / 2, a + c.objectSizes - 9, 13, 9, 0, 0, 2 * Math.PI),
            e.fill(),
            e.stroke()
        }
        function g(e, t, o, n, a, r=8, i=6, s=3, c="TOP") {
            let l = t
              , u = o
              , d = t + l
              , p = o + u;
            return "TOP" === c && (l = -Math.round(n / 2),
            u = -a,
            d = t + l,
            p = o + u - s),
            e.beginPath(),
            e.moveTo(d + r, p),
            e.lineTo(d + n - r, p),
            e.quadraticCurveTo(d + n, p, d + n, p + r),
            e.lineTo(d + n, p + a - r),
            e.quadraticCurveTo(d + n, p + a, d + n - r, p + a),
            "TOP" === c && (e.lineTo(d + Math.round(n / 2) + Math.round(i / 2), p + a),
            e.lineTo(d + Math.round(n / 2), p + a + s),
            e.lineTo(d + Math.round(n / 2) - Math.round(i / 2), p + a)),
            e.lineTo(d + r, p + a),
            e.quadraticCurveTo(d, p + a, d, p + a - r),
            e.lineTo(d, p + r),
            e.quadraticCurveTo(d, p, d + r, p),
            e.closePath(),
            e.fillStyle = "white",
            e.fill(),
            {
                centerX: d + Math.round(n / 2),
                centerY: p + Math.round(a / 2)
            }
        }
        function S({x: e, y: t, w: o, h: n}, {x: a, y: r, w: i, h: s}) {
            return !(e + o <= a || e >= a + i || t + n <= r || t >= r + s)
        }
        function y(e, t, o) {
            return t - e == 0 ? 0 : Math.min(1, Math.max(0, (o - e) / (t - e)))
        }
        function b(e, t, o, n, a, r) {
            const {centerX: i, centerY: c} = g(e, t + n, o + a, 32, 28)
              , l = e.font
              , u = e.textAlign
              , d = e.textBaseline;
            e.font = "18px sans-serif",
            e.textAlign = "center",
            e.textBaseline = "middle",
            e.fillText(s.EMOTE_EMOJIS[r], i, c + 1),
            e.font = l,
            e.textAlign = u,
            e.textBaseline = d
        }
    }
    ,
    3175: (e,t,o)=>{
        o.d(t, {
            refreshEffects: ()=>m,
            updateAnim: ()=>v,
            updateEmote: ()=>g,
            updateAssets: ()=>S,
            updateRoute: ()=>y
        });
        var n = o(49)
          , a = o(27)
          , r = o(64)
          , i = o(19)
          , s = o(26)
          , c = o(83)
          , l = o(65);
        let u, d = [], p = null, h = {};
        const f = {};
        function m(e) {
            if (n.Maps[e].animMap) {
                let t, o;
                d = [],
                u = [];
                for (const a in n.Maps[e].animMap)
                    t = n.Maps[e].animMap[a],
                    o = t.frames.map((e=>{
                        const t = new Image;
                        return t.src = e,
                        t
                    }
                    )),
                    d.push(o),
                    u.push(0)
            }
            if (p = e,
            n.Maps[e].assetsMap) {
                h = {};
                for (const t in n.Maps[e].assetsMap) {
                    const o = new Image;
                    o.src = n.Maps[e].assetsMap[t].src,
                    h[t] = o
                }
            }
            for (const e in a.EMOTES) {
                const t = a.EMOTES[e];
                for (let e = 0; e < t.length; e++)
                    (0,
                    c.createImageIfNecessary)(t[e])
            }
        }
        function v(e, t, {topX: o, topY: a}, r) {
            if (!n.Maps[e].animMap)
                return;
            (!d || e !== p) && m(e);
            let s, c, l, h = !1;
            for (let p = 0; p < d.length; p++)
                s = d[p],
                c = n.Maps[e].animMap[p],
                (u[p] % c.frameGap == 0 || r) && (l = s[u[p] / c.frameGap | 0],
                l.complete && t.drawImage(l, i.objectSizes * c.pos[1] - o, i.objectSizes * c.pos[0] - a),
                h = !0),
                u[p] = (u[p] + 1) % (c.frameGap * s.length);
            return h
        }
        function g(e, t, o, {w: n, h: r, topX: l, topY: u}) {
            for (const d in t) {
                const p = t[d];
                if (p.direction === s.SpriteDirection.Dance1 || p.direction === s.SpriteDirection.Dance2 || p.direction === s.SpriteDirection.Dance3 || p.direction === s.SpriteDirection.Dance4) {
                    const t = a.EMOTES.heart
                      , s = p.x * i.objectSizes - l
                      , h = p.y * i.objectSizes - u;
                    if (d in f || (f[d] = 0),
                    s >= 0 && s < n && h >= 0 && h < r && (f[d] % 25 == 0 || o)) {
                        e.globalAlpha = .7;
                        try {
                            (0,
                            c.drawImage)(e, t[f[d] / 25 | 0], i.objectSizes * p.x - l, i.objectSizes * p.y - u - 40)
                        } catch (e) {
                            console.log("draw image error")
                        }
                        e.globalAlpha = 1
                    }
                    f[d] = Math.min(f[d] + 1, 25 * t.length - 1)
                } else
                    f[d] = 0
            }
        }
        function S(e, t, o, {topX: a, topY: s}, c) {
            if (!n.Maps[e].assetsMap)
                return;
            (!h || e !== p) && m(e);
            const u = (0,
            l.getCurrentEditorTool)();
            for (const l in n.Maps[e].assetsMap) {
                const d = n.Maps[e].assetsMap[l];
                u !== r.EditorTool.Delete || (0,
                i.intersectsPos)(o, d, d.width, d.height) ? t.globalAlpha = 1 : t.globalAlpha = .4,
                !!c == !!d.inFront && h[l].complete && t.drawImage(h[l], i.objectSizes * d.x - a, i.objectSizes * d.y - s, h[l].width, h[l].height)
            }
            t.globalAlpha = 1
        }
        function y(e, t, {topX: o, topY: n}, a) {
            if (t.globalAlpha = .8,
            e) {
                for (let a = 0; a < e.length - 1; a++) {
                    const r = e[a]
                      , s = e[a + 1]
                      , c = 10;
                    if (t.fillStyle = "black",
                    r.y < s.y) {
                        const e = r.x * i.objectSizes - o + (i.objectSizes - c) / 2
                          , a = (r.y + 1) * i.objectSizes - n - c;
                        t.fillRect(e, a, c, i.objectSizes)
                    } else if (s.y < r.y) {
                        const e = r.x * i.objectSizes - o + (i.objectSizes - c) / 2
                          , a = r.y * i.objectSizes - n;
                        t.fillRect(e, a, c, i.objectSizes)
                    } else if (r.x < s.x) {
                        const e = r.x * i.objectSizes - o + (i.objectSizes - c) / 2
                          , a = (r.y + 1) * i.objectSizes - n - c;
                        t.fillRect(e, a, i.objectSizes, c)
                    } else if (s.x < r.x) {
                        const e = (r.x - 1) * i.objectSizes - o + (i.objectSizes + c) / 2
                          , a = (r.y + 1) * i.objectSizes - n - c;
                        t.fillRect(e, a, i.objectSizes, c)
                    }
                }
                for (let r = 0; r < e.length - 1; r++) {
                    const s = e[r]
                      , c = e[r + 1]
                      , l = 10;
                    if (t.fillStyle = a,
                    s.y < c.y) {
                        const e = s.x * i.objectSizes - o + (i.objectSizes - l) / 2
                          , a = (s.y + 1) * i.objectSizes - n - l + 2;
                        t.fillRect(e + 2, a, l - 4, i.objectSizes)
                    } else if (c.y < s.y) {
                        const e = s.x * i.objectSizes - o + (i.objectSizes - l) / 2
                          , a = s.y * i.objectSizes - n - 2;
                        t.fillRect(e + 2, a, l - 4, i.objectSizes)
                    } else if (s.x < c.x) {
                        const e = s.x * i.objectSizes - o + (i.objectSizes - l) / 2 + 2
                          , a = (s.y + 1) * i.objectSizes - n - l;
                        t.fillRect(e, a + 2, i.objectSizes, l - 4)
                    } else if (c.x < s.x) {
                        const e = (s.x - 1) * i.objectSizes - o + (i.objectSizes + l) / 2 - 2
                          , a = (s.y + 1) * i.objectSizes - n - l;
                        t.fillRect(e, a + 2, i.objectSizes, l - 4)
                    }
                }
            }
            t.globalAlpha = 1
        }
    }
    ,
    45: (e,t,o)=>{
        o.d(t, {
            default: ()=>s
        });
        var n = o(3158)
          , a = o(17)
          , r = o(38);
        const i = a.default.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: ${({zIndex: e})=>e};
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`
          , s = ({children: e, zIndex: t=r.Layers.Modal})=>(0,
        n.jsx)(i, {
            zIndex: t
        }, e)
    }
    ,
    265: (e,t,o)=>{
        o.d(t, {
            default: ()=>s
        });
        var n = o(3158)
          , a = o(0)
          , r = o(86)
          , i = o(40);
        const s = a.memo((({kind: e})=>{
            const {spaceUserName: t} = (0,
            a.useContext)(r.UserSetupContext);
            return (0,
            n.jsx)("span", null, (()=>{
                switch (e) {
                case "userSpaceName":
                    return t || "You";
                case "roomName":
                    return (0,
                    i.getRoomNameFromPath)()
                }
            }
            )())
        }
        ))
    }
    ,
    55: (e,t,o)=>{
        o.d(t, {
            default: ()=>r
        });
        var n = o(0)
          , a = o(307);
        const r = n.memo(a.FontAwesomeIcon)
    }
    ,
    29: (e,t,o)=>{
        o.d(t, {
            default: ()=>b
        });
        var n = o(3158)
          , a = o(0)
          , r = o(1626)
          , i = o(15)
          , s = o(25)
          , c = o(16)
          , l = o(38)
          , u = o(22)
          , d = o(69)
          , p = o(100)
          , h = Object.defineProperty
          , f = Object.defineProperties
          , m = Object.getOwnPropertyDescriptors
          , v = Object.getOwnPropertySymbols
          , g = Object.prototype.hasOwnProperty
          , S = Object.prototype.propertyIsEnumerable
          , y = (e,t,o)=>t in e ? h(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: o
        }) : e[t] = o;
        const b = e=>{
            var t = e
              , {children: o, bg: h=c.COLORS.DARK2, pad: b=8, rad: T=8, onClose: I=(()=>{}
            ), className: _, closeOnClickOutside: E=!0, closeIcon: C=!1, zIndex: w=l.Layers.Modal, flexDirection: M="column", position: O="relative"} = t
              , A = ((e,t)=>{
                var o = {};
                for (var n in e)
                    g.call(e, n) && t.indexOf(n) < 0 && (o[n] = e[n]);
                if (null != e && v)
                    for (var n of v(e))
                        t.indexOf(n) < 0 && S.call(e, n) && (o[n] = e[n]);
                return o
            }
            )(t, ["children", "bg", "pad", "rad", "onClose", "className", "closeOnClickOutside", "closeIcon", "zIndex", "flexDirection", "position"]);
            const k = (0,
            a.useRef)(null)
              , P = (0,
            a.useCallback)((()=>{
                E && I()
            }
            ), [I, E]);
            return (0,
            r.default)(k, P),
            (0,
            d.default)(P),
            (0,
            n.jsx)(i.default, ((e,t)=>f(e, m(t)))(((e,t)=>{
                for (var o in t || (t = {}))
                    g.call(t, o) && y(e, o, t[o]);
                if (v)
                    for (var o of v(t))
                        S.call(t, o) && y(e, o, t[o]);
                return e
            }
            )({
                backgroundColor: h,
                display: "flex",
                flexDirection: M,
                padding: b,
                borderRadius: T,
                ref: k,
                className: _,
                zIndex: w
            }, A), {
                css: s.modalShadow,
                position: O
            }), C && (0,
            n.jsx)(i.default, {
                position: "absolute",
                top: 4 * (b || 1) + "px",
                right: 4 * (b || 1) + "px",
                onClick: I,
                cursor: "pointer",
                zIndex: w + 1
            }, (0,
            n.jsx)(u.default, {
                icon: "close",
                size: "md"
            })), (0,
            n.jsx)(p.default, null, o))
        }
    }
    ,
    73: (e,t,o)=>{
        o.d(t, {
            default: ()=>s
        });
        var n = o(3158)
          , a = o(0)
          , r = o(41)
          , i = o.n(r);
        const s = ({className: e, position: t="right", content: o, children: r, noWrap: s=!1, grow: c=!1, hoverNode: l, contentStyles: u={}, arrowStyles: d={}, textStyles: p={
            width: 150
        }, alwaysVisible: h=!1, disabled: f=!1})=>{
            const m = (0,
            a.useRef)(null)
              , [v,g] = (0,
            a.useState)(!1)
              , S = (0,
            a.useCallback)((({target: e})=>{
                const t = null != l ? l : m.current;
                t && t.contains(e) || g(!1)
            }
            ), [g, l, m]);
            return (0,
            a.useEffect)((()=>{
                const e = m.current;
                return void 0 !== l ? l && (l.onmouseenter = ()=>{
                    g(!0)
                }
                ,
                l.onmouseleave = ()=>{
                    g(!1)
                }
                ) : e && (e.onmouseenter = ()=>{
                    g(!0)
                }
                ,
                e.onmouseleave = ()=>{
                    g(!1)
                }
                ),
                ()=>{
                    l && (l.onmouseenter = ()=>{}
                    ,
                    l.onmouseleave = ()=>{}
                    ),
                    e && (e.onmouseenter = ()=>{}
                    ,
                    e.onmouseleave = ()=>{}
                    )
                }
            }
            ), [m, l, g]),
            (0,
            a.useEffect)((()=>(document.addEventListener("mouseover", S),
            ()=>{
                document.removeEventListener("mouseover", S)
            }
            )), [S]),
            (0,
            n.jsx)("div", {
                className: i()("Tooltip", e, {
                    grow: c,
                    disabled: f
                }),
                ref: m
            }, r, !f && (v || h) && (0,
            n.jsx)("div", {
                className: i()("Tooltip-content", t, {
                    noWrap: s
                }),
                style: u
            }, (0,
            n.jsx)("span", {
                className: "arrow",
                style: d
            }), (0,
            n.jsx)("div", {
                className: "Tooltip-text",
                style: p
            }, o)))
        }
    }
    ,
    54: (e,t,o)=>{
        o.d(t, {
            default: ()=>c
        });
        var n = o(32)
          , a = o(189)
          , r = o(232)
          , i = o(890);
        const s = new a.Game((function() {
            return e = this,
            t = function*() {
                return {
                    token: yield n.authTokenManager.waitForToken()
                }
            }
            ,
            new Promise(((o,n)=>{
                var a = e=>{
                    try {
                        i(t.next(e))
                    } catch (e) {
                        n(e)
                    }
                }
                  , r = e=>{
                    try {
                        i(t.throw(e))
                    } catch (e) {
                        n(e)
                    }
                }
                  , i = e=>e.done ? o(e.value) : Promise.resolve(e.value).then(a, r);
                i((t = t.apply(e, null)).next())
            }
            ));
            var e, t
        }
        ),r.onInput,i.default);
        window.game = s;
        const c = s
    }
    ,
    232: (e,t,o)=>{
        o.d(t, {
            onInput: ()=>s,
            onInputConfirmation: ()=>c,
            predictMyLocation: ()=>l,
            predictMyDirection: ()=>u
        });
        var n = o(26)
          , a = o(49);
        let r = []
          , i = 0;
        function s(e, t, o) {
            o <= i ? console.error(`Client Prediction received a client inputId ${o} that isn't > lastConfirmedInputId ${i}`) : r.push({
                dir: e,
                stopped: t,
                inputId: o
            })
        }
        function c(e) {
            if (0 !== e) {
                if (e < i)
                    return void console.error(`Client Prediction received a server inputId ${e} that is < lastConfirmedInputId ${i}`);
                i = e,
                r = r.filter((t=>t.inputId > e))
            }
        }
        function l(e, t, o) {
            var i;
            const s = null == (i = a.Maps[e.map]) ? void 0 : i.collisionMap;
            console.llog(i.collisionMap)
            return r.reduce(((r,i)=>{
                var c;
                const l = (0,
                n.positionAfterMove)(r, i.dir, i.stopped ? 0 : 1);
                for (const a in o)
                    if (a !== t && !o[a].ghost && !e.ghost && (0,
                    n.isPosEqual)(l, o[a]))
                        return r;
                const u = null == (c = s[l.y]) ? void 0 : c[l.x];
                console.log("L",l);
                console.log("R",r);
                return u === a.MapCollisionType.None || u === a.MapCollisionType.Spawn ? l : r
            }
            ), e)
        }
        function u(e) {
            return r.reduce(((e,t)=>(0,
            n.nextSpriteDirection)(e, t.dir)), e)
        }
    }
    ,
    308: (e,t,o)=>{
        o.d(t, {
            GameSpace: ()=>Z,
            GameSpaceEvent: ()=>n,
            LocateTargetType: ()=>a
        });
        var n, a, r, i, s = o(27), c = o(54), l = o(32), u = o(18), d = o(26), p = o(593), h = o(19), f = o(49), m = o(31), v = o.n(m), g = o(1615), S = o(59), y = o(40), b = o(3175), T = o(232), I = o(58), _ = o(46), E = o(30), C = o(33), w = o(61), M = o(50), O = o(36), A = o(3176), k = o(115), P = o(64), D = o(65), R = o(3177), N = o(67), x = o(34), L = o(253), j = o(72), F = o(258), U = o(890), B = Object.defineProperty, G = Object.defineProperties, V = Object.getOwnPropertyDescriptors, W = Object.getOwnPropertySymbols, K = Object.prototype.hasOwnProperty, z = Object.prototype.propertyIsEnumerable, Y = (e,t,o)=>t in e ? B(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: o
        }) : e[t] = o, H = (e,t)=>{
            for (var o in t || (t = {}))
                K.call(t, o) && Y(e, o, t[o]);
            if (W)
                for (var o of W(t))
                    z.call(t, o) && Y(e, o, t[o]);
            return e
        }
        , q = (e,t)=>G(e, V(t)), $ = (e,t,o)=>new Promise(((n,a)=>{
            var r = e=>{
                try {
                    s(o.next(e))
                } catch (e) {
                    a(e)
                }
            }
              , i = e=>{
                try {
                    s(o.throw(e))
                } catch (e) {
                    a(e)
                }
            }
              , s = e=>e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
            s((o = o.apply(e, t)).next())
        }
        ));
        (i = n || (n = {})).PlayerUsedEraseTool = "playerUsedEraseTool",
        i.ClickInteraction = "clickInteraction",
        i.MapUpdate = "mapUpdate",
        i.Ring = "ring",
        i.Move = "move",
        i.MoveToPosStarted = "moveToPosStarted",
        i.ObjectPlaced = "objectPlaced",
        i.SpaceOverwrites = "spaceOverwrites",
        (r = a || (a = {}))[r.PLAYER = 0] = "PLAYER",
        r[r.ROOM = 1] = "ROOM",
        r[r.SPAWN_POINT = 2] = "SPAWN_POINT";
        class Z extends h.GatherEventEmitter {
            constructor() {
                super(),
                this.started = !1,
                this.gameState = {},
                this.offlineGameState = {},
                this.localPlayers = [],
                this.maps = {},
                this.mapAdj = {},
                this.hintTimer = 0,
                this.ghostHintTimer = 0,
                this.stoppedTimerID = void 0,
                this.stopped = !0,
                this.followTargetID = null,
                this.moveGoal = null,
                this.moveGoalMap = "",
                this.clickMoveIntervalID = null,
                this.gameSubscriptionCleanups = [],
                this.lastMoveTime = 0,
                this.currentMoveDirection = null,
                this.reconnectTimer = void 0,
                this.forceUpdateTimer = void 0,
                this.emoteTimer = void 0,
                this.canDisplayBlockedToast = !0,
                this.onPlayerMoved = ({playerMoves: {lastInputId: e, mapId: t}},{playerId: o})=>{
                    o === this.id && ((0,
                    T.onInputConfirmation)(e),
                    t && this.mapId !== t && (this.mapId = t,
                    f.Maps[this.mapId] && this.publishEvent(n.MapUpdate, this.mapId)),
                    this.updateInteracting(),
                    void 0 !== t && this.recalculateSpotlights());
                    const a = this.getPlayerGameState();
                    !a || this.canDisplayBlockedToast && (0,
                    h.isTrapped)(a.x, a.y, this.gameState, f.Maps[this.mapId].collisionMap) && (I.default.dispatch((0,
                    E.setTransientToast)("We detect you've been trapped. Press e or respawn in Settings if you'd like to teleport out.")),
                    this.canDisplayBlockedToast = !1)
                }
                ,
                this.applyGameStateUpdate = e=>{
                    const t = this.gameState
                      , o = this.offlineGameState;
                    for (const n in e) {
                        const a = e[n];
                        if (a === d.GAME_STATE_PLAYER_DISCONNECT_SYMBOL)
                            o[n] = this.gameState[n],
                            delete t[n];
                        else if (this.gameState[n])
                            for (const e in a)
                                t[n][e] = a[e];
                        else
                            t[n] = a,
                            delete o[n]
                    }
                }
                ,
                this.updateMove = ()=>{
                    var e, t, o;
                    const n = this.getPlayerGameState()
                      , a = this.moveGoal
                      , r = this.moveGoalMap;
                    if (!n || null === a || "" === r)
                        return void this.cancelMove();
                    if ((0,
                    d.isPosEqual)(n, a) && n.map === r)
                        return void this.cancelMove();
                    let i = null;
                    r !== n.map ? (this._calcAdj(),
                    i = this.getMapTarget(n.map, r)) : i = this.moveGoal;
                    const s = (0,
                    T.predictMyLocation)(n, this.id, this.gameState);
                    this.moveRoute = (0,
                    p.findPath)(this.moveRoute, s, i, this.mapId, this.gameState, this.id, this.maps[this.mapId].portals);
                    const c = null == (e = this.moveRoute) ? void 0 : e[1];
                    if (!c)
                        return this.cancelMove(),
                        void I.default.dispatch((0,
                        E.setTransientToast)("Couldn't find a path to target!"));
                    for (const e of this.maps[this.mapId].portals)
                        r === this.mapId && (e.targetMap === this.mapId && (0,
                        d.isPosEqual)(e, a) || e.targetMap !== this.mapId && (0,
                        d.isPosEqual)(e, c)) && (this.moveGoal = {
                            x: null != (t = e.targetX) ? t : 0,
                            y: null != (o = e.targetY) ? o : 0
                        },
                        this.moveGoalMap = e.targetMap || this.mapId);
                    const l = (0,
                    h.getMoveDirection)(c, s);
                    null != l && (this.stopped = !1,
                    this.gameMove(l))
                }
                ,
                window.gameSpace = this,
                (0,
                U.setDispatchGameUpdateToGameSpace)(this.applyGameStateUpdate)
            }
            start(e, t, o) {
                var a;
                if (this.started)
                    return void console.error("Trying to start() a GameSpace that has already been started!");
                this.started = !0,
                this.id = t,
                this.room = e,
                g.datadogRum.setUser({
                    id: this.id
                }),
                c.default.datadogRumSessionId = null == (a = g.datadogRum.getInternalContext()) ? void 0 : a.session_id,
                c.default.putMetric = (e,t)=>{
                    try {
                        g.datadogRum.addAction(e, {
                            value: t
                        })
                    } catch (e) {
                        console.error("Failed to send metric with error:", e)
                    }
                }
                ,
                c.default.connect(this.room),
                this.forceUpdateTimer || (this.forceUpdateTimer = window.setInterval((()=>{
                    this.updateInteracting()
                }
                ), 3e3)),
                this.gameSubscriptionCleanups.push(c.default.subscribeToEvent("spaceOverwrites", (({spaceOverwrites: {spaceData: e}})=>{
                    let t;
                    try {
                        t = JSON.parse(e)
                    } catch (t) {
                        return void console.error(`Received invalid data from spaceOverwrites event: ${e}\n${t}`)
                    }
                    const {modMessage: o, members: a, announcements: r, disableChatPersist: i} = t;
                    a && this.onSpaceMembers(a),
                    null != o && I.default.dispatch((0,
                    N.setModMessage)(o)),
                    r && I.default.dispatch((0,
                    x.setAnnouncements)(r)),
                    I.default.dispatch((0,
                    x.updateSpaceInfoSettings)({
                        disableChatPersist: i
                    })),
                    this.publishEvent(n.SpaceOverwrites, t)
                }
                )), c.default.subscribeToEvent("playerRings", (()=>{
                    this.publishEvent(n.Ring, this.id)
                }
                )), c.default.subscribeToEvent("playerMoves", this.onPlayerMoved), c.default.subscribeToEvent("playerSpotlights", (()=>{
                    this.recalculateSpotlights()
                }
                ))),
                this.gameSubscriptionCleanups.push(c.default.subscribeToSpace(e, {
                    onMap: (e,t)=>{
                        (0,
                        f.setMap)(e, function(e) {
                            var t, o, n, a, r, i;
                            const s = {};
                            s.muteOnEntry = e.muteOnEntry || !1,
                            s.imageMap = e.backgroundImagePath,
                            s.foregroundImage = e.foregroundImagePath,
                            e.miniMapImagePath && (s.miniMap = e.miniMapImagePath),
                            s.imageDimensionsMap = [e.dimensions[0] * h.objectSizes, e.dimensions[1] * h.objectSizes],
                            s.collisionMap = [];
                            const c = L.Buffer.from(e.collisions, "base64");
                            for (let t = 0; t < e.dimensions[1]; ++t)
                                for (let o = 0; o < e.dimensions[0]; ++o) {
                                    s.collisionMap[t] || (s.collisionMap[t] = []);
                                    const n = c.readUInt8(t * e.dimensions[0] + o);
                                    0 === n && (s.collisionMap[t][o] = 0),
                                    1 === n && (s.collisionMap[t][o] = 1)
                                }
                            if (void 0 !== e.spawns) {
                                let n;
                                for (let a = 0; a < e.spawns.length; a++)
                                    n = e.spawns[a],
                                    void 0 !== (null == (o = null == (t = s.collisionMap) ? void 0 : t[n.y]) ? void 0 : o[n.x]) && (s.collisionMap[n.y][n.x] = -1)
                            }
                            if (void 0 !== e.spawn && void 0 !== (null == (a = null == (n = s.collisionMap) ? void 0 : n[e.spawn.y]) ? void 0 : a[e.spawn.x]) && (s.collisionMap[e.spawn.y][e.spawn.x] = -1),
                            void 0 !== e.portals) {
                                let t;
                                for (let o = 0; o < e.portals.length; o++)
                                    t = e.portals[o],
                                    void 0 !== (null == (i = null == (r = s.collisionMap) ? void 0 : r[t.y]) ? void 0 : i[t.x]) && (s.collisionMap[t.y][t.x] = t.targetMap + "." + t.targetX + "." + t.targetY + "." + t.direction)
                            }
                            const l = e.spawns ? e.spawns.reduce(((e,t)=>(t.spawnId && (e[t.spawnId] = e[t.spawnId] || [],
                            e[t.spawnId].push({
                                x: t.x,
                                y: t.y
                            })),
                            e)), {}) : {};
                            if (s.announcer = e.announcer,
                            s.animMap = e.animations || [],
                            s.objectsMap = e.objects || {},
                            s.assetsMap = e.assets || {},
                            s.spawnMap = l,
                            s.spacesMap = {},
                            s.characterMap = e.sprites || h.defaultCharacterNums,
                            s.tutorialTasks = e.tutorialTasks,
                            e.spaces) {
                                let t;
                                for (let o = 0; o < e.spaces.length; o++)
                                    if (t = e.spaces[o],
                                    t.y < e.dimensions[1] && t.x < e.dimensions[0]) {
                                        s.spacesMap[t.y] || (s.spacesMap[t.y] = {});
                                        let e = parseInt(t.spaceId);
                                        if (isNaN(e)) {
                                            e = 0;
                                            for (let o = 0; o < t.spaceId.length; o++)
                                                e += t.spaceId.charCodeAt(o)
                                        }
                                        s.spacesMap[t.y][t.x] = {
                                            id: t.spaceId.toString(),
                                            color: t.colored ? h.PRIVATE_AREA_COLORS[e % h.PRIVATE_AREA_COLORS.length] : null
                                        }
                                    }
                            }
                            return e.areas && (s.areas = e.areas),
                            s
                        }(t)),
                        (0,
                        j.setCanvasDirty)(),
                        (0,
                        b.refreshEffects)(e),
                        this.updateInteracting(),
                        this.mapId === e && this.publishEvent(n.MapUpdate, e),
                        this.maps[e] = t
                    }
                }));
                const r = (0,
                y.getRoomURLParams)()
                  , i = H(H({}, o), void 0 !== (null == r ? void 0 : r.x) ? r : {});
                c.default.enter(this.room, i, null == r ? void 0 : r.spawnToken)
            }
            getMoveInterval() {
                var e;
                const t = null == (e = this.gameState) ? void 0 : e[this.id];
                return (0,
                D.getIsRemoteWorkUseCase)() && (null == t ? void 0 : t.goKartId) ? s.MOVE_INTERVAL_MS * s.GO_KART_MOVE_INTERVAL_MULTIPLIER : s.MOVE_INTERVAL_MS
            }
            applyLocalGameStateUpdate(e) {
                (0,
                U.default)(e);
                for (const t in e) {
                    const o = e[t];
                    o && ("x"in o || "y"in o || "direction"in o || "map"in o) && c.default.publishEvent("playerMoves", {
                        $case: "playerMoves",
                        playerMoves: q(H({}, (0,
                        O.pick)(o, ["x", "y", "direction"])), {
                            mapId: o.map,
                            encId: 0,
                            lastInputId: 0
                        })
                    }, {
                        spaceId: (0,
                        u.getAndAssertRoomFromPath)(),
                        playerId: t
                    })
                }
            }
            destroy() {
                console.log("calling game destroy"),
                (0,
                U.setDispatchGameUpdateToGameSpace)(void 0),
                this.gameSubscriptionCleanups.forEach((e=>e())),
                c.default.exit(),
                c.default.disconnect(this.room),
                this.stop(),
                window.clearInterval(this.reconnectTimer),
                this.reconnectTimer = void 0,
                window.clearInterval(this.forceUpdateTimer),
                this.forceUpdateTimer = void 0,
                this.stoppedTimerID && clearTimeout(this.stoppedTimerID)
            }
            getCurrentPrivateArea() {
                var e, t;
                const o = this.getPlayerGameState();
                if (!o)
                    return;
                const n = f.Maps[o.map];
                if (!n)
                    return;
                const a = n.spacesMap
                  , r = null == (t = null == (e = null == a ? void 0 : a[o.y]) ? void 0 : e[o.x]) ? void 0 : t.id;
                return (0,
                D.getIsRemoteWorkUseCase)() && (0,
                u.gate)(u.GatedFeatName.LeakyPrivateSpace, this.id, this.room) && void 0 !== r && (0,
                h.spaceIsDesk)(r) && !(0,
                F.deskIsClaimed)(r) ? void 0 : r
            }
            _calcAdj() {
                const e = [this.mapId]
                  , t = {};
                for (; e.length > 0; ) {
                    const o = e.pop();
                    null != o && this.maps[o] && (t[o] = Array.from(new Set(this.maps[o].portals.filter((e=>!!e.targetMap)).map((e=>e.targetMap)))),
                    this.maps[o].portals.forEach((o=>{
                        const n = o.targetMap;
                        n && !(n in t) && e.push(n)
                    }
                    )))
                }
                this.mapAdj = t
            }
            _repeatMove(e, t) {
                clearInterval(this.moveIntervalID),
                clearTimeout(this.startMoveIntervalTimeoutID);
                const o = this.lastMoveTime + this.getMoveInterval() - Date.now();
                t === d.MoveDirection.Dance || (0,
                d.oppositeMoveDirection)(t) === this.currentMoveDirection || o <= 0 ? this._startMoveInterval(e) : this.startMoveIntervalTimeoutID = window.setTimeout((()=>{
                    this._startMoveInterval(e)
                }
                ), o)
            }
            _startMoveInterval(e) {
                e(),
                this.moveIntervalID = window.setInterval(e, this.getMoveInterval())
            }
            onArrowKeyDown(e) {
                this._repeatMove((()=>{
                    var t;
                    const o = null == (t = this.gameState) ? void 0 : t[this.id];
                    this.currentMoveDirection === e && (this.stopped = !1),
                    this.stoppedTimerID && clearTimeout(this.stoppedTimerID),
                    this.stoppedTimerID = setTimeout((()=>{
                        this.stopped = !0
                    }
                    ), s.STOP_TIMEOUT_MS);
                    const n = (0,
                    d.positionAfterMove)(o, e, this.stopped ? 0 : 1)
                      , a = (0,
                    h.hasPlayerBlock)(n.x, n.y, this.gameState);
                    if (o && a && this.id !== a) {
                        if (this.ghostHintTimer += 1,
                        this.ghostHintTimer > 4) {
                            const e = "Hold g to walk through";
                            (0,
                            E.toastSelector)(I.default.getState()) !== e && I.default.dispatch((0,
                            E.setTransientToast)(e))
                        }
                    } else
                        this.ghostHintTimer = 0;
                    (0,
                    k.contextMenuSelector)(I.default.getState()) && I.default.dispatch((0,
                    k.setContextMenu)(null)),
                    (0,
                    D.getEditorToolMouseCtrl)() && (0,
                    u.gate)(u.GatedFeatName.ClickInteractions, this.id, this.room) && I.default.dispatch((0,
                    k.setEditorToolMouseCtrl)(!1)),
                    this.gameMove(e),
                    this.lastMoveTime = Date.now(),
                    this.currentMoveDirection = e
                }
                ), e),
                this.followTargetID && this.cancelFollow(),
                this.moveGoal && this.cancelMove(),
                this.canDisplayBlockedToast = !0
            }
            gameMove(e) {
                c.default.move(e, this.stopped),
                this.publishEvent(n.Move, e, this.stopped)
            }
            dance() {
                this._repeatMove((()=>{
                    this.gameMove(d.MoveDirection.Dance),
                    this.currentMoveDirection = d.MoveDirection.Dance
                }
                ), d.MoveDirection.Dance)
            }
            setActivelySpeaking(e) {
                c.default.setActivelySpeaking(e)
            }
            setEmote(e) {
                c.default.setEmote(e),
                this.emoteTimer && (clearTimeout(this.emoteTimer),
                this.emoteTimer = void 0),
                d.TEMPORARY_EMOTES.includes(e) && (this.emoteTimer = setTimeout((()=>{
                    this.emoteTimer = void 0,
                    this.setEmote(d.Emote.None)
                }
                ), 3e3))
            }
            setWorkCondition(e) {
                c.default.setWorkCondition(e)
            }
            sendPointer(e, t, o) {
                c.default.pointer(e.toString(), t, o)
            }
            stop() {
                clearInterval(this.moveIntervalID),
                clearTimeout(this.startMoveIntervalTimeoutID),
                this.moveIntervalID = void 0,
                this.startMoveIntervalTimeoutID = void 0
            }
            setGhost(e) {
                c.default.ghost(e)
            }
            respawn() {
                c.default.respawn()
            }
            spawn(e) {
                c.default.spawn(e)
            }
            useEditorTool(e, t=!0) {
                return $(this, null, (function*() {
                    var o, a, r;
                    if ((0,
                    u.gate)(u.GatedFeatName.ClickInteractions, this.id, this.room) && t && (0,
                    k.editorToolMouseCtrlSelector)(I.default.getState()))
                        return;
                    const i = this.gameState[this.id]
                      , s = (0,
                    D.getCurrentEditorTool)()
                      , c = (0,
                    P.currUnplacedObjectSelector)(I.default.getState())
                      , d = (0,
                    D.getSnapToGrid)();
                    if (s === P.EditorTool.Asset) {
                        if (i && c) {
                            const t = c;
                            if (t) {
                                let s, c, p, m;
                                e ? d ? ({x: s, y: c} = (0,
                                j.mouseXYToCoords)(e)) : [s,c,p,m] = (0,
                                j.mouseXYToObjPos)(e.x, e.y, t) : ({drawX: s, drawY: c} = (0,
                                h.playerToEditLocation)(i.direction, i.x, i.y));
                                const g = H({
                                    x: s,
                                    y: c,
                                    offsetX: p,
                                    offsetY: m,
                                    objectPlacerId: this.id
                                }, t);
                                g.id = (null == (o = g.templateId) ? void 0 : o.replace("_", "")) + "_" + (0,
                                A.default)(),
                                (0,
                                w.emitTutorialTaskEvent)(M.TutorialTaskEvents.PLAYER_USED_BUILD_TOOL, {
                                    objectTemplateId: g.templateId,
                                    area: null == (r = null == (a = f.Maps[this.mapId]) ? void 0 : a.areas) ? void 0 : r[h.BUILD_LOBBY_AREA_ID]
                                }),
                                I.default.dispatch((0,
                                P.addRecentObjects)(t)),
                                I.default.dispatch((0,
                                P.addUnconfirmedObject)(g)),
                                (0,
                                j.setCanvasDirty)();
                                const y = yield l.authTokenManager.waitForToken()
                                  , b = yield v().post(window.location.origin + "/game/placeObject", {
                                    room: (0,
                                    u.getRoomFromPath)(),
                                    mapId: this.mapId,
                                    authToken: y,
                                    objectInfo: g
                                });
                                b && 200 === b.status ? ((0,
                                u.logMetricsEvent)(h.MetricsEventName.PLACE_OBJECT, {
                                    objectName: t._name,
                                    objectTags: t._tags,
                                    objectInteraction: S.INTERACTION_LABELS[t.type],
                                    objectColor: t.color,
                                    map: this.mapId
                                }, {
                                    [h.MetricsGroupTypes.SPACE_ID]: (0,
                                    u.getRoomFromPath)() || ""
                                }, h.MetricsEventCategory.CREATION, t._name),
                                (0,
                                u.amplitudeGroupIdentify)(h.AmplitudeGroupIdentifyOperations.SET, h.MetricsGroupTypes.SPACE_ID, (0,
                                u.getRoomFromPath)() || "", h.MetricsGroupProperties.NUM_OBJECTS, f.Maps[this.mapId].objectsMap.length),
                                this.publishEvent(n.ObjectPlaced)) : I.default.dispatch((0,
                                P.removeUnconfirmedObject)(g.id))
                            }
                        }
                    } else if (s === P.EditorTool.Delete) {
                        let o, a;
                        if (e) {
                            const t = (0,
                            j.mouseXYToXY)(e);
                            t && ({x: o, y: a} = (0,
                            j.xyToCoordsExact)(t))
                        } else
                            ({drawX: o, drawY: a} = (0,
                            h.playerToEditLocation)(i.direction, i.x, i.y));
                        const r = {
                            x: o,
                            y: a
                        }
                          , s = f.Maps[this.mapId].objectsMap || []
                          , c = (0,
                        x.spaceMemberSelector)(this.id, I.default.getState())
                          , d = (0,
                        h.getIsOnlyGeneralMember)(null == c ? void 0 : c.roles)
                          , p = (0,
                        P.unconfirmedDeletionsSelector)(I.default.getState())
                          , m = s.filter((e=>!d || e.objectPlacerId === this.id)).filter((e=>{
                            if (p.includes(e.id || ""))
                                return !1;
                            const {x: t, y: o} = (0,
                            j.xyToCoordsExact)({
                                x: e.offsetX || 0,
                                y: e.offsetY || 0
                            });
                            return (0,
                            h.intersectsPos)(r, {
                                x: e.x + t,
                                y: e.y + o
                            }, e.width, e.height)
                        }
                        ));
                        if (m.length > 0) {
                            const e = yield l.authTokenManager.waitForToken();
                            this.publishEvent(n.PlayerUsedEraseTool, {
                                objectsToErase: m,
                                endpointData: {
                                    authToken: e,
                                    room: (0,
                                    u.getRoomFromPath)() || "",
                                    mapId: this.mapId,
                                    location: {
                                        x: o,
                                        y: a
                                    }
                                },
                                keyboardCtrl: t
                            })
                        }
                    }
                }
                ))
            }
            spacePressed() {
                return $(this, null, (function*() {
                    this.useEditorTool()
                }
                ))
            }
            keyE() {
                if (!(this.id in this.gameState))
                    return;
                const e = this.gameState[this.id];
                if (this.mapId in f.Maps && (0,
                h.isTrapped)(e.x, e.y, this.gameState, f.Maps[this.mapId].collisionMap)) {
                    const t = (0,
                    h.getNearbyTeleportSquare)(e, Object.values(this.gameState), f.Maps[this.mapId].collisionMap);
                    t && this.teleport(t[0], t[1])
                }
            }
            ringUser(e) {
                this.publishEvent(n.Ring, e),
                this.chat(s.RING_CHAT_MSG, e),
                c.default.ring(e)
            }
            teleport(e, t, o=null) {
                (this.mapId || o) && c.default.teleport(o || this.mapId, e, t)
            }
            chat(e, t) {
                c.default.chat(t, this.localPlayers, this.mapId, e)
            }
            setOutfitString(e) {
                u.localPreferences.set(this.room + "/outfitString", e),
                c.default.setOutfitString(e)
            }
            setSpotlight(e, t) {
                return e in (0,
                D.getPlayerMediaMags)() && (c.default.setSpotlight(e, t),
                !0)
            }
            setPlayerRoomInfo(e) {
                !this.id || (void 0 !== e.name && c.default.setName(e.name),
                void 0 !== e.avatar && c.default.setSprite(e.avatar),
                void 0 !== e.affiliation && c.default.setAffiliation(e.affiliation),
                void 0 !== e.busy && c.default.setStatus(e.busy),
                void 0 !== e.textStatus && c.default.setTextStatus(e.textStatus),
                void 0 !== e.emojiStatus && c.default.setEmojiStatus(e.emojiStatus))
            }
            setInteracting(e) {
                var t, o;
                const n = (0,
                D.getClosestObject)();
                if (null == n || null == this.room)
                    return;
                const a = null == (o = null == (t = f.Maps[this.mapId]) ? void 0 : t.objectsMap) ? void 0 : o[n];
                if ((0,
                d.interactionOpensModal)(null == a ? void 0 : a.type) || !e) {
                    const t = !!e;
                    I.default.dispatch((0,
                    E.setInteracting)(t)),
                    (0,
                    D.getIsRemoteWorkUseCase)() && (t ? I.default.dispatch((0,
                    E.setInteractionType)(a.type)) : I.default.dispatch((0,
                    E.setInteractionType)(d.Interaction.NONE))),
                    0 === e && (0,
                    j.setCanvasDirty)(),
                    e && (0,
                    w.emitTutorialTaskEvent)(M.TutorialTaskEvents.PLAYER_INTERACTED, {
                        object: a
                    })
                }
                null != a.id && e && ((0,
                h.isGoKart)(a.id) && (0,
                u.logMetricsEvent)(h.MetricsEventName.INTERACT_WITH_OBJECT, {
                    objectName: a._name,
                    objectInteraction: S.INTERACTION_LABELS[a.type],
                    map: this.mapId
                }),
                c.default.interact(a.id))
            }
            issueArbitraryInteract(e) {
                var t, o;
                const n = (0,
                D.getClosestObject)();
                if (null == n || null == this.room)
                    return;
                const a = null == (o = null == (t = f.Maps[this.mapId]) ? void 0 : t.objectsMap) ? void 0 : o[n];
                null != a.id && c.default.interact(a.id, e)
            }
            updateInteracting() {
                var e, t;
                const o = this.gameState[this.id];
                if (!o)
                    return null;
                const n = (0,
                D.getClosestObject)();
                let a = n;
                if (o.map in f.Maps) {
                    const n = f.Maps[o.map].objectsMap;
                    let r = Number.POSITIVE_INFINITY;
                    const i = (new Date).getTime() / 1e3;
                    a = null;
                    for (const s in n) {
                        const c = n[s];
                        if (null == c ? void 0 : c.type) {
                            const n = (0,
                            h.getObjectDistance)(o, c)
                              , l = void 0 !== c.distThreshold ? c.distThreshold : h.DEFAULT_OBJECT_DISTANCE;
                            null != n && n <= r && n < l && (!(null == (e = null == c ? void 0 : c.objectExpireTime) ? void 0 : e._seconds) || i < c.objectExpireTime._seconds) && (!(null == (t = null == c ? void 0 : c.objectStartTime) ? void 0 : t._seconds) || i > c.objectStartTime._seconds) && (r = n,
                            a = parseInt(s))
                        }
                    }
                    null === a && (0,
                    D.getIsInteracting)() && (I.default.dispatch((0,
                    E.setInteracting)(!1)),
                    (0,
                    j.setCanvasDirty)())
                }
                a !== n && I.default.dispatch((0,
                _.setClosestObject)(a))
            }
            getPlayerGameState() {
                return this.id in this.gameState ? this.gameState[this.id] : null
            }
            getPlayersInRoom() {
                return this.id in this.gameState && this.mapId ? (0,
                O.pick)(this.gameState, Object.keys(this.gameState).filter((e=>this.gameState[e].map === this.mapId))) : null
            }
            getMapTarget(e, t) {
                const o = (0,
                p.getNextMap)(e, t, this.mapAdj)
                  , n = this.gameState[this.id];
                if (!o || !n)
                    return null;
                const a = o.length > 1 ? o[1] : null
                  , r = this.maps[this.mapId].portals.filter((e=>a && e.targetMap === a));
                let i = 1 / 0
                  , s = null;
                for (let e = 0; e < r.length; e++) {
                    const t = r[e]
                      , o = (0,
                    d.manhattanDistance)(t, n);
                    o < i && (i = o,
                    s = t)
                }
                return s
            }
            setMoveTo(e, t) {
                const o = this.gameState[this.id];
                !o || (this.publishEvent(n.MoveToPosStarted, e),
                null !== this.followTargetID && this.cancelFollow(),
                null !== this.clickMoveIntervalID && this.cancelMove(),
                this.moveGoal = e,
                this.moveGoalMap = t || o.map,
                null === this.clickMoveIntervalID && (this.clickMoveIntervalID = window.setInterval(this.updateMove, this.getMoveInterval())))
            }
            cancelMove() {
                null != this.clickMoveIntervalID && (window.clearInterval(this.clickMoveIntervalID),
                this.clickMoveIntervalID = null),
                this.moveGoal = null,
                this.moveRoute = null,
                (0,
                R.setCancelClickIndicator)()
            }
            setFollowTarget(e, t=!0, o) {
                this.cancelFollow(),
                this.followTargetID = e,
                this.followIntervalID = window.setInterval(this.updateFollow.bind(this, t, o), this.getMoveInterval())
            }
            updateFollow(e=!0, t) {
                var o;
                const n = this.getPlayerGameState();
                if (null == n || null === this.followTargetID)
                    return;
                const a = this.gameState[this.followTargetID];
                if (null == a)
                    return void this.cancelFollow();
                let r = null;
                if (a.map !== n.map)
                    this._calcAdj(),
                    r = this.getMapTarget(n.map, a.map);
                else {
                    const o = (0,
                    h.directionFromSpriteDirection)(a.direction)
                      , i = (0,
                    h.getLeftDirection)(o)
                      , s = (0,
                    d.positionAfterMove)(a, o, -1)
                      , c = (0,
                    d.positionAfterMove)(a, i, 1)
                      , l = (0,
                    d.positionAfterMove)(a, i, -1)
                      , u = f.Maps[this.mapId].spacesMap
                      , p = e && (0,
                    d.isPosEqual)(n, (0,
                    d.positionAfterMove)(a, o, 1))
                      , m = e=>!(0,
                    f.inSamePrivateSpace)(a, e, u) || (0,
                    h.hasBlock)(e.x, e.y, f.Maps[this.mapId].collisionMap, {});
                    if (r = a,
                    e && (m(s) ? m(c) ? m(l) || (r = l) : r = c : r = s),
                    ((0,
                    h.hasPlayerBlock)(r.x, r.y, this.gameState) && (0,
                    d.euclideanDistance)(n, a) <= 1 || (0,
                    d.euclideanDistance)(n, r) < 1) && ((0,
                    f.inSamePrivateSpace)(n, a, u) || !e) && !p)
                        return void (null == t || t())
                }
                const i = (0,
                T.predictMyLocation)(n, this.id, this.gameState);
                this.followRoute = (0,
                p.findPath)(this.followRoute, i, r, this.mapId, this.gameState, this.id, this.maps[this.mapId].portals, r && !(0,
                d.isPosEqual)(r, a) ? [a] : []);
                const s = null == (o = this.followRoute) ? void 0 : o[1];
                if (!s)
                    return;
                const c = (0,
                h.getMoveDirection)(s, i);
                null != c && (this.stopped = !1,
                this.gameMove(c))
            }
            cancelFollow() {
                this.followTargetID && window.clearInterval(this.followIntervalID),
                this.followIntervalID = void 0,
                this.followTargetID = null,
                this.followRoute = null,
                I.default.dispatch((0,
                _.setFollowingId)(null))
            }
            onSpaceMembers(e) {
                const t = Object.entries(e).map((([e,t])=>q(H({
                    id: e
                }, t), {
                    roles: (null == t ? void 0 : t.roles) ? Object.keys(t.roles) : []
                })));
                I.default.dispatch((0,
                x.setSpaceMembers)(t))
            }
            recalculateSpotlights() {
                const e = [];
                for (const t in this.gameState) {
                    const o = this.gameState[t];
                    1 === o.spotlighted && o.map === this.mapId && e.push(t)
                }
                (0,
                O.isEqual)((0,
                D.getSpotlightPlayerIds)(), e) || I.default.dispatch((0,
                C.setSpotlightPlayerIds)(e))
            }
        }
    }
    ,
    49: (e,t,o)=>{
        o.d(t, {
            MapCollisionType: ()=>n,
            Maps: ()=>p,
            setMap: ()=>f,
            addMapListener: ()=>m,
            removeMapListener: ()=>v,
            forEachPrivateSpace: ()=>g,
            hideBannersOnMap: ()=>S,
            inSamePrivateSpace: ()=>y,
            getMapWidthById: ()=>b,
            getMapWidth: ()=>T
        });
        var n, a, r = Object.defineProperty, i = Object.defineProperties, s = Object.getOwnPropertyDescriptors, c = Object.getOwnPropertySymbols, l = Object.prototype.hasOwnProperty, u = Object.prototype.propertyIsEnumerable, d = (e,t,o)=>t in e ? r(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: o
        }) : e[t] = o;
        (a = n || (n = {}))[a.None = 0] = "None",
        a[a.Collision = 1] = "Collision",
        a[a.Spawn = -1] = "Spawn";
        let p = {};
        const h = {};
        function f(e, t) {
            var o;
            p = ((e,t)=>i(e, s(t)))(((e,t)=>{
                for (var o in t || (t = {}))
                    l.call(t, o) && d(e, o, t[o]);
                if (c)
                    for (var o of c(t))
                        u.call(t, o) && d(e, o, t[o]);
                return e
            }
            )({}, p), {
                [e]: t
            }),
            window.Maps = p,
            null == (o = h[e]) || o.forEach((e=>e()))
        }
        function m(e, t) {
            h[e] || (h[e] = []),
            h[e].push(t)
        }
        function v(e, t) {
            h[e] && (h[e] = h[e].filter((e=>e !== t)))
        }
        function g(e, t) {
            const {spacesMap: o} = p[e];
            for (const e in o)
                for (const n in o[e])
                    t(Number(n), Number(e), o[e][n])
        }
        const S = e=>{
            var t;
            return !(!p[e] || !(null == (t = p[e].tutorialTasks) ? void 0 : t.autoStart))
        }
        ;
        function y(e, t, o) {
            var n, a, r, i;
            return (null == (a = null == (n = o[e.y]) ? void 0 : n[e.x]) ? void 0 : a.id) === (null == (i = null == (r = o[t.y]) ? void 0 : r[t.x]) ? void 0 : i.id)
        }
        function b(e) {
            const t = p[e];
            if (t)
                return T(t)
        }
        function T(e) {
            var t, o;
            return null != (o = null == (t = e.collisionMap[0]) ? void 0 : t.length) ? o : 9999
        }
    }
    ,
    593: (e,t,o)=>{
        o.d(t, {
            findPath: ()=>E,
            getNextMap: ()=>w
        });
        var n, a, r = o(19), i = o(3174), s = o(36), c = o(26), l = o(49), u = Object.defineProperty, d = Object.defineProperties, p = Object.getOwnPropertyDescriptors, h = Object.getOwnPropertySymbols, f = Object.prototype.hasOwnProperty, m = Object.prototype.propertyIsEnumerable, v = (e,t,o)=>t in e ? u(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: o
        }) : e[t] = o, g = (e,t)=>{
            for (var o in t || (t = {}))
                f.call(t, o) && v(e, o, t[o]);
            if (h)
                for (var o of h(t))
                    m.call(t, o) && v(e, o, t[o]);
            return e
        }
        ;
        (a = n || (n = {})).PLAYER = "Player",
        a.PRIVATE_SPACE = "Private Space",
        a.OTHER_MAP_PORTAL = "Other Map Portal",
        a.IMPASSABLE = "Impassable";
        const S = {
            [n.PLAYER]: 50,
            [n.PRIVATE_SPACE]: 10,
            [n.OTHER_MAP_PORTAL]: 1 / 0,
            [n.IMPASSABLE]: 1 / 0
        }
          , y = c.serializePosition;
        function b(e) {
            const t = e.split(" ");
            return {
                x: parseFloat(t[0]),
                y: parseFloat(t[1]),
                cost: 0
            }
        }
        const T = (e,t,o,n)=>{
            let a = o(t);
            const r = [];
            for (; a in e && e[a] !== a; ) {
                const t = n(a);
                if (!t)
                    break;
                r.push(t),
                a = e[a]
            }
            return r.push(n(a)),
            r.reverse(),
            r
        }
          , I = (e,t,o)=>o[t] && o[t][e] ? o[t][e] : null
          , _ = (e,t,o,n,a,r,c)=>{
            const l = r ? new i.default([e],r) : new i.default([e])
              , u = {
                [n(e)]: n(e)
            };
            for (; l.length > 0; ) {
                const e = l.pop();
                if (null != e) {
                    if (c ? c(e, t) : (0,
                    s.isEqual)(e, t))
                        return T(u, t, n, a);
                    {
                        const t = o(e, a(u[n(e)]));
                        if (t)
                            for (const o of t)
                                n(o)in u || (u[n(o)] = n(e),
                                l.push(o))
                    }
                }
            }
            return null
        }
          , E = (e,t,o,a,i,s,u=[],h=[])=>{
            if (!t || !o)
                return null;
            const {collisionMap: f, spacesMap: m} = l.Maps[a]
              , v = f[0].length
              , T = {}
              , E = I(t.x, t.y, m)
              , w = I(o.x, o.y, m);
            for (const e in m)
                for (const t in m[e]) {
                    const o = m[e][t];
                    if ((null == E ? void 0 : E.id) !== o.id && (null == w ? void 0 : w.id) !== o.id) {
                        const o = parseInt(t)
                          , a = parseInt(e);
                        T[(0,
                        c.coordinatesToIndex)(o, a, v)] = n.PRIVATE_SPACE
                    }
                }
            let M, O, A;
            for (const e in u)
                M = u[e],
                !(0,
                c.isPosEqual)(M, o) && M.targetMap !== a && (T[(0,
                c.positionToIndex)(M, v)] = n.OTHER_MAP_PORTAL);
            for (const e in i)
                O = i[e],
                e !== s && !(0,
                c.isPosEqual)(O, o) && !O.ghost && (T[(0,
                c.positionToIndex)(O, v)] = n.PLAYER);
            for (const e in h)
                A = h[e],
                T[(0,
                c.positionToIndex)(A, v)] = n.IMPASSABLE;
            if (e) {
                let a = !1
                  , i = null;
                for (let o = 0; o < e.length; o++) {
                    const {x: s, y: l} = e[o];
                    if ((0,
                    r.hasBlock)(s, l, f, {}) || T[(0,
                    c.positionToIndex)(e[o], v)] === n.PLAYER) {
                        a = !0;
                        break
                    }
                    (0,
                    c.isPosEqual)(t, e[o]) && (i = o)
                }
                if ((0,
                c.isPosEqual)(e[e.length - 1], o) && !a && null !== i)
                    return e.slice(i)
            }
            return _(g({
                cost: 0
            }, t), g({
                cost: 0
            }, o), ((e,t)=>((e,t,o,n,a)=>{
                const i = []
                  , s = o[0].length;
                let l, u, h = (0,
                r.getNeighbors)(e.x, e.y).map((t=>({
                    x: t.x,
                    y: t.y,
                    cost: e.cost + (S[n[(0,
                    c.positionToIndex)(t, s)]] || 1)
                })));
                h = function(e, t, o) {
                    const n = g({}, e);
                    return e.y > t.y ? n.y += 1 : e.x > t.x ? n.x += 1 : t.x > e.x ? n.x -= 1 : t.y > e.y && (n.y -= 1),
                    o.map((e=>(0,
                    c.isPosEqual)(e, n) ? ((e,t)=>d(e, p(t)))(g({}, e), {
                        cost: e.cost - .001
                    }) : e))
                }(e, t, h);
                for (const t in a)
                    l = a[t],
                    (0,
                    c.isPosEqual)(l, e) && l.targetX && l.targetY && i.push({
                        x: l.targetX,
                        y: l.targetY,
                        cost: e.cost + 1
                    });
                for (const e in h)
                    u = h[e],
                    (0,
                    r.hasBlock)(u.x, u.y, o, {}) || i.push(u);
                return i
            }
            )(e, t, f, T, u)), y, b, ((e,t)=>e.cost + C(e, o, u) - t.cost - C(t, o, u)), c.isPosEqual)
        }
        ;
        function C(e, t, o) {
            let n, a, r = !1, i = 1 / 0;
            for (const s in o)
                n = o[s],
                void 0 !== n.targetX && void 0 !== n.targetY && (a = (0,
                c.manhattanDistance)(e, n) + (0,
                c.manhattanDistance)({
                    x: n.targetX,
                    y: n.targetY
                }, t),
                i = i < a ? i : a),
                r || (r = (0,
                c.isPosEqual)(n, e));
            return r || (a = (0,
            c.manhattanDistance)(e, t),
            i = i < a ? i : a),
            i === 1 / 0 ? 0 : i
        }
        const w = (e,t,o)=>_(e, t, (e=>o[e]), (e=>e), (e=>e))
    }
    ,
    258: (e,t,o)=>{
        o.d(t, {
            updateDesksInfoDB: ()=>T,
            handleAtDesk: ()=>I,
            deskIsFree: ()=>_,
            updateClaimDeskInfo: ()=>E,
            spaceIsLeaky: ()=>C,
            countDesks: ()=>w,
            deskIsClaimed: ()=>M,
            deskIsLocked: ()=>A,
            getDeskCoordsAndMap: ()=>k
        });
        var n = o(19)
          , a = o(26)
          , r = o(27)
          , i = o(97)
          , s = o(58)
          , c = o(49)
          , l = o(31)
          , u = o.n(l)
          , d = o(18)
          , p = o(32)
          , h = o(20)
          , f = o(34)
          , m = Object.defineProperty
          , v = Object.getOwnPropertySymbols
          , g = Object.prototype.hasOwnProperty
          , S = Object.prototype.propertyIsEnumerable
          , y = (e,t,o)=>t in e ? m(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: o
        }) : e[t] = o
          , b = (e,t)=>{
            for (var o in t || (t = {}))
                g.call(t, o) && y(e, o, t[o]);
            if (v)
                for (var o of v(t))
                    S.call(t, o) && y(e, o, t[o]);
            return e
        }
        ;
        function T(e, t) {
            return ((e,t,o)=>new Promise(((t,n)=>{
                var a = e=>{
                    try {
                        i(o.next(e))
                    } catch (e) {
                        n(e)
                    }
                }
                  , r = e=>{
                    try {
                        i(o.throw(e))
                    } catch (e) {
                        n(e)
                    }
                }
                  , i = e=>e.done ? t(e.value) : Promise.resolve(e.value).then(a, r);
                i((o = o.apply(e, null)).next())
            }
            )))(this, 0, (function*() {
                const o = yield p.authTokenManager.waitForToken()
                  , n = (0,
                d.getRoomFromPath)()
                  , a = encodeURIComponent(n)
                  , r = (0,
                f.spaceMemberDeskInfoSelector)(e, s.default.getState())
                  , i = b(b({}, r), t);
                return u().post(window.location.origin + `/api/v2/spaces/${a}/users/${e}/deskInfo`, {
                    deskInfo: i
                }, {
                    headers: {
                        authorization: `Bearer ${o}`
                    }
                })
            }
            ))
        }
        function I(e, t) {
            const o = (0,
            i.atDeskSelector)(s.default.getState())
              , a = O(t);
            e && (0,
            n.spaceIsDesk)(e) && !_(e) ? o !== e && s.default.dispatch((0,
            i.setAtDesk)(e)) : o && (a && T(t, {
                locked: !1
            }),
            s.default.dispatch((0,
            i.setAtDesk)("")))
        }
        function _(e) {
            return !(0,
            i.deskToPlayerSelector)(s.default.getState())[e]
        }
        function E(e) {
            if (!e)
                return;
            const [t,o] = function(e) {
                if (!(0,
                i.numFreeDesksSelector)(s.default.getState())[e.map])
                    return [null, null];
                const t = (0,
                i.closestDeskPosSelector)(s.default.getState());
                let o = t
                  , l = null;
                const u = (0,
                n.directionFromSpriteDirection)(e.direction)
                  , d = (0,
                a.positionAfterMove)(e, u);
                if (e && e.map in c.Maps) {
                    let t = Number.POSITIVE_INFINITY;
                    (0,
                    c.forEachPrivateSpace)(e.map, ((i,s,c)=>{
                        const u = c.id;
                        if ((0,
                        n.spaceIsDesk)(u) && _(u)) {
                            const n = {
                                x: i,
                                y: s
                            };
                            if ((0,
                            a.isPosEqual)(d, n))
                                return [u, n];
                            const c = (0,
                            a.euclideanDistance)(n, e);
                            c < t && (t = c,
                            c <= r.DESK_DIST_THRESH && (l = u),
                            o = {
                                id: u,
                                position: n
                            })
                        }
                    }
                    ))
                }
                return t && (null == o ? void 0 : o.id) === t.id && (o = t),
                [l, o]
            }(e);
            (0,
            h.batch)((()=>{
                t !== (0,
                i.selectedDeskIdSelector)(s.default.getState()) && s.default.dispatch((0,
                i.setSelectedDeskId)(t)),
                o !== (0,
                i.closestDeskPosSelector)(s.default.getState()) && s.default.dispatch((0,
                i.setClosestDeskPos)(o))
            }
            ))
        }
        function C(e) {
            if (!(0,
            n.spaceIsDesk)(e))
                return !1;
            const t = (0,
            i.deskToPlayerSelector)(s.default.getState())[e];
            return !!t && !O(t)
        }
        function w(e) {
            let t = 0
              , o = 0;
            return (0,
            c.forEachPrivateSpace)(e, ((e,a,r)=>{
                (0,
                n.spaceIsDesk)(r.id) && (t++,
                _(r.id) && o++)
            }
            )),
            {
                numDesks: t,
                numFreeDesks: o
            }
        }
        function M(e) {
            return !!(0,
            i.deskToPlayerSelector)(s.default.getState())[e]
        }
        function O(e) {
            const t = (0,
            f.spaceMemberDeskInfoSelector)(e, s.default.getState());
            return !!(null == t ? void 0 : t.locked)
        }
        function A(e) {
            const t = (0,
            i.deskToPlayerSelector)(s.default.getState());
            return !!t[e] && O(t[e])
        }
        function k(e, t) {
            let o = "";
            const n = []
              , a = t ? [t, ...Object.keys(c.Maps).filter((e=>e !== t))] : Object.keys(c.Maps);
            for (const t of a)
                if ((0,
                c.forEachPrivateSpace)(t, ((a,r,i)=>{
                    i.id === e && (n.push({
                        x: a,
                        y: r
                    }),
                    o || (o = t))
                }
                )),
                o)
                    break;
            return {
                deskMap: o,
                deskCoords: n
            }
        }
    }
    ,
    362: (e,t,o)=>{
        o.d(t, {
            Rotation: ()=>r,
            interactionMetaInfo: ()=>d,
            isBaseTemplateKey: ()=>l,
            isInteractableTemplate: ()=>u
        });
        var n, a, r, i, s = o(26), c = o(50);
        function l(e) {
            return ["id", "desc", "name", "tags", "type", "variants", "sound"].some((t=>t === e))
        }
        (a = n || (n = {}))[a.Down = 0] = "Down",
        a[a.Right = 1] = "Right",
        a[a.Up = 2] = "Up",
        a[a.Left = 3] = "Left",
        (i = r || (r = {}))[i.CW = -1] = "CW",
        i[i.CCW = 1] = "CCW";
        const u = e=>e && e.distThreshold && "number" == typeof e.distThreshold
          , d = {
            [s.Interaction.NONE]: {
                displayName: "No interaction",
                icon: "userSlash",
                info: "Lorem ipsum dolor sit amet, ei eam veniam quidam phaedrum,"
            },
            [s.Interaction.POSTER]: {
                displayName: "Embedded image",
                icon: "image",
                info: "Upload image (.png, .jpeg, .gif) to display inside a Gather frame."
            },
            [s.Interaction.VIDEO]: {
                displayName: "Embedded video",
                icon: "playCircle",
                info: "Link to an embeddable video from YouTube, Twitch, or Vimeo. Works for playlists and live streams as well."
            },
            [s.Interaction.EMBEDDED_WEBSITE]: {
                displayName: "Embedded website",
                icon: "code",
                info: "Link to any embeddable website directly inside a Gather frame."
            },
            [s.Interaction.EXTERNAL_CALL]: {
                displayName: "External call",
                icon: "call",
                info: "Link to an external call (Zoom, Webex, Teams, etc.). Call will open in new window and auto-mute in Gather."
            },
            [s.Interaction.EXTENSION]: {
                displayName: "Extension object",
                icon: "info",
                info: "An object that is included in one of your activated extensions."
            },
            [s.Interaction.NOTE]: {
                displayName: "Note object",
                icon: "stickyNote",
                info: "Display lines of text or provide links for users to open in a new window.",
                tutorialTooltipId: c.TutorialTaskTooltipIds.OBJECT_PICKER_NOTE_OBJECT_BUTTON
            },
            [s.Interaction.MODAL_EXTENSION]: {
                displayName: "Extension modal",
                icon: "info",
                info: "An object that presents a displayed modal in one of your activated extensions."
            },
            [s.Interaction.COMPONENT_MODAL]: {
                displayName: "Component modal",
                icon: "info",
                info: "An object that presents a displayed modal."
            }
        }
    }
    ,
    59: (e,t,o)=>{
        o.d(t, {
            INTERACTION_LABELS: ()=>u,
            objectTemplateInfo: ()=>d,
            STARTING_OBJECTS: ()=>p,
            loadImage: ()=>h,
            mapMakerAddObjectToRecent: ()=>f,
            crawlAndReplace: ()=>m,
            uploadToStorage: ()=>v,
            getHighlightURL: ()=>g,
            Pomodoro: ()=>S,
            POMODORO_OBJECTS: ()=>b,
            RW_ONLY_UPLOAD_LOGO_OBJ: ()=>T
        });
        var n = o(31)
          , a = o.n(n)
          , r = o(253)
          , i = (o(18),
        o(19))
          , s = o(26)
          , c = o(36);
        const l = [[255, 255, 0, 255], [255, 255, 0, 230], [255, 255, 0, 200], [255, 255, 0, 150], [255, 255, 0, 100], [255, 255, 0, 50]]
          , u = {
            [s.Interaction.NONE]: "Not Interactable Object",
            [s.Interaction.EMBEDDED_WEBSITE]: "Embedded Website Object",
            [s.Interaction.POSTER]: "Poster Object",
            [s.Interaction.VIDEO]: "Video Object",
            [s.Interaction.EXTERNAL_CALL]: "External Call Object",
            [s.Interaction.NOTE]: "Note Object"
        }
          , d = {
            [s.Interaction.NONE]: {
                normal: {
                    title: "Object image",
                    type: "file",
                    required: !1,
                    isAdvanced: !0
                },
                type: {
                    title: "type",
                    required: !0
                },
                objectStartTime: {
                    title: "Display (start)",
                    type: "datetime-local",
                    required: !1,
                    isAdvanced: !0
                },
                objectExpireTime: {
                    title: "Display (end)",
                    type: "datetime-local",
                    required: !1,
                    isAdvanced: !0
                }
            },
            [s.Interaction.EMBEDDED_WEBSITE]: {
                url: {
                    title: "Website (URL)",
                    required: !0,
                    isProperty: !0,
                    placeholder: "https://gather.town"
                },
                distThreshold: {
                    title: "Activation distance",
                    type: "number",
                    required: !1
                },
                previewMessage: {
                    title: "Prompt message",
                    required: !1,
                    isProperty: !1,
                    isAdvanced: !0
                },
                deterministicUrlPrefix: {
                    title: "auto genned",
                    required: !1,
                    isProperty: !0,
                    isAdvanced: !0
                },
                normal: {
                    title: "Object image",
                    type: "file",
                    required: !1,
                    isAdvanced: !0
                },
                highlighted: {
                    title: "Active image",
                    type: "file",
                    required: !1,
                    isAdvanced: !0
                },
                loading: {
                    title: "Loading icon (URL)",
                    type: "file",
                    isProperty: !0,
                    required: !1,
                    default: "https://cdn.gather.town/v0/b/gather-town-dev.appspot.com/o/objects%2Fgather_logo_blue.png?alt=media&token=759ee0e4-90de-40d1-a117-6d03b204b072",
                    isAdvanced: !0
                },
                type: {
                    title: "type",
                    required: !0
                },
                objectStartTime: {
                    title: "Display (start)",
                    type: "datetime-local",
                    required: !1,
                    isAdvanced: !0
                },
                objectExpireTime: {
                    title: "Display (end)",
                    type: "datetime-local",
                    required: !1,
                    isAdvanced: !0
                }
            },
            [s.Interaction.POSTER]: {
                image: {
                    title: "Image",
                    type: "file",
                    showUploadButton: !0,
                    required: !0,
                    isProperty: !0
                },
                preview: {
                    title: "Preview image",
                    type: "file",
                    showUploadButton: !0,
                    required: !0,
                    isProperty: !0
                },
                distThreshold: {
                    title: "Activation distance",
                    type: "number",
                    required: !1
                },
                previewMessage: {
                    title: "Prompt message",
                    required: !1,
                    isProperty: !1,
                    isAdvanced: !0
                },
                normal: {
                    title: "Object image",
                    type: "file",
                    required: !1,
                    isAdvanced: !0
                },
                highlighted: {
                    title: "Active image",
                    type: "file",
                    required: !1,
                    isAdvanced: !0
                },
                blurb: {
                    title: "Caption",
                    required: !1,
                    isProperty: !0,
                    isAdvanced: !0
                },
                type: {
                    title: "type",
                    required: !0
                },
                objectStartTime: {
                    title: "Display (start)",
                    type: "datetime-local",
                    required: !1,
                    isAdvanced: !0
                },
                objectExpireTime: {
                    title: "Display (end)",
                    type: "datetime-local",
                    required: !1,
                    isAdvanced: !0
                }
            },
            [s.Interaction.VIDEO]: {
                video: {
                    title: "Video (URL)",
                    required: !0,
                    isProperty: !0,
                    placeholder: "https://vimeo.com/4178829"
                },
                distThreshold: {
                    title: "Activation distance",
                    type: "number",
                    required: !1
                },
                previewMessage: {
                    title: "Prompt message",
                    required: !1,
                    isAdvanced: !0
                },
                normal: {
                    title: "Object image",
                    type: "file",
                    required: !1,
                    isAdvanced: !0
                },
                highlighted: {
                    title: "Active image",
                    type: "file",
                    required: !1,
                    isAdvanced: !0
                },
                startTime: {
                    title: "Synchronized start time. This will sync the TV for everyone.",
                    type: "datetime-local",
                    required: !1,
                    isProperty: !0,
                    isAdvanced: !0
                },
                type: {
                    title: "type",
                    required: !0
                },
                objectStartTime: {
                    title: "Display (start)",
                    type: "datetime-local",
                    required: !1,
                    isAdvanced: !0
                },
                objectExpireTime: {
                    title: "Display (end)",
                    type: "datetime-local",
                    required: !1,
                    isAdvanced: !0
                }
            },
            [s.Interaction.EXTERNAL_CALL]: {
                zoomLink: {
                    title: "Call (URL)",
                    required: !0,
                    isProperty: !0,
                    placeholder: "https://zoom.us/j/9445636"
                },
                distThreshold: {
                    title: "Activation distance",
                    type: "number",
                    required: !1
                },
                previewMessage: {
                    title: "Prompt message",
                    required: !1,
                    isAdvanced: !0
                },
                normal: {
                    title: "Object image",
                    type: "file",
                    required: !1,
                    isAdvanced: !0
                },
                highlighted: {
                    title: "Active image",
                    type: "file",
                    required: !1,
                    isAdvanced: !0
                },
                type: {
                    title: "type",
                    required: !0
                },
                objectStartTime: {
                    title: "Display (start)",
                    type: "datetime-local",
                    required: !1,
                    isAdvanced: !0
                },
                objectExpireTime: {
                    title: "Display (end)",
                    type: "datetime-local",
                    required: !1,
                    isAdvanced: !0
                }
            },
            [s.Interaction.EXTENSION]: {},
            [s.Interaction.NOTE]: {
                message: {
                    title: "Message",
                    required: !0,
                    isProperty: !0,
                    placeholder: "Have a nice day!"
                },
                distThreshold: {
                    title: "Activation distance",
                    type: "number",
                    required: !1
                },
                previewMessage: {
                    title: "Prompt message",
                    required: !1,
                    isAdvanced: !0
                },
                normal: {
                    title: "Object image",
                    type: "file",
                    required: !1,
                    isAdvanced: !0
                },
                highlighted: {
                    title: "Active image",
                    type: "file",
                    required: !1,
                    isAdvanced: !0
                },
                type: {
                    title: "type",
                    required: !0
                },
                objectStartTime: {
                    title: "Display (start)",
                    type: "datetime-local",
                    required: !1,
                    isAdvanced: !0
                },
                objectExpireTime: {
                    title: "Display (end)",
                    type: "datetime-local",
                    required: !1,
                    isAdvanced: !0
                }
            },
            [s.Interaction.MODAL_EXTENSION]: {},
            [s.Interaction.COMPONENT_MODAL]: {
                componentModal: {
                    title: "componentModal",
                    required: !0,
                    isProperty: !0
                }
            }
        };
        let p = [{
            templateId: "PottedPlantPulmeria - aoRO76nJFb5MPXHqeN6aS",
            _name: "Potted Plant (Plumeria)",
            orientation: 0,
            color: "#df7126",
            height: 2,
            normal: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/internal-dashboard/images/cyPLa3ck8HqJATkj0Wl-X",
            highlighted: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/internal-dashboard/images/7WhD1KXumN_R0HdrVThx4",
            properties: {},
            type: s.Interaction.NONE,
            width: 1
        }, {
            templateId: "RollingOfficeChair - sJ0wCsUbzDbBrjYafrVTH",
            _name: "Office Chair",
            orientation: 2,
            color: "#639bff",
            normal: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FQ8lCK9qyZLBpM8Ui?alt=media&token=62012678-06a4-43b1-93bb-c5475405cf2e",
            highlighted: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FGfcNJGADqtc4sSAO?alt=media&token=f72fba60-e6e2-4c66-ab5d-425ced6ad19e",
            width: 1,
            height: 1,
            type: s.Interaction.NONE
        }, {
            templateId: "Desk - 3Wxetal2cHO7gFJrWoje-",
            _name: "Desk with Drawers",
            orientation: 0,
            color: "#c4824e",
            height: 1,
            width: 3,
            type: s.Interaction.NONE,
            highlighted: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FcEMHp4MnO1euyO1o?alt=media&token=f91cbd93-3b89-4db1-86dd-3110d5102059",
            normal: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FW0jc7mOlM5jCekyF?alt=media&token=c783a5bd-5adb-49aa-b466-25c1c9cc1a06"
        }, {
            templateId: "Draw Battle - lsqDHieRYQxn0D6TPHbnM",
            _name: "Draw Battle",
            orientation: 0,
            color: "a",
            distThreshold: 1,
            height: 1,
            highlighted: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FjADBDKFIHF8ldPk9?alt=media&token=b090ad1a-a6fa-480c-937c-f08195956a1d",
            normal: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FXLXyX3wFgab7Ce8Z?alt=media&token=47cd4e8c-0067-4893-8add-e18504f76a4a",
            properties: {
                deterministicUrlPrefix: "https://drawbattle.io/gather/",
                loading: "https://cdn.gather.town/v0/b/gather-town-dev.appspot.com/o/objects%2Fgather_logo_blue.png?alt=media&token=759ee0e4-90de-40d1-a117-6d03b204b072"
            },
            type: s.Interaction.EMBEDDED_WEBSITE,
            width: 1
        }, {
            templateId: "Whiteboard - tOsOBPYRTh6x_dMv_tzFn",
            _name: "Whiteboard",
            orientation: 0,
            color: "#cbdbfc",
            height: 2,
            highlighted: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FUuPB6OLZDv1Bz7go?alt=media&token=f430b087-1002-41a2-83bc-4162500fe835",
            normal: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FYUriInJLmtzvKgtM?alt=media&token=b8253b33-08a9-4859-867f-909efd5a9bcf",
            previewMessage: "Press x to use shared whiteboard",
            properties: {
                deterministicUrlPrefix: "https://app.tryeraser.com/integration/gather/",
                loading: "https://cdn.gather.town/v0/b/gather-town-dev.appspot.com/o/objects%2Fgather_logo_blue.png?alt=media&token=759ee0e4-90de-40d1-a117-6d03b204b072"
            },
            type: s.Interaction.EMBEDDED_WEBSITE,
            width: 2
        }, {
            templateId: "Battle Tetris - 4a8wu1xUIOj9P_LSv5aI3",
            _name: "Battle Tetris",
            orientation: 0,
            type: s.Interaction.EMBEDDED_WEBSITE,
            color: "#696a6a",
            height: 1,
            width: 1,
            properties: {
                deterministicUrlPrefix: "https://jstris.jezevec10.com/?join=",
                loading: "https://cdn.gather.town/v0/b/gather-town-dev.appspot.com/o/objects%2Fgather_logo_blue.png?alt=media&token=759ee0e4-90de-40d1-a117-6d03b204b072"
            },
            highlighted: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2Fk3uu567R2AgbBWKl?alt=media&token=aeee60b2-1108-4d6c-9d05-0307d265dd9a",
            normal: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FPWbbvsJV0nk5pZB7?alt=media&token=f1a571c8-9231-4458-af77-91f82bf672b5"
        }];
        const h = e=>new Promise((t=>{
            const o = new Image;
            o.onload = ()=>t({
                height: Math.ceil(o.height / i.objectSizes),
                width: Math.ceil(o.width / i.objectSizes)
            }),
            o.src = e
        }
        ))
          , f = e=>{
            p = p.filter((t=>!(0,
            c.isEqual)(t, e))),
            p.unshift(e)
        }
          , m = e=>{
            if ("string" == typeof e || e instanceof String)
                return "https://firebasestorage.googleapis.com" === e.slice(0, 38) ? "https://cdn.gather.town" + e.slice(38) : "https://storage.googleapis.com" === e.slice(0, 30) && e.match(/gather-town(-dev)?\./) ? "https://cdn.gather.town" + e.slice(7) : e;
            if (Array.isArray(e))
                return e.map((e=>m(e)));
            if ("object" == typeof e && null !== e) {
                const t = {};
                return Object.keys(e).forEach((o=>{
                    t[o] = m(e[o])
                }
                )),
                t
            }
            return e
        }
          , v = (e,t,o,n)=>((e,t,o)=>new Promise(((n,a)=>{
            var r = e=>{
                try {
                    s(o.next(e))
                } catch (e) {
                    a(e)
                }
            }
              , i = e=>{
                try {
                    s(o.throw(e))
                } catch (e) {
                    a(e)
                }
            }
              , s = e=>e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
            s((o = o.apply(e, t)).next())
        }
        )))(void 0, null, (function*() {
            const t = yield(yield fetch(e)).arrayBuffer()
              , i = {
                bytes: r.Buffer.from(t)
            };
            n ? (i.eventId = o,
            i.isEvent = !0) : i.spaceId = o;
            const s = (yield a().post(window.location.origin + "/api/uploadImage", i, {
                maxContentLength: 1 / 0
            })).data;
            return m(s)
        }
        ))
          , g = e=>new Promise(((t,o)=>{
            const n = document.createElement("canvas")
              , a = n.getContext("2d")
              , r = new Image;
            r.crossOrigin = "Anonymous",
            r.onload = function() {
                try {
                    const e = r.height
                      , o = r.width;
                    a.canvas.height = e,
                    a.canvas.width = o,
                    a.drawImage(r, 0, 0);
                    const i = a.getImageData(0, 0, n.width, n.height)
                      , s = i.data
                      , c = (e,t)=>{
                        const n = 4 * (t + o * e);
                        return [s[n], s[n + 1], s[n + 2], s[n + 3]]
                    }
                      , u = (e,t,n)=>{
                        const a = 4 * (t + o * e);
                        s[a] = n[0],
                        s[a + 1] = n[1],
                        s[a + 2] = n[2],
                        s[a + 3] = n[3]
                    }
                      , d = (e,t,o,n)=>Math.ceil(Math.sqrt(Math.pow(o - e, 2) + Math.pow(n - t, 2)))
                      , p = l.length
                      , h = (t,n)=>{
                        let a = l.length + 1;
                        for (let r = -1 * p; r <= p; r++)
                            for (let i = -1 * p; i <= p; i++)
                                t + r >= 0 && t + r < e && n + i >= 0 && n + i < o && 0 !== c(t + r, n + i)[3] && (a = Math.min(a, d(0, 0, r, i)));
                        return a > p ? -1 : a
                    }
                      , f = [];
                    for (let e = 0; e < p; e++)
                        f.push([]);
                    for (let t = 0; t < e; t++)
                        for (let e = 0; e < o; e++) {
                            const o = h(t, e);
                            o > 0 && f[o - 1].push([t, e])
                        }
                    for (let e = 0; e < p; e++)
                        for (let t = 0; t < f[e].length; t++)
                            u(f[e][t][0], f[e][t][1], l[e]);
                    a.putImageData(i, 0, 0),
                    t(n.toDataURL())
                } catch (e) {
                    o()
                }
            }
            ,
            r.onerror = o,
            r.src = e
        }
        ));
        var S, y;
        (y = S || (S = {})).Tomato = "Tomato",
        y.ClockPole = "ClockPole",
        y.Cuckoo = "Cuckoo",
        y.KitchenTimer = "KitchenTimer";
        const b = {
            [S.Tomato]: {
                id: "TimerPomodoro - ZjUxD2D1ksT9RA3dvFdh-",
                name: "Timer (Pomodoro)",
                desc: "This object is a timer that implements the Pomodoro Method",
                deterministicUrlPrefix: "https://cuckoo.team/",
                url: "",
                distThreshold: 1,
                previewMessage: "Press x to use timer",
                tags: ["timer", "clock", "newly added", "pomodoro", "appliance", "appliance/work", "office decor", "appliance/food"],
                variants: [{
                    color: "#ac3232",
                    default: !0,
                    highlighted: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/internal-dashboard/images/0weIJR3pTpYCaqCdtMUdb",
                    normal: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/internal-dashboard/images/NzPmfllp8PdfnOdpTV_PI",
                    orientation: 0
                }],
                type: s.Interaction.EMBEDDED_WEBSITE
            },
            [S.KitchenTimer]: {
                id: "TimerPomodoro - DwbYXLDvQ8cqxsIlF6crH",
                name: "Timer (Pomodoro)",
                desc: "This object is a timer that implements the Pomodoro Method",
                deterministicUrlPrefix: "https://cuckoo.team/",
                url: "",
                distThreshold: 1,
                previewMessage: "Press x to use timer",
                tags: ["timer", "clock", "newly added", "pomodoro", "appliance", "appliance/work", "office decor", "appliance/food"],
                variants: [{
                    color: "#cbdbfc",
                    default: !0,
                    highlighted: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/internal-dashboard/images/G5ODT6pmrOXASkaKdUhTH",
                    normal: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/internal-dashboard/images/we1AKR_vX9okmnq0WXBFZ",
                    orientation: 0
                }],
                type: s.Interaction.EMBEDDED_WEBSITE
            },
            [S.ClockPole]: {
                id: "TimerPomodoro - ZjUxD2D1ksT9RA3dvFdh-",
                name: "Timer (Pomodoro)",
                desc: "This object is a timer that implements the Pomodoro Method",
                deterministicUrlPrefix: "https://cuckoo.team/",
                url: "",
                distThreshold: 1,
                previewMessage: "Press x to use timer",
                tags: ["timer", "clock", "newly added", "pomodoro", "appliance", "appliance/work", "office decor"],
                variants: [{
                    color: "#cbdbfc",
                    default: !0,
                    highlighted: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/internal-dashboard/images/vIpp-q1bTQ2oAguUjKKtZ",
                    normal: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/internal-dashboard/images/0VC1fVCt0EatUuoWv7E71",
                    orientation: 0
                }],
                type: s.Interaction.EMBEDDED_WEBSITE
            },
            [S.Cuckoo]: {
                id: "TimerPomodoro - ZjUxD2D1ksT9RA3dvFdh-",
                name: "Timer (Pomodoro)",
                desc: "This object is a timer that implements the Pomodoro Method",
                deterministicUrlPrefix: "https://cuckoo.team/",
                url: "",
                distThreshold: 1,
                previewMessage: "Press x to use timer",
                tags: ["timer", "clock", "newly added", "pomodoro", "appliance", "appliance/work", "office decor", "appliance/food"],
                variants: [{
                    color: "#6abe30",
                    default: !0,
                    highlighted: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/internal-dashboard/images/sHVCAB2tn9j1T5n7dDT0w",
                    normal: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/internal-dashboard/images/6NUYXhnxjyYkLWZ2WWTYQ",
                    orientation: 0
                }],
                type: s.Interaction.EMBEDDED_WEBSITE
            }
        }
          , T = (i.GO_KART_HIGHLIGHTED,
        i.GO_KART_NORMAL,
        s.Interaction.EXTENSION,
        {
            id: "CompanyLogoUpload - CH0qvgOBhigJMBkOmeVAu",
            name: "Company Logo (Upload)",
            distThreshold: 1,
            previewMessage: "Press X to upload logo",
            desc: "Upload your company logo",
            tags: ["logo", "office", "remote work", "office decor", "company", "sign"],
            type: s.Interaction.COMPONENT_MODAL,
            componentModal: "uploadLogo",
            variants: [{
                color: "a",
                default: !0,
                highlighted: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/internal-dashboard/images/taAu9UfP9qUrTCTSodzBN",
                normal: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/internal-dashboard/images/j5qDvjk9dFU2827K3aB6X",
                orientation: 0
            }]
        })
    }
    ,
    87: (e,t,o)=>{
        o.d(t, {
            getRoomInfo: ()=>c,
            getAllUsers: ()=>l,
            getUserSpaces: ()=>u
        });
        var n = o(31)
          , a = o.n(n)
          , r = o(19)
          , i = o(18)
          , s = (e,t,o)=>new Promise(((n,a)=>{
            var r = e=>{
                try {
                    s(o.next(e))
                } catch (e) {
                    a(e)
                }
            }
              , i = e=>{
                try {
                    s(o.throw(e))
                } catch (e) {
                    a(e)
                }
            }
              , s = e=>e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
            s((o = o.apply(e, t)).next())
        }
        ));
        const c = ()=>s(void 0, null, (function*() {
            try {
                const e = yield a().get(window.location.origin + "/api/getRoomInfo", {
                    params: {
                        room: (0,
                        i.getRoomFromPath)()
                    }
                });
                return e ? 200 !== e.status ? void console.error("Could not get roomInfo, check server logs") : e.data ? e.data : void 0 : void console.error("Call to get roomInfo failed!")
            } catch (e) {
                return void console.log("Call to get roomInfo errored:", e)
            }
        }
        ))
          , l = ()=>s(void 0, null, (function*() {
            return i.HttpV2Client.get(r.HttpV2Paths.SpaceUsers, {
                auth: !0,
                suppressErrors: !0
            })
        }
        ))
          , u = (e,...t)=>s(void 0, [e, ...t], (function*(e, {role: t}={}) {
            return i.HttpV2Client.get(r.HttpV2Paths.UserSpaces, {
                auth: !0,
                params: {
                    path: {
                        user: e
                    },
                    query: {
                        role: t
                    }
                },
                suppressErrors: !0
            })
        }
        ))
    }
    ,
    266: (e,t,o)=>{
        o.d(t, {
            STARTING_DESK_OBJECTS: ()=>r,
            TUTORIAL_LOBBY_OBJECTS: ()=>i,
            areasSuggestedObjectsMap: ()=>s
        });
        var n = o(26)
          , a = o(19);
        const r = [{
            id: "Desktop Computer - VCwSOJP2RDpWxOlLGt4HK",
            templateId: "Desktop Computer - VCwSOJP2RDpWxOlLGt4HK",
            _name: "Desktop Computer",
            color: "#323c39",
            highlighted: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2Fya4oRWlCd2acQhZH?alt=media&token=f2512b2d-12a1-42ba-9dc6-b8f1046b303d",
            normal: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FzI6PXmZ9KQpyGzbY?alt=media&token=40df1631-2a82-4b28-b604-ec30ca9a4eeb",
            orientation: 0,
            type: n.Interaction.NONE,
            width: 1,
            height: 1
        }, {
            templateId: "DeskLampHinged - 4P4bvV3rqag53oBTlFL0k",
            _name: "Desk Lamp (Hinged)",
            color: "#9badb7",
            highlighted: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FzOBPUWwnFqC78aSN?alt=media&token=72efc6d7-7b2f-406b-8a64-b984b7235a09",
            normal: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FzZvBXUoSJwOIjSBu?alt=media&token=c4708989-21d1-4134-bb66-8a0c10d68adf",
            orientation: 0,
            type: n.Interaction.NONE,
            width: 1,
            height: 1
        }, {
            templateId: "RollingOfficeChair - sJ0wCsUbzDbBrjYafrVTH",
            _name: "Office Chair",
            color: "#639bff",
            highlighted: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2Fks339WQj7BQL3suB?alt=media&token=4edc544f-2c6f-4a69-8463-2c1db6224e9e",
            normal: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FD5gMhNsLf1rJkSTo?alt=media&token=8d122726-62b9-44d6-af47-4ec324e1fbd1",
            orientation: 0,
            type: n.Interaction.NONE,
            width: 1,
            height: 1
        }, {
            templateId: "Mug - BT60YB76ISW7nF06KOk0a",
            _name: "Mug",
            color: "#639bff",
            highlighted: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FoJqIagBtzd1RsoNW?alt=media&token=8bc4f492-3f0f-4d78-868b-beeb8c325b0c",
            normal: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FRCgc1oKti3mEP5XE?alt=media&token=440d78aa-3a7d-4e07-ba68-27943a0eb2d3",
            orientation: 0,
            width: 1,
            height: 1,
            type: n.Interaction.NONE
        }, {
            templateId: "ToGoCoffee - eFynd1wtJVeD5aLmLNtBk",
            _name: "To-Go Coffee",
            color: "#c4824e",
            highlighted: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FdbPBZUNtHcRtKgo2?alt=media&token=0183a74a-b722-4f99-a193-ee865d919212",
            normal: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FMF3MlC43S7RZrzux?alt=media&token=6dc635a5-0a8a-4aab-8a81-da1ee33aff21",
            orientation: 0,
            width: 1,
            height: 1,
            type: n.Interaction.NONE
        }, {
            templateId: "Globe - F7OwUt5g4tBnn0n2j_EHi",
            _name: "Globe",
            color: "#639bff",
            highlighted: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FaEhRWv2BsG5RfSFN?alt=media&token=d671d841-f062-4456-bc8a-6388023c4052",
            normal: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FMTxTvFWva0Ydj30J?alt=media&token=4fa839bf-8740-4d1b-bb5f-519b18498570",
            orientation: 0,
            width: 1,
            height: 1,
            type: n.Interaction.NONE
        }, {
            templateId: "Potted Plant (Monstera) - eEQopzUv6tABVZZsXy_ZB",
            _name: "Potted Plant (Monstera)",
            color: "#df7126",
            highlighted: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FRUhzpJUfsnd3R186?alt=media&token=f6c69b86-bcc6-454a-8b7d-0dd3ed4ced0a",
            normal: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FKxtnJ3xn6ho2x9DB?alt=media&token=bf20934a-0e26-4b03-a124-f91f78f3563c",
            orientation: 0,
            width: 1,
            height: 1,
            type: n.Interaction.NONE
        }, {
            templateId: "Potted Plant (Spikey) - Txt3yDFD8NtkI-J_ZbdWM",
            _name: "Potted Plant (Spikey)",
            orientation: 0,
            color: "#df7126",
            height: 2,
            normal: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FGb1j09WoypxoA4UP?alt=media&token=107ec86e-6d96-41cb-98c2-721fbde0fbd3",
            highlighted: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FfGsyMUMk4B8fyMhc?alt=media&token=48527786-a612-45cf-a97c-7f6332204680",
            properties: {},
            type: n.Interaction.NONE,
            width: 1
        }, {
            templateId: "SucculentGreenPrince - UtFELxePFOJS4VWjeL5U2",
            _name: "Succulent (Green Prince)",
            color: "#df7126",
            highlighted: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2Fxlk8aDFk2vOJbfhp?alt=media&token=24c5b974-6c92-45a2-96fa-3a89a14ad5b4",
            normal: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FE2s34i79q8r9znvN?alt=media&token=34a2ecfe-cd2e-4a3f-9c9e-ed2164e7b813",
            orientation: 0,
            width: 1,
            height: 1,
            type: n.Interaction.NONE
        }]
          , i = [{
            color: "#d9a066",
            height: 1,
            highlighted: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FHJ75MbVacO40OVna?alt=media&token=b5ba1874-c74f-414e-b865-2c326e161aa8",
            normal: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2F5o2hC07scvfmNy5E?alt=media&token=763b48a8-76c1-4e94-839c-d7e427dc2bc4",
            orientation: 0,
            properties: {},
            templateId: "Mod Chair - Plhk0Z0F5I2V41-tWB2ag",
            type: 0,
            width: 1,
            _name: "Mod Chair"
        }, {
            color: "#8f563b",
            height: 2,
            highlighted: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FXGndGQlS0wJ9IYkZ?alt=media&token=1a8c6057-4a6c-4ee5-a52f-3b6068e7b2ac",
            normal: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2F8p4wbU64O7j9dv5E?alt=media&token=04b241bf-9692-4e7c-98dd-a064d9cd5fd5",
            orientation: 0,
            properties: {},
            templateId: "RoundDesk - R7NIxcRB2UB9EfaaWsak7",
            type: 0,
            width: 3,
            _name: "Round Desk"
        }, {
            templateId: "Potted Plant (Monstera) - eEQopzUv6tABVZZsXy_ZB",
            _name: "Potted Plant (Monstera)",
            color: "#df7126",
            highlighted: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FRUhzpJUfsnd3R186?alt=media&token=f6c69b86-bcc6-454a-8b7d-0dd3ed4ced0a",
            normal: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FKxtnJ3xn6ho2x9DB?alt=media&token=bf20934a-0e26-4b03-a124-f91f78f3563c",
            orientation: 0,
            width: 1,
            height: 1,
            type: n.Interaction.NONE
        }]
          , s = {
            [a.AreaCategory.RW_OFFICE_LOBBY]: ["Couch - qGPPoOyaUfx_-bDViJJAj", "Armchair - f2KcUqduLrxRgRK9Pet39", "SmallUrn - 8nkXegmGYM8cK0ktjzcBD", "ArborVitae - _QGSCUNlONJ9K6aJNPjDK", "Coffee Table - 3jPgxRkDs6NpoYNGXzj7L", "Potted Plant (Monstera) - eEQopzUv6tABVZZsXy_ZB", "Statue - 4wzugeIoWaX5zwZT89pNm", "StatuePedestalMedium - W6vXBNb7G720KJg5Sxiwa", "AtomicReactor - E3tucMalT1Tes_kY6K7MR"]
        }
    }
    ,
    74: (e,t,o)=>{
        o.d(t, {
            ObjectPickerModalMode: ()=>n,
            generateNewObjectTemplate: ()=>d,
            initObjectTemplates: ()=>p,
            unplacedToEditedObject: ()=>h,
            toEditedObject: ()=>m,
            getColors: ()=>g,
            getSortedOrientations: ()=>S,
            getNextOrientation: ()=>y,
            isTemplateType: ()=>b
        });
        var n, a, r = o(3168), i = o(31), s = o.n(i), c = o(26), l = o(18), u = o(362);
        (a = n || (n = {}))[a.Object = 0] = "Object",
        a[a.New = 1] = "New",
        a[a.Text = 2] = "Text";
        const d = ()=>({
            id: (0,
            r.nanoid)(),
            desc: "",
            name: "",
            tags: ["Custom"],
            type: c.Interaction.NONE,
            variants: [{
                color: "default",
                normal: "",
                highlighted: "",
                orientation: 0,
                default: !0
            }]
        })
          , p = ()=>{
            return e = function*() {
                const e = yield s().get(window.location.origin + "/api/getObjectTemplates", {
                    params: {
                        room: (0,
                        l.getRoomFromPath)()
                    }
                });
                if (e) {
                    if (200 !== e.status && console.error("Could not get objects, check server logs"),
                    e.data)
                        return e.data
                } else
                    console.error("Call to get objects failed!")
            }
            ,
            new Promise(((t,o)=>{
                var n = t=>{
                    try {
                        r(e.next(t))
                    } catch (e) {
                        o(e)
                    }
                }
                  , a = t=>{
                    try {
                        r(e.throw(t))
                    } catch (e) {
                        o(e)
                    }
                }
                  , r = e=>e.done ? t(e.value) : Promise.resolve(e.value).then(n, a);
                r((e = e.apply(void 0, null)).next())
            }
            ));
            var e
        }
          , h = e=>{
            const t = d();
            t.variants[0].normal = e.normal,
            e.highlighted && (t.variants[0].highlighted = e.highlighted),
            t.name = e._name ? e._name : "";
            const o = {
                template: t,
                color: "#ffffff",
                orientation: 0,
                type: e.type,
                properties: {}
            };
            return f(o, e),
            o
        }
          , f = (e,t)=>{
            e.properties = {
                normal: e.template.variants[0].normal,
                highlighted: e.template.variants[0].highlighted
            },
            t.distThreshold && (e.properties.distThreshold = t.distThreshold),
            t.previewMessage && (e.properties.previewMessage = t.previewMessage),
            t.properties && Object.entries(t.properties).forEach((([t,o])=>{
                e.properties[t] = o
            }
            ))
        }
          , m = (e,t)=>{
            const {variants: o} = e
              , n = o.find((e=>e.default))
              , a = {
                template: e,
                color: (null == n ? void 0 : n.color) || "#ffffff",
                orientation: (null == n ? void 0 : n.orientation) || 0,
                type: e.type,
                properties: {}
            };
            return v(a, t),
            a
        }
          , v = (e,t)=>{
            const o = e.template;
            e.type === o.type ? (e.properties = {},
            Object.entries(o).forEach((([t,n])=>{
                b(o, c.Interaction.EXTENSION) && "properties" === t ? Object.entries(o.properties).forEach((([t,o])=>{
                    e.properties[t] = o.default
                }
                )) : (0,
                u.isBaseTemplateKey)(t) || (e.properties[t] = n)
            }
            ))) : e.properties = {},
            2 === t && (e.properties.fontSize = 24,
            e.properties.offsetX = 0,
            e.properties.offsetY = 0)
        }
          , g = e=>{
            const {variants: t} = e;
            return t.sort(((e,t)=>e.default ? -1 : t.default ? 1 : 0)),
            t.map((e=>e.color)).filter(((e,t,o)=>o.indexOf(e) === t))
        }
          , S = (e,t)=>{
            const {variants: o} = e;
            return o.filter((e=>e.color === t)).map((e=>e.orientation)).sort(((e,t)=>e - t))
        }
          , y = (e,t,o)=>{
            const n = t.indexOf(e);
            return t[(n + o + t.length) % t.length]
        }
        ;
        function b(e, t) {
            return e.type === t
        }
    }
    ,
    361: (e,t,o)=>{
        o.d(t, {
            AREA_TO_TUTORIAL_TASK_ID_MAP: ()=>U,
            TUTORIAL_TASKS: ()=>x,
            TUTORIAL_TASK_GROUPS: ()=>L,
            TUTORIAL_TASK_GROUP_SETS: ()=>j,
            TUTORIAL_TASK_NO_UPDATE_ON_COMPLETE: ()=>F,
            TUTORIAL_TASK_RETURN_TO_TASK_ON_COMPLETE: ()=>B
        });
        var n = o(3158)
          , a = o(15)
          , r = o(22)
          , i = o(26)
          , s = o(50)
          , c = o(214)
          , l = o(3171)
          , u = o(0)
          , d = ["styles"];
        function p() {
            return p = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = arguments[t];
                    for (var n in o)
                        Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
                }
                return e
            }
            ,
            p.apply(this, arguments)
        }
        const h = function(e) {
            e.styles;
            var t = (0,
            l.default)(e, d);
            return u.createElement("svg", p({
                width: "32",
                height: "32",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), u.createElement("path", {
                d: "M28.95 13.163l-1.034-1.034a.731.731 0 00-1.034 0l-.517.517-1.321-1.321a2.914 2.914 0 00-.748-2.817L22.228 6.44a7.315 7.315 0 00-10.345 0l4.138 2.068v.857c0 .776.308 1.52.857 2.069l2.247 2.246a2.913 2.913 0 002.816.748l1.321 1.32-.517.518a.731.731 0 000 1.034l1.035 1.035a.731.731 0 001.034 0l4.138-4.138a.732.732 0 00-.001-1.034zm-13.106-.695a4.426 4.426 0 01-.45-.546L3.731 22.81a2.827 2.827 0 103.995 3.995l10.886-11.66a4.434 4.434 0 01-.523-.43l-2.246-2.247z",
                fill: "#fff"
            }))
        };
        var f = o(19);
        const m = {
            [f.TutorialTaskIds.NEW_OFFICE_DEMO_WALKING]: {
                name: "Moving around",
                steps: [{
                    npc: {
                        [c.NPCName.OFFICE_DEMO_1]: {
                            action: {
                                actionType: c.NPCActionType.SPAWN,
                                args: {
                                    x: 35,
                                    y: 31,
                                    direction: i.SpriteDirection.Down,
                                    sprite: 24,
                                    name: "Riley [bot]"
                                }
                            }
                        },
                        [c.NPCName.OFFICE_DEMO_2]: {
                            action: {
                                actionType: c.NPCActionType.SPAWN,
                                args: {
                                    x: 25,
                                    y: 33,
                                    direction: i.SpriteDirection.Down,
                                    sprite: 372,
                                    name: "Jesse [bot]"
                                }
                            }
                        },
                        [c.NPCName.OFFICE_DEMO_3]: {
                            action: {
                                actionType: c.NPCActionType.SPAWN,
                                args: {
                                    sprite: 53,
                                    x: 18,
                                    y: 29,
                                    direction: i.SpriteDirection.Up,
                                    name: "Rose [bot]"
                                }
                            }
                        },
                        [c.NPCName.OFFICE_DEMO_4]: {
                            action: {
                                actionType: c.NPCActionType.SPAWN,
                                args: {
                                    x: 22,
                                    y: 21,
                                    direction: i.SpriteDirection.Down,
                                    sprite: 443,
                                    name: "Tanya [bot]"
                                }
                            }
                        },
                        [c.NPCName.OFFICE_DEMO_5]: {
                            action: {
                                actionType: c.NPCActionType.SPAWN,
                                args: {
                                    x: 8,
                                    y: 29,
                                    direction: i.SpriteDirection.Down,
                                    sprite: 471,
                                    name: "Quinn [bot]"
                                }
                            }
                        },
                        [c.NPCName.OFFICE_DEMO_6]: {
                            action: {
                                actionType: c.NPCActionType.SPAWN,
                                args: {
                                    x: 13,
                                    y: 45,
                                    direction: i.SpriteDirection.Right,
                                    sprite: 462,
                                    name: "Max [bot]"
                                }
                            }
                        },
                        [c.NPCName.OFFICE_DEMO_7]: {
                            action: {
                                actionType: c.NPCActionType.SPAWN,
                                args: {
                                    x: 25,
                                    y: 21,
                                    direction: i.SpriteDirection.Down,
                                    sprite: 415,
                                    name: "Taylor [bot]"
                                }
                            }
                        },
                        [c.NPCName.OFFICE_DEMO_8]: {
                            action: {
                                actionType: c.NPCActionType.SPAWN,
                                args: {
                                    x: 25,
                                    y: 24,
                                    direction: i.SpriteDirection.Up,
                                    sprite: 391,
                                    name: "Casey [bot]"
                                }
                            }
                        },
                        [c.NPCName.OFFICE_DEMO_9]: {
                            action: {
                                actionType: c.NPCActionType.SPAWN,
                                args: {
                                    x: 34,
                                    y: 25,
                                    direction: i.SpriteDirection.Down,
                                    sprite: 313,
                                    name: "Emerson [bot]"
                                }
                            }
                        }
                    },
                    completionEvents: [s.TutorialTaskEvents.SPAWNED]
                }, {
                    npc: {
                        [c.NPCName.OFFICE_DEMO_1]: {
                            action: {
                                actionType: c.NPCActionType.FOLLOW_PLAYER
                            }
                        }
                    },
                    completionEvents: {
                        [s.TutorialTaskEvents.ARRIVED]: e=>(null == e ? void 0 : e.npcId) === c.NPCName.OFFICE_DEMO_1
                    }
                }, {
                    npc: {
                        [c.NPCName.OFFICE_DEMO_1]: {
                            videoSrc: "https://firebasestorage.googleapis.com/v0/b/gather-town.appspot.com/o/npc-video%2Fnew%2F1-1.mp4?alt=media&token=3aea9255-307a-442c-9a99-f68accbb5219"
                        }
                    },
                    completionEvents: [s.TutorialTaskEvents.DONE_SPEAKING]
                }, {
                    npc: {
                        [c.NPCName.OFFICE_DEMO_1]: {
                            action: {
                                actionType: c.NPCActionType.MOVE_TO,
                                args: {
                                    pos: {
                                        x: 34,
                                        y: 33
                                    }
                                }
                            }
                        },
                        [c.NPCName.OFFICE_DEMO_8]: {
                            actionDelay: 2e3,
                            action: {
                                actionType: c.NPCActionType.MOVE_TO,
                                args: {
                                    pos: {
                                        x: 33,
                                        y: 25
                                    }
                                }
                            }
                        },
                        [c.NPCName.OFFICE_DEMO_9]: {
                            actionDelay: 4200,
                            action: {
                                actionType: c.NPCActionType.EMOTE,
                                args: {
                                    emote: i.Emote.Wave
                                }
                            }
                        }
                    },
                    completionEvents: [s.TutorialTaskEvents.PLAYER_MOVED_TO_GUIDE_TILE],
                    directionGuide: {
                        targetX: 34,
                        targetY: 33
                    }
                }, {
                    npc: {
                        [c.NPCName.OFFICE_DEMO_1]: {
                            videoSrc: "https://firebasestorage.googleapis.com/v0/b/gather-town.appspot.com/o/npc-video%2Fnew%2F1-2.mp4?alt=media&token=a72122b2-2bba-42b4-a9e1-a5debcd5e6f2"
                        },
                        [c.NPCName.OFFICE_DEMO_8]: {
                            actionDelay: 500,
                            action: {
                                actionType: c.NPCActionType.SET_PLAYER_INFO,
                                args: {
                                    playerInfo: {
                                        activelySpeaking: 1
                                    }
                                }
                            }
                        }
                    },
                    completionEvents: [s.TutorialTaskEvents.DONE_SPEAKING]
                }, {
                    npc: {
                        [c.NPCName.OFFICE_DEMO_1]: {
                            action: {
                                actionType: c.NPCActionType.MOVE_TO,
                                args: {
                                    pos: {
                                        x: 26,
                                        y: 33
                                    }
                                }
                            }
                        },
                        [c.NPCName.OFFICE_DEMO_8]: {
                            actionDelay: 100,
                            action: {
                                actionType: c.NPCActionType.SET_PLAYER_INFO,
                                args: {
                                    playerInfo: {
                                        activelySpeaking: 0
                                    }
                                }
                            }
                        },
                        [c.NPCName.OFFICE_DEMO_9]: {
                            actionDelay: 200,
                            action: {
                                actionType: c.NPCActionType.SET_PLAYER_INFO,
                                args: {
                                    playerInfo: {
                                        activelySpeaking: 1
                                    }
                                }
                            }
                        }
                    },
                    completionEvents: [s.TutorialTaskEvents.PLAYER_MOVED_TO_GUIDE_TILE],
                    directionGuide: {
                        targetX: 25,
                        targetY: 33
                    }
                }, {
                    npc: {
                        [c.NPCName.OFFICE_DEMO_1]: {
                            videoSrc: "https://firebasestorage.googleapis.com/v0/b/gather-town.appspot.com/o/npc-video%2Fnew%2F1-3.mp4?alt=media&token=7bc0d100-a9b9-44ad-b7eb-cd7d3cf2f028"
                        },
                        [c.NPCName.OFFICE_DEMO_9]: {
                            actionDelay: 200,
                            action: {
                                actionType: c.NPCActionType.SET_PLAYER_INFO,
                                args: {
                                    playerInfo: {
                                        activelySpeaking: 0
                                    }
                                }
                            }
                        }
                    },
                    completionEvents: [s.TutorialTaskEvents.DONE_SPEAKING]
                }, {
                    npc: {
                        [c.NPCName.OFFICE_DEMO_8]: {
                            action: {
                                actionType: c.NPCActionType.SET_PLAYER_INFO,
                                args: {
                                    playerInfo: {
                                        activelySpeaking: 1
                                    }
                                }
                            }
                        },
                        [c.NPCName.OFFICE_DEMO_2]: {
                            videoSrc: "https://firebasestorage.googleapis.com/v0/b/gather-town.appspot.com/o/npc-video%2Fnew%2F2-1.mp4?alt=media&token=bfe37154-498d-46d6-948a-d529a9a4cae6"
                        }
                    },
                    completionEvents: [s.TutorialTaskEvents.DONE_SPEAKING]
                }, {
                    npc: {
                        [c.NPCName.OFFICE_DEMO_1]: {
                            videoSrc: "https://firebasestorage.googleapis.com/v0/b/gather-town.appspot.com/o/npc-video%2Fnew%2F1-4.mp4?alt=media"
                        },
                        [c.NPCName.OFFICE_DEMO_5]: {
                            actionDelay: 3200,
                            action: {
                                actionType: c.NPCActionType.MOVE_TO,
                                args: {
                                    pos: {
                                        x: 13,
                                        y: 41
                                    }
                                }
                            }
                        },
                        [c.NPCName.OFFICE_DEMO_8]: {
                            action: {
                                actionType: c.NPCActionType.SET_PLAYER_INFO,
                                args: {
                                    playerInfo: {
                                        activelySpeaking: 0
                                    }
                                }
                            }
                        }
                    },
                    completionEvents: [s.TutorialTaskEvents.DONE_SPEAKING]
                }, {
                    npc: {
                        [c.NPCName.OFFICE_DEMO_9]: {
                            action: {
                                actionType: c.NPCActionType.SET_PLAYER_INFO,
                                args: {
                                    playerInfo: {
                                        activelySpeaking: 0
                                    }
                                }
                            }
                        },
                        [c.NPCName.OFFICE_DEMO_8]: {
                            actionDelay: 4e3,
                            action: {
                                actionType: c.NPCActionType.SET_PLAYER_INFO,
                                args: {
                                    playerInfo: {
                                        activelySpeaking: 1
                                    }
                                }
                            }
                        },
                        [c.NPCName.OFFICE_DEMO_2]: {
                            videoSrc: "https://firebasestorage.googleapis.com/v0/b/gather-town.appspot.com/o/npc-video%2Fnew%2F2-2.mp4?alt=media&token=fb3b424a-4f69-4f0d-9b86-4c822272e3fc"
                        }
                    },
                    completionEvents: [s.TutorialTaskEvents.DONE_SPEAKING]
                }, {
                    npc: {
                        [c.NPCName.OFFICE_DEMO_2]: {
                            action: {
                                actionType: c.NPCActionType.EMOTE,
                                args: {
                                    emote: i.Emote.Wave
                                }
                            }
                        }
                    },
                    completionEvents: [s.TutorialTaskEvents.DONE_EMOTE]
                }, {
                    npc: {
                        [c.NPCName.OFFICE_DEMO_8]: {
                            action: {
                                actionType: c.NPCActionType.SET_PLAYER_INFO,
                                args: {
                                    playerInfo: {
                                        activelySpeaking: 0
                                    }
                                }
                            }
                        },
                        [c.NPCName.OFFICE_DEMO_9]: {
                            action: {
                                actionType: c.NPCActionType.SET_PLAYER_INFO,
                                args: {
                                    playerInfo: {
                                        activelySpeaking: 1
                                    }
                                }
                            }
                        },
                        [c.NPCName.OFFICE_DEMO_2]: {
                            action: {
                                actionType: c.NPCActionType.MOVE_TO,
                                args: {
                                    pos: {
                                        x: 15,
                                        y: 39
                                    }
                                }
                            }
                        }
                    },
                    completionEvents: [s.TutorialTaskEvents.ARRIVED_TO_LOCATION]
                }]
            },
            [f.TutorialTaskIds.NEW_OFFICE_DEMO_DESK]: {
                name: "Working at your desk",
                steps: [{
                    npc: {
                        [c.NPCName.OFFICE_DEMO_1]: {
                            action: {
                                actionType: c.NPCActionType.MOVE_TO,
                                args: {
                                    pos: {
                                        x: 17,
                                        y: 29
                                    }
                                }
                            }
                        },
                        [c.NPCName.OFFICE_DEMO_9]: {
                            actionDelay: 1400,
                            action: {
                                actionType: c.NPCActionType.SET_PLAYER_INFO,
                                args: {
                                    playerInfo: {
                                        activelySpeaking: 0
                                    }
                                }
                            }
                        }
                    },
                    completionEvents: [s.TutorialTaskEvents.ARRIVED_TO_LOCATION]
                }, {
                    completionEvents: [s.TutorialTaskEvents.PLAYER_MOVED_TO_GUIDE_TILE],
                    directionGuide: {
                        targetX: 18,
                        targetY: 29
                    }
                }, {
                    npc: {
                        [c.NPCName.OFFICE_DEMO_2]: {
                            actionDelay: 3e3,
                            action: {
                                actionType: c.NPCActionType.SET_PLAYER_INFO,
                                args: {
                                    playerInfo: {
                                        activelySpeaking: 1
                                    }
                                }
                            }
                        },
                        [c.NPCName.OFFICE_DEMO_3]: {
                            action: {
                                actionType: c.NPCActionType.SET_PLAYER_INFO,
                                args: {
                                    playerInfo: {
                                        workCondition: 0
                                    }
                                }
                            },
                            muted: !0
                        },
                        [c.NPCName.OFFICE_DEMO_8]: {
                            actionDelay: 2200,
                            action: {
                                actionType: c.NPCActionType.MOVE_TO,
                                args: {
                                    pos: {
                                        x: 17,
                                        y: 41
                                    }
                                }
                            }
                        },
                        [c.NPCName.OFFICE_DEMO_9]: {
                            actionDelay: 2520,
                            action: {
                                actionType: c.NPCActionType.MOVE_TO,
                                args: {
                                    pos: {
                                        x: 17,
                                        y: 43
                                    }
                                }
                            }
                        },
                        [c.NPCName.OFFICE_DEMO_1]: {
                            videoSrc: "https://firebasestorage.googleapis.com/v0/b/gather-town.appspot.com/o/npc-video%2Fnew%2F1-5.mp4?alt=media"
                        }
                    },
                    completionEvents: [s.TutorialTaskEvents.DONE_SPEAKING]
                }, {
                    npc: {
                        [c.NPCName.OFFICE_DEMO_2]: {
                            actionDelay: 1e3,
                            action: {
                                actionType: c.NPCActionType.SET_PLAYER_INFO,
                                args: {
                                    playerInfo: {
                                        activelySpeaking: 0
                                    }
                                }
                            }
                        },
                        [c.NPCName.OFFICE_DEMO_3]: {
                            action: {
                                actionType: c.NPCActionType.SET_PLAYER_INFO,
                                args: {
                                    playerInfo: {
                                        workCondition: 1
                                    }
                                }
                            },
                            videoSrc: "https://firebasestorage.googleapis.com/v0/b/gather-town.appspot.com/o/npc-video%2Fnew%2F3-1.mp4?alt=media"
                        }
                    },
                    completionEvents: [s.TutorialTaskEvents.DONE_SPEAKING]
                }, {
                    npc: {
                        [c.NPCName.OFFICE_DEMO_1]: {
                            videoSrc: "https://firebasestorage.googleapis.com/v0/b/gather-town.appspot.com/o/npc-video%2Fnew%2F1-6.mp4?alt=media"
                        }
                    },
                    completionEvents: [s.TutorialTaskEvents.DONE_SPEAKING]
                }, {
                    npc: {
                        [c.NPCName.OFFICE_DEMO_3]: {
                            videoSrc: "https://firebasestorage.googleapis.com/v0/b/gather-town.appspot.com/o/npc-video%2Fnew%2F3-2.mp4?alt=media"
                        }
                    },
                    completionEvents: [s.TutorialTaskEvents.DONE_SPEAKING]
                }, {
                    npc: {
                        [c.NPCName.OFFICE_DEMO_1]: {
                            videoSrc: "https://firebasestorage.googleapis.com/v0/b/gather-town.appspot.com/o/npc-video%2Fnew%2F1-7.mp4?alt=media"
                        }
                    },
                    completionEvents: [s.TutorialTaskEvents.DONE_SPEAKING]
                }]
            },
            [f.TutorialTaskIds.NEW_OFFICE_DEMO_SPOTLIGHT]: {
                name: "All Hands",
                steps: [{
                    location: {
                        type: "DOM",
                        targetKey: s.TutorialTaskTooltipIds.BUILD_TAB_BUTTON,
                        tooltipPosition: "right"
                    },
                    template: "guideTop",
                    templateProps: {
                        content: (0,
                        n.jsx)(a.default, {
                            flexDirection: "column",
                            maxWidth: "144px"
                        }, (0,
                        n.jsx)("p", {
                            style: {
                                textAlign: "center"
                            }
                        }, "To pick an object, click the ", (0,
                        n.jsx)("strong", null, "Build"), " icon on the sidebar."), (0,
                        n.jsx)(a.default, {
                            flexGrow: 1,
                            justifyContent: "center"
                        }, (0,
                        n.jsx)(h, null)))
                    },
                    npc: {
                        [c.NPCName.OFFICE_DEMO_1]: {
                            action: {
                                actionType: c.NPCActionType.MOVE_TO,
                                args: {
                                    pos: {
                                        x: 9,
                                        y: 9
                                    }
                                }
                            }
                        },
                        [c.NPCName.OFFICE_DEMO_3]: {
                            action: {
                                actionType: c.NPCActionType.MOVE_TO,
                                args: {
                                    pos: {
                                        x: 10,
                                        y: 9
                                    }
                                }
                            }
                        }
                    },
                    completionEvents: [s.TutorialTaskEvents.ARRIVED_TO_LOCATION]
                }, {
                    npc: {
                        [c.NPCName.OFFICE_DEMO_1]: {
                            action: {
                                actionType: c.NPCActionType.MOVE_TO,
                                args: {
                                    pos: {
                                        x: 9,
                                        y: 11
                                    }
                                }
                            }
                        },
                        [c.NPCName.OFFICE_DEMO_3]: {
                            action: {
                                actionType: c.NPCActionType.MOVE_TO,
                                args: {
                                    pos: {
                                        x: 10,
                                        y: 11
                                    }
                                }
                            }
                        }
                    },
                    completionEvents: [s.TutorialTaskEvents.PLAYER_MOVED_TO_GUIDE_TILE],
                    directionGuide: {
                        targetX: 9,
                        targetY: 11
                    }
                }, {
                    npc: {
                        [c.NPCName.OFFICE_DEMO_1]: {
                            videoSrc: "https://firebasestorage.googleapis.com/v0/b/gather-town.appspot.com/o/npc-video%2Fnew%2F1-8.mp4?alt=media"
                        }
                    },
                    completionEvents: [s.TutorialTaskEvents.DONE_SPEAKING]
                }, {
                    npc: {
                        [c.NPCName.OFFICE_DEMO_1]: {
                            action: {
                                actionType: c.NPCActionType.DANCE
                            }
                        },
                        [c.NPCName.OFFICE_DEMO_3]: {
                            action: {
                                actionType: c.NPCActionType.DANCE
                            }
                        }
                    },
                    completionEvents: [s.TutorialTaskEvents.PLAYER_MOVED_TO_GUIDE_TILE],
                    directionGuide: {
                        targetX: 24,
                        targetY: 6
                    }
                }]
            }
        };
        var v = o(265)
          , g = o(266)
          , S = o(24)
          , y = o(16)
          , b = o(30)
          , T = o(17)
          , I = o(3172)
          , _ = o(55);
        const E = T.default.span`
  font-weight: 700;
  color: ${y.COLORS.YELLOW};
`
          , C = function() {
            const e = new Set;
            return t=>(t && e.add(t),
            g.TUTORIAL_LOBBY_OBJECTS.every((t=>e.has(t.templateId))))
        }()
          , w = {
            [f.TutorialTaskIds.RW_OPEN_BUILD_TAB]: {
                name: "Open Build Tab",
                steps: [{
                    location: {
                        type: "SCREEN"
                    },
                    template: "guideLeft",
                    templateProps: {
                        content: (0,
                        n.jsx)(a.default, {
                            flexDirection: "column",
                            maxWidth: "144px"
                        }, (0,
                        n.jsx)("p", {
                            style: {
                                textAlign: "center"
                            }
                        }, "Welcome to your new space, ", (0,
                        n.jsx)(v.default, {
                            kind: "userSpaceName"
                        }), "! Let's get started with building an ", (0,
                        n.jsx)("strong", null, "office lobby"), ".", (0,
                        n.jsx)("br", null), (0,
                        n.jsx)("br", null), (0,
                        n.jsx)("strong", null, "Use your arrow keys"), " to walk up to the highlighted area and we'll get started with customizing!"), (0,
                        n.jsx)(a.default, {
                            flexGrow: 1,
                            justifyContent: "center"
                        }))
                    },
                    completionEvents: {
                        [s.TutorialTaskEvents.PLAYER_MOVED_TO_AREA]: e=>(null == e ? void 0 : e.areaId) === f.BUILD_LOBBY_CONTAINER_AREA_ID
                    },
                    directionGuide: {
                        targetX: 62,
                        targetY: 24
                    }
                }, {
                    location: {
                        type: "DOM",
                        targetKey: s.TutorialTaskTooltipIds.BUILD_TAB_BUTTON,
                        tooltipPosition: "right"
                    },
                    template: "guideTop",
                    templateProps: {
                        content: (0,
                        n.jsx)(a.default, {
                            flexDirection: "column",
                            maxWidth: "144px"
                        }, (0,
                        n.jsx)("p", {
                            style: {
                                textAlign: "center"
                            }
                        }, "Open the ", (0,
                        n.jsx)("strong", null, "build menu on the left"), " to add a ", (0,
                        n.jsx)("strong", null, "desk"), "."), (0,
                        n.jsx)(a.default, {
                            flexGrow: 1,
                            justifyContent: "center"
                        }))
                    },
                    completionEvents: [s.TutorialTaskEvents.BUILD_TAB_OPENED]
                }]
            },
            [f.TutorialTaskIds.RW_BUILD_LOBBY_OBJS]: {
                name: "Build Lobby Objects",
                steps: [{
                    location: {
                        type: "SCREEN"
                    },
                    template: "guideLeft",
                    templateProps: {
                        content: (0,
                        n.jsx)(a.default, {
                            flexDirection: "column",
                            maxWidth: "144px"
                        }, (0,
                        n.jsx)("p", {
                            style: {
                                textAlign: "center"
                            }
                        }, "Now it's time to add some objects: build a chair, a desk, and a plant"), (0,
                        n.jsx)(a.default, {
                            flexGrow: 1,
                            justifyContent: "center"
                        }))
                    },
                    completionEvents: {
                        [s.TutorialTaskEvents.PLAYER_USED_BUILD_TOOL]: e=>!!(null == e ? void 0 : e.objectTemplateId) && C(null == e ? void 0 : e.objectTemplateId)
                    }
                }]
            },
            [f.TutorialTaskIds.RW_BUILD_LOBBY_FINISH]: {
                name: "Finish Building Lobby",
                steps: [{
                    location: {
                        type: "SCREEN"
                    },
                    template: "guideLeft",
                    templateProps: {
                        content: (0,
                        n.jsx)(a.default, {
                            flexDirection: "column",
                            maxWidth: "144px"
                        }, (0,
                        n.jsx)("p", {
                            style: {
                                textAlign: "center"
                            }
                        }, "Congrats on finishing your lobby!!", (0,
                        n.jsx)("br", null), (0,
                        n.jsx)("br", null), "Continue to customize your lobby and office with objects, or explore the rest of the space!"), (0,
                        n.jsx)(a.default, {
                            flexGrow: 1,
                            justifyContent: "center"
                        })),
                        showClose: !0
                    },
                    completionEvents: [s.TutorialTaskEvents.TUTORIAL_TASK_ACKNOWLEDGED, s.TutorialTaskEvents.PLAYER_MOVED]
                }]
            },
            [f.TutorialTaskIds.RW_LOBBY_INTRO]: {
                name: "Welcome To Your Lobby!",
                steps: [{
                    location: {
                        type: "SCREEN"
                    },
                    template: "remoteWorkFreeForm",
                    templateProps: {
                        introCard: "Welcome to your lobby!",
                        isStandalone: !0,
                        nextStepInfo: {
                            nextTask: f.TutorialTaskIds.RW_LOBBY_INIT
                        }
                    },
                    completionEvents: []
                }]
            },
            [f.TutorialTaskIds.RW_LOBBY_INIT]: {
                name: "Welcome To Your Lobby!",
                steps: [{
                    location: {
                        type: "SCREEN"
                    },
                    template: "remoteWorkFreeForm",
                    templateProps: {
                        isStandalone: !0,
                        heading: "Things to do in your lobby",
                        optionsList: [{
                            buttonContent: "Learn how Gather works",
                            nextTask: f.TutorialTaskIds.RW_HOW_GATHER_WORKS
                        }, {
                            buttonContent: "Customize my lobby",
                            nextTask: f.TutorialTaskIds.RW_CUSTOMIZE_LOBBY
                        }, {
                            buttonContent: "Add your custom logo",
                            nextTask: f.TutorialTaskIds.RW_ADD_CUSTOM_LOGO
                        }, {
                            buttonContent: "Don't show me this again",
                            exit: !0,
                            dismissTutorial: f.RW_LOBBY_AREA_ID
                        }]
                    },
                    completionEvents: []
                }]
            },
            [f.TutorialTaskIds.RW_HOW_GATHER_WORKS]: {
                name: "How Gather works",
                steps: [{
                    location: {
                        type: "SCREEN"
                    },
                    template: "remoteWorkFreeForm",
                    templateProps: {
                        isStandalone: !0,
                        heading: "How does Gather work?",
                        content: (0,
                        n.jsx)(a.default, {
                            flexDirection: "column"
                        }, (0,
                        n.jsx)("img", {
                            width: "100%",
                            src: "/images/remoteWorkOnboarding/how-gather-works.gif"
                        }), (0,
                        n.jsx)(a.default, {
                            paddingX: 5,
                            paddingTop: 5,
                            flexDirection: "column"
                        }, (0,
                        n.jsx)(S.default, {
                            kind: "body2"
                        }, "Gather allows you to chat with your teammates as you would in real life. Walk up to someone and say hi."))),
                        nextStepInfo: {
                            buttonContent: "Copy link to invite a friend",
                            isInvite: !0
                        },
                        ghostButtonInfo: {
                            buttonContent: "Back to main menu",
                            nextTask: f.TutorialTaskIds.RW_LOBBY_INIT
                        }
                    },
                    completionEvents: [s.TutorialTaskEvents.TUTORIAL_TASK_ACKNOWLEDGED]
                }]
            },
            [f.TutorialTaskIds.RW_CUSTOMIZE_LOBBY]: {
                name: "Customize Your Lobby",
                steps: [{
                    location: {
                        type: "SCREEN"
                    },
                    template: "remoteWorkFreeForm",
                    templateProps: {
                        iconGlow: b.LeftBarTab.BUILD,
                        isStandalone: !0,
                        heading: "Customize my lobby",
                        content: (0,
                        n.jsx)(a.default, {
                            flexDirection: "column"
                        }, (0,
                        n.jsx)("img", {
                            width: "100%",
                            src: "/images/remoteWorkOnboarding/potential-lobby.png"
                        }), (0,
                        n.jsx)(a.default, {
                            paddingX: 5,
                            paddingTop: 5,
                            alignItems: "center"
                        }, (0,
                        n.jsx)(a.default, {
                            width: "60px",
                            height: "60px",
                            borderRadius: "16px",
                            backgroundColor: y.COLORS.DARK1,
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            marginRight: 3
                        }, (0,
                        n.jsx)(h, null)), (0,
                        n.jsx)(S.default, {
                            kind: "body2"
                        }, "Customization is one of the most powerful features of Gather. Click", " ", (0,
                        n.jsx)(E, null, "Build"), " in the", " ", (0,
                        n.jsx)(E, null, "Left Menu"), " to begin decorating!"))),
                        nextStepInfo: {
                            buttonContent: "Back to main menu",
                            nextTask: f.TutorialTaskIds.RW_LOBBY_INIT
                        }
                    },
                    completionEvents: [s.TutorialTaskEvents.BUILD_TAB_OPENED]
                }, {
                    location: {
                        type: "SCREEN"
                    },
                    template: "remoteWorkFreeForm",
                    templateProps: {
                        isStandalone: !0,
                        heading: "Customize my lobby",
                        content: (0,
                        n.jsx)(a.default, {
                            flexDirection: "column"
                        }, (0,
                        n.jsx)("img", {
                            width: "100%",
                            src: "/images/remoteWorkOnboarding/potential-lobby.png"
                        }), (0,
                        n.jsx)(a.default, {
                            paddingX: 5,
                            paddingTop: 5
                        }, (0,
                        n.jsx)(S.default, {
                            kind: "body2"
                        }, "Select an object from the preview, or click", " ", (0,
                        n.jsx)(E, null, "Open Object Picker"), " for more options."))),
                        nextStepInfo: {
                            buttonContent: "Done customizing",
                            confetti: !0
                        }
                    },
                    completionEvents: [s.TutorialTaskEvents.TUTORIAL_TASK_ACKNOWLEDGED]
                }]
            },
            [f.TutorialTaskIds.RW_ADD_CUSTOM_LOGO]: {
                name: "Add custom logo",
                steps: [{
                    location: {
                        type: "SCREEN"
                    },
                    template: "remoteWorkFreeForm",
                    directionGuide: {
                        targetX: 33,
                        targetY: 36
                    },
                    templateProps: {
                        isStandalone: !0,
                        heading: "Add your custom logo",
                        content: (0,
                        n.jsx)(a.default, {
                            paddingX: 5,
                            paddingTop: 5
                        }, (0,
                        n.jsx)(S.default, {
                            kind: "body2"
                        }, "Follow the arrow and interact to upload your logo.")),
                        nextStepInfo: {
                            buttonContent: "Back to main menu",
                            nextTask: f.TutorialTaskIds.RW_LOBBY_INIT
                        }
                    },
                    completionEvents: [s.TutorialTaskEvents.PLAYER_INTERACTED]
                }]
            },
            [f.TutorialTaskIds.RW_SOCIALS_INTRO]: {
                name: "Welcome To Your Social Area!",
                steps: [{
                    location: {
                        type: "SCREEN"
                    },
                    template: "remoteWorkFreeForm",
                    templateProps: {
                        introCard: "Welcome to your social area",
                        isStandalone: !0,
                        nextStepInfo: {
                            nextTask: f.TutorialTaskIds.RW_SOCIALS_INIT
                        }
                    },
                    completionEvents: []
                }]
            },
            [f.TutorialTaskIds.RW_SOCIALS_INIT]: {
                name: "Welcome To Your Social Area!",
                steps: [{
                    location: {
                        type: "SCREEN"
                    },
                    template: "remoteWorkFreeForm",
                    templateProps: {
                        isStandalone: !0,
                        heading: "Running your first social",
                        optionsList: [{
                            buttonContent: "Set up a social",
                            nextTask: f.TutorialTaskIds.RW_RUN_SOCIAL
                        }, {
                            buttonContent: "How games work in Gather",
                            nextTask: f.TutorialTaskIds.RW_GAMES
                        }, {
                            buttonContent: "Discover your lunch area",
                            nextTask: f.TutorialTaskIds.RW_LUNCH
                        }, {
                            buttonContent: "Don't show me this again",
                            exit: !0,
                            dismissTutorial: f.RW_SOCIAL_AREA_ID
                        }]
                    },
                    completionEvents: []
                }]
            },
            [f.TutorialTaskIds.RW_GAMES]: {
                name: "How Gather games work",
                steps: [{
                    location: {
                        type: "SCREEN"
                    },
                    template: "remoteWorkFreeForm",
                    templateProps: {
                        isStandalone: !0,
                        heading: "How Gather games work",
                        content: (0,
                        n.jsx)(a.default, {
                            flexDirection: "column"
                        }, (0,
                        n.jsx)("img", {
                            width: "100%",
                            src: "/images/remoteWorkOnboarding/games.gif"
                        }), (0,
                        n.jsx)(a.default, {
                            paddingX: 5,
                            paddingTop: 5
                        }, (0,
                        n.jsx)(S.default, {
                            kind: "body2"
                        }, "Games in gather are meant to foster interactivity with your team. Grab 4 of your colleagues and try Draw Battle."))),
                        nextStepInfo: {
                            buttonContent: (0,
                            n.jsx)(a.default, {
                                alignItems: "center"
                            }, (0,
                            n.jsx)(a.default, {
                                paddingRight: 2
                            }, (0,
                            n.jsx)("img", {
                                width: "32px",
                                height: "32px",
                                src: "/images/remoteWorkOnboarding/onboarding-drawbattle.png"
                            })), (0,
                            n.jsx)(S.default, {
                                kind: "body2"
                            }, "Try Draw Battle")),
                            nextStep: 2
                        },
                        ghostButtonInfo: {
                            buttonContent: "Back to main menu",
                            nextTask: f.TutorialTaskIds.RW_SOCIALS_INIT
                        }
                    },
                    completionEvents: []
                }, {
                    location: {
                        type: "SCREEN"
                    },
                    directionGuide: {
                        targetX: 53,
                        targetY: 33
                    },
                    template: "remoteWorkFreeForm",
                    templateProps: {
                        isStandalone: !0,
                        heading: "How Gather games work",
                        content: (0,
                        n.jsx)(a.default, {
                            paddingX: 5,
                            paddingTop: 5,
                            alignItems: "center"
                        }, (0,
                        n.jsx)(S.default, {
                            kind: "body2"
                        }, "Follow arrow to play ", (0,
                        n.jsx)(E, null, "Draw Battle"))),
                        nextStepInfo: {
                            buttonContent: "Back to main menu",
                            nextTask: f.TutorialTaskIds.RW_SOCIALS_INIT
                        }
                    },
                    completionEvents: [s.TutorialTaskEvents.PLAYER_INTERACTED]
                }]
            },
            [f.TutorialTaskIds.RW_RUN_SOCIAL]: {
                name: "Running your first social",
                steps: [{
                    location: {
                        type: "SCREEN"
                    },
                    template: "remoteWorkFreeForm",
                    directionGuide: {
                        targetX: 63,
                        targetY: 25
                    },
                    templateProps: {
                        isStandalone: !0,
                        heading: "Running your first social",
                        content: (0,
                        n.jsx)(a.default, {
                            flexDirection: "column"
                        }, (0,
                        n.jsx)("img", {
                            width: "100%",
                            src: "/images/remoteWorkOnboarding/gokarts-preview.gif"
                        }), (0,
                        n.jsx)(a.default, {
                            paddingX: 5,
                            paddingTop: 5
                        }, (0,
                        n.jsx)(S.default, {
                            kind: "body2"
                        }, "You can choose from a variety of fun activities for your team.", " ", (0,
                        n.jsx)(E, null, "Follow the arrow"), " and interact with the social room creator to generate a unique experience for your group."))),
                        nextStepInfo: {
                            buttonContent: "Back to main menu",
                            nextTask: f.TutorialTaskIds.RW_SOCIALS_INIT
                        }
                    },
                    completionEvents: [s.TutorialTaskEvents.PLAYER_INTERACTED]
                }]
            },
            [f.TutorialTaskIds.RW_LUNCH]: {
                name: "Discover your lunch area",
                steps: [{
                    location: {
                        type: "SCREEN"
                    },
                    template: "remoteWorkFreeForm",
                    templateProps: {
                        isStandalone: !0,
                        heading: "Discover your lunch area",
                        content: (0,
                        n.jsx)(a.default, {
                            paddingX: 5,
                            paddingTop: 5
                        }, (0,
                        n.jsx)(S.default, {
                            kind: "body2"
                        }, "Eating lunch in Gather gives team members the freedom to wander between tables and socialize, just like they would in real life! Invite a few collegues to join you for lunch.")),
                        nextStepInfo: {
                            buttonContent: "Copy link to set up a lunch",
                            eventInfo: {
                                title: "Gather lunch",
                                description: "Let's eat lunch together in Gather!",
                                spawn: f.areaToSpawnId[f.RW_LUNCH_AREA_ID]
                            }
                        },
                        ghostButtonInfo: {
                            buttonContent: "Back to main menu",
                            nextTask: f.TutorialTaskIds.RW_SOCIALS_INIT
                        }
                    },
                    completionEvents: [s.TutorialTaskEvents.TUTORIAL_TASK_ACKNOWLEDGED]
                }]
            },
            [f.TutorialTaskIds.RW_MEETINGS_INTRO]: {
                name: "Discover your meeting rooms",
                steps: [{
                    location: {
                        type: "SCREEN"
                    },
                    template: "remoteWorkFreeForm",
                    templateProps: {
                        introCard: "Welcome to your meeting room",
                        isStandalone: !0,
                        nextStepInfo: {
                            nextTask: f.TutorialTaskIds.RW_MEETINGS_INIT
                        }
                    },
                    completionEvents: []
                }]
            },
            [f.TutorialTaskIds.RW_MEETINGS_INIT]: {
                name: "Run your first meeting",
                steps: [{
                    location: {
                        type: "SCREEN"
                    },
                    template: "remoteWorkFreeForm",
                    templateProps: {
                        isStandalone: !0,
                        heading: "Run your first meeting",
                        optionsList: [{
                            buttonContent: "Share your screen",
                            nextTask: f.TutorialTaskIds.RW_SCREENSHARE
                        }, {
                            buttonContent: "Use a whiteboard",
                            nextTask: f.TutorialTaskIds.RW_WHITEBOARD
                        }, {
                            buttonContent: "Schedule a meeting",
                            nextTask: f.TutorialTaskIds.RW_SCHEDULE_MEETING,
                            activeTab: b.LeftBarTab.CALENDAR
                        }, {
                            buttonContent: "Don't show me this again",
                            exit: !0,
                            dismissTutorial: f.RW_MEETING_ROOM_ID
                        }]
                    },
                    completionEvents: []
                }]
            },
            [f.TutorialTaskIds.RW_SCREENSHARE]: {
                name: "Share your screen",
                steps: [{
                    location: {
                        type: "SCREEN"
                    },
                    template: "remoteWorkFreeForm",
                    templateProps: {
                        iconGlow: "screenshare",
                        isStandalone: !0,
                        heading: "Share your screen",
                        content: (0,
                        n.jsx)(a.default, {
                            paddingX: 5,
                            paddingTop: 5,
                            alignItems: "center"
                        }, (0,
                        n.jsx)(a.default, {
                            width: "60px",
                            height: "60px",
                            borderRadius: "16px",
                            backgroundColor: y.COLORS.DARK1,
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            marginRight: 3
                        }, (0,
                        n.jsx)(_.default, {
                            size: "lg",
                            color: y.COLORS.WHITE,
                            icon: I.faDesktop
                        })), (0,
                        n.jsx)(S.default, {
                            kind: "body2"
                        }, "Sharing your screen is easy! Just click the", " ", (0,
                        n.jsx)(E, null, "Screenshare"), " button in the Bottom Action Bar.")),
                        nextStepInfo: {
                            buttonContent: "Back to main menu",
                            nextTask: f.TutorialTaskIds.RW_MEETINGS_INIT
                        }
                    },
                    completionEvents: [s.TutorialTaskEvents.ACTION_BAR_CLICKED_SCREENSHARE]
                }]
            },
            [f.TutorialTaskIds.RW_WHITEBOARD]: {
                name: "Use a whiteboard",
                steps: [{
                    location: {
                        type: "SCREEN"
                    },
                    template: "remoteWorkFreeForm",
                    directionGuide: {
                        targetX: 2,
                        targetY: 33
                    },
                    templateProps: {
                        isStandalone: !0,
                        heading: "Use a whiteboard",
                        content: (0,
                        n.jsx)(a.default, {
                            flexDirection: "column"
                        }, (0,
                        n.jsx)("img", {
                            width: "100%",
                            src: "/images/remoteWorkOnboarding/whiteboard.gif"
                        }), (0,
                        n.jsx)(a.default, {
                            paddingX: 5,
                            paddingTop: 5,
                            alignItems: "center"
                        }, (0,
                        n.jsx)(S.default, {
                            kind: "body2"
                        }, "Brainstorming sessions, dynamic note taking, doodling. This can all be done with whiteboards, press X near the whiteboards to see it in action."))),
                        nextStepInfo: {
                            buttonContent: "Back to main menu",
                            nextTask: f.TutorialTaskIds.RW_MEETINGS_INIT
                        }
                    },
                    completionEvents: [s.TutorialTaskEvents.PLAYER_INTERACTED]
                }]
            },
            [f.TutorialTaskIds.RW_SCHEDULE_MEETING]: {
                name: "Schedule a meeting",
                steps: [{
                    location: {
                        type: "SCREEN"
                    },
                    template: "remoteWorkFreeForm",
                    templateProps: {
                        isStandalone: !0,
                        heading: "Schedule a meeting",
                        content: (0,
                        n.jsx)(a.default, {
                            paddingX: 5,
                            paddingTop: 5,
                            alignItems: "center"
                        }, (0,
                        n.jsx)(a.default, {
                            width: "60px",
                            height: "60px",
                            borderRadius: "16px",
                            backgroundColor: y.COLORS.WHITE,
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            marginRight: 3
                        }, (0,
                        n.jsx)(r.default, {
                            icon: "google",
                            size: "xl"
                        })), (0,
                        n.jsx)(S.default, {
                            kind: "body2"
                        }, "Connect your Google calendar on Gather to easily see, schedule, and teleport to meetings in your remote office.")),
                        nextStepInfo: {
                            buttonContent: "Back to main menu",
                            nextTask: f.TutorialTaskIds.RW_MEETINGS_INIT
                        }
                    },
                    completionEvents: [s.TutorialTaskEvents.CALENDAR_TAB_CLICKED_SIGN_IN, s.TutorialTaskEvents.CALENDAR_TAB_CLICKED_CREATE_EVENT]
                }]
            }
        };
        var M = Object.defineProperty
          , O = Object.defineProperties
          , A = Object.getOwnPropertyDescriptors
          , k = Object.getOwnPropertySymbols
          , P = Object.prototype.hasOwnProperty
          , D = Object.prototype.propertyIsEnumerable
          , R = (e,t,o)=>t in e ? M(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: o
        }) : e[t] = o
          , N = (e,t)=>{
            for (var o in t || (t = {}))
                P.call(t, o) && R(e, o, t[o]);
            if (k)
                for (var o of k(t))
                    D.call(t, o) && R(e, o, t[o]);
            return e
        }
        ;
        const x = (G = N(N({}, m), w),
        V = {
            [f.TutorialTaskIds.MOVEMENT]: {
                name: "Moving around",
                steps: [{
                    location: {
                        type: "SCREEN",
                        horizontalAlignment: "left"
                    },
                    template: "guideMovement",
                    completionEvents: [s.TutorialTaskEvents.PLAYER_MOVED, s.TutorialTaskEvents.PLAYER_MOVED_TO_GOAL]
                }]
            },
            [f.TutorialTaskIds.MUTING_UNMUTING]: {
                name: "Muting and unmuting",
                steps: [{
                    location: {
                        type: "DOM",
                        targetKey: s.TutorialTaskTooltipIds.GAME_SELF_VIDEO,
                        tooltipPosition: "top"
                    },
                    template: "guideMuting",
                    templateProps: {
                        step: 1
                    },
                    completionEvents: [s.TutorialTaskEvents.MUTED_SELF_SOUND, s.TutorialTaskEvents.UNMUTED_SELF_SOUND]
                }, {
                    location: {
                        type: "DOM",
                        targetKey: s.TutorialTaskTooltipIds.GAME_SELF_VIDEO,
                        tooltipPosition: "top"
                    },
                    template: "guideMuting",
                    templateProps: {
                        step: 2
                    },
                    completionEvents: [s.TutorialTaskEvents.MUTED_SELF_SOUND, s.TutorialTaskEvents.UNMUTED_SELF_SOUND]
                }]
            },
            [f.TutorialTaskIds.INTERACTING]: {
                name: "Interacting with objects",
                steps: [{
                    location: {
                        type: "SCREEN"
                    },
                    template: "guideInteracting",
                    completionEvents: [s.TutorialTaskEvents.PLAYER_INTERACTED]
                }, {
                    location: {
                        type: "DOM",
                        targetKey: s.TutorialTaskTooltipIds.MODAL_CLOSE_BUTTON,
                        tooltipPosition: "bottom"
                    },
                    template: "guideTop",
                    templateProps: {
                        content: (0,
                        n.jsx)(a.default, {
                            flexDirection: "column",
                            maxWidth: "180px"
                        }, (0,
                        n.jsx)("p", {
                            style: {
                                textAlign: "center"
                            }
                        }, "Try exiting the screen."), (0,
                        n.jsx)("p", {
                            style: {
                                textAlign: "center"
                            }
                        }, "Click on the close button or press X again."))
                    },
                    completionEvents: [s.TutorialTaskEvents.SANDBOX_MODAL_CLOSED]
                }]
            },
            [f.TutorialTaskIds.SANDBOX_USING_PORTALS]: {
                name: "Using portals",
                steps: [{
                    location: {
                        type: "SCREEN"
                    },
                    template: "guideSandboxPortal",
                    completionEvents: [s.TutorialTaskEvents.SANDBOX_PLAYER_MOVED_TO_PORTAL]
                }]
            },
            [f.TutorialTaskIds.BETA_FEEDBACK]: {
                name: "Beta Feedback",
                steps: [{
                    location: {
                        type: "DOM",
                        targetKey: s.TutorialTaskTooltipIds.BETA_FEEDBACK_TAB,
                        tooltipPosition: "right"
                    },
                    template: "guideLeft",
                    templateProps: {
                        content: (0,
                        n.jsx)(a.default, {
                            flexDirection: "column",
                            maxWidth: "160px"
                        }, (0,
                        n.jsx)("p", {
                            style: {
                                textAlign: "center"
                            }
                        }, "Got beta testing feedback?"), (0,
                        n.jsx)("p", {
                            style: {
                                textAlign: "center"
                            }
                        }, "Click the feedback button in the sidebar"), (0,
                        n.jsx)(a.default, {
                            paddingTop: 4,
                            alignItems: "center",
                            justifyContent: "center"
                        }, (0,
                        n.jsx)(r.default, {
                            icon: "userFeedback",
                            color: "white"
                        }))),
                        showClose: !0
                    },
                    completionEvents: [s.TutorialTaskEvents.TUTORIAL_TASK_ACKNOWLEDGED, s.TutorialTaskEvents.BETA_TAB_OPENED]
                }]
            }
        },
        O(G, A(V)))
          , L = {
            [s.PresetTutorialGroupIds.BASICS]: {
                name: "Basics",
                tutorialTaskIds: [f.TutorialTaskIds.MOVEMENT, f.TutorialTaskIds.MUTING_UNMUTING, f.TutorialTaskIds.INTERACTING]
            },
            [s.PresetTutorialGroupIds.NEW_OFFICE_DEMO]: {
                name: "Office Demo",
                tutorialTaskIds: [f.TutorialTaskIds.NEW_OFFICE_DEMO_WALKING, f.TutorialTaskIds.NEW_OFFICE_DEMO_DESK, f.TutorialTaskIds.NEW_OFFICE_DEMO_SPOTLIGHT]
            },
            [s.PresetTutorialGroupIds.BUILD_LOBBY]: {
                name: "Build Lobby",
                tutorialTaskIds: [f.TutorialTaskIds.RW_OPEN_BUILD_TAB, f.TutorialTaskIds.RW_BUILD_LOBBY_OBJS, f.TutorialTaskIds.RW_BUILD_LOBBY_FINISH]
            }
        }
          , j = {
            [i.PresetTutorialGroupSetIds.ONBOARDING_SANDBOX]: {
                headingText: "Welcome to Gather!",
                tutorialTaskGroupIds: [s.PresetTutorialGroupIds.BASICS]
            },
            [i.PresetTutorialGroupSetIds.NEW_OFFICE_DEMO]: {
                headingText: "A Day in the Office",
                tutorialTaskGroupIds: [s.PresetTutorialGroupIds.NEW_OFFICE_DEMO],
                hideLeftMenu: !0
            },
            [i.PresetTutorialGroupSetIds.RW_ONBOARDING]: {
                headingText: "Enable Rooms",
                tutorialTaskGroupIds: [s.PresetTutorialGroupIds.BUILD_LOBBY]
            }
        }
          , F = {
            [f.TutorialTaskIds.RW_OPEN_BUILD_TAB]: !0,
            [f.TutorialTaskIds.RW_BUILD_LOBBY_OBJS]: !0,
            [f.TutorialTaskIds.RW_BUILD_LOBBY_FINISH]: !0
        }
          , U = {
            [f.RW_LOBBY_AREA_ID]: f.TutorialTaskIds.RW_LOBBY_INTRO,
            [f.RW_SOCIAL_AREA_ID]: f.TutorialTaskIds.RW_SOCIALS_INTRO,
            [f.RW_MEETING_ROOM_ID]: f.TutorialTaskIds.RW_MEETINGS_INTRO
        }
          , B = {
            [f.TutorialTaskIds.RW_HOW_GATHER_WORKS]: f.TutorialTaskIds.RW_LOBBY_INIT,
            [f.TutorialTaskIds.RW_CUSTOMIZE_LOBBY]: f.TutorialTaskIds.RW_LOBBY_INIT,
            [f.TutorialTaskIds.RW_ADD_CUSTOM_LOGO]: f.TutorialTaskIds.RW_LOBBY_INIT,
            [f.TutorialTaskIds.RW_LUNCH]: f.TutorialTaskIds.RW_SOCIALS_INIT,
            [f.TutorialTaskIds.RW_RUN_SOCIAL]: f.TutorialTaskIds.RW_SOCIALS_INIT,
            [f.TutorialTaskIds.RW_GAMES]: f.TutorialTaskIds.RW_SOCIALS_INIT,
            [f.TutorialTaskIds.RW_WHITEBOARD]: f.TutorialTaskIds.RW_MEETINGS_INIT,
            [f.TutorialTaskIds.RW_SCREENSHARE]: f.TutorialTaskIds.RW_MEETINGS_INIT,
            [f.TutorialTaskIds.RW_SCHEDULE_MEETING]: f.TutorialTaskIds.RW_MEETINGS_INIT
        };
        var G, V
    }
    ,
    50: (e,t,o)=>{
        var n, a, r, i, s, c;
        o.d(t, {
            TutorialTaskEvents: ()=>n,
            TutorialTaskTooltipIds: ()=>a,
            PresetTutorialGroupIds: ()=>i
        }),
        o(26),
        (c = n || (n = {}))[c.ACTION_BAR_CLICKED_SCREENSHARE = 0] = "ACTION_BAR_CLICKED_SCREENSHARE",
        c[c.ACTION_BAR_HOVERED_EMOTES = 1] = "ACTION_BAR_HOVERED_EMOTES",
        c[c.BETA_TAB_OPENED = 2] = "BETA_TAB_OPENED",
        c[c.BUILD_TAB_OPENED = 3] = "BUILD_TAB_OPENED",
        c[c.CALENDAR_TAB_CLICKED_CREATE_EVENT = 4] = "CALENDAR_TAB_CLICKED_CREATE_EVENT",
        c[c.CALENDAR_TAB_CLICKED_SIGN_IN = 5] = "CALENDAR_TAB_CLICKED_SIGN_IN",
        c[c.DONE_EMOTE = 6] = "DONE_EMOTE",
        c[c.MODAL_CLOSED = 7] = "MODAL_CLOSED",
        c[c.MUTED_SELF_SOUND = 8] = "MUTED_SELF_SOUND",
        c[c.PLAYER_INTERACTED = 9] = "PLAYER_INTERACTED",
        c[c.PLAYER_MOVED_TO_GOAL = 10] = "PLAYER_MOVED_TO_GOAL",
        c[c.PLAYER_MOVED_TO_GUIDE_TILE = 11] = "PLAYER_MOVED_TO_GUIDE_TILE",
        c[c.PLAYER_MOVED_TO_AREA = 12] = "PLAYER_MOVED_TO_AREA",
        c[c.PLAYER_MOVED = 13] = "PLAYER_MOVED",
        c[c.PLAYER_USED_BUILD_TOOL = 14] = "PLAYER_USED_BUILD_TOOL",
        c[c.SANDBOX_MODAL_CLOSED = 15] = "SANDBOX_MODAL_CLOSED",
        c[c.SANDBOX_PLAYER_MOVED_TO_PORTAL = 16] = "SANDBOX_PLAYER_MOVED_TO_PORTAL",
        c[c.TUTORIAL_TASK_ACKNOWLEDGED = 17] = "TUTORIAL_TASK_ACKNOWLEDGED",
        c[c.UNMUTED_SELF_SOUND = 18] = "UNMUTED_SELF_SOUND",
        c[c.ARRIVED = 19] = "ARRIVED",
        c[c.ARRIVED_TO_LOCATION = 20] = "ARRIVED_TO_LOCATION",
        c[c.DONE_SPEAKING = 21] = "DONE_SPEAKING",
        c[c.PLACED_OBJECT = 22] = "PLACED_OBJECT",
        c[c.SPAWNED = 23] = "SPAWNED",
        (r = a || (a = {})).ACTION_BAR = "action-bar",
        r.ACTION_BAR_EMOTES = "action-bar-emotes",
        r.ACTION_BAR_SCREENSHARE = "action-bar-screenshare",
        r.ACTION_BAR_NAME_CONTAINER = "player-settings-name-container",
        r.BETA_FEEDBACK_TAB = "beta-feedback-tab",
        r.BUILD_TAB_BUILD_BUTTON = "build-tab-build-button",
        r.BUILD_TAB_BUTTON = "build-tab-button",
        r.BUILD_TAB_ERASE_BUTTON = "build-tab-erase-button",
        r.BUILD_TAB_OBJECT_PICKER_BUTTON = "build-tab-object-picker-button",
        r.GAME_SELF_VIDEO = "game-self-video",
        r.MODAL_CLOSE_BUTTON = "modal-close-button",
        r.OBJECT_PICKER_INTERACTIONS_CONTAINER = "object-picker-interactions-container",
        r.OBJECT_PICKER_MESSAGE_INPUT = "object-picker-message-input",
        r.OBJECT_PICKER_NOTE_OBJECT_BUTTON = "object-picker-note-object-button",
        r.OBJECT_PICKER_SEARCH_BAR = "object-picker-search-bar",
        r.PLAYER_SETTINGS_CONTAINER = "player-settings-container",
        r.PLAYER_SETTINGS_STATUS_INPUT = "player-settings-quiet-mode-toggle-button",
        r.TUTORIALS_TAB_BUTTON = "tutorials-tab-button",
        (s = i || (i = {})).BASICS = "BASICS",
        s.NEW_OFFICE_DEMO = "NEW_OFFICE_DEMO",
        s.BUILD_LOBBY = "BUILD_LOBBY"
    }
    ,
    61: (e,t,o)=>{
        o.d(t, {
            subscribeToTutorialTaskEvents: ()=>r,
            emitTutorialTaskEvent: ()=>i
        });
        const n = {};
        let a = 0;
        const r = e=>{
            const t = a;
            return n[t] = e,
            a++,
            ()=>(e=>{
                delete n[e]
            }
            )(t)
        }
          , i = (e,t)=>{
            for (const o in n)
                n[o](e, t)
        }
    }
    ,
    1625: (e,t,o)=>{
        o.d(t, {
            getNextTutorialTaskAndGroupInGroupSet: ()=>u,
            shouldGoToNextStepOnEvent: ()=>d,
            isCurrentStepLastStep: ()=>p,
            getNextPartialTutorialTaskState: ()=>h
        });
        var n = o(361)
          , a = Object.defineProperty
          , r = Object.getOwnPropertySymbols
          , i = Object.prototype.hasOwnProperty
          , s = Object.prototype.propertyIsEnumerable
          , c = (e,t,o)=>t in e ? a(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: o
        }) : e[t] = o;
        const l = (e,t,o)=>{
            const a = n.TUTORIAL_TASK_GROUPS[t];
            if (!a)
                throw new Error(`Tutorial task group with key '${t}' wasn't found.`);
            const r = e ? a.tutorialTaskIds.findIndex((t=>t === e)) : -1;
            for (let e = r + 1; e < a.tutorialTaskIds.length; e++) {
                const t = a.tutorialTaskIds[e];
                if (!o.includes(t))
                    return t
            }
            return null
        }
          , u = (e,t,o,a)=>{
            const r = n.TUTORIAL_TASK_GROUP_SETS[t];
            if (!r)
                throw new Error(`Tutorial task group set with key '${t}' wasn't found.`);
            const i = o ? r.tutorialTaskGroupIds.findIndex((e=>e === o)) : 0;
            for (let t = i; t < r.tutorialTaskGroupIds.length; t++) {
                const o = l(e, r.tutorialTaskGroupIds[t], a);
                if (o)
                    return {
                        taskId: o,
                        groupId: r.tutorialTaskGroupIds[t]
                    }
            }
            return {
                taskId: null,
                groupId: null
            }
        }
          , d = (e,t,{currentTutorialTaskId: o, currentStep: a})=>{
            if (!o)
                return !1;
            const r = n.TUTORIAL_TASKS[o];
            if (!r.steps[a - 1])
                return console.error(`No tutorial task step information was specified for step #${a}!`),
                !1;
            const i = r.steps[a - 1].completionEvents;
            if (Array.isArray(i))
                return i.includes(e);
            for (const [o,n] of Object.entries(i))
                if (e.toString() === o)
                    return "function" == typeof n ? n(t) : !!n;
            return !1
        }
          , p = ({currentTutorialTaskId: e, currentStep: t})=>!!e && t === n.TUTORIAL_TASKS[e].steps.length
          , h = ({currentTutorialTaskId: e, currentStep: t, completedTutorialTaskIds: o, currentAutoTutorialTaskGroupKey: a, currentAutoTutorialTaskGroupSetKey: l})=>{
            if (!e)
                return {};
            if (!n.TUTORIAL_TASKS[e].steps[t - 1])
                return console.error(`No tutorial task step information was specified for step #${t}!`),
                {};
            if (p({
                currentTutorialTaskId: e,
                currentStep: t
            })) {
                const {taskId: t, groupId: d} = l ? u(e, l, a, o) : {
                    taskId: null,
                    groupId: null
                }
                  , p = n.TUTORIAL_TASK_RETURN_TO_TASK_ON_COMPLETE[e]
                  , h = t || p
                  , f = new Set(o);
                return f.add(e),
                ((e,t)=>{
                    for (var o in t || (t = {}))
                        i.call(t, o) && c(e, o, t[o]);
                    if (r)
                        for (var o of r(t))
                            s.call(t, o) && c(e, o, t[o]);
                    return e
                }
                )({
                    currentTutorialTaskId: h,
                    currentStep: h ? 1 : 0,
                    completedTutorialTaskIds: [...f]
                }, h ? {
                    currentAutoTutorialTaskGroupKey: d
                } : {
                    currentAutoTutorialTaskGroupKey: null,
                    currentAutoTutorialTaskGroupSetKey: null
                })
            }
            return {
                currentStep: t + 1
            }
        }
    }
    ,
    37: (e,t,o)=>{
        o.d(t, {
            gameSpace: ()=>a,
            reInitGameSpace: ()=>r
        });
        var n = o(308);
        let a = new n.GameSpace;
        function r() {
            a.destroy(),
            a = new n.GameSpace
        }
    }
    ,
    86: (e,t,o)=>{
        o.d(t, {
            UserSetupSteps: ()=>n,
            UserSetupContext: ()=>h,
            UserSetupContextProvider: ()=>m
        });
        var n, a, r = o(3158), i = o(0), s = o(18), c = o(19), l = o(71), u = o(35), d = (e,t,o)=>new Promise(((n,a)=>{
            var r = e=>{
                try {
                    s(o.next(e))
                } catch (e) {
                    a(e)
                }
            }
              , i = e=>{
                try {
                    s(o.throw(e))
                } catch (e) {
                    a(e)
                }
            }
              , s = e=>e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
            s((o = o.apply(e, t)).next())
        }
        ));
        (a = n || (n = {}))[a.CHARACTER_SELECTION = 0] = "CHARACTER_SELECTION",
        a[a.AUDIO_VIDEO_SETUP = 1] = "AUDIO_VIDEO_SETUP",
        a[a.COMPLETE = 2] = "COMPLETE";
        const p = ()=>{
            console.error("UNBREAK NOW: No-op placeholder in UserSetupContext invoked! That probably means you aren't providing UserSetupContext.")
        }
          , h = (0,
        i.createContext)({
            currentSetupStep: 1,
            setCurrentSetupStep: p,
            spaceUserName: "",
            setSpaceUserName: p,
            characterId: void 0,
            setCharacterId: p,
            isLoading: !0,
            outfit: "",
            setOutfit: p
        })
          , f = e=>{
            const {currUser: t} = (0,
            i.useContext)(u.UserContext)
              , [o,n] = (0,
            i.useState)(1)
              , [a,r] = (0,
            i.useState)("")
              , [p,h] = (0,
            i.useState)()
              , [f,m] = (0,
            i.useState)("")
              , [v,g] = (0,
            i.useState)(!0)
              , S = (0,
            i.useRef)(!1);
            return (0,
            i.useEffect)((()=>{
                S.current || (S.current = !0,
                d(void 0, null, (function*() {
                    var o, a, i;
                    let u, p = "", f = "";
                    try {
                        const {name: o, avatar: n, outfit: a} = yield((e,t)=>d(void 0, null, (function*() {
                            const {name: o, avatar: n} = yield((e,t)=>d(void 0, null, (function*() {
                                return yield s.HttpV2Client.get(c.HttpV2Paths.SpaceUser, {
                                    auth: !0,
                                    params: {
                                        path: {
                                            space: t || (0,
                                            s.getRoomFromPath)() || "",
                                            user: e
                                        }
                                    }
                                })
                            }
                            )))(e, t)
                              , a = yield(0,
                            l.getUserOutfit)(e, t);
                            return {
                                name: o || "",
                                avatar: n,
                                outfit: a && 0 !== Object.keys(a.data).length ? a.data : null
                            }
                        }
                        )))(null == t ? void 0 : t.id, e);
                        p = o,
                        u = n,
                        f = a ? (0,
                        c.outfitToOutfitString)(a) : ""
                    } catch (e) {
                        console.error(`Failed get initial data: ${e}`)
                    }
                    try {
                        const e = null != (o = yield d(void 0, null, (function*() {
                            return s.HttpV2Client.get(c.HttpV2Paths.SpaceAvailableCharacters, {
                                auth: !0
                            })
                        }
                        ))) ? o : []
                          , n = null != (a = null != u ? u : null == t ? void 0 : t.avatar) ? a : void 0
                          , r = (0,
                        c.getCharacterProperties)(n || 0).characterNumber;
                        u = void 0 === n || n && !e.includes(r) ? (0,
                        c.getRandomCharacterNumber)(e) : n
                    } catch (e) {
                        console.error(`Failed to set default character ID using getSpaceAvailableCharacters: ${e}`);
                        const o = null != (i = null != u ? u : null == t ? void 0 : t.avatar) ? i : void 0;
                        u = void 0 === o ? (0,
                        c.getRandomCharacterNumber)(c.defaultCharacterNums) : o
                    }
                    const v = f || (null == t ? void 0 : t.outfitString) || "";
                    v && m(v);
                    const S = p || (null == t ? void 0 : t.name) || "";
                    (!S || void 0 === v) && !(0,
                    s.gate)(s.GatedFeatName.SkipCharacterSelection, (null == t ? void 0 : t.id) || null, (0,
                    s.getRoomFromPath)()) && n(0),
                    r(S),
                    h(u),
                    g(!1)
                }
                )))
            }
            ), [p, t, h, r, a, e, f]),
            {
                currentSetupStep: o,
                setCurrentSetupStep: n,
                spaceUserName: a,
                setSpaceUserName: r,
                characterId: p,
                setCharacterId: h,
                isLoading: v,
                outfit: f,
                setOutfit: m
            }
        }
          , m = (0,
        i.memo)((({roomId: e, children: t})=>{
            const o = f(e);
            return (0,
            r.jsx)(h.Provider, {
                value: o
            }, t)
        }
        ))
    }
    ,
    69: (e,t,o)=>{
        o.d(t, {
            default: ()=>a
        });
        var n = o(0);
        const a = e=>{
            (0,
            n.useEffect)((()=>{
                const t = t=>{
                    "Escape" === t.code && e()
                }
                ;
                return document.addEventListener("keydown", t),
                ()=>document.removeEventListener("keydown", t)
            }
            ), [e])
        }
    }
    ,
    592: (e,t,o)=>{
        o.d(t, {
            ThrottledDispatcher: ()=>r,
            UpdatePlayerInfoDispatcher: ()=>i
        });
        var n = o(20)
          , a = o(58);
        class r {
            constructor(e=0) {
                this.actionBuffer = [],
                this.flush = ()=>{
                    this.flushTimeoutId = void 0,
                    this.nextFlushTimestamp = void 0;
                    const e = this.actionBuffer.length;
                    0 !== e && (1 === e ? a.default.dispatch(this.actionBuffer[0]) : (0,
                    n.batch)((()=>{
                        for (let e = 0; e < this.actionBuffer.length; e++)
                            a.default.dispatch(this.actionBuffer[e])
                    }
                    )),
                    this.actionBuffer = [])
                }
                ,
                this.flushTimeoutDurationMs = e
            }
            dispatch(e) {
                0 !== this.flushTimeoutDurationMs ? (this.actionBuffer.push(e),
                this.flushAfterTimeout()) : a.default.dispatch(e)
            }
            setFlushTimeoutDurationMs(e) {
                this.flushTimeoutDurationMs = e,
                void 0 !== this.flushTimeoutId && void 0 !== this.nextFlushTimestamp && this.nextFlushTimestamp - Date.now() > e && (window.clearTimeout(this.flushTimeoutId),
                this.flushTimeoutId = void 0,
                this.nextFlushTimestamp = void 0,
                this.flushAfterTimeout())
            }
            flushAfterTimeout() {
                if (0 === this.flushTimeoutDurationMs)
                    this.flush();
                else {
                    if (void 0 !== this.flushTimeoutId)
                        return;
                    this.flushTimeoutId = window.setTimeout(this.flush, this.flushTimeoutDurationMs),
                    this.nextFlushTimestamp = Date.now() + this.flushTimeoutDurationMs
                }
            }
        }
        const i = new r
    }
    ,
    233: (e,t,o)=>{
        o.d(t, {
            showNotification: ()=>a,
            showCustomNotification: ()=>r,
            hideNotification: ()=>i
        });
        var n = o(3168);
        const a = (0,
        n.createAction)("notifications/show")
          , r = (0,
        n.createAction)("notifications/customshow")
          , i = (0,
        n.createAction)("notifications/hide")
    }
    ,
    888: (e,t,o)=>{
        o.d(t, {
            clearSpaceState: ()=>n
        });
        const n = (0,
        o(3168).createAction)("room/clearSpaceState")
    }
    ,
    890: (e,t,o)=>{
        o.d(t, {
            default: ()=>c,
            setDispatchGameUpdateToGameSpace: ()=>l
        });
        var n = o(26)
          , a = o(58)
          , r = o(28)
          , i = o(592);
        let s;
        function c(e) {
            (function(e) {
                var t;
                const o = (0,
                r.selectPlayerInfoMap)(a.default.getState())
                  , s = (0,
                r.selectPlayerInfoIds)(a.default.getState());
                let c = !1;
                for (const a in e) {
                    const i = e[a];
                    if (i === n.GAME_STATE_PLAYER_DISCONNECT_SYMBOL || !s.includes(a)) {
                        c = !0;
                        break
                    }
                    for (const n in e[a])
                        if (r.REDUX_PLAYER_FIELDS[n] && (null == (t = o[a]) ? void 0 : t[n]) !== i[n]) {
                            c = !0;
                            break
                        }
                    if (c)
                        break
                }
                c && i.UpdatePlayerInfoDispatcher.dispatch((0,
                r.updatePlayerInfo)(e))
            }
            )(e),
            null == s || s(e)
        }
        function l(e) {
            s = e
        }
    }
    ,
    65: (e,t,o)=>{
        o.d(t, {
            getMyPlayerId: ()=>p,
            getClosestObject: ()=>h,
            getPlayerMediaMags: ()=>f,
            getNumOnlinePlayers: ()=>m,
            getSpaceInfo: ()=>v,
            getUseSmartZoom: ()=>g,
            getManualCanvasZoom: ()=>S,
            getEditorToolMouseCtrl: ()=>y,
            getCurrentEditorTool: ()=>b,
            getIsInteracting: ()=>T,
            getSpotlightPlayerIds: ()=>I,
            getLocalPlayerIds: ()=>_,
            getSnapToGrid: ()=>E,
            getAnnouncerPlayerIds: ()=>C,
            getUseCase: ()=>w,
            getIsRemoteWorkUseCase: ()=>M
        });
        var n = o(58)
          , a = o(46)
          , r = o(33)
          , i = o(28)
          , s = o(34)
          , c = o(90)
          , l = o(115)
          , u = o(64)
          , d = o(30);
        const p = ()=>(0,
        i.selectMyPlayerId)(n.default.getState())
          , h = ()=>(0,
        a.selectClosestObject)(n.default.getState())
          , f = ()=>(0,
        r.selectPlayerMediaMags)(n.default.getState())
          , m = ()=>(0,
        i.selectNumOnlinePlayers)(n.default.getState())
          , v = ()=>(0,
        s.selectSpaceInfo)(n.default.getState())
          , g = ()=>(0,
        c.selectUseSmartZoom)(n.default.getState())
          , S = ()=>(0,
        c.selectManualCanvasZoom)(n.default.getState())
          , y = ()=>(0,
        l.editorToolMouseCtrlSelector)(n.default.getState())
          , b = ()=>(0,
        u.editorToolSelector)(n.default.getState())
          , T = ()=>(0,
        d.interactingSelector)(n.default.getState())
          , I = ()=>(0,
        r.selectSpotlightPlayerIds)(n.default.getState())
          , _ = ()=>(0,
        i.selectLocalPlayerIds)(n.default.getState())
          , E = ()=>(0,
        u.snapToGridSelector)(n.default.getState())
          , C = ()=>(0,
        r.selectAnnouncerPlayerIds)(n.default.getState())
          , w = ()=>(0,
        s.spaceUseCaseSelector)(n.default.getState())
          , M = ()=>(0,
        s.selectIsRemoteWorkUseCase)(n.default.getState())
    }
    ,
    64: (e,t,o)=>{
        o.d(t, {
            OBJECT_TEMPLATES_SESSION_STORAGE_KEY: ()=>v,
            EditorTool: ()=>g,
            ObjectLoadStatus: ()=>y,
            initializeObjectTemplates: ()=>E,
            editorToolSelector: ()=>w,
            useEditorToolSelector: ()=>M,
            currUnplacedObjectSelector: ()=>O,
            useCurrUnplacedObjectSelector: ()=>A,
            useRecentObjectsSelector: ()=>P,
            unconfirmedObjectsSelector: ()=>D,
            unconfirmedDeletionsSelector: ()=>R,
            useUnconfirmedDeletions: ()=>N,
            snapToGridSelector: ()=>x,
            useObjectsLoadStatusSelector: ()=>j,
            objectTemplatesSelector: ()=>F,
            useObjectTemplatesSelector: ()=>U,
            setEditorTool: ()=>B,
            setCurrUnplacedObject: ()=>G,
            addRecentObjects: ()=>W,
            addUnconfirmedObject: ()=>K,
            removeUnconfirmedObject: ()=>z,
            setUnconfirmedDeletions: ()=>Y,
            addUnconfirmedDeletion: ()=>H,
            setSnapToGrid: ()=>q,
            setObjectsLoadStatus: ()=>$,
            setObjectTemplates: ()=>Z,
            default: ()=>Q
        });
        var n = o(3168)
          , a = o(1914)
          , r = o(36)
          , i = o(20)
          , s = o(27)
          , c = Object.defineProperty
          , l = Object.defineProperties
          , u = Object.getOwnPropertyDescriptors
          , d = Object.getOwnPropertySymbols
          , p = Object.prototype.hasOwnProperty
          , h = Object.prototype.propertyIsEnumerable
          , f = (e,t,o)=>t in e ? c(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: o
        }) : e[t] = o
          , m = (e,t)=>{
            for (var o in t || (t = {}))
                p.call(t, o) && f(e, o, t[o]);
            if (d)
                for (var o of d(t))
                    h.call(t, o) && f(e, o, t[o]);
            return e
        }
        ;
        const v = "objectTemplates";
        var g, S, y, b;
        (S = g || (g = {}))[S.None = 0] = "None",
        S[S.Asset = 1] = "Asset",
        S[S.Delete = 2] = "Delete",
        (b = y || (y = {})).None = "none",
        b.Loading = "loading",
        b.Success = "success",
        b.Failure = "failure";
        const T = window.sessionStorage.getItem(v)
          , I = {
            editorTool: 0,
            currUnplacedObject: null,
            recentObjects: [],
            unconfirmedObjects: {},
            unconfirmedDeletions: [],
            snapToGrid: !1,
            objectsLoadStatus: y.None,
            objectTemplates: T ? JSON.parse(T) : []
        }
          , _ = (0,
        n.createSlice)({
            name: "build",
            initialState: I,
            reducers: {
                setEditorTool(e, t) {
                    e.editorTool = t.payload
                },
                setCurrUnplacedObject(e, t) {
                    e.currUnplacedObject = t.payload
                },
                setRecentObjects(e, t) {
                    e.recentObjects = t.payload
                },
                addRecentObjects(e, t) {
                    e.recentObjects.find((e=>(0,
                    r.isEqual)(e, t.payload))) || (e.recentObjects = [t.payload, ...e.recentObjects.splice(0, s.MAX_RECENT_OBJECTS - 1)])
                },
                addUnconfirmedObject(e, t) {
                    t.payload.id && (e.unconfirmedObjects = ((e,t)=>l(e, u(t)))(m({}, e.unconfirmedObjects), {
                        [t.payload.id]: t.payload
                    }))
                },
                removeUnconfirmedObject(e, t) {
                    const o = m({}, e.unconfirmedObjects);
                    delete o[t.payload],
                    e.unconfirmedObjects = o
                },
                setUnconfirmedDeletions(e, t) {
                    e.unconfirmedDeletions = t.payload
                },
                addUnconfirmedDeletion(e, t) {
                    e.unconfirmedDeletions = [...e.unconfirmedDeletions, t.payload]
                },
                setSnapToGrid(e, t) {
                    e.snapToGrid = t.payload
                },
                setObjectsLoadStatus(e, t) {
                    e.objectsLoadStatus = t.payload
                },
                setObjectTemplates(e, t) {
                    e.objectTemplates = t.payload
                }
            }
        })
          , E = (0,
        n.createAction)("build/initObjectTemplates")
          , C = e=>e.build
          , w = (0,
        a.createSelector)(C, (e=>e.editorTool))
          , M = ()=>(0,
        i.useSelector)(w)
          , O = (0,
        a.createSelector)(C, (e=>e.currUnplacedObject))
          , A = ()=>(0,
        i.useSelector)(O)
          , k = (0,
        a.createSelector)(C, (e=>e.recentObjects))
          , P = ()=>(0,
        i.useSelector)(k)
          , D = (0,
        a.createSelector)(C, (e=>e.unconfirmedObjects))
          , R = (0,
        a.createSelector)(C, (e=>e.unconfirmedDeletions))
          , N = ()=>(0,
        i.useSelector)(R)
          , x = (0,
        a.createSelector)(C, (e=>e.snapToGrid))
          , L = (0,
        a.createSelector)(C, (e=>e.objectsLoadStatus))
          , j = ()=>(0,
        i.useSelector)(L)
          , F = (0,
        a.createSelector)(C, (e=>e.objectTemplates))
          , U = ()=>(0,
        i.useSelector)(F)
          , {setEditorTool: B, setCurrUnplacedObject: G, setRecentObjects: V, addRecentObjects: W, addUnconfirmedObject: K, removeUnconfirmedObject: z, setUnconfirmedDeletions: Y, addUnconfirmedDeletion: H, setSnapToGrid: q, setObjectsLoadStatus: $, setObjectTemplates: Z} = _.actions
          , Q = _.reducer
    }
    ,
    67: (e,t,o)=>{
        o.d(t, {
            useCurrentRecipientSelector: ()=>p,
            useModMessageSelector: ()=>f,
            useMessagesSelector: ()=>v,
            useInputFocusSelector: ()=>S,
            useUnreadMessageCountSelector: ()=>b,
            isChatMutedSelector: ()=>T,
            useIsChatMutedSelector: ()=>I,
            setCurrentRecipient: ()=>_,
            setModMessage: ()=>E,
            setMessages: ()=>C,
            addMessage: ()=>w,
            setInputFocus: ()=>M,
            setUnreadMessageCount: ()=>O,
            setIsChatMuted: ()=>A,
            default: ()=>k
        });
        var n, a = o(3168), r = o(1914), i = o(18), s = o(20);
        const c = {
            currentRecipient: null,
            messages: [],
            modMessage: "",
            inputFocus: !1,
            unreadMessageCount: 0,
            isChatMuted: null != (n = i.localPreferences.getForRoom(i.LocalPreferenceRoomKeys.IsChatMuted)) && n
        }
          , l = (0,
        a.createSlice)({
            name: "chat",
            initialState: c,
            reducers: {
                setCurrentRecipient(e, t) {
                    e.currentRecipient = t.payload
                },
                setModMessage(e, t) {
                    e.modMessage = t.payload
                },
                setMessages(e, t) {
                    const o = e.messages.concat(t.payload);
                    o.sort(((e,t)=>e.unixTime - t.unixTime)),
                    e.messages = [],
                    o.forEach(((t,n)=>{
                        if (n > 0) {
                            const e = o[n - 1];
                            if (Math.abs(e.unixTime - t.unixTime) <= .05 && e.senderId === t.senderId && e.recipient === t.recipient && e.contents === t.contents)
                                return
                        }
                        e.messages.push(t)
                    }
                    ))
                },
                addMessage(e, t) {
                    if (Array.isArray(t.payload)) {
                        const [o,n] = t.payload;
                        e.messages.push(o),
                        n && (e.currentRecipient = o.senderId)
                    } else
                        e.messages.push(t.payload)
                },
                setInputFocus(e, t) {
                    e.inputFocus = t.payload
                },
                setUnreadMessageCount(e, t) {
                    e.unreadMessageCount = t.payload
                },
                setIsChatMuted(e, t) {
                    e.isChatMuted = t.payload
                }
            }
        })
          , u = e=>e.chat
          , d = (0,
        r.createSelector)(u, (e=>e.currentRecipient))
          , p = ()=>(0,
        s.useSelector)(d)
          , h = (0,
        r.createSelector)(u, (e=>e.modMessage))
          , f = ()=>(0,
        s.useSelector)(h)
          , m = (0,
        r.createSelector)(u, (e=>e.messages))
          , v = ()=>(0,
        s.useSelector)(m)
          , g = (0,
        r.createSelector)(u, (e=>e.inputFocus))
          , S = ()=>(0,
        s.useSelector)(g)
          , y = (0,
        r.createSelector)(u, (e=>e.unreadMessageCount))
          , b = ()=>(0,
        s.useSelector)(y)
          , T = (0,
        r.createSelector)(u, (e=>e.isChatMuted))
          , I = ()=>(0,
        s.useSelector)(T)
          , {setCurrentRecipient: _, setModMessage: E, setMessages: C, addMessage: w, setInputFocus: M, setUnreadMessageCount: O, setIsChatMuted: A} = l.actions
          , k = l.reducer
    }
    ,
    115: (e,t,o)=>{
        o.d(t, {
            ClickInteractionType: ()=>n,
            ClickTargetType: ()=>a,
            ClickActions: ()=>i,
            contextMenuSelector: ()=>v,
            useContextMenuSelector: ()=>g,
            editorToolMouseCtrlSelector: ()=>S,
            useEditorToolMouseCtrlSelector: ()=>y,
            setCurrentClick: ()=>b,
            setContextMenu: ()=>T,
            setCurrentAction: ()=>I,
            setEditorToolMouseCtrl: ()=>_,
            default: ()=>E
        });
        var n, a, r, i, s, c, l, u, d = o(3168), p = o(1914), h = o(20);
        (u = n || (n = {}))[u.Hover = 0] = "Hover",
        u[u.Primary = 1] = "Primary",
        u[u.Secondary = 2] = "Secondary",
        (l = a || (a = {}))[l.Floor = 0] = "Floor",
        l[l.Impassable = 1] = "Impassable",
        l[l.Object = 2] = "Object",
        l[l.Player = 3] = "Player",
        (c = r || (r = {}))[c.Clear = 0] = "Clear",
        c[c.HoverPlayer = 1] = "HoverPlayer",
        (s = i || (i = {}))[s.Move = 0] = "Move",
        s[s.Interact = 1] = "Interact",
        s[s.Follow = 2] = "Follow",
        s[s.SendChat = 3] = "SendChat",
        s[s.StartConversation = 4] = "StartConversation",
        s[s.AddObject = 5] = "AddObject",
        s[s.RemoveObject = 6] = "RemoveObject",
        s[s.MobilePlayerMenu = 7] = "MobilePlayerMenu";
        const f = (0,
        d.createSlice)({
            name: "click",
            initialState: {
                currentClick: null,
                contextMenu: null,
                currentAction: null,
                editorToolMouseCtrl: !1
            },
            reducers: {
                setCurrentClick(e, t) {
                    e.currentClick = t.payload
                },
                setContextMenu(e, t) {
                    e.contextMenu = t.payload
                },
                setCurrentAction(e, t) {
                    e.currentAction = t.payload
                },
                setEditorToolMouseCtrl(e, t) {
                    e.editorToolMouseCtrl = t.payload
                }
            }
        })
          , m = e=>e.click
          , v = ((0,
        p.createSelector)(m, (e=>e.currentClick)),
        (0,
        p.createSelector)(m, (e=>e.contextMenu)))
          , g = ()=>(0,
        h.useSelector)(v)
          , S = ((0,
        p.createSelector)(m, (e=>e.currentAction)),
        (0,
        p.createSelector)(m, (e=>e.editorToolMouseCtrl)))
          , y = ()=>(0,
        h.useSelector)(S)
          , {setCurrentClick: b, setContextMenu: T, setCurrentAction: I, setEditorToolMouseCtrl: _} = f.actions
          , E = f.reducer
    }
    ,
    97: (e,t,o)=>{
        o.d(t, {
            claimDeskStageSelector: ()=>f,
            useClaimDeskStageSelector: ()=>m,
            selectedDeskIdSelector: ()=>v,
            useSelectedDeskIdSelector: ()=>g,
            closestDeskPosSelector: ()=>S,
            claimedDeskIdSelector: ()=>y,
            useClaimedDeskIdSelector: ()=>b,
            atDeskSelector: ()=>T,
            useAtDeskSelector: ()=>I,
            deskToPlayerSelector: ()=>_,
            useDeskToPlayerSelector: ()=>E,
            useNumDesksSelector: ()=>w,
            numFreeDesksSelector: ()=>M,
            useNumFreeDesksSelector: ()=>O,
            setClaimDeskStage: ()=>A,
            setSelectedDeskId: ()=>k,
            setClosestDeskPos: ()=>P,
            setClaimedDeskId: ()=>D,
            setAtDesk: ()=>R,
            setDeskToPlayer: ()=>N,
            setNumDesks: ()=>x,
            setNumFreeDesks: ()=>L,
            default: ()=>j
        });
        var n = o(3168)
          , a = o(1914)
          , r = o(20)
          , i = Object.defineProperty
          , s = Object.getOwnPropertySymbols
          , c = Object.prototype.hasOwnProperty
          , l = Object.prototype.propertyIsEnumerable
          , u = (e,t,o)=>t in e ? i(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: o
        }) : e[t] = o
          , d = (e,t)=>{
            for (var o in t || (t = {}))
                c.call(t, o) && u(e, o, t[o]);
            if (s)
                for (var o of s(t))
                    l.call(t, o) && u(e, o, t[o]);
            return e
        }
        ;
        const p = (0,
        n.createSlice)({
            name: "desk",
            initialState: {
                claimDeskStage: null,
                selectedDeskId: null,
                closestDeskPos: null,
                claimedDeskId: "",
                atDesk: "",
                deskToPlayer: {},
                numDesks: {},
                numFreeDesks: {}
            },
            reducers: {
                setClaimDeskStage(e, t) {
                    e.claimDeskStage = t.payload
                },
                setSelectedDeskId(e, t) {
                    e.selectedDeskId = t.payload
                },
                setClosestDeskPos(e, t) {
                    e.closestDeskPos = t.payload ? d({}, t.payload) : null
                },
                setClaimedDeskId(e, t) {
                    e.claimedDeskId = t.payload
                },
                setAtDesk(e, t) {
                    e.atDesk = t.payload
                },
                setDeskToPlayer(e, t) {
                    e.deskToPlayer = t.payload
                },
                setNumDesks(e, t) {
                    e.numDesks = d(d({}, e.numDesks), t.payload)
                },
                setNumFreeDesks(e, t) {
                    e.numFreeDesks = d(d({}, e.numFreeDesks), t.payload)
                }
            }
        })
          , h = e=>e.desk
          , f = (0,
        a.createSelector)(h, (e=>e.claimDeskStage))
          , m = ()=>(0,
        r.useSelector)(f)
          , v = (0,
        a.createSelector)(h, (e=>e.selectedDeskId))
          , g = ()=>(0,
        r.useSelector)(v)
          , S = (0,
        a.createSelector)(h, (e=>e.closestDeskPos))
          , y = (0,
        a.createSelector)(h, (e=>e.claimedDeskId))
          , b = ()=>(0,
        r.useSelector)(y)
          , T = (0,
        a.createSelector)(h, (e=>e.atDesk))
          , I = ()=>(0,
        r.useSelector)(T)
          , _ = (0,
        a.createSelector)(h, (e=>e.deskToPlayer))
          , E = ()=>(0,
        r.useSelector)(_)
          , C = (0,
        a.createSelector)(h, (e=>e.numDesks))
          , w = ()=>(0,
        r.useSelector)(C)
          , M = (0,
        a.createSelector)(h, (e=>e.numFreeDesks))
          , O = ()=>(0,
        r.useSelector)(M)
          , {setClaimDeskStage: A, setSelectedDeskId: k, setClosestDeskPos: P, setClaimedDeskId: D, setAtDesk: R, setDeskToPlayer: N, setNumDesks: x, setNumFreeDesks: L} = ((0,
        a.createSelector)(h, (e=>e.atDesk === e.claimedDeskId)),
        p.actions)
          , j = p.reducer
    }
    ,
    198: (e,t,o)=>{
        o.d(t, {
            ResponseStatus: ()=>n,
            Loader: ()=>a,
            syncEvents: ()=>v,
            syncAccountInfo: ()=>g,
            syncSelectedCalendars: ()=>S,
            signOut: ()=>y,
            eventsSelector: ()=>T,
            useEvents: ()=>I,
            useIsSignedIn: ()=>E,
            calendarsSelector: ()=>C,
            useCalendars: ()=>w,
            useHasSpaceWideCalendar: ()=>O,
            useLoader: ()=>k,
            setEvents: ()=>P,
            setIsSignedIn: ()=>D,
            setCalendars: ()=>R,
            setHasSpaceWideCalendar: ()=>N,
            setLoader: ()=>x,
            getGCalOAuthLink: ()=>L,
            getCalendars: ()=>j,
            updateCalendarAuth: ()=>F,
            deleteCalendarAuth: ()=>U,
            getEvents: ()=>B,
            default: ()=>G
        });
        var n, a, r, i, s = o(3168), c = o(20), l = o(31), u = o.n(l), d = o(32), p = o(19), h = o(18), f = (e,t,o)=>new Promise(((n,a)=>{
            var r = e=>{
                try {
                    s(o.next(e))
                } catch (e) {
                    a(e)
                }
            }
              , i = e=>{
                try {
                    s(o.throw(e))
                } catch (e) {
                    a(e)
                }
            }
              , s = e=>e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
            s((o = o.apply(e, t)).next())
        }
        ));
        (i = n || (n = {})).NeedsAction = "needsAction",
        i.Declined = "declined",
        i.Tentative = "tentative",
        i.Accepted = "accepted",
        (r = a || (a = {}))[r.Space = 0] = "Space",
        r[r.Inline = 1] = "Inline";
        const m = (0,
        s.createSlice)({
            name: "event",
            initialState: {
                events: void 0,
                isSignedIn: void 0,
                calendars: void 0,
                loader: void 0,
                hasSpaceWideCalendar: !1
            },
            reducers: {
                setEvents(e, t) {
                    e.events = t.payload
                },
                setIsSignedIn(e, t) {
                    e.isSignedIn = t.payload
                },
                setCalendars(e, t) {
                    e.calendars = t.payload
                },
                setHasSpaceWideCalendar(e, t) {
                    e.hasSpaceWideCalendar = t.payload
                },
                setLoader(e, t) {
                    e.loader = t.payload
                }
            }
        })
          , v = (0,
        s.createAction)("events/syncEvents")
          , g = (0,
        s.createAction)("events/syncAccountInfo")
          , S = (0,
        s.createAction)("event/syncSelectedCalendars")
          , y = (0,
        s.createAction)("event/signOut");
        function b(e) {
            return t=>t.event[e]
        }
        const T = b("events")
          , I = ()=>(0,
        c.useSelector)(T)
          , _ = b("isSignedIn")
          , E = ()=>(0,
        c.useSelector)(_)
          , C = b("calendars")
          , w = ()=>(0,
        c.useSelector)(C)
          , M = b("hasSpaceWideCalendar")
          , O = ()=>(0,
        c.useSelector)(M)
          , A = b("loader")
          , k = ()=>(0,
        c.useSelector)(A)
          , {setEvents: P, setIsSignedIn: D, setCalendars: R, setHasSpaceWideCalendar: N, setLoader: x} = m.actions
          , L = e=>f(void 0, null, (function*() {
            try {
                const t = yield d.authTokenManager.waitForToken();
                return {
                    authUrl: (yield u().post(`${window.location.origin}/api/v2/spaces/${encodeURIComponent(e)}/calendar-auths`, void 0, {
                        headers: {
                            authorization: `Bearer ${t}`
                        }
                    })).data.authUrl
                }
            } catch (e) {
                return {
                    error: "UNKNOWN_ERROR"
                }
            }
        }
        ))
          , j = e=>f(void 0, null, (function*() {
            try {
                const t = yield d.authTokenManager.waitForToken();
                return {
                    calendars: (yield u().get(`${window.location.origin}/api/v2/spaces/${encodeURIComponent(e)}/calendars`, {
                        headers: {
                            authorization: `Bearer ${t}`
                        }
                    })).data
                }
            } catch (e) {
                return e.response.data.error ? {
                    error: e.response.data.error,
                    code: e.response.data.code
                } : {
                    error: "UNKNOWN_ERROR"
                }
            }
        }
        ))
          , F = (e,t,o)=>f(void 0, null, (function*() {
            try {
                const n = yield d.authTokenManager.waitForToken();
                return yield u().put(`${window.location.origin}/api/v2/spaces/${encodeURIComponent(e)}/calendar-auths/${t}`, {
                    selectedCalendarIds: o
                }, {
                    headers: {
                        authorization: `Bearer ${n}`
                    }
                }),
                !0
            } catch (e) {
                return {
                    error: "UNKNOWN_ERROR"
                }
            }
        }
        ))
          , U = (e,t)=>f(void 0, null, (function*() {
            try {
                yield h.HttpV2Client.delete(p.HttpV2Paths.SpaceCalendarAuth, {
                    auth: !0,
                    params: {
                        path: {
                            space: e,
                            accountId: t
                        }
                    }
                })
            } catch (e) {
                return {
                    error: "UNKNOWN_ERROR"
                }
            }
        }
        ))
          , B = (e,t,o)=>f(void 0, null, (function*() {
            try {
                return {
                    events: yield h.HttpV2Client.get(p.HttpV2Paths.SpaceCalendarEvents, {
                        auth: !0,
                        params: {
                            path: {
                                space: e
                            },
                            query: {
                                timeMin: t,
                                timeMax: o
                            }
                        }
                    })
                }
            } catch (e) {
                return {
                    error: "UNKNOWN_ERROR"
                }
            }
        }
        ))
          , G = m.reducer
    }
    ,
    46: (e,t,o)=>{
        o.d(t, {
            currentMapSelector: ()=>c,
            useCurrentMapSelector: ()=>l,
            useLocatingIdSelector: ()=>d,
            useLocatingLabelSelector: ()=>h,
            useFollowingIdSelector: ()=>m,
            whisperGroupSelector: ()=>v,
            useWhisperGroupSelector: ()=>g,
            selectClosestObject: ()=>S,
            useClosestObjectSelector: ()=>y,
            currentAreaIdSelector: ()=>b,
            useCurrentAreaIdSelector: ()=>T,
            useHasAreasSelector: ()=>_,
            setCurrentMap: ()=>E,
            setLocating: ()=>C,
            setFollowingId: ()=>w,
            setWhisperGroup: ()=>M,
            setClosestObject: ()=>O,
            setCurrentAreaId: ()=>A,
            setHasAreas: ()=>k,
            default: ()=>P
        });
        var n = o(3168)
          , a = o(1914)
          , r = o(20);
        const i = (0,
        n.createSlice)({
            name: "map",
            initialState: {
                current: null,
                locatingId: null,
                locatingLabel: null,
                followingId: null,
                whisperGroup: [],
                closestObject: null,
                currentAreaId: null,
                hasAreas: !1
            },
            reducers: {
                setCurrentMap(e, t) {
                    e.current = t.payload
                },
                setLocating(e, t) {
                    e.locatingId = t.payload.id,
                    e.locatingLabel = t.payload.label || null
                },
                setFollowingId(e, t) {
                    e.followingId = t.payload
                },
                setWhisperGroup(e, t) {
                    e.whisperGroup = t.payload
                },
                setClosestObject(e, t) {
                    e.closestObject = t.payload
                },
                setCurrentAreaId(e, t) {
                    e.currentAreaId = t.payload
                },
                setHasAreas(e, t) {
                    e.hasAreas = t.payload
                }
            }
        })
          , s = e=>e.map
          , c = (0,
        a.createSelector)(s, (e=>e.current))
          , l = ()=>(0,
        r.useSelector)(c)
          , u = (0,
        a.createSelector)(s, (e=>e.locatingId))
          , d = ()=>(0,
        r.useSelector)(u)
          , p = (0,
        a.createSelector)(s, (e=>e.locatingLabel))
          , h = ()=>(0,
        r.useSelector)(p)
          , f = (0,
        a.createSelector)(s, (e=>e.followingId))
          , m = ()=>(0,
        r.useSelector)(f)
          , v = (0,
        a.createSelector)(s, (e=>e.whisperGroup))
          , g = ()=>(0,
        r.useSelector)(v)
          , S = (0,
        a.createSelector)(s, (e=>e.closestObject))
          , y = ()=>(0,
        r.useSelector)(S)
          , b = (0,
        a.createSelector)(s, (e=>e.currentAreaId))
          , T = ()=>(0,
        r.useSelector)(b)
          , I = (0,
        a.createSelector)(s, (e=>e.hasAreas))
          , _ = ()=>(0,
        r.useSelector)(I)
          , {setCurrentMap: E, setLocating: C, setFollowingId: w, setWhisperGroup: M, setClosestObject: O, setCurrentAreaId: A, setHasAreas: k} = i.actions
          , P = i.reducer
    }
    ,
    96: (e,t,o)=>{
        o.d(t, {
            MModal: ()=>n,
            useModalOpenSelector: ()=>d,
            useChatOpenSelector: ()=>h,
            setModalOpen: ()=>f,
            setChatOpen: ()=>m,
            default: ()=>v
        });
        var n, a, r = o(3168), i = o(1914), s = o(20);
        (a = n || (n = {}))[a.PlayerSettings = 0] = "PlayerSettings",
        a[a.AVInput = 1] = "AVInput";
        const c = (0,
        r.createSlice)({
            name: "mobileNav",
            initialState: {
                modalOpen: null,
                chatOpen: !1
            },
            reducers: {
                setModalOpen(e, t) {
                    e.modalOpen = t.payload
                },
                setChatOpen(e, t) {
                    e.chatOpen = t.payload
                }
            }
        })
          , l = e=>e.mobileNav
          , u = (0,
        i.createSelector)(l, (e=>e.modalOpen))
          , d = ()=>(0,
        s.useSelector)(u)
          , p = (0,
        i.createSelector)(l, (e=>e.chatOpen))
          , h = ()=>(0,
        s.useSelector)(p)
          , {setModalOpen: f, setChatOpen: m} = c.actions
          , v = c.reducer
    }
    ,
    30: (e,t,o)=>{
        o.d(t, {
            LeftBarTab: ()=>a,
            AVErrorType: ()=>r,
            activeTabSelector: ()=>g,
            useActiveTabSelector: ()=>S,
            toastSelector: ()=>y,
            useToastSelector: ()=>b,
            useInteractMessageSelector: ()=>I,
            gridViewSelector: ()=>_,
            useGridViewSelector: ()=>E,
            interactingSelector: ()=>C,
            useInteractingSelector: ()=>w,
            useInteractionTypeSelector: ()=>O,
            useInviteShownSelector: ()=>k,
            useIsInviteShownWhenAloneSelector: ()=>D,
            useAVErrorPopupSelector: ()=>N,
            useShowProduceErrorSelector: ()=>L,
            useShowReportAVIssueSelector: ()=>F,
            useShowBetaFeedbackSelector: ()=>B,
            useShowFeedbackSelector: ()=>V,
            lastViewSelector: ()=>W,
            useLastViewSelector: ()=>K,
            useNameCardPlayerSelector: ()=>Y,
            useVideoLimitSelector: ()=>q,
            useCarouselIndexSelector: ()=>Z,
            useCanvasDimSelector: ()=>X,
            useShowAnonBannerSelector: ()=>ee,
            useCharacterModalEditNameSelector: ()=>oe,
            useShowCreateSpaceModalSelector: ()=>ae,
            setActiveTab: ()=>re,
            setTransientToast: ()=>ie,
            clearToast: ()=>se,
            setInteractMessage: ()=>ce,
            setGridView: ()=>le,
            setInviteShown: ()=>ue,
            showAVErrorPopup: ()=>de,
            clearAVErrorPopup: ()=>pe,
            setShowProduceError: ()=>he,
            setShowReportAVIssue: ()=>fe,
            setShowBetaFeedback: ()=>me,
            setShowFeedback: ()=>ve,
            setInteracting: ()=>ge,
            setInteractionType: ()=>Se,
            setLastViewState: ()=>ye,
            setNameCardPlayer: ()=>be,
            clearNameCardPlayer: ()=>Te,
            setVideoLimit: ()=>Ie,
            resetCarouselIndexLastPage: ()=>_e,
            moveCarouselPrevious: ()=>Ee,
            moveCarouselNext: ()=>Ce,
            setCanvasDim: ()=>we,
            setShowAnonBanner: ()=>Me,
            setCharacterModalEditName: ()=>Oe,
            setShowCreateSpaceModal: ()=>Ae,
            default: ()=>ke
        });
        var n, a, r, i, s = o(26), c = o(3168), l = o(1914), u = o(18), d = o(43), p = o(20);
        (i = a || (a = {})).BUILD = "BUILD",
        i.CALENDAR = "CALENDAR",
        i.CHAT = "CHAT",
        i.PARTICIPANTS = "PARTICIPANTS",
        i.TUTORIALS = "TUTORIALS",
        i.DESK = "DESK",
        function(e) {
            e.ConnectionError = "connectionerror",
            e.OutOfDevicesError = "outofdeviceserror",
            e.Disconnected = "disconnected",
            e.Mute = "mute",
            e.Isolated = "isolated",
            e.PlaybackError = "playbackerror"
        }(r || (r = {}));
        const h = d.isMobile ? 0 : 475
          , f = {
            activeTab: a.PARTICIPANTS,
            toast: null,
            gridView: !1,
            inviteShown: null != (n = u.localPreferences.getForRoom(u.LocalPreferenceRoomKeys.OnboardingInviteShown)) && n,
            isInviteShownWhenAlone: !1,
            avErrorMessage: void 0,
            showProduceError: !1,
            showReportAVIssue: !1,
            showBetaFeedback: !1,
            showFeedback: !1,
            interacting: !1,
            interactionType: s.Interaction.NONE,
            lastView: null,
            nameCardPlayer: null,
            videoLimit: 2,
            carouselIndex: 0,
            canvasDim: {
                height: Math.max(window.innerHeight, h),
                width: d.isMobile ? window.innerWidth : window.innerWidth - 72 - 256
            },
            showAnonBanner: !1,
            interactMessage: null,
            characterModalEditName: !1,
            showCreateSpaceModal: !1
        }
          , m = (0,
        c.createSlice)({
            name: "nav",
            initialState: f,
            reducers: {
                setActiveTab(e, t) {
                    e.activeTab = t.payload
                },
                setTransientToast(e, t) {
                    e.toast = t.payload
                },
                clearToast(e) {
                    e.toast = null
                },
                setInteractMessage(e, t) {
                    e.interactMessage = t.payload
                },
                setGridView(e, t) {
                    e.gridView = t.payload
                },
                setLastViewState(e, t) {
                    e.lastView = t.payload
                },
                setInviteShown(e, t) {
                    if (Array.isArray(t.payload)) {
                        const [o,n] = t.payload;
                        e.inviteShown = o,
                        e.isInviteShownWhenAlone = n,
                        u.localPreferences.setForRoom(u.LocalPreferenceRoomKeys.OnboardingInviteShown, o)
                    } else
                        e.inviteShown = t.payload
                },
                showAVErrorPopup(e, t) {
                    e.avErrorMessage = t.payload
                },
                clearAVErrorPopup(e, {payload: t}) {
                    if (!e.avErrorMessage)
                        return;
                    const o = Array.isArray(null == t ? void 0 : t.kind) && ((null == t ? void 0 : t.kind.includes(e.avErrorMessage.kind)) || ((null == t ? void 0 : t.kind.includes("audioinput")) || (null == t ? void 0 : t.kind.includes("videoinput"))) && "videoaudioinput" === e.avErrorMessage.kind)
                      , n = (null == t ? void 0 : t.kind) === e.avErrorMessage.kind || ("audioinput" === (null == t ? void 0 : t.kind) || "videoinput" === (null == t ? void 0 : t.kind)) && "videoaudioinput" === e.avErrorMessage.kind;
                    (!t || (o || n) && (!t.type || (Array.isArray(t.type) ? t.type.includes(e.avErrorMessage.type) : t.type === e.avErrorMessage.type))) && (e.avErrorMessage = void 0)
                },
                setShowProduceError(e, {payload: t}) {
                    e.showProduceError = t
                },
                setShowReportAVIssue(e, {payload: t}) {
                    e.showReportAVIssue = t
                },
                setShowBetaFeedback(e, {payload: t}) {
                    e.showBetaFeedback = t,
                    t && (e.showFeedback = !1)
                },
                setShowFeedback(e, {payload: t}) {
                    e.showFeedback = t,
                    t && (e.showBetaFeedback = !1)
                },
                setInteracting(e, {payload: t}) {
                    e.interacting = t,
                    t && (e.gridView = !1)
                },
                setInteractionType(e, {payload: t}) {
                    e.interactionType = t
                },
                setNameCardPlayer(e, {payload: t}) {
                    e.nameCardPlayer = t,
                    null === e.activeTab && (e.activeTab = a.PARTICIPANTS)
                },
                clearNameCardPlayer(e) {
                    e.nameCardPlayer = null
                },
                setVideoLimit(e, t) {
                    e.videoLimit = t.payload
                },
                resetCarouselIndexLastPage(e, {payload: t}) {
                    const o = t;
                    e.carouselIndex > o - e.videoLimit && (e.carouselIndex = Math.max(o - e.videoLimit, 0))
                },
                moveCarouselPrevious(e, {payload: t}) {
                    if (e.gridView) {
                        const o = t;
                        e.carouselIndex = Math.max(0, e.carouselIndex - o)
                    } else
                        e.carouselIndex = e.carouselIndex - 1
                },
                moveCarouselNext(e, {payload: t}) {
                    if (e.gridView) {
                        const {numCarouselIds: o, carouselScrollLimit: n} = t;
                        e.carouselIndex = Math.min(o - e.videoLimit, e.carouselIndex + n)
                    } else
                        e.carouselIndex = e.carouselIndex + 1
                },
                setCanvasDim(e, t) {
                    e.canvasDim = t.payload
                },
                setShowAnonBanner(e, t) {
                    e.showAnonBanner = t.payload
                },
                setCharacterModalEditName(e, t) {
                    e.characterModalEditName = t.payload
                },
                setShowCreateSpaceModal(e, t) {
                    e.showCreateSpaceModal = t.payload
                }
            }
        })
          , v = e=>e.nav
          , g = (0,
        l.createSelector)(v, (e=>e.activeTab))
          , S = ()=>(0,
        p.useSelector)(g)
          , y = (0,
        l.createSelector)(v, (e=>e.toast))
          , b = ()=>(0,
        p.useSelector)(y)
          , T = (0,
        l.createSelector)(v, (e=>e.interactMessage))
          , I = ()=>(0,
        p.useSelector)(T)
          , _ = (0,
        l.createSelector)(v, (e=>e.gridView))
          , E = ()=>(0,
        p.useSelector)(_)
          , C = (0,
        l.createSelector)(v, (e=>e.interacting))
          , w = ()=>(0,
        p.useSelector)(C)
          , M = (0,
        l.createSelector)(v, (e=>e.interactionType))
          , O = ()=>(0,
        p.useSelector)(M)
          , A = (0,
        l.createSelector)(v, (e=>e.inviteShown))
          , k = ()=>(0,
        p.useSelector)(A)
          , P = (0,
        l.createSelector)(v, (e=>e.isInviteShownWhenAlone))
          , D = ()=>(0,
        p.useSelector)(P)
          , R = (0,
        l.createSelector)(v, (e=>e.avErrorMessage))
          , N = ()=>(0,
        p.useSelector)(R)
          , x = (0,
        l.createSelector)(v, (e=>e.showProduceError))
          , L = ()=>(0,
        p.useSelector)(x)
          , j = (0,
        l.createSelector)(v, (e=>e.showReportAVIssue))
          , F = ()=>(0,
        p.useSelector)(j)
          , U = (0,
        l.createSelector)(v, (e=>e.showBetaFeedback))
          , B = ()=>(0,
        p.useSelector)(U)
          , G = (0,
        l.createSelector)(v, (e=>e.showFeedback))
          , V = ()=>(0,
        p.useSelector)(G)
          , W = (0,
        l.createSelector)(v, (e=>e.lastView))
          , K = ()=>(0,
        p.useSelector)(W)
          , z = (0,
        l.createSelector)(v, (e=>e.nameCardPlayer))
          , Y = ()=>(0,
        p.useSelector)(z)
          , H = (0,
        l.createSelector)(v, (e=>e.videoLimit))
          , q = ()=>(0,
        p.useSelector)(H)
          , $ = (0,
        l.createSelector)(v, (e=>e.carouselIndex))
          , Z = ()=>(0,
        p.useSelector)($)
          , Q = (0,
        l.createSelector)(v, (e=>e.canvasDim))
          , X = ()=>(0,
        p.useSelector)(Q)
          , J = (0,
        l.createSelector)(v, (e=>e.showAnonBanner))
          , ee = ()=>(0,
        p.useSelector)(J)
          , te = (0,
        l.createSelector)(v, (e=>e.characterModalEditName))
          , oe = ()=>(0,
        p.useSelector)(te)
          , ne = (0,
        l.createSelector)(v, (e=>e.showCreateSpaceModal))
          , ae = ()=>(0,
        p.useSelector)(ne)
          , {setActiveTab: re, setTransientToast: ie, clearToast: se, setInteractMessage: ce, setGridView: le, setInviteShown: ue, showAVErrorPopup: de, clearAVErrorPopup: pe, setShowProduceError: he, setShowReportAVIssue: fe, setShowBetaFeedback: me, setShowFeedback: ve, setInteracting: ge, setInteractionType: Se, setLastViewState: ye, setNameCardPlayer: be, clearNameCardPlayer: Te, setVideoLimit: Ie, resetCarouselIndexLastPage: _e, moveCarouselPrevious: Ee, moveCarouselNext: Ce, setCanvasDim: we, setShowAnonBanner: Me, setCharacterModalEditName: Oe, setShowCreateSpaceModal: Ae} = m.actions
          , ke = m.reducer
    }
    ,
    206: (e,t,o)=>{
        o.d(t, {
            NotificationType: ()=>n,
            notifications: ()=>c,
            useNotificationSelector: ()=>d,
            setNotification: ()=>p,
            default: ()=>f
        });
        var n, a, r = o(3168), i = o(1914), s = o(20);
        (a = n || (n = {}))[a.AutoMute = 0] = "AutoMute",
        a[a.ForceMute = 1] = "ForceMute",
        a[a.QuietMode = 2] = "QuietMode",
        a[a.Beta = 3] = "Beta";
        const c = {
            0: {
                body: 0
            },
            1: {
                body: "The host has chosen to mute all users"
            },
            2: {
                title: "Quiet Mode Turned On",
                body: "When you are in *Quiet Mode (Ctrl/⌘ U)*, you’ll only be able to hear those directly next to you.",
                img: "/images/game/quiet_demo.png"
            },
            3: {
                body: 3
            }
        }
          , l = (0,
        r.createSlice)({
            name: "notification",
            initialState: {
                message: void 0
            },
            reducers: {
                setNotification(e, t) {
                    e.message = t.payload
                },
                clearNotification(e) {
                    e.message = void 0
                }
            }
        })
          , u = (0,
        i.createSelector)((e=>e.notification), (e=>e.message))
          , d = ()=>(0,
        s.useSelector)(u)
          , {setNotification: p, clearNotification: h} = l.actions
          , f = l.reducer
    }
    ,
    28: (e,t,o)=>{
        o.d(t, {
            REDUX_PLAYER_FIELDS: ()=>g,
            selectMyPlayerId: ()=>T,
            useMyPlayerIdSelector: ()=>I,
            selectPlayerInfoMap: ()=>E,
            selectPlayerInfoIds: ()=>C,
            usePlayerInfoIdsSelector: ()=>w,
            selectLocalPlayerIds: ()=>M,
            useLocalPlayerIdsSelector: ()=>O,
            selectNumOnlinePlayers: ()=>A,
            useNumOnlinePlayersSelector: ()=>k,
            usePlayerIsOnlineSelector: ()=>D,
            usePlayerIsSignedIn: ()=>R,
            blockedSelector: ()=>N,
            useBlockedSelector: ()=>x,
            selectPlayerIsBlocked: ()=>L,
            usePlayerIsBlockedSelector: ()=>j,
            usePlayerInfoLastActivelySpeakingAtSelector: ()=>B,
            usePlayerInfoActivelySpeakingSelector: ()=>G,
            usePlayerInfoCurrentDeskSelector: ()=>V,
            usePlayerInfoCurrentAreaSelector: ()=>W,
            usePlayerInfoHandRaisedSelector: ()=>K,
            usePlayerInfoSpecificEmojiStatusSelector: ()=>Y,
            usePlayerInfoSpecificEventStatusSelector: ()=>H,
            usePlayerInfoSpecificInConversationSelector: ()=>q,
            usePlayerInfoSpecificCurrentDeskSelector: ()=>$,
            usePlayerInfoSpecificCurrentAreaSelector: ()=>Z,
            playerGoKartIdSelector: ()=>Q,
            usePlayerInfoSpecificGoKartIdSelector: ()=>X,
            usePlayerInfoSpecificIsAloneSelector: ()=>J,
            usePlayerInfoSpecificBusySelector: ()=>te,
            usePlayerInfoSpecificWhitelistAffiliationSelector: ()=>oe,
            usePlayerInfoSpecificCharacterIdSelector: ()=>ne,
            usePlayerInfoSpecificOutfitStringSelector: ()=>ae,
            usePlayerInfoSpecificActivelySpeakingSelector: ()=>re,
            usePlayerInfoSpecificWorkConditionSelector: ()=>ie,
            selectPlayerInfoSpecificWorkCondition: ()=>se,
            usePlayerInfoSpecificLastActiveSelector: ()=>ce,
            usePlayerInfoSpecificEmoteSelector: ()=>le,
            usePlayerInfoSpecificHandRaisedSelector: ()=>ue,
            usePlayerInfoSpecificWhisperIdSelector: ()=>de,
            usePlayerStatus: ()=>pe,
            setMyPlayerId: ()=>he,
            updateBlocked: ()=>fe,
            updatePlayerInfo: ()=>me,
            setLocalPlayerIds: ()=>ve,
            default: ()=>ge
        });
        var n, a = o(3168), r = o(1914), i = o(20), s = o(36), c = o(26), l = o(18), u = o(27), d = Object.defineProperty, p = Object.getOwnPropertySymbols, h = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable, m = (e,t,o)=>t in e ? d(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: o
        }) : e[t] = o, v = (e,t)=>{
            for (var o in t || (t = {}))
                h.call(t, o) && m(e, o, t[o]);
            if (p)
                for (var o of p(t))
                    f.call(t, o) && m(e, o, t[o]);
            return e
        }
        ;
        const g = {
            emojiStatus: !0,
            affiliation: !0,
            emote: !0,
            workCondition: !0,
            activelySpeaking: !0,
            busy: !0,
            lastActive: !0,
            sprite: !0,
            whisperId: !0,
            isSignedIn: !0,
            outfitString: !0,
            eventStatus: !0,
            inConversation: !0,
            currentDesk: !0,
            currentArea: !0,
            goKartId: !0,
            isAlone: !0
        }
          , S = {
            myPlayerId: null,
            info: {},
            onlineIds: {},
            blocked: null != (n = l.localPreferences.getForRoom(l.LocalPreferenceRoomKeys.Blocked)) ? n : {},
            localPlayerIds: []
        }
          , y = (e,t,o)=>{
            const n = e.info[t];
            "activelySpeaking" === o && n.activelySpeaking && (n.lastActiveSpeakingAt = Date.now())
        }
          , b = (0,
        a.createSlice)({
            name: "playerInfo",
            initialState: S,
            reducers: {
                setMyPlayerId(e, t) {
                    e.myPlayerId = t.payload
                },
                updateBlocked(e, t) {
                    e.blocked = v(v({}, e.blocked), t.payload)
                },
                updatePlayerInfo(e, t) {
                    const o = t.payload;
                    for (const t in o) {
                        const n = o[t];
                        if (n === c.GAME_STATE_PLAYER_DISCONNECT_SYMBOL)
                            delete e.onlineIds[t];
                        else {
                            e.info[t] || (e.info[t] = {}),
                            e.onlineIds[t] || (e.onlineIds[t] = !0);
                            for (const o in g)
                                o in n && e.info[t][o] !== n[o] && (e.info[t][o] = n[o],
                                y(e, t, o))
                        }
                    }
                },
                setLocalPlayerIds(e, t) {
                    e.localPlayerIds = t.payload
                }
            }
        })
          , T = e=>e.playerInfo.myPlayerId
          , I = ()=>(0,
        i.useSelector)(T)
          , _ = e=>e.playerInfo
          , E = e=>e.playerInfo.info
          , C = (0,
        r.createSelector)(_, (e=>Object.keys(e.onlineIds)))
          , w = ()=>(0,
        i.useSelector)(C, s.isEqual)
          , M = (0,
        r.createSelector)(_, (e=>e.localPlayerIds))
          , O = ()=>(0,
        i.useSelector)(M, s.isEqual)
          , A = (0,
        r.createSelector)(C, (e=>e.length))
          , k = ()=>(0,
        i.useSelector)(A)
          , P = (e,t)=>!!e.playerInfo.onlineIds[t]
          , D = e=>(0,
        i.useSelector)((t=>P(t, e)))
          , R = e=>(0,
        i.useSelector)((t=>{
            var o;
            return !!(null == (o = t.playerInfo.info[e]) ? void 0 : o.isSignedIn)
        }
        ))
          , N = (0,
        r.createSelector)(_, (e=>e.blocked))
          , x = ()=>(0,
        i.useSelector)(N)
          , L = (e,t)=>null !== t && e.playerInfo.blocked[t] || !1
          , j = e=>(0,
        i.useSelector)((t=>L(t, e)));
        function F(e) {
            const t = (0,
            r.createSelector)(_, (({info: t, onlineIds: o})=>{
                const n = {};
                for (const a in o)
                    n[a] = e(t[a]);
                return n
            }
            ));
            return ()=>(0,
            i.useSelector)(t, s.isEqual)
        }
        function U(e) {
            return F((t=>t[e]))
        }
        const B = U("lastActiveSpeakingAt")
          , G = U("activelySpeaking")
          , V = U("currentDesk")
          , W = U("currentArea")
          , K = F((e=>e.emote === c.Emote.RaisedHand));
        function z(e) {
            const t = (t,o)=>{
                var n;
                return o ? null == (n = t.playerInfo.info[o]) ? void 0 : n[e] : void 0
            }
            ;
            return [e=>(0,
            i.useSelector)((o=>t(o, e))), t]
        }
        const [Y] = z("emojiStatus")
          , [H] = z("eventStatus")
          , [q] = z("inConversation")
          , [$] = z("currentDesk")
          , [Z] = z("currentArea")
          , Q = (e,t)=>{
            var o;
            return null == (o = e.playerInfo.info[t]) ? void 0 : o.goKartId
        }
          , [X] = z("goKartId")
          , [J] = z("isAlone")
          , ee = (e,t)=>{
            var o;
            if (!t)
                return;
            const n = null == (o = e.playerInfo.info[t]) ? void 0 : o.busy;
            return void 0 === n ? n : !!n
        }
          , te = e=>(0,
        i.useSelector)((t=>ee(t, e)))
          , [oe] = z("affiliation")
          , [ne] = z("sprite")
          , [ae] = z("outfitString")
          , [re] = z("activelySpeaking")
          , [ie,se] = z("workCondition")
          , [ce] = z("lastActive")
          , [le] = z("emote")
          , ue = e=>(0,
        i.useSelector)((t=>{
            var o;
            return (null == (o = t.playerInfo.info[e]) ? void 0 : o.emote) === c.Emote.RaisedHand
        }
        ))
          , [de] = z("whisperId")
          , pe = e=>(0,
        i.useSelector)((t=>{
            const o = P(t, e)
              , n = ee(t, e);
            return o ? n ? u.PlayerAvatarStatus.BUSY : u.PlayerAvatarStatus.ONLINE : u.PlayerAvatarStatus.OFFLINE
        }
        ))
          , {setMyPlayerId: he, updateBlocked: fe, updatePlayerInfo: me, setLocalPlayerIds: ve} = b.actions
          , ge = b.reducer
    }
    ,
    591: (e,t,o)=>{
        o.d(t, {
            usePushNotificationSelector: ()=>c,
            setSubscribedToPushNotifications: ()=>l,
            default: ()=>u
        });
        var n = o(3168)
          , a = o(1914)
          , r = o(20);
        const i = (0,
        n.createSlice)({
            name: "notification",
            initialState: {
                subscribed: void 0
            },
            reducers: {
                setSubscribedToPushNotifications(e, t) {
                    e.subscribed = t.payload
                }
            }
        })
          , s = (0,
        a.createSelector)((e=>e.pushNotification), (e=>e))
          , c = ()=>(0,
        r.useSelector)(s)
          , {setSubscribedToPushNotifications: l} = i.actions
          , u = i.reducer
    }
    ,
    207: (e,t,o)=>{
        o.d(t, {
            useAchievementsSelector: ()=>c,
            addAchievementPopups: ()=>l,
            clearAchievementPopups: ()=>u,
            default: ()=>d
        });
        var n = o(3168)
          , a = o(1914)
          , r = o(20);
        const i = (0,
        n.createSlice)({
            name: "achievement",
            initialState: {
                achievements: []
            },
            reducers: {
                addAchievementPopups(e, t) {
                    e.achievements = [...e.achievements, ...t.payload]
                },
                clearAchievementPopups(e, t) {
                    e.achievements = e.achievements.filter((e=>!t.payload.includes(e)))
                }
            }
        })
          , s = (0,
        a.createSelector)((e=>e.achievement), (e=>e.achievements))
          , c = ()=>(0,
        r.useSelector)(s)
          , {addAchievementPopups: l, clearAchievementPopups: u} = i.actions
          , d = i.reducer
    }
    ,
    208: (e,t,o)=>{
        o.d(t, {
            MilestoneStatus: ()=>n,
            initMilestones: ()=>y,
            useMilestoneStatusSelector: ()=>I,
            selectMilestones: ()=>_,
            useSpecificMilestoneSelector: ()=>E,
            setMilestoneStatus: ()=>C,
            setMilestones: ()=>w,
            updateMilestones: ()=>M,
            getMilestonesHelper: ()=>O,
            updateMilestonesHelper: ()=>A,
            default: ()=>k
        });
        var n, a, r = o(3168), i = o(1914), s = o(18), c = o(19), l = o(20), u = Object.defineProperty, d = Object.getOwnPropertySymbols, p = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable, f = (e,t,o)=>t in e ? u(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: o
        }) : e[t] = o, m = (e,t)=>{
            for (var o in t || (t = {}))
                p.call(t, o) && f(e, o, t[o]);
            if (d)
                for (var o of d(t))
                    h.call(t, o) && f(e, o, t[o]);
            return e
        }
        , v = (e,t,o)=>new Promise(((n,a)=>{
            var r = e=>{
                try {
                    s(o.next(e))
                } catch (e) {
                    a(e)
                }
            }
              , i = e=>{
                try {
                    s(o.throw(e))
                } catch (e) {
                    a(e)
                }
            }
              , s = e=>e.done ? n(e.value) : Promise.resolve(e.value).then(r, i);
            s((o = o.apply(e, t)).next())
        }
        ));
        (a = n || (n = {})).None = "none",
        a.Loading = "loading",
        a.Success = "success",
        a.Failure = "failure";
        const g = {
            milestones: {},
            milestoneStatus: n.None
        }
          , S = (0,
        r.createSlice)({
            name: "milestone",
            initialState: g,
            reducers: {
                setMilestoneStatus(e, t) {
                    e.milestoneStatus = t.payload
                },
                setMilestones(e, t) {
                    e.milestones = t.payload
                },
                updateMilestones(e, t) {
                    if (e.milestoneStatus !== n.Success)
                        return;
                    void 0 === e.milestones && (e.milestones = t.payload);
                    const o = m({}, t.payload);
                    Object.keys(o).forEach((t=>{
                        t in e.milestones && e.milestones[t] >= o[t] && delete o[t]
                    }
                    )),
                    e.milestones = m(m({}, e.milestones), o)
                }
            }
        })
          , y = (0,
        r.createAction)("milestones/initMilestones")
          , b = e=>e.milestone
          , T = (0,
        i.createSelector)(b, (e=>e.milestoneStatus))
          , I = ()=>(0,
        l.useSelector)(T)
          , _ = (0,
        i.createSelector)(b, (e=>e.milestones))
          , E = e=>(0,
        l.useSelector)((t=>((e,t)=>(0,
        i.createSelector)(b, (t=>{
            var o;
            return null == (o = t.milestones) ? void 0 : o[e]
        }
        ))(t))(e, t)))
          , {setMilestoneStatus: C, setMilestones: w, updateMilestones: M} = S.actions
          , O = e=>v(void 0, null, (function*() {
            try {
                return {
                    milestones: yield s.HttpV2Client.get(c.HttpV2Paths.UserMilestones, {
                        auth: !0,
                        params: {
                            path: {
                                user: e
                            }
                        }
                    })
                }
            } catch (e) {
                return {
                    error: "UNKNOWN_ERROR"
                }
            }
        }
        ))
          , A = (e,t)=>v(void 0, null, (function*() {
            try {
                return {
                    milestones: yield s.HttpV2Client.put(c.HttpV2Paths.UserMilestones, {
                        auth: !0,
                        params: {
                            path: {
                                user: e
                            },
                            body: m({}, t)
                        }
                    })
                }
            } catch (e) {
                return {
                    error: "UNKNOWN_ERROR"
                }
            }
        }
        ))
          , k = S.reducer
    }
    ,
    234: (e,t,o)=>{
        o.d(t, {
            useMapActionSelector: ()=>l,
            useEnableRoomStageSelector: ()=>d,
            setMapAction: ()=>p,
            setEnableRoomStage: ()=>h,
            default: ()=>f
        });
        var n = o(3168)
          , a = o(1914)
          , r = o(20);
        const i = (0,
        n.createSlice)({
            name: "rw-onboarding",
            initialState: {
                mapAction: null,
                enableRoomStage: null
            },
            reducers: {
                setMapAction(e, t) {
                    e.mapAction = t.payload
                },
                setEnableRoomStage(e, t) {
                    e.enableRoomStage = t.payload
                }
            }
        })
          , s = e=>e.rwonboarding
          , c = (0,
        a.createSelector)(s, (e=>e.mapAction))
          , l = ()=>(0,
        r.useSelector)(c)
          , u = (0,
        a.createSelector)(s, (e=>e.enableRoomStage))
          , d = ()=>(0,
        r.useSelector)(u)
          , {setMapAction: p, setEnableRoomStage: h} = i.actions
          , f = i.reducer
    }
    ,
    90: (e,t,o)=>{
        o.d(t, {
            useUserBetaSelector: ()=>m,
            useSpaceBetaSelector: ()=>g,
            selectUseSmartZoom: ()=>S,
            useUseSmartZoomSelector: ()=>y,
            selectManualCanvasZoom: ()=>b,
            useManualCanvasZoomSelector: ()=>T,
            setUserBeta: ()=>I,
            setSpaceBeta: ()=>_,
            toggleUseSmartZoom: ()=>E,
            setManualCanvasZoom: ()=>C,
            setLeakyPrivateSpaceMag: ()=>w,
            default: ()=>M
        });
        var n = o(3168)
          , a = o(1914)
          , r = o(20)
          , i = o(18)
          , s = o(888)
          , c = o(27);
        const l = i.localPreferences.get(i.LocalPreferenceKeys.UseSmartZoom)
          , u = i.localPreferences.get(i.LocalPreferenceKeys.ManualCanvasZoom)
          , d = {
            userBeta: i.localPreferences.get(i.LocalPreferenceKeys.UserBeta),
            spaceBeta: i.localPreferences.getForRoom(i.LocalPreferenceRoomKeys.SpaceBeta),
            useSmartZoom: null == l || !0 === l,
            manualCanvasZoom: "number" == typeof u ? u : void 0,
            leakyPrivateSpaceMag: c.DEFAULT_LPS_VOLUME
        }
          , p = (0,
        n.createSlice)({
            name: "setting",
            initialState: d,
            reducers: {
                setUserBeta(e, t) {
                    e.userBeta = t.payload
                },
                setSpaceBeta(e, t) {
                    e.spaceBeta = t.payload
                },
                toggleUseSmartZoom(e, t) {
                    e.useSmartZoom = !e.useSmartZoom
                },
                setManualCanvasZoom(e, t) {
                    e.manualCanvasZoom = t.payload
                },
                setLeakyPrivateSpaceMag(e, t) {
                    e.leakyPrivateSpaceMag = t.payload
                }
            },
            extraReducers: {
                [s.clearSpaceState.type]: e=>{
                    e.userBeta = i.localPreferences.get(i.LocalPreferenceKeys.UserBeta),
                    e.spaceBeta = i.localPreferences.getForRoom(i.LocalPreferenceRoomKeys.SpaceBeta)
                }
            }
        })
          , h = e=>e.setting
          , f = (0,
        a.createSelector)(h, (e=>e.userBeta))
          , m = ()=>(0,
        r.useSelector)(f)
          , v = (0,
        a.createSelector)(h, (e=>e.spaceBeta))
          , g = ()=>(0,
        r.useSelector)(v)
          , S = (0,
        a.createSelector)(h, (e=>e.useSmartZoom))
          , y = ()=>(0,
        r.useSelector)(S)
          , b = (0,
        a.createSelector)(h, (e=>e.manualCanvasZoom))
          , T = ()=>(0,
        r.useSelector)(b)
          , {setUserBeta: I, setSpaceBeta: _, toggleUseSmartZoom: E, setManualCanvasZoom: C, setLeakyPrivateSpaceMag: w} = ((0,
        a.createSelector)(h, (e=>e.leakyPrivateSpaceMag)),
        p.actions)
          , M = p.reducer
    }
    ,
    34: (e,t,o)=>{
        o.d(t, {
            SpaceInfoStatus: ()=>n,
            initSpaceInfo: ()=>T,
            initSpaceMembers: ()=>I,
            selectSpaceInfo: ()=>E,
            useSpaceInfoSelector: ()=>C,
            useSpaceInfoStatusSelector: ()=>M,
            useSpaceId: ()=>k,
            useSpaceMapNameSelector: ()=>D,
            spaceUseCaseSelector: ()=>N,
            useSpaceUseCaseSelector: ()=>x,
            selectIsRemoteWorkUseCase: ()=>L,
            useIsRemoteWorkUseCaseSelector: ()=>j,
            useIsPublicSpaceSelector: ()=>U,
            useSpaceLevelSelector: ()=>G,
            useHasOnboardedSelector: ()=>W,
            useSpaceMembersSelector: ()=>z,
            spaceMemberSelector: ()=>Y,
            useSpaceMemberSelector: ()=>H,
            spaceMemberDeskInfoSelector: ()=>q,
            useSpaceMemberDeskInfoSelector: ()=>$,
            useSpaceSettingGlobalBuildSelector: ()=>X,
            useSpaceSettingHidePromoSelector: ()=>ee,
            useSpaceSettingDisableNotificationsSelector: ()=>oe,
            useSpaceSettingDisableInviteSelector: ()=>ae,
            useSpaceSettingDisableTutorialSelector: ()=>ie,
            useSpaceSettingAnnouncements: ()=>ce,
            useSpaceSettingDisableChatPersist: ()=>ue,
            setSpaceInfo: ()=>de,
            setSpaceInfoStatus: ()=>pe,
            setSpaceMembers: ()=>he,
            updateSpaceMember: ()=>fe,
            setAnnouncements: ()=>me,
            updateSpaceInfoSettings: ()=>ve,
            default: ()=>ge
        });
        var n, a, r = o(3168), i = o(1914), s = o(19), c = o(98), l = o.n(c), u = o(20), d = Object.defineProperty, p = Object.defineProperties, h = Object.getOwnPropertyDescriptors, f = Object.getOwnPropertySymbols, m = Object.prototype.hasOwnProperty, v = Object.prototype.propertyIsEnumerable, g = (e,t,o)=>t in e ? d(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: o
        }) : e[t] = o, S = (e,t)=>{
            for (var o in t || (t = {}))
                m.call(t, o) && g(e, o, t[o]);
            if (f)
                for (var o of f(t))
                    v.call(t, o) && g(e, o, t[o]);
            return e
        }
        ;
        (a = n || (n = {})).None = "none",
        a.Loading = "loading",
        a.Success = "success",
        a.Failure = "failure";
        const y = {
            spaceInfo: void 0,
            spaceInfoStatus: n.None,
            spaceMembers: void 0,
            announcements: []
        }
          , b = (0,
        r.createSlice)({
            name: "space",
            initialState: y,
            reducers: {
                setSpaceInfo(e, t) {
                    e.spaceInfo = t.payload
                },
                setSpaceInfoStatus(e, t) {
                    e.spaceInfoStatus = t.payload
                },
                setSpaceMembers(e, t) {
                    var o;
                    const n = null == (o = e.spaceMembers) ? void 0 : o.reduce(((e,t)=>((e,t)=>p(e, h(t)))(S({}, e), {
                        [t.id]: t
                    })), {})
                      , a = t.payload.filter((e=>e.roles && e.roles.length > 0))
                      , r = n ? a.map((e=>S(S({}, n[e.id]), e))) : a;
                    l()(e.spaceMembers, r) || (e.spaceMembers = r)
                },
                updateSpaceMember(e, t) {
                    if (!e.spaceMembers)
                        return void (e.spaceMembers = [t.payload]);
                    let o = !1;
                    const n = e.spaceMembers.map((e=>e.id === t.payload.id ? (o = !0,
                    t.payload) : e));
                    o || n.push(t.payload),
                    e.spaceMembers = n
                },
                setAnnouncements(e, t) {
                    var o;
                    (null == (o = e.spaceInfo) ? void 0 : o.settings) && (e.spaceInfo.settings.announcements = t.payload)
                },
                updateSpaceInfoSettings(e, t) {
                    var o;
                    (null == (o = e.spaceInfo) ? void 0 : o.settings) && (e.spaceInfo.settings = S(S({}, e.spaceInfo.settings), t.payload))
                }
            }
        })
          , T = (0,
        r.createAction)("space/initSpaceInfo")
          , I = (0,
        r.createAction)("space/initSpaceMembers")
          , _ = e=>e.space
          , E = (0,
        i.createSelector)(_, (e=>e.spaceInfo))
          , C = ()=>(0,
        u.useSelector)(E, l())
          , w = (0,
        i.createSelector)(_, (e=>e.spaceInfoStatus))
          , M = ()=>(0,
        u.useSelector)(w);
        function O(e) {
            return t=>{
                var o;
                return null == (o = t.space.spaceInfo) ? void 0 : o[e]
            }
        }
        const A = O("id")
          , k = ()=>(0,
        u.useSelector)(A)
          , P = O("map")
          , D = ()=>(0,
        u.useSelector)(P)
          , R = O("reason")
          , N = e=>R(e) || s.UseCases.Other
          , x = ()=>(0,
        u.useSelector)(N)
          , L = (0,
        i.createSelector)(N, (e=>s.REMOTE_WORK_USE_CASES.includes(e)))
          , j = ()=>(0,
        u.useSelector)(L)
          , F = ((0,
        i.createSelector)(N, (e=>s.EVENTS_USE_CASES.includes(e))),
        (0,
        i.createSelector)(N, (e=>s.PUBLIC_SPACES_USE_CASES.includes(e))),
        O("isPublic"))
          , U = ()=>(0,
        u.useSelector)(F)
          , B = O("level")
          , G = ()=>(0,
        u.useSelector)(B)
          , V = O("hasOnboarded")
          , W = ()=>(0,
        u.useSelector)(V)
          , K = (0,
        i.createSelector)(_, (e=>e.spaceMembers))
          , z = ()=>(0,
        u.useSelector)(K, l())
          , Y = (e,t)=>{
            var o;
            return null == (o = t.space.spaceMembers) ? void 0 : o.find((t=>t.id === e))
        }
          , H = e=>(0,
        u.useSelector)((t=>Y(e, t)))
          , q = (e,t)=>{
            var o;
            return null == (o = Y(e, t)) ? void 0 : o.deskInfo
        }
          , $ = e=>(0,
        u.useSelector)((t=>q(e, t)));
        function Z(e) {
            return t=>{
                var o, n;
                return null == (n = null == (o = t.space.spaceInfo) ? void 0 : o.settings) ? void 0 : n[e]
            }
        }
        const Q = Z("globalBuild")
          , X = ()=>(0,
        u.useSelector)(Q)
          , J = Z("hidePromo")
          , ee = ()=>(0,
        u.useSelector)(J)
          , te = Z("disableNotifications")
          , oe = ()=>(0,
        u.useSelector)(te)
          , ne = Z("disableInvite")
          , ae = ()=>(0,
        u.useSelector)(ne)
          , re = Z("disableTutorial")
          , ie = ()=>(0,
        u.useSelector)(re)
          , se = Z("announcements")
          , ce = ()=>{
            var e;
            return null != (e = (0,
            u.useSelector)(se)) ? e : []
        }
          , le = Z("disableChatPersist")
          , ue = ()=>(0,
        u.useSelector)(le)
          , {setSpaceInfo: de, setSpaceInfoStatus: pe, setSpaceMembers: he, updateSpaceMember: fe, setAnnouncements: me, updateSpaceInfoSettings: ve} = b.actions
          , ge = b.reducer
    }
    ,
    63: (e,t,o)=>{
        o.d(t, {
            handleTutorialTaskEventAndSyncProgress: ()=>l,
            useCurrentTutorialTaskStepData: ()=>p,
            useNextTutorialTaskStepData: ()=>f,
            currentTutorialTaskIdSelector: ()=>m,
            useCurrentTutorialTaskId: ()=>v,
            currentTutorialTaskStepSelector: ()=>g,
            completedTutorialTaskIdsSelector: ()=>S,
            useCompletedTutorialTaskIds: ()=>y,
            useCompletedSandboxTutorialTaskIds: ()=>T,
            useCurrentAutoTutorialTaskGroupKey: ()=>_,
            startTutorialTask: ()=>E,
            stopTutorialTask: ()=>C,
            setCompletedTutorialTasks: ()=>M,
            resetTutorialState: ()=>O,
            handleCompleteTutorialTaskStep: ()=>A,
            autoStartTutorialTaskGroupSet: ()=>k,
            setTutorialStep: ()=>P,
            setTutorialTask: ()=>D,
            default: ()=>R
        });
        var n = o(3168)
          , a = o(20)
          , r = o(50)
          , i = o(361)
          , s = o(1625);
        const c = (0,
        n.createSlice)({
            name: "tutorialTask",
            initialState: {
                currentTutorialTaskId: null,
                currentStep: 1,
                currentAutoTutorialTaskGroupSetKey: null,
                currentAutoTutorialTaskGroupKey: null,
                completedTutorialTaskIds: []
            },
            reducers: {
                resetTutorialState(e, t) {
                    const o = i.TUTORIAL_TASK_GROUP_SETS[t.payload];
                    if (!o)
                        return;
                    const n = o.tutorialTaskGroupIds[0]
                      , a = i.TUTORIAL_TASK_GROUPS[n];
                    e.currentAutoTutorialTaskGroupSetKey = t.payload,
                    e.currentAutoTutorialTaskGroupKey = n,
                    e.completedTutorialTaskIds = e.completedTutorialTaskIds.filter((e=>!a.tutorialTaskIds.includes(e))),
                    e.currentStep = 1,
                    e.currentTutorialTaskId = a.tutorialTaskIds[0]
                },
                startTutorialTask(e, t) {
                    e.currentTutorialTaskId = t.payload,
                    e.currentStep = 1
                },
                stopTutorialTask(e) {
                    e.currentTutorialTaskId = null,
                    e.currentStep = 1,
                    e.currentAutoTutorialTaskGroupSetKey = null,
                    e.currentAutoTutorialTaskGroupKey = null
                },
                autoStartTutorialTaskGroupSet(e, t) {
                    const {taskId: o, groupId: n} = (0,
                    s.getNextTutorialTaskAndGroupInGroupSet)(null, t.payload, null, e.completedTutorialTaskIds);
                    e.currentAutoTutorialTaskGroupSetKey = t.payload,
                    e.currentAutoTutorialTaskGroupKey = n,
                    e.currentTutorialTaskId = o,
                    e.currentStep = 1
                },
                handleTutorialTaskEvent(e, t) {
                    if (!(0,
                    s.shouldGoToNextStepOnEvent)(t.payload.event, t.payload.metadata, e))
                        return e;
                    Object.assign(e, (0,
                    s.getNextPartialTutorialTaskState)(e))
                },
                handleCompleteTutorialTaskStep(e) {
                    Object.assign(e, (0,
                    s.getNextPartialTutorialTaskState)(e))
                },
                setCompletedTutorialTasks(e, t) {
                    e.completedTutorialTaskIds = t.payload
                },
                setTutorialTask(e, t) {
                    e.currentTutorialTaskId = t.payload
                },
                setTutorialStep(e, t) {
                    e.currentStep = t.payload
                }
            }
        })
          , l = (0,
        n.createAction)("tutorialTasks/handleTutorialTaskEventAndSyncProgress");
        function u(e) {
            return t=>t.tutorialTask[e]
        }
        const d = ({tutorialTask: {currentTutorialTaskId: e, currentStep: t}})=>{
            var o;
            return e && t && (null == (o = i.TUTORIAL_TASKS[e]) ? void 0 : o.steps[t - 1]) || null
        }
          , p = ()=>(0,
        a.useSelector)(d)
          , h = ({tutorialTask: {currentTutorialTaskId: e, currentStep: t}})=>{
            var o;
            return e && t && (null == (o = i.TUTORIAL_TASKS[e]) ? void 0 : o.steps[t]) || null
        }
          , f = ()=>(0,
        a.useSelector)(h)
          , m = u("currentTutorialTaskId")
          , v = ()=>(0,
        a.useSelector)(m)
          , g = u("currentStep")
          , S = u("completedTutorialTaskIds")
          , y = ()=>(0,
        a.useSelector)(S)
          , b = ({tutorialTask: {completedTutorialTaskIds: e}})=>{
            const t = i.TUTORIAL_TASK_GROUPS[r.PresetTutorialGroupIds.BASICS];
            return t ? e.filter((e=>t.tutorialTaskIds.includes(e))) : (console.error("BASICS task group wasn't found. Please fix this."),
            [])
        }
          , T = ()=>(0,
        a.useSelector)(b)
          , I = u("currentAutoTutorialTaskGroupKey")
          , _ = ()=>(0,
        a.useSelector)(I)
          , {startTutorialTask: E, stopTutorialTask: C, handleTutorialTaskEvent: w, setCompletedTutorialTasks: M, resetTutorialState: O, handleCompleteTutorialTaskStep: A, autoStartTutorialTaskGroupSet: k, setTutorialStep: P, setTutorialTask: D} = c.actions
          , R = c.reducer
    }
    ,
    33: (e,t,o)=>{
        o.d(t, {
            WhisperVolume: ()=>h,
            addAnnouncerPlayerId: ()=>ke,
            canvasFocusSelector: ()=>ve,
            default: ()=>Ye,
            fullscreenVideoFocusSelector: ()=>he,
            keyDownInFullscreenAction: ()=>ze,
            removeAnnouncerPlayerId: ()=>Pe,
            selectAnnouncerPlayerIds: ()=>N,
            selectFullscreenPlayer: ()=>L,
            selectPlayerMediaMags: ()=>D,
            selectSpecificPlayerRemoteState: ()=>ue,
            selectSpotlightPlayerIds: ()=>x,
            selectWhisperVolume: ()=>B,
            setAllowLimit: ()=>We,
            setAnnouncerPlayerIds: ()=>Ae,
            setAudioOnlyMode: ()=>Ke,
            setCanvasFocus: ()=>Fe,
            setCarouselMinimized: ()=>Be,
            setFullscreenPlayer: ()=>Re,
            setFullscreenUIShown: ()=>Ue,
            setFullscreenVideoFocus: ()=>je,
            setHasCarousel: ()=>Ge,
            setNpcRemoteData: ()=>xe,
            setOverAllowing: ()=>Ve,
            setPlayerMediaMags: ()=>Oe,
            setPlayerRemoteData: ()=>Ne,
            setProduceState: ()=>Me,
            setSpotlightPlayerIds: ()=>De,
            setWhisperVolume: ()=>Le,
            useAVProduceStateSelector: ()=>A,
            useAllBroadcastedIdsSelector: ()=>W,
            useAllPlayerRemoteScreenVolumeSelector: ()=>H,
            useAllPlayerRemoteVolumeSelector: ()=>z,
            useAllowLimitSelector: ()=>Ee,
            useAudioOnlyModeSelector: ()=>we,
            useCarouselMinimizedSelector: ()=>me,
            useConnectedToActivePlayerSelector: ()=>Z,
            useFullscreenPlayerSelector: ()=>j,
            useFullscreenUIShownSelector: ()=>Se,
            useHasCarouselSelector: ()=>be,
            useOverAllowingSelector: ()=>Ie,
            usePlayerMediaMagsSelector: ()=>R,
            useRemoteScreensEnabledSelector: ()=>U,
            useScreenProduceStateSelector: ()=>P,
            useSpecificPlayerIsBroadcastedSelector: ()=>Q,
            useSpecificPlayerIsSpotlightedSelector: ()=>q,
            useSpecificPlayerOverAllowedSelector: ()=>pe,
            useSpecificPlayerRemoteAudioEnabledSelector: ()=>X,
            useSpecificPlayerRemoteAudioMutedSelector: ()=>te,
            useSpecificPlayerRemoteAudioVideoQualitySelector: ()=>J,
            useSpecificPlayerRemoteScreenMutedSelector: ()=>re,
            useSpecificPlayerRemoteScreenShareEnabledSelector: ()=>se,
            useSpecificPlayerRemoteScreenShareQualitySelector: ()=>ce,
            useSpecificPlayerRemoteScreenVolumeSelector: ()=>ae,
            useSpecificPlayerRemoteSoundMutedSelector: ()=>ie,
            useSpecificPlayerRemoteSoundShareEnabledSelector: ()=>le,
            useSpecificPlayerRemoteStateSelector: ()=>de,
            useSpecificPlayerRemoteVideoEnabledSelector: ()=>ee,
            useSpecificPlayerRemoteVideoMutedSelector: ()=>oe,
            useSpecificPlayerRemoteVolumeSelector: ()=>ne,
            useWhisperVolume: ()=>G,
            whisperVolumeToMag: ()=>T
        });
        var n = o(3168)
          , a = o(1914)
          , r = o(20)
          , i = o(1939)
          , s = o.n(i)
          , c = o(98)
          , l = o.n(c)
          , u = o(47);
        const d = [u.ProduceState.Errored, u.ProduceState.Connected, u.ProduceState.Loading, u.ProduceState.Ended];
        function p(e, t) {
            if (e === t)
                return e;
            for (const o of d)
                if (e === o || t === o)
                    return o;
            return console.error(`Got unexpected produce states to combine: ${e}, ${t}`),
            u.ProduceState.Errored
        }
        var h, f = o(43), m = Object.defineProperty, v = Object.getOwnPropertySymbols, g = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable, y = (e,t,o)=>t in e ? m(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: o
        }) : e[t] = o, b = (e,t)=>{
            for (var o in t || (t = {}))
                g.call(t, o) && y(e, o, t[o]);
            if (v)
                for (var o of v(t))
                    S.call(t, o) && y(e, o, t[o]);
            return e
        }
        ;
        function T(e) {
            switch (e) {
            case 0:
                return 0;
            case 1:
                return .03;
            case 2:
                return .1
            }
        }
        !function(e) {
            e[e.Low = 0] = "Low",
            e[e.Medium = 1] = "Medium",
            e[e.High = 2] = "High"
        }(h || (h = {}));
        const I = {
            produceStates: {
                audio: u.ProduceState.Ended,
                video: u.ProduceState.Ended,
                screen: u.ProduceState.Ended,
                sound: u.ProduceState.Ended
            },
            playerMediaMags: {},
            npcRemoteData: {},
            playerRemoteData: {},
            remoteData: {},
            announcerPlayerIds: [],
            spotlightPlayerIds: [],
            fullscreenPlayer: null,
            whisperVolume: 1,
            fullscreenVideoFocus: !1,
            canvasFocus: !1,
            fullscreenUIShown: !f.isMobile,
            carouselMinimized: !1,
            hasCarousel: !1,
            overAllowing: !1,
            allowLimit: 0,
            audioOnlyMode: !1
        }
          , _ = (0,
        n.createSlice)({
            name: "video",
            initialState: I,
            reducers: {
                setProduceState(e, t) {
                    const [o,n] = t.payload;
                    e.produceStates[o] = n
                },
                setPlayerMediaMags(e, t) {
                    e.playerMediaMags = t.payload
                },
                setAnnouncerPlayerIds(e, t) {
                    e.announcerPlayerIds = t.payload
                },
                addAnnouncerPlayerId(e, t) {
                    e.announcerPlayerIds = Array.from(new Set(e.announcerPlayerIds.concat(t.payload)))
                },
                removeAnnouncerPlayerId(e, t) {
                    e.announcerPlayerIds = e.announcerPlayerIds.filter((e=>e !== t.payload))
                },
                setSpotlightPlayerIds(e, t) {
                    e.spotlightPlayerIds = t.payload
                },
                setFullscreenPlayer(e, t) {
                    e.fullscreenPlayer = t.payload,
                    t.payload || (e.fullscreenVideoFocus = !1,
                    e.fullscreenUIShown = !0,
                    e.carouselMinimized = !1)
                },
                setPlayerRemoteData(e, t) {
                    l()(e.playerRemoteData, t.payload) || (e.playerRemoteData = t.payload,
                    e.remoteData = b(b({}, e.playerRemoteData), e.npcRemoteData))
                },
                setNpcRemoteData(e, t) {
                    l()(e.npcRemoteData, t.payload) || (e.npcRemoteData = t.payload,
                    e.remoteData = b(b({}, e.playerRemoteData), e.npcRemoteData))
                },
                setWhisperVolume(e, t) {
                    e.whisperVolume = t.payload
                },
                setFullscreenVideoFocus(e, {payload: t}) {
                    e.fullscreenVideoFocus = t,
                    t && (e.canvasFocus = !0)
                },
                setCanvasFocus(e, {payload: t}) {
                    e.canvasFocus = t
                },
                setFullscreenUIShown(e, {payload: t}) {
                    e.fullscreenUIShown = t
                },
                setCarouselMinimized(e, t) {
                    e.carouselMinimized = t.payload
                },
                setHasCarousel(e, t) {
                    e.hasCarousel = t.payload
                },
                setOverAllowing(e, {payload: t}) {
                    e.overAllowing = t
                },
                setAllowLimit(e, {payload: t}) {
                    e.allowLimit = t
                },
                setAudioOnlyMode(e, {payload: t}) {
                    e.audioOnlyMode = t
                }
            }
        })
          , E = e=>e.video
          , C = e=>E(e).remoteData
          , w = (e,t)=>{
            var o;
            return null == (o = null == e ? void 0 : e[t]) ? void 0 : o.screenVolume
        }
          , M = (e,t)=>{
            var o;
            return null == (o = null == e ? void 0 : e[t]) ? void 0 : o.volume
        }
          , O = (0,
        a.createSelector)(E, (({produceStates: e})=>p(e.audio, e.video)))
          , A = ()=>(0,
        r.useSelector)(O)
          , k = (0,
        a.createSelector)(E, (({produceStates: e})=>p(e.screen, e.sound)))
          , P = ()=>(0,
        r.useSelector)(k)
          , D = (0,
        a.createSelector)(E, (e=>e.playerMediaMags))
          , R = ()=>(0,
        r.useSelector)(D)
          , N = (0,
        a.createSelector)(E, (e=>e.announcerPlayerIds))
          , x = (0,
        a.createSelector)(E, (e=>e.spotlightPlayerIds))
          , L = (0,
        a.createSelector)(E, (e=>e.fullscreenPlayer))
          , j = ()=>(0,
        r.useSelector)(L)
          , F = (0,
        a.createSelector)(E, (e=>{
            const t = {};
            for (const o in e.remoteData)
                t[o] = e.remoteData[o].enabled.screen;
            return t
        }
        ))
          , U = ()=>(0,
        r.useSelector)(F)
          , B = (0,
        a.createSelector)(E, (e=>e.whisperVolume))
          , G = ()=>(0,
        r.useSelector)(B)
          , V = (0,
        a.createSelector)([N, x], ((e,t)=>s()(e, t)))
          , W = ()=>(0,
        r.useSelector)(V)
          , K = (0,
        a.createSelector)(C, (e=>{
            const t = {};
            for (const o in e)
                t[o] = M(e, o);
            return t
        }
        ))
          , z = ()=>(0,
        r.useSelector)(K, l())
          , Y = (0,
        a.createSelector)(C, (e=>{
            const t = {};
            for (const o in e)
                t[o] = w(e, o);
            return t
        }
        ))
          , H = ()=>(0,
        r.useSelector)(Y, l())
          , q = e=>(0,
        r.useSelector)((t=>!!e && x(t).includes(e)))
          , $ = (0,
        a.createSelector)(E, (e=>{
            for (const t in e.remoteData)
                if (e.remoteData[t].enabled.video && e.remoteData[t].enabled.audio)
                    return !0;
            return !1
        }
        ))
          , Z = ()=>(0,
        r.useSelector)($)
          , Q = e=>(0,
        r.useSelector)((t=>!!e && V(t).includes(e)))
          , X = e=>(0,
        r.useSelector)((t=>{
            var o;
            return null == (o = t.video.remoteData[e]) ? void 0 : o.enabled.audio
        }
        ))
          , J = e=>(0,
        r.useSelector)((t=>{
            var o;
            return null == (o = t.video.remoteData[e]) ? void 0 : o.quality.audiovideo
        }
        ))
          , ee = e=>(0,
        r.useSelector)((t=>{
            var o;
            return null == (o = t.video.remoteData[e]) ? void 0 : o.enabled.video
        }
        ))
          , te = e=>(0,
        r.useSelector)((t=>{
            var o;
            return null == (o = t.video.remoteData[e]) ? void 0 : o.muted.audio
        }
        ))
          , oe = e=>(0,
        r.useSelector)((t=>{
            var o;
            return null == (o = t.video.remoteData[e]) ? void 0 : o.muted.video
        }
        ))
          , ne = e=>(0,
        r.useSelector)((t=>{
            var o;
            return null == (o = t.video.remoteData[e]) ? void 0 : o.volume
        }
        ))
          , ae = e=>(0,
        r.useSelector)((t=>{
            var o;
            return null == (o = t.video.remoteData[e]) ? void 0 : o.screenVolume
        }
        ))
          , re = e=>(0,
        r.useSelector)((t=>{
            var o;
            return null == (o = t.video.remoteData[e]) ? void 0 : o.muted.screen
        }
        ))
          , ie = e=>(0,
        r.useSelector)((t=>{
            var o;
            return null == (o = t.video.remoteData[e]) ? void 0 : o.muted.sound
        }
        ))
          , se = e=>(0,
        r.useSelector)((t=>{
            var o;
            return null == (o = t.video.remoteData[e]) ? void 0 : o.enabled.screen
        }
        ))
          , ce = e=>(0,
        r.useSelector)((t=>{
            var o;
            return null == (o = t.video.remoteData[e]) ? void 0 : o.quality.screen
        }
        ))
          , le = e=>(0,
        r.useSelector)((t=>{
            var o;
            return !!e && (null == (o = t.video.remoteData[e]) ? void 0 : o.enabled.sound)
        }
        ))
          , ue = (e,t)=>{
            var o;
            return t ? null == (o = e.video.remoteData[t]) ? void 0 : o.state : void 0
        }
          , de = e=>(0,
        r.useSelector)((t=>ue(t, e)))
          , pe = e=>(0,
        r.useSelector)((t=>{
            var o;
            return !!e && (null == (o = t.video.remoteData[e]) ? void 0 : o.overAllowed)
        }
        ))
          , he = (0,
        a.createSelector)(E, (e=>e.fullscreenVideoFocus))
          , fe = (0,
        a.createSelector)(E, (e=>e.carouselMinimized))
          , me = ()=>(0,
        r.useSelector)(fe)
          , ve = (0,
        a.createSelector)(E, (e=>e.canvasFocus))
          , ge = (0,
        a.createSelector)(E, (e=>e.fullscreenUIShown))
          , Se = ()=>(0,
        r.useSelector)(ge)
          , ye = (0,
        a.createSelector)(E, (e=>e.hasCarousel))
          , be = ()=>(0,
        r.useSelector)(ye)
          , Te = (0,
        a.createSelector)(E, (e=>e.overAllowing))
          , Ie = ()=>(0,
        r.useSelector)(Te)
          , _e = (0,
        a.createSelector)(E, (e=>e.allowLimit))
          , Ee = ()=>(0,
        r.useSelector)(_e)
          , Ce = (0,
        a.createSelector)(E, (e=>e.audioOnlyMode))
          , we = ()=>(0,
        r.useSelector)(Ce)
          , {setProduceState: Me, setPlayerMediaMags: Oe, setAnnouncerPlayerIds: Ae, addAnnouncerPlayerId: ke, removeAnnouncerPlayerId: Pe, setSpotlightPlayerIds: De, setFullscreenPlayer: Re, setPlayerRemoteData: Ne, setNpcRemoteData: xe, setWhisperVolume: Le, setFullscreenVideoFocus: je, setCanvasFocus: Fe, setFullscreenUIShown: Ue, setCarouselMinimized: Be, setHasCarousel: Ge, setOverAllowing: Ve, setAllowLimit: We, setAudioOnlyMode: Ke} = _.actions
          , ze = (0,
        n.createAction)("video/keyDownInFullscreenAction")
          , Ye = _.reducer
    }
    ,
    58: (e,t,o)=>{
        o.d(t, {
            default: ()=>Fe
        });
        var n = o(3168)
          , a = o(3169)
          , r = o(888)
          , i = o(373)
          , s = o(67)
          , c = o(46)
          , l = o(28)
          , u = o(30)
          , d = o(96)
          , p = o(33)
          , h = o(63)
          , f = o(90)
          , m = o(52)
          , v = o(40);
        function *g() {
            yield(0,
            m.takeLatest)(u.setTransientToast.match, S)
        }
        function *S() {
            yield(0,
            v.delay)(3e3),
            yield(0,
            m.put)((0,
            u.clearToast)())
        }
        var y = o(18)
          , b = o(206)
          , T = o(233)
          , I = Object.defineProperty
          , _ = Object.getOwnPropertySymbols
          , E = Object.prototype.hasOwnProperty
          , C = Object.prototype.propertyIsEnumerable
          , w = (e,t,o)=>t in e ? I(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: o
        }) : e[t] = o;
        function *M() {
            yield(0,
            m.takeLatest)([T.showNotification, T.showCustomNotification], O)
        }
        function *O(e) {
            let t;
            if (T.showCustomNotification.match(e))
                t = e.payload;
            else {
                const o = e.payload;
                t = b.notifications[o]
            }
            if (void 0 === (null == t ? void 0 : t.body))
                return;
            const o = y.localPreferences.get("snoozedNotifs") || {};
            o[t.body] || t.body === b.NotificationType.AutoMute && o["For your privacy, Gather automatically *mutes your audio and video* when you’re away from the tab and not in a conversation. You can turn this off in your *user preferences (Ctrl/⌘ P)*"] || (yield(0,
            m.put)((0,
            b.setNotification)(t)),
            yield(0,
            m.take)(T.hideNotification),
            t.repeatable || y.localPreferences.set("snoozedNotifs", ((e,t)=>{
                for (var o in t || (t = {}))
                    E.call(t, o) && w(e, o, t[o]);
                if (_)
                    for (var o of _(t))
                        C.call(t, o) && w(e, o, t[o]);
                return e
            }
            )({
                [t.body]: !0
            }, o)),
            yield(0,
            m.put)((0,
            b.setNotification)(void 0)))
        }
        var A = o(36)
          , k = o(361)
          , P = o(1625)
          , D = o(71)
          , R = o(19);
        function *N() {
            yield(0,
            m.takeLatest)(h.handleTutorialTaskEventAndSyncProgress, x)
        }
        function *x(e) {
            const t = yield(0,
            m.select)(h.completedTutorialTaskIdsSelector)
              , o = yield(0,
            m.select)(h.currentTutorialTaskIdSelector)
              , n = yield(0,
            m.select)(h.currentTutorialTaskStepSelector);
            if (o && (0,
            P.shouldGoToNextStepOnEvent)(e.payload.tutorialTaskEvent, e.payload.eventMetadata, {
                currentStep: n,
                currentTutorialTaskId: o
            })) {
                const e = k.TUTORIAL_TASKS[o];
                yield(0,
                m.put)((0,
                h.handleCompleteTutorialTaskStep)()),
                (null == e ? void 0 : e.returnToTabOnComplete) && (0,
                P.isCurrentStepLastStep)({
                    currentTutorialTaskId: o,
                    currentStep: n
                }) && (yield(0,
                m.put)((0,
                u.setActiveTab)(u.LeftBarTab.TUTORIALS)));
                const a = yield(0,
                m.select)(h.completedTutorialTaskIdsSelector);
                if (!(0,
                A.isEqual)(t, a)) {
                    (0,
                    y.logMetricsEvent)(R.MetricsEventName.COMPLETED_TUTORIAL_TASK, {
                        tutorialTaskId: o
                    });
                    try {
                        yield(0,
                        m.call)(D.updateUserData, {
                            completedTutorialTasks: a.filter((e=>!k.TUTORIAL_TASK_NO_UPDATE_ON_COMPLETE[e]))
                        })
                    } catch (e) {
                        console.error("Failed to save tutorial task events:", e)
                    }
                }
            }
        }
        var L = o(3173)
          , j = o(198)
          , F = Object.defineProperty
          , U = Object.defineProperties
          , B = Object.getOwnPropertyDescriptors
          , G = Object.getOwnPropertySymbols
          , V = Object.prototype.hasOwnProperty
          , W = Object.prototype.propertyIsEnumerable
          , K = (e,t,o)=>t in e ? F(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: o
        }) : e[t] = o;
        function *z() {
            yield(0,
            m.takeLatest)(j.syncEvents, Y),
            yield(0,
            m.takeLatest)(j.syncAccountInfo, H),
            yield(0,
            m.takeLatest)(j.syncSelectedCalendars, q),
            yield(0,
            m.takeLatest)(j.signOut, $)
        }
        function *Y(e) {
            const {spaceId: t} = e.payload
              , o = yield(0,
            m.select)(j.eventsSelector);
            yield(0,
            m.put)((0,
            j.setLoader)(o ? j.Loader.Inline : j.Loader.Space));
            const n = e=>e.startOf("day").toISO()
              , a = L.DateTime.now()
              , r = a.plus({
                day: 1
            })
              , i = yield(0,
            j.getEvents)(t, n(a), n(r));
            i.events && (yield(0,
            m.put)((0,
            j.setEvents)(i.events))),
            yield(0,
            m.put)((0,
            j.setLoader)(void 0))
        }
        function *H(e) {
            const {spaceId: t} = e.payload;
            yield(0,
            m.put)((0,
            j.setLoader)(j.Loader.Space));
            const o = yield(0,
            j.getCalendars)(t);
            if (o.error)
                return o.code,
                void (yield(0,
                m.put)((0,
                j.setLoader)(void 0)));
            if (o.calendars) {
                const {calendars: e} = o
                  , {personalCalendars: n, hasSpaceWideCalendar: a} = e;
                n && (yield(0,
                m.put)((0,
                j.setIsSignedIn)(!0)),
                yield(0,
                m.put)((0,
                j.setCalendars)(n))),
                yield(0,
                m.put)((0,
                j.setHasSpaceWideCalendar)(a)),
                yield(0,
                m.put)((0,
                j.syncEvents)({
                    spaceId: t
                }))
            }
            yield(0,
            m.put)((0,
            j.setLoader)(void 0))
        }
        function *q(e) {
            const {spaceId: t, calendarIds: o, accountId: n} = e.payload
              , a = new Set(o)
              , r = yield(0,
            m.select)(j.calendarsSelector);
            if (!r)
                return;
            const i = r.map((e=>((e,t)=>U(e, B(t)))(((e,t)=>{
                for (var o in t || (t = {}))
                    V.call(t, o) && K(e, o, t[o]);
                if (G)
                    for (var o of G(t))
                        W.call(t, o) && K(e, o, t[o]);
                return e
            }
            )({}, e), {
                selected: a.has(e.id)
            })));
            yield(0,
            m.put)((0,
            j.setCalendars)(i)),
            yield(0,
            j.updateCalendarAuth)(t, n, o),
            yield(0,
            m.put)((0,
            j.syncEvents)({
                spaceId: t
            }))
        }
        function *$(e) {
            const {spaceId: t, accountId: o} = e.payload;
            yield(0,
            m.put)((0,
            j.setIsSignedIn)(!1));
            const n = yield(0,
            m.select)(j.eventsSelector)
              , a = null == n ? void 0 : n.filter((e=>e.calendarId === R.SPACE_WIDE_CAL_ID));
            yield(0,
            m.put)((0,
            j.setEvents)(a)),
            yield(0,
            m.put)((0,
            j.setCalendars)(void 0)),
            yield(0,
            j.deleteCalendarAuth)(t, o),
            yield(0,
            m.put)((0,
            j.syncEvents)({
                spaceId: t
            }))
        }
        var Z = o(43);
        function *Q() {
            yield(0,
            m.takeLatest)([p.keyDownInFullscreenAction, p.setFullscreenPlayer, p.setFullscreenVideoFocus, p.setCanvasFocus], X),
            yield(0,
            m.takeLatest)([p.setFullscreenPlayer, p.setFullscreenVideoFocus], J)
        }
        function *X() {
            if (Z.isMobile)
                return;
            const e = yield(0,
            m.select)(p.canvasFocusSelector)
              , t = yield(0,
            m.select)(p.fullscreenVideoFocusSelector);
            yield(0,
            m.put)((0,
            p.setFullscreenUIShown)(!0)),
            (!e || t) && (yield new Promise((t=>setTimeout(t, e ? 5e3 : 500))),
            yield(0,
            m.put)((0,
            p.setFullscreenUIShown)(!1)))
        }
        function *J() {
            if (!Z.isMobile)
                return;
            const e = yield(0,
            m.select)(p.fullscreenVideoFocusSelector)
              , t = yield(0,
            m.select)(p.selectFullscreenPlayer);
            yield(0,
            m.put)((0,
            p.setFullscreenUIShown)(null !== t)),
            (e || t) && (yield new Promise((e=>setTimeout(e, 5e3))),
            yield(0,
            m.put)((0,
            p.setFullscreenUIShown)(!1)))
        }
        function *ee() {
            yield(0,
            m.takeEvery)([l.updateBlocked], te)
        }
        function *te() {
            const e = yield(0,
            m.select)(l.blockedSelector);
            y.localPreferences.setForRoom(y.LocalPreferenceRoomKeys.Blocked, e)
        }
        var oe = o(87)
          , ne = o(34);
        function *ae() {
            yield(0,
            m.all)([(0,
            m.takeLatest)(ne.initSpaceInfo, re), (0,
            m.takeLatest)(ne.initSpaceMembers, ie)])
        }
        function *re() {
            yield(0,
            m.put)((0,
            ne.setSpaceInfoStatus)(ne.SpaceInfoStatus.Loading));
            let e = yield(0,
            m.call)(oe.getRoomInfo);
            void 0 === e && (yield(0,
            m.delay)(2e3),
            e = yield(0,
            m.call)(oe.getRoomInfo)),
            (0,
            y.amplitudeGroupIdentify)(R.AmplitudeGroupIdentifyOperations.SET, R.MetricsGroupTypes.SPACE_ID, (null == e ? void 0 : e.id) || "", R.MetricsGroupProperties.USE_CASE, null == e ? void 0 : e.reason),
            yield(0,
            m.all)([(0,
            m.put)((0,
            ne.setSpaceInfo)(e)), (0,
            m.put)((0,
            ne.setSpaceInfoStatus)(e ? ne.SpaceInfoStatus.Success : ne.SpaceInfoStatus.Failure))])
        }
        function *ie() {
            const e = yield(0,
            m.call)(oe.getAllUsers);
            yield(0,
            m.put)((0,
            ne.setSpaceMembers)(e))
        }
        function *se() {
            yield(0,
            m.all)([ce(), le()])
        }
        function *ce() {
            yield(0,
            m.takeEvery)(f.toggleUseSmartZoom, (function*() {
                const e = yield(0,
                m.select)(f.selectUseSmartZoom);
                y.localPreferences.set(y.LocalPreferenceKeys.UseSmartZoom, e)
            }
            ))
        }
        function *le() {
            yield(0,
            m.takeEvery)(f.setManualCanvasZoom, (e=>{
                y.localPreferences.set(y.LocalPreferenceKeys.ManualCanvasZoom, e.payload)
            }
            ))
        }
        function *ue() {
            yield(0,
            m.takeEvery)([s.setIsChatMuted], de)
        }
        function *de() {
            const e = yield(0,
            m.select)(s.isChatMutedSelector);
            y.localPreferences.setForRoom(y.LocalPreferenceRoomKeys.IsChatMuted, e)
        }
        function *pe() {
            yield(0,
            m.takeLatest)(u.setShowReportAVIssue.match, he)
        }
        function *he() {
            yield(0,
            v.delay)(2e4),
            yield(0,
            m.put)((0,
            u.setShowReportAVIssue)(!1))
        }
        var fe = o(207);
        function *me() {
            yield(0,
            m.takeEvery)(fe.addAchievementPopups, ve)
        }
        function *ve(e) {
            yield(0,
            v.delay)(8e3),
            yield(0,
            m.put)((0,
            fe.clearAchievementPopups)(e.payload))
        }
        var ge = o(208);
        function *Se() {
            yield(0,
            m.takeLatest)([ge.initMilestones], ye),
            yield(0,
            m.throttle)(1e4, ge.updateMilestones, be)
        }
        function *ye(e) {
            yield(0,
            m.put)((0,
            ge.setMilestoneStatus)(ge.MilestoneStatus.Loading));
            const t = yield(0,
            m.call)(ge.getMilestonesHelper, e.payload);
            t.error ? yield(0,
            m.put)((0,
            ge.setMilestoneStatus)(ge.MilestoneStatus.Failure)) : (yield(0,
            m.put)((0,
            ge.setMilestones)(t.milestones || {})),
            yield(0,
            m.put)((0,
            ge.setMilestoneStatus)(ge.MilestoneStatus.Success)))
        }
        function *be() {
            const e = yield(0,
            m.select)(l.selectMyPlayerId)
              , t = yield(0,
            m.select)(ge.selectMilestones);
            yield(0,
            ge.updateMilestonesHelper)(e, t)
        }
        var Te = o(64)
          , Ie = o(74);
        function *_e() {
            yield(0,
            m.all)([(0,
            m.takeLatest)(Te.initializeObjectTemplates, Ee)])
        }
        function *Ee() {
            if ((yield(0,
            m.select)(Te.objectTemplatesSelector)).length > 0)
                return;
            yield(0,
            m.put)((0,
            Te.setObjectsLoadStatus)(Te.ObjectLoadStatus.Loading));
            const e = yield(0,
            m.call)(Ie.initObjectTemplates);
            yield(0,
            m.all)([(0,
            m.put)((0,
            Te.setObjectTemplates)(e)), (0,
            m.put)((0,
            Te.setObjectsLoadStatus)(e ? Te.ObjectLoadStatus.Success : Te.ObjectLoadStatus.Failure))]),
            window.sessionStorage.setItem(Te.OBJECT_TEMPLATES_SESSION_STORAGE_KEY, JSON.stringify(e))
        }
        var Ce = o(591)
          , we = o(115)
          , Me = o(97)
          , Oe = o(234)
          , Ae = Object.defineProperty
          , ke = Object.getOwnPropertySymbols
          , Pe = Object.prototype.hasOwnProperty
          , De = Object.prototype.propertyIsEnumerable
          , Re = (e,t,o)=>t in e ? Ae(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: o
        }) : e[t] = o;
        const Ne = (0,
        i.default)()
          , xe = (0,
        a.combineReducers)({
            chat: s.default,
            map: c.default,
            playerInfo: l.default,
            nav: u.default,
            mobileNav: d.default,
            video: p.default,
            notification: b.default,
            tutorialTask: h.default,
            setting: f.default,
            event: j.default,
            click: we.default,
            build: Te.default,
            pushNotification: Ce.default,
            space: ne.default,
            desk: Me.default,
            achievement: fe.default,
            milestone: ge.default,
            rwonboarding: Oe.default
        })
          , Le = ["setting"]
          , je = (0,
        n.configureStore)({
            reducer: (e,t)=>{
                if (!e)
                    return xe(e, t);
                const o = ((e,t)=>{
                    for (var o in t || (t = {}))
                        Pe.call(t, o) && Re(e, o, t[o]);
                    if (ke)
                        for (var o of ke(t))
                            De.call(t, o) && Re(e, o, t[o]);
                    return e
                }
                )({}, e);
                if (t.type === r.clearSpaceState.type)
                    for (const t of Object.keys(e))
                        Le.includes(t) || (o[t] = void 0);
                return xe(o, t)
            }
            ,
            middleware: e=>e().concat(Ne)
        });
        Ne.run((function*() {
            yield(0,
            m.all)([g(), M(), N(), z(), Q(), ee(), ae(), se(), ue(), pe(), me(), Se(), _e()])
        }
        ));
        const Fe = je
    }
    ,
    38: (e,t,o)=>{
        var n, a;
        o.d(t, {
            Layers: ()=>n
        }),
        (a = n || (n = {}))[a.Canvas = 0] = "Canvas",
        a[a.LeftBar = 1] = "LeftBar",
        a[a.ObjectInteractionUI = 2] = "ObjectInteractionUI",
        a[a.VideoUI = 3] = "VideoUI",
        a[a.ActionBar = 4] = "ActionBar",
        a[a.Toast = 5] = "Toast",
        a[a.Modal = 6] = "Modal",
        a[a.Tooltip = 7] = "Tooltip",
        a[a.ErrorModal = 8] = "ErrorModal"
    }
    ,
    1743: function(e, t, o) {
        var n = this && this.__awaiter || function(e, t, o, n) {
            return new (o || (o = Promise))((function(a, r) {
                function i(e) {
                    try {
                        c(n.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function s(e) {
                    try {
                        c(n.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? a(e.value) : (t = e.value,
                    t instanceof o ? t : new o((function(e) {
                        e(t)
                    }
                    ))).then(i, s)
                }
                c((n = n.apply(e, t || [])).next())
            }
            ))
        }
          , a = this && this.__generator || function(e, t) {
            var o, n, a, r, i = {
                label: 0,
                sent: function() {
                    if (1 & a[0])
                        throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return r = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }
            ),
            r;
            function s(r) {
                return function(s) {
                    return function(r) {
                        if (o)
                            throw new TypeError("Generator is already executing.");
                        for (; i; )
                            try {
                                if (o = 1,
                                n && (a = 2 & r[0] ? n.return : r[0] ? n.throw || ((a = n.return) && a.call(n),
                                0) : n.next) && !(a = a.call(n, r[1])).done)
                                    return a;
                                switch (n = 0,
                                a && (r = [2 & r[0], a.value]),
                                r[0]) {
                                case 0:
                                case 1:
                                    a = r;
                                    break;
                                case 4:
                                    return i.label++,
                                    {
                                        value: r[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++,
                                    n = r[1],
                                    r = [0];
                                    continue;
                                case 7:
                                    r = i.ops.pop(),
                                    i.trys.pop();
                                    continue;
                                default:
                                    if (!((a = (a = i.trys).length > 0 && a[a.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
                                        i.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && i.label < a[1]) {
                                        i.label = a[1],
                                        a = r;
                                        break
                                    }
                                    if (a && i.label < a[2]) {
                                        i.label = a[2],
                                        i.ops.push(r);
                                        break
                                    }
                                    a[2] && i.ops.pop(),
                                    i.trys.pop();
                                    continue
                                }
                                r = t.call(e, i)
                            } catch (e) {
                                r = [6, e],
                                n = 0
                            } finally {
                                o = a = 0
                            }
                        if (5 & r[0])
                            throw r[1];
                        return {
                            value: r[0] ? r[1] : void 0,
                            done: !0
                        }
                    }([r, s])
                }
            }
        }
        ;
        t.__esModule = !0,
        t.Engine = void 0;
        var r = o(26)
          , i = o(889)
          , s = o(1693)
          , c = function() {
            function e(e, t, o) {
                this.serverURL = "",
                this._randId = 0,
                this._connected = !1,
                this._sendQ = [],
                this.transactionManager = new i.TransactionManager,
                this._textDecoder = new TextDecoder,
                this._textDecoderUtf8 = new TextDecoder("utf-8"),
                this._textEncoder = new TextEncoder,
                this._heartbeatInterval = 0,
                this._reconnectTimer = 0,
                this._reconnectionAttempts = 0,
                this._resetReconnectionAttemptsTimer = 0,
                this._lastHeartbeat = 1 / 0,
                this._bufferedAmounts = new s.SlidingWindow(10),
                this._latencies = new s.SlidingWindow(10),
                this._errorsCount = 0,
                this._successfulReconnectionsCount = 0,
                this._reconnectStartTime = 0,
                this._successfulReconnectsCount = 0,
                this._timeSpentDisconnected = new s.SlidingWindow(10),
                this._bytesSentSinceConnect = 0,
                this._bytesReceivedSinceConnect = 0,
                this._byteTrackerInterval = 0,
                this._lastBytesSent = 0,
                this._lastBytesReceived = 0,
                this._eventCountsSinceOpen = {},
                this._closeCounts = {},
                this.getAuth = e,
                this.getGameServerUrl = t,
                this.spaceId = o,
                this._randId = Math.random(),
                console.log("new engine constructed with id " + this._randId)
            }
            return e.prototype.onevent = function(e) {}
            ,
            e.prototype.onconnect = function() {}
            ,
            e.prototype.ondisconnect = function() {}
            ,
            e.prototype.onreconnected = function(e) {}
            ,
            e.prototype.onlatency = function(e) {}
            ,
            e.prototype.onmetric = function(e, t) {}
            ,
            e.prototype.start = function() {
                return n(this, void 0, void 0, (function() {
                    var e, t;
                    return a(this, (function(o) {
                        switch (o.label) {
                        case 0:
                            return o.trys.push([0, 2, , 3]),
                            e = this,
                            [4, this.getGameServerUrl(this.spaceId)];
                        case 1:
                            return e.serverURL = o.sent(),
                            this._connect(this.serverURL),
                            [3, 3];
                        case 2:
                            return t = o.sent(),
                            console.error("Error starting game engine:", t),
                            this._reconnect(),
                            [3, 3];
                        case 3:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.destroy = function() {
                this.ondisconnect(),
                this.onconnect = function() {}
                ,
                this.ondisconnect = function() {}
                ,
                this.onreconnected = function() {}
                ,
                this.onlatency = function() {}
                ,
                this._destroyInternal()
            }
            ,
            e.prototype._connect = function(e) {
                return n(this, void 0, void 0, (function() {
                    var t, o = this;
                    return a(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            return this._byteTrackerInterval || (this._byteTrackerInterval = setInterval((function() {
                                o.onmetric("bytes-sent-since-connect", o._bytesSentSinceConnect),
                                o.onmetric("bytes-recv-since-connect", o._bytesReceivedSinceConnect),
                                o._bytesSentSinceConnect === o._lastBytesSent && console.error("warning: bytes sent hasn't changed in the last 10 seconds, currently " + o._lastBytesSent),
                                o._bytesReceivedSinceConnect === o._lastBytesReceived && console.error("warning: bytes received hasn't changed in the last 10 seconds, currently " + o._lastBytesReceived),
                                o._lastBytesSent = o._bytesSentSinceConnect,
                                o._lastBytesReceived = o._bytesReceivedSinceConnect
                            }
                            ), 1e4)),
                            [4, this.getAuth()];
                        case 1:
                            t = n.sent();
                            try {
                                this.ws = new WebSocket(e,"gather-v2")
                            } catch (t) {
                                return console.error("Failed to create websocket connection to gameserver: " + e, t),
                                this._reconnect(),
                                [2]
                            }
                            return this.ws.binaryType = "arraybuffer",
                            this._lastHeartbeat = Date.now(),
                            this._heartbeatInterval && clearInterval(this._heartbeatInterval),
                            this._heartbeatInterval = setInterval((function() {
                                o.sendAction({
                                    $case: "clientBackupHeartbeat",
                                    clientBackupHeartbeat: {}
                                }),
                                o._lastHeartbeat < Date.now() - 45e3 && null != o.ws && (console.error("no heartbeat since " + o._lastHeartbeat + ", closing connection for engine " + o._randId),
                                o.onmetric("ws-close-timeout", {
                                    engine: o._randId,
                                    lastHeartbeat: o._lastHeartbeat
                                }),
                                o.ws.close(r.GameWsCloseCode.CONN_TIMED_OUT, "Game Server timed out. No heartbeat since " + new Date(o._lastHeartbeat)),
                                o.ws = void 0)
                            }
                            ), 1e4),
                            this.ws.onopen = function() {
                                if (null != o.ws) {
                                    if (clearTimeout(o._reconnectTimer),
                                    o._eventCountsSinceOpen = {},
                                    o.sendAction({
                                        $case: "init",
                                        init: {
                                            spaceId: o.spaceId,
                                            auth: "token"in t ? {
                                                $case: "token",
                                                token: t.token
                                            } : {
                                                $case: "apiKey",
                                                apiKey: t.apiKey
                                            }
                                        }
                                    }, !0),
                                    o.onconnect(),
                                    o._reconnectStartTime) {
                                        var e = Date.now() - o._reconnectStartTime;
                                        o._resetReconnectionAttemptsTimer = setTimeout((function() {
                                            o._reconnectionAttempts = 0,
                                            o._successfulReconnectsCount += 1,
                                            o._timeSpentDisconnected.push(e),
                                            o._reconnectStartTime = 0,
                                            o.onreconnected(e)
                                        }
                                        ), 6e4)
                                    }
                                    o._onmessageSetup()
                                } else
                                    console.error("something is very wrong, ws is null after open")
                            }
                            ,
                            this.ws.onclose = function(e) {
                                var t;
                                switch (o._connected = !1,
                                o.onmetric("client_ws_close_code_" + e.code, e.reason),
                                o._closeCounts[e.code] = (null !== (t = o._closeCounts[e.code]) && void 0 !== t ? t : 0) + 1,
                                console.error("engine " + o._randId + ", Web socket on close, about to call disconnect: close code " + e.code + " reason " + e.reason + " value " + e.returnValue),
                                console.log("resetting byte counts from " + o._bytesSentSinceConnect + " sent and " + o._bytesReceivedSinceConnect + " received to 0"),
                                o._bytesSentSinceConnect = 0,
                                o._bytesReceivedSinceConnect = 0,
                                e.code) {
                                case r.GameWsCloseCode.SPACE_AT_CAPACITY:
                                    console.error("Space is currently at capacity, please try again later:", e.reason);
                                    break;
                                case r.GameWsCloseCode.PROTOCOL_ERROR:
                                    console.error("ws closed: protocol error. " + e.reason),
                                    "undefined" != typeof window && window.location.reload();
                                    break;
                                case r.GameWsCloseCode.INTERNAL_ERROR:
                                    console.error("connection closed due to internal server error:", e.reason),
                                    "undefined" != typeof window && window.location.reload();
                                    break;
                                case r.GameWsCloseCode.CLIENT_KICKED:
                                    console.error("connection closed due to client being kicked:", e.reason),
                                    "undefined" != typeof window && window.location.reload();
                                    break;
                                case r.GameWsCloseCode.UNAUTHORIZED:
                                    console.error("connection closed because user does not have access:", e.reason),
                                    "undefined" != typeof window && window.location.reload();
                                    break;
                                case r.GameWsCloseCode.CONN_TIMED_OUT:
                                    console.error("connection timed out:", e.reason),
                                    o._reconnect();
                                    break;
                                case r.GameWsCloseCode.NO_STATUS_RECEIVED:
                                    console.error("connection closed unexpectedly with no status:", e),
                                    o._reconnect();
                                    break;
                                default:
                                    console.error("connection closed with unrecognized non-default code " + e.code + ":", e),
                                    o._reconnect()
                                }
                                o.ondisconnect()
                            }
                            ,
                            this.ws.onerror = function(e) {
                                console.error("ws.onerror in engine " + o._randId, e),
                                o.onmetric("ws error", e),
                                o._errorsCount += 1
                            }
                            ,
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype._onmessageSetup = function() {
                var e = this;
                null != this.ws ? (console.log("engine " + this._randId + " starting with new interface:", this.ws.protocol),
                this.ws.onmessage = function(t) {
                    try {
                        e._bytesReceivedSinceConnect += t.data.byteLength;
                        var o = new Uint8Array(t.data)
                          , n = r.ServerClientBatch.decode(o).events;
                        e._lastHeartbeat = Date.now(),
                        n.forEach((function(t) {
                            var o, n = t.event;
                            if (n) {
                                e._eventCountsSinceOpen[n.$case] = (null !== (o = e._eventCountsSinceOpen[n.$case]) && void 0 !== o ? o : 0) + 1;
                                try {
                                    switch (n.$case) {
                                    case "serverHeartbeat":
                                        e.sendAction({
                                            $case: "clientHeartbeat",
                                            clientHeartbeat: {}
                                        }),
                                        n.serverHeartbeat.lastRTT && (e._latencies.push(n.serverHeartbeat.lastRTT / 2),
                                        e.onlatency(e._latencies.getMetrics()));
                                        break;
                                    case "ready":
                                        e._connected = !0,
                                        e._sendQ.forEach((function(t) {
                                            e.sendAction(t)
                                        }
                                        )),
                                        e._sendQ = [];
                                        break;
                                    case "info":
                                        console.log("[info from gs]", n.info.message);
                                        break;
                                    case "warn":
                                        console.warn("[warn from gs]", n.warn.message);
                                        break;
                                    case "error":
                                        console.error("[error from gs] " + n.error.code + ":", n.error.message);
                                        break;
                                    case "transactionStatus":
                                        e.transactionManager.handleTransactionStatusEvent(n.transactionStatus);
                                        break;
                                    default:
                                        e.onevent(t)
                                    }
                                } catch (t) {
                                    console.error("Failed to process event " + n.$case + " with error:", t.toString().slice(0, 100)),
                                    e.onmetric("failed-to-process-event", {
                                        error: {
                                            name: null == t ? void 0 : t.name,
                                            stack: null == t ? void 0 : t.stack,
                                            message: null == t ? void 0 : t.message
                                        },
                                        event: n
                                    })
                                }
                            } else
                                console.error("Nullish server client event; this shouldn't happen! ", t)
                        }
                        ))
                    } catch (e) {
                        console.error("unexpected error in ws.onmessage, maybe decode?:", e)
                    }
                }
                ) : console.error("null ws in _onmessageSetup, this should never happen")
            }
            ,
            e.prototype._destroyInternal = function() {
                console.log("engine " + this._randId + " _destroyInternal()"),
                clearInterval(this._heartbeatInterval),
                clearTimeout(this._reconnectTimer),
                this._reconnectTimer = null,
                clearTimeout(this._resetReconnectionAttemptsTimer),
                this._resetReconnectionAttemptsTimer = null,
                this.ws && (console.error("closing existing ws in _destroyInternal for engine " + this._randId),
                this.ws.onclose = function() {}
                ,
                this.onmetric("ws-close-destroy", {
                    engine: this._randId,
                    lastHeartbeat: this._lastHeartbeat
                }),
                this.ws.close(),
                this.ws = void 0),
                clearInterval(this._byteTrackerInterval),
                this.transactionManager.destroy()
            }
            ,
            e.prototype.sendAction = function(e, t, o) {
                var n, a, i;
                if (void 0 === t && (t = !1),
                void 0 === o && (o = !1),
                this._connected || t) {
                    var s, c;
                    if (o) {
                        var l = this.transactionManager.addTransaction();
                        s = l.txnId,
                        c = l.txnPromise
                    }
                    try {
                        var u = r.ClientServerAction.encode({
                            txnId: s,
                            action: e
                        }).finish();
                        return this._bufferedAmounts.push(null !== (a = null === (n = this.ws) || void 0 === n ? void 0 : n.bufferedAmount) && void 0 !== a ? a : 0),
                        null === (i = this.ws) || void 0 === i || i.send(u),
                        this._bytesSentSinceConnect += u.byteLength,
                        c
                    } catch (e) {
                        console.error("websocket send error", e)
                    }
                } else
                    "move" !== e.$case && "activelySpeaking" !== e.$case ? this._sendQ.push(e) : console.log("dropping " + e.$case + " action because we're not connected anyways")
            }
            ,
            e.prototype._reconnect = function() {
                var e = this;
                if (!this._reconnectTimer) {
                    0 === this._reconnectionAttempts && (this._reconnectStartTime = Date.now()),
                    clearInterval(this._resetReconnectionAttemptsTimer),
                    this._resetReconnectionAttemptsTimer = null;
                    var t = Math.min(1e3 * Math.pow(2, this._reconnectionAttempts - 1), 15e3);
                    t *= .5 * (1 + Math.random()),
                    t = Math.max(1e3, t),
                    this._reconnectionAttempts++,
                    this._reconnectTimer = setTimeout((function() {
                        console.error("reconnect timer fired, destroying and starting over"),
                        e._destroyInternal(),
                        e.start()
                    }
                    ), t)
                }
            }
            ,
            e.prototype.getMetrics = function() {
                return {
                    connected: this._connected,
                    latency: this._latencies.getMetrics(),
                    reconnects: {
                        timeSpentDisconnectedMs: this._timeSpentDisconnected.getMetrics(),
                        count: this._successfulReconnectsCount
                    },
                    errors: {
                        count: this._errorsCount
                    },
                    bufferedAmount: this._bufferedAmounts.getMetrics(),
                    bytesSentSinceConnect: this._bytesSentSinceConnect,
                    bytesReceivedSinceConnect: this._bytesReceivedSinceConnect,
                    eventCountsSinceOpen: this._eventCountsSinceOpen,
                    closeCodeCount: this._closeCounts
                }
            }
            ,
            e
        }();
        t.Engine = c
    },
    1684: function(e, t, o) {
        var n = this && this.__assign || function() {
            return n = Object.assign || function(e) {
                for (var t, o = 1, n = arguments.length; o < n; o++)
                    for (var a in t = arguments[o])
                        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e
            }
            ,
            n.apply(this, arguments)
        }
          , a = this && this.__createBinding || (Object.create ? function(e, t, o, n) {
            void 0 === n && (n = o),
            Object.defineProperty(e, n, {
                enumerable: !0,
                get: function() {
                    return t[o]
                }
            })
        }
        : function(e, t, o, n) {
            void 0 === n && (n = o),
            e[n] = t[o]
        }
        )
          , r = this && this.__exportStar || function(e, t) {
            for (var o in e)
                "default" === o || Object.prototype.hasOwnProperty.call(t, o) || a(t, e, o)
        }
          , i = this && this.__awaiter || function(e, t, o, n) {
            return new (o || (o = Promise))((function(a, r) {
                function i(e) {
                    try {
                        c(n.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function s(e) {
                    try {
                        c(n.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? a(e.value) : (t = e.value,
                    t instanceof o ? t : new o((function(e) {
                        e(t)
                    }
                    ))).then(i, s)
                }
                c((n = n.apply(e, t || [])).next())
            }
            ))
        }
          , s = this && this.__generator || function(e, t) {
            var o, n, a, r, i = {
                label: 0,
                sent: function() {
                    if (1 & a[0])
                        throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return r = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }
            ),
            r;
            function s(r) {
                return function(s) {
                    return function(r) {
                        if (o)
                            throw new TypeError("Generator is already executing.");
                        for (; i; )
                            try {
                                if (o = 1,
                                n && (a = 2 & r[0] ? n.return : r[0] ? n.throw || ((a = n.return) && a.call(n),
                                0) : n.next) && !(a = a.call(n, r[1])).done)
                                    return a;
                                switch (n = 0,
                                a && (r = [2 & r[0], a.value]),
                                r[0]) {
                                case 0:
                                case 1:
                                    a = r;
                                    break;
                                case 4:
                                    return i.label++,
                                    {
                                        value: r[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++,
                                    n = r[1],
                                    r = [0];
                                    continue;
                                case 7:
                                    r = i.ops.pop(),
                                    i.trys.pop();
                                    continue;
                                default:
                                    if (!((a = (a = i.trys).length > 0 && a[a.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
                                        i.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && i.label < a[1]) {
                                        i.label = a[1],
                                        a = r;
                                        break
                                    }
                                    if (a && i.label < a[2]) {
                                        i.label = a[2],
                                        i.ops.push(r);
                                        break
                                    }
                                    a[2] && i.ops.pop(),
                                    i.trys.pop();
                                    continue
                                }
                                r = t.call(e, i)
                            } catch (e) {
                                r = [6, e],
                                n = 0
                            } finally {
                                o = a = 0
                            }
                        if (5 & r[0])
                            throw r[1];
                        return {
                            value: r[0] ? r[1] : void 0,
                            done: !0
                        }
                    }([r, s])
                }
            }
        }
          , c = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        t.__esModule = !0,
        t.Game = void 0;
        var l = o(26)
          , u = o(1743)
          , d = o(1693)
          , p = o(566)
          , h = o(2465)
          , f = c(o(749));
        r(o(26), t);
        var m = function() {
            function e(e, t, o) {
                var n = this;
                this.connected = !1,
                this._initializedAtMs = 0,
                this._connectedAtMs = 0,
                this._timeToFirstOnMapMs = -1,
                this._onMapCounts = {},
                this.subscriptions = {},
                this.legacySubscriptions = {},
                this.legacySubscriptionsConnection = {},
                this.legacySubscriptionsReconnected = {},
                this.legacySubscriptionsLatency = {},
                this._encIdMapping = {},
                this.players = {},
                this.mapsAccumulator = new p.MapsAccumulator,
                this.completeMaps = this.mapsAccumulator.completeMaps,
                this.partialMaps = this.mapsAccumulator.partialMaps,
                this.entrances = 0,
                this.inputId = 1,
                this.mapDataChecks = 0,
                this.putMetric = function(e, t) {
                    d.isBrowser && console.error("tried to put metric but no metric function provided")
                }
                ,
                this.preferredRegionPing = -1,
                this.getGameServerUrl = function(e) {
                    return i(n, void 0, void 0, (function() {
                        var t, o;
                        return s(this, (function(n) {
                            switch (n.label) {
                            case 0:
                                if (this.debugOverrideServer)
                                    return [2, this.debugOverrideServer];
                                if (this.preferredRegion)
                                    return [3, 4];
                                n.label = 1;
                            case 1:
                                return n.trys.push([1, 3, , 4]),
                                [4, d.findClosestRegion()];
                            case 2:
                                return (t = n.sent()) && (this.preferredRegion = t.closestRegion,
                                this.preferredRegionPing = t.ping),
                                [3, 4];
                            case 3:
                                return o = n.sent(),
                                console.error(o),
                                [3, 4];
                            case 4:
                                return [4, (a = e,
                                r = this.preferredRegion,
                                i(void 0, void 0, void 0, (function() {
                                    var e, t, o;
                                    return s(this, (function(n) {
                                        switch (n.label) {
                                        case 0:
                                            e = d.isBrowser ? "/api/v2/spaces/" + encodeURIComponent(a) + "/game-server-assignment" : "https://gather.town/api/v2/spaces/" + encodeURIComponent(a) + "/game-server-assignment",
                                            n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]),
                                            [4, f.default.get(e, {
                                                params: {
                                                    body: {
                                                        preferredRegion: r
                                                    }
                                                }
                                            })];
                                        case 2:
                                            if (null == (t = n.sent()) ? void 0 : t.data)
                                                return [2, t.data];
                                            throw new Error("No server received in response.");
                                        case 3:
                                            return o = n.sent(),
                                            console.error("Error fetching game space assignment: spaceId is " + a + ", preferredRegion is " + r + ", error:", o),
                                            [3, 4];
                                        case 4:
                                            return [2]
                                        }
                                    }
                                    ))
                                }
                                )))];
                            case 5:
                                return [2, n.sent()]
                            }
                            var a, r
                        }
                        ))
                    }
                    ))
                }
                ,
                this.getAuth = e,
                this.onInput = t,
                this.dispatchGameUpdate = o,
                d.isBrowser && "localhost" === window.location.hostname && this.overrideServer("ws://" + window.location.host + "/__dev-websocket"),
                this._initializedAtMs = Date.now(),
                this.engine = new u.Engine(this.getAuth,this.getGameServerUrl,"")
            }
            return e.prototype.overrideServer = function(e) {
                this.debugOverrideServer = e
            }
            ,
            e.prototype.getPlayer = function(e) {
                return this.players[e]
            }
            ,
            e.prototype.connect = function(e) {
                var t = this;
                if (e = e.substring(0, 16) + "\\" + e.substring(17),
                console.log("connecting", e),
                !this.connected)
                    return this.engine && (console.error("Destroying engine in Game connect"),
                    this.engine.destroy()),
                    this.engine = new u.Engine(this.getAuth,this.getGameServerUrl,e),
                    this.connected = !0,
                    this.engine.onmetric = function(e, o) {
                        t.putMetric(e, o)
                    }
                    ,
                    this.engine.onevent = function(o) {
                        var a, r, i = o.event;
                        if (i) {
                            var s = {
                                spaceId: e
                            }
                              , c = {};
                            switch (i.$case) {
                            case "playerJoins":
                                var u = i.playerJoins.encId
                                  , d = t._encIdMapping[u];
                                if (!t.players[d]) {
                                    var p = l.generateDefaultPlayer();
                                    t.players[d] = p,
                                    c[d] = n({}, p)
                                }
                                break;
                            case "playerExits":
                                u = i.playerExits.encId,
                                c[d = t._encIdMapping[u]] = l.GAME_STATE_PLAYER_DISCONNECT_SYMBOL,
                                delete t.players[d];
                                break;
                            case "playerLeavesWhisper":
                                if (u = i.playerLeavesWhisper.encId,
                                c[d = t._encIdMapping[u]] = {
                                    whisperId: ""
                                },
                                !(p = t.players[d])) {
                                    console.error("Dropping a playerLeavesWhisper event received before a playerJoins!");
                                    break
                                }
                                p.whisperId = "";
                                break;
                            case "spaceSetsIdMapping":
                                var h = i.spaceSetsIdMapping;
                                d = h.uid,
                                u = h.encId,
                                t._encIdMapping[u] = d;
                                break;
                            case "playerChats":
                                var f = i.playerChats.senderId;
                                s.player = t.players[f];
                                break;
                            case "playerSetsImagePointer":
                            case "playerSetsPointer":
                            case "playerInteracts":
                                break;
                            default:
                                var m = i
                                  , v = m[m.$case];
                                if (u = null == v ? void 0 : v.encId,
                                i.$case.startsWith("map")) {
                                    var g = t.mapsAccumulator.addChunk(i);
                                    if (!g)
                                        break;
                                    Object.values(null !== (a = t.legacySubscriptions) && void 0 !== a ? a : {}).forEach((function(e) {
                                        -1 === t._timeToFirstOnMapMs && (t._timeToFirstOnMapMs = Date.now() - t._connectedAtMs,
                                        t.putMetric("time-to-first-map-data-ms", t._timeToFirstOnMapMs),
                                        t.mapDataCheckInterval && clearInterval(t.mapDataCheckInterval)),
                                        t._onMapCounts[g.id] || (t._onMapCounts[g.id] = 0),
                                        t._onMapCounts[g.id] += 1,
                                        e.onMap(g.id, l.convertGameMapV2ToGameMap(g))
                                    }
                                    ))
                                } else if (i.$case.startsWith("player") && null != u) {
                                    var S = []
                                      , y = t._encIdMapping[u];
                                    for (var b in null != y ? S.push(y) : console.error("got unknown encId: " + u + " in event: " + m.$case),
                                    (null == v ? void 0 : v.encIdTarget) && (null != (M = t._encIdMapping[null == v ? void 0 : v.encIdTarget]) ? S.push(M) : console.error("got unknown encTargetId: " + u + " in event: " + m.$case)),
                                    v)
                                        for (var T = 0, I = S; T < I.length; T++)
                                            if (d = I[T],
                                            "encId" !== b && "encIdTarget" !== b && void 0 !== v[b])
                                                if (p = t.players[d]) {
                                                    c[d] || (c[d] = {});
                                                    var _ = p
                                                      , E = c[d];
                                                    "mapId" === b ? (E.map = v[b],
                                                    p.map = v[b]) : (_[b] = v[b],
                                                    E[b] = v[b])
                                                } else
                                                    console.error("Dropping a " + i.$case + " event received before a playerJoins!")
                                }
                            }
                            null === (r = t.dispatchGameUpdate) || void 0 === r || r.call(t, c);
                            var C = i[i.$case];
                            if (C.encId && (u = C.encId,
                            d = t._encIdMapping[u],
                            s.player = t.players[d],
                            s.playerId = d),
                            C.encIdTarget) {
                                var w = C.encIdTarget
                                  , M = t._encIdMapping[w];
                                s.target = t.players[M],
                                s.targetId = M
                            }
                            if (C.mapId) {
                                var O = C.mapId;
                                s.map = t.partialMaps[O]
                            }
                            t.publishEvent(i.$case, i, s)
                        } else
                            console.error("Nullish server client event; this shouldn't happen! ", o)
                    }
                    ,
                    this.engine.onconnect = function() {
                        t._connectedAtMs = Date.now(),
                        t.mapsAccumulator.clear(),
                        t._startMapDataCheckInterval(),
                        t.subscribeToAll(),
                        t.engine.sendAction({
                            $case: "enter",
                            enter: {}
                        }),
                        Object.values(t.legacySubscriptionsConnection).forEach((function(e) {
                            e(!0)
                        }
                        ))
                    }
                    ,
                    this.engine.ondisconnect = function() {
                        Object.values(t.legacySubscriptionsConnection).forEach((function(e) {
                            e(!1)
                        }
                        ))
                    }
                    ,
                    this.engine.onreconnected = function(e) {
                        Object.values(t.legacySubscriptionsReconnected).forEach((function(t) {
                            t(e)
                        }
                        ))
                    }
                    ,
                    this.engine.onlatency = function(e) {
                        Object.values(t.legacySubscriptionsLatency).forEach((function(t) {
                            t(e)
                        }
                        ))
                    }
                    ,
                    this.engine.start()
            }
            ,
            e.prototype.disconnect = function(e) {
                console.log("Disconnecting space: ", e),
                this.engine ? (console.error("Destroying engine in Game disconnect"),
                this.engine.destroy(),
                this.connected = !1) : console.log("Destroying an engine that wasn't created in the first place. Was this space real?")
            }
            ,
            e.prototype.publishEvent = function(e, t, o) {
                var n = this.subscriptions[e];
                for (var a in n)
                    (0,
                    n[a])(t, o)
            }
            ,
            e.prototype.subscribeToEvent = function(e, t) {
                var o = this;
                console.debug("Subscribing to new event", e);
                var n = h.v4()
                  , a = this.subscriptions[e]
                  , r = null != a ? a : {};
                return r[n] = t,
                this.subscriptions[e] = r,
                function() {
                    var t;
                    null === (t = o.subscriptions[e]) || void 0 === t || delete t[n]
                }
            }
            ,
            e.prototype.subscribeToSpace = function(e, t) {
                var o = this
                  , n = h.v4();
                return this.legacySubscriptions || (this.legacySubscriptions = {},
                this.subscribeToAll()),
                this.legacySubscriptions[n] = t,
                function() {
                    delete o.legacySubscriptions[n],
                    0 === Object.keys(o.legacySubscriptions).length && (o.legacySubscriptions = {})
                }
            }
            ,
            e.prototype.subscribeToConnection = function(e) {
                var t = this
                  , o = h.v4();
                return this.legacySubscriptionsConnection[o] = e,
                function() {
                    delete t.legacySubscriptionsConnection[o]
                }
            }
            ,
            e.prototype.subscribeToReconnected = function(e) {
                var t = this
                  , o = h.v4();
                return this.legacySubscriptionsReconnected[o] = e,
                function() {
                    delete t.legacySubscriptionsReconnected[o]
                }
            }
            ,
            e.prototype.subscribeToLatency = function(e) {
                var t = this
                  , o = h.v4();
                return this.legacySubscriptionsLatency[o] = e,
                function() {
                    delete t.legacySubscriptionsLatency[o]
                }
            }
            ,
            e.prototype.enter = function(e, t, o) {
                this.entrances <= 0 && (this.engine.sendAction({
                    $case: "enter",
                    enter: {
                        spawnToken: o,
                        info: t
                    }
                }),
                this.entrances = 0),
                this.entrances += 1
            }
            ,
            e.prototype.exit = function() {
                this.entrances -= 1,
                0 === this.entrances && (this.engine.sendAction({
                    $case: "exit",
                    exit: {}
                }),
                this.entrances = 0)
            }
            ,
            e.prototype.respawn = function() {
                var e;
                null === (e = this.engine) || void 0 === e || e.sendAction({
                    $case: "respawn",
                    respawn: {}
                })
            }
            ,
            e.prototype.spawn = function(e) {
                this.engine.sendAction({
                    $case: "spawn",
                    spawn: {
                        spawnToken: e
                    }
                })
            }
            ,
            e.prototype.move = function(e, t, o) {
                var n;
                void 0 === t && (t = !1);
                var a = this.inputId++;
                null === (n = this.onInput) || void 0 === n || n.call(this, e, t, a),
                this.engine.sendAction({
                    $case: "move",
                    move: {
                        dir: e,
                        stopped: t,
                        inputId: a,
                        targetId: o
                    }
                })
            }
            ,
            e.prototype.playSound = function(e, t, o) {
                this.engine.sendAction({
                    $case: "playSound",
                    playSound: {
                        src: e,
                        volume: t,
                        targetId: o
                    }
                })
            }
            ,
            e.prototype.ghost = function(e, t) {
                this.engine.sendAction({
                    $case: "ghost",
                    ghost: {
                        ghost: e,
                        targetId: t
                    }
                })
            }
            ,
            e.prototype.enterWhisper = function(e, t) {
                this.engine.sendAction({
                    $case: "enterWhisper",
                    enterWhisper: {
                        recipientId: e,
                        dir: t
                    }
                })
            }
            ,
            e.prototype.leaveWhisper = function() {
                this.engine.sendAction({
                    $case: "leaveWhisper",
                    leaveWhisper: {}
                })
            }
            ,
            e.prototype.teleport = function(e, t, o, n) {
                this.engine.sendAction({
                    $case: "teleport",
                    teleport: {
                        mapId: e,
                        x: t,
                        y: o,
                        targetId: n
                    }
                })
            }
            ,
            e.prototype.ring = function(e) {
                this.engine.sendAction({
                    $case: "ring",
                    ring: {
                        user: e
                    }
                })
            }
            ,
            e.prototype.pointer = function(e, t, o) {
                this.engine.sendAction({
                    $case: "setImagePointer",
                    setImagePointer: {
                        objectId: e,
                        x: t,
                        y: o
                    }
                })
            }
            ,
            e.prototype.setActivelySpeaking = function(e) {
                this.engine.sendAction({
                    $case: "activelySpeaking",
                    activelySpeaking: {
                        activelySpeaking: e
                    }
                })
            }
            ,
            e.prototype.setEmote = function(e, t) {
                this.engine.sendAction({
                    $case: "setEmote",
                    setEmote: {
                        emote: e,
                        targetId: t
                    }
                })
            }
            ,
            e.prototype.setWorkCondition = function(e, t) {
                this.engine.sendAction({
                    $case: "setWorkCondition",
                    setWorkCondition: {
                        workCondition: e,
                        targetId: t
                    }
                })
            }
            ,
            e.prototype.setName = function(e, t) {
                this.engine.sendAction({
                    $case: "setName",
                    setName: {
                        name: e,
                        targetId: t
                    }
                })
            }
            ,
            e.prototype.setTextStatus = function(e, t) {
                this.engine.sendAction({
                    $case: "setTextStatus",
                    setTextStatus: {
                        textStatus: e,
                        targetId: t
                    }
                })
            }
            ,
            e.prototype.setEmojiStatus = function(e, t) {
                this.engine.sendAction({
                    $case: "setEmojiStatus",
                    setEmojiStatus: {
                        emojiStatus: e,
                        targetId: t
                    }
                })
            }
            ,
            e.prototype.setAffiliation = function(e, t) {
                this.engine.sendAction({
                    $case: "setAffiliation",
                    setAffiliation: {
                        affiliation: e,
                        targetId: t
                    }
                })
            }
            ,
            e.prototype.setStatus = function(e, t) {
                this.engine.sendAction({
                    $case: "setStatus",
                    setStatus: {
                        status: e,
                        targetId: t
                    }
                })
            }
            ,
            e.prototype.setEventStatus = function(e, t) {
                this.engine.sendAction({
                    $case: "setEventStatus",
                    setEventStatus: {
                        eventStatus: e,
                        targetId: t
                    }
                })
            }
            ,
            e.prototype.setInConversation = function(e, t) {
                this.engine.sendAction({
                    $case: "setInConversation",
                    setInConversation: {
                        inConversation: e,
                        targetId: t
                    }
                })
            }
            ,
            e.prototype.setCurrentDesk = function(e, t) {
                this.engine.sendAction({
                    $case: "setCurrentDesk",
                    setCurrentDesk: {
                        currentDesk: e,
                        targetId: t
                    }
                })
            }
            ,
            e.prototype.setCurrentArea = function(e, t) {
                this.engine.sendAction({
                    $case: "setCurrentArea",
                    setCurrentArea: {
                        currentArea: e,
                        targetId: t
                    }
                })
            }
            ,
            e.prototype.setSprite = function(e, t) {
                this.engine.sendAction({
                    $case: "setSprite",
                    setSprite: {
                        sprite: e,
                        targetId: t
                    }
                })
            }
            ,
            e.prototype.setOutfitString = function(e, t) {
                var o;
                null === (o = this.engine) || void 0 === o || o.sendAction({
                    $case: "setOutfitString",
                    setOutfitString: {
                        outfitString: e,
                        targetId: t
                    }
                })
            }
            ,
            e.prototype.setSpotlight = function(e, t) {
                this.engine.sendAction({
                    $case: "spotlight",
                    spotlight: {
                        spotlightedUser: e,
                        isSpotlighted: t
                    }
                })
            }
            ,
            e.prototype.banPlayer = function(e) {
                this.engine.sendAction({
                    $case: "ban",
                    ban: {
                        user: e
                    }
                })
            }
            ,
            e.prototype.kickPlayer = function(e) {
                this.engine.sendAction({
                    $case: "kick",
                    kick: {
                        user: e
                    }
                })
            }
            ,
            e.prototype.interact = function(e, t) {
                this.engine.sendAction({
                    $case: "interact",
                    interact: {
                        objId: e,
                        dataJson: JSON.stringify(t)
                    }
                })
            }
            ,
            e.prototype.chat = function(e, t, o, n) {
                this.engine.sendAction({
                    $case: "chat",
                    chat: {
                        chatRecipient: e,
                        localPlayerIds: t,
                        mapId: o,
                        contents: n
                    }
                })
            }
            ,
            e.prototype.shootConfetti = function(e) {
                var t;
                null === (t = this.engine) || void 0 === t || t.sendAction({
                    $case: "shootConfetti",
                    shootConfetti: {
                        targetId: e
                    }
                })
            }
            ,
            e.prototype.setGoKartId = function(e, t) {
                var o;
                null === (o = this.engine) || void 0 === o || o.sendAction({
                    $case: "setGoKartId",
                    setGoKartId: {
                        goKartId: e,
                        targetId: t
                    }
                })
            }
            ,
            e.prototype.setIsAlone = function(e, t) {
                var o;
                null === (o = this.engine) || void 0 === o || o.sendAction({
                    $case: "setIsAlone",
                    setIsAlone: {
                        isAlone: e,
                        targetId: t
                    }
                })
            }
            ,
            e.prototype.setMapDimensions = function(e, t, o) {
                var n;
                null === (n = this.engine) || void 0 === n || n.sendAction({
                    $case: "mapSetDimensions",
                    mapSetDimensions: {
                        mapId: e,
                        width: t,
                        height: o
                    }
                })
            }
            ,
            e.prototype.setMapCollisions = function(e, t, o, n, a, r) {
                var i;
                // null === (i = this.engine) || void 0 === i || i.sendAction({
                //     $case: "mapSetCollisions",
                //     mapSetCollisions: {
                //         mapId: e,
                //         x: t,
                //         y: o,
                //         w: n,
                //         h: a,
                //         mask: r
                //     }
                // })
            }
            ,
            e.prototype.setMapBackgroundImagePath = function(e, t) {
                var o;
                null === (o = this.engine) || void 0 === o || o.sendAction({
                    $case: "mapSetBackgroundImagePath",
                    mapSetBackgroundImagePath: {
                        mapId: e,
                        backgroundImagePath: t
                    }
                })
            }
            ,
            e.prototype.setMapForegroundImagePath = function(e, t) {
                var o;
                null === (o = this.engine) || void 0 === o || o.sendAction({
                    $case: "mapSetForegroundImagePath",
                    mapSetForegroundImagePath: {
                        mapId: e,
                        foregroundImagePath: t
                    }
                })
            }
            ,
            e.prototype.setMapSprites = function(e, t) {
                var o;
                null === (o = this.engine) || void 0 === o || o.sendAction({
                    $case: "mapSetSprites",
                    mapSetSprites: {
                        mapId: e,
                        sprites: t
                    }
                })
            }
            ,
            e.prototype.setMapSpawns = function(e, t) {
                var o;
                null === (o = this.engine) || void 0 === o || o.sendAction({
                    $case: "mapSetSpawns",
                    mapSetSpawns: {
                        mapId: e,
                        spawns: t
                    }
                })
            }
            ,
            e.prototype.setMapSpaces = function(e, t) {
                var o;
                null === (o = this.engine) || void 0 === o || o.sendAction({
                    $case: "mapSetSpaces",
                    mapSetSpaces: {
                        mapId: e,
                        spaces: t
                    }
                })
            }
            ,
            e.prototype.setMapPortals = function(e, t) {
                var o;
                null === (o = this.engine) || void 0 === o || o.sendAction({
                    $case: "mapSetPortals",
                    mapSetPortals: {
                        mapId: e,
                        portals: t
                    }
                })
            }
            ,
            e.prototype.setMapAnnouncer = function(e, t) {
                var o;
                null === (o = this.engine) || void 0 === o || o.sendAction({
                    $case: "mapSetAnnouncer",
                    mapSetAnnouncer: {
                        mapId: e,
                        announcer: t
                    }
                })
            }
            ,
            e.prototype.setMapObjects = function(e, t, o) {
                var n, a = {};
                Object.keys(t).reduce((function(e, o) {
                    var n = parseInt(o);
                    return e[n] = l.convertMapObjectToWireObject(t[n]),
                    e
                }
                ), a),
                null === (n = this.engine) || void 0 === n || n.sendAction({
                    $case: "mapSetObjects",
                    mapSetObjects: {
                        mapId: e,
                        objects: a,
                        updatesAreOverwrites: o
                    }
                })
            }
            ,
            e.prototype.setMapName = function(e, t) {
                var o;
                null === (o = this.engine) || void 0 === o || o.sendAction({
                    $case: "mapSetName",
                    mapSetName: {
                        mapId: e,
                        name: t
                    }
                })
            }
            ,
            e.prototype.setMapDefaultChat = function(e, t) {
                var o;
                null === (o = this.engine) || void 0 === o || o.sendAction({
                    $case: "mapSetDefaultChat",
                    mapSetDefaultChat: {
                        mapId: e,
                        defaultChat: t
                    }
                })
            }
            ,
            e.prototype.setMapMuteOnEntry = function(e, t) {
                var o;
                null === (o = this.engine) || void 0 === o || o.sendAction({
                    $case: "mapSetMuteOnEntry",
                    mapSetMuteOnEntry: {
                        mapId: e,
                        muteOnEntry: t
                    }
                })
            }
            ,
            e.prototype.setMapUseDrawnBG = function(e, t) {
                var o;
                null === (o = this.engine) || void 0 === o || o.sendAction({
                    $case: "mapSetUseDrawnBG",
                    mapSetUseDrawnBG: {
                        mapId: e,
                        useDrawnBG: t
                    }
                })
            }
            ,
            e.prototype.setMapWalls = function(e, t) {
                var o, n = this.partialMaps[e];
                if (n.dimensions) {
                    var a = l.wallFloorConvertToDB(t, n.dimensions);
                    null === (o = this.engine) || void 0 === o || o.sendAction({
                        $case: "mapSetWalls",
                        mapSetWalls: {
                            mapId: e,
                            walls: a
                        }
                    })
                }
            }
            ,
            e.prototype.setMapFloors = function(e, t) {
                var o, n = this.partialMaps[e];
                if (n.dimensions) {
                    var a = l.wallFloorConvertToDB(t, n.dimensions);
                    null === (o = this.engine) || void 0 === o || o.sendAction({
                        $case: "mapSetFloors",
                        mapSetFloors: {
                            mapId: e,
                            floors: a
                        }
                    })
                }
            }
            ,
            e.prototype.setMapAreas = function(e, t) {
                var o;
                null === (o = this.engine) || void 0 === o || o.sendAction({
                    $case: "mapSetAreas",
                    mapSetAreas: {
                        mapId: e,
                        areas: t
                    }
                })
            }
            ,
            e.prototype.setMapMiniMapImagePath = function(e, t) {
                var o;
                null === (o = this.engine) || void 0 === o || o.sendAction({
                    $case: "mapSetMiniMapImagePath",
                    mapSetMiniMapImagePath: {
                        mapId: e,
                        miniMapImagePath: t
                    }
                })
            }
            ,
            e.prototype.setMapEnabledChats = function(e, t) {
                var o;
                null === (o = this.engine) || void 0 === o || o.sendAction({
                    $case: "mapSetEnabledChats",
                    mapSetEnabledChats: {
                        mapId: e,
                        enabledChats: t
                    }
                })
            }
            ,
            e.prototype.setMapDescription = function(e, t) {
                var o;
                null === (o = this.engine) || void 0 === o || o.sendAction({
                    $case: "mapSetDescription",
                    mapSetDescription: {
                        mapId: e,
                        description: t
                    }
                })
            }
            ,
            e.prototype.setMapDecoration = function(e, t) {
                var o;
                null === (o = this.engine) || void 0 === o || o.sendAction({
                    $case: "mapSetDecoration",
                    mapSetDecoration: {
                        mapId: e,
                        decoration: t
                    }
                })
            }
            ,
            e.prototype.setMapTutorialTasks = function(e, t) {
                var o, n = l.convertTutorialTasksToWireTutorialTasks(t);
                null === (o = this.engine) || void 0 === o || o.sendAction({
                    $case: "mapSetTutorialTasks",
                    mapSetTutorialTasks: {
                        mapId: e,
                        tutorialTasks: n
                    }
                })
            }
            ,
            e.prototype.setImpassable = function(e, t, o, n) {
                void 0 === n && (n = !0),
                this.engine.sendAction({
                    $case: "setImpassable",
                    setImpassable: {
                        mapId: e,
                        x: t,
                        y: o,
                        impassable: n
                    }
                })
            }
            ,
            e.prototype.getObject = function(e) {
                for (var t, o, n = 0, a = Object.keys(this.completeMaps); n < a.length; n++) {
                    var r = a[n]
                      , i = null === (o = null === (t = this.completeMaps) || void 0 === t ? void 0 : t[r]) || void 0 === o ? void 0 : o.objects;
                    if (i)
                        for (var s in Object.keys(i))
                            if (i[s].id === e)
                                return {
                                    mapId: r,
                                    obj: i[s]
                                }
                }
            }
            ,
            e.prototype.setObject = function(e, t, o) {
                var n, a, r, i, s, c = null === (a = this.completeMaps) || void 0 === a ? void 0 : a[e];
                if (c) {
                    var u = -1;
                    for (var d in Object.keys(null !== (r = c.objects) && void 0 !== r ? r : []))
                        if ((null === (s = null === (i = c.objects) || void 0 === i ? void 0 : i[d]) || void 0 === s ? void 0 : s.id) === t) {
                            u = parseInt(d);
                            break
                        }
                    u >= 0 ? this.engine.sendAction({
                        $case: "mapSetObjects",
                        mapSetObjects: {
                            mapId: e,
                            objects: (n = {},
                            n[u] = l.convertMapObjectToWireObject(o),
                            n)
                        }
                    }) : this.engine.sendAction({
                        $case: "mapAddObject",
                        mapAddObject: {
                            mapId: e,
                            object: l.convertMapObjectToWireObject(o)
                        }
                    })
                }
            }
            ,
            e.prototype.deleteObject = function(e, t) {
                var o, n, a = null === (o = this.completeMaps) || void 0 === o ? void 0 : o[e];
                if (a) {
                    var r = Object.keys(null !== (n = a.objects) && void 0 !== n ? n : {}).find((function(e) {
                        var o, n;
                        return (null === (n = null === (o = a.objects) || void 0 === o ? void 0 : o[parseInt(e)]) || void 0 === n ? void 0 : n.id) === t
                    }
                    ));
                    if (r) {
                        var i = parseInt(r);
                        this.engine.sendAction({
                            $case: "mapDeleteObject",
                            mapDeleteObject: {
                                mapId: e,
                                key: i
                            }
                        })
                    }
                }
            }
            ,
            e.prototype.flushObjectsToFirebase = function(e, t) {
                return i(this, void 0, void 0, (function() {
                    return s(this, (function(e) {
                        return console.warn("DeprecationWarning: This function has been deprecated and is now a no-op. It doesn't do anything. Happy hacking <3"),
                        [2]
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.getStats = function() {
                var e, t = {
                    serverURL: this.engine.serverURL,
                    engine: this.engine.getMetrics(),
                    wsReadyState: null === (e = this.engine.ws) || void 0 === e ? void 0 : e.readyState,
                    timeToFirstOnMapMs: this._timeToFirstOnMapMs,
                    onMapCountsAllTime: this._onMapCounts,
                    datadogRumSessionId: this.datadogRumSessionId,
                    gameClientAgeMs: Date.now() - this._initializedAtMs,
                    numPlayers: Object.keys(this.players).length,
                    preferredRegion: this.preferredRegion,
                    preferredRegionPing: this.preferredRegionPing
                };
                return this.putMetric("get-stats", t),
                t
            }
            ,
            e.prototype.subscribeToAll = function() {
                this.engine.sendAction({
                    $case: "updateSubscriptions",
                    updateSubscriptions: {
                        subscriptions: {
                            playerJoins: !0,
                            playerSetsSprite: !0,
                            playerSetsAffiliation: !0,
                            playerSetsStatus: !0,
                            playerSpotlights: !0,
                            playerRings: !0,
                            playerInteracts: !0,
                            playerSetsImagePointer: !0,
                            playerChats: !0,
                            playerSetsOutfitString: !0,
                            playerMoves: !0,
                            playerSetsName: !0,
                            playerGhosts: !0,
                            playerSetsEmote: !0,
                            playerSetsWorkCondition: !0,
                            playerActivelySpeaks: !0,
                            playerSetsTextStatus: !0,
                            playerSetsEmojiStatus: !0,
                            playerEntersWhisperV2: !0,
                            playerLeavesWhisper: !0,
                            playerSetsIsSignedIn: !0,
                            mapSetDimensions: !0,
                            mapSetCollisions: !0,
                            mapSetBackgroundImagePath: !0,
                            mapSetForegroundImagePath: !0,
                            mapSetSprites: !0,
                            mapSetSpaces: !0,
                            mapSetSpawns: !0,
                            mapSetPortals: !0,
                            mapSetAnnouncer: !0,
                            mapSetAudio: !0,
                            mapSetAnimations: !0,
                            mapSetAssets: !0,
                            mapSetObjects: !0,
                            mapSetName: !0,
                            mapSetDefaultChat: !0,
                            mapSetMuteOnEntry: !0,
                            mapSetUseDrawnBG: !0,
                            mapSetWalls: !0,
                            mapSetFloors: !0,
                            mapSetAreas: !0,
                            mapDeleteObject: !0,
                            mapSetSpawn: !0,
                            mapSetMiniMapImagePath: !0,
                            mapSetEnabledChats: !0,
                            mapSetDescription: !0,
                            mapSetDecoration: !0,
                            mapSetTutorialTasks: !0,
                            mapSetScript: !0,
                            spaceOverwrites: !0,
                            spaceIsClosed: !0,
                            spaceSetsIdMapping: !0,
                            playerEntersPortal: !0,
                            playerExits: !0,
                            info: !0,
                            warn: !0,
                            error: !0,
                            serverHeartbeat: !0,
                            disableVideo: !0,
                            transactionStatus: !0,
                            playerSetsLastActive: !0,
                            playerShootsConfetti: !0,
                            playerSetsEventStatus: !0,
                            playerSetsInConversation: !0,
                            playerSetsCurrentDesk: !0,
                            playerSetsCurrentArea: !0,
                            cookieFound: !0,
                            playerSetsGoKartId: !0,
                            playerSetsIsAlone: !0,
                            spacePlaysSound: !0
                        }
                    }
                })
            }
            ,
            e.prototype._startMapDataCheckInterval = function() {
                var e = this;
                this._timeToFirstOnMapMs = -1,
                this.mapDataChecks = 0,
                this.mapDataCheckInterval && clearInterval(this.mapDataCheckInterval),
                this.mapDataCheckInterval = setInterval((function() {
                    e.mapDataChecks += 1,
                    e.putMetric("still-no-map-data-ms", {
                        gameClientAgeMs: Date.now() - e._initializedAtMs,
                        mapDataChecksCount: e.mapDataChecks,
                        timeToFirstMapDataMs: e._timeToFirstOnMapMs
                    })
                }
                ), 2500)
            }
            ,
            e
        }();
        t.Game = m
    },
    566: function(e, t, o) {
        var n = this && this.__assign || function() {
            return n = Object.assign || function(e) {
                for (var t, o = 1, n = arguments.length; o < n; o++)
                    for (var a in t = arguments[o])
                        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e
            }
            ,
            n.apply(this, arguments)
        }
          , a = this && this.__rest || function(e, t) {
            var o = {};
            for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (o[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var a = 0;
                for (n = Object.getOwnPropertySymbols(e); a < n.length; a++)
                    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (o[n[a]] = e[n[a]])
            }
            return o
        }
        ;
        t.__esModule = !0,
        t.MapsAccumulator = void 0;
        var r = o(705)
          , i = o(26)
          , s = function() {
            function e() {
                this.partialMaps = {},
                this.completeMaps = {}
            }
            return e.prototype.clear = function() {
                for (var e in this.partialMaps)
                    delete this.partialMaps[e],
                    delete this.completeMaps[e]
            }
            ,
            e.prototype.addChunk = function(e) {
                var t;
                switch (e.$case) {
                case "mapSetBackgroundImagePath":
                case "mapSetForegroundImagePath":
                case "mapSetSprites":
                case "mapSetSpaces":
                case "mapSetSpawns":
                case "mapSetPortals":
                case "mapSetAnnouncer":
                case "mapSetAudio":
                case "mapSetAnimations":
                case "mapSetAssets":
                case "mapSetSpawn":
                case "mapSetName":
                case "mapSetDefaultChat":
                case "mapSetMuteOnEntry":
                case "mapSetUseDrawnBG":
                case "mapSetMiniMapImagePath":
                case "mapSetEnabledChats":
                case "mapSetDescription":
                case "mapSetDecoration":
                case "mapSetScript":
                    this.simpleCopyFromEventPayloadToMap(e);
                    break;
                case "mapSetDimensions":
                    var o = e.mapSetDimensions
                      , a = o.mapId
                      , s = o.width
                      , c = o.height;
                    this.getMap(a).dimensions = [s, c];
                    break;
                case "mapSetCollisions":
                    console.log("Hey");
                    // var l = e.mapSetCollisions
                    //   , u = l.mapId
                    //   , d = l.x
                    //   , p = l.y
                    //   , h = l.w
                    //   , f = l.h
                    //   , m = l.mask
                    //   , v = r.Buffer.from(m, "base64");
                    // (_ = this.getMap(u)).collisions || (_.collisions = Array(f).fill(void 0).map((function() {
                    //     return Array(h).fill(void 0)
                    // }
                    // )));
                    // for (var g = 0; g < f; g++)
                    //     for (var S = 0; S < h; S++)
                    //         _.collisions[g + p][S + d] = !!v[g * h + S];
                    break;
                case "mapSetObjects":
                    var y = e.mapSetObjects
                      , b = y.mapId
                      , T = y.objects
                      , I = y.updatesAreOverwrites
                      , _ = this.getMap(b);
                    for (var E in _.objects || (_.objects = {}),
                    T) {
                        var C = parseInt(E);
                        try {
                            var w = I ? T[C] : n(n({}, _.objects[C]), T[C]);
                            _.objects[C] = i.convertWireObjectToMapObject(w)
                        } catch (e) {
                            console.error("this badly formated wire object caused error " + e + " :", T[C])
                        }
                    }
                    break;
                case "mapSetWalls":
                    var M = e.mapSetWalls
                      , O = M.mapId
                      , A = M.walls;
                    if (M.delete) {
                        delete this.partialMaps[O].walls;
                        break
                    }
                    if (void 0 === (_ = this.getMap(O)).dimensions)
                        throw new Error("Cannot set map walls when map dimensions are undefined");
                    _.walls = i.wallFloorConvertFromDB(A, _.dimensions, !0);
                    break;
                case "mapSetFloors":
                    var k = e.mapSetFloors
                      , P = k.mapId
                      , D = k.floors;
                    if (k.delete) {
                        delete this.partialMaps[P].floors;
                        break
                    }
                    if (void 0 === (_ = this.getMap(P)).dimensions)
                        throw new Error("Cannot set map floors when map dimensions are undefined");
                    _.floors = i.wallFloorConvertFromDB(D, _.dimensions, !1);
                    break;
                case "mapSetAreas":
                    var R = e.mapSetAreas
                      , N = R.mapId
                      , x = R.areas;
                    if (R.delete) {
                        delete this.partialMaps[N].areas;
                        break
                    }
                    (_ = this.getMap(N)).areas = i.convertWireAreasToAreas(x, _.dimensions);
                    break;
                case "mapDeleteObject":
                    var L = e.mapDeleteObject
                      , j = L.mapId;
                    C = L.key,
                    null === (t = (_ = this.getMap(j)).objects) || void 0 === t || delete t[C];
                    break;
                case "mapSetTutorialTasks":
                    var F = e.mapSetTutorialTasks
                      , U = F.mapId
                      , B = F.tutorialTasks;
                    if (F.delete) {
                        delete this.partialMaps[U].tutorialTasks;
                        break
                    }
                    if (void 0 === B)
                        throw new Error("Cannot set tutorialTasks because it is undefined");
                    this.getMap(U).tutorialTasks = i.convertWireTutorialTasksToTutorialTasks(B);
                    break;
                default:
                    throw new Error("Unexpected map event: " + e.$case)
                }
                var G = this.getMapIdFromEvent(e);
                return this.updateCompleteMaps(G),
                this.completeMaps[G]
            }
            ,
            e.prototype.getMap = function(e) {
                return this.partialMaps[e] || (this.partialMaps[e] = this.initializeMap(e)),
                this.partialMaps[e]
            }
            ,
            e.prototype.simpleCopyFromEventPayloadToMap = function(e) {
                var t = e[e.$case]
                  , o = t.mapId
                  , n = t.delete
                  , r = a(t, ["mapId", "delete"])
                  , i = this.getMap(o);
                Object.keys(r).forEach((function(e) {
                    n ? delete i[e] : i[e] = r[e]
                }
                ))
            }
            ,
            e.prototype.updateCompleteMaps = function(e) {
                if (!this.completeMaps[e]) {
                    var t = this.partialMaps[e];
                    i.verifyMapIsComplete(t) && (this.completeMaps[e] = t)
                }
            }
            ,
            e.prototype.initializeMap = function(e) {
                return {
                    id: e
                }
            }
            ,
            e.prototype.getMapIdFromEvent = function(e) {
                var t = e[e.$case].mapId;
                if (null == t)
                    throw new Error("no mapId on map event " + e.$case);
                return t
            }
            ,
            e
        }();
        t.MapsAccumulator = s
    },
    889: (e,t)=>{
        t.__esModule = !0,
        t.TransactionManager = void 0;
        var o = function() {
            function e() {
                this.pendingTxns = {},
                this.txnTimeouts = {}
            }
            return e.prototype.addTransaction = function() {
                var e = this
                  , t = this.getRandomTxnId()
                  , o = new Promise((function(o, n) {
                    void 0 !== t && (e.pendingTxns[t] = {
                        res: o,
                        rej: n
                    },
                    e.txnTimeouts[t] = setTimeout((function() {
                        e.pendingTxns[t].rej("Transaction timed out")
                    }
                    ), 15e3))
                }
                ));
                return {
                    txnId: t,
                    txnPromise: o
                }
            }
            ,
            e.prototype.handleTransactionStatusEvent = function(e) {
                var t = e.txnId
                  , o = e.succeeded
                  , n = e.reason;
                void 0 !== this.pendingTxns[t] ? (o ? this.pendingTxns[t].res(!0) : this.pendingTxns[t].rej("Transaction failed due to error. " + (null != n ? n : "")),
                clearTimeout(this.txnTimeouts[t]),
                delete this.pendingTxns[t],
                delete this.txnTimeouts[t]) : console.error("Received a txnId for a non-pending transaction.")
            }
            ,
            e.prototype.destroy = function() {
                Object.values(this.txnTimeouts).forEach((function(e) {
                    return clearTimeout(e)
                }
                )),
                Object.values(this.pendingTxns).forEach((function(e) {
                    return (0,
                    e.rej)("Transaction failed due to engine being destroyed")
                }
                )),
                this.pendingTxns = {},
                this.txnTimeouts = {}
            }
            ,
            e.prototype.getRandomTxnId = function() {
                return Math.floor(4294967295 * Math.random())
            }
            ,
            e
        }();
        t.TransactionManager = o
    }
    ,
    1693: function(e, t, o) {
        var n = this && this.__awaiter || function(e, t, o, n) {
            return new (o || (o = Promise))((function(a, r) {
                function i(e) {
                    try {
                        c(n.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function s(e) {
                    try {
                        c(n.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? a(e.value) : (t = e.value,
                    t instanceof o ? t : new o((function(e) {
                        e(t)
                    }
                    ))).then(i, s)
                }
                c((n = n.apply(e, t || [])).next())
            }
            ))
        }
          , a = this && this.__generator || function(e, t) {
            var o, n, a, r, i = {
                label: 0,
                sent: function() {
                    if (1 & a[0])
                        throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return r = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }
            ),
            r;
            function s(r) {
                return function(s) {
                    return function(r) {
                        if (o)
                            throw new TypeError("Generator is already executing.");
                        for (; i; )
                            try {
                                if (o = 1,
                                n && (a = 2 & r[0] ? n.return : r[0] ? n.throw || ((a = n.return) && a.call(n),
                                0) : n.next) && !(a = a.call(n, r[1])).done)
                                    return a;
                                switch (n = 0,
                                a && (r = [2 & r[0], a.value]),
                                r[0]) {
                                case 0:
                                case 1:
                                    a = r;
                                    break;
                                case 4:
                                    return i.label++,
                                    {
                                        value: r[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++,
                                    n = r[1],
                                    r = [0];
                                    continue;
                                case 7:
                                    r = i.ops.pop(),
                                    i.trys.pop();
                                    continue;
                                default:
                                    if (!((a = (a = i.trys).length > 0 && a[a.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
                                        i.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && i.label < a[1]) {
                                        i.label = a[1],
                                        a = r;
                                        break
                                    }
                                    if (a && i.label < a[2]) {
                                        i.label = a[2],
                                        i.ops.push(r);
                                        break
                                    }
                                    a[2] && i.ops.pop(),
                                    i.trys.pop();
                                    continue
                                }
                                r = t.call(e, i)
                            } catch (e) {
                                r = [6, e],
                                n = 0
                            } finally {
                                o = a = 0
                            }
                        if (5 & r[0])
                            throw r[1];
                        return {
                            value: r[0] ? r[1] : void 0,
                            done: !0
                        }
                    }([r, s])
                }
            }
        }
          , r = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        t.__esModule = !0,
        t.getGameServers = t.findClosestRegion = t.SlidingWindow = t.isBrowser = void 0;
        var i = r(o(749))
          , s = o(297);
        t.isBrowser = "undefined" != typeof window;
        var c = function() {
            function e(e) {
                this.values = [],
                this.maxSize = e
            }
            return e.prototype.push = function(e) {
                this._lastValue = e,
                this.values.push(e),
                this.values.length > this.maxSize && this.values.shift(),
                (void 0 === this._minValue || e < this._minValue) && (this._minValue = e),
                (void 0 === this._maxValue || e > this._maxValue) && (this._maxValue = e)
            }
            ,
            e.prototype.getLast = function() {
                return this._lastValue
            }
            ,
            e.prototype.getAverage = function() {
                if (this.values.length) {
                    var e = this.values.reduce((function(e, t) {
                        return t + e
                    }
                    ), 0) / this.values.length;
                    return parseFloat(e.toFixed(2))
                }
            }
            ,
            e.prototype.getMin = function() {
                if (this._minValue)
                    return parseFloat(this._minValue.toFixed(2))
            }
            ,
            e.prototype.getMax = function() {
                var e;
                if (this._maxValue)
                    return parseFloat(null === (e = this._maxValue) || void 0 === e ? void 0 : e.toFixed(2))
            }
            ,
            e.prototype.getMetrics = function() {
                return {
                    max: this.getMax() || -1,
                    avg: this.getAverage() || -1,
                    min: this.getMin() || -1,
                    last: this.getLast() || -1
                }
            }
            ,
            e
        }();
        t.SlidingWindow = c,
        t.findClosestRegion = function() {
            return n(void 0, void 0, void 0, (function() {
                var e, o, n, r, c, l, u, d, p, h, f, m;
                return a(this, (function(a) {
                    switch (a.label) {
                    case 0:
                        return [4, t.getGameServers()];
                    case 1:
                        if (!((e = a.sent())instanceof Array))
                            return console.error("failed to get game servers"),
                            [2];
                        for (l in o = s.shuffle(e).reduce((function(e, t) {
                            return !t.region || t.region in e || (e[t.region] = t.hostname),
                            e
                        }
                        ), {}),
                        n = 1 / 0,
                        r = void 0,
                        c = [],
                        o)
                            c.push(l);
                        u = 0,
                        a.label = 2;
                    case 2:
                        return u < c.length ? (d = c[u],
                        p = o[d],
                        h = "localhost" === p ? "/ping" : "https://" + p + "/ping",
                        f = Date.now(),
                        [4, i.default.get(h).catch((function(e) {
                            return console.error(e)
                        }
                        ))]) : [3, 5];
                    case 3:
                        a.sent(),
                        (m = Date.now() - f) < n && (n = m,
                        r = d),
                        a.label = 4;
                    case 4:
                        return u++,
                        [3, 2];
                    case 5:
                        return r ? (console.log("preferred region " + r + " ping: " + n + "ms"),
                        [2, {
                            closestRegion: r,
                            ping: n
                        }]) : (console.error("Failed ping test for closest region", Object.keys(o)),
                        [2])
                    }
                }
                ))
            }
            ))
        }
        ,
        t.getGameServers = function() {
            return n(void 0, void 0, void 0, (function() {
                var e, o, n;
                return a(this, (function(a) {
                    switch (a.label) {
                    case 0:
                        e = t.isBrowser ? "/api/v2/game-servers" : "https://gather.town/api/v2/game-servers",
                        a.label = 1;
                    case 1:
                        return a.trys.push([1, 3, , 4]),
                        [4, i.default.get(e)];
                    case 2:
                        return [2, null == (o = a.sent()) ? void 0 : o.data];
                    case 3:
                        return n = a.sent(),
                        console.error(n),
                        [3, 4];
                    case 4:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
    },
    189: function(e, t, o) {
        var n = this && this.__createBinding || (Object.create ? function(e, t, o, n) {
            void 0 === n && (n = o),
            Object.defineProperty(e, n, {
                enumerable: !0,
                get: function() {
                    return t[o]
                }
            })
        }
        : function(e, t, o, n) {
            void 0 === n && (n = o),
            e[n] = t[o]
        }
        )
          , a = this && this.__exportStar || function(e, t) {
            for (var o in e)
                "default" === o || Object.prototype.hasOwnProperty.call(t, o) || n(t, e, o)
        }
        ;
        t.__esModule = !0,
        a(o(1684), t),
        a(o(1743), t),
        a(o(1693), t)
    },
    1987: (e,t)=>{
        t.__esModule = !0,
        t.AudioPlugin = void 0;
        var o = window.AudioContext || window.webkitAudioContext || null
          , n = function() {
            function e() {
                var e;
                this.audioVolumeMeterInterval = void 0,
                this.audioContext = o ? new o : void 0,
                this.analyser = null === (e = this.audioContext) || void 0 === e ? void 0 : e.createAnalyser(),
                this.activeSpeakingDetectionCount = 0,
                this.isActivelySpeaking = !1,
                this.activeSpeakingDetectionThrottleCount = 0,
                this.analyser && (this.analyser.fftSize = 256,
                this.analyser.minDecibels = -70,
                this.analyser.maxDecibels = -10,
                this.analyser.smoothingTimeConstant = .5)
            }
            return e.prototype.registerAudioVolumeMonitor = function(e, t, o) {
                var n = this
                  , a = this.analyser;
                if (this.audioContext && a) {
                    if (this.currentMediaStreamSource)
                        throw new Error("registerAudioVolumeMonitor() invoked again without first calling unregisterAudioVolumeMonitor()!");
                    this.audioContext.resume(),
                    this.currentMediaStreamSource = this.audioContext.createMediaStreamSource(e),
                    this.currentMediaStreamSource.connect(a);
                    var r = this.audioContext.sampleRate / a.fftSize
                      , i = this.getFrequencyMinMaxBandIndexes(300, 3e3, r)
                      , s = a.frequencyBinCount
                      , c = new Uint8Array(s);
                    this.audioVolumeMeterInterval && clearInterval(this.audioVolumeMeterInterval),
                    this.audioVolumeMeterInterval = setInterval((function() {
                        a.getByteFrequencyData(c),
                        o(Math.max.apply(Math, Array.from(c.values()))),
                        n.frequencyBandsPastThreshold(c, 120, i.min, i.max) ? (n.activeSpeakingDetectionCount < 9 && n.activeSpeakingDetectionCount++,
                        !n.isActivelySpeaking && n.activeSpeakingDetectionCount >= 3 && (n.isActivelySpeaking = !0,
                        t(n.isActivelySpeaking),
                        3 === n.activeSpeakingDetectionCount && (n.activeSpeakingDetectionCount += 1))) : (n.activeSpeakingDetectionCount > 3 ? n.activeSpeakingDetectionCount-- : n.activeSpeakingDetectionCount = 0,
                        n.isActivelySpeaking && (n.isActivelySpeaking = !1,
                        t(n.isActivelySpeaking)))
                    }
                    ), 50)
                }
            }
            ,
            e.prototype.unregisterAudioVolumeMonitor = function(e, t) {
                this.audioVolumeMeterInterval && (clearInterval(this.audioVolumeMeterInterval),
                this.audioVolumeMeterInterval = void 0,
                e(!1),
                t(0)),
                this.currentMediaStreamSource && (this.currentMediaStreamSource.disconnect(),
                this.currentMediaStreamSource = void 0),
                this.audioContext && this.audioContext.suspend()
            }
            ,
            e.prototype.getFrequencyMinMaxBandIndexes = function(e, t, o) {
                return {
                    min: Math.floor(e / o),
                    max: Math.ceil(t / o)
                }
            }
            ,
            e.prototype.frequencyBandsPastThreshold = function(e, t, o, n) {
                for (var a = o; a <= n; a++) {
                    var r = e[a];
                    if (r && r > t)
                        return !0
                }
                return !1
            }
            ,
            e
        }();
        t.AudioPlugin = n
    }
    ,
    558: function(e, t, o) {
        var n = this && this.__awaiter || function(e, t, o, n) {
            return new (o || (o = Promise))((function(a, r) {
                function i(e) {
                    try {
                        c(n.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function s(e) {
                    try {
                        c(n.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? a(e.value) : (t = e.value,
                    t instanceof o ? t : new o((function(e) {
                        e(t)
                    }
                    ))).then(i, s)
                }
                c((n = n.apply(e, t || [])).next())
            }
            ))
        }
          , a = this && this.__generator || function(e, t) {
            var o, n, a, r, i = {
                label: 0,
                sent: function() {
                    if (1 & a[0])
                        throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return r = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }
            ),
            r;
            function s(r) {
                return function(s) {
                    return function(r) {
                        if (o)
                            throw new TypeError("Generator is already executing.");
                        for (; i; )
                            try {
                                if (o = 1,
                                n && (a = 2 & r[0] ? n.return : r[0] ? n.throw || ((a = n.return) && a.call(n),
                                0) : n.next) && !(a = a.call(n, r[1])).done)
                                    return a;
                                switch (n = 0,
                                a && (r = [2 & r[0], a.value]),
                                r[0]) {
                                case 0:
                                case 1:
                                    a = r;
                                    break;
                                case 4:
                                    return i.label++,
                                    {
                                        value: r[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++,
                                    n = r[1],
                                    r = [0];
                                    continue;
                                case 7:
                                    r = i.ops.pop(),
                                    i.trys.pop();
                                    continue;
                                default:
                                    if (!((a = (a = i.trys).length > 0 && a[a.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
                                        i.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && i.label < a[1]) {
                                        i.label = a[1],
                                        a = r;
                                        break
                                    }
                                    if (a && i.label < a[2]) {
                                        i.label = a[2],
                                        i.ops.push(r);
                                        break
                                    }
                                    a[2] && i.ops.pop(),
                                    i.trys.pop();
                                    continue
                                }
                                r = t.call(e, i)
                            } catch (e) {
                                r = [6, e],
                                n = 0
                            } finally {
                                o = a = 0
                            }
                        if (5 & r[0])
                            throw r[1];
                        return {
                            value: r[0] ? r[1] : void 0,
                            done: !0
                        }
                    }([r, s])
                }
            }
        }
        ;
        t.__esModule = !0,
        t.initCallstats = t.callstatsio = void 0;
        var r = o(18)
          , i = o(561);
        t.initCallstats = function(e, o) {
            return n(this, void 0, void 0, (function() {
                var n, s, c, l, u, d, p, h;
                return a(this, (function(a) {
                    switch (a.label) {
                    case 0:
                        if (!r.gate(r.GatedFeatName.Callstats, e, o))
                            return [2];
                        if (n = i.config.callstatsAppId,
                        s = i.config.callstatsAppSecret,
                        !n || !s)
                            return console.warn("Callstats is gated on but app credentials aren't set"),
                            [2];
                        console.log("Initializing callstats"),
                        t.callstatsio = new Promise((function(e, t) {
                            c = e,
                            l = t
                        }
                        )),
                        a.label = 1;
                    case 1:
                        return a.trys.push([1, 3, , 4]),
                        [4, r.loadScriptDynamically("https://api.callstats.io/static/callstats.min.js")];
                    case 2:
                        return a.sent(),
                        [3, 4];
                    case 3:
                        return u = a.sent(),
                        console.warn("Failed to load callstats script", u),
                        null == l || l(u),
                        [2];
                    case 4:
                        return d = new callstats,
                        p = {
                            additionalIDs: {
                                customerID: o,
                                meetingsName: "test meeting name",
                                sessionID: "test session ID"
                            }
                        },
                        h = function(e, t) {
                            "success" === e ? null == c || c(d) : null == l || l(t)
                        }
                        ,
                        d.initialize(n, s, e, h, void 0, p),
                        [2, t.callstatsio]
                    }
                }
                ))
            }
            ))
        }
    },
    588: (e,t)=>{
        t.__esModule = !0,
        t.debugLogMajorEvent = t.debugMajorEvents = void 0,
        t.debugMajorEvents = [],
        t.debugLogMajorEvent = function(e) {
            t.debugMajorEvents.push({
                t: (performance.now() / 1e3).toFixed(2),
                event: e
            })
        }
    }
    ,
    1586: function(e, t, o) {
        var n, a, r, i = this && this.__extends || (n = function(e, t) {
            return n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            ,
            n(e, t)
        }
        ,
        function(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), s = this && this.__assign || function() {
            return s = Object.assign || function(e) {
                for (var t, o = 1, n = arguments.length; o < n; o++)
                    for (var a in t = arguments[o])
                        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e
            }
            ,
            s.apply(this, arguments)
        }
        , c = this && this.__awaiter || function(e, t, o, n) {
            return new (o || (o = Promise))((function(a, r) {
                function i(e) {
                    try {
                        c(n.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function s(e) {
                    try {
                        c(n.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? a(e.value) : (t = e.value,
                    t instanceof o ? t : new o((function(e) {
                        e(t)
                    }
                    ))).then(i, s)
                }
                c((n = n.apply(e, t || [])).next())
            }
            ))
        }
        , l = this && this.__generator || function(e, t) {
            var o, n, a, r, i = {
                label: 0,
                sent: function() {
                    if (1 & a[0])
                        throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return r = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }
            ),
            r;
            function s(r) {
                return function(s) {
                    return function(r) {
                        if (o)
                            throw new TypeError("Generator is already executing.");
                        for (; i; )
                            try {
                                if (o = 1,
                                n && (a = 2 & r[0] ? n.return : r[0] ? n.throw || ((a = n.return) && a.call(n),
                                0) : n.next) && !(a = a.call(n, r[1])).done)
                                    return a;
                                switch (n = 0,
                                a && (r = [2 & r[0], a.value]),
                                r[0]) {
                                case 0:
                                case 1:
                                    a = r;
                                    break;
                                case 4:
                                    return i.label++,
                                    {
                                        value: r[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++,
                                    n = r[1],
                                    r = [0];
                                    continue;
                                case 7:
                                    r = i.ops.pop(),
                                    i.trys.pop();
                                    continue;
                                default:
                                    if (!((a = (a = i.trys).length > 0 && a[a.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
                                        i.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && i.label < a[1]) {
                                        i.label = a[1],
                                        a = r;
                                        break
                                    }
                                    if (a && i.label < a[2]) {
                                        i.label = a[2],
                                        i.ops.push(r);
                                        break
                                    }
                                    a[2] && i.ops.pop(),
                                    i.trys.pop();
                                    continue
                                }
                                r = t.call(e, i)
                            } catch (e) {
                                r = [6, e],
                                n = 0
                            } finally {
                                o = a = 0
                            }
                        if (5 & r[0])
                            throw r[1];
                        return {
                            value: r[0] ? r[1] : void 0,
                            done: !0
                        }
                    }([r, s])
                }
            }
        }
        ;
        t.__esModule = !0,
        t.localMediaManager = t.LocalMediaManagerEvent = void 0;
        var u, d = o(82), p = o(19), h = o(1987), f = o(1591), m = o(1690), v = o(1590), g = o(18), S = new h.AudioPlugin, y = null === (r = null === (a = window.navigator) || void 0 === a ? void 0 : a.userAgent) || void 0 === r ? void 0 : r.toLowerCase(), b = "string" == typeof y && /electron/.test(y), T = {
            width: {
                max: 1280
            },
            height: {
                max: 720
            },
            frameRate: 24
        }, I = {}, _ = {
            echoCancellation: !1,
            autoGainControl: !1,
            noiseSuppression: !1
        }, E = {
            echoCancellation: !0,
            autoGainControl: !0,
            noiseSuppression: !0
        }, C = {
            echoCancellation: !1,
            autoGainControl: !1,
            noiseSuppression: !1
        }, w = {
            chromeMediaSource: "desktop"
        }, M = {
            cursor: "always"
        }, O = {
            frameRate: {
                max: 5
            }
        }, A = {
            frameRate: {
                max: 24
            }
        }, k = {
            chromeMediaSource: "desktop"
        };
        function P(e) {
            var t = s({}, T);
            return null != e && "" !== e && (t.deviceId = {
                exact: e
            }),
            t
        }
        function D(e, t) {
            var o = s(s({}, I), t ? _ : E);
            return null != e && "" !== e && (o.deviceId = {
                exact: e
            }),
            o
        }
        !function(e) {
            e.TrackEnded = "trackEnded",
            e.TrackMute = "trackMute",
            e.TrackUnmute = "trackUnmute",
            e.TrackIsolationChange = "trackIsolationChange",
            e.ProduceStart = "produceStart",
            e.ProduceEnd = "produceEnd",
            e.ProduceResume = "produceResume",
            e.ProducePause = "producePause",
            e.QueueExecutingChange = "queueExecutingChange"
        }(u = t.LocalMediaManagerEvent || (t.LocalMediaManagerEvent = {}));
        var R = function(e) {
            function t() {
                var t = e.call(this) || this;
                return t.tracks = {},
                t.screenShareHighQuality = !1,
                t.audioProduceQ = new d.ExecutionQueue,
                t.videoProduceQ = new d.ExecutionQueue,
                t.screenProduceQ = new d.ExecutionQueue,
                t.pauseAudioOnMute = !1,
                t.notifyOfActiveSpeakingChange = function(e) {
                    t.onActiveSpeakingChange(e)
                }
                ,
                t.notifyOfVolumeChange = function(e) {
                    t.onVolumeChange(e)
                }
                ,
                t.selfInfo = {
                    video: new f.Video,
                    screenVideo: new f.Video,
                    enabled: {
                        audio: !1,
                        video: !1,
                        screen: !1,
                        sound: !1
                    },
                    produceScores: {
                        audio: 10,
                        video: 10,
                        screen: 10,
                        sound: 10
                    }
                },
                t.setSelfProduceScore = t.setSelfProduceScore.bind(t),
                t.audioProduceQ.onIsExecutingChange = function(e) {
                    t.publishEvent(u.QueueExecutingChange, "audio", e)
                }
                ,
                t.videoProduceQ.onIsExecutingChange = function(e) {
                    t.publishEvent(u.QueueExecutingChange, "video", e)
                }
                ,
                t.screenProduceQ.onIsExecutingChange = function(e) {
                    t.publishEvent(u.QueueExecutingChange, "screen", e)
                }
                ,
                m.metricsManager.getSelfInfo = function() {
                    return t.selfInfo
                }
                ,
                t
            }
            return i(t, e),
            t.prototype.onSelfInfo = function(e) {}
            ,
            t.prototype.onActiveSpeakingChange = function(e) {}
            ,
            t.prototype.onVolumeChange = function(e) {}
            ,
            t.prototype._populateEventListeners = function(e, t) {
                var o = this;
                e.onended = function() {
                    o.publishEvent(u.TrackEnded, t)
                }
                ,
                e.onisolationchange = function() {
                    o.publishEvent(u.TrackIsolationChange, t, e.isolated)
                }
                ,
                e.onmute = function() {
                    o.publishEvent(u.TrackMute, t)
                }
                ,
                e.onunmute = function() {
                    o.publishEvent(u.TrackUnmute, t)
                }
            }
            ,
            t.prototype._depopulateEventListeners = function(e) {
                e.onended = function() {}
                ,
                e.onisolationchange = function() {}
                ,
                e.onmute = function() {}
                ,
                e.onunmute = function() {}
            }
            ,
            t.prototype.setSelfProduceScore = function(e) {
                var t = e.kind
                  , o = e.score;
                this.selfInfo.produceScores[t] !== o && (this.selfInfo.produceScores[t] = o,
                this.onSelfInfo(this.selfInfo))
            }
            ,
            t.prototype.getTracks = function() {
                return this.tracks
            }
            ,
            t.prototype.forEachTrack = function(e) {
                for (var t in this.tracks)
                    e(t, this.tracks[t])
            }
            ,
            t.prototype.startWithoutMedia = function() {
                return c(this, void 0, void 0, (function() {
                    return l(this, (function(e) {
                        return this.onSelfInfo(this.selfInfo),
                        [2]
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.startVideoAndAudio = function(e, t, o) {
                var n, a;
                return c(this, void 0, void 0, (function() {
                    var r, i, s, c, u, d, p, h, f, m, v;
                    return l(this, (function(l) {
                        switch (l.label) {
                        case 0:
                            if (r = null === (n = this.tracks.video) || void 0 === n ? void 0 : n.getSettings(),
                            i = t && (null == r ? void 0 : r.deviceId) === t,
                            s = null === (a = this.tracks.audio) || void 0 === a ? void 0 : a.getSettings(),
                            c = e && (null == s ? void 0 : s.deviceId) === e,
                            i && c)
                                return [2, [s, r]];
                            if (!c)
                                return [3, 4];
                            this.resumeAudio(),
                            this._stopVideo(),
                            l.label = 1;
                        case 1:
                            return l.trys.push([1, 3, , 4]),
                            u = [s],
                            [4, this._startVideoAsync(t)];
                        case 2:
                            return [2, u.concat([l.sent()])];
                        case 3:
                            return d = l.sent(),
                            [2, [s, d]];
                        case 4:
                            if (!i)
                                return [3, 8];
                            this._closeAudio(),
                            l.label = 5;
                        case 5:
                            return l.trys.push([5, 7, , 8]),
                            [4, this._startAudioAsync(e, o)];
                        case 6:
                        case 7:
                            return [2, [l.sent(), r]];
                        case 8:
                            this._closeAudio(),
                            this._stopVideo(),
                            l.label = 9;
                        case 9:
                            return l.trys.push([9, 11, , 20]),
                            [4, navigator.mediaDevices.getUserMedia({
                                video: P(t),
                                audio: D(e, Boolean(o))
                            })];
                        case 10:
                            return p = l.sent(),
                            h = [this._setupAudioTrack(p, Boolean(o)), this._setupVideoTrack(p)],
                            this.onSelfInfo(this.selfInfo),
                            [2, h];
                        case 11:
                            f = l.sent(),
                            l.label = 12;
                        case 12:
                            return l.trys.push([12, 14, , 19]),
                            [4, this._startAudioAsync(e, o)];
                        case 13:
                            return [2, [l.sent(), f]];
                        case 14:
                            m = l.sent(),
                            l.label = 15;
                        case 15:
                            return l.trys.push([15, 17, , 18]),
                            v = [m],
                            [4, this._startVideoAsync(t)];
                        case 16:
                            return [2, v.concat([l.sent()])];
                        case 17:
                            throw l.sent(),
                            f;
                        case 18:
                            return [3, 19];
                        case 19:
                            return [3, 20];
                        case 20:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype._setupVideoTrack = function(e) {
                var t, o = e.getVideoTracks()[0];
                if (!o)
                    throw new Error("failed to get video track");
                return this.tracks.video = o,
                this._populateEventListeners(this.tracks.video, "video"),
                this.setContentHint(this.tracks.video, "motion"),
                null === (t = this.selfInfo.video) || void 0 === t || t.clear(),
                this.selfInfo.video = new f.Video,
                this.selfInfo.video.addTrack(this.tracks.video),
                this.selfInfo.enabled.video = !0,
                this.publishEvent(u.ProduceStart, "video", this.tracks.video),
                this.tracks.video.getSettings()
            }
            ,
            t.prototype.startVideo = function(e) {
                return c(this, void 0, void 0, (function() {
                    var t = this;
                    return l(this, (function(o) {
                        return [2, this.videoProduceQ.run((function() {
                            return c(t, void 0, void 0, (function() {
                                var t, o;
                                return l(this, (function(n) {
                                    return t = null === (o = this.tracks.video) || void 0 === o ? void 0 : o.getSettings(),
                                    e && (null == t ? void 0 : t.deviceId) === e ? [2, t] : (this._stopVideo(),
                                    [2, this._startVideoAsync(e)])
                                }
                                ))
                            }
                            ))
                        }
                        ))]
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype._startVideoAsync = function(e) {
                return c(this, void 0, void 0, (function() {
                    var t, o;
                    return l(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            return [4, navigator.mediaDevices.getUserMedia({
                                video: P(e)
                            })];
                        case 1:
                            return t = n.sent(),
                            o = this._setupVideoTrack(t),
                            this.onSelfInfo(this.selfInfo),
                            [2, o]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.stopVideo = function() {
                return c(this, void 0, void 0, (function() {
                    var e = this;
                    return l(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, this.videoProduceQ.run((function() {
                                return c(e, void 0, void 0, (function() {
                                    return l(this, (function(e) {
                                        return this._stopVideo(),
                                        [2]
                                    }
                                    ))
                                }
                                ))
                            }
                            ))];
                        case 1:
                            return t.sent(),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype._stopVideo = function() {
                var e;
                this.selfInfo.video ? (this.tracks.video && this._depopulateEventListeners(this.tracks.video),
                null === (e = this.tracks.video) || void 0 === e || e.stop(),
                delete this.tracks.video,
                this.selfInfo.video.clear(),
                this.selfInfo.enabled.video = !1,
                this.publishEvent(u.ProduceEnd, "video"),
                this.onSelfInfo(this.selfInfo)) : console.error("No video element to stop")
            }
            ,
            t.prototype._setupAudioTrack = function(e, t) {
                var o = e.getAudioTracks()[0];
                if (!o)
                    throw new Error("failed to get audio track");
                return this.tracks.audio = o,
                this._populateEventListeners(this.tracks.audio, "audio"),
                this.setContentHint(this.tracks.audio, t ? "music" : "speech"),
                this.isAudioTrackRaw = t,
                this.registerAudioPlugin(e),
                this.selfInfo.enabled.audio = !0,
                this.publishEvent(u.ProduceStart, "audio", this.tracks.audio),
                this.tracks.audio.getSettings()
            }
            ,
            t.prototype.startAudio = function(e, t) {
                return c(this, void 0, void 0, (function() {
                    var o = this;
                    return l(this, (function(n) {
                        return [2, this.audioProduceQ.run((function() {
                            return c(o, void 0, void 0, (function() {
                                var o, n, a;
                                return l(this, (function(r) {
                                    return o = null === (n = this.tracks.audio) || void 0 === n ? void 0 : n.getSettings(),
                                    e && (null == o ? void 0 : o.deviceId) === e && t === this.isAudioTrackRaw && "live" === (null === (a = this.tracks.audio) || void 0 === a ? void 0 : a.readyState) ? (this.resumeAudio(),
                                    [2, o]) : (this._closeAudio(),
                                    [2, this._startAudioAsync(e, t)])
                                }
                                ))
                            }
                            ))
                        }
                        ))]
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.getAudioStream = function(e, t) {
                return c(this, void 0, void 0, (function() {
                    var o = this;
                    return l(this, (function(n) {
                        return [2, this.audioProduceQ.run((function() {
                            return c(o, void 0, void 0, (function() {
                                return l(this, (function(o) {
                                    return [2, this._getAudioStreamAsync(e, t)]
                                }
                                ))
                            }
                            ))
                        }
                        ))]
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype._getAudioStreamAsync = function(e, t) {
                return c(this, void 0, void 0, (function() {
                    return l(this, (function(o) {
                        return [2, navigator.mediaDevices.getUserMedia({
                            audio: D(e, Boolean(t))
                        })]
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype._startAudioAsync = function(e, t) {
                return c(this, void 0, void 0, (function() {
                    var o, n;
                    return l(this, (function(a) {
                        switch (a.label) {
                        case 0:
                            return [4, this._getAudioStreamAsync(e, t)];
                        case 1:
                            return o = a.sent(),
                            n = this._setupAudioTrack(o, Boolean(t)),
                            this.onSelfInfo(this.selfInfo),
                            [2, n]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.stopAudio = function() {
                return c(this, void 0, void 0, (function() {
                    var e = this;
                    return l(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, this.audioProduceQ.run((function() {
                                return c(e, void 0, void 0, (function() {
                                    return l(this, (function(e) {
                                        return this._stopAudio(),
                                        [2]
                                    }
                                    ))
                                }
                                ))
                            }
                            ))];
                        case 1:
                            return t.sent(),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype._stopAudio = function() {
                if (!this.pauseAudioOnMute)
                    return this._closeAudio();
                this.publishEvent(u.ProducePause, "audio"),
                this.selfInfo.enabled.audio = !1,
                this.onSelfInfo(this.selfInfo)
            }
            ,
            t.prototype._closeAudio = function() {
                this.tracks.audio && (this.unregisterAudioPlugin(),
                this._depopulateEventListeners(this.tracks.audio),
                this.tracks.audio.stop(),
                delete this.tracks.audio,
                delete this.isAudioTrackRaw),
                this.publishEvent(u.ProduceEnd, "audio"),
                this.selfInfo.enabled.audio = !1,
                this.onSelfInfo(this.selfInfo)
            }
            ,
            t.prototype.setPauseAudioOnMute = function(e) {
                this.pauseAudioOnMute !== e && (this.pauseAudioOnMute = e,
                e || this.selfInfo.enabled.audio || this.stopAudio())
            }
            ,
            t.prototype.registerAudioPlugin = function(e) {
                S.registerAudioVolumeMonitor(e, this.notifyOfActiveSpeakingChange, this.notifyOfVolumeChange)
            }
            ,
            t.prototype.unregisterAudioPlugin = function() {
                S.unregisterAudioVolumeMonitor(this.notifyOfActiveSpeakingChange, this.notifyOfVolumeChange)
            }
            ,
            t.prototype.resumeAudio = function() {
                this.publishEvent(u.ProduceResume, "audio"),
                this.selfInfo.enabled.audio = !0,
                this.onSelfInfo(this.selfInfo)
            }
            ,
            t.prototype.setScreenShareQuality = function(e) {
                return c(this, void 0, void 0, (function() {
                    var t = this;
                    return l(this, (function(o) {
                        return [2, this.screenProduceQ.run((function() {
                            return c(t, void 0, void 0, (function() {
                                return l(this, (function(t) {
                                    return e === this.screenShareHighQuality ? [2] : [2, this._setScreenShareQualityAsync(e)]
                                }
                                ))
                            }
                            ))
                        }
                        ))]
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype._setScreenShareQualityAsync = function(e) {
                return c(this, void 0, void 0, (function() {
                    var t;
                    return l(this, (function(o) {
                        switch (o.label) {
                        case 0:
                            if (!this.tracks.screen)
                                return [2];
                            this.setContentHint(this.tracks.screen, e ? "detail" : "text"),
                            o.label = 1;
                        case 1:
                            return o.trys.push([1, 3, , 4]),
                            [4, this.tracks.screen.applyConstraints(e ? A : O)];
                        case 2:
                            return o.sent(),
                            [3, 4];
                        case 3:
                            return t = o.sent(),
                            console.error("Error applying constraints to screen track:", t),
                            [3, 4];
                        case 4:
                            return this.screenShareHighQuality = e,
                            this.publishEvent(u.ProduceEnd, "screen"),
                            this.tracks.screen && this.publishEvent(u.ProduceStart, "screen", this.tracks.screen),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.startScreenShare = function(e, t) {
                return c(this, void 0, void 0, (function() {
                    var o = this;
                    return l(this, (function(n) {
                        return [2, this.screenProduceQ.run((function() {
                            return c(o, void 0, void 0, (function() {
                                var o;
                                return l(this, (function(n) {
                                    switch (n.label) {
                                    case 0:
                                        if (this._stopScreenShare(),
                                        !b)
                                            return [3, 10];
                                        n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 9]),
                                        [4, this._startScreenShareAsync(e, t)];
                                    case 2:
                                        return n.sent(),
                                        [3, 9];
                                    case 3:
                                        if (o = n.sent(),
                                        !e)
                                            return [3, 8];
                                        n.label = 4;
                                    case 4:
                                        return n.trys.push([4, 6, , 7]),
                                        [4, this._startScreenShareAsync(!1, t)];
                                    case 5:
                                        return n.sent(),
                                        [3, 7];
                                    case 6:
                                        throw n.sent(),
                                        o;
                                    case 7:
                                        return [2, o];
                                    case 8:
                                        throw o;
                                    case 9:
                                        return [3, 12];
                                    case 10:
                                        return [4, this._startScreenShareAsync(e, t)];
                                    case 11:
                                        n.sent(),
                                        n.label = 12;
                                    case 12:
                                        return [2]
                                    }
                                }
                                ))
                            }
                            ))
                        }
                        ))]
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype._startScreenShareAsync = function(e, t) {
                var o;
                return c(this, void 0, void 0, (function() {
                    var n, a, r;
                    return l(this, (function(i) {
                        switch (i.label) {
                        case 0:
                            return b ? [3, 2] : [4, navigator.mediaDevices.getDisplayMedia({
                                video: M,
                                audio: !!e && C
                            })];
                        case 1:
                            return n = i.sent(),
                            [3, 4];
                        case 2:
                            return [4, navigator.mediaDevices.getUserMedia({
                                audio: !!e && {
                                    mandatory: s(s({}, w), {
                                        chromeMediaSourceId: t
                                    })
                                },
                                video: {
                                    mandatory: s(s({}, k), {
                                        chromeMediaSourceId: t
                                    })
                                }
                            })];
                        case 3:
                            n = i.sent(),
                            i.label = 4;
                        case 4:
                            if (a = n.getVideoTracks()[0],
                            r = n.getAudioTracks()[0],
                            !a)
                                throw new Error("failed to get screen track");
                            return this.tracks.screen = a,
                            this._populateEventListeners(this.tracks.screen, "screen"),
                            r && (this.tracks.sound = r,
                            this._populateEventListeners(this.tracks.sound, "sound"),
                            this.setContentHint(this.tracks.sound, "music")),
                            [4, this._setScreenShareQualityAsync(!1)];
                        case 5:
                            return i.sent(),
                            null === (o = this.selfInfo.screenVideo) || void 0 === o || o.clear(),
                            this.selfInfo.screenVideo = new f.Video,
                            this.selfInfo.screenVideo.addTrack(a),
                            this.selfInfo.enabled.screen = !0,
                            this.selfInfo.enabled.sound = !!r,
                            this.onSelfInfo(this.selfInfo),
                            this.tracks.sound && this.publishEvent(u.ProduceStart, "sound", this.tracks.sound),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.stopScreenShare = function() {
                return c(this, void 0, void 0, (function() {
                    var e = this;
                    return l(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, this.screenProduceQ.run((function() {
                                return c(e, void 0, void 0, (function() {
                                    return l(this, (function(e) {
                                        return this._stopScreenShare(),
                                        [2]
                                    }
                                    ))
                                }
                                ))
                            }
                            ))];
                        case 1:
                            return t.sent(),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype._stopScreenShare = function() {
                var e, t, o;
                return c(this, void 0, void 0, (function() {
                    return l(this, (function(n) {
                        return this.selfInfo.screenVideo || console.error("No screen video element to stop"),
                        this.tracks.screen && this._depopulateEventListeners(this.tracks.screen),
                        this.tracks.sound && this._depopulateEventListeners(this.tracks.sound),
                        null === (e = this.tracks.screen) || void 0 === e || e.stop(),
                        null === (t = this.tracks.sound) || void 0 === t || t.stop(),
                        delete this.tracks.screen,
                        delete this.tracks.sound,
                        null === (o = this.selfInfo.screenVideo) || void 0 === o || o.clear(),
                        this.selfInfo.enabled.screen = !1,
                        this.selfInfo.enabled.sound = !1,
                        this.onSelfInfo(this.selfInfo),
                        this.publishEvent(u.ProduceEnd, "screen"),
                        this.publishEvent(u.ProduceEnd, "sound"),
                        [2]
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.setContentHint = function(e, t) {
                "contentHint"in e && (e.contentHint = t,
                e.contentHint !== t && console.warn("Invalid content hint " + t))
            }
            ,
            t.prototype.destroy = function() {
                Object.values(this.tracks).forEach((function(e) {
                    null == e || e.stop()
                }
                )),
                this.tracks = {}
            }
            ,
            t.prototype.summarize = function() {
                var e = {};
                return Object.entries(this.tracks).forEach((function(t) {
                    var o = t[0]
                      , n = t[1];
                    e[o] = n ? v.summarizeMediaStreamTrack(n) : void 0
                }
                )),
                e
            }
            ,
            t.prototype.dumpDebugInfo = function() {
                return c(this, void 0, void 0, (function() {
                    var e, t, o;
                    return l(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            return n.trys.push([0, 2, , 3]),
                            [4, navigator.mediaDevices.enumerateDevices()];
                        case 1:
                            return e = n.sent(),
                            [3, 3];
                        case 2:
                            return t = n.sent(),
                            e = t,
                            [3, 3];
                        case 3:
                            return o = {
                                audio: g.localPreferences.get(g.LocalPreferenceKeys.AudioDeviceId),
                                video: g.localPreferences.get(g.LocalPreferenceKeys.VideoDeviceId),
                                audioOutput: g.localPreferences.get(g.LocalPreferenceKeys.AudioOutputDeviceId)
                            },
                            [2, {
                                enumerateDevices: e,
                                defaultDevices: o
                            }]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t.instance = new t,
            t
        }(p.GatherEventEmitter);
        t.localMediaManager = R.instance
    },
    1589: function(e, t, o) {
        var n = this && this.__awaiter || function(e, t, o, n) {
            return new (o || (o = Promise))((function(a, r) {
                function i(e) {
                    try {
                        c(n.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function s(e) {
                    try {
                        c(n.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? a(e.value) : (t = e.value,
                    t instanceof o ? t : new o((function(e) {
                        e(t)
                    }
                    ))).then(i, s)
                }
                c((n = n.apply(e, t || [])).next())
            }
            ))
        }
          , a = this && this.__generator || function(e, t) {
            var o, n, a, r, i = {
                label: 0,
                sent: function() {
                    if (1 & a[0])
                        throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return r = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }
            ),
            r;
            function s(r) {
                return function(s) {
                    return function(r) {
                        if (o)
                            throw new TypeError("Generator is already executing.");
                        for (; i; )
                            try {
                                if (o = 1,
                                n && (a = 2 & r[0] ? n.return : r[0] ? n.throw || ((a = n.return) && a.call(n),
                                0) : n.next) && !(a = a.call(n, r[1])).done)
                                    return a;
                                switch (n = 0,
                                a && (r = [2 & r[0], a.value]),
                                r[0]) {
                                case 0:
                                case 1:
                                    a = r;
                                    break;
                                case 4:
                                    return i.label++,
                                    {
                                        value: r[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++,
                                    n = r[1],
                                    r = [0];
                                    continue;
                                case 7:
                                    r = i.ops.pop(),
                                    i.trys.pop();
                                    continue;
                                default:
                                    if (!((a = (a = i.trys).length > 0 && a[a.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
                                        i.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && i.label < a[1]) {
                                        i.label = a[1],
                                        a = r;
                                        break
                                    }
                                    if (a && i.label < a[2]) {
                                        i.label = a[2],
                                        i.ops.push(r);
                                        break
                                    }
                                    a[2] && i.ops.pop(),
                                    i.trys.pop();
                                    continue
                                }
                                r = t.call(e, i)
                            } catch (e) {
                                r = [6, e],
                                n = 0
                            } finally {
                                o = a = 0
                            }
                        if (5 & r[0])
                            throw r[1];
                        return {
                            value: r[0] ? r[1] : void 0,
                            done: !0
                        }
                    }([r, s])
                }
            }
        }
          , r = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        t.__esModule = !0,
        t.peerManager = void 0;
        var i = o(18)
          , s = o(82)
          , c = r(o(753))
          , l = o(588)
          , u = o(1586)
          , d = o(1690)
          , p = o(568)
          , h = o(295)
          , f = o(1719)
          , m = o(558)
          , v = o(561)
          , g = r(o(754))
          , S = o(1590)
          , y = function() {
            function e() {
                var e = this;
                this.id = "UNINITIALIZED",
                this.routerURL = "",
                this.spaceId = "",
                this.sfuClients = {},
                this.idToSFU = {},
                this.idToSFUTimestamps = {},
                this.awaitingSFU = {},
                this.sfuCleanupTimeouts = {},
                this.subscribed = {},
                this.allowed = {},
                this.muted = {},
                this.mutedAllVideo = !1,
                this.maxProducerSpatialLayer = s.VideoSpatialLayer.HighQuality,
                this.defaultMaxConsumerSpatialLayer = s.VideoSpatialLayer.LowQuality,
                this.maxConsumerSpatialLayer = {},
                this.info = {},
                this._infoListeners = [],
                this._sfuReloadListeners = [],
                this._onSFUReloadChange = function(t) {
                    e._sfuReloadListeners.forEach((function(e) {
                        return e(t)
                    }
                    ))
                }
                ,
                this.addInfoListener(d.metricsManager.consumerStateMetricsCollector.consumerInfoListener),
                this.addSFUReloadListener((function(e) {
                    e ? d.metricsManager.stopCollection() : d.metricsManager.startCollection()
                }
                )),
                d.metricsManager.getConsumerInfo = function() {
                    return e.info
                }
            }
            return e.prototype.onDisableVideo = function() {}
            ,
            e.prototype.onOverAllow = function(e, t) {}
            ,
            e.prototype.onProduceStateChange = function(e, t) {}
            ,
            e.prototype.produceStartIfNeeded = function(e, t, o) {
                return n(this, void 0, void 0, (function() {
                    return a(this, (function(n) {
                        return this.isProducingUnnecessary() ? [2] : [2, this.produceStart(e, t, o)]
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.produceStart = function(e, t, o) {
                return n(this, void 0, void 0, (function() {
                    var n, r;
                    return a(this, (function(a) {
                        switch (a.label) {
                        case 0:
                            if (this.onProduceStateChange(e, S.ProduceState.Loading),
                            !(n = null != o ? o : this._getSFU(this.id)))
                                return [3, 5];
                            a.label = 1;
                        case 1:
                            return a.trys.push([1, 3, , 4]),
                            [4, n.produceStart(e, t)];
                        case 2:
                            return a.sent() ? (this.onProduceStateChange(e, S.ProduceState.Connected),
                            console.log("Successfully produced " + e)) : console.log("Cancelled produce " + e),
                            [3, 4];
                        case 3:
                            return (r = a.sent())instanceof h.TransportProduceError && this.onProduceStateChange(e, S.ProduceState.Errored),
                            console.error("produce start error for " + e + ": " + r.message),
                            [3, 4];
                        case 4:
                            return [3, 6];
                        case 5:
                            console.log("no sfu attached for producing " + e),
                            a.label = 6;
                        case 6:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.produceEnd = function(e, t) {
                var o = null != t ? t : this._getSFU(this.id);
                null == o || o.produceEnd(e),
                this.onProduceStateChange(e, S.ProduceState.Ended)
            }
            ,
            e.prototype.produceResume = function(e) {
                var t = this._getSFU(this.id);
                null == t || t.produceResume(e)
            }
            ,
            e.prototype.producePause = function(e) {
                var t = this._getSFU(this.id);
                null == t || t.producePause(e)
            }
            ,
            e.prototype.start = function(e, t, o) {
                var n = this;
                if (this.routerURL = e,
                this.id = t,
                this.spaceId = o,
                m.initCallstats(t, o),
                i.gate(i.GatedFeatName.WatchRTC, t, o) && v.config.watchRTCApiKey)
                    try {
                        g.default.init(),
                        g.default.setConfig({
                            rtcApiKey: v.config.watchRTCApiKey,
                            rtcPeerId: t,
                            rtcRoomId: o
                        })
                    } catch (e) {
                        console.log("watchRTC failed to initialize", e)
                    }
                console.log("Connecting to router at " + e),
                this.router = new f.Signaling(e,o,(function(e) {
                    n.syncStateToRouter(),
                    l.debugLogMajorEvent("router disconnect: " + e)
                }
                )),
                this.router.on("addrs", this._onAddrs.bind(this)),
                this.syncStateToRouter(),
                this.lmmEventListenerCleanupCallbacks = [u.localMediaManager.addEventListener(u.LocalMediaManagerEvent.ProduceStart, (function(e, t) {
                    n.produceStartIfNeeded(e, t)
                }
                )), u.localMediaManager.addEventListener(u.LocalMediaManagerEvent.ProduceEnd, (function(e) {
                    n.produceEnd(e)
                }
                )), u.localMediaManager.addEventListener(u.LocalMediaManagerEvent.ProduceResume, (function(e) {
                    n.produceResume(e)
                }
                )), u.localMediaManager.addEventListener(u.LocalMediaManagerEvent.ProducePause, (function(e) {
                    n.producePause(e)
                }
                ))],
                d.metricsManager.setPlayerId(this.id),
                d.metricsManager.setSpaceId(o)
            }
            ,
            e.prototype.destroy = function() {
                var e, t;
                l.debugLogMajorEvent("PeerManager destroyed!\n" + (new Error).stack),
                null === (e = this.router) || void 0 === e || e.destroy();
                for (var o = 0, n = Object.values(this.sfuClients); o < n.length; o++)
                    n[o].destroy();
                Object.values(this.sfuCleanupTimeouts).forEach((function(e) {
                    return clearTimeout(e)
                }
                )),
                null === (t = this.lmmEventListenerCleanupCallbacks) || void 0 === t || t.forEach((function(e) {
                    return e()
                }
                )),
                this.lmmEventListenerCleanupCallbacks = void 0,
                u.localMediaManager.destroy(),
                this.sfuClients = {},
                this.idToSFU = {},
                this.awaitingSFU = {},
                this.info = {},
                this._onSFUReloadChange(!1),
                this._dispatchInfo(),
                this.clearInfoListener(d.metricsManager.consumerStateMetricsCollector.consumerInfoListener),
                this.subscribed = {},
                this.allowed = {},
                this.muted = {}
            }
            ,
            e.prototype.syncStateToRouter = function() {
                for (var e in console.log("[PeerManager] queueing state sync to router, currently " + Object.keys(this.subscribed).length + " subscribed."),
                this.idToSFU)
                    e === this.id || e in this.subscribed || (delete this.idToSFU[e],
                    delete this.idToSFUTimestamps[e]);
                for (var t in this.sendGetAddrs(this.id),
                this.subscribed)
                    this.sendGetAddrs(t)
            }
            ,
            e.prototype.sfuCanBeDestroyed = function(e) {
                var t = this.sfuClients[e];
                return t && 0 === Object.keys(t.subscribed).length && e !== this.idToSFU[this.id]
            }
            ,
            e.prototype.scheduleSFUCleanup = function(e) {
                var t = this;
                this.sfuCanBeDestroyed(e) && null == this.sfuCleanupTimeouts[e] && (this.sfuCleanupTimeouts[e] = window.setTimeout((function() {
                    var o;
                    delete t.sfuCleanupTimeouts[e],
                    t.sfuCanBeDestroyed(e) && (null === (o = t.sfuClients[e]) || void 0 === o || o.destroy(),
                    delete t.sfuClients[e])
                }
                ), 0))
            }
            ,
            e.prototype.cancelSFUCleanup = function(e) {
                this.sfuCleanupTimeouts[e] && (clearTimeout(this.sfuCleanupTimeouts[e]),
                delete this.sfuCleanupTimeouts[e])
            }
            ,
            e.prototype.subscribe = function(e, t) {
                var o, n, a, r;
                if (!c.default(this.subscribed[e], t)) {
                    this.subscribed[e] = t,
                    this.muted[e] || (this.muted[e] = new Set(this.mutedAllVideo ? ["video", "screen"] : []));
                    var i = this.info[e];
                    i || (i = {
                        enabled: {
                            audio: !1,
                            video: !1,
                            screen: !1,
                            sound: !1
                        },
                        muted: {
                            audio: (null === (o = this.muted[e]) || void 0 === o ? void 0 : o.has("audio")) || !1,
                            video: (null === (n = this.muted[e]) || void 0 === n ? void 0 : n.has("video")) || !1,
                            screen: (null === (a = this.muted[e]) || void 0 === a ? void 0 : a.has("screen")) || !1,
                            sound: (null === (r = this.muted[e]) || void 0 === r ? void 0 : r.has("sound")) || !1
                        },
                        state: S.ConsumerState.ConnectingToSFU,
                        produceScores: {
                            audio: 10,
                            video: 10,
                            screen: 10,
                            sound: 10
                        },
                        overAllowed: !1,
                        volume: 1,
                        screenVolume: 1
                    },
                    this.info[e] = i);
                    var s = this.idToSFU[e]
                      , l = s ? this.sfuClients[s] : void 0;
                    s && l ? (l.subscribe(e, t),
                    this.cancelSFUCleanup(s)) : (this.sendGetAddrs(e),
                    i.state = S.ConsumerState.WaitingForSFUAddress),
                    this._dispatchInfo()
                }
            }
            ,
            e.prototype.unsubscribe = function(e) {
                var t;
                if (this.subscribed[e]) {
                    null === (t = this.router) || void 0 === t || t.emit("unsubscribe", {
                        srcId: e,
                        srcStreamId: this.spaceId
                    }),
                    delete this.subscribed[e],
                    delete this.muted[e],
                    delete this.maxConsumerSpatialLayer[e];
                    var o = this.idToSFU[e];
                    delete this.idToSFU[e],
                    delete this.idToSFUTimestamps[e],
                    delete this.info[e],
                    this._dispatchInfo();
                    var n = o ? this.sfuClients[o] : void 0;
                    o && n && (n.unsubscribe(e),
                    this.scheduleSFUCleanup(o))
                }
            }
            ,
            e.prototype.allow = function(e) {
                var t = this;
                if (!this.allowed[e] && e !== this.id) {
                    var o = this.isProducingUnnecessary();
                    this.allowed[e] = !0;
                    var n = this._getSFU(this.id);
                    n && n.allow(e),
                    o && (console.log("[PeerManager] Producing is now necessary"),
                    u.localMediaManager.forEachTrack((function(e, o) {
                        t.produceStart(e, o)
                    }
                    )),
                    u.localMediaManager.setPauseAudioOnMute(!0))
                }
            }
            ,
            e.prototype.disallow = function(e) {
                var t = this;
                if (this.allowed[e]) {
                    delete this.allowed[e];
                    var o = this._getSFU(this.id);
                    o && (o.disallow(e),
                    this.isProducingUnnecessary() && (console.log("[PeerManager] Producing is no longer necessary"),
                    u.localMediaManager.forEachTrack((function(e, o) {
                        t.produceEnd(e)
                    }
                    )),
                    u.localMediaManager.setPauseAudioOnMute(!1)))
                }
            }
            ,
            e.prototype.isProducingUnnecessary = function() {
                return 0 === Object.keys(this.allowed).length
            }
            ,
            e.prototype.sendGetAddrs = function(e) {
                var t;
                null === (t = this.router) || void 0 === t || t.sendWithResponse("get-addr", {
                    srcId: e,
                    srcStreamId: this.spaceId
                }).then((function(t) {
                    t.addrFound || l.debugLogMajorEvent("Router couldn't find addr for " + e)
                }
                )).catch(console.error)
            }
            ,
            e.prototype._onAddrs = function(e) {
                var t, o, r = e.srcId, i = e.sfuAddr;
                return n(this, void 0, void 0, (function() {
                    var e, n, s, c, h = this;
                    return a(this, (function(a) {
                        switch (a.label) {
                        case 0:
                            return Object.entries(this.awaitingSFU).forEach((function(e) {
                                var t = e[0]
                                  , o = e[1];
                                h.awaitingSFU[t] = o.filter((function(e) {
                                    return e.id !== r
                                }
                                ))
                            }
                            )),
                            e = r === this.id,
                            n = function() {
                                if (e || r in h.subscribed) {
                                    var t = h.idToSFU[r]
                                      , o = t ? h.sfuClients[t] : void 0
                                      , n = h.sfuClients[i];
                                    if (n) {
                                        h.idToSFU[r] = i,
                                        h.idToSFUTimestamps[r] = (new Date).toString(),
                                        e && (l.debugLogMajorEvent("Router assigned this user to " + i),
                                        u.localMediaManager.forEachTrack((function(e, t) {
                                            o && h.produceEnd(e, o),
                                            h.produceStartIfNeeded(e, t, n)
                                        }
                                        )),
                                        Object.keys(h.allowed).forEach((function(e) {
                                            null == o || o.disallow(e),
                                            n.allow(e)
                                        }
                                        )),
                                        o && (o.onReloadChange = function() {}
                                        ),
                                        n.onReloadChange = h._onSFUReloadChange,
                                        h._onSFUReloadChange(n.reloading));
                                        var a = h.subscribed[r];
                                        a && (o !== n && (null == o || o.unsubscribe(r)),
                                        n.subscribe(r, a),
                                        h.cancelSFUCleanup(i)),
                                        o !== n && (null == o || o.setMaxConsumerSpatialLayer(r, "video", void 0)),
                                        n.setMaxConsumerSpatialLayer(r, "video", h.maxConsumerSpatialLayer[r]),
                                        t && t !== i && h.scheduleSFUCleanup(t)
                                    }
                                }
                            }
                            ,
                            (s = this.info[r]) && s.state === S.ConsumerState.WaitingForSFUAddress && (s.state = S.ConsumerState.ConnectingToSFU,
                            this._dispatchInfo()),
                            Boolean(this.sfuClients[i]) ? (n(),
                            [3, 8]) : [3, 1];
                        case 1:
                            return this.awaitingSFU[i] ? (null === (t = this.awaitingSFU[i]) || void 0 === t || t.push({
                                id: r,
                                callback: n
                            }),
                            [3, 8]) : [3, 2];
                        case 2:
                            console.log("initializing", i),
                            this.awaitingSFU[i] = [{
                                id: r,
                                callback: n
                            }],
                            (c = new p.SFUClient).onInfo = function(e) {
                                Object.assign(h.info, e),
                                Object.keys(h.info).forEach((function(e) {
                                    var t;
                                    h.subscribed[e] || delete h.info[e],
                                    null === (t = h.muted[e]) || void 0 === t || t.forEach((function(t) {
                                        h.setMute(e, t, !0)
                                    }
                                    ))
                                }
                                )),
                                h._dispatchInfo()
                            }
                            ,
                            c.onDisableVideo = function() {
                                h.onDisableVideo()
                            }
                            ,
                            c.onOverAllow = function(e, t) {
                                h.onOverAllow(e, t)
                            }
                            ,
                            c.onSelfProduceScore = u.localMediaManager.setSelfProduceScore,
                            c.onConsumerCreate = d.metricsManager.webRtcMetricsCollector.consumerCreateListener,
                            c.onConsumerDestroy = d.metricsManager.webRtcMetricsCollector.consumerDestroyListener,
                            c.onConsumerDisable = d.metricsManager.webRtcMetricsCollector.consumerDisableListener,
                            c.onConsumerEnable = d.metricsManager.webRtcMetricsCollector.consumerEnableListener,
                            c.onProduceClose = function(e) {
                                h.onProduceStateChange(e, S.ProduceState.Ended)
                            }
                            ,
                            e && (c.onReloadChange = this._onSFUReloadChange),
                            a.label = 3;
                        case 3:
                            return a.trys.push([3, 5, , 6]),
                            [4, c.start(i, this.id, this.spaceId)];
                        case 4:
                        case 5:
                            return a.sent(),
                            [3, 6];
                        case 6:
                            return [4, c.initialStartPromise];
                        case 7:
                            a.sent(),
                            this.sfuClients[i] = c,
                            null === (o = this.awaitingSFU[i]) || void 0 === o || o.forEach((function(e) {
                                return (0,
                                e.callback)()
                            }
                            )),
                            delete this.awaitingSFU[i],
                            e && c.setMaxProducerSpatialLayer("video", this.maxProducerSpatialLayer),
                            c.setDefaultMaxConsumerSpatialLayer("video", this.defaultMaxConsumerSpatialLayer),
                            this.scheduleSFUCleanup(i),
                            a.label = 8;
                        case 8:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.setMaxProducerSpatialLayer = function(e, t) {
                return n(this, void 0, void 0, (function() {
                    var o;
                    return a(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            return o = this._getSFU(this.id),
                            this.maxProducerSpatialLayer = t,
                            o ? [4, o.setMaxProducerSpatialLayer(e, t)] : [3, 2];
                        case 1:
                            n.sent(),
                            n.label = 2;
                        case 2:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.setDefaultMaxConsumerSpatialLayer = function(e, t) {
                return n(this, void 0, void 0, (function() {
                    var o;
                    return a(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            return this.defaultMaxConsumerSpatialLayer === t ? [2] : (this.defaultMaxConsumerSpatialLayer = t,
                            o = Object.values(this.sfuClients).map((function(o) {
                                return o.setDefaultMaxConsumerSpatialLayer(e, t)
                            }
                            )),
                            [4, Promise.all(o)]);
                        case 1:
                            return n.sent(),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.setMaxConsumerSpatialLayer = function(e, t, o) {
                return n(this, void 0, void 0, (function() {
                    var n;
                    return a(this, (function(a) {
                        switch (a.label) {
                        case 0:
                            return this.maxConsumerSpatialLayer[e] === o ? [2] : (void 0 === o ? delete this.maxConsumerSpatialLayer[e] : this.maxConsumerSpatialLayer[e] = o,
                            [4, null == (n = this._getSFU(e)) ? void 0 : n.setMaxConsumerSpatialLayer(e, t, o)]);
                        case 1:
                            return a.sent(),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.setVolume = function(e, t) {
                var o = this.info[e];
                o && (o.volume = t),
                this._dispatchInfo()
            }
            ,
            e.prototype.setScreenVolume = function(e, t) {
                var o = this.info[e];
                o && (o.screenVolume = t),
                this._dispatchInfo()
            }
            ,
            e.prototype.setMute = function(e, t, o) {
                var n, a, r, i, s, c, l, u = null !== (n = this.muted[e]) && void 0 !== n ? n : new Set;
                this.muted[e] = u,
                o ? u.add(t) : u.delete(t);
                var d = this.info[e];
                if (d) {
                    "video" === t ? null === (a = d.video) || void 0 === a || a.setMute("consumer", "video", o) : "audio" === t ? (null === (r = d.video) || void 0 === r || r.setMute("consumer", "audio", o),
                    0 !== d.volume || o || this.setVolume(e, 1)) : "screen" === t ? null === (i = d.screenVideo) || void 0 === i || i.setMute("consumer", "video", o) : "sound" === t && (null === (s = d.screenVideo) || void 0 === s || s.setMute("consumer", "audio", o),
                    0 !== d.screenVolume || o || this.setScreenVolume(e, 1));
                    var p = this.idToSFU[e];
                    p ? o ? null === (c = this.sfuClients[p]) || void 0 === c || c.pauseConsumer(e, t) : null === (l = this.sfuClients[p]) || void 0 === l || l.resumeConsumer(e, t) : console.warn("SFU for client " + e + " not found."),
                    d.muted[t] = o
                }
                this._dispatchInfo()
            }
            ,
            e.prototype.isMuted = function(e, t) {
                var o;
                return Boolean(null === (o = this.muted[e]) || void 0 === o ? void 0 : o.has(t))
            }
            ,
            e.prototype.muteAllVideo = function(e) {
                var t, o, n = this;
                this.mutedAllVideo = !0,
                e && (t = e[0],
                o = e[1]),
                Object.keys(this.subscribed).forEach((function(e) {
                    t === e ? (n.setMute(e, "video", "video" !== o),
                    n.setMute(e, "screen", "screen" !== o)) : (n.setMute(e, "video", !0),
                    n.setMute(e, "screen", !0))
                }
                ))
            }
            ,
            e.prototype.unmuteAllVideo = function() {
                var e = this;
                this.mutedAllVideo = !1,
                Object.keys(this.subscribed).forEach((function(t) {
                    e.setMute(t, "video", !1),
                    e.setMute(t, "screen", !1)
                }
                ))
            }
            ,
            e.prototype._summarize = function() {
                var e = {};
                Object.entries(this.subscribed).forEach((function(t) {
                    var o = t[0]
                      , n = t[1];
                    e[o] = Array.from(n)
                }
                ));
                var t = {};
                Object.entries(this.muted).forEach((function(e) {
                    var o = e[0]
                      , n = e[1];
                    t[o] = Array.from(n)
                }
                ));
                var o = {};
                Object.entries(this.info).forEach((function(e) {
                    var t = e[0]
                      , n = e[1];
                    o[t] = S.summarizeConsumerInfo(n)
                }
                ));
                var n = u.localMediaManager.summarize()
                  , a = {};
                Object.entries(this.sfuClients).forEach((function(e) {
                    var t = e[0]
                      , o = e[1];
                    return p.summarizeSFUClient(o).then((function(e) {
                        a[t] = e
                    }
                    ))
                }
                ));
                var r = {};
                return Object.entries(this.awaitingSFU).forEach((function(e) {
                    var t = e[0]
                      , o = e[1];
                    r[t] = o.map((function(e) {
                        return e.id
                    }
                    ))
                }
                )),
                {
                    id: this.id,
                    spaceId: this.spaceId,
                    routerURL: this.routerURL,
                    routerConnection: this.router ? this.router._summarize() : void 0,
                    subscribed: e,
                    allowed: Object.keys(this.allowed),
                    muted: t,
                    localMedia: n,
                    idToSFU: this.idToSFU,
                    idToSFUTimestamps: this.idToSFUTimestamps,
                    info: o,
                    sfuClients: a,
                    sfusPendingCleanup: Object.keys(this.sfuCleanupTimeouts),
                    awaitingSFU: r,
                    debugMajorEvents: l.debugMajorEvents
                }
            }
            ,
            e.prototype.debugInfo = function() {
                return n(this, void 0, void 0, (function() {
                    var e;
                    return a(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return e = {
                                peerManagerSummary: this._summarize()
                            },
                            [4, u.localMediaManager.dumpDebugInfo()];
                        case 1:
                            return [2, (e.localMediaDump = t.sent(),
                            e)]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.requestServerDebug = function() {
                var e, t = [this.id].concat(Object.keys(this.subscribed)), o = this.spaceId;
                Object.values(this.sfuClients).forEach((function(e) {
                    e.requestSFUDebug(t, o)
                }
                ));
                var n = {
                    srcIds: t,
                    srcStreamId: o
                };
                null === (e = this.router) || void 0 === e || e.emit("debug-router", n)
            }
            ,
            e.prototype.addInfoListener = function(e) {
                this._infoListeners.push(e),
                e(this.info)
            }
            ,
            e.prototype.clearInfoListener = function(e) {
                var t = this._infoListeners.indexOf(e);
                t >= 0 && this._infoListeners.splice(t, 1)
            }
            ,
            e.prototype.addSFUReloadListener = function(e) {
                var t, o;
                this._sfuReloadListeners.push(e),
                e(null !== (o = null === (t = this._getSFU(this.id)) || void 0 === t ? void 0 : t.reloading) && void 0 !== o && o)
            }
            ,
            e.prototype.clearSFUReloadListener = function(e) {
                var t = this._sfuReloadListeners.indexOf(e);
                t >= 0 && this._sfuReloadListeners.splice(t, 1)
            }
            ,
            e.prototype._dispatchInfo = function() {
                var e = this;
                this._infoListeners.forEach((function(t) {
                    return t(e.info)
                }
                ))
            }
            ,
            e.prototype._getSFU = function(e) {
                var t = this.idToSFU[e];
                return t ? this.sfuClients[t] : void 0
            }
            ,
            e.prototype._DEBUG_disconnect = function() {
                var e;
                null === (e = this._getSFU(this.id)) || void 0 === e || e._DEBUG_disconnect()
            }
            ,
            e.prototype._DEBUG_reload = function() {
                var e;
                null === (e = this._getSFU(this.id)) || void 0 === e || e.reload()
            }
            ,
            e.instance = new e,
            e
        }();
        t.peerManager = y.instance,
        v.config.exposePeerManager && (window.pm = t.peerManager)
    },
    568: function(e, t, o) {
        var n = this && this.__awaiter || function(e, t, o, n) {
            return new (o || (o = Promise))((function(a, r) {
                function i(e) {
                    try {
                        c(n.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function s(e) {
                    try {
                        c(n.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? a(e.value) : (t = e.value,
                    t instanceof o ? t : new o((function(e) {
                        e(t)
                    }
                    ))).then(i, s)
                }
                c((n = n.apply(e, t || [])).next())
            }
            ))
        }
          , a = this && this.__generator || function(e, t) {
            var o, n, a, r, i = {
                label: 0,
                sent: function() {
                    if (1 & a[0])
                        throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return r = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }
            ),
            r;
            function s(r) {
                return function(s) {
                    return function(r) {
                        if (o)
                            throw new TypeError("Generator is already executing.");
                        for (; i; )
                            try {
                                if (o = 1,
                                n && (a = 2 & r[0] ? n.return : r[0] ? n.throw || ((a = n.return) && a.call(n),
                                0) : n.next) && !(a = a.call(n, r[1])).done)
                                    return a;
                                switch (n = 0,
                                a && (r = [2 & r[0], a.value]),
                                r[0]) {
                                case 0:
                                case 1:
                                    a = r;
                                    break;
                                case 4:
                                    return i.label++,
                                    {
                                        value: r[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++,
                                    n = r[1],
                                    r = [0];
                                    continue;
                                case 7:
                                    r = i.ops.pop(),
                                    i.trys.pop();
                                    continue;
                                default:
                                    if (!((a = (a = i.trys).length > 0 && a[a.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
                                        i.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && i.label < a[1]) {
                                        i.label = a[1],
                                        a = r;
                                        break
                                    }
                                    if (a && i.label < a[2]) {
                                        i.label = a[2],
                                        i.ops.push(r);
                                        break
                                    }
                                    a[2] && i.ops.pop(),
                                    i.trys.pop();
                                    continue
                                }
                                r = t.call(e, i)
                            } catch (e) {
                                r = [6, e],
                                n = 0
                            } finally {
                                o = a = 0
                            }
                        if (5 & r[0])
                            throw r[1];
                        return {
                            value: r[0] ? r[1] : void 0,
                            done: !0
                        }
                    }([r, s])
                }
            }
        }
        ;
        t.__esModule = !0,
        t.summarizeSFUClient = t.SFUClient = void 0;
        var r = o(1719)
          , i = o(188)
          , s = o(295)
          , c = o(1591)
          , l = o(1590)
          , u = o(588)
          , d = o(1586)
          , p = o(82)
          , h = o(561);
        function f(e) {
            return {
                video: new c.Video,
                screenVideo: new c.Video,
                enabled: {
                    audio: !1,
                    video: !1,
                    screen: !1,
                    sound: !1
                },
                muted: {
                    audio: !1,
                    video: !1,
                    screen: !1,
                    sound: !1
                },
                state: e,
                produceScores: {
                    audio: 10,
                    video: 10,
                    screen: 10,
                    sound: 10
                },
                overAllowed: !1,
                volume: 1,
                screenVolume: 1
            }
        }
        var m = function() {
            function e() {
                var e = this;
                this.serverURL = "",
                this.id = "",
                this.room = "",
                this.destroyed = !1,
                this.subscribed = {},
                this.actuallySubscribed = {},
                this.allowed = {},
                this.tracks = {},
                this.maxProducerSpatialLayer = p.VideoSpatialLayer.HighQuality,
                this.defaultMaxConsumerSpatialLayer = p.VideoSpatialLayer.LowQuality,
                this.maxConsumerSpatialLayer = {},
                this.producers = {},
                this.consumers = {},
                this.info = {},
                this.consumeQ = new p.ExecutionQueue,
                this.produceQ = new p.ExecutionQueue,
                this.finishedInitialStart = !1,
                this.resolveInitialStartPromise = function() {}
                ,
                this.initialStartPromise = new Promise((function(t) {
                    e.resolveInitialStartPromise = t
                }
                )),
                this.debugInitState = {
                    device: !1,
                    sendTransport: !1,
                    recvTransport: !1
                },
                this.debugInitializationError = !1,
                this.reloadingLock = !1,
                this.reloading = !1,
                this.onRemoteProduceScore = function(t) {
                    var o = t.id
                      , n = t.kind
                      , a = t.score
                      , r = e.info[o];
                    r && a !== r.produceScores[n] && (r.produceScores[n] = a,
                    e.onInfo(e.info))
                }
                ,
                this.onProducerPaused = function(t) {
                    var o = t.srcId
                      , n = t.tag;
                    e.setStreamEnabled(o, n, !1)
                }
                ,
                this.onProducerResumed = function(t) {
                    var o = t.srcId
                      , n = t.tag;
                    e.setStreamEnabled(o, n, !0)
                }
                ,
                this._onConsumeTry = function(t) {
                    var o = t.srcId
                      , r = t.srcStreamId
                      , i = t.producerIdMap;
                    e.consumeQ.run((function() {
                        return n(e, void 0, void 0, (function() {
                            return a(this, (function(e) {
                                switch (e.label) {
                                case 0:
                                    return [4, this._asyncOnConsumeTry(o, r, i)];
                                case 1:
                                    return e.sent(),
                                    [2]
                                }
                            }
                            ))
                        }
                        ))
                    }
                    ))
                }
                ,
                this._onConsumeClose = function(t) {
                    var o = t.srcId
                      , r = t.tag
                      , i = t.consumerId;
                    e.consumeQ.run((function() {
                        return n(e, void 0, void 0, (function() {
                            return a(this, (function(e) {
                                switch (e.label) {
                                case 0:
                                    return [4, this._asyncOnConsumeClose(o, r, i)];
                                case 1:
                                    return e.sent(),
                                    [2]
                                }
                            }
                            ))
                        }
                        ))
                    }
                    ))
                }
                ,
                this._onConsumeConnected = function(t) {
                    var o = t.srcId
                      , r = t.isConnected;
                    e.consumeQ.run((function() {
                        return n(e, void 0, void 0, (function() {
                            var e;
                            return a(this, (function(t) {
                                return (e = this.info[o]) ? (r ? e.state === l.ConsumerState.ProducerDisconnected && (e.state = l.ConsumerState.Consuming) : e.state = l.ConsumerState.ProducerDisconnected,
                                this.onInfo(this.info),
                                [2]) : [2]
                            }
                            ))
                        }
                        ))
                    }
                    ))
                }
            }
            return e.prototype.onInfo = function(e) {}
            ,
            e.prototype.onDisableVideo = function() {}
            ,
            e.prototype.onOverAllow = function(e, t) {}
            ,
            e.prototype.onReloadChange = function(e) {}
            ,
            e.prototype.onProduceClose = function(e) {}
            ,
            e.prototype.onSelfProduceScore = function(e) {}
            ,
            e.prototype.onConsumerCreate = function(e, t, o) {}
            ,
            e.prototype.onConsumerDestroy = function(e, t) {}
            ,
            e.prototype.onConsumerDisable = function(e, t, o) {}
            ,
            e.prototype.onConsumerEnable = function(e, t, o) {}
            ,
            e.prototype.start = function(e, t, o) {
                return n(this, void 0, void 0, (function() {
                    var n, c, l, d, p, h = this;
                    return a(this, (function(a) {
                        switch (a.label) {
                        case 0:
                            this.debugInitState = {
                                device: !1,
                                sendTransport: !1,
                                recvTransport: !1
                            },
                            this.debugInitializationError = !1,
                            this.serverURL = e,
                            this.id = t,
                            this.room = o,
                            n = function(e) {
                                h._reloadWithDelay(),
                                u.debugLogMajorEvent("SFU " + h.serverURL + " disconnect: " + e)
                            }
                            ,
                            this.signaling = new r.Signaling(e,o,n),
                            this.signaling.on("consume-try", this._onConsumeTry),
                            this.signaling.on("consume-close", this._onConsumeClose),
                            this.signaling.on("consume-connected", this._onConsumeConnected),
                            this.signaling.on("self-produce-score", this.onSelfProduceScore),
                            this.signaling.on("remote-produce-score", this.onRemoteProduceScore),
                            this.signaling.on("producer-paused", this.onProducerPaused),
                            this.signaling.on("producer-resumed", this.onProducerResumed),
                            this.signaling.on("disable-video", (function() {
                                h.onDisableVideo()
                            }
                            )),
                            this.signaling.on("over-allowed", (function(e) {
                                var t = e.over
                                  , o = e.limit;
                                h.onOverAllow(t, o)
                            }
                            )),
                            this.signaling.on("consume-over-allowed", (function(e) {
                                var t = h.info[e];
                                t && !t.overAllowed && (t.overAllowed = !0,
                                h.onInfo(h.info))
                            }
                            )),
                            this.device = new i.SignaledDevice(this.signaling),
                            c = "[SFU " + e + "]",
                            l = function(e) {
                                h._reloadWithDelay(),
                                u.debugLogMajorEvent("send transport on " + h.serverURL + " entered failure state: " + e)
                            }
                            ,
                            this.sendTransport = new s.SignaledTransport(this.signaling,this.device,c,l),
                            d = function(e) {
                                h._reloadWithDelay(),
                                u.debugLogMajorEvent("recv transport on " + h.serverURL + " entered failure state: " + e)
                            }
                            ,
                            this.recvTransport = new s.SignaledTransport(this.signaling,this.device,c,d),
                            a.label = 1;
                        case 1:
                            return a.trys.push([1, 3, , 4]),
                            [4, this.device.connect()];
                        case 2:
                            return a.sent(),
                            this.debugInitState.device = !0,
                            [3, 4];
                        case 3:
                            throw p = a.sent(),
                            console.error("error in sfu initialization on " + this.serverURL + ": " + p),
                            this.debugInitializationError = !0,
                            this._reloadWithDelay(),
                            p;
                        case 4:
                            return this.reloading = !1,
                            this.onReloadChange(this.reloading),
                            this.finishedInitialStart || (this.finishedInitialStart = !0,
                            this.resolveInitialStartPromise()),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype._reloadWithDelay = function() {
                var e, t, o = this;
                if (!this.signalingReconnectTimer) {
                    var n = (e = this.lastReloadTime,
                    t = 1e3 * (2 * Math.random() - 1),
                    void 0 === e || Date.now() - e > 3e4 ? 2e3 + t : 1e4 + t);
                    this.signalingReconnectTimer = window.setTimeout((function() {
                        delete o.signalingReconnectTimer,
                        o.reload()
                    }
                    ), n)
                }
            }
            ,
            e.prototype.destroy = function() {
                this.destroyed = !0,
                this._clear()
            }
            ,
            e.prototype._clear = function() {
                var e, t, o, n, a = this;
                window.clearTimeout(this.signalingReconnectTimer),
                delete this.signalingReconnectTimer,
                null === (e = this.sendTransport) || void 0 === e || e.destroy(),
                null === (t = this.recvTransport) || void 0 === t || t.destroy(),
                null === (o = this.device) || void 0 === o || o.destroy(),
                null === (n = this.signaling) || void 0 === n || n.destroy(),
                this.consumeQ.destroy(),
                this.produceQ.destroy(),
                Object.entries(this.producers).forEach((function(e) {
                    var t = e[0]
                      , o = e[1];
                    o && !o.closed && a.onProduceClose(t),
                    a._closeProducer(t)
                }
                )),
                Object.entries(this.consumers).forEach((function(e) {
                    var t = e[0]
                      , o = e[1];
                    Object.keys(o).forEach((function(e) {
                        a._closeConsumerUnsignaled(t, e)
                    }
                    ))
                }
                )),
                this.consumers = {}
            }
            ,
            e.prototype._DEBUG_disconnect = function() {
                this._clear()
            }
            ,
            e.prototype.reload = function() {
                return n(this, void 0, void 0, (function() {
                    var e, t, o, n = this;
                    return a(this, (function(a) {
                        switch (a.label) {
                        case 0:
                            if (this.reloadingLock || this.destroyed)
                                return [2];
                            this.lastReloadTime = Date.now(),
                            this.reloadingLock = !0,
                            this.reloading = !0,
                            this.onReloadChange(this.reloading),
                            console.log("[SFU " + this.serverURL + "] fully reloading..."),
                            this._clear(),
                            this.consumeQ = new p.ExecutionQueue,
                            this.produceQ = new p.ExecutionQueue,
                            Object.values(this.info).forEach((function(e) {
                                e.state = l.ConsumerState.ConnectingToSFU
                            }
                            )),
                            this.onInfo(this.info),
                            a.label = 1;
                        case 1:
                            return a.trys.push([1, 3, , 4]),
                            [4, this.start(this.serverURL, this.id, this.room)];
                        case 2:
                            return a.sent(),
                            [3, 4];
                        case 3:
                            return a.sent(),
                            this.reloadingLock = !1,
                            [2];
                        case 4:
                            return e = this.allowed,
                            t = this.subscribed,
                            o = this.tracks,
                            this.allowed = {},
                            this.subscribed = {},
                            this.tracks = {},
                            Object.entries(t).forEach((function(e) {
                                var t = e[0]
                                  , o = e[1];
                                n.subscribe(t, o)
                            }
                            )),
                            Object.keys(e).forEach((function(e) {
                                n.allow(e)
                            }
                            )),
                            Object.keys(o).forEach((function(e) {
                                var t = e
                                  , n = o[t];
                                n && d.localMediaManager.publishEvent(d.LocalMediaManagerEvent.ProduceStart, t, n)
                            }
                            )),
                            console.log("[SFU " + this.serverURL + "] fully reloaded!"),
                            this.reloadingLock = !1,
                            this.reloading = !1,
                            this.onReloadChange(this.reloading),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.allow = function(e) {
                var t;
                this.allowed[e] || (this.allowed[e] = !0,
                null === (t = this.signaling) || void 0 === t || t.emit("consume-allow", {
                    dstId: e,
                    allowed: !0
                }))
            }
            ,
            e.prototype.disallow = function(e) {
                var t;
                this.allowed[e] && (delete this.allowed[e],
                null === (t = this.signaling) || void 0 === t || t.emit("consume-allow", {
                    dstId: e,
                    allowed: !1
                }))
            }
            ,
            e.prototype.subscribe = function(e, t) {
                var o, r = this, i = null !== (o = this.subscribed[e]) && void 0 !== o ? o : new Set, s = new Set(Array.from(t).filter((function(e) {
                    return !i.has(e)
                }
                ))), c = new Set(Array.from(i).filter((function(e) {
                    return !t.has(e)
                }
                )));
                0 === s.size && 0 === c.size || (this.subscribed[e] = t,
                this.info[e] || (this.info[e] = f(l.ConsumerState.ConnectingToSFU),
                this.onInfo(this.info)),
                this.consumeQ.run((function() {
                    return n(r, void 0, void 0, (function() {
                        return a(this, (function(t) {
                            switch (t.label) {
                            case 0:
                                return [4, this._asyncSubscribe(e, s, c)];
                            case 1:
                                return t.sent(),
                                [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                )))
            }
            ,
            e.prototype.unsubscribe = function(e) {
                var t = this;
                this.subscribed[e] && (delete this.subscribed[e],
                this.consumeQ.run((function() {
                    return n(t, void 0, void 0, (function() {
                        return a(this, (function(t) {
                            switch (t.label) {
                            case 0:
                                return [4, this._asyncUnsubscribe(e)];
                            case 1:
                                return t.sent(),
                                [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                )))
            }
            ,
            e.prototype._asyncSubscribe = function(e, t, o) {
                var r;
                return n(this, void 0, void 0, (function() {
                    var n, i = this;
                    return a(this, (function(a) {
                        switch (a.label) {
                        case 0:
                            return this.actuallySubscribed[e] = !0,
                            [4, Promise.all(Array.from(o, (function(t) {
                                return i._asyncCloseConsumer(e, t)
                            }
                            )))];
                        case 1:
                            return a.sent(),
                            0 === t.size || ((n = this.info[e]) ? n.state = l.ConsumerState.Consuming : this.info[e] = f(l.ConsumerState.Consuming),
                            this.onInfo(this.info),
                            null === (r = this.signaling) || void 0 === r || r.emit("consume-request", {
                                srcId: e,
                                srcStreamId: this.room,
                                requested: !0
                            })),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype._asyncUnsubscribe = function(e) {
                var t, o, r;
                return n(this, void 0, void 0, (function() {
                    var n, i, s = this;
                    return a(this, (function(a) {
                        switch (a.label) {
                        case 0:
                            delete this.actuallySubscribed[e],
                            delete this.maxConsumerSpatialLayer[e],
                            n = this.info[e],
                            null === (t = null == n ? void 0 : n.video) || void 0 === t || t.clear(),
                            null === (o = null == n ? void 0 : n.screenVideo) || void 0 === o || o.clear(),
                            delete this.info[e],
                            this.onInfo(this.info),
                            a.label = 1;
                        case 1:
                            return a.trys.push([1, 3, , 4]),
                            [4, null === (r = this.signaling) || void 0 === r ? void 0 : r.sendWithResponse("consume-request", {
                                srcId: e,
                                srcStreamId: this.room,
                                requested: !1
                            }, 250)];
                        case 2:
                            return a.sent(),
                            [3, 4];
                        case 3:
                            return a.sent(),
                            console.warn("consume-request for unsubscribe to " + e + " failed"),
                            [3, 4];
                        case 4:
                            return (i = this.consumers[e]) && (Object.keys(i).forEach((function(t) {
                                s._closeConsumerUnsignaled(e, t)
                            }
                            )),
                            delete this.consumers[e]),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype._asyncOnConsumeTry = function(e, t, o) {
                var r, i;
                return n(this, void 0, void 0, (function() {
                    var n, s, c, u, d, p, h, f, m = this;
                    return a(this, (function(v) {
                        switch (v.label) {
                        case 0:
                            if (!(n = this.subscribed[e]) || !this.actuallySubscribed[e])
                                return [2];
                            s = function(n) {
                                var s, l, u, d, p;
                                return a(this, (function(a) {
                                    switch (a.label) {
                                    case 0:
                                        if (!(s = o[n]))
                                            return [2, "continue"];
                                        if ((l = null === (r = c.consumers[e]) || void 0 === r ? void 0 : r[n]) && !l.closed && l.producerId === s)
                                            return [2, "continue"];
                                        u = "video" === n ? c._getMaxConsumerSpatialLayer(e, n) : void 0,
                                        a.label = 1;
                                    case 1:
                                        if (a.trys.push([1, 9, , 10]),
                                        !c.recvTransport)
                                            return [3, 8];
                                        if (c.recvTransport.created)
                                            return [3, 6];
                                        a.label = 2;
                                    case 2:
                                        return a.trys.push([2, 4, , 5]),
                                        [4, c.recvTransport.connect("recv")];
                                    case 3:
                                        return a.sent(),
                                        [3, 5];
                                    case 4:
                                        return a.sent(),
                                        c._reloadWithDelay(),
                                        [2, {
                                            value: !1
                                        }];
                                    case 5:
                                        c.debugInitState.recvTransport = !0,
                                        a.label = 6;
                                    case 6:
                                        return [4, null === (i = c.recvTransport) || void 0 === i ? void 0 : i.consume(e, t, n, u, (function(t) {
                                            m.setStreamEnabled(e, n, !t)
                                        }
                                        ))];
                                    case 7:
                                        d = a.sent(),
                                        c._addConsumer(e, n, d),
                                        a.label = 8;
                                    case 8:
                                        return [3, 10];
                                    case 9:
                                        return p = a.sent(),
                                        console.error("Failed to consume " + n + " player=" + e + " producerID=" + s + ":", p),
                                        c.setStreamEnabled(e, n, !1),
                                        [3, 10];
                                    case 10:
                                        return [2]
                                    }
                                }
                                ))
                            }
                            ,
                            c = this,
                            u = 0,
                            d = Array.from(n),
                            v.label = 1;
                        case 1:
                            return u < d.length ? (p = d[u],
                            [5, s(p)]) : [3, 4];
                        case 2:
                            if ("object" == typeof (h = v.sent()))
                                return [2, h.value];
                            v.label = 3;
                        case 3:
                            return u++,
                            [3, 1];
                        case 4:
                            return (f = this.info[e]) ? (f.state = l.ConsumerState.Connected,
                            f.overAllowed = !1,
                            this.onInfo(this.info),
                            [2]) : [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype._asyncOnConsumeClose = function(e, t, o) {
                var r, i;
                return n(this, void 0, void 0, (function() {
                    var n;
                    return a(this, (function(a) {
                        return (n = null === (i = null === (r = this.consumers[e]) || void 0 === r ? void 0 : r[t]) || void 0 === i ? void 0 : i.id) && n === o && this._closeConsumerUnsignaled(e, t),
                        [2]
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.produceStart = function(e, t) {
                var o = this;
                return this.tracks[e] = t,
                this.produceQ.run((function() {
                    return n(o, void 0, void 0, (function() {
                        var o, n;
                        return a(this, (function(a) {
                            switch (a.label) {
                            case 0:
                                if (!this.sendTransport)
                                    return [2, !1];
                                if (!this.tracks[e] || this.tracks[e] !== t)
                                    return [2, !1];
                                if (this.sendTransport.created)
                                    return [3, 5];
                                a.label = 1;
                            case 1:
                                return a.trys.push([1, 3, , 4]),
                                [4, this.sendTransport.connect("send")];
                            case 2:
                                return a.sent(),
                                [3, 4];
                            case 3:
                                return a.sent(),
                                this._reloadWithDelay(),
                                [2, !1];
                            case 4:
                                this.debugInitState.sendTransport = !0,
                                a.label = 5;
                            case 5:
                                return [4, this.sendTransport.produce(e, h.getProducerConfig(e, t, d.localMediaManager.screenShareHighQuality))];
                            case 6:
                                if (o = a.sent(),
                                !this.tracks[e] || this.tracks[e] !== t)
                                    return o.close(),
                                    [2, !1];
                                if (this._addProducer(e, o),
                                "video" !== e)
                                    return [3, 10];
                                a.label = 7;
                            case 7:
                                return a.trys.push([7, 9, , 10]),
                                [4, o.setMaxSpatialLayer(this.maxProducerSpatialLayer)];
                            case 8:
                                return a.sent(),
                                [3, 10];
                            case 9:
                                return n = a.sent(),
                                console.error("Failed to set produce max spatial layer " + e + ":", n),
                                [3, 10];
                            case 10:
                                return "audio" !== e || d.localMediaManager.selfInfo.enabled.audio || d.localMediaManager.publishEvent(d.LocalMediaManagerEvent.ProducePause, e),
                                [2, !0]
                            }
                        }
                        ))
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.produceEnd = function(e) {
                var t = this;
                delete this.tracks[e],
                this.produceQ.run((function() {
                    return n(t, void 0, void 0, (function() {
                        var t;
                        return a(this, (function(o) {
                            return this._closeProducer(e),
                            null === (t = this.signaling) || void 0 === t || t.emit("produce-close", {
                                tag: e
                            }),
                            [2]
                        }
                        ))
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.produceResume = function(e) {
                var t = this;
                this.produceQ.run((function() {
                    return n(t, void 0, void 0, (function() {
                        var t, o, n;
                        return a(this, (function(a) {
                            return (t = this.producers[e]) ? (t.resume(),
                            null === (n = this.signaling) || void 0 === n || n.emit("produce-resume", {
                                tag: e
                            }),
                            [2]) : ((o = d.localMediaManager.getTracks()[e]) && (o.enabled = !0),
                            [2])
                        }
                        ))
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.producePause = function(e) {
                var t = this;
                this.produceQ.run((function() {
                    return n(t, void 0, void 0, (function() {
                        var t, o, n;
                        return a(this, (function(a) {
                            return (t = this.producers[e]) ? (t.pause(),
                            null === (n = this.signaling) || void 0 === n || n.emit("produce-pause", {
                                tag: e
                            }),
                            [2]) : ((o = d.localMediaManager.getTracks()[e]) && (o.enabled = !1),
                            [2])
                        }
                        ))
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.setMaxProducerSpatialLayer = function(e, t) {
                var o;
                return n(this, void 0, void 0, (function() {
                    var n;
                    return a(this, (function(a) {
                        switch (a.label) {
                        case 0:
                            this.maxProducerSpatialLayer = t,
                            a.label = 1;
                        case 1:
                            return a.trys.push([1, 3, , 4]),
                            [4, null === (o = this.producers[e]) || void 0 === o ? void 0 : o.setMaxSpatialLayer(t)];
                        case 2:
                            return a.sent(),
                            [3, 4];
                        case 3:
                            return n = a.sent(),
                            console.error("unable to set max spatial layer", n),
                            [3, 4];
                        case 4:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.setDefaultMaxConsumerSpatialLayer = function(e, t) {
                return n(this, void 0, void 0, (function() {
                    var o, n = this;
                    return a(this, (function(a) {
                        switch (a.label) {
                        case 0:
                            return t === this.defaultMaxConsumerSpatialLayer ? [2] : (this.defaultMaxConsumerSpatialLayer = t,
                            o = Object.entries(this.consumers).map((function(o) {
                                var a = o[0]
                                  , r = o[1];
                                if (!n.maxConsumerSpatialLayer[a] && r[e])
                                    return n._sendSetConsumeSpatialMessage(a, e, t)
                            }
                            )),
                            [4, Promise.all(o)]);
                        case 1:
                            return a.sent(),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.setMaxConsumerSpatialLayer = function(e, t, o) {
                var r;
                return n(this, void 0, void 0, (function() {
                    var n, i;
                    return a(this, (function(a) {
                        switch (a.label) {
                        case 0:
                            return this.maxConsumerSpatialLayer[e] === o ? [2] : (n = this._getMaxConsumerSpatialLayer(e, t),
                            void 0 === o ? delete this.maxConsumerSpatialLayer[e] : this.maxConsumerSpatialLayer[e] = o,
                            i = this._getMaxConsumerSpatialLayer(e, t),
                            n === i ? [2] : (null === (r = this.consumers[e]) || void 0 === r ? void 0 : r[t]) ? [4, this._sendSetConsumeSpatialMessage(e, t, null != o ? o : this.defaultMaxConsumerSpatialLayer)] : [2]);
                        case 1:
                            return a.sent(),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.requestSFUDebug = function(e, t) {
                var o;
                null === (o = this.signaling) || void 0 === o || o.emit("debug-sfu", {
                    srcIds: e,
                    srcStreamId: t
                })
            }
            ,
            e.prototype._getVideoElement = function(e, t) {
                if ("audio" === t || "video" === t)
                    return e.video;
                if ("sound" === t || "screen" === t)
                    return e.screenVideo;
                throw "Unexpected kind " + t
            }
            ,
            e.prototype.setStreamEnabled = function(e, t, o) {
                var n = this.info[e];
                if (n) {
                    n.enabled[t] = o,
                    this.onInfo(this.info);
                    var a = this._getVideoElement(n, t)
                      , r = !o
                      , i = l.ConsumerKindToMediaKind(t);
                    null == a || a.setMute("producer", i, r)
                }
                this._onConsumerEnableOrDisable(e, t)
            }
            ,
            e.prototype._addProducer = function(e, t) {
                this._closeProducer(e),
                this.producers[e] = t
            }
            ,
            e.prototype._closeProducer = function(e) {
                var t = this.producers[e];
                t && (t.close(),
                delete this.producers[e],
                this.onSelfProduceScore({
                    kind: e,
                    score: 10
                }))
            }
            ,
            e.prototype._addConsumer = function(e, t, o) {
                var n, a = this.consumers[e];
                a ? (this._closeConsumerUnsignaled(e, t, !1),
                a[t] = o) : this.consumers[e] = ((n = {})[t] = o,
                n),
                this.onConsumerCreate(e, t, o),
                this._onConsumerEnableOrDisable(e, t);
                var r = this.info[e];
                if (r) {
                    var i = this._getVideoElement(r, t);
                    i ? i.addTrack(o.track) : console.error("Expected video, can't add tracks")
                } else
                    console.error("Expected info, can't add tracks")
            }
            ,
            e.prototype._closeConsumerUnsignaled = function(e, t, o) {
                var n, a;
                void 0 === o && (o = !0);
                var r = null === (n = this.consumers[e]) || void 0 === n ? void 0 : n[t];
                if (r) {
                    var i = this.info[e];
                    if (i) {
                        var s = this._getVideoElement(i, t);
                        null == s || s.removeTrack(r.track),
                        o && (i.enabled[t] = !1),
                        i.produceScores[t] = 10,
                        this.onInfo(this.info)
                    }
                    r.close(),
                    null === (a = this.consumers[e]) || void 0 === a || delete a[t],
                    this.onConsumerDestroy(t, r)
                }
            }
            ,
            e.prototype.pauseConsumer = function(e, t) {
                var o, r = this, i = null === (o = this.consumers[e]) || void 0 === o ? void 0 : o[t];
                i && this.consumeQ.run((function() {
                    return n(r, void 0, void 0, (function() {
                        return a(this, (function(o) {
                            switch (o.label) {
                            case 0:
                                return [4, this._updateRemoteConsumer(e, t, "consume-pause")];
                            case 1:
                                return o.sent(),
                                this.onConsumerDisable(t, i, "consumer"),
                                [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.resumeConsumer = function(e, t) {
                var o, r = this, i = null === (o = this.consumers[e]) || void 0 === o ? void 0 : o[t];
                i && this.consumeQ.run((function() {
                    return n(r, void 0, void 0, (function() {
                        return a(this, (function(o) {
                            switch (o.label) {
                            case 0:
                                return [4, this._updateRemoteConsumer(e, t, "consume-resume")];
                            case 1:
                                return o.sent(),
                                this.onConsumerEnable(t, i, "consumer"),
                                [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype._updateRemoteConsumer = function(e, t, o, r) {
                var i, s;
                return n(this, void 0, void 0, (function() {
                    var n;
                    return a(this, (function(a) {
                        switch (a.label) {
                        case 0:
                            if (!(n = null === (i = this.consumers[e]) || void 0 === i ? void 0 : i[t]))
                                return [2];
                            a.label = 1;
                        case 1:
                            return a.trys.push([1, 3, , 4]),
                            [4, null === (s = this.signaling) || void 0 === s ? void 0 : s.sendWithResponse(o, {
                                srcId: e,
                                srcStreamId: this.room,
                                tag: t,
                                consumerId: n.id
                            }, r)];
                        case 2:
                            return a.sent(),
                            [3, 4];
                        case 3:
                            return a.sent(),
                            console.warn("failed to close " + t + " consumer on SFU for player " + e),
                            [3, 4];
                        case 4:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype._asyncCloseConsumer = function(e, t, o) {
                var r;
                return void 0 === o && (o = !0),
                n(this, void 0, void 0, (function() {
                    return a(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            return (null === (r = this.consumers[e]) || void 0 === r ? void 0 : r[t]) ? [4, this._updateRemoteConsumer(e, t, "consume-close", 250)] : [2];
                        case 1:
                            return n.sent(),
                            this._closeConsumerUnsignaled(e, t, o),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype._onConsumerEnableOrDisable = function(e, t) {
                var o, n, a = null === (o = this.info[e]) || void 0 === o ? void 0 : o.enabled[t], r = null === (n = this.consumers[e]) || void 0 === n ? void 0 : n[t];
                void 0 !== a && void 0 !== r && (a ? this.onConsumerEnable : this.onConsumerDisable)(t, r, "producer")
            }
            ,
            e.prototype._getMaxConsumerSpatialLayer = function(e, t) {
                var o;
                return null !== (o = this.maxConsumerSpatialLayer[e]) && void 0 !== o ? o : this.defaultMaxConsumerSpatialLayer
            }
            ,
            e.prototype._sendSetConsumeSpatialMessage = function(e, t, o) {
                var n;
                return null === (n = this.signaling) || void 0 === n ? void 0 : n.sendWithResponse("consume-set-spatial", {
                    srcId: e,
                    srcStreamId: this.room,
                    tag: t,
                    spatialLayer: null != o ? o : this.defaultMaxConsumerSpatialLayer
                }).then((function(e) {
                    e && console.error("consume-set-spatial response error:", e.error)
                }
                ))
            }
            ,
            e
        }();
        t.SFUClient = m,
        t.summarizeSFUClient = function(e) {
            var t, o;
            return n(this, void 0, void 0, (function() {
                var n, r, i, s, c, u;
                return a(this, (function(a) {
                    switch (a.label) {
                    case 0:
                        return n = {},
                        Object.entries(e.subscribed).forEach((function(e) {
                            var t = e[0]
                              , o = e[1];
                            n[t] = Array.from(o)
                        }
                        )),
                        r = {},
                        Object.entries(e.tracks).forEach((function(e) {
                            var t = e[0]
                              , o = e[1];
                            r[t] = o ? l.summarizeMediaStreamTrack(o) : void 0
                        }
                        )),
                        i = {},
                        Object.entries(e.producers).forEach((function(e) {
                            var t = e[0]
                              , o = e[1];
                            i[t] = o ? {
                                id: o.id,
                                closed: o.closed
                            } : void 0
                        }
                        )),
                        s = {},
                        Object.entries(e.consumers).forEach((function(e) {
                            var t = e[0]
                              , o = e[1]
                              , n = {};
                            Object.entries(o).forEach((function(e) {
                                var t = e[0]
                                  , o = e[1];
                                n[t] = o ? {
                                    id: o.id,
                                    producerId: o.producerId,
                                    closed: o.closed
                                } : void 0
                            }
                            )),
                            s[t] = n
                        }
                        )),
                        c = {},
                        Object.entries(e.info).forEach((function(e) {
                            var t = e[0]
                              , o = e[1];
                            c[t] = o ? l.summarizeConsumerInfo(o) : void 0
                        }
                        )),
                        u = {
                            sfuConnection: e.signaling ? e.signaling._summarize() : void 0,
                            reloading: e.reloading,
                            reloadingLock: e.reloadingLock,
                            subscribed: n,
                            actuallySubscribed: Object.keys(e.actuallySubscribed),
                            allowed: Object.keys(e.allowed),
                            tracks: r
                        },
                        [4, null === (t = e.recvTransport) || void 0 === t ? void 0 : t.summarize()];
                    case 1:
                        return u.recvTransport = a.sent(),
                        [4, null === (o = e.sendTransport) || void 0 === o ? void 0 : o.summarize()];
                    case 2:
                        return [2, (u.sendTransport = a.sent(),
                        u.producers = i,
                        u.consumers = s,
                        u.info = c,
                        u)]
                    }
                }
                ))
            }
            ))
        }
    },
    188: function(e, t, o) {
        var n = this && this.__createBinding || (Object.create ? function(e, t, o, n) {
            void 0 === n && (n = o),
            Object.defineProperty(e, n, {
                enumerable: !0,
                get: function() {
                    return t[o]
                }
            })
        }
        : function(e, t, o, n) {
            void 0 === n && (n = o),
            e[n] = t[o]
        }
        )
          , a = this && this.__setModuleDefault || (Object.create ? function(e, t) {
            Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            })
        }
        : function(e, t) {
            e.default = t
        }
        )
          , r = this && this.__importStar || function(e) {
            if (e && e.__esModule)
                return e;
            var t = {};
            if (null != e)
                for (var o in e)
                    "default" !== o && Object.prototype.hasOwnProperty.call(e, o) && n(t, e, o);
            return a(t, e),
            t
        }
          , i = this && this.__awaiter || function(e, t, o, n) {
            return new (o || (o = Promise))((function(a, r) {
                function i(e) {
                    try {
                        c(n.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function s(e) {
                    try {
                        c(n.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? a(e.value) : (t = e.value,
                    t instanceof o ? t : new o((function(e) {
                        e(t)
                    }
                    ))).then(i, s)
                }
                c((n = n.apply(e, t || [])).next())
            }
            ))
        }
          , s = this && this.__generator || function(e, t) {
            var o, n, a, r, i = {
                label: 0,
                sent: function() {
                    if (1 & a[0])
                        throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return r = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }
            ),
            r;
            function s(r) {
                return function(s) {
                    return function(r) {
                        if (o)
                            throw new TypeError("Generator is already executing.");
                        for (; i; )
                            try {
                                if (o = 1,
                                n && (a = 2 & r[0] ? n.return : r[0] ? n.throw || ((a = n.return) && a.call(n),
                                0) : n.next) && !(a = a.call(n, r[1])).done)
                                    return a;
                                switch (n = 0,
                                a && (r = [2 & r[0], a.value]),
                                r[0]) {
                                case 0:
                                case 1:
                                    a = r;
                                    break;
                                case 4:
                                    return i.label++,
                                    {
                                        value: r[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++,
                                    n = r[1],
                                    r = [0];
                                    continue;
                                case 7:
                                    r = i.ops.pop(),
                                    i.trys.pop();
                                    continue;
                                default:
                                    if (!((a = (a = i.trys).length > 0 && a[a.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
                                        i.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && i.label < a[1]) {
                                        i.label = a[1],
                                        a = r;
                                        break
                                    }
                                    if (a && i.label < a[2]) {
                                        i.label = a[2],
                                        i.ops.push(r);
                                        break
                                    }
                                    a[2] && i.ops.pop(),
                                    i.trys.pop();
                                    continue
                                }
                                r = t.call(e, i)
                            } catch (e) {
                                r = [6, e],
                                n = 0
                            } finally {
                                o = a = 0
                            }
                        if (5 & r[0])
                            throw r[1];
                        return {
                            value: r[0] ? r[1] : void 0,
                            done: !0
                        }
                    }([r, s])
                }
            }
        }
        ;
        t.__esModule = !0,
        t.SignaledDevice = void 0;
        var c = r(o(1708))
          , l = function() {
            function e(e) {
                this.signaling = e,
                this.device = new c.Device
            }
            return e.prototype.destroy = function() {}
            ,
            e.prototype.connect = function() {
                return i(this, void 0, void 0, (function() {
                    var e, t;
                    return s(this, (function(o) {
                        switch (o.label) {
                        case 0:
                            return e = new c.Device,
                            this.device = e,
                            [4, this.signaling.sendWithResponse("get-rtp-capabilities")];
                        case 1:
                            return t = o.sent().routerRtpCapabilities,
                            [2, e.load({
                                routerRtpCapabilities: t
                            })]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e
        }();
        t.SignaledDevice = l
    },
    295: function(e, t, o) {
        var n, a = this && this.__extends || (n = function(e, t) {
            return n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            ,
            n(e, t)
        }
        ,
        function(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), r = this && this.__assign || function() {
            return r = Object.assign || function(e) {
                for (var t, o = 1, n = arguments.length; o < n; o++)
                    for (var a in t = arguments[o])
                        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e
            }
            ,
            r.apply(this, arguments)
        }
        , i = this && this.__awaiter || function(e, t, o, n) {
            return new (o || (o = Promise))((function(a, r) {
                function i(e) {
                    try {
                        c(n.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function s(e) {
                    try {
                        c(n.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? a(e.value) : (t = e.value,
                    t instanceof o ? t : new o((function(e) {
                        e(t)
                    }
                    ))).then(i, s)
                }
                c((n = n.apply(e, t || [])).next())
            }
            ))
        }
        , s = this && this.__generator || function(e, t) {
            var o, n, a, r, i = {
                label: 0,
                sent: function() {
                    if (1 & a[0])
                        throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return r = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }
            ),
            r;
            function s(r) {
                return function(s) {
                    return function(r) {
                        if (o)
                            throw new TypeError("Generator is already executing.");
                        for (; i; )
                            try {
                                if (o = 1,
                                n && (a = 2 & r[0] ? n.return : r[0] ? n.throw || ((a = n.return) && a.call(n),
                                0) : n.next) && !(a = a.call(n, r[1])).done)
                                    return a;
                                switch (n = 0,
                                a && (r = [2 & r[0], a.value]),
                                r[0]) {
                                case 0:
                                case 1:
                                    a = r;
                                    break;
                                case 4:
                                    return i.label++,
                                    {
                                        value: r[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++,
                                    n = r[1],
                                    r = [0];
                                    continue;
                                case 7:
                                    r = i.ops.pop(),
                                    i.trys.pop();
                                    continue;
                                default:
                                    if (!((a = (a = i.trys).length > 0 && a[a.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
                                        i.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && i.label < a[1]) {
                                        i.label = a[1],
                                        a = r;
                                        break
                                    }
                                    if (a && i.label < a[2]) {
                                        i.label = a[2],
                                        i.ops.push(r);
                                        break
                                    }
                                    a[2] && i.ops.pop(),
                                    i.trys.pop();
                                    continue
                                }
                                r = t.call(e, i)
                            } catch (e) {
                                r = [6, e],
                                n = 0
                            } finally {
                                o = a = 0
                            }
                        if (5 & r[0])
                            throw r[1];
                        return {
                            value: r[0] ? r[1] : void 0,
                            done: !0
                        }
                    }([r, s])
                }
            }
        }
        ;
        t.__esModule = !0,
        t.SignaledTransport = t.TransportProduceError = void 0;
        var c = o(558)
          , l = ["disconnected", "failed"]
          , u = function(e) {
            function t(o) {
                var n = e.call(this, o) || this;
                return n.name = "TransportProduceError",
                Object.setPrototypeOf(n, t.prototype),
                n
            }
            return a(t, e),
            t
        }(Error);
        t.TransportProduceError = u;
        var d = function() {
            function e(e, t, o, n) {
                this.created = !1,
                this.onerror = function(e) {}
                ,
                this.onconnectionstatechange = function(e) {}
                ,
                this._signaling = e,
                this._signaledDevice = t,
                this.debugPrefix = o,
                this.onFailure = n
            }
            return e.prototype.destroy = function() {
                var e = this;
                this._transport && !this._transport.closed && (this._transport.close(),
                this._signaling.emit("transport-close", {
                    transportId: this._transport.id
                }),
                null === c.callstatsio || void 0 === c.callstatsio || c.callstatsio.then((function(t) {
                    var o, n;
                    t.sendFabricEvent(null === (o = e._transport._handler) || void 0 === o ? void 0 : o._pc, null === (n = t.fabricEvent) || void 0 === n ? void 0 : n.fabricTerminated, e._signaling.streamId)
                }
                ))),
                this.created = !1,
                null != this.reconnectTimer && window.clearTimeout(this.reconnectTimer)
            }
            ,
            e.prototype.connect = function(e) {
                return i(this, void 0, void 0, (function() {
                    var t, o, n, a = this;
                    return s(this, (function(r) {
                        switch (r.label) {
                        case 0:
                            return this.created ? (console.warn("connect() called on an already connected transport"),
                            [2]) : [4, this._signaling.sendWithResponse("transport-create", {
                                direction: e
                            })];
                        case 1:
                            if ("error"in (t = r.sent()))
                                throw new Error(t.error);
                            return "send" === e ? (this._transport = this._signaledDevice.device.createSendTransport(t),
                            o = "sendonly") : (this._transport = this._signaledDevice.device.createRecvTransport(t),
                            o = "receiveonly"),
                            null === c.callstatsio || void 0 === c.callstatsio || c.callstatsio.then((function(e) {
                                var t, n, r;
                                e.addNewFabric(null === (t = a._transport._handler) || void 0 === t ? void 0 : t._pc, a._signaling.serverURL, null === (n = e.fabricUsage) || void 0 === n ? void 0 : n.multiplex, a._signaling.streamId, {
                                    endpointType: null === (r = e.endpointType) || void 0 === r ? void 0 : r.server,
                                    transmissionDirection: o
                                }, (function(e, t) {
                                    "success" !== e && console.error("Callstats addNewFabric failed:", t)
                                }
                                ))
                            }
                            )),
                            this.created = !0,
                            n = this._transport.id,
                            this._transport.on("connect", (function(e, t, o) {
                                var r = e.dtlsParameters;
                                a._signaling.sendWithResponse("transport-connect", {
                                    transportId: n,
                                    dtlsParameters: r
                                }).then((function(e) {
                                    e && e.error ? o(e.error) : t()
                                }
                                )).catch((function(e) {
                                    console.error('sendWithResponse("transport-connect") failed: ' + e),
                                    o(e)
                                }
                                ))
                            }
                            )),
                            this._transport.on("produce", (function(e, t, o) {
                                var r = e.kind
                                  , i = e.rtpParameters
                                  , s = a._nextProduceTag;
                                if (!s) {
                                    var c = '"produce" event received with no nextProduceTag set!';
                                    return console.error(c),
                                    void o(c)
                                }
                                a._signaling.sendWithResponse("produce", {
                                    transportId: n,
                                    tag: s,
                                    kind: r,
                                    rtpParameters: i
                                }).then((function(e) {
                                    "error"in e ? o(e.error) : t(e)
                                }
                                )).catch((function(e) {
                                    console.error('sendWithResponse("produce") failed: ' + e),
                                    o(e)
                                }
                                ))
                            }
                            )),
                            this._transport.on("connectionstatechange", (function(e) {
                                var t, o, n;
                                console.log(a.debugPrefix + " transport connection state change", e, null === (n = null === (o = null === (t = a._transport) || void 0 === t ? void 0 : t._handler) || void 0 === o ? void 0 : o._pc) || void 0 === n ? void 0 : n.connectionState),
                                l.includes(e) ? null == a.reconnectTimer && (a.reconnectTimer = window.setTimeout((function() {
                                    var e;
                                    a.reconnectTimer = void 0;
                                    var t = null === (e = a._transport) || void 0 === e ? void 0 : e.connectionState;
                                    t && l.includes(t) && a.onFailure(t)
                                }
                                ), 1e4)) : window.clearTimeout(a.reconnectTimer)
                            }
                            )),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.produce = function(e, t) {
                return i(this, void 0, void 0, (function() {
                    var o, n, a;
                    return s(this, (function(r) {
                        switch (r.label) {
                        case 0:
                            if (void 0 === (o = this._transport))
                                throw Error("must call connect before produce");
                            if (this._nextProduceTag)
                                throw Error("can't interleave calls to produce");
                            this._nextProduceTag = e,
                            r.label = 1;
                        case 1:
                            return r.trys.push([1, 3, , 4]),
                            [4, o.produce(t)];
                        case 2:
                            return n = r.sent(),
                            this._nextProduceTag = void 0,
                            [2, n];
                        case 3:
                            throw a = r.sent(),
                            this._nextProduceTag = void 0,
                            new u(a.message);
                        case 4:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.consume = function(e, t, o, n, a) {
                return i(this, void 0, void 0, (function() {
                    var r, i, c;
                    return s(this, (function(s) {
                        switch (s.label) {
                        case 0:
                            if (void 0 === (r = this._transport))
                                throw Error("must call connect before consume");
                            return [4, this._signaling.sendWithResponse("consume", {
                                transportId: r.id,
                                srcId: e,
                                srcStreamId: t,
                                tag: o,
                                rtpCapabilities: this._signaledDevice.device.rtpCapabilities,
                                spatialLayer: n
                            })];
                        case 1:
                            if ("error"in (i = s.sent()))
                                throw Error(i.error);
                            return null == a || a(i.producerPaused),
                            [4, r.consume(i)];
                        case 2:
                            return c = s.sent(),
                            this._signaling.emit("consume-created", {
                                srcId: e,
                                srcStreamId: t,
                                tag: o,
                                consumerId: c.id
                            }),
                            [2, c]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype._getRtcConnectionStats = function() {
                var e;
                return i(this, void 0, void 0, (function() {
                    var t, o, n, a, r, i, c, l;
                    return s(this, (function(s) {
                        switch (s.label) {
                        case 0:
                            return s.trys.push([0, 2, , 3]),
                            [4, null === (e = this._transport) || void 0 === e ? void 0 : e.getStats()];
                        case 1:
                            return t = s.sent(),
                            [3, 3];
                        case 2:
                            return s.sent(),
                            console.warn("Failed to get stats from transport"),
                            [3, 3];
                        case 3:
                            return o = {},
                            n = {},
                            a = {},
                            null == t || t.forEach((function(e, t, o) {
                                var i = e.type;
                                "local-candidate" === i || "remote-candidate" === i ? n[t] = e : "candidate-pair" === i ? (a[t] = e,
                                e.selected && (r = t)) : "transport" === i && (r = e.selectedCandidatePairId)
                            }
                            )),
                            i = a[r || ""],
                            (c = n[(null == i ? void 0 : i.localCandidateId) || ""]) && (o["local-candidate"] = c.address + ":" + c.port + " " + c.protocol,
                            c.relatedAddress && (o.relay = c.relatedAddress + ":" + c.relatedPort)),
                            (l = n[(null == i ? void 0 : i.remoteCandidateId) || ""]) && (o["remote-candidate"] = l.address + ":" + l.port + " " + l.protocol,
                            l.relatedAddress && (o.relay = l.relatedAddress + ":" + l.relatedPort)),
                            [2, o]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.summarize = function() {
                var e, t;
                return i(this, void 0, void 0, (function() {
                    var o;
                    return s(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            o = {},
                            n.label = 1;
                        case 1:
                            return n.trys.push([1, 3, , 4]),
                            [4, this._getRtcConnectionStats()];
                        case 2:
                            return o = n.sent(),
                            [3, 4];
                        case 3:
                            return n.sent(),
                            console.error("Failed to get connection statistics for transport"),
                            [3, 4];
                        case 4:
                            return [2, r({
                                connectionState: null === (e = this._transport) || void 0 === e ? void 0 : e.connectionState,
                                closed: null === (t = this._transport) || void 0 === t ? void 0 : t.closed
                            }, o)]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e
        }();
        t.SignaledTransport = d
    },
    1719: function(e, t, o) {
        var n = this && this.__awaiter || function(e, t, o, n) {
            return new (o || (o = Promise))((function(a, r) {
                function i(e) {
                    try {
                        c(n.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function s(e) {
                    try {
                        c(n.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? a(e.value) : (t = e.value,
                    t instanceof o ? t : new o((function(e) {
                        e(t)
                    }
                    ))).then(i, s)
                }
                c((n = n.apply(e, t || [])).next())
            }
            ))
        }
          , a = this && this.__generator || function(e, t) {
            var o, n, a, r, i = {
                label: 0,
                sent: function() {
                    if (1 & a[0])
                        throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return r = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }
            ),
            r;
            function s(r) {
                return function(s) {
                    return function(r) {
                        if (o)
                            throw new TypeError("Generator is already executing.");
                        for (; i; )
                            try {
                                if (o = 1,
                                n && (a = 2 & r[0] ? n.return : r[0] ? n.throw || ((a = n.return) && a.call(n),
                                0) : n.next) && !(a = a.call(n, r[1])).done)
                                    return a;
                                switch (n = 0,
                                a && (r = [2 & r[0], a.value]),
                                r[0]) {
                                case 0:
                                case 1:
                                    a = r;
                                    break;
                                case 4:
                                    return i.label++,
                                    {
                                        value: r[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++,
                                    n = r[1],
                                    r = [0];
                                    continue;
                                case 7:
                                    r = i.ops.pop(),
                                    i.trys.pop();
                                    continue;
                                default:
                                    if (!((a = (a = i.trys).length > 0 && a[a.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
                                        i.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && i.label < a[1]) {
                                        i.label = a[1],
                                        a = r;
                                        break
                                    }
                                    if (a && i.label < a[2]) {
                                        i.label = a[2],
                                        i.ops.push(r);
                                        break
                                    }
                                    a[2] && i.ops.pop(),
                                    i.trys.pop();
                                    continue
                                }
                                r = t.call(e, i)
                            } catch (e) {
                                r = [6, e],
                                n = 0
                            } finally {
                                o = a = 0
                            }
                        if (5 & r[0])
                            throw r[1];
                        return {
                            value: r[0] ? r[1] : void 0,
                            done: !0
                        }
                    }([r, s])
                }
            }
        }
        ;
        t.__esModule = !0,
        t.Signaling = void 0;
        var r = o(590)
          , i = o(32)
          , s = function() {
            function e(e, t, o) {
                var s = this;
                this.streamId = "",
                this.serverURL = "",
                this.pendingResponses = new Set,
                this.onDisconnect = function(e) {
                    var t;
                    null === (t = s.onDisconnectCallback) || void 0 === t || t.call(s, e)
                }
                ,
                this.serverURL = e,
                this.streamId = t,
                this.onDisconnectCallback = o;
                var c = new r.Manager(e,{
                    autoConnect: !1,
                    transports: ["websocket"]
                });
                this._ws = c.socket("/", {
                    auth: function(e) {
                        e({
                            token: i.authTokenManager.latestToken(),
                            streamId: s.streamId
                        })
                    }
                }),
                this._ws.on("connect_error", (function(e) {
                    return n(s, void 0, void 0, (function() {
                        var t, o;
                        return a(this, (function(n) {
                            switch (n.label) {
                            case 0:
                                if ("bad auth" !== e.message)
                                    throw e;
                                return console.error("Signaling: bad auth"),
                                t = i.authTokenManager.waitForToken(),
                                o = new Promise((function(e) {
                                    return setTimeout(e, 2e3)
                                }
                                )),
                                [4, Promise.all([t, o])];
                            case 1:
                                return n.sent(),
                                this._ws.connect(),
                                [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                )),
                this._ws.on("disconnect", this.onDisconnect),
                i.authTokenManager.waitForToken().then((function(e) {
                    c.open(),
                    s._ws.open()
                }
                ))
            }
            return e.prototype.destroy = function() {
                this._ws.off("disconnect", this.onDisconnect),
                this._ws.disconnect(),
                this.pendingResponses.forEach((function(e) {
                    var t = e.reject
                      , o = e.rejectTimeout;
                    clearTimeout(o),
                    t()
                }
                ))
            }
            ,
            e.prototype.sendWithResponse = function(e, t, o) {
                return void 0 === o && (o = 15e3),
                n(this, void 0, void 0, (function() {
                    var n = this;
                    return a(this, (function(a) {
                        return [2, new Promise((function(a, r) {
                            var i = window.setTimeout((function() {
                                i = null,
                                n.pendingResponses.delete(s),
                                r("sendWithResponse for " + e + " timed out")
                            }
                            ), o)
                              , s = {
                                reject: function() {
                                    return r("Signaling instance destroyed before a response for " + e + " was received")
                                },
                                rejectTimeout: i
                            };
                            n.pendingResponses.add(s),
                            n._ws.emit(e, t, (function(e) {
                                null != i && (clearTimeout(i),
                                i = null,
                                n.pendingResponses.delete(s),
                                a(e))
                            }
                            ))
                        }
                        ))]
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.emit = function(e, t) {
                this._ws.emit(e, t)
            }
            ,
            e.prototype.on = function(e, t) {
                this._ws.on(e, t)
            }
            ,
            e.prototype._summarize = function() {
                return {
                    connected: this._ws.connected
                }
            }
            ,
            e
        }();
        t.Signaling = s
    },
    1591: function(e, t, o) {
        var n, a = this && this.__extends || (n = function(e, t) {
            return n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            ,
            n(e, t)
        }
        ,
        function(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        );
        t.__esModule = !0,
        t.Video = t.VideoEvent = void 0;
        var r, i = o(19), s = o(1590);
        !function(e) {
            e.AddTrack = "addTrack",
            e.RemoveTrack = "removeTrack"
        }(r = t.VideoEvent || (t.VideoEvent = {}));
        var c = function(e) {
            function t() {
                var t = e.call(this) || this;
                return t.muted = {
                    audio: new Set,
                    video: new Set
                },
                t.playRefCount = 0,
                t.isLocalSrc = !1,
                t.htmlElement = document.createElement("video"),
                t.htmlElement.setAttribute("playsinline", ""),
                t.htmlElement.setAttribute("webkit-playsinline", ""),
                t.clear(),
                t
            }
            return a(t, e),
            t.prototype._play = function() {
                this.htmlElement.autoplay = !0,
                this.htmlElement.play().catch(console.warn)
            }
            ,
            t.prototype._pause = function() {
                this.htmlElement.autoplay = !1,
                this.isLocalSrc || this.htmlElement.load()
            }
            ,
            t.prototype.playRef = function() {
                this.playRefCount += 1,
                this._play()
            }
            ,
            t.prototype.pauseRef = function() {
                this.playRefCount = Math.max(0, this.playRefCount - 1),
                0 === this.playRefCount && this._pause()
            }
            ,
            t.prototype.clear = function() {
                this.htmlElement.autoplay = !1,
                this.htmlElement.srcObject = null,
                this.htmlElement.load()
            }
            ,
            t.prototype.addLocalSrc = function(e, t) {
                e !== this.htmlElement.src && (this.htmlElement.src = e,
                this.htmlElement.poster = t || "",
                this.htmlElement.srcObject = null,
                this.isLocalSrc = !0,
                this.htmlElement.paused && this.htmlElement.load())
            }
            ,
            t.prototype.addTrack = function(e) {
                var t = this._getSrcObject();
                t.addTrack(e),
                this._dispatchMute(),
                this.publishEvent(r.AddTrack, t),
                this.htmlElement.paused && this.htmlElement.load()
            }
            ,
            t.prototype.removeTrack = function(e) {
                this._getSrcObject().removeTrack(e),
                this.publishEvent(r.RemoveTrack),
                "video" === e.kind && this.htmlElement.load(),
                e.onmute = function() {}
                ,
                e.onunmute = function() {}
            }
            ,
            t.prototype.setMute = function(e, t, o) {
                o ? this.muted[t].add(e) : this.muted[t].delete(e),
                this._dispatchMute()
            }
            ,
            t.prototype.summarize = function() {
                var e = {
                    autoplay: this.htmlElement.autoplay,
                    paused: this.htmlElement.paused,
                    ended: this.htmlElement.ended,
                    volume: this.htmlElement.volume,
                    readyState: this.htmlElement.readyState
                }
                  , t = this.htmlElement.srcObject;
                return t && (e.audioTracks = t.getAudioTracks().map(s.summarizeMediaStreamTrack),
                e.videoTracks = t.getVideoTracks().map(s.summarizeMediaStreamTrack)),
                e
            }
            ,
            t.prototype.isRearFacing = function() {
                var e, t = this._getSrcObject().getVideoTracks()[0];
                return !!t && (null === (e = t.getCapabilities().facingMode) || void 0 === e ? void 0 : e.includes("environment"))
            }
            ,
            t.prototype._getSrcObject = function() {
                var e = this.htmlElement.srcObject;
                return e || (e = new MediaStream,
                this.htmlElement.srcObject = e,
                this.htmlElement.src = ""),
                e
            }
            ,
            t.prototype._dispatchMute = function() {
                var e = this;
                Object.entries(this.muted).forEach((function(t) {
                    var o = t[0]
                      , n = t[1]
                      , a = e._getSrcObject()
                      , r = "audio" === o ? a.getAudioTracks() : a.getVideoTracks()
                      , i = 0 === n.size;
                    r.forEach((function(e) {
                        e.enabled = i
                    }
                    ))
                }
                ))
            }
            ,
            t
        }(i.GatherEventEmitter);
        t.Video = c
    },
    561: function(e, t, o) {
        var n = this && this.__assign || function() {
            return n = Object.assign || function(e) {
                for (var t, o = 1, n = arguments.length; o < n; o++)
                    for (var a in t = arguments[o])
                        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e
            }
            ,
            n.apply(this, arguments)
        }
        ;
        t.__esModule = !0,
        t.getProducerConfig = t.allConfig = t.config = void 0;
        var a = o(82)
          , r = {
            environment: "prod",
            metricsOutput: "honeycomb",
            metricsSampleRate: 100,
            metricsUploadRateMS: 3e4,
            exposePeerManager: !1,
            callstatsAppId: void 0,
            callstatsAppSecret: void 0,
            watchRTCApiKey: void 0
        }
          , i = {
            prod: r,
            staging: n(n({}, r), {
                environment: "staging",
                metricsSampleRate: 10,
                exposePeerManager: !0,
                callstatsAppId: "",
                callstatsAppSecret: "tlSQoCyI5vy5:902w/RaU7QlNkYFxeb4xtB3C6Y0lGy334CRU0bI/K8I=",
                watchRTCApiKey: "aee6aaed-0301-4638-85ca-5dfd0877d889"
            }),
            dev: n(n({}, r), {
                environment: "dev",
                metricsOutput: "console",
                metricsSampleRate: 1,
                exposePeerManager: !0,
                callstatsAppId: "",
                callstatsAppSecret: "tlSQoCyI5vy5:902w/RaU7QlNkYFxeb4xtB3C6Y0lGy334CRU0bI/K8I=",
                watchRTCApiKey: "aee6aaed-0301-4638-85ca-5dfd0877d889"
            })
        };
        if (!("prod"in i))
            throw Error("invalid ENVIRONMENT value: prod");
        t.config = i.prod,
        t.allConfig = i,
        t.getProducerConfig = function(e, t, o) {
            var r = {
                track: t,
                stopTracks: !1
            };
            switch (e) {
            case "audio":
                return n(n({}, r), {
                    encodings: [{
                        dtx: !0
                    }],
                    zeroRtpOnPause: !0
                });
            case "video":
                return n(n({}, r), {
                    encodings: a.VIDEO_ENCODINGS
                });
            case "screen":
                return n(n({}, r), {
                    encodings: [Object.assign({
                        dtx: !0
                    }, o ? {} : {
                        maxBitrate: 1e6
                    })]
                });
            case "sound":
                return n(n({}, r), {
                    encodings: [{
                        dtx: !0
                    }]
                })
            }
        }
    },
    47: function(e, t, o) {
        var n = this && this.__createBinding || (Object.create ? function(e, t, o, n) {
            void 0 === n && (n = o),
            Object.defineProperty(e, n, {
                enumerable: !0,
                get: function() {
                    return t[o]
                }
            })
        }
        : function(e, t, o, n) {
            void 0 === n && (n = o),
            e[n] = t[o]
        }
        );
        t.__esModule = !0,
        t.videoMetricsManager = t.AudioPlugin = t.VideoEvent = t.Video = t.ProduceState = t.ConsumerState = t.Signaling = t.LocalMediaManagerEvent = t.localMediaManager = t.peerManager = void 0,
        n(t, o(1589), "peerManager");
        var a = o(1586);
        n(t, a, "localMediaManager"),
        n(t, a, "LocalMediaManagerEvent"),
        n(t, o(1719), "Signaling");
        var r = o(1590);
        n(t, r, "ConsumerState"),
        n(t, r, "ProduceState");
        var i = o(1591);
        n(t, i, "Video"),
        n(t, i, "VideoEvent"),
        n(t, o(1987), "AudioPlugin"),
        n(t, o(1690), "metricsManager", "videoMetricsManager")
    },
    589: function(e, t, o) {
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        t.__esModule = !0,
        t.ConsumerStateMetricsCollector = void 0;
        var a = n(o(672))
          , r = o(896)
          , i = {
            failToConnectCount: 0,
            totalSubscribedTimeMS: 0,
            overAllowedCount: 0
        }
          , s = function() {
            function e(e) {
                var t = this;
                void 0 === e && (e = 2e4),
                this._metrics = a.default(i),
                this._consumerStates = {},
                this._latestConsumerInfo = {},
                this._lastSubscribedUpdateTime = 0,
                this._started = !1,
                this.consumerInfoListener = function(e) {
                    t._latestConsumerInfo = e,
                    t._started && (t._updateTime(),
                    t._updateConsumerStates(e))
                }
                ,
                this._maxTimeToConnectMS = e
            }
            return e.prototype.start = function() {
                this._started || (this._started = !0,
                this.resetCollection(),
                this._updateConsumerStates(this._latestConsumerInfo))
            }
            ,
            e.prototype.stop = function() {
                this._started && (this._started = !1,
                Object.values(this._consumerStates).forEach((function(e) {
                    e.destroy()
                }
                )),
                this._consumerStates = {})
            }
            ,
            e.prototype.onAVIssue = function(e) {}
            ,
            e.prototype.outputMetrics = function() {
                return this._started ? (this._updateTime(),
                this._metrics) : null
            }
            ,
            e.prototype.resetCollection = function() {
                this._lastSubscribedUpdateTime = Date.now(),
                this._metrics = a.default(i)
            }
            ,
            e.prototype._updateConsumerStates = function(e) {
                var t = this
                  , o = function() {
                    t._metrics.overAllowedCount++
                };
                Object.entries(e).forEach((function(e) {
                    var n = e[0]
                      , a = e[1]
                      , i = t._consumerStates[n]
                      , s = a.state
                      , c = a.overAllowed;
                    i ? (i.setState(s),
                    i.setOverAllowed(c)) : t._consumerStates[n] = new r.ConsumerStateWrapper(s,c,t._maxTimeToConnectMS,(function(e) {
                        return function(e, o) {
                            t._metrics.failToConnectCount++,
                            o || t.onAVIssue({
                                issueType: "Stuck connecting to video servers",
                                srcId: e
                            })
                        }(n, e)
                    }
                    ),o)
                }
                )),
                Object.entries(this._consumerStates).forEach((function(o) {
                    var n = o[0]
                      , a = o[1];
                    n in e || (a.destroy(),
                    delete t._consumerStates[n])
                }
                ))
            }
            ,
            e.prototype._updateTime = function() {
                var e = Date.now()
                  , t = Object.keys(this._consumerStates).length;
                this._metrics.totalSubscribedTimeMS += (e - this._lastSubscribedUpdateTime) * t,
                this._lastSubscribedUpdateTime = e
            }
            ,
            e
        }();
        t.ConsumerStateMetricsCollector = s
    },
    896: (e,t,o)=>{
        t.__esModule = !0,
        t.ConsumerStateWrapper = void 0;
        var n = o(1590)
          , a = [n.ConsumerState.Connected, n.ConsumerState.ProducerDisconnected]
          , r = function() {
            function e(e, t, o, n, r) {
                var i = this;
                this._state = e,
                this._overAllowed = t,
                this._maxTimeToGoodStateMS = o,
                this._onBadStateTimeout = function() {
                    i._clearBadStateTimer(),
                    n(i._overAllowed)
                }
                ,
                this._onOverAllowed = r,
                a.includes(this._state) || this._startBadStateTimer(),
                this._overAllowed && this._onOverAllowed()
            }
            return e.prototype.setOverAllowed = function(e) {
                e && !this._overAllowed && this._onOverAllowed(),
                this._overAllowed = e
            }
            ,
            e.prototype.setState = function(e) {
                if (this._state !== e) {
                    this._state = e;
                    var t = a.includes(this._state);
                    t && void 0 !== this._badStateTimer ? this._clearBadStateTimer() : t || void 0 !== this._badStateTimer || this._startBadStateTimer()
                }
            }
            ,
            e.prototype.destroy = function() {
                this._clearBadStateTimer()
            }
            ,
            e.prototype._startBadStateTimer = function() {
                void 0 === this._badStateTimer && (this._badStateTimer = window.setTimeout(this._onBadStateTimeout, this._maxTimeToGoodStateMS))
            }
            ,
            e.prototype._clearBadStateTimer = function() {
                window.clearTimeout(this._badStateTimer),
                delete this._badStateTimer
            }
            ,
            e
        }();
        t.ConsumerStateWrapper = r
    }
    ,
    1690: function(e, t, o) {
        var n = this && this.__assign || function() {
            return n = Object.assign || function(e) {
                for (var t, o = 1, n = arguments.length; o < n; o++)
                    for (var a in t = arguments[o])
                        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e
            }
            ,
            n.apply(this, arguments)
        }
          , a = this && this.__awaiter || function(e, t, o, n) {
            return new (o || (o = Promise))((function(a, r) {
                function i(e) {
                    try {
                        c(n.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function s(e) {
                    try {
                        c(n.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? a(e.value) : (t = e.value,
                    t instanceof o ? t : new o((function(e) {
                        e(t)
                    }
                    ))).then(i, s)
                }
                c((n = n.apply(e, t || [])).next())
            }
            ))
        }
          , r = this && this.__generator || function(e, t) {
            var o, n, a, r, i = {
                label: 0,
                sent: function() {
                    if (1 & a[0])
                        throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return r = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }
            ),
            r;
            function s(r) {
                return function(s) {
                    return function(r) {
                        if (o)
                            throw new TypeError("Generator is already executing.");
                        for (; i; )
                            try {
                                if (o = 1,
                                n && (a = 2 & r[0] ? n.return : r[0] ? n.throw || ((a = n.return) && a.call(n),
                                0) : n.next) && !(a = a.call(n, r[1])).done)
                                    return a;
                                switch (n = 0,
                                a && (r = [2 & r[0], a.value]),
                                r[0]) {
                                case 0:
                                case 1:
                                    a = r;
                                    break;
                                case 4:
                                    return i.label++,
                                    {
                                        value: r[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++,
                                    n = r[1],
                                    r = [0];
                                    continue;
                                case 7:
                                    r = i.ops.pop(),
                                    i.trys.pop();
                                    continue;
                                default:
                                    if (!((a = (a = i.trys).length > 0 && a[a.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
                                        i.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && i.label < a[1]) {
                                        i.label = a[1],
                                        a = r;
                                        break
                                    }
                                    if (a && i.label < a[2]) {
                                        i.label = a[2],
                                        i.ops.push(r);
                                        break
                                    }
                                    a[2] && i.ops.pop(),
                                    i.trys.pop();
                                    continue
                                }
                                r = t.call(e, i)
                            } catch (e) {
                                r = [6, e],
                                n = 0
                            } finally {
                                o = a = 0
                            }
                        if (5 & r[0])
                            throw r[1];
                        return {
                            value: r[0] ? r[1] : void 0,
                            done: !0
                        }
                    }([r, s])
                }
            }
        }
          , i = this && this.__spreadArray || function(e, t) {
            for (var o = 0, n = t.length, a = e.length; o < n; o++,
            a++)
                e[a] = t[o];
            return e
        }
          , s = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        t.__esModule = !0,
        t.metricsManager = void 0;
        var c = s(o(895))
          , l = o(32)
          , u = o(18)
          , d = o(19)
          , p = o(561)
          , h = o(589)
          , f = o(557)
          , m = function() {
            function e() {
                var e = this;
                this._avIssueListeners = [],
                this._numLoggedAVIssues = 0,
                this._dispatchAVIssue = function(t) {
                    var o, a, r, i, s = null === (o = e.getSelfInfo) || void 0 === o ? void 0 : o.call(e);
                    if (s) {
                        var c = [];
                        Object.entries(s.enabled).forEach((function(e) {
                            var t = e[0];
                            e[1] && c.push(s.produceScores[t])
                        }
                        )),
                        r = u.getStreamQualityScore(c)
                    }
                    var l = null === (a = e.getConsumerInfo) || void 0 === a ? void 0 : a.call(e)[t.srcId];
                    if (l) {
                        var d = [];
                        Object.entries(l.enabled).forEach((function(e) {
                            var t = e[0];
                            e[1] && d.push(l.produceScores[t])
                        }
                        )),
                        i = u.getStreamQualityScore(d)
                    }
                    var p = n(n({}, t), {
                        selfStreamQualityScore: r,
                        srcStreamQualityScore: i
                    });
                    e._avIssueListeners.forEach((function(e) {
                        return e(p)
                    }
                    ))
                }
                ,
                this._uploadMetrics = function() {
                    return a(e, void 0, void 0, (function() {
                        var e, t, o;
                        return r(this, (function(n) {
                            switch (n.label) {
                            case 0:
                                return this._playerId ? (e = this._collectors.map((function(e) {
                                    var t = e.outputMetrics();
                                    return e.resetCollection(),
                                    t
                                }
                                )),
                                e.every((function(e) {
                                    return !e || Object.values(e).every((function(e) {
                                        return !e
                                    }
                                    ))
                                }
                                )) ? [2] : (t = {
                                    environment: p.config.environment,
                                    userAgent: navigator.userAgent,
                                    playerId: this._playerId,
                                    spaceId: this._spaceId
                                },
                                Object.assign.apply(Object, i([t], e)),
                                "console" !== p.config.metricsOutput ? [3, 1] : (console.log("video-client metrics:", t),
                                [3, 3]))) : [2];
                            case 1:
                                return "honeycomb" !== p.config.metricsOutput ? [3, 3] : Math.random() >= 1 / p.config.metricsSampleRate ? [2] : [4, l.authTokenManager.getToken()];
                            case 2:
                                if (!(o = n.sent()))
                                    return [2];
                                c.default.post(window.location.origin + "/api/proxyClientMetrics", {
                                    authToken: o,
                                    metrics: t,
                                    sampleRate: p.config.metricsSampleRate,
                                    dataset: "video-client"
                                }, {
                                    timeout: 5e3
                                }).catch((function(e) {
                                    return console.error("Error sending video metrics:", e, e.response)
                                }
                                )),
                                n.label = 3;
                            case 3:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                this._logAVIssue = function(t) {
                    e._numLoggedAVIssues < 5 && (u.logMetricsEvent(d.MetricsEventName.AV_ISSUE, {
                        issueType: t.issueType,
                        srcId: t.srcId,
                        selfStreamQualityScore: t.selfStreamQualityScore,
                        srcStreamQualityScore: t.srcStreamQualityScore
                    }),
                    e._numLoggedAVIssues++)
                }
                ,
                this._printAVIssueToConsole = function(e) {
                    console.error("AV issue:", e)
                }
                ,
                this.addAVIssueListener(this._logAVIssue),
                this.addAVIssueListener(this._printAVIssueToConsole),
                this.consumerStateMetricsCollector = new h.ConsumerStateMetricsCollector,
                this.webRtcMetricsCollector = new f.WebRtcMetricsCollector,
                this._collectors = [this.consumerStateMetricsCollector, this.webRtcMetricsCollector],
                this._collectors.forEach((function(t) {
                    t.onAVIssue = e._dispatchAVIssue
                }
                )),
                this.startCollection(),
                this._uploadMetricsInterval = window.setInterval(this._uploadMetrics, p.config.metricsUploadRateMS)
            }
            return e.prototype.setPlayerId = function(e) {
                this._playerId = e
            }
            ,
            e.prototype.setSpaceId = function(e) {
                this._spaceId = e
            }
            ,
            e.prototype.startCollection = function() {
                this._collectors.forEach((function(e) {
                    return e.start()
                }
                ))
            }
            ,
            e.prototype.stopCollection = function() {
                this._collectors.forEach((function(e) {
                    return e.stop()
                }
                ))
            }
            ,
            e.prototype.addAVIssueListener = function(e) {
                this._avIssueListeners.push(e)
            }
            ,
            e.prototype.clearAVIssueListener = function(e) {
                var t = this._avIssueListeners.indexOf(e);
                t >= 0 && this._avIssueListeners.splice(t, 1)
            }
            ,
            e.instance = new e,
            e
        }();
        t.metricsManager = m.instance
    },
    557: function(e, t, o) {
        var n = this && this.__awaiter || function(e, t, o, n) {
            return new (o || (o = Promise))((function(a, r) {
                function i(e) {
                    try {
                        c(n.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function s(e) {
                    try {
                        c(n.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? a(e.value) : (t = e.value,
                    t instanceof o ? t : new o((function(e) {
                        e(t)
                    }
                    ))).then(i, s)
                }
                c((n = n.apply(e, t || [])).next())
            }
            ))
        }
          , a = this && this.__generator || function(e, t) {
            var o, n, a, r, i = {
                label: 0,
                sent: function() {
                    if (1 & a[0])
                        throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return r = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }
            ),
            r;
            function s(r) {
                return function(s) {
                    return function(r) {
                        if (o)
                            throw new TypeError("Generator is already executing.");
                        for (; i; )
                            try {
                                if (o = 1,
                                n && (a = 2 & r[0] ? n.return : r[0] ? n.throw || ((a = n.return) && a.call(n),
                                0) : n.next) && !(a = a.call(n, r[1])).done)
                                    return a;
                                switch (n = 0,
                                a && (r = [2 & r[0], a.value]),
                                r[0]) {
                                case 0:
                                case 1:
                                    a = r;
                                    break;
                                case 4:
                                    return i.label++,
                                    {
                                        value: r[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++,
                                    n = r[1],
                                    r = [0];
                                    continue;
                                case 7:
                                    r = i.ops.pop(),
                                    i.trys.pop();
                                    continue;
                                default:
                                    if (!((a = (a = i.trys).length > 0 && a[a.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
                                        i.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && i.label < a[1]) {
                                        i.label = a[1],
                                        a = r;
                                        break
                                    }
                                    if (a && i.label < a[2]) {
                                        i.label = a[2],
                                        i.ops.push(r);
                                        break
                                    }
                                    a[2] && i.ops.pop(),
                                    i.trys.pop();
                                    continue
                                }
                                r = t.call(e, i)
                            } catch (e) {
                                r = [6, e],
                                n = 0
                            } finally {
                                o = a = 0
                            }
                        if (5 & r[0])
                            throw r[1];
                        return {
                            value: r[0] ? r[1] : void 0,
                            done: !0
                        }
                    }([r, s])
                }
            }
        }
          , r = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        t.__esModule = !0,
        t.WebRtcMetricsCollector = void 0;
        var i = r(o(715))
          , s = r(o(672))
          , c = {
            missingPacketsEventCount: 0,
            totalLifespanMS: 0
        }
          , l = {
            audio: s.default(c),
            video: s.default(c),
            screen: s.default(c),
            sound: s.default(c)
        };
        function u(e) {
            return n(this, void 0, void 0, (function() {
                var t, o, n;
                return a(this, (function(a) {
                    switch (a.label) {
                    case 0:
                        return a.trys.push([0, 2, , 3]),
                        [4, e.getStats()];
                    case 1:
                        return t = a.sent(),
                        [3, 3];
                    case 2:
                        return o = a.sent(),
                        console.error("getStats error:", o),
                        [2];
                    case 3:
                        return t.forEach((function(e) {
                            "inbound-rtp" === e.type && (void 0 !== n && void 0 !== e.packetsReceived && console.error("Consumer unexpectedly has multiple inbound-rtp stats"),
                            n = e.packetsReceived)
                        }
                        )),
                        [2, n]
                    }
                }
                ))
            }
            ))
        }
        var d = function() {
            function e() {
                var e = this;
                this._consumers = {
                    audio: {},
                    video: {},
                    screen: {},
                    sound: {}
                },
                this._numUnmutedConsumers = {
                    audio: 0,
                    video: 0,
                    screen: 0,
                    sound: 0
                },
                this._metrics = s.default(l),
                this._lastLifespanUpdateTime = 0,
                this._started = !1,
                this.consumerCreateListener = function(t, o, n) {
                    e._consumers[o][n.id] && (console.error("Created consumers with the same ID " + n.id),
                    e._deleteConsumer(o, n.id)),
                    e._updateTime();
                    var a = {
                        consumer: n,
                        playerId: t,
                        missingPacketsLastInterval: !1,
                        lastPacketsReceived: 0,
                        muted: new Set
                    };
                    e._consumers[o][n.id] = a,
                    e._startConsumerStatsInterval(o, a)
                }
                ,
                this.consumerDestroyListener = function(t, o) {
                    e._deleteConsumer(t, o.id)
                }
                ,
                this.consumerDisableListener = function(t, o, n) {
                    e.setConsumerMute(n, t, o, !0)
                }
                ,
                this.consumerEnableListener = function(t, o, n) {
                    e.setConsumerMute(n, t, o, !1)
                }
                ,
                this._startConsumerStatsInterval = function(t, o) {
                    if (e._started && void 0 === o.collectStatsInterval && !(o.muted.size > 0)) {
                        var r = o.consumer;
                        o.collectStatsInterval = window.setInterval((function() {
                            return n(e, void 0, void 0, (function() {
                                var e, n;
                                return a(this, (function(a) {
                                    switch (a.label) {
                                    case 0:
                                        return [4, u(r)];
                                    case 1:
                                        return void 0 === (e = a.sent()) ? (console.error("Missing packetsReceived", r.id),
                                        [2]) : (n = o.lastPacketsReceived,
                                        e < n || (e === n ? o.missingPacketsLastInterval || (o.missingPacketsLastInterval = !0,
                                        this._metrics[t].missingPacketsEventCount++,
                                        this.onAVIssue({
                                            issueType: "Packets not received: " + t,
                                            srcId: o.playerId,
                                            consumerId: r.id
                                        })) : (o.lastPacketsReceived = e,
                                        o.missingPacketsLastInterval = !1)),
                                        [2])
                                    }
                                }
                                ))
                            }
                            ))
                        }
                        ), 2e4),
                        e._numUnmutedConsumers[t] += 1
                    }
                }
                ,
                this._stopConsumerStatsInterval = function(t, o) {
                    void 0 !== o.collectStatsInterval && (window.clearInterval(o.collectStatsInterval),
                    o.collectStatsInterval = void 0,
                    e._numUnmutedConsumers[t] -= 1)
                }
            }
            return e.prototype.start = function() {
                this._started || (this._started = !0,
                this.resetCollection(),
                this._forEachConsumer(this._startConsumerStatsInterval))
            }
            ,
            e.prototype.stop = function() {
                this._started && (this._started = !1,
                this._forEachConsumer(this._stopConsumerStatsInterval))
            }
            ,
            e.prototype.onAVIssue = function(e) {}
            ,
            e.prototype.outputMetrics = function() {
                if (!this._started)
                    return null;
                this._updateTime();
                var e = {};
                return Object.entries(this._metrics).forEach((function(t) {
                    var o = t[0]
                      , n = t[1]
                      , a = i.default(o);
                    e["missing" + a + "ConsumerPacketsEventCount"] = n.missingPacketsEventCount,
                    e["total" + a + "ConsumerLifespanMS"] = n.totalLifespanMS
                }
                )),
                e
            }
            ,
            e.prototype.resetCollection = function() {
                this._lastLifespanUpdateTime = Date.now(),
                this._metrics = s.default(l)
            }
            ,
            e.prototype.setConsumerMute = function(e, t, o, n) {
                var a, r = null === (a = this._consumers[t]) || void 0 === a ? void 0 : a[o.id];
                r && (n ? r.muted.add(e) : r.muted.delete(e),
                this._updateTime(),
                0 === r.muted.size ? this._startConsumerStatsInterval(t, r) : this._stopConsumerStatsInterval(t, r))
            }
            ,
            e.prototype._updateTime = function() {
                var e = this
                  , t = Date.now()
                  , o = t - this._lastLifespanUpdateTime;
                Object.entries(this._numUnmutedConsumers).forEach((function(t) {
                    var n = t[0]
                      , a = t[1];
                    e._metrics[n].totalLifespanMS += o * a
                }
                )),
                this._lastLifespanUpdateTime = t
            }
            ,
            e.prototype._forEachConsumer = function(e) {
                Object.entries(this._consumers).forEach((function(t) {
                    var o = t[0]
                      , n = t[1];
                    Object.values(n).forEach((function(t) {
                        e(o, t)
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype._deleteConsumer = function(e, t) {
                var o = this._consumers[e][t];
                o && (this._updateTime(),
                delete this._consumers[e][t],
                this._stopConsumerStatsInterval(e, o))
            }
            ,
            e
        }();
        t.WebRtcMetricsCollector = d
    },
    1590: (e,t)=>{
        var o, n;
        t.__esModule = !0,
        t.ConsumerKindToMediaKind = t.ProduceState = t.summarizeMediaStreamTrack = t.summarizeConsumerInfo = t.ConsumerState = void 0,
        (n = t.ConsumerState || (t.ConsumerState = {})).WaitingForSFUAddress = "Waiting for SFU address",
        n.ConnectingToSFU = "Connecting to SFU",
        n.Consuming = "Consuming from SFU",
        n.ProducerDisconnected = "Producer disconnected",
        n.Connected = "Connected",
        t.summarizeConsumerInfo = function(e) {
            var t, o;
            return {
                video: null === (t = e.video) || void 0 === t ? void 0 : t.summarize(),
                screenVideo: null === (o = e.screenVideo) || void 0 === o ? void 0 : o.summarize(),
                enabled: e.enabled,
                muted: e.muted,
                connectionState: e.state
            }
        }
        ,
        t.summarizeMediaStreamTrack = function(e) {
            return {
                id: e.id,
                enabled: e.enabled,
                hasOutput: !e.muted,
                readyState: e.readyState,
                contentHint: e.contentHint
            }
        }
        ,
        (o = t.ProduceState || (t.ProduceState = {}))[o.Ended = 0] = "Ended",
        o[o.Loading = 1] = "Loading",
        o[o.Connected = 2] = "Connected",
        o[o.Errored = 3] = "Errored",
        t.ConsumerKindToMediaKind = function(e) {
            if ("audio" === e || "sound" === e)
                return "audio";
            if ("video" === e || "screen" === e)
                return "video";
            throw new Error("Unexpected ConsumerKind " + e)
        }
    }
    ,
    567: function(e, t) {
        var o = this && this.__awaiter || function(e, t, o, n) {
            return new (o || (o = Promise))((function(a, r) {
                function i(e) {
                    try {
                        c(n.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function s(e) {
                    try {
                        c(n.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? a(e.value) : (t = e.value,
                    t instanceof o ? t : new o((function(e) {
                        e(t)
                    }
                    ))).then(i, s)
                }
                c((n = n.apply(e, t || [])).next())
            }
            ))
        }
          , n = this && this.__generator || function(e, t) {
            var o, n, a, r, i = {
                label: 0,
                sent: function() {
                    if (1 & a[0])
                        throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return r = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }
            ),
            r;
            function s(r) {
                return function(s) {
                    return function(r) {
                        if (o)
                            throw new TypeError("Generator is already executing.");
                        for (; i; )
                            try {
                                if (o = 1,
                                n && (a = 2 & r[0] ? n.return : r[0] ? n.throw || ((a = n.return) && a.call(n),
                                0) : n.next) && !(a = a.call(n, r[1])).done)
                                    return a;
                                switch (n = 0,
                                a && (r = [2 & r[0], a.value]),
                                r[0]) {
                                case 0:
                                case 1:
                                    a = r;
                                    break;
                                case 4:
                                    return i.label++,
                                    {
                                        value: r[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++,
                                    n = r[1],
                                    r = [0];
                                    continue;
                                case 7:
                                    r = i.ops.pop(),
                                    i.trys.pop();
                                    continue;
                                default:
                                    if (!((a = (a = i.trys).length > 0 && a[a.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
                                        i.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && i.label < a[1]) {
                                        i.label = a[1],
                                        a = r;
                                        break
                                    }
                                    if (a && i.label < a[2]) {
                                        i.label = a[2],
                                        i.ops.push(r);
                                        break
                                    }
                                    a[2] && i.ops.pop(),
                                    i.trys.pop();
                                    continue
                                }
                                r = t.call(e, i)
                            } catch (e) {
                                r = [6, e],
                                n = 0
                            } finally {
                                o = a = 0
                            }
                        if (5 & r[0])
                            throw r[1];
                        return {
                            value: r[0] ? r[1] : void 0,
                            done: !0
                        }
                    }([r, s])
                }
            }
        }
        ;
        t.__esModule = !0,
        t.ExecutionQueue = void 0;
        var a = function() {
            function e() {
                this._q = [],
                this.isExecuting = !1,
                this._isDestroyed = !1
            }
            return e.prototype.onIsExecutingChange = function(e) {}
            ,
            e.prototype.run = function(e) {
                return o(this, void 0, void 0, (function() {
                    var t = this;
                    return n(this, (function(a) {
                        return [2, new Promise((function(a, r) {
                            t._q.push((function() {
                                return o(t, void 0, void 0, (function() {
                                    var t, o;
                                    return n(this, (function(n) {
                                        switch (n.label) {
                                        case 0:
                                            if (this._isDestroyed)
                                                return r(new Error("Destroyed execution queue")),
                                                [2];
                                            n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]),
                                            [4, e()];
                                        case 2:
                                            return t = n.sent(),
                                            a(t),
                                            [3, 4];
                                        case 3:
                                            return o = n.sent(),
                                            this._isDestroyed && console.log("Execution queue destroyed while executing"),
                                            r(o),
                                            [3, 4];
                                        case 4:
                                            return [2]
                                        }
                                    }
                                    ))
                                }
                                ))
                            }
                            )),
                            t._execute()
                        }
                        ))]
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype._execute = function() {
                return o(this, void 0, void 0, (function() {
                    var e;
                    return n(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            if (this.isExecuting)
                                return [2];
                            this.isExecuting = !0,
                            this.onIsExecutingChange(this.isExecuting),
                            t.label = 1;
                        case 1:
                            return (e = this._q.shift()) ? [4, e()] : [3, 3];
                        case 2:
                            return t.sent(),
                            [3, 1];
                        case 3:
                            return this.isExecuting = !1,
                            this.onIsExecutingChange(this.isExecuting),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.destroy = function() {
                return o(this, void 0, void 0, (function() {
                    return n(this, (function(e) {
                        return this._isDestroyed = !0,
                        [2]
                    }
                    ))
                }
                ))
            }
            ,
            e
        }();
        t.ExecutionQueue = a
    },
    893: (e,t)=>{
        t.__esModule = !0,
        t.parseClientKey = t.getClientKey = void 0,
        t.getClientKey = function(e, t) {
            return e + ":" + t
        }
        ,
        t.parseClientKey = function(e) {
            var t = e.indexOf(":");
            return [e.substring(0, t), e.substring(t + 1)]
        }
    }
    ,
    82: function(e, t, o) {
        var n = this && this.__createBinding || (Object.create ? function(e, t, o, n) {
            void 0 === n && (n = o),
            Object.defineProperty(e, n, {
                enumerable: !0,
                get: function() {
                    return t[o]
                }
            })
        }
        : function(e, t, o, n) {
            void 0 === n && (n = o),
            e[n] = t[o]
        }
        )
          , a = this && this.__exportStar || function(e, t) {
            for (var o in e)
                "default" === o || Object.prototype.hasOwnProperty.call(t, o) || n(t, e, o)
        }
        ;
        t.__esModule = !0,
        t.VIDEO_WEBSOCKET_SERVER_OPTIONS = t.VIDEO_ENCODINGS = t.ExecutionQueue = void 0,
        a(o(420), t);
        var r = o(567);
        n(t, r, "ExecutionQueue"),
        a(o(893), t),
        a(o(894), t),
        t.VIDEO_ENCODINGS = [{
            ssrc: 111110,
            maxBitrate: 12e4,
            scaleResolutionDownBy: 3
        }, {
            ssrc: 111112,
            maxBitrate: 68e4
        }],
        t.VIDEO_WEBSOCKET_SERVER_OPTIONS = {
            cors: {
                origin: [/^https?:\/\/gather.town$/, /\.gather\.town$/, /^http:\/\/localhost:\d+$/],
                methods: ["GET", "POST"]
            },
            pingTimeout: 1e4,
            pingInterval: 15e3,
            transports: ["websocket"]
        }
    },
    190: function(e, t, o) {
        var n = this && this.__createBinding || (Object.create ? function(e, t, o, n) {
            void 0 === n && (n = o),
            Object.defineProperty(e, n, {
                enumerable: !0,
                get: function() {
                    return t[o]
                }
            })
        }
        : function(e, t, o, n) {
            void 0 === n && (n = o),
            e[n] = t[o]
        }
        )
          , a = this && this.__setModuleDefault || (Object.create ? function(e, t) {
            Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            })
        }
        : function(e, t) {
            e.default = t
        }
        )
          , r = this && this.__importStar || function(e) {
            if (e && e.__esModule)
                return e;
            var t = {};
            if (null != e)
                for (var o in e)
                    "default" !== o && Object.prototype.hasOwnProperty.call(e, o) && n(t, e, o);
            return a(t, e),
            t
        }
        ;
        t.__esModule = !0,
        t.ZodTransportDirection = t.ZodConsumerKind = void 0;
        var i = r(o(1694));
        t.ZodConsumerKind = i.union([i.literal("audio"), i.literal("video"), i.literal("screen"), i.literal("sound")]),
        t.ZodTransportDirection = i.union([i.literal("send"), i.literal("recv")])
    },
    892: (e,t)=>{
        t.__esModule = !0
    }
    ,
    420: function(e, t, o) {
        var n = this && this.__createBinding || (Object.create ? function(e, t, o, n) {
            void 0 === n && (n = o),
            Object.defineProperty(e, n, {
                enumerable: !0,
                get: function() {
                    return t[o]
                }
            })
        }
        : function(e, t, o, n) {
            void 0 === n && (n = o),
            e[n] = t[o]
        }
        )
          , a = this && this.__exportStar || function(e, t) {
            for (var o in e)
                "default" === o || Object.prototype.hasOwnProperty.call(t, o) || n(t, e, o)
        }
        ;
        t.__esModule = !0,
        a(o(190), t),
        a(o(191), t),
        a(o(891), t),
        a(o(892), t)
    },
    891: (e,t)=>{
        t.__esModule = !0
    }
    ,
    191: function(e, t, o) {
        var n = this && this.__createBinding || (Object.create ? function(e, t, o, n) {
            void 0 === n && (n = o),
            Object.defineProperty(e, n, {
                enumerable: !0,
                get: function() {
                    return t[o]
                }
            })
        }
        : function(e, t, o, n) {
            void 0 === n && (n = o),
            e[n] = t[o]
        }
        )
          , a = this && this.__setModuleDefault || (Object.create ? function(e, t) {
            Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            })
        }
        : function(e, t) {
            e.default = t
        }
        )
          , r = this && this.__importStar || function(e) {
            if (e && e.__esModule)
                return e;
            var t = {};
            if (null != e)
                for (var o in e)
                    "default" !== o && Object.prototype.hasOwnProperty.call(e, o) && n(t, e, o);
            return a(t, e),
            t
        }
        ;
        t.__esModule = !0,
        t.ZodAVSFUProduceResumeMessageData = t.ZodAVSFUProducePauseMessageData = t.ZodAVSFUDebugMessageData = t.ZodAVSFUProduceCloseMessageData = t.ZodAVSFUConsumeRequestMessageData = t.ZodAVSFUConsumeCreatedMessageData = t.ZodAVSFUConsumeAllowMessageData = t.ZodAVSFUSetConsumeSpatialMessageData = t.ZodAVSFUConsumeManipulationMessageData = t.ZodAVSFUConsumeMessageData = t.ZodAVSFUProduceMessageData = t.ZodAVSFUTransportCloseMessageData = t.ZodAVSFUTransportCreateMessageData = t.ZodAVSFUTransportConnectMessageData = t.VideoSpatialLayer = void 0;
        var i, s = r(o(1694)), c = o(190);
        !function(e) {
            e[e.LowQuality = 0] = "LowQuality",
            e[e.HighQuality = 1] = "HighQuality"
        }(i = t.VideoSpatialLayer || (t.VideoSpatialLayer = {}));
        var l = s.nativeEnum(i);
        t.ZodAVSFUTransportConnectMessageData = s.object({
            transportId: s.string(),
            dtlsParameters: s.any()
        }),
        t.ZodAVSFUTransportCreateMessageData = s.object({
            direction: c.ZodTransportDirection
        }).nullable(),
        t.ZodAVSFUTransportCloseMessageData = s.object({
            transportId: s.string()
        }),
        t.ZodAVSFUProduceMessageData = s.object({
            transportId: s.string(),
            tag: c.ZodConsumerKind,
            kind: s.any(),
            rtpParameters: s.any()
        }),
        t.ZodAVSFUConsumeMessageData = s.object({
            transportId: s.string(),
            srcId: s.string(),
            srcStreamId: s.string(),
            tag: c.ZodConsumerKind,
            rtpCapabilities: s.any(),
            spatialLayer: l.optional()
        }),
        t.ZodAVSFUConsumeManipulationMessageData = s.object({
            srcId: s.string(),
            srcStreamId: s.string(),
            tag: c.ZodConsumerKind,
            consumerId: s.string()
        }),
        t.ZodAVSFUSetConsumeSpatialMessageData = s.object({
            srcId: s.string(),
            srcStreamId: s.string(),
            tag: c.ZodConsumerKind,
            spatialLayer: s.number()
        }),
        t.ZodAVSFUConsumeAllowMessageData = s.object({
            dstId: s.string(),
            dstStreamId: s.string().optional(),
            allowed: s.boolean()
        }),
        t.ZodAVSFUConsumeCreatedMessageData = s.object({
            srcId: s.string(),
            srcStreamId: s.string(),
            tag: c.ZodConsumerKind,
            consumerId: s.string()
        }),
        t.ZodAVSFUConsumeRequestMessageData = s.object({
            srcId: s.string(),
            srcStreamId: s.string(),
            requested: s.boolean()
        }),
        t.ZodAVSFUProduceCloseMessageData = s.object({
            tag: c.ZodConsumerKind
        }),
        t.ZodAVSFUDebugMessageData = s.object({
            srcIds: s.string().array(),
            srcStreamId: s.string()
        }),
        t.ZodAVSFUProducePauseMessageData = s.object({
            tag: c.ZodConsumerKind
        }),
        t.ZodAVSFUProduceResumeMessageData = s.object({
            tag: c.ZodConsumerKind
        })
    },
    894: (e,t)=>{
        t.__esModule = !0,
        t.argmin = void 0,
        t.argmin = function(e, t) {
            var o = null
              , n = null;
            return e.forEach((function(e) {
                var a = t(e);
                (null === o || a < o) && (o = a,
                n = e)
            }
            )),
            n
        }
    }
}]);
//# sourceMappingURL=bundle.71f4a78717cef7384dce.js.map
