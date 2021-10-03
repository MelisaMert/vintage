import * as React from 'react';

 function TestData(props) {
    console.log(props);
    return (
       <p>About</p>
    );
  }

  export async function getStaticProps(){
    let data = [{id:1, name:"a"},{id:2, name: "b"}];
    return {
      props: {x: data}
    }
  }

  export default TestData;

