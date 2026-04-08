type Faq = { title: string; content: string };

export const MAIN_FAQS: Faq[] = [];

export const MINERS_FAQS: Faq[] = [];

export const MAINTENANCE_FAQS: Faq[] = [];

export const POOLS_FAQS: Faq[] = [];

export const IP_SCANNER_FAQS: Faq[] = [];

export const FAQS: Faq[] = [...MAIN_FAQS, ...MINERS_FAQS, ...MAINTENANCE_FAQS, ...POOLS_FAQS, ...IP_SCANNER_FAQS];
