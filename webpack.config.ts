import { resolve } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { VueLoaderPlugin } from 'vue-loader'
import Components from 'unplugin-vue-components/webpack'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import type { Configuration } from 'webpack'

const mode: 'production' | 'development' =
  (process.env.MODE as any) ?? 'development'

const config: Configuration = {
  mode,
  entry: {
    app: resolve('src', 'main.ts'),
  },
  resolve: {
    extensions: ['.ts', '.js', '.mjs', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.mjs$/i,
        resolve: { byDependency: { esm: { fullySpecified: false } } },
      },
      { test: /\.vue$/, loader: 'vue-loader' },
      {
        test: /\.m?[tj]s$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
    }),
    Components({
      resolvers: [ElementPlusResolver({})],
      dts: resolve('src', 'components.d.ts'),
    }),
  ],
}

export default config
