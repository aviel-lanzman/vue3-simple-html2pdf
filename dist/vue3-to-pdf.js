import { h as Ha } from "vue";
var It = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Sa(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function ln(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Ti = { exports: {} };
(function(t, A) {
  (function(r, e) {
    t.exports = e();
  })(It, function() {
    var r, e, o, g, y, D, T, J, Y, aA, dA, bA, QA, xA, NA, _A, HA, WA, VA, kA, IA, zA, At, RA, ft, yt, Ft, tt, pt, Rt, Ct, Bt, te, Xt, Mt, ee, re, ne, se, kt, ge, ct, dt, ir, sr, qe, je, Zr, We, yr, De, or, Xe, Dt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
      return typeof a;
    } : function(a) {
      return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
    }, at = function(a) {
      var B = "1.3", v = { a0: [2383.94, 3370.39], a1: [1683.78, 2383.94], a2: [1190.55, 1683.78], a3: [841.89, 1190.55], a4: [595.28, 841.89], a5: [419.53, 595.28], a6: [297.64, 419.53], a7: [209.76, 297.64], a8: [147.4, 209.76], a9: [104.88, 147.4], a10: [73.7, 104.88], b0: [2834.65, 4008.19], b1: [2004.09, 2834.65], b2: [1417.32, 2004.09], b3: [1000.63, 1417.32], b4: [708.66, 1000.63], b5: [498.9, 708.66], b6: [354.33, 498.9], b7: [249.45, 354.33], b8: [175.75, 249.45], b9: [124.72, 175.75], b10: [87.87, 124.72], c0: [2599.37, 3676.54], c1: [1836.85, 2599.37], c2: [1298.27, 1836.85], c3: [918.43, 1298.27], c4: [649.13, 918.43], c5: [459.21, 649.13], c6: [323.15, 459.21], c7: [229.61, 323.15], c8: [161.57, 229.61], c9: [113.39, 161.57], c10: [79.37, 113.39], dl: [311.81, 623.62], letter: [612, 792], "government-letter": [576, 756], legal: [612, 1008], "junior-legal": [576, 360], ledger: [1224, 792], tabloid: [792, 1224], "credit-card": [153, 243] };
      function s(i) {
        var c = {};
        this.subscribe = function(l, u, p) {
          if (typeof u != "function")
            return !1;
          c.hasOwnProperty(l) || (c[l] = {});
          var w = Math.random().toString(35);
          return c[l][w] = [u, !!p], w;
        }, this.unsubscribe = function(l) {
          for (var u in c)
            if (c[u][l])
              return delete c[u][l], !0;
          return !1;
        }, this.publish = function(l) {
          if (c.hasOwnProperty(l)) {
            var u = Array.prototype.slice.call(arguments, 1), p = [];
            for (var w in c[l]) {
              var f = c[l][w];
              try {
                f[0].apply(i, u);
              } catch (d) {
                a.console && console.error("jsPDF PubSub Error", d.message, d);
              }
              f[1] && p.push(w);
            }
            p.length && p.forEach(this.unsubscribe);
          }
        };
      }
      function n(i, c, l, u) {
        var p = {};
        (i === void 0 ? "undefined" : Dt(i)) === "object" && (i = (p = i).orientation, c = p.unit || c, l = p.format || l, u = p.compress || p.compressPdf || u), c = c || "mm", l = l || "a4", i = ("" + (i || "P")).toLowerCase(), ("" + l).toLowerCase();
        var w, f, d, C, m, F, E, H, _, N, j, Z = !!u && typeof Uint8Array == "function", W = p.textColor || "0 g", V = p.drawColor || "0 G", Q = p.fontSize || 16, q = p.charSpace || 0, K = p.R2L || !1, z = p.lineHeight || 1.15, $ = p.lineWidth || 0.200025, uA = "00000000000000000000000000000000", AA = 2, L = !1, U = [], P = {}, I = {}, G = 0, M = [], sA = [], X = [], lA = [], rA = [], x = 0, O = 0, h = 0, b = { title: "", subject: "", author: "", keywords: "", creator: "" }, S = {}, R = new s(S), iA = p.hotfixes || [], cA = function(k) {
          var oA, fA = k.ch1, tA = k.ch2, eA = k.ch3, hA = k.ch4, BA = (k.precision, k.pdfColorType === "draw" ? ["G", "RG", "K"] : ["g", "rg", "k"]);
          if (typeof fA == "string" && fA.charAt(0) !== "#") {
            var CA = new RGBColor(fA);
            CA.ok && (fA = CA.toHex());
          }
          if (typeof fA == "string" && /^#[0-9A-Fa-f]{3}$/.test(fA) && (fA = "#" + fA[1] + fA[1] + fA[2] + fA[2] + fA[3] + fA[3]), typeof fA == "string" && /^#[0-9A-Fa-f]{6}$/.test(fA)) {
            var yA = parseInt(fA.substr(1), 16);
            fA = yA >> 16 & 255, tA = yA >> 8 & 255, eA = 255 & yA;
          }
          if (tA === void 0 || hA === void 0 && fA === tA && tA === eA)
            if (typeof fA == "string")
              oA = fA + " " + BA[0];
            else
              switch (k.precision) {
                case 2:
                  oA = vA(fA / 255) + " " + BA[0];
                  break;
                case 3:
                default:
                  oA = TA(fA / 255) + " " + BA[0];
              }
          else if (hA === void 0 || (hA === void 0 ? "undefined" : Dt(hA)) === "object") {
            if (typeof fA == "string")
              oA = [fA, tA, eA, BA[1]].join(" ");
            else
              switch (k.precision) {
                case 2:
                  oA = [vA(fA / 255), vA(tA / 255), vA(eA / 255), BA[1]].join(" ");
                  break;
                default:
                case 3:
                  oA = [TA(fA / 255), TA(tA / 255), TA(eA / 255), BA[1]].join(" ");
              }
            hA && hA.a === 0 && (oA = ["255", "255", "255", BA[1]].join(" "));
          } else if (typeof fA == "string")
            oA = [fA, tA, eA, hA, BA[2]].join(" ");
          else
            switch (k.precision) {
              case 2:
                oA = [vA(fA), vA(tA), vA(eA), vA(hA), BA[2]].join(" ");
                break;
              case 3:
              default:
                oA = [TA(fA), TA(tA), TA(eA), TA(hA), BA[2]].join(" ");
            }
          return oA;
        }, gA = function(k) {
          var oA = function(CA) {
            return ("0" + parseInt(CA)).slice(-2);
          }, fA = k.getTimezoneOffset(), tA = fA < 0 ? "+" : "-", eA = Math.floor(Math.abs(fA / 60)), hA = Math.abs(fA % 60), BA = [tA, oA(eA), "'", oA(hA), "'"].join("");
          return ["D:", k.getFullYear(), oA(k.getMonth() + 1), oA(k.getDate()), oA(k.getHours()), oA(k.getMinutes()), oA(k.getSeconds()), BA].join("");
        }, wA = function(k) {
          var oA;
          return (k === void 0 ? "undefined" : Dt(k)) === void 0 && (k = /* @__PURE__ */ new Date()), oA = (k === void 0 ? "undefined" : Dt(k)) === "object" && Object.prototype.toString.call(k) === "[object Date]" ? gA(k) : /^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|\-0[0-9]|\-1[0-1])\'(0[0-9]|[1-5][0-9])\'?$/.test(k) ? k : gA(/* @__PURE__ */ new Date()), N = oA;
        }, pA = function(k) {
          var oA = N;
          return k === "jsDate" && (oA = function(fA) {
            var tA = parseInt(fA.substr(2, 4), 10), eA = parseInt(fA.substr(6, 2), 10) - 1, hA = parseInt(fA.substr(8, 2), 10), BA = parseInt(fA.substr(10, 2), 10), CA = parseInt(fA.substr(12, 2), 10), yA = parseInt(fA.substr(14, 2), 10);
            return parseInt(fA.substr(16, 2), 10), parseInt(fA.substr(20, 2), 10), new Date(tA, eA, hA, BA, CA, yA, 0);
          }(N)), oA;
        }, UA = function(k) {
          return k = k || "12345678901234567890123456789012".split("").map(function() {
            return "ABCDEF0123456789".charAt(Math.floor(16 * Math.random()));
          }).join(""), uA = k;
        }, vA = function(k) {
          return k.toFixed(2);
        }, TA = function(k) {
          return k.toFixed(3);
        }, nA = function(k) {
          k = typeof k == "string" ? k : k.toString(), L ? M[C].push(k) : (h += k.length + 1, lA.push(k));
        }, ot = function() {
          return U[++AA] = h, nA(AA + " 0 obj"), AA;
        }, ZA = function(k) {
          nA("stream"), nA(k), nA("endstream");
        }, $A = function() {
          for (var k in nA("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"), nA("/Font <<"), P)
            P.hasOwnProperty(k) && nA("/" + k + " " + P[k].objectNumber + " 0 R");
          nA(">>"), nA("/XObject <<"), R.publish("putXobjectDict"), nA(">>");
        }, mt = function() {
          (function() {
            for (var k in P)
              P.hasOwnProperty(k) && (oA = P[k], R.publish("putFont", { font: oA, out: nA, newObject: ot }), oA.isAlreadyPutted !== !0 && (oA.objectNumber = ot(), nA("<<"), nA("/Type /Font"), nA("/BaseFont /" + oA.postScriptName), nA("/Subtype /Type1"), typeof oA.encoding == "string" && nA("/Encoding /" + oA.encoding), nA("/FirstChar 32"), nA("/LastChar 255"), nA(">>"), nA("endobj")));
            var oA;
          })(), R.publish("putResources"), U[2] = h, nA("2 0 obj"), nA("<<"), $A(), nA(">>"), nA("endobj"), R.publish("postPutResources");
        }, PA = function(k, oA, fA) {
          I.hasOwnProperty(oA) || (I[oA] = {}), I[oA][fA] = k;
        }, nt = function(k, oA, fA, tA) {
          var eA = "F" + (Object.keys(P).length + 1).toString(10), hA = P[eA] = { id: eA, postScriptName: k, fontName: oA, fontStyle: fA, encoding: tA, metadata: {} };
          return PA(eA, oA, fA), R.publish("addFont", hA), eA;
        }, lt = function(k, oA) {
          return function(fA, tA) {
            var eA, hA, BA, CA, yA, LA, jA, OA, JA;
            if (BA = (tA = tA || {}).sourceEncoding || "Unicode", yA = tA.outputEncoding, (tA.autoencode || yA) && P[w].metadata && P[w].metadata[BA] && P[w].metadata[BA].encoding && (CA = P[w].metadata[BA].encoding, !yA && P[w].encoding && (yA = P[w].encoding), !yA && CA.codePages && (yA = CA.codePages[0]), typeof yA == "string" && (yA = CA[yA]), yA)) {
              for (jA = !1, LA = [], eA = 0, hA = fA.length; eA < hA; eA++)
                (OA = yA[fA.charCodeAt(eA)]) ? LA.push(String.fromCharCode(OA)) : LA.push(fA[eA]), LA[eA].charCodeAt(0) >> 8 && (jA = !0);
              fA = LA.join("");
            }
            for (eA = fA.length; jA === void 0 && eA !== 0; )
              fA.charCodeAt(eA - 1) >> 8 && (jA = !0), eA--;
            if (!jA)
              return fA;
            for (LA = tA.noBOM ? [] : [254, 255], eA = 0, hA = fA.length; eA < hA; eA++) {
              if ((JA = (OA = fA.charCodeAt(eA)) >> 8) >> 8)
                throw new Error("Character at position " + eA + " of string '" + fA + "' exceeds 16bits. Cannot be encoded into UCS-2 BE");
              LA.push(JA), LA.push(OA - (JA << 8));
            }
            return String.fromCharCode.apply(void 0, LA);
          }(k, oA).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
        }, rt = function() {
          (function(k, oA) {
            var fA = typeof oA == "string" && oA.toLowerCase();
            if (typeof k == "string") {
              var tA = k.toLowerCase();
              v.hasOwnProperty(tA) && (k = v[tA][0] / f, oA = v[tA][1] / f);
            }
            if (Array.isArray(k) && (oA = k[1], k = k[0]), fA) {
              switch (fA.substr(0, 1)) {
                case "l":
                  k < oA && (fA = "s");
                  break;
                case "p":
                  oA < k && (fA = "s");
              }
              fA === "s" && (d = k, k = oA, oA = d);
            }
            L = !0, M[++G] = [], X[G] = { width: Number(k) || m, height: Number(oA) || F }, sA[G] = {}, et(G);
          }).apply(this, arguments), nA(vA($ * f) + " w"), nA(V), x !== 0 && nA(x + " J"), O !== 0 && nA(O + " j"), R.publish("addPage", { pageNumber: G });
        }, et = function(k) {
          0 < k && k <= G && (m = X[C = k].width, F = X[k].height);
        }, ut = function(k, oA, fA) {
          var tA, eA = void 0;
          return fA = fA || {}, k = k !== void 0 ? k : P[w].fontName, oA = oA !== void 0 ? oA : P[w].fontStyle, tA = k.toLowerCase(), I[tA] !== void 0 && I[tA][oA] !== void 0 ? eA = I[tA][oA] : I[k] !== void 0 && I[k][oA] !== void 0 ? eA = I[k][oA] : fA.disableWarning === !1 && console.warn("Unable to look up font label for font '" + k + "', '" + oA + "'. Refer to getFontList() for available fonts."), eA || fA.noFallback || (eA = I.times[oA]) == null && (eA = I.times.normal), eA;
        }, xt = function() {
          L = !1, AA = 2, h = 0, lA = [], U = [], rA = [], R.publish("buildDocument"), nA("%PDF-" + B), nA("%ºß¬à"), function() {
            var eA, hA, BA, CA, yA, LA, jA, OA, JA, st = [];
            for (jA = a.adler32cs || n.API.adler32cs, Z && jA === void 0 && (Z = !1), eA = 1; eA <= G; eA++) {
              if (st.push(ot()), OA = (m = X[eA].width) * f, JA = (F = X[eA].height) * f, nA("<</Type /Page"), nA("/Parent 1 0 R"), nA("/Resources 2 0 R"), nA("/MediaBox [0 0 " + vA(OA) + " " + vA(JA) + "]"), R.publish("putPage", { pageNumber: eA, page: M[eA] }), nA("/Contents " + (AA + 1) + " 0 R"), nA(">>"), nA("endobj"), hA = M[eA].join(`
`), ot(), Z) {
                for (BA = [], CA = hA.length; CA--; )
                  BA[CA] = hA.charCodeAt(CA);
                LA = jA.from(hA), (yA = new Deflater(6)).append(new Uint8Array(BA)), hA = yA.flush(), (BA = new Uint8Array(hA.length + 6)).set(new Uint8Array([120, 156])), BA.set(hA, 2), BA.set(new Uint8Array([255 & LA, LA >> 8 & 255, LA >> 16 & 255, LA >> 24 & 255]), hA.length + 2), hA = String.fromCharCode.apply(null, BA), nA("<</Length " + hA.length + " /Filter [/FlateDecode]>>");
              } else
                nA("<</Length " + hA.length + ">>");
              ZA(hA), nA("endobj");
            }
            U[1] = h, nA("1 0 obj"), nA("<</Type /Pages");
            var Et = "/Kids [";
            for (CA = 0; CA < G; CA++)
              Et += st[CA] + " 0 R ";
            nA(Et + "]"), nA("/Count " + G), nA(">>"), nA("endobj"), R.publish("postPutPages");
          }(), function() {
            R.publish("putAdditionalObjects");
            for (var eA = 0; eA < rA.length; eA++) {
              var hA = rA[eA];
              U[hA.objId] = h, nA(hA.objId + " 0 obj"), nA(hA.content), nA("endobj");
            }
            AA += rA.length, R.publish("postPutAdditionalObjects");
          }(), mt(), ot(), nA("<<"), function() {
            for (var eA in nA("/Producer (jsPDF " + n.version + ")"), b)
              b.hasOwnProperty(eA) && b[eA] && nA("/" + eA.substr(0, 1).toUpperCase() + eA.substr(1) + " (" + lt(b[eA]) + ")");
            nA("/CreationDate (" + N + ")");
          }(), nA(">>"), nA("endobj"), ot(), nA("<<"), function() {
            switch (nA("/Type /Catalog"), nA("/Pages 1 0 R"), H || (H = "fullwidth"), H) {
              case "fullwidth":
                nA("/OpenAction [3 0 R /FitH null]");
                break;
              case "fullheight":
                nA("/OpenAction [3 0 R /FitV null]");
                break;
              case "fullpage":
                nA("/OpenAction [3 0 R /Fit]");
                break;
              case "original":
                nA("/OpenAction [3 0 R /XYZ null null 1]");
                break;
              default:
                var eA = "" + H;
                eA.substr(eA.length - 1) === "%" && (H = parseInt(H) / 100), typeof H == "number" && nA("/OpenAction [3 0 R /XYZ null null " + vA(H) + "]");
            }
            switch (_ || (_ = "continuous"), _) {
              case "continuous":
                nA("/PageLayout /OneColumn");
                break;
              case "single":
                nA("/PageLayout /SinglePage");
                break;
              case "two":
              case "twoleft":
                nA("/PageLayout /TwoColumnLeft");
                break;
              case "tworight":
                nA("/PageLayout /TwoColumnRight");
            }
            E && nA("/PageMode /" + E), R.publish("putCatalog");
          }(), nA(">>"), nA("endobj");
          var k, oA = h, fA = "0000000000";
          for (nA("xref"), nA("0 " + (AA + 1)), nA(fA + " 65535 f "), k = 1; k <= AA; k++) {
            var tA = U[k];
            nA(typeof tA == "function" ? (fA + U[k]()).slice(-10) + " 00000 n " : (fA + U[k]).slice(-10) + " 00000 n ");
          }
          return nA("trailer"), nA("<<"), nA("/Size " + (AA + 1)), nA("/Root " + AA + " 0 R"), nA("/Info " + (AA - 1) + " 0 R"), nA("/ID [ <" + uA + "> <" + uA + "> ]"), nA(">>"), nA("startxref"), nA("" + oA), nA("%%EOF"), L = !0, lA.join(`
`);
        }, MA = function(k) {
          var oA = "S";
          return k === "F" ? oA = "f" : k === "FD" || k === "DF" ? oA = "B" : k !== "f" && k !== "f*" && k !== "B" && k !== "B*" || (oA = k), oA;
        }, oe = function() {
          for (var k = xt(), oA = k.length, fA = new ArrayBuffer(oA), tA = new Uint8Array(fA); oA--; )
            tA[oA] = k.charCodeAt(oA);
          return fA;
        }, Jt = function() {
          return new Blob([oe()], { type: "application/pdf" });
        }, pe = ((j = function(k, oA) {
          var fA = ("" + k).substr(0, 6) === "dataur" ? "data:application/pdf;base64," + btoa(xt()) : 0;
          switch (k) {
            case void 0:
              return xt();
            case "save":
              if ((typeof navigator > "u" ? "undefined" : Dt(navigator)) === "object" && navigator.getUserMedia && (a.URL === void 0 || a.URL.createObjectURL === void 0))
                return S.output("dataurlnewwindow");
              Fr(Jt(), oA), typeof Fr.unload == "function" && a.setTimeout && setTimeout(Fr.unload, 911);
              break;
            case "arraybuffer":
              return oe();
            case "blob":
              return Jt();
            case "bloburi":
            case "bloburl":
              return a.URL && a.URL.createObjectURL(Jt()) || void 0;
            case "datauristring":
            case "dataurlstring":
              return fA;
            case "dataurlnewwindow":
              var tA = a.open(fA);
              if (tA || typeof safari > "u")
                return tA;
            case "datauri":
            case "dataurl":
              return a.document.location.href = fA;
            default:
              throw new Error('Output type "' + k + '" is not supported.');
          }
        }).foo = function() {
          try {
            return j.apply(this, arguments);
          } catch (fA) {
            var k = fA.stack || "";
            ~k.indexOf(" at ") && (k = k.split(" at ")[1]);
            var oA = "Error in function " + k.split(`
`)[0].split("<")[0] + ": " + fA.message;
            if (!a.console)
              throw new Error(oA);
            a.console.error(oA, fA), a.alert && alert(oA);
          }
        }, (j.foo.bar = j).foo), Qe = function(k) {
          return Array.isArray(iA) === !0 && -1 < iA.indexOf(k);
        };
        switch (c) {
          case "pt":
            f = 1;
            break;
          case "mm":
            f = 72 / 25.4;
            break;
          case "cm":
            f = 72 / 2.54;
            break;
          case "in":
            f = 72;
            break;
          case "px":
            f = Qe("px_scaling") == 1 ? 0.75 : 96 / 72;
            break;
          case "pc":
          case "em":
            f = 12;
            break;
          case "ex":
            f = 6;
            break;
          default:
            throw "Invalid unit: " + c;
        }
        for (var _t in wA(), UA(), S.internal = { pdfEscape: lt, getStyle: MA, getFont: function() {
          return P[ut.apply(S, arguments)];
        }, getFontSize: function() {
          return Q;
        }, getCharSpace: function() {
          return q;
        }, getTextColor: function() {
          var k = W.split(" ");
          if (k.length === 2 && k[1] === "g") {
            var oA = parseFloat(k[0]);
            k = [oA, oA, oA, "r"];
          }
          for (var fA = "#", tA = 0; tA < 3; tA++)
            fA += ("0" + Math.floor(255 * parseFloat(k[tA])).toString(16)).slice(-2);
          return fA;
        }, getLineHeight: function() {
          return Q * z;
        }, write: function(k) {
          nA(arguments.length === 1 ? k : Array.prototype.join.call(arguments, " "));
        }, getCoordinateString: function(k) {
          return vA(k * f);
        }, getVerticalCoordinateString: function(k) {
          return vA((F - k) * f);
        }, collections: {}, newObject: ot, newAdditionalObject: function() {
          var k = 2 * M.length + 1, oA = { objId: k += rA.length, content: "" };
          return rA.push(oA), oA;
        }, newObjectDeferred: function() {
          return U[++AA] = function() {
            return h;
          }, AA;
        }, newObjectDeferredBegin: function(k) {
          U[k] = h;
        }, putStream: ZA, events: R, scaleFactor: f, pageSize: { getWidth: function() {
          return m;
        }, getHeight: function() {
          return F;
        } }, output: function(k, oA) {
          return pe(k, oA);
        }, getNumberOfPages: function() {
          return M.length - 1;
        }, pages: M, out: nA, f2: vA, getPageInfo: function(k) {
          return { objId: 2 * (k - 1) + 3, pageNumber: k, pageContext: sA[k] };
        }, getCurrentPageInfo: function() {
          return { objId: 2 * (C - 1) + 3, pageNumber: C, pageContext: sA[C] };
        }, getPDFVersion: function() {
          return B;
        }, hasHotfix: Qe }, S.addPage = function() {
          return rt.apply(this, arguments), this;
        }, S.setPage = function() {
          return et.apply(this, arguments), this;
        }, S.insertPage = function(k) {
          return this.addPage(), this.movePage(C, k), this;
        }, S.movePage = function(k, oA) {
          if (oA < k) {
            for (var fA = M[k], tA = X[k], eA = sA[k], hA = k; oA < hA; hA--)
              M[hA] = M[hA - 1], X[hA] = X[hA - 1], sA[hA] = sA[hA - 1];
            M[oA] = fA, X[oA] = tA, sA[oA] = eA, this.setPage(oA);
          } else if (k < oA) {
            for (fA = M[k], tA = X[k], eA = sA[k], hA = k; hA < oA; hA++)
              M[hA] = M[hA + 1], X[hA] = X[hA + 1], sA[hA] = sA[hA + 1];
            M[oA] = fA, X[oA] = tA, sA[oA] = eA, this.setPage(oA);
          }
          return this;
        }, S.deletePage = function() {
          return (function(k) {
            0 < k && k <= G && (M.splice(k, 1), X.splice(k, 1), --G < C && (C = G), this.setPage(C));
          }).apply(this, arguments), this;
        }, S.setCreationDate = function(k) {
          return wA(k), this;
        }, S.getCreationDate = function(k) {
          return pA(k);
        }, S.setFileId = function(k) {
          return UA(k), this;
        }, S.getFileId = function() {
          return uA;
        }, S.setDisplayMode = function(k, oA, fA) {
          if (H = k, _ = oA, [void 0, null, "UseNone", "UseOutlines", "UseThumbs", "FullScreen"].indexOf(E = fA) == -1)
            throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "' + fA + '" is not recognized.');
          return this;
        }, S.text = function(k, oA, fA, tA) {
          var eA, hA, BA = "", CA = z, yA = this;
          function LA(Zt) {
            for (var $t, ye = Zt.concat(), Pt = [], lr = ye.length; lr--; )
              typeof ($t = ye.shift()) == "string" ? Pt.push($t) : Object.prototype.toString.call(Zt) === "[object Array]" && $t.length === 1 ? Pt.push($t[0]) : Pt.push([$t[0], $t[1], $t[2]]);
            return Pt;
          }
          function jA(Zt, $t) {
            var ye;
            if (typeof Zt == "string")
              ye = $t(Zt)[0];
            else if (Object.prototype.toString.call(Zt) === "[object Array]") {
              for (var Pt, lr, ms = Zt.concat(), ci = [], Ia = ms.length; Ia--; )
                typeof (Pt = ms.shift()) == "string" ? ci.push($t(Pt)[0]) : Object.prototype.toString.call(Pt) === "[object Array]" && Pt[0] === "string" && (lr = $t(Pt[0], Pt[1], Pt[2]), ci.push([lr[0], lr[1], lr[2]]));
              ye = ci;
            }
            return ye;
          }
          typeof k == "number" && (hA = fA, fA = oA, oA = k, k = hA);
          var OA = tA, JA = arguments[4], st = arguments[5];
          (OA === void 0 ? "undefined" : Dt(OA)) === "object" && OA !== null || (typeof JA == "string" && (st = JA, JA = null), typeof OA == "string" && (st = OA, OA = null), typeof OA == "number" && (JA = OA, OA = null), tA = { flags: OA, angle: JA, align: st });
          var Et = !1, Vt = !0;
          if (typeof k == "string")
            Et = !0;
          else if (Object.prototype.toString.call(k) === "[object Array]") {
            for (var qt, Ur = k.concat(), bt = [], zt = Ur.length; zt--; )
              (typeof (qt = Ur.shift()) != "string" || Object.prototype.toString.call(qt) === "[object Array]" && typeof qt[0] != "string") && (Vt = !1);
            Et = Vt;
          }
          if (Et === !1)
            throw new Error('Type of text must be string or Array. "' + k + '" is not recognized.');
          var br = P[w].encoding;
          br !== "WinAnsiEncoding" && br !== "StandardEncoding" || (k = jA(k, function(Zt, $t, ye) {
            return [(Pt = Zt, Pt = Pt.split("	").join(Array(tA.TabLen || 9).join(" ")), lt(Pt, OA)), $t, ye];
            var Pt;
          })), typeof k == "string" && (k = k.match(/[\r?\n]/) ? k.split(/\r\n|\r|\n/g) : [k]), 0 < ($e = tA.maxWidth || 0) && (typeof k == "string" ? k = yA.splitTextToSize(k, $e) : Object.prototype.toString.call(k) === "[object Array]" && (k = yA.splitTextToSize(k.join(" "), $e)));
          var xe = { text: k, x: oA, y: fA, options: tA, mutex: { pdfEscape: lt, activeFontKey: w, fonts: P, activeFontSize: Q } };
          R.publish("preProcessText", xe), k = xe.text, JA = (tA = xe.options).angle;
          var Tt = yA.internal.scaleFactor, ze = (yA.internal.pageSize.getHeight(), []);
          if (JA) {
            JA *= Math.PI / 180;
            var ar = Math.cos(JA), cr = Math.sin(JA), Ye = function(Zt) {
              return Zt.toFixed(2);
            };
            ze = [Ye(ar), Ye(cr), Ye(-1 * cr), Ye(ar)];
          }
          (oi = tA.charSpace) !== void 0 && (BA += oi + ` Tc
`), tA.lang;
          var Yt = -1, en = tA.renderingMode || tA.stroke, xr = yA.internal.getCurrentPageInfo().pageContext;
          switch (en) {
            case 0:
            case !1:
            case "fill":
              Yt = 0;
              break;
            case 1:
            case !0:
            case "stroke":
              Yt = 1;
              break;
            case 2:
            case "fillThenStroke":
              Yt = 2;
              break;
            case 3:
            case "invisible":
              Yt = 3;
              break;
            case 4:
            case "fillAndAddForClipping":
              Yt = 4;
              break;
            case 5:
            case "strokeAndAddPathForClipping":
              Yt = 5;
              break;
            case 6:
            case "fillThenStrokeAndAddToPathForClipping":
              Yt = 6;
              break;
            case 7:
            case "addToPathForClipping":
              Yt = 7;
          }
          var rn = xr.usedRenderingMode || -1;
          Yt !== -1 ? BA += Yt + ` Tr
` : rn !== -1 && (BA += `0 Tr
`), Yt !== -1 && (xr.usedRenderingMode = Yt), st = tA.align || "left";
          var Ze = Q * CA, _e = yA.internal.pageSize.getHeight(), xa = yA.internal.pageSize.getWidth(), Ea = (Tt = yA.internal.scaleFactor, P[w]), oi = tA.charSpace || q, $e = tA.maxWidth || 0, nn = (OA = {}, []);
          if (Object.prototype.toString.call(k) === "[object Array]") {
            var Ee, Be;
            bt = LA(k), st !== "left" && (Be = bt.map(function(Zt) {
              return yA.getStringUnitWidth(Zt, { font: Ea, charSpace: oi, fontSize: Q }) * Q / Tt;
            }));
            var Ie, ws = Math.max.apply(Math, Be), sn = 0;
            if (st === "right") {
              oA -= Be[0], k = [];
              var YA = 0;
              for (zt = bt.length; YA < zt; YA++)
                ws - Be[YA], YA === 0 ? (Ie = oA * Tt, Ee = (_e - fA) * Tt) : (Ie = (sn - Be[YA]) * Tt, Ee = -Ze), k.push([bt[YA], Ie, Ee]), sn = Be[YA];
            } else if (st === "center")
              for (oA -= Be[0] / 2, k = [], YA = 0, zt = bt.length; YA < zt; YA++)
                (ws - Be[YA]) / 2, YA === 0 ? (Ie = oA * Tt, Ee = (_e - fA) * Tt) : (Ie = (sn - Be[YA]) / 2 * Tt, Ee = -Ze), k.push([bt[YA], Ie, Ee]), sn = Be[YA];
            else if (st === "left")
              for (k = [], YA = 0, zt = bt.length; YA < zt; YA++)
                Ee = YA === 0 ? (_e - fA) * Tt : -Ze, Ie = YA === 0 ? oA * Tt : 0, k.push(bt[YA]);
            else {
              if (st !== "justify")
                throw new Error('Unrecognized alignment option, use "left", "center", "right" or "justify".');
              for (k = [], $e = $e !== 0 ? $e : xa, YA = 0, zt = bt.length; YA < zt; YA++)
                Ee = YA === 0 ? (_e - fA) * Tt : -Ze, Ie = YA === 0 ? oA * Tt : 0, YA < zt - 1 && nn.push((($e - Be[YA]) / (bt[YA].split(" ").length - 1) * Tt).toFixed(2)), k.push([bt[YA], Ie, Ee]);
            }
          }
          (typeof tA.R2L == "boolean" ? tA.R2L : K) === !0 && (k = jA(k, function(Zt, $t, ye) {
            return [Zt.split("").reverse().join(""), $t, ye];
          })), xe = { text: k, x: oA, y: fA, options: tA, mutex: { pdfEscape: lt, activeFontKey: w, fonts: P, activeFontSize: Q } }, R.publish("postProcessText", xe), k = xe.text, eA = xe.mutex.isHex, bt = LA(k), k = [];
          var on, an, Er, cn = 0, Ir = (zt = bt.length, "");
          for (YA = 0; YA < zt; YA++)
            Ir = "", Object.prototype.toString.call(bt[YA]) !== "[object Array]" ? (on = parseFloat(oA * Tt).toFixed(2), an = parseFloat((_e - fA) * Tt).toFixed(2), Er = (eA ? "<" : "(") + bt[YA] + (eA ? ">" : ")")) : Object.prototype.toString.call(bt[YA]) === "[object Array]" && (on = parseFloat(bt[YA][1]).toFixed(2), an = parseFloat(bt[YA][2]).toFixed(2), Er = (eA ? "<" : "(") + bt[YA][0] + (eA ? ">" : ")"), cn = 1), nn !== void 0 && nn[YA] !== void 0 && (Ir = nn[YA] + ` Tw
`), ze.length !== 0 && YA === 0 ? k.push(Ir + ze.join(" ") + " " + on + " " + an + ` Tm
` + Er) : cn === 1 || cn === 0 && YA === 0 ? k.push(Ir + on + " " + an + ` Td
` + Er) : k.push(Ir + Er);
          k = cn === 0 ? k.join(` Tj
T* `) : k.join(` Tj
`), k += ` Tj
`;
          var ai = `BT
/` + w + " " + Q + ` Tf
` + (Q * CA).toFixed(2) + ` TL
` + W + `
`;
          return ai += BA, ai += k, nA(ai += "ET"), yA;
        }, S.lstext = function(k, oA, fA, tA) {
          console.warn("jsPDF.lstext is deprecated");
          for (var eA = 0, hA = k.length; eA < hA; eA++, oA += tA)
            this.text(k[eA], oA, fA);
          return this;
        }, S.line = function(k, oA, fA, tA) {
          return this.lines([[fA - k, tA - oA]], k, oA);
        }, S.clip = function() {
          nA("W"), nA("S");
        }, S.clip_fixed = function(k) {
          nA(k === "evenodd" ? "W*" : "W"), nA("n");
        }, S.lines = function(k, oA, fA, tA, eA, hA) {
          var BA, CA, yA, LA, jA, OA, JA, st, Et, Vt, qt;
          for (typeof k == "number" && (d = fA, fA = oA, oA = k, k = d), tA = tA || [1, 1], nA(TA(oA * f) + " " + TA((F - fA) * f) + " m "), BA = tA[0], CA = tA[1], LA = k.length, Vt = oA, qt = fA, yA = 0; yA < LA; yA++)
            (jA = k[yA]).length === 2 ? (Vt = jA[0] * BA + Vt, qt = jA[1] * CA + qt, nA(TA(Vt * f) + " " + TA((F - qt) * f) + " l")) : (OA = jA[0] * BA + Vt, JA = jA[1] * CA + qt, st = jA[2] * BA + Vt, Et = jA[3] * CA + qt, Vt = jA[4] * BA + Vt, qt = jA[5] * CA + qt, nA(TA(OA * f) + " " + TA((F - JA) * f) + " " + TA(st * f) + " " + TA((F - Et) * f) + " " + TA(Vt * f) + " " + TA((F - qt) * f) + " c"));
          return hA && nA(" h"), eA !== null && nA(MA(eA)), this;
        }, S.rect = function(k, oA, fA, tA, eA) {
          return MA(eA), nA([vA(k * f), vA((F - oA) * f), vA(fA * f), vA(-tA * f), "re"].join(" ")), eA !== null && nA(MA(eA)), this;
        }, S.triangle = function(k, oA, fA, tA, eA, hA, BA) {
          return this.lines([[fA - k, tA - oA], [eA - fA, hA - tA], [k - eA, oA - hA]], k, oA, [1, 1], BA, !0), this;
        }, S.roundedRect = function(k, oA, fA, tA, eA, hA, BA) {
          var CA = 1.3333333333333333 * (Math.SQRT2 - 1);
          return this.lines([[fA - 2 * eA, 0], [eA * CA, 0, eA, hA - hA * CA, eA, hA], [0, tA - 2 * hA], [0, hA * CA, -eA * CA, hA, -eA, hA], [2 * eA - fA, 0], [-eA * CA, 0, -eA, -hA * CA, -eA, -hA], [0, 2 * hA - tA], [0, -hA * CA, eA * CA, -hA, eA, -hA]], k + eA, oA, [1, 1], BA), this;
        }, S.ellipse = function(k, oA, fA, tA, eA) {
          var hA = 1.3333333333333333 * (Math.SQRT2 - 1) * fA, BA = 4 / 3 * (Math.SQRT2 - 1) * tA;
          return nA([vA((k + fA) * f), vA((F - oA) * f), "m", vA((k + fA) * f), vA((F - (oA - BA)) * f), vA((k + hA) * f), vA((F - (oA - tA)) * f), vA(k * f), vA((F - (oA - tA)) * f), "c"].join(" ")), nA([vA((k - hA) * f), vA((F - (oA - tA)) * f), vA((k - fA) * f), vA((F - (oA - BA)) * f), vA((k - fA) * f), vA((F - oA) * f), "c"].join(" ")), nA([vA((k - fA) * f), vA((F - (oA + BA)) * f), vA((k - hA) * f), vA((F - (oA + tA)) * f), vA(k * f), vA((F - (oA + tA)) * f), "c"].join(" ")), nA([vA((k + hA) * f), vA((F - (oA + tA)) * f), vA((k + fA) * f), vA((F - (oA + BA)) * f), vA((k + fA) * f), vA((F - oA) * f), "c"].join(" ")), eA !== null && nA(MA(eA)), this;
        }, S.circle = function(k, oA, fA, tA) {
          return this.ellipse(k, oA, fA, fA, tA);
        }, S.setProperties = function(k) {
          for (var oA in b)
            b.hasOwnProperty(oA) && k[oA] && (b[oA] = k[oA]);
          return this;
        }, S.setFontSize = function(k) {
          return Q = k, this;
        }, S.setFont = function(k, oA) {
          return w = ut(k, oA), this;
        }, S.setFontStyle = S.setFontType = function(k) {
          return w = ut(void 0, k), this;
        }, S.getFontList = function() {
          var k, oA, fA, tA = {};
          for (k in I)
            if (I.hasOwnProperty(k))
              for (oA in tA[k] = fA = [], I[k])
                I[k].hasOwnProperty(oA) && fA.push(oA);
          return tA;
        }, S.addFont = function(k, oA, fA, tA) {
          nt(k, oA, fA, tA = tA || "Identity-H");
        }, S.setLineWidth = function(k) {
          return nA((k * f).toFixed(2) + " w"), this;
        }, S.setDrawColor = function(k, oA, fA, tA) {
          return nA(cA({ ch1: k, ch2: oA, ch3: fA, ch4: tA, pdfColorType: "draw", precision: 2 })), this;
        }, S.setFillColor = function(k, oA, fA, tA) {
          return nA(cA({ ch1: k, ch2: oA, ch3: fA, ch4: tA, pdfColorType: "fill", precision: 2 })), this;
        }, S.setTextColor = function(k, oA, fA, tA) {
          return W = cA({ ch1: k, ch2: oA, ch3: fA, ch4: tA, pdfColorType: "text", precision: 3 }), this;
        }, S.setCharSpace = function(k) {
          return q = k, this;
        }, S.setR2L = function(k) {
          return K = k, this;
        }, S.CapJoinStyles = { 0: 0, butt: 0, but: 0, miter: 0, 1: 1, round: 1, rounded: 1, circle: 1, 2: 2, projecting: 2, project: 2, square: 2, bevel: 2 }, S.setLineCap = function(k) {
          var oA = this.CapJoinStyles[k];
          if (oA === void 0)
            throw new Error("Line cap style of '" + k + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
          return nA((x = oA) + " J"), this;
        }, S.setLineJoin = function(k) {
          var oA = this.CapJoinStyles[k];
          if (oA === void 0)
            throw new Error("Line join style of '" + k + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
          return nA((O = oA) + " j"), this;
        }, S.output = pe, S.save = function(k) {
          S.output("save", k);
        }, n.API)
          n.API.hasOwnProperty(_t) && (_t === "events" && n.API.events.length ? function(k, oA) {
            var fA, tA, eA;
            for (eA = oA.length - 1; eA !== -1; eA--)
              fA = oA[eA][0], tA = oA[eA][1], k.subscribe.apply(k, [fA].concat(typeof tA == "function" ? [tA] : tA));
          }(R, n.API.events) : S[_t] = n.API[_t]);
        return function() {
          for (var k = "helvetica", oA = "times", fA = "courier", tA = "normal", eA = "bold", hA = "italic", BA = "bolditalic", CA = [["Helvetica", k, tA, "WinAnsiEncoding"], ["Helvetica-Bold", k, eA, "WinAnsiEncoding"], ["Helvetica-Oblique", k, hA, "WinAnsiEncoding"], ["Helvetica-BoldOblique", k, BA, "WinAnsiEncoding"], ["Courier", fA, tA, "WinAnsiEncoding"], ["Courier-Bold", fA, eA, "WinAnsiEncoding"], ["Courier-Oblique", fA, hA, "WinAnsiEncoding"], ["Courier-BoldOblique", fA, BA, "WinAnsiEncoding"], ["Times-Roman", oA, tA, "WinAnsiEncoding"], ["Times-Bold", oA, eA, "WinAnsiEncoding"], ["Times-Italic", oA, hA, "WinAnsiEncoding"], ["Times-BoldItalic", oA, BA, "WinAnsiEncoding"], ["ZapfDingbats", "zapfdingbats", tA, null], ["Symbol", "symbol", tA, null]], yA = 0, LA = CA.length; yA < LA; yA++) {
            var jA = nt(CA[yA][0], CA[yA][1], CA[yA][2], CA[yA][3]), OA = CA[yA][0].split("-");
            PA(jA, OA[0], OA[1] || "");
          }
          R.publish("addFonts", { fonts: P, dictionary: I });
        }(), w = "F1", rt(l, i), R.publish("initialized"), S;
      }
      return n.API = { events: [] }, n.version = "0.0.0", t.exports ? (t.exports = n, t.exports.jsPDF = n) : a.jsPDF = n, n;
    }(typeof self < "u" && self || typeof window < "u" && window || typeof It < "u" && It || Function('return typeof this === "object" && this.content')() || Function("return this")());
    /** @preserve
       * jsPDF - PDF Document creation from JavaScript
       * Version 1.4.1 Built on 2018-06-06T07:49:34.040Z
       *                           CommitID 3233f44044
       *
       * Copyright (c) 2010-2016 James Hall <james@parall.ax>, https://github.com/MrRio/jsPDF
       *               2010 Aaron Spike, https://github.com/acspike
       *               2012 Willow Systems Corporation, willow-systems.com
       *               2012 Pablo Hess, https://github.com/pablohess
       *               2012 Florian Jenett, https://github.com/fjenett
       *               2013 Warren Weckesser, https://github.com/warrenweckesser
       *               2013 Youssef Beddad, https://github.com/lifof
       *               2013 Lee Driscoll, https://github.com/lsdriscoll
       *               2013 Stefan Slonevskiy, https://github.com/stefslon
       *               2013 Jeremy Morel, https://github.com/jmorel
       *               2013 Christoph Hartmann, https://github.com/chris-rock
       *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
       *               2014 James Makes, https://github.com/dollaruw
       *               2014 Diego Casorran, https://github.com/diegocr
       *               2014 Steven Spungin, https://github.com/Flamenco
       *               2014 Kenneth Glassey, https://github.com/Gavvers
       *
       * Licensed under the MIT License
       *
       * Contributor(s):
       *    siefkenj, ahwolf, rickygu, Midnith, saintclair, eaparango,
       *    kim3er, mfo, alnorth, Flamenco
       */
    (function(a, B) {
      var v, s, n = 1, i = function(x, O) {
        x.prototype = Object.create(O.prototype), x.prototype.constructor = x;
      }, c = function(x) {
        return x * (n / 1);
      }, l = function(x) {
        var O = new K(), h = rA.internal.getHeight(x) || 0, b = rA.internal.getWidth(x) || 0;
        return O.BBox = [0, 0, b.toFixed(2), h.toFixed(2)], O;
      }, u = function(x, O, h) {
        x = x || 0;
        var b = 1;
        return b <<= O - 1, (h = h || 1) == 1 ? x = x | b : x = x & ~b, x;
      }, p = function(x, O, h) {
        return h = h || 1.3, x = x || 0, O.readOnly == 1 && (x = u(x, 1)), O.required == 1 && (x = u(x, 2)), O.noExport == 1 && (x = u(x, 3)), O.multiline == 1 && (x = u(x, 13)), O.password && (x = u(x, 14)), O.noToggleToOff && (x = u(x, 15)), O.radio && (x = u(x, 16)), O.pushbutton && (x = u(x, 17)), O.combo && (x = u(x, 18)), O.edit && (x = u(x, 19)), O.sort && (x = u(x, 20)), O.fileSelect && 1.4 <= h && (x = u(x, 21)), O.multiSelect && 1.4 <= h && (x = u(x, 22)), O.doNotSpellCheck && 1.4 <= h && (x = u(x, 23)), O.doNotScroll == 1 && 1.4 <= h && (x = u(x, 24)), O.richText && 1.4 <= h && (x = u(x, 25)), x;
      }, w = function(x) {
        var O = x[0], h = x[1], b = x[2], S = x[3], R = {};
        return Array.isArray(O) ? (O[0] = c(O[0]), O[1] = c(O[1]), O[2] = c(O[2]), O[3] = c(O[3])) : (O = c(O), h = c(h), b = c(b), S = c(S)), R.lowerLeft_X = O || 0, R.lowerLeft_Y = c(s) - h - S || 0, R.upperRight_X = O + b || 0, R.upperRight_Y = c(s) - h || 0, [R.lowerLeft_X.toFixed(2), R.lowerLeft_Y.toFixed(2), R.upperRight_X.toFixed(2), R.upperRight_Y.toFixed(2)];
      }, f = function(x) {
        if (x.appearanceStreamContent)
          return x.appearanceStreamContent;
        if (x.V || x.DV) {
          var O = [], h = x.V || x.DV, b = d(x, h);
          O.push("/Tx BMC"), O.push("q"), O.push("/F1 " + b.fontSize.toFixed(2) + " Tf"), O.push("1 0 0 1 0 0 Tm"), O.push("BT"), O.push(b.text), O.push("ET"), O.push("Q"), O.push("EMC");
          var S = new l(x);
          return S.stream = O.join(`
`), S;
        }
      }, d = function(x, O, h, b) {
        b = b || 12, h = h || "helvetica";
        var S = { text: "", fontSize: "" }, R = (O = (O = O.substr(0, 1) == "(" ? O.substr(1) : O).substr(O.length - 1) == ")" ? O.substr(0, O.length - 1) : O).split(" "), iA = b, cA = rA.internal.getHeight(x) || 0;
        cA = cA < 0 ? -cA : cA;
        var gA = rA.internal.getWidth(x) || 0;
        gA = gA < 0 ? -gA : gA;
        var wA = function(xt, MA, oe) {
          if (xt + 1 < R.length) {
            var Jt = MA + " " + R[xt + 1];
            return C(Jt, oe + "px", h).width <= gA - 4;
          }
          return !1;
        };
        iA++;
        A:
          for (; ; ) {
            O = "";
            var pA = C("3", --iA + "px", h).height, UA = x.multiline ? cA - iA : (cA - pA) / 2, vA = -2, TA = UA += 2, nA = 0, ot = 0, ZA = 0;
            if (iA <= 0) {
              iA = 12, O = `(...) Tj
`, O += "% Width of Text: " + C(O, "1px").width + ", FieldWidth:" + gA + `
`;
              break;
            }
            ZA = C(R[0] + " ", iA + "px", h).width;
            var $A = "", mt = 0;
            for (var PA in R) {
              $A = ($A += R[PA] + " ").substr($A.length - 1) == " " ? $A.substr(0, $A.length - 1) : $A;
              var nt = parseInt(PA);
              ZA = C($A + " ", iA + "px", h).width;
              var lt = wA(nt, $A, iA), rt = PA >= R.length - 1;
              if (!lt || rt) {
                if (lt || rt) {
                  if (rt)
                    ot = nt;
                  else if (x.multiline && cA < (pA + 2) * (mt + 2) + 2)
                    continue A;
                } else {
                  if (!x.multiline || cA < (pA + 2) * (mt + 2) + 2)
                    continue A;
                  ot = nt;
                }
                for (var et = "", ut = nA; ut <= ot; ut++)
                  et += R[ut] + " ";
                switch (et = et.substr(et.length - 1) == " " ? et.substr(0, et.length - 1) : et, ZA = C(et, iA + "px", h).width, x.Q) {
                  case 2:
                    vA = gA - ZA - 2;
                    break;
                  case 1:
                    vA = (gA - ZA) / 2;
                    break;
                  case 0:
                  default:
                    vA = 2;
                }
                O += vA.toFixed(2) + " " + TA.toFixed(2) + ` Td
`, O += "(" + et + `) Tj
`, O += -vA.toFixed(2) + ` 0 Td
`, TA = -(iA + 2), ZA = 0, nA = ot + 1, mt++, $A = "";
              } else
                $A += " ";
            }
            break;
          }
        return S.text = O, S.fontSize = iA, S;
      }, C = function(x, O, h) {
        h = h || "helvetica";
        var b = v.internal.getFont(h), S = v.getStringUnitWidth(x, { font: b, fontSize: parseFloat(O), charSpace: 0 }) * parseFloat(O);
        return { height: v.getStringUnitWidth("3", { font: b, fontSize: parseFloat(O), charSpace: 0 }) * parseFloat(O) * 1.5, width: S };
      }, m = { fields: [], xForms: [], acroFormDictionaryRoot: null, printedOut: !1, internal: null, isInitialized: !1 }, F = function() {
        for (var x in v.internal.acroformPlugin.acroFormDictionaryRoot.Fields) {
          var O = v.internal.acroformPlugin.acroFormDictionaryRoot.Fields[x];
          O.hasAnnotation && H.call(v, O);
        }
      }, E = function(x) {
        v.internal.acroformPlugin.printedOut && (v.internal.acroformPlugin.printedOut = !1, v.internal.acroformPlugin.acroFormDictionaryRoot = null), v.internal.acroformPlugin.acroFormDictionaryRoot || W.call(v), v.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(x);
      }, H = function(x) {
        var O = { type: "reference", object: x };
        v.annotationPlugin.annotations[v.internal.getPageInfo(x.page).pageNumber].push(O);
      }, _ = function() {
        v.internal.acroformPlugin.acroFormDictionaryRoot !== void 0 ? v.internal.write("/AcroForm " + v.internal.acroformPlugin.acroFormDictionaryRoot.objId + " 0 R") : console.log("Root missing...");
      }, N = function() {
        v.internal.events.unsubscribe(v.internal.acroformPlugin.acroFormDictionaryRoot._eventID), delete v.internal.acroformPlugin.acroFormDictionaryRoot._eventID, v.internal.acroformPlugin.printedOut = !0;
      }, j = function(x) {
        var O = !x;
        x || (v.internal.newObjectDeferredBegin(v.internal.acroformPlugin.acroFormDictionaryRoot.objId), v.internal.out(v.internal.acroformPlugin.acroFormDictionaryRoot.getString())), x = x || v.internal.acroformPlugin.acroFormDictionaryRoot.Kids;
        for (var h in x) {
          var b = x[h], S = b.Rect;
          b.Rect && (b.Rect = w.call(this, b.Rect)), v.internal.newObjectDeferredBegin(b.objId);
          var R = b.objId + ` 0 obj
<<
`;
          if ((b === void 0 ? "undefined" : Dt(b)) === "object" && typeof b.getContent == "function" && (R += b.getContent()), b.Rect = S, b.hasAppearanceStream && !b.appearanceStreamContent) {
            var iA = f.call(this, b);
            R += "/AP << /N " + iA + ` >>
`, v.internal.acroformPlugin.xForms.push(iA);
          }
          if (b.appearanceStreamContent) {
            for (var cA in R += "/AP << ", b.appearanceStreamContent) {
              var gA = b.appearanceStreamContent[cA];
              if (R += "/" + cA + " ", R += "<< ", 1 <= Object.keys(gA).length || Array.isArray(gA))
                for (var h in gA) {
                  var wA;
                  typeof (wA = gA[h]) == "function" && (wA = wA.call(this, b)), R += "/" + h + " " + wA + " ", 0 <= v.internal.acroformPlugin.xForms.indexOf(wA) || v.internal.acroformPlugin.xForms.push(wA);
                }
              else
                typeof (wA = gA) == "function" && (wA = wA.call(this, b)), R += "/" + h + " " + wA + ` 
`, 0 <= v.internal.acroformPlugin.xForms.indexOf(wA) || v.internal.acroformPlugin.xForms.push(wA);
              R += ` >>
`;
            }
            R += `>>
`;
          }
          R += `>>
endobj
`, v.internal.out(R);
        }
        O && Z.call(this, v.internal.acroformPlugin.xForms);
      }, Z = function(x) {
        for (var O in x) {
          var h = O, b = x[O];
          v.internal.newObjectDeferredBegin(b && b.objId);
          var S = "";
          (b === void 0 ? "undefined" : Dt(b)) === "object" && typeof b.getString == "function" && (S = b.getString()), v.internal.out(S), delete x[h];
        }
      }, W = function() {
        if (this.internal !== void 0 && (this.internal.acroformPlugin === void 0 || this.internal.acroformPlugin.isInitialized === !1)) {
          if (v = this, $.FieldNum = 0, this.internal.acroformPlugin = JSON.parse(JSON.stringify(m)), this.internal.acroformPlugin.acroFormDictionaryRoot)
            throw new Error("Exception while creating AcroformDictionary");
          n = v.internal.scaleFactor, s = v.internal.pageSize.getHeight(), v.internal.acroformPlugin.acroFormDictionaryRoot = new z(), v.internal.acroformPlugin.acroFormDictionaryRoot._eventID = v.internal.events.subscribe("postPutResources", N), v.internal.events.subscribe("buildDocument", F), v.internal.events.subscribe("putCatalog", _), v.internal.events.subscribe("postPutPages", j), v.internal.acroformPlugin.isInitialized = !0;
        }
      }, V = function(x) {
        if (Array.isArray(x)) {
          var O = " [";
          for (var h in x)
            O += x[h].toString(), O += h < x.length - 1 ? " " : "";
          return O += "]";
        }
      }, Q = function(x) {
        return (x = x || "").indexOf("(") !== 0 && (x = "(" + x), x.substring(x.length - 1) != ")" && (x += ")"), x;
      }, q = function() {
        var x;
        Object.defineProperty(this, "objId", { get: function() {
          return x || (x = v.internal.newObjectDeferred()), x || console.log("Couldn't create Object ID"), x;
        }, configurable: !1 });
      };
      q.prototype.toString = function() {
        return this.objId + " 0 R";
      }, q.prototype.getString = function() {
        var x = this.objId + ` 0 obj
<<`;
        return x += this.getContent() + `>>
`, this.stream && (x += `stream
`, x += this.stream, x += `
endstream
`), x += `endobj
`;
      }, q.prototype.getContent = function() {
        var x = "";
        return x += function(O) {
          var h = "", b = Object.keys(O).filter(function(cA) {
            return cA != "content" && cA != "appearanceStreamContent" && cA.substring(0, 1) != "_";
          });
          for (var S in b) {
            var R = b[S], iA = O[R];
            iA && (Array.isArray(iA) ? h += "/" + R + " " + V(iA) + `
` : h += iA instanceof q ? "/" + R + " " + iA.objId + ` 0 R
` : "/" + R + " " + iA + `
`);
          }
          return h;
        }(this);
      };
      var K = function() {
        var x;
        q.call(this), this.Type = "/XObject", this.Subtype = "/Form", this.FormType = 1, this.BBox, this.Matrix, this.Resources = "2 0 R", this.PieceInfo, Object.defineProperty(this, "Length", { enumerable: !0, get: function() {
          return x !== void 0 ? x.length : 0;
        } }), Object.defineProperty(this, "stream", { enumerable: !1, set: function(O) {
          x = O.trim();
        }, get: function() {
          return x || null;
        } });
      };
      i(K, q);
      var z = function() {
        q.call(this);
        var x = [];
        Object.defineProperty(this, "Kids", { enumerable: !1, configurable: !0, get: function() {
          return 0 < x.length ? x : void 0;
        } }), Object.defineProperty(this, "Fields", { enumerable: !0, configurable: !0, get: function() {
          return x;
        } }), this.DA;
      };
      i(z, q);
      var $ = function x() {
        var O;
        q.call(this), Object.defineProperty(this, "Rect", { enumerable: !0, configurable: !1, get: function() {
          if (O)
            return O;
        }, set: function(cA) {
          O = cA;
        } });
        var h, b, S, R, iA = "";
        Object.defineProperty(this, "FT", { enumerable: !0, set: function(cA) {
          iA = cA;
        }, get: function() {
          return iA;
        } }), Object.defineProperty(this, "T", { enumerable: !0, configurable: !1, set: function(cA) {
          h = cA;
        }, get: function() {
          return !h || h.length < 1 ? this instanceof M ? void 0 : "(FieldObject" + x.FieldNum++ + ")" : h.substring(0, 1) == "(" && h.substring(h.length - 1) ? h : "(" + h + ")";
        } }), Object.defineProperty(this, "DA", { enumerable: !0, get: function() {
          if (b)
            return "(" + b + ")";
        }, set: function(cA) {
          b = cA;
        } }), Object.defineProperty(this, "DV", { enumerable: !0, configurable: !0, get: function() {
          if (S)
            return S;
        }, set: function(cA) {
          S = cA;
        } }), Object.defineProperty(this, "V", { enumerable: !0, configurable: !0, get: function() {
          if (R)
            return R;
        }, set: function(cA) {
          R = cA;
        } }), Object.defineProperty(this, "Type", { enumerable: !0, get: function() {
          return this.hasAnnotation ? "/Annot" : null;
        } }), Object.defineProperty(this, "Subtype", { enumerable: !0, get: function() {
          return this.hasAnnotation ? "/Widget" : null;
        } }), this.BG, Object.defineProperty(this, "hasAnnotation", { enumerable: !1, get: function() {
          return !!(this.Rect || this.BC || this.BG);
        } }), Object.defineProperty(this, "hasAppearanceStream", { enumerable: !1, configurable: !0, writable: !0 }), Object.defineProperty(this, "page", { enumerable: !1, configurable: !0, writable: !0 });
      };
      i($, q);
      var uA = function() {
        $.call(this), this.FT = "/Ch", this.Opt = [], this.V = "()", this.TI = 0;
        var x = !1;
        Object.defineProperty(this, "combo", { enumerable: !1, get: function() {
          return x;
        }, set: function(O) {
          x = O;
        } }), Object.defineProperty(this, "edit", { enumerable: !0, set: function(O) {
          O == 1 ? (this._edit = !0, this.combo = !0) : this._edit = !1;
        }, get: function() {
          return !!this._edit && this._edit;
        }, configurable: !1 }), this.hasAppearanceStream = !0;
      };
      i(uA, $);
      var AA = function() {
        uA.call(this), this.combo = !1;
      };
      i(AA, uA);
      var L = function() {
        AA.call(this), this.combo = !0;
      };
      i(L, AA);
      var U = function() {
        L.call(this), this.edit = !0;
      };
      i(U, L);
      var P = function() {
        $.call(this), this.FT = "/Btn";
      };
      i(P, $);
      var I = function() {
        P.call(this);
        var x = !0;
        Object.defineProperty(this, "pushbutton", { enumerable: !1, get: function() {
          return x;
        }, set: function(O) {
          x = O;
        } });
      };
      i(I, P);
      var G = function() {
        P.call(this);
        var x = !0;
        Object.defineProperty(this, "radio", { enumerable: !1, get: function() {
          return x;
        }, set: function(b) {
          x = b;
        } });
        var O, h = [];
        Object.defineProperty(this, "Kids", { enumerable: !0, get: function() {
          if (0 < h.length)
            return h;
        } }), Object.defineProperty(this, "__Kids", { get: function() {
          return h;
        } }), Object.defineProperty(this, "noToggleToOff", { enumerable: !1, get: function() {
          return O;
        }, set: function(b) {
          O = b;
        } });
      };
      i(G, P);
      var M = function(x, O) {
        $.call(this), this.Parent = x, this._AppearanceType = rA.RadioButton.Circle, this.appearanceStreamContent = this._AppearanceType.createAppearanceStream(O), this.F = u(this.F, 3, 1), this.MK = this._AppearanceType.createMK(), this.AS = "/Off", this._Name = O;
      };
      i(M, $), G.prototype.setAppearance = function(x) {
        if ("createAppearanceStream" in x && "createMK" in x)
          for (var O in this.__Kids) {
            var h = this.__Kids[O];
            h.appearanceStreamContent = x.createAppearanceStream(h._Name), h.MK = x.createMK();
          }
        else
          console.log("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");
      }, G.prototype.createOption = function(x) {
        this.__Kids.length;
        var O = new M(this, x);
        return this.__Kids.push(O), a.addField(O), O;
      };
      var sA = function() {
        P.call(this), this.appearanceStreamContent = rA.CheckBox.createAppearanceStream(), this.MK = rA.CheckBox.createMK(), this.AS = "/On", this.V = "/On";
      };
      i(sA, P);
      var X = function() {
        var x, O;
        $.call(this), this.DA = rA.createDefaultAppearanceStream(), this.F = 4, Object.defineProperty(this, "V", { get: function() {
          return x && Q(x);
        }, enumerable: !0, set: function(cA) {
          x = cA;
        } }), Object.defineProperty(this, "DV", { get: function() {
          return O && Q(O);
        }, enumerable: !0, set: function(cA) {
          O = cA;
        } });
        var h = !1;
        Object.defineProperty(this, "multiline", { enumerable: !1, get: function() {
          return h;
        }, set: function(cA) {
          h = cA;
        } });
        var b = !1;
        Object.defineProperty(this, "fileSelect", { enumerable: !1, get: function() {
          return b;
        }, set: function(cA) {
          b = cA;
        } });
        var S = !1;
        Object.defineProperty(this, "doNotSpellCheck", { enumerable: !1, get: function() {
          return S;
        }, set: function(cA) {
          S = cA;
        } });
        var R = !1;
        Object.defineProperty(this, "doNotScroll", { enumerable: !1, get: function() {
          return R;
        }, set: function(cA) {
          R = cA;
        } });
        var iA = !1;
        Object.defineProperty(this, "MaxLen", { enumerable: !0, get: function() {
          return iA;
        }, set: function(cA) {
          iA = cA;
        } }), Object.defineProperty(this, "hasAppearanceStream", { enumerable: !1, get: function() {
          return this.V || this.DV;
        } });
      };
      i(X, $);
      var lA = function() {
        X.call(this);
        var x = !0;
        Object.defineProperty(this, "password", { enumerable: !1, get: function() {
          return x;
        }, set: function(O) {
          x = O;
        } });
      };
      i(lA, X);
      var rA = { CheckBox: { createAppearanceStream: function() {
        return { N: { On: rA.CheckBox.YesNormal }, D: { On: rA.CheckBox.YesPushDown, Off: rA.CheckBox.OffPushDown } };
      }, createMK: function() {
        return "<< /CA (3)>>";
      }, YesPushDown: function(x) {
        var O = l(x), h = [], b = v.internal.getFont("zapfdingbats", "normal").id;
        x.Q = 1;
        var S = d(x, "3", "ZapfDingbats", 50);
        return h.push("0.749023 g"), h.push("0 0 " + rA.internal.getWidth(x).toFixed(2) + " " + rA.internal.getHeight(x).toFixed(2) + " re"), h.push("f"), h.push("BMC"), h.push("q"), h.push("0 0 1 rg"), h.push("/" + b + " " + S.fontSize.toFixed(2) + " Tf 0 g"), h.push("BT"), h.push(S.text), h.push("ET"), h.push("Q"), h.push("EMC"), O.stream = h.join(`
`), O;
      }, YesNormal: function(x) {
        var O = l(x), h = v.internal.getFont("zapfdingbats", "normal").id, b = [];
        x.Q = 1;
        var S = rA.internal.getHeight(x), R = rA.internal.getWidth(x), iA = d(x, "3", "ZapfDingbats", 0.9 * S);
        return b.push("1 g"), b.push("0 0 " + R.toFixed(2) + " " + S.toFixed(2) + " re"), b.push("f"), b.push("q"), b.push("0 0 1 rg"), b.push("0 0 " + (R - 1).toFixed(2) + " " + (S - 1).toFixed(2) + " re"), b.push("W"), b.push("n"), b.push("0 g"), b.push("BT"), b.push("/" + h + " " + iA.fontSize.toFixed(2) + " Tf 0 g"), b.push(iA.text), b.push("ET"), b.push("Q"), O.stream = b.join(`
`), O;
      }, OffPushDown: function(x) {
        var O = l(x), h = [];
        return h.push("0.749023 g"), h.push("0 0 " + rA.internal.getWidth(x).toFixed(2) + " " + rA.internal.getHeight(x).toFixed(2) + " re"), h.push("f"), O.stream = h.join(`
`), O;
      } }, RadioButton: { Circle: { createAppearanceStream: function(x) {
        var O = { D: { Off: rA.RadioButton.Circle.OffPushDown }, N: {} };
        return O.N[x] = rA.RadioButton.Circle.YesNormal, O.D[x] = rA.RadioButton.Circle.YesPushDown, O;
      }, createMK: function() {
        return "<< /CA (l)>>";
      }, YesNormal: function(x) {
        var O = l(x), h = [], b = rA.internal.getWidth(x) <= rA.internal.getHeight(x) ? rA.internal.getWidth(x) / 4 : rA.internal.getHeight(x) / 4;
        b *= 0.9;
        var S = rA.internal.Bezier_C;
        return h.push("q"), h.push("1 0 0 1 " + rA.internal.getWidth(x) / 2 + " " + rA.internal.getHeight(x) / 2 + " cm"), h.push(b + " 0 m"), h.push(b + " " + b * S + " " + b * S + " " + b + " 0 " + b + " c"), h.push("-" + b * S + " " + b + " -" + b + " " + b * S + " -" + b + " 0 c"), h.push("-" + b + " -" + b * S + " -" + b * S + " -" + b + " 0 -" + b + " c"), h.push(b * S + " -" + b + " " + b + " -" + b * S + " " + b + " 0 c"), h.push("f"), h.push("Q"), O.stream = h.join(`
`), O;
      }, YesPushDown: function(x) {
        var O = l(x), h = [], b = rA.internal.getWidth(x) <= rA.internal.getHeight(x) ? rA.internal.getWidth(x) / 4 : rA.internal.getHeight(x) / 4, S = 2 * (b *= 0.9), R = S * rA.internal.Bezier_C, iA = b * rA.internal.Bezier_C;
        return h.push("0.749023 g"), h.push("q"), h.push("1 0 0 1 " + (rA.internal.getWidth(x) / 2).toFixed(2) + " " + (rA.internal.getHeight(x) / 2).toFixed(2) + " cm"), h.push(S + " 0 m"), h.push(S + " " + R + " " + R + " " + S + " 0 " + S + " c"), h.push("-" + R + " " + S + " -" + S + " " + R + " -" + S + " 0 c"), h.push("-" + S + " -" + R + " -" + R + " -" + S + " 0 -" + S + " c"), h.push(R + " -" + S + " " + S + " -" + R + " " + S + " 0 c"), h.push("f"), h.push("Q"), h.push("0 g"), h.push("q"), h.push("1 0 0 1 " + (rA.internal.getWidth(x) / 2).toFixed(2) + " " + (rA.internal.getHeight(x) / 2).toFixed(2) + " cm"), h.push(b + " 0 m"), h.push(b + " " + iA + " " + iA + " " + b + " 0 " + b + " c"), h.push("-" + iA + " " + b + " -" + b + " " + iA + " -" + b + " 0 c"), h.push("-" + b + " -" + iA + " -" + iA + " -" + b + " 0 -" + b + " c"), h.push(iA + " -" + b + " " + b + " -" + iA + " " + b + " 0 c"), h.push("f"), h.push("Q"), O.stream = h.join(`
`), O;
      }, OffPushDown: function(x) {
        var O = l(x), h = [], b = rA.internal.getWidth(x) <= rA.internal.getHeight(x) ? rA.internal.getWidth(x) / 4 : rA.internal.getHeight(x) / 4, S = 2 * (b *= 0.9), R = S * rA.internal.Bezier_C;
        return h.push("0.749023 g"), h.push("q"), h.push("1 0 0 1 " + (rA.internal.getWidth(x) / 2).toFixed(2) + " " + (rA.internal.getHeight(x) / 2).toFixed(2) + " cm"), h.push(S + " 0 m"), h.push(S + " " + R + " " + R + " " + S + " 0 " + S + " c"), h.push("-" + R + " " + S + " -" + S + " " + R + " -" + S + " 0 c"), h.push("-" + S + " -" + R + " -" + R + " -" + S + " 0 -" + S + " c"), h.push(R + " -" + S + " " + S + " -" + R + " " + S + " 0 c"), h.push("f"), h.push("Q"), O.stream = h.join(`
`), O;
      } }, Cross: { createAppearanceStream: function(x) {
        var O = { D: { Off: rA.RadioButton.Cross.OffPushDown }, N: {} };
        return O.N[x] = rA.RadioButton.Cross.YesNormal, O.D[x] = rA.RadioButton.Cross.YesPushDown, O;
      }, createMK: function() {
        return "<< /CA (8)>>";
      }, YesNormal: function(x) {
        var O = l(x), h = [], b = rA.internal.calculateCross(x);
        return h.push("q"), h.push("1 1 " + (rA.internal.getWidth(x) - 2).toFixed(2) + " " + (rA.internal.getHeight(x) - 2).toFixed(2) + " re"), h.push("W"), h.push("n"), h.push(b.x1.x.toFixed(2) + " " + b.x1.y.toFixed(2) + " m"), h.push(b.x2.x.toFixed(2) + " " + b.x2.y.toFixed(2) + " l"), h.push(b.x4.x.toFixed(2) + " " + b.x4.y.toFixed(2) + " m"), h.push(b.x3.x.toFixed(2) + " " + b.x3.y.toFixed(2) + " l"), h.push("s"), h.push("Q"), O.stream = h.join(`
`), O;
      }, YesPushDown: function(x) {
        var O = l(x), h = rA.internal.calculateCross(x), b = [];
        return b.push("0.749023 g"), b.push("0 0 " + rA.internal.getWidth(x).toFixed(2) + " " + rA.internal.getHeight(x).toFixed(2) + " re"), b.push("f"), b.push("q"), b.push("1 1 " + (rA.internal.getWidth(x) - 2).toFixed(2) + " " + (rA.internal.getHeight(x) - 2).toFixed(2) + " re"), b.push("W"), b.push("n"), b.push(h.x1.x.toFixed(2) + " " + h.x1.y.toFixed(2) + " m"), b.push(h.x2.x.toFixed(2) + " " + h.x2.y.toFixed(2) + " l"), b.push(h.x4.x.toFixed(2) + " " + h.x4.y.toFixed(2) + " m"), b.push(h.x3.x.toFixed(2) + " " + h.x3.y.toFixed(2) + " l"), b.push("s"), b.push("Q"), O.stream = b.join(`
`), O;
      }, OffPushDown: function(x) {
        var O = l(x), h = [];
        return h.push("0.749023 g"), h.push("0 0 " + rA.internal.getWidth(x).toFixed(2) + " " + rA.internal.getHeight(x).toFixed(2) + " re"), h.push("f"), O.stream = h.join(`
`), O;
      } } }, createDefaultAppearanceStream: function(x) {
        return "/F1 0 Tf 0 g";
      } };
      rA.internal = { Bezier_C: 0.551915024494, calculateCross: function(x) {
        var O, h, b = rA.internal.getWidth(x), S = rA.internal.getHeight(x), R = (h = S) < (O = b) ? h : O;
        return { x1: { x: (b - R) / 2, y: (S - R) / 2 + R }, x2: { x: (b - R) / 2 + R, y: (S - R) / 2 }, x3: { x: (b - R) / 2, y: (S - R) / 2 }, x4: { x: (b - R) / 2 + R, y: (S - R) / 2 + R } };
      } }, rA.internal.getWidth = function(x) {
        var O = 0;
        return (x === void 0 ? "undefined" : Dt(x)) === "object" && (O = c(x.Rect[2])), O;
      }, rA.internal.getHeight = function(x) {
        var O = 0;
        return (x === void 0 ? "undefined" : Dt(x)) === "object" && (O = c(x.Rect[3])), O;
      }, a.addField = function(x) {
        return W.call(this), x instanceof X ? this.addTextField.call(this, x) : x instanceof uA ? this.addChoiceField.call(this, x) : x instanceof P ? this.addButton.call(this, x) : x instanceof M ? E.call(this, x) : x && E.call(this, x), x.page = v.internal.getCurrentPageInfo().pageNumber, this;
      }, a.addButton = function(x) {
        W.call(this);
        var O = x || new $();
        O.FT = "/Btn", O.Ff = p(O.Ff, x, v.internal.getPDFVersion()), E.call(this, O);
      }, a.addTextField = function(x) {
        W.call(this);
        var O = x || new $();
        O.FT = "/Tx", O.Ff = p(O.Ff, x, v.internal.getPDFVersion()), E.call(this, O);
      }, a.addChoiceField = function(x) {
        W.call(this);
        var O = x || new $();
        O.FT = "/Ch", O.Ff = p(O.Ff, x, v.internal.getPDFVersion()), E.call(this, O);
      }, (B === void 0 ? "undefined" : Dt(B)) == "object" && (B.ChoiceField = uA, B.ListBox = AA, B.ComboBox = L, B.EditBox = U, B.Button = P, B.PushButton = I, B.RadioButton = G, B.CheckBox = sA, B.TextField = X, B.PasswordField = lA, B.AcroForm = { Appearance: rA }), a.AcroFormChoiceField = uA, a.AcroFormListBox = AA, a.AcroFormComboBox = L, a.AcroFormEditBox = U, a.AcroFormButton = P, a.AcroFormPushButton = I, a.AcroFormRadioButton = G, a.AcroFormCheckBox = sA, a.AcroFormTextField = X, a.AcroFormPasswordField = lA, a.AcroForm = { ChoiceField: uA, ListBox: AA, ComboBox: L, EditBox: U, Button: P, PushButton: I, RadioButton: G, CheckBox: sA, TextField: X, PasswordField: lA };
    })(at.API, typeof window < "u" && window || typeof It < "u" && It), at.API.addHTML = function(a, B, v, s, n) {
      if (typeof html2canvas > "u" && typeof rasterizeHTML > "u")
        throw new Error("You need either https://github.com/niklasvh/html2canvas or https://github.com/cburgmer/rasterizeHTML.js");
      typeof B != "number" && (s = B, n = v), typeof s == "function" && (n = s, s = null), typeof n != "function" && (n = function() {
      });
      var i = this.internal, c = i.scaleFactor, l = i.pageSize.getWidth(), u = i.pageSize.getHeight();
      if ((s = s || {}).onrendered = (function(w) {
        B = parseInt(B) || 0, v = parseInt(v) || 0;
        var f = s.dim || {}, d = Object.assign({ top: 0, right: 0, bottom: 0, left: 0, useFor: "content" }, s.margin), C = f.h || Math.min(u, w.height / c), m = f.w || Math.min(l, w.width / c) - B, F = s.format || "JPEG", E = s.imageCompression || "SLOW";
        if (w.height > u - d.top - d.bottom && s.pagesplit) {
          var H = function(W, V, Q, q, K) {
            var z = document.createElement("canvas");
            z.height = K, z.width = q;
            var $ = z.getContext("2d");
            return $.mozImageSmoothingEnabled = !1, $.webkitImageSmoothingEnabled = !1, $.msImageSmoothingEnabled = !1, $.imageSmoothingEnabled = !1, $.fillStyle = s.backgroundColor || "#ffffff", $.fillRect(0, 0, q, K), $.drawImage(W, V, Q, q, K, 0, 0, q, K), z;
          }, _ = (function() {
            for (var W, V, Q = 0, q = 0, K = {}, z = !1; ; ) {
              var $;
              if (q = 0, K.top = Q !== 0 ? d.top : v, K.left = Q !== 0 ? d.left : B, z = (l - d.left - d.right) * c < w.width, d.useFor === "content" ? Q === 0 ? (W = Math.min((l - d.left) * c, w.width), V = Math.min((u - d.top) * c, w.height - Q)) : (W = Math.min(l * c, w.width), V = Math.min(u * c, w.height - Q), K.top = 0) : (W = Math.min((l - d.left - d.right) * c, w.width), V = Math.min((u - d.bottom - d.top) * c, w.height - Q)), z)
                for (; ; ) {
                  d.useFor === "content" && (q === 0 ? W = Math.min((l - d.left) * c, w.width) : (W = Math.min(l * c, w.width - q), K.left = 0));
                  var uA = [$ = H(w, q, Q, W, V), K.left, K.top, $.width / c, $.height / c, F, null, E];
                  if (this.addImage.apply(this, uA), (q += W) >= w.width)
                    break;
                  this.addPage();
                }
              else
                uA = [$ = H(w, 0, Q, W, V), K.left, K.top, $.width / c, $.height / c, F, null, E], this.addImage.apply(this, uA);
              if ((Q += V) >= w.height)
                break;
              this.addPage();
            }
            n(m, Q, null, uA);
          }).bind(this);
          if (w.nodeName === "CANVAS") {
            var N = new Image();
            N.onload = _, N.src = w.toDataURL("image/png"), w = N;
          } else
            _();
        } else {
          var j = Math.random().toString(35), Z = [w, B, v, m, C, F, j, E];
          this.addImage.apply(this, Z), n(m, C, j, Z);
        }
      }).bind(this), typeof html2canvas < "u" && !s.rstz)
        return html2canvas(a, s);
      if (typeof rasterizeHTML < "u") {
        var p = "drawDocument";
        return typeof a == "string" && (p = /^http/.test(a) ? "drawURL" : "drawHTML"), s.width = s.width || l * c, rasterizeHTML[p](a, void 0, s).then(function(w) {
          s.onrendered(w.image);
        }, function(w) {
          n(null, w);
        });
      }
      return null;
    }, /** @preserve
       * jsPDF addImage plugin
       * Copyright (c) 2012 Jason Siefken, https://github.com/siefkenj/
       *               2013 Chris Dowling, https://github.com/gingerchris
       *               2013 Trinh Ho, https://github.com/ineedfat
       *               2013 Edwin Alejandro Perez, https://github.com/eaparango
       *               2013 Norah Smith, https://github.com/burnburnrocket
       *               2014 Diego Casorran, https://github.com/diegocr
       *               2014 James Robb, https://github.com/jamesbrobb
       *
       * 
       */
    function(a) {
      var B = "addImage_", v = { PNG: [[137, 80, 78, 71]], TIFF: [[77, 77, 0, 42], [73, 73, 42, 0]], JPEG: [[255, 216, 255, 224, void 0, void 0, 74, 70, 73, 70, 0], [255, 216, 255, 225, void 0, void 0, 69, 120, 105, 102, 0, 0]], JPEG2000: [[0, 0, 0, 12, 106, 80, 32, 32]], GIF87a: [[71, 73, 70, 56, 55, 97]], GIF89a: [[71, 73, 70, 56, 57, 97]], BMP: [[66, 77], [66, 65], [67, 73], [67, 80], [73, 67], [80, 84]] };
      a.getImageFileTypeByImageData = function(f, d) {
        var C, m;
        d = d || "UNKNOWN";
        var F, E, H, _ = "UNKNOWN";
        for (H in v)
          for (F = v[H], C = 0; C < F.length; C += 1) {
            for (E = !0, m = 0; m < F[C].length; m += 1)
              if (F[C][m] !== void 0 && F[C][m] !== f.charCodeAt(m)) {
                E = !1;
                break;
              }
            if (E === !0) {
              _ = H;
              break;
            }
          }
        return _ === "UNKOWN" && d !== "UNKNOWN" && (console.warn('FileType of Image not recognized. Processing image as "' + d + '".'), _ = d), _;
      };
      var s = function f(d) {
        var C = this.internal.newObject(), m = this.internal.write, F = this.internal.putStream;
        if (d.n = C, m("<</Type /XObject"), m("/Subtype /Image"), m("/Width " + d.w), m("/Height " + d.h), d.cs === this.color_spaces.INDEXED ? m("/ColorSpace [/Indexed /DeviceRGB " + (d.pal.length / 3 - 1) + " " + ("smask" in d ? C + 2 : C + 1) + " 0 R]") : (m("/ColorSpace /" + d.cs), d.cs === this.color_spaces.DEVICE_CMYK && m("/Decode [1 0 1 0 1 0 1 0]")), m("/BitsPerComponent " + d.bpc), "f" in d && m("/Filter /" + d.f), "dp" in d && m("/DecodeParms <<" + d.dp + ">>"), "trns" in d && d.trns.constructor == Array) {
          for (var E = "", H = 0, _ = d.trns.length; H < _; H++)
            E += d.trns[H] + " " + d.trns[H] + " ";
          m("/Mask [" + E + "]");
        }
        if ("smask" in d && m("/SMask " + (C + 1) + " 0 R"), m("/Length " + d.data.length + ">>"), F(d.data), m("endobj"), "smask" in d) {
          var N = "/Predictor " + d.p + " /Colors 1 /BitsPerComponent " + d.bpc + " /Columns " + d.w, j = { w: d.w, h: d.h, cs: "DeviceGray", bpc: d.bpc, dp: N, data: d.smask };
          "f" in d && (j.f = d.f), f.call(this, j);
        }
        d.cs === this.color_spaces.INDEXED && (this.internal.newObject(), m("<< /Length " + d.pal.length + ">>"), F(this.arrayBufferToBinaryString(new Uint8Array(d.pal))), m("endobj"));
      }, n = function() {
        var f = this.internal.collections[B + "images"];
        for (var d in f)
          s.call(this, f[d]);
      }, i = function() {
        var f, d = this.internal.collections[B + "images"], C = this.internal.write;
        for (var m in d)
          C("/I" + (f = d[m]).i, f.n, "0", "R");
      }, c = function(f) {
        return typeof a["process" + f.toUpperCase()] == "function";
      }, l = function(f) {
        return (f === void 0 ? "undefined" : Dt(f)) === "object" && f.nodeType === 1;
      }, u = function(f, d) {
        if (f.nodeName === "IMG" && f.hasAttribute("src")) {
          var C = "" + f.getAttribute("src");
          if (C.indexOf("data:image/") === 0)
            return C;
          !d && /\.png(?:[?#].*)?$/i.test(C) && (d = "png");
        }
        if (f.nodeName === "CANVAS")
          var m = f;
        else {
          (m = document.createElement("canvas")).width = f.clientWidth || f.width, m.height = f.clientHeight || f.height;
          var F = m.getContext("2d");
          if (!F)
            throw "addImage requires canvas to be supported by browser.";
          F.drawImage(f, 0, 0, m.width, m.height);
        }
        return m.toDataURL(("" + d).toLowerCase() == "png" ? "image/png" : "image/jpeg");
      }, p = function(f, d) {
        var C;
        if (d) {
          for (var m in d)
            if (f === d[m].alias) {
              C = d[m];
              break;
            }
        }
        return C;
      };
      a.color_spaces = { DEVICE_RGB: "DeviceRGB", DEVICE_GRAY: "DeviceGray", DEVICE_CMYK: "DeviceCMYK", CAL_GREY: "CalGray", CAL_RGB: "CalRGB", LAB: "Lab", ICC_BASED: "ICCBased", INDEXED: "Indexed", PATTERN: "Pattern", SEPARATION: "Separation", DEVICE_N: "DeviceN" }, a.decode = { DCT_DECODE: "DCTDecode", FLATE_DECODE: "FlateDecode", LZW_DECODE: "LZWDecode", JPX_DECODE: "JPXDecode", JBIG2_DECODE: "JBIG2Decode", ASCII85_DECODE: "ASCII85Decode", ASCII_HEX_DECODE: "ASCIIHexDecode", RUN_LENGTH_DECODE: "RunLengthDecode", CCITT_FAX_DECODE: "CCITTFaxDecode" }, a.image_compression = { NONE: "NONE", FAST: "FAST", MEDIUM: "MEDIUM", SLOW: "SLOW" }, a.sHashCode = function(f) {
        return f = f || "", Array.prototype.reduce && f.split("").reduce(function(d, C) {
          return (d = (d << 5) - d + C.charCodeAt(0)) & d;
        }, 0);
      }, a.isString = function(f) {
        return typeof f == "string";
      }, a.validateStringAsBase64 = function(f) {
        var d = !0;
        return (f = f || "").length % 4 != 0 && (d = !1), /[A-Za-z0-9\/]+/.test(f.substr(0, f.length - 2)) === !1 && (d = !1), /[A-Za-z0-9\/][A-Za-z0-9+\/]|[A-Za-z0-9+\/]=|==/.test(f.substr(-2)) === !1 && (d = !1), d;
      }, a.extractInfoFromBase64DataURI = function(f) {
        return /^data:([\w]+?\/([\w]+?));base64,(.+)$/g.exec(f);
      }, a.supportsArrayBuffer = function() {
        return typeof ArrayBuffer < "u" && typeof Uint8Array < "u";
      }, a.isArrayBuffer = function(f) {
        return !!this.supportsArrayBuffer() && f instanceof ArrayBuffer;
      }, a.isArrayBufferView = function(f) {
        return !!this.supportsArrayBuffer() && typeof Uint32Array < "u" && (f instanceof Int8Array || f instanceof Uint8Array || typeof Uint8ClampedArray < "u" && f instanceof Uint8ClampedArray || f instanceof Int16Array || f instanceof Uint16Array || f instanceof Int32Array || f instanceof Uint32Array || f instanceof Float32Array || f instanceof Float64Array);
      }, a.binaryStringToUint8Array = function(f) {
        for (var d = f.length, C = new Uint8Array(d), m = 0; m < d; m++)
          C[m] = f.charCodeAt(m);
        return C;
      }, a.arrayBufferToBinaryString = function(f) {
        if (typeof atob == "function")
          return atob(this.arrayBufferToBase64(f));
        if (typeof TextDecoder == "function") {
          var d = new TextDecoder("ascii");
          if (d.encoding === "ascii")
            return d.decode(f);
        }
        for (var C = this.isArrayBuffer(f) ? f : new Uint8Array(f), m = 20480, F = "", E = Math.ceil(C.byteLength / m), H = 0; H < E; H++)
          F += String.fromCharCode.apply(null, C.slice(H * m, H * m + m));
        return F;
      }, a.arrayBufferToBase64 = function(f) {
        for (var d, C = "", m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", F = new Uint8Array(f), E = F.byteLength, H = E % 3, _ = E - H, N = 0; N < _; N += 3)
          C += m[(16515072 & (d = F[N] << 16 | F[N + 1] << 8 | F[N + 2])) >> 18] + m[(258048 & d) >> 12] + m[(4032 & d) >> 6] + m[63 & d];
        return H == 1 ? C += m[(252 & (d = F[_])) >> 2] + m[(3 & d) << 4] + "==" : H == 2 && (C += m[(64512 & (d = F[_] << 8 | F[_ + 1])) >> 10] + m[(1008 & d) >> 4] + m[(15 & d) << 2] + "="), C;
      }, a.createImageInfo = function(f, d, C, m, F, E, H, _, N, j, Z, W, V) {
        var Q = { alias: _, w: d, h: C, cs: m, bpc: F, i: H, data: f };
        return E && (Q.f = E), N && (Q.dp = N), j && (Q.trns = j), Z && (Q.pal = Z), W && (Q.smask = W), V && (Q.p = V), Q;
      }, a.addImage = function(f, d, C, m, F, E, H, _, N) {
        var j = "";
        if (typeof d != "string") {
          var Z = E;
          E = F, F = m, m = C, C = d, d = Z;
        }
        if ((f === void 0 ? "undefined" : Dt(f)) === "object" && !l(f) && "imageData" in f) {
          var W = f;
          f = W.imageData, d = W.format || d, C = W.x || C || 0, m = W.y || m || 0, F = W.w || F, E = W.h || E, H = W.alias || H, _ = W.compression || _, N = W.rotation || W.angle || N;
        }
        if (isNaN(C) || isNaN(m))
          throw console.error("jsPDF.addImage: Invalid coordinates", arguments), new Error("Invalid coordinates passed to jsPDF.addImage");
        var V, Q, q, K, z, $, uA, AA = (function() {
          var L = this.internal.collections[B + "images"];
          return L || (this.internal.collections[B + "images"] = L = {}, this.internal.events.subscribe("putResources", n), this.internal.events.subscribe("putXobjectDict", i)), L;
        }).call(this);
        if (!(V = p(f, AA)) && (l(f) && (f = u(f, d)), ((uA = H) == null || uA.length === 0) && (H = typeof ($ = f) == "string" && a.sHashCode($)), !(V = p(H, AA)))) {
          if (this.isString(f) && ((j = this.convertStringToImageData(f)) !== "" || (j = this.loadImageFile(f)) !== void 0) && (f = j), d = this.getImageFileTypeByImageData(f, d), !c(d))
            throw new Error("addImage does not support files of type '" + d + "', please ensure that a plugin for '" + d + "' support is added.");
          if (this.supportsArrayBuffer() && (f instanceof Uint8Array || (Q = f, f = this.binaryStringToUint8Array(f))), !(V = this["process" + d.toUpperCase()](f, (z = 0, (K = AA) && (z = Object.keys ? Object.keys(K).length : function(L) {
            var U = 0;
            for (var P in L)
              L.hasOwnProperty(P) && U++;
            return U;
          }(K)), z), H, ((q = _) && typeof q == "string" && (q = q.toUpperCase()), q in a.image_compression ? q : a.image_compression.NONE), Q)))
            throw new Error("An unkwown error occurred whilst processing the image");
        }
        return (function(L, U, P, I, G, M, sA, X) {
          var lA = (function(R, iA, cA) {
            return R || iA || (iA = R = -96), R < 0 && (R = -1 * cA.w * 72 / R / this.internal.scaleFactor), iA < 0 && (iA = -1 * cA.h * 72 / iA / this.internal.scaleFactor), R === 0 && (R = iA * cA.w / cA.h), iA === 0 && (iA = R * cA.h / cA.w), [R, iA];
          }).call(this, P, I, G), rA = this.internal.getCoordinateString, x = this.internal.getVerticalCoordinateString;
          if (P = lA[0], I = lA[1], sA[M] = G, X) {
            X *= Math.PI / 180;
            var O = Math.cos(X), h = Math.sin(X), b = function(R) {
              return R.toFixed(4);
            }, S = [b(O), b(h), b(-1 * h), b(O), 0, 0, "cm"];
          }
          this.internal.write("q"), X ? (this.internal.write([1, "0", "0", 1, rA(L), x(U + I), "cm"].join(" ")), this.internal.write(S.join(" ")), this.internal.write([rA(P), "0", "0", rA(I), "0", "0", "cm"].join(" "))) : this.internal.write([rA(P), "0", "0", rA(I), rA(L), x(U + I), "cm"].join(" ")), this.internal.write("/I" + G.i + " Do"), this.internal.write("Q");
        }).call(this, C, m, F, E, V, V.i, AA, N), this;
      }, a.convertStringToImageData = function(f) {
        var d, C = "";
        return this.isString(f) && ((d = this.extractInfoFromBase64DataURI(f)) !== null ? a.validateStringAsBase64(d[3]) && (C = atob(d[3])) : a.validateStringAsBase64(f) && (C = atob(f))), C;
      };
      var w = function(f, d) {
        return f.subarray(d, d + 5);
      };
      a.processJPEG = function(f, d, C, m, F, E) {
        var H, _ = this.decode.DCT_DECODE;
        if (!this.isString(f) && !this.isArrayBuffer(f) && !this.isArrayBufferView(f))
          return null;
        if (this.isString(f) && (H = function(N) {
          var j;
          if (!N.charCodeAt(0) === 255 || !N.charCodeAt(1) === 216 || !N.charCodeAt(2) === 255 || !N.charCodeAt(3) === 224 || !N.charCodeAt(6) === "J".charCodeAt(0) || !N.charCodeAt(7) === "F".charCodeAt(0) || !N.charCodeAt(8) === "I".charCodeAt(0) || !N.charCodeAt(9) === "F".charCodeAt(0) || !N.charCodeAt(10) === 0)
            throw new Error("getJpegSize requires a binary string jpeg file");
          for (var Z = 256 * N.charCodeAt(4) + N.charCodeAt(5), W = 4, V = N.length; W < V; ) {
            if (W += Z, N.charCodeAt(W) !== 255)
              throw new Error("getJpegSize could not find the size of the image");
            if (N.charCodeAt(W + 1) === 192 || N.charCodeAt(W + 1) === 193 || N.charCodeAt(W + 1) === 194 || N.charCodeAt(W + 1) === 195 || N.charCodeAt(W + 1) === 196 || N.charCodeAt(W + 1) === 197 || N.charCodeAt(W + 1) === 198 || N.charCodeAt(W + 1) === 199)
              return j = 256 * N.charCodeAt(W + 5) + N.charCodeAt(W + 6), [256 * N.charCodeAt(W + 7) + N.charCodeAt(W + 8), j, N.charCodeAt(W + 9)];
            W += 2, Z = 256 * N.charCodeAt(W) + N.charCodeAt(W + 1);
          }
        }(f)), this.isArrayBuffer(f) && (f = new Uint8Array(f)), this.isArrayBufferView(f) && (H = function(N) {
          if ((N[0] << 8 | N[1]) != 65496)
            throw new Error("Supplied data is not a JPEG");
          for (var j, Z = N.length, W = (N[4] << 8) + N[5], V = 4; V < Z; ) {
            if (W = ((j = w(N, V += W))[2] << 8) + j[3], (j[1] === 192 || j[1] === 194) && j[0] === 255 && 7 < W)
              return { width: ((j = w(N, V + 5))[2] << 8) + j[3], height: (j[0] << 8) + j[1], numcomponents: j[4] };
            V += 2;
          }
          throw new Error("getJpegSizeFromBytes could not find the size of the image");
        }(f), f = F || this.arrayBufferToBinaryString(f)), E === void 0)
          switch (H.numcomponents) {
            case 1:
              E = this.color_spaces.DEVICE_GRAY;
              break;
            case 4:
              E = this.color_spaces.DEVICE_CMYK;
              break;
            default:
            case 3:
              E = this.color_spaces.DEVICE_RGB;
          }
        return this.createImageInfo(f, H.width, H.height, E, 8, _, d, C);
      }, a.processJPG = function() {
        return this.processJPEG.apply(this, arguments);
      }, a.loadImageFile = function(f, d, C) {
        if (d = d || !0, Object.prototype.toString.call(typeof process < "u" ? process : 0), (typeof window > "u" ? "undefined" : Dt(window)) !== void 0 && (typeof location > "u" ? "undefined" : Dt(location)) === "object" && location.protocol.substr(0, 4) === "http")
          return function(m, F, E) {
            var H = new XMLHttpRequest(), _ = [], N = 0, j = function(Z) {
              var W = Z.length, V = String.fromCharCode;
              for (N = 0; N < W; N += 1)
                _.push(V(255 & Z.charCodeAt(N)));
              return _.join("");
            };
            if (H.open("GET", m, !F), H.overrideMimeType("text/plain; charset=x-user-defined"), F === !1 && (H.onload = function() {
              return j(this.responseText);
            }), H.send(null), H.status === 200)
              return F ? j(H.responseText) : void 0;
            console.warn('Unable to load file "' + m + '"');
          }(f, d);
      }, a.getImageProperties = function(f) {
        var d, C, m = "";
        if (l(f) && (f = u(f)), this.isString(f) && ((m = this.convertStringToImageData(f)) !== "" || (m = this.loadImageFile(f)) !== void 0) && (f = m), C = this.getImageFileTypeByImageData(f), !c(C))
          throw new Error("addImage does not support files of type '" + C + "', please ensure that a plugin for '" + C + "' support is added.");
        if (this.supportsArrayBuffer() && (f instanceof Uint8Array || (f = this.binaryStringToUint8Array(f))), !(d = this["process" + C.toUpperCase()](f)))
          throw new Error("An unkwown error occurred whilst processing the image");
        return { fileType: C, width: d.w, height: d.h, colorSpace: d.cs, compressionMode: d.f, bitsPerComponent: d.bpc };
      };
    }(at.API), /**
       * jsPDF Annotations PlugIn
       * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
       *
       * Licensed under the MIT License.
       * http://opensource.org/licenses/mit-license
       */
    r = at.API, e = { annotations: [], f2: function(a) {
      return a.toFixed(2);
    }, notEmpty: function(a) {
      if (a !== void 0 && a != "")
        return !0;
    } }, at.API.annotationPlugin = e, at.API.events.push(["addPage", function(a) {
      this.annotationPlugin.annotations[a.pageNumber] = [];
    }]), r.events.push(["putPage", function(a) {
      for (var B = this.annotationPlugin.annotations[a.pageNumber], v = !1, s = 0; s < B.length && !v; s++)
        switch ((u = B[s]).type) {
          case "link":
            if (e.notEmpty(u.options.url) || e.notEmpty(u.options.pageNumber)) {
              v = !0;
              break;
            }
          case "reference":
          case "text":
          case "freetext":
            v = !0;
        }
      if (v != 0) {
        this.internal.write("/Annots [");
        var n = this.annotationPlugin.f2, i = this.internal.scaleFactor, c = this.internal.pageSize.getHeight(), l = this.internal.getPageInfo(a.pageNumber);
        for (s = 0; s < B.length; s++) {
          var u;
          switch ((u = B[s]).type) {
            case "reference":
              this.internal.write(" " + u.object.objId + " 0 R ");
              break;
            case "text":
              var p = this.internal.newAdditionalObject(), w = this.internal.newAdditionalObject(), f = u.title || "Note";
              E = "<</Type /Annot /Subtype /Text " + (C = "/Rect [" + n(u.bounds.x * i) + " " + n(c - (u.bounds.y + u.bounds.h) * i) + " " + n((u.bounds.x + u.bounds.w) * i) + " " + n((c - u.bounds.y) * i) + "] ") + "/Contents (" + u.contents + ")", E += " /Popup " + w.objId + " 0 R", E += " /P " + l.objId + " 0 R", E += " /T (" + f + ") >>", p.content = E;
              var d = p.objId + " 0 R";
              E = "<</Type /Annot /Subtype /Popup " + (C = "/Rect [" + n((u.bounds.x + 30) * i) + " " + n(c - (u.bounds.y + u.bounds.h) * i) + " " + n((u.bounds.x + u.bounds.w + 30) * i) + " " + n((c - u.bounds.y) * i) + "] ") + " /Parent " + d, u.open && (E += " /Open true"), E += " >>", w.content = E, this.internal.write(p.objId, "0 R", w.objId, "0 R");
              break;
            case "freetext":
              var C = "/Rect [" + n(u.bounds.x * i) + " " + n((c - u.bounds.y) * i) + " " + n(u.bounds.x + u.bounds.w * i) + " " + n(c - (u.bounds.y + u.bounds.h) * i) + "] ", m = u.color || "#000000";
              E = "<</Type /Annot /Subtype /FreeText " + C + "/Contents (" + u.contents + ")", E += " /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#" + m + ")", E += " /Border [0 0 0]", E += " >>", this.internal.write(E);
              break;
            case "link":
              if (u.options.name) {
                var F = this.annotations._nameMap[u.options.name];
                u.options.pageNumber = F.page, u.options.top = F.y;
              } else
                u.options.top || (u.options.top = 0);
              C = "/Rect [" + n(u.x * i) + " " + n((c - u.y) * i) + " " + n((u.x + u.w) * i) + " " + n((c - (u.y + u.h)) * i) + "] ";
              var E = "";
              if (u.options.url)
                E = "<</Type /Annot /Subtype /Link " + C + "/Border [0 0 0] /A <</S /URI /URI (" + u.options.url + ") >>";
              else if (u.options.pageNumber)
                switch (E = "<</Type /Annot /Subtype /Link " + C + "/Border [0 0 0] /Dest [" + (a = this.internal.getPageInfo(u.options.pageNumber)).objId + " 0 R", u.options.magFactor = u.options.magFactor || "XYZ", u.options.magFactor) {
                  case "Fit":
                    E += " /Fit]";
                    break;
                  case "FitH":
                    E += " /FitH " + u.options.top + "]";
                    break;
                  case "FitV":
                    u.options.left = u.options.left || 0, E += " /FitV " + u.options.left + "]";
                    break;
                  case "XYZ":
                  default:
                    var H = n((c - u.options.top) * i);
                    u.options.left = u.options.left || 0, u.options.zoom === void 0 && (u.options.zoom = 0), E += " /XYZ " + u.options.left + " " + H + " " + u.options.zoom + "]";
                }
              E != "" && (E += " >>", this.internal.write(E));
          }
        }
        this.internal.write("]");
      }
    }]), r.createAnnotation = function(a) {
      switch (a.type) {
        case "link":
          this.link(a.bounds.x, a.bounds.y, a.bounds.w, a.bounds.h, a);
          break;
        case "text":
        case "freetext":
          this.annotationPlugin.annotations[this.internal.getCurrentPageInfo().pageNumber].push(a);
      }
    }, r.link = function(a, B, v, s, n) {
      this.annotationPlugin.annotations[this.internal.getCurrentPageInfo().pageNumber].push({ x: a, y: B, w: v, h: s, options: n, type: "link" });
    }, r.textWithLink = function(a, B, v, s) {
      var n = this.getTextWidth(a), i = this.internal.getLineHeight() / this.internal.scaleFactor;
      return this.text(a, B, v), v += 0.2 * i, this.link(B, v - i, n, i, s), n;
    }, r.getTextWidth = function(a) {
      var B = this.internal.getFontSize();
      return this.getStringUnitWidth(a) * B / this.internal.scaleFactor;
    }, r.getLineHeight = function() {
      return this.internal.getLineHeight();
    }, function(a) {
      var B = Object.keys({ ar: "Arabic (Standard)", "ar-DZ": "Arabic (Algeria)", "ar-BH": "Arabic (Bahrain)", "ar-EG": "Arabic (Egypt)", "ar-IQ": "Arabic (Iraq)", "ar-JO": "Arabic (Jordan)", "ar-KW": "Arabic (Kuwait)", "ar-LB": "Arabic (Lebanon)", "ar-LY": "Arabic (Libya)", "ar-MA": "Arabic (Morocco)", "ar-OM": "Arabic (Oman)", "ar-QA": "Arabic (Qatar)", "ar-SA": "Arabic (Saudi Arabia)", "ar-SY": "Arabic (Syria)", "ar-TN": "Arabic (Tunisia)", "ar-AE": "Arabic (U.A.E.)", "ar-YE": "Arabic (Yemen)", fa: "Persian", "fa-IR": "Persian/Iran", ur: "Urdu" }), v = { 1569: [65152], 1570: [65153, 65154, 65153, 65154], 1571: [65155, 65156, 65155, 65156], 1572: [65157, 65158], 1573: [65159, 65160, 65159, 65160], 1574: [65161, 65162, 65163, 65164], 1575: [65165, 65166, 65165, 65166], 1576: [65167, 65168, 65169, 65170], 1577: [65171, 65172], 1578: [65173, 65174, 65175, 65176], 1579: [65177, 65178, 65179, 65180], 1580: [65181, 65182, 65183, 65184], 1581: [65185, 65186, 65187, 65188], 1582: [65189, 65190, 65191, 65192], 1583: [65193, 65194, 65193], 1584: [65195, 65196, 65195], 1585: [65197, 65198, 65197], 1586: [65199, 65200, 65199], 1587: [65201, 65202, 65203, 65204], 1588: [65205, 65206, 65207, 65208], 1589: [65209, 65210, 65211, 65212], 1590: [65213, 65214, 65215, 65216], 1591: [65217, 65218, 65219, 65220], 1592: [65221, 65222, 65223, 65224], 1593: [65225, 65226, 65227, 65228], 1594: [65229, 65230, 65231, 65232], 1601: [65233, 65234, 65235, 65236], 1602: [65237, 65238, 65239, 65240], 1603: [65241, 65242, 65243, 65244], 1604: [65245, 65246, 65247, 65248], 1605: [65249, 65250, 65251, 65252], 1606: [65253, 65254, 65255, 65256], 1607: [65257, 65258, 65259, 65260], 1608: [65261, 65262, 65261], 1609: [65263, 65264, 64488, 64489], 1610: [65265, 65266, 65267, 65268], 1649: [64336, 64337], 1655: [64477], 1657: [64358, 64359, 64360, 64361], 1658: [64350, 64351, 64352, 64353], 1659: [64338, 64339, 64340, 64341], 1662: [64342, 64343, 64344, 64345], 1663: [64354, 64355, 64356, 64357], 1664: [64346, 64347, 64348, 64349], 1667: [64374, 64375, 64376, 64377], 1668: [64370, 64371, 64372, 64373], 1670: [64378, 64379, 64380, 64381], 1671: [64382, 64383, 64384, 64385], 1672: [64392, 64393], 1676: [64388, 64389], 1677: [64386, 64387], 1678: [64390, 64391], 1681: [64396, 64397], 1688: [64394, 64395, 64394], 1700: [64362, 64363, 64364, 64365], 1702: [64366, 64367, 64368, 64369], 1705: [64398, 64399, 64400, 64401], 1709: [64467, 64468, 64469, 64470], 1711: [64402, 64403, 64404, 64405], 1713: [64410, 64411, 64412, 64413], 1715: [64406, 64407, 64408, 64409], 1722: [64414, 64415], 1723: [64416, 64417, 64418, 64419], 1726: [64426, 64427, 64428, 64429], 1728: [64420, 64421], 1729: [64422, 64423, 64424, 64425], 1733: [64480, 64481], 1734: [64473, 64474], 1735: [64471, 64472], 1736: [64475, 64476], 1737: [64482, 64483], 1739: [64478, 64479], 1740: [64508, 64509, 64510, 64511], 1744: [64484, 64485, 64486, 64487], 1746: [64430, 64431], 1747: [64432, 64433] }, s = { 1570: [65269, 65270, 65269, 65270], 1571: [65271, 65272, 65271, 65272], 1573: [65273, 65274, 65273, 65274], 1575: [65275, 65276, 65275, 65276] }, n = { 1570: [65153, 65154, 65153, 65154], 1571: [65155, 65156, 65155, 65156], 1573: [65159, 65160, 65159, 65160], 1575: [65165, 65166, 65165, 65166] }, i = { 1612: 64606, 1613: 64607, 1614: 64608, 1615: 64609, 1616: 64610 }, c = [1570, 1571, 1573, 1575], l = [1569, 1570, 1571, 1572, 1573, 1575, 1577, 1583, 1584, 1585, 1586, 1608, 1688], u = 0, p = 1, w = 2, f = 3;
      function d(_) {
        return _ !== void 0 && v[_.charCodeAt(0)] !== void 0;
      }
      function C(_) {
        return _ !== void 0 && 0 <= l.indexOf(_.charCodeAt(0));
      }
      function m(_) {
        return _ !== void 0 && 0 <= c.indexOf(_.charCodeAt(0));
      }
      function F(_) {
        return d(_) && 2 <= v[_.charCodeAt(0)].length;
      }
      function E(_, N, j, Z) {
        return d(_) ? (Z = Z || {}, v = Object.assign(v, Z), !F(_) || !d(N) && !d(j) || !d(j) && C(N) || C(_) && !d(N) || C(_) && m(N) || C(_) && C(N) ? (v = Object.assign(v, n), u) : d(W = _) && v[W.charCodeAt(0)].length == 4 && d(N) && !C(N) && d(j) && F(j) ? (v = Object.assign(v, n), f) : C(_) || !d(j) ? (v = Object.assign(v, n), p) : (v = Object.assign(v, n), w)) : -1;
        var W;
      }
      var H = a.processArabic = function(_, N) {
        _ = _ || "", N = N || !1;
        var j, Z, W, V = "", Q = 0, q = 0, K = "", z = "", $ = "";
        for (Q = 0; Q < _.length; Q += 1)
          K = _[Q], z = _[Q - 1], $ = _[Q + 1], d(K) ? z !== void 0 && z.charCodeAt(0) === 1604 && m(K) ? (q = E(K, _[Q - 2], _[Q + 1], s), j = String.fromCharCode(s[K.charCodeAt(0)][q]), V = V.substr(0, V.length - 1) + j) : z !== void 0 && z.charCodeAt(0) === 1617 && (Z = K) !== void 0 && i[Z.charCodeAt(0)] !== void 0 ? (q = E(K, _[Q - 2], _[Q + 1], n), j = String.fromCharCode(i[K.charCodeAt(0)][q]), V = V.substr(0, V.length - 1) + j) : (q = E(K, z, $, n), V += String.fromCharCode(v[K.charCodeAt(0)][q])) : V += N ? { "(": ")", ")": "(" }[W = K] || W : K;
        return N ? V.split("").reverse().join("") : V;
      };
      a.events.push(["preProcessText", function(_) {
        var N = _.text, j = (_.x, _.y, _.options || {}), Z = (_.mutex, j.lang), W = [];
        if (0 <= B.indexOf(Z)) {
          if (Object.prototype.toString.call(N) === "[object Array]") {
            var V = 0;
            for (W = [], V = 0; V < N.length; V += 1)
              Object.prototype.toString.call(N[V]) === "[object Array]" ? W.push([H(N[V][0], !0), N[V][1], N[V][2]]) : W.push([H(N[V], !0)]);
            _.text = W;
          } else
            _.text = H(N, !0);
          j.charSpace === void 0 && (_.options.charSpace = 0), j.R2L === !0 && (_.options.R2L = !1);
        }
      }]);
    }(at.API), at.API.autoPrint = function(a) {
      var B;
      switch ((a = a || {}).variant = a.variant || "non-conform", a.variant) {
        case "javascript":
          this.addJS("print({});");
          break;
        case "non-conform":
        default:
          this.internal.events.subscribe("postPutResources", function() {
            B = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /Named"), this.internal.out("/Type /Action"), this.internal.out("/N /Print"), this.internal.out(">>"), this.internal.out("endobj");
          }), this.internal.events.subscribe("putCatalog", function() {
            this.internal.out("/OpenAction " + B + " 0 R");
          });
      }
      return this;
    }, /**
       * jsPDF Canvas PlugIn
       * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
       *
       * Licensed under the MIT License.
       * http://opensource.org/licenses/mit-license
       */
    (o = at.API).events.push(["initialized", function() {
      this.canvas.pdf = this;
    }]), o.canvas = { getContext: function(a) {
      return (this.pdf.context2d._canvas = this).pdf.context2d;
    }, childNodes: [] }, Object.defineProperty(o.canvas, "width", { get: function() {
      return this._width;
    }, set: function(a) {
      this._width = a, this.getContext("2d").pageWrapX = a + 1;
    } }), Object.defineProperty(o.canvas, "height", { get: function() {
      return this._height;
    }, set: function(a) {
      this._height = a, this.getContext("2d").pageWrapY = a + 1;
    } }), /** ====================================================================
       * jsPDF Cell plugin
       * Copyright (c) 2013 Youssef Beddad, youssef.beddad@gmail.com
       *               2013 Eduardo Menezes de Morais, eduardo.morais@usp.br
       *               2013 Lee Driscoll, https://github.com/lsdriscoll
       *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
       *               2014 James Hall, james@parall.ax
       *               2014 Diego Casorran, https://github.com/diegocr
       *
       * 
       * ====================================================================
       */
    g = at.API, Y = { x: void 0, y: void 0, w: void 0, h: void 0, ln: void 0 }, aA = 1, dA = function(a, B, v, s, n) {
      Y = { x: a, y: B, w: v, h: s, ln: n };
    }, bA = function() {
      return Y;
    }, QA = { left: 0, top: 0, bottom: 0 }, g.setHeaderFunction = function(a) {
      J = a;
    }, g.getTextDimensions = function(a) {
      y = this.internal.getFont().fontName, D = this.table_font_size || this.internal.getFontSize(), T = this.internal.getFont().fontStyle;
      var B, v, s = 19.049976 / 25.4;
      (v = document.createElement("font")).id = "jsPDFCell";
      try {
        v.style.fontStyle = T;
      } catch {
        v.style.fontWeight = T;
      }
      v.style.fontSize = D + "pt", v.style.fontFamily = y;
      try {
        v.textContent = a;
      } catch {
        v.innerText = a;
      }
      return document.body.appendChild(v), B = { w: (v.offsetWidth + 1) * s, h: (v.offsetHeight + 1) * s }, document.body.removeChild(v), B;
    }, g.cellAddPage = function() {
      var a = this.margins || QA;
      this.addPage(), dA(a.left, a.top, void 0, void 0), aA += 1;
    }, g.cellInitialize = function() {
      Y = { x: void 0, y: void 0, w: void 0, h: void 0, ln: void 0 }, aA = 1;
    }, g.cell = function(a, B, v, s, n, i, c) {
      var l = bA(), u = !1;
      if (l.ln !== void 0)
        if (l.ln === i)
          a = l.x + l.w, B = l.y;
        else {
          var p = this.margins || QA;
          l.y + l.h + s + 13 >= this.internal.pageSize.getHeight() - p.bottom && (this.cellAddPage(), u = !0, this.printHeaders && this.tableHeaderRow && this.printHeaderRow(i, !0)), B = bA().y + bA().h, u && (B = 23);
        }
      if (n[0] !== void 0)
        if (this.printingHeaderRow ? this.rect(a, B, v, s, "FD") : this.rect(a, B, v, s), c === "right") {
          n instanceof Array || (n = [n]);
          for (var w = 0; w < n.length; w++) {
            var f = n[w], d = this.getStringUnitWidth(f) * this.internal.getFontSize();
            this.text(f, a + v - d - 3, B + this.internal.getLineHeight() * (w + 1));
          }
        } else
          this.text(n, a + 3, B + this.internal.getLineHeight());
      return dA(a, B, v, s, i), this;
    }, g.arrayMax = function(a, B) {
      var v, s, n, i = a[0];
      for (v = 0, s = a.length; v < s; v += 1)
        n = a[v], B ? B(i, n) === -1 && (i = n) : i < n && (i = n);
      return i;
    }, g.table = function(a, B, v, s, n) {
      if (!v)
        throw "No data for PDF table";
      var i, c, l, u, p, w, f, d, C, m, F = [], E = [], H = {}, _ = {}, N = [], j = [], Z = !1, W = !0, V = 12, Q = QA;
      if (Q.width = this.internal.pageSize.getWidth(), n && (n.autoSize === !0 && (Z = !0), n.printHeaders === !1 && (W = !1), n.fontSize && (V = n.fontSize), n.css && n.css["font-size"] !== void 0 && (V = 16 * n.css["font-size"]), n.margins && (Q = n.margins)), this.lnMod = 0, Y = { x: void 0, y: void 0, w: void 0, h: void 0, ln: void 0 }, aA = 1, this.printHeaders = W, this.margins = Q, this.setFontSize(V), this.table_font_size = V, s == null)
        F = Object.keys(v[0]);
      else if (s[0] && typeof s[0] != "string")
        for (c = 0, l = s.length; c < l; c += 1)
          i = s[c], F.push(i.name), E.push(i.prompt), _[i.name] = i.width * (19.049976 / 25.4);
      else
        F = s;
      if (Z)
        for (m = function(K) {
          return K[i];
        }, c = 0, l = F.length; c < l; c += 1) {
          for (H[i = F[c]] = v.map(m), N.push(this.getTextDimensions(E[c] || i).w), f = 0, u = (w = H[i]).length; f < u; f += 1)
            p = w[f], N.push(this.getTextDimensions(p).w);
          _[i] = g.arrayMax(N), N = [];
        }
      if (W) {
        var q = this.calculateLineHeight(F, _, E.length ? E : F);
        for (c = 0, l = F.length; c < l; c += 1)
          i = F[c], j.push([a, B, _[i], q, String(E.length ? E[c] : i)]);
        this.setTableHeaderRow(j), this.printHeaderRow(1, !1);
      }
      for (c = 0, l = v.length; c < l; c += 1)
        for (d = v[c], q = this.calculateLineHeight(F, _, d), f = 0, C = F.length; f < C; f += 1)
          i = F[f], this.cell(a, B, _[i], q, d[i], c + 2, i.align);
      return this.lastCellPos = Y, this.table_x = a, this.table_y = B, this;
    }, g.calculateLineHeight = function(a, B, v) {
      for (var s, n = 0, i = 0; i < a.length; i++) {
        v[s = a[i]] = this.splitTextToSize(String(v[s]), B[s] - 3);
        var c = this.internal.getLineHeight() * v[s].length + 3;
        n < c && (n = c);
      }
      return n;
    }, g.setTableHeaderRow = function(a) {
      this.tableHeaderRow = a;
    }, g.printHeaderRow = function(a, B) {
      if (!this.tableHeaderRow)
        throw "Property tableHeaderRow does not exist.";
      var v, s, n, i;
      if (this.printingHeaderRow = !0, J !== void 0) {
        var c = J(this, aA);
        dA(c[0], c[1], c[2], c[3], -1);
      }
      this.setFontStyle("bold");
      var l = [];
      for (n = 0, i = this.tableHeaderRow.length; n < i; n += 1)
        this.setFillColor(200, 200, 200), v = this.tableHeaderRow[n], B && (this.margins.top = 13, v[1] = this.margins && this.margins.top || 0, l.push(v)), s = [].concat(v), this.cell.apply(this, s.concat(a));
      0 < l.length && this.setTableHeaderRow(l), this.setFontStyle("normal"), this.printingHeaderRow = !1;
    }, /**
       * jsPDF Context2D PlugIn Copyright (c) 2014 Steven Spungin (TwelveTone LLC) steven@twelvetone.tv
       *
       * Licensed under the MIT License. http://opensource.org/licenses/mit-license
       */
    function(a) {
      a.events.push(["initialized", function() {
        ((this.context2d.pdf = this).context2d.internal.pdf = this).context2d.ctx = new v(), this.context2d.ctxStack = [], this.context2d.path = [];
      }]), a.context2d = { pageWrapXEnabled: !1, pageWrapYEnabled: !1, pageWrapX: 9999999, pageWrapY: 9999999, ctx: new v(), f2: function(s) {
        return s.toFixed(2);
      }, fillRect: function(s, n, i, c) {
        if (!this._isFillTransparent()) {
          s = this._wrapX(s), n = this._wrapY(n);
          var l = this._matrix_map_rect(this.ctx._transform, { x: s, y: n, w: i, h: c });
          this.pdf.rect(l.x, l.y, l.w, l.h, "f");
        }
      }, strokeRect: function(s, n, i, c) {
        if (!this._isStrokeTransparent()) {
          s = this._wrapX(s), n = this._wrapY(n);
          var l = this._matrix_map_rect(this.ctx._transform, { x: s, y: n, w: i, h: c });
          this.pdf.rect(l.x, l.y, l.w, l.h, "s");
        }
      }, clearRect: function(s, n, i, c) {
        if (!this.ctx.ignoreClearRect) {
          s = this._wrapX(s), n = this._wrapY(n);
          var l = this._matrix_map_rect(this.ctx._transform, { x: s, y: n, w: i, h: c });
          this.save(), this.setFillStyle("#ffffff"), this.pdf.rect(l.x, l.y, l.w, l.h, "f"), this.restore();
        }
      }, save: function() {
        this.ctx._fontSize = this.pdf.internal.getFontSize();
        var s = new v();
        s.copy(this.ctx), this.ctxStack.push(this.ctx), this.ctx = s;
      }, restore: function() {
        this.ctx = this.ctxStack.pop(), this.setFillStyle(this.ctx.fillStyle), this.setStrokeStyle(this.ctx.strokeStyle), this.setFont(this.ctx.font), this.pdf.setFontSize(this.ctx._fontSize), this.setLineCap(this.ctx.lineCap), this.setLineWidth(this.ctx.lineWidth), this.setLineJoin(this.ctx.lineJoin);
      }, rect: function(s, n, i, c) {
        this.moveTo(s, n), this.lineTo(s + i, n), this.lineTo(s + i, n + c), this.lineTo(s, n + c), this.lineTo(s, n), this.closePath();
      }, beginPath: function() {
        this.path = [];
      }, closePath: function() {
        this.path.push({ type: "close" });
      }, _getRGBA: function(s) {
        var n, i, c, l, u = new RGBColor(s);
        if (!s)
          return { r: 0, g: 0, b: 0, a: 0, style: s };
        if (this.internal.rxTransparent.test(s))
          l = c = i = n = 0;
        else {
          var p = this.internal.rxRgb.exec(s);
          p != null ? (n = parseInt(p[1]), i = parseInt(p[2]), c = parseInt(p[3]), l = 1) : (p = this.internal.rxRgba.exec(s)) != null ? (n = parseInt(p[1]), i = parseInt(p[2]), c = parseInt(p[3]), l = parseFloat(p[4])) : (l = 1, s.charAt(0) != "#" && (s = u.ok ? u.toHex() : "#000000"), s.length === 4 ? (n = s.substring(1, 2), n += n, i = s.substring(2, 3), i += i, c = s.substring(3, 4), c += c) : (n = s.substring(1, 3), i = s.substring(3, 5), c = s.substring(5, 7)), n = parseInt(n, 16), i = parseInt(i, 16), c = parseInt(c, 16));
        }
        return { r: n, g: i, b: c, a: l, style: s };
      }, setFillStyle: function(s) {
        var n = this._getRGBA(s);
        this.ctx.fillStyle = s, this.ctx._isFillTransparent = n.a === 0, this.ctx._fillOpacity = n.a, this.pdf.setFillColor(n.r, n.g, n.b, { a: n.a }), this.pdf.setTextColor(n.r, n.g, n.b, { a: n.a });
      }, setStrokeStyle: function(s) {
        var n = this._getRGBA(s);
        this.ctx.strokeStyle = n.style, this.ctx._isStrokeTransparent = n.a === 0, this.ctx._strokeOpacity = n.a, n.a === 0 ? this.pdf.setDrawColor(255, 255, 255) : (n.a, this.pdf.setDrawColor(n.r, n.g, n.b));
      }, fillText: function(s, n, i, c) {
        if (!this._isFillTransparent()) {
          n = this._wrapX(n), i = this._wrapY(i);
          var l = this._matrix_map_point(this.ctx._transform, [n, i]);
          n = l[0], i = l[1];
          var u = 57.2958 * this._matrix_rotation(this.ctx._transform);
          if (0 < this.ctx._clip_path.length) {
            var p;
            (p = window.outIntercept ? window.outIntercept.type === "group" ? window.outIntercept.stream : window.outIntercept : this.internal.getCurrentPage()).push("q");
            var w = this.path;
            this.path = this.ctx._clip_path, this.ctx._clip_path = [], this._fill(null, !0), this.ctx._clip_path = this.path, this.path = w;
          }
          var f = 1;
          try {
            f = this._matrix_decompose(this._getTransform()).scale[0];
          } catch (C) {
            console.warn(C);
          }
          if (f < 0.01)
            this.pdf.text(s, n, this._getBaseline(i), null, u);
          else {
            var d = this.pdf.internal.getFontSize();
            this.pdf.setFontSize(d * f), this.pdf.text(s, n, this._getBaseline(i), null, u), this.pdf.setFontSize(d);
          }
          0 < this.ctx._clip_path.length && p.push("Q");
        }
      }, strokeText: function(s, n, i, c) {
        if (!this._isStrokeTransparent()) {
          n = this._wrapX(n), i = this._wrapY(i);
          var l = this._matrix_map_point(this.ctx._transform, [n, i]);
          n = l[0], i = l[1];
          var u = 57.2958 * this._matrix_rotation(this.ctx._transform);
          if (0 < this.ctx._clip_path.length) {
            var p;
            (p = window.outIntercept ? window.outIntercept.type === "group" ? window.outIntercept.stream : window.outIntercept : this.internal.getCurrentPage()).push("q");
            var w = this.path;
            this.path = this.ctx._clip_path, this.ctx._clip_path = [], this._fill(null, !0), this.ctx._clip_path = this.path, this.path = w;
          }
          var f = 1;
          try {
            f = this._matrix_decompose(this._getTransform()).scale[0];
          } catch (C) {
            console.warn(C);
          }
          if (f === 1)
            this.pdf.text(s, n, this._getBaseline(i), { stroke: !0 }, u);
          else {
            var d = this.pdf.internal.getFontSize();
            this.pdf.setFontSize(d * f), this.pdf.text(s, n, this._getBaseline(i), { stroke: !0 }, u), this.pdf.setFontSize(d);
          }
          0 < this.ctx._clip_path.length && p.push("Q");
        }
      }, setFont: function(s) {
        if (this.ctx.font = s, (d = /\s*(\w+)\s+(\w+)\s+(\w+)\s+([\d\.]+)(px|pt|em)\s+(.*)?/.exec(s)) != null) {
          var n = d[1], i = (d[2], d[3]), c = d[4], l = d[5], u = d[6];
          c = Math.floor(l === "px" ? parseFloat(c) : l === "em" ? parseFloat(c) * this.pdf.getFontSize() : parseFloat(c)), this.pdf.setFontSize(c), i === "bold" || i === "700" ? this.pdf.setFontStyle("bold") : n === "italic" ? this.pdf.setFontStyle("italic") : this.pdf.setFontStyle("normal"), C = i === "bold" || i === "700" ? n === "italic" ? "bolditalic" : "bold" : n === "italic" ? "italic" : "normal";
          for (var p = u.toLowerCase().split(/\s*,\s*/), w = "Times", f = 0; f < p.length; f++) {
            if (this.pdf.internal.getFont(p[f], C, { noFallback: !0, disableWarning: !0 }) !== void 0) {
              w = p[f];
              break;
            }
            if (C === "bolditalic" && this.pdf.internal.getFont(p[f], "bold", { noFallback: !0, disableWarning: !0 }) !== void 0)
              w = p[f], C = "bold";
            else if (this.pdf.internal.getFont(p[f], "normal", { noFallback: !0, disableWarning: !0 }) !== void 0) {
              w = p[f], C = "normal";
              break;
            }
          }
          this.pdf.setFont(w, C);
        } else {
          var d = /\s*(\d+)(pt|px|em)\s+([\w "]+)\s*([\w "]+)?/.exec(s);
          if (d != null) {
            var C, m = d[1], F = (d[2], d[3]);
            (C = d[4]) || (C = "normal"), m = Math.floor(l === "em" ? parseFloat(c) * this.pdf.getFontSize() : parseFloat(m)), this.pdf.setFontSize(m), this.pdf.setFont(F, C);
          }
        }
      }, setTextBaseline: function(s) {
        this.ctx.textBaseline = s;
      }, getTextBaseline: function() {
        return this.ctx.textBaseline;
      }, setTextAlign: function(s) {
        this.ctx.textAlign = s;
      }, getTextAlign: function() {
        return this.ctx.textAlign;
      }, setLineWidth: function(s) {
        this.ctx.lineWidth = s, this.pdf.setLineWidth(s);
      }, setLineCap: function(s) {
        this.ctx.lineCap = s, this.pdf.setLineCap(s);
      }, setLineJoin: function(s) {
        this.ctx.lineJoin = s, this.pdf.setLineJoin(s);
      }, moveTo: function(s, n) {
        s = this._wrapX(s), n = this._wrapY(n);
        var i = this._matrix_map_point(this.ctx._transform, [s, n]), c = { type: "mt", x: s = i[0], y: n = i[1] };
        this.path.push(c);
      }, _wrapX: function(s) {
        return this.pageWrapXEnabled ? s % this.pageWrapX : s;
      }, _wrapY: function(s) {
        return this.pageWrapYEnabled ? (this._gotoPage(this._page(s)), (s - this.lastBreak) % this.pageWrapY) : s;
      }, transform: function(s, n, i, c, l, u) {
        this.ctx._transform = this._matrix_multiply(this.ctx._transform, [s, n, i, c, l, u]);
      }, setTransform: function(s, n, i, c, l, u) {
        this.ctx._transform = [s, n, i, c, l, u];
      }, _getTransform: function() {
        return this.ctx._transform;
      }, lastBreak: 0, pageBreaks: [], _page: function(s) {
        if (this.pageWrapYEnabled) {
          for (var n = this.lastBreak = 0, i = 0, c = 0; c < this.pageBreaks.length; c++)
            if (s >= this.pageBreaks[c]) {
              n++, this.lastBreak === 0 && i++;
              var l = this.pageBreaks[c] - this.lastBreak;
              this.lastBreak = this.pageBreaks[c], i += Math.floor(l / this.pageWrapY);
            }
          return this.lastBreak === 0 && (i += Math.floor(s / this.pageWrapY) + 1), i + n;
        }
        return this.pdf.internal.getCurrentPageInfo().pageNumber;
      }, _gotoPage: function(s) {
      }, lineTo: function(s, n) {
        s = this._wrapX(s), n = this._wrapY(n);
        var i = this._matrix_map_point(this.ctx._transform, [s, n]), c = { type: "lt", x: s = i[0], y: n = i[1] };
        this.path.push(c);
      }, bezierCurveTo: function(s, n, i, c, l, u) {
        var p;
        s = this._wrapX(s), n = this._wrapY(n), i = this._wrapX(i), c = this._wrapY(c), l = this._wrapX(l), u = this._wrapY(u), l = (p = this._matrix_map_point(this.ctx._transform, [l, u]))[0], u = p[1];
        var w = { type: "bct", x1: s = (p = this._matrix_map_point(this.ctx._transform, [s, n]))[0], y1: n = p[1], x2: i = (p = this._matrix_map_point(this.ctx._transform, [i, c]))[0], y2: c = p[1], x: l, y: u };
        this.path.push(w);
      }, quadraticCurveTo: function(s, n, i, c) {
        var l;
        s = this._wrapX(s), n = this._wrapY(n), i = this._wrapX(i), c = this._wrapY(c), i = (l = this._matrix_map_point(this.ctx._transform, [i, c]))[0], c = l[1];
        var u = { type: "qct", x1: s = (l = this._matrix_map_point(this.ctx._transform, [s, n]))[0], y1: n = l[1], x: i, y: c };
        this.path.push(u);
      }, arc: function(s, n, i, c, l, u) {
        if (s = this._wrapX(s), n = this._wrapY(n), !this._matrix_is_identity(this.ctx._transform)) {
          var p = this._matrix_map_point(this.ctx._transform, [s, n]);
          s = p[0], n = p[1];
          var w = this._matrix_map_point(this.ctx._transform, [0, 0]), f = this._matrix_map_point(this.ctx._transform, [0, i]);
          i = Math.sqrt(Math.pow(f[0] - w[0], 2) + Math.pow(f[1] - w[1], 2));
        }
        var d = { type: "arc", x: s, y: n, radius: i, startAngle: c, endAngle: l, anticlockwise: u };
        this.path.push(d);
      }, drawImage: function(s, n, i, c, l, u, p, w, f) {
        u !== void 0 && (n = u, i = p, c = w, l = f), n = this._wrapX(n), i = this._wrapY(i);
        var d, C = this._matrix_map_rect(this.ctx._transform, { x: n, y: i, w: c, h: l }), m = (this._matrix_map_rect(this.ctx._transform, { x: u, y: p, w, h: f }), /data:image\/(\w+).*/i.exec(s));
        d = m != null ? m[1] : "png", this.pdf.addImage(s, d, C.x, C.y, C.w, C.h);
      }, _matrix_multiply: function(s, n) {
        var i = n[0], c = n[1], l = n[2], u = n[3], p = n[4], w = n[5], f = i * s[0] + c * s[2], d = l * s[0] + u * s[2], C = p * s[0] + w * s[2] + s[4];
        return c = i * s[1] + c * s[3], u = l * s[1] + u * s[3], w = p * s[1] + w * s[3] + s[5], [i = f, c, l = d, u, p = C, w];
      }, _matrix_rotation: function(s) {
        return Math.atan2(s[2], s[0]);
      }, _matrix_decompose: function(s) {
        var n = s[0], i = s[1], c = s[2], l = s[3], u = Math.sqrt(n * n + i * i), p = (n /= u) * c + (i /= u) * l;
        c -= n * p, l -= i * p;
        var w = Math.sqrt(c * c + l * l);
        return p /= w, n * (l /= w) < i * (c /= w) && (n = -n, i = -i, p = -p, u = -u), { scale: [u, 0, 0, w, 0, 0], translate: [1, 0, 0, 1, s[4], s[5]], rotate: [n, i, -i, n, 0, 0], skew: [1, 0, p, 1, 0, 0] };
      }, _matrix_map_point: function(s, n) {
        var i = s[0], c = s[1], l = s[2], u = s[3], p = s[4], w = s[5], f = n[0], d = n[1];
        return [f * i + d * l + p, f * c + d * u + w];
      }, _matrix_map_point_obj: function(s, n) {
        var i = this._matrix_map_point(s, [n.x, n.y]);
        return { x: i[0], y: i[1] };
      }, _matrix_map_rect: function(s, n) {
        var i = this._matrix_map_point(s, [n.x, n.y]), c = this._matrix_map_point(s, [n.x + n.w, n.y + n.h]);
        return { x: i[0], y: i[1], w: c[0] - i[0], h: c[1] - i[1] };
      }, _matrix_is_identity: function(s) {
        return s[0] == 1 && s[1] == 0 && s[2] == 0 && s[3] == 1 && s[4] == 0 && s[5] == 0;
      }, rotate: function(s) {
        var n = [Math.cos(s), Math.sin(s), -Math.sin(s), Math.cos(s), 0, 0];
        this.ctx._transform = this._matrix_multiply(this.ctx._transform, n);
      }, scale: function(s, n) {
        var i = [s, 0, 0, n, 0, 0];
        this.ctx._transform = this._matrix_multiply(this.ctx._transform, i);
      }, translate: function(s, n) {
        var i = [1, 0, 0, 1, s, n];
        this.ctx._transform = this._matrix_multiply(this.ctx._transform, i);
      }, stroke: function() {
        if (0 < this.ctx._clip_path.length) {
          var s;
          (s = window.outIntercept ? window.outIntercept.type === "group" ? window.outIntercept.stream : window.outIntercept : this.internal.getCurrentPage()).push("q");
          var n = this.path;
          this.path = this.ctx._clip_path, this.ctx._clip_path = [], this._stroke(!0), this.ctx._clip_path = this.path, this.path = n, this._stroke(!1), s.push("Q");
        } else
          this._stroke(!1);
      }, _stroke: function(s) {
        if (s || !this._isStrokeTransparent()) {
          for (var n = [], i = this.path, c = 0; c < i.length; c++) {
            var l = i[c];
            switch (l.type) {
              case "mt":
                n.push({ start: l, deltas: [], abs: [] });
                break;
              case "lt":
                var u = [l.x - i[c - 1].x, l.y - i[c - 1].y];
                n[n.length - 1].deltas.push(u), n[n.length - 1].abs.push(l);
                break;
              case "bct":
                u = [l.x1 - i[c - 1].x, l.y1 - i[c - 1].y, l.x2 - i[c - 1].x, l.y2 - i[c - 1].y, l.x - i[c - 1].x, l.y - i[c - 1].y], n[n.length - 1].deltas.push(u);
                break;
              case "qct":
                var p = i[c - 1].x + 2 / 3 * (l.x1 - i[c - 1].x), w = i[c - 1].y + 2 / 3 * (l.y1 - i[c - 1].y), f = l.x + 2 / 3 * (l.x1 - l.x), d = l.y + 2 / 3 * (l.y1 - l.y), C = l.x, m = l.y;
                u = [p - i[c - 1].x, w - i[c - 1].y, f - i[c - 1].x, d - i[c - 1].y, C - i[c - 1].x, m - i[c - 1].y], n[n.length - 1].deltas.push(u);
                break;
              case "arc":
                n.length == 0 && n.push({ start: { x: 0, y: 0 }, deltas: [], abs: [] }), n[n.length - 1].arc = !0, Array.isArray(n[n.length - 1].abs) && n[n.length - 1].abs.push(l);
            }
          }
          for (c = 0; c < n.length; c++) {
            var F;
            if (F = c == n.length - 1 ? "s" : null, n[c].arc)
              for (var E = n[c].abs, H = 0; H < E.length; H++) {
                var _ = E[H], N = 360 * _.startAngle / (2 * Math.PI), j = 360 * _.endAngle / (2 * Math.PI), Z = _.x, W = _.y;
                this.internal.arc2(this, Z, W, _.radius, N, j, _.anticlockwise, F, s);
              }
            else
              Z = n[c].start.x, W = n[c].start.y, s ? (this.pdf.lines(n[c].deltas, Z, W, null, null), this.pdf.clip_fixed()) : this.pdf.lines(n[c].deltas, Z, W, null, F);
          }
        }
      }, _isFillTransparent: function() {
        return this.ctx._isFillTransparent || this.globalAlpha == 0;
      }, _isStrokeTransparent: function() {
        return this.ctx._isStrokeTransparent || this.globalAlpha == 0;
      }, fill: function(s) {
        if (0 < this.ctx._clip_path.length) {
          var n;
          (n = window.outIntercept ? window.outIntercept.type === "group" ? window.outIntercept.stream : window.outIntercept : this.internal.getCurrentPage()).push("q");
          var i = this.path;
          this.path = this.ctx._clip_path, this.ctx._clip_path = [], this._fill(s, !0), this.ctx._clip_path = this.path, this.path = i, this._fill(s, !1), n.push("Q");
        } else
          this._fill(s, !1);
      }, _fill: function(s, n) {
        if (!this._isFillTransparent()) {
          var i, c = typeof this.pdf.internal.newObject2 == "function";
          i = window.outIntercept ? window.outIntercept.type === "group" ? window.outIntercept.stream : window.outIntercept : this.internal.getCurrentPage();
          var l = [], u = window.outIntercept;
          if (c)
            switch (this.ctx.globalCompositeOperation) {
              case "normal":
              case "source-over":
                break;
              case "destination-in":
              case "destination-out":
                var p = this.pdf.internal.newStreamObject(), w = this.pdf.internal.newObject2();
                w.push("<</Type /ExtGState"), w.push("/SMask <</S /Alpha /G " + p.objId + " 0 R>>"), w.push(">>");
                var f = "MASK" + w.objId;
                this.pdf.internal.addGraphicsState(f, w.objId);
                var d = "/" + f + " gs";
                i.splice(0, 0, "q"), i.splice(1, 0, d), i.push("Q"), window.outIntercept = p;
                break;
              default:
                var C = "/" + this.pdf.internal.blendModeMap[this.ctx.globalCompositeOperation.toUpperCase()];
                C && this.pdf.internal.out(C + " gs");
            }
          var m = this.ctx.globalAlpha;
          if (this.ctx._fillOpacity < 1 && (m = this.ctx._fillOpacity), c) {
            var F = this.pdf.internal.newObject2();
            F.push("<</Type /ExtGState"), F.push("/CA " + m), F.push("/ca " + m), F.push(">>"), f = "GS_O_" + F.objId, this.pdf.internal.addGraphicsState(f, F.objId), this.pdf.internal.out("/" + f + " gs");
          }
          for (var E = this.path, H = 0; H < E.length; H++) {
            var _ = E[H];
            switch (_.type) {
              case "mt":
                l.push({ start: _, deltas: [], abs: [] });
                break;
              case "lt":
                var N = [_.x - E[H - 1].x, _.y - E[H - 1].y];
                l[l.length - 1].deltas.push(N), l[l.length - 1].abs.push(_);
                break;
              case "bct":
                N = [_.x1 - E[H - 1].x, _.y1 - E[H - 1].y, _.x2 - E[H - 1].x, _.y2 - E[H - 1].y, _.x - E[H - 1].x, _.y - E[H - 1].y], l[l.length - 1].deltas.push(N);
                break;
              case "qct":
                var j = E[H - 1].x + 2 / 3 * (_.x1 - E[H - 1].x), Z = E[H - 1].y + 2 / 3 * (_.y1 - E[H - 1].y), W = _.x + 2 / 3 * (_.x1 - _.x), V = _.y + 2 / 3 * (_.y1 - _.y), Q = _.x, q = _.y;
                N = [j - E[H - 1].x, Z - E[H - 1].y, W - E[H - 1].x, V - E[H - 1].y, Q - E[H - 1].x, q - E[H - 1].y], l[l.length - 1].deltas.push(N);
                break;
              case "arc":
                l.length === 0 && l.push({ deltas: [], abs: [] }), l[l.length - 1].arc = !0, Array.isArray(l[l.length - 1].abs) && l[l.length - 1].abs.push(_);
                break;
              case "close":
                l.push({ close: !0 });
            }
          }
          for (H = 0; H < l.length; H++) {
            var K;
            if (H == l.length - 1 ? (K = "f", s === "evenodd" && (K += "*")) : K = null, l[H].close)
              this.pdf.internal.out("h"), K && this.pdf.internal.out(K);
            else if (l[H].arc) {
              l[H].start && this.internal.move2(this, l[H].start.x, l[H].start.y);
              for (var z = l[H].abs, $ = 0; $ < z.length; $++) {
                var uA = z[$];
                if (uA.startAngle !== void 0) {
                  var AA = 360 * uA.startAngle / (2 * Math.PI), L = 360 * uA.endAngle / (2 * Math.PI), U = uA.x, P = uA.y;
                  $ === 0 && this.internal.move2(this, U, P), this.internal.arc2(this, U, P, uA.radius, AA, L, uA.anticlockwise, null, n), $ === z.length - 1 && l[H].start && (U = l[H].start.x, P = l[H].start.y, this.internal.line2(B, U, P));
                } else
                  this.internal.line2(B, uA.x, uA.y);
              }
            } else
              U = l[H].start.x, P = l[H].start.y, n ? (this.pdf.lines(l[H].deltas, U, P, null, null), this.pdf.clip_fixed()) : this.pdf.lines(l[H].deltas, U, P, null, K);
          }
          window.outIntercept = u;
        }
      }, pushMask: function() {
        if (typeof this.pdf.internal.newObject2 == "function") {
          var s = this.pdf.internal.newStreamObject(), n = this.pdf.internal.newObject2();
          n.push("<</Type /ExtGState"), n.push("/SMask <</S /Alpha /G " + s.objId + " 0 R>>"), n.push(">>");
          var i = "MASK" + n.objId;
          this.pdf.internal.addGraphicsState(i, n.objId);
          var c = "/" + i + " gs";
          this.pdf.internal.out(c);
        } else
          console.log("jsPDF v2 not enabled");
      }, clip: function() {
        if (0 < this.ctx._clip_path.length)
          for (var s = 0; s < this.path.length; s++)
            this.ctx._clip_path.push(this.path[s]);
        else
          this.ctx._clip_path = this.path;
        this.path = [];
      }, measureText: function(s) {
        var n = this.pdf;
        return { getWidth: function() {
          var i = n.internal.getFontSize(), c = n.getStringUnitWidth(s) * i / n.internal.scaleFactor;
          return c *= 1.3333;
        }, get width() {
          return this.getWidth(s);
        } };
      }, _getBaseline: function(s) {
        var n = parseInt(this.pdf.internal.getFontSize()), i = 0.25 * n;
        switch (this.ctx.textBaseline) {
          case "bottom":
            return s - i;
          case "top":
            return s + n;
          case "hanging":
            return s + n - i;
          case "middle":
            return s + n / 2 - i;
          case "ideographic":
            return s;
          case "alphabetic":
          default:
            return s;
        }
      } };
      var B = a.context2d;
      function v() {
        this._isStrokeTransparent = !1, this._strokeOpacity = 1, this.strokeStyle = "#000000", this.fillStyle = "#000000", this._isFillTransparent = !1, this._fillOpacity = 1, this.font = "12pt times", this.textBaseline = "alphabetic", this.textAlign = "start", this.lineWidth = 1, this.lineJoin = "miter", this.lineCap = "butt", this._transform = [1, 0, 0, 1, 0, 0], this.globalCompositeOperation = "normal", this.globalAlpha = 1, this._clip_path = [], this.ignoreClearRect = !1, this.copy = function(s) {
          this._isStrokeTransparent = s._isStrokeTransparent, this._strokeOpacity = s._strokeOpacity, this.strokeStyle = s.strokeStyle, this._isFillTransparent = s._isFillTransparent, this._fillOpacity = s._fillOpacity, this.fillStyle = s.fillStyle, this.font = s.font, this.lineWidth = s.lineWidth, this.lineJoin = s.lineJoin, this.lineCap = s.lineCap, this.textBaseline = s.textBaseline, this.textAlign = s.textAlign, this._fontSize = s._fontSize, this._transform = s._transform.slice(0), this.globalCompositeOperation = s.globalCompositeOperation, this.globalAlpha = s.globalAlpha, this._clip_path = s._clip_path.slice(0), this.ignoreClearRect = s.ignoreClearRect;
        };
      }
      Object.defineProperty(B, "fillStyle", { set: function(s) {
        this.setFillStyle(s);
      }, get: function() {
        return this.ctx.fillStyle;
      } }), Object.defineProperty(B, "strokeStyle", { set: function(s) {
        this.setStrokeStyle(s);
      }, get: function() {
        return this.ctx.strokeStyle;
      } }), Object.defineProperty(B, "lineWidth", { set: function(s) {
        this.setLineWidth(s);
      }, get: function() {
        return this.ctx.lineWidth;
      } }), Object.defineProperty(B, "lineCap", { set: function(s) {
        this.setLineCap(s);
      }, get: function() {
        return this.ctx.lineCap;
      } }), Object.defineProperty(B, "lineJoin", { set: function(s) {
        this.setLineJoin(s);
      }, get: function() {
        return this.ctx.lineJoin;
      } }), Object.defineProperty(B, "miterLimit", { set: function(s) {
        this.ctx.miterLimit = s;
      }, get: function() {
        return this.ctx.miterLimit;
      } }), Object.defineProperty(B, "textBaseline", { set: function(s) {
        this.setTextBaseline(s);
      }, get: function() {
        return this.getTextBaseline();
      } }), Object.defineProperty(B, "textAlign", { set: function(s) {
        this.setTextAlign(s);
      }, get: function() {
        return this.getTextAlign();
      } }), Object.defineProperty(B, "font", { set: function(s) {
        this.setFont(s);
      }, get: function() {
        return this.ctx.font;
      } }), Object.defineProperty(B, "globalCompositeOperation", { set: function(s) {
        this.ctx.globalCompositeOperation = s;
      }, get: function() {
        return this.ctx.globalCompositeOperation;
      } }), Object.defineProperty(B, "globalAlpha", { set: function(s) {
        this.ctx.globalAlpha = s;
      }, get: function() {
        return this.ctx.globalAlpha;
      } }), Object.defineProperty(B, "canvas", { get: function() {
        return { parentNode: !1, style: !1 };
      } }), Object.defineProperty(B, "ignoreClearRect", { set: function(s) {
        this.ctx.ignoreClearRect = s;
      }, get: function() {
        return this.ctx.ignoreClearRect;
      } }), B.internal = {}, B.internal.rxRgb = /rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/, B.internal.rxRgba = /rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d\.]+)\s*\)/, B.internal.rxTransparent = /transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/, B.internal.arc = function(s, n, i, c, l, u, p, w) {
        for (var f = this.pdf.internal.scaleFactor, d = this.pdf.internal.pageSize.getHeight(), C = this.pdf.internal.f2, m = l * (Math.PI / 180), F = u * (Math.PI / 180), E = this.createArc(c, m, F, p), H = 0; H < E.length; H++) {
          var _ = E[H];
          H === 0 ? this.pdf.internal.out([C((_.x1 + n) * f), C((d - (_.y1 + i)) * f), "m", C((_.x2 + n) * f), C((d - (_.y2 + i)) * f), C((_.x3 + n) * f), C((d - (_.y3 + i)) * f), C((_.x4 + n) * f), C((d - (_.y4 + i)) * f), "c"].join(" ")) : this.pdf.internal.out([C((_.x2 + n) * f), C((d - (_.y2 + i)) * f), C((_.x3 + n) * f), C((d - (_.y3 + i)) * f), C((_.x4 + n) * f), C((d - (_.y4 + i)) * f), "c"].join(" ")), s._lastPoint = { x: n, y: i };
        }
        w !== null && this.pdf.internal.out(this.pdf.internal.getStyle(w));
      }, B.internal.arc2 = function(s, n, i, c, l, u, p, w, f) {
        var d = n, C = i;
        f ? (this.arc(s, d, C, c, l, u, p, null), this.pdf.clip_fixed()) : this.arc(s, d, C, c, l, u, p, w);
      }, B.internal.move2 = function(s, n, i) {
        var c = this.pdf.internal.scaleFactor, l = this.pdf.internal.pageSize.getHeight(), u = this.pdf.internal.f2;
        this.pdf.internal.out([u(n * c), u((l - i) * c), "m"].join(" ")), s._lastPoint = { x: n, y: i };
      }, B.internal.line2 = function(s, n, i) {
        var c = this.pdf.internal.scaleFactor, l = this.pdf.internal.pageSize.getHeight(), u = this.pdf.internal.f2, p = { x: n, y: i };
        this.pdf.internal.out([u(p.x * c), u((l - p.y) * c), "l"].join(" ")), s._lastPoint = p;
      }, B.internal.createArc = function(s, n, i, c) {
        var l = 2 * Math.PI, u = Math.PI / 2, p = n;
        for ((p < l || l < p) && (p %= l), p < 0 && (p = l + p); i < n; )
          n -= l;
        var w = Math.abs(i - n);
        w < l && c && (w = l - w);
        for (var f = [], d = c ? -1 : 1, C = p; 1e-5 < w; ) {
          var m = C + d * Math.min(w, u);
          f.push(this.createSmallArc(s, C, m)), w -= Math.abs(m - C), C = m;
        }
        return f;
      }, B.internal.getCurrentPage = function() {
        return this.pdf.internal.pages[this.pdf.internal.getCurrentPageInfo().pageNumber];
      }, B.internal.createSmallArc = function(s, n, i) {
        var c = (i - n) / 2, l = s * Math.cos(c), u = s * Math.sin(c), p = l, w = -u, f = p * p + w * w, d = f + p * l + w * u, C = 4 / 3 * (Math.sqrt(2 * f * d) - d) / (p * u - w * l), m = p - C * w, F = w + C * p, E = m, H = -F, _ = c + n, N = Math.cos(_), j = Math.sin(_);
        return { x1: s * Math.cos(n), y1: s * Math.sin(n), x2: m * N - F * j, y2: m * j + F * N, x3: E * N - H * j, y3: E * j + H * N, x4: s * Math.cos(i), y4: s * Math.sin(i) };
      };
    }(at.API, typeof self < "u" && self || typeof window < "u" && window || typeof It < "u" && It || Function('return typeof this === "object" && this.content')() || Function("return this")()), /** @preserve
       * jsPDF fromHTML plugin. BETA stage. API subject to change. Needs browser
       * Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
       *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
       *               2014 Diego Casorran, https://github.com/diegocr
       *               2014 Daniel Husar, https://github.com/danielhusar
       *               2014 Wolfgang Gassler, https://github.com/woolfg
       *               2014 Steven Spungin, https://github.com/flamenco
       *
       * 
       * ====================================================================
       */
    function(a) {
      var B, v, s, n, i, c, l, u, p, w, f, d, C, m, F, E, H, _, N, j;
      B = function() {
        return function(Q) {
          return V.prototype = Q, new V();
        };
        function V() {
        }
      }(), w = function(V) {
        var Q, q, K, z, $, uA, AA;
        for (q = 0, K = V.length, Q = void 0, uA = z = !1; !z && q !== K; )
          (Q = V[q] = V[q].trimLeft()) && (z = !0), q++;
        for (q = K - 1; K && !uA && q !== -1; )
          (Q = V[q] = V[q].trimRight()) && (uA = !0), q--;
        for ($ = /\s+$/g, AA = !0, q = 0; q !== K; )
          V[q] != "\u2028" && (Q = V[q].replace(/\s+/g, " "), AA && (Q = Q.trimLeft()), Q && (AA = $.test(Q)), V[q] = Q), q++;
        return V;
      }, d = function(V) {
        var Q, q, K;
        for (Q = void 0, q = (K = V.split(",")).shift(); !Q && q; )
          Q = s[q.trim().toLowerCase()], q = K.shift();
        return Q;
      }, C = function(V) {
        var Q;
        return -1 < (V = V === "auto" ? "0px" : V).indexOf("em") && !isNaN(Number(V.replace("em", ""))) && (V = 18.719 * Number(V.replace("em", "")) + "px"), -1 < V.indexOf("pt") && !isNaN(Number(V.replace("pt", ""))) && (V = 1.333 * Number(V.replace("pt", "")) + "px"), (Q = m[V]) ? Q : (Q = { "xx-small": 9, "x-small": 11, small: 13, medium: 16, large: 19, "x-large": 23, "xx-large": 28, auto: 0 }[V]) !== void 0 || (Q = parseFloat(V)) ? m[V] = Q / 16 : (Q = V.match(/([\d\.]+)(px)/), Array.isArray(Q) && Q.length === 3 ? m[V] = parseFloat(Q[1]) / 16 : m[V] = 1);
      }, p = function(V) {
        var Q, q, K, z, $;
        return $ = V, z = document.defaultView && document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle($, null) : $.currentStyle ? $.currentStyle : $.style, q = void 0, (Q = {})["font-family"] = d((K = function(uA) {
          return uA = uA.replace(/-\D/g, function(AA) {
            return AA.charAt(1).toUpperCase();
          }), z[uA];
        })("font-family")) || "times", Q["font-style"] = n[K("font-style")] || "normal", Q["text-align"] = i[K("text-align")] || "left", (q = c[K("font-weight")] || "normal") === "bold" && (Q["font-style"] === "normal" ? Q["font-style"] = q : Q["font-style"] = q + Q["font-style"]), Q["font-size"] = C(K("font-size")) || 1, Q["line-height"] = C(K("line-height")) || 1, Q.display = K("display") === "inline" ? "inline" : "block", q = Q.display === "block", Q["margin-top"] = q && C(K("margin-top")) || 0, Q["margin-bottom"] = q && C(K("margin-bottom")) || 0, Q["padding-top"] = q && C(K("padding-top")) || 0, Q["padding-bottom"] = q && C(K("padding-bottom")) || 0, Q["margin-left"] = q && C(K("margin-left")) || 0, Q["margin-right"] = q && C(K("margin-right")) || 0, Q["padding-left"] = q && C(K("padding-left")) || 0, Q["padding-right"] = q && C(K("padding-right")) || 0, Q["page-break-before"] = K("page-break-before") || "auto", Q.float = l[K("cssFloat")] || "none", Q.clear = u[K("clear")] || "none", Q.color = K("color"), Q;
      }, F = function(V, Q, q) {
        var K, z, $, uA, AA;
        if ($ = !1, uA = z = void 0, K = q["#" + V.id])
          if (typeof K == "function")
            $ = K(V, Q);
          else
            for (z = 0, uA = K.length; !$ && z !== uA; )
              $ = K[z](V, Q), z++;
        if (K = q[V.nodeName], !$ && K)
          if (typeof K == "function")
            $ = K(V, Q);
          else
            for (z = 0, uA = K.length; !$ && z !== uA; )
              $ = K[z](V, Q), z++;
        for (AA = typeof V.className == "string" ? V.className.split(" ") : [], z = 0; z < AA.length; z++)
          if (K = q["." + AA[z]], !$ && K)
            if (typeof K == "function")
              $ = K(V, Q);
            else
              for (z = 0, uA = K.length; !$ && z !== uA; )
                $ = K[z](V, Q), z++;
        return $;
      }, j = function(V, Q) {
        var q, K, z, $, uA, AA, L, U, P;
        for (q = [], K = [], z = 0, P = V.rows[0].cells.length, L = V.clientWidth; z < P; )
          U = V.rows[0].cells[z], K[z] = { name: U.textContent.toLowerCase().replace(/\s+/g, ""), prompt: U.textContent.replace(/\r?\n/g, ""), width: U.clientWidth / L * Q.pdf.internal.pageSize.getWidth() }, z++;
        for (z = 1; z < V.rows.length; ) {
          for (AA = V.rows[z], uA = {}, $ = 0; $ < AA.cells.length; )
            uA[K[$].name] = AA.cells[$].textContent.replace(/\r?\n/g, ""), $++;
          q.push(uA), z++;
        }
        return { rows: q, headers: K };
      };
      var Z = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, OBJECT: 1, EMBED: 1, SELECT: 1 }, W = 1;
      v = function(V, Q, q) {
        var K, z, $, uA, AA, L, U, P;
        for (z = V.childNodes, K = void 0, (AA = ($ = p(V)).display === "block") && (Q.setBlockBoundary(), Q.setBlockStyle($)), uA = 0, L = z.length; uA < L; ) {
          if (((K = z[uA]) === void 0 ? "undefined" : Dt(K)) === "object") {
            if (Q.executeWatchFunctions(K), K.nodeType === 1 && K.nodeName === "HEADER") {
              var I = K, G = Q.pdf.margins_doc.top;
              Q.pdf.internal.events.subscribe("addPage", function(pA) {
                Q.y = G, v(I, Q, q), Q.pdf.margins_doc.top = Q.y + 10, Q.y += 10;
              }, !1);
            }
            if (K.nodeType === 8 && K.nodeName === "#comment")
              ~K.textContent.indexOf("ADD_PAGE") && (Q.pdf.addPage(), Q.y = Q.pdf.margins_doc.top);
            else if (K.nodeType !== 1 || Z[K.nodeName])
              if (K.nodeType === 3) {
                var M = K.nodeValue;
                if (K.nodeValue && K.parentNode.nodeName === "LI")
                  if (K.parentNode.parentNode.nodeName === "OL")
                    M = W++ + ". " + M;
                  else {
                    var sA = $["font-size"], X = (3 - 0.75 * sA) * Q.pdf.internal.scaleFactor, lA = 0.75 * sA * Q.pdf.internal.scaleFactor, rA = 1.74 * sA / Q.pdf.internal.scaleFactor;
                    P = function(pA, UA) {
                      this.pdf.circle(pA + X, UA + lA, rA, "FD");
                    };
                  }
                16 & K.ownerDocument.body.compareDocumentPosition(K) && Q.addText(M, $);
              } else
                typeof K == "string" && Q.addText(K, $);
            else {
              var x;
              if (K.nodeName === "IMG") {
                var O = K.getAttribute("src");
                x = E[Q.pdf.sHashCode(O) || O];
              }
              if (x) {
                Q.pdf.internal.pageSize.getHeight() - Q.pdf.margins_doc.bottom < Q.y + K.height && Q.y > Q.pdf.margins_doc.top && (Q.pdf.addPage(), Q.y = Q.pdf.margins_doc.top, Q.executeWatchFunctions(K));
                var h = p(K), b = Q.x, S = 12 / Q.pdf.internal.scaleFactor, R = (h["margin-left"] + h["padding-left"]) * S, iA = (h["margin-right"] + h["padding-right"]) * S, cA = (h["margin-top"] + h["padding-top"]) * S, gA = (h["margin-bottom"] + h["padding-bottom"]) * S;
                h.float !== void 0 && h.float === "right" ? b += Q.settings.width - K.width - iA : b += R, Q.pdf.addImage(x, b, Q.y + cA, K.width, K.height), x = void 0, h.float === "right" || h.float === "left" ? (Q.watchFunctions.push((function(pA, UA, vA, TA) {
                  return Q.y >= UA ? (Q.x += pA, Q.settings.width += vA, !0) : !!(TA && TA.nodeType === 1 && !Z[TA.nodeName] && Q.x + TA.width > Q.pdf.margins_doc.left + Q.pdf.margins_doc.width) && (Q.x += pA, Q.y = UA, Q.settings.width += vA, !0);
                }).bind(this, h.float === "left" ? -K.width - R - iA : 0, Q.y + K.height + cA + gA, K.width)), Q.watchFunctions.push((function(pA, UA, vA) {
                  return !(Q.y < pA && UA === Q.pdf.internal.getNumberOfPages()) || vA.nodeType === 1 && p(vA).clear === "both" && (Q.y = pA, !0);
                }).bind(this, Q.y + K.height, Q.pdf.internal.getNumberOfPages())), Q.settings.width -= K.width + R + iA, h.float === "left" && (Q.x += K.width + R + iA)) : Q.y += K.height + cA + gA;
              } else if (K.nodeName === "TABLE")
                U = j(K, Q), Q.y += 10, Q.pdf.table(Q.x, Q.y, U.rows, U.headers, { autoSize: !1, printHeaders: q.printHeaders, margins: Q.pdf.margins_doc, css: p(K) }), Q.y = Q.pdf.lastCellPos.y + Q.pdf.lastCellPos.h + 20;
              else if (K.nodeName === "OL" || K.nodeName === "UL")
                W = 1, F(K, Q, q) || v(K, Q, q), Q.y += 10;
              else if (K.nodeName === "LI") {
                var wA = Q.x;
                Q.x += 20 / Q.pdf.internal.scaleFactor, Q.y += 3, F(K, Q, q) || v(K, Q, q), Q.x = wA;
              } else
                K.nodeName === "BR" ? (Q.y += $["font-size"] * Q.pdf.internal.scaleFactor, Q.addText("\u2028", B($))) : F(K, Q, q) || v(K, Q, q);
            }
          }
          uA++;
        }
        if (q.outY = Q.y, AA)
          return Q.setBlockBoundary(P);
      }, E = {}, H = function(V, Q, q, K) {
        var z, $ = V.getElementsByTagName("img"), uA = $.length, AA = 0;
        function L() {
          Q.pdf.internal.events.publish("imagesLoaded"), K(z);
        }
        function U(P, I, G) {
          if (P) {
            var M = new Image();
            z = ++AA, M.crossOrigin = "", M.onerror = M.onload = function() {
              if (M.complete && (M.src.indexOf("data:image/") === 0 && (M.width = I || M.width || 0, M.height = G || M.height || 0), M.width + M.height)) {
                var sA = Q.pdf.sHashCode(P) || P;
                E[sA] = E[sA] || M;
              }
              --AA || L();
            }, M.src = P;
          }
        }
        for (; uA--; )
          U($[uA].getAttribute("src"), $[uA].width, $[uA].height);
        return AA || L();
      }, _ = function(V, Q, q) {
        var K = V.getElementsByTagName("footer");
        if (0 < K.length) {
          K = K[0];
          var z = Q.pdf.internal.write, $ = Q.y;
          Q.pdf.internal.write = function() {
          }, v(K, Q, q);
          var uA = Math.ceil(Q.y - $) + 5;
          Q.y = $, Q.pdf.internal.write = z, Q.pdf.margins_doc.bottom += uA;
          for (var AA = function(P) {
            var I = P !== void 0 ? P.pageNumber : 1, G = Q.y;
            Q.y = Q.pdf.internal.pageSize.getHeight() - Q.pdf.margins_doc.bottom, Q.pdf.margins_doc.bottom -= uA;
            for (var M = K.getElementsByTagName("span"), sA = 0; sA < M.length; ++sA)
              -1 < (" " + M[sA].className + " ").replace(/[\n\t]/g, " ").indexOf(" pageCounter ") && (M[sA].innerHTML = I), -1 < (" " + M[sA].className + " ").replace(/[\n\t]/g, " ").indexOf(" totalPages ") && (M[sA].innerHTML = "###jsPDFVarTotalPages###");
            v(K, Q, q), Q.pdf.margins_doc.bottom += uA, Q.y = G;
          }, L = K.getElementsByTagName("span"), U = 0; U < L.length; ++U)
            -1 < (" " + L[U].className + " ").replace(/[\n\t]/g, " ").indexOf(" totalPages ") && Q.pdf.internal.events.subscribe("htmlRenderingFinished", Q.pdf.putTotalPages.bind(Q.pdf, "###jsPDFVarTotalPages###"), !0);
          Q.pdf.internal.events.subscribe("addPage", AA, !1), AA(), Z.FOOTER = 1;
        }
      }, N = function(V, Q, q, K, z, $) {
        if (!Q)
          return !1;
        var uA, AA, L, U;
        typeof Q == "string" || Q.parentNode || (Q = "" + Q.innerHTML), typeof Q == "string" && (uA = Q.replace(/<\/?script[^>]*?>/gi, ""), U = "jsPDFhtmlText" + Date.now().toString() + (1e3 * Math.random()).toFixed(0), (L = document.createElement("div")).style.cssText = "position: absolute !important;clip: rect(1px 1px 1px 1px); /* IE6, IE7 */clip: rect(1px, 1px, 1px, 1px);padding:0 !important;border:0 !important;height: 1px !important;width: 1px !important; top:auto;left:-100px;overflow: hidden;", L.innerHTML = '<iframe style="height:1px;width:1px" name="' + U + '" />', document.body.appendChild(L), (AA = window.frames[U]).document.open(), AA.document.writeln(uA), AA.document.close(), Q = AA.document.body);
        var P, I = new f(V, q, K, z);
        return H.call(this, Q, I, z.elementHandlers, function(G) {
          _(Q, I, z.elementHandlers), v(Q, I, z.elementHandlers), I.pdf.internal.events.publish("htmlRenderingFinished"), P = I.dispose(), typeof $ == "function" ? $(P) : G && console.error("jsPDF Warning: rendering issues? provide a callback to fromHTML!");
        }), P || { x: I.x, y: I.y };
      }, (f = function(V, Q, q, K) {
        return this.pdf = V, this.x = Q, this.y = q, this.settings = K, this.watchFunctions = [], this.init(), this;
      }).prototype.init = function() {
        return this.paragraph = { text: [], style: [] }, this.pdf.internal.write("q");
      }, f.prototype.dispose = function() {
        return this.pdf.internal.write("Q"), { x: this.x, y: this.y, ready: !0 };
      }, f.prototype.executeWatchFunctions = function(V) {
        var Q = !1, q = [];
        if (0 < this.watchFunctions.length) {
          for (var K = 0; K < this.watchFunctions.length; ++K)
            this.watchFunctions[K](V) === !0 ? Q = !0 : q.push(this.watchFunctions[K]);
          this.watchFunctions = q;
        }
        return Q;
      }, f.prototype.splitFragmentsIntoLines = function(V, Q) {
        var q, K, z, $, uA, AA, L, U, P, I, G, M, sA, X;
        for (I = this.pdf.internal.scaleFactor, $ = {}, AA = L = U = X = uA = z = P = K = void 0, M = [G = []], q = 0, sA = this.settings.width; V.length; )
          if (uA = V.shift(), X = Q.shift(), uA)
            if ((z = $[(K = X["font-family"]) + (P = X["font-style"])]) || (z = this.pdf.internal.getFont(K, P).metadata.Unicode, $[K + P] = z), U = { widths: z.widths, kerning: z.kerning, fontSize: 12 * X["font-size"], textIndent: q }, L = this.pdf.getStringUnitWidth(uA, U) * U.fontSize / I, uA == "\u2028")
              G = [], M.push(G);
            else if (sA < q + L) {
              for (AA = this.pdf.splitTextToSize(uA, sA, U), G.push([AA.shift(), X]); AA.length; )
                G = [[AA.shift(), X]], M.push(G);
              q = this.pdf.getStringUnitWidth(G[0][0], U) * U.fontSize / I;
            } else
              G.push([uA, X]), q += L;
        if (X["text-align"] !== void 0 && (X["text-align"] === "center" || X["text-align"] === "right" || X["text-align"] === "justify"))
          for (var lA = 0; lA < M.length; ++lA) {
            var rA = this.pdf.getStringUnitWidth(M[lA][0][0], U) * U.fontSize / I;
            0 < lA && (M[lA][0][1] = B(M[lA][0][1]));
            var x = sA - rA;
            if (X["text-align"] === "right")
              M[lA][0][1]["margin-left"] = x;
            else if (X["text-align"] === "center")
              M[lA][0][1]["margin-left"] = x / 2;
            else if (X["text-align"] === "justify") {
              var O = M[lA][0][0].split(" ").length - 1;
              M[lA][0][1]["word-spacing"] = x / O, lA === M.length - 1 && (M[lA][0][1]["word-spacing"] = 0);
            }
          }
        return M;
      }, f.prototype.RenderTextFragment = function(V, Q) {
        var q, K;
        K = 0, this.pdf.internal.pageSize.getHeight() - this.pdf.margins_doc.bottom < this.y + this.pdf.internal.getFontSize() && (this.pdf.internal.write("ET", "Q"), this.pdf.addPage(), this.y = this.pdf.margins_doc.top, this.pdf.internal.write("q", "BT", this.getPdfColor(Q.color), this.pdf.internal.getCoordinateString(this.x), this.pdf.internal.getVerticalCoordinateString(this.y), "Td"), K = Math.max(K, Q["line-height"], Q["font-size"]), this.pdf.internal.write(0, (-12 * K).toFixed(2), "Td")), q = this.pdf.internal.getFont(Q["font-family"], Q["font-style"]);
        var z = this.getPdfColor(Q.color);
        z !== this.lastTextColor && (this.pdf.internal.write(z), this.lastTextColor = z), Q["word-spacing"] !== void 0 && 0 < Q["word-spacing"] && this.pdf.internal.write(Q["word-spacing"].toFixed(2), "Tw"), this.pdf.internal.write("/" + q.id, (12 * Q["font-size"]).toFixed(2), "Tf", "(" + this.pdf.internal.pdfEscape(V) + ") Tj"), Q["word-spacing"] !== void 0 && this.pdf.internal.write(0, "Tw");
      }, f.prototype.getPdfColor = function(V) {
        var Q, q, K, z = new RGBColor(V), $ = /rgb\s*\(\s*(\d+),\s*(\d+),\s*(\d+\s*)\)/.exec(V);
        if ($ != null ? (Q = parseInt($[1]), q = parseInt($[2]), K = parseInt($[3])) : (V.charAt(0) != "#" && (V = z.ok ? z.toHex() : "#000000"), Q = V.substring(1, 3), Q = parseInt(Q, 16), q = V.substring(3, 5), q = parseInt(q, 16), K = V.substring(5, 7), K = parseInt(K, 16)), typeof Q == "string" && /^#[0-9A-Fa-f]{6}$/.test(Q)) {
          var uA = parseInt(Q.substr(1), 16);
          Q = uA >> 16 & 255, q = uA >> 8 & 255, K = 255 & uA;
        }
        var AA = this.f3;
        return Q === 0 && q === 0 && K === 0 || q === void 0 ? AA(Q / 255) + " g" : [AA(Q / 255), AA(q / 255), AA(K / 255), "rg"].join(" ");
      }, f.prototype.f3 = function(V) {
        return V.toFixed(3);
      }, f.prototype.renderParagraph = function(V) {
        var Q, q, K, z, $, uA, AA, L, U, P, I, G, M;
        if (K = w(this.paragraph.text), G = this.paragraph.style, Q = this.paragraph.blockstyle, this.paragraph.priorblockstyle, this.paragraph = { text: [], style: [], blockstyle: {}, priorblockstyle: Q }, K.join("").trim()) {
          AA = this.splitFragmentsIntoLines(K, G), L = uA = void 0, q = 12 / this.pdf.internal.scaleFactor, this.priorMarginBottom = this.priorMarginBottom || 0, I = (Math.max((Q["margin-top"] || 0) - this.priorMarginBottom, 0) + (Q["padding-top"] || 0)) * q, P = ((Q["margin-bottom"] || 0) + (Q["padding-bottom"] || 0)) * q, this.priorMarginBottom = Q["margin-bottom"] || 0, Q["page-break-before"] === "always" && (this.pdf.addPage(), this.y = 0, I = ((Q["margin-top"] || 0) + (Q["padding-top"] || 0)) * q), U = this.pdf.internal.write, $ = z = void 0, this.y += I, U("q", "BT 0 g", this.pdf.internal.getCoordinateString(this.x), this.pdf.internal.getVerticalCoordinateString(this.y), "Td");
          for (var sA = 0; AA.length; ) {
            for (z = L = 0, $ = (uA = AA.shift()).length; z !== $; )
              uA[z][0].trim() && (L = Math.max(L, uA[z][1]["line-height"], uA[z][1]["font-size"]), M = 7 * uA[z][1]["font-size"]), z++;
            var X = 0, lA = 0;
            for (uA[0][1]["margin-left"] !== void 0 && 0 < uA[0][1]["margin-left"] && (X = (lA = this.pdf.internal.getCoordinateString(uA[0][1]["margin-left"])) - sA, sA = lA), U(X + Math.max(Q["margin-left"] || 0, 0) * q, (-12 * L).toFixed(2), "Td"), z = 0, $ = uA.length; z !== $; )
              uA[z][0] && this.RenderTextFragment(uA[z][0], uA[z][1]), z++;
            if (this.y += L * q, this.executeWatchFunctions(uA[0][1]) && 0 < AA.length) {
              var rA = [], x = [];
              AA.forEach(function(O) {
                for (var h = 0, b = O.length; h !== b; )
                  O[h][0] && (rA.push(O[h][0] + " "), x.push(O[h][1])), ++h;
              }), AA = this.splitFragmentsIntoLines(w(rA), x), U("ET", "Q"), U("q", "BT 0 g", this.pdf.internal.getCoordinateString(this.x), this.pdf.internal.getVerticalCoordinateString(this.y), "Td");
            }
          }
          return V && typeof V == "function" && V.call(this, this.x - 9, this.y - M / 2), U("ET", "Q"), this.y += P;
        }
      }, f.prototype.setBlockBoundary = function(V) {
        return this.renderParagraph(V);
      }, f.prototype.setBlockStyle = function(V) {
        return this.paragraph.blockstyle = V;
      }, f.prototype.addText = function(V, Q) {
        return this.paragraph.text.push(V), this.paragraph.style.push(Q);
      }, s = { helvetica: "helvetica", "sans-serif": "helvetica", "times new roman": "times", serif: "times", times: "times", monospace: "courier", courier: "courier" }, c = { 100: "normal", 200: "normal", 300: "normal", 400: "normal", 500: "bold", 600: "bold", 700: "bold", 800: "bold", 900: "bold", normal: "normal", bold: "bold", bolder: "bold", lighter: "normal" }, n = { normal: "normal", italic: "italic", oblique: "italic" }, i = { left: "left", right: "right", center: "center", justify: "justify" }, l = { none: "none", right: "right", left: "left" }, u = { none: "none", both: "both" }, m = { normal: 1 }, a.fromHTML = function(V, Q, q, K, z, $) {
        return this.margins_doc = $ || { top: 0, bottom: 0 }, K || (K = {}), K.elementHandlers || (K.elementHandlers = {}), N(this, V, isNaN(Q) ? 4 : Q, isNaN(q) ? 4 : q, K, z);
      };
    }(at.API), at.API.addJS = function(a) {
      return _A = a, this.internal.events.subscribe("postPutResources", function(B) {
        xA = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/Names [(EmbeddedJS) " + (xA + 1) + " 0 R]"), this.internal.out(">>"), this.internal.out("endobj"), NA = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /JavaScript"), this.internal.out("/JS (" + _A + ")"), this.internal.out(">>"), this.internal.out("endobj");
      }), this.internal.events.subscribe("putCatalog", function() {
        xA !== void 0 && NA !== void 0 && this.internal.out("/Names <</JavaScript " + xA + " 0 R>>");
      }), this;
    }, /**
       * jsPDF Outline PlugIn
       * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
       *
       * Licensed under the MIT License.
       * http://opensource.org/licenses/mit-license
       */
    (HA = at.API).events.push(["postPutResources", function() {
      var a = this, B = /^(\d+) 0 obj$/;
      if (0 < this.outline.root.children.length)
        for (var v = a.outline.render().split(/\r\n/), s = 0; s < v.length; s++) {
          var n = v[s], i = B.exec(n);
          if (i != null) {
            var c = i[1];
            a.internal.newObjectDeferredBegin(c);
          }
          a.internal.write(n);
        }
      if (this.outline.createNamedDestinations) {
        var l = this.internal.pages.length, u = [];
        for (s = 0; s < l; s++) {
          var p = a.internal.newObject();
          u.push(p);
          var w = a.internal.getPageInfo(s + 1);
          a.internal.write("<< /D[" + w.objId + " 0 R /XYZ null null null]>> endobj");
        }
        var f = a.internal.newObject();
        for (a.internal.write("<< /Names [ "), s = 0; s < u.length; s++)
          a.internal.write("(page_" + (s + 1) + ")" + u[s] + " 0 R");
        a.internal.write(" ] >>", "endobj"), a.internal.newObject(), a.internal.write("<< /Dests " + f + " 0 R"), a.internal.write(">>", "endobj");
      }
    }]), HA.events.push(["putCatalog", function() {
      0 < this.outline.root.children.length && (this.internal.write("/Outlines", this.outline.makeRef(this.outline.root)), this.outline.createNamedDestinations && this.internal.write("/Names " + namesOid + " 0 R"));
    }]), HA.events.push(["initialized", function() {
      var a = this;
      a.outline = { createNamedDestinations: !1, root: { children: [] } }, a.outline.add = function(B, v, s) {
        var n = { title: v, options: s, children: [] };
        return B == null && (B = this.root), B.children.push(n), n;
      }, a.outline.render = function() {
        return this.ctx = {}, this.ctx.val = "", this.ctx.pdf = a, this.genIds_r(this.root), this.renderRoot(this.root), this.renderItems(this.root), this.ctx.val;
      }, a.outline.genIds_r = function(B) {
        B.id = a.internal.newObjectDeferred();
        for (var v = 0; v < B.children.length; v++)
          this.genIds_r(B.children[v]);
      }, a.outline.renderRoot = function(B) {
        this.objStart(B), this.line("/Type /Outlines"), 0 < B.children.length && (this.line("/First " + this.makeRef(B.children[0])), this.line("/Last " + this.makeRef(B.children[B.children.length - 1]))), this.line("/Count " + this.count_r({ count: 0 }, B)), this.objEnd();
      }, a.outline.renderItems = function(B) {
        for (var v = 0; v < B.children.length; v++) {
          var s = B.children[v];
          this.objStart(s), this.line("/Title " + this.makeString(s.title)), this.line("/Parent " + this.makeRef(B)), 0 < v && this.line("/Prev " + this.makeRef(B.children[v - 1])), v < B.children.length - 1 && this.line("/Next " + this.makeRef(B.children[v + 1])), 0 < s.children.length && (this.line("/First " + this.makeRef(s.children[0])), this.line("/Last " + this.makeRef(s.children[s.children.length - 1])));
          var n = this.count = this.count_r({ count: 0 }, s);
          if (0 < n && this.line("/Count " + n), s.options && s.options.pageNumber) {
            var i = a.internal.getPageInfo(s.options.pageNumber);
            this.line("/Dest [" + i.objId + " 0 R /XYZ 0 " + this.ctx.pdf.internal.pageSize.getHeight() * this.ctx.pdf.internal.scaleFactor + " 0]");
          }
          this.objEnd();
        }
        for (v = 0; v < B.children.length; v++)
          s = B.children[v], this.renderItems(s);
      }, a.outline.line = function(B) {
        this.ctx.val += B + `\r
`;
      }, a.outline.makeRef = function(B) {
        return B.id + " 0 R";
      }, a.outline.makeString = function(B) {
        return "(" + a.internal.pdfEscape(B) + ")";
      }, a.outline.objStart = function(B) {
        this.ctx.val += `\r
` + B.id + ` 0 obj\r
<<\r
`;
      }, a.outline.objEnd = function(B) {
        this.ctx.val += `>> \r
endobj\r
`;
      }, a.outline.count_r = function(B, v) {
        for (var s = 0; s < v.children.length; s++)
          B.count++, this.count_r(B, v.children[s]);
        return B.count;
      };
    }]), /**@preserve
       *  ====================================================================
       * jsPDF PNG PlugIn
       * Copyright (c) 2014 James Robb, https://github.com/jamesbrobb
       *
       * 
       * ====================================================================
       */
    WA = at.API, VA = function() {
      var a = typeof Deflater == "function";
      if (!a)
        throw new Error("requires deflate.js for compression");
      return a;
    }, kA = function(a, B, v, s) {
      var n = 5, i = yt;
      switch (s) {
        case WA.image_compression.FAST:
          n = 3, i = ft;
          break;
        case WA.image_compression.MEDIUM:
          n = 6, i = Ft;
          break;
        case WA.image_compression.SLOW:
          n = 9, i = tt;
      }
      a = At(a, B, v, i);
      var c = new Uint8Array(IA(n)), l = zA(a), u = new Deflater(n), p = u.append(a), w = u.flush(), f = c.length + p.length + w.length, d = new Uint8Array(f + 4);
      return d.set(c), d.set(p, c.length), d.set(w, c.length + p.length), d[f++] = l >>> 24 & 255, d[f++] = l >>> 16 & 255, d[f++] = l >>> 8 & 255, d[f++] = 255 & l, WA.arrayBufferToBinaryString(d);
    }, IA = function(a, B) {
      var v = Math.LOG2E * Math.log(32768) - 8 << 4 | 8, s = v << 8;
      return s |= Math.min(3, (B - 1 & 255) >> 1) << 6, s |= 0, [v, 255 & (s += 31 - s % 31)];
    }, zA = function(a, B) {
      for (var v, s = 1, n = 0, i = a.length, c = 0; 0 < i; ) {
        for (i -= v = B < i ? B : i; n += s += a[c++], --v; )
          ;
        s %= 65521, n %= 65521;
      }
      return (n << 16 | s) >>> 0;
    }, At = function(a, B, v, s) {
      for (var n, i, c, l = a.length / B, u = new Uint8Array(a.length + l), p = Rt(), w = 0; w < l; w++) {
        if (c = w * B, n = a.subarray(c, c + B), s)
          u.set(s(n, v, i), c + w);
        else {
          for (var f = 0, d = p.length, C = []; f < d; f++)
            C[f] = p[f](n, v, i);
          var m = Ct(C.concat());
          u.set(C[m], c + w);
        }
        i = n;
      }
      return u;
    }, RA = function(a, B, v) {
      var s = Array.apply([], a);
      return s.unshift(0), s;
    }, ft = function(a, B, v) {
      var s, n = [], i = 0, c = a.length;
      for (n[0] = 1; i < c; i++)
        s = a[i - B] || 0, n[i + 1] = a[i] - s + 256 & 255;
      return n;
    }, yt = function(a, B, v) {
      var s, n = [], i = 0, c = a.length;
      for (n[0] = 2; i < c; i++)
        s = v && v[i] || 0, n[i + 1] = a[i] - s + 256 & 255;
      return n;
    }, Ft = function(a, B, v) {
      var s, n, i = [], c = 0, l = a.length;
      for (i[0] = 3; c < l; c++)
        s = a[c - B] || 0, n = v && v[c] || 0, i[c + 1] = a[c] + 256 - (s + n >>> 1) & 255;
      return i;
    }, tt = function(a, B, v) {
      var s, n, i, c, l = [], u = 0, p = a.length;
      for (l[0] = 4; u < p; u++)
        s = a[u - B] || 0, n = v && v[u] || 0, i = v && v[u - B] || 0, c = pt(s, n, i), l[u + 1] = a[u] - c + 256 & 255;
      return l;
    }, pt = function(a, B, v) {
      var s = a + B - v, n = Math.abs(s - a), i = Math.abs(s - B), c = Math.abs(s - v);
      return n <= i && n <= c ? a : i <= c ? B : v;
    }, Rt = function() {
      return [RA, ft, yt, Ft, tt];
    }, Ct = function(a) {
      for (var B, v, s, n = 0, i = a.length; n < i; )
        ((B = Bt(a[n].slice(1))) < v || !v) && (v = B, s = n), n++;
      return s;
    }, Bt = function(a) {
      for (var B = 0, v = a.length, s = 0; B < v; )
        s += Math.abs(a[B++]);
      return s;
    }, WA.processPNG = function(a, B, v, s, n) {
      var i, c, l, u, p, w, f = this.color_spaces.DEVICE_RGB, d = this.decode.FLATE_DECODE, C = 8;
      if (this.isArrayBuffer(a) && (a = new Uint8Array(a)), this.isArrayBufferView(a)) {
        if (typeof PNG != "function" || typeof Bs != "function")
          throw new Error("PNG support requires png.js and zlib.js");
        if (a = (i = new PNG(a)).imgData, C = i.bits, f = i.colorSpace, u = i.colors, [4, 6].indexOf(i.colorType) !== -1) {
          if (i.bits === 8)
            for (var m, F = (K = i.pixelBitlength == 32 ? new Uint32Array(i.decodePixels().buffer) : i.pixelBitlength == 16 ? new Uint16Array(i.decodePixels().buffer) : new Uint8Array(i.decodePixels().buffer)).length, E = new Uint8Array(F * i.colors), H = new Uint8Array(F), _ = i.pixelBitlength - i.bits, N = 0, j = 0; N < F; N++) {
              for (Z = K[N], m = 0; m < _; )
                E[j++] = Z >>> m & 255, m += i.bits;
              H[N] = Z >>> m & 255;
            }
          if (i.bits === 16) {
            F = (K = new Uint32Array(i.decodePixels().buffer)).length, E = new Uint8Array(F * (32 / i.pixelBitlength) * i.colors), H = new Uint8Array(F * (32 / i.pixelBitlength));
            for (var Z, W = 1 < i.colors, V = j = N = 0; N < F; )
              Z = K[N++], E[j++] = Z >>> 0 & 255, W && (E[j++] = Z >>> 16 & 255, Z = K[N++], E[j++] = Z >>> 0 & 255), H[V++] = Z >>> 16 & 255;
            C = 8;
          }
          s !== WA.image_compression.NONE && VA() ? (a = kA(E, i.width * i.colors, i.colors, s), w = kA(H, i.width, 1, s)) : (a = E, w = H, d = null);
        }
        if (i.colorType === 3 && (f = this.color_spaces.INDEXED, p = i.palette, i.transparency.indexed)) {
          var Q = i.transparency.indexed, q = 0;
          for (N = 0, F = Q.length; N < F; ++N)
            q += Q[N];
          if ((q /= 255) == F - 1 && Q.indexOf(0) !== -1)
            l = [Q.indexOf(0)];
          else if (q !== F) {
            var K = i.decodePixels();
            for (H = new Uint8Array(K.length), N = 0, F = K.length; N < F; N++)
              H[N] = Q[K[N]];
            w = kA(H, i.width, 1);
          }
        }
        var z = function($) {
          var uA;
          switch ($) {
            case WA.image_compression.FAST:
              uA = 11;
              break;
            case WA.image_compression.MEDIUM:
              uA = 13;
              break;
            case WA.image_compression.SLOW:
              uA = 14;
              break;
            default:
              uA = 12;
          }
          return uA;
        }(s);
        return c = d === this.decode.FLATE_DECODE ? "/Predictor " + z + " /Colors " + u + " /BitsPerComponent " + C + " /Columns " + i.width : "/Colors " + u + " /BitsPerComponent " + C + " /Columns " + i.width, (this.isArrayBuffer(a) || this.isArrayBufferView(a)) && (a = this.arrayBufferToBinaryString(a)), (w && this.isArrayBuffer(w) || this.isArrayBufferView(w)) && (w = this.arrayBufferToBinaryString(w)), this.createImageInfo(a, i.width, i.height, f, C, d, B, v, c, l, p, w, z);
      }
      throw new Error("Unsupported PNG image data, try using JPEG instead.");
    }, /**
       * jsPDF gif Support PlugIn
       * Copyright (c) 2017 Aras Abbasi 
       *
       * Licensed under the MIT License.
       * http://opensource.org/licenses/mit-license
       */
    (te = at.API).processGIF89A = function(a, B, v, s, n) {
      var i = new ds(a), c = i.width, l = i.height, u = [];
      i.decodeAndBlitFrameRGBA(0, u);
      var p = { data: u, width: c, height: l }, w = new si(100).encode(p, 100);
      return te.processJPEG.call(this, w, B, v, s);
    }, te.processGIF87A = te.processGIF89A, /**
       * jsPDF bmp Support PlugIn
       * Copyright (c) 2018 Aras Abbasi 
       *
       * Licensed under the MIT License.
       * http://opensource.org/licenses/mit-license
       */
    (Xt = at.API).processBMP = function(a, B, v, s, n) {
      var i = new le(a, !1), c = i.width, l = i.height, u = { data: i.getData(), width: c, height: l }, p = new si(100).encode(u, 100);
      return Xt.processJPEG.call(this, p, B, v, s);
    }, at.API.setLanguage = function(a) {
      return this.internal.languageSettings === void 0 && (this.internal.languageSettings = {}, this.internal.languageSettings.isSubscribed = !1), { af: "Afrikaans", sq: "Albanian", ar: "Arabic (Standard)", "ar-DZ": "Arabic (Algeria)", "ar-BH": "Arabic (Bahrain)", "ar-EG": "Arabic (Egypt)", "ar-IQ": "Arabic (Iraq)", "ar-JO": "Arabic (Jordan)", "ar-KW": "Arabic (Kuwait)", "ar-LB": "Arabic (Lebanon)", "ar-LY": "Arabic (Libya)", "ar-MA": "Arabic (Morocco)", "ar-OM": "Arabic (Oman)", "ar-QA": "Arabic (Qatar)", "ar-SA": "Arabic (Saudi Arabia)", "ar-SY": "Arabic (Syria)", "ar-TN": "Arabic (Tunisia)", "ar-AE": "Arabic (U.A.E.)", "ar-YE": "Arabic (Yemen)", an: "Aragonese", hy: "Armenian", as: "Assamese", ast: "Asturian", az: "Azerbaijani", eu: "Basque", be: "Belarusian", bn: "Bengali", bs: "Bosnian", br: "Breton", bg: "Bulgarian", my: "Burmese", ca: "Catalan", ch: "Chamorro", ce: "Chechen", zh: "Chinese", "zh-HK": "Chinese (Hong Kong)", "zh-CN": "Chinese (PRC)", "zh-SG": "Chinese (Singapore)", "zh-TW": "Chinese (Taiwan)", cv: "Chuvash", co: "Corsican", cr: "Cree", hr: "Croatian", cs: "Czech", da: "Danish", nl: "Dutch (Standard)", "nl-BE": "Dutch (Belgian)", en: "English", "en-AU": "English (Australia)", "en-BZ": "English (Belize)", "en-CA": "English (Canada)", "en-IE": "English (Ireland)", "en-JM": "English (Jamaica)", "en-NZ": "English (New Zealand)", "en-PH": "English (Philippines)", "en-ZA": "English (South Africa)", "en-TT": "English (Trinidad & Tobago)", "en-GB": "English (United Kingdom)", "en-US": "English (United States)", "en-ZW": "English (Zimbabwe)", eo: "Esperanto", et: "Estonian", fo: "Faeroese", fj: "Fijian", fi: "Finnish", fr: "French (Standard)", "fr-BE": "French (Belgium)", "fr-CA": "French (Canada)", "fr-FR": "French (France)", "fr-LU": "French (Luxembourg)", "fr-MC": "French (Monaco)", "fr-CH": "French (Switzerland)", fy: "Frisian", fur: "Friulian", gd: "Gaelic (Scots)", "gd-IE": "Gaelic (Irish)", gl: "Galacian", ka: "Georgian", de: "German (Standard)", "de-AT": "German (Austria)", "de-DE": "German (Germany)", "de-LI": "German (Liechtenstein)", "de-LU": "German (Luxembourg)", "de-CH": "German (Switzerland)", el: "Greek", gu: "Gujurati", ht: "Haitian", he: "Hebrew", hi: "Hindi", hu: "Hungarian", is: "Icelandic", id: "Indonesian", iu: "Inuktitut", ga: "Irish", it: "Italian (Standard)", "it-CH": "Italian (Switzerland)", ja: "Japanese", kn: "Kannada", ks: "Kashmiri", kk: "Kazakh", km: "Khmer", ky: "Kirghiz", tlh: "Klingon", ko: "Korean", "ko-KP": "Korean (North Korea)", "ko-KR": "Korean (South Korea)", la: "Latin", lv: "Latvian", lt: "Lithuanian", lb: "Luxembourgish", mk: "FYRO Macedonian", ms: "Malay", ml: "Malayalam", mt: "Maltese", mi: "Maori", mr: "Marathi", mo: "Moldavian", nv: "Navajo", ng: "Ndonga", ne: "Nepali", no: "Norwegian", nb: "Norwegian (Bokmal)", nn: "Norwegian (Nynorsk)", oc: "Occitan", or: "Oriya", om: "Oromo", fa: "Persian", "fa-IR": "Persian/Iran", pl: "Polish", pt: "Portuguese", "pt-BR": "Portuguese (Brazil)", pa: "Punjabi", "pa-IN": "Punjabi (India)", "pa-PK": "Punjabi (Pakistan)", qu: "Quechua", rm: "Rhaeto-Romanic", ro: "Romanian", "ro-MO": "Romanian (Moldavia)", ru: "Russian", "ru-MO": "Russian (Moldavia)", sz: "Sami (Lappish)", sg: "Sango", sa: "Sanskrit", sc: "Sardinian", sd: "Sindhi", si: "Singhalese", sr: "Serbian", sk: "Slovak", sl: "Slovenian", so: "Somani", sb: "Sorbian", es: "Spanish", "es-AR": "Spanish (Argentina)", "es-BO": "Spanish (Bolivia)", "es-CL": "Spanish (Chile)", "es-CO": "Spanish (Colombia)", "es-CR": "Spanish (Costa Rica)", "es-DO": "Spanish (Dominican Republic)", "es-EC": "Spanish (Ecuador)", "es-SV": "Spanish (El Salvador)", "es-GT": "Spanish (Guatemala)", "es-HN": "Spanish (Honduras)", "es-MX": "Spanish (Mexico)", "es-NI": "Spanish (Nicaragua)", "es-PA": "Spanish (Panama)", "es-PY": "Spanish (Paraguay)", "es-PE": "Spanish (Peru)", "es-PR": "Spanish (Puerto Rico)", "es-ES": "Spanish (Spain)", "es-UY": "Spanish (Uruguay)", "es-VE": "Spanish (Venezuela)", sx: "Sutu", sw: "Swahili", sv: "Swedish", "sv-FI": "Swedish (Finland)", "sv-SV": "Swedish (Sweden)", ta: "Tamil", tt: "Tatar", te: "Teluga", th: "Thai", tig: "Tigre", ts: "Tsonga", tn: "Tswana", tr: "Turkish", tk: "Turkmen", uk: "Ukrainian", hsb: "Upper Sorbian", ur: "Urdu", ve: "Venda", vi: "Vietnamese", vo: "Volapuk", wa: "Walloon", cy: "Welsh", xh: "Xhosa", ji: "Yiddish", zu: "Zulu" }[a] !== void 0 && (this.internal.languageSettings.languageCode = a, this.internal.languageSettings.isSubscribed === !1 && (this.internal.events.subscribe("putCatalog", function() {
        this.internal.write("/Lang (" + this.internal.languageSettings.languageCode + ")");
      }), this.internal.languageSettings.isSubscribed = !0)), this;
    }, /** @preserve
       * jsPDF split_text_to_size plugin - MIT license.
       * Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
       *               2014 Diego Casorran, https://github.com/diegocr
       */
    Mt = at.API, ee = Mt.getCharWidthsArray = function(a, B) {
      var v, s, n, i = (B = B || {}).font || this.internal.getFont(), c = B.fontSize || this.internal.getFontSize(), l = B.charSpace || this.internal.getCharSpace(), u = B.widths ? B.widths : i.metadata.Unicode.widths, p = u.fof ? u.fof : 1, w = B.kerning ? B.kerning : i.metadata.Unicode.kerning, f = w.fof ? w.fof : 1, d = 0, C = u[0] || p, m = [];
      for (v = 0, s = a.length; v < s; v++)
        n = a.charCodeAt(v), typeof i.metadata.widthOfString == "function" ? m.push((i.metadata.widthOfGlyph(i.metadata.characterToGlyph(n)) + l * (1e3 / c) || 0) / 1e3) : m.push((u[n] || C) / p + (w[n] && w[n][d] || 0) / f), d = n;
      return m;
    }, re = Mt.getArraySum = function(a) {
      for (var B = a.length, v = 0; B; )
        v += a[--B];
      return v;
    }, ne = Mt.getStringUnitWidth = function(a, B) {
      var v = (B = B || {}).fontSize || this.internal.getFontSize(), s = B.font || this.internal.getFont(), n = B.charSpace || this.internal.getCharSpace();
      return typeof s.metadata.widthOfString == "function" ? s.metadata.widthOfString(a, v, n) / v : re(ee.apply(this, arguments));
    }, se = function(a, B, v, s) {
      for (var n = [], i = 0, c = a.length, l = 0; i !== c && l + B[i] < v; )
        l += B[i], i++;
      n.push(a.slice(0, i));
      var u = i;
      for (l = 0; i !== c; )
        l + B[i] > s && (n.push(a.slice(u, i)), l = 0, u = i), l += B[i], i++;
      return u !== i && n.push(a.slice(u, i)), n;
    }, kt = function(a, B, v) {
      v || (v = {});
      var s, n, i, c, l, u, p = [], w = [p], f = v.textIndent || 0, d = 0, C = 0, m = a.split(" "), F = ee.apply(this, [" ", v])[0];
      if (u = v.lineIndent === -1 ? m[0].length + 2 : v.lineIndent || 0) {
        var E = Array(u).join(" "), H = [];
        m.map(function(j) {
          1 < (j = j.split(/\s*\n/)).length ? H = H.concat(j.map(function(Z, W) {
            return (W && Z.length ? `
` : "") + Z;
          })) : H.push(j[0]);
        }), m = H, u = ne.apply(this, [E, v]);
      }
      for (i = 0, c = m.length; i < c; i++) {
        var _ = 0;
        if (s = m[i], u && s[0] == `
` && (s = s.substr(1), _ = 1), n = ee.apply(this, [s, v]), B < f + d + (C = re(n)) || _) {
          if (B < C) {
            for (l = se.apply(this, [s, n, B - (f + d), B]), p.push(l.shift()), p = [l.pop()]; l.length; )
              w.push([l.shift()]);
            C = re(n.slice(s.length - (p[0] ? p[0].length : 0)));
          } else
            p = [s];
          w.push(p), f = C + u, d = F;
        } else
          p.push(s), f += d + C, d = F;
      }
      if (u)
        var N = function(j, Z) {
          return (Z ? E : "") + j.join(" ");
        };
      else
        N = function(j) {
          return j.join(" ");
        };
      return w.map(N);
    }, Mt.splitTextToSize = function(a, B, v) {
      var s, n = (v = v || {}).fontSize || this.internal.getFontSize(), i = (function(w) {
        var f = { 0: 1 }, d = {};
        if (w.widths && w.kerning)
          return { widths: w.widths, kerning: w.kerning };
        var C = this.internal.getFont(w.fontName, w.fontStyle), m = "Unicode";
        return C.metadata[m] ? { widths: C.metadata[m].widths || f, kerning: C.metadata[m].kerning || d } : { font: C.metadata, fontSize: this.internal.getFontSize(), charSpace: this.internal.getCharSpace() };
      }).call(this, v);
      s = Array.isArray(a) ? a : a.split(/\r?\n/);
      var c = 1 * this.internal.scaleFactor * B / n;
      i.textIndent = v.textIndent ? 1 * v.textIndent * this.internal.scaleFactor / n : 0, i.lineIndent = v.lineIndent;
      var l, u, p = [];
      for (l = 0, u = s.length; l < u; l++)
        p = p.concat(kt.apply(this, [s[l], c, i]));
      return p;
    }, /** @preserve 
      jsPDF standard_fonts_metrics plugin
      Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
      MIT license.
      */
    ge = at.API, dt = { codePages: ["WinAnsiEncoding"], WinAnsiEncoding: (ct = function(a) {
      for (var B = "klmnopqrstuvwxyz", v = {}, s = 0; s < B.length; s++)
        v[B[s]] = "0123456789abcdef"[s];
      var n, i, c, l, u, p = {}, w = 1, f = p, d = [], C = "", m = "", F = a.length - 1;
      for (s = 1; s != F; )
        u = a[s], s += 1, u == "'" ? i ? (l = i.join(""), i = n) : i = [] : i ? i.push(u) : u == "{" ? (d.push([f, l]), f = {}, l = n) : u == "}" ? ((c = d.pop())[0][c[1]] = f, l = n, f = c[0]) : u == "-" ? w = -1 : l === n ? v.hasOwnProperty(u) ? (C += v[u], l = parseInt(C, 16) * w, w = 1, C = "") : C += u : v.hasOwnProperty(u) ? (m += v[u], f[l] = parseInt(m, 16) * w, w = 1, l = n, m = "") : m += u;
      return p;
    })("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}") }, ir = {
      Unicode: { Courier: dt, "Courier-Bold": dt, "Courier-BoldOblique": dt, "Courier-Oblique": dt, Helvetica: dt, "Helvetica-Bold": dt, "Helvetica-BoldOblique": dt, "Helvetica-Oblique": dt, "Times-Roman": dt, "Times-Bold": dt, "Times-BoldItalic": dt, "Times-Italic": dt }
      /** 
          Resources:
          Font metrics data is reprocessed derivative of contents of
          "Font Metrics for PDF Core 14 Fonts" package, which exhibits the following copyright and license:
          
          Copyright (c) 1989, 1990, 1991, 1992, 1993, 1997 Adobe Systems Incorporated. All Rights Reserved.
          
          This file and the 14 PostScript(R) AFM files it accompanies may be used,
          copied, and distributed for any purpose and without charge, with or without
          modification, provided that all copyright notices are retained; that the AFM
          files are not distributed without this file; that all modifications to this
          file or any of the AFM files are prominently noted in the modified file(s);
          and that this paragraph is not modified. Adobe Systems has no responsibility
          or obligation to support the use of the AFM files.
          
          */
    }, sr = { Unicode: { "Courier-Oblique": ct("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Times-BoldItalic": ct("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"), "Helvetica-Bold": ct("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"), Courier: ct("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Courier-BoldOblique": ct("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Times-Bold": ct("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"), Symbol: ct("{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"), Helvetica: ct("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"), "Helvetica-BoldOblique": ct("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"), ZapfDingbats: ct("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"), "Courier-Bold": ct("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Times-Italic": ct("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"), "Times-Roman": ct("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"), "Helvetica-Oblique": ct("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}") } }, ge.events.push(["addFont", function(a) {
      var B, v, s, n = "Unicode";
      (B = sr[n][a.postScriptName]) && ((v = a.metadata[n] ? a.metadata[n] : a.metadata[n] = {}).widths = B.widths, v.kerning = B.kerning), (s = ir[n][a.postScriptName]) && ((v = a.metadata[n] ? a.metadata[n] : a.metadata[n] = {}).encoding = s).codePages && s.codePages.length && (a.encoding = s.codePages[0]);
    }]), qe = at, typeof self < "u" && self || typeof It < "u" && It || typeof window < "u" && window || Function("return this")(), qe.API.events.push(["addFont", function(a) {
      qe.API.existsFileInVFS(a.postScriptName) ? (a.metadata = qe.API.TTFFont.open(a.postScriptName, a.fontName, qe.API.getFileFromVFS(a.postScriptName), a.encoding), a.metadata.Unicode = a.metadata.Unicode || { encoding: {}, kerning: {}, widths: [] }) : 14 < a.id.slice(1) && console.error("Font does not exist in FileInVFS, import fonts or remove declaration doc.addFont('" + a.postScriptName + "').");
    }]), /** @preserve
      jsPDF SVG plugin
      Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
      */
    (je = at.API).addSvg = function(a, B, v, s, n) {
      if (B === void 0 || v === void 0)
        throw new Error("addSVG needs values for 'x' and 'y'");
      function i(Q) {
        for (var q = parseFloat(Q[1]), K = parseFloat(Q[2]), z = [], $ = 3, uA = Q.length; $ < uA; )
          Q[$] === "c" ? (z.push([parseFloat(Q[$ + 1]), parseFloat(Q[$ + 2]), parseFloat(Q[$ + 3]), parseFloat(Q[$ + 4]), parseFloat(Q[$ + 5]), parseFloat(Q[$ + 6])]), $ += 7) : Q[$] === "l" ? (z.push([parseFloat(Q[$ + 1]), parseFloat(Q[$ + 2])]), $ += 3) : $ += 1;
        return [q, K, z];
      }
      var c, l, u, p, w, f, d, C, m = (p = document, C = p.createElement("iframe"), w = ".jsPDF_sillysvg_iframe {display:none;position:absolute;}", (d = (f = p).createElement("style")).type = "text/css", d.styleSheet ? d.styleSheet.cssText = w : d.appendChild(f.createTextNode(w)), f.getElementsByTagName("head")[0].appendChild(d), C.name = "childframe", C.setAttribute("width", 0), C.setAttribute("height", 0), C.setAttribute("frameborder", "0"), C.setAttribute("scrolling", "no"), C.setAttribute("seamless", "seamless"), C.setAttribute("class", "jsPDF_sillysvg_iframe"), p.body.appendChild(C), C), F = (c = a, (u = ((l = m).contentWindow || l.contentDocument).document).write(c), u.close(), u.getElementsByTagName("svg")[0]), E = [1, 1], H = parseFloat(F.getAttribute("width")), _ = parseFloat(F.getAttribute("height"));
      H && _ && (s && n ? E = [s / H, n / _] : s ? E = [s / H, s / H] : n && (E = [n / _, n / _]));
      var N, j, Z, W, V = F.childNodes;
      for (N = 0, j = V.length; N < j; N++)
        (Z = V[N]).tagName && Z.tagName.toUpperCase() === "PATH" && ((W = i(Z.getAttribute("d").split(" ")))[0] = W[0] * E[0] + B, W[1] = W[1] * E[1] + v, this.lines.call(this, W[2], W[0], W[1], E));
      return this;
    }, je.addSVG = je.addSvg, je.addSvgAsImage = function(a, B, v, s, n, i, c, l) {
      if (isNaN(B) || isNaN(v))
        throw console.error("jsPDF.addSvgAsImage: Invalid coordinates", arguments), new Error("Invalid coordinates passed to jsPDF.addSvgAsImage");
      if (isNaN(s) || isNaN(n))
        throw console.error("jsPDF.addSvgAsImage: Invalid measurements", arguments), new Error("Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage");
      var u = document.createElement("canvas");
      u.width = s, u.height = n;
      var p = u.getContext("2d");
      return p.fillStyle = "#fff", p.fillRect(0, 0, u.width, u.height), canvg(u, a, { ignoreMouse: !0, ignoreAnimation: !0, ignoreDimensions: !0, ignoreClear: !0 }), this.addImage(u.toDataURL("image/jpeg", 1), B, v, s, n, c, l), this;
    }, at.API.putTotalPages = function(a) {
      for (var B = new RegExp(a, "g"), v = 1; v <= this.internal.getNumberOfPages(); v++)
        for (var s = 0; s < this.internal.pages[v].length; s++)
          this.internal.pages[v][s] = this.internal.pages[v][s].replace(B, this.internal.getNumberOfPages());
      return this;
    }, at.API.viewerPreferences = function(a, B) {
      var v;
      a = a || {}, B = B || !1;
      var s, n, i = { HideToolbar: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, HideMenubar: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, HideWindowUI: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, FitWindow: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, CenterWindow: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, DisplayDocTitle: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.4 }, NonFullScreenPageMode: { defaultValue: "UseNone", value: "UseNone", type: "name", explicitSet: !1, valueSet: ["UseNone", "UseOutlines", "UseThumbs", "UseOC"], pdfVersion: 1.3 }, Direction: { defaultValue: "L2R", value: "L2R", type: "name", explicitSet: !1, valueSet: ["L2R", "R2L"], pdfVersion: 1.3 }, ViewArea: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: !1, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, ViewClip: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: !1, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, PrintArea: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: !1, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, PrintClip: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: !1, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, PrintScaling: { defaultValue: "AppDefault", value: "AppDefault", type: "name", explicitSet: !1, valueSet: ["AppDefault", "None"], pdfVersion: 1.6 }, Duplex: { defaultValue: "", value: "none", type: "name", explicitSet: !1, valueSet: ["Simplex", "DuplexFlipShortEdge", "DuplexFlipLongEdge", "none"], pdfVersion: 1.7 }, PickTrayByPDFSize: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.7 }, PrintPageRange: { defaultValue: "", value: "", type: "array", explicitSet: !1, valueSet: null, pdfVersion: 1.7 }, NumCopies: { defaultValue: 1, value: 1, type: "integer", explicitSet: !1, valueSet: null, pdfVersion: 1.7 } }, c = Object.keys(i), l = [], u = 0, p = 0, w = 0, f = !0;
      function d(m, F) {
        var E, H = !1;
        for (E = 0; E < m.length; E += 1)
          m[E] === F && (H = !0);
        return H;
      }
      if (this.internal.viewerpreferences === void 0 && (this.internal.viewerpreferences = {}, this.internal.viewerpreferences.configuration = JSON.parse(JSON.stringify(i)), this.internal.viewerpreferences.isSubscribed = !1), v = this.internal.viewerpreferences.configuration, a === "reset" || B === !0) {
        var C = c.length;
        for (w = 0; w < C; w += 1)
          v[c[w]].value = v[c[w]].defaultValue, v[c[w]].explicitSet = !1;
      }
      if ((a === void 0 ? "undefined" : Dt(a)) === "object") {
        for (s in a)
          if (n = a[s], d(c, s) && n !== void 0) {
            if (v[s].type === "boolean" && typeof n == "boolean")
              v[s].value = n;
            else if (v[s].type === "name" && d(v[s].valueSet, n))
              v[s].value = n;
            else if (v[s].type === "integer" && Number.isInteger(n))
              v[s].value = n;
            else if (v[s].type === "array") {
              for (u = 0; u < n.length; u += 1)
                if (f = !0, n[u].length === 1 && typeof n[u][0] == "number")
                  l.push(String(n[u]));
                else if (1 < n[u].length) {
                  for (p = 0; p < n[u].length; p += 1)
                    typeof n[u][p] != "number" && (f = !1);
                  f === !0 && l.push(String(n[u].join("-")));
                }
              v[s].value = String(l);
            } else
              v[s].value = v[s].defaultValue;
            v[s].explicitSet = !0;
          }
      }
      return this.internal.viewerpreferences.isSubscribed === !1 && (this.internal.events.subscribe("putCatalog", function() {
        var m, F = [];
        for (m in v)
          v[m].explicitSet === !0 && (v[m].type === "name" ? F.push("/" + m + " /" + v[m].value) : F.push("/" + m + " " + v[m].value));
        F.length !== 0 && this.internal.write(`/ViewerPreferences
<<
` + F.join(`
`) + `
>>`);
      }), this.internal.viewerpreferences.isSubscribed = !0), this.internal.viewerpreferences.configuration = v, this;
    }, /** ==================================================================== 
       * jsPDF XMP metadata plugin
       * Copyright (c) 2016 Jussi Utunen, u-jussi@suomi24.fi
       * 
       * 
       * ====================================================================
       */
    Zr = at.API, De = yr = We = "", Zr.addMetadata = function(a, B) {
      return yr = B || "http://jspdf.default.namespaceuri/", We = a, this.internal.events.subscribe("postPutResources", function() {
        if (We) {
          var v = '<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="' + yr + '"><jspdf:metadata>', s = unescape(encodeURIComponent('<x:xmpmeta xmlns:x="adobe:ns:meta/">')), n = unescape(encodeURIComponent(v)), i = unescape(encodeURIComponent(We)), c = unescape(encodeURIComponent("</jspdf:metadata></rdf:Description></rdf:RDF>")), l = unescape(encodeURIComponent("</x:xmpmeta>")), u = n.length + i.length + c.length + s.length + l.length;
          De = this.internal.newObject(), this.internal.write("<< /Type /Metadata /Subtype /XML /Length " + u + " >>"), this.internal.write("stream"), this.internal.write(s + n + i + c + l), this.internal.write("endstream"), this.internal.write("endobj");
        } else
          De = "";
      }), this.internal.events.subscribe("putCatalog", function() {
        De && this.internal.write("/Metadata " + De + " 0 R");
      }), this;
    }, function(a, B) {
      var v = a.API, s = [0];
      v.events.push(["putFont", function(i) {
        (function(c, l, u) {
          if (c.metadata instanceof a.API.TTFFont && c.encoding === "Identity-H") {
            for (var p = c.metadata.Unicode.widths, w = c.metadata.subset.encode(s), f = "", d = 0; d < w.length; d++)
              f += String.fromCharCode(w[d]);
            var C = u();
            l("<<"), l("/Length " + f.length), l("/Length1 " + f.length), l(">>"), l("stream"), l(f), l("endstream"), l("endobj");
            var m = u();
            l("<<"), l("/Type /FontDescriptor"), l("/FontName /" + c.fontName), l("/FontFile2 " + C + " 0 R"), l("/FontBBox " + a.API.PDFObject.convert(c.metadata.bbox)), l("/Flags " + c.metadata.flags), l("/StemV " + c.metadata.stemV), l("/ItalicAngle " + c.metadata.italicAngle), l("/Ascent " + c.metadata.ascender), l("/Descent " + c.metadata.decender), l("/CapHeight " + c.metadata.capHeight), l(">>"), l("endobj");
            var F = u();
            l("<<"), l("/Type /Font"), l("/BaseFont /" + c.fontName), l("/FontDescriptor " + m + " 0 R"), l("/W " + a.API.PDFObject.convert(p)), l("/CIDToGIDMap /Identity"), l("/DW 1000"), l("/Subtype /CIDFontType2"), l("/CIDSystemInfo"), l("<<"), l("/Supplement 0"), l("/Registry (Adobe)"), l("/Ordering (" + c.encoding + ")"), l(">>"), l(">>"), l("endobj"), c.objectNumber = u(), l("<<"), l("/Type /Font"), l("/Subtype /Type0"), l("/BaseFont /" + c.fontName), l("/Encoding /" + c.encoding), l("/DescendantFonts [" + F + " 0 R]"), l(">>"), l("endobj"), c.isAlreadyPutted = !0;
          }
        })(i.font, i.out, i.newObject);
      }]), v.events.push(["putFont", function(i) {
        (function(c, l, u) {
          if (c.metadata instanceof a.API.TTFFont && c.encoding === "WinAnsiEncoding") {
            c.metadata.Unicode.widths;
            for (var p = c.metadata.rawData, w = "", f = 0; f < p.length; f++)
              w += String.fromCharCode(p[f]);
            var d = u();
            l("<<"), l("/Length " + w.length), l("/Length1 " + w.length), l(">>"), l("stream"), l(w), l("endstream"), l("endobj");
            var C = u();
            for (l("<<"), l("/Descent " + c.metadata.decender), l("/CapHeight " + c.metadata.capHeight), l("/StemV " + c.metadata.stemV), l("/Type /FontDescriptor"), l("/FontFile2 " + d + " 0 R"), l("/Flags 96"), l("/FontBBox " + a.API.PDFObject.convert(c.metadata.bbox)), l("/FontName /" + c.fontName), l("/ItalicAngle " + c.metadata.italicAngle), l("/Ascent " + c.metadata.ascender), l(">>"), l("endobj"), c.objectNumber = u(), f = 0; f < c.metadata.hmtx.widths.length; f++)
              c.metadata.hmtx.widths[f] = parseInt(c.metadata.hmtx.widths[f] * (1e3 / c.metadata.head.unitsPerEm));
            l("<</Subtype/TrueType/Type/Font/BaseFont/" + c.fontName + "/FontDescriptor " + C + " 0 R/Encoding/" + c.encoding + " /FirstChar 29 /LastChar 255 /Widths " + a.API.PDFObject.convert(c.metadata.hmtx.widths) + ">>"), l("endobj"), c.isAlreadyPutted = !0;
          }
        })(i.font, i.out, i.newObject);
      }]);
      var n = function(i) {
        var c, l, u = i.text || "", p = i.x, w = i.y, f = i.options || {}, d = i.mutex || {}, C = d.pdfEscape, m = d.activeFontKey, F = d.fonts, E = (d.activeFontSize, ""), H = 0, _ = "", N = F[l = m].encoding;
        if (F[l].encoding !== "Identity-H")
          return { text: u, x: p, y: w, options: f, mutex: d };
        for (_ = u, l = m, Object.prototype.toString.call(u) === "[object Array]" && (_ = u[0]), H = 0; H < _.length; H += 1)
          F[l].metadata.hasOwnProperty("cmap") && (c = F[l].metadata.cmap.unicode.codeMap[_[H].charCodeAt(0)]), c || _[H].charCodeAt(0) < 256 && F[l].metadata.hasOwnProperty("Unicode") ? E += _[H] : E += "";
        var j = "";
        return parseInt(l.slice(1)) < 14 || N === "WinAnsiEncoding" ? j = function(Z) {
          for (var W = "", V = 0; V < Z.length; V++)
            W += "" + Z.charCodeAt(V).toString(16);
          return W;
        }(C(E, l)) : N === "Identity-H" && (j = function(Z, W) {
          for (var V, Q = W.metadata.Unicode.widths, q = ["", "0", "00", "000", "0000"], K = [""], z = 0, $ = Z.length; z < $; ++z) {
            if (V = W.metadata.characterToGlyph(Z.charCodeAt(z)), s.push(V), Q.indexOf(V) == -1 && (Q.push(V), Q.push([parseInt(W.metadata.widthOfGlyph(V), 10)])), V == "0")
              return K.join("");
            V = V.toString(16), K.push(q[4 - V.length], V);
          }
          return K.join("");
        }(E, F[l])), d.isHex = !0, { text: j, x: p, y: w, options: f, mutex: d };
      };
      v.events.push(["postProcessText", function(i) {
        var c = i.text || "", l = i.x, u = i.y, p = i.options, w = i.mutex, f = (p.lang, []), d = { text: c, x: l, y: u, options: p, mutex: w };
        if (Object.prototype.toString.call(c) === "[object Array]") {
          var C = 0;
          for (C = 0; C < c.length; C += 1)
            Object.prototype.toString.call(c[C]) === "[object Array]" && c[C].length === 3 ? f.push([n(Object.assign({}, d, { text: c[C][0] })).text, c[C][1], c[C][2]]) : f.push(n(Object.assign({}, d, { text: c[C] })).text);
          i.text = f;
        } else
          i.text = n(Object.assign({}, d, { text: c })).text;
      }]);
    }(at, typeof self < "u" && self || typeof It < "u" && It || typeof window < "u" && window || Function("return this")()), or = at.API, Xe = {}, or.existsFileInVFS = function(a) {
      return Xe.hasOwnProperty(a);
    }, or.addFileToVFS = function(a, B) {
      return Xe[a] = B, this;
    }, or.getFileFromVFS = function(a) {
      return Xe.hasOwnProperty(a) ? Xe[a] : null;
    }, function(a) {
      if (a.URL = a.URL || a.webkitURL, a.Blob && a.URL)
        try {
          return new Blob();
        } catch {
        }
      var B = a.BlobBuilder || a.WebKitBlobBuilder || a.MozBlobBuilder || function(s) {
        var n = function(W) {
          return Object.prototype.toString.call(W).match(/^\[object\s(.*)\]$/)[1];
        }, i = function() {
          this.data = [];
        }, c = function(W, V, Q) {
          this.data = W, this.size = W.length, this.type = V, this.encoding = Q;
        }, l = i.prototype, u = c.prototype, p = s.FileReaderSync, w = function(W) {
          this.code = this[this.name = W];
        }, f = "NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR".split(" "), d = f.length, C = s.URL || s.webkitURL || s, m = C.createObjectURL, F = C.revokeObjectURL, E = C, H = s.btoa, _ = s.atob, N = s.ArrayBuffer, j = s.Uint8Array, Z = /^[\w-]+:\/*\[?[\w\.:-]+\]?(?::[0-9]+)?/;
        for (c.fake = u.fake = !0; d--; )
          w.prototype[f[d]] = d + 1;
        return C.createObjectURL || (E = s.URL = function(W) {
          var V, Q = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
          return Q.href = W, "origin" in Q || (Q.protocol.toLowerCase() === "data:" ? Q.origin = null : (V = W.match(Z), Q.origin = V && V[1])), Q;
        }), E.createObjectURL = function(W) {
          var V, Q = W.type;
          return Q === null && (Q = "application/octet-stream"), W instanceof c ? (V = "data:" + Q, W.encoding === "base64" ? V + ";base64," + W.data : W.encoding === "URI" ? V + "," + decodeURIComponent(W.data) : H ? V + ";base64," + H(W.data) : V + "," + encodeURIComponent(W.data)) : m ? m.call(C, W) : void 0;
        }, E.revokeObjectURL = function(W) {
          W.substring(0, 5) !== "data:" && F && F.call(C, W);
        }, l.append = function(W) {
          var V = this.data;
          if (j && (W instanceof N || W instanceof j)) {
            for (var Q = "", q = new j(W), K = 0, z = q.length; K < z; K++)
              Q += String.fromCharCode(q[K]);
            V.push(Q);
          } else if (n(W) === "Blob" || n(W) === "File") {
            if (!p)
              throw new w("NOT_READABLE_ERR");
            var $ = new p();
            V.push($.readAsBinaryString(W));
          } else
            W instanceof c ? W.encoding === "base64" && _ ? V.push(_(W.data)) : W.encoding === "URI" ? V.push(decodeURIComponent(W.data)) : W.encoding === "raw" && V.push(W.data) : (typeof W != "string" && (W += ""), V.push(unescape(encodeURIComponent(W))));
        }, l.getBlob = function(W) {
          return arguments.length || (W = null), new c(this.data.join(""), W, "raw");
        }, l.toString = function() {
          return "[object BlobBuilder]";
        }, u.slice = function(W, V, Q) {
          var q = arguments.length;
          return q < 3 && (Q = null), new c(this.data.slice(W, 1 < q ? V : this.data.length), Q, this.encoding);
        }, u.toString = function() {
          return "[object Blob]";
        }, u.close = function() {
          this.size = 0, delete this.data;
        }, i;
      }(a);
      a.Blob = function(s, n) {
        var i = n && n.type || "", c = new B();
        if (s)
          for (var l = 0, u = s.length; l < u; l++)
            Uint8Array && s[l] instanceof Uint8Array ? c.append(s[l].buffer) : c.append(s[l]);
        var p = c.getBlob(i);
        return !p.slice && p.webkitSlice && (p.slice = p.webkitSlice), p;
      };
      var v = Object.getPrototypeOf || function(s) {
        return s.__proto__;
      };
      a.Blob.prototype = v(new a.Blob());
    }(typeof self < "u" && self || typeof window < "u" && window || window.content || window);
    var $r, An, tn, vt, ve, mA, FA, EA, KA, XA, qA, Ut, ce, Je, ii, fs, Fr = Fr || function(a) {
      if (!(a === void 0 || typeof navigator < "u" && /MSIE [1-9]\./.test(navigator.userAgent))) {
        var B = a.document, v = function() {
          return a.URL || a.webkitURL || a;
        }, s = B.createElementNS("http://www.w3.org/1999/xhtml", "a"), n = "download" in s, i = /constructor/i.test(a.HTMLElement) || a.safari, c = /CriOS\/[\d]+/.test(navigator.userAgent), l = function(d) {
          (a.setImmediate || a.setTimeout)(function() {
            throw d;
          }, 0);
        }, u = function(d) {
          setTimeout(function() {
            typeof d == "string" ? v().revokeObjectURL(d) : d.remove();
          }, 4e4);
        }, p = function(d) {
          return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(d.type) ? new Blob([String.fromCharCode(65279), d], { type: d.type }) : d;
        }, w = function(d, C, m) {
          m || (d = p(d));
          var F, E = this, H = d.type === "application/octet-stream", _ = function() {
            (function(N, j, Z) {
              for (var W = (j = [].concat(j)).length; W--; ) {
                var V = N["on" + j[W]];
                if (typeof V == "function")
                  try {
                    V.call(N, Z || N);
                  } catch (Q) {
                    l(Q);
                  }
              }
            })(E, "writestart progress write writeend".split(" "));
          };
          if (E.readyState = E.INIT, n)
            return F = v().createObjectURL(d), void setTimeout(function() {
              var N, j;
              s.href = F, s.download = C, N = s, j = new MouseEvent("click"), N.dispatchEvent(j), _(), u(F), E.readyState = E.DONE;
            });
          (function() {
            if ((c || H && i) && a.FileReader) {
              var N = new FileReader();
              return N.onloadend = function() {
                var j = c ? N.result : N.result.replace(/^data:[^;]*;/, "data:attachment/file;");
                a.open(j, "_blank") || (a.location.href = j), j = void 0, E.readyState = E.DONE, _();
              }, N.readAsDataURL(d), E.readyState = E.INIT;
            }
            F || (F = v().createObjectURL(d)), H ? a.location.href = F : a.open(F, "_blank") || (a.location.href = F), E.readyState = E.DONE, _(), u(F);
          })();
        }, f = w.prototype;
        return typeof navigator < "u" && navigator.msSaveOrOpenBlob ? function(d, C, m) {
          return C = C || d.name || "download", m || (d = p(d)), navigator.msSaveOrOpenBlob(d, C);
        } : (f.abort = function() {
        }, f.readyState = f.INIT = 0, f.WRITING = 1, f.DONE = 2, f.error = f.onwritestart = f.onprogress = f.onwrite = f.onabort = f.onerror = f.onwriteend = null, function(d, C, m) {
          return new w(d, C || d.name || "download", m);
        });
      }
    }(typeof self < "u" && self || typeof window < "u" && window || window.content);
    function ds(a) {
      var B = 0;
      if (a[B++] !== 71 || a[B++] !== 73 || a[B++] !== 70 || a[B++] !== 56 || (a[B++] + 1 & 253) != 56 || a[B++] !== 97)
        throw "Invalid GIF 87a/89a header.";
      var v = a[B++] | a[B++] << 8, s = a[B++] | a[B++] << 8, n = a[B++], i = n >> 7, c = 1 << (7 & n) + 1;
      a[B++], a[B++];
      var l = null;
      i && (l = B, B += 3 * c);
      var u = !0, p = [], w = 0, f = null, d = 0, C = null;
      for (this.width = v, this.height = s; u && B < a.length; )
        switch (a[B++]) {
          case 33:
            switch (a[B++]) {
              case 255:
                if (a[B] !== 11 || a[B + 1] == 78 && a[B + 2] == 69 && a[B + 3] == 84 && a[B + 4] == 83 && a[B + 5] == 67 && a[B + 6] == 65 && a[B + 7] == 80 && a[B + 8] == 69 && a[B + 9] == 50 && a[B + 10] == 46 && a[B + 11] == 48 && a[B + 12] == 3 && a[B + 13] == 1 && a[B + 16] == 0)
                  B += 14, C = a[B++] | a[B++] << 8, B++;
                else
                  for (B += 12; (Q = a[B++]) !== 0; )
                    B += Q;
                break;
              case 249:
                if (a[B++] !== 4 || a[B + 4] !== 0)
                  throw "Invalid graphics extension block.";
                var m = a[B++];
                w = a[B++] | a[B++] << 8, f = a[B++], !(1 & m) && (f = null), d = m >> 2 & 7, B++;
                break;
              case 254:
                for (; (Q = a[B++]) !== 0; )
                  B += Q;
                break;
              default:
                throw "Unknown graphic control label: 0x" + a[B - 1].toString(16);
            }
            break;
          case 44:
            var F = a[B++] | a[B++] << 8, E = a[B++] | a[B++] << 8, H = a[B++] | a[B++] << 8, _ = a[B++] | a[B++] << 8, N = a[B++], j = N >> 6 & 1, Z = l, W = !1;
            N >> 7 && (W = !0, Z = B, B += 3 * (1 << (7 & N) + 1));
            var V = B;
            for (B++; ; ) {
              var Q;
              if ((Q = a[B++]) === 0)
                break;
              B += Q;
            }
            p.push({ x: F, y: E, width: H, height: _, has_local_palette: W, palette_offset: Z, data_offset: V, data_length: B - V, transparent_index: f, interlaced: !!j, delay: w, disposal: d });
            break;
          case 59:
            u = !1;
            break;
          default:
            throw "Unknown gif block: 0x" + a[B - 1].toString(16);
        }
      this.numFrames = function() {
        return p.length;
      }, this.loopCount = function() {
        return C;
      }, this.frameInfo = function(q) {
        if (q < 0 || q >= p.length)
          throw "Frame index out of range.";
        return p[q];
      }, this.decodeAndBlitFrameBGRA = function(q, K) {
        var z = this.frameInfo(q), $ = z.width * z.height, uA = new Uint8Array($);
        gs(a, z.data_offset, uA, $);
        var AA = z.palette_offset, L = z.transparent_index;
        L === null && (L = 256);
        var U = z.width, P = v - U, I = U, G = 4 * (z.y * v + z.x), M = 4 * ((z.y + z.height) * v + z.x), sA = G, X = 4 * P;
        z.interlaced === !0 && (X += 4 * (U + P) * 7);
        for (var lA = 8, rA = 0, x = uA.length; rA < x; ++rA) {
          var O = uA[rA];
          if (I === 0 && (I = U, M <= (sA += X) && (X = P + 4 * (U + P) * (lA - 1), sA = G + (U + P) * (lA << 1), lA >>= 1)), O === L)
            sA += 4;
          else {
            var h = a[AA + 3 * O], b = a[AA + 3 * O + 1], S = a[AA + 3 * O + 2];
            K[sA++] = S, K[sA++] = b, K[sA++] = h, K[sA++] = 255;
          }
          --I;
        }
      }, this.decodeAndBlitFrameRGBA = function(q, K) {
        var z = this.frameInfo(q), $ = z.width * z.height, uA = new Uint8Array($);
        gs(a, z.data_offset, uA, $);
        var AA = z.palette_offset, L = z.transparent_index;
        L === null && (L = 256);
        var U = z.width, P = v - U, I = U, G = 4 * (z.y * v + z.x), M = 4 * ((z.y + z.height) * v + z.x), sA = G, X = 4 * P;
        z.interlaced === !0 && (X += 4 * (U + P) * 7);
        for (var lA = 8, rA = 0, x = uA.length; rA < x; ++rA) {
          var O = uA[rA];
          if (I === 0 && (I = U, M <= (sA += X) && (X = P + 4 * (U + P) * (lA - 1), sA = G + (U + P) * (lA << 1), lA >>= 1)), O === L)
            sA += 4;
          else {
            var h = a[AA + 3 * O], b = a[AA + 3 * O + 1], S = a[AA + 3 * O + 2];
            K[sA++] = h, K[sA++] = b, K[sA++] = S, K[sA++] = 255;
          }
          --I;
        }
      };
    }
    function gs(a, B, v, s) {
      for (var n = a[B++], i = 1 << n, c = i + 1, l = c + 1, u = n + 1, p = (1 << u) - 1, w = 0, f = 0, d = 0, C = a[B++], m = new Int32Array(4096), F = null; ; ) {
        for (; w < 16 && C !== 0; )
          f |= a[B++] << w, w += 8, C === 1 ? C = a[B++] : --C;
        if (w < u)
          break;
        var E = f & p;
        if (f >>= u, w -= u, E !== i) {
          if (E === c)
            break;
          for (var H = E < l ? E : F, _ = 0, N = H; i < N; )
            N = m[N] >> 8, ++_;
          var j = N;
          if (s < d + _ + (H !== E ? 1 : 0))
            return void console.log("Warning, gif stream longer than expected.");
          v[d++] = j;
          var Z = d += _;
          for (H !== E && (v[d++] = j), N = H; _--; )
            N = m[N], v[--Z] = 255 & N, N >>= 8;
          F !== null && l < 4096 && (m[l++] = F << 8 | j, p + 1 <= l && u < 12 && (++u, p = p << 1 | 1)), F = E;
        } else
          l = c + 1, p = (1 << (u = n + 1)) - 1, F = null;
      }
      return d !== s && console.log("Warning, gif stream shorter than expected."), v;
    }
    t.exports && (t.exports.saveAs = Fr), at.API.adler32cs = (mA = typeof ArrayBuffer == "function" && typeof Uint8Array == "function", FA = null, EA = function() {
      if (!mA)
        return function() {
          return !1;
        };
      try {
        var a = {};
        typeof a.Buffer == "function" && (FA = a.Buffer);
      } catch {
      }
      return function(B) {
        return B instanceof ArrayBuffer || FA !== null && B instanceof FA;
      };
    }(), KA = FA !== null ? function(a) {
      return new FA(a, "utf8").toString("binary");
    } : function(a) {
      return unescape(encodeURIComponent(a));
    }, XA = 65521, qA = function(a, B) {
      for (var v = 65535 & a, s = a >>> 16, n = 0, i = B.length; n < i; n++)
        v = (v + (255 & B.charCodeAt(n))) % XA, s = (s + v) % XA;
      return (s << 16 | v) >>> 0;
    }, Ut = function(a, B) {
      for (var v = 65535 & a, s = a >>> 16, n = 0, i = B.length; n < i; n++)
        v = (v + B[n]) % XA, s = (s + v) % XA;
      return (s << 16 | v) >>> 0;
    }, Je = (ce = {}).Adler32 = (((ve = (vt = function(a) {
      if (!(this instanceof vt))
        throw new TypeError("Constructor cannot called be as a function.");
      if (!isFinite(a = a == null ? 1 : +a))
        throw new Error("First arguments needs to be a finite number.");
      this.checksum = a >>> 0;
    }).prototype = {}).constructor = vt).from = (($r = function(a) {
      if (!(this instanceof vt))
        throw new TypeError("Constructor cannot called be as a function.");
      if (a == null)
        throw new Error("First argument needs to be a string.");
      this.checksum = qA(1, a.toString());
    }).prototype = ve, $r), vt.fromUtf8 = ((An = function(a) {
      if (!(this instanceof vt))
        throw new TypeError("Constructor cannot called be as a function.");
      if (a == null)
        throw new Error("First argument needs to be a string.");
      var B = KA(a.toString());
      this.checksum = qA(1, B);
    }).prototype = ve, An), mA && (vt.fromBuffer = ((tn = function(a) {
      if (!(this instanceof vt))
        throw new TypeError("Constructor cannot called be as a function.");
      if (!EA(a))
        throw new Error("First argument needs to be ArrayBuffer.");
      var B = new Uint8Array(a);
      return this.checksum = Ut(1, B);
    }).prototype = ve, tn)), ve.update = function(a) {
      if (a == null)
        throw new Error("First argument needs to be a string.");
      return a = a.toString(), this.checksum = qA(this.checksum, a);
    }, ve.updateUtf8 = function(a) {
      if (a == null)
        throw new Error("First argument needs to be a string.");
      var B = KA(a.toString());
      return this.checksum = qA(this.checksum, B);
    }, mA && (ve.updateBuffer = function(a) {
      if (!EA(a))
        throw new Error("First argument needs to be ArrayBuffer.");
      var B = new Uint8Array(a);
      return this.checksum = Ut(this.checksum, B);
    }), ve.clone = function() {
      return new Je(this.checksum);
    }, vt), ce.from = function(a) {
      if (a == null)
        throw new Error("First argument needs to be a string.");
      return qA(1, a.toString());
    }, ce.fromUtf8 = function(a) {
      if (a == null)
        throw new Error("First argument needs to be a string.");
      var B = KA(a.toString());
      return qA(1, B);
    }, mA && (ce.fromBuffer = function(a) {
      if (!EA(a))
        throw new Error("First argument need to be ArrayBuffer.");
      var B = new Uint8Array(a);
      return Ut(1, B);
    }), ce);
    try {
      A.GifWriter = function(a, B, v, s) {
        var n = 0, i = (s = s === void 0 ? {} : s).loop === void 0 ? null : s.loop, c = s.palette === void 0 ? null : s.palette;
        if (B <= 0 || v <= 0 || 65535 < B || 65535 < v)
          throw "Width/Height invalid.";
        function l(F) {
          var E = F.length;
          if (E < 2 || 256 < E || E & E - 1)
            throw "Invalid code/color length, must be power of 2 and 2 .. 256.";
          return E;
        }
        a[n++] = 71, a[n++] = 73, a[n++] = 70, a[n++] = 56, a[n++] = 57, a[n++] = 97;
        var u = 0, p = 0;
        if (c !== null) {
          for (var w = l(c); w >>= 1; )
            ++u;
          if (w = 1 << u, --u, s.background !== void 0) {
            if (w <= (p = s.background))
              throw "Background index out of range.";
            if (p === 0)
              throw "Background index explicitly passed as 0.";
          }
        }
        if (a[n++] = 255 & B, a[n++] = B >> 8 & 255, a[n++] = 255 & v, a[n++] = v >> 8 & 255, a[n++] = (c !== null ? 128 : 0) | u, a[n++] = p, a[n++] = 0, c !== null)
          for (var f = 0, d = c.length; f < d; ++f) {
            var C = c[f];
            a[n++] = C >> 16 & 255, a[n++] = C >> 8 & 255, a[n++] = 255 & C;
          }
        if (i !== null) {
          if (i < 0 || 65535 < i)
            throw "Loop count invalid.";
          a[n++] = 33, a[n++] = 255, a[n++] = 11, a[n++] = 78, a[n++] = 69, a[n++] = 84, a[n++] = 83, a[n++] = 67, a[n++] = 65, a[n++] = 80, a[n++] = 69, a[n++] = 50, a[n++] = 46, a[n++] = 48, a[n++] = 3, a[n++] = 1, a[n++] = 255 & i, a[n++] = i >> 8 & 255, a[n++] = 0;
        }
        var m = !1;
        this.addFrame = function(F, E, H, _, N, j) {
          if (m === !0 && (--n, m = !1), j = j === void 0 ? {} : j, F < 0 || E < 0 || 65535 < F || 65535 < E)
            throw "x/y invalid.";
          if (H <= 0 || _ <= 0 || 65535 < H || 65535 < _)
            throw "Width/Height invalid.";
          if (N.length < H * _)
            throw "Not enough pixels for the frame size.";
          var Z = !0, W = j.palette;
          if (W == null && (Z = !1, W = c), W == null)
            throw "Must supply either a local or global palette.";
          for (var V = l(W), Q = 0; V >>= 1; )
            ++Q;
          V = 1 << Q;
          var q = j.delay === void 0 ? 0 : j.delay, K = j.disposal === void 0 ? 0 : j.disposal;
          if (K < 0 || 3 < K)
            throw "Disposal out of range.";
          var z = !1, $ = 0;
          if (j.transparent !== void 0 && j.transparent !== null && (z = !0, ($ = j.transparent) < 0 || V <= $))
            throw "Transparent color index.";
          if ((K !== 0 || z || q !== 0) && (a[n++] = 33, a[n++] = 249, a[n++] = 4, a[n++] = K << 2 | (z === !0 ? 1 : 0), a[n++] = 255 & q, a[n++] = q >> 8 & 255, a[n++] = $, a[n++] = 0), a[n++] = 44, a[n++] = 255 & F, a[n++] = F >> 8 & 255, a[n++] = 255 & E, a[n++] = E >> 8 & 255, a[n++] = 255 & H, a[n++] = H >> 8 & 255, a[n++] = 255 & _, a[n++] = _ >> 8 & 255, a[n++] = Z === !0 ? 128 | Q - 1 : 0, Z === !0)
            for (var uA = 0, AA = W.length; uA < AA; ++uA) {
              var L = W[uA];
              a[n++] = L >> 16 & 255, a[n++] = L >> 8 & 255, a[n++] = 255 & L;
            }
          n = function(U, P, I, G) {
            U[P++] = I;
            var M = P++, sA = 1 << I, X = sA - 1, lA = sA + 1, rA = lA + 1, x = I + 1, O = 0, h = 0;
            function b(vA) {
              for (; vA <= O; )
                U[P++] = 255 & h, h >>= 8, O -= 8, P === M + 256 && (U[M] = 255, M = P++);
            }
            function S(vA) {
              h |= vA << O, O += x, b(8);
            }
            var R = G[0] & X, iA = {};
            S(sA);
            for (var cA = 1, gA = G.length; cA < gA; ++cA) {
              var wA = G[cA] & X, pA = R << 8 | wA, UA = iA[pA];
              if (UA === void 0) {
                for (h |= R << O, O += x; 8 <= O; )
                  U[P++] = 255 & h, h >>= 8, O -= 8, P === M + 256 && (U[M] = 255, M = P++);
                rA === 4096 ? (S(sA), rA = lA + 1, x = I + 1, iA = {}) : (1 << x <= rA && ++x, iA[pA] = rA++), R = wA;
              } else
                R = UA;
            }
            return S(R), S(lA), b(1), M + 1 === P ? U[M] = 0 : (U[M] = P - M - 1, U[P++] = 0), P;
          }(a, n, Q < 2 ? 2 : Q, N);
        }, this.end = function() {
          return m === !1 && (a[n++] = 59, m = !0), n;
        };
      }, A.GifReader = ds;
    } catch {
    }
    function si(a) {
      var B, v, s, n, i, c = Math.floor, l = new Array(64), u = new Array(64), p = new Array(64), w = new Array(64), f = new Array(65535), d = new Array(65535), C = new Array(64), m = new Array(64), F = [], E = 0, H = 7, _ = new Array(64), N = new Array(64), j = new Array(64), Z = new Array(256), W = new Array(2048), V = [0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63], Q = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], q = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], K = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125], z = [1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250], $ = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], uA = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], AA = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119], L = [0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250];
      function U(X, lA) {
        for (var rA = 0, x = 0, O = new Array(), h = 1; h <= 16; h++) {
          for (var b = 1; b <= X[h]; b++)
            O[lA[x]] = [], O[lA[x]][0] = rA, O[lA[x]][1] = h, x++, rA++;
          rA *= 2;
        }
        return O;
      }
      function P(X) {
        for (var lA = X[0], rA = X[1] - 1; 0 <= rA; )
          lA & 1 << rA && (E |= 1 << H), rA--, --H < 0 && (E == 255 ? (I(255), I(0)) : I(E), H = 7, E = 0);
      }
      function I(X) {
        F.push(X);
      }
      function G(X) {
        I(X >> 8 & 255), I(255 & X);
      }
      function M(X, lA, rA, x, O) {
        for (var h, b = O[0], S = O[240], R = function(nA, ot) {
          var ZA, $A, mt, PA, nt, lt, rt, et, ut, xt, MA = 0;
          for (ut = 0; ut < 8; ++ut) {
            ZA = nA[MA], $A = nA[MA + 1], mt = nA[MA + 2], PA = nA[MA + 3], nt = nA[MA + 4], lt = nA[MA + 5], rt = nA[MA + 6];
            var oe = ZA + (et = nA[MA + 7]), Jt = ZA - et, pe = $A + rt, Qe = $A - rt, _t = mt + lt, k = mt - lt, oA = PA + nt, fA = PA - nt, tA = oe + oA, eA = oe - oA, hA = pe + _t, BA = pe - _t;
            nA[MA] = tA + hA, nA[MA + 4] = tA - hA;
            var CA = 0.707106781 * (BA + eA);
            nA[MA + 2] = eA + CA, nA[MA + 6] = eA - CA;
            var yA = 0.382683433 * ((tA = fA + k) - (BA = Qe + Jt)), LA = 0.5411961 * tA + yA, jA = 1.306562965 * BA + yA, OA = 0.707106781 * (hA = k + Qe), JA = Jt + OA, st = Jt - OA;
            nA[MA + 5] = st + LA, nA[MA + 3] = st - LA, nA[MA + 1] = JA + jA, nA[MA + 7] = JA - jA, MA += 8;
          }
          for (ut = MA = 0; ut < 8; ++ut) {
            ZA = nA[MA], $A = nA[MA + 8], mt = nA[MA + 16], PA = nA[MA + 24], nt = nA[MA + 32], lt = nA[MA + 40], rt = nA[MA + 48];
            var Et = ZA + (et = nA[MA + 56]), Vt = ZA - et, qt = $A + rt, Ur = $A - rt, bt = mt + lt, zt = mt - lt, br = PA + nt, xe = PA - nt, Tt = Et + br, ze = Et - br, ar = qt + bt, cr = qt - bt;
            nA[MA] = Tt + ar, nA[MA + 32] = Tt - ar;
            var Ye = 0.707106781 * (cr + ze);
            nA[MA + 16] = ze + Ye, nA[MA + 48] = ze - Ye;
            var Yt = 0.382683433 * ((Tt = xe + zt) - (cr = Ur + Vt)), en = 0.5411961 * Tt + Yt, xr = 1.306562965 * cr + Yt, rn = 0.707106781 * (ar = zt + Ur), Ze = Vt + rn, _e = Vt - rn;
            nA[MA + 40] = _e + en, nA[MA + 24] = _e - en, nA[MA + 8] = Ze + xr, nA[MA + 56] = Ze - xr, MA++;
          }
          for (ut = 0; ut < 64; ++ut)
            xt = nA[ut] * ot[ut], C[ut] = 0 < xt ? xt + 0.5 | 0 : xt - 0.5 | 0;
          return C;
        }(X, lA), iA = 0; iA < 64; ++iA)
          m[V[iA]] = R[iA];
        var cA = m[0] - rA;
        rA = m[0], cA == 0 ? P(x[0]) : (P(x[d[h = 32767 + cA]]), P(f[h]));
        for (var gA = 63; 0 < gA && m[gA] == 0; gA--)
          ;
        if (gA == 0)
          return P(b), rA;
        for (var wA, pA = 1; pA <= gA; ) {
          for (var UA = pA; m[pA] == 0 && pA <= gA; ++pA)
            ;
          var vA = pA - UA;
          if (16 <= vA) {
            wA = vA >> 4;
            for (var TA = 1; TA <= wA; ++TA)
              P(S);
            vA &= 15;
          }
          h = 32767 + m[pA], P(O[(vA << 4) + d[h]]), P(f[h]), pA++;
        }
        return gA != 63 && P(b), rA;
      }
      function sA(X) {
        X <= 0 && (X = 1), 100 < X && (X = 100), i != X && (function(lA) {
          for (var rA = [16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98, 112, 100, 103, 99], x = 0; x < 64; x++) {
            var O = c((rA[x] * lA + 50) / 100);
            O < 1 ? O = 1 : 255 < O && (O = 255), l[V[x]] = O;
          }
          for (var h = [17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99], b = 0; b < 64; b++) {
            var S = c((h[b] * lA + 50) / 100);
            S < 1 ? S = 1 : 255 < S && (S = 255), u[V[b]] = S;
          }
          for (var R = [1, 1.387039845, 1.306562965, 1.175875602, 1, 0.785694958, 0.5411961, 0.275899379], iA = 0, cA = 0; cA < 8; cA++)
            for (var gA = 0; gA < 8; gA++)
              p[iA] = 1 / (l[V[iA]] * R[cA] * R[gA] * 8), w[iA] = 1 / (u[V[iA]] * R[cA] * R[gA] * 8), iA++;
        }(X < 50 ? Math.floor(5e3 / X) : Math.floor(200 - 2 * X)), i = X);
      }
      this.encode = function(X, lA) {
        var rA, x;
        (/* @__PURE__ */ new Date()).getTime(), lA && sA(lA), F = new Array(), E = 0, H = 7, G(65496), G(65504), G(16), I(74), I(70), I(73), I(70), I(0), I(1), I(1), I(0), G(1), G(1), I(0), I(0), function() {
          G(65499), G(132), I(0);
          for (var PA = 0; PA < 64; PA++)
            I(l[PA]);
          I(1);
          for (var nt = 0; nt < 64; nt++)
            I(u[nt]);
        }(), rA = X.width, x = X.height, G(65472), G(17), I(8), G(x), G(rA), I(3), I(1), I(17), I(0), I(2), I(17), I(1), I(3), I(17), I(1), function() {
          G(65476), G(418), I(0);
          for (var PA = 0; PA < 16; PA++)
            I(Q[PA + 1]);
          for (var nt = 0; nt <= 11; nt++)
            I(q[nt]);
          I(16);
          for (var lt = 0; lt < 16; lt++)
            I(K[lt + 1]);
          for (var rt = 0; rt <= 161; rt++)
            I(z[rt]);
          I(1);
          for (var et = 0; et < 16; et++)
            I($[et + 1]);
          for (var ut = 0; ut <= 11; ut++)
            I(uA[ut]);
          I(17);
          for (var xt = 0; xt < 16; xt++)
            I(AA[xt + 1]);
          for (var MA = 0; MA <= 161; MA++)
            I(L[MA]);
        }(), G(65498), G(12), I(3), I(1), I(0), I(2), I(17), I(3), I(17), I(0), I(63), I(0);
        var O = 0, h = 0, b = 0;
        E = 0, H = 7, this.encode.displayName = "_encode_";
        for (var S, R, iA, cA, gA, wA, pA, UA, vA, TA = X.data, nA = X.width, ot = X.height, ZA = 4 * nA, $A = 0; $A < ot; ) {
          for (S = 0; S < ZA; ) {
            for (wA = gA = ZA * $A + S, pA = -1, vA = UA = 0; vA < 64; vA++)
              wA = gA + (UA = vA >> 3) * ZA + (pA = 4 * (7 & vA)), ot <= $A + UA && (wA -= ZA * ($A + 1 + UA - ot)), ZA <= S + pA && (wA -= S + pA - ZA + 4), R = TA[wA++], iA = TA[wA++], cA = TA[wA++], _[vA] = (W[R] + W[iA + 256 >> 0] + W[cA + 512 >> 0] >> 16) - 128, N[vA] = (W[R + 768 >> 0] + W[iA + 1024 >> 0] + W[cA + 1280 >> 0] >> 16) - 128, j[vA] = (W[R + 1280 >> 0] + W[iA + 1536 >> 0] + W[cA + 1792 >> 0] >> 16) - 128;
            O = M(_, p, O, B, s), h = M(N, w, h, v, n), b = M(j, w, b, v, n), S += 32;
          }
          $A += 8;
        }
        if (0 <= H) {
          var mt = [];
          mt[1] = H + 1, mt[0] = (1 << H + 1) - 1, P(mt);
        }
        return G(65497), new Uint8Array(F);
      }, function() {
        (/* @__PURE__ */ new Date()).getTime(), a || (a = 50), function() {
          for (var X = String.fromCharCode, lA = 0; lA < 256; lA++)
            Z[lA] = X(lA);
        }(), B = U(Q, q), v = U($, uA), s = U(K, z), n = U(AA, L), function() {
          for (var X = 1, lA = 2, rA = 1; rA <= 15; rA++) {
            for (var x = X; x < lA; x++)
              d[32767 + x] = rA, f[32767 + x] = [], f[32767 + x][1] = rA, f[32767 + x][0] = x;
            for (var O = -(lA - 1); O <= -X; O++)
              d[32767 + O] = rA, f[32767 + O] = [], f[32767 + O][1] = rA, f[32767 + O][0] = lA - 1 + O;
            X <<= 1, lA <<= 1;
          }
        }(), function() {
          for (var X = 0; X < 256; X++)
            W[X] = 19595 * X, W[X + 256 >> 0] = 38470 * X, W[X + 512 >> 0] = 7471 * X + 32768, W[X + 768 >> 0] = -11059 * X, W[X + 1024 >> 0] = -21709 * X, W[X + 1280 >> 0] = 32768 * X + 8421375, W[X + 1536 >> 0] = -27439 * X, W[X + 1792 >> 0] = -5329 * X;
        }(), sA(a), (/* @__PURE__ */ new Date()).getTime();
      }();
    }
    try {
      t.exports = si;
    } catch {
    }
    function le(a, B) {
      if (this.pos = 0, this.buffer = a, this.datav = new DataView(a.buffer), this.is_with_alpha = !!B, this.bottom_up = !0, this.flag = String.fromCharCode(this.buffer[0]) + String.fromCharCode(this.buffer[1]), this.pos += 2, ["BM", "BA", "CI", "CP", "IC", "PT"].indexOf(this.flag) === -1)
        throw new Error("Invalid BMP File");
      this.parseHeader(), this.parseBGR();
    }
    le.prototype.parseHeader = function() {
      if (this.fileSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.reserved = this.datav.getUint32(this.pos, !0), this.pos += 4, this.offset = this.datav.getUint32(this.pos, !0), this.pos += 4, this.headerSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.width = this.datav.getUint32(this.pos, !0), this.pos += 4, this.height = this.datav.getInt32(this.pos, !0), this.pos += 4, this.planes = this.datav.getUint16(this.pos, !0), this.pos += 2, this.bitPP = this.datav.getUint16(this.pos, !0), this.pos += 2, this.compress = this.datav.getUint32(this.pos, !0), this.pos += 4, this.rawSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.hr = this.datav.getUint32(this.pos, !0), this.pos += 4, this.vr = this.datav.getUint32(this.pos, !0), this.pos += 4, this.colors = this.datav.getUint32(this.pos, !0), this.pos += 4, this.importantColors = this.datav.getUint32(this.pos, !0), this.pos += 4, this.bitPP === 16 && this.is_with_alpha && (this.bitPP = 15), this.bitPP < 15) {
        var a = this.colors === 0 ? 1 << this.bitPP : this.colors;
        this.palette = new Array(a);
        for (var B = 0; B < a; B++) {
          var v = this.datav.getUint8(this.pos++, !0), s = this.datav.getUint8(this.pos++, !0), n = this.datav.getUint8(this.pos++, !0), i = this.datav.getUint8(this.pos++, !0);
          this.palette[B] = { red: n, green: s, blue: v, quad: i };
        }
      }
      this.height < 0 && (this.height *= -1, this.bottom_up = !1);
    }, le.prototype.parseBGR = function() {
      this.pos = this.offset;
      try {
        var a = "bit" + this.bitPP, B = this.width * this.height * 4;
        this.data = new Uint8Array(B), this[a]();
      } catch (v) {
        console.log("bit decode error:" + v);
      }
    }, le.prototype.bit1 = function() {
      var a = Math.ceil(this.width / 8), B = a % 4, v = 0 <= this.height ? this.height - 1 : -this.height;
      for (v = this.height - 1; 0 <= v; v--) {
        for (var s = this.bottom_up ? v : this.height - 1 - v, n = 0; n < a; n++)
          for (var i = this.datav.getUint8(this.pos++, !0), c = s * this.width * 4 + 8 * n * 4, l = 0; l < 8 && 8 * n + l < this.width; l++) {
            var u = this.palette[i >> 7 - l & 1];
            this.data[c + 4 * l] = u.blue, this.data[c + 4 * l + 1] = u.green, this.data[c + 4 * l + 2] = u.red, this.data[c + 4 * l + 3] = 255;
          }
        B != 0 && (this.pos += 4 - B);
      }
    }, le.prototype.bit4 = function() {
      for (var a = Math.ceil(this.width / 2), B = a % 4, v = this.height - 1; 0 <= v; v--) {
        for (var s = this.bottom_up ? v : this.height - 1 - v, n = 0; n < a; n++) {
          var i = this.datav.getUint8(this.pos++, !0), c = s * this.width * 4 + 2 * n * 4, l = i >> 4, u = 15 & i, p = this.palette[l];
          if (this.data[c] = p.blue, this.data[c + 1] = p.green, this.data[c + 2] = p.red, this.data[c + 3] = 255, 2 * n + 1 >= this.width)
            break;
          p = this.palette[u], this.data[c + 4] = p.blue, this.data[c + 4 + 1] = p.green, this.data[c + 4 + 2] = p.red, this.data[c + 4 + 3] = 255;
        }
        B != 0 && (this.pos += 4 - B);
      }
    }, le.prototype.bit8 = function() {
      for (var a = this.width % 4, B = this.height - 1; 0 <= B; B--) {
        for (var v = this.bottom_up ? B : this.height - 1 - B, s = 0; s < this.width; s++) {
          var n = this.datav.getUint8(this.pos++, !0), i = v * this.width * 4 + 4 * s;
          if (n < this.palette.length) {
            var c = this.palette[n];
            this.data[i] = c.red, this.data[i + 1] = c.green, this.data[i + 2] = c.blue, this.data[i + 3] = 255;
          } else
            this.data[i] = 255, this.data[i + 1] = 255, this.data[i + 2] = 255, this.data[i + 3] = 255;
        }
        a != 0 && (this.pos += 4 - a);
      }
    }, le.prototype.bit15 = function() {
      for (var a = this.width % 3, B = parseInt("11111", 2), v = this.height - 1; 0 <= v; v--) {
        for (var s = this.bottom_up ? v : this.height - 1 - v, n = 0; n < this.width; n++) {
          var i = this.datav.getUint16(this.pos, !0);
          this.pos += 2;
          var c = (i & B) / B * 255 | 0, l = (i >> 5 & B) / B * 255 | 0, u = (i >> 10 & B) / B * 255 | 0, p = i >> 15 ? 255 : 0, w = s * this.width * 4 + 4 * n;
          this.data[w] = u, this.data[w + 1] = l, this.data[w + 2] = c, this.data[w + 3] = p;
        }
        this.pos += a;
      }
    }, le.prototype.bit16 = function() {
      for (var a = this.width % 3, B = parseInt("11111", 2), v = parseInt("111111", 2), s = this.height - 1; 0 <= s; s--) {
        for (var n = this.bottom_up ? s : this.height - 1 - s, i = 0; i < this.width; i++) {
          var c = this.datav.getUint16(this.pos, !0);
          this.pos += 2;
          var l = (c & B) / B * 255 | 0, u = (c >> 5 & v) / v * 255 | 0, p = (c >> 11) / B * 255 | 0, w = n * this.width * 4 + 4 * i;
          this.data[w] = p, this.data[w + 1] = u, this.data[w + 2] = l, this.data[w + 3] = 255;
        }
        this.pos += a;
      }
    }, le.prototype.bit24 = function() {
      for (var a = this.height - 1; 0 <= a; a--) {
        for (var B = this.bottom_up ? a : this.height - 1 - a, v = 0; v < this.width; v++) {
          var s = this.datav.getUint8(this.pos++, !0), n = this.datav.getUint8(this.pos++, !0), i = this.datav.getUint8(this.pos++, !0), c = B * this.width * 4 + 4 * v;
          this.data[c] = i, this.data[c + 1] = n, this.data[c + 2] = s, this.data[c + 3] = 255;
        }
        this.pos += this.width % 4;
      }
    }, le.prototype.bit32 = function() {
      for (var a = this.height - 1; 0 <= a; a--)
        for (var B = this.bottom_up ? a : this.height - 1 - a, v = 0; v < this.width; v++) {
          var s = this.datav.getUint8(this.pos++, !0), n = this.datav.getUint8(this.pos++, !0), i = this.datav.getUint8(this.pos++, !0), c = this.datav.getUint8(this.pos++, !0), l = B * this.width * 4 + 4 * v;
          this.data[l] = i, this.data[l + 1] = n, this.data[l + 2] = s, this.data[l + 3] = c;
        }
    }, le.prototype.getData = function() {
      return this.data;
    };
    try {
      t.exports = function(a) {
        var B = new le(a);
        return { data: B.getData(), width: B.width, height: B.height };
      };
    } catch {
    }
    (function(a) {
      var B = 15, v = 573, s = [0, 1, 2, 3, 4, 4, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 0, 0, 16, 17, 18, 18, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29];
      function n() {
        var m = this;
        function F(E, H) {
          for (var _ = 0; _ |= 1 & E, E >>>= 1, _ <<= 1, 0 < --H; )
            ;
          return _ >>> 1;
        }
        m.build_tree = function(E) {
          var H, _, N, j = m.dyn_tree, Z = m.stat_desc.static_tree, W = m.stat_desc.elems, V = -1;
          for (E.heap_len = 0, E.heap_max = v, H = 0; H < W; H++)
            j[2 * H] !== 0 ? (E.heap[++E.heap_len] = V = H, E.depth[H] = 0) : j[2 * H + 1] = 0;
          for (; E.heap_len < 2; )
            j[2 * (N = E.heap[++E.heap_len] = V < 2 ? ++V : 0)] = 1, E.depth[N] = 0, E.opt_len--, Z && (E.static_len -= Z[2 * N + 1]);
          for (m.max_code = V, H = Math.floor(E.heap_len / 2); 1 <= H; H--)
            E.pqdownheap(j, H);
          for (N = W; H = E.heap[1], E.heap[1] = E.heap[E.heap_len--], E.pqdownheap(j, 1), _ = E.heap[1], E.heap[--E.heap_max] = H, E.heap[--E.heap_max] = _, j[2 * N] = j[2 * H] + j[2 * _], E.depth[N] = Math.max(E.depth[H], E.depth[_]) + 1, j[2 * H + 1] = j[2 * _ + 1] = N, E.heap[1] = N++, E.pqdownheap(j, 1), 2 <= E.heap_len; )
            ;
          E.heap[--E.heap_max] = E.heap[1], function(Q) {
            var q, K, z, $, uA, AA, L = m.dyn_tree, U = m.stat_desc.static_tree, P = m.stat_desc.extra_bits, I = m.stat_desc.extra_base, G = m.stat_desc.max_length, M = 0;
            for ($ = 0; $ <= B; $++)
              Q.bl_count[$] = 0;
            for (L[2 * Q.heap[Q.heap_max] + 1] = 0, q = Q.heap_max + 1; q < v; q++)
              G < ($ = L[2 * L[2 * (K = Q.heap[q]) + 1] + 1] + 1) && ($ = G, M++), L[2 * K + 1] = $, K > m.max_code || (Q.bl_count[$]++, uA = 0, I <= K && (uA = P[K - I]), AA = L[2 * K], Q.opt_len += AA * ($ + uA), U && (Q.static_len += AA * (U[2 * K + 1] + uA)));
            if (M !== 0) {
              do {
                for ($ = G - 1; Q.bl_count[$] === 0; )
                  $--;
                Q.bl_count[$]--, Q.bl_count[$ + 1] += 2, Q.bl_count[G]--, M -= 2;
              } while (0 < M);
              for ($ = G; $ !== 0; $--)
                for (K = Q.bl_count[$]; K !== 0; )
                  (z = Q.heap[--q]) > m.max_code || (L[2 * z + 1] != $ && (Q.opt_len += ($ - L[2 * z + 1]) * L[2 * z], L[2 * z + 1] = $), K--);
            }
          }(E), function(Q, q, K) {
            var z, $, uA, AA = [], L = 0;
            for (z = 1; z <= B; z++)
              AA[z] = L = L + K[z - 1] << 1;
            for ($ = 0; $ <= q; $++)
              (uA = Q[2 * $ + 1]) !== 0 && (Q[2 * $] = F(AA[uA]++, uA));
          }(j, m.max_code, E.bl_count);
        };
      }
      function i(m, F, E, H, _) {
        var N = this;
        N.static_tree = m, N.extra_bits = F, N.extra_base = E, N.elems = H, N.max_length = _;
      }
      n._length_code = [0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 28], n.base_length = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 0], n.base_dist = [0, 1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256, 384, 512, 768, 1024, 1536, 2048, 3072, 4096, 6144, 8192, 12288, 16384, 24576], n.d_code = function(m) {
        return m < 256 ? s[m] : s[256 + (m >>> 7)];
      }, n.extra_lbits = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], n.extra_dbits = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], n.extra_blbits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], n.bl_order = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], i.static_ltree = [12, 8, 140, 8, 76, 8, 204, 8, 44, 8, 172, 8, 108, 8, 236, 8, 28, 8, 156, 8, 92, 8, 220, 8, 60, 8, 188, 8, 124, 8, 252, 8, 2, 8, 130, 8, 66, 8, 194, 8, 34, 8, 162, 8, 98, 8, 226, 8, 18, 8, 146, 8, 82, 8, 210, 8, 50, 8, 178, 8, 114, 8, 242, 8, 10, 8, 138, 8, 74, 8, 202, 8, 42, 8, 170, 8, 106, 8, 234, 8, 26, 8, 154, 8, 90, 8, 218, 8, 58, 8, 186, 8, 122, 8, 250, 8, 6, 8, 134, 8, 70, 8, 198, 8, 38, 8, 166, 8, 102, 8, 230, 8, 22, 8, 150, 8, 86, 8, 214, 8, 54, 8, 182, 8, 118, 8, 246, 8, 14, 8, 142, 8, 78, 8, 206, 8, 46, 8, 174, 8, 110, 8, 238, 8, 30, 8, 158, 8, 94, 8, 222, 8, 62, 8, 190, 8, 126, 8, 254, 8, 1, 8, 129, 8, 65, 8, 193, 8, 33, 8, 161, 8, 97, 8, 225, 8, 17, 8, 145, 8, 81, 8, 209, 8, 49, 8, 177, 8, 113, 8, 241, 8, 9, 8, 137, 8, 73, 8, 201, 8, 41, 8, 169, 8, 105, 8, 233, 8, 25, 8, 153, 8, 89, 8, 217, 8, 57, 8, 185, 8, 121, 8, 249, 8, 5, 8, 133, 8, 69, 8, 197, 8, 37, 8, 165, 8, 101, 8, 229, 8, 21, 8, 149, 8, 85, 8, 213, 8, 53, 8, 181, 8, 117, 8, 245, 8, 13, 8, 141, 8, 77, 8, 205, 8, 45, 8, 173, 8, 109, 8, 237, 8, 29, 8, 157, 8, 93, 8, 221, 8, 61, 8, 189, 8, 125, 8, 253, 8, 19, 9, 275, 9, 147, 9, 403, 9, 83, 9, 339, 9, 211, 9, 467, 9, 51, 9, 307, 9, 179, 9, 435, 9, 115, 9, 371, 9, 243, 9, 499, 9, 11, 9, 267, 9, 139, 9, 395, 9, 75, 9, 331, 9, 203, 9, 459, 9, 43, 9, 299, 9, 171, 9, 427, 9, 107, 9, 363, 9, 235, 9, 491, 9, 27, 9, 283, 9, 155, 9, 411, 9, 91, 9, 347, 9, 219, 9, 475, 9, 59, 9, 315, 9, 187, 9, 443, 9, 123, 9, 379, 9, 251, 9, 507, 9, 7, 9, 263, 9, 135, 9, 391, 9, 71, 9, 327, 9, 199, 9, 455, 9, 39, 9, 295, 9, 167, 9, 423, 9, 103, 9, 359, 9, 231, 9, 487, 9, 23, 9, 279, 9, 151, 9, 407, 9, 87, 9, 343, 9, 215, 9, 471, 9, 55, 9, 311, 9, 183, 9, 439, 9, 119, 9, 375, 9, 247, 9, 503, 9, 15, 9, 271, 9, 143, 9, 399, 9, 79, 9, 335, 9, 207, 9, 463, 9, 47, 9, 303, 9, 175, 9, 431, 9, 111, 9, 367, 9, 239, 9, 495, 9, 31, 9, 287, 9, 159, 9, 415, 9, 95, 9, 351, 9, 223, 9, 479, 9, 63, 9, 319, 9, 191, 9, 447, 9, 127, 9, 383, 9, 255, 9, 511, 9, 0, 7, 64, 7, 32, 7, 96, 7, 16, 7, 80, 7, 48, 7, 112, 7, 8, 7, 72, 7, 40, 7, 104, 7, 24, 7, 88, 7, 56, 7, 120, 7, 4, 7, 68, 7, 36, 7, 100, 7, 20, 7, 84, 7, 52, 7, 116, 7, 3, 8, 131, 8, 67, 8, 195, 8, 35, 8, 163, 8, 99, 8, 227, 8], i.static_dtree = [0, 5, 16, 5, 8, 5, 24, 5, 4, 5, 20, 5, 12, 5, 28, 5, 2, 5, 18, 5, 10, 5, 26, 5, 6, 5, 22, 5, 14, 5, 30, 5, 1, 5, 17, 5, 9, 5, 25, 5, 5, 5, 21, 5, 13, 5, 29, 5, 3, 5, 19, 5, 11, 5, 27, 5, 7, 5, 23, 5], i.static_l_desc = new i(i.static_ltree, n.extra_lbits, 257, 286, B), i.static_d_desc = new i(i.static_dtree, n.extra_dbits, 0, 30, B), i.static_bl_desc = new i(null, n.extra_blbits, 0, 19, 7);
      function c(m, F, E, H, _) {
        var N = this;
        N.good_length = m, N.max_lazy = F, N.nice_length = E, N.max_chain = H, N.func = _;
      }
      var l = [new c(0, 0, 0, 0, 0), new c(4, 4, 8, 4, 1), new c(4, 5, 16, 8, 1), new c(4, 6, 32, 32, 1), new c(4, 4, 16, 16, 2), new c(8, 16, 32, 32, 2), new c(8, 16, 128, 128, 2), new c(8, 32, 128, 256, 2), new c(32, 128, 258, 1024, 2), new c(32, 258, 258, 4096, 2)], u = ["need dictionary", "stream end", "", "", "stream error", "data error", "", "buffer error", "", ""], p = 262;
      function w(m, F, E, H) {
        var _ = m[2 * F], N = m[2 * E];
        return _ < N || _ == N && H[F] <= H[E];
      }
      function f() {
        var m, F, E, H, _, N, j, Z, W, V, Q, q, K, z, $, uA, AA, L, U, P, I, G, M, sA, X, lA, rA, x, O, h, b, S, R, iA, cA, gA, wA, pA, UA, vA, TA, nA = this, ot = new n(), ZA = new n(), $A = new n();
        function mt() {
          var tA;
          for (tA = 0; tA < 286; tA++)
            b[2 * tA] = 0;
          for (tA = 0; tA < 30; tA++)
            S[2 * tA] = 0;
          for (tA = 0; tA < 19; tA++)
            R[2 * tA] = 0;
          b[512] = 1, nA.opt_len = nA.static_len = 0, gA = pA = 0;
        }
        function PA(tA, eA) {
          var hA, BA, CA = -1, yA = tA[1], LA = 0, jA = 7, OA = 4;
          for (yA === 0 && (jA = 138, OA = 3), tA[2 * (eA + 1) + 1] = 65535, hA = 0; hA <= eA; hA++)
            BA = yA, yA = tA[2 * (hA + 1) + 1], ++LA < jA && BA == yA || (LA < OA ? R[2 * BA] += LA : BA !== 0 ? (BA != CA && R[2 * BA]++, R[32]++) : LA <= 10 ? R[34]++ : R[36]++, CA = BA, (LA = 0) === yA ? (jA = 138, OA = 3) : BA == yA ? (jA = 6, OA = 3) : (jA = 7, OA = 4));
        }
        function nt(tA) {
          nA.pending_buf[nA.pending++] = tA;
        }
        function lt(tA) {
          nt(255 & tA), nt(tA >>> 8 & 255);
        }
        function rt(tA, eA) {
          var hA, BA = eA;
          16 - BA < TA ? (lt(vA |= (hA = tA) << TA & 65535), vA = hA >>> 16 - TA, TA += BA - 16) : (vA |= tA << TA & 65535, TA += BA);
        }
        function et(tA, eA) {
          var hA = 2 * tA;
          rt(65535 & eA[hA], 65535 & eA[hA + 1]);
        }
        function ut(tA, eA) {
          var hA, BA, CA = -1, yA = tA[1], LA = 0, jA = 7, OA = 4;
          for (yA === 0 && (jA = 138, OA = 3), hA = 0; hA <= eA; hA++)
            if (BA = yA, yA = tA[2 * (hA + 1) + 1], !(++LA < jA && BA == yA)) {
              if (LA < OA)
                for (; et(BA, R), --LA != 0; )
                  ;
              else
                BA !== 0 ? (BA != CA && (et(BA, R), LA--), et(16, R), rt(LA - 3, 2)) : LA <= 10 ? (et(17, R), rt(LA - 3, 3)) : (et(18, R), rt(LA - 11, 7));
              CA = BA, (LA = 0) === yA ? (jA = 138, OA = 3) : BA == yA ? (jA = 6, OA = 3) : (jA = 7, OA = 4);
            }
        }
        function xt() {
          TA == 16 ? (lt(vA), TA = vA = 0) : 8 <= TA && (nt(255 & vA), vA >>>= 8, TA -= 8);
        }
        function MA(tA, eA) {
          var hA, BA, CA;
          if (nA.pending_buf[wA + 2 * gA] = tA >>> 8 & 255, nA.pending_buf[wA + 2 * gA + 1] = 255 & tA, nA.pending_buf[iA + gA] = 255 & eA, gA++, tA === 0 ? b[2 * eA]++ : (pA++, tA--, b[2 * (n._length_code[eA] + 256 + 1)]++, S[2 * n.d_code(tA)]++), (8191 & gA) == 0 && 2 < rA) {
            for (hA = 8 * gA, BA = I - AA, CA = 0; CA < 30; CA++)
              hA += S[2 * CA] * (5 + n.extra_dbits[CA]);
            if (hA >>>= 3, pA < Math.floor(gA / 2) && hA < Math.floor(BA / 2))
              return !0;
          }
          return gA == cA - 1;
        }
        function oe(tA, eA) {
          var hA, BA, CA, yA, LA = 0;
          if (gA !== 0)
            for (; hA = nA.pending_buf[wA + 2 * LA] << 8 & 65280 | 255 & nA.pending_buf[wA + 2 * LA + 1], BA = 255 & nA.pending_buf[iA + LA], LA++, hA === 0 ? et(BA, tA) : (et((CA = n._length_code[BA]) + 256 + 1, tA), (yA = n.extra_lbits[CA]) !== 0 && rt(BA -= n.base_length[CA], yA), et(CA = n.d_code(--hA), eA), (yA = n.extra_dbits[CA]) !== 0 && rt(hA -= n.base_dist[CA], yA)), LA < gA; )
              ;
          et(256, tA), UA = tA[513];
        }
        function Jt() {
          8 < TA ? lt(vA) : 0 < TA && nt(255 & vA), TA = vA = 0;
        }
        function pe(tA, eA, hA) {
          var BA, CA, yA;
          rt(0 + (hA ? 1 : 0), 3), BA = tA, CA = eA, yA = !0, Jt(), UA = 8, yA && (lt(CA), lt(~CA)), nA.pending_buf.set(Z.subarray(BA, BA + CA), nA.pending), nA.pending += CA;
        }
        function Qe(tA, eA, hA) {
          var BA, CA, yA = 0;
          0 < rA ? (ot.build_tree(nA), ZA.build_tree(nA), yA = function() {
            var LA;
            for (PA(b, ot.max_code), PA(S, ZA.max_code), $A.build_tree(nA), LA = 18; 3 <= LA && R[2 * n.bl_order[LA] + 1] === 0; LA--)
              ;
            return nA.opt_len += 3 * (LA + 1) + 5 + 5 + 4, LA;
          }(), BA = nA.opt_len + 3 + 7 >>> 3, (CA = nA.static_len + 3 + 7 >>> 3) <= BA && (BA = CA)) : BA = CA = eA + 5, eA + 4 <= BA && tA != -1 ? pe(tA, eA, hA) : CA == BA ? (rt(2 + (hA ? 1 : 0), 3), oe(i.static_ltree, i.static_dtree)) : (rt(4 + (hA ? 1 : 0), 3), function(LA, jA, OA) {
            var JA;
            for (rt(LA - 257, 5), rt(jA - 1, 5), rt(OA - 4, 4), JA = 0; JA < OA; JA++)
              rt(R[2 * n.bl_order[JA] + 1], 3);
            ut(b, LA - 1), ut(S, jA - 1);
          }(ot.max_code + 1, ZA.max_code + 1, yA + 1), oe(b, S)), mt(), hA && Jt();
        }
        function _t(tA) {
          Qe(0 <= AA ? AA : -1, I - AA, tA), AA = I, m.flush_pending();
        }
        function k() {
          var tA, eA, hA, BA;
          do {
            if ((BA = W - M - I) === 0 && I === 0 && M === 0)
              BA = _;
            else if (BA == -1)
              BA--;
            else if (_ + _ - p <= I) {
              for (Z.set(Z.subarray(_, _ + _), 0), G -= _, I -= _, AA -= _, hA = tA = K; eA = 65535 & Q[--hA], Q[hA] = _ <= eA ? eA - _ : 0, --tA != 0; )
                ;
              for (hA = tA = _; eA = 65535 & V[--hA], V[hA] = _ <= eA ? eA - _ : 0, --tA != 0; )
                ;
              BA += _;
            }
            if (m.avail_in === 0)
              return;
            tA = m.read_buf(Z, I + M, BA), 3 <= (M += tA) && (q = ((q = 255 & Z[I]) << uA ^ 255 & Z[I + 1]) & $);
          } while (M < p && m.avail_in !== 0);
        }
        function oA(tA) {
          var eA, hA, BA = X, CA = I, yA = sA, LA = _ - p < I ? I - (_ - p) : 0, jA = h, OA = j, JA = I + 258, st = Z[CA + yA - 1], Et = Z[CA + yA];
          O <= sA && (BA >>= 2), M < jA && (jA = M);
          do
            if (Z[(eA = tA) + yA] == Et && Z[eA + yA - 1] == st && Z[eA] == Z[CA] && Z[++eA] == Z[CA + 1]) {
              CA += 2, eA++;
              do
                ;
              while (Z[++CA] == Z[++eA] && Z[++CA] == Z[++eA] && Z[++CA] == Z[++eA] && Z[++CA] == Z[++eA] && Z[++CA] == Z[++eA] && Z[++CA] == Z[++eA] && Z[++CA] == Z[++eA] && Z[++CA] == Z[++eA] && CA < JA);
              if (hA = 258 - (JA - CA), CA = JA - 258, yA < hA) {
                if (G = tA, jA <= (yA = hA))
                  break;
                st = Z[CA + yA - 1], Et = Z[CA + yA];
              }
            }
          while ((tA = 65535 & V[tA & OA]) > LA && --BA != 0);
          return yA <= M ? yA : M;
        }
        function fA(tA) {
          return tA.total_in = tA.total_out = 0, tA.msg = null, nA.pending = 0, nA.pending_out = 0, F = 113, H = 0, ot.dyn_tree = b, ot.stat_desc = i.static_l_desc, ZA.dyn_tree = S, ZA.stat_desc = i.static_d_desc, $A.dyn_tree = R, $A.stat_desc = i.static_bl_desc, TA = vA = 0, UA = 8, mt(), function() {
            var eA;
            for (W = 2 * _, eA = Q[K - 1] = 0; eA < K - 1; eA++)
              Q[eA] = 0;
            lA = l[rA].max_lazy, O = l[rA].good_length, h = l[rA].nice_length, X = l[rA].max_chain, L = sA = 2, q = P = M = AA = I = 0;
          }(), 0;
        }
        nA.depth = [], nA.bl_count = [], nA.heap = [], b = [], S = [], R = [], nA.pqdownheap = function(tA, eA) {
          for (var hA = nA.heap, BA = hA[eA], CA = eA << 1; CA <= nA.heap_len && (CA < nA.heap_len && w(tA, hA[CA + 1], hA[CA], nA.depth) && CA++, !w(tA, BA, hA[CA], nA.depth)); )
            hA[eA] = hA[CA], eA = CA, CA <<= 1;
          hA[eA] = BA;
        }, nA.deflateInit = function(tA, eA, hA, BA, CA, yA) {
          return BA || (BA = 8), CA || (CA = 8), yA || (yA = 0), tA.msg = null, eA == -1 && (eA = 6), CA < 1 || 9 < CA || BA != 8 || hA < 9 || 15 < hA || eA < 0 || 9 < eA || yA < 0 || 2 < yA ? -2 : (tA.dstate = nA, j = (_ = 1 << (N = hA)) - 1, $ = (K = 1 << (z = CA + 7)) - 1, uA = Math.floor((z + 3 - 1) / 3), Z = new Uint8Array(2 * _), V = [], Q = [], cA = 1 << CA + 6, nA.pending_buf = new Uint8Array(4 * cA), E = 4 * cA, wA = Math.floor(cA / 2), iA = 3 * cA, rA = eA, x = yA, fA(tA));
        }, nA.deflateEnd = function() {
          return F != 42 && F != 113 && F != 666 ? -2 : (nA.pending_buf = null, Z = V = Q = null, nA.dstate = null, F == 113 ? -3 : 0);
        }, nA.deflateParams = function(tA, eA, hA) {
          var BA = 0;
          return eA == -1 && (eA = 6), eA < 0 || 9 < eA || hA < 0 || 2 < hA ? -2 : (l[rA].func != l[eA].func && tA.total_in !== 0 && (BA = tA.deflate(1)), rA != eA && (lA = l[rA = eA].max_lazy, O = l[rA].good_length, h = l[rA].nice_length, X = l[rA].max_chain), x = hA, BA);
        }, nA.deflateSetDictionary = function(tA, eA, hA) {
          var BA, CA = hA, yA = 0;
          if (!eA || F != 42)
            return -2;
          if (CA < 3)
            return 0;
          for (_ - p < CA && (yA = hA - (CA = _ - p)), Z.set(eA.subarray(yA, yA + CA), 0), AA = I = CA, q = ((q = 255 & Z[0]) << uA ^ 255 & Z[1]) & $, BA = 0; BA <= CA - 3; BA++)
            q = (q << uA ^ 255 & Z[BA + 2]) & $, V[BA & j] = Q[q], Q[q] = BA;
          return 0;
        }, nA.deflate = function(tA, eA) {
          var hA, BA, CA, yA, LA, jA;
          if (4 < eA || eA < 0)
            return -2;
          if (!tA.next_out || !tA.next_in && tA.avail_in !== 0 || F == 666 && eA != 4)
            return tA.msg = u[4], -2;
          if (tA.avail_out === 0)
            return tA.msg = u[7], -5;
          if (m = tA, yA = H, H = eA, F == 42 && (BA = 8 + (N - 8 << 4) << 8, 3 < (CA = (rA - 1 & 255) >> 1) && (CA = 3), BA |= CA << 6, I !== 0 && (BA |= 32), F = 113, nt((jA = BA += 31 - BA % 31) >> 8 & 255), nt(255 & jA)), nA.pending !== 0) {
            if (m.flush_pending(), m.avail_out === 0)
              return H = -1, 0;
          } else if (m.avail_in === 0 && eA <= yA && eA != 4)
            return m.msg = u[7], -5;
          if (F == 666 && m.avail_in !== 0)
            return tA.msg = u[7], -5;
          if (m.avail_in !== 0 || M !== 0 || eA != 0 && F != 666) {
            switch (LA = -1, l[rA].func) {
              case 0:
                LA = function(OA) {
                  var JA, st = 65535;
                  for (E - 5 < st && (st = E - 5); ; ) {
                    if (M <= 1) {
                      if (k(), M === 0 && OA == 0)
                        return 0;
                      if (M === 0)
                        break;
                    }
                    if (I += M, JA = AA + st, ((M = 0) === I || JA <= I) && (M = I - JA, I = JA, _t(!1), m.avail_out === 0) || _ - p <= I - AA && (_t(!1), m.avail_out === 0))
                      return 0;
                  }
                  return _t(OA == 4), m.avail_out === 0 ? OA == 4 ? 2 : 0 : OA == 4 ? 3 : 1;
                }(eA);
                break;
              case 1:
                LA = function(OA) {
                  for (var JA, st = 0; ; ) {
                    if (M < p) {
                      if (k(), M < p && OA == 0)
                        return 0;
                      if (M === 0)
                        break;
                    }
                    if (3 <= M && (q = (q << uA ^ 255 & Z[I + 2]) & $, st = 65535 & Q[q], V[I & j] = Q[q], Q[q] = I), st !== 0 && (I - st & 65535) <= _ - p && x != 2 && (L = oA(st)), 3 <= L)
                      if (JA = MA(I - G, L - 3), M -= L, L <= lA && 3 <= M) {
                        for (L--; q = (q << uA ^ 255 & Z[++I + 2]) & $, st = 65535 & Q[q], V[I & j] = Q[q], Q[q] = I, --L != 0; )
                          ;
                        I++;
                      } else
                        I += L, L = 0, q = ((q = 255 & Z[I]) << uA ^ 255 & Z[I + 1]) & $;
                    else
                      JA = MA(0, 255 & Z[I]), M--, I++;
                    if (JA && (_t(!1), m.avail_out === 0))
                      return 0;
                  }
                  return _t(OA == 4), m.avail_out === 0 ? OA == 4 ? 2 : 0 : OA == 4 ? 3 : 1;
                }(eA);
                break;
              case 2:
                LA = function(OA) {
                  for (var JA, st, Et = 0; ; ) {
                    if (M < p) {
                      if (k(), M < p && OA == 0)
                        return 0;
                      if (M === 0)
                        break;
                    }
                    if (3 <= M && (q = (q << uA ^ 255 & Z[I + 2]) & $, Et = 65535 & Q[q], V[I & j] = Q[q], Q[q] = I), sA = L, U = G, L = 2, Et !== 0 && sA < lA && (I - Et & 65535) <= _ - p && (x != 2 && (L = oA(Et)), L <= 5 && (x == 1 || L == 3 && 4096 < I - G) && (L = 2)), 3 <= sA && L <= sA) {
                      for (st = I + M - 3, JA = MA(I - 1 - U, sA - 3), M -= sA - 1, sA -= 2; ++I <= st && (q = (q << uA ^ 255 & Z[I + 2]) & $, Et = 65535 & Q[q], V[I & j] = Q[q], Q[q] = I), --sA != 0; )
                        ;
                      if (P = 0, L = 2, I++, JA && (_t(!1), m.avail_out === 0))
                        return 0;
                    } else if (P !== 0) {
                      if ((JA = MA(0, 255 & Z[I - 1])) && _t(!1), I++, M--, m.avail_out === 0)
                        return 0;
                    } else
                      P = 1, I++, M--;
                  }
                  return P !== 0 && (JA = MA(0, 255 & Z[I - 1]), P = 0), _t(OA == 4), m.avail_out === 0 ? OA == 4 ? 2 : 0 : OA == 4 ? 3 : 1;
                }(eA);
            }
            if (LA != 2 && LA != 3 || (F = 666), LA == 0 || LA == 2)
              return m.avail_out === 0 && (H = -1), 0;
            if (LA == 1) {
              if (eA == 1)
                rt(2, 3), et(256, i.static_ltree), xt(), 1 + UA + 10 - TA < 9 && (rt(2, 3), et(256, i.static_ltree), xt()), UA = 7;
              else if (pe(0, 0, !1), eA == 3)
                for (hA = 0; hA < K; hA++)
                  Q[hA] = 0;
              if (m.flush_pending(), m.avail_out === 0)
                return H = -1, 0;
            }
          }
          return eA != 4 ? 0 : 1;
        };
      }
      function d() {
        var m = this;
        m.next_in_index = 0, m.next_out_index = 0, m.avail_in = 0, m.total_in = 0, m.avail_out = 0, m.total_out = 0;
      }
      d.prototype = { deflateInit: function(m, F) {
        return this.dstate = new f(), F || (F = B), this.dstate.deflateInit(this, m, F);
      }, deflate: function(m) {
        return this.dstate ? this.dstate.deflate(this, m) : -2;
      }, deflateEnd: function() {
        if (!this.dstate)
          return -2;
        var m = this.dstate.deflateEnd();
        return this.dstate = null, m;
      }, deflateParams: function(m, F) {
        return this.dstate ? this.dstate.deflateParams(this, m, F) : -2;
      }, deflateSetDictionary: function(m, F) {
        return this.dstate ? this.dstate.deflateSetDictionary(this, m, F) : -2;
      }, read_buf: function(m, F, E) {
        var H = this, _ = H.avail_in;
        return E < _ && (_ = E), _ === 0 ? 0 : (H.avail_in -= _, m.set(H.next_in.subarray(H.next_in_index, H.next_in_index + _), F), H.next_in_index += _, H.total_in += _, _);
      }, flush_pending: function() {
        var m = this, F = m.dstate.pending;
        F > m.avail_out && (F = m.avail_out), F !== 0 && (m.next_out.set(m.dstate.pending_buf.subarray(m.dstate.pending_out, m.dstate.pending_out + F), m.next_out_index), m.next_out_index += F, m.dstate.pending_out += F, m.total_out += F, m.avail_out -= F, m.dstate.pending -= F, m.dstate.pending === 0 && (m.dstate.pending_out = 0));
      } };
      var C = a.zip || a;
      C.Deflater = C._jzlib_Deflater = function(m) {
        var F = new d(), E = new Uint8Array(512), H = m ? m.level : -1;
        H === void 0 && (H = -1), F.deflateInit(H), F.next_out = E, this.append = function(_, N) {
          var j, Z = [], W = 0, V = 0, Q = 0;
          if (_.length) {
            F.next_in_index = 0, F.next_in = _, F.avail_in = _.length;
            do {
              if (F.next_out_index = 0, F.avail_out = 512, F.deflate(0) != 0)
                throw new Error("deflating: " + F.msg);
              F.next_out_index && (F.next_out_index == 512 ? Z.push(new Uint8Array(E)) : Z.push(new Uint8Array(E.subarray(0, F.next_out_index)))), Q += F.next_out_index, N && 0 < F.next_in_index && F.next_in_index != W && (N(F.next_in_index), W = F.next_in_index);
            } while (0 < F.avail_in || F.avail_out === 0);
            return j = new Uint8Array(Q), Z.forEach(function(q) {
              j.set(q, V), V += q.length;
            }), j;
          }
        }, this.flush = function() {
          var _, N, j = [], Z = 0, W = 0;
          do {
            if (F.next_out_index = 0, F.avail_out = 512, (_ = F.deflate(4)) != 1 && _ != 0)
              throw new Error("deflating: " + F.msg);
            0 < 512 - F.avail_out && j.push(new Uint8Array(E.subarray(0, F.next_out_index))), W += F.next_out_index;
          } while (0 < F.avail_in || F.avail_out === 0);
          return F.deflateEnd(), N = new Uint8Array(W), j.forEach(function(V) {
            N.set(V, Z), Z += V.length;
          }), N;
        };
      };
    })(typeof self < "u" && self || typeof window < "u" && window || typeof It < "u" && It || Function('return typeof this === "object" && this.content')() || Function("return this")()), /**
       * A class to parse color values
       * @author Stoyan Stefanov <sstoo@gmail.com>
       * @link   http://www.phpied.com/rgb-color-parser-in-javascript/
       * @license Use it if you like it
       */
    function(a) {
      function B(v) {
        var s;
        this.ok = !1, v.charAt(0) == "#" && (v = v.substr(1, 6)), v = (v = v.replace(/ /g, "")).toLowerCase();
        var n = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "00ffff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000000", blanchedalmond: "ffebcd", blue: "0000ff", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "00ffff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dodgerblue: "1e90ff", feldspar: "d19275", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "ff00ff", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgrey: "d3d3d3", lightgreen: "90ee90", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslateblue: "8470ff", lightslategray: "778899", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "00ff00", limegreen: "32cd32", linen: "faf0e6", magenta: "ff00ff", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370d8", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "d87093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", red: "ff0000", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", violetred: "d02090", wheat: "f5deb3", white: "ffffff", whitesmoke: "f5f5f5", yellow: "ffff00", yellowgreen: "9acd32" };
        for (var i in n)
          v == i && (v = n[i]);
        for (var c = [{ re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/, example: ["rgb(123, 234, 45)", "rgb(255,234,245)"], process: function(f) {
          return [parseInt(f[1]), parseInt(f[2]), parseInt(f[3])];
        } }, { re: /^(\w{2})(\w{2})(\w{2})$/, example: ["#00ff00", "336699"], process: function(f) {
          return [parseInt(f[1], 16), parseInt(f[2], 16), parseInt(f[3], 16)];
        } }, { re: /^(\w{1})(\w{1})(\w{1})$/, example: ["#fb0", "f0f"], process: function(f) {
          return [parseInt(f[1] + f[1], 16), parseInt(f[2] + f[2], 16), parseInt(f[3] + f[3], 16)];
        } }], l = 0; l < c.length; l++) {
          var u = c[l].re, p = c[l].process, w = u.exec(v);
          w && (s = p(w), this.r = s[0], this.g = s[1], this.b = s[2], this.ok = !0);
        }
        this.r = this.r < 0 || isNaN(this.r) ? 0 : 255 < this.r ? 255 : this.r, this.g = this.g < 0 || isNaN(this.g) ? 0 : 255 < this.g ? 255 : this.g, this.b = this.b < 0 || isNaN(this.b) ? 0 : 255 < this.b ? 255 : this.b, this.toRGB = function() {
          return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
        }, this.toHex = function() {
          var f = this.r.toString(16), d = this.g.toString(16), C = this.b.toString(16);
          return f.length == 1 && (f = "0" + f), d.length == 1 && (d = "0" + d), C.length == 1 && (C = "0" + C), "#" + f + d + C;
        }, this.getHelpXML = function() {
          for (var f = new Array(), d = 0; d < c.length; d++)
            for (var C = c[d].example, m = 0; m < C.length; m++)
              f[f.length] = C[m];
          for (var F in n)
            f[f.length] = F;
          var E = document.createElement("ul");
          for (E.setAttribute("id", "rgbcolor-examples"), d = 0; d < f.length; d++)
            try {
              var H = document.createElement("li"), _ = new B(f[d]), N = document.createElement("div");
              N.style.cssText = "margin: 3px; border: 1px solid black; background:" + _.toHex() + "; color:" + _.toHex(), N.appendChild(document.createTextNode("test"));
              var j = document.createTextNode(" " + f[d] + " -> " + _.toRGB() + " -> " + _.toHex());
              H.appendChild(N), H.appendChild(j), E.appendChild(H);
            } catch {
            }
          return E;
        };
      }
      t.exports && (t.exports = B), a.RGBColor = B;
    }(typeof self < "u" && self || typeof window < "u" && window || typeof It < "u" && It || Function('return typeof this === "object" && this.content')() || Function("return this")()), function(a) {
      t.exports = a();
    }(function() {
      return function a(B, v, s) {
        function n(l, u) {
          if (!v[l]) {
            if (!B[l]) {
              var p = typeof ln == "function" && ln;
              if (!u && p)
                return p(l, !0);
              if (i)
                return i(l, !0);
              var w = new Error("Cannot find module '" + l + "'");
              throw w.code = "MODULE_NOT_FOUND", w;
            }
            var f = v[l] = { exports: {} };
            B[l][0].call(f.exports, function(d) {
              var C = B[l][1][d];
              return n(C || d);
            }, f, f.exports, a, B, v, s);
          }
          return v[l].exports;
        }
        for (var i = typeof ln == "function" && ln, c = 0; c < s.length; c++)
          n(s[c]);
        return n;
      }({ 1: [function(a, B, v) {
        (function(s) {
          (function(n) {
            var i = typeof v == "object" && v, c = typeof B == "object" && B && B.exports == i && B, l = typeof s == "object" && s;
            l.global !== l && l.window !== l || (n = l);
            var u, p, w = 2147483647, f = 36, d = 1, C = 26, m = 38, F = 700, E = 72, H = 128, _ = "-", N = /^xn--/, j = /[^ -~]/, Z = /\x2E|\u3002|\uFF0E|\uFF61/g, W = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" }, V = f - d, Q = Math.floor, q = String.fromCharCode;
            function K(G) {
              throw RangeError(W[G]);
            }
            function z(G, M) {
              for (var sA = G.length; sA--; )
                G[sA] = M(G[sA]);
              return G;
            }
            function $(G, M) {
              return z(G.split(Z), M).join(".");
            }
            function uA(G) {
              for (var M, sA, X = [], lA = 0, rA = G.length; lA < rA; )
                55296 <= (M = G.charCodeAt(lA++)) && M <= 56319 && lA < rA ? (64512 & (sA = G.charCodeAt(lA++))) == 56320 ? X.push(((1023 & M) << 10) + (1023 & sA) + 65536) : (X.push(M), lA--) : X.push(M);
              return X;
            }
            function AA(G) {
              return z(G, function(M) {
                var sA = "";
                return 65535 < M && (sA += q((M -= 65536) >>> 10 & 1023 | 55296), M = 56320 | 1023 & M), sA += q(M);
              }).join("");
            }
            function L(G, M) {
              return G + 22 + 75 * (G < 26) - ((M != 0) << 5);
            }
            function U(G, M, sA) {
              var X = 0;
              for (G = sA ? Q(G / F) : G >> 1, G += Q(G / M); V * C >> 1 < G; X += f)
                G = Q(G / V);
              return Q(X + (V + 1) * G / (G + m));
            }
            function P(G) {
              var M, sA, X, lA, rA, x, O, h, b, S, R, iA = [], cA = G.length, gA = 0, wA = H, pA = E;
              for ((sA = G.lastIndexOf(_)) < 0 && (sA = 0), X = 0; X < sA; ++X)
                128 <= G.charCodeAt(X) && K("not-basic"), iA.push(G.charCodeAt(X));
              for (lA = 0 < sA ? sA + 1 : 0; lA < cA; ) {
                for (rA = gA, x = 1, O = f; cA <= lA && K("invalid-input"), R = G.charCodeAt(lA++), (f <= (h = R - 48 < 10 ? R - 22 : R - 65 < 26 ? R - 65 : R - 97 < 26 ? R - 97 : f) || h > Q((w - gA) / x)) && K("overflow"), gA += h * x, !(h < (b = O <= pA ? d : pA + C <= O ? C : O - pA)); O += f)
                  x > Q(w / (S = f - b)) && K("overflow"), x *= S;
                pA = U(gA - rA, M = iA.length + 1, rA == 0), Q(gA / M) > w - wA && K("overflow"), wA += Q(gA / M), gA %= M, iA.splice(gA++, 0, wA);
              }
              return AA(iA);
            }
            function I(G) {
              var M, sA, X, lA, rA, x, O, h, b, S, R, iA, cA, gA, wA, pA = [];
              for (iA = (G = uA(G)).length, M = H, rA = E, x = sA = 0; x < iA; ++x)
                (R = G[x]) < 128 && pA.push(q(R));
              for (X = lA = pA.length, lA && pA.push(_); X < iA; ) {
                for (O = w, x = 0; x < iA; ++x)
                  M <= (R = G[x]) && R < O && (O = R);
                for (O - M > Q((w - sA) / (cA = X + 1)) && K("overflow"), sA += (O - M) * cA, M = O, x = 0; x < iA; ++x)
                  if ((R = G[x]) < M && ++sA > w && K("overflow"), R == M) {
                    for (h = sA, b = f; !(h < (S = b <= rA ? d : rA + C <= b ? C : b - rA)); b += f)
                      wA = h - S, gA = f - S, pA.push(q(L(S + wA % gA, 0))), h = Q(wA / gA);
                    pA.push(q(L(h, 0))), rA = U(sA, cA, X == lA), sA = 0, ++X;
                  }
                ++sA, ++M;
              }
              return pA.join("");
            }
            if (u = { version: "1.2.4", ucs2: { decode: uA, encode: AA }, decode: P, encode: I, toASCII: function(G) {
              return $(G, function(M) {
                return j.test(M) ? "xn--" + I(M) : M;
              });
            }, toUnicode: function(G) {
              return $(G, function(M) {
                return N.test(M) ? P(M.slice(4).toLowerCase()) : M;
              });
            } }, i && !i.nodeType)
              if (c)
                c.exports = u;
              else
                for (p in u)
                  u.hasOwnProperty(p) && (i[p] = u[p]);
            else
              n.punycode = u;
          })(this);
        }).call(this, typeof It < "u" ? It : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, {}], 2: [function(a, B, v) {
        var s = a("./log");
        function n(i, c) {
          for (var l = i.nodeType === 3 ? document.createTextNode(i.nodeValue) : i.cloneNode(!1), u = i.firstChild; u; )
            c !== !0 && u.nodeType === 1 && u.nodeName === "SCRIPT" || l.appendChild(n(u, c)), u = u.nextSibling;
          return i.nodeType === 1 && (l._scrollTop = i.scrollTop, l._scrollLeft = i.scrollLeft, i.nodeName === "CANVAS" ? function(p, w) {
            try {
              w && (w.width = p.width, w.height = p.height, w.getContext("2d").putImageData(p.getContext("2d").getImageData(0, 0, p.width, p.height), 0, 0));
            } catch (f) {
              s("Unable to copy canvas content from", p, f);
            }
          }(i, l) : i.nodeName !== "TEXTAREA" && i.nodeName !== "SELECT" || (l.value = i.value)), l;
        }
        B.exports = function(i, c, l, u, p, w, f) {
          var d = n(i.documentElement, p.javascriptEnabled), C = c.createElement("iframe");
          return C.className = "html2canvas-container", C.style.visibility = "hidden", C.style.position = "fixed", C.style.left = "-10000px", C.style.top = "0px", C.style.border = "0", C.width = l, C.height = u, C.scrolling = "no", c.body.appendChild(C), new Promise(function(m) {
            var F, E, H, _ = C.contentWindow.document;
            C.contentWindow.onload = C.onload = function() {
              var N = setInterval(function() {
                0 < _.body.childNodes.length && (function j(Z) {
                  if (Z.nodeType === 1) {
                    Z.scrollTop = Z._scrollTop, Z.scrollLeft = Z._scrollLeft;
                    for (var W = Z.firstChild; W; )
                      j(W), W = W.nextSibling;
                  }
                }(_.documentElement), clearInterval(N), p.type === "view" && (C.contentWindow.scrollTo(w, f), !/(iPad|iPhone|iPod)/g.test(navigator.userAgent) || C.contentWindow.scrollY === f && C.contentWindow.scrollX === w || (_.documentElement.style.top = -f + "px", _.documentElement.style.left = -w + "px", _.documentElement.style.position = "absolute")), m(C));
              }, 50);
            }, _.open(), _.write("<!DOCTYPE html><html></html>"), E = w, H = f, !(F = i).defaultView || E === F.defaultView.pageXOffset && H === F.defaultView.pageYOffset || F.defaultView.scrollTo(E, H), _.replaceChild(_.adoptNode(d), _.documentElement), _.close();
          });
        };
      }, { "./log": 13 }], 3: [function(a, B, v) {
        function s(p) {
          this.r = 0, this.g = 0, this.b = 0, this.a = null, this.fromArray(p) || this.namedColor(p) || this.rgb(p) || this.rgba(p) || this.hex6(p) || this.hex3(p);
        }
        s.prototype.darken = function(p) {
          var w = 1 - p;
          return new s([Math.round(this.r * w), Math.round(this.g * w), Math.round(this.b * w), this.a]);
        }, s.prototype.isTransparent = function() {
          return this.a === 0;
        }, s.prototype.isBlack = function() {
          return this.r === 0 && this.g === 0 && this.b === 0;
        }, s.prototype.fromArray = function(p) {
          return Array.isArray(p) && (this.r = Math.min(p[0], 255), this.g = Math.min(p[1], 255), this.b = Math.min(p[2], 255), 3 < p.length && (this.a = p[3])), Array.isArray(p);
        };
        var n = /^#([a-f0-9]{3})$/i;
        s.prototype.hex3 = function(p) {
          var w;
          return (w = p.match(n)) !== null && (this.r = parseInt(w[1][0] + w[1][0], 16), this.g = parseInt(w[1][1] + w[1][1], 16), this.b = parseInt(w[1][2] + w[1][2], 16)), w !== null;
        };
        var i = /^#([a-f0-9]{6})$/i;
        s.prototype.hex6 = function(p) {
          var w = null;
          return (w = p.match(i)) !== null && (this.r = parseInt(w[1].substring(0, 2), 16), this.g = parseInt(w[1].substring(2, 4), 16), this.b = parseInt(w[1].substring(4, 6), 16)), w !== null;
        };
        var c = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
        s.prototype.rgb = function(p) {
          var w;
          return (w = p.match(c)) !== null && (this.r = Number(w[1]), this.g = Number(w[2]), this.b = Number(w[3])), w !== null;
        };
        var l = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?\.?\d+)\s*\)$/;
        s.prototype.rgba = function(p) {
          var w;
          return (w = p.match(l)) !== null && (this.r = Number(w[1]), this.g = Number(w[2]), this.b = Number(w[3]), this.a = Number(w[4])), w !== null;
        }, s.prototype.toString = function() {
          return this.a !== null && this.a !== 1 ? "rgba(" + [this.r, this.g, this.b, this.a].join(",") + ")" : "rgb(" + [this.r, this.g, this.b].join(",") + ")";
        }, s.prototype.namedColor = function(p) {
          p = p.toLowerCase();
          var w = u[p];
          if (w)
            this.r = w[0], this.g = w[1], this.b = w[2];
          else if (p === "transparent")
            return this.r = this.g = this.b = this.a = 0, !0;
          return !!w;
        }, s.prototype.isColor = !0;
        var u = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] };
        B.exports = s;
      }, {}], 4: [function(a, B, v) {
        var s = a("./support"), n = a("./renderers/canvas"), i = a("./imageloader"), c = a("./nodeparser"), l = a("./nodecontainer"), u = a("./log"), p = a("./utils"), w = a("./clone"), f = a("./proxy").loadUrlDocument, d = p.getBounds, C = "data-html2canvas-node", m = 0;
        function F(N, j) {
          var Z, W, V = m++;
          if ((j = j || {}).logging && (u.options.logging = !0, u.options.start = Date.now()), j.async = j.async === void 0 || j.async, j.allowTaint = j.allowTaint !== void 0 && j.allowTaint, j.removeContainer = j.removeContainer === void 0 || j.removeContainer, j.javascriptEnabled = j.javascriptEnabled !== void 0 && j.javascriptEnabled, j.imageTimeout = j.imageTimeout === void 0 ? 1e4 : j.imageTimeout, j.renderer = typeof j.renderer == "function" ? j.renderer : n, j.strict = !!j.strict, typeof N == "string") {
            if (typeof j.proxy != "string")
              return Promise.reject("Proxy must be used when rendering url");
            var Q = j.width != null ? j.width : window.innerWidth, q = j.height != null ? j.height : window.innerHeight;
            return f((Z = N, W = document.createElement("a"), W.href = Z, W.href = W.href, W), j.proxy, document, Q, q, j).then(function(U) {
              return H(U.contentWindow.document.documentElement, U, j, Q, q);
            });
          }
          var K, z, $, uA, AA, L = (N === void 0 ? [document.documentElement] : N.length ? N : [N])[0];
          return L.setAttribute(C + V, V), (K = L.ownerDocument, z = j, $ = L.ownerDocument.defaultView.innerWidth, uA = L.ownerDocument.defaultView.innerHeight, AA = V, w(K, K, $, uA, z, K.defaultView.pageXOffset, K.defaultView.pageYOffset).then(function(U) {
            u("Document cloned");
            var P = C + AA, I = "[" + P + "='" + AA + "']";
            K.querySelector(I).removeAttribute(P);
            var G = U.contentWindow, M = G.document.querySelector(I), sA = typeof z.onclone == "function" ? Promise.resolve(z.onclone(G.document)) : Promise.resolve(!0);
            return sA.then(function() {
              return H(M, U, z, $, uA);
            });
          })).then(function(U) {
            return typeof j.onrendered == "function" && (u("options.onrendered is deprecated, html2canvas returns a Promise containing the canvas"), j.onrendered(U)), U;
          });
        }
        F.CanvasRenderer = n, F.NodeContainer = l, F.log = u, F.utils = p;
        var E = typeof document > "u" || typeof Object.create != "function" || typeof document.createElement("canvas").getContext != "function" ? function() {
          return Promise.reject("No canvas support");
        } : F;
        function H(N, j, Z, W, V) {
          var Q, q, K = j.contentWindow, z = new s(K.document), $ = new i(Z, z), uA = d(N), AA = Z.type === "view" ? W : (Q = K.document, Math.max(Math.max(Q.body.scrollWidth, Q.documentElement.scrollWidth), Math.max(Q.body.offsetWidth, Q.documentElement.offsetWidth), Math.max(Q.body.clientWidth, Q.documentElement.clientWidth))), L = Z.type === "view" ? V : (q = K.document, Math.max(Math.max(q.body.scrollHeight, q.documentElement.scrollHeight), Math.max(q.body.offsetHeight, q.documentElement.offsetHeight), Math.max(q.body.clientHeight, q.documentElement.clientHeight))), U = new Z.renderer(AA, L, $, Z, document);
          return new c(N, U, z, $, Z).ready.then(function() {
            var P, I;
            return u("Finished rendering"), P = Z.type === "view" ? _(U.canvas, { width: U.canvas.width, height: U.canvas.height, top: 0, left: 0, x: 0, y: 0 }) : N === K.document.body || N === K.document.documentElement || Z.canvas != null ? U.canvas : _(U.canvas, { width: Z.width != null ? Z.width : uA.width, height: Z.height != null ? Z.height : uA.height, top: uA.top, left: uA.left, x: 0, y: 0 }), I = j, Z.removeContainer && (I.parentNode.removeChild(I), u("Cleaned up container")), P;
          });
        }
        function _(N, j) {
          var Z = document.createElement("canvas"), W = Math.min(N.width - 1, Math.max(0, j.left)), V = Math.min(N.width, Math.max(1, j.left + j.width)), Q = Math.min(N.height - 1, Math.max(0, j.top)), q = Math.min(N.height, Math.max(1, j.top + j.height));
          Z.width = j.width, Z.height = j.height;
          var K = V - W, z = q - Q;
          return u("Cropping canvas at:", "left:", j.left, "top:", j.top, "width:", K, "height:", z), u("Resulting crop with width", j.width, "and height", j.height, "with x", W, "and y", Q), Z.getContext("2d").drawImage(N, W, Q, K, z, j.x, j.y, K, z), Z;
        }
        B.exports = E;
      }, { "./clone": 2, "./imageloader": 11, "./log": 13, "./nodecontainer": 14, "./nodeparser": 15, "./proxy": 16, "./renderers/canvas": 20, "./support": 22, "./utils": 26 }], 5: [function(a, B, v) {
        var s = a("./log"), n = a("./utils").smallImage;
        B.exports = function i(c) {
          if (this.src = c, s("DummyImageContainer for", c), !this.promise || !this.image) {
            s("Initiating DummyImageContainer"), i.prototype.image = new Image();
            var l = this.image;
            i.prototype.promise = new Promise(function(u, p) {
              l.onload = u, l.onerror = p, l.src = n(), l.complete === !0 && u(l);
            });
          }
        };
      }, { "./log": 13, "./utils": 26 }], 6: [function(a, B, v) {
        var s = a("./utils").smallImage;
        B.exports = function(n, i) {
          var c, l, u = document.createElement("div"), p = document.createElement("img"), w = document.createElement("span"), f = "Hidden Text";
          u.style.visibility = "hidden", u.style.fontFamily = n, u.style.fontSize = i, u.style.margin = 0, u.style.padding = 0, document.body.appendChild(u), p.src = s(), p.width = 1, p.height = 1, p.style.margin = 0, p.style.padding = 0, p.style.verticalAlign = "baseline", w.style.fontFamily = n, w.style.fontSize = i, w.style.margin = 0, w.style.padding = 0, w.appendChild(document.createTextNode(f)), u.appendChild(w), u.appendChild(p), c = p.offsetTop - w.offsetTop + 1, u.removeChild(w), u.appendChild(document.createTextNode(f)), u.style.lineHeight = "normal", p.style.verticalAlign = "super", l = p.offsetTop - u.offsetTop + 1, document.body.removeChild(u), this.baseline = c, this.lineWidth = 1, this.middle = l;
        };
      }, { "./utils": 26 }], 7: [function(a, B, v) {
        var s = a("./font");
        function n() {
          this.data = {};
        }
        n.prototype.getMetrics = function(i, c) {
          return this.data[i + "-" + c] === void 0 && (this.data[i + "-" + c] = new s(i, c)), this.data[i + "-" + c];
        }, B.exports = n;
      }, { "./font": 6 }], 8: [function(a, B, v) {
        var s = a("./utils").getBounds, n = a("./proxy").loadUrlDocument;
        function i(c, l, u) {
          this.image = null, this.src = c;
          var p = this, w = s(c);
          this.promise = (l ? new Promise(function(f) {
            c.contentWindow.document.URL === "about:blank" || c.contentWindow.document.documentElement == null ? c.contentWindow.onload = c.onload = function() {
              f(c);
            } : f(c);
          }) : this.proxyLoad(u.proxy, w, u)).then(function(f) {
            return a("./core")(f.contentWindow.document.documentElement, { type: "view", width: f.width, height: f.height, proxy: u.proxy, javascriptEnabled: u.javascriptEnabled, removeContainer: u.removeContainer, allowTaint: u.allowTaint, imageTimeout: u.imageTimeout / 2 });
          }).then(function(f) {
            return p.image = f;
          });
        }
        i.prototype.proxyLoad = function(c, l, u) {
          var p = this.src;
          return n(p.src, c, p.ownerDocument, l.width, l.height, u);
        }, B.exports = i;
      }, { "./core": 4, "./proxy": 16, "./utils": 26 }], 9: [function(a, B, v) {
        function s(n) {
          this.src = n.value, this.colorStops = [], this.type = null, this.x0 = 0.5, this.y0 = 0.5, this.x1 = 0.5, this.y1 = 0.5, this.promise = Promise.resolve(!0);
        }
        s.TYPES = { LINEAR: 1, RADIAL: 2 }, s.REGEXP_COLORSTOP = /^\s*(rgba?\(\s*\d{1,3},\s*\d{1,3},\s*\d{1,3}(?:,\s*[0-9\.]+)?\s*\)|[a-z]{3,20}|#[a-f0-9]{3,6})(?:\s+(\d{1,3}(?:\.\d+)?)(%|px)?)?(?:\s|$)/i, B.exports = s;
      }, {}], 10: [function(a, B, v) {
        B.exports = function(s, n) {
          this.src = s, this.image = new Image();
          var i = this;
          this.tainted = null, this.promise = new Promise(function(c, l) {
            i.image.onload = c, i.image.onerror = l, n && (i.image.crossOrigin = "anonymous"), i.image.src = s, i.image.complete === !0 && c(i.image);
          });
        };
      }, {}], 11: [function(a, B, v) {
        var s = a("./log"), n = a("./imagecontainer"), i = a("./dummyimagecontainer"), c = a("./proxyimagecontainer"), l = a("./framecontainer"), u = a("./svgcontainer"), p = a("./svgnodecontainer"), w = a("./lineargradientcontainer"), f = a("./webkitgradientcontainer"), d = a("./utils").bind;
        function C(m, F) {
          this.link = null, this.options = m, this.support = F, this.origin = this.getOrigin(window.location.href);
        }
        C.prototype.findImages = function(m) {
          var F = [];
          return m.reduce(function(E, H) {
            switch (H.node.nodeName) {
              case "IMG":
                return E.concat([{ args: [H.node.src], method: "url" }]);
              case "svg":
              case "IFRAME":
                return E.concat([{ args: [H.node], method: H.node.nodeName }]);
            }
            return E;
          }, []).forEach(this.addImage(F, this.loadImage), this), F;
        }, C.prototype.findBackgroundImage = function(m, F) {
          return F.parseBackgroundImages().filter(this.hasImageBackground).forEach(this.addImage(m, this.loadImage), this), m;
        }, C.prototype.addImage = function(m, F) {
          return function(E) {
            E.args.forEach(function(H) {
              this.imageExists(m, H) || (m.splice(0, 0, F.call(this, E)), s("Added image #" + m.length, typeof H == "string" ? H.substring(0, 100) : H));
            }, this);
          };
        }, C.prototype.hasImageBackground = function(m) {
          return m.method !== "none";
        }, C.prototype.loadImage = function(m) {
          if (m.method === "url") {
            var F = m.args[0];
            return !this.isSVG(F) || this.support.svg || this.options.allowTaint ? F.match(/data:image\/.*;base64,/i) ? new n(F.replace(/url\(['"]{0,}|['"]{0,}\)$/gi, ""), !1) : this.isSameOrigin(F) || this.options.allowTaint === !0 || this.isSVG(F) ? new n(F, !1) : this.support.cors && !this.options.allowTaint && this.options.useCORS ? new n(F, !0) : this.options.proxy ? new c(F, this.options.proxy) : new i(F) : new u(F);
          }
          return m.method === "linear-gradient" ? new w(m) : m.method === "gradient" ? new f(m) : m.method === "svg" ? new p(m.args[0], this.support.svg) : m.method === "IFRAME" ? new l(m.args[0], this.isSameOrigin(m.args[0].src), this.options) : new i(m);
        }, C.prototype.isSVG = function(m) {
          return m.substring(m.length - 3).toLowerCase() === "svg" || u.prototype.isInline(m);
        }, C.prototype.imageExists = function(m, F) {
          return m.some(function(E) {
            return E.src === F;
          });
        }, C.prototype.isSameOrigin = function(m) {
          return this.getOrigin(m) === this.origin;
        }, C.prototype.getOrigin = function(m) {
          var F = this.link || (this.link = document.createElement("a"));
          return F.href = m, F.href = F.href, F.protocol + F.hostname + F.port;
        }, C.prototype.getPromise = function(m) {
          return this.timeout(m, this.options.imageTimeout).catch(function() {
            return new i(m.src).promise.then(function(F) {
              m.image = F;
            });
          });
        }, C.prototype.get = function(m) {
          var F = null;
          return this.images.some(function(E) {
            return (F = E).src === m;
          }) ? F : null;
        }, C.prototype.fetch = function(m) {
          return this.images = m.reduce(d(this.findBackgroundImage, this), this.findImages(m)), this.images.forEach(function(F, E) {
            F.promise.then(function() {
              s("Succesfully loaded image #" + (E + 1), F);
            }, function(H) {
              s("Failed loading image #" + (E + 1), F, H);
            });
          }), this.ready = Promise.all(this.images.map(this.getPromise, this)), s("Finished searching images"), this;
        }, C.prototype.timeout = function(m, F) {
          var E, H = Promise.race([m.promise, new Promise(function(_, N) {
            E = setTimeout(function() {
              s("Timed out loading image", m), N(m);
            }, F);
          })]).then(function(_) {
            return clearTimeout(E), _;
          });
          return H.catch(function() {
            clearTimeout(E);
          }), H;
        }, B.exports = C;
      }, { "./dummyimagecontainer": 5, "./framecontainer": 8, "./imagecontainer": 10, "./lineargradientcontainer": 12, "./log": 13, "./proxyimagecontainer": 17, "./svgcontainer": 23, "./svgnodecontainer": 24, "./utils": 26, "./webkitgradientcontainer": 27 }], 12: [function(a, B, v) {
        var s = a("./gradientcontainer"), n = a("./color");
        function i(c) {
          s.apply(this, arguments), this.type = s.TYPES.LINEAR;
          var l = i.REGEXP_DIRECTION.test(c.args[0]) || !s.REGEXP_COLORSTOP.test(c.args[0]);
          l ? c.args[0].split(/\s+/).reverse().forEach(function(u, p) {
            switch (u) {
              case "left":
                this.x0 = 0, this.x1 = 1;
                break;
              case "top":
                this.y0 = 0, this.y1 = 1;
                break;
              case "right":
                this.x0 = 1, this.x1 = 0;
                break;
              case "bottom":
                this.y0 = 1, this.y1 = 0;
                break;
              case "to":
                var w = this.y0, f = this.x0;
                this.y0 = this.y1, this.x0 = this.x1, this.x1 = f, this.y1 = w;
                break;
              case "center":
                break;
              default:
                var d = 0.01 * parseFloat(u, 10);
                if (isNaN(d))
                  break;
                p === 0 ? (this.y0 = d, this.y1 = 1 - this.y0) : (this.x0 = d, this.x1 = 1 - this.x0);
            }
          }, this) : (this.y0 = 0, this.y1 = 1), this.colorStops = c.args.slice(l ? 1 : 0).map(function(u) {
            var p = u.match(s.REGEXP_COLORSTOP), w = +p[2], f = w === 0 ? "%" : p[3];
            return { color: new n(p[1]), stop: f === "%" ? w / 100 : null };
          }), this.colorStops[0].stop === null && (this.colorStops[0].stop = 0), this.colorStops[this.colorStops.length - 1].stop === null && (this.colorStops[this.colorStops.length - 1].stop = 1), this.colorStops.forEach(function(u, p) {
            u.stop === null && this.colorStops.slice(p).some(function(w, f) {
              return w.stop !== null && (u.stop = (w.stop - this.colorStops[p - 1].stop) / (f + 1) + this.colorStops[p - 1].stop, !0);
            }, this);
          }, this);
        }
        i.prototype = Object.create(s.prototype), i.REGEXP_DIRECTION = /^\s*(?:to|left|right|top|bottom|center|\d{1,3}(?:\.\d+)?%?)(?:\s|$)/i, B.exports = i;
      }, { "./color": 3, "./gradientcontainer": 9 }], 13: [function(a, B, v) {
        var s = function() {
          s.options.logging && window.console && window.console.log && Function.prototype.bind.call(window.console.log, window.console).apply(window.console, [Date.now() - s.options.start + "ms", "html2canvas:"].concat([].slice.call(arguments, 0)));
        };
        s.options = { logging: !1 }, B.exports = s;
      }, {}], 14: [function(a, B, v) {
        var s = a("./color"), n = a("./utils"), i = n.getBounds, c = n.parseBackgrounds, l = n.offsetBounds;
        function u(d, C) {
          this.node = d, this.parent = C, this.stack = null, this.bounds = null, this.borders = null, this.clip = [], this.backgroundClip = [], this.offsetBounds = null, this.visible = null, this.computedStyles = null, this.colors = {}, this.styles = {}, this.backgroundImages = null, this.transformData = null, this.transformMatrix = null, this.isPseudoElement = !1, this.opacity = null;
        }
        function p(d) {
          return d.toString().indexOf("%") !== -1;
        }
        function w(d) {
          return d.replace("px", "");
        }
        function f(d) {
          return parseFloat(d);
        }
        u.prototype.cloneTo = function(d) {
          d.visible = this.visible, d.borders = this.borders, d.bounds = this.bounds, d.clip = this.clip, d.backgroundClip = this.backgroundClip, d.computedStyles = this.computedStyles, d.styles = this.styles, d.backgroundImages = this.backgroundImages, d.opacity = this.opacity;
        }, u.prototype.getOpacity = function() {
          return this.opacity === null ? this.opacity = this.cssFloat("opacity") : this.opacity;
        }, u.prototype.assignStack = function(d) {
          (this.stack = d).children.push(this);
        }, u.prototype.isElementVisible = function() {
          return this.node.nodeType === Node.TEXT_NODE ? this.parent.visible : this.css("display") !== "none" && this.css("visibility") !== "hidden" && !this.node.hasAttribute("data-html2canvas-ignore") && (this.node.nodeName !== "INPUT" || this.node.getAttribute("type") !== "hidden");
        }, u.prototype.css = function(d) {
          return this.computedStyles || (this.computedStyles = this.isPseudoElement ? this.parent.computedStyle(this.before ? ":before" : ":after") : this.computedStyle(null)), this.styles[d] || (this.styles[d] = this.computedStyles[d]);
        }, u.prototype.prefixedCss = function(d) {
          var C = this.css(d);
          return C === void 0 && ["webkit", "moz", "ms", "o"].some(function(m) {
            return (C = this.css(m + d.substr(0, 1).toUpperCase() + d.substr(1))) !== void 0;
          }, this), C === void 0 ? null : C;
        }, u.prototype.computedStyle = function(d) {
          return this.node.ownerDocument.defaultView.getComputedStyle(this.node, d);
        }, u.prototype.cssInt = function(d) {
          var C = parseInt(this.css(d), 10);
          return isNaN(C) ? 0 : C;
        }, u.prototype.color = function(d) {
          return this.colors[d] || (this.colors[d] = new s(this.css(d)));
        }, u.prototype.cssFloat = function(d) {
          var C = parseFloat(this.css(d));
          return isNaN(C) ? 0 : C;
        }, u.prototype.fontWeight = function() {
          var d = this.css("fontWeight");
          switch (parseInt(d, 10)) {
            case 401:
              d = "bold";
              break;
            case 400:
              d = "normal";
          }
          return d;
        }, u.prototype.parseClip = function() {
          var d = this.css("clip").match(this.CLIP);
          return d ? { top: parseInt(d[1], 10), right: parseInt(d[2], 10), bottom: parseInt(d[3], 10), left: parseInt(d[4], 10) } : null;
        }, u.prototype.parseBackgroundImages = function() {
          return this.backgroundImages || (this.backgroundImages = c(this.css("backgroundImage")));
        }, u.prototype.cssList = function(d, C) {
          var m = (this.css(d) || "").split(",");
          return (m = (m = m[C || 0] || m[0] || "auto").trim().split(" ")).length === 1 && (m = [m[0], p(m[0]) ? "auto" : m[0]]), m;
        }, u.prototype.parseBackgroundSize = function(d, C, m) {
          var F, E, H = this.cssList("backgroundSize", m);
          if (p(H[0]))
            F = d.width * parseFloat(H[0]) / 100;
          else {
            if (/contain|cover/.test(H[0])) {
              var _ = d.width / d.height, N = C.width / C.height;
              return _ < N ^ H[0] === "contain" ? { width: d.height * N, height: d.height } : { width: d.width, height: d.width / N };
            }
            F = parseInt(H[0], 10);
          }
          return E = H[0] === "auto" && H[1] === "auto" ? C.height : H[1] === "auto" ? F / C.width * C.height : p(H[1]) ? d.height * parseFloat(H[1]) / 100 : parseInt(H[1], 10), H[0] === "auto" && (F = E / C.height * C.width), { width: F, height: E };
        }, u.prototype.parseBackgroundPosition = function(d, C, m, F) {
          var E, H, _ = this.cssList("backgroundPosition", m);
          return E = p(_[0]) ? (d.width - (F || C).width) * (parseFloat(_[0]) / 100) : parseInt(_[0], 10), H = _[1] === "auto" ? E / C.width * C.height : p(_[1]) ? (d.height - (F || C).height) * parseFloat(_[1]) / 100 : parseInt(_[1], 10), _[0] === "auto" && (E = H / C.height * C.width), { left: E, top: H };
        }, u.prototype.parseBackgroundRepeat = function(d) {
          return this.cssList("backgroundRepeat", d)[0];
        }, u.prototype.parseTextShadows = function() {
          var d = this.css("textShadow"), C = [];
          if (d && d !== "none")
            for (var m = d.match(this.TEXT_SHADOW_PROPERTY), F = 0; m && F < m.length; F++) {
              var E = m[F].match(this.TEXT_SHADOW_VALUES);
              C.push({ color: new s(E[0]), offsetX: E[1] ? parseFloat(E[1].replace("px", "")) : 0, offsetY: E[2] ? parseFloat(E[2].replace("px", "")) : 0, blur: E[3] ? E[3].replace("px", "") : 0 });
            }
          return C;
        }, u.prototype.parseTransform = function() {
          if (!this.transformData)
            if (this.hasTransform()) {
              var d = this.parseBounds(), C = this.prefixedCss("transformOrigin").split(" ").map(w).map(f);
              C[0] += d.left, C[1] += d.top, this.transformData = { origin: C, matrix: this.parseTransformMatrix() };
            } else
              this.transformData = { origin: [0, 0], matrix: [1, 0, 0, 1, 0, 0] };
          return this.transformData;
        }, u.prototype.parseTransformMatrix = function() {
          if (!this.transformMatrix) {
            var d = this.prefixedCss("transform"), C = d ? function(m) {
              {
                if (m && m[1] === "matrix")
                  return m[2].split(",").map(function(E) {
                    return parseFloat(E.trim());
                  });
                if (m && m[1] === "matrix3d") {
                  var F = m[2].split(",").map(function(E) {
                    return parseFloat(E.trim());
                  });
                  return [F[0], F[1], F[4], F[5], F[12], F[13]];
                }
              }
            }(d.match(this.MATRIX_PROPERTY)) : null;
            this.transformMatrix = C || [1, 0, 0, 1, 0, 0];
          }
          return this.transformMatrix;
        }, u.prototype.parseBounds = function() {
          return this.bounds || (this.bounds = this.hasTransform() ? l(this.node) : i(this.node));
        }, u.prototype.hasTransform = function() {
          return this.parseTransformMatrix().join(",") !== "1,0,0,1,0,0" || this.parent && this.parent.hasTransform();
        }, u.prototype.getValue = function() {
          var d, C, m = this.node.value || "";
          return this.node.tagName === "SELECT" ? (d = this.node, m = (C = d.options[d.selectedIndex || 0]) && C.text || "") : this.node.type === "password" && (m = Array(m.length + 1).join("•")), m.length === 0 ? this.node.placeholder || "" : m;
        }, u.prototype.MATRIX_PROPERTY = /(matrix|matrix3d)\((.+)\)/, u.prototype.TEXT_SHADOW_PROPERTY = /((rgba|rgb)\([^\)]+\)(\s-?\d+px){0,})/g, u.prototype.TEXT_SHADOW_VALUES = /(-?\d+px)|(#.+)|(rgb\(.+\))|(rgba\(.+\))/g, u.prototype.CLIP = /^rect\((\d+)px,? (\d+)px,? (\d+)px,? (\d+)px\)$/, B.exports = u;
      }, { "./color": 3, "./utils": 26 }], 15: [function(a, B, v) {
        var s = a("./log"), n = a("punycode"), i = a("./nodecontainer"), c = a("./textcontainer"), l = a("./pseudoelementcontainer"), u = a("./fontmetrics"), p = a("./color"), w = a("./stackingcontext"), f = a("./utils"), d = f.bind, C = f.getBounds, m = f.parseBackgrounds, F = f.offsetBounds;
        function E(h, b, S, R, iA) {
          s("Starting NodeParser"), this.renderer = b, this.options = iA, this.range = null, this.support = S, this.renderQueue = [], this.stack = new w(!0, 1, h.ownerDocument, null);
          var cA = new i(h, null);
          if (iA.background && b.rectangle(0, 0, b.width, b.height, new p(iA.background)), h === h.ownerDocument.documentElement) {
            var gA = new i(cA.color("backgroundColor").isTransparent() ? h.ownerDocument.body : h.ownerDocument.documentElement, null);
            b.rectangle(0, 0, b.width, b.height, gA.color("backgroundColor"));
          }
          cA.visibile = cA.isElementVisible(), this.createPseudoHideStyles(h.ownerDocument), this.disableAnimations(h.ownerDocument), this.nodes = O([cA].concat(this.getChildren(cA)).filter(function(wA) {
            return wA.visible = wA.isElementVisible();
          }).map(this.getPseudoElements, this)), this.fontMetrics = new u(), s("Fetched nodes, total:", this.nodes.length), s("Calculate overflow clips"), this.calculateOverflowClips(), s("Start fetching images"), this.images = R.fetch(this.nodes.filter(M)), this.ready = this.images.ready.then(d(function() {
            return s("Images loaded, starting parsing"), s("Creating stacking contexts"), this.createStackingContexts(), s("Sorting stacking contexts"), this.sortStackingContexts(this.stack), this.parse(this.stack), s("Render queue created with " + this.renderQueue.length + " items"), new Promise(d(function(wA) {
              iA.async ? typeof iA.async == "function" ? iA.async.call(this, this.renderQueue, wA) : 0 < this.renderQueue.length ? (this.renderIndex = 0, this.asyncRenderer(this.renderQueue, wA)) : wA() : (this.renderQueue.forEach(this.paint, this), wA());
            }, this));
          }, this));
        }
        function H(h) {
          return h.parent && h.parent.clip.length;
        }
        function _() {
        }
        E.prototype.calculateOverflowClips = function() {
          this.nodes.forEach(function(h) {
            if (M(h)) {
              sA(h) && h.appendToDOM(), h.borders = this.parseBorders(h);
              var b = h.css("overflow") === "hidden" ? [h.borders.clip] : [], S = h.parseClip();
              S && ["absolute", "fixed"].indexOf(h.css("position")) !== -1 && b.push([["rect", h.bounds.left + S.left, h.bounds.top + S.top, S.right - S.left, S.bottom - S.top]]), h.clip = H(h) ? h.parent.clip.concat(b) : b, h.backgroundClip = h.css("overflow") !== "hidden" ? h.clip.concat([h.borders.clip]) : h.clip, sA(h) && h.cleanDOM();
            } else
              X(h) && (h.clip = H(h) ? h.parent.clip : []);
            sA(h) || (h.bounds = null);
          }, this);
        }, E.prototype.asyncRenderer = function(h, b, S) {
          S = S || Date.now(), this.paint(h[this.renderIndex++]), h.length === this.renderIndex ? b() : S + 20 > Date.now() ? this.asyncRenderer(h, b, S) : setTimeout(d(function() {
            this.asyncRenderer(h, b);
          }, this), 0);
        }, E.prototype.createPseudoHideStyles = function(h) {
          this.createStyles(h, "." + l.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + ':before { content: "" !important; display: none !important; }.' + l.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER + ':after { content: "" !important; display: none !important; }');
        }, E.prototype.disableAnimations = function(h) {
          this.createStyles(h, "* { -webkit-animation: none !important; -moz-animation: none !important; -o-animation: none !important; animation: none !important; -webkit-transition: none !important; -moz-transition: none !important; -o-transition: none !important; transition: none !important;}");
        }, E.prototype.createStyles = function(h, b) {
          var S = h.createElement("style");
          S.innerHTML = b, h.body.appendChild(S);
        }, E.prototype.getPseudoElements = function(h) {
          var b = [[h]];
          if (h.node.nodeType === Node.ELEMENT_NODE) {
            var S = this.getPseudoElement(h, ":before"), R = this.getPseudoElement(h, ":after");
            S && b.push(S), R && b.push(R);
          }
          return O(b);
        }, E.prototype.getPseudoElement = function(h, b) {
          var S = h.computedStyle(b);
          if (!S || !S.content || S.content === "none" || S.content === "-moz-alt-content" || S.display === "none")
            return null;
          for (var R, iA, cA = (R = S.content, (iA = R.substr(0, 1)) === R.substr(R.length - 1) && iA.match(/'|"/) ? R.substr(1, R.length - 2) : R), gA = cA.substr(0, 3) === "url", wA = document.createElement(gA ? "img" : "html2canvaspseudoelement"), pA = new l(wA, h, b), UA = S.length - 1; 0 <= UA; UA--) {
            var vA = S.item(UA).replace(/(\-[a-z])/g, function(nA) {
              return nA.toUpperCase().replace("-", "");
            });
            wA.style[vA] = S[vA];
          }
          if (wA.className = l.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + " " + l.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER, gA)
            return wA.src = m(cA)[0].args[0], [pA];
          var TA = document.createTextNode(cA);
          return wA.appendChild(TA), [pA, new c(TA, pA)];
        }, E.prototype.getChildren = function(h) {
          return O([].filter.call(h.node.childNodes, U).map(function(b) {
            var S = [b.nodeType === Node.TEXT_NODE ? new c(b, h) : new i(b, h)].filter(x);
            return b.nodeType === Node.ELEMENT_NODE && S.length && b.tagName !== "TEXTAREA" ? S[0].isElementVisible() ? S.concat(this.getChildren(S[0])) : [] : S;
          }, this));
        }, E.prototype.newStackingContext = function(h, b) {
          var S = new w(b, h.getOpacity(), h.node, h.parent);
          h.cloneTo(S), (b ? S.getParentStack(this) : S.parent.stack).contexts.push(S), h.stack = S;
        }, E.prototype.createStackingContexts = function() {
          this.nodes.forEach(function(h) {
            var b, S;
            M(h) && (this.isRootElement(h) || h.getOpacity() < 1 || (S = (b = h).css("position"), (["absolute", "relative", "fixed"].indexOf(S) !== -1 ? b.css("zIndex") : "auto") !== "auto") || this.isBodyWithTransparentRoot(h) || h.hasTransform()) ? this.newStackingContext(h, !0) : M(h) && (P(h) && $(h) || ["inline-block", "inline-table"].indexOf(h.css("display")) !== -1 || I(h)) ? this.newStackingContext(h, !1) : h.assignStack(h.parent.stack);
          }, this);
        }, E.prototype.isBodyWithTransparentRoot = function(h) {
          return h.node.nodeName === "BODY" && h.parent.color("backgroundColor").isTransparent();
        }, E.prototype.isRootElement = function(h) {
          return h.parent === null;
        }, E.prototype.sortStackingContexts = function(h) {
          var b;
          h.contexts.sort((b = h.contexts.slice(0), function(S, R) {
            return S.cssInt("zIndex") + b.indexOf(S) / b.length - (R.cssInt("zIndex") + b.indexOf(R) / b.length);
          })), h.contexts.forEach(this.sortStackingContexts, this);
        }, E.prototype.parseTextBounds = function(h) {
          return function(b, S, R) {
            if (h.parent.css("textDecoration").substr(0, 4) !== "none" || b.trim().length !== 0) {
              if (this.support.rangeBounds && !h.parent.hasTransform()) {
                var iA = R.slice(0, S).join("").length;
                return this.getRangeBounds(h.node, iA, b.length);
              }
              if (h.node && typeof h.node.data == "string") {
                var cA = h.node.splitText(b.length), gA = this.getWrapperBounds(h.node, h.parent.hasTransform());
                return h.node = cA, gA;
              }
            } else
              this.support.rangeBounds && !h.parent.hasTransform() || (h.node = h.node.splitText(b.length));
            return {};
          };
        }, E.prototype.getWrapperBounds = function(h, b) {
          var S = h.ownerDocument.createElement("html2canvaswrapper"), R = h.parentNode, iA = h.cloneNode(!0);
          S.appendChild(h.cloneNode(!0)), R.replaceChild(S, h);
          var cA = b ? F(S) : C(S);
          return R.replaceChild(iA, S), cA;
        }, E.prototype.getRangeBounds = function(h, b, S) {
          var R = this.range || (this.range = h.ownerDocument.createRange());
          return R.setStart(h, b), R.setEnd(h, b + S), R.getBoundingClientRect();
        }, E.prototype.parse = function(h) {
          var b = h.contexts.filter(K), S = h.children.filter(M), R = S.filter(G(I)), iA = R.filter(G(P)).filter(G(uA)), cA = S.filter(G(P)).filter(I), gA = R.filter(G(P)).filter(uA), wA = h.contexts.concat(R.filter(P)).filter($), pA = h.children.filter(X).filter(L), UA = h.contexts.filter(z);
          b.concat(iA).concat(cA).concat(gA).concat(wA).concat(pA).concat(UA).forEach(function(vA) {
            this.renderQueue.push(vA), AA(vA) && (this.parse(vA), this.renderQueue.push(new _()));
          }, this);
        }, E.prototype.paint = function(h) {
          try {
            h instanceof _ ? this.renderer.ctx.restore() : X(h) ? (sA(h.parent) && h.parent.appendToDOM(), this.paintText(h), sA(h.parent) && h.parent.cleanDOM()) : this.paintNode(h);
          } catch (b) {
            if (s(b), this.options.strict)
              throw b;
          }
        }, E.prototype.paintNode = function(h) {
          AA(h) && (this.renderer.setOpacity(h.opacity), this.renderer.ctx.save(), h.hasTransform() && this.renderer.setTransform(h.parseTransform())), h.node.nodeName === "INPUT" && h.node.type === "checkbox" ? this.paintCheckbox(h) : h.node.nodeName === "INPUT" && h.node.type === "radio" ? this.paintRadio(h) : this.paintElement(h);
        }, E.prototype.paintElement = function(h) {
          var b = h.parseBounds();
          this.renderer.clip(h.backgroundClip, function() {
            this.renderer.renderBackground(h, b, h.borders.borders.map(rA));
          }, this), this.renderer.clip(h.clip, function() {
            this.renderer.renderBorders(h.borders.borders);
          }, this), this.renderer.clip(h.backgroundClip, function() {
            switch (h.node.nodeName) {
              case "svg":
              case "IFRAME":
                var S = this.images.get(h.node);
                S ? this.renderer.renderImage(h, b, h.borders, S) : s("Error loading <" + h.node.nodeName + ">", h.node);
                break;
              case "IMG":
                var R = this.images.get(h.node.src);
                R ? this.renderer.renderImage(h, b, h.borders, R) : s("Error loading <img>", h.node.src);
                break;
              case "CANVAS":
                this.renderer.renderImage(h, b, h.borders, { image: h.node });
                break;
              case "SELECT":
              case "INPUT":
              case "TEXTAREA":
                this.paintFormValue(h);
            }
          }, this);
        }, E.prototype.paintCheckbox = function(h) {
          var b = h.parseBounds(), S = Math.min(b.width, b.height), R = { width: S - 1, height: S - 1, top: b.top, left: b.left }, iA = [3, 3], cA = [iA, iA, iA, iA], gA = [1, 1, 1, 1].map(function(pA) {
            return { color: new p("#A5A5A5"), width: pA };
          }), wA = W(R, cA, gA);
          this.renderer.clip(h.backgroundClip, function() {
            this.renderer.rectangle(R.left + 1, R.top + 1, R.width - 2, R.height - 2, new p("#DEDEDE")), this.renderer.renderBorders(j(gA, R, wA, cA)), h.node.checked && (this.renderer.font(new p("#424242"), "normal", "normal", "bold", S - 3 + "px", "arial"), this.renderer.text("✔", R.left + S / 6, R.top + S - 1));
          }, this);
        }, E.prototype.paintRadio = function(h) {
          var b = h.parseBounds(), S = Math.min(b.width, b.height) - 2;
          this.renderer.clip(h.backgroundClip, function() {
            this.renderer.circleStroke(b.left + 1, b.top + 1, S, new p("#DEDEDE"), 1, new p("#A5A5A5")), h.node.checked && this.renderer.circle(Math.ceil(b.left + S / 4) + 1, Math.ceil(b.top + S / 4) + 1, Math.floor(S / 2), new p("#424242"));
          }, this);
        }, E.prototype.paintFormValue = function(h) {
          var b = h.getValue();
          if (0 < b.length) {
            var S = h.node.ownerDocument, R = S.createElement("html2canvaswrapper");
            ["lineHeight", "textAlign", "fontFamily", "fontWeight", "fontSize", "color", "paddingLeft", "paddingTop", "paddingRight", "paddingBottom", "width", "height", "borderLeftStyle", "borderTopStyle", "borderLeftWidth", "borderTopWidth", "boxSizing", "whiteSpace", "wordWrap"].forEach(function(cA) {
              try {
                R.style[cA] = h.css(cA);
              } catch (gA) {
                s("html2canvas: Parse: Exception caught in renderFormValue: " + gA.message);
              }
            });
            var iA = h.parseBounds();
            R.style.position = "fixed", R.style.left = iA.left + "px", R.style.top = iA.top + "px", R.textContent = b, S.body.appendChild(R), this.paintText(new c(R.firstChild, h)), S.body.removeChild(R);
          }
        }, E.prototype.paintText = function(h) {
          h.applyTextTransform();
          var b, S = n.ucs2.decode(h.node.data), R = this.options.letterRendering && !/^(normal|none|0px)$/.test(h.parent.css("letterSpacing")) || (b = h.node.data, /[^\u0000-\u00ff]/.test(b)) ? S.map(function(pA) {
            return n.ucs2.encode([pA]);
          }) : function(pA) {
            for (var UA, vA = [], TA = 0, nA = !1; pA.length; )
              ot = pA[TA], [32, 13, 10, 9, 45].indexOf(ot) !== -1 === nA ? ((UA = pA.splice(0, TA)).length && vA.push(n.ucs2.encode(UA)), nA = !nA, TA = 0) : TA++, TA >= pA.length && (UA = pA.splice(0, TA)).length && vA.push(n.ucs2.encode(UA));
            var ot;
            return vA;
          }(S), iA = h.parent.fontWeight(), cA = h.parent.css("fontSize"), gA = h.parent.css("fontFamily"), wA = h.parent.parseTextShadows();
          this.renderer.font(h.parent.color("color"), h.parent.css("fontStyle"), h.parent.css("fontVariant"), iA, cA, gA), wA.length ? this.renderer.fontShadow(wA[0].color, wA[0].offsetX, wA[0].offsetY, wA[0].blur) : this.renderer.clearShadow(), this.renderer.clip(h.parent.clip, function() {
            R.map(this.parseTextBounds(h), this).forEach(function(pA, UA) {
              pA && /^\s*$/.test(R[UA]) === !1 && (this.renderer.text(R[UA], pA.left, pA.bottom), this.renderTextDecoration(h.parent, pA, this.fontMetrics.getMetrics(gA, cA)));
            }, this);
          }, this);
        }, E.prototype.renderTextDecoration = function(h, b, S) {
          switch (h.css("textDecoration").split(" ")[0]) {
            case "underline":
              this.renderer.rectangle(b.left, Math.round(b.top + S.baseline + S.lineWidth), b.width, 1, h.color("color"));
              break;
            case "overline":
              this.renderer.rectangle(b.left, Math.round(b.top), b.width, 1, h.color("color"));
              break;
            case "line-through":
              this.renderer.rectangle(b.left, Math.ceil(b.top + S.middle + S.lineWidth), b.width, 1, h.color("color"));
          }
        };
        var N = { inset: [["darken", 0.6], ["darken", 0.1], ["darken", 0.1], ["darken", 0.6]] };
        function j(h, b, S, R) {
          return h.map(function(iA, cA) {
            if (0 < iA.width) {
              var gA = b.left, wA = b.top, pA = b.width, UA = b.height - h[2].width;
              switch (cA) {
                case 0:
                  UA = h[0].width, iA.args = Q({ c1: [gA, wA], c2: [gA + pA, wA], c3: [gA + pA - h[1].width, wA + UA], c4: [gA + h[3].width, wA + UA] }, R[0], R[1], S.topLeftOuter, S.topLeftInner, S.topRightOuter, S.topRightInner);
                  break;
                case 1:
                  gA = b.left + b.width - h[1].width, pA = h[1].width, iA.args = Q({ c1: [gA + pA, wA], c2: [gA + pA, wA + UA + h[2].width], c3: [gA, wA + UA], c4: [gA, wA + h[0].width] }, R[1], R[2], S.topRightOuter, S.topRightInner, S.bottomRightOuter, S.bottomRightInner);
                  break;
                case 2:
                  wA = wA + b.height - h[2].width, UA = h[2].width, iA.args = Q({ c1: [gA + pA, wA + UA], c2: [gA, wA + UA], c3: [gA + h[3].width, wA], c4: [gA + pA - h[3].width, wA] }, R[2], R[3], S.bottomRightOuter, S.bottomRightInner, S.bottomLeftOuter, S.bottomLeftInner);
                  break;
                case 3:
                  pA = h[3].width, iA.args = Q({ c1: [gA, wA + UA + h[2].width], c2: [gA, wA], c3: [gA + pA, wA + h[0].width], c4: [gA + pA, wA + UA] }, R[3], R[0], S.bottomLeftOuter, S.bottomLeftInner, S.topLeftOuter, S.topLeftInner);
              }
            }
            return iA;
          });
        }
        function Z(h, b, S, R) {
          var iA = (Math.sqrt(2) - 1) / 3 * 4, cA = S * iA, gA = R * iA, wA = h + S, pA = b + R;
          return { topLeft: V({ x: h, y: pA }, { x: h, y: pA - gA }, { x: wA - cA, y: b }, { x: wA, y: b }), topRight: V({ x: h, y: b }, { x: h + cA, y: b }, { x: wA, y: pA - gA }, { x: wA, y: pA }), bottomRight: V({ x: wA, y: b }, { x: wA, y: b + gA }, { x: h + cA, y: pA }, { x: h, y: pA }), bottomLeft: V({ x: wA, y: pA }, { x: wA - cA, y: pA }, { x: h, y: b + gA }, { x: h, y: b }) };
        }
        function W(h, b, S) {
          var R = h.left, iA = h.top, cA = h.width, gA = h.height, wA = b[0][0] < cA / 2 ? b[0][0] : cA / 2, pA = b[0][1] < gA / 2 ? b[0][1] : gA / 2, UA = b[1][0] < cA / 2 ? b[1][0] : cA / 2, vA = b[1][1] < gA / 2 ? b[1][1] : gA / 2, TA = b[2][0] < cA / 2 ? b[2][0] : cA / 2, nA = b[2][1] < gA / 2 ? b[2][1] : gA / 2, ot = b[3][0] < cA / 2 ? b[3][0] : cA / 2, ZA = b[3][1] < gA / 2 ? b[3][1] : gA / 2, $A = cA - UA, mt = gA - nA, PA = cA - TA, nt = gA - ZA;
          return { topLeftOuter: Z(R, iA, wA, pA).topLeft.subdivide(0.5), topLeftInner: Z(R + S[3].width, iA + S[0].width, Math.max(0, wA - S[3].width), Math.max(0, pA - S[0].width)).topLeft.subdivide(0.5), topRightOuter: Z(R + $A, iA, UA, vA).topRight.subdivide(0.5), topRightInner: Z(R + Math.min($A, cA + S[3].width), iA + S[0].width, $A > cA + S[3].width ? 0 : UA - S[3].width, vA - S[0].width).topRight.subdivide(0.5), bottomRightOuter: Z(R + PA, iA + mt, TA, nA).bottomRight.subdivide(0.5), bottomRightInner: Z(R + Math.min(PA, cA - S[3].width), iA + Math.min(mt, gA + S[0].width), Math.max(0, TA - S[1].width), nA - S[2].width).bottomRight.subdivide(0.5), bottomLeftOuter: Z(R, iA + nt, ot, ZA).bottomLeft.subdivide(0.5), bottomLeftInner: Z(R + S[3].width, iA + nt, Math.max(0, ot - S[3].width), ZA - S[2].width).bottomLeft.subdivide(0.5) };
        }
        function V(h, b, S, R) {
          var iA = function(cA, gA, wA) {
            return { x: cA.x + (gA.x - cA.x) * wA, y: cA.y + (gA.y - cA.y) * wA };
          };
          return { start: h, startControl: b, endControl: S, end: R, subdivide: function(cA) {
            var gA = iA(h, b, cA), wA = iA(b, S, cA), pA = iA(S, R, cA), UA = iA(gA, wA, cA), vA = iA(wA, pA, cA), TA = iA(UA, vA, cA);
            return [V(h, gA, UA, TA), V(TA, vA, pA, R)];
          }, curveTo: function(cA) {
            cA.push(["bezierCurve", b.x, b.y, S.x, S.y, R.x, R.y]);
          }, curveToReversed: function(cA) {
            cA.push(["bezierCurve", S.x, S.y, b.x, b.y, h.x, h.y]);
          } };
        }
        function Q(h, b, S, R, iA, cA, gA) {
          var wA = [];
          return 0 < b[0] || 0 < b[1] ? (wA.push(["line", R[1].start.x, R[1].start.y]), R[1].curveTo(wA)) : wA.push(["line", h.c1[0], h.c1[1]]), 0 < S[0] || 0 < S[1] ? (wA.push(["line", cA[0].start.x, cA[0].start.y]), cA[0].curveTo(wA), wA.push(["line", gA[0].end.x, gA[0].end.y]), gA[0].curveToReversed(wA)) : (wA.push(["line", h.c2[0], h.c2[1]]), wA.push(["line", h.c3[0], h.c3[1]])), 0 < b[0] || 0 < b[1] ? (wA.push(["line", iA[1].end.x, iA[1].end.y]), iA[1].curveToReversed(wA)) : wA.push(["line", h.c4[0], h.c4[1]]), wA;
        }
        function q(h, b, S, R, iA, cA, gA) {
          0 < b[0] || 0 < b[1] ? (h.push(["line", R[0].start.x, R[0].start.y]), R[0].curveTo(h), R[1].curveTo(h)) : h.push(["line", cA, gA]), (0 < S[0] || 0 < S[1]) && h.push(["line", iA[0].start.x, iA[0].start.y]);
        }
        function K(h) {
          return h.cssInt("zIndex") < 0;
        }
        function z(h) {
          return 0 < h.cssInt("zIndex");
        }
        function $(h) {
          return h.cssInt("zIndex") === 0;
        }
        function uA(h) {
          return ["inline", "inline-block", "inline-table"].indexOf(h.css("display")) !== -1;
        }
        function AA(h) {
          return h instanceof w;
        }
        function L(h) {
          return 0 < h.node.data.trim().length;
        }
        function U(h) {
          return h.nodeType === Node.TEXT_NODE || h.nodeType === Node.ELEMENT_NODE;
        }
        function P(h) {
          return h.css("position") !== "static";
        }
        function I(h) {
          return h.css("float") !== "none";
        }
        function G(h) {
          var b = this;
          return function() {
            return !h.apply(b, arguments);
          };
        }
        function M(h) {
          return h.node.nodeType === Node.ELEMENT_NODE;
        }
        function sA(h) {
          return h.isPseudoElement === !0;
        }
        function X(h) {
          return h.node.nodeType === Node.TEXT_NODE;
        }
        function lA(h) {
          return parseInt(h, 10);
        }
        function rA(h) {
          return h.width;
        }
        function x(h) {
          return h.node.nodeType !== Node.ELEMENT_NODE || ["SCRIPT", "HEAD", "TITLE", "OBJECT", "BR", "OPTION"].indexOf(h.node.nodeName) === -1;
        }
        function O(h) {
          return [].concat.apply([], h);
        }
        E.prototype.parseBorders = function(h) {
          var b, S = h.parseBounds(), R = (b = h, ["TopLeft", "TopRight", "BottomRight", "BottomLeft"].map(function(gA) {
            var wA = b.css("border" + gA + "Radius"), pA = wA.split(" ");
            return pA.length <= 1 && (pA[1] = pA[0]), pA.map(lA);
          })), iA = ["Top", "Right", "Bottom", "Left"].map(function(gA, wA) {
            var pA = h.css("border" + gA + "Style"), UA = h.color("border" + gA + "Color");
            pA === "inset" && UA.isBlack() && (UA = new p([255, 255, 255, UA.a]));
            var vA = N[pA] ? N[pA][wA] : null;
            return { width: h.cssInt("border" + gA + "Width"), color: vA ? UA[vA[0]](vA[1]) : UA, args: null };
          }), cA = W(S, R, iA);
          return { clip: this.parseBackgroundClip(h, cA, iA, R, S), borders: j(iA, S, cA, R) };
        }, E.prototype.parseBackgroundClip = function(h, b, S, R, iA) {
          var cA = [];
          switch (h.css("backgroundClip")) {
            case "content-box":
            case "padding-box":
              q(cA, R[0], R[1], b.topLeftInner, b.topRightInner, iA.left + S[3].width, iA.top + S[0].width), q(cA, R[1], R[2], b.topRightInner, b.bottomRightInner, iA.left + iA.width - S[1].width, iA.top + S[0].width), q(cA, R[2], R[3], b.bottomRightInner, b.bottomLeftInner, iA.left + iA.width - S[1].width, iA.top + iA.height - S[2].width), q(cA, R[3], R[0], b.bottomLeftInner, b.topLeftInner, iA.left + S[3].width, iA.top + iA.height - S[2].width);
              break;
            default:
              q(cA, R[0], R[1], b.topLeftOuter, b.topRightOuter, iA.left, iA.top), q(cA, R[1], R[2], b.topRightOuter, b.bottomRightOuter, iA.left + iA.width, iA.top), q(cA, R[2], R[3], b.bottomRightOuter, b.bottomLeftOuter, iA.left + iA.width, iA.top + iA.height), q(cA, R[3], R[0], b.bottomLeftOuter, b.topLeftOuter, iA.left, iA.top + iA.height);
          }
          return cA;
        }, B.exports = E;
      }, { "./color": 3, "./fontmetrics": 7, "./log": 13, "./nodecontainer": 14, "./pseudoelementcontainer": 18, "./stackingcontext": 21, "./textcontainer": 25, "./utils": 26, punycode: 1 }], 16: [function(a, B, v) {
        var s = a("./xhr"), n = a("./utils"), i = a("./log"), c = a("./clone"), l = n.decode64;
        function u(C, m, F) {
          var E = "withCredentials" in new XMLHttpRequest();
          if (!m)
            return Promise.reject("No proxy configured");
          var H = f(E), _ = d(m, C, H);
          return E ? s(_) : w(F, _, H).then(function(N) {
            return l(N.content);
          });
        }
        var p = 0;
        function w(C, m, F) {
          return new Promise(function(E, H) {
            var _ = C.createElement("script"), N = function() {
              delete window.html2canvas.proxy[F], C.body.removeChild(_);
            };
            window.html2canvas.proxy[F] = function(j) {
              N(), E(j);
            }, _.src = m, _.onerror = function(j) {
              N(), H(j);
            }, C.body.appendChild(_);
          });
        }
        function f(C) {
          return C ? "" : "html2canvas_" + Date.now() + "_" + ++p + "_" + Math.round(1e5 * Math.random());
        }
        function d(C, m, F) {
          return C + "?url=" + encodeURIComponent(m) + (F.length ? "&callback=html2canvas.proxy." + F : "");
        }
        v.Proxy = u, v.ProxyURL = function(C, m, F) {
          var E = "crossOrigin" in new Image(), H = f(E), _ = d(m, C, H);
          return E ? Promise.resolve(_) : w(F, _, H).then(function(N) {
            return "data:" + N.type + ";base64," + N.content;
          });
        }, v.loadUrlDocument = function(C, m, F, E, H, _) {
          return new u(C, m, window.document).then((N = C, function(j) {
            var Z, W = new DOMParser();
            try {
              Z = W.parseFromString(j, "text/html");
            } catch {
              i("DOMParser not supported, falling back to createHTMLDocument"), Z = document.implementation.createHTMLDocument("");
              try {
                Z.open(), Z.write(j), Z.close();
              } catch {
                i("createHTMLDocument write not supported, falling back to document.body.innerHTML"), Z.body.innerHTML = j;
              }
            }
            var V = Z.querySelector("base");
            if (!V || !V.href.host) {
              var Q = Z.createElement("base");
              Q.href = N, Z.head.insertBefore(Q, Z.head.firstChild);
            }
            return Z;
          })).then(function(j) {
            return c(j, F, E, H, _, 0, 0);
          });
          var N;
        };
      }, { "./clone": 2, "./log": 13, "./utils": 26, "./xhr": 28 }], 17: [function(a, B, v) {
        var s = a("./proxy").ProxyURL;
        B.exports = function(n, i) {
          var c = document.createElement("a");
          c.href = n, n = c.href, this.src = n, this.image = new Image();
          var l = this;
          this.promise = new Promise(function(u, p) {
            l.image.crossOrigin = "Anonymous", l.image.onload = u, l.image.onerror = p, new s(n, i, document).then(function(w) {
              l.image.src = w;
            }).catch(p);
          });
        };
      }, { "./proxy": 16 }], 18: [function(a, B, v) {
        var s = a("./nodecontainer");
        function n(i, c, l) {
          s.call(this, i, c), this.isPseudoElement = !0, this.before = l === ":before";
        }
        n.prototype.cloneTo = function(i) {
          n.prototype.cloneTo.call(this, i), i.isPseudoElement = !0, i.before = this.before;
        }, (n.prototype = Object.create(s.prototype)).appendToDOM = function() {
          this.before ? this.parent.node.insertBefore(this.node, this.parent.node.firstChild) : this.parent.node.appendChild(this.node), this.parent.node.className += " " + this.getHideClass();
        }, n.prototype.cleanDOM = function() {
          this.node.parentNode.removeChild(this.node), this.parent.node.className = this.parent.node.className.replace(this.getHideClass(), "");
        }, n.prototype.getHideClass = function() {
          return this["PSEUDO_HIDE_ELEMENT_CLASS_" + (this.before ? "BEFORE" : "AFTER")];
        }, n.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE = "___html2canvas___pseudoelement_before", n.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER = "___html2canvas___pseudoelement_after", B.exports = n;
      }, { "./nodecontainer": 14 }], 19: [function(a, B, v) {
        var s = a("./log");
        function n(i, c, l, u, p) {
          this.width = i, this.height = c, this.images = l, this.options = u, this.document = p;
        }
        n.prototype.renderImage = function(i, c, l, u) {
          var p = i.cssInt("paddingLeft"), w = i.cssInt("paddingTop"), f = i.cssInt("paddingRight"), d = i.cssInt("paddingBottom"), C = l.borders, m = c.width - (C[1].width + C[3].width + p + f), F = c.height - (C[0].width + C[2].width + w + d);
          this.drawImage(u, 0, 0, u.image.width || m, u.image.height || F, c.left + p + C[3].width, c.top + w + C[0].width, m, F);
        }, n.prototype.renderBackground = function(i, c, l) {
          0 < c.height && 0 < c.width && (this.renderBackgroundColor(i, c), this.renderBackgroundImage(i, c, l));
        }, n.prototype.renderBackgroundColor = function(i, c) {
          var l = i.color("backgroundColor");
          l.isTransparent() || this.rectangle(c.left, c.top, c.width, c.height, l);
        }, n.prototype.renderBorders = function(i) {
          i.forEach(this.renderBorder, this);
        }, n.prototype.renderBorder = function(i) {
          i.color.isTransparent() || i.args === null || this.drawShape(i.args, i.color);
        }, n.prototype.renderBackgroundImage = function(i, c, l) {
          i.parseBackgroundImages().reverse().forEach(function(u, p, w) {
            switch (u.method) {
              case "url":
                var f = this.images.get(u.args[0]);
                f ? this.renderBackgroundRepeating(i, c, f, w.length - (p + 1), l) : s("Error loading background-image", u.args[0]);
                break;
              case "linear-gradient":
              case "gradient":
                var d = this.images.get(u.value);
                d ? this.renderBackgroundGradient(d, c, l) : s("Error loading background-image", u.args[0]);
                break;
              case "none":
                break;
              default:
                s("Unknown background-image type", u.args[0]);
            }
          }, this);
        }, n.prototype.renderBackgroundRepeating = function(i, c, l, u, p) {
          var w = i.parseBackgroundSize(c, l.image, u), f = i.parseBackgroundPosition(c, l.image, u, w);
          switch (i.parseBackgroundRepeat(u)) {
            case "repeat-x":
            case "repeat no-repeat":
              this.backgroundRepeatShape(l, f, w, c, c.left + p[3], c.top + f.top + p[0], 99999, w.height, p);
              break;
            case "repeat-y":
            case "no-repeat repeat":
              this.backgroundRepeatShape(l, f, w, c, c.left + f.left + p[3], c.top + p[0], w.width, 99999, p);
              break;
            case "no-repeat":
              this.backgroundRepeatShape(l, f, w, c, c.left + f.left + p[3], c.top + f.top + p[0], w.width, w.height, p);
              break;
            default:
              this.renderBackgroundRepeat(l, f, w, { top: c.top, left: c.left }, p[3], p[0]);
          }
        }, B.exports = n;
      }, { "./log": 13 }], 20: [function(a, B, v) {
        var s = a("../renderer"), n = a("../lineargradientcontainer"), i = a("../log");
        function c(u, p) {
          s.apply(this, arguments), this.canvas = this.options.canvas || this.document.createElement("canvas"), this.options.canvas || (this.canvas.width = u, this.canvas.height = p), this.ctx = this.canvas.getContext("2d"), this.taintCtx = this.document.createElement("canvas").getContext("2d"), this.ctx.textBaseline = "bottom", this.variables = {}, i("Initialized CanvasRenderer with size", u, "x", p);
        }
        function l(u) {
          return 0 < u.length;
        }
        (c.prototype = Object.create(s.prototype)).setFillStyle = function(u) {
          return this.ctx.fillStyle = typeof u == "object" && u.isColor ? u.toString() : u, this.ctx;
        }, c.prototype.rectangle = function(u, p, w, f, d) {
          this.setFillStyle(d).fillRect(u, p, w, f);
        }, c.prototype.circle = function(u, p, w, f) {
          this.setFillStyle(f), this.ctx.beginPath(), this.ctx.arc(u + w / 2, p + w / 2, w / 2, 0, 2 * Math.PI, !0), this.ctx.closePath(), this.ctx.fill();
        }, c.prototype.circleStroke = function(u, p, w, f, d, C) {
          this.circle(u, p, w, f), this.ctx.strokeStyle = C.toString(), this.ctx.stroke();
        }, c.prototype.drawShape = function(u, p) {
          this.shape(u), this.setFillStyle(p).fill();
        }, c.prototype.taints = function(u) {
          if (u.tainted === null) {
            this.taintCtx.drawImage(u.image, 0, 0);
            try {
              this.taintCtx.getImageData(0, 0, 1, 1), u.tainted = !1;
            } catch {
              this.taintCtx = document.createElement("canvas").getContext("2d"), u.tainted = !0;
            }
          }
          return u.tainted;
        }, c.prototype.drawImage = function(u, p, w, f, d, C, m, F, E) {
          this.taints(u) && !this.options.allowTaint || this.ctx.drawImage(u.image, p, w, f, d, C, m, F, E);
        }, c.prototype.clip = function(u, p, w) {
          this.ctx.save(), u.filter(l).forEach(function(f) {
            this.shape(f).clip();
          }, this), p.call(w), this.ctx.restore();
        }, c.prototype.shape = function(u) {
          return this.ctx.beginPath(), u.forEach(function(p, w) {
            p[0] === "rect" ? this.ctx.rect.apply(this.ctx, p.slice(1)) : this.ctx[w === 0 ? "moveTo" : p[0] + "To"].apply(this.ctx, p.slice(1));
          }, this), this.ctx.closePath(), this.ctx;
        }, c.prototype.font = function(u, p, w, f, d, C) {
          this.setFillStyle(u).font = [p, w, f, d, C].join(" ").split(",")[0];
        }, c.prototype.fontShadow = function(u, p, w, f) {
          this.setVariable("shadowColor", u.toString()).setVariable("shadowOffsetY", p).setVariable("shadowOffsetX", w).setVariable("shadowBlur", f);
        }, c.prototype.clearShadow = function() {
          this.setVariable("shadowColor", "rgba(0,0,0,0)");
        }, c.prototype.setOpacity = function(u) {
          this.ctx.globalAlpha = u;
        }, c.prototype.setTransform = function(u) {
          this.ctx.translate(u.origin[0], u.origin[1]), this.ctx.transform.apply(this.ctx, u.matrix), this.ctx.translate(-u.origin[0], -u.origin[1]);
        }, c.prototype.setVariable = function(u, p) {
          return this.variables[u] !== p && (this.variables[u] = this.ctx[u] = p), this;
        }, c.prototype.text = function(u, p, w) {
          this.ctx.fillText(u, p, w);
        }, c.prototype.backgroundRepeatShape = function(u, p, w, f, d, C, m, F, E) {
          var H = [["line", Math.round(d), Math.round(C)], ["line", Math.round(d + m), Math.round(C)], ["line", Math.round(d + m), Math.round(F + C)], ["line", Math.round(d), Math.round(F + C)]];
          this.clip([H], function() {
            this.renderBackgroundRepeat(u, p, w, f, E[3], E[0]);
          }, this);
        }, c.prototype.renderBackgroundRepeat = function(u, p, w, f, d, C) {
          var m = Math.round(f.left + p.left + d), F = Math.round(f.top + p.top + C);
          this.setFillStyle(this.ctx.createPattern(this.resizeImage(u, w), "repeat")), this.ctx.translate(m, F), this.ctx.fill(), this.ctx.translate(-m, -F);
        }, c.prototype.renderBackgroundGradient = function(u, p) {
          if (u instanceof n) {
            var w = this.ctx.createLinearGradient(p.left + p.width * u.x0, p.top + p.height * u.y0, p.left + p.width * u.x1, p.top + p.height * u.y1);
            u.colorStops.forEach(function(f) {
              w.addColorStop(f.stop, f.color.toString());
            }), this.rectangle(p.left, p.top, p.width, p.height, w);
          }
        }, c.prototype.resizeImage = function(u, p) {
          var w = u.image;
          if (w.width === p.width && w.height === p.height)
            return w;
          var f = document.createElement("canvas");
          return f.width = p.width, f.height = p.height, f.getContext("2d").drawImage(w, 0, 0, w.width, w.height, 0, 0, p.width, p.height), f;
        }, B.exports = c;
      }, { "../lineargradientcontainer": 12, "../log": 13, "../renderer": 19 }], 21: [function(a, B, v) {
        var s = a("./nodecontainer");
        function n(i, c, l, u) {
          s.call(this, l, u), this.ownStacking = i, this.contexts = [], this.children = [], this.opacity = (this.parent ? this.parent.stack.opacity : 1) * c;
        }
        (n.prototype = Object.create(s.prototype)).getParentStack = function(i) {
          var c = this.parent ? this.parent.stack : null;
          return c ? c.ownStacking ? c : c.getParentStack(i) : i.stack;
        }, B.exports = n;
      }, { "./nodecontainer": 14 }], 22: [function(a, B, v) {
        function s(n) {
          this.rangeBounds = this.testRangeBounds(n), this.cors = this.testCORS(), this.svg = this.testSVG();
        }
        s.prototype.testRangeBounds = function(n) {
          var i, c, l = !1;
          return n.createRange && (i = n.createRange()).getBoundingClientRect && ((c = n.createElement("boundtest")).style.height = "123px", c.style.display = "block", n.body.appendChild(c), i.selectNode(c), i.getBoundingClientRect().height === 123 && (l = !0), n.body.removeChild(c)), l;
        }, s.prototype.testCORS = function() {
          return new Image().crossOrigin !== void 0;
        }, s.prototype.testSVG = function() {
          var n = new Image(), i = document.createElement("canvas"), c = i.getContext("2d");
          n.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
          try {
            c.drawImage(n, 0, 0), i.toDataURL();
          } catch {
            return !1;
          }
          return !0;
        }, B.exports = s;
      }, {}], 23: [function(a, B, v) {
        var s = a("./xhr"), n = a("./utils").decode64;
        function i(c) {
          this.src = c, this.image = null;
          var l = this;
          this.promise = this.hasFabric().then(function() {
            return l.isInline(c) ? Promise.resolve(l.inlineFormatting(c)) : s(c);
          }).then(function(u) {
            return new Promise(function(p) {
              window.html2canvas.svg.fabric.loadSVGFromString(u, l.createCanvas.call(l, p));
            });
          });
        }
        i.prototype.hasFabric = function() {
          return window.html2canvas.svg && window.html2canvas.svg.fabric ? Promise.resolve() : Promise.reject(new Error("html2canvas.svg.js is not loaded, cannot render svg"));
        }, i.prototype.inlineFormatting = function(c) {
          return /^data:image\/svg\+xml;base64,/.test(c) ? this.decode64(this.removeContentType(c)) : this.removeContentType(c);
        }, i.prototype.removeContentType = function(c) {
          return c.replace(/^data:image\/svg\+xml(;base64)?,/, "");
        }, i.prototype.isInline = function(c) {
          return /^data:image\/svg\+xml/i.test(c);
        }, i.prototype.createCanvas = function(c) {
          var l = this;
          return function(u, p) {
            var w = new window.html2canvas.svg.fabric.StaticCanvas("c");
            l.image = w.lowerCanvasEl, w.setWidth(p.width).setHeight(p.height).add(window.html2canvas.svg.fabric.util.groupSVGElements(u, p)).renderAll(), c(w.lowerCanvasEl);
          };
        }, i.prototype.decode64 = function(c) {
          return typeof window.atob == "function" ? window.atob(c) : n(c);
        }, B.exports = i;
      }, { "./utils": 26, "./xhr": 28 }], 24: [function(a, B, v) {
        var s = a("./svgcontainer");
        function n(i, c) {
          this.src = i, this.image = null;
          var l = this;
          this.promise = c ? new Promise(function(u, p) {
            l.image = new Image(), l.image.onload = u, l.image.onerror = p, l.image.src = "data:image/svg+xml," + new XMLSerializer().serializeToString(i), l.image.complete === !0 && u(l.image);
          }) : this.hasFabric().then(function() {
            return new Promise(function(u) {
              window.html2canvas.svg.fabric.parseSVGDocument(i, l.createCanvas.call(l, u));
            });
          });
        }
        n.prototype = Object.create(s.prototype), B.exports = n;
      }, { "./svgcontainer": 23 }], 25: [function(a, B, v) {
        var s = a("./nodecontainer");
        function n(c, l) {
          s.call(this, c, l);
        }
        function i(c, l, u) {
          if (0 < c.length)
            return l + u.toUpperCase();
        }
        (n.prototype = Object.create(s.prototype)).applyTextTransform = function() {
          this.node.data = this.transform(this.parent.css("textTransform"));
        }, n.prototype.transform = function(c) {
          var l = this.node.data;
          switch (c) {
            case "lowercase":
              return l.toLowerCase();
            case "capitalize":
              return l.replace(/(^|\s|:|-|\(|\))([a-z])/g, i);
            case "uppercase":
              return l.toUpperCase();
            default:
              return l;
          }
        }, B.exports = n;
      }, { "./nodecontainer": 14 }], 26: [function(a, B, v) {
        v.smallImage = function() {
          return "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
        }, v.bind = function(s, n) {
          return function() {
            return s.apply(n, arguments);
          };
        }, /*
           * base64-arraybuffer
           * https://github.com/niklasvh/base64-arraybuffer
           *
           * Copyright (c) 2012 Niklas von Hertzen
           * Licensed under the MIT license.
           */
        v.decode64 = function(s) {
          var n, i, c, l, u, p, w, f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", d = s.length, C = "";
          for (n = 0; n < d; n += 4)
            u = f.indexOf(s[n]) << 2 | (i = f.indexOf(s[n + 1])) >> 4, p = (15 & i) << 4 | (c = f.indexOf(s[n + 2])) >> 2, w = (3 & c) << 6 | (l = f.indexOf(s[n + 3])), C += c === 64 ? String.fromCharCode(u) : l === 64 || l === -1 ? String.fromCharCode(u, p) : String.fromCharCode(u, p, w);
          return C;
        }, v.getBounds = function(s) {
          if (s.getBoundingClientRect) {
            var n = s.getBoundingClientRect(), i = s.offsetWidth == null ? n.width : s.offsetWidth;
            return { top: n.top, bottom: n.bottom || n.top + n.height, right: n.left + i, left: n.left, width: i, height: s.offsetHeight == null ? n.height : s.offsetHeight };
          }
          return {};
        }, v.offsetBounds = function(s) {
          var n = s.offsetParent ? v.offsetBounds(s.offsetParent) : { top: 0, left: 0 };
          return { top: s.offsetTop + n.top, bottom: s.offsetTop + s.offsetHeight + n.top, right: s.offsetLeft + n.left + s.offsetWidth, left: s.offsetLeft + n.left, width: s.offsetWidth, height: s.offsetHeight };
        }, v.parseBackgrounds = function(s) {
          var n, i, c, l, u, p, w, f = [], d = 0, C = 0, m = function() {
            n && (i.substr(0, 1) === '"' && (i = i.substr(1, i.length - 2)), i && w.push(i), n.substr(0, 1) === "-" && 0 < (l = n.indexOf("-", 1) + 1) && (c = n.substr(0, l), n = n.substr(l)), f.push({ prefix: c, method: n.toLowerCase(), value: u, args: w, image: null })), w = [], n = c = i = u = "";
          };
          return w = [], n = c = i = u = "", s.split("").forEach(function(F) {
            if (!(d === 0 && -1 < ` \r
	`.indexOf(F))) {
              switch (F) {
                case '"':
                  p ? p === F && (p = null) : p = F;
                  break;
                case "(":
                  if (p)
                    break;
                  if (d === 0)
                    return d = 1, void (u += F);
                  C++;
                  break;
                case ")":
                  if (p)
                    break;
                  if (d === 1) {
                    if (C === 0)
                      return d = 0, u += F, void m();
                    C--;
                  }
                  break;
                case ",":
                  if (p)
                    break;
                  if (d === 0)
                    return void m();
                  if (d === 1 && C === 0 && !n.match(/^url$/i))
                    return w.push(i), i = "", void (u += F);
              }
              u += F, d === 0 ? n += F : i += F;
            }
          }), m(), f;
        };
      }, {}], 27: [function(a, B, v) {
        var s = a("./gradientcontainer");
        function n(i) {
          s.apply(this, arguments), this.type = i.args[0] === "linear" ? s.TYPES.LINEAR : s.TYPES.RADIAL;
        }
        n.prototype = Object.create(s.prototype), B.exports = n;
      }, { "./gradientcontainer": 9 }], 28: [function(a, B, v) {
        B.exports = function(s) {
          return new Promise(function(n, i) {
            var c = new XMLHttpRequest();
            c.open("GET", s), c.onload = function() {
              c.status === 200 ? n(c.responseText) : i(new Error(c.statusText));
            }, c.onerror = function() {
              i(new Error("Network Error"));
            }, c.send();
          });
        };
      }, {}] }, {}, [4])(4);
    }), function(a) {
      var B = "+".charCodeAt(0), v = "/".charCodeAt(0), s = "0".charCodeAt(0), n = "a".charCodeAt(0), i = "A".charCodeAt(0), c = "-".charCodeAt(0), l = "_".charCodeAt(0), u = function(AA) {
        var L = AA.charCodeAt(0);
        return L === B || L === c ? 62 : L === v || L === l ? 63 : L < s ? -1 : L < s + 10 ? L - s + 26 + 26 : L < i + 26 ? L - i : L < n + 26 ? L - n + 26 : void 0;
      };
      a.API.TTFFont = function() {
        function AA(L, U, P) {
          var I;
          if (this.rawData = L, I = this.contents = new w(L), this.contents.pos = 4, I.readString(4) === "ttcf")
            throw U ? new Error("Font " + U + " not found in TTC file.") : new Error("Must specify a font name for TTC files.");
          I.pos = 0, this.parse(), this.subset = new uA(this), this.registerTTF();
        }
        return AA.open = function(L, U, P, I) {
          return new AA(function(G) {
            var M, sA, X, lA, rA, x;
            if (0 < G.length % 4)
              throw new Error("Invalid string. Length must be a multiple of 4");
            var O = G.length;
            rA = G.charAt(O - 2) === "=" ? 2 : G.charAt(O - 1) === "=" ? 1 : 0, x = new Uint8Array(3 * G.length / 4 - rA), X = 0 < rA ? G.length - 4 : G.length;
            var h = 0;
            function b(S) {
              x[h++] = S;
            }
            for (sA = M = 0; M < X; M += 4, sA += 3)
              b((16711680 & (lA = u(G.charAt(M)) << 18 | u(G.charAt(M + 1)) << 12 | u(G.charAt(M + 2)) << 6 | u(G.charAt(M + 3)))) >> 16), b((65280 & lA) >> 8), b(255 & lA);
            return rA === 2 ? b(255 & (lA = u(G.charAt(M)) << 2 | u(G.charAt(M + 1)) >> 4)) : rA === 1 && (b((lA = u(G.charAt(M)) << 10 | u(G.charAt(M + 1)) << 4 | u(G.charAt(M + 2)) >> 2) >> 8 & 255), b(255 & lA)), x;
          }(P), U);
        }, AA.prototype.parse = function() {
          return this.directory = new f(this.contents), this.head = new m(this), this.name = new Z(this), this.cmap = new E(this), this.hhea = new H(this), this.maxp = new W(this), this.hmtx = new V(this), this.post = new N(this), this.os2 = new _(this), this.loca = new $(this), this.glyf = new q(this), this.ascender = this.os2.exists && this.os2.ascender || this.hhea.ascender, this.decender = this.os2.exists && this.os2.decender || this.hhea.decender, this.lineGap = this.os2.exists && this.os2.lineGap || this.hhea.lineGap, this.bbox = [this.head.xMin, this.head.yMin, this.head.xMax, this.head.yMax];
        }, AA.prototype.registerTTF = function() {
          var L, U, P, I, G;
          if (this.scaleFactor = 1e3 / this.head.unitsPerEm, this.bbox = (function() {
            var M, sA, X, lA;
            for (lA = [], M = 0, sA = (X = this.bbox).length; M < sA; M++)
              L = X[M], lA.push(Math.round(L * this.scaleFactor));
            return lA;
          }).call(this), this.stemV = 0, this.post.exists ? (P = 255 & (I = this.post.italic_angle), !0 & (U = I >> 16) && (U = -(1 + (65535 ^ U))), this.italicAngle = +(U + "." + P)) : this.italicAngle = 0, this.ascender = Math.round(this.ascender * this.scaleFactor), this.decender = Math.round(this.decender * this.scaleFactor), this.lineGap = Math.round(this.lineGap * this.scaleFactor), this.capHeight = this.os2.exists && this.os2.capHeight || this.ascender, this.xHeight = this.os2.exists && this.os2.xHeight || 0, this.familyClass = (this.os2.exists && this.os2.familyClass || 0) >> 8, this.isSerif = (G = this.familyClass) === 1 || G === 2 || G === 3 || G === 4 || G === 5 || G === 7, this.isScript = this.familyClass === 10, this.flags = 0, this.post.isFixedPitch && (this.flags |= 1), this.isSerif && (this.flags |= 2), this.isScript && (this.flags |= 8), this.italicAngle !== 0 && (this.flags |= 64), this.flags |= 32, !this.cmap.unicode)
            throw new Error("No unicode cmap for font");
        }, AA.prototype.characterToGlyph = function(L) {
          var U;
          return ((U = this.cmap.unicode) != null ? U.codeMap[L] : void 0) || 0;
        }, AA.prototype.widthOfGlyph = function(L) {
          var U;
          return U = 1e3 / this.head.unitsPerEm, this.hmtx.forGlyph(L).advance * U;
        }, AA.prototype.widthOfString = function(L, U, P) {
          var I, G, M, sA, X;
          for (G = sA = M = 0, X = (L = "" + L).length; 0 <= X ? sA < X : X < sA; G = 0 <= X ? ++sA : --sA)
            I = L.charCodeAt(G), M += this.widthOfGlyph(this.characterToGlyph(I)) + P * (1e3 / U) || 0;
          return M * (U / 1e3);
        }, AA.prototype.lineHeight = function(L, U) {
          var P;
          return U == null && (U = !1), P = U ? this.lineGap : 0, (this.ascender + P - this.decender) / 1e3 * L;
        }, AA;
      }();
      var p, w = function() {
        function AA(L) {
          this.data = L ?? [], this.pos = 0, this.length = this.data.length;
        }
        return AA.prototype.readByte = function() {
          return this.data[this.pos++];
        }, AA.prototype.writeByte = function(L) {
          return this.data[this.pos++] = L;
        }, AA.prototype.readUInt32 = function() {
          return 16777216 * this.readByte() + (this.readByte() << 16) + (this.readByte() << 8) + this.readByte();
        }, AA.prototype.writeUInt32 = function(L) {
          return this.writeByte(L >>> 24 & 255), this.writeByte(L >> 16 & 255), this.writeByte(L >> 8 & 255), this.writeByte(255 & L);
        }, AA.prototype.readInt32 = function() {
          var L;
          return 2147483648 <= (L = this.readUInt32()) ? L - 4294967296 : L;
        }, AA.prototype.writeInt32 = function(L) {
          return L < 0 && (L += 4294967296), this.writeUInt32(L);
        }, AA.prototype.readUInt16 = function() {
          return this.readByte() << 8 | this.readByte();
        }, AA.prototype.writeUInt16 = function(L) {
          return this.writeByte(L >> 8 & 255), this.writeByte(255 & L);
        }, AA.prototype.readInt16 = function() {
          var L;
          return 32768 <= (L = this.readUInt16()) ? L - 65536 : L;
        }, AA.prototype.writeInt16 = function(L) {
          return L < 0 && (L += 65536), this.writeUInt16(L);
        }, AA.prototype.readString = function(L) {
          var U, P, I;
          for (P = [], U = I = 0; 0 <= L ? I < L : L < I; U = 0 <= L ? ++I : --I)
            P[U] = String.fromCharCode(this.readByte());
          return P.join("");
        }, AA.prototype.writeString = function(L) {
          var U, P, I, G;
          for (G = [], U = P = 0, I = L.length; 0 <= I ? P < I : I < P; U = 0 <= I ? ++P : --P)
            G.push(this.writeByte(L.charCodeAt(U)));
          return G;
        }, AA.prototype.readShort = function() {
          return this.readInt16();
        }, AA.prototype.writeShort = function(L) {
          return this.writeInt16(L);
        }, AA.prototype.readLongLong = function() {
          var L, U, P, I, G, M, sA, X;
          return L = this.readByte(), U = this.readByte(), P = this.readByte(), I = this.readByte(), G = this.readByte(), M = this.readByte(), sA = this.readByte(), X = this.readByte(), 128 & L ? -1 * (72057594037927940 * (255 ^ L) + 281474976710656 * (255 ^ U) + 1099511627776 * (255 ^ P) + 4294967296 * (255 ^ I) + 16777216 * (255 ^ G) + 65536 * (255 ^ M) + 256 * (255 ^ sA) + (255 ^ X) + 1) : 72057594037927940 * L + 281474976710656 * U + 1099511627776 * P + 4294967296 * I + 16777216 * G + 65536 * M + 256 * sA + X;
        }, AA.prototype.readInt = function() {
          return this.readInt32();
        }, AA.prototype.writeInt = function(L) {
          return this.writeInt32(L);
        }, AA.prototype.read = function(L) {
          var U, P;
          for (U = [], P = 0; 0 <= L ? P < L : L < P; 0 <= L ? ++P : --P)
            U.push(this.readByte());
          return U;
        }, AA.prototype.write = function(L) {
          var U, P, I, G;
          for (G = [], P = 0, I = L.length; P < I; P++)
            U = L[P], G.push(this.writeByte(U));
          return G;
        }, AA;
      }(), f = function() {
        var AA;
        function L(U) {
          var P, I, G;
          for (this.scalarType = U.readInt(), this.tableCount = U.readShort(), this.searchRange = U.readShort(), this.entrySelector = U.readShort(), this.rangeShift = U.readShort(), this.tables = {}, I = 0, G = this.tableCount; 0 <= G ? I < G : G < I; 0 <= G ? ++I : --I)
            P = { tag: U.readString(4), checksum: U.readInt(), offset: U.readInt(), length: U.readInt() }, this.tables[P.tag] = P;
        }
        return L.prototype.encode = function(U) {
          var P, I, G, M, sA, X, lA, rA, x, O, h, b, S;
          for (S in h = Object.keys(U).length, X = Math.log(2), x = 16 * Math.floor(Math.log(h) / X), M = Math.floor(x / X), rA = 16 * h - x, (I = new w()).writeInt(this.scalarType), I.writeShort(h), I.writeShort(x), I.writeShort(M), I.writeShort(rA), G = 16 * h, lA = I.pos + G, sA = null, b = [], U)
            for (O = U[S], I.writeString(S), I.writeInt(AA(O)), I.writeInt(lA), I.writeInt(O.length), b = b.concat(O), S === "head" && (sA = lA), lA += O.length; lA % 4; )
              b.push(0), lA++;
          return I.write(b), P = 2981146554 - AA(I.data), I.pos = sA + 8, I.writeUInt32(P), I.data;
        }, AA = function(U) {
          var P, I, G, M;
          for (U = Q.call(U); U.length % 4; )
            U.push(0);
          for (I = new w(U), G = P = 0, M = U.length; G < M; G += 4)
            P += I.readUInt32();
          return 4294967295 & P;
        }, L;
      }(), d = {}.hasOwnProperty, C = function(AA, L) {
        for (var U in L)
          d.call(L, U) && (AA[U] = L[U]);
        function P() {
          this.constructor = AA;
        }
        return P.prototype = L.prototype, AA.prototype = new P(), AA.__super__ = L.prototype, AA;
      };
      p = function() {
        function AA(L) {
          var U;
          this.file = L, U = this.file.directory.tables[this.tag], this.exists = !!U, U && (this.offset = U.offset, this.length = U.length, this.parse(this.file.contents));
        }
        return AA.prototype.parse = function() {
        }, AA.prototype.encode = function() {
        }, AA.prototype.raw = function() {
          return this.exists ? (this.file.contents.pos = this.offset, this.file.contents.read(this.length)) : null;
        }, AA;
      }();
      var m = function(AA) {
        function L() {
          return L.__super__.constructor.apply(this, arguments);
        }
        return C(L, p), L.prototype.tag = "head", L.prototype.parse = function(U) {
          return U.pos = this.offset, this.version = U.readInt(), this.revision = U.readInt(), this.checkSumAdjustment = U.readInt(), this.magicNumber = U.readInt(), this.flags = U.readShort(), this.unitsPerEm = U.readShort(), this.created = U.readLongLong(), this.modified = U.readLongLong(), this.xMin = U.readShort(), this.yMin = U.readShort(), this.xMax = U.readShort(), this.yMax = U.readShort(), this.macStyle = U.readShort(), this.lowestRecPPEM = U.readShort(), this.fontDirectionHint = U.readShort(), this.indexToLocFormat = U.readShort(), this.glyphDataFormat = U.readShort();
        }, L;
      }(), F = function() {
        function AA(L, U) {
          var P, I, G, M, sA, X, lA, rA, x, O, h, b, S, R, iA, cA, gA, wA;
          switch (this.platformID = L.readUInt16(), this.encodingID = L.readShort(), this.offset = U + L.readInt(), x = L.pos, L.pos = this.offset, this.format = L.readUInt16(), this.length = L.readUInt16(), this.language = L.readUInt16(), this.isUnicode = this.platformID === 3 && this.encodingID === 1 && this.format === 4 || this.platformID === 0 && this.format === 4, this.codeMap = {}, this.format) {
            case 0:
              for (X = iA = 0; iA < 256; X = ++iA)
                this.codeMap[X] = L.readByte();
              break;
            case 4:
              for (h = L.readUInt16(), O = h / 2, L.pos += 6, G = function() {
                var pA, UA;
                for (UA = [], X = pA = 0; 0 <= O ? pA < O : O < pA; X = 0 <= O ? ++pA : --pA)
                  UA.push(L.readUInt16());
                return UA;
              }(), L.pos += 2, S = function() {
                var pA, UA;
                for (UA = [], X = pA = 0; 0 <= O ? pA < O : O < pA; X = 0 <= O ? ++pA : --pA)
                  UA.push(L.readUInt16());
                return UA;
              }(), lA = function() {
                var pA, UA;
                for (UA = [], X = pA = 0; 0 <= O ? pA < O : O < pA; X = 0 <= O ? ++pA : --pA)
                  UA.push(L.readUInt16());
                return UA;
              }(), rA = function() {
                var pA, UA;
                for (UA = [], X = pA = 0; 0 <= O ? pA < O : O < pA; X = 0 <= O ? ++pA : --pA)
                  UA.push(L.readUInt16());
                return UA;
              }(), I = (this.length - L.pos + this.offset) / 2, sA = function() {
                var pA, UA;
                for (UA = [], X = pA = 0; 0 <= I ? pA < I : I < pA; X = 0 <= I ? ++pA : --pA)
                  UA.push(L.readUInt16());
                return UA;
              }(), X = cA = 0, wA = G.length; cA < wA; X = ++cA)
                for (R = G[X], P = gA = b = S[X]; b <= R ? gA <= R : R <= gA; P = b <= R ? ++gA : --gA)
                  rA[X] === 0 ? M = P + lA[X] : (M = sA[rA[X] / 2 + (P - b) - (O - X)] || 0) !== 0 && (M += lA[X]), this.codeMap[P] = 65535 & M;
          }
          L.pos = x;
        }
        return AA.encode = function(L, U) {
          var P, I, G, M, sA, X, lA, rA, x, O, h, b, S, R, iA, cA, gA, wA, pA, UA, vA, TA, nA, ot, ZA, $A, mt, PA, nt, lt, rt, et, ut, xt, MA, oe, Jt, pe, Qe, _t, k, oA, fA, tA, eA, hA;
          switch (PA = new w(), M = Object.keys(L).sort(function(BA, CA) {
            return BA - CA;
          }), U) {
            case "macroman":
              for (S = 0, R = function() {
                var BA, CA;
                for (CA = [], b = BA = 0; BA < 256; b = ++BA)
                  CA.push(0);
                return CA;
              }(), cA = { 0: 0 }, G = {}, nt = 0, ut = M.length; nt < ut; nt++)
                cA[fA = L[I = M[nt]]] == null && (cA[fA] = ++S), G[I] = { old: L[I], new: cA[L[I]] }, R[I] = cA[L[I]];
              return PA.writeUInt16(1), PA.writeUInt16(0), PA.writeUInt32(12), PA.writeUInt16(0), PA.writeUInt16(262), PA.writeUInt16(0), PA.write(R), { charMap: G, subtable: PA.data, maxGlyphID: S + 1 };
            case "unicode":
              for ($A = [], x = [], cA = {}, P = {}, iA = lA = null, lt = gA = 0, xt = M.length; lt < xt; lt++)
                cA[pA = L[I = M[lt]]] == null && (cA[pA] = ++gA), P[I] = { old: pA, new: cA[pA] }, sA = cA[pA] - I, iA != null && sA === lA || (iA && x.push(iA), $A.push(I), lA = sA), iA = I;
              for (iA && x.push(iA), x.push(65535), $A.push(65535), ot = 2 * (nA = $A.length), TA = 2 * Math.pow(Math.log(nA) / Math.LN2, 2), O = Math.log(TA / 2) / Math.LN2, vA = 2 * nA - TA, X = [], UA = [], h = [], b = rt = 0, MA = $A.length; rt < MA; b = ++rt) {
                if (ZA = $A[b], rA = x[b], ZA === 65535) {
                  X.push(0), UA.push(0);
                  break;
                }
                if (32768 <= ZA - (mt = P[ZA].new))
                  for (X.push(0), UA.push(2 * (h.length + nA - b)), I = et = ZA; ZA <= rA ? et <= rA : rA <= et; I = ZA <= rA ? ++et : --et)
                    h.push(P[I].new);
                else
                  X.push(mt - ZA), UA.push(0);
              }
              for (PA.writeUInt16(3), PA.writeUInt16(1), PA.writeUInt32(12), PA.writeUInt16(4), PA.writeUInt16(16 + 8 * nA + 2 * h.length), PA.writeUInt16(0), PA.writeUInt16(ot), PA.writeUInt16(TA), PA.writeUInt16(O), PA.writeUInt16(vA), k = 0, oe = x.length; k < oe; k++)
                I = x[k], PA.writeUInt16(I);
              for (PA.writeUInt16(0), oA = 0, Jt = $A.length; oA < Jt; oA++)
                I = $A[oA], PA.writeUInt16(I);
              for (tA = 0, pe = X.length; tA < pe; tA++)
                sA = X[tA], PA.writeUInt16(sA);
              for (eA = 0, Qe = UA.length; eA < Qe; eA++)
                wA = UA[eA], PA.writeUInt16(wA);
              for (hA = 0, _t = h.length; hA < _t; hA++)
                S = h[hA], PA.writeUInt16(S);
              return { charMap: P, subtable: PA.data, maxGlyphID: gA + 1 };
          }
        }, AA;
      }(), E = function(AA) {
        function L() {
          return L.__super__.constructor.apply(this, arguments);
        }
        return C(L, p), L.prototype.tag = "cmap", L.prototype.parse = function(U) {
          var P, I, G;
          for (U.pos = this.offset, this.version = U.readUInt16(), I = U.readUInt16(), this.tables = [], this.unicode = null, G = 0; 0 <= I ? G < I : I < G; 0 <= I ? ++G : --G)
            P = new F(U, this.offset), this.tables.push(P), P.isUnicode && this.unicode == null && (this.unicode = P);
          return !0;
        }, L.encode = function(U, P) {
          var I, G;
          return P == null && (P = "macroman"), I = F.encode(U, P), (G = new w()).writeUInt16(0), G.writeUInt16(1), I.table = G.data.concat(I.subtable), I;
        }, L;
      }(), H = function(AA) {
        function L() {
          return L.__super__.constructor.apply(this, arguments);
        }
        return C(L, p), L.prototype.tag = "hhea", L.prototype.parse = function(U) {
          return U.pos = this.offset, this.version = U.readInt(), this.ascender = U.readShort(), this.decender = U.readShort(), this.lineGap = U.readShort(), this.advanceWidthMax = U.readShort(), this.minLeftSideBearing = U.readShort(), this.minRightSideBearing = U.readShort(), this.xMaxExtent = U.readShort(), this.caretSlopeRise = U.readShort(), this.caretSlopeRun = U.readShort(), this.caretOffset = U.readShort(), U.pos += 8, this.metricDataFormat = U.readShort(), this.numberOfMetrics = U.readUInt16();
        }, L;
      }(), _ = function(AA) {
        function L() {
          return L.__super__.constructor.apply(this, arguments);
        }
        return C(L, p), L.prototype.tag = "OS/2", L.prototype.parse = function(U) {
          if (U.pos = this.offset, this.version = U.readUInt16(), this.averageCharWidth = U.readShort(), this.weightClass = U.readUInt16(), this.widthClass = U.readUInt16(), this.type = U.readShort(), this.ySubscriptXSize = U.readShort(), this.ySubscriptYSize = U.readShort(), this.ySubscriptXOffset = U.readShort(), this.ySubscriptYOffset = U.readShort(), this.ySuperscriptXSize = U.readShort(), this.ySuperscriptYSize = U.readShort(), this.ySuperscriptXOffset = U.readShort(), this.ySuperscriptYOffset = U.readShort(), this.yStrikeoutSize = U.readShort(), this.yStrikeoutPosition = U.readShort(), this.familyClass = U.readShort(), this.panose = function() {
            var P, I;
            for (I = [], P = 0; P < 10; ++P)
              I.push(U.readByte());
            return I;
          }(), this.charRange = function() {
            var P, I;
            for (I = [], P = 0; P < 4; ++P)
              I.push(U.readInt());
            return I;
          }(), this.vendorID = U.readString(4), this.selection = U.readShort(), this.firstCharIndex = U.readShort(), this.lastCharIndex = U.readShort(), 0 < this.version && (this.ascent = U.readShort(), this.descent = U.readShort(), this.lineGap = U.readShort(), this.winAscent = U.readShort(), this.winDescent = U.readShort(), this.codePageRange = function() {
            var P, I;
            for (I = [], P = 0; P < 2; ++P)
              I.push(U.readInt());
            return I;
          }(), 1 < this.version))
            return this.xHeight = U.readShort(), this.capHeight = U.readShort(), this.defaultChar = U.readShort(), this.breakChar = U.readShort(), this.maxContext = U.readShort();
        }, L;
      }(), N = function(AA) {
        function L() {
          return L.__super__.constructor.apply(this, arguments);
        }
        return C(L, p), L.prototype.tag = "post", L.prototype.parse = function(U) {
          var P, I, G, M;
          switch (U.pos = this.offset, this.format = U.readInt(), this.italicAngle = U.readInt(), this.underlinePosition = U.readShort(), this.underlineThickness = U.readShort(), this.isFixedPitch = U.readInt(), this.minMemType42 = U.readInt(), this.maxMemType42 = U.readInt(), this.minMemType1 = U.readInt(), this.maxMemType1 = U.readInt(), this.format) {
            case 65536:
              break;
            case 131072:
              for (I = U.readUInt16(), this.glyphNameIndex = [], G = 0; 0 <= I ? G < I : I < G; 0 <= I ? ++G : --G)
                this.glyphNameIndex.push(U.readUInt16());
              for (this.names = [], M = []; U.pos < this.offset + this.length; )
                P = U.readByte(), M.push(this.names.push(U.readString(P)));
              return M;
            case 151552:
              return I = U.readUInt16(), this.offsets = U.read(I);
            case 196608:
              break;
            case 262144:
              return this.map = (function() {
                var sA, X, lA;
                for (lA = [], sA = 0, X = this.file.maxp.numGlyphs; 0 <= X ? sA < X : X < sA; 0 <= X ? ++sA : --sA)
                  lA.push(U.readUInt32());
                return lA;
              }).call(this);
          }
        }, L;
      }(), j = function(AA, L) {
        this.raw = AA, this.length = AA.length, this.platformID = L.platformID, this.encodingID = L.encodingID, this.languageID = L.languageID;
      }, Z = function(AA) {
        function L() {
          return L.__super__.constructor.apply(this, arguments);
        }
        return C(L, p), L.prototype.tag = "name", L.prototype.parse = function(U) {
          var P, I, G, M, sA, X, lA, rA, x, O, h, b;
          for (U.pos = this.offset, U.readShort(), P = U.readShort(), X = U.readShort(), I = [], M = x = 0; 0 <= P ? x < P : P < x; M = 0 <= P ? ++x : --x)
            I.push({ platformID: U.readShort(), encodingID: U.readShort(), languageID: U.readShort(), nameID: U.readShort(), length: U.readShort(), offset: this.offset + X + U.readShort() });
          for (lA = {}, M = O = 0, h = I.length; O < h; M = ++O)
            G = I[M], U.pos = G.offset, rA = U.readString(G.length), sA = new j(rA, G), lA[b = G.nameID] == null && (lA[b] = []), lA[G.nameID].push(sA);
          return this.strings = lA, this.copyright = lA[0], this.fontFamily = lA[1], this.fontSubfamily = lA[2], this.uniqueSubfamily = lA[3], this.fontName = lA[4], this.version = lA[5], this.postscriptName = lA[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g, ""), this.trademark = lA[7], this.manufacturer = lA[8], this.designer = lA[9], this.description = lA[10], this.vendorUrl = lA[11], this.designerUrl = lA[12], this.license = lA[13], this.licenseUrl = lA[14], this.preferredFamily = lA[15], this.preferredSubfamily = lA[17], this.compatibleFull = lA[18], this.sampleText = lA[19];
        }, L;
      }(), W = function(AA) {
        function L() {
          return L.__super__.constructor.apply(this, arguments);
        }
        return C(L, p), L.prototype.tag = "maxp", L.prototype.parse = function(U) {
          return U.pos = this.offset, this.version = U.readInt(), this.numGlyphs = U.readUInt16(), this.maxPoints = U.readUInt16(), this.maxContours = U.readUInt16(), this.maxCompositePoints = U.readUInt16(), this.maxComponentContours = U.readUInt16(), this.maxZones = U.readUInt16(), this.maxTwilightPoints = U.readUInt16(), this.maxStorage = U.readUInt16(), this.maxFunctionDefs = U.readUInt16(), this.maxInstructionDefs = U.readUInt16(), this.maxStackElements = U.readUInt16(), this.maxSizeOfInstructions = U.readUInt16(), this.maxComponentElements = U.readUInt16(), this.maxComponentDepth = U.readUInt16();
        }, L;
      }(), V = function(AA) {
        function L() {
          return L.__super__.constructor.apply(this, arguments);
        }
        return C(L, p), L.prototype.tag = "hmtx", L.prototype.parse = function(U) {
          var P, I, G, M, sA, X, lA;
          for (U.pos = this.offset, this.metrics = [], M = 0, X = this.file.hhea.numberOfMetrics; 0 <= X ? M < X : X < M; 0 <= X ? ++M : --M)
            this.metrics.push({ advance: U.readUInt16(), lsb: U.readInt16() });
          for (I = this.file.maxp.numGlyphs - this.file.hhea.numberOfMetrics, this.leftSideBearings = function() {
            var rA, x;
            for (x = [], rA = 0; 0 <= I ? rA < I : I < rA; 0 <= I ? ++rA : --rA)
              x.push(U.readInt16());
            return x;
          }(), this.widths = (function() {
            var rA, x, O, h;
            for (h = [], rA = 0, x = (O = this.metrics).length; rA < x; rA++)
              G = O[rA], h.push(G.advance);
            return h;
          }).call(this), P = this.widths[this.widths.length - 1], lA = [], sA = 0; 0 <= I ? sA < I : I < sA; 0 <= I ? ++sA : --sA)
            lA.push(this.widths.push(P));
          return lA;
        }, L.prototype.forGlyph = function(U) {
          return U in this.metrics ? this.metrics[U] : { advance: this.metrics[this.metrics.length - 1].advance, lsb: this.leftSideBearings[U - this.metrics.length] };
        }, L;
      }(), Q = [].slice, q = function(AA) {
        function L() {
          return L.__super__.constructor.apply(this, arguments);
        }
        return C(L, p), L.prototype.tag = "glyf", L.prototype.parse = function(U) {
          return this.cache = {};
        }, L.prototype.glyphFor = function(U) {
          var P, I, G, M, sA, X, lA, rA, x, O;
          return (U = U) in this.cache ? this.cache[U] : (M = this.file.loca, P = this.file.contents, I = M.indexOf(U), (G = M.lengthOf(U)) === 0 ? this.cache[U] = null : (P.pos = this.offset + I, sA = (X = new w(P.read(G))).readShort(), rA = X.readShort(), O = X.readShort(), lA = X.readShort(), x = X.readShort(), this.cache[U] = sA === -1 ? new z(X, rA, O, lA, x) : new K(X, sA, rA, O, lA, x), this.cache[U]));
        }, L.prototype.encode = function(U, P, I) {
          var G, M, sA, X, lA;
          for (sA = [], M = [], X = 0, lA = P.length; X < lA; X++)
            G = U[P[X]], M.push(sA.length), G && (sA = sA.concat(G.encode(I)));
          return M.push(sA.length), { table: sA, offsets: M };
        }, L;
      }(), K = function() {
        function AA(L, U, P, I, G, M) {
          this.raw = L, this.numberOfContours = U, this.xMin = P, this.yMin = I, this.xMax = G, this.yMax = M, this.compound = !1;
        }
        return AA.prototype.encode = function() {
          return this.raw.data;
        }, AA;
      }(), z = function() {
        function AA(L, U, P, I, G) {
          var M, sA;
          for (this.raw = L, this.xMin = U, this.yMin = P, this.xMax = I, this.yMax = G, this.compound = !0, this.glyphIDs = [], this.glyphOffsets = [], M = this.raw; sA = M.readShort(), this.glyphOffsets.push(M.pos), this.glyphIDs.push(M.readShort()), 32 & sA; )
            M.pos += 1 & sA ? 4 : 2, 128 & sA ? M.pos += 8 : 64 & sA ? M.pos += 4 : 8 & sA && (M.pos += 2);
        }
        return AA.prototype.encode = function(L) {
          var U, P, I, G, M;
          for (P = new w(Q.call(this.raw.data)), U = I = 0, G = (M = this.glyphIDs).length; I < G; U = ++I)
            M[U], P.pos = this.glyphOffsets[U];
          return P.data;
        }, AA;
      }(), $ = function(AA) {
        function L() {
          return L.__super__.constructor.apply(this, arguments);
        }
        return C(L, p), L.prototype.tag = "loca", L.prototype.parse = function(U) {
          var P;
          return U.pos = this.offset, P = this.file.head.indexToLocFormat, this.offsets = P === 0 ? (function() {
            var I, G, M;
            for (M = [], I = 0, G = this.length; I < G; I += 2)
              M.push(2 * U.readUInt16());
            return M;
          }).call(this) : (function() {
            var I, G, M;
            for (M = [], I = 0, G = this.length; I < G; I += 4)
              M.push(U.readUInt32());
            return M;
          }).call(this);
        }, L.prototype.indexOf = function(U) {
          return this.offsets[U];
        }, L.prototype.lengthOf = function(U) {
          return this.offsets[U + 1] - this.offsets[U];
        }, L.prototype.encode = function(U, P) {
          for (var I = new Uint32Array(this.offsets.length), G = 0, M = 0, sA = 0; sA < I.length; ++sA)
            if (I[sA] = G, M < P.length && P[M] == sA) {
              ++M, I[sA] = G;
              var X = this.offsets[sA], lA = this.offsets[sA + 1] - X;
              0 < lA && (G += lA);
            }
          for (var rA = new Array(4 * I.length), x = 0; x < I.length; ++x)
            rA[4 * x + 3] = 255 & I[x], rA[4 * x + 2] = (65280 & I[x]) >> 8, rA[4 * x + 1] = (16711680 & I[x]) >> 16, rA[4 * x] = (4278190080 & I[x]) >> 24;
          return rA;
        }, L;
      }(), uA = function() {
        function AA(L) {
          this.font = L, this.subset = {}, this.unicodes = {}, this.next = 33;
        }
        return AA.prototype.generateCmap = function() {
          var L, U, P, I, G;
          for (U in I = this.font.cmap.tables[0].codeMap, L = {}, G = this.subset)
            P = G[U], L[U] = I[P];
          return L;
        }, AA.prototype.glyphsFor = function(L) {
          var U, P, I, G, M, sA, X;
          for (I = {}, M = 0, sA = L.length; M < sA; M++)
            I[G = L[M]] = this.font.glyf.glyphFor(G);
          for (G in U = [], I)
            (P = I[G]) != null && P.compound && U.push.apply(U, P.glyphIDs);
          if (0 < U.length)
            for (G in X = this.glyphsFor(U))
              P = X[G], I[G] = P;
          return I;
        }, AA.prototype.encode = function(L) {
          var U, P, I, G, M, sA, X, lA, rA, x, O, h, b, S, R;
          for (P in U = E.encode(this.generateCmap(), "unicode"), G = this.glyphsFor(L), O = { 0: 0 }, R = U.charMap)
            O[(sA = R[P]).old] = sA.new;
          for (h in x = U.maxGlyphID, G)
            h in O || (O[h] = x++);
          return lA = function(iA) {
            var cA, gA;
            for (cA in gA = {}, iA)
              gA[iA[cA]] = cA;
            return gA;
          }(O), rA = Object.keys(lA).sort(function(iA, cA) {
            return iA - cA;
          }), b = function() {
            var iA, cA, gA;
            for (gA = [], iA = 0, cA = rA.length; iA < cA; iA++)
              M = rA[iA], gA.push(lA[M]);
            return gA;
          }(), I = this.font.glyf.encode(G, b, O), X = this.font.loca.encode(I.offsets, b), S = { cmap: this.font.cmap.raw(), glyf: I.table, loca: X, hmtx: this.font.hmtx.raw(), hhea: this.font.hhea.raw(), maxp: this.font.maxp.raw(), post: this.font.post.raw(), name: this.font.name.raw(), head: this.font.head.raw() }, this.font.os2.exists && (S["OS/2"] = this.font.os2.raw()), this.font.directory.encode(S);
        }, AA;
      }();
      a.API.PDFObject = function() {
        var AA;
        function L() {
        }
        return AA = function(U, P) {
          return (Array(P + 1).join("0") + U).slice(-P);
        }, L.convert = function(U) {
          var P, I, G, M;
          if (Array.isArray(U))
            return "[" + function() {
              var sA, X, lA;
              for (lA = [], sA = 0, X = U.length; sA < X; sA++)
                P = U[sA], lA.push(L.convert(P));
              return lA;
            }().join(" ") + "]";
          if (typeof U == "string")
            return "/" + U;
          if (U != null && U.isString)
            return "(" + U + ")";
          if (U instanceof Date)
            return "(D:" + AA(U.getUTCFullYear(), 4) + AA(U.getUTCMonth(), 2) + AA(U.getUTCDate(), 2) + AA(U.getUTCHours(), 2) + AA(U.getUTCMinutes(), 2) + AA(U.getUTCSeconds(), 2) + "Z)";
          if ({}.toString.call(U) === "[object Object]") {
            for (I in G = ["<<"], U)
              M = U[I], G.push("/" + I + " " + L.convert(M));
            return G.push(">>"), G.join(`
`);
          }
          return "" + U;
        }, L;
      }();
    }(at), /*
      # PNG.js
      # Copyright (c) 2011 Devon Govett
      # MIT LICENSE
      # 
      # 
      */
    ii = typeof self < "u" && self || typeof window < "u" && window || typeof It < "u" && It || Function('return typeof this === "object" && this.content')() || Function("return this")(), fs = function() {
      var a, B, v;
      function s(n) {
        var i, c, l, u, p, w, f, d, C, m, F, E, H, _;
        for (this.data = n, this.pos = 8, this.palette = [], this.imgData = [], this.transparency = {}, this.animation = null, this.text = {}, w = null; ; ) {
          switch (i = this.readUInt32(), C = (function() {
            var N, j;
            for (j = [], N = 0; N < 4; ++N)
              j.push(String.fromCharCode(this.data[this.pos++]));
            return j;
          }).call(this).join("")) {
            case "IHDR":
              this.width = this.readUInt32(), this.height = this.readUInt32(), this.bits = this.data[this.pos++], this.colorType = this.data[this.pos++], this.compressionMethod = this.data[this.pos++], this.filterMethod = this.data[this.pos++], this.interlaceMethod = this.data[this.pos++];
              break;
            case "acTL":
              this.animation = { numFrames: this.readUInt32(), numPlays: this.readUInt32() || 1 / 0, frames: [] };
              break;
            case "PLTE":
              this.palette = this.read(i);
              break;
            case "fcTL":
              w && this.animation.frames.push(w), this.pos += 4, w = { width: this.readUInt32(), height: this.readUInt32(), xOffset: this.readUInt32(), yOffset: this.readUInt32() }, p = this.readUInt16(), u = this.readUInt16() || 100, w.delay = 1e3 * p / u, w.disposeOp = this.data[this.pos++], w.blendOp = this.data[this.pos++], w.data = [];
              break;
            case "IDAT":
            case "fdAT":
              for (C === "fdAT" && (this.pos += 4, i -= 4), n = (w != null ? w.data : void 0) || this.imgData, E = 0; 0 <= i ? E < i : i < E; 0 <= i ? ++E : --E)
                n.push(this.data[this.pos++]);
              break;
            case "tRNS":
              switch (this.transparency = {}, this.colorType) {
                case 3:
                  if (l = this.palette.length / 3, this.transparency.indexed = this.read(i), this.transparency.indexed.length > l)
                    throw new Error("More transparent colors than palette size");
                  if (0 < (m = l - this.transparency.indexed.length))
                    for (H = 0; 0 <= m ? H < m : m < H; 0 <= m ? ++H : --H)
                      this.transparency.indexed.push(255);
                  break;
                case 0:
                  this.transparency.grayscale = this.read(i)[0];
                  break;
                case 2:
                  this.transparency.rgb = this.read(i);
              }
              break;
            case "tEXt":
              f = (F = this.read(i)).indexOf(0), d = String.fromCharCode.apply(String, F.slice(0, f)), this.text[d] = String.fromCharCode.apply(String, F.slice(f + 1));
              break;
            case "IEND":
              return w && this.animation.frames.push(w), this.colors = (function() {
                switch (this.colorType) {
                  case 0:
                  case 3:
                  case 4:
                    return 1;
                  case 2:
                  case 6:
                    return 3;
                }
              }).call(this), this.hasAlphaChannel = (_ = this.colorType) === 4 || _ === 6, c = this.colors + (this.hasAlphaChannel ? 1 : 0), this.pixelBitlength = this.bits * c, this.colorSpace = (function() {
                switch (this.colors) {
                  case 1:
                    return "DeviceGray";
                  case 3:
                    return "DeviceRGB";
                }
              }).call(this), void (this.imgData = new Uint8Array(this.imgData));
            default:
              this.pos += i;
          }
          if (this.pos += 4, this.pos > this.data.length)
            throw new Error("Incomplete or corrupt PNG file");
        }
      }
      s.load = function(n, i, c) {
        var l;
        return typeof i == "function" && (c = i), (l = new XMLHttpRequest()).open("GET", n, !0), l.responseType = "arraybuffer", l.onload = function() {
          var u;
          return u = new s(new Uint8Array(l.response || l.mozResponseArrayBuffer)), typeof (i != null ? i.getContext : void 0) == "function" && u.render(i), typeof c == "function" ? c(u) : void 0;
        }, l.send(null);
      }, s.prototype.read = function(n) {
        var i, c;
        for (c = [], i = 0; 0 <= n ? i < n : n < i; 0 <= n ? ++i : --i)
          c.push(this.data[this.pos++]);
        return c;
      }, s.prototype.readUInt32 = function() {
        return this.data[this.pos++] << 24 | this.data[this.pos++] << 16 | this.data[this.pos++] << 8 | this.data[this.pos++];
      }, s.prototype.readUInt16 = function() {
        return this.data[this.pos++] << 8 | this.data[this.pos++];
      }, s.prototype.decodePixels = function(n) {
        var i = this.pixelBitlength / 8, c = new Uint8Array(this.width * this.height * i), l = 0, u = this;
        if (n == null && (n = this.imgData), n.length === 0)
          return new Uint8Array(0);
        function p(w, f, d, C) {
          var m, F, E, H, _, N, j, Z, W, V, Q, q, K, z, $, uA, AA, L, U, P, I, G = Math.ceil((u.width - w) / d), M = Math.ceil((u.height - f) / C), sA = u.width == G && u.height == M;
          for (z = i * G, q = sA ? c : new Uint8Array(z * M), N = n.length, F = K = 0; K < M && l < N; ) {
            switch (n[l++]) {
              case 0:
                for (H = AA = 0; AA < z; H = AA += 1)
                  q[F++] = n[l++];
                break;
              case 1:
                for (H = L = 0; L < z; H = L += 1)
                  m = n[l++], _ = H < i ? 0 : q[F - i], q[F++] = (m + _) % 256;
                break;
              case 2:
                for (H = U = 0; U < z; H = U += 1)
                  m = n[l++], E = (H - H % i) / i, $ = K && q[(K - 1) * z + E * i + H % i], q[F++] = ($ + m) % 256;
                break;
              case 3:
                for (H = P = 0; P < z; H = P += 1)
                  m = n[l++], E = (H - H % i) / i, _ = H < i ? 0 : q[F - i], $ = K && q[(K - 1) * z + E * i + H % i], q[F++] = (m + Math.floor((_ + $) / 2)) % 256;
                break;
              case 4:
                for (H = I = 0; I < z; H = I += 1)
                  m = n[l++], E = (H - H % i) / i, _ = H < i ? 0 : q[F - i], K === 0 ? $ = uA = 0 : ($ = q[(K - 1) * z + E * i + H % i], uA = E && q[(K - 1) * z + (E - 1) * i + H % i]), j = _ + $ - uA, Z = Math.abs(j - _), V = Math.abs(j - $), Q = Math.abs(j - uA), W = Z <= V && Z <= Q ? _ : V <= Q ? $ : uA, q[F++] = (m + W) % 256;
                break;
              default:
                throw new Error("Invalid filter algorithm: " + n[l - 1]);
            }
            if (!sA) {
              var X = ((f + K * C) * u.width + w) * i, lA = K * z;
              for (H = 0; H < G; H += 1) {
                for (var rA = 0; rA < i; rA += 1)
                  c[X++] = q[lA++];
                X += (d - 1) * i;
              }
            }
            K++;
          }
        }
        return n = (n = new Bs(n)).getBytes(), u.interlaceMethod == 1 ? (p(0, 0, 8, 8), p(4, 0, 8, 8), p(0, 4, 4, 8), p(2, 0, 4, 4), p(0, 2, 2, 4), p(1, 0, 2, 2), p(0, 1, 1, 2)) : p(0, 0, 1, 1), c;
      }, s.prototype.decodePalette = function() {
        var n, i, c, l, u, p, w, f, d;
        for (c = this.palette, p = this.transparency.indexed || [], u = new Uint8Array((p.length || 0) + c.length), l = 0, c.length, i = w = n = 0, f = c.length; w < f; i = w += 3)
          u[l++] = c[i], u[l++] = c[i + 1], u[l++] = c[i + 2], u[l++] = (d = p[n++]) != null ? d : 255;
        return u;
      }, s.prototype.copyToImageData = function(n, i) {
        var c, l, u, p, w, f, d, C, m, F, E;
        if (l = this.colors, m = null, c = this.hasAlphaChannel, this.palette.length && (m = (E = this._decodedPalette) != null ? E : this._decodedPalette = this.decodePalette(), l = 4, c = !0), C = (u = n.data || n).length, w = m || i, p = f = 0, l === 1)
          for (; p < C; )
            d = m ? 4 * i[p / 4] : f, F = w[d++], u[p++] = F, u[p++] = F, u[p++] = F, u[p++] = c ? w[d++] : 255, f = d;
        else
          for (; p < C; )
            d = m ? 4 * i[p / 4] : f, u[p++] = w[d++], u[p++] = w[d++], u[p++] = w[d++], u[p++] = c ? w[d++] : 255, f = d;
      }, s.prototype.decode = function() {
        var n;
        return n = new Uint8Array(this.width * this.height * 4), this.copyToImageData(n, this.decodePixels()), n;
      };
      try {
        B = ii.document.createElement("canvas"), v = B.getContext("2d");
      } catch {
        return -1;
      }
      return a = function(n) {
        var i;
        return v.width = n.width, v.height = n.height, v.clearRect(0, 0, n.width, n.height), v.putImageData(n, 0, 0), (i = new Image()).src = B.toDataURL(), i;
      }, s.prototype.decodeFrames = function(n) {
        var i, c, l, u, p, w, f, d;
        if (this.animation) {
          for (d = [], c = p = 0, w = (f = this.animation.frames).length; p < w; c = ++p)
            i = f[c], l = n.createImageData(i.width, i.height), u = this.decodePixels(new Uint8Array(i.data)), this.copyToImageData(l, u), i.imageData = l, d.push(i.image = a(l));
          return d;
        }
      }, s.prototype.renderFrame = function(n, i) {
        var c, l, u;
        return c = (l = this.animation.frames)[i], u = l[i - 1], i === 0 && n.clearRect(0, 0, this.width, this.height), (u != null ? u.disposeOp : void 0) === 1 ? n.clearRect(u.xOffset, u.yOffset, u.width, u.height) : (u != null ? u.disposeOp : void 0) === 2 && n.putImageData(u.imageData, u.xOffset, u.yOffset), c.blendOp === 0 && n.clearRect(c.xOffset, c.yOffset, c.width, c.height), n.drawImage(c.image, c.xOffset, c.yOffset);
      }, s.prototype.animate = function(n) {
        var i, c, l, u, p, w, f = this;
        return c = 0, w = this.animation, u = w.numFrames, l = w.frames, p = w.numPlays, (i = function() {
          var d, C;
          if (d = c++ % u, C = l[d], f.renderFrame(n, d), 1 < u && c / u < p)
            return f.animation._timeout = setTimeout(i, C.delay);
        })();
      }, s.prototype.stopAnimation = function() {
        var n;
        return clearTimeout((n = this.animation) != null ? n._timeout : void 0);
      }, s.prototype.render = function(n) {
        var i, c;
        return n._png && n._png.stopAnimation(), n._png = this, n.width = this.width, n.height = this.height, i = n.getContext("2d"), this.animation ? (this.decodeFrames(i), this.animate(i)) : (c = i.createImageData(this.width, this.height), this.copyToImageData(c, this.decodePixels()), i.putImageData(c, 0, 0));
      }, s;
    }(), ii.PNG = fs;
    var ps = function() {
      function a() {
        this.pos = 0, this.bufferLength = 0, this.eof = !1, this.buffer = null;
      }
      return a.prototype = { ensureBuffer: function(B) {
        var v = this.buffer, s = v ? v.byteLength : 0;
        if (B < s)
          return v;
        for (var n = 512; n < B; )
          n <<= 1;
        for (var i = new Uint8Array(n), c = 0; c < s; ++c)
          i[c] = v[c];
        return this.buffer = i;
      }, getByte: function() {
        for (var B = this.pos; this.bufferLength <= B; ) {
          if (this.eof)
            return null;
          this.readBlock();
        }
        return this.buffer[this.pos++];
      }, getBytes: function(B) {
        var v = this.pos;
        if (B) {
          this.ensureBuffer(v + B);
          for (var s = v + B; !this.eof && this.bufferLength < s; )
            this.readBlock();
          var n = this.bufferLength;
          n < s && (s = n);
        } else {
          for (; !this.eof; )
            this.readBlock();
          s = this.bufferLength;
        }
        return this.pos = s, this.buffer.subarray(v, s);
      }, lookChar: function() {
        for (var B = this.pos; this.bufferLength <= B; ) {
          if (this.eof)
            return null;
          this.readBlock();
        }
        return String.fromCharCode(this.buffer[this.pos]);
      }, getChar: function() {
        for (var B = this.pos; this.bufferLength <= B; ) {
          if (this.eof)
            return null;
          this.readBlock();
        }
        return String.fromCharCode(this.buffer[this.pos++]);
      }, makeSubStream: function(B, v, s) {
        for (var n = B + v; this.bufferLength <= n && !this.eof; )
          this.readBlock();
        return new Stream(this.buffer, B, v, s);
      }, skip: function(B) {
        B || (B = 1), this.pos += B;
      }, reset: function() {
        this.pos = 0;
      } }, a;
    }(), Bs = function() {
      if (typeof Uint32Array < "u") {
        var a = new Uint32Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), B = new Uint32Array([3, 4, 5, 6, 7, 8, 9, 10, 65547, 65549, 65551, 65553, 131091, 131095, 131099, 131103, 196643, 196651, 196659, 196667, 262211, 262227, 262243, 262259, 327811, 327843, 327875, 327907, 258, 258, 258]), v = new Uint32Array([1, 2, 3, 4, 65541, 65543, 131081, 131085, 196625, 196633, 262177, 262193, 327745, 327777, 393345, 393409, 459009, 459137, 524801, 525057, 590849, 591361, 657409, 658433, 724993, 727041, 794625, 798721, 868353, 876545]), s = [new Uint32Array([459008, 524368, 524304, 524568, 459024, 524400, 524336, 590016, 459016, 524384, 524320, 589984, 524288, 524416, 524352, 590048, 459012, 524376, 524312, 589968, 459028, 524408, 524344, 590032, 459020, 524392, 524328, 59e4, 524296, 524424, 524360, 590064, 459010, 524372, 524308, 524572, 459026, 524404, 524340, 590024, 459018, 524388, 524324, 589992, 524292, 524420, 524356, 590056, 459014, 524380, 524316, 589976, 459030, 524412, 524348, 590040, 459022, 524396, 524332, 590008, 524300, 524428, 524364, 590072, 459009, 524370, 524306, 524570, 459025, 524402, 524338, 590020, 459017, 524386, 524322, 589988, 524290, 524418, 524354, 590052, 459013, 524378, 524314, 589972, 459029, 524410, 524346, 590036, 459021, 524394, 524330, 590004, 524298, 524426, 524362, 590068, 459011, 524374, 524310, 524574, 459027, 524406, 524342, 590028, 459019, 524390, 524326, 589996, 524294, 524422, 524358, 590060, 459015, 524382, 524318, 589980, 459031, 524414, 524350, 590044, 459023, 524398, 524334, 590012, 524302, 524430, 524366, 590076, 459008, 524369, 524305, 524569, 459024, 524401, 524337, 590018, 459016, 524385, 524321, 589986, 524289, 524417, 524353, 590050, 459012, 524377, 524313, 589970, 459028, 524409, 524345, 590034, 459020, 524393, 524329, 590002, 524297, 524425, 524361, 590066, 459010, 524373, 524309, 524573, 459026, 524405, 524341, 590026, 459018, 524389, 524325, 589994, 524293, 524421, 524357, 590058, 459014, 524381, 524317, 589978, 459030, 524413, 524349, 590042, 459022, 524397, 524333, 590010, 524301, 524429, 524365, 590074, 459009, 524371, 524307, 524571, 459025, 524403, 524339, 590022, 459017, 524387, 524323, 589990, 524291, 524419, 524355, 590054, 459013, 524379, 524315, 589974, 459029, 524411, 524347, 590038, 459021, 524395, 524331, 590006, 524299, 524427, 524363, 590070, 459011, 524375, 524311, 524575, 459027, 524407, 524343, 590030, 459019, 524391, 524327, 589998, 524295, 524423, 524359, 590062, 459015, 524383, 524319, 589982, 459031, 524415, 524351, 590046, 459023, 524399, 524335, 590014, 524303, 524431, 524367, 590078, 459008, 524368, 524304, 524568, 459024, 524400, 524336, 590017, 459016, 524384, 524320, 589985, 524288, 524416, 524352, 590049, 459012, 524376, 524312, 589969, 459028, 524408, 524344, 590033, 459020, 524392, 524328, 590001, 524296, 524424, 524360, 590065, 459010, 524372, 524308, 524572, 459026, 524404, 524340, 590025, 459018, 524388, 524324, 589993, 524292, 524420, 524356, 590057, 459014, 524380, 524316, 589977, 459030, 524412, 524348, 590041, 459022, 524396, 524332, 590009, 524300, 524428, 524364, 590073, 459009, 524370, 524306, 524570, 459025, 524402, 524338, 590021, 459017, 524386, 524322, 589989, 524290, 524418, 524354, 590053, 459013, 524378, 524314, 589973, 459029, 524410, 524346, 590037, 459021, 524394, 524330, 590005, 524298, 524426, 524362, 590069, 459011, 524374, 524310, 524574, 459027, 524406, 524342, 590029, 459019, 524390, 524326, 589997, 524294, 524422, 524358, 590061, 459015, 524382, 524318, 589981, 459031, 524414, 524350, 590045, 459023, 524398, 524334, 590013, 524302, 524430, 524366, 590077, 459008, 524369, 524305, 524569, 459024, 524401, 524337, 590019, 459016, 524385, 524321, 589987, 524289, 524417, 524353, 590051, 459012, 524377, 524313, 589971, 459028, 524409, 524345, 590035, 459020, 524393, 524329, 590003, 524297, 524425, 524361, 590067, 459010, 524373, 524309, 524573, 459026, 524405, 524341, 590027, 459018, 524389, 524325, 589995, 524293, 524421, 524357, 590059, 459014, 524381, 524317, 589979, 459030, 524413, 524349, 590043, 459022, 524397, 524333, 590011, 524301, 524429, 524365, 590075, 459009, 524371, 524307, 524571, 459025, 524403, 524339, 590023, 459017, 524387, 524323, 589991, 524291, 524419, 524355, 590055, 459013, 524379, 524315, 589975, 459029, 524411, 524347, 590039, 459021, 524395, 524331, 590007, 524299, 524427, 524363, 590071, 459011, 524375, 524311, 524575, 459027, 524407, 524343, 590031, 459019, 524391, 524327, 589999, 524295, 524423, 524359, 590063, 459015, 524383, 524319, 589983, 459031, 524415, 524351, 590047, 459023, 524399, 524335, 590015, 524303, 524431, 524367, 590079]), 9], n = [new Uint32Array([327680, 327696, 327688, 327704, 327684, 327700, 327692, 327708, 327682, 327698, 327690, 327706, 327686, 327702, 327694, 0, 327681, 327697, 327689, 327705, 327685, 327701, 327693, 327709, 327683, 327699, 327691, 327707, 327687, 327703, 327695, 0]), 5];
        return (c.prototype = Object.create(ps.prototype)).getBits = function(l) {
          for (var u, p = this.codeSize, w = this.codeBuf, f = this.bytes, d = this.bytesPos; p < l; )
            (u = f[d++]) === void 0 && i("Bad encoding in flate stream"), w |= u << p, p += 8;
          return u = w & (1 << l) - 1, this.codeBuf = w >> l, this.codeSize = p -= l, this.bytesPos = d, u;
        }, c.prototype.getCode = function(l) {
          for (var u = l[0], p = l[1], w = this.codeSize, f = this.codeBuf, d = this.bytes, C = this.bytesPos; w < p; ) {
            var m;
            (m = d[C++]) === void 0 && i("Bad encoding in flate stream"), f |= m << w, w += 8;
          }
          var F = u[f & (1 << p) - 1], E = F >> 16, H = 65535 & F;
          return (w == 0 || w < E || E == 0) && i("Bad encoding in flate stream"), this.codeBuf = f >> E, this.codeSize = w - E, this.bytesPos = C, H;
        }, c.prototype.generateHuffmanTable = function(l) {
          for (var u = l.length, p = 0, w = 0; w < u; ++w)
            l[w] > p && (p = l[w]);
          for (var f = 1 << p, d = new Uint32Array(f), C = 1, m = 0, F = 2; C <= p; ++C, m <<= 1, F <<= 1)
            for (var E = 0; E < u; ++E)
              if (l[E] == C) {
                var H = 0, _ = m;
                for (w = 0; w < C; ++w)
                  H = H << 1 | 1 & _, _ >>= 1;
                for (w = H; w < f; w += F)
                  d[w] = C << 16 | E;
                ++m;
              }
          return [d, p];
        }, c.prototype.readBlock = function() {
          function l(M, sA, X, lA, rA) {
            for (var x = M.getBits(X) + lA; 0 < x--; )
              sA[F++] = rA;
          }
          var u = this.getBits(3);
          if (1 & u && (this.eof = !0), (u >>= 1) != 0) {
            var p, w;
            if (u == 1)
              p = s, w = n;
            else if (u == 2) {
              for (var f = this.getBits(5) + 257, d = this.getBits(5) + 1, C = this.getBits(4) + 4, m = Array(a.length), F = 0; F < C; )
                m[a[F++]] = this.getBits(3);
              for (var E = this.generateHuffmanTable(m), H = 0, _ = (F = 0, f + d), N = new Array(_); F < _; ) {
                var j = this.getCode(E);
                j == 16 ? l(this, N, 2, 3, H) : j == 17 ? l(this, N, 3, 3, H = 0) : j == 18 ? l(this, N, 7, 11, H = 0) : N[F++] = H = j;
              }
              p = this.generateHuffmanTable(N.slice(0, f)), w = this.generateHuffmanTable(N.slice(f, _));
            } else
              i("Unknown block type in flate stream");
            for (var Z = (P = this.buffer) ? P.length : 0, W = this.bufferLength; ; ) {
              var V = this.getCode(p);
              if (V < 256)
                Z <= W + 1 && (Z = (P = this.ensureBuffer(W + 1)).length), P[W++] = V;
              else {
                if (V == 256)
                  return void (this.bufferLength = W);
                var Q = (V = B[V -= 257]) >> 16;
                0 < Q && (Q = this.getBits(Q)), H = (65535 & V) + Q, V = this.getCode(w), 0 < (Q = (V = v[V]) >> 16) && (Q = this.getBits(Q));
                var q = (65535 & V) + Q;
                Z <= W + H && (Z = (P = this.ensureBuffer(W + H)).length);
                for (var K = 0; K < H; ++K, ++W)
                  P[W] = P[W - q];
              }
            }
          } else {
            var z, $ = this.bytes, uA = this.bytesPos;
            (z = $[uA++]) === void 0 && i("Bad block header in flate stream");
            var AA = z;
            (z = $[uA++]) === void 0 && i("Bad block header in flate stream"), AA |= z << 8, (z = $[uA++]) === void 0 && i("Bad block header in flate stream");
            var L = z;
            (z = $[uA++]) === void 0 && i("Bad block header in flate stream"), (L |= z << 8) != (65535 & ~AA) && i("Bad uncompressed block length in flate stream"), this.codeBuf = 0, this.codeSize = 0;
            var U = this.bufferLength, P = this.ensureBuffer(U + AA), I = U + AA;
            this.bufferLength = I;
            for (var G = U; G < I; ++G) {
              if ((z = $[uA++]) === void 0) {
                this.eof = !0;
                break;
              }
              P[G] = z;
            }
            this.bytesPos = uA;
          }
        }, c;
      }
      function i(l) {
        throw new Error(l);
      }
      function c(l) {
        var u = 0, p = l[u++], w = l[u++];
        p != -1 && w != -1 || i("Invalid header in flate stream"), (15 & p) != 8 && i("Unknown compression method in flate stream"), ((p << 8) + w) % 31 != 0 && i("Bad FCHECK in flate stream"), 32 & w && i("FDICT bit set in flate stream"), this.bytes = l, this.bytesPos = 2, this.codeSize = 0, this.codeBuf = 0, ps.call(this);
      }
    }();
    return function(a) {
      if (typeof a.console != "object") {
        a.console = {};
        for (var B, v, s = a.console, n = function() {
        }, i = ["memory"], c = "assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn".split(","); B = i.pop(); )
          s[B] || (s[B] = {});
        for (; v = c.pop(); )
          s[v] || (s[v] = n);
      }
      var l, u, p, w, f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      a.btoa === void 0 && (a.btoa = function(d) {
        var C, m, F, E, H, _ = 0, N = 0, j = "", Z = [];
        if (!d)
          return d;
        for (; C = (H = d.charCodeAt(_++) << 16 | d.charCodeAt(_++) << 8 | d.charCodeAt(_++)) >> 18 & 63, m = H >> 12 & 63, F = H >> 6 & 63, E = 63 & H, Z[N++] = f.charAt(C) + f.charAt(m) + f.charAt(F) + f.charAt(E), _ < d.length; )
          ;
        j = Z.join("");
        var W = d.length % 3;
        return (W ? j.slice(0, W - 3) : j) + "===".slice(W || 3);
      }), a.atob === void 0 && (a.atob = function(d) {
        var C, m, F, E, H, _, N = 0, j = 0, Z = [];
        if (!d)
          return d;
        for (d += ""; C = (_ = f.indexOf(d.charAt(N++)) << 18 | f.indexOf(d.charAt(N++)) << 12 | (E = f.indexOf(d.charAt(N++))) << 6 | (H = f.indexOf(d.charAt(N++)))) >> 16 & 255, m = _ >> 8 & 255, F = 255 & _, Z[j++] = E == 64 ? String.fromCharCode(C) : H == 64 ? String.fromCharCode(C, m) : String.fromCharCode(C, m, F), N < d.length; )
          ;
        return Z.join("");
      }), Array.prototype.map || (Array.prototype.map = function(d) {
        if (this == null || typeof d != "function")
          throw new TypeError();
        for (var C = Object(this), m = C.length >>> 0, F = new Array(m), E = 1 < arguments.length ? arguments[1] : void 0, H = 0; H < m; H++)
          H in C && (F[H] = d.call(E, C[H], H, C));
        return F;
      }), Array.isArray || (Array.isArray = function(d) {
        return Object.prototype.toString.call(d) === "[object Array]";
      }), Array.prototype.forEach || (Array.prototype.forEach = function(d, C) {
        if (this == null || typeof d != "function")
          throw new TypeError();
        for (var m = Object(this), F = m.length >>> 0, E = 0; E < F; E++)
          E in m && d.call(C, m[E], E, m);
      }), Object.keys || (Object.keys = (l = Object.prototype.hasOwnProperty, u = !{ toString: null }.propertyIsEnumerable("toString"), w = (p = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"]).length, function(d) {
        if (typeof d != "object" && (typeof d != "function" || d === null))
          throw new TypeError();
        var C, m, F = [];
        for (C in d)
          l.call(d, C) && F.push(C);
        if (u)
          for (m = 0; m < w; m++)
            l.call(d, p[m]) && F.push(p[m]);
        return F;
      })), typeof Object.assign != "function" && (Object.assign = function(d) {
        if (d == null)
          throw new TypeError("Cannot convert undefined or null to object");
        d = Object(d);
        for (var C = 1; C < arguments.length; C++) {
          var m = arguments[C];
          if (m != null)
            for (var F in m)
              Object.prototype.hasOwnProperty.call(m, F) && (d[F] = m[F]);
        }
        return d;
      }), String.prototype.trim || (String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, "");
      }), String.prototype.trimLeft || (String.prototype.trimLeft = function() {
        return this.replace(/^\s+/g, "");
      }), String.prototype.trimRight || (String.prototype.trimRight = function() {
        return this.replace(/\s+$/g, "");
      });
    }(typeof self < "u" && self || typeof window < "u" && window || typeof It < "u" && It || Function('return typeof this === "object" && this.content')() || Function("return this")()), at;
  });
})(Ti, Ti.exports);
var Ta = Ti.exports;
const ns = /* @__PURE__ */ Sa(Ta);
/*!
 * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Li = function(t, A) {
  return Li = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, e) {
    r.__proto__ = e;
  } || function(r, e) {
    for (var o in e)
      Object.prototype.hasOwnProperty.call(e, o) && (r[o] = e[o]);
  }, Li(t, A);
};
function Ce(t, A) {
  if (typeof A != "function" && A !== null)
    throw new TypeError("Class extends value " + String(A) + " is not a constructor or null");
  Li(t, A);
  function r() {
    this.constructor = t;
  }
  t.prototype = A === null ? Object.create(A) : (r.prototype = A.prototype, new r());
}
var Di = function() {
  return Di = Object.assign || function(A) {
    for (var r, e = 1, o = arguments.length; e < o; e++) {
      r = arguments[e];
      for (var g in r)
        Object.prototype.hasOwnProperty.call(r, g) && (A[g] = r[g]);
    }
    return A;
  }, Di.apply(this, arguments);
};
function Ae(t, A, r, e) {
  function o(g) {
    return g instanceof r ? g : new r(function(y) {
      y(g);
    });
  }
  return new (r || (r = Promise))(function(g, y) {
    function D(Y) {
      try {
        J(e.next(Y));
      } catch (aA) {
        y(aA);
      }
    }
    function T(Y) {
      try {
        J(e.throw(Y));
      } catch (aA) {
        y(aA);
      }
    }
    function J(Y) {
      Y.done ? g(Y.value) : o(Y.value).then(D, T);
    }
    J((e = e.apply(t, A || [])).next());
  });
}
function jt(t, A) {
  var r = { label: 0, sent: function() {
    if (g[0] & 1)
      throw g[1];
    return g[1];
  }, trys: [], ops: [] }, e, o, g, y;
  return y = { next: D(0), throw: D(1), return: D(2) }, typeof Symbol == "function" && (y[Symbol.iterator] = function() {
    return this;
  }), y;
  function D(J) {
    return function(Y) {
      return T([J, Y]);
    };
  }
  function T(J) {
    if (e)
      throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (e = 1, o && (g = J[0] & 2 ? o.return : J[0] ? o.throw || ((g = o.return) && g.call(o), 0) : o.next) && !(g = g.call(o, J[1])).done)
          return g;
        switch (o = 0, g && (J = [J[0] & 2, g.value]), J[0]) {
          case 0:
          case 1:
            g = J;
            break;
          case 4:
            return r.label++, { value: J[1], done: !1 };
          case 5:
            r.label++, o = J[1], J = [0];
            continue;
          case 7:
            J = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (g = r.trys, !(g = g.length > 0 && g[g.length - 1]) && (J[0] === 6 || J[0] === 2)) {
              r = 0;
              continue;
            }
            if (J[0] === 3 && (!g || J[1] > g[0] && J[1] < g[3])) {
              r.label = J[1];
              break;
            }
            if (J[0] === 6 && r.label < g[1]) {
              r.label = g[1], g = J;
              break;
            }
            if (g && r.label < g[2]) {
              r.label = g[2], r.ops.push(J);
              break;
            }
            g[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        J = A.call(t, r);
      } catch (Y) {
        J = [6, Y], o = 0;
      } finally {
        e = g = 0;
      }
    if (J[0] & 5)
      throw J[1];
    return { value: J[0] ? J[1] : void 0, done: !0 };
  }
}
function un(t, A, r) {
  if (r || arguments.length === 2)
    for (var e = 0, o = A.length, g; e < o; e++)
      (g || !(e in A)) && (g || (g = Array.prototype.slice.call(A, 0, e)), g[e] = A[e]);
  return t.concat(g || A);
}
var Le = (
  /** @class */
  function() {
    function t(A, r, e, o) {
      this.left = A, this.top = r, this.width = e, this.height = o;
    }
    return t.prototype.add = function(A, r, e, o) {
      return new t(this.left + A, this.top + r, this.width + e, this.height + o);
    }, t.fromClientRect = function(A, r) {
      return new t(r.left + A.windowBounds.left, r.top + A.windowBounds.top, r.width, r.height);
    }, t.fromDOMRectList = function(A, r) {
      var e = Array.from(r).find(function(o) {
        return o.width !== 0;
      });
      return e ? new t(e.left + A.windowBounds.left, e.top + A.windowBounds.top, e.width, e.height) : t.EMPTY;
    }, t.EMPTY = new t(0, 0, 0, 0), t;
  }()
), Xn = function(t, A) {
  return Le.fromClientRect(t, A.getBoundingClientRect());
}, La = function(t) {
  var A = t.body, r = t.documentElement;
  if (!A || !r)
    throw new Error("Unable to get document size");
  var e = Math.max(Math.max(A.scrollWidth, r.scrollWidth), Math.max(A.offsetWidth, r.offsetWidth), Math.max(A.clientWidth, r.clientWidth)), o = Math.max(Math.max(A.scrollHeight, r.scrollHeight), Math.max(A.offsetHeight, r.offsetHeight), Math.max(A.clientHeight, r.clientHeight));
  return new Le(0, 0, e, o);
}, Jn = function(t) {
  for (var A = [], r = 0, e = t.length; r < e; ) {
    var o = t.charCodeAt(r++);
    if (o >= 55296 && o <= 56319 && r < e) {
      var g = t.charCodeAt(r++);
      (g & 64512) === 56320 ? A.push(((o & 1023) << 10) + (g & 1023) + 65536) : (A.push(o), r--);
    } else
      A.push(o);
  }
  return A;
}, St = function() {
  for (var t = [], A = 0; A < arguments.length; A++)
    t[A] = arguments[A];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, t);
  var r = t.length;
  if (!r)
    return "";
  for (var e = [], o = -1, g = ""; ++o < r; ) {
    var y = t[o];
    y <= 65535 ? e.push(y) : (y -= 65536, e.push((y >> 10) + 55296, y % 1024 + 56320)), (o + 1 === r || e.length > 16384) && (g += String.fromCharCode.apply(String, e), e.length = 0);
  }
  return g;
}, Cs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Da = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var hn = 0; hn < Cs.length; hn++)
  Da[Cs.charCodeAt(hn)] = hn;
var vs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Dr = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var fn = 0; fn < vs.length; fn++)
  Dr[vs.charCodeAt(fn)] = fn;
var _a = function(t) {
  var A = t.length * 0.75, r = t.length, e, o = 0, g, y, D, T;
  t[t.length - 1] === "=" && (A--, t[t.length - 2] === "=" && A--);
  var J = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A), Y = Array.isArray(J) ? J : new Uint8Array(J);
  for (e = 0; e < r; e += 4)
    g = Dr[t.charCodeAt(e)], y = Dr[t.charCodeAt(e + 1)], D = Dr[t.charCodeAt(e + 2)], T = Dr[t.charCodeAt(e + 3)], Y[o++] = g << 2 | y >> 4, Y[o++] = (y & 15) << 4 | D >> 2, Y[o++] = (D & 3) << 6 | T & 63;
  return J;
}, Oa = function(t) {
  for (var A = t.length, r = [], e = 0; e < A; e += 2)
    r.push(t[e + 1] << 8 | t[e]);
  return r;
}, ka = function(t) {
  for (var A = t.length, r = [], e = 0; e < A; e += 4)
    r.push(t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e]);
  return r;
}, rr = 5, is = 6 + 5, li = 2, Ka = is - rr, Qo = 65536 >> rr, Ra = 1 << rr, ui = Ra - 1, Ma = 1024 >> rr, Pa = Qo + Ma, Na = Pa, Ga = 32, Va = Na + Ga, qa = 65536 >> is, ja = 1 << Ka, Wa = ja - 1, Qs = function(t, A, r) {
  return t.slice ? t.slice(A, r) : new Uint16Array(Array.prototype.slice.call(t, A, r));
}, Xa = function(t, A, r) {
  return t.slice ? t.slice(A, r) : new Uint32Array(Array.prototype.slice.call(t, A, r));
}, Ja = function(t, A) {
  var r = _a(t), e = Array.isArray(r) ? ka(r) : new Uint32Array(r), o = Array.isArray(r) ? Oa(r) : new Uint16Array(r), g = 24, y = Qs(o, g / 2, e[4] / 2), D = e[5] === 2 ? Qs(o, (g + e[4]) / 2) : Xa(e, Math.ceil((g + e[4]) / 4));
  return new za(e[0], e[1], e[2], e[3], y, D);
}, za = (
  /** @class */
  function() {
    function t(A, r, e, o, g, y) {
      this.initialValue = A, this.errorValue = r, this.highStart = e, this.highValueIndex = o, this.index = g, this.data = y;
    }
    return t.prototype.get = function(A) {
      var r;
      if (A >= 0) {
        if (A < 55296 || A > 56319 && A <= 65535)
          return r = this.index[A >> rr], r = (r << li) + (A & ui), this.data[r];
        if (A <= 65535)
          return r = this.index[Qo + (A - 55296 >> rr)], r = (r << li) + (A & ui), this.data[r];
        if (A < this.highStart)
          return r = Va - qa + (A >> is), r = this.index[r], r += A >> rr & Wa, r = this.index[r], r = (r << li) + (A & ui), this.data[r];
        if (A <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, t;
  }()
), ys = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ya = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var dn = 0; dn < ys.length; dn++)
  Ya[ys.charCodeAt(dn)] = dn;
var Za = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", Fs = 50, $a = 1, yo = 2, Fo = 3, Ac = 4, tc = 5, Us = 7, Uo = 8, bs = 9, Re = 10, _i = 11, xs = 12, Oi = 13, ec = 14, _r = 15, ki = 16, gn = 17, Hr = 18, rc = 19, Es = 20, Ki = 21, Sr = 22, hi = 23, ur = 24, ae = 25, Or = 26, kr = 27, hr = 28, nc = 29, tr = 30, ic = 31, pn = 32, Bn = 33, Ri = 34, Mi = 35, Pi = 36, jr = 37, Ni = 38, Dn = 39, _n = 40, fi = 41, bo = 42, sc = 43, oc = [9001, 65288], xo = "!", it = "×", wn = "÷", Gi = Ja(Za), He = [tr, Pi], Vi = [$a, yo, Fo, tc], Eo = [Re, Uo], Is = [kr, Or], ac = Vi.concat(Eo), Hs = [Ni, Dn, _n, Ri, Mi], cc = [_r, Oi], lc = function(t, A) {
  A === void 0 && (A = "strict");
  var r = [], e = [], o = [];
  return t.forEach(function(g, y) {
    var D = Gi.get(g);
    if (D > Fs ? (o.push(!0), D -= Fs) : o.push(!1), ["normal", "auto", "loose"].indexOf(A) !== -1 && [8208, 8211, 12316, 12448].indexOf(g) !== -1)
      return e.push(y), r.push(ki);
    if (D === Ac || D === _i) {
      if (y === 0)
        return e.push(y), r.push(tr);
      var T = r[y - 1];
      return ac.indexOf(T) === -1 ? (e.push(e[y - 1]), r.push(T)) : (e.push(y), r.push(tr));
    }
    if (e.push(y), D === ic)
      return r.push(A === "strict" ? Ki : jr);
    if (D === bo || D === nc)
      return r.push(tr);
    if (D === sc)
      return g >= 131072 && g <= 196605 || g >= 196608 && g <= 262141 ? r.push(jr) : r.push(tr);
    r.push(D);
  }), [e, r, o];
}, di = function(t, A, r, e) {
  var o = e[r];
  if (Array.isArray(t) ? t.indexOf(o) !== -1 : t === o)
    for (var g = r; g <= e.length; ) {
      g++;
      var y = e[g];
      if (y === A)
        return !0;
      if (y !== Re)
        break;
    }
  if (o === Re)
    for (var g = r; g > 0; ) {
      g--;
      var D = e[g];
      if (Array.isArray(t) ? t.indexOf(D) !== -1 : t === D)
        for (var T = r; T <= e.length; ) {
          T++;
          var y = e[T];
          if (y === A)
            return !0;
          if (y !== Re)
            break;
        }
      if (D !== Re)
        break;
    }
  return !1;
}, Ss = function(t, A) {
  for (var r = t; r >= 0; ) {
    var e = A[r];
    if (e === Re)
      r--;
    else
      return e;
  }
  return 0;
}, uc = function(t, A, r, e, o) {
  if (r[e] === 0)
    return it;
  var g = e - 1;
  if (Array.isArray(o) && o[g] === !0)
    return it;
  var y = g - 1, D = g + 1, T = A[g], J = y >= 0 ? A[y] : 0, Y = A[D];
  if (T === yo && Y === Fo)
    return it;
  if (Vi.indexOf(T) !== -1)
    return xo;
  if (Vi.indexOf(Y) !== -1 || Eo.indexOf(Y) !== -1)
    return it;
  if (Ss(g, A) === Uo)
    return wn;
  if (Gi.get(t[g]) === _i || (T === pn || T === Bn) && Gi.get(t[D]) === _i || T === Us || Y === Us || T === bs || [Re, Oi, _r].indexOf(T) === -1 && Y === bs || [gn, Hr, rc, ur, hr].indexOf(Y) !== -1 || Ss(g, A) === Sr || di(hi, Sr, g, A) || di([gn, Hr], Ki, g, A) || di(xs, xs, g, A))
    return it;
  if (T === Re)
    return wn;
  if (T === hi || Y === hi)
    return it;
  if (Y === ki || T === ki)
    return wn;
  if ([Oi, _r, Ki].indexOf(Y) !== -1 || T === ec || J === Pi && cc.indexOf(T) !== -1 || T === hr && Y === Pi || Y === Es || He.indexOf(Y) !== -1 && T === ae || He.indexOf(T) !== -1 && Y === ae || T === kr && [jr, pn, Bn].indexOf(Y) !== -1 || [jr, pn, Bn].indexOf(T) !== -1 && Y === Or || He.indexOf(T) !== -1 && Is.indexOf(Y) !== -1 || Is.indexOf(T) !== -1 && He.indexOf(Y) !== -1 || // (PR | PO) × ( OP | HY )? NU
  [kr, Or].indexOf(T) !== -1 && (Y === ae || [Sr, _r].indexOf(Y) !== -1 && A[D + 1] === ae) || // ( OP | HY ) × NU
  [Sr, _r].indexOf(T) !== -1 && Y === ae || // NU ×	(NU | SY | IS)
  T === ae && [ae, hr, ur].indexOf(Y) !== -1)
    return it;
  if ([ae, hr, ur, gn, Hr].indexOf(Y) !== -1)
    for (var aA = g; aA >= 0; ) {
      var dA = A[aA];
      if (dA === ae)
        return it;
      if ([hr, ur].indexOf(dA) !== -1)
        aA--;
      else
        break;
    }
  if ([kr, Or].indexOf(Y) !== -1)
    for (var aA = [gn, Hr].indexOf(T) !== -1 ? y : g; aA >= 0; ) {
      var dA = A[aA];
      if (dA === ae)
        return it;
      if ([hr, ur].indexOf(dA) !== -1)
        aA--;
      else
        break;
    }
  if (Ni === T && [Ni, Dn, Ri, Mi].indexOf(Y) !== -1 || [Dn, Ri].indexOf(T) !== -1 && [Dn, _n].indexOf(Y) !== -1 || [_n, Mi].indexOf(T) !== -1 && Y === _n || Hs.indexOf(T) !== -1 && [Es, Or].indexOf(Y) !== -1 || Hs.indexOf(Y) !== -1 && T === kr || He.indexOf(T) !== -1 && He.indexOf(Y) !== -1 || T === ur && He.indexOf(Y) !== -1 || He.concat(ae).indexOf(T) !== -1 && Y === Sr && oc.indexOf(t[D]) === -1 || He.concat(ae).indexOf(Y) !== -1 && T === Hr)
    return it;
  if (T === fi && Y === fi) {
    for (var bA = r[g], QA = 1; bA > 0 && (bA--, A[bA] === fi); )
      QA++;
    if (QA % 2 !== 0)
      return it;
  }
  return T === pn && Y === Bn ? it : wn;
}, hc = function(t, A) {
  A || (A = { lineBreak: "normal", wordBreak: "normal" });
  var r = lc(t, A.lineBreak), e = r[0], o = r[1], g = r[2];
  (A.wordBreak === "break-all" || A.wordBreak === "break-word") && (o = o.map(function(D) {
    return [ae, tr, bo].indexOf(D) !== -1 ? jr : D;
  }));
  var y = A.wordBreak === "keep-all" ? g.map(function(D, T) {
    return D && t[T] >= 19968 && t[T] <= 40959;
  }) : void 0;
  return [e, o, y];
}, fc = (
  /** @class */
  function() {
    function t(A, r, e, o) {
      this.codePoints = A, this.required = r === xo, this.start = e, this.end = o;
    }
    return t.prototype.slice = function() {
      return St.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, t;
  }()
), dc = function(t, A) {
  var r = Jn(t), e = hc(r, A), o = e[0], g = e[1], y = e[2], D = r.length, T = 0, J = 0;
  return {
    next: function() {
      if (J >= D)
        return { done: !0, value: null };
      for (var Y = it; J < D && (Y = uc(r, g, o, ++J, y)) === it; )
        ;
      if (Y !== it || J === D) {
        var aA = new fc(r, Y, T, J);
        return T = J, { value: aA, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, gc = 1, pc = 2, zr = 4, Ts = 8, Kn = 10, Ls = 47, Pr = 92, Bc = 9, wc = 32, mn = 34, Tr = 61, mc = 35, Cc = 36, vc = 37, Cn = 39, vn = 40, Lr = 41, Qc = 95, ie = 45, yc = 33, Fc = 60, Uc = 62, bc = 64, xc = 91, Ec = 93, Ic = 61, Hc = 123, Qn = 63, Sc = 125, Ds = 124, Tc = 126, Lc = 128, _s = 65533, gi = 42, er = 43, Dc = 44, _c = 58, Oc = 59, Wr = 46, kc = 0, Kc = 8, Rc = 11, Mc = 14, Pc = 31, Nc = 127, Fe = -1, Io = 48, Ho = 97, So = 101, Gc = 102, Vc = 117, qc = 122, To = 65, Lo = 69, Do = 70, jc = 85, Wc = 90, Wt = function(t) {
  return t >= Io && t <= 57;
}, Xc = function(t) {
  return t >= 55296 && t <= 57343;
}, fr = function(t) {
  return Wt(t) || t >= To && t <= Do || t >= Ho && t <= Gc;
}, Jc = function(t) {
  return t >= Ho && t <= qc;
}, zc = function(t) {
  return t >= To && t <= Wc;
}, Yc = function(t) {
  return Jc(t) || zc(t);
}, Zc = function(t) {
  return t >= Lc;
}, yn = function(t) {
  return t === Kn || t === Bc || t === wc;
}, Rn = function(t) {
  return Yc(t) || Zc(t) || t === Qc;
}, Os = function(t) {
  return Rn(t) || Wt(t) || t === ie;
}, $c = function(t) {
  return t >= kc && t <= Kc || t === Rc || t >= Mc && t <= Pc || t === Nc;
}, Ke = function(t, A) {
  return t !== Pr ? !1 : A !== Kn;
}, Fn = function(t, A, r) {
  return t === ie ? Rn(A) || Ke(A, r) : Rn(t) ? !0 : !!(t === Pr && Ke(t, A));
}, pi = function(t, A, r) {
  return t === er || t === ie ? Wt(A) ? !0 : A === Wr && Wt(r) : Wt(t === Wr ? A : t);
}, Al = function(t) {
  var A = 0, r = 1;
  (t[A] === er || t[A] === ie) && (t[A] === ie && (r = -1), A++);
  for (var e = []; Wt(t[A]); )
    e.push(t[A++]);
  var o = e.length ? parseInt(St.apply(void 0, e), 10) : 0;
  t[A] === Wr && A++;
  for (var g = []; Wt(t[A]); )
    g.push(t[A++]);
  var y = g.length, D = y ? parseInt(St.apply(void 0, g), 10) : 0;
  (t[A] === Lo || t[A] === So) && A++;
  var T = 1;
  (t[A] === er || t[A] === ie) && (t[A] === ie && (T = -1), A++);
  for (var J = []; Wt(t[A]); )
    J.push(t[A++]);
  var Y = J.length ? parseInt(St.apply(void 0, J), 10) : 0;
  return r * (o + D * Math.pow(10, -y)) * Math.pow(10, T * Y);
}, tl = {
  type: 2
  /* LEFT_PARENTHESIS_TOKEN */
}, el = {
  type: 3
  /* RIGHT_PARENTHESIS_TOKEN */
}, rl = {
  type: 4
  /* COMMA_TOKEN */
}, nl = {
  type: 13
  /* SUFFIX_MATCH_TOKEN */
}, il = {
  type: 8
  /* PREFIX_MATCH_TOKEN */
}, sl = {
  type: 21
  /* COLUMN_TOKEN */
}, ol = {
  type: 9
  /* DASH_MATCH_TOKEN */
}, al = {
  type: 10
  /* INCLUDE_MATCH_TOKEN */
}, cl = {
  type: 11
  /* LEFT_CURLY_BRACKET_TOKEN */
}, ll = {
  type: 12
  /* RIGHT_CURLY_BRACKET_TOKEN */
}, ul = {
  type: 14
  /* SUBSTRING_MATCH_TOKEN */
}, Un = {
  type: 23
  /* BAD_URL_TOKEN */
}, hl = {
  type: 1
  /* BAD_STRING_TOKEN */
}, fl = {
  type: 25
  /* CDO_TOKEN */
}, dl = {
  type: 24
  /* CDC_TOKEN */
}, gl = {
  type: 26
  /* COLON_TOKEN */
}, pl = {
  type: 27
  /* SEMICOLON_TOKEN */
}, Bl = {
  type: 28
  /* LEFT_SQUARE_BRACKET_TOKEN */
}, wl = {
  type: 29
  /* RIGHT_SQUARE_BRACKET_TOKEN */
}, ml = {
  type: 31
  /* WHITESPACE_TOKEN */
}, qi = {
  type: 32
  /* EOF_TOKEN */
}, _o = (
  /** @class */
  function() {
    function t() {
      this._value = [];
    }
    return t.prototype.write = function(A) {
      this._value = this._value.concat(Jn(A));
    }, t.prototype.read = function() {
      for (var A = [], r = this.consumeToken(); r !== qi; )
        A.push(r), r = this.consumeToken();
      return A;
    }, t.prototype.consumeToken = function() {
      var A = this.consumeCodePoint();
      switch (A) {
        case mn:
          return this.consumeStringToken(mn);
        case mc:
          var r = this.peekCodePoint(0), e = this.peekCodePoint(1), o = this.peekCodePoint(2);
          if (Os(r) || Ke(e, o)) {
            var g = Fn(r, e, o) ? pc : gc, y = this.consumeName();
            return { type: 5, value: y, flags: g };
          }
          break;
        case Cc:
          if (this.peekCodePoint(0) === Tr)
            return this.consumeCodePoint(), nl;
          break;
        case Cn:
          return this.consumeStringToken(Cn);
        case vn:
          return tl;
        case Lr:
          return el;
        case gi:
          if (this.peekCodePoint(0) === Tr)
            return this.consumeCodePoint(), ul;
          break;
        case er:
          if (pi(A, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          break;
        case Dc:
          return rl;
        case ie:
          var D = A, T = this.peekCodePoint(0), J = this.peekCodePoint(1);
          if (pi(D, T, J))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          if (Fn(D, T, J))
            return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
          if (T === ie && J === Uc)
            return this.consumeCodePoint(), this.consumeCodePoint(), dl;
          break;
        case Wr:
          if (pi(A, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          break;
        case Ls:
          if (this.peekCodePoint(0) === gi)
            for (this.consumeCodePoint(); ; ) {
              var Y = this.consumeCodePoint();
              if (Y === gi && (Y = this.consumeCodePoint(), Y === Ls))
                return this.consumeToken();
              if (Y === Fe)
                return this.consumeToken();
            }
          break;
        case _c:
          return gl;
        case Oc:
          return pl;
        case Fc:
          if (this.peekCodePoint(0) === yc && this.peekCodePoint(1) === ie && this.peekCodePoint(2) === ie)
            return this.consumeCodePoint(), this.consumeCodePoint(), fl;
          break;
        case bc:
          var aA = this.peekCodePoint(0), dA = this.peekCodePoint(1), bA = this.peekCodePoint(2);
          if (Fn(aA, dA, bA)) {
            var y = this.consumeName();
            return { type: 7, value: y };
          }
          break;
        case xc:
          return Bl;
        case Pr:
          if (Ke(A, this.peekCodePoint(0)))
            return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
          break;
        case Ec:
          return wl;
        case Ic:
          if (this.peekCodePoint(0) === Tr)
            return this.consumeCodePoint(), il;
          break;
        case Hc:
          return cl;
        case Sc:
          return ll;
        case Vc:
        case jc:
          var QA = this.peekCodePoint(0), xA = this.peekCodePoint(1);
          return QA === er && (fr(xA) || xA === Qn) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
        case Ds:
          if (this.peekCodePoint(0) === Tr)
            return this.consumeCodePoint(), ol;
          if (this.peekCodePoint(0) === Ds)
            return this.consumeCodePoint(), sl;
          break;
        case Tc:
          if (this.peekCodePoint(0) === Tr)
            return this.consumeCodePoint(), al;
          break;
        case Fe:
          return qi;
      }
      return yn(A) ? (this.consumeWhiteSpace(), ml) : Wt(A) ? (this.reconsumeCodePoint(A), this.consumeNumericToken()) : Rn(A) ? (this.reconsumeCodePoint(A), this.consumeIdentLikeToken()) : { type: 6, value: St(A) };
    }, t.prototype.consumeCodePoint = function() {
      var A = this._value.shift();
      return typeof A > "u" ? -1 : A;
    }, t.prototype.reconsumeCodePoint = function(A) {
      this._value.unshift(A);
    }, t.prototype.peekCodePoint = function(A) {
      return A >= this._value.length ? -1 : this._value[A];
    }, t.prototype.consumeUnicodeRangeToken = function() {
      for (var A = [], r = this.consumeCodePoint(); fr(r) && A.length < 6; )
        A.push(r), r = this.consumeCodePoint();
      for (var e = !1; r === Qn && A.length < 6; )
        A.push(r), r = this.consumeCodePoint(), e = !0;
      if (e) {
        var o = parseInt(St.apply(void 0, A.map(function(T) {
          return T === Qn ? Io : T;
        })), 16), g = parseInt(St.apply(void 0, A.map(function(T) {
          return T === Qn ? Do : T;
        })), 16);
        return { type: 30, start: o, end: g };
      }
      var y = parseInt(St.apply(void 0, A), 16);
      if (this.peekCodePoint(0) === ie && fr(this.peekCodePoint(1))) {
        this.consumeCodePoint(), r = this.consumeCodePoint();
        for (var D = []; fr(r) && D.length < 6; )
          D.push(r), r = this.consumeCodePoint();
        var g = parseInt(St.apply(void 0, D), 16);
        return { type: 30, start: y, end: g };
      } else
        return { type: 30, start: y, end: y };
    }, t.prototype.consumeIdentLikeToken = function() {
      var A = this.consumeName();
      return A.toLowerCase() === "url" && this.peekCodePoint(0) === vn ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === vn ? (this.consumeCodePoint(), { type: 19, value: A }) : { type: 20, value: A };
    }, t.prototype.consumeUrlToken = function() {
      var A = [];
      if (this.consumeWhiteSpace(), this.peekCodePoint(0) === Fe)
        return { type: 22, value: "" };
      var r = this.peekCodePoint(0);
      if (r === Cn || r === mn) {
        var e = this.consumeStringToken(this.consumeCodePoint());
        return e.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === Fe || this.peekCodePoint(0) === Lr) ? (this.consumeCodePoint(), { type: 22, value: e.value }) : (this.consumeBadUrlRemnants(), Un);
      }
      for (; ; ) {
        var o = this.consumeCodePoint();
        if (o === Fe || o === Lr)
          return { type: 22, value: St.apply(void 0, A) };
        if (yn(o))
          return this.consumeWhiteSpace(), this.peekCodePoint(0) === Fe || this.peekCodePoint(0) === Lr ? (this.consumeCodePoint(), { type: 22, value: St.apply(void 0, A) }) : (this.consumeBadUrlRemnants(), Un);
        if (o === mn || o === Cn || o === vn || $c(o))
          return this.consumeBadUrlRemnants(), Un;
        if (o === Pr)
          if (Ke(o, this.peekCodePoint(0)))
            A.push(this.consumeEscapedCodePoint());
          else
            return this.consumeBadUrlRemnants(), Un;
        else
          A.push(o);
      }
    }, t.prototype.consumeWhiteSpace = function() {
      for (; yn(this.peekCodePoint(0)); )
        this.consumeCodePoint();
    }, t.prototype.consumeBadUrlRemnants = function() {
      for (; ; ) {
        var A = this.consumeCodePoint();
        if (A === Lr || A === Fe)
          return;
        Ke(A, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
      }
    }, t.prototype.consumeStringSlice = function(A) {
      for (var r = 5e4, e = ""; A > 0; ) {
        var o = Math.min(r, A);
        e += St.apply(void 0, this._value.splice(0, o)), A -= o;
      }
      return this._value.shift(), e;
    }, t.prototype.consumeStringToken = function(A) {
      var r = "", e = 0;
      do {
        var o = this._value[e];
        if (o === Fe || o === void 0 || o === A)
          return r += this.consumeStringSlice(e), { type: 0, value: r };
        if (o === Kn)
          return this._value.splice(0, e), hl;
        if (o === Pr) {
          var g = this._value[e + 1];
          g !== Fe && g !== void 0 && (g === Kn ? (r += this.consumeStringSlice(e), e = -1, this._value.shift()) : Ke(o, g) && (r += this.consumeStringSlice(e), r += St(this.consumeEscapedCodePoint()), e = -1));
        }
        e++;
      } while (!0);
    }, t.prototype.consumeNumber = function() {
      var A = [], r = zr, e = this.peekCodePoint(0);
      for ((e === er || e === ie) && A.push(this.consumeCodePoint()); Wt(this.peekCodePoint(0)); )
        A.push(this.consumeCodePoint());
      e = this.peekCodePoint(0);
      var o = this.peekCodePoint(1);
      if (e === Wr && Wt(o))
        for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), r = Ts; Wt(this.peekCodePoint(0)); )
          A.push(this.consumeCodePoint());
      e = this.peekCodePoint(0), o = this.peekCodePoint(1);
      var g = this.peekCodePoint(2);
      if ((e === Lo || e === So) && ((o === er || o === ie) && Wt(g) || Wt(o)))
        for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), r = Ts; Wt(this.peekCodePoint(0)); )
          A.push(this.consumeCodePoint());
      return [Al(A), r];
    }, t.prototype.consumeNumericToken = function() {
      var A = this.consumeNumber(), r = A[0], e = A[1], o = this.peekCodePoint(0), g = this.peekCodePoint(1), y = this.peekCodePoint(2);
      if (Fn(o, g, y)) {
        var D = this.consumeName();
        return { type: 15, number: r, flags: e, unit: D };
      }
      return o === vc ? (this.consumeCodePoint(), { type: 16, number: r, flags: e }) : { type: 17, number: r, flags: e };
    }, t.prototype.consumeEscapedCodePoint = function() {
      var A = this.consumeCodePoint();
      if (fr(A)) {
        for (var r = St(A); fr(this.peekCodePoint(0)) && r.length < 6; )
          r += St(this.consumeCodePoint());
        yn(this.peekCodePoint(0)) && this.consumeCodePoint();
        var e = parseInt(r, 16);
        return e === 0 || Xc(e) || e > 1114111 ? _s : e;
      }
      return A === Fe ? _s : A;
    }, t.prototype.consumeName = function() {
      for (var A = ""; ; ) {
        var r = this.consumeCodePoint();
        if (Os(r))
          A += St(r);
        else if (Ke(r, this.peekCodePoint(0)))
          A += St(this.consumeEscapedCodePoint());
        else
          return this.reconsumeCodePoint(r), A;
      }
    }, t;
  }()
), Oo = (
  /** @class */
  function() {
    function t(A) {
      this._tokens = A;
    }
    return t.create = function(A) {
      var r = new _o();
      return r.write(A), new t(r.read());
    }, t.parseValue = function(A) {
      return t.create(A).parseComponentValue();
    }, t.parseValues = function(A) {
      return t.create(A).parseComponentValues();
    }, t.prototype.parseComponentValue = function() {
      for (var A = this.consumeToken(); A.type === 31; )
        A = this.consumeToken();
      if (A.type === 32)
        throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
      this.reconsumeToken(A);
      var r = this.consumeComponentValue();
      do
        A = this.consumeToken();
      while (A.type === 31);
      if (A.type === 32)
        return r;
      throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one");
    }, t.prototype.parseComponentValues = function() {
      for (var A = []; ; ) {
        var r = this.consumeComponentValue();
        if (r.type === 32)
          return A;
        A.push(r), A.push();
      }
    }, t.prototype.consumeComponentValue = function() {
      var A = this.consumeToken();
      switch (A.type) {
        case 11:
        case 28:
        case 2:
          return this.consumeSimpleBlock(A.type);
        case 19:
          return this.consumeFunction(A);
      }
      return A;
    }, t.prototype.consumeSimpleBlock = function(A) {
      for (var r = { type: A, values: [] }, e = this.consumeToken(); ; ) {
        if (e.type === 32 || vl(e, A))
          return r;
        this.reconsumeToken(e), r.values.push(this.consumeComponentValue()), e = this.consumeToken();
      }
    }, t.prototype.consumeFunction = function(A) {
      for (var r = {
        name: A.value,
        values: [],
        type: 18
        /* FUNCTION */
      }; ; ) {
        var e = this.consumeToken();
        if (e.type === 32 || e.type === 3)
          return r;
        this.reconsumeToken(e), r.values.push(this.consumeComponentValue());
      }
    }, t.prototype.consumeToken = function() {
      var A = this._tokens.shift();
      return typeof A > "u" ? qi : A;
    }, t.prototype.reconsumeToken = function(A) {
      this._tokens.unshift(A);
    }, t;
  }()
), Yr = function(t) {
  return t.type === 15;
}, Qr = function(t) {
  return t.type === 17;
}, gt = function(t) {
  return t.type === 20;
}, Cl = function(t) {
  return t.type === 0;
}, ji = function(t, A) {
  return gt(t) && t.value === A;
}, ko = function(t) {
  return t.type !== 31;
}, vr = function(t) {
  return t.type !== 31 && t.type !== 4;
}, Ue = function(t) {
  var A = [], r = [];
  return t.forEach(function(e) {
    if (e.type === 4) {
      if (r.length === 0)
        throw new Error("Error parsing function args, zero tokens for arg");
      A.push(r), r = [];
      return;
    }
    e.type !== 31 && r.push(e);
  }), r.length && A.push(r), A;
}, vl = function(t, A) {
  return A === 11 && t.type === 12 || A === 28 && t.type === 29 ? !0 : A === 2 && t.type === 3;
}, Ve = function(t) {
  return t.type === 17 || t.type === 15;
}, Lt = function(t) {
  return t.type === 16 || Ve(t);
}, Ko = function(t) {
  return t.length > 1 ? [t[0], t[1]] : [t[0]];
}, Gt = {
  type: 17,
  number: 0,
  flags: zr
}, ss = {
  type: 16,
  number: 50,
  flags: zr
}, Me = {
  type: 16,
  number: 100,
  flags: zr
}, Kr = function(t, A, r) {
  var e = t[0], o = t[1];
  return [wt(e, A), wt(typeof o < "u" ? o : e, r)];
}, wt = function(t, A) {
  if (t.type === 16)
    return t.number / 100 * A;
  if (Yr(t))
    switch (t.unit) {
      case "rem":
      case "em":
        return 16 * t.number;
      case "px":
      default:
        return t.number;
    }
  return t.number;
}, Ro = "deg", Mo = "grad", Po = "rad", No = "turn", zn = {
  name: "angle",
  parse: function(t, A) {
    if (A.type === 15)
      switch (A.unit) {
        case Ro:
          return Math.PI * A.number / 180;
        case Mo:
          return Math.PI / 200 * A.number;
        case Po:
          return A.number;
        case No:
          return Math.PI * 2 * A.number;
      }
    throw new Error("Unsupported angle type");
  }
}, Go = function(t) {
  return t.type === 15 && (t.unit === Ro || t.unit === Mo || t.unit === Po || t.unit === No);
}, Vo = function(t) {
  var A = t.filter(gt).map(function(r) {
    return r.value;
  }).join(" ");
  switch (A) {
    case "to bottom right":
    case "to right bottom":
    case "left top":
    case "top left":
      return [Gt, Gt];
    case "to top":
    case "bottom":
      return fe(0);
    case "to bottom left":
    case "to left bottom":
    case "right top":
    case "top right":
      return [Gt, Me];
    case "to right":
    case "left":
      return fe(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
      return [Me, Me];
    case "to bottom":
    case "top":
      return fe(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
      return [Me, Gt];
    case "to left":
    case "right":
      return fe(270);
  }
  return 0;
}, fe = function(t) {
  return Math.PI * t / 180;
}, Ne = {
  name: "color",
  parse: function(t, A) {
    if (A.type === 18) {
      var r = Ql[A.name];
      if (typeof r > "u")
        throw new Error('Attempting to parse an unsupported color function "' + A.name + '"');
      return r(t, A.values);
    }
    if (A.type === 5) {
      if (A.value.length === 3) {
        var e = A.value.substring(0, 1), o = A.value.substring(1, 2), g = A.value.substring(2, 3);
        return Pe(parseInt(e + e, 16), parseInt(o + o, 16), parseInt(g + g, 16), 1);
      }
      if (A.value.length === 4) {
        var e = A.value.substring(0, 1), o = A.value.substring(1, 2), g = A.value.substring(2, 3), y = A.value.substring(3, 4);
        return Pe(parseInt(e + e, 16), parseInt(o + o, 16), parseInt(g + g, 16), parseInt(y + y, 16) / 255);
      }
      if (A.value.length === 6) {
        var e = A.value.substring(0, 2), o = A.value.substring(2, 4), g = A.value.substring(4, 6);
        return Pe(parseInt(e, 16), parseInt(o, 16), parseInt(g, 16), 1);
      }
      if (A.value.length === 8) {
        var e = A.value.substring(0, 2), o = A.value.substring(2, 4), g = A.value.substring(4, 6), y = A.value.substring(6, 8);
        return Pe(parseInt(e, 16), parseInt(o, 16), parseInt(g, 16), parseInt(y, 16) / 255);
      }
    }
    if (A.type === 20) {
      var D = Te[A.value.toUpperCase()];
      if (typeof D < "u")
        return D;
    }
    return Te.TRANSPARENT;
  }
}, Ge = function(t) {
  return (255 & t) === 0;
}, Kt = function(t) {
  var A = 255 & t, r = 255 & t >> 8, e = 255 & t >> 16, o = 255 & t >> 24;
  return A < 255 ? "rgba(" + o + "," + e + "," + r + "," + A / 255 + ")" : "rgb(" + o + "," + e + "," + r + ")";
}, Pe = function(t, A, r, e) {
  return (t << 24 | A << 16 | r << 8 | Math.round(e * 255) << 0) >>> 0;
}, ks = function(t, A) {
  if (t.type === 17)
    return t.number;
  if (t.type === 16) {
    var r = A === 3 ? 1 : 255;
    return A === 3 ? t.number / 100 * r : Math.round(t.number / 100 * r);
  }
  return 0;
}, Ks = function(t, A) {
  var r = A.filter(vr);
  if (r.length === 3) {
    var e = r.map(ks), o = e[0], g = e[1], y = e[2];
    return Pe(o, g, y, 1);
  }
  if (r.length === 4) {
    var D = r.map(ks), o = D[0], g = D[1], y = D[2], T = D[3];
    return Pe(o, g, y, T);
  }
  return 0;
};
function Bi(t, A, r) {
  return r < 0 && (r += 1), r >= 1 && (r -= 1), r < 1 / 6 ? (A - t) * r * 6 + t : r < 1 / 2 ? A : r < 2 / 3 ? (A - t) * 6 * (2 / 3 - r) + t : t;
}
var Rs = function(t, A) {
  var r = A.filter(vr), e = r[0], o = r[1], g = r[2], y = r[3], D = (e.type === 17 ? fe(e.number) : zn.parse(t, e)) / (Math.PI * 2), T = Lt(o) ? o.number / 100 : 0, J = Lt(g) ? g.number / 100 : 0, Y = typeof y < "u" && Lt(y) ? wt(y, 1) : 1;
  if (T === 0)
    return Pe(J * 255, J * 255, J * 255, 1);
  var aA = J <= 0.5 ? J * (T + 1) : J + T - J * T, dA = J * 2 - aA, bA = Bi(dA, aA, D + 1 / 3), QA = Bi(dA, aA, D), xA = Bi(dA, aA, D - 1 / 3);
  return Pe(bA * 255, QA * 255, xA * 255, Y);
}, Ql = {
  hsl: Rs,
  hsla: Rs,
  rgb: Ks,
  rgba: Ks
}, Nr = function(t, A) {
  return Ne.parse(t, Oo.create(A).parseComponentValue());
}, Te = {
  ALICEBLUE: 4042850303,
  ANTIQUEWHITE: 4209760255,
  AQUA: 16777215,
  AQUAMARINE: 2147472639,
  AZURE: 4043309055,
  BEIGE: 4126530815,
  BISQUE: 4293182719,
  BLACK: 255,
  BLANCHEDALMOND: 4293643775,
  BLUE: 65535,
  BLUEVIOLET: 2318131967,
  BROWN: 2771004159,
  BURLYWOOD: 3736635391,
  CADETBLUE: 1604231423,
  CHARTREUSE: 2147418367,
  CHOCOLATE: 3530104575,
  CORAL: 4286533887,
  CORNFLOWERBLUE: 1687547391,
  CORNSILK: 4294499583,
  CRIMSON: 3692313855,
  CYAN: 16777215,
  DARKBLUE: 35839,
  DARKCYAN: 9145343,
  DARKGOLDENROD: 3095837695,
  DARKGRAY: 2846468607,
  DARKGREEN: 6553855,
  DARKGREY: 2846468607,
  DARKKHAKI: 3182914559,
  DARKMAGENTA: 2332068863,
  DARKOLIVEGREEN: 1433087999,
  DARKORANGE: 4287365375,
  DARKORCHID: 2570243327,
  DARKRED: 2332033279,
  DARKSALMON: 3918953215,
  DARKSEAGREEN: 2411499519,
  DARKSLATEBLUE: 1211993087,
  DARKSLATEGRAY: 793726975,
  DARKSLATEGREY: 793726975,
  DARKTURQUOISE: 13554175,
  DARKVIOLET: 2483082239,
  DEEPPINK: 4279538687,
  DEEPSKYBLUE: 12582911,
  DIMGRAY: 1768516095,
  DIMGREY: 1768516095,
  DODGERBLUE: 512819199,
  FIREBRICK: 2988581631,
  FLORALWHITE: 4294635775,
  FORESTGREEN: 579543807,
  FUCHSIA: 4278255615,
  GAINSBORO: 3705462015,
  GHOSTWHITE: 4177068031,
  GOLD: 4292280575,
  GOLDENROD: 3668254975,
  GRAY: 2155905279,
  GREEN: 8388863,
  GREENYELLOW: 2919182335,
  GREY: 2155905279,
  HONEYDEW: 4043305215,
  HOTPINK: 4285117695,
  INDIANRED: 3445382399,
  INDIGO: 1258324735,
  IVORY: 4294963455,
  KHAKI: 4041641215,
  LAVENDER: 3873897215,
  LAVENDERBLUSH: 4293981695,
  LAWNGREEN: 2096890111,
  LEMONCHIFFON: 4294626815,
  LIGHTBLUE: 2916673279,
  LIGHTCORAL: 4034953471,
  LIGHTCYAN: 3774873599,
  LIGHTGOLDENRODYELLOW: 4210742015,
  LIGHTGRAY: 3553874943,
  LIGHTGREEN: 2431553791,
  LIGHTGREY: 3553874943,
  LIGHTPINK: 4290167295,
  LIGHTSALMON: 4288707327,
  LIGHTSEAGREEN: 548580095,
  LIGHTSKYBLUE: 2278488831,
  LIGHTSLATEGRAY: 2005441023,
  LIGHTSLATEGREY: 2005441023,
  LIGHTSTEELBLUE: 2965692159,
  LIGHTYELLOW: 4294959359,
  LIME: 16711935,
  LIMEGREEN: 852308735,
  LINEN: 4210091775,
  MAGENTA: 4278255615,
  MAROON: 2147483903,
  MEDIUMAQUAMARINE: 1724754687,
  MEDIUMBLUE: 52735,
  MEDIUMORCHID: 3126187007,
  MEDIUMPURPLE: 2473647103,
  MEDIUMSEAGREEN: 1018393087,
  MEDIUMSLATEBLUE: 2070474495,
  MEDIUMSPRINGGREEN: 16423679,
  MEDIUMTURQUOISE: 1221709055,
  MEDIUMVIOLETRED: 3340076543,
  MIDNIGHTBLUE: 421097727,
  MINTCREAM: 4127193855,
  MISTYROSE: 4293190143,
  MOCCASIN: 4293178879,
  NAVAJOWHITE: 4292783615,
  NAVY: 33023,
  OLDLACE: 4260751103,
  OLIVE: 2155872511,
  OLIVEDRAB: 1804477439,
  ORANGE: 4289003775,
  ORANGERED: 4282712319,
  ORCHID: 3664828159,
  PALEGOLDENROD: 4008225535,
  PALEGREEN: 2566625535,
  PALETURQUOISE: 2951671551,
  PALEVIOLETRED: 3681588223,
  PAPAYAWHIP: 4293907967,
  PEACHPUFF: 4292524543,
  PERU: 3448061951,
  PINK: 4290825215,
  PLUM: 3718307327,
  POWDERBLUE: 2967529215,
  PURPLE: 2147516671,
  REBECCAPURPLE: 1714657791,
  RED: 4278190335,
  ROSYBROWN: 3163525119,
  ROYALBLUE: 1097458175,
  SADDLEBROWN: 2336560127,
  SALMON: 4202722047,
  SANDYBROWN: 4104413439,
  SEAGREEN: 780883967,
  SEASHELL: 4294307583,
  SIENNA: 2689740287,
  SILVER: 3233857791,
  SKYBLUE: 2278484991,
  SLATEBLUE: 1784335871,
  SLATEGRAY: 1887473919,
  SLATEGREY: 1887473919,
  SNOW: 4294638335,
  SPRINGGREEN: 16744447,
  STEELBLUE: 1182971135,
  TAN: 3535047935,
  TEAL: 8421631,
  THISTLE: 3636451583,
  TOMATO: 4284696575,
  TRANSPARENT: 0,
  TURQUOISE: 1088475391,
  VIOLET: 4001558271,
  WHEAT: 4125012991,
  WHITE: 4294967295,
  WHITESMOKE: 4126537215,
  YELLOW: 4294902015,
  YELLOWGREEN: 2597139199
}, yl = {
  name: "background-clip",
  initialValue: "border-box",
  prefix: !1,
  type: 1,
  parse: function(t, A) {
    return A.map(function(r) {
      if (gt(r))
        switch (r.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
      return 0;
    });
  }
}, Fl = {
  name: "background-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, Yn = function(t, A) {
  var r = Ne.parse(t, A[0]), e = A[1];
  return e && Lt(e) ? { color: r, stop: e } : { color: r, stop: null };
}, Ms = function(t, A) {
  var r = t[0], e = t[t.length - 1];
  r.stop === null && (r.stop = Gt), e.stop === null && (e.stop = Me);
  for (var o = [], g = 0, y = 0; y < t.length; y++) {
    var D = t[y].stop;
    if (D !== null) {
      var T = wt(D, A);
      T > g ? o.push(T) : o.push(g), g = T;
    } else
      o.push(null);
  }
  for (var J = null, y = 0; y < o.length; y++) {
    var Y = o[y];
    if (Y === null)
      J === null && (J = y);
    else if (J !== null) {
      for (var aA = y - J, dA = o[J - 1], bA = (Y - dA) / (aA + 1), QA = 1; QA <= aA; QA++)
        o[J + QA - 1] = bA * QA;
      J = null;
    }
  }
  return t.map(function(xA, NA) {
    var _A = xA.color;
    return { color: _A, stop: Math.max(Math.min(1, o[NA] / A), 0) };
  });
}, Ul = function(t, A, r) {
  var e = A / 2, o = r / 2, g = wt(t[0], A) - e, y = o - wt(t[1], r);
  return (Math.atan2(y, g) + Math.PI * 2) % (Math.PI * 2);
}, bl = function(t, A, r) {
  var e = typeof t == "number" ? t : Ul(t, A, r), o = Math.abs(A * Math.sin(e)) + Math.abs(r * Math.cos(e)), g = A / 2, y = r / 2, D = o / 2, T = Math.sin(e - Math.PI / 2) * D, J = Math.cos(e - Math.PI / 2) * D;
  return [o, g - J, g + J, y - T, y + T];
}, we = function(t, A) {
  return Math.sqrt(t * t + A * A);
}, Ps = function(t, A, r, e, o) {
  var g = [
    [0, 0],
    [0, A],
    [t, 0],
    [t, A]
  ];
  return g.reduce(function(y, D) {
    var T = D[0], J = D[1], Y = we(r - T, e - J);
    return (o ? Y < y.optimumDistance : Y > y.optimumDistance) ? {
      optimumCorner: D,
      optimumDistance: Y
    } : y;
  }, {
    optimumDistance: o ? 1 / 0 : -1 / 0,
    optimumCorner: null
  }).optimumCorner;
}, xl = function(t, A, r, e, o) {
  var g = 0, y = 0;
  switch (t.size) {
    case 0:
      t.shape === 0 ? g = y = Math.min(Math.abs(A), Math.abs(A - e), Math.abs(r), Math.abs(r - o)) : t.shape === 1 && (g = Math.min(Math.abs(A), Math.abs(A - e)), y = Math.min(Math.abs(r), Math.abs(r - o)));
      break;
    case 2:
      if (t.shape === 0)
        g = y = Math.min(we(A, r), we(A, r - o), we(A - e, r), we(A - e, r - o));
      else if (t.shape === 1) {
        var D = Math.min(Math.abs(r), Math.abs(r - o)) / Math.min(Math.abs(A), Math.abs(A - e)), T = Ps(e, o, A, r, !0), J = T[0], Y = T[1];
        g = we(J - A, (Y - r) / D), y = D * g;
      }
      break;
    case 1:
      t.shape === 0 ? g = y = Math.max(Math.abs(A), Math.abs(A - e), Math.abs(r), Math.abs(r - o)) : t.shape === 1 && (g = Math.max(Math.abs(A), Math.abs(A - e)), y = Math.max(Math.abs(r), Math.abs(r - o)));
      break;
    case 3:
      if (t.shape === 0)
        g = y = Math.max(we(A, r), we(A, r - o), we(A - e, r), we(A - e, r - o));
      else if (t.shape === 1) {
        var D = Math.max(Math.abs(r), Math.abs(r - o)) / Math.max(Math.abs(A), Math.abs(A - e)), aA = Ps(e, o, A, r, !1), J = aA[0], Y = aA[1];
        g = we(J - A, (Y - r) / D), y = D * g;
      }
      break;
  }
  return Array.isArray(t.size) && (g = wt(t.size[0], e), y = t.size.length === 2 ? wt(t.size[1], o) : g), [g, y];
}, El = function(t, A) {
  var r = fe(180), e = [];
  return Ue(A).forEach(function(o, g) {
    if (g === 0) {
      var y = o[0];
      if (y.type === 20 && y.value === "to") {
        r = Vo(o);
        return;
      } else if (Go(y)) {
        r = zn.parse(t, y);
        return;
      }
    }
    var D = Yn(t, o);
    e.push(D);
  }), {
    angle: r,
    stops: e,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, bn = function(t, A) {
  var r = fe(180), e = [];
  return Ue(A).forEach(function(o, g) {
    if (g === 0) {
      var y = o[0];
      if (y.type === 20 && ["top", "left", "right", "bottom"].indexOf(y.value) !== -1) {
        r = Vo(o);
        return;
      } else if (Go(y)) {
        r = (zn.parse(t, y) + fe(270)) % fe(360);
        return;
      }
    }
    var D = Yn(t, o);
    e.push(D);
  }), {
    angle: r,
    stops: e,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, Il = function(t, A) {
  var r = fe(180), e = [], o = 1, g = 0, y = 3, D = [];
  return Ue(A).forEach(function(T, J) {
    var Y = T[0];
    if (J === 0) {
      if (gt(Y) && Y.value === "linear") {
        o = 1;
        return;
      } else if (gt(Y) && Y.value === "radial") {
        o = 2;
        return;
      }
    }
    if (Y.type === 18) {
      if (Y.name === "from") {
        var aA = Ne.parse(t, Y.values[0]);
        e.push({ stop: Gt, color: aA });
      } else if (Y.name === "to") {
        var aA = Ne.parse(t, Y.values[0]);
        e.push({ stop: Me, color: aA });
      } else if (Y.name === "color-stop") {
        var dA = Y.values.filter(vr);
        if (dA.length === 2) {
          var aA = Ne.parse(t, dA[1]), bA = dA[0];
          Qr(bA) && e.push({
            stop: { type: 16, number: bA.number * 100, flags: bA.flags },
            color: aA
          });
        }
      }
    }
  }), o === 1 ? {
    angle: (r + fe(180)) % fe(360),
    stops: e,
    type: o
  } : { size: y, shape: g, stops: e, position: D, type: o };
}, qo = "closest-side", jo = "farthest-side", Wo = "closest-corner", Xo = "farthest-corner", Jo = "circle", zo = "ellipse", Yo = "cover", Zo = "contain", Hl = function(t, A) {
  var r = 0, e = 3, o = [], g = [];
  return Ue(A).forEach(function(y, D) {
    var T = !0;
    if (D === 0) {
      var J = !1;
      T = y.reduce(function(aA, dA) {
        if (J)
          if (gt(dA))
            switch (dA.value) {
              case "center":
                return g.push(ss), aA;
              case "top":
              case "left":
                return g.push(Gt), aA;
              case "right":
              case "bottom":
                return g.push(Me), aA;
            }
          else
            (Lt(dA) || Ve(dA)) && g.push(dA);
        else if (gt(dA))
          switch (dA.value) {
            case Jo:
              return r = 0, !1;
            case zo:
              return r = 1, !1;
            case "at":
              return J = !0, !1;
            case qo:
              return e = 0, !1;
            case Yo:
            case jo:
              return e = 1, !1;
            case Zo:
            case Wo:
              return e = 2, !1;
            case Xo:
              return e = 3, !1;
          }
        else if (Ve(dA) || Lt(dA))
          return Array.isArray(e) || (e = []), e.push(dA), !1;
        return aA;
      }, T);
    }
    if (T) {
      var Y = Yn(t, y);
      o.push(Y);
    }
  }), {
    size: e,
    shape: r,
    stops: o,
    position: g,
    type: 2
    /* RADIAL_GRADIENT */
  };
}, xn = function(t, A) {
  var r = 0, e = 3, o = [], g = [];
  return Ue(A).forEach(function(y, D) {
    var T = !0;
    if (D === 0 ? T = y.reduce(function(Y, aA) {
      if (gt(aA))
        switch (aA.value) {
          case "center":
            return g.push(ss), !1;
          case "top":
          case "left":
            return g.push(Gt), !1;
          case "right":
          case "bottom":
            return g.push(Me), !1;
        }
      else if (Lt(aA) || Ve(aA))
        return g.push(aA), !1;
      return Y;
    }, T) : D === 1 && (T = y.reduce(function(Y, aA) {
      if (gt(aA))
        switch (aA.value) {
          case Jo:
            return r = 0, !1;
          case zo:
            return r = 1, !1;
          case Zo:
          case qo:
            return e = 0, !1;
          case jo:
            return e = 1, !1;
          case Wo:
            return e = 2, !1;
          case Yo:
          case Xo:
            return e = 3, !1;
        }
      else if (Ve(aA) || Lt(aA))
        return Array.isArray(e) || (e = []), e.push(aA), !1;
      return Y;
    }, T)), T) {
      var J = Yn(t, y);
      o.push(J);
    }
  }), {
    size: e,
    shape: r,
    stops: o,
    position: g,
    type: 2
    /* RADIAL_GRADIENT */
  };
}, Sl = function(t) {
  return t.type === 1;
}, Tl = function(t) {
  return t.type === 2;
}, os = {
  name: "image",
  parse: function(t, A) {
    if (A.type === 22) {
      var r = {
        url: A.value,
        type: 0
        /* URL */
      };
      return t.cache.addImage(A.value), r;
    }
    if (A.type === 18) {
      var e = $o[A.name];
      if (typeof e > "u")
        throw new Error('Attempting to parse an unsupported image function "' + A.name + '"');
      return e(t, A.values);
    }
    throw new Error("Unsupported image type " + A.type);
  }
};
function Ll(t) {
  return !(t.type === 20 && t.value === "none") && (t.type !== 18 || !!$o[t.name]);
}
var $o = {
  "linear-gradient": El,
  "-moz-linear-gradient": bn,
  "-ms-linear-gradient": bn,
  "-o-linear-gradient": bn,
  "-webkit-linear-gradient": bn,
  "radial-gradient": Hl,
  "-moz-radial-gradient": xn,
  "-ms-radial-gradient": xn,
  "-o-radial-gradient": xn,
  "-webkit-radial-gradient": xn,
  "-webkit-gradient": Il
}, Dl = {
  name: "background-image",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(t, A) {
    if (A.length === 0)
      return [];
    var r = A[0];
    return r.type === 20 && r.value === "none" ? [] : A.filter(function(e) {
      return vr(e) && Ll(e);
    }).map(function(e) {
      return os.parse(t, e);
    });
  }
}, _l = {
  name: "background-origin",
  initialValue: "border-box",
  prefix: !1,
  type: 1,
  parse: function(t, A) {
    return A.map(function(r) {
      if (gt(r))
        switch (r.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
      return 0;
    });
  }
}, Ol = {
  name: "background-position",
  initialValue: "0% 0%",
  type: 1,
  prefix: !1,
  parse: function(t, A) {
    return Ue(A).map(function(r) {
      return r.filter(Lt);
    }).map(Ko);
  }
}, kl = {
  name: "background-repeat",
  initialValue: "repeat",
  prefix: !1,
  type: 1,
  parse: function(t, A) {
    return Ue(A).map(function(r) {
      return r.filter(gt).map(function(e) {
        return e.value;
      }).join(" ");
    }).map(Kl);
  }
}, Kl = function(t) {
  switch (t) {
    case "no-repeat":
      return 1;
    case "repeat-x":
    case "repeat no-repeat":
      return 2;
    case "repeat-y":
    case "no-repeat repeat":
      return 3;
    case "repeat":
    default:
      return 0;
  }
}, Cr;
(function(t) {
  t.AUTO = "auto", t.CONTAIN = "contain", t.COVER = "cover";
})(Cr || (Cr = {}));
var Rl = {
  name: "background-size",
  initialValue: "0",
  prefix: !1,
  type: 1,
  parse: function(t, A) {
    return Ue(A).map(function(r) {
      return r.filter(Ml);
    });
  }
}, Ml = function(t) {
  return gt(t) || Lt(t);
}, Zn = function(t) {
  return {
    name: "border-" + t + "-color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color"
  };
}, Pl = Zn("top"), Nl = Zn("right"), Gl = Zn("bottom"), Vl = Zn("left"), $n = function(t) {
  return {
    name: "border-radius-" + t,
    initialValue: "0 0",
    prefix: !1,
    type: 1,
    parse: function(A, r) {
      return Ko(r.filter(Lt));
    }
  };
}, ql = $n("top-left"), jl = $n("top-right"), Wl = $n("bottom-right"), Xl = $n("bottom-left"), Ai = function(t) {
  return {
    name: "border-" + t + "-style",
    initialValue: "solid",
    prefix: !1,
    type: 2,
    parse: function(A, r) {
      switch (r) {
        case "none":
          return 0;
        case "dashed":
          return 2;
        case "dotted":
          return 3;
        case "double":
          return 4;
      }
      return 1;
    }
  };
}, Jl = Ai("top"), zl = Ai("right"), Yl = Ai("bottom"), Zl = Ai("left"), ti = function(t) {
  return {
    name: "border-" + t + "-width",
    initialValue: "0",
    type: 0,
    prefix: !1,
    parse: function(A, r) {
      return Yr(r) ? r.number : 0;
    }
  };
}, $l = ti("top"), Au = ti("right"), tu = ti("bottom"), eu = ti("left"), ru = {
  name: "color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, nu = {
  name: "direction",
  initialValue: "ltr",
  prefix: !1,
  type: 2,
  parse: function(t, A) {
    switch (A) {
      case "rtl":
        return 1;
      case "ltr":
      default:
        return 0;
    }
  }
}, iu = {
  name: "display",
  initialValue: "inline-block",
  prefix: !1,
  type: 1,
  parse: function(t, A) {
    return A.filter(gt).reduce(
      function(r, e) {
        return r | su(e.value);
      },
      0
      /* NONE */
    );
  }
}, su = function(t) {
  switch (t) {
    case "block":
    case "-webkit-box":
      return 2;
    case "inline":
      return 4;
    case "run-in":
      return 8;
    case "flow":
      return 16;
    case "flow-root":
      return 32;
    case "table":
      return 64;
    case "flex":
    case "-webkit-flex":
      return 128;
    case "grid":
    case "-ms-grid":
      return 256;
    case "ruby":
      return 512;
    case "subgrid":
      return 1024;
    case "list-item":
      return 2048;
    case "table-row-group":
      return 4096;
    case "table-header-group":
      return 8192;
    case "table-footer-group":
      return 16384;
    case "table-row":
      return 32768;
    case "table-cell":
      return 65536;
    case "table-column-group":
      return 131072;
    case "table-column":
      return 262144;
    case "table-caption":
      return 524288;
    case "ruby-base":
      return 1048576;
    case "ruby-text":
      return 2097152;
    case "ruby-base-container":
      return 4194304;
    case "ruby-text-container":
      return 8388608;
    case "contents":
      return 16777216;
    case "inline-block":
      return 33554432;
    case "inline-list-item":
      return 67108864;
    case "inline-table":
      return 134217728;
    case "inline-flex":
      return 268435456;
    case "inline-grid":
      return 536870912;
  }
  return 0;
}, ou = {
  name: "float",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(t, A) {
    switch (A) {
      case "left":
        return 1;
      case "right":
        return 2;
      case "inline-start":
        return 3;
      case "inline-end":
        return 4;
    }
    return 0;
  }
}, au = {
  name: "letter-spacing",
  initialValue: "0",
  prefix: !1,
  type: 0,
  parse: function(t, A) {
    return A.type === 20 && A.value === "normal" ? 0 : A.type === 17 || A.type === 15 ? A.number : 0;
  }
}, Mn;
(function(t) {
  t.NORMAL = "normal", t.STRICT = "strict";
})(Mn || (Mn = {}));
var cu = {
  name: "line-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(t, A) {
    switch (A) {
      case "strict":
        return Mn.STRICT;
      case "normal":
      default:
        return Mn.NORMAL;
    }
  }
}, lu = {
  name: "line-height",
  initialValue: "normal",
  prefix: !1,
  type: 4
  /* TOKEN_VALUE */
}, Ns = function(t, A) {
  return gt(t) && t.value === "normal" ? 1.2 * A : t.type === 17 ? A * t.number : Lt(t) ? wt(t, A) : A;
}, uu = {
  name: "list-style-image",
  initialValue: "none",
  type: 0,
  prefix: !1,
  parse: function(t, A) {
    return A.type === 20 && A.value === "none" ? null : os.parse(t, A);
  }
}, hu = {
  name: "list-style-position",
  initialValue: "outside",
  prefix: !1,
  type: 2,
  parse: function(t, A) {
    switch (A) {
      case "inside":
        return 0;
      case "outside":
      default:
        return 1;
    }
  }
}, Wi = {
  name: "list-style-type",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(t, A) {
    switch (A) {
      case "disc":
        return 0;
      case "circle":
        return 1;
      case "square":
        return 2;
      case "decimal":
        return 3;
      case "cjk-decimal":
        return 4;
      case "decimal-leading-zero":
        return 5;
      case "lower-roman":
        return 6;
      case "upper-roman":
        return 7;
      case "lower-greek":
        return 8;
      case "lower-alpha":
        return 9;
      case "upper-alpha":
        return 10;
      case "arabic-indic":
        return 11;
      case "armenian":
        return 12;
      case "bengali":
        return 13;
      case "cambodian":
        return 14;
      case "cjk-earthly-branch":
        return 15;
      case "cjk-heavenly-stem":
        return 16;
      case "cjk-ideographic":
        return 17;
      case "devanagari":
        return 18;
      case "ethiopic-numeric":
        return 19;
      case "georgian":
        return 20;
      case "gujarati":
        return 21;
      case "gurmukhi":
        return 22;
      case "hebrew":
        return 22;
      case "hiragana":
        return 23;
      case "hiragana-iroha":
        return 24;
      case "japanese-formal":
        return 25;
      case "japanese-informal":
        return 26;
      case "kannada":
        return 27;
      case "katakana":
        return 28;
      case "katakana-iroha":
        return 29;
      case "khmer":
        return 30;
      case "korean-hangul-formal":
        return 31;
      case "korean-hanja-formal":
        return 32;
      case "korean-hanja-informal":
        return 33;
      case "lao":
        return 34;
      case "lower-armenian":
        return 35;
      case "malayalam":
        return 36;
      case "mongolian":
        return 37;
      case "myanmar":
        return 38;
      case "oriya":
        return 39;
      case "persian":
        return 40;
      case "simp-chinese-formal":
        return 41;
      case "simp-chinese-informal":
        return 42;
      case "tamil":
        return 43;
      case "telugu":
        return 44;
      case "thai":
        return 45;
      case "tibetan":
        return 46;
      case "trad-chinese-formal":
        return 47;
      case "trad-chinese-informal":
        return 48;
      case "upper-armenian":
        return 49;
      case "disclosure-open":
        return 50;
      case "disclosure-closed":
        return 51;
      case "none":
      default:
        return -1;
    }
  }
}, ei = function(t) {
  return {
    name: "margin-" + t,
    initialValue: "0",
    prefix: !1,
    type: 4
    /* TOKEN_VALUE */
  };
}, fu = ei("top"), du = ei("right"), gu = ei("bottom"), pu = ei("left"), Bu = {
  name: "overflow",
  initialValue: "visible",
  prefix: !1,
  type: 1,
  parse: function(t, A) {
    return A.filter(gt).map(function(r) {
      switch (r.value) {
        case "hidden":
          return 1;
        case "scroll":
          return 2;
        case "clip":
          return 3;
        case "auto":
          return 4;
        case "visible":
        default:
          return 0;
      }
    });
  }
}, wu = {
  name: "overflow-wrap",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(t, A) {
    switch (A) {
      case "break-word":
        return "break-word";
      case "normal":
      default:
        return "normal";
    }
  }
}, ri = function(t) {
  return {
    name: "padding-" + t,
    initialValue: "0",
    prefix: !1,
    type: 3,
    format: "length-percentage"
  };
}, mu = ri("top"), Cu = ri("right"), vu = ri("bottom"), Qu = ri("left"), yu = {
  name: "text-align",
  initialValue: "left",
  prefix: !1,
  type: 2,
  parse: function(t, A) {
    switch (A) {
      case "right":
        return 2;
      case "center":
      case "justify":
        return 1;
      case "left":
      default:
        return 0;
    }
  }
}, Fu = {
  name: "position",
  initialValue: "static",
  prefix: !1,
  type: 2,
  parse: function(t, A) {
    switch (A) {
      case "relative":
        return 1;
      case "absolute":
        return 2;
      case "fixed":
        return 3;
      case "sticky":
        return 4;
    }
    return 0;
  }
}, Uu = {
  name: "text-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(t, A) {
    return A.length === 1 && ji(A[0], "none") ? [] : Ue(A).map(function(r) {
      for (var e = {
        color: Te.TRANSPARENT,
        offsetX: Gt,
        offsetY: Gt,
        blur: Gt
      }, o = 0, g = 0; g < r.length; g++) {
        var y = r[g];
        Ve(y) ? (o === 0 ? e.offsetX = y : o === 1 ? e.offsetY = y : e.blur = y, o++) : e.color = Ne.parse(t, y);
      }
      return e;
    });
  }
}, bu = {
  name: "text-transform",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(t, A) {
    switch (A) {
      case "uppercase":
        return 2;
      case "lowercase":
        return 1;
      case "capitalize":
        return 3;
    }
    return 0;
  }
}, xu = {
  name: "transform",
  initialValue: "none",
  prefix: !0,
  type: 0,
  parse: function(t, A) {
    if (A.type === 20 && A.value === "none")
      return null;
    if (A.type === 18) {
      var r = Hu[A.name];
      if (typeof r > "u")
        throw new Error('Attempting to parse an unsupported transform function "' + A.name + '"');
      return r(A.values);
    }
    return null;
  }
}, Eu = function(t) {
  var A = t.filter(function(r) {
    return r.type === 17;
  }).map(function(r) {
    return r.number;
  });
  return A.length === 6 ? A : null;
}, Iu = function(t) {
  var A = t.filter(function(T) {
    return T.type === 17;
  }).map(function(T) {
    return T.number;
  }), r = A[0], e = A[1];
  A[2], A[3];
  var o = A[4], g = A[5];
  A[6], A[7], A[8], A[9], A[10], A[11];
  var y = A[12], D = A[13];
  return A[14], A[15], A.length === 16 ? [r, e, o, g, y, D] : null;
}, Hu = {
  matrix: Eu,
  matrix3d: Iu
}, Gs = {
  type: 16,
  number: 50,
  flags: zr
}, Su = [Gs, Gs], Tu = {
  name: "transform-origin",
  initialValue: "50% 50%",
  prefix: !0,
  type: 1,
  parse: function(t, A) {
    var r = A.filter(Lt);
    return r.length !== 2 ? Su : [r[0], r[1]];
  }
}, Lu = {
  name: "visible",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(t, A) {
    switch (A) {
      case "hidden":
        return 1;
      case "collapse":
        return 2;
      case "visible":
      default:
        return 0;
    }
  }
}, Gr;
(function(t) {
  t.NORMAL = "normal", t.BREAK_ALL = "break-all", t.KEEP_ALL = "keep-all";
})(Gr || (Gr = {}));
var Du = {
  name: "word-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(t, A) {
    switch (A) {
      case "break-all":
        return Gr.BREAK_ALL;
      case "keep-all":
        return Gr.KEEP_ALL;
      case "normal":
      default:
        return Gr.NORMAL;
    }
  }
}, _u = {
  name: "z-index",
  initialValue: "auto",
  prefix: !1,
  type: 0,
  parse: function(t, A) {
    if (A.type === 20)
      return { auto: !0, order: 0 };
    if (Qr(A))
      return { auto: !1, order: A.number };
    throw new Error("Invalid z-index number parsed");
  }
}, Aa = {
  name: "time",
  parse: function(t, A) {
    if (A.type === 15)
      switch (A.unit.toLowerCase()) {
        case "s":
          return 1e3 * A.number;
        case "ms":
          return A.number;
      }
    throw new Error("Unsupported time type");
  }
}, Ou = {
  name: "opacity",
  initialValue: "1",
  type: 0,
  prefix: !1,
  parse: function(t, A) {
    return Qr(A) ? A.number : 1;
  }
}, ku = {
  name: "text-decoration-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, Ku = {
  name: "text-decoration-line",
  initialValue: "none",
  prefix: !1,
  type: 1,
  parse: function(t, A) {
    return A.filter(gt).map(function(r) {
      switch (r.value) {
        case "underline":
          return 1;
        case "overline":
          return 2;
        case "line-through":
          return 3;
        case "none":
          return 4;
      }
      return 0;
    }).filter(function(r) {
      return r !== 0;
    });
  }
}, Ru = {
  name: "font-family",
  initialValue: "",
  prefix: !1,
  type: 1,
  parse: function(t, A) {
    var r = [], e = [];
    return A.forEach(function(o) {
      switch (o.type) {
        case 20:
        case 0:
          r.push(o.value);
          break;
        case 17:
          r.push(o.number.toString());
          break;
        case 4:
          e.push(r.join(" ")), r.length = 0;
          break;
      }
    }), r.length && e.push(r.join(" ")), e.map(function(o) {
      return o.indexOf(" ") === -1 ? o : "'" + o + "'";
    });
  }
}, Mu = {
  name: "font-size",
  initialValue: "0",
  prefix: !1,
  type: 3,
  format: "length"
}, Pu = {
  name: "font-weight",
  initialValue: "normal",
  type: 0,
  prefix: !1,
  parse: function(t, A) {
    if (Qr(A))
      return A.number;
    if (gt(A))
      switch (A.value) {
        case "bold":
          return 700;
        case "normal":
        default:
          return 400;
      }
    return 400;
  }
}, Nu = {
  name: "font-variant",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(t, A) {
    return A.filter(gt).map(function(r) {
      return r.value;
    });
  }
}, Gu = {
  name: "font-style",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(t, A) {
    switch (A) {
      case "oblique":
        return "oblique";
      case "italic":
        return "italic";
      case "normal":
      default:
        return "normal";
    }
  }
}, Ot = function(t, A) {
  return (t & A) !== 0;
}, Vu = {
  name: "content",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(t, A) {
    if (A.length === 0)
      return [];
    var r = A[0];
    return r.type === 20 && r.value === "none" ? [] : A;
  }
}, qu = {
  name: "counter-increment",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(t, A) {
    if (A.length === 0)
      return null;
    var r = A[0];
    if (r.type === 20 && r.value === "none")
      return null;
    for (var e = [], o = A.filter(ko), g = 0; g < o.length; g++) {
      var y = o[g], D = o[g + 1];
      if (y.type === 20) {
        var T = D && Qr(D) ? D.number : 1;
        e.push({ counter: y.value, increment: T });
      }
    }
    return e;
  }
}, ju = {
  name: "counter-reset",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(t, A) {
    if (A.length === 0)
      return [];
    for (var r = [], e = A.filter(ko), o = 0; o < e.length; o++) {
      var g = e[o], y = e[o + 1];
      if (gt(g) && g.value !== "none") {
        var D = y && Qr(y) ? y.number : 0;
        r.push({ counter: g.value, reset: D });
      }
    }
    return r;
  }
}, Wu = {
  name: "duration",
  initialValue: "0s",
  prefix: !1,
  type: 1,
  parse: function(t, A) {
    return A.filter(Yr).map(function(r) {
      return Aa.parse(t, r);
    });
  }
}, Xu = {
  name: "quotes",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(t, A) {
    if (A.length === 0)
      return null;
    var r = A[0];
    if (r.type === 20 && r.value === "none")
      return null;
    var e = [], o = A.filter(Cl);
    if (o.length % 2 !== 0)
      return null;
    for (var g = 0; g < o.length; g += 2) {
      var y = o[g].value, D = o[g + 1].value;
      e.push({ open: y, close: D });
    }
    return e;
  }
}, Vs = function(t, A, r) {
  if (!t)
    return "";
  var e = t[Math.min(A, t.length - 1)];
  return e ? r ? e.open : e.close : "";
}, Ju = {
  name: "box-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(t, A) {
    return A.length === 1 && ji(A[0], "none") ? [] : Ue(A).map(function(r) {
      for (var e = {
        color: 255,
        offsetX: Gt,
        offsetY: Gt,
        blur: Gt,
        spread: Gt,
        inset: !1
      }, o = 0, g = 0; g < r.length; g++) {
        var y = r[g];
        ji(y, "inset") ? e.inset = !0 : Ve(y) ? (o === 0 ? e.offsetX = y : o === 1 ? e.offsetY = y : o === 2 ? e.blur = y : e.spread = y, o++) : e.color = Ne.parse(t, y);
      }
      return e;
    });
  }
}, zu = {
  name: "paint-order",
  initialValue: "normal",
  prefix: !1,
  type: 1,
  parse: function(t, A) {
    var r = [
      0,
      1,
      2
      /* MARKERS */
    ], e = [];
    return A.filter(gt).forEach(function(o) {
      switch (o.value) {
        case "stroke":
          e.push(
            1
            /* STROKE */
          );
          break;
        case "fill":
          e.push(
            0
            /* FILL */
          );
          break;
        case "markers":
          e.push(
            2
            /* MARKERS */
          );
          break;
      }
    }), r.forEach(function(o) {
      e.indexOf(o) === -1 && e.push(o);
    }), e;
  }
}, Yu = {
  name: "-webkit-text-stroke-color",
  initialValue: "currentcolor",
  prefix: !1,
  type: 3,
  format: "color"
}, Zu = {
  name: "-webkit-text-stroke-width",
  initialValue: "0",
  type: 0,
  prefix: !1,
  parse: function(t, A) {
    return Yr(A) ? A.number : 0;
  }
}, $u = (
  /** @class */
  function() {
    function t(A, r) {
      var e, o;
      this.animationDuration = DA(A, Wu, r.animationDuration), this.backgroundClip = DA(A, yl, r.backgroundClip), this.backgroundColor = DA(A, Fl, r.backgroundColor), this.backgroundImage = DA(A, Dl, r.backgroundImage), this.backgroundOrigin = DA(A, _l, r.backgroundOrigin), this.backgroundPosition = DA(A, Ol, r.backgroundPosition), this.backgroundRepeat = DA(A, kl, r.backgroundRepeat), this.backgroundSize = DA(A, Rl, r.backgroundSize), this.borderTopColor = DA(A, Pl, r.borderTopColor), this.borderRightColor = DA(A, Nl, r.borderRightColor), this.borderBottomColor = DA(A, Gl, r.borderBottomColor), this.borderLeftColor = DA(A, Vl, r.borderLeftColor), this.borderTopLeftRadius = DA(A, ql, r.borderTopLeftRadius), this.borderTopRightRadius = DA(A, jl, r.borderTopRightRadius), this.borderBottomRightRadius = DA(A, Wl, r.borderBottomRightRadius), this.borderBottomLeftRadius = DA(A, Xl, r.borderBottomLeftRadius), this.borderTopStyle = DA(A, Jl, r.borderTopStyle), this.borderRightStyle = DA(A, zl, r.borderRightStyle), this.borderBottomStyle = DA(A, Yl, r.borderBottomStyle), this.borderLeftStyle = DA(A, Zl, r.borderLeftStyle), this.borderTopWidth = DA(A, $l, r.borderTopWidth), this.borderRightWidth = DA(A, Au, r.borderRightWidth), this.borderBottomWidth = DA(A, tu, r.borderBottomWidth), this.borderLeftWidth = DA(A, eu, r.borderLeftWidth), this.boxShadow = DA(A, Ju, r.boxShadow), this.color = DA(A, ru, r.color), this.direction = DA(A, nu, r.direction), this.display = DA(A, iu, r.display), this.float = DA(A, ou, r.cssFloat), this.fontFamily = DA(A, Ru, r.fontFamily), this.fontSize = DA(A, Mu, r.fontSize), this.fontStyle = DA(A, Gu, r.fontStyle), this.fontVariant = DA(A, Nu, r.fontVariant), this.fontWeight = DA(A, Pu, r.fontWeight), this.letterSpacing = DA(A, au, r.letterSpacing), this.lineBreak = DA(A, cu, r.lineBreak), this.lineHeight = DA(A, lu, r.lineHeight), this.listStyleImage = DA(A, uu, r.listStyleImage), this.listStylePosition = DA(A, hu, r.listStylePosition), this.listStyleType = DA(A, Wi, r.listStyleType), this.marginTop = DA(A, fu, r.marginTop), this.marginRight = DA(A, du, r.marginRight), this.marginBottom = DA(A, gu, r.marginBottom), this.marginLeft = DA(A, pu, r.marginLeft), this.opacity = DA(A, Ou, r.opacity);
      var g = DA(A, Bu, r.overflow);
      this.overflowX = g[0], this.overflowY = g[g.length > 1 ? 1 : 0], this.overflowWrap = DA(A, wu, r.overflowWrap), this.paddingTop = DA(A, mu, r.paddingTop), this.paddingRight = DA(A, Cu, r.paddingRight), this.paddingBottom = DA(A, vu, r.paddingBottom), this.paddingLeft = DA(A, Qu, r.paddingLeft), this.paintOrder = DA(A, zu, r.paintOrder), this.position = DA(A, Fu, r.position), this.textAlign = DA(A, yu, r.textAlign), this.textDecorationColor = DA(A, ku, (e = r.textDecorationColor) !== null && e !== void 0 ? e : r.color), this.textDecorationLine = DA(A, Ku, (o = r.textDecorationLine) !== null && o !== void 0 ? o : r.textDecoration), this.textShadow = DA(A, Uu, r.textShadow), this.textTransform = DA(A, bu, r.textTransform), this.transform = DA(A, xu, r.transform), this.transformOrigin = DA(A, Tu, r.transformOrigin), this.visibility = DA(A, Lu, r.visibility), this.webkitTextStrokeColor = DA(A, Yu, r.webkitTextStrokeColor), this.webkitTextStrokeWidth = DA(A, Zu, r.webkitTextStrokeWidth), this.wordBreak = DA(A, Du, r.wordBreak), this.zIndex = DA(A, _u, r.zIndex);
    }
    return t.prototype.isVisible = function() {
      return this.display > 0 && this.opacity > 0 && this.visibility === 0;
    }, t.prototype.isTransparent = function() {
      return Ge(this.backgroundColor);
    }, t.prototype.isTransformed = function() {
      return this.transform !== null;
    }, t.prototype.isPositioned = function() {
      return this.position !== 0;
    }, t.prototype.isPositionedWithZIndex = function() {
      return this.isPositioned() && !this.zIndex.auto;
    }, t.prototype.isFloating = function() {
      return this.float !== 0;
    }, t.prototype.isInlineLevel = function() {
      return Ot(
        this.display,
        4
        /* INLINE */
      ) || Ot(
        this.display,
        33554432
        /* INLINE_BLOCK */
      ) || Ot(
        this.display,
        268435456
        /* INLINE_FLEX */
      ) || Ot(
        this.display,
        536870912
        /* INLINE_GRID */
      ) || Ot(
        this.display,
        67108864
        /* INLINE_LIST_ITEM */
      ) || Ot(
        this.display,
        134217728
        /* INLINE_TABLE */
      );
    }, t;
  }()
), Ah = (
  /** @class */
  function() {
    function t(A, r) {
      this.content = DA(A, Vu, r.content), this.quotes = DA(A, Xu, r.quotes);
    }
    return t;
  }()
), qs = (
  /** @class */
  function() {
    function t(A, r) {
      this.counterIncrement = DA(A, qu, r.counterIncrement), this.counterReset = DA(A, ju, r.counterReset);
    }
    return t;
  }()
), DA = function(t, A, r) {
  var e = new _o(), o = r !== null && typeof r < "u" ? r.toString() : A.initialValue;
  e.write(o);
  var g = new Oo(e.read());
  switch (A.type) {
    case 2:
      var y = g.parseComponentValue();
      return A.parse(t, gt(y) ? y.value : A.initialValue);
    case 0:
      return A.parse(t, g.parseComponentValue());
    case 1:
      return A.parse(t, g.parseComponentValues());
    case 4:
      return g.parseComponentValue();
    case 3:
      switch (A.format) {
        case "angle":
          return zn.parse(t, g.parseComponentValue());
        case "color":
          return Ne.parse(t, g.parseComponentValue());
        case "image":
          return os.parse(t, g.parseComponentValue());
        case "length":
          var D = g.parseComponentValue();
          return Ve(D) ? D : Gt;
        case "length-percentage":
          var T = g.parseComponentValue();
          return Lt(T) ? T : Gt;
        case "time":
          return Aa.parse(t, g.parseComponentValue());
      }
      break;
  }
}, th = "data-html2canvas-debug", eh = function(t) {
  var A = t.getAttribute(th);
  switch (A) {
    case "all":
      return 1;
    case "clone":
      return 2;
    case "parse":
      return 3;
    case "render":
      return 4;
    default:
      return 0;
  }
}, Xi = function(t, A) {
  var r = eh(t);
  return r === 1 || A === r;
}, be = (
  /** @class */
  function() {
    function t(A, r) {
      if (this.context = A, this.textNodes = [], this.elements = [], this.flags = 0, Xi(
        r,
        3
        /* PARSE */
      ))
        debugger;
      this.styles = new $u(A, window.getComputedStyle(r, null)), Yi(r) && (this.styles.animationDuration.some(function(e) {
        return e > 0;
      }) && (r.style.animationDuration = "0s"), this.styles.transform !== null && (r.style.transform = "none")), this.bounds = Xn(this.context, r), Xi(
        r,
        4
        /* RENDER */
      ) && (this.flags |= 16);
    }
    return t;
  }()
), rh = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", js = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Rr = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var En = 0; En < js.length; En++)
  Rr[js.charCodeAt(En)] = En;
var nh = function(t) {
  var A = t.length * 0.75, r = t.length, e, o = 0, g, y, D, T;
  t[t.length - 1] === "=" && (A--, t[t.length - 2] === "=" && A--);
  var J = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A), Y = Array.isArray(J) ? J : new Uint8Array(J);
  for (e = 0; e < r; e += 4)
    g = Rr[t.charCodeAt(e)], y = Rr[t.charCodeAt(e + 1)], D = Rr[t.charCodeAt(e + 2)], T = Rr[t.charCodeAt(e + 3)], Y[o++] = g << 2 | y >> 4, Y[o++] = (y & 15) << 4 | D >> 2, Y[o++] = (D & 3) << 6 | T & 63;
  return J;
}, ih = function(t) {
  for (var A = t.length, r = [], e = 0; e < A; e += 2)
    r.push(t[e + 1] << 8 | t[e]);
  return r;
}, sh = function(t) {
  for (var A = t.length, r = [], e = 0; e < A; e += 4)
    r.push(t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e]);
  return r;
}, nr = 5, as = 6 + 5, wi = 2, oh = as - nr, ta = 65536 >> nr, ah = 1 << nr, mi = ah - 1, ch = 1024 >> nr, lh = ta + ch, uh = lh, hh = 32, fh = uh + hh, dh = 65536 >> as, gh = 1 << oh, ph = gh - 1, Ws = function(t, A, r) {
  return t.slice ? t.slice(A, r) : new Uint16Array(Array.prototype.slice.call(t, A, r));
}, Bh = function(t, A, r) {
  return t.slice ? t.slice(A, r) : new Uint32Array(Array.prototype.slice.call(t, A, r));
}, wh = function(t, A) {
  var r = nh(t), e = Array.isArray(r) ? sh(r) : new Uint32Array(r), o = Array.isArray(r) ? ih(r) : new Uint16Array(r), g = 24, y = Ws(o, g / 2, e[4] / 2), D = e[5] === 2 ? Ws(o, (g + e[4]) / 2) : Bh(e, Math.ceil((g + e[4]) / 4));
  return new mh(e[0], e[1], e[2], e[3], y, D);
}, mh = (
  /** @class */
  function() {
    function t(A, r, e, o, g, y) {
      this.initialValue = A, this.errorValue = r, this.highStart = e, this.highValueIndex = o, this.index = g, this.data = y;
    }
    return t.prototype.get = function(A) {
      var r;
      if (A >= 0) {
        if (A < 55296 || A > 56319 && A <= 65535)
          return r = this.index[A >> nr], r = (r << wi) + (A & mi), this.data[r];
        if (A <= 65535)
          return r = this.index[ta + (A - 55296 >> nr)], r = (r << wi) + (A & mi), this.data[r];
        if (A < this.highStart)
          return r = fh - dh + (A >> as), r = this.index[r], r += A >> nr & ph, r = this.index[r], r = (r << wi) + (A & mi), this.data[r];
        if (A <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, t;
  }()
), Xs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ch = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var In = 0; In < Xs.length; In++)
  Ch[Xs.charCodeAt(In)] = In;
var vh = 1, Ci = 2, vi = 3, Js = 4, zs = 5, Qh = 7, Ys = 8, Qi = 9, yi = 10, Zs = 11, $s = 12, Ao = 13, to = 14, Fi = 15, yh = function(t) {
  for (var A = [], r = 0, e = t.length; r < e; ) {
    var o = t.charCodeAt(r++);
    if (o >= 55296 && o <= 56319 && r < e) {
      var g = t.charCodeAt(r++);
      (g & 64512) === 56320 ? A.push(((o & 1023) << 10) + (g & 1023) + 65536) : (A.push(o), r--);
    } else
      A.push(o);
  }
  return A;
}, Fh = function() {
  for (var t = [], A = 0; A < arguments.length; A++)
    t[A] = arguments[A];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, t);
  var r = t.length;
  if (!r)
    return "";
  for (var e = [], o = -1, g = ""; ++o < r; ) {
    var y = t[o];
    y <= 65535 ? e.push(y) : (y -= 65536, e.push((y >> 10) + 55296, y % 1024 + 56320)), (o + 1 === r || e.length > 16384) && (g += String.fromCharCode.apply(String, e), e.length = 0);
  }
  return g;
}, Uh = wh(rh), ue = "×", Ui = "÷", bh = function(t) {
  return Uh.get(t);
}, xh = function(t, A, r) {
  var e = r - 2, o = A[e], g = A[r - 1], y = A[r];
  if (g === Ci && y === vi)
    return ue;
  if (g === Ci || g === vi || g === Js || y === Ci || y === vi || y === Js)
    return Ui;
  if (g === Ys && [Ys, Qi, Zs, $s].indexOf(y) !== -1 || (g === Zs || g === Qi) && (y === Qi || y === yi) || (g === $s || g === yi) && y === yi || y === Ao || y === zs || y === Qh || g === vh)
    return ue;
  if (g === Ao && y === to) {
    for (; o === zs; )
      o = A[--e];
    if (o === to)
      return ue;
  }
  if (g === Fi && y === Fi) {
    for (var D = 0; o === Fi; )
      D++, o = A[--e];
    if (D % 2 === 0)
      return ue;
  }
  return Ui;
}, Eh = function(t) {
  var A = yh(t), r = A.length, e = 0, o = 0, g = A.map(bh);
  return {
    next: function() {
      if (e >= r)
        return { done: !0, value: null };
      for (var y = ue; e < r && (y = xh(A, g, ++e)) === ue; )
        ;
      if (y !== ue || e === r) {
        var D = Fh.apply(null, A.slice(o, e));
        return o = e, { value: D, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, Ih = function(t) {
  for (var A = Eh(t), r = [], e; !(e = A.next()).done; )
    e.value && r.push(e.value.slice());
  return r;
}, Hh = function(t) {
  var A = 123;
  if (t.createRange) {
    var r = t.createRange();
    if (r.getBoundingClientRect) {
      var e = t.createElement("boundtest");
      e.style.height = A + "px", e.style.display = "block", t.body.appendChild(e), r.selectNode(e);
      var o = r.getBoundingClientRect(), g = Math.round(o.height);
      if (t.body.removeChild(e), g === A)
        return !0;
    }
  }
  return !1;
}, Sh = function(t) {
  var A = t.createElement("boundtest");
  A.style.width = "50px", A.style.display = "block", A.style.fontSize = "12px", A.style.letterSpacing = "0px", A.style.wordSpacing = "0px", t.body.appendChild(A);
  var r = t.createRange();
  A.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
  var e = A.firstChild, o = Jn(e.data).map(function(T) {
    return St(T);
  }), g = 0, y = {}, D = o.every(function(T, J) {
    r.setStart(e, g), r.setEnd(e, g + T.length);
    var Y = r.getBoundingClientRect();
    g += T.length;
    var aA = Y.x > y.x || Y.y > y.y;
    return y = Y, J === 0 ? !0 : aA;
  });
  return t.body.removeChild(A), D;
}, Th = function() {
  return typeof new Image().crossOrigin < "u";
}, Lh = function() {
  return typeof new XMLHttpRequest().responseType == "string";
}, Dh = function(t) {
  var A = new Image(), r = t.createElement("canvas"), e = r.getContext("2d");
  if (!e)
    return !1;
  A.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
  try {
    e.drawImage(A, 0, 0), r.toDataURL();
  } catch {
    return !1;
  }
  return !0;
}, eo = function(t) {
  return t[0] === 0 && t[1] === 255 && t[2] === 0 && t[3] === 255;
}, _h = function(t) {
  var A = t.createElement("canvas"), r = 100;
  A.width = r, A.height = r;
  var e = A.getContext("2d");
  if (!e)
    return Promise.reject(!1);
  e.fillStyle = "rgb(0, 255, 0)", e.fillRect(0, 0, r, r);
  var o = new Image(), g = A.toDataURL();
  o.src = g;
  var y = Ji(r, r, 0, 0, o);
  return e.fillStyle = "red", e.fillRect(0, 0, r, r), ro(y).then(function(D) {
    e.drawImage(D, 0, 0);
    var T = e.getImageData(0, 0, r, r).data;
    e.fillStyle = "red", e.fillRect(0, 0, r, r);
    var J = t.createElement("div");
    return J.style.backgroundImage = "url(" + g + ")", J.style.height = r + "px", eo(T) ? ro(Ji(r, r, 0, 0, J)) : Promise.reject(!1);
  }).then(function(D) {
    return e.drawImage(D, 0, 0), eo(e.getImageData(0, 0, r, r).data);
  }).catch(function() {
    return !1;
  });
}, Ji = function(t, A, r, e, o) {
  var g = "http://www.w3.org/2000/svg", y = document.createElementNS(g, "svg"), D = document.createElementNS(g, "foreignObject");
  return y.setAttributeNS(null, "width", t.toString()), y.setAttributeNS(null, "height", A.toString()), D.setAttributeNS(null, "width", "100%"), D.setAttributeNS(null, "height", "100%"), D.setAttributeNS(null, "x", r.toString()), D.setAttributeNS(null, "y", e.toString()), D.setAttributeNS(null, "externalResourcesRequired", "true"), y.appendChild(D), D.appendChild(o), y;
}, ro = function(t) {
  return new Promise(function(A, r) {
    var e = new Image();
    e.onload = function() {
      return A(e);
    }, e.onerror = r, e.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(t));
  });
}, Nt = {
  get SUPPORT_RANGE_BOUNDS() {
    var t = Hh(document);
    return Object.defineProperty(Nt, "SUPPORT_RANGE_BOUNDS", { value: t }), t;
  },
  get SUPPORT_WORD_BREAKING() {
    var t = Nt.SUPPORT_RANGE_BOUNDS && Sh(document);
    return Object.defineProperty(Nt, "SUPPORT_WORD_BREAKING", { value: t }), t;
  },
  get SUPPORT_SVG_DRAWING() {
    var t = Dh(document);
    return Object.defineProperty(Nt, "SUPPORT_SVG_DRAWING", { value: t }), t;
  },
  get SUPPORT_FOREIGNOBJECT_DRAWING() {
    var t = typeof Array.from == "function" && typeof window.fetch == "function" ? _h(document) : Promise.resolve(!1);
    return Object.defineProperty(Nt, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: t }), t;
  },
  get SUPPORT_CORS_IMAGES() {
    var t = Th();
    return Object.defineProperty(Nt, "SUPPORT_CORS_IMAGES", { value: t }), t;
  },
  get SUPPORT_RESPONSE_TYPE() {
    var t = Lh();
    return Object.defineProperty(Nt, "SUPPORT_RESPONSE_TYPE", { value: t }), t;
  },
  get SUPPORT_CORS_XHR() {
    var t = "withCredentials" in new XMLHttpRequest();
    return Object.defineProperty(Nt, "SUPPORT_CORS_XHR", { value: t }), t;
  },
  get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
    var t = !!(typeof Intl < "u" && Intl.Segmenter);
    return Object.defineProperty(Nt, "SUPPORT_NATIVE_TEXT_SEGMENTATION", { value: t }), t;
  }
}, Vr = (
  /** @class */
  function() {
    function t(A, r) {
      this.text = A, this.bounds = r;
    }
    return t;
  }()
), Oh = function(t, A, r, e) {
  var o = Rh(A, r), g = [], y = 0;
  return o.forEach(function(D) {
    if (r.textDecorationLine.length || D.trim().length > 0)
      if (Nt.SUPPORT_RANGE_BOUNDS) {
        var T = no(e, y, D.length).getClientRects();
        if (T.length > 1) {
          var J = cs(D), Y = 0;
          J.forEach(function(dA) {
            g.push(new Vr(dA, Le.fromDOMRectList(t, no(e, Y + y, dA.length).getClientRects()))), Y += dA.length;
          });
        } else
          g.push(new Vr(D, Le.fromDOMRectList(t, T)));
      } else {
        var aA = e.splitText(D.length);
        g.push(new Vr(D, kh(t, e))), e = aA;
      }
    else
      Nt.SUPPORT_RANGE_BOUNDS || (e = e.splitText(D.length));
    y += D.length;
  }), g;
}, kh = function(t, A) {
  var r = A.ownerDocument;
  if (r) {
    var e = r.createElement("html2canvaswrapper");
    e.appendChild(A.cloneNode(!0));
    var o = A.parentNode;
    if (o) {
      o.replaceChild(e, A);
      var g = Xn(t, e);
      return e.firstChild && o.replaceChild(e.firstChild, e), g;
    }
  }
  return Le.EMPTY;
}, no = function(t, A, r) {
  var e = t.ownerDocument;
  if (!e)
    throw new Error("Node has no owner document");
  var o = e.createRange();
  return o.setStart(t, A), o.setEnd(t, A + r), o;
}, cs = function(t) {
  if (Nt.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var A = new Intl.Segmenter(void 0, { granularity: "grapheme" });
    return Array.from(A.segment(t)).map(function(r) {
      return r.segment;
    });
  }
  return Ih(t);
}, Kh = function(t, A) {
  if (Nt.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var r = new Intl.Segmenter(void 0, {
      granularity: "word"
    });
    return Array.from(r.segment(t)).map(function(e) {
      return e.segment;
    });
  }
  return Ph(t, A);
}, Rh = function(t, A) {
  return A.letterSpacing !== 0 ? cs(t) : Kh(t, A);
}, Mh = [32, 160, 4961, 65792, 65793, 4153, 4241], Ph = function(t, A) {
  for (var r = dc(t, {
    lineBreak: A.lineBreak,
    wordBreak: A.overflowWrap === "break-word" ? "break-word" : A.wordBreak
  }), e = [], o, g = function() {
    if (o.value) {
      var y = o.value.slice(), D = Jn(y), T = "";
      D.forEach(function(J) {
        Mh.indexOf(J) === -1 ? T += St(J) : (T.length && e.push(T), e.push(St(J)), T = "");
      }), T.length && e.push(T);
    }
  }; !(o = r.next()).done; )
    g();
  return e;
}, Nh = (
  /** @class */
  function() {
    function t(A, r, e) {
      this.text = Gh(r.data, e.textTransform), this.textBounds = Oh(A, this.text, e, r);
    }
    return t;
  }()
), Gh = function(t, A) {
  switch (A) {
    case 1:
      return t.toLowerCase();
    case 3:
      return t.replace(Vh, qh);
    case 2:
      return t.toUpperCase();
    default:
      return t;
  }
}, Vh = /(^|\s|:|-|\(|\))([a-z])/g, qh = function(t, A, r) {
  return t.length > 0 ? A + r.toUpperCase() : t;
}, ea = (
  /** @class */
  function(t) {
    Ce(A, t);
    function A(r, e) {
      var o = t.call(this, r, e) || this;
      return o.src = e.currentSrc || e.src, o.intrinsicWidth = e.naturalWidth, o.intrinsicHeight = e.naturalHeight, o.context.cache.addImage(o.src), o;
    }
    return A;
  }(be)
), ra = (
  /** @class */
  function(t) {
    Ce(A, t);
    function A(r, e) {
      var o = t.call(this, r, e) || this;
      return o.canvas = e, o.intrinsicWidth = e.width, o.intrinsicHeight = e.height, o;
    }
    return A;
  }(be)
), na = (
  /** @class */
  function(t) {
    Ce(A, t);
    function A(r, e) {
      var o = t.call(this, r, e) || this, g = new XMLSerializer(), y = Xn(r, e);
      return e.setAttribute("width", y.width + "px"), e.setAttribute("height", y.height + "px"), o.svg = "data:image/svg+xml," + encodeURIComponent(g.serializeToString(e)), o.intrinsicWidth = e.width.baseVal.value, o.intrinsicHeight = e.height.baseVal.value, o.context.cache.addImage(o.svg), o;
    }
    return A;
  }(be)
), ia = (
  /** @class */
  function(t) {
    Ce(A, t);
    function A(r, e) {
      var o = t.call(this, r, e) || this;
      return o.value = e.value, o;
    }
    return A;
  }(be)
), zi = (
  /** @class */
  function(t) {
    Ce(A, t);
    function A(r, e) {
      var o = t.call(this, r, e) || this;
      return o.start = e.start, o.reversed = typeof e.reversed == "boolean" && e.reversed === !0, o;
    }
    return A;
  }(be)
), jh = [
  {
    type: 15,
    flags: 0,
    unit: "px",
    number: 3
  }
], Wh = [
  {
    type: 16,
    flags: 0,
    number: 50
  }
], Xh = function(t) {
  return t.width > t.height ? new Le(t.left + (t.width - t.height) / 2, t.top, t.height, t.height) : t.width < t.height ? new Le(t.left, t.top + (t.height - t.width) / 2, t.width, t.width) : t;
}, Jh = function(t) {
  var A = t.type === zh ? new Array(t.value.length + 1).join("•") : t.value;
  return A.length === 0 ? t.placeholder || "" : A;
}, Pn = "checkbox", Nn = "radio", zh = "password", io = 707406591, ls = (
  /** @class */
  function(t) {
    Ce(A, t);
    function A(r, e) {
      var o = t.call(this, r, e) || this;
      switch (o.type = e.type.toLowerCase(), o.checked = e.checked, o.value = Jh(e), (o.type === Pn || o.type === Nn) && (o.styles.backgroundColor = 3739148031, o.styles.borderTopColor = o.styles.borderRightColor = o.styles.borderBottomColor = o.styles.borderLeftColor = 2779096575, o.styles.borderTopWidth = o.styles.borderRightWidth = o.styles.borderBottomWidth = o.styles.borderLeftWidth = 1, o.styles.borderTopStyle = o.styles.borderRightStyle = o.styles.borderBottomStyle = o.styles.borderLeftStyle = 1, o.styles.backgroundClip = [
        0
        /* BORDER_BOX */
      ], o.styles.backgroundOrigin = [
        0
        /* BORDER_BOX */
      ], o.bounds = Xh(o.bounds)), o.type) {
        case Pn:
          o.styles.borderTopRightRadius = o.styles.borderTopLeftRadius = o.styles.borderBottomRightRadius = o.styles.borderBottomLeftRadius = jh;
          break;
        case Nn:
          o.styles.borderTopRightRadius = o.styles.borderTopLeftRadius = o.styles.borderBottomRightRadius = o.styles.borderBottomLeftRadius = Wh;
          break;
      }
      return o;
    }
    return A;
  }(be)
), sa = (
  /** @class */
  function(t) {
    Ce(A, t);
    function A(r, e) {
      var o = t.call(this, r, e) || this, g = e.options[e.selectedIndex || 0];
      return o.value = g && g.text || "", o;
    }
    return A;
  }(be)
), oa = (
  /** @class */
  function(t) {
    Ce(A, t);
    function A(r, e) {
      var o = t.call(this, r, e) || this;
      return o.value = e.value, o;
    }
    return A;
  }(be)
), aa = (
  /** @class */
  function(t) {
    Ce(A, t);
    function A(r, e) {
      var o = t.call(this, r, e) || this;
      o.src = e.src, o.width = parseInt(e.width, 10) || 0, o.height = parseInt(e.height, 10) || 0, o.backgroundColor = o.styles.backgroundColor;
      try {
        if (e.contentWindow && e.contentWindow.document && e.contentWindow.document.documentElement) {
          o.tree = la(r, e.contentWindow.document.documentElement);
          var g = e.contentWindow.document.documentElement ? Nr(r, getComputedStyle(e.contentWindow.document.documentElement).backgroundColor) : Te.TRANSPARENT, y = e.contentWindow.document.body ? Nr(r, getComputedStyle(e.contentWindow.document.body).backgroundColor) : Te.TRANSPARENT;
          o.backgroundColor = Ge(g) ? Ge(y) ? o.styles.backgroundColor : y : g;
        }
      } catch {
      }
      return o;
    }
    return A;
  }(be)
), Yh = ["OL", "UL", "MENU"], On = function(t, A, r, e) {
  for (var o = A.firstChild, g = void 0; o; o = g)
    if (g = o.nextSibling, ua(o) && o.data.trim().length > 0)
      r.textNodes.push(new Nh(t, o, r.styles));
    else if (mr(o))
      if (ga(o) && o.assignedNodes)
        o.assignedNodes().forEach(function(D) {
          return On(t, D, r, e);
        });
      else {
        var y = ca(t, o);
        y.styles.isVisible() && (Zh(o, y, e) ? y.flags |= 4 : $h(y.styles) && (y.flags |= 2), Yh.indexOf(o.tagName) !== -1 && (y.flags |= 8), r.elements.push(y), o.slot, o.shadowRoot ? On(t, o.shadowRoot, y, e) : !Gn(o) && !ha(o) && !Vn(o) && On(t, o, y, e));
      }
}, ca = function(t, A) {
  return Zi(A) ? new ea(t, A) : fa(A) ? new ra(t, A) : ha(A) ? new na(t, A) : Af(A) ? new ia(t, A) : tf(A) ? new zi(t, A) : ef(A) ? new ls(t, A) : Vn(A) ? new sa(t, A) : Gn(A) ? new oa(t, A) : da(A) ? new aa(t, A) : new be(t, A);
}, la = function(t, A) {
  var r = ca(t, A);
  return r.flags |= 4, On(t, A, r, r), r;
}, Zh = function(t, A, r) {
  return A.styles.isPositionedWithZIndex() || A.styles.opacity < 1 || A.styles.isTransformed() || us(t) && r.styles.isTransparent();
}, $h = function(t) {
  return t.isPositioned() || t.isFloating();
}, ua = function(t) {
  return t.nodeType === Node.TEXT_NODE;
}, mr = function(t) {
  return t.nodeType === Node.ELEMENT_NODE;
}, Yi = function(t) {
  return mr(t) && typeof t.style < "u" && !kn(t);
}, kn = function(t) {
  return typeof t.className == "object";
}, Af = function(t) {
  return t.tagName === "LI";
}, tf = function(t) {
  return t.tagName === "OL";
}, ef = function(t) {
  return t.tagName === "INPUT";
}, rf = function(t) {
  return t.tagName === "HTML";
}, ha = function(t) {
  return t.tagName === "svg";
}, us = function(t) {
  return t.tagName === "BODY";
}, fa = function(t) {
  return t.tagName === "CANVAS";
}, so = function(t) {
  return t.tagName === "VIDEO";
}, Zi = function(t) {
  return t.tagName === "IMG";
}, da = function(t) {
  return t.tagName === "IFRAME";
}, oo = function(t) {
  return t.tagName === "STYLE";
}, nf = function(t) {
  return t.tagName === "SCRIPT";
}, Gn = function(t) {
  return t.tagName === "TEXTAREA";
}, Vn = function(t) {
  return t.tagName === "SELECT";
}, ga = function(t) {
  return t.tagName === "SLOT";
}, ao = function(t) {
  return t.tagName.indexOf("-") > 0;
}, sf = (
  /** @class */
  function() {
    function t() {
      this.counters = {};
    }
    return t.prototype.getCounterValue = function(A) {
      var r = this.counters[A];
      return r && r.length ? r[r.length - 1] : 1;
    }, t.prototype.getCounterValues = function(A) {
      var r = this.counters[A];
      return r || [];
    }, t.prototype.pop = function(A) {
      var r = this;
      A.forEach(function(e) {
        return r.counters[e].pop();
      });
    }, t.prototype.parse = function(A) {
      var r = this, e = A.counterIncrement, o = A.counterReset, g = !0;
      e !== null && e.forEach(function(D) {
        var T = r.counters[D.counter];
        T && D.increment !== 0 && (g = !1, T.length || T.push(1), T[Math.max(0, T.length - 1)] += D.increment);
      });
      var y = [];
      return g && o.forEach(function(D) {
        var T = r.counters[D.counter];
        y.push(D.counter), T || (T = r.counters[D.counter] = []), T.push(D.reset);
      }), y;
    }, t;
  }()
), co = {
  integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
  values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
}, lo = {
  integers: [
    9e3,
    8e3,
    7e3,
    6e3,
    5e3,
    4e3,
    3e3,
    2e3,
    1e3,
    900,
    800,
    700,
    600,
    500,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ],
  values: [
    "Ք",
    "Փ",
    "Ւ",
    "Ց",
    "Ր",
    "Տ",
    "Վ",
    "Ս",
    "Ռ",
    "Ջ",
    "Պ",
    "Չ",
    "Ո",
    "Շ",
    "Ն",
    "Յ",
    "Մ",
    "Ճ",
    "Ղ",
    "Ձ",
    "Հ",
    "Կ",
    "Ծ",
    "Խ",
    "Լ",
    "Ի",
    "Ժ",
    "Թ",
    "Ը",
    "Է",
    "Զ",
    "Ե",
    "Դ",
    "Գ",
    "Բ",
    "Ա"
  ]
}, of = {
  integers: [
    1e4,
    9e3,
    8e3,
    7e3,
    6e3,
    5e3,
    4e3,
    3e3,
    2e3,
    1e3,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    19,
    18,
    17,
    16,
    15,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ],
  values: [
    "י׳",
    "ט׳",
    "ח׳",
    "ז׳",
    "ו׳",
    "ה׳",
    "ד׳",
    "ג׳",
    "ב׳",
    "א׳",
    "ת",
    "ש",
    "ר",
    "ק",
    "צ",
    "פ",
    "ע",
    "ס",
    "נ",
    "מ",
    "ל",
    "כ",
    "יט",
    "יח",
    "יז",
    "טז",
    "טו",
    "י",
    "ט",
    "ח",
    "ז",
    "ו",
    "ה",
    "ד",
    "ג",
    "ב",
    "א"
  ]
}, af = {
  integers: [
    1e4,
    9e3,
    8e3,
    7e3,
    6e3,
    5e3,
    4e3,
    3e3,
    2e3,
    1e3,
    900,
    800,
    700,
    600,
    500,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ],
  values: [
    "ჵ",
    "ჰ",
    "ჯ",
    "ჴ",
    "ხ",
    "ჭ",
    "წ",
    "ძ",
    "ც",
    "ჩ",
    "შ",
    "ყ",
    "ღ",
    "ქ",
    "ფ",
    "ჳ",
    "ტ",
    "ს",
    "რ",
    "ჟ",
    "პ",
    "ო",
    "ჲ",
    "ნ",
    "მ",
    "ლ",
    "კ",
    "ი",
    "თ",
    "ჱ",
    "ზ",
    "ვ",
    "ე",
    "დ",
    "გ",
    "ბ",
    "ა"
  ]
}, dr = function(t, A, r, e, o, g) {
  return t < A || t > r ? Xr(t, o, g.length > 0) : e.integers.reduce(function(y, D, T) {
    for (; t >= D; )
      t -= D, y += e.values[T];
    return y;
  }, "") + g;
}, pa = function(t, A, r, e) {
  var o = "";
  do
    r || t--, o = e(t) + o, t /= A;
  while (t * A >= A);
  return o;
}, Ht = function(t, A, r, e, o) {
  var g = r - A + 1;
  return (t < 0 ? "-" : "") + (pa(Math.abs(t), g, e, function(y) {
    return St(Math.floor(y % g) + A);
  }) + o);
}, Ar = function(t, A, r) {
  r === void 0 && (r = ". ");
  var e = A.length;
  return pa(Math.abs(t), e, !1, function(o) {
    return A[Math.floor(o % e)];
  }) + r;
}, Br = 1, Oe = 2, ke = 4, Mr = 8, Se = function(t, A, r, e, o, g) {
  if (t < -9999 || t > 9999)
    return Xr(t, 4, o.length > 0);
  var y = Math.abs(t), D = o;
  if (y === 0)
    return A[0] + D;
  for (var T = 0; y > 0 && T <= 4; T++) {
    var J = y % 10;
    J === 0 && Ot(g, Br) && D !== "" ? D = A[J] + D : J > 1 || J === 1 && T === 0 || J === 1 && T === 1 && Ot(g, Oe) || J === 1 && T === 1 && Ot(g, ke) && t > 100 || J === 1 && T > 1 && Ot(g, Mr) ? D = A[J] + (T > 0 ? r[T - 1] : "") + D : J === 1 && T > 0 && (D = r[T - 1] + D), y = Math.floor(y / 10);
  }
  return (t < 0 ? e : "") + D;
}, uo = "十百千萬", ho = "拾佰仟萬", fo = "マイナス", bi = "마이너스", Xr = function(t, A, r) {
  var e = r ? ". " : "", o = r ? "、" : "", g = r ? ", " : "", y = r ? " " : "";
  switch (A) {
    case 0:
      return "•" + y;
    case 1:
      return "◦" + y;
    case 2:
      return "◾" + y;
    case 5:
      var D = Ht(t, 48, 57, !0, e);
      return D.length < 4 ? "0" + D : D;
    case 4:
      return Ar(t, "〇一二三四五六七八九", o);
    case 6:
      return dr(t, 1, 3999, co, 3, e).toLowerCase();
    case 7:
      return dr(t, 1, 3999, co, 3, e);
    case 8:
      return Ht(t, 945, 969, !1, e);
    case 9:
      return Ht(t, 97, 122, !1, e);
    case 10:
      return Ht(t, 65, 90, !1, e);
    case 11:
      return Ht(t, 1632, 1641, !0, e);
    case 12:
    case 49:
      return dr(t, 1, 9999, lo, 3, e);
    case 35:
      return dr(t, 1, 9999, lo, 3, e).toLowerCase();
    case 13:
      return Ht(t, 2534, 2543, !0, e);
    case 14:
    case 30:
      return Ht(t, 6112, 6121, !0, e);
    case 15:
      return Ar(t, "子丑寅卯辰巳午未申酉戌亥", o);
    case 16:
      return Ar(t, "甲乙丙丁戊己庚辛壬癸", o);
    case 17:
    case 48:
      return Se(t, "零一二三四五六七八九", uo, "負", o, Oe | ke | Mr);
    case 47:
      return Se(t, "零壹貳參肆伍陸柒捌玖", ho, "負", o, Br | Oe | ke | Mr);
    case 42:
      return Se(t, "零一二三四五六七八九", uo, "负", o, Oe | ke | Mr);
    case 41:
      return Se(t, "零壹贰叁肆伍陆柒捌玖", ho, "负", o, Br | Oe | ke | Mr);
    case 26:
      return Se(t, "〇一二三四五六七八九", "十百千万", fo, o, 0);
    case 25:
      return Se(t, "零壱弐参四伍六七八九", "拾百千万", fo, o, Br | Oe | ke);
    case 31:
      return Se(t, "영일이삼사오육칠팔구", "십백천만", bi, g, Br | Oe | ke);
    case 33:
      return Se(t, "零一二三四五六七八九", "十百千萬", bi, g, 0);
    case 32:
      return Se(t, "零壹貳參四五六七八九", "拾百千", bi, g, Br | Oe | ke);
    case 18:
      return Ht(t, 2406, 2415, !0, e);
    case 20:
      return dr(t, 1, 19999, af, 3, e);
    case 21:
      return Ht(t, 2790, 2799, !0, e);
    case 22:
      return Ht(t, 2662, 2671, !0, e);
    case 22:
      return dr(t, 1, 10999, of, 3, e);
    case 23:
      return Ar(t, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
    case 24:
      return Ar(t, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
    case 27:
      return Ht(t, 3302, 3311, !0, e);
    case 28:
      return Ar(t, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", o);
    case 29:
      return Ar(t, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", o);
    case 34:
      return Ht(t, 3792, 3801, !0, e);
    case 37:
      return Ht(t, 6160, 6169, !0, e);
    case 38:
      return Ht(t, 4160, 4169, !0, e);
    case 39:
      return Ht(t, 2918, 2927, !0, e);
    case 40:
      return Ht(t, 1776, 1785, !0, e);
    case 43:
      return Ht(t, 3046, 3055, !0, e);
    case 44:
      return Ht(t, 3174, 3183, !0, e);
    case 45:
      return Ht(t, 3664, 3673, !0, e);
    case 46:
      return Ht(t, 3872, 3881, !0, e);
    case 3:
    default:
      return Ht(t, 48, 57, !0, e);
  }
}, Ba = "data-html2canvas-ignore", go = (
  /** @class */
  function() {
    function t(A, r, e) {
      if (this.context = A, this.options = e, this.scrolledElements = [], this.referenceElement = r, this.counters = new sf(), this.quoteDepth = 0, !r.ownerDocument)
        throw new Error("Cloned element does not have an owner document");
      this.documentElement = this.cloneNode(r.ownerDocument.documentElement, !1);
    }
    return t.prototype.toIFrame = function(A, r) {
      var e = this, o = cf(A, r);
      if (!o.contentWindow)
        return Promise.reject("Unable to find iframe window");
      var g = A.defaultView.pageXOffset, y = A.defaultView.pageYOffset, D = o.contentWindow, T = D.document, J = hf(o).then(function() {
        return Ae(e, void 0, void 0, function() {
          var Y, aA;
          return jt(this, function(dA) {
            switch (dA.label) {
              case 0:
                return this.scrolledElements.forEach(pf), D && (D.scrollTo(r.left, r.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (D.scrollY !== r.top || D.scrollX !== r.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(D.scrollX - r.left, D.scrollY - r.top, 0, 0))), Y = this.options.onclone, aA = this.clonedReferenceElement, typeof aA > "u" ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : T.fonts && T.fonts.ready ? [4, T.fonts.ready] : [3, 2];
              case 1:
                dA.sent(), dA.label = 2;
              case 2:
                return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, uf(T)] : [3, 4];
              case 3:
                dA.sent(), dA.label = 4;
              case 4:
                return typeof Y == "function" ? [2, Promise.resolve().then(function() {
                  return Y(T, aA);
                }).then(function() {
                  return o;
                })] : [2, o];
            }
          });
        });
      });
      return T.open(), T.write(df(document.doctype) + "<html></html>"), gf(this.referenceElement.ownerDocument, g, y), T.replaceChild(T.adoptNode(this.documentElement), T.documentElement), T.close(), J;
    }, t.prototype.createElementClone = function(A) {
      if (Xi(
        A,
        2
        /* CLONE */
      ))
        debugger;
      if (fa(A))
        return this.createCanvasClone(A);
      if (so(A))
        return this.createVideoClone(A);
      if (oo(A))
        return this.createStyleClone(A);
      var r = A.cloneNode(!1);
      return Zi(r) && (Zi(A) && A.currentSrc && A.currentSrc !== A.src && (r.src = A.currentSrc, r.srcset = ""), r.loading === "lazy" && (r.loading = "eager")), ao(r) ? this.createCustomElementClone(r) : r;
    }, t.prototype.createCustomElementClone = function(A) {
      var r = document.createElement("html2canvascustomelement");
      return xi(A.style, r), r;
    }, t.prototype.createStyleClone = function(A) {
      try {
        var r = A.sheet;
        if (r && r.cssRules) {
          var e = [].slice.call(r.cssRules, 0).reduce(function(g, y) {
            return y && typeof y.cssText == "string" ? g + y.cssText : g;
          }, ""), o = A.cloneNode(!1);
          return o.textContent = e, o;
        }
      } catch (g) {
        if (this.context.logger.error("Unable to access cssRules property", g), g.name !== "SecurityError")
          throw g;
      }
      return A.cloneNode(!1);
    }, t.prototype.createCanvasClone = function(A) {
      var r;
      if (this.options.inlineImages && A.ownerDocument) {
        var e = A.ownerDocument.createElement("img");
        try {
          return e.src = A.toDataURL(), e;
        } catch {
          this.context.logger.info("Unable to inline canvas contents, canvas is tainted", A);
        }
      }
      var o = A.cloneNode(!1);
      try {
        o.width = A.width, o.height = A.height;
        var g = A.getContext("2d"), y = o.getContext("2d");
        if (y)
          if (!this.options.allowTaint && g)
            y.putImageData(g.getImageData(0, 0, A.width, A.height), 0, 0);
          else {
            var D = (r = A.getContext("webgl2")) !== null && r !== void 0 ? r : A.getContext("webgl");
            if (D) {
              var T = D.getContextAttributes();
              (T == null ? void 0 : T.preserveDrawingBuffer) === !1 && this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", A);
            }
            y.drawImage(A, 0, 0);
          }
        return o;
      } catch {
        this.context.logger.info("Unable to clone canvas as it is tainted", A);
      }
      return o;
    }, t.prototype.createVideoClone = function(A) {
      var r = A.ownerDocument.createElement("canvas");
      r.width = A.offsetWidth, r.height = A.offsetHeight;
      var e = r.getContext("2d");
      try {
        return e && (e.drawImage(A, 0, 0, r.width, r.height), this.options.allowTaint || e.getImageData(0, 0, r.width, r.height)), r;
      } catch {
        this.context.logger.info("Unable to clone video as it is tainted", A);
      }
      var o = A.ownerDocument.createElement("canvas");
      return o.width = A.offsetWidth, o.height = A.offsetHeight, o;
    }, t.prototype.appendChildNode = function(A, r, e) {
      (!mr(r) || !nf(r) && !r.hasAttribute(Ba) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(r))) && (!this.options.copyStyles || !mr(r) || !oo(r)) && A.appendChild(this.cloneNode(r, e));
    }, t.prototype.cloneChildNodes = function(A, r, e) {
      for (var o = this, g = A.shadowRoot ? A.shadowRoot.firstChild : A.firstChild; g; g = g.nextSibling)
        if (mr(g) && ga(g) && typeof g.assignedNodes == "function") {
          var y = g.assignedNodes();
          y.length && y.forEach(function(D) {
            return o.appendChildNode(r, D, e);
          });
        } else
          this.appendChildNode(r, g, e);
    }, t.prototype.cloneNode = function(A, r) {
      if (ua(A))
        return document.createTextNode(A.data);
      if (!A.ownerDocument)
        return A.cloneNode(!1);
      var e = A.ownerDocument.defaultView;
      if (e && mr(A) && (Yi(A) || kn(A))) {
        var o = this.createElementClone(A);
        o.style.transitionProperty = "none";
        var g = e.getComputedStyle(A), y = e.getComputedStyle(A, ":before"), D = e.getComputedStyle(A, ":after");
        this.referenceElement === A && Yi(o) && (this.clonedReferenceElement = o), us(o) && mf(o);
        var T = this.counters.parse(new qs(this.context, g)), J = this.resolvePseudoContent(A, o, y, qr.BEFORE);
        ao(A) && (r = !0), so(A) || this.cloneChildNodes(A, o, r), J && o.insertBefore(J, o.firstChild);
        var Y = this.resolvePseudoContent(A, o, D, qr.AFTER);
        return Y && o.appendChild(Y), this.counters.pop(T), (g && (this.options.copyStyles || kn(A)) && !da(A) || r) && xi(g, o), (A.scrollTop !== 0 || A.scrollLeft !== 0) && this.scrolledElements.push([o, A.scrollLeft, A.scrollTop]), (Gn(A) || Vn(A)) && (Gn(o) || Vn(o)) && (o.value = A.value), o;
      }
      return A.cloneNode(!1);
    }, t.prototype.resolvePseudoContent = function(A, r, e, o) {
      var g = this;
      if (e) {
        var y = e.content, D = r.ownerDocument;
        if (!(!D || !y || y === "none" || y === "-moz-alt-content" || e.display === "none")) {
          this.counters.parse(new qs(this.context, e));
          var T = new Ah(this.context, e), J = D.createElement("html2canvaspseudoelement");
          xi(e, J), T.content.forEach(function(aA) {
            if (aA.type === 0)
              J.appendChild(D.createTextNode(aA.value));
            else if (aA.type === 22) {
              var dA = D.createElement("img");
              dA.src = aA.value, dA.style.opacity = "1", J.appendChild(dA);
            } else if (aA.type === 18) {
              if (aA.name === "attr") {
                var bA = aA.values.filter(gt);
                bA.length && J.appendChild(D.createTextNode(A.getAttribute(bA[0].value) || ""));
              } else if (aA.name === "counter") {
                var QA = aA.values.filter(vr), xA = QA[0], NA = QA[1];
                if (xA && gt(xA)) {
                  var _A = g.counters.getCounterValue(xA.value), HA = NA && gt(NA) ? Wi.parse(g.context, NA.value) : 3;
                  J.appendChild(D.createTextNode(Xr(_A, HA, !1)));
                }
              } else if (aA.name === "counters") {
                var WA = aA.values.filter(vr), xA = WA[0], VA = WA[1], NA = WA[2];
                if (xA && gt(xA)) {
                  var kA = g.counters.getCounterValues(xA.value), IA = NA && gt(NA) ? Wi.parse(g.context, NA.value) : 3, zA = VA && VA.type === 0 ? VA.value : "", At = kA.map(function(yt) {
                    return Xr(yt, IA, !1);
                  }).join(zA);
                  J.appendChild(D.createTextNode(At));
                }
              }
            } else if (aA.type === 20)
              switch (aA.value) {
                case "open-quote":
                  J.appendChild(D.createTextNode(Vs(T.quotes, g.quoteDepth++, !0)));
                  break;
                case "close-quote":
                  J.appendChild(D.createTextNode(Vs(T.quotes, --g.quoteDepth, !1)));
                  break;
                default:
                  J.appendChild(D.createTextNode(aA.value));
              }
          }), J.className = $i + " " + As;
          var Y = o === qr.BEFORE ? " " + $i : " " + As;
          return kn(r) ? r.className.baseValue += Y : r.className += Y, J;
        }
      }
    }, t.destroy = function(A) {
      return A.parentNode ? (A.parentNode.removeChild(A), !0) : !1;
    }, t;
  }()
), qr;
(function(t) {
  t[t.BEFORE = 0] = "BEFORE", t[t.AFTER = 1] = "AFTER";
})(qr || (qr = {}));
var cf = function(t, A) {
  var r = t.createElement("iframe");
  return r.className = "html2canvas-container", r.style.visibility = "hidden", r.style.position = "fixed", r.style.left = "-10000px", r.style.top = "0px", r.style.border = "0", r.width = A.width.toString(), r.height = A.height.toString(), r.scrolling = "no", r.setAttribute(Ba, "true"), t.body.appendChild(r), r;
}, lf = function(t) {
  return new Promise(function(A) {
    if (t.complete) {
      A();
      return;
    }
    if (!t.src) {
      A();
      return;
    }
    t.onload = A, t.onerror = A;
  });
}, uf = function(t) {
  return Promise.all([].slice.call(t.images, 0).map(lf));
}, hf = function(t) {
  return new Promise(function(A, r) {
    var e = t.contentWindow;
    if (!e)
      return r("No window assigned for iframe");
    var o = e.document;
    e.onload = t.onload = function() {
      e.onload = t.onload = null;
      var g = setInterval(function() {
        o.body.childNodes.length > 0 && o.readyState === "complete" && (clearInterval(g), A(t));
      }, 50);
    };
  });
}, ff = [
  "all",
  "d",
  "content"
  // Safari shows pseudoelements if content is set
], xi = function(t, A) {
  for (var r = t.length - 1; r >= 0; r--) {
    var e = t.item(r);
    ff.indexOf(e) === -1 && A.style.setProperty(e, t.getPropertyValue(e));
  }
  return A;
}, df = function(t) {
  var A = "";
  return t && (A += "<!DOCTYPE ", t.name && (A += t.name), t.internalSubset && (A += t.internalSubset), t.publicId && (A += '"' + t.publicId + '"'), t.systemId && (A += '"' + t.systemId + '"'), A += ">"), A;
}, gf = function(t, A, r) {
  t && t.defaultView && (A !== t.defaultView.pageXOffset || r !== t.defaultView.pageYOffset) && t.defaultView.scrollTo(A, r);
}, pf = function(t) {
  var A = t[0], r = t[1], e = t[2];
  A.scrollLeft = r, A.scrollTop = e;
}, Bf = ":before", wf = ":after", $i = "___html2canvas___pseudoelement_before", As = "___html2canvas___pseudoelement_after", po = `{
    content: "" !important;
    display: none !important;
}`, mf = function(t) {
  Cf(t, "." + $i + Bf + po + `
         .` + As + wf + po);
}, Cf = function(t, A) {
  var r = t.ownerDocument;
  if (r) {
    var e = r.createElement("style");
    e.textContent = A, t.appendChild(e);
  }
}, wa = (
  /** @class */
  function() {
    function t() {
    }
    return t.getOrigin = function(A) {
      var r = t._link;
      return r ? (r.href = A, r.href = r.href, r.protocol + r.hostname + r.port) : "about:blank";
    }, t.isSameOrigin = function(A) {
      return t.getOrigin(A) === t._origin;
    }, t.setContext = function(A) {
      t._link = A.document.createElement("a"), t._origin = t.getOrigin(A.location.href);
    }, t._origin = "about:blank", t;
  }()
), vf = (
  /** @class */
  function() {
    function t(A, r) {
      this.context = A, this._options = r, this._cache = {};
    }
    return t.prototype.addImage = function(A) {
      var r = Promise.resolve();
      return this.has(A) || (Ii(A) || Uf(A)) && (this._cache[A] = this.loadImage(A)).catch(function() {
      }), r;
    }, t.prototype.match = function(A) {
      return this._cache[A];
    }, t.prototype.loadImage = function(A) {
      return Ae(this, void 0, void 0, function() {
        var r, e, o, g, y = this;
        return jt(this, function(D) {
          switch (D.label) {
            case 0:
              return r = wa.isSameOrigin(A), e = !Ei(A) && this._options.useCORS === !0 && Nt.SUPPORT_CORS_IMAGES && !r, o = !Ei(A) && !r && !Ii(A) && typeof this._options.proxy == "string" && Nt.SUPPORT_CORS_XHR && !e, !r && this._options.allowTaint === !1 && !Ei(A) && !Ii(A) && !o && !e ? [
                2
                /*return*/
              ] : (g = A, o ? [4, this.proxy(g)] : [3, 2]);
            case 1:
              g = D.sent(), D.label = 2;
            case 2:
              return this.context.logger.debug("Added image " + A.substring(0, 256)), [4, new Promise(function(T, J) {
                var Y = new Image();
                Y.onload = function() {
                  return T(Y);
                }, Y.onerror = J, (bf(g) || e) && (Y.crossOrigin = "anonymous"), Y.src = g, Y.complete === !0 && setTimeout(function() {
                  return T(Y);
                }, 500), y._options.imageTimeout > 0 && setTimeout(function() {
                  return J("Timed out (" + y._options.imageTimeout + "ms) loading image");
                }, y._options.imageTimeout);
              })];
            case 3:
              return [2, D.sent()];
          }
        });
      });
    }, t.prototype.has = function(A) {
      return typeof this._cache[A] < "u";
    }, t.prototype.keys = function() {
      return Promise.resolve(Object.keys(this._cache));
    }, t.prototype.proxy = function(A) {
      var r = this, e = this._options.proxy;
      if (!e)
        throw new Error("No proxy defined");
      var o = A.substring(0, 256);
      return new Promise(function(g, y) {
        var D = Nt.SUPPORT_RESPONSE_TYPE ? "blob" : "text", T = new XMLHttpRequest();
        T.onload = function() {
          if (T.status === 200)
            if (D === "text")
              g(T.response);
            else {
              var aA = new FileReader();
              aA.addEventListener("load", function() {
                return g(aA.result);
              }, !1), aA.addEventListener("error", function(dA) {
                return y(dA);
              }, !1), aA.readAsDataURL(T.response);
            }
          else
            y("Failed to proxy resource " + o + " with status code " + T.status);
        }, T.onerror = y;
        var J = e.indexOf("?") > -1 ? "&" : "?";
        if (T.open("GET", "" + e + J + "url=" + encodeURIComponent(A) + "&responseType=" + D), D !== "text" && T instanceof XMLHttpRequest && (T.responseType = D), r._options.imageTimeout) {
          var Y = r._options.imageTimeout;
          T.timeout = Y, T.ontimeout = function() {
            return y("Timed out (" + Y + "ms) proxying " + o);
          };
        }
        T.send();
      });
    }, t;
  }()
), Qf = /^data:image\/svg\+xml/i, yf = /^data:image\/.*;base64,/i, Ff = /^data:image\/.*/i, Uf = function(t) {
  return Nt.SUPPORT_SVG_DRAWING || !xf(t);
}, Ei = function(t) {
  return Ff.test(t);
}, bf = function(t) {
  return yf.test(t);
}, Ii = function(t) {
  return t.substr(0, 4) === "blob";
}, xf = function(t) {
  return t.substr(-3).toLowerCase() === "svg" || Qf.test(t);
}, SA = (
  /** @class */
  function() {
    function t(A, r) {
      this.type = 0, this.x = A, this.y = r;
    }
    return t.prototype.add = function(A, r) {
      return new t(this.x + A, this.y + r);
    }, t;
  }()
), gr = function(t, A, r) {
  return new SA(t.x + (A.x - t.x) * r, t.y + (A.y - t.y) * r);
}, Hn = (
  /** @class */
  function() {
    function t(A, r, e, o) {
      this.type = 1, this.start = A, this.startControl = r, this.endControl = e, this.end = o;
    }
    return t.prototype.subdivide = function(A, r) {
      var e = gr(this.start, this.startControl, A), o = gr(this.startControl, this.endControl, A), g = gr(this.endControl, this.end, A), y = gr(e, o, A), D = gr(o, g, A), T = gr(y, D, A);
      return r ? new t(this.start, e, y, T) : new t(T, D, g, this.end);
    }, t.prototype.add = function(A, r) {
      return new t(this.start.add(A, r), this.startControl.add(A, r), this.endControl.add(A, r), this.end.add(A, r));
    }, t.prototype.reverse = function() {
      return new t(this.end, this.endControl, this.startControl, this.start);
    }, t;
  }()
), he = function(t) {
  return t.type === 1;
}, Ef = (
  /** @class */
  function() {
    function t(A) {
      var r = A.styles, e = A.bounds, o = Kr(r.borderTopLeftRadius, e.width, e.height), g = o[0], y = o[1], D = Kr(r.borderTopRightRadius, e.width, e.height), T = D[0], J = D[1], Y = Kr(r.borderBottomRightRadius, e.width, e.height), aA = Y[0], dA = Y[1], bA = Kr(r.borderBottomLeftRadius, e.width, e.height), QA = bA[0], xA = bA[1], NA = [];
      NA.push((g + T) / e.width), NA.push((QA + aA) / e.width), NA.push((y + xA) / e.height), NA.push((J + dA) / e.height);
      var _A = Math.max.apply(Math, NA);
      _A > 1 && (g /= _A, y /= _A, T /= _A, J /= _A, aA /= _A, dA /= _A, QA /= _A, xA /= _A);
      var HA = e.width - T, WA = e.height - dA, VA = e.width - aA, kA = e.height - xA, IA = r.borderTopWidth, zA = r.borderRightWidth, At = r.borderBottomWidth, RA = r.borderLeftWidth, ft = wt(r.paddingTop, A.bounds.width), yt = wt(r.paddingRight, A.bounds.width), Ft = wt(r.paddingBottom, A.bounds.width), tt = wt(r.paddingLeft, A.bounds.width);
      this.topLeftBorderDoubleOuterBox = g > 0 || y > 0 ? Qt(e.left + RA / 3, e.top + IA / 3, g - RA / 3, y - IA / 3, ht.TOP_LEFT) : new SA(e.left + RA / 3, e.top + IA / 3), this.topRightBorderDoubleOuterBox = g > 0 || y > 0 ? Qt(e.left + HA, e.top + IA / 3, T - zA / 3, J - IA / 3, ht.TOP_RIGHT) : new SA(e.left + e.width - zA / 3, e.top + IA / 3), this.bottomRightBorderDoubleOuterBox = aA > 0 || dA > 0 ? Qt(e.left + VA, e.top + WA, aA - zA / 3, dA - At / 3, ht.BOTTOM_RIGHT) : new SA(e.left + e.width - zA / 3, e.top + e.height - At / 3), this.bottomLeftBorderDoubleOuterBox = QA > 0 || xA > 0 ? Qt(e.left + RA / 3, e.top + kA, QA - RA / 3, xA - At / 3, ht.BOTTOM_LEFT) : new SA(e.left + RA / 3, e.top + e.height - At / 3), this.topLeftBorderDoubleInnerBox = g > 0 || y > 0 ? Qt(e.left + RA * 2 / 3, e.top + IA * 2 / 3, g - RA * 2 / 3, y - IA * 2 / 3, ht.TOP_LEFT) : new SA(e.left + RA * 2 / 3, e.top + IA * 2 / 3), this.topRightBorderDoubleInnerBox = g > 0 || y > 0 ? Qt(e.left + HA, e.top + IA * 2 / 3, T - zA * 2 / 3, J - IA * 2 / 3, ht.TOP_RIGHT) : new SA(e.left + e.width - zA * 2 / 3, e.top + IA * 2 / 3), this.bottomRightBorderDoubleInnerBox = aA > 0 || dA > 0 ? Qt(e.left + VA, e.top + WA, aA - zA * 2 / 3, dA - At * 2 / 3, ht.BOTTOM_RIGHT) : new SA(e.left + e.width - zA * 2 / 3, e.top + e.height - At * 2 / 3), this.bottomLeftBorderDoubleInnerBox = QA > 0 || xA > 0 ? Qt(e.left + RA * 2 / 3, e.top + kA, QA - RA * 2 / 3, xA - At * 2 / 3, ht.BOTTOM_LEFT) : new SA(e.left + RA * 2 / 3, e.top + e.height - At * 2 / 3), this.topLeftBorderStroke = g > 0 || y > 0 ? Qt(e.left + RA / 2, e.top + IA / 2, g - RA / 2, y - IA / 2, ht.TOP_LEFT) : new SA(e.left + RA / 2, e.top + IA / 2), this.topRightBorderStroke = g > 0 || y > 0 ? Qt(e.left + HA, e.top + IA / 2, T - zA / 2, J - IA / 2, ht.TOP_RIGHT) : new SA(e.left + e.width - zA / 2, e.top + IA / 2), this.bottomRightBorderStroke = aA > 0 || dA > 0 ? Qt(e.left + VA, e.top + WA, aA - zA / 2, dA - At / 2, ht.BOTTOM_RIGHT) : new SA(e.left + e.width - zA / 2, e.top + e.height - At / 2), this.bottomLeftBorderStroke = QA > 0 || xA > 0 ? Qt(e.left + RA / 2, e.top + kA, QA - RA / 2, xA - At / 2, ht.BOTTOM_LEFT) : new SA(e.left + RA / 2, e.top + e.height - At / 2), this.topLeftBorderBox = g > 0 || y > 0 ? Qt(e.left, e.top, g, y, ht.TOP_LEFT) : new SA(e.left, e.top), this.topRightBorderBox = T > 0 || J > 0 ? Qt(e.left + HA, e.top, T, J, ht.TOP_RIGHT) : new SA(e.left + e.width, e.top), this.bottomRightBorderBox = aA > 0 || dA > 0 ? Qt(e.left + VA, e.top + WA, aA, dA, ht.BOTTOM_RIGHT) : new SA(e.left + e.width, e.top + e.height), this.bottomLeftBorderBox = QA > 0 || xA > 0 ? Qt(e.left, e.top + kA, QA, xA, ht.BOTTOM_LEFT) : new SA(e.left, e.top + e.height), this.topLeftPaddingBox = g > 0 || y > 0 ? Qt(e.left + RA, e.top + IA, Math.max(0, g - RA), Math.max(0, y - IA), ht.TOP_LEFT) : new SA(e.left + RA, e.top + IA), this.topRightPaddingBox = T > 0 || J > 0 ? Qt(e.left + Math.min(HA, e.width - zA), e.top + IA, HA > e.width + zA ? 0 : Math.max(0, T - zA), Math.max(0, J - IA), ht.TOP_RIGHT) : new SA(e.left + e.width - zA, e.top + IA), this.bottomRightPaddingBox = aA > 0 || dA > 0 ? Qt(e.left + Math.min(VA, e.width - RA), e.top + Math.min(WA, e.height - At), Math.max(0, aA - zA), Math.max(0, dA - At), ht.BOTTOM_RIGHT) : new SA(e.left + e.width - zA, e.top + e.height - At), this.bottomLeftPaddingBox = QA > 0 || xA > 0 ? Qt(e.left + RA, e.top + Math.min(kA, e.height - At), Math.max(0, QA - RA), Math.max(0, xA - At), ht.BOTTOM_LEFT) : new SA(e.left + RA, e.top + e.height - At), this.topLeftContentBox = g > 0 || y > 0 ? Qt(e.left + RA + tt, e.top + IA + ft, Math.max(0, g - (RA + tt)), Math.max(0, y - (IA + ft)), ht.TOP_LEFT) : new SA(e.left + RA + tt, e.top + IA + ft), this.topRightContentBox = T > 0 || J > 0 ? Qt(e.left + Math.min(HA, e.width + RA + tt), e.top + IA + ft, HA > e.width + RA + tt ? 0 : T - RA + tt, J - (IA + ft), ht.TOP_RIGHT) : new SA(e.left + e.width - (zA + yt), e.top + IA + ft), this.bottomRightContentBox = aA > 0 || dA > 0 ? Qt(e.left + Math.min(VA, e.width - (RA + tt)), e.top + Math.min(WA, e.height + IA + ft), Math.max(0, aA - (zA + yt)), dA - (At + Ft), ht.BOTTOM_RIGHT) : new SA(e.left + e.width - (zA + yt), e.top + e.height - (At + Ft)), this.bottomLeftContentBox = QA > 0 || xA > 0 ? Qt(e.left + RA + tt, e.top + kA, Math.max(0, QA - (RA + tt)), xA - (At + Ft), ht.BOTTOM_LEFT) : new SA(e.left + RA + tt, e.top + e.height - (At + Ft));
    }
    return t;
  }()
), ht;
(function(t) {
  t[t.TOP_LEFT = 0] = "TOP_LEFT", t[t.TOP_RIGHT = 1] = "TOP_RIGHT", t[t.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", t[t.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
})(ht || (ht = {}));
var Qt = function(t, A, r, e, o) {
  var g = 4 * ((Math.sqrt(2) - 1) / 3), y = r * g, D = e * g, T = t + r, J = A + e;
  switch (o) {
    case ht.TOP_LEFT:
      return new Hn(new SA(t, J), new SA(t, J - D), new SA(T - y, A), new SA(T, A));
    case ht.TOP_RIGHT:
      return new Hn(new SA(t, A), new SA(t + y, A), new SA(T, J - D), new SA(T, J));
    case ht.BOTTOM_RIGHT:
      return new Hn(new SA(T, A), new SA(T, A + D), new SA(t + y, J), new SA(t, J));
    case ht.BOTTOM_LEFT:
    default:
      return new Hn(new SA(T, J), new SA(T - y, J), new SA(t, A + D), new SA(t, A));
  }
}, qn = function(t) {
  return [t.topLeftBorderBox, t.topRightBorderBox, t.bottomRightBorderBox, t.bottomLeftBorderBox];
}, If = function(t) {
  return [
    t.topLeftContentBox,
    t.topRightContentBox,
    t.bottomRightContentBox,
    t.bottomLeftContentBox
  ];
}, jn = function(t) {
  return [
    t.topLeftPaddingBox,
    t.topRightPaddingBox,
    t.bottomRightPaddingBox,
    t.bottomLeftPaddingBox
  ];
}, Hf = (
  /** @class */
  function() {
    function t(A, r, e) {
      this.offsetX = A, this.offsetY = r, this.matrix = e, this.type = 0, this.target = 6;
    }
    return t;
  }()
), Sn = (
  /** @class */
  function() {
    function t(A, r) {
      this.path = A, this.target = r, this.type = 1;
    }
    return t;
  }()
), Sf = (
  /** @class */
  function() {
    function t(A) {
      this.opacity = A, this.type = 2, this.target = 6;
    }
    return t;
  }()
), Tf = function(t) {
  return t.type === 0;
}, ma = function(t) {
  return t.type === 1;
}, Lf = function(t) {
  return t.type === 2;
}, Bo = function(t, A) {
  return t.length === A.length ? t.some(function(r, e) {
    return r === A[e];
  }) : !1;
}, Df = function(t, A, r, e, o) {
  return t.map(function(g, y) {
    switch (y) {
      case 0:
        return g.add(A, r);
      case 1:
        return g.add(A + e, r);
      case 2:
        return g.add(A + e, r + o);
      case 3:
        return g.add(A, r + o);
    }
    return g;
  });
}, Ca = (
  /** @class */
  function() {
    function t(A) {
      this.element = A, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
    }
    return t;
  }()
), va = (
  /** @class */
  function() {
    function t(A, r) {
      if (this.container = A, this.parent = r, this.effects = [], this.curves = new Ef(this.container), this.container.styles.opacity < 1 && this.effects.push(new Sf(this.container.styles.opacity)), this.container.styles.transform !== null) {
        var e = this.container.bounds.left + this.container.styles.transformOrigin[0].number, o = this.container.bounds.top + this.container.styles.transformOrigin[1].number, g = this.container.styles.transform;
        this.effects.push(new Hf(e, o, g));
      }
      if (this.container.styles.overflowX !== 0) {
        var y = qn(this.curves), D = jn(this.curves);
        Bo(y, D) ? this.effects.push(new Sn(
          y,
          6
          /* CONTENT */
        )) : (this.effects.push(new Sn(
          y,
          2
          /* BACKGROUND_BORDERS */
        )), this.effects.push(new Sn(
          D,
          4
          /* CONTENT */
        )));
      }
    }
    return t.prototype.getEffects = function(A) {
      for (var r = [
        2,
        3
        /* FIXED */
      ].indexOf(this.container.styles.position) === -1, e = this.parent, o = this.effects.slice(0); e; ) {
        var g = e.effects.filter(function(T) {
          return !ma(T);
        });
        if (r || e.container.styles.position !== 0 || !e.parent) {
          if (o.unshift.apply(o, g), r = [
            2,
            3
            /* FIXED */
          ].indexOf(e.container.styles.position) === -1, e.container.styles.overflowX !== 0) {
            var y = qn(e.curves), D = jn(e.curves);
            Bo(y, D) || o.unshift(new Sn(
              D,
              6
              /* CONTENT */
            ));
          }
        } else
          o.unshift.apply(o, g);
        e = e.parent;
      }
      return o.filter(function(T) {
        return Ot(T.target, A);
      });
    }, t;
  }()
), ts = function(t, A, r, e) {
  t.container.elements.forEach(function(o) {
    var g = Ot(
      o.flags,
      4
      /* CREATES_REAL_STACKING_CONTEXT */
    ), y = Ot(
      o.flags,
      2
      /* CREATES_STACKING_CONTEXT */
    ), D = new va(o, t);
    Ot(
      o.styles.display,
      2048
      /* LIST_ITEM */
    ) && e.push(D);
    var T = Ot(
      o.flags,
      8
      /* IS_LIST_OWNER */
    ) ? [] : e;
    if (g || y) {
      var J = g || o.styles.isPositioned() ? r : A, Y = new Ca(D);
      if (o.styles.isPositioned() || o.styles.opacity < 1 || o.styles.isTransformed()) {
        var aA = o.styles.zIndex.order;
        if (aA < 0) {
          var dA = 0;
          J.negativeZIndex.some(function(QA, xA) {
            return aA > QA.element.container.styles.zIndex.order ? (dA = xA, !1) : dA > 0;
          }), J.negativeZIndex.splice(dA, 0, Y);
        } else if (aA > 0) {
          var bA = 0;
          J.positiveZIndex.some(function(QA, xA) {
            return aA >= QA.element.container.styles.zIndex.order ? (bA = xA + 1, !1) : bA > 0;
          }), J.positiveZIndex.splice(bA, 0, Y);
        } else
          J.zeroOrAutoZIndexOrTransformedOrOpacity.push(Y);
      } else
        o.styles.isFloating() ? J.nonPositionedFloats.push(Y) : J.nonPositionedInlineLevel.push(Y);
      ts(D, Y, g ? Y : r, T);
    } else
      o.styles.isInlineLevel() ? A.inlineLevel.push(D) : A.nonInlineLevel.push(D), ts(D, A, r, T);
    Ot(
      o.flags,
      8
      /* IS_LIST_OWNER */
    ) && Qa(o, T);
  });
}, Qa = function(t, A) {
  for (var r = t instanceof zi ? t.start : 1, e = t instanceof zi ? t.reversed : !1, o = 0; o < A.length; o++) {
    var g = A[o];
    g.container instanceof ia && typeof g.container.value == "number" && g.container.value !== 0 && (r = g.container.value), g.listValue = Xr(r, g.container.styles.listStyleType, !0), r += e ? -1 : 1;
  }
}, _f = function(t) {
  var A = new va(t, null), r = new Ca(A), e = [];
  return ts(A, r, r, e), Qa(A.container, e), r;
}, wo = function(t, A) {
  switch (A) {
    case 0:
      return de(t.topLeftBorderBox, t.topLeftPaddingBox, t.topRightBorderBox, t.topRightPaddingBox);
    case 1:
      return de(t.topRightBorderBox, t.topRightPaddingBox, t.bottomRightBorderBox, t.bottomRightPaddingBox);
    case 2:
      return de(t.bottomRightBorderBox, t.bottomRightPaddingBox, t.bottomLeftBorderBox, t.bottomLeftPaddingBox);
    case 3:
    default:
      return de(t.bottomLeftBorderBox, t.bottomLeftPaddingBox, t.topLeftBorderBox, t.topLeftPaddingBox);
  }
}, Of = function(t, A) {
  switch (A) {
    case 0:
      return de(t.topLeftBorderBox, t.topLeftBorderDoubleOuterBox, t.topRightBorderBox, t.topRightBorderDoubleOuterBox);
    case 1:
      return de(t.topRightBorderBox, t.topRightBorderDoubleOuterBox, t.bottomRightBorderBox, t.bottomRightBorderDoubleOuterBox);
    case 2:
      return de(t.bottomRightBorderBox, t.bottomRightBorderDoubleOuterBox, t.bottomLeftBorderBox, t.bottomLeftBorderDoubleOuterBox);
    case 3:
    default:
      return de(t.bottomLeftBorderBox, t.bottomLeftBorderDoubleOuterBox, t.topLeftBorderBox, t.topLeftBorderDoubleOuterBox);
  }
}, kf = function(t, A) {
  switch (A) {
    case 0:
      return de(t.topLeftBorderDoubleInnerBox, t.topLeftPaddingBox, t.topRightBorderDoubleInnerBox, t.topRightPaddingBox);
    case 1:
      return de(t.topRightBorderDoubleInnerBox, t.topRightPaddingBox, t.bottomRightBorderDoubleInnerBox, t.bottomRightPaddingBox);
    case 2:
      return de(t.bottomRightBorderDoubleInnerBox, t.bottomRightPaddingBox, t.bottomLeftBorderDoubleInnerBox, t.bottomLeftPaddingBox);
    case 3:
    default:
      return de(t.bottomLeftBorderDoubleInnerBox, t.bottomLeftPaddingBox, t.topLeftBorderDoubleInnerBox, t.topLeftPaddingBox);
  }
}, Kf = function(t, A) {
  switch (A) {
    case 0:
      return Tn(t.topLeftBorderStroke, t.topRightBorderStroke);
    case 1:
      return Tn(t.topRightBorderStroke, t.bottomRightBorderStroke);
    case 2:
      return Tn(t.bottomRightBorderStroke, t.bottomLeftBorderStroke);
    case 3:
    default:
      return Tn(t.bottomLeftBorderStroke, t.topLeftBorderStroke);
  }
}, Tn = function(t, A) {
  var r = [];
  return he(t) ? r.push(t.subdivide(0.5, !1)) : r.push(t), he(A) ? r.push(A.subdivide(0.5, !0)) : r.push(A), r;
}, de = function(t, A, r, e) {
  var o = [];
  return he(t) ? o.push(t.subdivide(0.5, !1)) : o.push(t), he(r) ? o.push(r.subdivide(0.5, !0)) : o.push(r), he(e) ? o.push(e.subdivide(0.5, !0).reverse()) : o.push(e), he(A) ? o.push(A.subdivide(0.5, !1).reverse()) : o.push(A), o;
}, ya = function(t) {
  var A = t.bounds, r = t.styles;
  return A.add(r.borderLeftWidth, r.borderTopWidth, -(r.borderRightWidth + r.borderLeftWidth), -(r.borderTopWidth + r.borderBottomWidth));
}, Wn = function(t) {
  var A = t.styles, r = t.bounds, e = wt(A.paddingLeft, r.width), o = wt(A.paddingRight, r.width), g = wt(A.paddingTop, r.width), y = wt(A.paddingBottom, r.width);
  return r.add(e + A.borderLeftWidth, g + A.borderTopWidth, -(A.borderRightWidth + A.borderLeftWidth + e + o), -(A.borderTopWidth + A.borderBottomWidth + g + y));
}, Rf = function(t, A) {
  return t === 0 ? A.bounds : t === 2 ? Wn(A) : ya(A);
}, Mf = function(t, A) {
  return t === 0 ? A.bounds : t === 2 ? Wn(A) : ya(A);
}, Hi = function(t, A, r) {
  var e = Rf(wr(t.styles.backgroundOrigin, A), t), o = Mf(wr(t.styles.backgroundClip, A), t), g = Pf(wr(t.styles.backgroundSize, A), r, e), y = g[0], D = g[1], T = Kr(wr(t.styles.backgroundPosition, A), e.width - y, e.height - D), J = Nf(wr(t.styles.backgroundRepeat, A), T, g, e, o), Y = Math.round(e.left + T[0]), aA = Math.round(e.top + T[1]);
  return [J, Y, aA, y, D];
}, pr = function(t) {
  return gt(t) && t.value === Cr.AUTO;
}, Ln = function(t) {
  return typeof t == "number";
}, Pf = function(t, A, r) {
  var e = A[0], o = A[1], g = A[2], y = t[0], D = t[1];
  if (!y)
    return [0, 0];
  if (Lt(y) && D && Lt(D))
    return [wt(y, r.width), wt(D, r.height)];
  var T = Ln(g);
  if (gt(y) && (y.value === Cr.CONTAIN || y.value === Cr.COVER)) {
    if (Ln(g)) {
      var J = r.width / r.height;
      return J < g != (y.value === Cr.COVER) ? [r.width, r.width / g] : [r.height * g, r.height];
    }
    return [r.width, r.height];
  }
  var Y = Ln(e), aA = Ln(o), dA = Y || aA;
  if (pr(y) && (!D || pr(D))) {
    if (Y && aA)
      return [e, o];
    if (!T && !dA)
      return [r.width, r.height];
    if (dA && T) {
      var bA = Y ? e : o * g, QA = aA ? o : e / g;
      return [bA, QA];
    }
    var xA = Y ? e : r.width, NA = aA ? o : r.height;
    return [xA, NA];
  }
  if (T) {
    var _A = 0, HA = 0;
    return Lt(y) ? _A = wt(y, r.width) : Lt(D) && (HA = wt(D, r.height)), pr(y) ? _A = HA * g : (!D || pr(D)) && (HA = _A / g), [_A, HA];
  }
  var WA = null, VA = null;
  if (Lt(y) ? WA = wt(y, r.width) : D && Lt(D) && (VA = wt(D, r.height)), WA !== null && (!D || pr(D)) && (VA = Y && aA ? WA / e * o : r.height), VA !== null && pr(y) && (WA = Y && aA ? VA / o * e : r.width), WA !== null && VA !== null)
    return [WA, VA];
  throw new Error("Unable to calculate background-size for element");
}, wr = function(t, A) {
  var r = t[A];
  return typeof r > "u" ? t[0] : r;
}, Nf = function(t, A, r, e, o) {
  var g = A[0], y = A[1], D = r[0], T = r[1];
  switch (t) {
    case 2:
      return [
        new SA(Math.round(e.left), Math.round(e.top + y)),
        new SA(Math.round(e.left + e.width), Math.round(e.top + y)),
        new SA(Math.round(e.left + e.width), Math.round(T + e.top + y)),
        new SA(Math.round(e.left), Math.round(T + e.top + y))
      ];
    case 3:
      return [
        new SA(Math.round(e.left + g), Math.round(e.top)),
        new SA(Math.round(e.left + g + D), Math.round(e.top)),
        new SA(Math.round(e.left + g + D), Math.round(e.height + e.top)),
        new SA(Math.round(e.left + g), Math.round(e.height + e.top))
      ];
    case 1:
      return [
        new SA(Math.round(e.left + g), Math.round(e.top + y)),
        new SA(Math.round(e.left + g + D), Math.round(e.top + y)),
        new SA(Math.round(e.left + g + D), Math.round(e.top + y + T)),
        new SA(Math.round(e.left + g), Math.round(e.top + y + T))
      ];
    default:
      return [
        new SA(Math.round(o.left), Math.round(o.top)),
        new SA(Math.round(o.left + o.width), Math.round(o.top)),
        new SA(Math.round(o.left + o.width), Math.round(o.height + o.top)),
        new SA(Math.round(o.left), Math.round(o.height + o.top))
      ];
  }
}, Gf = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", mo = "Hidden Text", Vf = (
  /** @class */
  function() {
    function t(A) {
      this._data = {}, this._document = A;
    }
    return t.prototype.parseMetrics = function(A, r) {
      var e = this._document.createElement("div"), o = this._document.createElement("img"), g = this._document.createElement("span"), y = this._document.body;
      e.style.visibility = "hidden", e.style.fontFamily = A, e.style.fontSize = r, e.style.margin = "0", e.style.padding = "0", e.style.whiteSpace = "nowrap", y.appendChild(e), o.src = Gf, o.width = 1, o.height = 1, o.style.margin = "0", o.style.padding = "0", o.style.verticalAlign = "baseline", g.style.fontFamily = A, g.style.fontSize = r, g.style.margin = "0", g.style.padding = "0", g.appendChild(this._document.createTextNode(mo)), e.appendChild(g), e.appendChild(o);
      var D = o.offsetTop - g.offsetTop + 2;
      e.removeChild(g), e.appendChild(this._document.createTextNode(mo)), e.style.lineHeight = "normal", o.style.verticalAlign = "super";
      var T = o.offsetTop - e.offsetTop + 2;
      return y.removeChild(e), { baseline: D, middle: T };
    }, t.prototype.getMetrics = function(A, r) {
      var e = A + " " + r;
      return typeof this._data[e] > "u" && (this._data[e] = this.parseMetrics(A, r)), this._data[e];
    }, t;
  }()
), Fa = (
  /** @class */
  function() {
    function t(A, r) {
      this.context = A, this.options = r;
    }
    return t;
  }()
), qf = 1e4, jf = (
  /** @class */
  function(t) {
    Ce(A, t);
    function A(r, e) {
      var o = t.call(this, r, e) || this;
      return o._activeEffects = [], o.canvas = e.canvas ? e.canvas : document.createElement("canvas"), o.ctx = o.canvas.getContext("2d"), e.canvas || (o.canvas.width = Math.floor(e.width * e.scale), o.canvas.height = Math.floor(e.height * e.scale), o.canvas.style.width = e.width + "px", o.canvas.style.height = e.height + "px"), o.fontMetrics = new Vf(document), o.ctx.scale(o.options.scale, o.options.scale), o.ctx.translate(-e.x, -e.y), o.ctx.textBaseline = "bottom", o._activeEffects = [], o.context.logger.debug("Canvas renderer initialized (" + e.width + "x" + e.height + ") with scale " + e.scale), o;
    }
    return A.prototype.applyEffects = function(r) {
      for (var e = this; this._activeEffects.length; )
        this.popEffect();
      r.forEach(function(o) {
        return e.applyEffect(o);
      });
    }, A.prototype.applyEffect = function(r) {
      this.ctx.save(), Lf(r) && (this.ctx.globalAlpha = r.opacity), Tf(r) && (this.ctx.translate(r.offsetX, r.offsetY), this.ctx.transform(r.matrix[0], r.matrix[1], r.matrix[2], r.matrix[3], r.matrix[4], r.matrix[5]), this.ctx.translate(-r.offsetX, -r.offsetY)), ma(r) && (this.path(r.path), this.ctx.clip()), this._activeEffects.push(r);
    }, A.prototype.popEffect = function() {
      this._activeEffects.pop(), this.ctx.restore();
    }, A.prototype.renderStack = function(r) {
      return Ae(this, void 0, void 0, function() {
        var e;
        return jt(this, function(o) {
          switch (o.label) {
            case 0:
              return e = r.element.container.styles, e.isVisible() ? [4, this.renderStackContent(r)] : [3, 2];
            case 1:
              o.sent(), o.label = 2;
            case 2:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderNode = function(r) {
      return Ae(this, void 0, void 0, function() {
        return jt(this, function(e) {
          switch (e.label) {
            case 0:
              if (Ot(
                r.container.flags,
                16
                /* DEBUG_RENDER */
              ))
                debugger;
              return r.container.styles.isVisible() ? [4, this.renderNodeBackgroundAndBorders(r)] : [3, 3];
            case 1:
              return e.sent(), [4, this.renderNodeContent(r)];
            case 2:
              e.sent(), e.label = 3;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderTextWithLetterSpacing = function(r, e, o) {
      var g = this;
      if (e === 0)
        this.ctx.fillText(r.text, r.bounds.left, r.bounds.top + o);
      else {
        var y = cs(r.text);
        y.reduce(function(D, T) {
          return g.ctx.fillText(T, D, r.bounds.top + o), D + g.ctx.measureText(T).width;
        }, r.bounds.left);
      }
    }, A.prototype.createFontStyle = function(r) {
      var e = r.fontVariant.filter(function(y) {
        return y === "normal" || y === "small-caps";
      }).join(""), o = Yf(r.fontFamily).join(", "), g = Yr(r.fontSize) ? "" + r.fontSize.number + r.fontSize.unit : r.fontSize.number + "px";
      return [
        [r.fontStyle, e, r.fontWeight, g, o].join(" "),
        o,
        g
      ];
    }, A.prototype.renderTextNode = function(r, e) {
      return Ae(this, void 0, void 0, function() {
        var o, g, y, D, T, J, Y, aA, dA = this;
        return jt(this, function(bA) {
          return o = this.createFontStyle(e), g = o[0], y = o[1], D = o[2], this.ctx.font = g, this.ctx.direction = e.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", T = this.fontMetrics.getMetrics(y, D), J = T.baseline, Y = T.middle, aA = e.paintOrder, r.textBounds.forEach(function(QA) {
            aA.forEach(function(xA) {
              switch (xA) {
                case 0:
                  dA.ctx.fillStyle = Kt(e.color), dA.renderTextWithLetterSpacing(QA, e.letterSpacing, J);
                  var NA = e.textShadow;
                  NA.length && QA.text.trim().length && (NA.slice(0).reverse().forEach(function(_A) {
                    dA.ctx.shadowColor = Kt(_A.color), dA.ctx.shadowOffsetX = _A.offsetX.number * dA.options.scale, dA.ctx.shadowOffsetY = _A.offsetY.number * dA.options.scale, dA.ctx.shadowBlur = _A.blur.number, dA.renderTextWithLetterSpacing(QA, e.letterSpacing, J);
                  }), dA.ctx.shadowColor = "", dA.ctx.shadowOffsetX = 0, dA.ctx.shadowOffsetY = 0, dA.ctx.shadowBlur = 0), e.textDecorationLine.length && (dA.ctx.fillStyle = Kt(e.textDecorationColor || e.color), e.textDecorationLine.forEach(function(_A) {
                    switch (_A) {
                      case 1:
                        dA.ctx.fillRect(QA.bounds.left, Math.round(QA.bounds.top + J), QA.bounds.width, 1);
                        break;
                      case 2:
                        dA.ctx.fillRect(QA.bounds.left, Math.round(QA.bounds.top), QA.bounds.width, 1);
                        break;
                      case 3:
                        dA.ctx.fillRect(QA.bounds.left, Math.ceil(QA.bounds.top + Y), QA.bounds.width, 1);
                        break;
                    }
                  }));
                  break;
                case 1:
                  e.webkitTextStrokeWidth && QA.text.trim().length && (dA.ctx.strokeStyle = Kt(e.webkitTextStrokeColor), dA.ctx.lineWidth = e.webkitTextStrokeWidth, dA.ctx.lineJoin = window.chrome ? "miter" : "round", dA.ctx.strokeText(QA.text, QA.bounds.left, QA.bounds.top + J)), dA.ctx.strokeStyle = "", dA.ctx.lineWidth = 0, dA.ctx.lineJoin = "miter";
                  break;
              }
            });
          }), [
            2
            /*return*/
          ];
        });
      });
    }, A.prototype.renderReplacedElement = function(r, e, o) {
      if (o && r.intrinsicWidth > 0 && r.intrinsicHeight > 0) {
        var g = Wn(r), y = jn(e);
        this.path(y), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(o, 0, 0, r.intrinsicWidth, r.intrinsicHeight, g.left, g.top, g.width, g.height), this.ctx.restore();
      }
    }, A.prototype.renderNodeContent = function(r) {
      return Ae(this, void 0, void 0, function() {
        var e, o, g, y, D, T, HA, HA, J, Y, aA, dA, VA, bA, QA, kA, xA, NA, _A, HA, WA, VA, kA;
        return jt(this, function(IA) {
          switch (IA.label) {
            case 0:
              this.applyEffects(r.getEffects(
                4
                /* CONTENT */
              )), e = r.container, o = r.curves, g = e.styles, y = 0, D = e.textNodes, IA.label = 1;
            case 1:
              return y < D.length ? (T = D[y], [4, this.renderTextNode(T, g)]) : [3, 4];
            case 2:
              IA.sent(), IA.label = 3;
            case 3:
              return y++, [3, 1];
            case 4:
              if (!(e instanceof ea))
                return [3, 8];
              IA.label = 5;
            case 5:
              return IA.trys.push([5, 7, , 8]), [4, this.context.cache.match(e.src)];
            case 6:
              return HA = IA.sent(), this.renderReplacedElement(e, o, HA), [3, 8];
            case 7:
              return IA.sent(), this.context.logger.error("Error loading image " + e.src), [3, 8];
            case 8:
              if (e instanceof ra && this.renderReplacedElement(e, o, e.canvas), !(e instanceof na))
                return [3, 12];
              IA.label = 9;
            case 9:
              return IA.trys.push([9, 11, , 12]), [4, this.context.cache.match(e.svg)];
            case 10:
              return HA = IA.sent(), this.renderReplacedElement(e, o, HA), [3, 12];
            case 11:
              return IA.sent(), this.context.logger.error("Error loading svg " + e.svg.substring(0, 255)), [3, 12];
            case 12:
              return e instanceof aa && e.tree ? (J = new A(this.context, {
                scale: this.options.scale,
                backgroundColor: e.backgroundColor,
                x: 0,
                y: 0,
                width: e.width,
                height: e.height
              }), [4, J.render(e.tree)]) : [3, 14];
            case 13:
              Y = IA.sent(), e.width && e.height && this.ctx.drawImage(Y, 0, 0, e.width, e.height, e.bounds.left, e.bounds.top, e.bounds.width, e.bounds.height), IA.label = 14;
            case 14:
              if (e instanceof ls && (aA = Math.min(e.bounds.width, e.bounds.height), e.type === Pn ? e.checked && (this.ctx.save(), this.path([
                new SA(e.bounds.left + aA * 0.39363, e.bounds.top + aA * 0.79),
                new SA(e.bounds.left + aA * 0.16, e.bounds.top + aA * 0.5549),
                new SA(e.bounds.left + aA * 0.27347, e.bounds.top + aA * 0.44071),
                new SA(e.bounds.left + aA * 0.39694, e.bounds.top + aA * 0.5649),
                new SA(e.bounds.left + aA * 0.72983, e.bounds.top + aA * 0.23),
                new SA(e.bounds.left + aA * 0.84, e.bounds.top + aA * 0.34085),
                new SA(e.bounds.left + aA * 0.39363, e.bounds.top + aA * 0.79)
              ]), this.ctx.fillStyle = Kt(io), this.ctx.fill(), this.ctx.restore()) : e.type === Nn && e.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(e.bounds.left + aA / 2, e.bounds.top + aA / 2, aA / 4, 0, Math.PI * 2, !0), this.ctx.fillStyle = Kt(io), this.ctx.fill(), this.ctx.restore())), Wf(e) && e.value.length) {
                switch (dA = this.createFontStyle(g), VA = dA[0], bA = dA[1], QA = this.fontMetrics.getMetrics(VA, bA).baseline, this.ctx.font = VA, this.ctx.fillStyle = Kt(g.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = Jf(e.styles.textAlign), kA = Wn(e), xA = 0, e.styles.textAlign) {
                  case 1:
                    xA += kA.width / 2;
                    break;
                  case 2:
                    xA += kA.width;
                    break;
                }
                NA = kA.add(xA, 0, 0, -kA.height / 2 + 1), this.ctx.save(), this.path([
                  new SA(kA.left, kA.top),
                  new SA(kA.left + kA.width, kA.top),
                  new SA(kA.left + kA.width, kA.top + kA.height),
                  new SA(kA.left, kA.top + kA.height)
                ]), this.ctx.clip(), this.renderTextWithLetterSpacing(new Vr(e.value, NA), g.letterSpacing, QA), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
              }
              if (!Ot(
                e.styles.display,
                2048
                /* LIST_ITEM */
              ))
                return [3, 20];
              if (e.styles.listStyleImage === null)
                return [3, 19];
              if (_A = e.styles.listStyleImage, _A.type !== 0)
                return [3, 18];
              HA = void 0, WA = _A.url, IA.label = 15;
            case 15:
              return IA.trys.push([15, 17, , 18]), [4, this.context.cache.match(WA)];
            case 16:
              return HA = IA.sent(), this.ctx.drawImage(HA, e.bounds.left - (HA.width + 10), e.bounds.top), [3, 18];
            case 17:
              return IA.sent(), this.context.logger.error("Error loading list-style-image " + WA), [3, 18];
            case 18:
              return [3, 20];
            case 19:
              r.listValue && e.styles.listStyleType !== -1 && (VA = this.createFontStyle(g)[0], this.ctx.font = VA, this.ctx.fillStyle = Kt(g.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", kA = new Le(e.bounds.left, e.bounds.top + wt(e.styles.paddingTop, e.bounds.width), e.bounds.width, Ns(g.lineHeight, g.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new Vr(r.listValue, kA), g.letterSpacing, Ns(g.lineHeight, g.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), IA.label = 20;
            case 20:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderStackContent = function(r) {
      return Ae(this, void 0, void 0, function() {
        var e, o, _A, g, y, _A, D, T, _A, J, Y, _A, aA, dA, _A, bA, QA, _A, xA, NA, _A;
        return jt(this, function(HA) {
          switch (HA.label) {
            case 0:
              if (Ot(
                r.element.container.flags,
                16
                /* DEBUG_RENDER */
              ))
                debugger;
              return [4, this.renderNodeBackgroundAndBorders(r.element)];
            case 1:
              HA.sent(), e = 0, o = r.negativeZIndex, HA.label = 2;
            case 2:
              return e < o.length ? (_A = o[e], [4, this.renderStack(_A)]) : [3, 5];
            case 3:
              HA.sent(), HA.label = 4;
            case 4:
              return e++, [3, 2];
            case 5:
              return [4, this.renderNodeContent(r.element)];
            case 6:
              HA.sent(), g = 0, y = r.nonInlineLevel, HA.label = 7;
            case 7:
              return g < y.length ? (_A = y[g], [4, this.renderNode(_A)]) : [3, 10];
            case 8:
              HA.sent(), HA.label = 9;
            case 9:
              return g++, [3, 7];
            case 10:
              D = 0, T = r.nonPositionedFloats, HA.label = 11;
            case 11:
              return D < T.length ? (_A = T[D], [4, this.renderStack(_A)]) : [3, 14];
            case 12:
              HA.sent(), HA.label = 13;
            case 13:
              return D++, [3, 11];
            case 14:
              J = 0, Y = r.nonPositionedInlineLevel, HA.label = 15;
            case 15:
              return J < Y.length ? (_A = Y[J], [4, this.renderStack(_A)]) : [3, 18];
            case 16:
              HA.sent(), HA.label = 17;
            case 17:
              return J++, [3, 15];
            case 18:
              aA = 0, dA = r.inlineLevel, HA.label = 19;
            case 19:
              return aA < dA.length ? (_A = dA[aA], [4, this.renderNode(_A)]) : [3, 22];
            case 20:
              HA.sent(), HA.label = 21;
            case 21:
              return aA++, [3, 19];
            case 22:
              bA = 0, QA = r.zeroOrAutoZIndexOrTransformedOrOpacity, HA.label = 23;
            case 23:
              return bA < QA.length ? (_A = QA[bA], [4, this.renderStack(_A)]) : [3, 26];
            case 24:
              HA.sent(), HA.label = 25;
            case 25:
              return bA++, [3, 23];
            case 26:
              xA = 0, NA = r.positiveZIndex, HA.label = 27;
            case 27:
              return xA < NA.length ? (_A = NA[xA], [4, this.renderStack(_A)]) : [3, 30];
            case 28:
              HA.sent(), HA.label = 29;
            case 29:
              return xA++, [3, 27];
            case 30:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.mask = function(r) {
      this.ctx.beginPath(), this.ctx.moveTo(0, 0), this.ctx.lineTo(this.canvas.width, 0), this.ctx.lineTo(this.canvas.width, this.canvas.height), this.ctx.lineTo(0, this.canvas.height), this.ctx.lineTo(0, 0), this.formatPath(r.slice(0).reverse()), this.ctx.closePath();
    }, A.prototype.path = function(r) {
      this.ctx.beginPath(), this.formatPath(r), this.ctx.closePath();
    }, A.prototype.formatPath = function(r) {
      var e = this;
      r.forEach(function(o, g) {
        var y = he(o) ? o.start : o;
        g === 0 ? e.ctx.moveTo(y.x, y.y) : e.ctx.lineTo(y.x, y.y), he(o) && e.ctx.bezierCurveTo(o.startControl.x, o.startControl.y, o.endControl.x, o.endControl.y, o.end.x, o.end.y);
      });
    }, A.prototype.renderRepeat = function(r, e, o, g) {
      this.path(r), this.ctx.fillStyle = e, this.ctx.translate(o, g), this.ctx.fill(), this.ctx.translate(-o, -g);
    }, A.prototype.resizeImage = function(r, e, o) {
      var g;
      if (r.width === e && r.height === o)
        return r;
      var y = (g = this.canvas.ownerDocument) !== null && g !== void 0 ? g : document, D = y.createElement("canvas");
      D.width = Math.max(1, e), D.height = Math.max(1, o);
      var T = D.getContext("2d");
      return T.drawImage(r, 0, 0, r.width, r.height, 0, 0, e, o), D;
    }, A.prototype.renderBackgroundImage = function(r) {
      return Ae(this, void 0, void 0, function() {
        var e, o, g, y, D, T;
        return jt(this, function(J) {
          switch (J.label) {
            case 0:
              e = r.styles.backgroundImage.length - 1, o = function(Y) {
                var aA, dA, bA, ft, Ct, Bt, tt, pt, At, QA, ft, Ct, Bt, tt, pt, xA, NA, _A, HA, WA, VA, kA, IA, zA, At, RA, ft, yt, Ft, tt, pt, Rt, Ct, Bt, te, Xt, Mt, ee, re, ne, se, kt;
                return jt(this, function(ge) {
                  switch (ge.label) {
                    case 0:
                      if (Y.type !== 0)
                        return [3, 5];
                      aA = void 0, dA = Y.url, ge.label = 1;
                    case 1:
                      return ge.trys.push([1, 3, , 4]), [4, g.context.cache.match(dA)];
                    case 2:
                      return aA = ge.sent(), [3, 4];
                    case 3:
                      return ge.sent(), g.context.logger.error("Error loading background-image " + dA), [3, 4];
                    case 4:
                      return aA && (bA = Hi(r, e, [
                        aA.width,
                        aA.height,
                        aA.width / aA.height
                      ]), ft = bA[0], Ct = bA[1], Bt = bA[2], tt = bA[3], pt = bA[4], At = g.ctx.createPattern(g.resizeImage(aA, tt, pt), "repeat"), g.renderRepeat(ft, At, Ct, Bt)), [3, 6];
                    case 5:
                      Sl(Y) ? (QA = Hi(r, e, [null, null, null]), ft = QA[0], Ct = QA[1], Bt = QA[2], tt = QA[3], pt = QA[4], xA = bl(Y.angle, tt, pt), NA = xA[0], _A = xA[1], HA = xA[2], WA = xA[3], VA = xA[4], kA = document.createElement("canvas"), kA.width = tt, kA.height = pt, IA = kA.getContext("2d"), zA = IA.createLinearGradient(_A, WA, HA, VA), Ms(Y.stops, NA).forEach(function(ct) {
                        return zA.addColorStop(ct.stop, Kt(ct.color));
                      }), IA.fillStyle = zA, IA.fillRect(0, 0, tt, pt), tt > 0 && pt > 0 && (At = g.ctx.createPattern(kA, "repeat"), g.renderRepeat(ft, At, Ct, Bt))) : Tl(Y) && (RA = Hi(r, e, [
                        null,
                        null,
                        null
                      ]), ft = RA[0], yt = RA[1], Ft = RA[2], tt = RA[3], pt = RA[4], Rt = Y.position.length === 0 ? [ss] : Y.position, Ct = wt(Rt[0], tt), Bt = wt(Rt[Rt.length - 1], pt), te = xl(Y, Ct, Bt, tt, pt), Xt = te[0], Mt = te[1], Xt > 0 && Mt > 0 && (ee = g.ctx.createRadialGradient(yt + Ct, Ft + Bt, 0, yt + Ct, Ft + Bt, Xt), Ms(Y.stops, Xt * 2).forEach(function(ct) {
                        return ee.addColorStop(ct.stop, Kt(ct.color));
                      }), g.path(ft), g.ctx.fillStyle = ee, Xt !== Mt ? (re = r.bounds.left + 0.5 * r.bounds.width, ne = r.bounds.top + 0.5 * r.bounds.height, se = Mt / Xt, kt = 1 / se, g.ctx.save(), g.ctx.translate(re, ne), g.ctx.transform(1, 0, 0, se, 0, 0), g.ctx.translate(-re, -ne), g.ctx.fillRect(yt, kt * (Ft - ne) + ne, tt, pt * kt), g.ctx.restore()) : g.ctx.fill())), ge.label = 6;
                    case 6:
                      return e--, [
                        2
                        /*return*/
                      ];
                  }
                });
              }, g = this, y = 0, D = r.styles.backgroundImage.slice(0).reverse(), J.label = 1;
            case 1:
              return y < D.length ? (T = D[y], [5, o(T)]) : [3, 4];
            case 2:
              J.sent(), J.label = 3;
            case 3:
              return y++, [3, 1];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderSolidBorder = function(r, e, o) {
      return Ae(this, void 0, void 0, function() {
        return jt(this, function(g) {
          return this.path(wo(o, e)), this.ctx.fillStyle = Kt(r), this.ctx.fill(), [
            2
            /*return*/
          ];
        });
      });
    }, A.prototype.renderDoubleBorder = function(r, e, o, g) {
      return Ae(this, void 0, void 0, function() {
        var y, D;
        return jt(this, function(T) {
          switch (T.label) {
            case 0:
              return e < 3 ? [4, this.renderSolidBorder(r, o, g)] : [3, 2];
            case 1:
              return T.sent(), [
                2
                /*return*/
              ];
            case 2:
              return y = Of(g, o), this.path(y), this.ctx.fillStyle = Kt(r), this.ctx.fill(), D = kf(g, o), this.path(D), this.ctx.fill(), [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderNodeBackgroundAndBorders = function(r) {
      return Ae(this, void 0, void 0, function() {
        var e, o, g, y, D, T, J, Y, aA = this;
        return jt(this, function(dA) {
          switch (dA.label) {
            case 0:
              return this.applyEffects(r.getEffects(
                2
                /* BACKGROUND_BORDERS */
              )), e = r.container.styles, o = !Ge(e.backgroundColor) || e.backgroundImage.length, g = [
                { style: e.borderTopStyle, color: e.borderTopColor, width: e.borderTopWidth },
                { style: e.borderRightStyle, color: e.borderRightColor, width: e.borderRightWidth },
                { style: e.borderBottomStyle, color: e.borderBottomColor, width: e.borderBottomWidth },
                { style: e.borderLeftStyle, color: e.borderLeftColor, width: e.borderLeftWidth }
              ], y = Xf(wr(e.backgroundClip, 0), r.curves), o || e.boxShadow.length ? (this.ctx.save(), this.path(y), this.ctx.clip(), Ge(e.backgroundColor) || (this.ctx.fillStyle = Kt(e.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(r.container)]) : [3, 2];
            case 1:
              dA.sent(), this.ctx.restore(), e.boxShadow.slice(0).reverse().forEach(function(bA) {
                aA.ctx.save();
                var QA = qn(r.curves), xA = bA.inset ? 0 : qf, NA = Df(QA, -xA + (bA.inset ? 1 : -1) * bA.spread.number, (bA.inset ? 1 : -1) * bA.spread.number, bA.spread.number * (bA.inset ? -2 : 2), bA.spread.number * (bA.inset ? -2 : 2));
                bA.inset ? (aA.path(QA), aA.ctx.clip(), aA.mask(NA)) : (aA.mask(QA), aA.ctx.clip(), aA.path(NA)), aA.ctx.shadowOffsetX = bA.offsetX.number + xA, aA.ctx.shadowOffsetY = bA.offsetY.number, aA.ctx.shadowColor = Kt(bA.color), aA.ctx.shadowBlur = bA.blur.number, aA.ctx.fillStyle = bA.inset ? Kt(bA.color) : "rgba(0,0,0,1)", aA.ctx.fill(), aA.ctx.restore();
              }), dA.label = 2;
            case 2:
              D = 0, T = 0, J = g, dA.label = 3;
            case 3:
              return T < J.length ? (Y = J[T], Y.style !== 0 && !Ge(Y.color) && Y.width > 0 ? Y.style !== 2 ? [3, 5] : [4, this.renderDashedDottedBorder(
                Y.color,
                Y.width,
                D,
                r.curves,
                2
                /* DASHED */
              )] : [3, 11]) : [3, 13];
            case 4:
              return dA.sent(), [3, 11];
            case 5:
              return Y.style !== 3 ? [3, 7] : [4, this.renderDashedDottedBorder(
                Y.color,
                Y.width,
                D,
                r.curves,
                3
                /* DOTTED */
              )];
            case 6:
              return dA.sent(), [3, 11];
            case 7:
              return Y.style !== 4 ? [3, 9] : [4, this.renderDoubleBorder(Y.color, Y.width, D, r.curves)];
            case 8:
              return dA.sent(), [3, 11];
            case 9:
              return [4, this.renderSolidBorder(Y.color, D, r.curves)];
            case 10:
              dA.sent(), dA.label = 11;
            case 11:
              D++, dA.label = 12;
            case 12:
              return T++, [3, 3];
            case 13:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderDashedDottedBorder = function(r, e, o, g, y) {
      return Ae(this, void 0, void 0, function() {
        var D, T, J, Y, aA, dA, bA, QA, xA, NA, _A, HA, WA, VA, kA, IA, kA, IA;
        return jt(this, function(zA) {
          return this.ctx.save(), D = Kf(g, o), T = wo(g, o), y === 2 && (this.path(T), this.ctx.clip()), he(T[0]) ? (J = T[0].start.x, Y = T[0].start.y) : (J = T[0].x, Y = T[0].y), he(T[1]) ? (aA = T[1].end.x, dA = T[1].end.y) : (aA = T[1].x, dA = T[1].y), o === 0 || o === 2 ? bA = Math.abs(J - aA) : bA = Math.abs(Y - dA), this.ctx.beginPath(), y === 3 ? this.formatPath(D) : this.formatPath(T.slice(0, 2)), QA = e < 3 ? e * 3 : e * 2, xA = e < 3 ? e * 2 : e, y === 3 && (QA = e, xA = e), NA = !0, bA <= QA * 2 ? NA = !1 : bA <= QA * 2 + xA ? (_A = bA / (2 * QA + xA), QA *= _A, xA *= _A) : (HA = Math.floor((bA + xA) / (QA + xA)), WA = (bA - HA * QA) / (HA - 1), VA = (bA - (HA + 1) * QA) / HA, xA = VA <= 0 || Math.abs(xA - WA) < Math.abs(xA - VA) ? WA : VA), NA && (y === 3 ? this.ctx.setLineDash([0, QA + xA]) : this.ctx.setLineDash([QA, xA])), y === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = e) : this.ctx.lineWidth = e * 2 + 1.1, this.ctx.strokeStyle = Kt(r), this.ctx.stroke(), this.ctx.setLineDash([]), y === 2 && (he(T[0]) && (kA = T[3], IA = T[0], this.ctx.beginPath(), this.formatPath([new SA(kA.end.x, kA.end.y), new SA(IA.start.x, IA.start.y)]), this.ctx.stroke()), he(T[1]) && (kA = T[1], IA = T[2], this.ctx.beginPath(), this.formatPath([new SA(kA.end.x, kA.end.y), new SA(IA.start.x, IA.start.y)]), this.ctx.stroke())), this.ctx.restore(), [
            2
            /*return*/
          ];
        });
      });
    }, A.prototype.render = function(r) {
      return Ae(this, void 0, void 0, function() {
        var e;
        return jt(this, function(o) {
          switch (o.label) {
            case 0:
              return this.options.backgroundColor && (this.ctx.fillStyle = Kt(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), e = _f(r), [4, this.renderStack(e)];
            case 1:
              return o.sent(), this.applyEffects([]), [2, this.canvas];
          }
        });
      });
    }, A;
  }(Fa)
), Wf = function(t) {
  return t instanceof oa || t instanceof sa ? !0 : t instanceof ls && t.type !== Nn && t.type !== Pn;
}, Xf = function(t, A) {
  switch (t) {
    case 0:
      return qn(A);
    case 2:
      return If(A);
    case 1:
    default:
      return jn(A);
  }
}, Jf = function(t) {
  switch (t) {
    case 1:
      return "center";
    case 2:
      return "right";
    case 0:
    default:
      return "left";
  }
}, zf = ["-apple-system", "system-ui"], Yf = function(t) {
  return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? t.filter(function(A) {
    return zf.indexOf(A) === -1;
  }) : t;
}, Zf = (
  /** @class */
  function(t) {
    Ce(A, t);
    function A(r, e) {
      var o = t.call(this, r, e) || this;
      return o.canvas = e.canvas ? e.canvas : document.createElement("canvas"), o.ctx = o.canvas.getContext("2d"), o.options = e, o.canvas.width = Math.floor(e.width * e.scale), o.canvas.height = Math.floor(e.height * e.scale), o.canvas.style.width = e.width + "px", o.canvas.style.height = e.height + "px", o.ctx.scale(o.options.scale, o.options.scale), o.ctx.translate(-e.x, -e.y), o.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + e.width + "x" + e.height + " at " + e.x + "," + e.y + ") with scale " + e.scale), o;
    }
    return A.prototype.render = function(r) {
      return Ae(this, void 0, void 0, function() {
        var e, o;
        return jt(this, function(g) {
          switch (g.label) {
            case 0:
              return e = Ji(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, r), [4, $f(e)];
            case 1:
              return o = g.sent(), this.options.backgroundColor && (this.ctx.fillStyle = Kt(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(o, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas];
          }
        });
      });
    }, A;
  }(Fa)
), $f = function(t) {
  return new Promise(function(A, r) {
    var e = new Image();
    e.onload = function() {
      A(e);
    }, e.onerror = r, e.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(t));
  });
}, Ad = (
  /** @class */
  function() {
    function t(A) {
      var r = A.id, e = A.enabled;
      this.id = r, this.enabled = e, this.start = Date.now();
    }
    return t.prototype.debug = function() {
      for (var A = [], r = 0; r < arguments.length; r++)
        A[r] = arguments[r];
      this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, un([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
    }, t.prototype.getTime = function() {
      return Date.now() - this.start;
    }, t.prototype.info = function() {
      for (var A = [], r = 0; r < arguments.length; r++)
        A[r] = arguments[r];
      this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, un([this.id, this.getTime() + "ms"], A));
    }, t.prototype.warn = function() {
      for (var A = [], r = 0; r < arguments.length; r++)
        A[r] = arguments[r];
      this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, un([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
    }, t.prototype.error = function() {
      for (var A = [], r = 0; r < arguments.length; r++)
        A[r] = arguments[r];
      this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, un([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
    }, t.instances = {}, t;
  }()
), td = (
  /** @class */
  function() {
    function t(A, r) {
      var e;
      this.windowBounds = r, this.instanceName = "#" + t.instanceCount++, this.logger = new Ad({ id: this.instanceName, enabled: A.logging }), this.cache = (e = A.cache) !== null && e !== void 0 ? e : new vf(this, A);
    }
    return t.instanceCount = 1, t;
  }()
), ed = function(t, A) {
  return A === void 0 && (A = {}), rd(t, A);
};
typeof window < "u" && wa.setContext(window);
var rd = function(t, A) {
  return Ae(void 0, void 0, void 0, function() {
    var r, e, o, g, y, D, T, J, Y, aA, dA, bA, QA, xA, NA, _A, HA, WA, VA, kA, zA, IA, zA, At, RA, ft, yt, Ft, tt, pt, Rt, Ct, Bt, te, Xt, Mt, ee, re, ne, se;
    return jt(this, function(kt) {
      switch (kt.label) {
        case 0:
          if (!t || typeof t != "object")
            return [2, Promise.reject("Invalid element provided as first argument")];
          if (r = t.ownerDocument, !r)
            throw new Error("Element is not attached to a Document");
          if (e = r.defaultView, !e)
            throw new Error("Document is not attached to a Window");
          return o = {
            allowTaint: (At = A.allowTaint) !== null && At !== void 0 ? At : !1,
            imageTimeout: (RA = A.imageTimeout) !== null && RA !== void 0 ? RA : 15e3,
            proxy: A.proxy,
            useCORS: (ft = A.useCORS) !== null && ft !== void 0 ? ft : !1
          }, g = Di({ logging: (yt = A.logging) !== null && yt !== void 0 ? yt : !0, cache: A.cache }, o), y = {
            windowWidth: (Ft = A.windowWidth) !== null && Ft !== void 0 ? Ft : e.innerWidth,
            windowHeight: (tt = A.windowHeight) !== null && tt !== void 0 ? tt : e.innerHeight,
            scrollX: (pt = A.scrollX) !== null && pt !== void 0 ? pt : e.pageXOffset,
            scrollY: (Rt = A.scrollY) !== null && Rt !== void 0 ? Rt : e.pageYOffset
          }, D = new Le(y.scrollX, y.scrollY, y.windowWidth, y.windowHeight), T = new td(g, D), J = (Ct = A.foreignObjectRendering) !== null && Ct !== void 0 ? Ct : !1, Y = {
            allowTaint: (Bt = A.allowTaint) !== null && Bt !== void 0 ? Bt : !1,
            onclone: A.onclone,
            ignoreElements: A.ignoreElements,
            inlineImages: J,
            copyStyles: J
          }, T.logger.debug("Starting document clone with size " + D.width + "x" + D.height + " scrolled to " + -D.left + "," + -D.top), aA = new go(T, t, Y), dA = aA.clonedReferenceElement, dA ? [4, aA.toIFrame(r, D)] : [2, Promise.reject("Unable to find element in cloned iframe")];
        case 1:
          return bA = kt.sent(), QA = us(dA) || rf(dA) ? La(dA.ownerDocument) : Xn(T, dA), xA = QA.width, NA = QA.height, _A = QA.left, HA = QA.top, WA = nd(T, dA, A.backgroundColor), VA = {
            canvas: A.canvas,
            backgroundColor: WA,
            scale: (Xt = (te = A.scale) !== null && te !== void 0 ? te : e.devicePixelRatio) !== null && Xt !== void 0 ? Xt : 1,
            x: ((Mt = A.x) !== null && Mt !== void 0 ? Mt : 0) + _A,
            y: ((ee = A.y) !== null && ee !== void 0 ? ee : 0) + HA,
            width: (re = A.width) !== null && re !== void 0 ? re : Math.ceil(xA),
            height: (ne = A.height) !== null && ne !== void 0 ? ne : Math.ceil(NA)
          }, J ? (T.logger.debug("Document cloned, using foreign object rendering"), zA = new Zf(T, VA), [4, zA.render(dA)]) : [3, 3];
        case 2:
          return kA = kt.sent(), [3, 5];
        case 3:
          return T.logger.debug("Document cloned, element located at " + _A + "," + HA + " with size " + xA + "x" + NA + " using computed rendering"), T.logger.debug("Starting DOM parsing"), IA = la(T, dA), WA === IA.styles.backgroundColor && (IA.styles.backgroundColor = Te.TRANSPARENT), T.logger.debug("Starting renderer for element at " + VA.x + "," + VA.y + " with size " + VA.width + "x" + VA.height), zA = new jf(T, VA), [4, zA.render(IA)];
        case 4:
          kA = kt.sent(), kt.label = 5;
        case 5:
          return (!((se = A.removeContainer) !== null && se !== void 0) || se) && (go.destroy(bA) || T.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), T.logger.debug("Finished rendering"), [2, kA];
      }
    });
  });
}, nd = function(t, A, r) {
  var e = A.ownerDocument, o = e.documentElement ? Nr(t, getComputedStyle(e.documentElement).backgroundColor) : Te.TRANSPARENT, g = e.body ? Nr(t, getComputedStyle(e.body).backgroundColor) : Te.TRANSPARENT, y = typeof r == "string" ? Nr(t, r) : r === null ? Te.TRANSPARENT : 4294967295;
  return A === e.documentElement ? Ge(o) ? Ge(g) ? y : g : o : y;
}, Ua = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
  return typeof t;
} : function(t) {
  return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, hs = Object.assign || function(t) {
  for (var A = 1; A < arguments.length; A++) {
    var r = arguments[A];
    for (var e in r)
      Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e]);
  }
  return t;
}, ni = function(A) {
  var r = typeof A > "u" ? "undefined" : Ua(A);
  return r === "undefined" ? "undefined" : r === "string" || A instanceof String ? "string" : r === "number" || A instanceof Number ? "number" : r === "function" || A instanceof Function ? "function" : A && A.constructor === Array ? "array" : A && A.nodeType === 1 ? "element" : r === "object" ? "object" : "unknown";
}, Jr = function(A, r) {
  var e = document.createElement(A);
  if (r.className && (e.className = r.className), r.innerHTML) {
    e.innerHTML = r.innerHTML;
    for (var o = e.getElementsByTagName("script"), g = o.length; g-- > 0; null)
      o[g].parentNode.removeChild(o[g]);
  }
  for (var y in r.style)
    e.style[y] = r.style[y];
  return e;
}, id = function t(A, r) {
  for (var e = A.nodeType === 3 ? document.createTextNode(A.nodeValue) : A.cloneNode(!1), o = A.firstChild; o; o = o.nextSibling)
    (r === !0 || o.nodeType !== 1 || o.nodeName !== "SCRIPT") && e.appendChild(t(o, r));
  return A.nodeType === 1 && (A.nodeName === "CANVAS" ? (e.width = A.width, e.height = A.height, e.getContext("2d").drawImage(A, 0, 0)) : (A.nodeName === "TEXTAREA" || A.nodeName === "SELECT") && (e.value = A.value), e.addEventListener("load", function() {
    e.scrollTop = A.scrollTop, e.scrollLeft = A.scrollLeft;
  }, !0)), e;
}, Co = function(A, r) {
  if (ni(A) === "number")
    return A * 72 / 96 / r;
  var e = {};
  for (var o in A)
    e[o] = A[o] * 72 / 96 / r;
  return e;
}, vo = function(A, r) {
  return Math.floor(A * r / 72 * 96);
}, Si = typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function sd() {
  throw new Error("Dynamic requires are not currently supported by rollup-plugin-commonjs");
}
function od(t, A) {
  return A = { exports: {} }, t(A, A.exports), A.exports;
}
var ad = od(function(t, A) {
  /*!
   * @overview es6-promise - a tiny implementation of Promises/A+.
   * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
   * @license   Licensed under MIT license
   *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
   * @version   v4.2.5+7f2b526d
   */
  (function(r, e) {
    t.exports = e();
  })(Si, function() {
    function r(mA) {
      var FA = typeof mA;
      return mA !== null && (FA === "object" || FA === "function");
    }
    function e(mA) {
      return typeof mA == "function";
    }
    var o = void 0;
    Array.isArray ? o = Array.isArray : o = function(mA) {
      return Object.prototype.toString.call(mA) === "[object Array]";
    };
    var g = o, y = 0, D = void 0, T = void 0, J = function(FA, EA) {
      IA[y] = FA, IA[y + 1] = EA, y += 2, y === 2 && (T ? T(zA) : RA());
    };
    function Y(mA) {
      T = mA;
    }
    function aA(mA) {
      J = mA;
    }
    var dA = typeof window < "u" ? window : void 0, bA = dA || {}, QA = bA.MutationObserver || bA.WebKitMutationObserver, xA = typeof self > "u" && typeof process < "u" && {}.toString.call(process) === "[object process]", NA = typeof Uint8ClampedArray < "u" && typeof importScripts < "u" && typeof MessageChannel < "u";
    function _A() {
      return function() {
        return process.nextTick(zA);
      };
    }
    function HA() {
      return typeof D < "u" ? function() {
        D(zA);
      } : kA();
    }
    function WA() {
      var mA = 0, FA = new QA(zA), EA = document.createTextNode("");
      return FA.observe(EA, { characterData: !0 }), function() {
        EA.data = mA = ++mA % 2;
      };
    }
    function VA() {
      var mA = new MessageChannel();
      return mA.port1.onmessage = zA, function() {
        return mA.port2.postMessage(0);
      };
    }
    function kA() {
      var mA = setTimeout;
      return function() {
        return mA(zA, 1);
      };
    }
    var IA = new Array(1e3);
    function zA() {
      for (var mA = 0; mA < y; mA += 2) {
        var FA = IA[mA], EA = IA[mA + 1];
        FA(EA), IA[mA] = void 0, IA[mA + 1] = void 0;
      }
      y = 0;
    }
    function At() {
      try {
        var mA = Function("return this")().require("vertx");
        return D = mA.runOnLoop || mA.runOnContext, HA();
      } catch {
        return kA();
      }
    }
    var RA = void 0;
    xA ? RA = _A() : QA ? RA = WA() : NA ? RA = VA() : dA === void 0 && typeof sd == "function" ? RA = At() : RA = kA();
    function ft(mA, FA) {
      var EA = this, KA = new this.constructor(tt);
      KA[Ft] === void 0 && De(KA);
      var XA = EA._state;
      if (XA) {
        var qA = arguments[XA - 1];
        J(function() {
          return je(XA, KA, qA, EA._result);
        });
      } else
        ir(EA, KA, mA, FA);
      return KA;
    }
    function yt(mA) {
      var FA = this;
      if (mA && typeof mA == "object" && mA.constructor === FA)
        return mA;
      var EA = new FA(tt);
      return kt(EA, mA), EA;
    }
    var Ft = Math.random().toString(36).substring(2);
    function tt() {
    }
    var pt = void 0, Rt = 1, Ct = 2, Bt = { error: null };
    function te() {
      return new TypeError("You cannot resolve a promise with itself");
    }
    function Xt() {
      return new TypeError("A promises callback cannot return that same promise.");
    }
    function Mt(mA) {
      try {
        return mA.then;
      } catch (FA) {
        return Bt.error = FA, Bt;
      }
    }
    function ee(mA, FA, EA, KA) {
      try {
        mA.call(FA, EA, KA);
      } catch (XA) {
        return XA;
      }
    }
    function re(mA, FA, EA) {
      J(function(KA) {
        var XA = !1, qA = ee(EA, FA, function(Ut) {
          XA || (XA = !0, FA !== Ut ? kt(KA, Ut) : ct(KA, Ut));
        }, function(Ut) {
          XA || (XA = !0, dt(KA, Ut));
        }, "Settle: " + (KA._label || " unknown promise"));
        !XA && qA && (XA = !0, dt(KA, qA));
      }, mA);
    }
    function ne(mA, FA) {
      FA._state === Rt ? ct(mA, FA._result) : FA._state === Ct ? dt(mA, FA._result) : ir(FA, void 0, function(EA) {
        return kt(mA, EA);
      }, function(EA) {
        return dt(mA, EA);
      });
    }
    function se(mA, FA, EA) {
      FA.constructor === mA.constructor && EA === ft && FA.constructor.resolve === yt ? ne(mA, FA) : EA === Bt ? (dt(mA, Bt.error), Bt.error = null) : EA === void 0 ? ct(mA, FA) : e(EA) ? re(mA, FA, EA) : ct(mA, FA);
    }
    function kt(mA, FA) {
      mA === FA ? dt(mA, te()) : r(FA) ? se(mA, FA, Mt(FA)) : ct(mA, FA);
    }
    function ge(mA) {
      mA._onerror && mA._onerror(mA._result), sr(mA);
    }
    function ct(mA, FA) {
      mA._state === pt && (mA._result = FA, mA._state = Rt, mA._subscribers.length !== 0 && J(sr, mA));
    }
    function dt(mA, FA) {
      mA._state === pt && (mA._state = Ct, mA._result = FA, J(ge, mA));
    }
    function ir(mA, FA, EA, KA) {
      var XA = mA._subscribers, qA = XA.length;
      mA._onerror = null, XA[qA] = FA, XA[qA + Rt] = EA, XA[qA + Ct] = KA, qA === 0 && mA._state && J(sr, mA);
    }
    function sr(mA) {
      var FA = mA._subscribers, EA = mA._state;
      if (FA.length !== 0) {
        for (var KA = void 0, XA = void 0, qA = mA._result, Ut = 0; Ut < FA.length; Ut += 3)
          KA = FA[Ut], XA = FA[Ut + EA], KA ? je(EA, KA, XA, qA) : XA(qA);
        mA._subscribers.length = 0;
      }
    }
    function qe(mA, FA) {
      try {
        return mA(FA);
      } catch (EA) {
        return Bt.error = EA, Bt;
      }
    }
    function je(mA, FA, EA, KA) {
      var XA = e(EA), qA = void 0, Ut = void 0, ce = void 0, Je = void 0;
      if (XA) {
        if (qA = qe(EA, KA), qA === Bt ? (Je = !0, Ut = qA.error, qA.error = null) : ce = !0, FA === qA) {
          dt(FA, Xt());
          return;
        }
      } else
        qA = KA, ce = !0;
      FA._state !== pt || (XA && ce ? kt(FA, qA) : Je ? dt(FA, Ut) : mA === Rt ? ct(FA, qA) : mA === Ct && dt(FA, qA));
    }
    function Zr(mA, FA) {
      try {
        FA(function(KA) {
          kt(mA, KA);
        }, function(KA) {
          dt(mA, KA);
        });
      } catch (EA) {
        dt(mA, EA);
      }
    }
    var We = 0;
    function yr() {
      return We++;
    }
    function De(mA) {
      mA[Ft] = We++, mA._state = void 0, mA._result = void 0, mA._subscribers = [];
    }
    function or() {
      return new Error("Array Methods must be provided an Array");
    }
    var Xe = function() {
      function mA(FA, EA) {
        this._instanceConstructor = FA, this.promise = new FA(tt), this.promise[Ft] || De(this.promise), g(EA) ? (this.length = EA.length, this._remaining = EA.length, this._result = new Array(this.length), this.length === 0 ? ct(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(EA), this._remaining === 0 && ct(this.promise, this._result))) : dt(this.promise, or());
      }
      return mA.prototype._enumerate = function(EA) {
        for (var KA = 0; this._state === pt && KA < EA.length; KA++)
          this._eachEntry(EA[KA], KA);
      }, mA.prototype._eachEntry = function(EA, KA) {
        var XA = this._instanceConstructor, qA = XA.resolve;
        if (qA === yt) {
          var Ut = Mt(EA);
          if (Ut === ft && EA._state !== pt)
            this._settledAt(EA._state, KA, EA._result);
          else if (typeof Ut != "function")
            this._remaining--, this._result[KA] = EA;
          else if (XA === vt) {
            var ce = new XA(tt);
            se(ce, EA, Ut), this._willSettleAt(ce, KA);
          } else
            this._willSettleAt(new XA(function(Je) {
              return Je(EA);
            }), KA);
        } else
          this._willSettleAt(qA(EA), KA);
      }, mA.prototype._settledAt = function(EA, KA, XA) {
        var qA = this.promise;
        qA._state === pt && (this._remaining--, EA === Ct ? dt(qA, XA) : this._result[KA] = XA), this._remaining === 0 && ct(qA, this._result);
      }, mA.prototype._willSettleAt = function(EA, KA) {
        var XA = this;
        ir(EA, void 0, function(qA) {
          return XA._settledAt(Rt, KA, qA);
        }, function(qA) {
          return XA._settledAt(Ct, KA, qA);
        });
      }, mA;
    }();
    function Dt(mA) {
      return new Xe(this, mA).promise;
    }
    function at(mA) {
      var FA = this;
      return g(mA) ? new FA(function(EA, KA) {
        for (var XA = mA.length, qA = 0; qA < XA; qA++)
          FA.resolve(mA[qA]).then(EA, KA);
      }) : new FA(function(EA, KA) {
        return KA(new TypeError("You must pass an array to race."));
      });
    }
    function $r(mA) {
      var FA = this, EA = new FA(tt);
      return dt(EA, mA), EA;
    }
    function An() {
      throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
    }
    function tn() {
      throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
    }
    var vt = function() {
      function mA(FA) {
        this[Ft] = yr(), this._result = this._state = void 0, this._subscribers = [], tt !== FA && (typeof FA != "function" && An(), this instanceof mA ? Zr(this, FA) : tn());
      }
      return mA.prototype.catch = function(EA) {
        return this.then(null, EA);
      }, mA.prototype.finally = function(EA) {
        var KA = this, XA = KA.constructor;
        return e(EA) ? KA.then(function(qA) {
          return XA.resolve(EA()).then(function() {
            return qA;
          });
        }, function(qA) {
          return XA.resolve(EA()).then(function() {
            throw qA;
          });
        }) : KA.then(EA, EA);
      }, mA;
    }();
    vt.prototype.then = ft, vt.all = Dt, vt.race = at, vt.resolve = yt, vt.reject = $r, vt._setScheduler = Y, vt._setAsap = aA, vt._asap = J;
    function ve() {
      var mA = void 0;
      if (typeof Si < "u")
        mA = Si;
      else if (typeof self < "u")
        mA = self;
      else
        try {
          mA = Function("return this")();
        } catch {
          throw new Error("polyfill failed because global object is unavailable in this environment");
        }
      var FA = mA.Promise;
      if (FA) {
        var EA = null;
        try {
          EA = Object.prototype.toString.call(FA.resolve());
        } catch {
        }
        if (EA === "[object Promise]" && !FA.cast)
          return;
      }
      mA.Promise = vt;
    }
    return vt.polyfill = ve, vt.Promise = vt, vt;
  });
}), me = ad.Promise, GA = function t(A) {
  var r = hs(t.convert(me.resolve()), JSON.parse(JSON.stringify(t.template))), e = t.convert(me.resolve(), r);
  return e = e.setProgress(1, t, 1, [t]), e = e.set(A), e;
};
GA.prototype = Object.create(me.prototype);
GA.prototype.constructor = GA;
GA.convert = function(A, r) {
  return A.__proto__ = r || GA.prototype, A;
};
GA.template = {
  prop: {
    src: null,
    container: null,
    overlay: null,
    canvas: null,
    img: null,
    pdf: null,
    pageSize: null
  },
  progress: {
    val: 0,
    state: null,
    n: 0,
    stack: []
  },
  opt: {
    filename: "file.pdf",
    margin: [0, 0, 0, 0],
    image: { type: "jpeg", quality: 0.95 },
    enableLinks: !0,
    html2canvas: {},
    jsPDF: {}
  }
};
GA.prototype.from = function(A, r) {
  function e(o) {
    switch (ni(o)) {
      case "string":
        return "string";
      case "element":
        return o.nodeName.toLowerCase === "canvas" ? "canvas" : "element";
      default:
        return "unknown";
    }
  }
  return this.then(function() {
    switch (r = r || e(A), r) {
      case "string":
        return this.set({ src: Jr("div", { innerHTML: A }) });
      case "element":
        return this.set({ src: A });
      case "canvas":
        return this.set({ canvas: A });
      case "img":
        return this.set({ img: A });
      default:
        return this.error("Unknown source type.");
    }
  });
};
GA.prototype.to = function(A) {
  switch (A) {
    case "container":
      return this.toContainer();
    case "canvas":
      return this.toCanvas();
    case "img":
      return this.toImg();
    case "pdf":
      return this.toPdf();
    default:
      return this.error("Invalid target.");
  }
};
GA.prototype.toContainer = function() {
  var A = [function() {
    return this.prop.src || this.error("Cannot duplicate - no source HTML.");
  }, function() {
    return this.prop.pageSize || this.setPageSize();
  }];
  return this.thenList(A).then(function() {
    var e = {
      position: "fixed",
      overflow: "hidden",
      zIndex: 1e3,
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
      backgroundColor: "rgba(0,0,0,0.8)"
    }, o = {
      position: "absolute",
      width: this.prop.pageSize.inner.width + this.prop.pageSize.unit,
      left: 0,
      right: 0,
      top: 0,
      height: "auto",
      margin: "auto",
      backgroundColor: "white"
    };
    e.opacity = 0;
    var g = id(this.prop.src, this.opt.html2canvas.javascriptEnabled);
    this.prop.overlay = Jr("div", { className: "html2pdf__overlay", style: e }), this.prop.container = Jr("div", { className: "html2pdf__container", style: o }), this.prop.container.appendChild(g), this.prop.overlay.appendChild(this.prop.container), document.body.appendChild(this.prop.overlay);
  });
};
GA.prototype.toCanvas = function() {
  var A = [function() {
    return document.body.contains(this.prop.container) || this.toContainer();
  }];
  return this.thenList(A).then(function() {
    var e = hs({}, this.opt.html2canvas);
    return delete e.onrendered, ed(this.prop.container, e);
  }).then(function(e) {
    var o = this.opt.html2canvas.onrendered || function() {
    };
    o(e), this.prop.canvas = e, document.body.removeChild(this.prop.overlay);
  });
};
GA.prototype.toImg = function() {
  var A = [function() {
    return this.prop.canvas || this.toCanvas();
  }];
  return this.thenList(A).then(function() {
    var e = this.prop.canvas.toDataURL("image/" + this.opt.image.type, this.opt.image.quality);
    this.prop.img = document.createElement("img"), this.prop.img.src = e;
  });
};
GA.prototype.toPdf = function() {
  var A = [function() {
    return this.prop.canvas || this.toCanvas();
  }];
  return this.thenList(A).then(function() {
    var e = this.prop.canvas, o = this.opt, g = e.height, y = Math.floor(e.width * this.prop.pageSize.inner.ratio), D = Math.ceil(g / y), T = this.prop.pageSize.inner.height, J = document.createElement("canvas"), Y = J.getContext("2d");
    J.width = e.width, J.height = y, this.prop.pdf = this.prop.pdf || new ns(o.jsPDF);
    for (var aA = 0; aA < D; aA++) {
      aA === D - 1 && g % y !== 0 && (J.height = g % y, T = J.height * this.prop.pageSize.inner.width / J.width);
      var dA = J.width, bA = J.height;
      Y.fillStyle = "white", Y.fillRect(0, 0, dA, bA), Y.drawImage(e, 0, aA * y, dA, bA, 0, 0, dA, bA), aA && this.prop.pdf.addPage();
      var QA = J.toDataURL("image/" + o.image.type, o.image.quality);
      this.prop.pdf.addImage(QA, o.image.type, o.margin[1], o.margin[0], this.prop.pageSize.inner.width, T);
    }
  });
};
GA.prototype.output = function(A, r, e) {
  return e = e || "pdf", e.toLowerCase() === "img" || e.toLowerCase() === "image" ? this.outputImg(A, r) : this.outputPdf(A, r);
};
GA.prototype.outputPdf = function(A, r) {
  var e = [function() {
    return this.prop.pdf || this.toPdf();
  }];
  return this.thenList(e).then(function() {
    return this.prop.pdf.output(A, r);
  });
};
GA.prototype.outputImg = function(A, r) {
  var e = [function() {
    return this.prop.img || this.toImg();
  }];
  return this.thenList(e).then(function() {
    switch (A) {
      case void 0:
      case "img":
        return this.prop.img;
      case "datauristring":
      case "dataurlstring":
        return this.prop.img.src;
      case "datauri":
      case "dataurl":
        return document.location.href = this.prop.img.src;
      default:
        throw 'Image output type "' + A + '" is not supported.';
    }
  });
};
GA.prototype.save = function(A) {
  var r = [function() {
    return this.prop.pdf || this.toPdf();
  }];
  return this.thenList(r).set(A ? { filename: A } : null).then(function() {
    this.prop.pdf.save(this.opt.filename);
  });
};
GA.prototype.set = function(A) {
  if (ni(A) !== "object")
    return this;
  var r = Object.keys(A || {}).map(function(e) {
    if (e in GA.template.prop)
      return function() {
        this.prop[e] = A[e];
      };
    switch (e) {
      case "margin":
        return this.setMargin.bind(this, A.margin);
      case "jsPDF":
        return function() {
          return this.opt.jsPDF = A.jsPDF, this.setPageSize();
        };
      case "pageSize":
        return this.setPageSize.bind(this, A.pageSize);
      default:
        return function() {
          this.opt[e] = A[e];
        };
    }
  }, this);
  return this.then(function() {
    return this.thenList(r);
  });
};
GA.prototype.get = function(A, r) {
  return this.then(function() {
    var o = A in GA.template.prop ? this.prop[A] : this.opt[A];
    return r ? r(o) : o;
  });
};
GA.prototype.setMargin = function(A) {
  return this.then(function() {
    switch (ni(A)) {
      case "number":
        A = [A, A, A, A];
      case "array":
        if (A.length === 2 && (A = [A[0], A[1], A[0], A[1]]), A.length === 4)
          break;
      default:
        return this.error("Invalid margin array.");
    }
    this.opt.margin = A;
  }).then(this.setPageSize);
};
GA.prototype.setPageSize = function(A) {
  return this.then(function() {
    A = A || ns.getPageSize(this.opt.jsPDF), A.hasOwnProperty("inner") || (A.inner = {
      width: A.width - this.opt.margin[1] - this.opt.margin[3],
      height: A.height - this.opt.margin[0] - this.opt.margin[2]
    }, A.inner.px = {
      width: vo(A.inner.width, A.k),
      height: vo(A.inner.height, A.k)
    }, A.inner.ratio = A.inner.height / A.inner.width), this.prop.pageSize = A;
  });
};
GA.prototype.setProgress = function(A, r, e, o) {
  return A != null && (this.progress.val = A), r != null && (this.progress.state = r), e != null && (this.progress.n = e), o != null && (this.progress.stack = o), this.progress.ratio = this.progress.val / this.progress.state, this;
};
GA.prototype.updateProgress = function(A, r, e, o) {
  return this.setProgress(A ? this.progress.val + A : null, r || null, e ? this.progress.n + e : null, o ? this.progress.stack.concat(o) : null);
};
GA.prototype.then = function(A, r) {
  var e = this;
  return this.thenCore(A, r, function(g, y) {
    return e.updateProgress(null, null, 1, [g]), me.prototype.then.call(this, function(T) {
      return e.updateProgress(null, g), T;
    }).then(g, y).then(function(T) {
      return e.updateProgress(1), T;
    });
  });
};
GA.prototype.thenCore = function(A, r, e) {
  e = e || me.prototype.then;
  var o = this;
  A && (A = A.bind(o)), r && (r = r.bind(o));
  var g = me.toString().indexOf("[native code]") !== -1 && me.name === "Promise", y = g ? o : GA.convert(hs({}, o), me.prototype), D = e.call(y, A, r);
  return GA.convert(D, o.__proto__);
};
GA.prototype.thenExternal = function(A, r) {
  return me.prototype.then.call(this, A, r);
};
GA.prototype.thenList = function(A) {
  var r = this;
  return A.forEach(function(o) {
    r = r.thenCore(o);
  }), r;
};
GA.prototype.catch = function(t) {
  t && (t = t.bind(this));
  var A = me.prototype.catch.call(this, t);
  return GA.convert(A, this);
};
GA.prototype.catchExternal = function(A) {
  return me.prototype.catch.call(this, A);
};
GA.prototype.error = function(A) {
  return this.then(function() {
    throw new Error(A);
  });
};
GA.prototype.using = GA.prototype.set;
GA.prototype.saveAs = GA.prototype.save;
GA.prototype.export = GA.prototype.output;
GA.prototype.run = GA.prototype.then;
ns.getPageSize = function(t, A, r) {
  if ((typeof t > "u" ? "undefined" : Ua(t)) === "object") {
    var e = t;
    t = e.orientation, A = e.unit || A, r = e.format || r;
  }
  A = A || "mm", r = r || "a4", t = ("" + (t || "P")).toLowerCase();
  var o = ("" + r).toLowerCase(), g = {
    a0: [2383.94, 3370.39],
    a1: [1683.78, 2383.94],
    a2: [1190.55, 1683.78],
    a3: [841.89, 1190.55],
    a4: [595.28, 841.89],
    a5: [419.53, 595.28],
    a6: [297.64, 419.53],
    a7: [209.76, 297.64],
    a8: [147.4, 209.76],
    a9: [104.88, 147.4],
    a10: [73.7, 104.88],
    b0: [2834.65, 4008.19],
    b1: [2004.09, 2834.65],
    b2: [1417.32, 2004.09],
    b3: [1000.63, 1417.32],
    b4: [708.66, 1000.63],
    b5: [498.9, 708.66],
    b6: [354.33, 498.9],
    b7: [249.45, 354.33],
    b8: [175.75, 249.45],
    b9: [124.72, 175.75],
    b10: [87.87, 124.72],
    c0: [2599.37, 3676.54],
    c1: [1836.85, 2599.37],
    c2: [1298.27, 1836.85],
    c3: [918.43, 1298.27],
    c4: [649.13, 918.43],
    c5: [459.21, 649.13],
    c6: [323.15, 459.21],
    c7: [229.61, 323.15],
    c8: [161.57, 229.61],
    c9: [113.39, 161.57],
    c10: [79.37, 113.39],
    dl: [311.81, 623.62],
    letter: [612, 792],
    "government-letter": [576, 756],
    legal: [612, 1008],
    "junior-legal": [576, 360],
    ledger: [1224, 792],
    tabloid: [792, 1224],
    "credit-card": [153, 243]
  };
  switch (A) {
    case "pt":
      var y = 1;
      break;
    case "mm":
      var y = 72 / 25.4;
      break;
    case "cm":
      var y = 72 / 2.54;
      break;
    case "in":
      var y = 72;
      break;
    case "px":
      var y = 72 / 96;
      break;
    case "pc":
      var y = 12;
      break;
    case "em":
      var y = 12;
      break;
    case "ex":
      var y = 6;
      break;
    default:
      throw "Invalid unit: " + A;
  }
  if (g.hasOwnProperty(o))
    var D = g[o][1] / y, T = g[o][0] / y;
  else
    try {
      var D = r[1], T = r[0];
    } catch {
      throw new Error("Invalid format: " + r);
    }
  if (t === "p" || t === "portrait") {
    if (t = "p", T > D) {
      var J = T;
      T = D, D = J;
    }
  } else if (t === "l" || t === "landscape") {
    if (t = "l", D > T) {
      var J = T;
      T = D, D = J;
    }
  } else
    throw "Invalid orientation: " + t;
  var Y = { width: T, height: D, unit: A, k: y };
  return Y;
};
var cd = {
  toContainer: GA.prototype.toContainer
};
GA.template.opt.pagebreak = {
  mode: ["css", "legacy"],
  before: [],
  after: [],
  avoid: []
};
GA.prototype.toContainer = function() {
  return cd.toContainer.call(this).then(function() {
    var r = this.prop.container, e = this.prop.pageSize.inner.px.height, o = [].concat(this.opt.pagebreak.mode), g = {
      avoidAll: o.indexOf("avoid-all") !== -1,
      css: o.indexOf("css") !== -1,
      legacy: o.indexOf("legacy") !== -1
    }, y = {}, D = this;
    ["before", "after", "avoid"].forEach(function(Y) {
      var aA = g.avoidAll && Y === "avoid";
      y[Y] = aA ? [] : [].concat(D.opt.pagebreak[Y] || []), y[Y].length > 0 && (y[Y] = Array.prototype.slice.call(r.querySelectorAll(y[Y].join(", "))));
    });
    var T = r.querySelectorAll(".html2pdf__page-break");
    T = Array.prototype.slice.call(T);
    var J = r.querySelectorAll("*");
    Array.prototype.forEach.call(J, function(aA) {
      var dA = {
        before: !1,
        after: g.legacy && T.indexOf(aA) !== -1,
        avoid: g.avoidAll
      };
      if (g.css) {
        var bA = window.getComputedStyle(aA), QA = ["always", "page", "left", "right"], xA = ["avoid", "avoid-page"];
        dA = {
          before: dA.before || QA.indexOf(bA.breakBefore || bA.pageBreakBefore) !== -1,
          after: dA.after || QA.indexOf(bA.breakAfter || bA.pageBreakAfter) !== -1,
          avoid: dA.avoid || xA.indexOf(bA.breakInside || bA.pageBreakInside) !== -1
        };
      }
      Object.keys(dA).forEach(function(kA) {
        dA[kA] = dA[kA] || y[kA].indexOf(aA) !== -1;
      });
      var NA = aA.getBoundingClientRect();
      if (dA.avoid && !dA.before) {
        var _A = Math.floor(NA.top / e), HA = Math.floor(NA.bottom / e), WA = Math.abs(NA.bottom - NA.top) / e;
        HA !== _A && WA <= 1 && (dA.before = !0);
      }
      if (dA.before) {
        var VA = Jr("div", { style: {
          display: "block",
          height: e - NA.top % e + "px"
        } });
        aA.parentNode.insertBefore(VA, aA);
      }
      if (dA.after) {
        var VA = Jr("div", { style: {
          display: "block",
          height: e - NA.bottom % e + "px"
        } });
        aA.parentNode.insertBefore(VA, aA.nextSibling);
      }
    });
  });
};
var es = [], ba = {
  toContainer: GA.prototype.toContainer,
  toPdf: GA.prototype.toPdf
};
GA.prototype.toContainer = function() {
  return ba.toContainer.call(this).then(function() {
    if (this.opt.enableLinks) {
      var r = this.prop.container, e = r.querySelectorAll("a"), o = Co(r.getBoundingClientRect(), this.prop.pageSize.k);
      es = [], Array.prototype.forEach.call(e, function(g) {
        for (var y = g.getClientRects(), D = 0; D < y.length; D++) {
          var T = Co(y[D], this.prop.pageSize.k);
          T.left -= o.left, T.top -= o.top;
          var J = Math.floor(T.top / this.prop.pageSize.inner.height) + 1, Y = this.opt.margin[0] + T.top % this.prop.pageSize.inner.height, aA = this.opt.margin[1] + T.left;
          es.push({ page: J, top: Y, left: aA, clientRect: T, link: g });
        }
      }, this);
    }
  });
};
GA.prototype.toPdf = function() {
  return ba.toPdf.call(this).then(function() {
    if (this.opt.enableLinks) {
      es.forEach(function(e) {
        this.prop.pdf.setPage(e.page), this.prop.pdf.link(e.left, e.top, e.clientRect.width, e.clientRect.height, { url: e.link.href });
      }, this);
      var r = this.prop.pdf.internal.getNumberOfPages();
      this.prop.pdf.setPage(r);
    }
  });
};
var rs = function t(A, r) {
  var e = new t.Worker(r);
  return A ? e.from(A).save() : e;
};
rs.Worker = GA;
const ld = {
  props: {
    index: {
      type: Number,
      default: 1
    },
    filename: {
      type: String,
      default: "filename.pdf"
    },
    readyDownload: {
      type: Boolean,
      default: !1
    },
    options: {
      type: Object,
      default: {
        margin: 15,
        image: {
          type: "jpeg",
          quality: 1
        },
        html2canvas: { scale: 3 },
        jsPDF: {
          unit: "mm",
          format: "a4",
          orientation: "p"
        }
      }
    }
  },
  methods: {
    createPdfFromElement() {
      const t = document.getElementById(`Vue3SimpleHtml2pdf${this.index}`);
      return t ? rs().from(t).set(this.options) : alert(`Error!
not found pdf..`);
    },
    download() {
      this.createPdfFromElement().save(this.filename);
    },
    async blobPdf() {
      return (await this.createPdfFromElement().toPdf().get("pdf")).output("blob");
    },
    // async outImageSrc() {
    //   const el = document.getElementById(`Vue3SimpleHtml2pdf${this.index}`)
    //   if (!el) {
    //     return
    //   }
    //   const image = await html2pdf().from(el).set(this.options).outputImg()
    //   const outputType = 'blob'
    //   const pageSize = jsPDF.getPageSize(this.options.jsPDF)
    //   const x = -2
    //   const y = -2
    //   const width = pageSize.width
    //   const height = pageSize.height
    //   const doc = new jsPDF(this.options.jsPDF)
    //   doc.addImage(image.src, 'jpeg', x, y, width, height, '')
    //   return doc.output(outputType)
    // },
    openInNewTab() {
      const t = document.getElementById(`Vue3SimpleHtml2pdf${this.index}`);
      t && rs().from(t).set(this.options).toPdf().get("pdf").then(function(A) {
        window.open(A.output("bloburl"), "_blank");
      });
    }
  },
  render() {
    return Ha(
      "div",
      {
        class: "vue3-simple-html2pdf",
        id: `Vue3SimpleHtml2pdf${this.index}`
      },
      this.$slots.default()
    );
  }
}, hd = {
  install: function(t) {
    t.component("v-pdf", ld);
  }
};
export {
  hd as default
};
