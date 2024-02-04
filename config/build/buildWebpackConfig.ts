import webpack from "webpack";
import { BuildOptions } from "./types/config";

import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { buildLoaders } from './buildLoaders';
import { buildDevServer } from "./buildDevServer";


export const buildWebpackConfig = (options: BuildOptions):webpack.Configuration => {
    const {paths, mode,isDev} = options;
   return {
        mode,
        entry: paths.entry,
        output: {
            path: paths.build,
            filename: '[name].[contenthash].js',
            clean:true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        devtool: isDev ? 'inline-source-map' : undefined,
        resolve: buildResolvers() ,
        devServer: isDev ? buildDevServer(options) : undefined,
    }
}