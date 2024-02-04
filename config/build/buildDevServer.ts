import { Configuration as DevServerConfiguration} from "webpack-dev-server";
import { BuildOptions } from "./types/config";

export const buildDevServer = ({port}:BuildOptions):DevServerConfiguration => {
    return {
        open: true,
        historyApiFallback: true,
        port,
    }
}