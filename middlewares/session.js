import NextCors from 'nextjs-cors';

function  NextApiHandler() {
   
  return async function nextApiHandlerWrappedWithNextCors(req, res) {

    const methods = ['GET', 'HEAD', 'PUT', 'PATCH', 'OPTIONS','POST', 'DELETE'];
    await NextCors(req, res, {
      methods,
      origin: CORS_ALLOWED_ORGIN,
      optionsSuccessStatus: 200,
    });

    return handler(req, res);
  };
}
export default NextApiHandler;