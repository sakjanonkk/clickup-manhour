import 'dotenv/config'; // Ensure dotenv is loaded first
import axios from 'axios';

export async function req(url: string): Promise<any> {
  const apiKey = process.env.API_KEY;

  // if (!apiKey) {
  //   throw new Error('API_KEY is not defined in the environment variables.');
  // }

  const headers = {
    "Accept": "application/json",
    "Accept-Encoding": "gzip, deflate",
    "Authorization": "pk_270672565_PWDQQPPLGQ8BV47MEQZBZF2PXI743HJ8",
  };

  // console.log('env API_KEY:', apiKey);

  try {
    const response = await axios.get(url, { headers });
    // console.log('response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
