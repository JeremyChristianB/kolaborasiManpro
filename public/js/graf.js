const formGraf = document.getElementById("formGraf");
if(formGraf != null){
  formGraf.addEventListener("submit", onSubmitGraf);
}

function encodeURL(data){
    const ret = [];
    for (let d in data){
        ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
    }
    return ret.join('&');
  }

function onSubmitGraf(event){
  event.preventDefault();
  let formElements = event.currentTarget.elements;
  console.log(formElements[0].value);
  const obj = {book: formElements[0].value};
  console.log(obj);
  let str = encodeURL(obj);

  const init = {
    method: 'post',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: str
  };

  fetch('/feature_graph/graf',init)
  .then(res => {
    console.log(res.status);
    return res.text();
  })
  .then(result => {
    let resultJSON = JSON.parse(result);
    if(resultJSON.status == 'success'){
      console.log('sukses');
      // console.log(resultJSON);

      let arr1PreNodes = [];
      let arr1Nodes = [];
      let arrNodes = [];

      for(let i = 0; i < 20; i++){
        if(i < 10){
          arr1PreNodes[i] = resultJSON.arrSource[i];
        }
        else if(i >= 10){
          arr1PreNodes[i] = resultJSON.arrTarget[i-10];
        }
      }

      for(let value of arr1PreNodes){
        if(arr1Nodes.indexOf(value) === -1){
          arr1Nodes.push(value);
        }
      }

      for (let i = 0; i < arr1Nodes.length; i++) {
        arrNodes[i] = {id:arr1Nodes[i], label: arr1Nodes[i]};
      }

      let arr1PreEdges = [];
      let arr1Edges = [];
      let arrEdges = [];

      for (let i = 0; i < resultJSON.arrSource.length; i++) {
        arrEdges[i] = {from:resultJSON.arrSource[i], to:resultJSON.arrTarget[i]};
      }

      console.log(arrNodes);
      console.log(arrEdges);

      let nodes = new vis.DataSet(arrNodes);

      let edges = new vis.DataSet(arrEdges);

      let container = document.getElementById('mynetwork');

      let data = {
        nodes: nodes,
        edges: edges
      };

      let options = {};

      let network = new vis.Network(container,data,options);
    }
  })
}