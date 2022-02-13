import words from "./words";

const search = (excludeLetters, includeLetters, l1, l2, l3, l4, l5) => {
  let result = words;

  if (excludeLetters) {
    result = result.filter(
      (word) =>
        !word.split("").some((letter) => excludeLetters.includes(letter))
    );
  }

  if (includeLetters) {
    result = result.filter((word) =>
      word.split("").some((letter) => includeLetters.includes(letter))
    );
  }

  if (l1) {
    result = result.filter((word) => word[0] === l1);
  }

  if (l2) {
    result = result.filter((word) => word[1] === l2);
  }

  if (l3) {
    result = result.filter((word) => word[2] === l3);
  }

  if (l4) {
    result = result.filter((word) => word[3] === l4);
  }

  if (l5) {
    result = result.filter((word) => word[4] === l5);
  }

  return result;
};

export default search;
