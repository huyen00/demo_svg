(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    g = g['toLowerCase']();
    var i = function () {
        var r = this['get']('data');
        r['updateText'](r['translateObjs'][f]);
    };
    var j = function (s) {
        var t = s['data']['nextSelectedIndex'];
        if (t >= 0x0) {
            var u = s['source']['get']('items')[t];
            var v = function () {
                u['unbind']('start', v, this);
                i['call'](this);
            };
            u['bind']('start', v, this);
        } else
            i['call'](this);
    };
    var k = function (w) {
        return function (x) {
            if (w in x) {
                i['call'](this);
            }
        }['bind'](this);
    };
    var l = function (y, z) {
        return function (A, B) {
            if (y == A && z in B) {
                i['call'](this);
            }
        }['bind'](this);
    };
    var m = function (C, D, E) {
        for (var F = 0x0; F < C['length']; ++F) {
            var G = C[F];
            var H = G['get']('selectedIndex');
            if (H >= 0x0) {
                var I = D['split']('.');
                var J = G['get']('items')[H];
                if (E !== undefined && !E['call'](this, J))
                    continue;
                for (var K = 0x0; K < I['length']; ++K) {
                    if (J == undefined)
                        return '';
                    J = 'get' in J ? J['get'](I[K]) : J[I[K]];
                }
                return J;
            }
        }
        return '';
    };
    var n = function (L) {
        var M = L['get']('player');
        return M !== undefined && M['get']('viewerArea') == this['getMainViewer']();
    };
    switch (g) {
    case 'title':
    case 'subtitle':
        var p = function () {
            switch (g) {
            case 'title':
                return 'media.label';
            case 'subtitle':
                return 'media.data.subtitle';
            }
        }();
        if (p) {
            return function () {
                var N = this['_getPlayListsWithViewer'](this['getMainViewer']());
                if (!h) {
                    for (var O = 0x0; O < N['length']; ++O) {
                        N[O]['bind']('changing', j, this);
                    }
                    h = !![];
                }
                return m['call'](this, N, p, n);
            };
        }
        break;
    default:
        if (g['startsWith']('quiz.') && 'Quiz' in TDV) {
            var q = undefined;
            var p = function () {
                switch (g) {
                case 'quiz.questions.answered':
                    return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                case 'quiz.question.count':
                    return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                case 'quiz.items.found':
                    return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                case 'quiz.item.count':
                    return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                case 'quiz.score':
                    return TDV['Quiz']['PROPERTY']['SCORE'];
                case 'quiz.score.total':
                    return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                case 'quiz.time.remaining':
                    return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                case 'quiz.time.elapsed':
                    return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                case 'quiz.time.limit':
                    return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                case 'quiz.media.items.found':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                case 'quiz.media.item.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                case 'quiz.media.questions.answered':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                case 'quiz.media.question.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                case 'quiz.media.score':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                case 'quiz.media.score.total':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                case 'quiz.media.index':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                case 'quiz.media.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                case 'quiz.media.visited':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                default:
                    var P = /quiz\.([\w_]+)\.(.+)/['exec'](g);
                    if (P) {
                        q = P[0x1];
                        switch ('quiz.' + P[0x2]) {
                        case 'quiz.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                        case 'quiz.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                        case 'quiz.media.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                        case 'quiz.media.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                        case 'quiz.media.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                        case 'quiz.media.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                        case 'quiz.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                        case 'quiz.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                        case 'quiz.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                        case 'quiz.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                        case 'quiz.media.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                        case 'quiz.media.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                        }
                    }
                }
            }();
            if (p) {
                return function () {
                    var Q = this['get']('data')['quiz'];
                    if (Q) {
                        if (!h) {
                            if (q != undefined)
                                if (q == 'global') {
                                    var S = this['get']('data')['quizConfig'];
                                    var U = S['objectives'];
                                    for (var W = 0x0, Y = U['length']; W < Y; ++W) {
                                        Q['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], l['call'](this, U[W]['id'], p), this);
                                    }
                                } else {
                                    Q['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], l['call'](this, q, p), this);
                                }
                            else
                                Q['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], k['call'](this, p), this);
                            h = !![];
                        }
                        try {
                            var Z = 0x0;
                            if (q != undefined) {
                                if (q == 'global') {
                                    var S = this['get']('data')['quizConfig'];
                                    var U = S['objectives'];
                                    for (var W = 0x0, Y = U['length']; W < Y; ++W) {
                                        Z += Q['getObjective'](U[W]['id'], p);
                                    }
                                } else {
                                    Z = Q['getObjective'](q, p);
                                }
                            } else {
                                Z = Q['get'](p);
                                if (p == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                    Z += 0x1;
                            }
                            return Z;
                        } catch (a0) {
                            return undefined;
                        }
                    }
                };
            }
        }
        break;
    }
    return '';
}
function createQuizConfig(player, a1) {
    var a2 = {};
    a2['player'] = player;
    a2['playList'] = a1;
    function a3(a6) {
        for (var a7 = 0x0; a7 < a6['length']; ++a7) {
            var a8 = a6[a7];
            if ('id' in a8)
                player[a8['id']] = a8;
        }
    }
    if (a2['questions']) {
        a3(a2['questions']);
        for (var a4 = 0x0; a4 < a2['questions']['length']; ++a4) {
            var a5 = a2['questions'][a4];
            a3(a5['options']);
        }
    }
    if (a2['objectives']) {
        a3(a2['objectives']);
    }
    if (a2['califications']) {
        a3(a2['califications']);
    }
    if (a2['score']) {
        player[a2['score']['id']] = a2['score'];
    }
    if (a2['question']) {
        player[a2['question']['id']] = a2['question'];
    }
    if (a2['timeout']) {
        player[a2['timeout']['id']] = a2['timeout'];
    }
    player['get']('data')['translateObjs'] = translateObjs;
    return a2;
}
var script = {"minHeight":20,"scrollBarOpacity":0.5,"definitions": [{"subtitlesBackgroundColor":"#000000","subtitlesOpacity":1,"subtitlesShadow":false,"borderRadius":0,"progressBarBorderColor":"#000000","borderSize":0,"toolTipShadowSpread":0,"playbackBarHeadBorderColor":"#000000","subtitlesBorderSize":0,"progressBackgroundColorDirection":"vertical","playbackBarHeadShadow":true,"progressBarBackgroundColorRatios":[0],"paddingLeft":0,"vrPointerSelectionColor":"#FF6600","surfaceReticleColor":"#FFFFFF","subtitlesFontColor":"#FFFFFF","id":"MainViewer_mobile","playbackBarBorderColor":"#FFFFFF","subtitlesTextShadowOpacity":1,"surfaceReticleOpacity":0.6,"subtitlesVerticalAlign":"bottom","playbackBarBackgroundColorDirection":"vertical","data":{"name":"Main Viewer"},"paddingRight":0,"progressBarBackgroundColor":["#3399FF"],"width":"100%","progressBorderColor":"#000000","displayTooltipInTouchScreens":true,"playbackBarBottom":5,"subtitlesFontWeight":"normal","progressBackgroundColor":["#FFFFFF"],"playbackBarBorderRadius":0,"surfaceReticleSelectionOpacity":1,"toolTipFontSize":"1.11vmin","surfaceReticleSelectionColor":"#FFFFFF","progressBorderRadius":0,"toolTipHorizontalAlign":"center","progressBarOpacity":1,"subtitlesPaddingRight":5,"progressLeft":0,"progressBottom":0,"subtitlesPaddingLeft":5,"toolTipBorderColor":"#767676","playbackBarHeadShadowVerticalLength":0,"subtitlesBottom":50,"height":"100%","playbackBarProgressBorderColor":"#000000","playbackBarHeadShadowBlurRadius":1.5,"translationTransitionDuration":1000,"transitionMode":"blending","vrPointerSelectionTime":2000,"toolTipBorderSize":1,"playbackBarRight":0,"playbackBarBorderSize":0,"toolTipPaddingRight":3,"playbackBarProgressBorderRadius":0,"playbackBarHeadBackgroundColorRatios":[0,1],"minHeight":25,"progressBarBorderSize":0,"class":"ViewerArea","progressBorderSize":0,"minWidth":50,"toolTipFontFamily":"Arial","subtitlesTextShadowHorizontalLength":1,"playbackBarProgressBackgroundColorDirection":"vertical","playbackBarHeadOpacity":1,"progressBarBorderRadius":0,"toolTipPaddingTop":2,"playbackBarProgressBackgroundColor":["#3399FF"],"toolTipShadowOpacity":1,"toolTipTextShadowBlurRadius":1,"playbackBarBackgroundColor":["#FFFFFF"],"subtitlesTextShadowColor":"#000000","toolTipBackgroundColor":"#F6F6F6","toolTipFontWeight":"normal","subtitlesTop":0,"progressBackgroundOpacity":1,"paddingTop":0,"toolTipShadowVerticalLength":0,"toolTipTextShadowColor":"#000000","subtitlesBackgroundOpacity":0.2,"toolTipDisplayTime":600,"toolTipFontStyle":"normal","subtitlesTextShadowVerticalLength":1,"paddingBottom":0,"subtitlesFontSize":"3vmin","subtitlesBorderColor":"#FFFFFF","subtitlesPaddingBottom":5,"toolTipShadowColor":"#333138","top":0,"displayTooltipInSurfaceSelection":true,"playbackBarHeadShadowOpacity":0.7,"subtitlesTextShadowBlurRadius":0,"toolTipFontColor":"#606060","subtitlesTextDecoration":"none","toolTipTextShadowOpacity":0,"playbackBarHeight":10,"firstTransitionDuration":0,"subtitlesFontFamily":"Arial","toolTipShadowBlurRadius":1,"subtitlesEnabled":true,"transitionDuration":500,"toolTipPaddingLeft":3,"vrPointerColor":"#FFFFFF","playbackBarHeadBorderSize":0,"playbackBarHeadBorderRadius":0,"playbackBarLeft":0,"toolTipOpacity":1,"doubleClickAction":"toggle_fullscreen","playbackBarHeadBackgroundColorDirection":"vertical","playbackBarBackgroundOpacity":1,"progressHeight":10,"subtitlesPaddingTop":5,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarOpacity":1,"playbackBarProgressOpacity":1,"propagateClick":false,"playbackBarHeadWidth":6,"subtitlesGap":0,"toolTipPaddingBottom":2,"left":0,"toolTipBorderRadius":1,"playbackBarHeadHeight":15,"progressBackgroundColorRatios":[0],"progressRight":0,"subtitlesHorizontalAlign":"center","shadow":false,"playbackBarProgressBorderSize":0,"playbackBarHeadShadowColor":"#000000","playbackBarProgressBackgroundColorRatios":[0],"progressBarBackgroundColorDirection":"vertical","playbackBarHeadShadowHorizontalLength":0,"toolTipShadowHorizontalLength":0,"progressOpacity":1},{"class":"PlayList","items":[{"player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_camera","media":"this.panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"hoverFactor":0,"initialPosition":{"yaw":16.87,"class":"PanoramaCameraPosition","pitch":-11.68},"initialSequence":"this.sequence_3E17C743_23E4_3203_4193_965D6E263194","automaticZoomSpeed":10,"id":"panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_camera","class":"PanoramaCamera"},{"label":trans('panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF.label'),"frames":[{"thumbnailUrl":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":21504,"url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","height":3584,"class":"TiledImageResourceLevel","colCount":42,"rowCount":7},{"width":12288,"url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","height":2048,"class":"TiledImageResourceLevel","colCount":24,"rowCount":4},{"width":6144,"url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_0/{face}/2/{row}_{column}.jpg","tags":"ondemand","height":1024,"class":"TiledImageResourceLevel","colCount":12,"rowCount":2},{"width":3072,"url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_0/{face}/3/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"class":"TiledImageResourceLevel","colCount":6,"rowCount":1},{"width":12288,"url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_0/{face}/vr2gen/0.jpg","tags":"mobilevr2gen","height":2048,"class":"TiledImageResourceLevel","colCount":6,"rowCount":1}],"class":"ImageResource"}}],"class":"Panorama","partial":false,"hfovMax":130,"thumbnailUrl":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_t.jpg","hfov":360,"vfov":180,"data":{"label":"Qu\u1ea3ng Ninh"},"overlays":["this.overlay_3FB9D1A7_23E4_6E02_4199_0DFD915EF8D0","this.overlay_24503D13_2BE9_567D_41BE_AEE6E9382370","this.overlay_3AED5172_2BEE_F13A_41B4_F914863A27AC","this.overlay_3A7ED59F_2BEF_D14D_41C0_F59E55CAED8A","this.overlay_2537263B_2BEE_B3C0_41B8_88FC7A50185C","this.overlay_2432D8C8_2BEB_51B4_41C5_06FA70EA003A","this.overlay_3B905078_2BEA_D1DD_41B7_B30F996DA0A1","this.overlay_25ED5127_2BE9_B3C6_41C0_98789A316D7E","this.overlay_251EE26B_2BE6_D601_419B_C654EE7D6D4E","this.overlay_24A7F98B_2BE7_7201_41B5_3158BB54675E","this.overlay_24893DF3_2BE7_5201_41A5_DA1D54F52023","this.overlay_2494D68B_2BE7_BE02_41C0_6BD984847121","this.overlay_2415BF54_2BE7_AE07_41A2_3EC654FD7845","this.overlay_3BE9C7AA_2BE7_5E03_41BB_81B3EE7A6986","this.overlay_3BFE6F0B_2BE7_6E02_41B4_04B8C0736AEF","this.overlay_3BF19684_2BE7_7E06_41B7_FDD66BC9D68F","this.overlay_3BC56EFA_2BE7_6E03_4142_19042935D218","this.overlay_3BD847E5_2BE7_5E06_41A6_1F859125D5E6","this.overlay_3914C828_2C69_7237_41B3_FB42EBF08441"],"pitch":0,"id":"panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF"},{"displayPlaybackBar":true,"viewerArea":"this.MainViewer_mobile","id":"MainViewer_mobilePanoramaPlayer","class":"PanoramaPlayer","mouseControlMode":"drag_rotation","zoomEnabled":true,"gyroscopeVerticalDraggingEnabled":true,"aaEnabled":true,"touchControlMode":"drag_rotation","surfaceSelectionEnabled":false,"arrowKeysAction":"translate"},{"restartMovementOnUserInteraction":false,"movements":[{"easing":"cubic_in","yawSpeed":3.72,"class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"easing":"linear","yawSpeed":3.72,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"easing":"cubic_out","yawSpeed":3.72,"class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"class":"PanoramaCameraSequence","id":"sequence_3E17C743_23E4_3203_4193_965D6E263194"},{"id":"overlay_3FB9D1A7_23E4_6E02_4199_0DFD915EF8D0","useHandCursor":true,"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"enabled":false,"areas":["this.HotspotPanoramaOverlayArea_3F00E1C2_23E4_6E02_4174_E34D04B46EC5"],"data":{"label":"Polygon1"},"items":[{"image":{"class":"ImageResource","levels":[{"height":483,"width":444,"class":"ImageResourceLevel","url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_HS_nky7y9nm.png"}]},"distance":50,"yaw":7.48,"class":"HotspotPanoramaOverlayImage","hfov":15.89,"vfov":17.29,"pitch":-20.77,"data":{"label":"Polygon1"}}],"maps":[]},{"id":"overlay_24503D13_2BE9_567D_41BE_AEE6E9382370","useHandCursor":true,"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"enabled":false,"areas":["this.HotspotPanoramaOverlayArea_243D8D4D_2BE9_56E5_41BC_5C423ECE4CB7"],"data":{"label":"Polygon2"},"items":[{"image":{"class":"ImageResource","levels":[{"height":253,"width":765,"class":"ImageResourceLevel","url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_HS_d3b1idh5.png"}]},"distance":50,"yaw":-15.32,"class":"HotspotPanoramaOverlayImage","hfov":27.06,"vfov":9.11,"pitch":-26.01,"data":{"label":"Polygon2"}}],"maps":[]},{"id":"overlay_3AED5172_2BEE_F13A_41B4_F914863A27AC","useHandCursor":true,"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"enabled":false,"areas":["this.HotspotPanoramaOverlayArea_3AED1173_2BEE_F13A_41C3_F57C6F85618E"],"data":{"label":"Polygon3"},"items":[{"image":{"class":"ImageResource","levels":[{"height":127,"width":221,"class":"ImageResourceLevel","url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_HS_e99rvhwc.png"}]},"distance":50,"yaw":18.75,"class":"HotspotPanoramaOverlayImage","hfov":7.97,"vfov":4.57,"pitch":-24.19,"data":{"label":"Polygon3"}}],"maps":[]},{"id":"overlay_3A7ED59F_2BEF_D14D_41C0_F59E55CAED8A","useHandCursor":true,"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"enabled":false,"areas":["this.HotspotPanoramaOverlayArea_3A7EB5A0_2BEF_D173_4172_71DF0AAA65C4"],"data":{"label":"Polygon33"},"items":[{"image":{"class":"ImageResource","levels":[{"height":223,"width":552,"class":"ImageResourceLevel","url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_HS_c8tmq5v1.png"}]},"distance":50,"yaw":35.89,"class":"HotspotPanoramaOverlayImage","hfov":19.7,"vfov":8.02,"pitch":-26.11,"data":{"label":"Polygon33"}}],"maps":[]},{"id":"overlay_2537263B_2BEE_B3C0_41B8_88FC7A50185C","useHandCursor":true,"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"enabled":false,"areas":["this.HotspotPanoramaOverlayArea_2535363D_2BEE_B3C0_419D_72551C8CFA28"],"data":{"label":"Polygon5"},"items":[{"image":{"class":"ImageResource","levels":[{"height":46,"width":260,"class":"ImageResourceLevel","url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_HS_g8zoqstl.png"}]},"distance":50,"yaw":-21.49,"class":"HotspotPanoramaOverlayImage","hfov":9.34,"vfov":1.66,"pitch":-8.59,"data":{"label":"Polygon5"}}],"maps":[]},{"id":"overlay_2432D8C8_2BEB_51B4_41C5_06FA70EA003A","useHandCursor":true,"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"enabled":false,"areas":["this.HotspotPanoramaOverlayArea_240D08CA_2BEB_51B4_41C2_208A27339A1C"],"data":{"label":"Polygon55"},"items":[{"image":{"class":"ImageResource","levels":[{"height":48,"width":166,"class":"ImageResourceLevel","url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_HS_t2exectz.png"}]},"distance":50,"yaw":-14.53,"class":"HotspotPanoramaOverlayImage","hfov":5.99,"vfov":1.73,"pitch":-7.13,"data":{"label":"Polygon55"}}],"maps":[]},{"id":"overlay_3B905078_2BEA_D1DD_41B7_B30F996DA0A1","useHandCursor":true,"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"enabled":false,"areas":["this.HotspotPanoramaOverlayArea_3B90207B_2BEA_D1D3_41C4_91B8900F3529"],"data":{"label":"Polygon6"},"items":[{"image":{"class":"ImageResource","levels":[{"height":120,"width":533,"class":"ImageResourceLevel","url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_HS_cwprmpok.png"}]},"distance":50,"yaw":-10.6,"class":"HotspotPanoramaOverlayImage","hfov":19.02,"vfov":4.33,"pitch":-10.14,"data":{"label":"Polygon6"}}],"maps":[]},{"id":"overlay_25ED5127_2BE9_B3C6_41C0_98789A316D7E","useHandCursor":true,"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"enabled":false,"areas":["this.HotspotPanoramaOverlayArea_25FC312B_2BE9_B3CE_41C4_FC0EA0F5BDC7"],"data":{"label":"Polygon7"},"items":[{"image":{"class":"ImageResource","levels":[{"height":69,"width":282,"class":"ImageResourceLevel","url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_HS_hf4i010z.png"}]},"distance":50,"yaw":-17.48,"class":"HotspotPanoramaOverlayImage","hfov":10.13,"vfov":2.49,"pitch":-7.95,"data":{"label":"Polygon7"}}],"maps":[]},{"id":"overlay_251EE26B_2BE6_D601_419B_C654EE7D6D4E","useHandCursor":true,"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"enabled":false,"areas":["this.HotspotPanoramaOverlayArea_251ED26D_2BE6_D601_4192_6BA917174EBC"],"data":{"label":"Polygon4"},"items":[{"image":{"class":"ImageResource","levels":[{"height":90,"width":364,"class":"ImageResourceLevel","url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_HS_qgjov3i3.png"}]},"distance":50,"yaw":61.05,"class":"HotspotPanoramaOverlayImage","hfov":13.05,"vfov":3.27,"pitch":-8.66,"data":{"label":"Polygon4"}}],"maps":[]},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","rollOverDisplay":true,"id":"overlay_24A7F98B_2BE7_7201_41B5_3158BB54675E","areas":["this.HotspotPanoramaOverlayArea_24A6298D_2BE7_7201_4150_705A819411DA"],"data":{"label":"Polygon1_1"},"enabledInCardboard":true,"items":[{"image":{"class":"ImageResource","levels":[{"height":483,"width":444,"class":"ImageResourceLevel","url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_HS_odpe8ppc.png"}]},"distance":50,"yaw":7.48,"class":"HotspotPanoramaOverlayImage","hfov":15.89,"vfov":17.29,"pitch":-20.77,"data":{"label":"Polygon1_1"}}],"maps":[]},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","rollOverDisplay":true,"id":"overlay_24893DF3_2BE7_5201_41A5_DA1D54F52023","areas":["this.HotspotPanoramaOverlayArea_24890DF3_2BE7_5201_41B4_8FA948B118DD"],"data":{"label":"Polygon2_1"},"enabledInCardboard":true,"items":[{"image":{"class":"ImageResource","levels":[{"height":253,"width":765,"class":"ImageResourceLevel","url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_HS_on2jwyuc.png"}]},"distance":50,"yaw":-15.32,"class":"HotspotPanoramaOverlayImage","hfov":27.06,"vfov":9.11,"pitch":-26.01,"data":{"label":"Polygon2_1"}}],"maps":[]},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","rollOverDisplay":true,"id":"overlay_2494D68B_2BE7_BE02_41C0_6BD984847121","areas":["this.HotspotPanoramaOverlayArea_2493368B_2BE7_BE02_41AE_EDA2FB8C84D9"],"data":{"label":"Polygon3_1"},"enabledInCardboard":true,"items":[{"image":{"class":"ImageResource","levels":[{"height":127,"width":221,"class":"ImageResourceLevel","url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_HS_xdx4u06c.png"}]},"distance":50,"yaw":18.75,"class":"HotspotPanoramaOverlayImage","hfov":7.97,"vfov":4.57,"pitch":-24.19,"data":{"label":"Polygon3_1"}}],"maps":[]},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","rollOverDisplay":true,"id":"overlay_2415BF54_2BE7_AE07_41A2_3EC654FD7845","areas":["this.HotspotPanoramaOverlayArea_2415AF54_2BE7_AE07_419F_36F8BC971FAA"],"data":{"label":"Polygon33_1"},"enabledInCardboard":true,"items":[{"image":{"class":"ImageResource","levels":[{"height":223,"width":552,"class":"ImageResourceLevel","url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_HS_3x8xm1gv.png"}]},"distance":50,"yaw":35.89,"class":"HotspotPanoramaOverlayImage","hfov":19.7,"vfov":8.02,"pitch":-26.11,"data":{"label":"Polygon33_1"}}],"maps":[]},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","rollOverDisplay":true,"id":"overlay_3BE9C7AA_2BE7_5E03_41BB_81B3EE7A6986","areas":["this.HotspotPanoramaOverlayArea_3BE9D7AA_2BE7_5E03_41C2_D577024FF22A"],"data":{"label":"Polygon5_1"},"enabledInCardboard":true,"items":[{"image":{"class":"ImageResource","levels":[{"height":46,"width":260,"class":"ImageResourceLevel","url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_HS_hcwpkazk.png"}]},"distance":50,"yaw":-21.49,"class":"HotspotPanoramaOverlayImage","hfov":9.34,"vfov":1.66,"pitch":-8.59,"data":{"label":"Polygon5_1"}}],"maps":[]},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","rollOverDisplay":true,"id":"overlay_3BFE6F0B_2BE7_6E02_41B4_04B8C0736AEF","areas":["this.HotspotPanoramaOverlayArea_3BFD8F0C_2BE7_6E06_41C2_D9A9E699E6C0"],"data":{"label":"Polygon55_1"},"enabledInCardboard":true,"items":[{"image":{"class":"ImageResource","levels":[{"height":48,"width":166,"class":"ImageResourceLevel","url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_HS_uee7lkyk.png"}]},"distance":50,"yaw":-14.53,"class":"HotspotPanoramaOverlayImage","hfov":5.99,"vfov":1.73,"pitch":-7.13,"data":{"label":"Polygon55_1"}}],"maps":[]},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","rollOverDisplay":true,"id":"overlay_3BF19684_2BE7_7E06_41B7_FDD66BC9D68F","areas":["this.HotspotPanoramaOverlayArea_3BF18684_2BE7_7E06_41AA_2A91B8CEA053"],"data":{"label":"Polygon6_1"},"enabledInCardboard":true,"items":[{"image":{"class":"ImageResource","levels":[{"height":120,"width":533,"class":"ImageResourceLevel","url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_HS_izflzozu.png"}]},"distance":50,"yaw":-10.6,"class":"HotspotPanoramaOverlayImage","hfov":19.02,"vfov":4.33,"pitch":-10.14,"data":{"label":"Polygon6_1"}}],"maps":[]},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","rollOverDisplay":true,"id":"overlay_3BC56EFA_2BE7_6E03_4142_19042935D218","areas":["this.HotspotPanoramaOverlayArea_3BC49EFA_2BE7_6E03_4198_2074E1DAFFA9"],"data":{"label":"Polygon7_1"},"enabledInCardboard":true,"items":[{"image":{"class":"ImageResource","levels":[{"height":69,"width":282,"class":"ImageResourceLevel","url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_HS_ajgg4waj.png"}]},"distance":50,"yaw":-17.48,"class":"HotspotPanoramaOverlayImage","hfov":10.13,"vfov":2.49,"pitch":-7.95,"data":{"label":"Polygon7_1"}}],"maps":[]},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","rollOverDisplay":true,"id":"overlay_3BD847E5_2BE7_5E06_41A6_1F859125D5E6","areas":["this.HotspotPanoramaOverlayArea_3BD7A7E5_2BE7_5E06_41C3_15EDFA0BB4C7"],"data":{"label":"Polygon4_1"},"enabledInCardboard":true,"items":[{"image":{"class":"ImageResource","levels":[{"height":90,"width":364,"class":"ImageResourceLevel","url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_HS_is2j797h.png"}]},"distance":50,"yaw":61.05,"class":"HotspotPanoramaOverlayImage","hfov":13.05,"vfov":3.27,"pitch":-8.66,"data":{"label":"Polygon4_1"}}],"maps":[]},{"areas":["this.HotspotPanoramaOverlayArea_3930F974_2C69_721F_4196_475B6F67E5F0"],"items":[{"image":"this.res_3A87FCA3_2C6F_D239_41BC_147D697A43E6","distance":50,"rotationX":16.3,"yaw":60.46,"class":"HotspotPanoramaOverlayImage","hfov":7.65,"vfov":9.87,"data":{"label":"sunOnsenVillage"},"verticalAlign":"middle","horizontalAlign":"center","pitch":-3.37,"scaleMode":"fit_inside"}],"data":{"label":"sunOnsenVillage"},"useHandCursor":true,"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","maps":[],"id":"overlay_3914C828_2C69_7237_41B3_FB42EBF08441"},{"mapColor":"image","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_3F00E1C2_23E4_6E02_4174_E34D04B46EC5"},{"mapColor":"image","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_243D8D4D_2BE9_56E5_41BC_5C423ECE4CB7"},{"mapColor":"image","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_3AED1173_2BEE_F13A_41C3_F57C6F85618E"},{"mapColor":"image","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_3A7EB5A0_2BEF_D173_4172_71DF0AAA65C4"},{"mapColor":"image","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_2535363D_2BEE_B3C0_419D_72551C8CFA28"},{"mapColor":"image","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_240D08CA_2BEB_51B4_41C2_208A27339A1C"},{"mapColor":"image","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_3B90207B_2BEA_D1D3_41C4_91B8900F3529"},{"mapColor":"image","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_25FC312B_2BE9_B3CE_41C4_FC0EA0F5BDC7"},{"mapColor":"image","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_251ED26D_2BE6_D601_4192_6BA917174EBC"},{"mapColor":"image","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_24A6298D_2BE7_7201_4150_705A819411DA"},{"mapColor":"image","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_24890DF3_2BE7_5201_41B4_8FA948B118DD"},{"mapColor":"image","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_2493368B_2BE7_BE02_41AE_EDA2FB8C84D9"},{"mapColor":"image","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_2415AF54_2BE7_AE07_419F_36F8BC971FAA"},{"mapColor":"image","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_3BE9D7AA_2BE7_5E03_41C2_D577024FF22A"},{"mapColor":"image","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_3BFD8F0C_2BE7_6E06_41C2_D9A9E699E6C0"},{"mapColor":"image","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_3BF18684_2BE7_7E06_41AA_2A91B8CEA053"},{"mapColor":"image","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_3BC49EFA_2BE7_6E03_4198_2074E1DAFFA9"},{"mapColor":"image","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_3BD7A7E5_2BE7_5E06_41C3_15EDFA0BB4C7"},{"mapColor":"any","rollOver":"this.setOverlaysVisibility([this.overlay_251EE26B_2BE6_D601_419B_C654EE7D6D4E], true, 0)","class":"HotspotPanoramaOverlayArea","rollOut":"this.setOverlaysVisibility([this.overlay_251EE26B_2BE6_D601_419B_C654EE7D6D4E], false, 0)","id":"HotspotPanoramaOverlayArea_3930F974_2C69_721F_4196_475B6F67E5F0"},{"levels":[{"height":388,"width":300,"class":"ImageResourceLevel","url":"media/res_3A87FCA3_2C6F_D239_41BC_147D697A43E6_0.png"}],"class":"ImageResource","id":"res_3A87FCA3_2C6F_D239_41BC_147D697A43E6"}],"gap":10,"mediaActivationMode":"window","backgroundColorRatios":[0],"width":"100%","paddingLeft":0,"paddingTop":0,"desktopMipmappingEnabled":false,"id":"rootPlayer","mouseWheelEnabled":true,"borderSize":0,"paddingBottom":0,"paddingRight":0,"scrollBarMargin":2,"scrollBarWidth":10,"backgroundOpacity":1,"horizontalAlign":"left","children":["this.MainViewer_mobile"],"borderRadius":0,"downloadEnabled":false,"verticalAlign":"top","toolTipHorizontalAlign":"center","contentOpaque":false,"scrollBarVisible":"rollOver","vrPolyfillScale":0.75,"scripts":{"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"quizStart":TDV.Tour.Script.quizStart,"translate":TDV.Tour.Script.translate,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"downloadFile":TDV.Tour.Script.downloadFile,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getKey":TDV.Tour.Script.getKey,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"unregisterKey":TDV.Tour.Script.unregisterKey,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getMainViewer":TDV.Tour.Script.getMainViewer,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"historyGoForward":TDV.Tour.Script.historyGoForward,"openLink":TDV.Tour.Script.openLink,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"init":TDV.Tour.Script.init,"clone":TDV.Tour.Script.clone,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"textToSpeech":TDV.Tour.Script.textToSpeech,"getComponentByName":TDV.Tour.Script.getComponentByName,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"historyGoBack":TDV.Tour.Script.historyGoBack,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"registerKey":TDV.Tour.Script.registerKey,"playAudioList":TDV.Tour.Script.playAudioList,"showWindow":TDV.Tour.Script.showWindow,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"cloneCamera":TDV.Tour.Script.cloneCamera,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"initAnalytics":TDV.Tour.Script.initAnalytics,"resumePlayers":TDV.Tour.Script.resumePlayers,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"shareSocial":TDV.Tour.Script.shareSocial,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"mixObject":TDV.Tour.Script.mixObject,"setValue":TDV.Tour.Script.setValue,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setMapLocation":TDV.Tour.Script.setMapLocation,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getPixels":TDV.Tour.Script.getPixels,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"executeJS":TDV.Tour.Script.executeJS,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setLocale":TDV.Tour.Script.setLocale,"showPopupImage":TDV.Tour.Script.showPopupImage,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"isPanorama":TDV.Tour.Script.isPanorama,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getOverlays":TDV.Tour.Script.getOverlays,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"quizShowScore":TDV.Tour.Script.quizShowScore,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"existsKey":TDV.Tour.Script.existsKey,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getMediaByName":TDV.Tour.Script.getMediaByName,"initQuiz":TDV.Tour.Script.initQuiz,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"quizFinish":TDV.Tour.Script.quizFinish},"height":"100%","backgroundColor":["#FFFFFF"],"layout":"absolute","backgroundColorDirection":"vertical","mobileMipmappingEnabled":false,"defaultVRPointer":"laser","backgroundPreloadEnabled":true,"propagateClick":false,"start":"this.init()","class":"Player","scrollBarColor":"#000000","minWidth":20,"shadow":false,"overflow":"hidden","data":{"name":"Player736","locales":{"en":"locale/en.txt"},"textToSpeechConfig":{"volume":1,"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"pitch":1,"speechOnTooltip":false,"rate":1},"defaultLocale":"en"}};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=http://localhost:9000/script_device_v2022.0.32.js.map
})();
//Generated with v2022.0.32, Fri Apr 15 2022