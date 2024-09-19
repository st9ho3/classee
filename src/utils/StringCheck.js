export const capitalizeWord = (word) => {
    if (!word) return word;
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
