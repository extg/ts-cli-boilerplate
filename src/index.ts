import { parseArgv } from './argv'

const catchError = <T>(fn: () => Promise<T>) => () => fn().catch(console.error)

export const run = catchError(async () => {
  const argv = await parseArgv({
    usage: 'Usage: $0 [options]',
    options: ['verbose', 'debug'],
  })
  const { verbose, debug } = argv

  debug && console.log('Options:', argv)
  verbose && console.log('"--verbose" option passed')

  console.log('Edit src/index.js')
})
