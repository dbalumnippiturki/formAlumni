$('form select[name=kegiatan]').change(function(e){
  if ($('form select[name=kegiatan]').val() == '1'){
    $('#lanjutKuliah').show();
		$('#bekerja').hide();
		$('#entrepre').hide();
		$('#klainnya').hide();
  } else if ($('form select[name=kegiatan]').val() == '2'){
    $('#bekerja').show();
		$('#lanjutKuliah').hide();
		$('#entrepre').hide();
		$('#klainnya').hide();
	} else if ($('form select[name=kegiatan]').val() == '3'){
    $('#entrepre').show();
		$('#bekerja').hide();
		$('#lanjutKuliah').hide();
		$('#klainnya').hide();
	} else if ($('form select[name=kegiatan]').val() == '4'){
    $('#klainnya').show();
		$('#bekerja').hide();
		$('#lanjutKuliah').hide();
		$('#entrepre').hide();
  } else {
		$('#lanjutKuliah').hide();
		$('#bekerja').hide();
		$('#entrepre').hide();
		$('#klainnya').hide();
	}
});