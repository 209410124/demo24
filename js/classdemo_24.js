const showClassDemo = (week) => {
  const showDemo = document.querySelector('.banner-section');
  switch (week) {
    case 'w1':
      showDemo.innerHTML = `<iframe src='./w01/index.html' width="100%" height="100%" />`;
      break;
    case 'w1-md':
      showDemo.innerHTML = `<iframe src='./md/w01/w01_xx.html' width="100%" height="100%" />`;
      break;
    case 'w2':
      showDemo.innerHTML = `<iframe src='./w02-tictactoe/tictactoe_xx.html' width="100%" height="100%" />`;
      break;
    case 'w2-md':
      showDemo.innerHTML = `<iframe src='./md/w02/w02_xx.html' width="100%" height="100%" />`;
      break;
    case 'w3':
      showDemo.innerHTML = `<iframe src='./w03-review/' width="100%" height="100%" />`;
      break;
    case 'w3-md':
      showDemo.innerHTML = `<iframe src='./md/w03/w03_xx.html' width="100%" height="100%" />`;
      break;
    case 'w4':
      showDemo.innerHTML = `<iframe src='./w04-menu/' width="100%" height="100%" />`;
      break;
    case 'w4-md':
      showDemo.innerHTML = `<iframe src='./md/w04/w04_xx.html' width="100%" height="100%" />`;
      break;
    case 'w5-menu':
      showDemo.innerHTML = `<iframe src='./w05-menu/' width="100%" height="100%" />`;
      break;
    case 'w5-modal':
      showDemo.innerHTML = `<iframe src='.//w05-modal/v1/' width="100%" height="100%" />`;
      break;
    case 'w5-md':
      showDemo.innerHTML = `<iframe src='./md/w05/w05_xx.html' width="100%" height="100%" />`;
      break;
    case 'w6-p3':
      showDemo.innerHTML = `<iframe src='./w06-array/p3_xx/p3_xx.html' width="100%" height="100%" />`;
      break;
    case 'w6-md':
      showDemo.innerHTML = `<iframe src='./md/w06/w06_xx.html' width="100%" height="100%" />`;
      break;
    case 'w9-p1':
      showDemo.innerHTML = `<iframe src='./w09-midprep/p1_bmi_xx/p1_xx.html' width="100%" height="100%" />`;
      break;
    case 'w9-p2':
      showDemo.innerHTML = `<iframe src='./w09-midprep/p2_counter_xx/' width="100%" height="100%" />`;
      break;
    case 'w9-p3':
      showDemo.innerHTML = `<iframe src='./w09-midprep/p3_tour_xx/' width="100%" height="100%" />`;
      break;
    case 'w9-md':
      showDemo.innerHTML = `<iframe src='./md/w09/w09_xx.html' width="100%" height="100%" />`;
      break;
    case 'mid-p3':
      showDemo.innerHTML = `<iframe src='./midterm_xx/p3_xx/' width="100%" height="100%" />`;
      break;
    case 'mid-p3-md':
      showDemo.innerHTML = `<iframe src='./md/w09/w09_xx.html' width="100%" height="100%" />`;
      break;
      case 'w15':
        showDemo.innerHTML = `<iframe src='./w15/index.html' width="100%" height="100%" />`;
        break;
  }
};
