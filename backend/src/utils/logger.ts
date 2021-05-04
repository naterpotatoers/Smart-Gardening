import { createLogger, format, transports } from 'winston'

const {Console} = transports;
const logger = createLogger({
    level: 'info',
});

const errorStackFormat = format((info) => {
    if(info.stac) {
        console.log(info.stack);
        return false;
    }
    return info;
});
const consoleTransport = new Console({
    format: format.combine(
        format.colorize(),
        format.simple(),
        errorStackFormat(),
    )
});
logger.add(consoleTransport);

export default logger;