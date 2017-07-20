import moment from 'moment'

const printDate = () => {
  let a = "hello"
  let hash = {a}
  document.write(moment().format('MMMM Do YYYY, h:mm:ss a'));
}


export default {printDate}
