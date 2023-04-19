const showClassDemo=(week)=>{
    const showDemo = document.querySelector('.banner-section');
    switch(week){
            case 'w1':
            showDemo.innerHTML=`<iframe src='w01/index.html'width="100% height="100%"/>`;
            break;
            case 'w1-md':
                showDemo.innerHTML=`<iframe src='w01/w01_24.html'width="100% height="100%"/>`;
                break;
            case 'w2':
            showDemo.innerHTML=`<iframe src='w02/tictactoe_24.html'width="100% height="100%"/>`;
            break;
            case 'w2-md':
            showDemo.innerHTML=`<iframe src='w02/w02_24.html'width="100% height="100%"/>`;
            break;
            case 'w3':
            showDemo.innerHTML=`<iframe src='w03/index.html'width="100% height="100%"/>`;
            break;
            case 'w3-md':
                showDemo.innerHTML=`<iframe src='w03/w03_24.html'width="100% height="100%"/>`;
                break;
            case 'w4':
            showDemo.innerHTML=`<iframe src='w04/index.html'width="100% height="100%"/>`;
            break;
            case 'w4-md':
            showDemo.innerHTML=`<iframe src='w04/w04_24.html'width="100% height="100%"/>`;
            break;
            case 'w5':
            showDemo.innerHTML=`<iframe src='w05/index.html'width="100% height="100%"/>`;
            break;
            case 'w5-md':
            showDemo.innerHTML=`<iframe src='w05/w05_24.html'width="100% height="100%"/>`;
            break;
            case 'w6-1':
            showDemo.innerHTML=`<iframe src='w06/p1_24/p1_24.html'width="100% height="100%"/>`;
            break;
            case 'w6-2':
            showDemo.innerHTML=`<iframe src='w06/p2_24/p2_24.html'width="100% height="100%"/>`;
            break;
            case 'w6-3':
            showDemo.innerHTML=`<iframe src='w06/p3_24/p3_24.html'width="100% height="100%"/>`;
            break;
            case 'p1':
            showDemo.innerHTML=`<iframe src='w09 midprep_stud_24/p1_bmi_24/p1_24.html'width="100% height="100%"/>`;
            break;
            case 'p2':
            showDemo.innerHTML=`<iframe src='w09 midprep_stud_24/p2_counter_24/index.html'width="100% height="100%"/>`;
            break;
            case 'p3':
            showDemo.innerHTML=`<iframe src='w09 midprep_stud_24/p3_tour_24/index.html'width="100% height="100%"/>`;
            break;
            
    }
   
}