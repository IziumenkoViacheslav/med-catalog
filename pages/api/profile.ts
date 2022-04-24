import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';


export default withApiAuthRequired(async (req, res) => {
  const { user } = getSession(req, res)
  
  res.send({result: 'success', user})
})

