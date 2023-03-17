// async function getEvents() {
//   const events = []
//   let page = 1

//   do {
//     const url = `https://api.github.com/users/aribaskar-jb/events?page=${page}`
//     var body = await fetch(url).then(res => res.json())
//     page++
//     events.push(...body)
//     console.log(events)
//   } while(!body.length)

//   return events
// }

// // (async () => {
// //   const events = await getEvents()

// //   console.log('Overall Events', events.length)
// //   console.log('PullRequests', events.filter(event => event.type === 'PullRequestEvent').length)
// //   console.log('Forks', events.filter(event => event.type === 'ForkEvent').length)
// //   console.log('Issues', events.filter(event => event.type === 'IssuesEvent').length)
// //   console.log('Reviews', events.filter(event => event.type === 'PullRequestReviewEvent').length)
// // })()
// // console.log(getEvents())
// async function getContributions(token, username) {
//     const headers = {
//         'Authorization': `bearer ${token}`,
//     }
//     const body = {
//         "query": `query {
//             user(login: "${username}") {
//               name
//               contributionsCollection {
//                 contributionCalendar {
//                   colors
//                   totalContributions
//                   weeks {
//                     contributionDays {
//                       color
//                       contributionCount
//                       date
//                       weekday
//                     }
//                     firstDay
//                   }
//                 }
//               }
//             }
//           }`
//     }
//     const response = await fetch('https://api.github.com/graphql', { method: 'POST', body: JSON.stringify(body), headers: headers })
//     const data = await response.json()
//     return data
// }

// const data =  getContributions('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', 'aribaskar-jb')
// let s;
// console.log(data.then((d)=>{
//  console.log(d.data.user.contributionsCollection.contributionCalendar)  
//   console.log(d)
// }))
//   console.log('PullRequests', events.filter(event => event.type === 'PullRequestEvent').length)
// 
//   console.log('PullRequests', events.filter(event => event.type === 'PullRequestEvent').length)user.

// You can use the github events api for that:

// Example (node.js)
// // const got = require('got')

// async function getEvents(username) {
//   const events = []
//   let page = 1

//   do {
//     const url = `https://api.github.com/users/${username}/events?page=${page}`
//     var { body } = await got(url, {
//       json: true
//     })
//     page++
//     events.push(...body)
//   } while(!body.length)

//   return events
// }

// (async () => {
//   const events = await getEvents('handtrix')

//   console.log('Overall Events', events.length)
//   console.log('PullRequests', events.filter(event => event.type === 'PullRequestEvent').length)
//   console.log('Forks', events.filter(event => event.type === 'ForkEvent').length)
//   console.log('Issues', events.filter(event => event.type === 'IssuesEvent').length)
//   console.log('Reviews', events.filter(event => event.type === 'PullRequestReviewEvent').length)
// })()

// Example (javascript)
async function getEvents(username) {
  const events = []
  let page = 1

  do {
    const url = `https://api.github.com/users/${username}/repos`
    var body = await fetch(url).then(res => res.json())
    page++
    events.push(...body)
  } while(!body.length)

  return events   
}

(async () => {
  const events = await getEvents('eziorobinhood')
events.map(getFullName);
let count = 0

function getFullName(item) {
  if(item.fork){
    let contributors_url = fetch(item.contributors_url)
    .then((res) => res.json())
    .then((result) => {
      let contu = result.map((res) => res.login)
      contu.forEach(element => {
        if (element == "eziorobinhood"){
          count+=1
          console.log(count)
          console.log(item)
        }
      }); 
    })
  }
}


})()