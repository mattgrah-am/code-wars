export class Kata {
  static dnaStrand(dna: string) {
    const dnaArr = dna.split("");
    dnaArr.forEach((el, idx) => {
      if (el === "A") dnaArr.splice(idx, 1, "T");
      if (el === "T") dnaArr.splice(idx, 1, "A");
      if (el === "C") dnaArr.splice(idx, 1, "G");
      if (el === "G") dnaArr.splice(idx, 1, "C");
    });
    return dnaArr.join("");
  }
}
