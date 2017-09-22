import axios from 'axios';

const STAGE_URL = 'https://stage.skipio.com';

const TOKEN = process.env.TOKEN;

import Promise from 'bluebird';

export function getContacts(page = 1, per = 100) {
  return axios.get(`${STAGE_URL}/api/v2/contacts?token=${TOKEN}&page=${page}&per=${per}`).then(res => res.data.data);
}


export function sendSMS(smsMessage) {
  return axios.post(`${STAGE_URL}/api/v2/messages?token=${TOKEN}`, smsMessage);
}
