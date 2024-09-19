export const createDate = () => {
    const x = new Date();
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return x.toLocaleDateString('en-UK', options);
  };

  