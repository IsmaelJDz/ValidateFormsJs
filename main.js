$(function() {
    $("#frm_contacto").submit(function(event) {
        event.preventDefault();
        enviar()
    })
});
function validar() {
    i = 1;
    $("#frm_contacto :input").each(function(index, item) {
        if ($(item).val().length == 0 && item.type != "submit") {
            i = 0;
            return false
        }
    });
    return i
}
function errors() {
    $("#frm_contacto :input").each(function(index, el) {
        if ($(el).val().length == 0 && el.type != "submit") {
            $(el).css("border", "1px solid red");
            setTimeout(function() {
                $(".error").fadeOut(2e3)
            }, 2e3)
        } else {
            if (el.type == 'submit') 
            {
                $(el).css("border", "1px solid #ddd")
            }else
            {$(el).css("border", "none")}

        }
    })
}
function enviar() {
    if (validar() == 1) {
        $.post("proccess.php", $("#frm_contacto").serialize(), function() {
            $(".error").css("display", "none");
            $(".ok").css("display", "block");
            setTimeout(function() {
                $(".ok").fadeOut(3e3)
            }, 3e3);
            resetfrm();
            $("#frm_contacto :input").css("border", "1px solid #ddd")
        })
    } else {
        errors();
        $(".error").css("display", "block", function() {
            $(".error").show("slow")
        })
    }
}
function resetfrm() {
    $("#frm_contacto :input").each(function(index, item) {
        if (item.type != "submit")
            $(item).val("")
    })
}
