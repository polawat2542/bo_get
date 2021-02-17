const axios = require('axios');

const users = [null]
axios.get('http://localhost:8000/api/users')
  .then((response)  => {
        // let id_sh = response.data[0].id;
        // let id_name = response.data[0].name;
        

        // console.log({id_sh , id_name});
        console.log(response.data);

  })
  