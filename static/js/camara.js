$(function() {
			var img =null;
			var sayCheese = new SayCheese('#container-element',{ snapshots: true });
			sayCheese.on('start', function() {
			  //this.takeSnapshot();
			});
			$("#snapshot").click(function () {
				sayCheese.takeSnapshot(320,240);
				return false;
			});
			sayCheese.on('snapshot', function(snapshot) {
			 	console.log('Foto tomada');
				img = document.createElement('img');
			    $(img).on('load',function () {
			    	$('#container-element-tomada').html(img);
			    });
			    img.src=snapshot.toDataURL('img/png');
			        var data = {
			    	src : img.src
			    }
			    console.log(img.src);
			   	$.ajax({
			   		url:'http://localhost:8000/img',
			   		data:data,
			   		type:'post',
			   		success:function (respuesta) {
			   			console.log(respuesta);
			   		}
			   	});
			    $('#imp').html(`<a class="btn btn-primary" href="/pdf">Descargar PDF</a>`);
			});
		  	
		  sayCheese.start();
		});

//$('#imp').html(`<a href='/pdf/${$("#nombre").val()}/${$("#paterno").val()}/${$("#materno").val()}/${$("#sexo").val()}/${$("#dia").val()}/${$("#mes").val()}/${$("#anio").val()}/${e}/${$('#direccion').val()}/${window.edad}/${window.curp}'> <i class='glyphicon glyphicon-print' id='lin'></i>Imprimir PDF</a>`);

 