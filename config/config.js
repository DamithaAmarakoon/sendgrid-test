const config = {};

config.web_port = process.env.HTTP_PORT;
config.server_path = process.env.SERVER_PATH;
config.api_key = process.env.SENDGRID_API_KEY;

module.exports = config;
