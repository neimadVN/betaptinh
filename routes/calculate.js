module.exports.calculate = function (argm1, argm2, oper) {
    var a = parseFloat(argm1);
	if (isNaN(a))
	{
		return "Giá trị của Số thứ nhất không phải là số!";
	}

    var b = parseFloat(argm2);
    if (isNaN(b))
	{
		return "Giá trị của Số thứ hai không phải là số!";
	}

    switch (oper)
	{
		case "+": result = a + b; break;
		case "-": result = a - b; break;
		case "*": result = a * b; break;
		case "/": result = a / b; break;
		default: return "Hãy lựa chọn Phép toán";
	}
	
	return result;
}