import axios from "axios";

// const requiereUserBd = async (email = "null@null.null") => {
async function requiereUserBd(email = "null@null.null") {
  try {
    const response = await axios(
      `http://localhost:3001/usuarios/?email=${email}`
    );
    const {data} = response;
    // const data = await response.json();
    // console.log("que fue DATA?: ", data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default requiereUserBd;
