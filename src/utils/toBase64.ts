function toBase64(file: File | null, callback: any) {
	if (!file) return callback("No file selected");

	const reader = new FileReader();
	reader.onload = (event: any) => {
		const base64UrlData = event.target.result;
		callback(null, base64UrlData);
	};
	reader.readAsDataURL(file);
}

export default toBase64;
// toBase64(file, (error: any, base64UrlData: any) => {
// 	if (error) {
// 		alert(error);
// 	} else {
// 		setFile(base64UrlData || "");
// 	}
// });
