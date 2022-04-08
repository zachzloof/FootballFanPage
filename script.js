'use strict'


//DOMS
const inputOne = document.getElementById(`input_1`);
const output = document.getElementById(`output`)
const buttonGet = document.getElementById(`buttonGet`);
const listOutput = document.querySelector(`ol`);
const buttonGetList = document.getElementById(`buttonGetList`);
 const options = {
        method: 'GET',
        url: 'https://free-football-soccer-videos.p.rapidapi.com',
        headers: {
          'X-RapidAPI-Host': 'free-football-soccer-videos.p.rapidapi.com',
          'X-RapidAPI-Key': '9afc597e5dmsh4e5488f8178eaf3p110fcejsnca1133eed058'
        }
      };
      let response1 = [];
let read = () => {
    
      axios.request(options).then(function (response) {
           //console.log((response.data));
          response1 = (response.data);
          listOutput.innerHTML = (JSON.stringify(response1[(inputOne.value)-1].title));
            console.log(response.data[(inputOne.value)-1])
          output.innerHTML = (JSON.stringify((response.data[(inputOne.value)-1]).videos[0].embed));
      }).catch(function (error) {
          console.error(error);
      });
     
    


    // const input = "https://free-football-soccer-videos.p.rapidapi.com/"
    // console.log(options);
    // axios
    // .get(options)
    //     .then(response => {
    //         output.innerHTML = JSON.stringify(response.data);

    //     }).catch(err => {
    //         console.error(err);
    //     })
    //document.getElementById(`fieldset1`).appendChild(input);
}
let get = () => {
    let response1 = [];
    axios.request(options).then(function (response) {
        //console.log((response.data));
       response1 = (response.data);
       for (let i = 0; i < response1.length; i++) {
         
         console.log(response1[i].title)
         output.innerHTML = response1[i].title;
     }
       output.innerHTML = (JSON.stringify(response.data[inputOne.value]));
   }).catch(function (error) {
       console.error(error);
   });
}
const writeItem = item => {
    let child = document.createElement(`li`);
    child.innerHTML = `${JSON.stringify(item)}`;
    listOutput.appendChild(child);
    // setTimeout(function() {
    //   child = child + " fade show";
    // }, 10);
    // setTimeout();
  }
  const list = () => {
    listOutput.innerHTML = ``;
  
      axios.request(options).then(function (response) {
        //console.log((response.data));
       response1 = (response.data);
       for (let i = 0; i < response1.length; i++) {
         
         writeItem(response1[i].title)
     }
       output.innerHTML = (JSON.stringify(response.data[inputOne.value]));
   }).catch(function (error) {
       console.error(error);
   });
  }

buttonGet.onclick = () => read();
buttonGetList.onclick = () => list();




