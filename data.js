import axios from "axios";

export const getRandomUser = async () => {
  const data = await axios.get(
    "https://random-data-api.com/api/users/random_user?size=3"
  );
  return data.data;
};
