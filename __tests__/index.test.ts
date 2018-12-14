import * as dotenv from "dotenv"

dotenv.config();

import { withLogger } from "../src/withLogger";

const err = new Error("Error in the handler")

const handler = (event: any) => {throw err};

const loggedHandler = withLogger(handler)

test('Calls the function', async () => {
  let a;
  try {
    a = await loggedHandler({})
  }
  catch(err){
    a = err
  }
  expect(a.message).toBe("Error in the handler")
});