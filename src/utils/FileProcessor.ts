import axios from "axios";

const cloudame = "dpsdpnqof";
const uploadPreset = "elfque";

export const FileProcessor = async (files: File) => {
	const formData = new FormData();
	formData.append("file", files);
	formData.append("upload_preset", uploadPreset);

	try {
		const res = await axios.post(
			`https://api.cloudinary.com/v1_1/${cloudame}/image/upload`,
			formData
		);

		return res.data;
	} catch (error) {
		throw error;
	}
};
export const FileProcessorAudio = async (files: File, type: string) => {
	const formData = new FormData();
	formData.append("file", files);
	formData.append("upload_preset", uploadPreset);

	try {
		const res = await axios.post(
			`https://api.cloudinary.com/v1_1/${cloudame}/${
				type === "pdf" ? "raw" : type
			}/upload`,
			formData
		);

		return res.data;
	} catch (error) {
		throw error;
	}
};
