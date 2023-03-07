const runner = () => {
  const a = 1;
  if (a === 1) {
    return 'asd'.split('').map((a) => {
      return a * 2;
    })
  } else {
    console.log('yoooo')
  }
  return a + 2;
}

runner();