const runner = () => {
  const a = 1;
  if (a === 1) {
    return 'asd'.split('').map((a) => {
      return a * 2;
    })
  }
  return a + 2;
}

runner();