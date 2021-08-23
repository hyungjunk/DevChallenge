module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      { source: "/worlds", destination: "/" },
      { source: "/vaccine", destination: "/" },
      { source: "/faq", destination: "/" },
      { source: "/social-distancing", destination: "/" },
      {
        source: "/:route/:key",
        destination: `http://openapi.data.go.kr/openapi/service/rest/Covid19/:route?serviceKey=:key`,
      },
    ];
  },
};
