
import otpGenerator from "otp-generator";

const generateOtp = (lenght) => {
	var otp = otpGenerator.generate(lenght, {
		upperCaseAlphabets: false,
		lowerCaseAlphabets: false,
		specialChars: false,
	});

	return otp
};

export default generateOtp;




