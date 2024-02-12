import { URLTOCHANGE } from "./Routes.helper";


async function requiereUserBd(email = "null@null.null") {
  try {
    const response = await fetch(
      `${URLTOCHANGE}/usuarios/?email=${email}`
    );
    const data = await response.json();
    // console.log("que fue la dataaaa: ", data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default requiereUserBd;
