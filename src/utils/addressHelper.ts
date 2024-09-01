const addressPostcodeMap: { [key: string]: string } = {
  'Luton Airport, Luton': 'LU2 9NU',
  'Southbank Centre, London': 'SE1 8XX',
  'Temple Meads, Bristol': ' BS1 6QF',
  '69 Notting Hill Gate, London': 'W11 3JS',
};

const airportCodeMap: { [key: string]: string } = {
  'Luton Airport, Luton': 'LTN',
};

export function addressFormatter(address: string): string {
  const postcode = addressPostcodeMap[address];
  const airportCode = airportCodeMap[address];

  if (airportCode && postcode) {
    return `${airportCode}, ${postcode}`;
  } else if (postcode) {
    return `${address}, ${postcode}`;
  } else {
    return address;
  }
}
