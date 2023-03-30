export default class Validator {
  allowedSymbol(txt) {
    // метод для проверки на допустипость используемых симоволов
    let x = txt.replace(/[a-z, 0-9]*/gi, '');
    x = x.replace(/-*/g, '');
    x = x.replace(/_*/g, '');
    if (x === '') {
      return true;
    }
    return false;
  }

  validateUsername(textName) {
    // проверяем строку по массиву регулярок, чтобы они были false
    const arrayRegxFind = [
      /\d{3}/,
      /^\d|-|_/,
      /(\d|-|_)$/,
    ];
    if (this.allowedSymbol(textName)) {
      for (const reg of arrayRegxFind) {
        const r = reg.test(textName);
        if (r) {
          return !r;
        }
      }
      return true;
    }
    return false;
  }
}
