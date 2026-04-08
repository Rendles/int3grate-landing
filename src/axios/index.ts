import axios from 'axios';

const COPPER_API_URL = process.env.NEXT_PUBLIC_COPPER_API_URL ?? '';
const ACCESS_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN ?? '';
const APPLICATION = process.env.NEXT_PUBLIC_APPLICATION ?? '';
const USER_EMAIL = process.env.NEXT_PUBLIC_USER_EMAIL ?? '';

export const sendData = (data: Record<string, unknown>) => {
  return axios({
    method: 'post',
    url: `${COPPER_API_URL}/developer_api/v1/leads`,
    data,
    headers: {
      'X-PW-AccessToken': ACCESS_TOKEN,
      'X-PW-Application': APPLICATION,
      'X-PW-UserEmail': USER_EMAIL,
      'Content-Type': 'application/json'
    }
  });
};
