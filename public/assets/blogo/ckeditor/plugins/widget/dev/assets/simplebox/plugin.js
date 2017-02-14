"use strict";CKEDITOR.plugins.add("simplebox",{requires:"widget",icons:"simplebox",init:function(t){CKEDITOR.dialog.add("simplebox",this.path+"dialogs/simplebox.js"),t.widgets.add("simplebox",{allowedContent:"div(!simplebox,align-left,align-right,align-center){width};div(!simplebox-content); h2(!simplebox-title)",requiredContent:"div(simplebox)",editables:{title:{selector:".simplebox-title",allowedContent:"br strong em"},content:{selector:".simplebox-content"}},template:'<div class="simplebox"><h2 class="simplebox-title">Title</h2><div class="simplebox-content"><p>Content...</p></div></div>',button:"Create a simple box",dialog:"simplebox",upcast:function(t){return"div"==t.name&&t.hasClass("simplebox")},init:function(){var t=this.element.getStyle("width");t&&this.setData("width",t),this.element.hasClass("align-left")&&this.setData("align","left"),this.element.hasClass("align-right")&&this.setData("align","right"),this.element.hasClass("align-center")&&this.setData("align","center")},data:function(){this.data.width?this.element.setStyle("width",this.data.width):this.element.removeStyle("width"),this.element.removeClass("align-left"),this.element.removeClass("align-right"),this.element.removeClass("align-center"),this.data.align&&this.element.addClass("align-"+this.data.align)}})}});