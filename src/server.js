const Hapi = require("@hapi/hapi");
const routes = require("./routes");

const init = async () => {
  const server = Hapi.server({
    //Kriteria 1
    port: 9000,
    host: "localhost",
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  server.route(routes);
  //Kriteria 2 DONE
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
