import mysql from 'mysql';

export async function query({ query, values = [] }) {
  
  const dbconnection = await mysql.createConnection(
    process.env.MYSQL_HOST,
    process.env.MYSQL_DATABASE,
    process.env.MYSQL_USER,
    process.env.MYSQL_PASSWORD,
  );

  try {
    const [results] = await dbconnection.execute(query, values);
    dbconnection.end();
    console.log('Connected to MySQL database!');
    return results;
  } catch (error) {
    return { error };
  }
}