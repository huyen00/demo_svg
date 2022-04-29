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
var script = {"start":"this.init()","borderSize":0,"data":{"textToSpeechConfig":{"rate":1,"volume":1,"speechOnTooltip":false,"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"pitch":1,"stopBackgroundAudio":false},"name":"Player736","locales":{"en":"locale/en.txt"},"defaultLocale":"en"},"scrollBarColor":"#000000","gap":10,"propagateClick":false,"borderRadius":0,"width":"100%","paddingTop":0,"id":"rootPlayer","paddingLeft":0,"paddingBottom":0,"scrollBarVisible":"rollOver","paddingRight":0,"horizontalAlign":"left","desktopMipmappingEnabled":false,"downloadEnabled":false,"mouseWheelEnabled":true,"overflow":"hidden","children":["this.MainViewer_mobile"],"verticalAlign":"top","backgroundOpacity":1,"scripts":{"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"translate":TDV.Tour.Script.translate,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"existsKey":TDV.Tour.Script.existsKey,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getOverlays":TDV.Tour.Script.getOverlays,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setMapLocation":TDV.Tour.Script.setMapLocation,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getKey":TDV.Tour.Script.getKey,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"openLink":TDV.Tour.Script.openLink,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"init":TDV.Tour.Script.init,"clone":TDV.Tour.Script.clone,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"historyGoBack":TDV.Tour.Script.historyGoBack,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getMainViewer":TDV.Tour.Script.getMainViewer,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"historyGoForward":TDV.Tour.Script.historyGoForward,"mixObject":TDV.Tour.Script.mixObject,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"initAnalytics":TDV.Tour.Script.initAnalytics,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"initQuiz":TDV.Tour.Script.initQuiz,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"textToSpeech":TDV.Tour.Script.textToSpeech,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"isPanorama":TDV.Tour.Script.isPanorama,"cloneCamera":TDV.Tour.Script.cloneCamera,"cloneBindings":TDV.Tour.Script.cloneBindings,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"shareSocial":TDV.Tour.Script.shareSocial,"getComponentByName":TDV.Tour.Script.getComponentByName,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"showPopupImage":TDV.Tour.Script.showPopupImage,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"downloadFile":TDV.Tour.Script.downloadFile,"executeJS":TDV.Tour.Script.executeJS,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"showWindow":TDV.Tour.Script.showWindow,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"quizShowScore":TDV.Tour.Script.quizShowScore,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getPixels":TDV.Tour.Script.getPixels,"setValue":TDV.Tour.Script.setValue,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setLocale":TDV.Tour.Script.setLocale,"playAudioList":TDV.Tour.Script.playAudioList,"quizStart":TDV.Tour.Script.quizStart,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getMediaByName":TDV.Tour.Script.getMediaByName,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"quizFinish":TDV.Tour.Script.quizFinish,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"registerKey":TDV.Tour.Script.registerKey,"resumePlayers":TDV.Tour.Script.resumePlayers,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"unregisterKey":TDV.Tour.Script.unregisterKey},"backgroundPreloadEnabled":true,"height":"100%","scrollBarMargin":2,"backgroundColor":["#FFFFFF"],"mediaActivationMode":"window","layout":"absolute","definitions": [{"aaEnabled":true,"viewerArea":"this.MainViewer_mobile","gyroscopeVerticalDraggingEnabled":true,"class":"PanoramaPlayer","mouseControlMode":"drag_rotation","arrowKeysAction":"translate","surfaceSelectionEnabled":false,"displayPlaybackBar":true,"touchControlMode":"drag_rotation","zoomEnabled":true,"id":"MainViewer_mobilePanoramaPlayer"},{"initialSequence":"this.sequence_3E17C743_23E4_3203_4193_965D6E263194","automaticZoomSpeed":10,"hoverFactor":0,"initialPosition":{"yaw":16.87,"class":"PanoramaCameraPosition","pitch":-11.68},"class":"PanoramaCamera","id":"panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_camera"},{"class":"PlayList","items":[{"player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_camera","media":"this.panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"subtitlesGap":0,"toolTipShadowOpacity":1,"borderSize":0,"shadow":false,"progressRight":0,"borderRadius":0,"progressOpacity":1,"playbackBarHeadShadowBlurRadius":1.5,"subtitlesVerticalAlign":"bottom","progressBarBackgroundColorDirection":"vertical","toolTipShadowSpread":0,"progressBarBorderColor":"#000000","toolTipFontColor":"#606060","playbackBarRight":0,"id":"MainViewer_mobile","toolTipTextShadowColor":"#000000","subtitlesHorizontalAlign":"center","paddingLeft":0,"playbackBarProgressBorderRadius":0,"progressBackgroundColorDirection":"vertical","progressBarBackgroundColorRatios":[0],"paddingRight":0,"playbackBarHeadShadow":true,"playbackBarProgressBorderColor":"#000000","subtitlesBorderSize":0,"playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesTextShadowOpacity":1,"progressBorderColor":"#000000","subtitlesBackgroundColor":"#000000","playbackBarHeadBorderSize":0,"width":"100%","progressBarBackgroundColor":["#3399FF"],"progressBottom":0,"subtitlesFontColor":"#FFFFFF","playbackBarHeadOpacity":1,"progressBorderSize":0,"surfaceReticleSelectionColor":"#FFFFFF","translationTransitionDuration":1000,"progressBarBorderRadius":0,"subtitlesFontWeight":"normal","playbackBarHeadShadowOpacity":0.7,"subtitlesBottom":50,"subtitlesPaddingLeft":5,"toolTipFontSize":"1.11vmin","progressHeight":10,"surfaceReticleColor":"#FFFFFF","toolTipShadowVerticalLength":0,"height":"100%","surfaceReticleOpacity":0.6,"surfaceReticleSelectionOpacity":1,"progressBarOpacity":1,"data":{"name":"Main Viewer"},"doubleClickAction":"toggle_fullscreen","toolTipHorizontalAlign":"center","transitionMode":"blending","progressBackgroundOpacity":1,"class":"ViewerArea","playbackBarBackgroundColor":["#FFFFFF"],"minHeight":25,"progressBarBorderSize":0,"toolTipPaddingRight":3,"minWidth":50,"toolTipTextShadowOpacity":0,"vrPointerSelectionColor":"#FF6600","playbackBarHeight":10,"toolTipFontStyle":"normal","progressBorderRadius":0,"toolTipShadowHorizontalLength":0,"progressLeft":0,"vrPointerSelectionTime":2000,"toolTipBorderSize":1,"toolTipFontFamily":"Arial","toolTipBorderColor":"#767676","playbackBarHeadBackgroundColorDirection":"vertical","playbackBarHeadWidth":6,"toolTipPaddingTop":2,"playbackBarOpacity":1,"toolTipTextShadowBlurRadius":1,"subtitlesTop":0,"toolTipPaddingBottom":2,"paddingTop":0,"playbackBarProgressBackgroundColorRatios":[0],"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadShadowHorizontalLength":0,"firstTransitionDuration":0,"toolTipOpacity":1,"subtitlesPaddingRight":5,"paddingBottom":0,"playbackBarHeadShadowVerticalLength":0,"playbackBarProgressBorderSize":0,"subtitlesTextShadowColor":"#000000","subtitlesFontSize":"3vmin","playbackBarLeft":0,"subtitlesPaddingBottom":5,"playbackBarHeadHeight":15,"top":0,"subtitlesBackgroundOpacity":0.2,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBackgroundColorDirection":"vertical","displayTooltipInTouchScreens":true,"playbackBarBorderColor":"#FFFFFF","subtitlesTextShadowVerticalLength":1,"playbackBarHeadBorderRadius":0,"toolTipBackgroundColor":"#F6F6F6","subtitlesTextDecoration":"none","toolTipShadowColor":"#333138","playbackBarHeadShadowColor":"#000000","transitionDuration":500,"displayTooltipInSurfaceSelection":true,"playbackBarProgressOpacity":1,"subtitlesFontFamily":"Arial","subtitlesBorderColor":"#FFFFFF","playbackBarHeadBorderColor":"#000000","subtitlesTextShadowBlurRadius":0,"subtitlesEnabled":true,"playbackBarBottom":5,"subtitlesPaddingTop":5,"playbackBarBorderRadius":0,"progressBackgroundColor":["#FFFFFF"],"vrPointerColor":"#FFFFFF","playbackBarHeadBackgroundColorRatios":[0,1],"toolTipBorderRadius":1,"subtitlesShadow":false,"left":0,"toolTipFontWeight":"normal","toolTipPaddingLeft":3,"subtitlesOpacity":1,"propagateClick":false,"toolTipDisplayTime":600,"playbackBarBorderSize":0,"toolTipShadowBlurRadius":1,"playbackBarBackgroundOpacity":1,"progressBackgroundColorRatios":[0],"playbackBarProgressBackgroundColorDirection":"vertical"},{"hfov":360,"hfovMax":130,"vfov":180,"class":"Panorama","partial":false,"pitch":0,"overlays":["this.overlay_3FB9D1A7_23E4_6E02_4199_0DFD915EF8D0","this.overlay_24503D13_2BE9_567D_41BE_AEE6E9382370","this.overlay_3AED5172_2BEE_F13A_41B4_F914863A27AC","this.overlay_3A7ED59F_2BEF_D14D_41C0_F59E55CAED8A","this.overlay_2537263B_2BEE_B3C0_41B8_88FC7A50185C","this.overlay_2432D8C8_2BEB_51B4_41C5_06FA70EA003A","this.overlay_3B905078_2BEA_D1DD_41B7_B30F996DA0A1","this.overlay_25ED5127_2BE9_B3C6_41C0_98789A316D7E","this.overlay_24A7F98B_2BE7_7201_41B5_3158BB54675E","this.overlay_24893DF3_2BE7_5201_41A5_DA1D54F52023","this.overlay_2494D68B_2BE7_BE02_41C0_6BD984847121","this.overlay_2415BF54_2BE7_AE07_41A2_3EC654FD7845","this.overlay_3BE9C7AA_2BE7_5E03_41BB_81B3EE7A6986","this.overlay_3BFE6F0B_2BE7_6E02_41B4_04B8C0736AEF","this.overlay_3BF19684_2BE7_7E06_41B7_FDD66BC9D68F","this.overlay_3BC56EFA_2BE7_6E03_4142_19042935D218","this.overlay_3914C828_2C69_7237_41B3_FB42EBF08441","this.overlay_7E9DF827_6F27_6A05_41C0_90B46C6A01F3","this.overlay_7E21C7E4_6F27_6639_41D0_B65628423816"],"thumbnailUrl":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_t.jpg","label":trans('panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF.label'),"frames":[{"thumbnailUrl":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":21504,"url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_0/{face}/0/{row}_{column}.jpg","height":3584,"colCount":42,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":7},{"width":12288,"url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_0/{face}/1/{row}_{column}.jpg","height":2048,"colCount":24,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":4},{"width":6144,"url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_0/{face}/2/{row}_{column}.jpg","height":1024,"colCount":12,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":2},{"width":3072,"url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_0/{face}/3/{row}_{column}.jpg","height":512,"colCount":6,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"rowCount":1},{"width":12288,"url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_0/{face}/vr2gen/0.jpg","height":2048,"colCount":6,"class":"TiledImageResourceLevel","tags":"mobilevr2gen","rowCount":1}],"class":"ImageResource"}}],"data":{"label":"H\u1ea1 Long"},"id":"panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF"},{"movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":3.72},{"easing":"linear","class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":3.72},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":3.72}],"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","id":"sequence_3E17C743_23E4_3203_4193_965D6E263194"},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","enabled":false,"enabledInCardboard":true,"maps":[],"data":{"label":"Polygon1"},"id":"overlay_3FB9D1A7_23E4_6E02_4199_0DFD915EF8D0","items":[{"image":{"levels":[{"height":483,"width":444,"class":"ImageResourceLevel","url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_HS_nky7y9nm.png"}],"class":"ImageResource"},"distance":50,"yaw":7.48,"data":{"label":"Polygon1"},"class":"HotspotPanoramaOverlayImage","hfov":15.89,"vfov":17.29,"pitch":-20.77}],"areas":["this.HotspotPanoramaOverlayArea_3F00E1C2_23E4_6E02_4174_E34D04B46EC5"]},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","enabled":false,"enabledInCardboard":true,"maps":[],"data":{"label":"Polygon2"},"id":"overlay_24503D13_2BE9_567D_41BE_AEE6E9382370","items":[{"image":{"levels":[{"height":253,"width":765,"class":"ImageResourceLevel","url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_HS_d3b1idh5.png"}],"class":"ImageResource"},"distance":50,"yaw":-15.32,"data":{"label":"Polygon2"},"class":"HotspotPanoramaOverlayImage","hfov":27.06,"vfov":9.11,"pitch":-26.01}],"areas":["this.HotspotPanoramaOverlayArea_243D8D4D_2BE9_56E5_41BC_5C423ECE4CB7"]},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","enabled":false,"enabledInCardboard":true,"maps":[],"data":{"label":"Polygon3"},"id":"overlay_3AED5172_2BEE_F13A_41B4_F914863A27AC","items":[{"image":{"levels":[{"height":127,"width":221,"class":"ImageResourceLevel","url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_HS_e99rvhwc.png"}],"class":"ImageResource"},"distance":50,"yaw":18.75,"data":{"label":"Polygon3"},"class":"HotspotPanoramaOverlayImage","hfov":7.97,"vfov":4.57,"pitch":-24.19}],"areas":["this.HotspotPanoramaOverlayArea_3AED1173_2BEE_F13A_41C3_F57C6F85618E"]},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","enabled":false,"enabledInCardboard":true,"maps":[],"data":{"label":"Polygon33"},"id":"overlay_3A7ED59F_2BEF_D14D_41C0_F59E55CAED8A","items":[{"image":{"levels":[{"height":223,"width":552,"class":"ImageResourceLevel","url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_HS_c8tmq5v1.png"}],"class":"ImageResource"},"distance":50,"yaw":35.89,"data":{"label":"Polygon33"},"class":"HotspotPanoramaOverlayImage","hfov":19.7,"vfov":8.02,"pitch":-26.11}],"areas":["this.HotspotPanoramaOverlayArea_3A7EB5A0_2BEF_D173_4172_71DF0AAA65C4"]},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","enabled":false,"enabledInCardboard":true,"maps":[],"data":{"label":"Polygon5"},"id":"overlay_2537263B_2BEE_B3C0_41B8_88FC7A50185C","items":[{"image":{"levels":[{"height":46,"width":260,"class":"ImageResourceLevel","url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_HS_g8zoqstl.png"}],"class":"ImageResource"},"distance":50,"yaw":-21.49,"data":{"label":"Polygon5"},"class":"HotspotPanoramaOverlayImage","hfov":9.34,"vfov":1.66,"pitch":-8.59}],"areas":["this.HotspotPanoramaOverlayArea_2535363D_2BEE_B3C0_419D_72551C8CFA28"]},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","enabled":false,"enabledInCardboard":true,"maps":[],"data":{"label":"Polygon55"},"id":"overlay_2432D8C8_2BEB_51B4_41C5_06FA70EA003A","items":[{"image":{"levels":[{"height":48,"width":166,"class":"ImageResourceLevel","url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_HS_t2exectz.png"}],"class":"ImageResource"},"distance":50,"yaw":-14.53,"data":{"label":"Polygon55"},"class":"HotspotPanoramaOverlayImage","hfov":5.99,"vfov":1.73,"pitch":-7.13}],"areas":["this.HotspotPanoramaOverlayArea_240D08CA_2BEB_51B4_41C2_208A27339A1C"]},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","enabled":false,"enabledInCardboard":true,"maps":[],"data":{"label":"Polygon6"},"id":"overlay_3B905078_2BEA_D1DD_41B7_B30F996DA0A1","items":[{"image":{"levels":[{"height":120,"width":533,"class":"ImageResourceLevel","url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_HS_cwprmpok.png"}],"class":"ImageResource"},"distance":50,"yaw":-10.6,"data":{"label":"Polygon6"},"class":"HotspotPanoramaOverlayImage","hfov":19.02,"vfov":4.33,"pitch":-10.14}],"areas":["this.HotspotPanoramaOverlayArea_3B90207B_2BEA_D1D3_41C4_91B8900F3529"]},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","enabled":false,"enabledInCardboard":true,"maps":[],"data":{"label":"Polygon7"},"id":"overlay_25ED5127_2BE9_B3C6_41C0_98789A316D7E","items":[{"image":{"levels":[{"height":69,"width":282,"class":"ImageResourceLevel","url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_HS_hf4i010z.png"}],"class":"ImageResource"},"distance":50,"yaw":-17.48,"data":{"label":"Polygon7"},"class":"HotspotPanoramaOverlayImage","hfov":10.13,"vfov":2.49,"pitch":-7.95}],"areas":["this.HotspotPanoramaOverlayArea_25FC312B_2BE9_B3CE_41C4_FC0EA0F5BDC7"]},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","rollOverDisplay":true,"id":"overlay_24A7F98B_2BE7_7201_41B5_3158BB54675E","enabledInCardboard":true,"maps":[],"data":{"label":"Polygon1_1"},"items":[{"image":{"levels":[{"height":483,"width":444,"class":"ImageResourceLevel","url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_HS_odpe8ppc.png"}],"class":"ImageResource"},"distance":50,"yaw":7.48,"data":{"label":"Polygon1_1"},"class":"HotspotPanoramaOverlayImage","hfov":15.89,"vfov":17.29,"pitch":-20.77}],"areas":["this.HotspotPanoramaOverlayArea_24A6298D_2BE7_7201_4150_705A819411DA"]},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","rollOverDisplay":true,"id":"overlay_24893DF3_2BE7_5201_41A5_DA1D54F52023","enabledInCardboard":true,"maps":[],"data":{"label":"Polygon2_1"},"items":[{"image":{"levels":[{"height":253,"width":765,"class":"ImageResourceLevel","url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_HS_on2jwyuc.png"}],"class":"ImageResource"},"distance":50,"yaw":-15.32,"data":{"label":"Polygon2_1"},"class":"HotspotPanoramaOverlayImage","hfov":27.06,"vfov":9.11,"pitch":-26.01}],"areas":["this.HotspotPanoramaOverlayArea_24890DF3_2BE7_5201_41B4_8FA948B118DD"]},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","rollOverDisplay":true,"id":"overlay_2494D68B_2BE7_BE02_41C0_6BD984847121","enabledInCardboard":true,"maps":[],"data":{"label":"Polygon3_1"},"items":[{"image":{"levels":[{"height":127,"width":221,"class":"ImageResourceLevel","url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_HS_xdx4u06c.png"}],"class":"ImageResource"},"distance":50,"yaw":18.75,"data":{"label":"Polygon3_1"},"class":"HotspotPanoramaOverlayImage","hfov":7.97,"vfov":4.57,"pitch":-24.19}],"areas":["this.HotspotPanoramaOverlayArea_2493368B_2BE7_BE02_41AE_EDA2FB8C84D9"]},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","rollOverDisplay":true,"id":"overlay_2415BF54_2BE7_AE07_41A2_3EC654FD7845","enabledInCardboard":true,"maps":[],"data":{"label":"Polygon33_1"},"items":[{"image":{"levels":[{"height":223,"width":552,"class":"ImageResourceLevel","url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_HS_3x8xm1gv.png"}],"class":"ImageResource"},"distance":50,"yaw":35.89,"data":{"label":"Polygon33_1"},"class":"HotspotPanoramaOverlayImage","hfov":19.7,"vfov":8.02,"pitch":-26.11}],"areas":["this.HotspotPanoramaOverlayArea_2415AF54_2BE7_AE07_419F_36F8BC971FAA"]},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","rollOverDisplay":true,"id":"overlay_3BE9C7AA_2BE7_5E03_41BB_81B3EE7A6986","enabledInCardboard":true,"maps":[],"data":{"label":"Polygon5_1"},"items":[{"image":{"levels":[{"height":46,"width":260,"class":"ImageResourceLevel","url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_HS_hcwpkazk.png"}],"class":"ImageResource"},"distance":50,"yaw":-21.49,"data":{"label":"Polygon5_1"},"class":"HotspotPanoramaOverlayImage","hfov":9.34,"vfov":1.66,"pitch":-8.59}],"areas":["this.HotspotPanoramaOverlayArea_3BE9D7AA_2BE7_5E03_41C2_D577024FF22A"]},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","rollOverDisplay":true,"id":"overlay_3BFE6F0B_2BE7_6E02_41B4_04B8C0736AEF","enabledInCardboard":true,"maps":[],"data":{"label":"Polygon55_1"},"items":[{"image":{"levels":[{"height":48,"width":166,"class":"ImageResourceLevel","url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_HS_uee7lkyk.png"}],"class":"ImageResource"},"distance":50,"yaw":-14.53,"data":{"label":"Polygon55_1"},"class":"HotspotPanoramaOverlayImage","hfov":5.99,"vfov":1.73,"pitch":-7.13}],"areas":["this.HotspotPanoramaOverlayArea_3BFD8F0C_2BE7_6E06_41C2_D9A9E699E6C0"]},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","rollOverDisplay":true,"id":"overlay_3BF19684_2BE7_7E06_41B7_FDD66BC9D68F","enabledInCardboard":true,"maps":[],"data":{"label":"Polygon6_1"},"items":[{"image":{"levels":[{"height":120,"width":533,"class":"ImageResourceLevel","url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_HS_izflzozu.png"}],"class":"ImageResource"},"distance":50,"yaw":-10.6,"data":{"label":"Polygon6_1"},"class":"HotspotPanoramaOverlayImage","hfov":19.02,"vfov":4.33,"pitch":-10.14}],"areas":["this.HotspotPanoramaOverlayArea_3BF18684_2BE7_7E06_41AA_2A91B8CEA053"]},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","rollOverDisplay":true,"id":"overlay_3BC56EFA_2BE7_6E03_4142_19042935D218","enabledInCardboard":true,"maps":[],"data":{"label":"Polygon7_1"},"items":[{"image":{"levels":[{"height":69,"width":282,"class":"ImageResourceLevel","url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_HS_ajgg4waj.png"}],"class":"ImageResource"},"distance":50,"yaw":-17.48,"data":{"label":"Polygon7_1"},"class":"HotspotPanoramaOverlayImage","hfov":10.13,"vfov":2.49,"pitch":-7.95}],"areas":["this.HotspotPanoramaOverlayArea_3BC49EFA_2BE7_6E03_4198_2074E1DAFFA9"]},{"data":{"label":"sunOnsenVillage"},"class":"HotspotPanoramaOverlay","maps":[],"useHandCursor":true,"items":[{"image":"this.res_3A87FCA3_2C6F_D239_41BC_147D697A43E6","distance":50,"rotationX":16.3,"hfov":5.91,"vfov":7.88,"yaw":160.37,"class":"HotspotPanoramaOverlayImage","verticalAlign":"middle","horizontalAlign":"center","pitch":0.25,"data":{"label":"sunOnsenVillage"},"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_3930F974_2C69_721F_4196_475B6F67E5F0"],"enabledInCardboard":true,"id":"overlay_3914C828_2C69_7237_41B3_FB42EBF08441"},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","enabled":false,"enabledInCardboard":true,"maps":[],"data":{"label":"Polygon 4"},"id":"overlay_7E9DF827_6F27_6A05_41C0_90B46C6A01F3","items":[{"image":{"levels":[{"height":62,"width":120,"class":"ImageResourceLevel","url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_HS_ctgnljvn.png"}],"class":"ImageResource"},"distance":50,"yaw":160.14,"data":{"label":"Polygon 4"},"class":"HotspotPanoramaOverlayImage","hfov":4.35,"vfov":2.25,"pitch":-3.18}],"areas":["this.HotspotPanoramaOverlayArea_7E9C282D_6F27_6A05_41AD_45D4E9525821"]},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","rollOverDisplay":true,"id":"overlay_7E21C7E4_6F27_6639_41D0_B65628423816","enabledInCardboard":true,"maps":[],"data":{"label":"Polygon 4_1"},"items":[{"image":{"levels":[{"height":62,"width":120,"class":"ImageResourceLevel","url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_HS_yuhxs4pb.png"}],"class":"ImageResource"},"distance":50,"yaw":160.14,"data":{"label":"Polygon 4_1"},"class":"HotspotPanoramaOverlayImage","hfov":4.35,"vfov":2.25,"pitch":-3.18}],"areas":["this.HotspotPanoramaOverlayArea_7E2167E6_6F27_6639_41D9_05DB6F540A61"]},{"class":"HotspotPanoramaOverlayArea","mapColor":"image","id":"HotspotPanoramaOverlayArea_3F00E1C2_23E4_6E02_4174_E34D04B46EC5"},{"class":"HotspotPanoramaOverlayArea","mapColor":"image","id":"HotspotPanoramaOverlayArea_243D8D4D_2BE9_56E5_41BC_5C423ECE4CB7"},{"class":"HotspotPanoramaOverlayArea","mapColor":"image","id":"HotspotPanoramaOverlayArea_3AED1173_2BEE_F13A_41C3_F57C6F85618E"},{"class":"HotspotPanoramaOverlayArea","mapColor":"image","id":"HotspotPanoramaOverlayArea_3A7EB5A0_2BEF_D173_4172_71DF0AAA65C4"},{"class":"HotspotPanoramaOverlayArea","mapColor":"image","id":"HotspotPanoramaOverlayArea_2535363D_2BEE_B3C0_419D_72551C8CFA28"},{"class":"HotspotPanoramaOverlayArea","mapColor":"image","id":"HotspotPanoramaOverlayArea_240D08CA_2BEB_51B4_41C2_208A27339A1C"},{"class":"HotspotPanoramaOverlayArea","mapColor":"image","id":"HotspotPanoramaOverlayArea_3B90207B_2BEA_D1D3_41C4_91B8900F3529"},{"class":"HotspotPanoramaOverlayArea","mapColor":"image","id":"HotspotPanoramaOverlayArea_25FC312B_2BE9_B3CE_41C4_FC0EA0F5BDC7"},{"click":"this.openLink(this.translate('LinkBehaviour_4635517C_5009_7A29_41C4_995B27037633.source'), '_top')","class":"HotspotPanoramaOverlayArea","mapColor":"image","id":"HotspotPanoramaOverlayArea_24A6298D_2BE7_7201_4150_705A819411DA"},{"click":"this.openLink(this.translate('LinkBehaviour_475F302B_5009_1A2F_41D3_4A067EA18DE8.source'), '_top')","class":"HotspotPanoramaOverlayArea","mapColor":"image","id":"HotspotPanoramaOverlayArea_24890DF3_2BE7_5201_41B4_8FA948B118DD"},{"click":"this.openLink(this.translate('LinkBehaviour_45F9F9E6_500F_0A26_41D3_0C4354BDDAA2.source'), '_top')","class":"HotspotPanoramaOverlayArea","mapColor":"image","id":"HotspotPanoramaOverlayArea_2493368B_2BE7_BE02_41AE_EDA2FB8C84D9"},{"click":"this.openLink(this.translate('LinkBehaviour_46114FD4_500F_067A_41BA_3BE3BA9541D8.source'), '_top')","class":"HotspotPanoramaOverlayArea","mapColor":"image","id":"HotspotPanoramaOverlayArea_2415AF54_2BE7_AE07_419F_36F8BC971FAA"},{"class":"HotspotPanoramaOverlayArea","mapColor":"image","id":"HotspotPanoramaOverlayArea_3BE9D7AA_2BE7_5E03_41C2_D577024FF22A"},{"class":"HotspotPanoramaOverlayArea","mapColor":"image","id":"HotspotPanoramaOverlayArea_3BFD8F0C_2BE7_6E06_41C2_D9A9E699E6C0"},{"class":"HotspotPanoramaOverlayArea","mapColor":"image","id":"HotspotPanoramaOverlayArea_3BF18684_2BE7_7E06_41AA_2A91B8CEA053"},{"class":"HotspotPanoramaOverlayArea","mapColor":"image","id":"HotspotPanoramaOverlayArea_3BC49EFA_2BE7_6E03_4198_2074E1DAFFA9"},{"levels":[{"height":300,"width":232,"class":"ImageResourceLevel","url":"media/res_3A87FCA3_2C6F_D239_41BC_147D697A43E6_0.png"}],"class":"ImageResource","id":"res_3A87FCA3_2C6F_D239_41BC_147D697A43E6"},{"rollOver":"this.setOverlaysVisibility([this.overlay_7E9DF827_6F27_6A05_41C0_90B46C6A01F3], true, 0)","mapColor":"any","class":"HotspotPanoramaOverlayArea","rollOut":"this.setOverlaysVisibility([this.overlay_7E9DF827_6F27_6A05_41C0_90B46C6A01F3], false, 0)","id":"HotspotPanoramaOverlayArea_3930F974_2C69_721F_4196_475B6F67E5F0"},{"class":"HotspotPanoramaOverlayArea","mapColor":"image","id":"HotspotPanoramaOverlayArea_7E9C282D_6F27_6A05_41AD_45D4E9525821"},{"class":"HotspotPanoramaOverlayArea","mapColor":"image","id":"HotspotPanoramaOverlayArea_7E2167E6_6F27_6639_41D9_05DB6F540A61"}],"scrollBarWidth":10,"vrPolyfillScale":0.75,"backgroundColorRatios":[0],"defaultVRPointer":"laser","scrollBarOpacity":0.5,"toolTipHorizontalAlign":"center","class":"Player","minHeight":20,"backgroundColorDirection":"vertical","minWidth":20,"shadow":false,"contentOpaque":false,"mobileMipmappingEnabled":false};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=http://localhost:9000/script_device_v2022.0.36.js.map
})();
//Generated with v2022.0.36, Thu Apr 28 2022