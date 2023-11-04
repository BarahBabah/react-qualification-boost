import path from "path";
import webpack, { HotModuleReplacementPlugin } from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import { BuildOptions } from "./types/config";
import miniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugins from "@pmmmwh/react-refresh-webpack-plugin";
export function buildPlugins({
  paths,
  isDev,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new miniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
    new ReactRefreshWebpackPlugins(),
    new webpack.HotModuleReplacementPlugin(),
    // if(isDev){
    //   plugins.push(new ReactRefreshWebpackPlugins());
    //   plugins.push(new webpack.HotModuleReplacementPlugin());
    // }
  ];
}
