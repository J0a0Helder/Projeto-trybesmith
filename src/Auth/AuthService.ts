const auth = {
  secret: String(process.env.JWT_SECRET),
  expires: '1d',
};

export default auth;

// site que usei como base: https://dev.to/vitordelfino/autenticacao-com-jwt-22o7