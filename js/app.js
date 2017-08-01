define("assets/page/m/birth/inquiry/inquiry", ["assets/scripts/util/popup", "assets/scripts/util/datePicker"],
    function(t, i) {
        var data = {};
        var a, r = {};
        r.token = data.token,
            r.src = data.src,
            r.avatar = "",
            function(t) {
                var i, n, e, s;
                t && t.birth_y && "0000" != t.birth_y ? (i = t.birth_y, e = t.birth_d, n = t.birth_m, s = t.birth_is_lunar) : (i = "3333", e = "1", n = "1", s = "0"),
                    $("#birth").mobiscroll().datePicker({
                        theme: "mobile",
                        mode: "scroller",
                        display: "bottom",
                        lang: "zh",
                        isSolar: "0" == s ? !0 : !1,
                        ignore: "1112" == i ? !0 : !1,
                        showSolarLunar: !1,
                        enableIgnore: !0,
                        onSelect: function(t, i) {

                            a = i.getArrayVal(),
                                r.birth_y = a[0],
                                r.birth_m = a[1],
                                r.birth_d = a[2],
                            i.settings.ignore && (r.birth_y = "1112"),
                                r.birth_is_lunar = i.settings.isSolar ? "0": "1"
                            $(this).attr("data-date",a[0]+"-"+a[1]+"-"+a[2]);
                        }
                    }),
                    "3333" != i ? ($.each(["birth_y", "birth_m", "birth_d", "birth_is_lunar"],
                        function(i, a) {
                            r[a] = t[a]
                        }), $("#birth").mobiscroll("setArrayVal", [i, n, e], !0, !0, !1, 0)) : $("#birth").mobiscroll("setArrayVal", [1990, 1, 1], !1, !1, !1, 0)
            } (data.birth)
    });