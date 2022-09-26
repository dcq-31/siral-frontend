export const dateIsValid = (_date: string) => {
  // regex of format dd-mm-yyyy
  const regex = /^[0-9]{2}\-[0-9]{2}\-[0-9]{4}$/;
  if (_date.match(regex) === null) {
    return false;
  }

  const [day, month, year] = _date.split('-');

  // format Date string as `yyyy-mm-dd`
  const isoFormattedStr = `${year}-${month}-${day}`;
  const date = new Date(isoFormattedStr);
  console.log(day, month, year);
  const timestamp = date.getTime();

  if (typeof timestamp !== 'number' || Number.isNaN(timestamp)) {
    return false;
  }

  return date.toISOString().startsWith(isoFormattedStr);
};
