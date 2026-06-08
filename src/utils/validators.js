const floatRegex = /^[-+]?[0-9]+\.[0-9]+$/;

export function validateQuantity (qty) {
  return !floatRegex.test(qty) && qty > 0 && qty <= 20;
}

export function isRequired (value) {
  return value ? true : '此欄位為必填';
}

export function validateEmail (value) {
  if (!value) return '此欄位為必填';
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  return regex.test(value) ? true : '必須是 email 格式';
}

export function validatePhone (value) {
  if (!value) return '此欄位為必填';
  const tel = /^((\d{2,3}-?|\(\d{2,3}\))\d{3,4}-?\d{4})|(09\d{2}(\d{6}|-\d{3}-\d{3}))$/;
  if (!tel.test(value) || value.toString().length > 10) return '無效的電話號碼或手機號碼';
  return true;
}
