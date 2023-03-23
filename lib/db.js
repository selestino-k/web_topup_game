import mysql from 'mysql';

export async function query({ query, values = [] }) {
  // PlanetScale;
  const dbconnection = await mysql.createConnection(
    process.env.MYSQL_HOST,
    process.env.MYSQL_DATABASE,
    process.env.MYSQL_USER,
    process.env.MYSQL_PASSWORD,
  );

  try {
    const [results] = await dbconnection.execute(query, values);
    dbconnection.end();
    return results;
  } catch (error) {
    
    return { error };
  }
}