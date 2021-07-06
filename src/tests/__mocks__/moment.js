// we use below code instead of importing moment from monent because that would just call our FAKE moment file and error out
// this makes sure we are calling the ACTUAL 'moment' library and not our FAKE 'moment' file 
const moment = require.requireActual('moment');


// this function ensures that we get back the current moment time stamp from the saved snapshot
// if not current moment instance then will defualt to zero 
// This solves issue of calling and creating NEW moment timestamp everytime test runs

export default (timestamp = 0) => {
    return moment(timestamp);
}