export default {
	ruc: /^([0-9]{11})$/,
	dni: /^\d{8}(?:[-\s]\d{4})?$/,
	phone: /^[+][0-9]*/,
	URL: /^(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!]))?/,
	email: /^([\w-]+@([\w-]+\.)+[\w-]{2,4})?$/,
	int: /^\d+$/,
	decimal: /^[0-9]+([.][0-9]+)?$/,
	sku: /^[A-Z0-9\-./]+$/,
	codeWarehouse: /^[A-z0-9]+$/,
	weigth: /^([\d.]+)+(kg)$/,
	measure: /^([\d.]+)+(cm)$/,
	capacity: /^([\d.]+)+(persons|ltrs)$/,
	// credit card
	CCDate: /^(01|02|03|04|05|06|07|08|09|10|11|12)\/(15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30)$/,
	Bin: /^[0-9]{6}$/,
	Last4: /^[0-9]{4}$/,
	CardHolderInitials: /^[A-Z]+$/,
}
