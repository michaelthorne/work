/*! jQuery HTML5 placeholder fix.js | https://gist.github.com/hagenburger/379601 */
$("[placeholder]").focus(function(){var e=$(this);if(e.val()==e.attr("placeholder")){e.val("");e.removeClass("placeholder")}}).blur(function(){var e=$(this);if(e.val()==""||e.val()==e.attr("placeholder")){e.addClass("placeholder");e.val(e.attr("placeholder"))}}).blur().parents("form").submit(function(){$(this).find("[placeholder]").each(function(){var e=$(this);if(e.val()==e.attr("placeholder")){e.val("")}})})