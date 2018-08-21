
const sleep = (ms) =>{ new Promise(resolve => setTimeout(resolve, ms))}

const asyncValidate = (values/*, dispatch */) => {
  return sleep(1000) // simulate server latency
    .then(() => {
      if ([ 'root', 'admin', 'hello', 'ringo' ].includes(values.username)) {
        throw { username: 'That username is taken' }
      }
    })
}