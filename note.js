$(function() {
    $(".note").each(function() {
	var self = $(this);
	self.before('<div class="notetitle"><a href="javascript:void(0);">' +
                    self.attr("title") + '...</a></div>');
	self.before('<div class="noteheader"><a href="javascript:void(0);">' +
		    self.attr("title") + '</a>:</div>');
	self.wrap('<div class="notewrapper" />');
	self.children().first().css('margin-top', '0px');
    });

    $(".notewrapper").each(function() {
	var self = $(this);
	self.hide();
	self.css('overflow', 'hidden');
	self.height(0);
    });

    $(".noteheader").hide();
    $(".noteheader").click(function() {
	var self = $(this);
	var notetitle = self.prev();
	var notewrapper = self.next();
	notetitle.show();
	self.hide();
	notewrapper.slideUp(300);
    });

    $(".notetitle").click(function() {
	var self = $(this);
	var noteheader = self.next();
	var notewrapper = noteheader.next();
	var note = notewrapper.children().first();
	notewrapper.height(0);
	note.show();
	noteheader.show();
	self.hide();
	notewrapper.show();
	notewrapper.animate({ 'height' : note.height()  }, 300);
    });
	
});
