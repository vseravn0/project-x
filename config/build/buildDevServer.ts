import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export const buildDevServer = (
    { port }:BuildOptions,
):DevServerConfiguration => ({
    open: true,
    historyApiFallback: true,
    port,
    hot: true,
});
