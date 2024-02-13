import URLTOCHANGE from "./routesToChange";

async function requiereUserBd(email = "null@null.null") {
  try {
    const response = await fetch(
      `${URLTOCHANGE.theUrl}/usuarios/?email=${email}`
    );
    const data = await response.json();
    // console.log("que fue la dataaaa: ", data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default requiereUserBd;
