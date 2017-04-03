$('form select[name=kegiatan]').change(function(e){
  if ($('form select[name=kegiatan]').val() == '1'){
    $('#lanjutKuliah').show();
		$('#bekerja').hide();
  } else if ($('form select[name=kegiatan]').val() == '2'){
    $('#bekerja').show();
		$('#lanjutKuliah').hide();
  } else {
		$('#lanjutKuliah').hide();
		$('#bekerja').hide();
	}
});