import axios from "axios";

const url = "https://mock-api.driven.com.br/api/v4/driven-plus/";

function createHeaders() {
  const auth = JSON.parse(localStorage.getItem("drivenplus"));
  const config = {
    headers: {
      Authorization: `Bearer ${auth.token}`,
    },
  };
  return config;
}

function postSignUp(body) {
  const promise = axios.post(`${url}/auth/sign-up`, body);
  return promise;
}

function postLogin(body) {
  const promise = axios.post(`${url}/auth/login`, body);
  return promise;
}

function getSubscription() {
  const config = createHeaders();
  const promise = axios.get(`${url}/subscriptions/memberships`, config);
  return promise;
}

function getSubscriptionId(subId) {
  const config = createHeaders();
  const promise = axios.get(
    `${url}/subscriptions/memberships/${subId}`,
    config
  );
  return promise;
}

function postSubscription(body) {
  const promise = axios.post(`${url}/subscriptions`, body);
  return promise;
}

function postChangeSub(body) {
  const promise = axios.post(`${url}/subscriptions`, body);
  return promise;
}

function cancelSub() {
  const config = createHeaders();
  const promise = axios.delete(`${url}/subscriptions`, config);
  return promise;
}

function getUser(userId) {
  const config = createHeaders();
  const promise = axios.get(`${url}/users/${userId}`, config);
  return promise;
}

function putUser(body) {
  const promise = axios.put(`${url}/users`, body);
  return promise;
}

export {
  createHeaders,
  postSignUp,
  postLogin,
  getSubscription,
  getSubscriptionId,
  postSubscription,
  postChangeSub,
  cancelSub,
  getUser,
  putUser,
};
