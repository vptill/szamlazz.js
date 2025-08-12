export class Currency {
  constructor(value, roundPriceExp, comment) {
    this.value = value;
    this.comment = comment;
    this.roundPriceExp = roundPriceExp;
  }

  toString() {
    return `${this.value} (${this.comment})`;
  }
}

export class Language {
  constructor(value, name) {
    this.value = value;
    this.name = name;
  }

  toString() {
    return `${this.name} (${this.value})`;
  }
}

export class PaymentMethod {
  constructor(value, comment) {
    this.value = value;
    this.comment = comment;
  }

  toString() {
    return `${this.value} (${this.comment})`;
  }
}

export class TaxSubject {
  constructor(value, comment) {
    this.value = value;
    this.comment = comment;
  }

  toString() {
    return this.value;
  }
}
export const Currencies = {
  Ft: new Currency("Ft", 0, "Hungarian Forint"),
  HUF: new Currency("HUF", 0, "Hungarian Forint"),
  EUR: new Currency("EUR", 2, "Euro"),
  CHF: new Currency("CHF", 2, "Swiss Franc"),
  USD: new Currency("USD", 2, "US Dollar"),
  AUD: new Currency("AUD", 2, "Australian Dollar"),
  AED: new Currency("AED", 2, "Emirati Dirham"),
  BGN: new Currency("BGN", 2, "Bulgarian Lev"),
  CAD: new Currency("CAD", 2, "Canadian Dollar"),
  CNY: new Currency("CNY", 2, "Chinese Yuan Renminbi"),
  CZK: new Currency("CZK", 2, "Czech Koruna"),
  DKK: new Currency("DKK", 2, "Danish Krone"),
  EEK: new Currency("EEK", 2, "Estonian Kroon"),
  GBP: new Currency("GBP", 2, "British Pound"),
  HRK: new Currency("HRK", 2, "Croatian Kuna"),
  ISK: new Currency("ISK", 2, "Icelandic Krona"),
  JPY: new Currency("JPY", 2, "Japanese Yen"),
  LTL: new Currency("LTL", 2, "Lithuanian Litas"),
  LVL: new Currency("LVL", 2, "Latvian Lats"),
  NOK: new Currency("NOK", 2, "Norwegian Krone"),
  NZD: new Currency("NZD", 2, "New Zealand Dollar"),
  PLN: new Currency("PLN", 2, "Polish Zloty"),
  RON: new Currency("RON", 2, "Romanian New Leu"),
  RUB: new Currency("RUB", 2, "Russian Ruble"),
  SEK: new Currency("SEK", 2, "Swedish Krona"),
  SKK: new Currency("SKK", 2, "Slovak Koruna"),
  UAH: new Currency("UAH", 2, "Ukrainian Hryvnia"),
};

export const Languages = {
  Hungarian: new Language("hu", "Hungarian"),
  English: new Language("en", "English"),
  German: new Language("de", "German"),
  Italian: new Language("it", "Italian"),
  Romanian: new Language("ro", "Romanian"),
  Slovak: new Language("sk", "Slovak"),
};

export const PaymentMethods = {
  Cash: new PaymentMethod("Készpénz", "cash"),
  BankTransfer: new PaymentMethod("Átutalás", "bank transfer"),
  CreditCard: new PaymentMethod("Bankkártya", "credit card"),
  PayPal: new PaymentMethod("PayPal", "PayPal"),
  Stripe: new PaymentMethod("Stripe", "Stripe"),
  PayOp: new PaymentMethod("PayOp", "PayOp"),
  SimplePay: new PaymentMethod("SimplePay", "SimplePay"),
  Borgun: new PaymentMethod("Borgun", "Borgun"),
  PayPal1: new PaymentMethod("PayPal1", "PayPal1"),
  Stripe1: new PaymentMethod("Stripe1", "Stripe1"),
  PayPal1: new PaymentMethod("PayPalHU2", "PayPalHU2"),
  Stripe1: new PaymentMethod("StripeHU2", "StripeHU2"),
};

export const TaxSubjects = {
  NonEUCompany: new TaxSubject(7, "Company outside EU"),
  EUCompany: new TaxSubject(6, "Company within EU"),
  HungarianTaxID: new TaxSubject(1, "Has Hungarian VAT ID"),
  Unknown: new TaxSubject(0, "Unknown VAT status"),
  NoTaxID: new TaxSubject(-1, "Has no Hungarian VAT ID"),
};
