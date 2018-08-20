// check off specific todos by clicking (method 1, deprecated)
// $("li").on("click", function() {
// 	// check if li is currently grey(deleted)
// 	// trick here: === "rgb(128 128, 128)""
// 	if ($(this).css("color") === "rgb(128, 128, 128)") {
// 		// if it is grey, change it to black and get rid of line-through
// 		$(this).css({
// 			color: "black",
// 			textDecoration: "none"
// 		});

// 	} else {
// 		// if it is not grey, change to grey and set line-through
// 		$(this).css({
// 			color: "grey",
// 			textDecoration: "line-through"
// 		});
// 	}

// });

// check off specific todos by clicking (method 2)
// select ul but not li to support furture added li's functionality
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

// delete todo item by clicking X
// pass a event variable into it
// select ul but not li to support furture added span's functionality
$("ul").on("click", "span", function(e) {
    // from "this" to select parent and fade out then remove
    $(this)
        .parent()
        .fadeOut(500, function() {
            $(this).remove();
        });

    // call jquery's stopPropagation() function to avoid triggerring li's click event listener
    e.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
    // check if the pressed key is enter.
    // ascii code 13 for enter
    if (event.which === 13) {
        // grabbing the text from input
        let todoText = $(this).val();
        // clear current text input
        $(this).val("");
        // creat a new li text
        let todoLi = `<li><span><i class="fas fa-trash-alt"></i></span> ${todoText} </li>`;
        // add new li text to ul
        $("ul").append(todoLi);
    }
});

var isPlus = true;

$("h1 span").on("click", function() {
    if (isPlus) {
        // make minus icon
        $(this).html(`<i class="fas fa-minus"></i>`);
        isPlus = false;
    } else {
        // make plus icon
        $(this).html(`<i class="fas fa-plus"></i>`);
        isPlus = true;
    }
    $("input[type='text']").fadeToggle();
});
