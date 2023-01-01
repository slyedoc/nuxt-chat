export default defineEventHandler((event) => {
    console.log('request: ' + event.node.req.url)
  })