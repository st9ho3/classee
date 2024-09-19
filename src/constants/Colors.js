export const pickColor = (letter) => {
    switch (letter.toUpperCase()) {
      case 'A':
        return { backgroundColor: '#f9eac1', color: 'rgb(173, 130, 3)' };
      case 'B':
        return { backgroundColor: '#f1d4d4', color: 'rgb(158, 80, 80)' };
      case 'C':
        return { backgroundColor: '#e3d8f1', color: 'rgb(112, 70, 158)' };
      case 'D':
        return { backgroundColor: '#d4f1e3', color: 'rgb(65, 140, 100)' };
      case 'E':
        return { backgroundColor: '#f1f4d4', color: 'rgb(145, 145, 50)' };
      case 'F':
        return { backgroundColor: '#c9d4f1', color: 'rgb(60, 80, 160)' };
      case 'G':
        return { backgroundColor: '#e4f1d4', color: 'rgb(100, 145, 60)' };
      case 'H':
        return { backgroundColor: '#f4d4e4', color: 'rgb(160, 70, 115)' };
      case 'I':
        return { backgroundColor: '#d4f1f0', color: 'rgb(60, 160, 160)' };
      case 'J':
        return { backgroundColor: '#f1e4d4', color: 'rgb(160, 100, 60)' };
      case 'K':
        return { backgroundColor: '#e1f4d4', color: 'rgb(100, 160, 60)' };
      case 'L':
        return { backgroundColor: '#f1e8d4', color: 'rgb(160, 115, 60)' };
      case 'M':
        return { backgroundColor: '#d4f1f7', color: 'rgb(60, 120, 145)' };
      case 'N':
        return { backgroundColor: '#f4f0d4', color: 'rgb(145, 145, 80)' };
      case 'O':
        return { backgroundColor: '#e3f1d4', color: 'rgb(115, 160, 60)' };
      case 'P':
        return { backgroundColor: '#f1d4f0', color: 'rgb(160, 60, 145)' };
      case 'Q':
        return { backgroundColor: '#d4e3f1', color: 'rgb(60, 100, 160)' };
      case 'R':
        return { backgroundColor: '#f4d4d4', color: 'rgb(160, 60, 60)' };
      case 'S':
        return { backgroundColor: '#f1d4c9', color: 'rgb(160, 80, 60)' };
      case 'T':
        return { backgroundColor: '#e4f1f4', color: 'rgb(70, 145, 160)' };
      case 'U':
        return { backgroundColor: '#d4f1e4', color: 'rgb(60, 145, 100)' };
      case 'V':
        return { backgroundColor: '#f1e3d4', color: 'rgb(145, 100, 60)' };
      case 'W':
        return { backgroundColor: '#d4f7f1', color: 'rgb(60, 145, 120)' };
      case 'X':
        return { backgroundColor: '#f1d4d8', color: 'rgb(160, 60, 85)' };
      case 'Y':
        return { backgroundColor: '#f1f4d8', color: 'rgb(145, 145, 85)' };
      case 'Z':
        return { backgroundColor: '#d8d4f1', color: 'rgb(100, 60, 160)' };
      default:
        return { backgroundColor: '#ffffff', color: '#000000' }; // Default case for unsupported letters
    }
  };