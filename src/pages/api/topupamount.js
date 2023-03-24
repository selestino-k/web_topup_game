import {query} from '/lib/db';

export default async function handler(req, res) {
    if (req.method === "GET" ) {
        const userorder = await query({
            query:"SELECT * FROM userorder",
            values :[],
        });
    
    res.status(200).json ({ topup_game: userorder });
  }
}
  