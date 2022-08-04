import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="antialiased font-sans">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
