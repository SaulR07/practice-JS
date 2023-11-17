var new_zip = new JSZip();

function readXML() {
	file = document.getElementById("file");
	path = file.value;

	new JSZip.external.Promise(function (resolve, reject) {
		JSZipUtils.getBinaryContent("path/to/content.zip", function (err, data) {
			if (err) {
				reject(err);
			} else {
				resolve(data);
			}
		});
	}).then(function (data) {
		console.log(data);
		return JSZip.loadAsync(data);
	});
}
