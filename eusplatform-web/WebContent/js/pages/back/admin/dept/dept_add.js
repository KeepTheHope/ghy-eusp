$(function(){
	$("#myform").validate({
		debug : true, // 取消表单的提交操作
		errorPlacement : function(error, element) {
			$("#" + $(element).attr("id").replace(".", "\\.") + "Msg").append(error);
		},
		highlight : function(element, errorClass) {
			$(element).fadeOut(1,function() {
				$(element).fadeIn(1, function() {
					$("#" + $(element).attr("id").replace(".","\\.") + "Div").attr("class","form-group has-error");
				});

			})
		},
		unhighlight : function(element, errorClass) {
			$(element).fadeOut(1,function() {
				$(element).fadeIn(1,function() {
						$("#" + $(element).attr("id").replace(".","\\.") + "Div").attr("class","form-group has-success");
				});
			})
		},
		errorClass : "text-danger",
		rules : {
			"dname" : {
				required : true
				//remote : {
//				url : "check.jsp", // 后台处理程序
//				type : "post", // 数据发送方式
//				dataType : "html", // 接受数据格式
//				data : { // 要传递的数据
//					code : function() {
//						return $("#code").val();
//					}
//				},
//				dataFilter : function(data, type) {
//					if (data.trim() == "true")
//						return true;
//					else
//						return false;
//				}
//}
			} ,
			"maxnum" : {
				required : true ,
				digits: true
			},
			"note" : {
				required : true
			}
		}
	});
	$("#submit").on("click",function(){
		$.post("pages/back/admin/dept/DeptAction!add.action",{"dname":$("#dname").val(),"maxnum":$("#maxnum").val()},function(data){
			if(data == "true"){
				operateAlert(true,"部门信息增加成功！","") ;
				$("#dname").val("");
				$("#maxnum").val("") ;
			}else{
				operateAlert(false,"","部门信息增加失败！") ;
			}
		},"text") ;
	}) ;
})