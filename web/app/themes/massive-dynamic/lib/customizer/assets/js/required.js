/*Get current value of a parent*/
function pixflow_getParentVal(e, r){var i=jQuery,r=r,e=e;if("radio"==r)if(null!=window.parent)var t=window.parent.jQuery("input[name=_customize-radio-"+e+"]:checked").val();else var t=i("input[name=_customize-radio-"+e+"]:checked").val();else if("checkbox"==r)var t=window.parent.jQuery("#"+e).is(":checked");else if("select"==r)var t=window.parent.jQuery("#select_"+e+" .selected").attr("value");return t}function pixflow_childDisplay(e, r, i){var e=(jQuery,e),r="undefined"!=typeof r?r:!1,i="undefined"!=typeof i?i:!1;for(var t in e)if("undefined"!=typeof e[t]){for(var o="",n=new Array,a=e[t].type,d=e[t].compare,c=e[t].required,l=0; l<c.length; l++){var s=c[l].setting,h=c[l].value,u=c[l].type;if(s==r)var w=i;else var w=pixflow_getParentVal(s,u);o=w==h?"show":"hide",n[n.length]=o}if(n.length>1){var p="";"or"==d?p=n.indexOf("show"):"and"==d&&(p=n.indexOf("hide")),"or"==d?o=-1==p?"hide":"show":"and"==d&&(o=-1==p?"show":"hide")}if(n=null,""!=o)if("background"==a)for(var v=["_opacity","_position","_attach","_size","_repeat","_image","_color"],y=0; y<v.length; y++){var t=t;"show"==o?window.parent.jQuery("#customize-control-"+t+v[y]).removeClass("controller-hide"):"hide"==o&&window.parent.jQuery("#customize-control-"+t+v[y]).addClass("controller-hide")}else if("gradient"==a)for(var v=["_gradient","_orientation","_color1","_color2"],y=0;y<v.length;y++){var t=t;"show"==o?window.parent.jQuery("#customize-control-"+t+v[y]).removeClass("controller-hide"):"hide"==o&&window.parent.jQuery("#customize-control-"+t+v[y]).addClass("controller-hide")}else"slider"==a?"show"==o?window.parent.jQuery("#customize-control-"+t).removeClass("controller-hide-slider"):"hide"==o&&window.parent.jQuery("#customize-control-"+t).addClass("controller-hide-slider"):"show"==o?window.parent.jQuery("#customize-control-"+t).removeClass("controller-hide"):"hide"==o&&window.parent.jQuery("#customize-control-"+t).addClass("controller-hide")}}function pixflow_changeParents(e, r){var i,t=jQuery,e=e,r=r;for(var o in e){var n=e[o];"radio"==n?i=window.parent.jQuery("input[name=_customize-radio-"+o+"]"):"checkbox"==n&&(i=window.parent.jQuery("#"+o)),"radio"==n||"checkbox"==n?i.change(function(){var e=required.childs,r=t(this).attr("data-customize-setting-link"),i=t(this).attr("type"),o="";"radio"==i?o=t(this).val():"checkbox"==i&&(o="checked"==t(this).attr("checked")?"1":"0"),pixflow_childDisplay(e,r,o)}):"select"==n&&(i=window.parent.jQuery("#select_"+o+" .select-item"),i.click(function(){var e=required.childs,r=t(this).parent().attr("parent"),i="";i=t(this).attr("value"),pixflow_childDisplay(e,r,i),t(this).parents("ul.accordion-section-content").css("height","auto")}))}}var $=jQuery;$(window).load(function(){pixflow_childDisplay(required.childs),pixflow_changeParents(required.parents,required.childs)});