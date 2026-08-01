import neo4j, { Driver, Session } from "neo4j-driver";

const uri = process.env.NEO4J_URI!;
const user = process.env.NEO4J_USER!;
const password = process.env.NEO4J_PASSWORD!;

let driver: Driver | null = null;

export function getNeo4jDriver(): Driver {
  if (!driver) {
    driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
  }
  return driver;
}

export async function runCypher<T = unknown>(
  cypher: string,
  params: Record<string, unknown> = {}
): Promise<T[]> {
  const session: Session = getNeo4jDriver().session();
  try {
    const result = await session.run(cypher, params);
    return result.records.map((record) => record.toObject() as T);
  } finally {
    await session.close();
  }
}
