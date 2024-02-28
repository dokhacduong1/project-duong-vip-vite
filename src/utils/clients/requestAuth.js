const API_DOMAIN = "http://34.124.230.237:2709/api/v1/client";
export const AuthPost = async (path, options, token, link = API_DOMAIN) => {
  const response = await fetch(link + path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`, // Thêm token vào header Authorization
    },
    body: JSON.stringify(options),
  });
  const result = await response.json();
  return result;
};


export const AuthDel = async (path, token, link = API_DOMAIN) => {

  const response = await fetch(link + path, {
    method: "DELETE",
    headers: {
      'Authorization': `Bearer ${token}`, // Thêm token vào header Authorization
    }

  });
  const result = await response.json();
  return result;
};

export const AuthPatch = async (path, options, token, link = API_DOMAIN) => {

  const response = await fetch(link + path, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`, // Thêm token vào header Authorization
    },
    body: JSON.stringify(options),
  });
  const result = await response.json();
  return result;
};