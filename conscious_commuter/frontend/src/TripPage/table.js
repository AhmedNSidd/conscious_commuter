import React from 'react';
import MaterialTable from 'material-table';
import Cookies from 'universal-cookie';
import axios from 'axios';

const API_URL = 'http://localhost:8000';

export default function Table() {

    const cookies = new Cookies();
    const user_id = cookies.get('user');
    const url = `${API_URL}/api/get_user_info/${user_id}/`;
    let trips = [];
    axios.get(url).then(function(response) {
      trips = response["data"]["user_data"]["trips"];
      console.log(document.getElementById("tripsTable"));
    })
    

    const [state, setState] = React.useState({
      columns: [
        { title: 'Trip Name', field: 'name' },
        { title: 'Start', field: 'start' },
        { title: 'Destination', field: 'destination'},
        { title: 'Mode of Transport', field: 'mode_of_travel' },
        { title: 'Trip Distance', field: 'distance', type: 'numeric'},
        { title: 'Round Trip', field: 'roundtrip', type: 'boolean'},
        { title: 'Number of Trips in a Week', field: 'number_of_trips_in_a_week', type: 'numeric'}
      ],
      data: trips,
    });
  
    return (
      <MaterialTable
        style = {{marginLeft:"40px", marginRight:"40px"}}
        title="My Regular Trips"
        columns={state.columns}
        data={state.data}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                setState(prevState => {
                  let x = axios.post(`${API_URL}/api/trips/${user_id}/`, newData);
                  console.log(x);
                  const data = [...prevState.data];
                  data.push(newData);
                  return { ...prevState, data };
                });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  setState(prevState => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                }
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                setState(prevState => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };
                });
              }, 600);
            }),
        }}
      />
    );



}