import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {CourseDetails} from '../Course/CourseDetails';

export default function AutoComplete() {

    function key_up(e){
        var enterKey = 13; //Key Code for Enter Key
        if (e.which == enterKey){
            //Do you work here //ise chor do :D main dekh lungi baad meinn ok :)
        }
    }
  return (
    <div style={{ width: 300 }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={CourseDetails.map((option) => option.courseTitle)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search Course"
            margin="normal"
            variant="outlined"
            onKeyUp="key_up(this)"
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
      />
    </div>
  );
}