$(function() {
	$(".select_box").click(function(event) {
		event.stopPropagation();
		$(this).find(".option").toggle();
		$(this).parent().siblings().find(".option").hide();
	});
	$(document).click(function(event) {
		var eo = $(event.target);
		if ($(".select_box").is(":visible") && eo.attr("class") != "option" && !eo.parent(".option").length) {
			$('.option').hide();
		}
	});
	/*赋值给文本框*/
	$(".option a").click(function() {
		var value = $(this).text();
		$(this).parent().siblings(".select_txt").text(value);
		var sval = $(this).data("sval");
		if (sval) {
			var ainfos = sval.split("|"); // 约定 | 分隔符前为模块id, 后面为实际value
			$("#" + ainfos[0]).val(ainfos[1]);
		}
	});

	$('#S_show_pop').click(function() {
		
		if($(".us_panel_msk").hasClass('show')) {
			$('.us_panel_msk').removeClass('show');
			$('.us_panel_menu_t').removeClass('show');
			
			$(window).unbind('touchmove');
		} else {
			$('.us_panel_msk').addClass('show');
			$('.us_panel_menu_t').addClass('show');
			
			$(window).bind('touchmove', function(e) {
				e.preventDefault();
				e.stopImmediatePropagation();
			});
		}
	});

	$("#S_close_protocal").click(function() {
		$('#S_show_pop').trigger('click');
	});

	$('.us_panel_msk').click(function() {
		$('#S_show_pop').trigger('click');
	});

	// click pop dialog ok button
	$("#S_beok_prototal").click(function() {
		var olabelCheckBox = document.getElementById("S_label_agree");
		var cn = olabelCheckBox.className;
		
		olabelCheckBox.className = cn + ' checkbox-checked';
		$('#S_show_pop').trigger('click');
	});
	
	$(".customer-checkbox").click(function(){
		var $this = $(this);
		
		var o = {0:1,1:0};
		
		var target = $this.data('target');
		var flag = $this.data('flag');
		
		if($this.hasClass('checkbox')) {
			$this.removeClass('checkbox');
			$this.addClass('checkbox-checked');
			
			if ( 1 === flag ) {
				$("#S_email").show();
			}
			
		} else if($this.hasClass('checkbox-checked')) {
			$this.removeClass('checkbox-checked');
			$this.addClass('checkbox');
			
			if ( 1 === flag ) {
				$("#S_email").hide();
			}
		}
		$("#"+target).val(o[$('#'+target).val()]);
	});
	
	$(".customer-radio").click(function(){
		var $this = $(this);
		var _val = $this.data('sval');
		
		$(".customer-radio").removeClass('label-radio-checked').addClass("label-radio");
		$this.addClass("label-radio-checked");

		$("#S_car_category").val(_val);
	});

});