const solution = (str) => {
  if (!str) return [];
  console.log(str.length);
  const arr = str.match(/.{2}/g);
  const last = str.length % 2 !== 0 ? [`${str.slice(-1)}_`] : [];
  return arr.length > 15 ? arr : arr.concat(last);
};

console.log(
  solution(
    "XuRpRiWPVAKpSdPLXealijIndrQIEtKOTQZagyaYPdDRfcsaJxokJlbvDUYbWNBTVkqLAPIvpOIgFDYdiDAUAzcDjuzedlEaGLDEbrUoGmxLDJAQkANySZWnPpIEcoddwuVhUfFhDCbKMRDLJdqXiJDJYXFWLjbPLHikeScMWBiIUvmQVVHCRNQCxaLMqexzdTmChUcDVvQolnPwKcPTryDPqTIFaEezTdvZbAjvA",
  ),
);
